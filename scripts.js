let currentLanguage = localStorage.getItem('language') || 'fr';
let translations = {};
fetch('lang.json', { cache: 'no-store' })
  .then(response => response.json())
  .then(data => {
    translations = data;
    setLanguage(currentLanguage);
  });
function setLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
  localStorage.setItem('language', lang);
}