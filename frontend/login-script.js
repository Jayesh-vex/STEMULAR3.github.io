// Updated login-script.js
document.addEventListener('DOMContentLoaded', () => {
  const alertBox = document.getElementById('alert-box');
  const authForm = document.getElementById('auth-form');
  const submitBtn = document.getElementById('submit-btn');
  const countdownText = document.getElementById('countdown-text');
  const robot = document.getElementById('robot');
  const robotHead = document.getElementById('robot-head');
  const eyeLeft = document.getElementById('eye-left');
  const eyeRight = document.getElementById('eye-right');

  // Digital Eye Blinking Routine
  setInterval(() => {
    if (robot.classList.contains('success')) return;
    const leftX = eyeLeft.style.transform;
    const rightX = eyeRight.style.transform;

    eyeLeft.style.transform = `${leftX} scaleY(0.1)`;
    eyeRight.style.transform = `${rightX} scaleY(0.1)`;

    setTimeout(() => {
      eyeLeft.style.transform = leftX;
      eyeRight.style.transform = rightX;
    }, 120);
  }, 4500);

  // Mouse Tracking
  window.addEventListener('mousemove', (e) => {
    if (robot.classList.contains('success')) return;

    const headRect = robotHead.getBoundingClientRect();
    const headCenterX = headRect.left + headRect.width / 2;
    const headCenterY = headRect.top + headRect.height / 2;

    const deltaX = e.clientX - headCenterX;
    const deltaY = e.clientY - headCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(12, Math.hypot(deltaX, deltaY) / 18);

    const eyeX = Math.cos(angle) * distance;
    const eyeY = Math.sin(angle) * distance;
    const headTilt = (deltaX / window.innerWidth) * 14; 

    eyeLeft.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    eyeRight.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    robotHead.style.transform = `rotate(${headTilt}deg)`;
  }, { passive: true });

  // Guest Submit Handler with 5s countdown
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable button to prevent duplicate clicks
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    submitBtn.style.cursor = 'not-allowed';

    // Trigger alert and robot celebration animation
    alertBox.textContent = 'Access Granted! Welcome Guest.';
    alertBox.className = 'alert-box success';

    robot.classList.remove('error', 'covering', 'peeking');
    robot.classList.add('success');

    localStorage.setItem('eve_remembered_user', 'Guest');

    // 5-second countdown setup
    let secondsLeft = 5;
    countdownText.style.display = 'block';
    countdownText.textContent = `Redirecting to Overview in ${secondsLeft}s...`;

    const countdownInterval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft > 0) {
        countdownText.textContent = `Redirecting to Overview in ${secondsLeft}s...`;
      } else {
        clearInterval(countdownInterval);
        countdownText.textContent = 'Redirecting...';
        window.location.href = 'index.html';
      }
    }, 1000);
  });
});
