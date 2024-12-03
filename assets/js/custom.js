// Function to fix navbar on scroll

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if(window.scrollY > 100) {
    //   nav.classList.add('scrolled');
      nav.classList.add('navbar-dark');
      nav.classList.add('scrolled');
      nav.classList.remove('navbar-light'); 
    } else {
    //   nav.classList.remove('scrolled');
      nav.classList.remove('navbar-dark');
      nav.classList.remove('scrolled');

    }
  })