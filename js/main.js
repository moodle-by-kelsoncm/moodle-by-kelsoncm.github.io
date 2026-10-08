document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Detect current page language from <html lang="...">
  const pageLang = document.documentElement.getAttribute('lang') || 'en';
  const isPt = pageLang.toLowerCase().startsWith('pt');

  // Theme toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeLabel = document.getElementById('themeLabel');

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeUI(next);
    });
  }

  function updateThemeUI(theme) {
    if (themeLabel) {
      if (isPt) {
        themeLabel.textContent = theme === 'dark' ? 'Escuro' : 'Claro';
      } else {
        themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
      }
    }
  }

  // Language buttons click handling (persist preference)
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        localStorage.setItem('user_lang', targetLang);
      }
    });
  });

  // Filter & Search across macro cards and sections
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const macroCards = document.querySelectorAll('.macro-section-card');

  let currentFilter = 'all';

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    macroCards.forEach(macroCard => {
      const macroGroup = macroCard.getAttribute('data-group');
      const matchesMacroFilter = (currentFilter === 'all') || (macroGroup === currentFilter);

      let visibleCardsInMacro = 0;
      const macroSections = macroCard.querySelectorAll('.category-section');

      if (macroSections.length > 0) {
        macroSections.forEach(section => {
          let visibleCardsInSection = 0;
          const sectionCards = section.querySelectorAll('.repo-card');

          sectionCards.forEach(card => {
            const searchText = (card.getAttribute('data-search') + ' ' + card.innerText).toLowerCase();
            const matchesSearch = !query || searchText.includes(query);

            if (matchesMacroFilter && matchesSearch) {
              card.style.display = 'flex';
              visibleCardsInSection++;
              visibleCardsInMacro++;
            } else {
              card.style.display = 'none';
            }
          });

          // Toggle section visibility
          if (visibleCardsInSection === 0) {
            section.style.display = 'none';
          } else {
            section.style.display = 'block';
          }
        });
      } else {
        // Macro card with direct cards (without subsections)
        const directCards = macroCard.querySelectorAll('.repo-card');
        directCards.forEach(card => {
          const searchText = (card.getAttribute('data-search') + ' ' + card.innerText).toLowerCase();
          const matchesSearch = !query || searchText.includes(query);

          if (matchesMacroFilter && matchesSearch) {
            card.style.display = 'flex';
            visibleCardsInMacro++;
          } else {
            card.style.display = 'none';
          }
        });
      }

      // Toggle macro card container visibility
      if (!matchesMacroFilter || (query && visibleCardsInMacro === 0)) {
        macroCard.style.display = 'none';
      } else {
        macroCard.style.display = 'block';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });
});
