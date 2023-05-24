const button = document.getElementById("toggle");
const body = document.querySelector("body");
const container = document.querySelector(".container");

window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        button.classList.add('dark');
        container.classList.add('dark');
        body.classList.add('dark');
    }
}

button.onclick = function() {
    button.classList.toggle('dark');
    container.classList.toggle('dark');
    body.classList.toggle('dark');
    
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}