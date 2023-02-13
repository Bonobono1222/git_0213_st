let menu = document.querySelector('.pro-img-box');
let back = document.querySelector('.pro-img-top');

menu.addEventListener('click', function() {
  document.querySelector('.pro-menu').classList.add('is-active');
})

back.addEventListener('click', function() {
  document.querySelector('.pro-menu').classList.remove('is-active');
})


