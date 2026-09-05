/**
 * STEMULAR Account Settings & Dashboard Controller
 */

// Global Account Schema (Template for local state & future DB payload)
const defaultAccountData = {
    username: "guest_user",
    email: "guest@stemular.edu",
    dailyLessonEnabled: false,
    dailyLessonPopup: false,
    dailyLessonStreak: 0,
    longestStreak: 0,
    todayLessonCompleted: false,
    quizzesCompleted: 0,
    totalQuizzes: 1909,
    quizPoints: 0,
    highestQuizScore: 0,
    recentPointsEarned: 0,
    passwordStatus: "Protected (Last changed 30 days ago)",
    lastLogin: "Today at 10:30 AM (Current Device)"
};

const STORAGE_KEY = "stemular_account_data_v4";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize & Load Account Data
    let accountData = loadAccountData();
    renderAccountData(accountData);

    // 2. Interactive Controls Setup
    setupUsernameEditing(accountData);
    setupDailyLessonToggles(accountData);
    setupLogoutModal();
    setupParallaxBlobs();
});

/**
 * Loads data from localStorage or fallback
 */
function loadAccountData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Error reading stored account data, falling back to default.", e);
        }
    }
    return { ...defaultAccountData };
}

/**
 * Persists data model to storage
 */
function saveAccountData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Renders state object onto the DOM
 */
function renderAccountData(data) {
    // Header & Profile
    document.getElementById("header-username-display").textContent = data.username;
    document.getElementById("username-input").value = data.username;
    document.getElementById("email-input").value = data.email;

    // Daily Lesson Controls
    const mainToggle = document.getElementById("daily-lesson-toggle");
    const popupToggle = document.getElementById("daily-popup-toggle");
    
    mainToggle.checked = data.dailyLessonEnabled;
    popupToggle.checked = data.dailyLessonPopup;
    updatePopupToggleState(data.dailyLessonEnabled);

    // Streaks
    document.getElementById("current-streak-val").textContent = data.dailyLessonStreak;
    document.getElementById("longest-streak-val").textContent = `${data.longestStreak} Days`;
    document.getElementById("today-lesson-status").textContent = data.todayLessonCompleted ? "Completed" : "Pending";

    // Quiz Progress & Calculation
    const completed = Number(data.quizzesCompleted) || 0;
    const total = Number(data.totalQuizzes) || 1909; // Fallback to 1909 if total is not set
    const percentage = Math.round((completed / total) * 10000) / 100; // Round to 2 decimal places

    document.getElementById("quiz-ratio-text").textContent = `${completed} / ${total} Quizzes Completed`;
    document.getElementById("quiz-percentage-text").textContent = `${percentage}%`;
    
    // Animate Progress Bar
    setTimeout(() => {
        document.getElementById("quiz-progress-fill").style.width = `${percentage}%`;
    }, 100);

    // Quiz Points
    document.getElementById("quiz-points-val").textContent = Number(data.quizPoints).toLocaleString();
    document.getElementById("highest-score-val").textContent = `${data.highestQuizScore} pts`;
    document.getElementById("recent-earned-val").textContent = `+${data.recentPointsEarned} pts`;

    // Security Info
    document.getElementById("password-status-val").textContent = data.passwordStatus;
    document.getElementById("last-login-val").textContent = data.lastLogin;
}

/**
 * Handles Nickname / Username Edit toggles
 */
function setupUsernameEditing(data) {
    const input = document.getElementById("username-input");
    const editBtn = document.getElementById("edit-username-btn");
    const saveBtn = document.getElementById("save-username-btn");
    const headerDisplay = document.getElementById("header-username-display");

    editBtn.addEventListener("click", () => {
        input.removeAttribute("readonly");
        input.focus();
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-flex";
    });

    saveBtn.addEventListener("click", () => {
        const newUsername = input.value.trim();
        if (newUsername.length > 0) {
            data.username = newUsername;
            headerDisplay.textContent = newUsername;
            saveAccountData(data);
        } else {
            input.value = data.username;
        }
        input.setAttribute("readonly", true);
        saveBtn.style.display = "none";
        editBtn.style.display = "inline-flex";
    });
}

/**
 * Handles Daily Lesson & Pop-Up Switch states
 */
function setupDailyLessonToggles(data) {
    const mainToggle = document.getElementById("daily-lesson-toggle");
    const popupToggle = document.getElementById("daily-popup-toggle");

    mainToggle.addEventListener("change", (e) => {
        const isEnabled = e.target.checked;
        data.dailyLessonEnabled = isEnabled;
        updatePopupToggleState(isEnabled);
        saveAccountData(data);
    });

    popupToggle.addEventListener("change", (e) => {
        data.dailyLessonPopup = e.target.checked;
        saveAccountData(data);
    });
}

/**
 * Toggles visibility / availability of Pop-Up settings
 */
function updatePopupToggleState(isMainEnabled) {
    const popupRow = document.getElementById("popup-setting-row");
    const popupInput = document.getElementById("daily-popup-toggle");

    if (isMainEnabled) {
        popupRow.classList.remove("disabled-setting");
        popupInput.disabled = false;
    } else {
        popupRow.classList.add("disabled-setting");
        popupInput.disabled = true;
    }
}

/**
 * Handles Logout confirmation flow
 */
function setupLogoutModal() {
    const logoutBtn = document.getElementById("logout-btn");
    const modal = document.getElementById("logout-modal");
    const cancelBtn = document.getElementById("cancel-logout-btn");
    const confirmBtn = document.getElementById("confirm-logout-btn");

    logoutBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    cancelBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    confirmBtn.addEventListener("click", () => {
        // Clear active session flags without deleting user preferences
        localStorage.removeItem("stemular_auth_token");
        sessionStorage.clear();

        // Redirect to Login page (or Home page if login doesn't exist)
        window.location.href = "login.html";
    });
}

/**
 * Background Parallax Lava Blob behavior matching Main Page
 */
function setupParallaxBlobs() {
    const blobs = document.querySelectorAll(".blob");
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const moveX = (x * speed) - (speed / 2);
            const moveY = (y * speed) - (speed / 2);
            blob.style.marginLeft = `${moveX}px`;
            blob.style.marginTop = `${moveY}px`;
        });
    });
}

const chatLink = document.getElementById('ai-chat-link');
const modal = document.getElementById('notice-modal');
const closeBtn = document.getElementById('close-modal-btn');
const modalText = document.querySelector('.modal-text'); // Grab the text paragraph inside modal

// Helper function to open modal with custom message
const openModal = (featureName) => {
    if (modalText) {
        if (featureName) {
            modalText.textContent = `The ${featureName} feature isn't available yet. Check back soon for updates!`;
        } else {
            modalText.textContent = `The AI Chat feature isn't available yet. Check back soon for updates!`;
        }
    }
    modal.classList.add('active');
};

if (modal && closeBtn) {
    // 1. Open Modal on Sidebar AI Chat Click
    if (chatLink) {
        chatLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('AI Chat');
        });
    }

    // 2. Open Modal on Dynamic Result Buttons ("Simulate" or "Ask AI") using Event Delegation
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('notice-trigger-btn')) {
            e.preventDefault();
            const featureName = e.target.getAttribute('data-feature');
            openModal(featureName);
        }
    });

    // Close Modal on Button Click
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close Modal on Clicking Outside Card
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}
