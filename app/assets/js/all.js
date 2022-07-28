console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$('.burgerMenu').on('click', () => {
  $('.menu').slideToggle()
})