/* ============================================================
   MessMenu — App Logic
   ============================================================ */

// ── State ─────────────────────────────────────────────────────
let selectedDate = new Date();
let activeMeal   = getCurrentMeal(new Date());
let calendarViewDate = new Date(); // month shown in calendar
let deferredInstallPrompt = null;
let clockInterval = null;
let currentTheme = localStorage.getItem('messmenu-theme') || 'dark';

const MEALS = ["breakfast", "lunch", "snacks", "dinner"];
const DAY_NAMES   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Week parity: ISO week 36 (Sep 1 2026) = Odd college week.
// College odd week = ISO even week number → we flip the standard parity.
function getWeekType(date) {
  // Overrides the menu-data.js version for correct college parity
  return getISOWeekNumber(date) % 2 === 0 ? "odd" : "even";
}

// ── DOM References ─────────────────────────────────────────────
const $dateLabel       = document.getElementById("dateLabel");
const $liveTime        = document.getElementById("liveTime");
const $weekTypePill    = document.getElementById("weekTypePill");
const $mealTagRow      = document.getElementById("mealTagRow");
const $heroMealName    = document.getElementById("heroMealName");
const $mealTimeLabel   = document.getElementById("mealTimeLabel");
const $mealTabs        = document.getElementById("mealTabs");
const $mealCardsTrack  = document.getElementById("mealCardsTrack");
const $calendarOverlay = document.getElementById("calendarOverlay");
const $calGrid         = document.getElementById("calGrid");
const $calMonthLabel   = document.getElementById("calMonthLabel");
const $calPrev         = document.getElementById("calPrev");
const $calNext         = document.getElementById("calNext");
const $calTodayBtn     = document.getElementById("calTodayBtn");
const $calCloseBtn     = document.getElementById("calCloseBtn");
const $calToggleBtn    = document.getElementById("calendarToggleBtn");
const $notesBtn        = document.getElementById("notesBtn");
const $notesModal      = document.getElementById("notesModal");
const $notesClose      = document.getElementById("notesClose");
const $notesList       = document.getElementById("notesList");
const $weekBadgeRow    = document.getElementById("weekBadgeRow");
const $installBtn      = document.getElementById("installBtn");
const $iosModal        = document.getElementById("iosModal");
const $iosClose        = document.getElementById("iosClose");
const $specialSection  = document.getElementById("specialDinnerSection");
const $specialBtn      = document.getElementById("specialDinnerBtn");
const $specialModal    = document.getElementById("specialDinnerModal");
const $specialContent  = document.getElementById("specialDinnerContent");
const $specialClose    = document.getElementById("specialDinnerClose");
const $toast           = document.getElementById("toast");
const $header          = document.getElementById("appHeader");
const $themeBtn        = document.getElementById("themeToggleBtn");

// ── Init ──────────────────────────────────────────────────────
function init() {
  applyTheme(currentTheme);
  renderDateSection();
  renderMealHero();
  renderTabs();
  renderCards();
  renderCalendar();
  renderNotesModal();
  renderSpecialDinnerModal();
  startClock();
  attachEventListeners();
  setupPWA();
}

// ── Theme ─────────────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('messmenu-theme', theme);
  if ($themeBtn) {
    $themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    $themeBtn.innerHTML = theme === 'dark'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ── Clock & Date ──────────────────────────────────────────────
function startClock() {
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    $liveTime.textContent = `${h}:${m}:${s}`;

    // If date changes, re-render
    if (
      now.getDate() !== selectedDate.getDate() &&
      isSameDay(selectedDate, new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1))
    ) {
      // If we were on "today", update to new today
    }
  }
  tick();
  clockInterval = setInterval(tick, 1000);
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate();
}

function isToday(date) {
  const today = new Date();
  return isSameDay(date, today);
}

// ── Render Date Section ───────────────────────────────────────
function renderDateSection() {
  const today = new Date();
  const isSelectedToday = isToday(selectedDate);

  const dayName   = DAY_NAMES[selectedDate.getDay()];
  const monthName = MONTH_NAMES[selectedDate.getMonth()];
  const dateNum   = selectedDate.getDate();

  $dateLabel.textContent = isSelectedToday
    ? `Today, ${dayName} ${dateNum}`
    : `${dayName}, ${monthName} ${dateNum}`;

  const wt = getWeekType(selectedDate);
  const wn = getISOWeekNumber(selectedDate);
  $weekTypePill.innerHTML = `
    <span>${wt === "even" ? "📅" : "🗓️"}</span>
    <span>${wt.charAt(0).toUpperCase() + wt.slice(1)} Week (Week ${wn})</span>
  `;
}

