/**
 * STEMULAR AI Chat System
 * Handles interface events, state management, local storage history, and backend prep.
 */

// ===============================
// AI MODE
// ===============================
// true  = use mock AI
// false = use backend AI
const USE_MOCK_AI = true;

// Global State
let conversations = [];
let currentConversationId = null;
let appSettings = {
    theme: 'standard',
    enterToSend: true
};

// DOM Elements
const chatSidebar = document.getElementById('chat-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
const newChatBtn = document.getElementById('new-chat-btn');
const mobileNewChatBtn = document.getElementById('mobile-new-chat-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const messageStream = document.getElementById('message-stream');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const settingsModal = document.getElementById('settings-modal');
const openSettingsBtn = document.getElementById('open-settings-btn');
const headerSettingsBtn = document.getElementById('header-settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const enterSendToggle = document.getElementById('enter-send-toggle');
const historySearch = document.getElementById('history-search');
const toast = document.getElementById('toast-notification');

// Initialize Application
 document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadSettings();
    initializeTheme();
    initializeNavigation();
    initializeChatInput();
    loadChatHistory();
    createNewChat(false); // Prepare initial state
    askAboutRequestedTerm();
}

function askAboutRequestedTerm() {
    const term = new URLSearchParams(window.location.search).get('term')?.trim();

    if (!term) return;

    chatInput.value = `What is ${term}?`;
    handleInputChange();
    handleSendMessage();
}

// — Theme Management —
function initializeTheme() {
    const savedTheme = localStorage.getItem('stemular-theme') || 'standard';
    applyTheme(savedTheme);

    document.querySelectorAll('.theme-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const theme = e.currentTarget.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('dark-theme', 'light-theme');
    document.body.classList.remove('dark-theme', 'light-theme');

    if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
    }

    localStorage.setItem('stemular-theme', theme);
    appSettings.theme = theme;

    // Update Theme Modal Cards UI
    document.querySelectorAll('.theme-card').forEach(card => {
        if (card.getAttribute('data-theme') === theme) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// — Navigation & Sidebar Control —
function initializeNavigation() {
    let sidebarCloseTimer;
    const desktopSidebar = window.matchMedia('(min-width: 769px)');

    const cancelSidebarClose = () => {
        window.clearTimeout(sidebarCloseTimer);
    };

    const expandSidebar = () => {
        cancelSidebarClose();
        chatSidebar.classList.remove('is-collapsed');
    };

    const scheduleSidebarClose = () => {
        cancelSidebarClose();
        sidebarCloseTimer = window.setTimeout(() => {
            chatSidebar.classList.add('is-collapsed');
        }, 10000);
    };

    const updateDesktopSidebarBehavior = () => {
        cancelSidebarClose();
        chatSidebar.classList.remove('is-collapsed');

        if (desktopSidebar.matches && !chatSidebar.matches(':hover')) {
            scheduleSidebarClose();
        }
    };

    chatSidebar.addEventListener('mouseenter', expandSidebar);
    chatSidebar.addEventListener('mouseleave', () => {
        if (desktopSidebar.matches) scheduleSidebarClose();
    });
    desktopSidebar.addEventListener('change', updateDesktopSidebarBehavior);
    updateDesktopSidebarBehavior();

    mobileMenuToggle.addEventListener('click', () => {
        chatSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });

    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarCloseBtn.addEventListener('click', () => {
        if (desktopSidebar.matches) {
            cancelSidebarClose();
            chatSidebar.classList.add('is-collapsed');
            return;
        }

        closeSidebar();
    });

    newChatBtn.addEventListener('click', () => createNewChat(true));
    mobileNewChatBtn.addEventListener('click', () => {
        createNewChat(true);
        closeSidebar();
    });

    // Modal controls
    openSettingsBtn.addEventListener('click', openSettings);
    headerSettingsBtn.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    saveSettingsBtn.addEventListener('click', closeSettings);

    clearHistoryBtn.addEventListener('click', clearAllHistory);

    // Prompt card triggers
    document.querySelectorAll('.prompt-card').forEach(card => {
        card.addEventListener('click', () => {
            const promptText = card.getAttribute('data-prompt');
            chatInput.value = promptText;
            handleInputChange();
            handleSendMessage();
        });
    });

    // History Search
    historySearch.addEventListener('input', (e) => filterHistory(e.target.value));
}

function closeSidebar() {
    chatSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// — Input Handling & Auto-Grow —
function initializeChatInput() {
    chatInput.addEventListener('input', () => {
        handleInputChange();
        chatInput.style.height = 'auto';
        chatInput.style.height = Math.min(chatInput.scrollHeight, 180) + 'px';
    });

    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && appSettings.enterToSend) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSendMessage();
    });
}

function handleInputChange() {
    sendBtn.disabled = chatInput.value.trim().length === 0;
}

// — Chat Core Logic —
async function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Transition out welcome screen if present
    welcomeScreen.style.display = 'none';

    // Append User Message
    renderMessage('user', text);

    // Reset Input
    chatInput.value = '';
    chatInput.style.height = 'auto';
    sendBtn.disabled = true;

    // Record message in history state
    let activeConv = conversations.find(c => c.id === currentConversationId);
    if (!activeConv) {
        activeConv = createConversationObject(text.slice(0, 30) + '...');
        conversations.unshift(activeConv);
        currentConversationId = activeConv.id;
    }
    activeConv.messages.push({ role: 'user', content: text });
    saveConversationsToStorage();
    renderSidebarHistory();

    // Show AI Typing Indicator
    const typingRow = renderTypingIndicator();

    // Fetch AI Response (Prepared for backend endpoint)
    try {
        const response = await sendMessageToAI(text, activeConv.messages);
        typingRow.remove();
        renderMessage('ai', response.reply);
        activeConv.messages.push({ role: 'ai', content: response.reply });
        saveConversationsToStorage();
    } catch (error) {
        typingRow.remove();
        renderMessage('ai', 'Sorry, I encountered an error processing your request. Please try again.');
    }
}

// — Backend API Communication Structure —
async function sendMessageToAI(message, conversationHistory) {
    // Use mock AI for prototype testing
    if (USE_MOCK_AI) {
        const reply = generateMockStemResponse(message);

        const responseLengthFactor = Math.min(reply.length / 600, 1);
        const responseDelay = 5000 + Math.round(responseLengthFactor * 3000);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ reply });
            }, responseDelay);
        });
    }

    // Use real backend
    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            conversation: conversationHistory
        })
    });

    if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
    }

    return await response.json();
}

