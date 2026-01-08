document.addEventListener('DOMContentLoaded', function () {
  const allNavModules = document.querySelectorAll('.positivus-header');

  allNavModules.forEach(function(navModule) {
    const headerToggle = navModule.querySelector('.positivus-header__toggle');
    const headerNav = navModule.querySelector('.positivus-header__nav');

    if (headerToggle && headerNav) {
      headerToggle.addEventListener('click', function () {
        headerNav.classList.toggle('is-open');
        this.classList.toggle('is-open');

        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
      });
    }
  });
});
