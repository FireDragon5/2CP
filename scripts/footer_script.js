document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const footer = document.querySelector('.footer');
  
    if (!footer) {
      console.error("Footer element not found");
      return;
    }
  
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        footer.classList.add('hidden');
      } else {
        // Scrolling up
        footer.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    });
  });