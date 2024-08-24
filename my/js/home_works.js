document.addEventListener('DOMContentLoaded', () => {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

   
    function checkGmail() {
        const inputValue = gmailInput.value.trim();
        if (gmailRegex.test(inputValue)) {
            gmailResult.textContent = 'Valid Gmail address!';
            gmailResult.style.color = 'green';
        } else {
            gmailResult.textContent = 'Invalid Gmail address!';
            gmailResult.style.color = 'red';
        }
    }

    gmailButton.addEventListener('click', checkGmail);
});


document.addEventListener('DOMContentLoaded', () => {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;

    const radius = Math.min(parentWidth, parentHeight) / 2 - Math.max(childWidth, childHeight) / 2;
    const centerX = parentWidth / 2 - childWidth / 2;
    const centerY = parentHeight / 2 - childHeight / 2;

    let angle = 0;
    const speed = 0.02;

    function moveBlock() {
       
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

       
        childBlock.style.left = `${x}px`;   
        childBlock.style.top = `${y}px`;

        
        angle += speed;
        if (angle >= 2 * Math.PI) {
            angle -= 2 * Math.PI; 
        }

        requestAnimationFrame(moveBlock); 
    }

    moveBlock(); 
});


document.addEventListener('DOMContentLoaded', () => {
    const secondsDisplay = document.getElementById('seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    
    let timer; 
    let seconds = 1;
    
    function updateDisplay() {
        secondsDisplay.textContent = seconds; 
    }
    
    function startTimer() {
        if (timer) return; 
        
        timer = setInterval(() => {
            seconds = seconds + 0.1; 
            updateDisplay();
        }, 100);
    }
    
    function stopTimer() {
        clearInterval(timer); 
        timer = null; 
    }
    
    function resetTimer() {
        stopTimer();
        seconds = 1;
        updateDisplay();
    }
    
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
