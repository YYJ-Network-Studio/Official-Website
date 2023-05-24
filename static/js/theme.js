const button = document.getElementById('toggle');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const resumeTitles = document.querySelectorAll('.resume-title');

window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        button.classList.add('dark');
        container.classList.add('dark');
        body.classList.add('dark');
        resumeTime.classList.add('dark')
        toggleResumeTitlesClass('add', 'dark');
    }
};

button.onclick = function() {
    button.classList.toggle('dark');
    body.classList.toggle('dark');
    container.classList.toggle('dark');
    toggleResumeTitles('toggle', 'dark');
    
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
};

function toggleResumeTitles(action, className) {
    for (let i = 0; i < resumeTitles.length; i++) {
        const resumeTitle = resumeTitles[i];
        if (action === 'add') {
            resumeTitle.classList.add(className);
        } else if (action === 'remove') {
            resumeTitle.classList.remove(className);
        } else if (action === 'toggle') {
            resumeTitle.classList.toggle(className);
        }
    }
}