// — Mock STEM Response Generator —
// Prototype response database for STEMULAR. Each listed term has a formal,
// detailed mock response. This is intended for frontend testing before a real AI backend is connected.
function generateMockStemResponse(query) {
    if (window.StemAI && typeof window.StemAI.respond === 'function') {
        return window.StemAI.respond(query);
    }

    return `### STEMULAR Response

I couldn't find a matching term in the STEMULAR knowledge library.

Try asking about a specific concept from Mathematics, Physics, Biology,
Chemistry, Earth Science, Computer Science, or Engineering.`;
}

// — Message Rendering —
function renderMessage(role, text) {
    const row = document.createElement('div');
    row.className = `message-row ${role}-row`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = role === 'ai' ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>';

    const content = document.createElement('div');
    content.className = 'message-content';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = formatMarkdown(text);

    content.appendChild(bubble);

    if (role === 'ai') {
        const actions = document.createElement('div');
        actions.className = 'message-actions';
        actions.innerHTML = `
            <button class="action-btn copy-btn" title="Copy response"><i class="fa-regular fa-copy"></i> Copy</button>
            <button class="action-btn" title="Regenerate"><i class="fa-solid fa-rotate-right"></i></button>
            <button class="action-btn" title="Good response"><i class="fa-regular fa-thumbs-up"></i></button>
            <button class="action-btn" title="Bad response"><i class="fa-regular fa-thumbs-down"></i></button>
        `;

        actions.querySelector('.copy-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(text);
            showToast('Copied to clipboard!');
        });

        content.appendChild(actions);
    }

    row.appendChild(avatar);
    row.appendChild(content);

    messageStream.appendChild(row);
    scrollToBottom();
    return row;
}

function renderTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'message-row ai-row';
    row.innerHTML = `
        <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="message-content">
            <div class="message-bubble typing-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    messageStream.appendChild(row);
    scrollToBottom();
    return row;
}

function formatMarkdown(input) {
    const text = String(input || '').replace(/\r\n/g, '\n').trim();

    const escapeHtml = (value) => value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const formatInline = (value) => escapeHtml(value)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    const isTableRow = (value) => /^\|.+\|\s*$/.test(value.trim());
    const isTableDivider = (value) => /^\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?$/.test(value.trim());
    const parseTableRow = (value) => value.trim()
        .replace(/^\|\s*|\s*\|$/g, '')
        .split('|')
        .map((cell) => formatInline(cell.trim()));

    const lines = text.split('\n');
    const blocks = [];

    for (let index = 0; index < lines.length;) {
        const line = lines[index].trim();

        if (!line) {
            index += 1;
            continue;
        }

        const heading = line.match(/^(#{1,3})\s+(.+)$/);
        if (heading) {
            const level = heading[1].length;
            blocks.push(`<h${level}>${formatInline(heading[2])}</h${level}>`);
            index += 1;
            continue;
        }

        const sectionHeading = line.match(/^\*\*(.+?):\*\*$/);
        if (sectionHeading) {
            blocks.push(`<h4>${formatInline(sectionHeading[1])}:</h4>`);
            index += 1;
            continue;
        }

        if (isTableRow(line) && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
            const headers = parseTableRow(line);
            const rows = [];
            index += 2;

            while (index < lines.length && isTableRow(lines[index])) {
                const cells = parseTableRow(lines[index]);
                rows.push(`<tr>${headers.map((_, cellIndex) => `<td>${cells[cellIndex] || ''}</td>`).join('')}</tr>`);
                index += 1;
            }

            blocks.push(
                `<div class="table-wrapper"><table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>` +
                `<tbody>${rows.join('')}</tbody></table></div>`
            );
            continue;
        }

        if (/^[A-D]\.\s+/i.test(line)) {
            const items = [];
            while (index < lines.length && /^[A-D]\.\s+/i.test(lines[index].trim())) {
                items.push(`<li>${formatInline(lines[index].trim().replace(/^[A-D]\.\s+/i, ''))}</li>`);
                index += 1;
            }
            blocks.push(`<ol class="answer-options" type="A">${items.join('')}</ol>`);
            continue;
        }

        if (/^\d+\.\s+/.test(line)) {
            const items = [];
            while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
                items.push(`<li>${formatInline(lines[index].trim().replace(/^\d+\.\s+/, ''))}</li>`);
                index += 1;
            }
            blocks.push(`<ol>${items.join('')}</ol>`);
            continue;
        }

        if (/^[-*]\s+/.test(line)) {
            const items = [];
            while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
                items.push(`<li>${formatInline(lines[index].trim().replace(/^[-*]\s+/, ''))}</li>`);
                index += 1;
            }
            blocks.push(`<ul>${items.join('')}</ul>`);
            continue;
        }

        const paragraph = [];
        while (index < lines.length) {
            const paragraphLine = lines[index].trim();
            if (!paragraphLine || /^(#{1,3})\s+/.test(paragraphLine) ||
                /^\*\*(.+?):\*\*$/.test(paragraphLine) || /^\d+\.\s+/.test(paragraphLine) ||
                /^[A-D]\.\s+/i.test(paragraphLine) || /^[-*]\s+/.test(paragraphLine)) {
                break;
            }
            paragraph.push(paragraphLine);
            index += 1;
        }
        blocks.push(`<p>${formatInline(paragraph.join(' '))}</p>`);
    }

    return blocks.join('');
}

function scrollToBottom() {
    const container = messageStream || document.getElementById('messages-container');
    if (!container) return;
    container.scrollTop = container.scrollHeight;
}

// — History & State Management —
function createNewChat(resetUI = true) {
    currentConversationId = 'conv_' + Date.now();
    if (window.StemAI && typeof window.StemAI.resetPractice === 'function') {
        window.StemAI.resetPractice();
    }
    if (resetUI) {
        messageStream.innerHTML = '';
        welcomeScreen.style.display = 'flex';
        document.getElementById('active-chat-title').textContent = 'STEMULAR AI';
    }
}

function createConversationObject(title) {
    return {
        id: currentConversationId || 'conv_' + Date.now(),
        title: title,
        timestamp: Date.now(),
        messages: []
    };
}

function saveConversationsToStorage() {
    localStorage.setItem('stemular_ai_chats', JSON.stringify(conversations));
}

function loadChatHistory() {
    const stored = localStorage.getItem('stemular_ai_chats');
    if (stored) {
        try {
            conversations = JSON.parse(stored);
            renderSidebarHistory();
        } catch (e) {
            conversations = [];
        }
    }
}

function renderSidebarHistory() {
    const itemsToday = document.getElementById('items-today');
    const itemsYesterday = document.getElementById('items-yesterday');
    const itemsPrevious = document.getElementById('items-previous');

    if (!itemsToday || !itemsYesterday || !itemsPrevious) return;

    itemsToday.innerHTML = '';
    itemsYesterday.innerHTML = '';
    itemsPrevious.innerHTML = '';

    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    conversations.forEach(conv => {
        const el = document.createElement('div');
        el.className = `history-item ${conv.id === currentConversationId ? 'active' : ''}`;
        el.innerHTML = `
            <span><i class="fa-regular fa-message"></i> ${conv.title}</span>
            <button class="delete-chat-btn" data-id="${conv.id}"><i class="fa-solid fa-trash"></i></button>
        `;

        el.addEventListener('click', (e) => {
            if (e.target.closest('.delete-chat-btn')) return;
            loadConversation(conv.id);
            closeSidebar();
        });

        el.querySelector('.delete-chat-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteConversation(conv.id);
        });

        const diff = now - conv.timestamp;
        if (diff < oneDay) {
            itemsToday.appendChild(el);
        } else if (diff < 2 * oneDay) {
            itemsYesterday.appendChild(el);
        } else {
            itemsPrevious.appendChild(el);
        }
    });
}

function loadConversation(id) {
    const conv = conversations.find(c => c.id === id);
    if (!conv) return;

    currentConversationId = conv.id;
    messageStream.innerHTML = '';
    welcomeScreen.style.display = 'none';
    document.getElementById('active-chat-title').textContent = conv.title;

    conv.messages.forEach(msg => {
        renderMessage(msg.role, msg.content);
    });

    renderSidebarHistory();
}

function deleteConversation(id) {
    conversations = conversations.filter(c => c.id !== id);
    saveConversationsToStorage();

    if (currentConversationId === id) {
        createNewChat(true);
    }

    renderSidebarHistory();
}

function filterHistory(searchTerm) {
    const term = searchTerm.toLowerCase();
    document.querySelectorAll('.history-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'flex' : 'none';
    });
}

function clearAllHistory() {
    conversations = [];
    saveConversationsToStorage();
    createNewChat(true);
    renderSidebarHistory();
    closeSettings();
    showToast('Chat history cleared!');
}

// — Settings & UI Utilities —
function openSettings() {
    settingsModal.classList.add('active');
}

function closeSettings() {
    settingsModal.classList.remove('active');
}

function loadSettings() {
    const saved = localStorage.getItem('stemular_settings');
    if (saved) {
        try {
            appSettings = JSON.parse(saved);
            enterSendToggle.checked = appSettings.enterToSend;
        } catch (e) {
            // Ignore malformed saved settings.
        }
    }

    enterSendToggle.addEventListener('change', (e) => {
        appSettings.enterToSend = e.target.checked;
        localStorage.setItem('stemular_settings', JSON.stringify(appSettings));
    });
}

function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

