(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-mob-menu'),
    closeMenuBtn: document.querySelector('.close-mob-menu'),
    Menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.Menu.classList.toggle('is-hidden');
  }
})();