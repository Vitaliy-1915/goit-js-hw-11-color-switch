const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const backgroundBody = document.body;

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', changeColorStart);

function changeColorStart(event) {
    const btn = event.target.dataset.action;
    let onInterval = null;
    
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    if (onInterval === null) {
        startBtn.disabled = true;     
        onInterval = setInterval(() => {
        const changeColors = colors[randomIntegerFromInterval(0, colors.length)];
        console.log(colors.length);
        backgroundBody.style.backgroundColor = (changeColors);
            
    }, 1000);    
    } else {
        return;
    };

    stopBtn.addEventListener('click', changeColorStop);

    function changeColorStop(event) {
    const btn = event.target.dataset.action;
        clearInterval(onInterval);
         startBtn.disabled = false;
    };
};





