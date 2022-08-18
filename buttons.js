document.addEventListener('click', function (e) {
  e = e || window.event;
  let target = e.target;

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
      if (target.hasAttribute('data-target')) {
          let m_ID = target.getAttribute('data-target');
          document.getElementById(m_ID).classList.add('open');
          e.preventDefault();
      }
  }

  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
      let modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
  }
}, false);