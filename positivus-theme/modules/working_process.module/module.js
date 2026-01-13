document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.working-process__accordion');

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const toggle = item.querySelector('.accordion-item__toggle');

      toggle.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close all items
        items.forEach(i => i.classList.remove('is-open'));

        // If the clicked item was not open, open it
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    });
  });
});
