const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');

function activateCard1() {
    card1.classList.add('card-active');
    card2.classList.remove('card-active');
    card1.style.border ='none';
    card2.style.border ='inset black 1px';
}

function activateCard2() {
    card2.classList.add('card-active');
    card2.style.border ='none';
    card1.style.border ='inset black 1px';
    card1.classList.remove('card-active');
}

card1.addEventListener('click', activateCard1);
card2.addEventListener('click', activateCard2);
