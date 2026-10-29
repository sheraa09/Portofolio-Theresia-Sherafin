
console.log("JavaScript berhasil dijalankan!");
console.log("Halo Shera!");


/* 🌙 1. DARK MODE */

const themeButton = document.getElementById("theme-toggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("shera-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    if (!themeButton) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeButton.textContent = isDark ? "☀️" : "🌙";

    themeButton.setAttribute(
        "aria-label",
        isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"
    );
}

// Sesuaikan ikon saat halaman dibuka
updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        // Simpan pilihan tema
        localStorage.setItem(
            "shera-theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();
    });
}


// ==================================
// 2. SAPAAN INTERAKTIF
// ==================================

const greeting = document.querySelector(".greeting");

if (greeting) {
    greeting.addEventListener("click", function () {
        greeting.textContent = "Sending you pinky hugs! ♡ 🎀";
    });
}

// ==================================
// 3. TAHUN OTOMATIS DI FOOTER
// ==================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `Made with ♡ by Shera & her little giraffe 🦒 · ${new Date().getFullYear()}`;
}

// ==================================
// 4. TOMBOL KIRIM CINTA
// ==================================

const loveButton = document.getElementById("love-button");

if (loveButton) {
    loveButton.addEventListener("click", function () {
        loveButton.textContent = "💗 Thank you for the love! ✨";
        loveButton.disabled = true;

        setTimeout(function () {
            loveButton.textContent = "💗 Send some love";
            loveButton.disabled = false;
        }, 2000);
    });
}

// ==================================
// 5. TOMBOL KEMBALI KE ATAS
// ==================================

const topButton = document.getElementById("back-to-top");

if (topButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* 🎀 HAMBURGER MENU */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu navigasi");
        });
    });
}

/* ✨ SHERA'S WORLD — SOFT CURSOR SPARKLES */
(() => {
  // Hindari efek berjalan lebih dari sekali
  if (window.__sheraCursorSparklesInitialized) return;
  window.__sheraCursorSparklesInitialized = true;

  // Hanya aktif pada perangkat dengan kursor
  if (!window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  ).matches) return;

  // Hormati preferensi pengguna yang mengurangi animasi
  if (window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches) return;

  const symbols = ['✧', '✦', '♡'];
  let lastSparkleTime = 0;

  document.addEventListener('mousemove', (event) => {
    const now = performance.now();

    // Batasi jumlah elemen agar tetap ringan
    if (now - lastSparkleTime < 65) return;
    lastSparkleTime = now;

    const sparkle = document.createElement('span');
    sparkle.className = 'shera-cursor-sparkle';
    sparkle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    sparkle.style.setProperty(
      '--sparkle-x',
      `${Math.random() * 30 - 15}px`
    );
    sparkle.style.setProperty(
      '--sparkle-y',
      `${Math.random() * 30 - 15}px`
    );

    document.body.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    }, { once: true });
  });
})();