// ── Render Meal Hero ──────────────────────────────────────────
function renderMealHero() {
  const meta = MEAL_META[activeMeal];
  const currentRealMeal = getCurrentMeal(new Date());
  const isCurrentMealActive = (activeMeal === currentRealMeal) && isToday(selectedDate);

  $mealTagRow.innerHTML = `
    <span class="meal-tag" style="background:${meta.accent}22;color:${meta.accent};border:1px solid ${meta.accent}33">
      <span>${meta.emoji}</span>
      <span>${meta.label}</span>
    </span>
    ${isCurrentMealActive ? '<span class="now-badge">LIVE</span>' : ""}
  `;

  $heroMealName.textContent = meta.label;
  $mealTimeLabel.textContent = meta.time;
  $heroMealName.style.color = meta.accent;
}

// ── Render Tabs ───────────────────────────────────────────────
function renderTabs() {
  const currentRealMeal = getCurrentMeal(new Date());
  $mealTabs.innerHTML = MEALS.map(meal => {
    const meta = MEAL_META[meal];
    const isActive = meal === activeMeal;
    const isCurrent = meal === currentRealMeal && isToday(selectedDate);
    return `
      <button
        class="meal-tab${isActive ? " active" : ""}"
        data-meal="${meal}"
        role="tab"
        aria-selected="${isActive}"
        id="tab-${meal}"
      >
        <span class="tab-emoji">${meta.emoji}</span>
        <span>${meta.label}</span>
        ${isCurrent ? '<span class="current-dot" aria-label="Current meal"></span>' : ""}
      </button>
    `;
  }).join("");

  $mealTabs.querySelectorAll(".meal-tab").forEach(btn => {
    btn.addEventListener("click", () => selectMeal(btn.dataset.meal));
  });
}

// ── Render Cards ──────────────────────────────────────────────
function renderCards() {
  const dayMenu = getDayMenu(selectedDate);
  $mealCardsTrack.innerHTML = MEALS.map(meal => buildMealCard(meal, dayMenu)).join("");
  updateCardPosition(false);
  checkSpecialDinner(dayMenu);
}

function buildMealCard(meal, dayMenu) {
  const meta = MEAL_META[meal];
  const mealData = dayMenu?.[meal];
  const isCurrentCard = meal === activeMeal;

  return `
    <div class="meal-card" data-meal="${meal}" aria-labelledby="tab-${meal}">
      <div class="meal-card-inner accent-${meal}">
        <div class="meal-card-header">
          <span class="meal-card-emoji">${meta.emoji}</span>
          <div>
            <div class="meal-card-title">${meta.label}</div>
            <div class="meal-card-time">${meta.time}</div>
          </div>
        </div>
        <div class="meal-card-body">
          ${mealData ? buildMealSections(mealData) : buildEmptyState()}
        </div>
      </div>
    </div>
  `;
}

function buildMealSections(mealData) {
  const sections = [];

  if (mealData.main?.length) {
    sections.push(buildSection("main", mealData.main, true));
  }
  if (mealData.sides?.length) {
    sections.push(buildSection("sides", mealData.sides, false));
  }
  if (mealData.rice?.length) {
    sections.push(buildSection("rice", mealData.rice, false));
  }
  if (mealData.extras?.length) {
    sections.push(buildSection("extras", mealData.extras, false));
  }
  if (mealData.accompaniments?.length) {
    sections.push(buildSection("accompaniments", mealData.accompaniments, false));
  }
  if (mealData.beverages?.length) {
    sections.push(buildSection("beverages", mealData.beverages, false));
  }
  if (mealData.sweet?.length) {
    sections.push(buildSection("sweet", mealData.sweet, false, true));
  }

  return sections.join('<div class="section-divider"></div>');
}

function buildSection(type, items, isMain, isSweet = false) {
  const label = SECTION_LABELS[type];
  const chips = items.map(item => `
    <span class="menu-item${isMain ? " is-main" : ""}${isSweet ? " is-sweet" : ""}">${escapeHtml(item)}</span>
  `).join("");

  return `
    <div class="menu-section">
      <div class="section-label">
        <span class="sec-icon">${label.icon}</span>
        <span>${label.label}</span>
      </div>
      <div class="menu-items">${chips}</div>
    </div>
  `;
}

