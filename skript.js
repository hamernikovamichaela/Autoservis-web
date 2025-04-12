/* =============================
   ZMĚNA POZADÍ SEKCE HERO
   ============================= */

   const images = [
    'img/Hero/IMG_2467.jpeg',
    'img/Hero/IMG_2459.jpeg',
    'img/Hero/IMG_2466.jpeg'
  ];
  
  // Výběr tří pozadí
  const bg1 = document.querySelector('.hero__bg--1');
  const bg2 = document.querySelector('.hero__bg--2');
  const bg3 = document.querySelector('.hero__bg--3');
  
  let current = 0;
  let backgrounds = [bg1, bg2, bg3]; // Pole pro všechny 3 pozadí
  let showingBg = 0; // Ukazatel na aktuální pozadí
  
  function changeBackground() {
    // Získáme další obrázek
    const nextImage = images[current];
  
    // Skrytí aktuálního pozadí
    backgrounds[showingBg].style.opacity = '0';
  
    // Nastavení nového obrázku pro další pozadí
    const nextBg = (showingBg + 1) % 3; // Přepnutí na další pozadí v cyklu (0 -> 1 -> 2 -> 0)
    backgrounds[nextBg].style.backgroundImage = `url('${nextImage}')`;
    backgrounds[nextBg].style.opacity = '1'; // Nastavení opacity na 1 (ukáže pozadí)
  
    // Nastavení nového indexu
    showingBg = nextBg;
    current = (current + 1) % images.length; // Přepnutí obrázku cyklicky
  }
  
  // Spustíme hned a opakujeme každých 5 sekund
  changeBackground();
  setInterval(changeBackground, 5000);

// Inicializace Swiper galerie

// Inicializace Swiper galerie
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Počet zobrazených obrázků najednou
  spaceBetween: 10, // Vzdálenost mezi obrázky
  loop: true, // Povolení nekonečného posouvání
  navigation: {
    nextEl: '.swiper-button-next', // Tlačítko pro posun na další obrázek
    prevEl: '.swiper-button-prev', // Tlačítko pro posun na předchozí obrázek
  },
  pagination: {
    el: '.swiper-pagination', // Element pro zobrazení číselné navigace
    clickable: true, // Povolení klikání na čísla pro přímý přechod
  },
  keyboard: {
    enabled: true, // Povolení ovládání klávesnicí
    onlyInViewport: true, // Ovládání pouze pokud je swiper v zobrazené oblasti
  },
  mousewheel: {
    invert: false, // Směr posouvání kolečkem myši
  },
});
// ==============================
// ===== Tlačítko "Scroll to Top" =====
// ==============================

/**
 * Zobrazuje tlačítko "Scroll to Top" po odscrollování a nastavuje jeho funkčnost.
 */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});