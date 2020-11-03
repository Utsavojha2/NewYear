const year = document.querySelector('.year');
const days = document.querySelector('.days-timer');
const hours = document.querySelector('.hrs-timer');
const minutes = document.querySelector('.min-timer');
const seconds = document.querySelector('.sec-timer');


let timer = setInterval(() => { 
    const x = new Date().getFullYear() + 1;
    const newYear = new Date(`01-01-${x} 00:00:00`).getTime();
    const currentYear = new Date().getTime();
    const timeLeft = newYear - currentYear;

 // calc days,min and sec
    const days_ = Math.floor(timeLeft / (1000* 60 * 60 * 24));

    const hours_ = Math.floor((timeLeft % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes_ = Math.floor((timeLeft % (1000* 60 * 60 )) / (1000 * 60));

    const seconds_ = Math.floor((timeLeft % (1000* 60)) / (1000));

    // Working with DOM
year.innerText = x;
days.innerText = days_;
hours.innerText = hours_;
minutes.innerText = minutes_;
seconds.innerText = seconds_;


},1000);





