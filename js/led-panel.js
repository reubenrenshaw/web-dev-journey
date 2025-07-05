document.addEventListener('DOMContentLoaded', () => {
    const panel = document.getElementById('panel');
    const COLS = 32;
    const ROWS = 8;


    const leds = [];

    for(let y = 0; y < ROWS; y++) {
        leds[y] = [];
        for(let x = 0; x < COLS; x++) {
            const led = document.createElement('div');
            led.className = 'led';
            led.dataset.x = x;
            led.dataset.y = y;
            leds[y][x] = led;
            panel.appendChild(led);
        }
    }

    function setLED(x, y, on) {
        const led = leds[y]?.[x];
        if(!led) return;
        led.classList.toggle('on', on);
    }

    function toggleLED(x, y) {
        const led = leds[y]?.[x];
        if (!led) return;
        led.classList.toggle('on');
    }
});

