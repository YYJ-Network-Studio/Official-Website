const themeToggle = document.getElementById('theme');
const originalColor = themeToggle.style.color;
const content = document.querySelector('.content .col-12')
const skills = document.querySelectorAll('.skills li')
const links = document.querySelectorAll('.links li')
const exp = document.querySelectorAll('.experience')

themeToggle.addEventListener('click', () => {
  if (themeToggle.style.color == 'white') {
    themeToggle.style.color = 'gray'
  } else {
    themeToggle.style.color = 'white';
  }
  content.classList.toggle('light-mode')
  skills.forEach(skills.classList.toggle('light-mode'));
  links.forEach(links.classList.toggle('light-mode'));
  exp.forEach(exp.classList.toggle('light-mode'));
});