function initToggleTabs() {
   const btnToggleArr = Array.from(document.querySelectorAll(('.js-tab')));
   btnToggleArr.forEach(btn => {
      btn.addEventListener('click', function () {
         const tabIndex = btn.dataset.tab;
         const parent = btn.closest('.js-tabs');
         parent.querySelector('.js-tab.active').classList.remove('active');
         btn.classList.add('active');

         parent.querySelector('.js-tabs__tabContent.active').classList.remove('active');
         parent.querySelector(`.js-tabs__tabContent--${tabIndex}`).classList.add('active');
      })
   })
}

// sample html in toggle_tabs.html file