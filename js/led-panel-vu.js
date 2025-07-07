// combined-led-panel-vu.js
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
  // ── 1) PANEL SETUP (unchanged) ───────────────────────────────────────────
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
  
  //buildPanel(panel2);
  // build a ROW×COL array & append LEDs
  //panel2.setLED(0, 0, on);

  // ── 2) VU-METER LOGIC ────────────────────────────────────────────────────

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
    return Math.sqrt(sumSq / (data.length / 50));
  }

  const muteBtn = document.getElementById('mute-btn');
  let isMuted = true; // we start silent
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    outputGain.gain.setValueAtTime(isMuted ? 0 : 1, ctx.currentTime);
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
  });

/*  const freqData = new Uint8Array(analyser.frequencyBinCount); // buffer for frequency bins

// replace your old drawVU with this:
function drawVU() {
  // 1) read waveform & frequency data every frame
  analyser.getByteTimeDomainData(data);
  analyser.getByteFrequencyData(freqData);

  // 2) compute overall loudness (RMS)
  let sumSq = 0;
  for (let v of data) {
    const norm = (v - 128) / 128;
    sumSq += norm * norm;
  }
  let slider_volume = .5;
  sumSq += slider_volume;
  const amp = Math.sqrt(sumSq / data.length);  // 0…1

  // 3) compute “bass level” by averaging the first few bins
  const BASS_BINS = 1;  // adjust to taste
  let bassSum = 0;
  for (let i = 0; i < BASS_BINS; i++) bassSum += freqData[i];
  const bassLvl = bassSum / (BASS_BINS * 255); // normalized 0…1

  // 4) clear all LEDs
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      setLED(x, y, false);
    }
  }

  // 5) center‐weighted VU bars (unchanged)
  const mid = (COLS - 1) / 2;
  const exponent = 6;         // how sharp the center peak is
  const globalGain = 2.0;     // make the center hit top more often

  for (let x = 0; x < COLS; x++) {
    const distNorm = Math.abs(x - mid) / mid;  
    const weight   = Math.pow(1 - distNorm, exponent);
    const boosted  = Math.min(1, amp * globalGain);
    const localAmp = boosted * weight;
    const litRows  = Math.round(localAmp * ROWS);

    for (let row = ROWS - litRows; row < ROWS; row++) {
      if (row >= 0) setLED(x, row, true);
    }
  }

  // 6) on strong bass, sprinkle random sparks
  //    the louder the bass, the more sparks
  const maxSparks = 8;                         // max random LEDs
  const numSparks = Math.round(bassLvl * maxSparks);
  for (let i = 0; i < numSparks; i++) {
    const randX = Math.floor(Math.random() * COLS);
    const randY = Math.floor(Math.random() * ROWS);
    setLED(randX, randY, true);
  }

  // 7) next frame
  requestAnimationFrame(drawVU);
} */
/*
function drawVU() {
  const amp     = getAmplitude();        // 0…1 RMS from waveform
  const mid     = (COLS - 1) / 2;        // center index (e.g. 31.5 if COLS=64)
  const maxRows = ROWS;                  // number of LED rows

  // Tweak these to taste:
  const globalGain = 2.5;                // boosts overall amplitude before weighting
  const exponent   = 5;                  // how sharply center peaks (higher = narrower)
  const baseline   = 0.1;                // minimum weight at edges (0…1)

  // 1) clear the panel
  for (let y = 0; y < maxRows; y++) {
    for (let x = 0; x < COLS; x++) {
      setLED(x, y, false);
    }
  }

  // 2) compute boosted amp once
  const boosted = Math.min(1, amp * globalGain);

  // 3) per-column fill
  for (let x = 0; x < COLS; x++) {
    // distance from center (0 at mid, 1 at edges)
    const distNorm = Math.abs(x - mid) / mid;

    // base weight: 1 at center → 0 at edges, with a sharp falloff
    let weight = Math.pow(1 - distNorm, exponent);

    // lift weight so edges aren’t zeroed out
    weight = baseline + (1 - baseline) * weight;
    // final local amplitude for this column
    const localAmp = boosted * weight;

    // how many rows to light here
    const litRows = Math.round(localAmp * maxRows);

    // light from the bottom up
    for (let y = maxRows - litRows; y < maxRows; y++) {
      if (y >= 0) setLED(x, y, true);
    }
  }

  // 4) schedule next frame
  requestAnimationFrame(drawVU);
}*/
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
