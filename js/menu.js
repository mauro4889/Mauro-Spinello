document.querySelector('.btn_menu').addEventListener('click', () => {
    event.stopPropagation()
    animateBars()
});

let line_1 = document.querySelector('.line-1');
let line_2 = document.querySelector('.line-2');
let line_3 = document.querySelector('.line-3');
let nav = document.getElementById('nav')
let nav_menu = document.querySelector('.nav_menu');
let aerealD = document.getElementById('aerealD')

function animateBars() {
    line_1.classList.toggle('active_line-1');
    line_2.classList.toggle('active_line-2');
    line_3.classList.toggle('active_line-3');
    nav.classList.toggle('responsive')
}

window.onclick = function(e) {
    animateBars()
}

aerealD.addEventListener('click', () => {
    window.location = 'https://aereal-d.vercel.app/'
})