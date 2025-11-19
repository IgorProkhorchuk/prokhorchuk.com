function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Make snowflake visible and position it
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px'; // Start just above the viewport
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    
    // Random starting position
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Random opacity
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    
    // Random size
    const size = Math.random() * 5 + 3;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    
    // Random animation duration
    const animationDuration = Math.random() * 5 + 8;
    snowflake.style.animationDuration = animationDuration + 's';
    snowflake.style.animationName = 'fall'; // Assign the animation
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 100);

// Create initial batch of snowflakes
for(let i = 0; i < 25; i++) {
    createSnowflake();
}