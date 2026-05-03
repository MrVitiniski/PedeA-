// Seletores existentes
let list = document.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.indicators .dot');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let numberDisplay = document.querySelector('.numbers');

// Novos seletores para os Planos
const menuPlanos = document.querySelector('header nav ul li:nth-child(3)');
const menuHome = document.querySelector('header nav ul li:nth-child(1)');
const sectionSlider = document.querySelector('.list');
const sectionPlanos = document.getElementById('plans');
const arrows = document.querySelector('.arrows');
const indicators = document.querySelector('.indicators');

let active = 0;
let countItem = list.length;

// --- LÓGICA DO SLIDER ---
function setSlider() {
    let oldActive = document.querySelector('.list .item.active');
    let oldDot = document.querySelector('.indicators .dot.active');
    
    if (oldActive) oldActive.classList.remove('active');
    if (oldDot) oldDot.classList.remove('active');

    list[active].classList.add('active');
    dots[active].classList.add('active');
    numberDisplay.innerText = active + 1 < 10 ? '0' + (active + 1) : active + 1;
}

next.onclick = () => {
    active = (active + 1) % countItem;
    setSlider();
}

prev.onclick = () => {
    active = (active - 1 + countItem) % countItem;
    setSlider();
}

// --- LÓGICA DE NAVEGAÇÃO ENTRE ABAS ---

// Clicar em "Planos"
menuPlanos.onclick = () => {
    sectionSlider.style.display = 'none';
    arrows.style.display = 'none';
    indicators.style.display = 'none';
    
    sectionPlanos.style.display = 'block'; // Mostra a seção de planos
}

// Clicar em "Home" (Voltar para o Slider)
menuHome.onclick = () => {
    sectionPlanos.style.display = 'none';
    
    sectionSlider.style.display = 'block';
    arrows.style.display = 'flex';
    indicators.style.display = 'flex';
}
