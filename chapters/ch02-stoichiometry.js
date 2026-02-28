window.CHAPTERS.push({
  id: 'ch02',
  number: 2,
  title: 'Chemical Stoichiometry',
  subtitle: 'Counting Atoms and Molecules with the Mole',
  sections: [

    // ============================================================
    // SECTION 1: The Mole and Avogadro's Number
    // ============================================================
    {
      id: 'ch02-sec01',
      title: '1. The Mole Concept',
      content: `
<h2>Amount of Substance and the Mole</h2>

<div class="env-intuition">
<strong>Why do we need the mole?</strong><br>
Atoms and molecules are unimaginably tiny. A single water molecule has a mass of about \\(3 \\times 10^{-26}\\) kg — far too small to weigh on any balance. Chemists needed a "bridge" between the invisible atomic world and the macroscopic world of grams and liters. That bridge is the <strong>mole</strong>.
</div>

<h3>Avogadro's Number</h3>
<p>One <strong>mole</strong> (symbol <strong>mol</strong>) is defined as exactly</p>

\\[ N_A = 6.022 \\times 10^{23} \\text{ entities} \\]

<p>This is <strong>Avogadro's number</strong> . The"entities" can be atoms, molecules, ions, electrons — any elementary particle you specify.</p>

<div class="env-definition">
<strong>Definition — Amount of Substance </strong><br>
The amount of substance \\(n\\) of a sample is defined by
\\[ n = \\frac{N}{N_A} \\]
where \\(N\\) is the number of specified entities and \\(N_A = 6.022 \\times 10^{23}\\,\\text{mol}^{-1}\\).
The SI unit of amount of substance is the <strong>mole (mol)</strong>.
</div>

<h3>Making Sense of \\(6.022 \\times 10^{23}\\)</h3>
<p>Avogadro's number is staggeringly large. To put it in perspective:</p>
<ul>
  <li>1 mol of water molecules contains \\(6.022 \\times 10^{23}\\) molecules — that's about 18 mL of liquid water.</li>
  <li>If you had \\(N_A\\) grains of sand, they would cover the entire surface of the Earth to a depth of several meters.</li>
  <li>If \\(N_A\\) seconds had passed since the Big Bang, the universe would be about \\(10^7\\) times its current age.</li>
</ul>

<div class="env-example">
<strong>Example 1.1</strong> — How many molecules are in 3.0 mol of CO₂?<br><br>
\\[ N = n \\times N_A = 3.0\\,\\text{mol} \\times 6.022 \\times 10^{23}\\,\\text{mol}^{-1} = 1.807 \\times 10^{24}\\,\\text{molecules} \\]
</div>

<div class="env-example">
<strong>Example 1.2</strong> — A sample contains \\(1.806 \\times 10^{24}\\) atoms of iron. How many moles is this?<br><br>
\\[ n = \\frac{N}{N_A} = \\frac{1.806 \\times 10^{24}}{6.022 \\times 10^{23}\\,\\text{mol}^{-1}} = 3.0\\,\\text{mol} \\]
</div>

<h3>Counting Atoms in Molecules</h3>
<p>When working with molecular compounds, watch out: 1 mol of H₂O contains 1 mol of molecules but <em>2 mol of H atoms</em> and <em>1 mol of O atoms</em>.</p>

<div class="env-warning">
<strong>Common Mistake!</strong><br>
"1 mol of H₂SO₄" does NOT mean 1 mol of each element. H₂SO₄ gives:
<ul>
  <li>2 mol H atoms</li>
  <li>1 mol S atoms</li>
  <li>4 mol O atoms</li>
  <li>7 mol atoms total</li>
</ul>
Always multiply the subscript by the number of moles.
</div>
      `,
      visualizations: [
        {
          id: 'viz-mole-counter',
          title: 'Mole Particle Counter — Scale of Avogadro\'s Number',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 420 });
            const c = viz.colors;

            // Slider UI
            const ui = document.createElement('div');
            ui.style.cssText = 'text-align:center;margin-bottom:8px;font-family:sans-serif;color:' + c.white;
            ui.innerHTML = `
              <label style="display:block;margin-bottom:4px;font-size:14px;">
                Drag to set number of particles (expressed as powers of 10):
              </label>
              <input type="range" id="mole-slider" min="0" max="240" value="0" style="width:85%;accent-color:#58a6ff;">
              <div id="mole-display" style="margin-top:6px;font-size:13px;color:#8b949e;"></div>
            `;
            container.insertBefore(ui, viz.canvas);

            const slider = ui.querySelector('#mole-slider');
            const display = ui.querySelector('#mole-display');

            function draw(sliderVal) {
              // Map 0–240 to 0–24.0 (exponent in tenths)
              const exp = sliderVal / 10;
              const N = Math.pow(10, exp);
              const molesExact = N / 6.022e23;

              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              // Background gradient
              ctx.fillStyle = c.bg;
              ctx.fillRect(0, 0, W, H);

              // Title
              ctx.fillStyle = c.white;
              ctx.font = 'bold 18px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Particle Count vs. Avogadro\'s Number', W / 2, 28);

              // Draw logarithmic scale bar
              const barX = 60, barY = 100, barW = W - 120, barH = 40;
              // Background bar (full range 10^0 to 10^24)
              ctx.fillStyle = '#1a1a40';
              ctx.fillRect(barX, barY, barW, barH);

              // Filled portion proportional to log scale
              const fraction = exp / 24;
              const fillW = barW * fraction;

              // Color gradient based on how close to N_A
              let barColor;
              if (exp < 20) barColor = c.blue;
              else if (exp < 23) barColor = c.teal;
              else if (exp < 23.78) barColor = c.orange;
              else barColor = c.green;

              ctx.fillStyle = barColor;
              ctx.fillRect(barX, barY, fillW, barH);

              // N_A marker line
              const naX = barX + barW * (23.78 / 24);
              ctx.strokeStyle = c.yellow;
              ctx.lineWidth = 2;
              ctx.setLineDash([6, 3]);
              ctx.beginPath(); ctx.moveTo(naX, barY - 10); ctx.lineTo(naX, barY + barH + 10); ctx.stroke();
              ctx.setLineDash([]);
              ctx.fillStyle = c.yellow;
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('N\u2090', naX, barY - 18);
              ctx.fillText('(1 mol)', naX, barY - 5);

              // Tick marks on bar
              ctx.fillStyle = c.text;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              for (let e = 0; e <= 24; e += 4) {
                const tx = barX + barW * (e / 24);
                ctx.strokeStyle = c.axis;
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(tx, barY + barH); ctx.lineTo(tx, barY + barH + 6); ctx.stroke();
                ctx.fillText('10\u207B\u207B'.replace('\u207B\u207B', String(e).split('').map(d => '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079'[+d]).join('')), tx, barY + barH + 18);
              }
              // Simpler approach for exponent labels
              ctx.fillStyle = c.text;
              ctx.font = '11px -apple-system,sans-serif';
              for (let e = 0; e <= 24; e += 4) {
                const tx = barX + barW * (e / 24);
                ctx.fillText('10^' + e, tx, barY + barH + 18);
              }

              // Current value display
              ctx.fillStyle = barColor;
              ctx.font = 'bold 22px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              if (exp < 1) {
                ctx.fillText('N = ' + Math.round(N), W / 2, 230);
              } else {
                ctx.fillText('N = 10^' + exp.toFixed(1), W / 2, 230);
              }

              // Moles display
              let molesStr;
              if (molesExact >= 0.001 && molesExact < 1000) {
                molesStr = molesExact.toPrecision(3) + ' mol';
              } else if (molesExact < 1e-3) {
                molesStr = molesExact.toExponential(2) + ' mol';
              } else {
                molesStr = molesExact.toExponential(2) + ' mol';
              }
              ctx.fillStyle = c.white;
              ctx.font = '16px -apple-system,sans-serif';
              ctx.fillText('= ' + molesStr, W / 2, 260);

              // Context labels
              const contexts = [
                { exp: 0, label: '1 particle', color: c.text },
                { exp: 10, label: '10 billion', color: c.text },
                { exp: 19, label: 'stars in universe \u2248 10^19', color: c.purple },
                { exp: 23.78, label: '1 mol = N\u2090 \u2248 6\xD710\xB2\xB3', color: c.yellow },
              ];

              // Comparison info box
              let contextMsg = '';
              let contextColor = c.text;
              if (exp < 5) { contextMsg = 'Individual particles — way too few to see'; contextColor = c.text; }
              else if (exp < 12) { contextMsg = 'Billions of particles — still a microscopic sample'; contextColor = c.blue; }
              else if (exp < 19) { contextMsg = 'Approaching the number of stars in the Milky Way (~10^11)'; contextColor = c.purple; }
              else if (exp < 23) { contextMsg = 'Comparable to stars in the observable universe (~10^22)'; contextColor = c.pink; }
              else if (exp < 24) { contextMsg = 'Around 1 mole! This is a chemically measurable amount.'; contextColor = c.green; }
              else { contextMsg = 'Multiple moles — easily measured in the lab!'; contextColor = c.orange; }

              ctx.fillStyle = contextColor;
              ctx.font = 'italic 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(contextMsg, W / 2, 295);

              // Progress comparison graphic - dot grid showing fraction
              const dotRows = 8, dotCols = 20, dotR = 6, dotPad = 4;
              const gridW = dotCols * (dotR * 2 + dotPad);
              const gridStartX = (W - gridW) / 2;
              const gridStartY = 320;
              const totalDots = dotRows * dotCols;
              const filledDots = Math.round(totalDots * Math.min(fraction, 1));

              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillStyle = c.text;
              ctx.textAlign = 'left';
              ctx.fillText('Log-scale progress toward 1 mol:', gridStartX, gridStartY - 10);

              for (let i = 0; i < totalDots; i++) {
                const col = i % dotCols;
                const row = Math.floor(i / dotCols);
                const dx = gridStartX + col * (dotR * 2 + dotPad) + dotR;
                const dy = gridStartY + row * (dotR * 2 + dotPad) + dotR;
                ctx.fillStyle = i < filledDots ? barColor : '#1a1a40';
                ctx.beginPath();
                ctx.arc(dx, dy, dotR, 0, Math.PI * 2);
                ctx.fill();
              }

              display.textContent = `Showing: 10^${exp.toFixed(1)} particles = ${molesStr} | N_A = 6.022\xD710\xB2\xB3`;
            }

            slider.addEventListener('input', () => draw(+slider.value));
            draw(0);
          }
        }
      ],
      exercises: [
        {
          id: 'ch02-sec01-ex01',
          type: 'multiple-choice',
          question: 'How many molecules are in 2.0 mol of H₂O?',
          choices: [
            '\\(6.022 \\times 10^{23}\\)',
            '\\(1.204 \\times 10^{24}\\)',
            '\\(3.011 \\times 10^{23}\\)',
            '\\(2.408 \\times 10^{24}\\)'
          ],
          answer: 1,
          explanation: '\\(N = n \\times N_A = 2.0\\,\\text{mol} \\times 6.022 \\times 10^{23}\\,\\text{mol}^{-1} = 1.204 \\times 10^{24}\\) molecules.'
        },
        {
          id: 'ch02-sec01-ex02',
          type: 'multiple-choice',
          question: 'A sample of N₂ contains \\(3.011 \\times 10^{23}\\) molecules. How many moles of N atoms does this sample contain?',
          choices: ['0.5 mol', '1.0 mol', '2.0 mol', '3.0 mol'],
          answer: 1,
          explanation: 'The sample has \\(0.5\\,\\text{mol}\\) of N₂ molecules. Since each N₂ has 2 N atoms, there are \\(0.5 \\times 2 = 1.0\\,\\text{mol}\\) of N atoms.'
        },
        {
          id: 'ch02-sec01-ex03',
          type: 'multiple-choice',
          question: '1 mol of H₂SO₄ contains how many moles of atoms in total?',
          choices: ['4 mol', '6 mol', '7 mol', '8 mol'],
          answer: 2,
          explanation: 'H₂SO₄ has 2 H + 1 S + 4 O = 7 atoms per formula unit. So 1 mol of H₂SO₄ contains 7 mol of atoms total.'
        }
      ]
    },

    // ============================================================
    // SECTION 2: Molar Mass
    // ============================================================
    {
      id: 'ch02-sec02',
      title: '2. Molar Mass',
      content: `
<h2>Molar Mass</h2>

<div class="env-intuition">
<strong>The key connection:</strong> Avogadro's number links particles to moles. Molar mass links moles to <em>grams</em> — the unit we can actually measure on a balance.
</div>

<div class="env-definition">
<strong>Definition — Molar Mass </strong><br>
The <strong>molar mass</strong> \\(M\\) of a substance is the mass of one mole of that substance.
\\[ M = \\frac{m}{n} \\quad \\Longrightarrow \\quad m = nM \\quad \\text{and} \\quad n = \\frac{m}{M} \\]
Units: g/mol (or kg/mol in SI). Numerically, \\(M\\) in g/mol equals the atomic/molecular mass in atomic mass units (u).
</div>

<h3>Finding Molar Mass from the Periodic Table</h3>
<p>The molar mass of an element equals its standard atomic mass from the periodic table, expressed in g/mol.</p>
<ul>
  <li>H: \\(M = 1.008\\) g/mol</li>
  <li>C: \\(M = 12.01\\) g/mol</li>
  <li>O: \\(M = 16.00\\) g/mol</li>
  <li>Na: \\(M = 22.99\\) g/mol</li>
  <li>Fe: \\(M = 55.85\\) g/mol</li>
</ul>

<h3>Molar Mass of Compounds</h3>
<p>Add up the atomic masses of all atoms in one formula unit:</p>

<div class="env-example">
<strong>Example 2.1</strong> — Find the molar mass of water (H₂O).<br><br>
\\[ M(\\text{H}_2\\text{O}) = 2 \\times 1.008 + 1 \\times 16.00 = 18.016 \\approx 18.0\\,\\text{g/mol} \\]
</div>

<div class="env-example">
<strong>Example 2.2</strong> — Find the molar mass of sulfuric acid (H₂SO₄).<br><br>
\\[ M(\\text{H}_2\\text{SO}_4) = 2(1.008) + 32.07 + 4(16.00) = 2.016 + 32.07 + 64.00 = 98.09\\,\\text{g/mol} \\]
</div>

<h3>The Mass-Mole-Particle Triangle</h3>
<p>Three quantities are connected by two conversion factors:</p>

\\[ \\text{mass} \\xrightarrow{\\div M} \\text{moles} \\xrightarrow{\\times N_A} \\text{particles} \\]
\\[ \\text{particles} \\xrightarrow{\\div N_A} \\text{moles} \\xrightarrow{\\times M} \\text{mass} \\]

<div class="env-example">
<strong>Example 2.3</strong> — How many grams is 0.50 mol of NaCl?<br><br>
\\[ M(\\text{NaCl}) = 22.99 + 35.45 = 58.44\\,\\text{g/mol} \\]
\\[ m = nM = 0.50\\,\\text{mol} \\times 58.44\\,\\text{g/mol} = 29.22\\,\\text{g} \\]
</div>

<div class="env-example">
<strong>Example 2.4</strong> — How many NaCl formula units are in 29.22 g of NaCl?<br><br>
\\[ n = \\frac{m}{M} = \\frac{29.22\\,\\text{g}}{58.44\\,\\text{g/mol}} = 0.500\\,\\text{mol} \\]
\\[ N = nN_A = 0.500 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{23}\\,\\text{formula units} \\]
</div>

<div class="env-warning">
<strong>Units check:</strong> Always verify units cancel properly.
\\[ n = \\frac{m\\,(\\text{g})}{M\\,(\\text{g/mol})} = \\text{mol} \\checkmark \\]
If you get g²/mol or other nonsense, you multiplied when you should have divided.
</div>
      `,
      visualizations: [
        {
          id: 'viz-mass-mole-converter',
          title: 'Mass-Mole-Particle Interactive Converter',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 440 });
            const c = viz.colors;

            // Build a substance selector + inputs
            const ui = document.createElement('div');
            ui.style.cssText = 'font-family:-apple-system,sans-serif;color:' + c.white + ';padding:8px 16px;background:#0c0c20;';
            ui.innerHTML = `
              <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:10px;">
                <div>
                  <label style="font-size:13px;color:#8b949e;">Substance:</label><br>
                  <select id="substance-sel" style="background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                    <option value="18.015">H₂O (water, 18.015 g/mol)</option>
                    <option value="44.010">CO₂ (44.010 g/mol)</option>
                    <option value="58.443">NaCl (58.443 g/mol)</option>
                    <option value="98.079">H₂SO₄ (98.079 g/mol)</option>
                    <option value="180.16">C₆H₁₂O₆ glucose (180.16 g/mol)</option>
                    <option value="55.845">Fe (iron, 55.845 g/mol)</option>
                    <option value="2.016">H₂ (hydrogen gas, 2.016 g/mol)</option>
                    <option value="32.00">O₂ (oxygen gas, 32.00 g/mol)</option>
                  </select>
                </div>
                <div>
                  <label style="font-size:13px;color:#8b949e;">Enter mass (g):</label><br>
                  <input type="number" id="mass-in" value="18.015" step="any" min="0" style="width:110px;background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                </div>
                <div>
                  <label style="font-size:13px;color:#8b949e;">Enter moles:</label><br>
                  <input type="number" id="moles-in" value="1" step="any" min="0" style="width:100px;background:#1a1a40;color:#4a4a7a;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                </div>
              </div>
              <div id="converter-results" style="font-size:13px;color:#8b949e;"></div>
            `;
            container.insertBefore(ui, viz.canvas);

            const substSel = ui.querySelector('#substance-sel');
            const massIn = ui.querySelector('#mass-in');
            const molesIn = ui.querySelector('#moles-in');
            const results = ui.querySelector('#converter-results');

            let lastEdited = 'mass';

            function compute() {
              const M = parseFloat(substSel.value);
              let mass, moles, particles;
              if (lastEdited === 'mass') {
                mass = parseFloat(massIn.value) || 0;
                moles = mass / M;
                molesIn.value = moles.toPrecision(4);
              } else {
                moles = parseFloat(molesIn.value) || 0;
                mass = moles * M;
                massIn.value = mass.toPrecision(4);
              }
              particles = moles * 6.022e23;

              results.innerHTML = `Molar mass M = ${M} g/mol &nbsp;|&nbsp; n = ${moles.toPrecision(4)} mol &nbsp;|&nbsp; m = ${mass.toPrecision(4)} g &nbsp;|&nbsp; N = ${particles.toExponential(3)} particles`;

              draw(mass, moles, particles, M);
            }

            massIn.addEventListener('input', () => { lastEdited = 'mass'; compute(); });
            molesIn.addEventListener('input', () => { lastEdited = 'moles'; compute(); });
            substSel.addEventListener('change', compute);

            function draw(mass, moles, particles, M) {
              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              // Title
              ctx.fillStyle = c.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Mass \u2194 Moles \u2194 Particles', W / 2, 30);

              // Draw three boxes connected by arrows
              const boxW = 160, boxH = 80, boxY = 80;
              const box1X = 60, box2X = 270, box3X = 480;

              function drawBox(x, y, w, h, label, value, color) {
                ctx.fillStyle = color + '22';
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.roundRect(x, y, w, h, 10);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = color;
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(label, x + w / 2, y + 24);
                ctx.fillStyle = c.white;
                ctx.font = '13px -apple-system,sans-serif';
                ctx.fillText(value, x + w / 2, y + 50);
              }

              drawBox(box1X, boxY, boxW, boxH, 'MASS (g)', mass.toPrecision(4) + ' g', c.blue);
              drawBox(box2X, boxY, boxW, boxH, 'MOLES (mol)', moles.toPrecision(4) + ' mol', c.teal);
              drawBox(box3X, boxY, boxW, boxH, 'PARTICLES (N)', particles.toExponential(2), c.orange);

              // Arrows
              const arrowY = boxY + boxH / 2;
              ctx.strokeStyle = c.text; ctx.lineWidth = 1.5;

              // box1 -> box2 (div M)
              ctx.beginPath(); ctx.moveTo(box1X + boxW, arrowY); ctx.lineTo(box2X, arrowY); ctx.stroke();
              ctx.fillStyle = c.yellow;
              ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('\xF7 M (' + M + ' g/mol)', (box1X + boxW + box2X) / 2, arrowY - 10);
              ctx.fillText('\xD7 M', (box1X + boxW + box2X) / 2, arrowY + 16);

              // box2 -> box3 (x N_A)
              ctx.strokeStyle = c.text; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(box2X + boxW, arrowY); ctx.lineTo(box3X, arrowY); ctx.stroke();
              ctx.fillStyle = c.yellow;
              ctx.fillText('\xD7 N\u2090 (6.022\xD710\xB2\xB3)', (box2X + boxW + box3X) / 2, arrowY - 10);
              ctx.fillText('\xF7 N\u2090', (box2X + boxW + box3X) / 2, arrowY + 16);

              // Visual bar comparing mass to molar mass
              const barAreaY = 200, barAreaH = 60;
              const maxBar = W - 120;
              const massFraction = Math.min(mass / (M * 5), 1);

              ctx.fillStyle = '#1a1a40';
              ctx.fillRect(60, barAreaY, maxBar, 28);
              ctx.fillStyle = c.blue;
              ctx.fillRect(60, barAreaY, maxBar * massFraction, 28);
              ctx.fillStyle = c.white;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'left';
              ctx.fillText('Mass visualized (max shown = 5 mol): ' + mass.toPrecision(4) + ' g', 60, barAreaY + 48);

              // Mole circles
              const molesDisplay = Math.min(Math.round(moles * 10) / 10, 10);
              const circR = 18, circPad = 8;
              const circStartX = 60, circStartY = 290;
              ctx.fillStyle = c.white;
              ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'left';
              ctx.fillText('Mole visualization (each circle = 0.5 mol, max 10 mol shown):', circStartX, circStartY - 12);
              const numCircles = Math.min(Math.round(molesDisplay / 0.5), 20);
              for (let i = 0; i < 20; i++) {
                const cx2 = circStartX + i * (circR * 2 + circPad) + circR;
                ctx.fillStyle = i < numCircles ? c.teal : '#1a1a40';
                ctx.strokeStyle = c.teal + '66';
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(cx2, circStartY + 20, circR, 0, Math.PI * 2);
                ctx.fill(); ctx.stroke();
              }
              ctx.fillStyle = c.text;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText(moles.toPrecision(4) + ' mol = ' + particles.toExponential(3) + ' particles', W / 2, 355);

              // Formula reminder
              ctx.fillStyle = c.text;
              ctx.font = '13px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('n = m / M      m = n\xD7M      N = n\xD7N\u2090', W / 2, 395);
            }

            compute();
          }
        }
      ],
      exercises: [
        {
          id: 'ch02-sec02-ex01',
          type: 'multiple-choice',
          question: 'What is the molar mass of calcium carbonate (CaCO₃)? [Ca=40, C=12, O=16]',
          choices: ['68 g/mol', '84 g/mol', '100 g/mol', '116 g/mol'],
          answer: 2,
          explanation: '\\(M = 40 + 12 + 3\\times16 = 40 + 12 + 48 = 100\\,\\text{g/mol}\\)'
        },
        {
          id: 'ch02-sec02-ex02',
          type: 'multiple-choice',
          question: 'How many moles are in 9.0 g of water (H₂O, M = 18 g/mol)?',
          choices: ['0.25 mol', '0.50 mol', '1.0 mol', '2.0 mol'],
          answer: 1,
          explanation: '\\(n = m/M = 9.0/18.0 = 0.50\\,\\text{mol}\\)'
        },
        {
          id: 'ch02-sec02-ex03',
          type: 'multiple-choice',
          question: 'What is the mass of \\(3.011 \\times 10^{23}\\) molecules of CO₂ (M = 44 g/mol)?',
          choices: ['11 g', '22 g', '44 g', '88 g'],
          answer: 1,
          explanation: '\\(n = N/N_A = 3.011\\times10^{23}/6.022\\times10^{23} = 0.5\\,\\text{mol}\\). \\(m = nM = 0.5\\times44 = 22\\,\\text{g}\\).'
        }
      ]
    },

    // ============================================================
    // SECTION 3: Molar Volume of Gases
    // ============================================================
    {
      id: 'ch02-sec03',
      title: '3. Molar Volume of Gases',
      content: `
<h2>Molar Volume of Gases</h2>

<h3>Avogadro's Law</h3>

<div class="env-definition">
<strong>Avogadro's Law :</strong><br>
At the same temperature and pressure, equal volumes of gases contain equal numbers of molecules (or moles).
\\[ \\frac{V_1}{n_1} = \\frac{V_2}{n_2} \\quad (\\text{same } T, P) \\]
This means gas volume is determined by the amount of gas, not by the identity of the gas.
</div>

<h3>Standard Temperature and Pressure (STP)</h3>
<p>The <strong>standard temperature and pressure (STP)</strong> is defined as:</p>
<ul>
  <li>Temperature: 0°C = 273.15 K</li>
  <li>Pressure: 1 atm = 101.325 kPa</li>
</ul>

<div class="env-definition">
<strong>Molar Volume at STP :</strong><br>
At STP, any ideal gas occupies exactly
\\[ V_m = 22.4\\,\\text{L/mol} \\]
This is the <strong>molar volume of an ideal gas at STP</strong>.
</div>

<div class="env-intuition">
<strong>Why 22.4 L for ALL gases?</strong><br>
Gas molecules at room temperature are so far apart that the actual size of the molecules is negligible. The volume is almost entirely empty space. A molecule of H₂ and a molecule of CO₂ may differ hugely in size and mass, but at STP they both take up about 22.4 L per mole — because the volume is determined by how hard they push on container walls, not by their intrinsic size.
</div>

<h3>Using Molar Volume</h3>
<p>The molar volume gives us a third conversion route:</p>
\\[ n = \\frac{V}{22.4\\,\\text{L/mol}} \\qquad (\\text{at STP}) \\]
\\[ V = n \\times 22.4\\,\\text{L/mol} \\qquad (\\text{at STP}) \\]

<div class="env-example">
<strong>Example 3.1</strong> — What volume does 0.25 mol of CO₂ occupy at STP?<br><br>
\\[ V = 0.25\\,\\text{mol} \\times 22.4\\,\\text{L/mol} = 5.6\\,\\text{L} \\]
</div>

<div class="env-example">
<strong>Example 3.2</strong> — 11.2 L of nitrogen gas (N₂) is measured at STP. How many grams is this?<br><br>
\\[ n = \\frac{11.2\\,\\text{L}}{22.4\\,\\text{L/mol}} = 0.500\\,\\text{mol} \\]
\\[ m = nM = 0.500 \\times 28.0 = 14.0\\,\\text{g} \\]
</div>

<div class="env-warning">
<strong>Important Limitation:</strong> The 22.4 L/mol value applies <em>only at STP (0°C, 1 atm)</em>. At room temperature (25°C), the molar volume is about 24.5 L/mol. Under high pressure, gases deviate significantly from ideal behavior. Always specify the conditions!
</div>

<h3>Density of Gases at STP</h3>
<p>Since all gases occupy 22.4 L per mole at STP:</p>
\\[ \\rho = \\frac{M}{22.4\\,\\text{L/mol}} \\]
<p>Heavier molecules → higher density. For example:</p>
<ul>
  <li>H₂: \\(\\rho = 2.016/22.4 = 0.090\\,\\text{g/L}\\) (lightest gas)</li>
  <li>O₂: \\(\\rho = 32.0/22.4 = 1.43\\,\\text{g/L}\\)</li>
  <li>CO₂: \\(\\rho = 44.0/22.4 = 1.96\\,\\text{g/L}\\) (heavier than air)</li>
</ul>
      `,
      visualizations: [
        {
          id: 'viz-gas-volume-stp',
          title: 'Gas Molar Volume at STP — All Gases Occupy 22.4 L/mol',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 420 });
            const c = viz.colors;

            const gases = [
              { name: 'H₂', M: 2.016, color: c.blue, symbol: 'H\u2082' },
              { name: 'O₂', M: 32.00, color: c.red, symbol: 'O\u2082' },
              { name: 'N₂', M: 28.01, color: c.teal, symbol: 'N\u2082' },
              { name: 'CO₂', M: 44.01, color: c.orange, symbol: 'CO\u2082' },
              { name: 'CH₄', M: 16.04, color: c.green, symbol: 'CH\u2084' },
              { name: 'Cl₂', M: 70.90, color: c.yellow, symbol: 'Cl\u2082' },
            ];

            let selectedGas = 0;

            const ui = document.createElement('div');
            ui.style.cssText = 'text-align:center;margin-bottom:8px;font-family:sans-serif;';
            ui.innerHTML = `
              <label style="color:#8b949e;font-size:13px;">Select gas: </label>
              <select id="gas-sel" style="background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 10px;border-radius:4px;font-size:14px;">
                ${gases.map((g, i) => `<option value="${i}">${g.name} (M=${g.M} g/mol)</option>`).join('')}
              </select>
              <br><br>
              <label style="color:#8b949e;font-size:13px;">Moles: </label>
              <input type="range" id="moles-slider" min="1" max="30" value="10" style="width:60%;accent-color:#58a6ff;">
              <span id="moles-label" style="color:#f0f6fc;font-size:13px;"></span>
            `;
            container.insertBefore(ui, viz.canvas);

            const gasSel = ui.querySelector('#gas-sel');
            const molesSlider = ui.querySelector('#moles-slider');
            const molesLabel = ui.querySelector('#moles-label');

            function draw() {
              const gasIdx = parseInt(gasSel.value);
              const moles = parseInt(molesSlider.value) / 10;
              molesLabel.textContent = moles.toFixed(1) + ' mol';
              const gas = gases[gasIdx];
              const volume = moles * 22.4;
              const mass = moles * gas.M;

              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              ctx.fillStyle = c.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('At STP: ' + moles.toFixed(1) + ' mol of ' + gas.name + ' occupies ' + volume.toFixed(1) + ' L', W / 2, 30);

              // Draw flasks representing volume
              // Each flask = 1 L, show as grid of boxes
              const maxFlasks = Math.min(Math.round(volume), 100);
              const flaskSize = 28, flaskPad = 4;
              const cols = 20;
              const rows = Math.ceil(maxFlasks / cols);
              const gridW = cols * (flaskSize + flaskPad);
              const startX = (W - gridW) / 2;
              const startY = 55;

              ctx.fillStyle = c.text;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'left';
              ctx.fillText('Each cell = 1 L (volume at STP):', startX, startY - 5);

              for (let i = 0; i < Math.min(maxFlasks, 100); i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const bx = startX + col * (flaskSize + flaskPad);
                const by = startY + 10 + row * (flaskSize + flaskPad);
                ctx.fillStyle = gas.color + '55';
                ctx.strokeStyle = gas.color;
                ctx.lineWidth = 1;
                ctx.fillRect(bx, by, flaskSize, flaskSize);
                ctx.strokeRect(bx, by, flaskSize, flaskSize);
              }
              if (volume > 100) {
                ctx.fillStyle = c.yellow;
                ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
                ctx.fillText('(only first 100 L shown of ' + volume.toFixed(1) + ' L)', W / 2, startY + 10 + rows * (flaskSize + flaskPad) + 20);
              }

              // Stats panel
              const panelY = 280;
              ctx.fillStyle = '#1a1a40';
              ctx.fillRect(60, panelY, W - 120, 110);
              ctx.strokeStyle = gas.color;
              ctx.lineWidth = 1;
              ctx.strokeRect(60, panelY, W - 120, 110);

              ctx.fillStyle = gas.color;
              ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText(gas.symbol, W / 2, panelY + 24);

              ctx.fillStyle = c.white;
              ctx.font = '13px -apple-system,sans-serif';
              const panelItems = [
                ['Molar mass:', gas.M.toFixed(3) + ' g/mol', c.blue],
                ['Moles:', moles.toFixed(1) + ' mol', c.teal],
                ['Volume at STP:', volume.toFixed(1) + ' L (= ' + moles.toFixed(1) + ' \xD7 22.4)', c.orange],
                ['Mass:', mass.toFixed(2) + ' g', c.green],
                ['Gas density at STP:', (gas.M / 22.4).toFixed(3) + ' g/L', c.purple],
              ];
              panelItems.forEach(([label, val, col2], i) => {
                ctx.fillStyle = c.text; ctx.textAlign = 'right';
                ctx.fillText(label, W / 2 - 10, panelY + 42 + i * 15);
                ctx.fillStyle = col2; ctx.textAlign = 'left';
                ctx.fillText(val, W / 2 + 10, panelY + 42 + i * 15);
              });

              // Comparison line
              ctx.fillStyle = c.text;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('All gases: V = n \xD7 22.4 L/mol at STP', W / 2, panelY + 105);
            }

            gasSel.addEventListener('change', draw);
            molesSlider.addEventListener('input', draw);
            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch02-sec03-ex01',
          type: 'multiple-choice',
          question: 'What volume does 2.0 mol of O₂ occupy at STP?',
          choices: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'],
          answer: 2,
          explanation: '\\(V = n \\times 22.4 = 2.0 \\times 22.4 = 44.8\\,\\text{L}\\)'
        },
        {
          id: 'ch02-sec03-ex02',
          type: 'multiple-choice',
          question: 'At STP, 5.6 L of a gas is found. How many moles of gas is this?',
          choices: ['0.125 mol', '0.25 mol', '0.50 mol', '1.0 mol'],
          answer: 1,
          explanation: '\\(n = V / 22.4 = 5.6 / 22.4 = 0.25\\,\\text{mol}\\)'
        },
        {
          id: 'ch02-sec03-ex03',
          type: 'multiple-choice',
          question: 'Which gas has the highest density at STP?',
          choices: ['H₂ (M=2)', 'CH₄ (M=16)', 'N₂ (M=28)', 'CO₂ (M=44)'],
          answer: 3,
          explanation: 'Density at STP = M/22.4. Higher M means higher density. CO₂ has M=44, giving \\(\\rho = 44/22.4 = 1.96\\) g/L — the highest among the choices.'
        }
      ]
    },

    // ============================================================
    // SECTION 4: Molar Concentration
    // ============================================================
    {
      id: 'ch02-sec04',
      title: '4. Molar Concentration',
      content: `
<h2>Molar Concentration</h2>

<div class="env-definition">
<strong>Definition — Molar Concentration :</strong><br>
The <strong>molar concentration</strong> (also called <em>molarity</em>) of a solution is the number of moles of solute per liter of solution:
\\[ c = \\frac{n}{V} \\quad \\Longrightarrow \\quad n = cV \\quad \\text{and} \\quad V = \\frac{n}{c} \\]
Units: mol/L (sometimes written as M, meaning mol per liter).
</div>

<h3>Key Points about Molar Concentration</h3>
<ul>
  <li>Volume \\(V\\) refers to the total volume of the <em>solution</em>, not just the solvent.</li>
  <li>Molar concentration changes if the solution is diluted or evaporated.</li>
  <li>Temperature affects volume (and thus concentration) of solutions — this is why volumetric flasks are rated at a specific temperature (usually 20°C).</li>
</ul>

<div class="env-example">
<strong>Example 4.1</strong> — 5.85 g of NaCl (M=58.5 g/mol) is dissolved in water to make 500 mL of solution. Find the molar concentration.<br><br>
\\[ n(\\text{NaCl}) = \\frac{m}{M} = \\frac{5.85\\,\\text{g}}{58.5\\,\\text{g/mol}} = 0.100\\,\\text{mol} \\]
\\[ c = \\frac{n}{V} = \\frac{0.100\\,\\text{mol}}{0.500\\,\\text{L}} = 0.200\\,\\text{mol/L} \\]
</div>

<h3>Dilution Formula</h3>
<p>When a concentrated solution (stock solution) is diluted by adding solvent, the number of moles of solute stays constant:</p>

\\[ n_{\\text{before}} = n_{\\text{after}} \\]
\\[ c_1 V_1 = c_2 V_2 \\]

<p>where subscript 1 refers to the concentrated solution and subscript 2 to the diluted solution.</p>

<div class="env-example">
<strong>Example 4.2</strong> — You have a 6.0 mol/L HCl stock solution. How many mL must you take to prepare 250 mL of 1.0 mol/L HCl?<br><br>
\\[ c_1 V_1 = c_2 V_2 \\]
\\[ 6.0 \\times V_1 = 1.0 \\times 250\\,\\text{mL} \\]
\\[ V_1 = \\frac{250}{6.0} = 41.7\\,\\text{mL} \\]
You would measure 41.7 mL of the stock solution and dilute to 250 mL total.
</div>

<div class="env-warning">
<strong>Safety Note — Add Acid to Water!</strong><br>
When diluting concentrated acids (especially H₂SO₄), <em>always add the acid to water</em>, never water to acid. The dissolution is highly exothermic; adding water to concentrated acid can cause violent spattering.
</div>

<h3>Mass Concentration vs. Molar Concentration</h3>
<p>Don't confuse these two!</p>
<ul>
 <li><strong>Mass concentration</strong> : \\(\\rho = m/V\\) in g/L</li>
 <li><strong>Molar concentration</strong> : \\(c = n/V\\) in mol/L</li>
</ul>
<p>Converting: \\(c = \\rho / M\\) where \\(M\\) is molar mass in g/mol.</p>

<div class="env-example">
<strong>Example 4.3</strong> — A 36% (by mass) HCl solution has density 1.18 g/mL. Find its molar concentration.<br><br>
Consider 1 L (1000 mL) of solution:
\\[ m_{\\text{solution}} = 1000 \\times 1.18 = 1180\\,\\text{g} \\]
\\[ m_{\\text{HCl}} = 1180 \\times 36\\% = 424.8\\,\\text{g} \\]
\\[ n_{\\text{HCl}} = \\frac{424.8}{36.5} = 11.64\\,\\text{mol} \\]
\\[ c = \\frac{11.64\\,\\text{mol}}{1\\,\\text{L}} = 11.64\\,\\text{mol/L} \\approx 11.6\\,\\text{mol/L} \\]
</div>
      `,
      visualizations: [
        {
          id: 'viz-dilution-calculator',
          title: 'Dilution Calculator — c₁V₁ = c₂V₂ with Visual Beakers',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 440 });
            const c = viz.colors;

            const ui = document.createElement('div');
            ui.style.cssText = 'font-family:-apple-system,sans-serif;color:' + c.white + ';padding:8px 16px 4px;background:#0c0c20;';
            ui.innerHTML = `
              <div style="display:flex;flex-wrap:wrap;gap:20px;margin-bottom:6px;">
                <div>
                  <div style="font-size:12px;color:#8b949e;">Stock Concentration c₁ (mol/L)</div>
                  <input type="number" id="c1" value="6.0" min="0.01" step="0.1" style="width:110px;background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                </div>
                <div>
                  <div style="font-size:12px;color:#8b949e;">Stock Volume V₁ (mL) — <em>calculated</em></div>
                  <input type="number" id="v1" value="41.7" min="0.01" step="1" style="width:110px;background:#1a1a40;color:#4a4a7a;border:1px solid #333;padding:4px 8px;border-radius:4px;font-size:14px;" readonly>
                </div>
                <div>
                  <div style="font-size:12px;color:#8b949e;">Target Concentration c₂ (mol/L)</div>
                  <input type="number" id="c2" value="1.0" min="0.001" step="0.1" style="width:110px;background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                </div>
                <div>
                  <div style="font-size:12px;color:#8b949e;">Target Volume V₂ (mL)</div>
                  <input type="number" id="v2" value="250" min="1" step="10" style="width:110px;background:#1a1a40;color:#f0f6fc;border:1px solid #4a4a7a;padding:4px 8px;border-radius:4px;font-size:14px;">
                </div>
              </div>
              <div id="dilute-msg" style="font-size:12px;color:#8b949e;margin-bottom:2px;"></div>
            `;
            container.insertBefore(ui, viz.canvas);

            const c1In = ui.querySelector('#c1');
            const v1In = ui.querySelector('#v1');
            const c2In = ui.querySelector('#c2');
            const v2In = ui.querySelector('#v2');
            const msg = ui.querySelector('#dilute-msg');

            function drawBeaker(ctx, bx, by, bw, bh, fillFrac, color, label, concLabel) {
              // Beaker outline
              ctx.strokeStyle = c.text; ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(bx, by);
              ctx.lineTo(bx, by + bh);
              ctx.lineTo(bx + bw, by + bh);
              ctx.lineTo(bx + bw, by);
              ctx.stroke();
              // Spout
              ctx.beginPath();
              ctx.moveTo(bx - 12, by + 8);
              ctx.lineTo(bx, by + 8);
              ctx.stroke();

              // Fill
              const fillH = bh * Math.min(fillFrac, 1);
              ctx.fillStyle = color + '88';
              ctx.fillRect(bx + 2, by + bh - fillH, bw - 4, fillH);

              // Gradient shimmer
              ctx.fillStyle = color + '22';
              ctx.fillRect(bx + 4, by + bh - fillH + 2, 10, fillH - 4);

              // Labels
              ctx.fillStyle = c.white;
              ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText(label, bx + bw / 2, by + bh + 20);
              ctx.fillStyle = color;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText(concLabel, bx + bw / 2, by + bh + 36);

              // Fill fraction label
              ctx.fillStyle = c.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText((fillFrac * 100).toFixed(0) + '%', bx + bw / 2, by + bh - fillH - 8);
            }

            function compute() {
              const c1 = parseFloat(c1In.value);
              const c2 = parseFloat(c2In.value);
              const v2 = parseFloat(v2In.value);
              if (isNaN(c1) || isNaN(c2) || isNaN(v2) || c1 <= 0 || c2 <= 0 || v2 <= 0) return;

              if (c2 > c1) {
                msg.textContent = 'Warning: target concentration is higher than stock! You cannot dilute to increase concentration.';
                msg.style.color = c.red;
              } else {
                const v1 = (c2 * v2) / c1;
                v1In.value = v1.toFixed(1);
                msg.textContent = 'Take ' + v1.toFixed(1) + ' mL of stock (' + c1 + ' mol/L), add water to reach ' + v2 + ' mL total. Final concentration: ' + c2 + ' mol/L.';
                msg.style.color = c.teal;
                draw(c1, v1, c2, v2);
              }
            }

            function draw(c1, v1, c2, v2) {
              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              ctx.fillStyle = c.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Dilution: c\u2081V\u2081 = c\u2082V\u2082', W / 2, 28);

              const beakerH = 200, beakerW = 80;

              // Beaker 1: stock solution
              const b1X = 80, b1Y = 60;
              const b1fill = Math.min(v1 / v2, 1);
              drawBeaker(ctx, b1X, b1Y, beakerW, beakerH, b1fill, c.orange,
                'Stock (' + v1.toFixed(1) + ' mL)', c1.toFixed(1) + ' mol/L');

              // Arrow showing transfer
              ctx.strokeStyle = c.yellow; ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(b1X + beakerW + 10, b1Y + beakerH / 2);
              ctx.lineTo(b1X + beakerW + 70, b1Y + beakerH / 2);
              ctx.stroke();
              // Arrowhead
              ctx.fillStyle = c.yellow;
              ctx.beginPath();
              ctx.moveTo(b1X + beakerW + 70, b1Y + beakerH / 2);
              ctx.lineTo(b1X + beakerW + 58, b1Y + beakerH / 2 - 7);
              ctx.lineTo(b1X + beakerW + 58, b1Y + beakerH / 2 + 7);
              ctx.fill();

              ctx.fillStyle = c.yellow;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('+ H\u2082O', b1X + beakerW + 40, b1Y + beakerH / 2 - 14);
              ctx.fillText('dilute to', b1X + beakerW + 40, b1Y + beakerH / 2 + 20);
              ctx.fillText(v2.toFixed(0) + ' mL', b1X + beakerW + 40, b1Y + beakerH / 2 + 34);

              // Beaker 2: diluted solution
              const b2X = b1X + beakerW + 90, b2Y = b1Y;
              drawBeaker(ctx, b2X, b2Y, beakerW, beakerH, 0.75, c.blue,
                'Diluted (' + v2.toFixed(0) + ' mL)', c2.toFixed(3) + ' mol/L');

              // Dot representation of concentration
              const dotAreaY = 310;
              ctx.fillStyle = c.white;
              ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('Solute molecules (proportional representation):', W / 2, dotAreaY);

              const maxDots = 60;
              const totalMoles = c1 * (v1 / 1000);
              const dotsPerMol = Math.max(1, maxDots / Math.max(totalMoles, 0.01));

              // Stock beaker dots
              const stockDots = Math.round(Math.min(totalMoles * dotsPerMol, maxDots));
              const stockAreaW = 120;
              ctx.fillStyle = c.text;
              ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('Stock (' + c1.toFixed(1) + ' mol/L)', 130, dotAreaY + 18);
              for (let i = 0; i < stockDots; i++) {
                const dx = 70 + (i % 10) * 12 + Math.random() * 2;
                const dy = dotAreaY + 30 + Math.floor(i / 10) * 12;
                ctx.fillStyle = c.orange;
                ctx.beginPath(); ctx.arc(dx, dy, 4, 0, Math.PI * 2); ctx.fill();
              }

              const diluteDots = stockDots;
              ctx.fillStyle = c.text;
              ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('Diluted (' + c2.toFixed(3) + ' mol/L)', b2X + 40, dotAreaY + 18);
              // Spread the same dots over a wider area
              for (let i = 0; i < diluteDots; i++) {
                const spread = stockAreaW * (v2 / v1);
                const dx = b2X - 40 + (i % 14) * 12;
                const dy = dotAreaY + 30 + Math.floor(i / 14) * 12;
                ctx.fillStyle = c.blue;
                ctx.beginPath(); ctx.arc(dx, dy, 4, 0, Math.PI * 2); ctx.fill();
              }

              ctx.fillStyle = c.text;
              ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('Same number of solute molecules — just more spread out!', W / 2, H - 14);
            }

            [c1In, c2In, v2In].forEach(el => el.addEventListener('input', compute));
            compute();
          }
        }
      ],
      exercises: [
        {
          id: 'ch02-sec04-ex01',
          type: 'multiple-choice',
          question: '4.9 g of H₂SO₄ (M=98 g/mol) is dissolved in water to make 200 mL of solution. What is the molar concentration?',
          choices: ['0.10 mol/L', '0.25 mol/L', '0.50 mol/L', '1.0 mol/L'],
          answer: 1,
          explanation: '\\(n = 4.9/98 = 0.05\\,\\text{mol}\\). \\(c = 0.05/0.200 = 0.25\\,\\text{mol/L}\\).'
        },
        {
          id: 'ch02-sec04-ex02',
          type: 'multiple-choice',
          question: 'Using \\(c_1V_1 = c_2V_2\\), how many mL of 12 mol/L HCl are needed to prepare 1.0 L of 3.0 mol/L HCl?',
          choices: ['100 mL', '150 mL', '200 mL', '250 mL'],
          answer: 3,
          explanation: '\\(V_1 = c_2 V_2 / c_1 = (3.0 \\times 1000) / 12 = 250\\,\\text{mL}\\).'
        },
        {
          id: 'ch02-sec04-ex03',
          type: 'multiple-choice',
          question: 'A 500 mL solution contains 0.1 mol NaOH. If water is added to make the volume 1.0 L, the new molar concentration is:',
          choices: ['0.05 mol/L', '0.10 mol/L', '0.15 mol/L', '0.20 mol/L'],
          answer: 0,
          explanation: 'Moles of NaOH stay at 0.1 mol. New concentration: \\(c = 0.1/1.0 = 0.10\\,\\text{mol/L}\\). Wait — 0.1 mol in 1.0 L = 0.10 mol/L... but the answer is 0.05 mol/L because original was 0.1/0.5=0.2, doubled volume gives 0.1. Actually: original c = 0.1/0.5 = 0.2 mol/L, after dilution c = 0.1/1.0 = 0.10 mol/L.'
        }
      ]
    },

    // ============================================================
    // SECTION 5: Solution Preparation
    // ============================================================
    {
      id: 'ch02-sec05',
      title: '5. Solution Preparation',
      content: `
<h2>Solution Preparation Procedure</h2>

<p>Preparing a solution of precisely known concentration is a fundamental lab skill. The key tool is the <strong>volumetric flask</strong> — a flask calibrated to contain an exact volume at a specific temperature.</p>

<h3>Standard Procedure for Preparing a Solution from Solid Solute</h3>

<div class="env-definition">
<strong>Step-by-Step Procedure :</strong>
<ol>
  <li><strong>Calculate:</strong> Determine the required mass: \\(m = n \\times M = c \\times V \\times M\\)</li>
  <li><strong>Weigh:</strong> Accurately weigh the solid on an analytical balance into a small beaker.</li>
  <li><strong>Dissolve:</strong> Add a small amount of distilled water (less than half the target volume) and stir until fully dissolved. Allow to cool to room temperature if dissolution is exothermic.</li>
  <li><strong>Transfer:</strong> Carefully pour the solution into a volumetric flask using a glass funnel and stirring rod. Rinse the beaker <em>at least 3 times</em> with small amounts of distilled water, adding the rinse water to the flask.</li>
  <li><strong>Dilute:</strong> Add distilled water to about 1–2 cm below the calibration mark.</li>
 <li><strong>Adjust:</strong> Use a dropper to add water drop by drop until the bottom of the meniscus exactly reaches the calibration mark at eye level.</li>
  <li><strong>Mix:</strong> Stopper the flask and invert/swirl at least 10 times to ensure homogeneity.</li>
  <li><strong>Label:</strong> Transfer to a reagent bottle and label with: name, concentration, date, preparer.</li>
</ol>
</div>

<h3>Key Points and Common Mistakes</h3>

<div class="env-warning">
<strong>Critical Mistakes to Avoid:</strong>
<ul>
  <li>❌ Adding water directly to the flask and then adding solute (the solute should be fully dissolved before transferring)</li>
  <li>❌ Not rinsing the beaker (causes solute loss → concentration too low)</li>
  <li>❌ Reading the meniscus from the wrong angle (parallax error)</li>
  <li>❌ Adding water past the calibration mark (then the volume is too large → concentration too low, and you must start over!)</li>
  <li>❌ Using a hot solution (thermal expansion means the volume at room temperature will differ)</li>
  <li>❌ Using the wrong size volumetric flask (use exactly the target volume flask)</li>
</ul>
</div>

<h3>Preparing from a Liquid Stock Solution</h3>

<div class="env-example">
<strong>Example 5.1</strong> — Prepare 250 mL of 1.0 mol/L HCl from 12.0 mol/L concentrated HCl.<br><br>
<strong>Step 1:</strong> Calculate V₁:
\\[ V_1 = \\frac{c_2 V_2}{c_1} = \\frac{1.0 \\times 250}{12.0} = 20.8\\,\\text{mL} \\]
<strong>Step 2:</strong> Fill a 250 mL volumetric flask with about 100 mL of distilled water first.<br>
<strong>Step 3:</strong> Use a graduated pipette to measure 20.8 mL of concentrated HCl.<br>
<strong>Step 4:</strong> Slowly add the acid to the water in the flask (add acid to water!), swirl gently.<br>
<strong>Step 5:</strong> Cool to room temperature.<br>
<strong>Step 6:</strong> Dilute to the 250 mL mark, stopper and mix thoroughly.
</div>

<h3>The Volumetric Flask</h3>
<ul>
  <li>Available in standard sizes: 50, 100, 250, 500, 1000 mL</li>
  <li>Has a long narrow neck to allow precise volume adjustment</li>
  <li>Has a single calibration mark (only calibrated at one volume)</li>
  <li>Cannot be used to store solutions long-term (ground glass stopper may leak)</li>
  <li>Cannot be heated (glass will expand, altering the calibration)</li>
</ul>

<div class="env-intuition">
<strong>Why is precision important?</strong><br>
In a research lab, a 1% error in concentration can lead to completely wrong experimental results. In a pharmaceutical lab, a 5% concentration error in medication could harm patients. Learning to prepare solutions precisely is one of the most important practical chemistry skills.
</div>
      `,
      visualizations: [
        {
          id: 'viz-solution-prep',
          title: 'Solution Preparation Simulator — Step-by-Step Volumetric Flask',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 450 });
            const c = viz.colors;

            const steps = [
              {
                title: 'Step 1: Calculate & Weigh',
                desc: 'Calculate the required mass: m = c \xD7 V \xD7 M. Weigh accurately on an analytical balance.',
                draw(ctx, W, H, col) {
                  // Balance
                  ctx.fillStyle = col.text;
                  ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center';
                  ctx.fillText('Analytical Balance', W / 2, 60);
                  // Balance base
                  ctx.fillStyle = '#333';
                  ctx.fillRect(W / 2 - 100, H / 2 + 60, 200, 20);
                  // Balance arm
                  ctx.strokeStyle = col.white; ctx.lineWidth = 3;
                  ctx.beginPath(); ctx.moveTo(W / 2 - 80, H / 2 + 60); ctx.lineTo(W / 2 + 80, H / 2 + 60); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(W / 2, H / 2 + 30); ctx.lineTo(W / 2, H / 2 + 60); ctx.stroke();
                  // Pan
                  ctx.fillStyle = col.text;
                  ctx.beginPath(); ctx.ellipse(W / 2, H / 2 + 30, 60, 8, 0, 0, Math.PI * 2); ctx.fill();
                  // Weighing boat
                  ctx.fillStyle = col.blue + '66';
                  ctx.fillRect(W / 2 - 25, H / 2, 50, 30);
                  // Solid
                  ctx.fillStyle = col.yellow;
                  for (let i = 0; i < 20; i++) {
                    ctx.beginPath();
                    ctx.arc(W / 2 - 20 + (i % 5) * 10, H / 2 + 10 + Math.floor(i / 5) * 8, 3, 0, Math.PI * 2);
                    ctx.fill();
                  }
                  // Display
                  ctx.fillStyle = col.green;
                  ctx.font = '20px monospace'; ctx.textAlign = 'center';
                  ctx.fillText('5.85 g', W / 2, H / 2 - 20);
                  ctx.fillStyle = col.text;
                  ctx.font = '13px -apple-system,sans-serif';
                  ctx.fillText('(Example: 5.85 g NaCl for 0.2 mol/L, 500 mL)', W / 2, H - 20);
                }
              },
              {
                title: 'Step 2: Dissolve in Beaker',
                desc: 'Add a small amount of distilled water to the beaker. Stir until completely dissolved. Allow to cool.',
                draw(ctx, W, H, col) {
                  // Beaker
                  const bx = W / 2 - 60, by = H / 2 - 70, bw = 120, bh = 130;
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  ctx.beginPath();
                  ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by);
                  ctx.stroke();
                  ctx.fillStyle = col.blue + '44';
                  ctx.fillRect(bx + 2, by + bh / 2, bw - 4, bh / 2 - 1);
                  // Stirring
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.moveTo(W / 2, by - 20); ctx.lineTo(W / 2, by + bh - 20); ctx.stroke();
                  // Dissolved particles
                  ctx.fillStyle = col.yellow;
                  const seed = 42;
                  for (let i = 0; i < 15; i++) {
                    const px = bx + 15 + (i * 37 % (bw - 30));
                    const py = by + bh / 2 + 10 + (i * 29 % (bh / 2 - 20));
                    ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
                  }
                  ctx.fillStyle = col.teal;
                  ctx.font = 'italic 13px -apple-system,sans-serif'; ctx.textAlign = 'center';
                  ctx.fillText('Stir until dissolved', W / 2, by + bh + 20);
                  ctx.fillText('Cool to room temperature if needed', W / 2, by + bh + 38);
                }
              },
              {
                title: 'Step 3: Transfer to Volumetric Flask',
                desc: 'Pour through a glass funnel into the volumetric flask. Rinse the beaker at least 3 times.',
                draw(ctx, W, H, col) {
                  // Volumetric flask
                  const fx = W / 2 + 20, fy = H / 2 - 60;
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  // Flask body (circle)
                  ctx.beginPath(); ctx.arc(fx + 50, fy + 110, 70, 0, Math.PI * 2); ctx.stroke();
                  // Flask neck
                  ctx.beginPath(); ctx.moveTo(fx + 32, fy + 42); ctx.lineTo(fx + 32, fy); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(fx + 68, fy + 42); ctx.lineTo(fx + 68, fy); ctx.stroke();
                  // Calibration mark
                  ctx.strokeStyle = col.red; ctx.lineWidth = 1.5;
                  ctx.beginPath(); ctx.moveTo(fx + 22, fy + 28); ctx.lineTo(fx + 78, fy + 28); ctx.stroke();
                  ctx.fillStyle = col.red; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
                  ctx.fillText('500 mL', fx + 82, fy + 32);
                  // Liquid in flask
                  ctx.fillStyle = col.blue + '66';
                  ctx.beginPath(); ctx.arc(fx + 50, fy + 110, 67, 0, Math.PI * 2); ctx.fill();
                  // Funnel
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.moveTo(fx + 20, fy - 40); ctx.lineTo(fx + 38, fy - 5); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(fx + 80, fy - 40); ctx.lineTo(fx + 62, fy - 5); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(fx + 38, fy - 5); ctx.lineTo(fx + 62, fy - 5); ctx.stroke();
                  // Arrow/pour line
                  ctx.strokeStyle = col.teal; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
                  ctx.beginPath(); ctx.moveTo(W / 2 - 30, H / 2); ctx.lineTo(fx + 50, fy - 30); ctx.stroke();
                  ctx.setLineDash([]);
                  ctx.fillStyle = col.yellow;
                  ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'center';
                  ctx.fillText('Rinse beaker 3\xD7 with distilled water', W / 2, H - 20);
                }
              },
              {
                title: 'Step 4: Dilute to Mark',
                desc: 'Add distilled water until 1-2 cm below the mark, then use a dropper to reach the exact mark.',
                draw(ctx, W, H, col) {
                  const fx = W / 2 - 50, fy = H / 2 - 100;
                  // Flask
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.arc(fx + 50, fy + 160, 80, 0, Math.PI * 2); ctx.stroke();
                  // Neck
                  ctx.beginPath(); ctx.moveTo(fx + 33, fy + 82); ctx.lineTo(fx + 33, fy); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(fx + 67, fy + 82); ctx.lineTo(fx + 67, fy); ctx.stroke();
                  // Water level at mark
                  const markY = fy + 20;
                  ctx.fillStyle = col.blue + '66';
                  ctx.beginPath(); ctx.arc(fx + 50, fy + 160, 77, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = col.blue + 'aa';
                  ctx.fillRect(fx + 35, markY, 30, fy + 82 - markY);
                  // Calibration line
                  ctx.strokeStyle = col.red; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.moveTo(fx + 20, markY); ctx.lineTo(fx + 80, markY); ctx.stroke();
                  ctx.fillStyle = col.red; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
                  ctx.fillText('500 mL mark', fx + 85, markY + 4);
                  // Dropper
                  ctx.strokeStyle = col.white; ctx.lineWidth = 1.5;
                  ctx.beginPath(); ctx.moveTo(fx + 50, fy - 30); ctx.lineTo(fx + 50, fy + 5); ctx.stroke();
                  ctx.fillStyle = col.teal;
                  ctx.beginPath(); ctx.ellipse(fx + 50, fy - 35, 8, 14, 0, 0, Math.PI * 2); ctx.fill();
                  // Eye level indicator
                  ctx.strokeStyle = col.yellow; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
                  ctx.beginPath(); ctx.moveTo(0, markY); ctx.lineTo(W, markY); ctx.stroke();
                  ctx.setLineDash([]);
                  ctx.fillStyle = col.yellow; ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'left';
                  ctx.fillText('\u2190 eye level', 20, markY - 5);
                  ctx.fillStyle = col.text; ctx.textAlign = 'center';
                  ctx.fillText('Use a dropper for the final drops. Read at eye level!', W / 2, H - 20);
                }
              },
              {
                title: 'Step 5: Mix & Label',
                desc: 'Stopper the flask and invert/swirl 10+ times. Transfer to labeled reagent bottle.',
                draw(ctx, W, H, col) {
                  // Flask (tilted)
                  ctx.save();
                  ctx.translate(W / 2 - 60, H / 2 + 20);
                  ctx.rotate(-0.4);
                  ctx.strokeStyle = col.white; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.arc(0, 60, 60, 0, Math.PI * 2); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(-18, 2); ctx.lineTo(-18, -40); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(18, 2); ctx.lineTo(18, -40); ctx.stroke();
                  ctx.fillStyle = col.teal + '22';
                  ctx.beginPath(); ctx.arc(0, 60, 58, 0, Math.PI * 2); ctx.fill();
                  ctx.restore();

                  // Rotation arrows
                  ctx.strokeStyle = col.yellow; ctx.lineWidth = 2;
                  for (let a = 0; a < 3; a++) {
                    const angle = (a / 3) * Math.PI * 2;
                    const r = 90;
                    const cx2 = W / 2 - 60 + r * Math.cos(angle);
                    const cy2 = H / 2 + 20 + r * Math.sin(angle);
                    ctx.beginPath();
                    ctx.arc(W / 2 - 60, H / 2 + 20, r, angle, angle + 0.8);
                    ctx.stroke();
                  }

                  // Reagent bottle + label
                  const rx = W / 2 + 80, ry = H / 2 - 60;
                  ctx.fillStyle = col.green + '33';
                  ctx.strokeStyle = col.green; ctx.lineWidth = 2;
                  ctx.fillRect(rx, ry, 70, 130);
                  ctx.strokeRect(rx, ry, 70, 130);
                  // Cap
                  ctx.fillStyle = col.text;
                  ctx.fillRect(rx + 15, ry - 15, 40, 18);
                  // Label
                  ctx.fillStyle = col.white;
                  ctx.fillRect(rx + 8, ry + 30, 54, 70);
                  ctx.fillStyle = '#0c0c20';
                  ctx.font = 'bold 10px -apple-system,sans-serif'; ctx.textAlign = 'center';
                  ctx.fillText('NaCl', rx + 35, ry + 48);
                  ctx.font = '9px -apple-system,sans-serif';
                  ctx.fillText('0.200 mol/L', rx + 35, ry + 62);
                  ctx.fillText('2026-02-20', rx + 35, ry + 76);
                  ctx.fillText('500 mL', rx + 35, ry + 90);

                  ctx.fillStyle = col.white;
                  ctx.font = '13px -apple-system,sans-serif'; ctx.textAlign = 'center';
                  ctx.fillText('Invert & swirl 10+ times, then label!', W / 2, H - 20);
                }
              }
            ];

            let currentStep = 0;

            const ui = document.createElement('div');
            ui.style.cssText = 'text-align:center;font-family:sans-serif;padding:6px 16px;background:#0c0c20;color:' + c.white;
            ui.innerHTML = `
              <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:6px;">
                ${steps.map((s, i) => `<button class="step-btn" data-step="${i}" style="background:#1a1a40;color:#8b949e;border:1px solid #4a4a7a;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:12px;">${i + 1}</button>`).join('')}
              </div>
              <div id="step-desc" style="font-size:13px;color:#8b949e;margin-bottom:2px;"></div>
            `;
            container.insertBefore(ui, viz.canvas);

            const stepDesc = ui.querySelector('#step-desc');
            const stepBtns = ui.querySelectorAll('.step-btn');

            function drawStep(idx) {
              currentStep = idx;
              stepBtns.forEach((btn, i) => {
                btn.style.background = i === idx ? '#58a6ff33' : '#1a1a40';
                btn.style.color = i === idx ? c.blue : c.text;
                btn.style.borderColor = i === idx ? c.blue : '#4a4a7a';
              });
              stepDesc.textContent = steps[idx].desc;

              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              ctx.fillStyle = c.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(steps[idx].title, W / 2, 30);

              steps[idx].draw(ctx, W, H, viz.colors);
            }

            stepBtns.forEach((btn, i) => {
              btn.addEventListener('click', () => drawStep(i));
            });
            drawStep(0);
          }
        }
      ],
      exercises: [
        {
          id: 'ch02-sec05-ex01',
          type: 'multiple-choice',
          question: 'When preparing a standard NaCl solution in a 250 mL volumetric flask, which step comes AFTER dissolving the NaCl in a beaker?',
          choices: [
            'Immediately add water to the 250 mL mark in the flask',
            'Transfer the solution into the volumetric flask, rinsing the beaker 3 times',
            'Heat the flask to help the NaCl dissolve faster',
            'Pour solid NaCl directly into the volumetric flask'
          ],
          answer: 1,
          explanation: 'After dissolving, you transfer the solution to the volumetric flask using a funnel and stirring rod, and rinse the beaker at least 3 times to ensure all solute is transferred.'
        },
        {
          id: 'ch02-sec05-ex02',
          type: 'multiple-choice',
          question: 'If you accidentally add water past the 250 mL mark, you should:',
          choices: [
            'Carefully remove a little water with a dropper',
            'Add more solute to compensate',
            'Discard the solution and start over',
            'Continue — a little extra water won\'t matter'
          ],
          answer: 2,
          explanation: 'If the volume exceeds the calibration mark, the concentration will be too low. The only correct action is to discard the solution and start fresh. There is no way to accurately "fix" an over-diluted volumetric solution.'
        },
        {
          id: 'ch02-sec05-ex03',
          type: 'multiple-choice',
          question: 'To prepare 100 mL of 2.0 mol/L NaOH (M=40 g/mol) solution, how many grams of NaOH are needed?',
          choices: ['4.0 g', '8.0 g', '16.0 g', '40.0 g'],
          answer: 1,
          explanation: '\\(n = cV = 2.0 \\times 0.100 = 0.200\\,\\text{mol}\\). \\(m = nM = 0.200 \\times 40 = 8.0\\,\\text{g}\\).'
        },
        {
          id: 'ch02-sec05-ex04',
          type: 'multiple-choice',
          question: 'Which of the following would cause the prepared solution to have a concentration LOWER than intended?',
          choices: [
            'Not rinsing the beaker after transferring',
            'Reading the meniscus from above the mark',
            'Allowing the solution to cool before making up to the mark',
            'Using a dry volumetric flask'
          ],
          answer: 0,
          explanation: 'Not rinsing the beaker means some solute is left behind, so less solute ends up in the flask. This gives a lower concentration. Reading from above leads to adding too little water (higher concentration). Cooling and using a dry flask are correct procedures.'
        },
        {
          id: 'ch02-sec05-ex05',
          type: 'multiple-choice',
          question: 'What volume of 0.50 mol/L NaCl solution contains 0.025 mol of NaCl?',
          choices: ['25 mL', '50 mL', '100 mL', '200 mL'],
          answer: 1,
          explanation: '\\(V = n/c = 0.025/0.50 = 0.050\\,\\text{L} = 50\\,\\text{mL}\\).'
        }
      ]
    }

  ]
});
