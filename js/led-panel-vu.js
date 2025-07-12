class Panel {
  constructor(element, id) {
    this.element = element;
    this.id = id;
    this.leds = [];
  }

  setLED(x, y, on) {
    const led = this.leds[y]?.[x];
    if (!led) return;
    led.classList.toggle('on', on);
  }

  toggleLED(x, y) {
    const led = this.leds[y]?.[x];
    if (!led) return;
    led.classList.toggle('on');
  }

  getElement() {
    return this.element;
  }

  getLeds() {
    return this.leds;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const panel1 = new Panel(document.getElementById('panel1'), 'panel1');
  const panel2 = new Panel(document.getElementById('panel2'), 'panel2');
  const COLS  = 32;
  const ROWS  = 16;
  function buildPanel(panel) {
    const leds = []
    for (let y = 0; y < ROWS; y++) {
      leds[y] = [];
      for (let x = 0; x < COLS; x++) {
        const led = document.createElement('div');
        led.className = 'led';
        led.dataset.x = x;
        led.dataset.y = y;
        leds[y][x] = led;
        panel.element.appendChild(led);
      }
    }
    panel.leds = leds;
  }
  buildPanel(panel1);
  buildPanel(panel2);
  

  // 2a) Create AudioContext + AnalyserNode
  const ctx        = new (window.AudioContext || window.webkitAudioContext)();
  const el         = document.getElementById('audio-source');
  const src        = ctx.createMediaElementSource(el);

  // 2) Create an AnalyserNode for your VU meter
  const analyser   = ctx.createAnalyser();
  analyser.fftSize = 256;  // what you had before

  // 3) Create a GainNode purely for muting output
  const outputGain = ctx.createGain();

  // 4) Wire up two parallel paths:
  //    a) src → analyser       (for your visualization)
  //    b) src → outputGain → ctx.destination   (for actual sound)
  src.connect(analyser);
  src.connect(outputGain);
  outputGain.connect(ctx.destination);

  // 5) Mute the output path
  outputGain.gain.setValueAtTime(0, ctx.currentTime);

  // 6) Resume AudioContext on user play gesture
  el.addEventListener('play', () => {
    if (ctx.state === 'suspended') ctx.resume();
  });
  // 2c) Prepare a buffer for waveform data
  const data = new Uint8Array(analyser.fftSize);

  // 2d) Compute RMS loudness (0…1)
  function getAmplitude() {
    analyser.getByteTimeDomainData(data);
    let sumSq = 0;
    for (let v of data) {
      const norm = (v - 128) / 128;     // map 0–255 → -1…+1
      sumSq += norm * norm;
    }
    return Math.sqrt(sumSq / (data.length / 40));
  }

  const muteBtn = document.getElementById('mute-btn');
  let isMuted = false; // we start silent
  muteBtn.addEventListener('click', () => {
    ctx.resume()
    isMuted = !isMuted;
    outputGain.gain.setValueAtTime(isMuted ? 0 : 1, ctx.currentTime);
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
  });

  outputGain.gain.setValueAtTime(isMuted ? 0 : 1, ctx.currentTime);

function drawVU(panel) {
  const amp     = getAmplitude();      // 0…1 RMS
  const mid     = (COLS - 1) / 2;      // e.g. 31.5 for COLS=64
  const maxRows = ROWS;

  // tuning parameters
  const globalGain = 2.5;              // overall boost
  const exponent   = 5;                // sharpness of center hill
  const baseline   = 0.1;              // min weight at edges
  const centerGain = 1.3;              // extra boost for center two
  const yellowFloor= 0.5;              // start yellow at 50%
  const redFloor   = 0.8;              // start red at 80%

  // clear panel (remove all on + zone classes)
  for (let y = 0; y < maxRows; y++) {
    for (let x = 0; x < COLS; x++) {
      const led = panel.leds[y][x];
      led.classList.remove('on', 'green', 'yellow', 'red');
    }
  }
  

  // boosted RMS
  const boosted = Math.min(1, amp * globalGain);
  const centerLeft  = Math.floor(mid);
  const centerRight = Math.ceil(mid);

  // per-column
  for (let x = 0; x < COLS; x++) {
    // base weight from center distance
    const distNorm = Math.abs(x - mid) / mid;
    let   weight   = Math.pow(1 - distNorm, exponent);
    weight         = baseline + (1 - baseline) * weight;

    // extra center boost
    if (x === centerLeft || x === centerRight) {
      weight = Math.min(1, weight * centerGain);
    }

    // local amplitude & how many rows
    const localAmp = boosted * weight;
    const litRows  = Math.round(localAmp * maxRows);

    // light bottom litRows with zone classes
    for (let row = maxRows - litRows; row < maxRows; row++) {
      if (row < 0) continue;
      const led = panel.leds[row][x];
      led.classList.add('on');

      // decide color zone by vertical fraction
      const fracY = (row + 1) / maxRows;
      if (fracY >= redFloor)         led.classList.add('green');
      else if (fracY >= yellowFloor) led.classList.add('yellow');
      else                            led.classList.add('red');
    }
  }

  requestAnimationFrame(() => drawVU(panel));
}




  // 2f) Start on first user gesture (needed to enable AudioContext)
  drawVU(panel1);
  drawVU(panel2);
  
});