function buildEmptyState() {
  return `
    <div class="empty-state">
      <div class="empty-state-emoji">🍽️</div>
      <div class="empty-state-title">Menu not available</div>
      <div class="empty-state-sub">Check the mess notice board for today's menu.</div>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── Special Dinner ────────────────────────────────────────────
function checkSpecialDinner(dayMenu) {
  const hasSpecialNote = dayMenu?.dinner?.extras?.some(e =>
    e.toLowerCase().includes("special dinner")
  );
  $specialSection.style.display = hasSpecialNote ? "block" : "none";
}

function renderSpecialDinnerModal() {
  const sd = MENU_DATA.specialDinner;
  $specialContent.innerHTML = `
    <div class="sd-tab-group">
      <button class="sd-tab active" id="sdTabVeg" onclick="switchSDTab('veg')">🌿 Veg</button>
      <button class="sd-tab" id="sdTabNonVeg" onclick="switchSDTab('nonVeg')">🍗 Non-Veg</button>
    </div>
    <div id="sdVeg" style="display:flex;flex-direction:column;gap:10px">
      ${renderSDMenu(sd.veg)}
    </div>
    <div id="sdNonVeg" style="display:none;flex-direction:column;gap:10px">
      ${renderSDMenu(sd.nonVeg)}
    </div>
    <p style="font-size:12px;color:var(--text-3);margin-top:8px;line-height:1.4">${sd.note}</p>
  `;
}

function renderSDMenu(menu) {
  return `
    <div class="sd-block">
      <div class="sd-section-title">Main Course</div>
      <div class="sd-items">
        ${menu.option1.map(i => `<span class="sd-item main">${escapeHtml(i)}</span>`).join("")}
      </div>
      <div class="sd-or-divider"><span>OR</span></div>
      <div class="sd-items">
        ${menu.option2.map(i => `<span class="sd-item main">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
    <div class="sd-block">
      <div class="sd-section-title">Accompaniments</div>
      <div class="sd-items">
        ${menu.accompaniments.map(i => `<span class="sd-item">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
    <div class="sd-block">
      <div class="sd-section-title">Desserts</div>
      <div class="sd-items">
        ${menu.desserts.map(i => `<span class="sd-item">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
    <div class="sd-block">
      <div class="sd-section-title">Fruits (any 4 varieties)</div>
      <div class="sd-items">
        ${menu.fruits.map(i => `<span class="sd-item">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
  `;
}

window.switchSDTab = function(tab) {
  const vegEl    = document.getElementById("sdVeg");
  const nonVegEl = document.getElementById("sdNonVeg");
  vegEl.style.display    = tab === "veg"    ? "flex" : "none";
  nonVegEl.style.display = tab === "nonVeg" ? "flex" : "none";
  document.getElementById("sdTabVeg").classList.toggle("active",    tab === "veg");
  document.getElementById("sdTabNonVeg").classList.toggle("active", tab === "nonVeg");
};

// ── Meal Selection ────────────────────────────────────────────
function selectMeal(meal) {
  if (!MEALS.includes(meal)) return;
  activeMeal = meal;
  renderMealHero();
  renderTabs();
  updateCardPosition(true);
}

function updateCardPosition(animate) {
  const idx = MEALS.indexOf(activeMeal);
  if (!animate) {
    $mealCardsTrack.style.transition = "none";
  }
  $mealCardsTrack.style.transform = `translateX(-${idx * 100}%)`;
  if (!animate) {
    // Force reflow then restore transition
    $mealCardsTrack.getBoundingClientRect();
    $mealCardsTrack.style.transition = "";
  }
}

// ── Touch/Swipe Support ───────────────────────────────────────
(function setupSwipe() {
  let startX = 0, startY = 0, isDragging = false;

  document.getElementById("mealCardsContainer").addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = false;
  }, { passive: true });

  document.getElementById("mealCardsContainer").addEventListener("touchmove", e => {
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    if (!isDragging && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isDragging = true;
    }
    if (isDragging) e.preventDefault();
  }, { passive: false });

  document.getElementById("mealCardsContainer").addEventListener("touchend", e => {
    if (!isDragging) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      const dir = dx < 0 ? 1 : -1;
      const idx = MEALS.indexOf(activeMeal);
      const next = Math.max(0, Math.min(MEALS.length - 1, idx + dir));
      selectMeal(MEALS[next]);
    }
    isDragging = false;
  }, { passive: true });
})();

// ── Calendar ──────────────────────────────────────────────────
function renderCalendar() {
  const year  = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();

  $calMonthLabel.textContent = `${MONTH_NAMES[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  let html = "";

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isT   = isSameDay(date, today);
    const isSel = isSameDay(date, selectedDate);

    let cls = "cal-day";
    if (isT)   cls += " today";
    if (isSel) cls += " selected";

    html += `
      <div
        class="${cls}"
        data-date="${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}"
        role="gridcell"
        aria-label="${DAY_NAMES[date.getDay()]} ${d} ${MONTH_NAMES[month]}"
        aria-selected="${isSel}"
        tabindex="0"
      >${d}</div>
    `;
  }

  $calGrid.innerHTML = html;

  $calGrid.querySelectorAll(".cal-day:not(.empty)").forEach(el => {
    el.addEventListener("click", () => {
      const [y, mo, day] = el.dataset.date.split("-").map(Number);
      selectDate(new Date(y, mo - 1, day));
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") el.click();
    });
  });
}

function selectDate(date) {
  selectedDate = date;
  activeMeal = isToday(date) ? getCurrentMeal(new Date()) : activeMeal;
  calendarViewDate = new Date(date.getFullYear(), date.getMonth(), 1);
  renderDateSection();
  renderMealHero();
  renderTabs();
  renderCards();
  renderCalendar();
  closeCalendar();
}

function openCalendar() {
  $calendarOverlay.classList.add("open");
  $calendarOverlay.setAttribute("aria-hidden", "false");
  $calToggleBtn.setAttribute("aria-expanded", "true");
  calendarViewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  renderCalendar();
}

function closeCalendar() {
  $calendarOverlay.classList.remove("open");
  $calendarOverlay.setAttribute("aria-hidden", "true");
  $calToggleBtn.setAttribute("aria-expanded", "false");
}

// ── Notes Modal ───────────────────────────────────────────────
function renderNotesModal() {
  $notesList.innerHTML = MENU_NOTES.map(note =>
    `<li>${escapeHtml(note)}</li>`
  ).join("");

  const wt = getWeekType(selectedDate);
  const wn = getISOWeekNumber(selectedDate);
  $weekBadgeRow.innerHTML = `
    <div class="week-badge-info">
      Currently viewing: <strong>${DAY_NAMES[selectedDate.getDay()]}</strong>
      · <strong>${wt.charAt(0).toUpperCase() + wt.slice(1)} Week</strong> (ISO Week ${wn})
    </div>
  `;
}

function openModal(el) {
  el.classList.add("open");
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}

// ── Toast ─────────────────────────────────────────────────────
let toastTimeout;
function showToast(msg, duration = 2500) {
  clearTimeout(toastTimeout);
  $toast.textContent = msg;
  $toast.classList.add("show");
  toastTimeout = setTimeout(() => $toast.classList.remove("show"), duration);
}

// ── PWA / Install ─────────────────────────────────────────────
function setupPWA() {
  // Register service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  // Android/Chrome install prompt
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    $installBtn.style.display = "flex";
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    $installBtn.style.display = "none";
    showToast("🎉 App installed successfully!");
  });

  // iOS detection
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isInStandaloneMode = window.matchMedia("(display-mode: standalone)").matches;
  if (isIOS && !isInStandaloneMode) {
    $installBtn.style.display = "flex";
  }
}

// ── Event Listeners ───────────────────────────────────────────
function attachEventListeners() {
  // Calendar
  $calToggleBtn.addEventListener("click", openCalendar);
  $calCloseBtn.addEventListener("click", closeCalendar);
  $calTodayBtn.addEventListener("click", () => {
    // Actually navigate to today — not just scroll the calendar view
    selectDate(new Date());
    showToast("📅 Back to today");
  });
  $calPrev.addEventListener("click", () => {
    calendarViewDate.setMonth(calendarViewDate.getMonth() - 1);
    renderCalendar();
  });
  $calNext.addEventListener("click", () => {
    calendarViewDate.setMonth(calendarViewDate.getMonth() + 1);
    renderCalendar();
  });
  $calendarOverlay.addEventListener("click", e => {
    if (e.target === $calendarOverlay) closeCalendar();
  });

  // Notes
  $notesBtn.addEventListener("click", () => {
    renderNotesModal();
    openModal($notesModal);
  });
  $notesClose.addEventListener("click", () => closeModal($notesModal));
  $notesModal.addEventListener("click", e => {
    if (e.target === $notesModal) closeModal($notesModal);
  });

  // iOS modal
  $iosClose.addEventListener("click", () => closeModal($iosModal));
  $iosModal.addEventListener("click", e => {
    if (e.target === $iosModal) closeModal($iosModal);
  });

  // Install button
  $installBtn.addEventListener("click", async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === "accepted") {
        deferredInstallPrompt = null;
        $installBtn.style.display = "none";
      }
    } else if (isIOS) {
      openModal($iosModal);
    } else {
      showToast("Open in Chrome/Safari to install the app");
    }
  });

  // Special dinner
  $specialBtn.addEventListener("click", () => openModal($specialModal));
  $specialClose.addEventListener("click", () => closeModal($specialModal));
  $specialModal.addEventListener("click", e => {
    if (e.target === $specialModal) closeModal($specialModal);
  });

  // Scroll shadow
  window.addEventListener("scroll", () => {
    $header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  // Keyboard nav for calendar
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeCalendar();
      closeModal($notesModal);
      closeModal($iosModal);
      closeModal($specialModal);
    }
  });

  // Date label click → jump to today
  $dateLabel.addEventListener("click", () => {
    if (!isToday(selectedDate)) {
      selectDate(new Date());
      showToast("📅 Back to today");
    }
  });

  // Theme toggle
  if ($themeBtn) {
    $themeBtn.addEventListener("click", toggleTheme);
  }
}

// ── Kick Off ──────────────────────────────────────────────────
init();
