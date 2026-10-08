document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

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
      themeLabel.textContent = theme === 'dark' ? 'Escuro' : 'Claro';
    }
  }

  // Filter & Search
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('.category-section');
  const groupHeaders = document.querySelectorAll('.main-group-header');

  let currentFilter = 'all';

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    sections.forEach(section => {
      const sectionGroup = section.getAttribute('data-group');
      let visibleCardsInSection = 0;
      const sectionCards = section.querySelectorAll('.repo-card');

      sectionCards.forEach(card => {
        const cardGroup = card.getAttribute('data-group') || sectionGroup;
        const matchesGroup = (currentFilter === 'all') || (cardGroup === currentFilter);
        const searchText = (card.getAttribute('data-search') + ' ' + card.innerText).toLowerCase();
        const matchesSearch = !query || searchText.includes(query);

        if (matchesGroup && matchesSearch) {
          card.style.display = 'flex';
          visibleCardsInSection++;
        } else {
          card.style.display = 'none';
        }
      });

      if (visibleCardsInSection === 0) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    });

    // Update group headers visibility
    groupHeaders.forEach(header => {
      const groupType = header.getAttribute('data-group');
      if (currentFilter !== 'all' && groupType !== currentFilter) {
        header.style.display = 'none';
        return;
      }
      // Check if any section in this group is visible
      const matchingSections = Array.from(sections).filter(s => s.getAttribute('data-group') === groupType);
      const hasVisible = matchingSections.some(s => s.style.display !== 'none');
      header.style.display = hasVisible ? 'block' : 'none';
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
