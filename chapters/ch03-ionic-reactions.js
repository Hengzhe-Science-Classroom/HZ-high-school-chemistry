window.CHAPTERS.push({
  id: 'ch03',
  number: 3,
  title: 'Ionic Reactions',
  subtitle: 'Understanding Reactions in Aqueous Solution',
  sections: [

    // ─────────────────────────────────────────────────────────────────
    // Section 1 — Electrolytes and Non-Electrolytes
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec01',
      title: 'Electrolytes & Non-Electrolytes',
      content: `
<h2>电解质与非电解质 — Electrolytes and Non-Electrolytes</h2>

<p>When a substance is dissolved in water (or melted), it may or may not allow electric current to pass. This fundamental distinction defines <strong>electrolytes</strong> and <strong>non-electrolytes</strong>.</p>

<div class="info-box">
<strong>Key Definitions</strong>
<ul>
  <li><strong>Electrolyte (电解质)</strong> — a compound that conducts electricity in aqueous solution or molten state, because it ionizes to produce free ions.</li>
  <li><strong>Non-electrolyte (非电解质)</strong> — a compound that does NOT conduct electricity in solution or molten state.</li>
</ul>
</div>

<h3>Strong vs. Weak Electrolytes</h3>

<p>Among electrolytes, the degree of ionization (电离程度) varies enormously:</p>

<table class="data-table">
  <thead><tr><th>Category</th><th>Ionization</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>Strong electrolyte (强电解质)</td><td>100% — completely ionized</td><td>HCl, H₂SO₄, HNO₃, NaOH, KOH, NaCl, KNO₃</td></tr>
    <tr><td>Weak electrolyte (弱电解质)</td><td>Partial — equilibrium between ions and molecules</td><td>CH₃COOH (acetic acid), H₂CO₃, NH₃·H₂O, HF</td></tr>
    <tr><td>Non-electrolyte (非电解质)</td><td>None — no ions form</td><td>C₂H₅OH (ethanol), C₆H₁₂O₆ (glucose), CO₂, SO₃</td></tr>
  </tbody>
</table>

<h3>The Conductivity Experiment</h3>

<p>A simple circuit with a light bulb reveals ionization strength:</p>
<ul>
  <li><strong>Bright bulb</strong> — many free ions, strong electrolyte</li>
  <li><strong>Dim bulb</strong> — few free ions, weak electrolyte</li>
  <li><strong>Bulb off</strong> — no ions, non-electrolyte (or pure water)</li>
</ul>

<p>The visualization below lets you compare these three cases interactively.</p>

<div class="env-block" data-env="experiment">
<strong>Experiment 3.1 — Conductivity Test</strong>
Connect a battery, bulb, and two electrodes in a circuit. Dip the electrodes into different solutions:
<ol>
  <li>0.1 mol/L HCl — what do you observe?</li>
  <li>0.1 mol/L CH₃COOH — how does it differ from HCl?</li>
  <li>Ethanol solution — what happens?</li>
</ol>
Record your observations and explain each result using the concept of ionization.
</div>

<h3>Important Distinctions</h3>

<div class="info-box">
<ul>
  <li>Pure water is nearly a non-conductor — it ionizes only very slightly: \\(\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-\\)</li>
  <li>A compound must be an ionic compound or a polar covalent compound to be an electrolyte.</li>
  <li>Metallic conductors (e.g., copper wire) conduct by electron flow, NOT ion flow — they are NOT electrolytes.</li>
  <li>Mixtures are neither electrolytes nor non-electrolytes (e.g., seawater, salt solution).</li>
</ul>
</div>
      `,
      visualizations: [
        {
          id: 'ch03-viz01',
          title: 'Conductivity Experiment — Electrolyte Comparison',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 380 });
            const solutions = [
              { label: 'HCl (Strong)', ions: 20, color: viz.colors.blue, brightness: 1.0 },
              { label: 'CH₃COOH (Weak)', ions: 5, color: viz.colors.orange, brightness: 0.3 },
              { label: 'Ethanol (None)', ions: 0, color: viz.colors.text, brightness: 0.0 }
            ];
            let selected = 0;
            const ionParticles = [];

            function initParticles(count, beakerX, beakerY, w, h, positiveColor, negativeColor) {
              const arr = [];
              for (let i = 0; i < count; i++) {
                arr.push({
                  x: beakerX - w / 2 + Math.random() * w,
                  y: beakerY - h + Math.random() * h,
                  vx: (Math.random() - 0.5) * 1.5,
                  vy: (Math.random() - 0.5) * 1.5,
                  charge: i % 2 === 0 ? '+' : '-',
                  color: i % 2 === 0 ? positiveColor : negativeColor,
                  r: 7,
                  w, h,
                  bx: beakerX,
                  by: beakerY
                });
              }
              return arr;
            }

            const sel = solutions[selected];

            function rebuildParticles() {
              ionParticles.length = 0;
              const s = solutions[selected];
              if (s.ions > 0) {
                const parts = initParticles(s.ions, 360, 310, 160, 120, viz.colors.red, viz.colors.blue);
                ionParticles.push(...parts);
              }
            }
            rebuildParticles();

            // Buttons
            const ctrlDiv = document.createElement('div');
            ctrlDiv.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;';
            solutions.forEach((s, i) => {
              const btn = document.createElement('button');
              btn.textContent = s.label;
              btn.style.cssText = 'padding:5px 14px;border-radius:4px;cursor:pointer;font-size:0.8rem;border:2px solid ' + s.color + ';background:' + (i === 0 ? s.color + '33' : 'transparent') + ';color:' + s.color + ';';
              btn.addEventListener('click', () => {
                selected = i;
                rebuildParticles();
                ctrlDiv.querySelectorAll('button').forEach((b, j) => {
                  b.style.background = j === i ? solutions[j].color + '33' : 'transparent';
                });
              });
              ctrlDiv.appendChild(btn);
            });
            container.appendChild(ctrlDiv);

            viz.animate((t) => {
              viz.clear();
              const ctx = viz.ctx;

              // --- Circuit wires ---
              ctx.strokeStyle = '#555';
              ctx.lineWidth = 3;
              // top wire
              ctx.beginPath(); ctx.moveTo(100, 60); ctx.lineTo(620, 60); ctx.stroke();
              // left wire down
              ctx.beginPath(); ctx.moveTo(100, 60); ctx.lineTo(100, 230); ctx.stroke();
              // right wire down
              ctx.beginPath(); ctx.moveTo(620, 60); ctx.lineTo(620, 230); ctx.stroke();

              // --- Battery (left) ---
              ctx.strokeStyle = viz.colors.yellow; ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(100, 110); ctx.lineTo(100, 150); ctx.stroke();
              ctx.lineWidth = 5;
              ctx.beginPath(); ctx.moveTo(88, 115); ctx.lineTo(112, 115); ctx.stroke();
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(92, 125); ctx.lineTo(108, 125); ctx.stroke();
              ctx.lineWidth = 5;
              ctx.beginPath(); ctx.moveTo(88, 135); ctx.lineTo(112, 135); ctx.stroke();
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(92, 145); ctx.lineTo(108, 145); ctx.stroke();
              viz.screenText('Battery', 100, 90, viz.colors.yellow, 11);
              viz.screenText('+', 88, 115, viz.colors.red, 12, 'right');
              viz.screenText('−', 88, 145, viz.colors.blue, 12, 'right');

              // --- Bulb (top center) ---
              const bx = 360, by = 60;
              const brightness = solutions[selected].brightness;
              const glowR = 22 + Math.sin(t * 0.006) * 3 * brightness;
              if (brightness > 0) {
                ctx.fillStyle = `rgba(255, 230, 100, ${brightness * 0.25 + Math.sin(t * 0.006) * 0.05})`;
                ctx.beginPath(); ctx.arc(bx, by, glowR + 10, 0, Math.PI * 2); ctx.fill();
              }
              const bulbCol = brightness > 0.6 ? '#ffe066' : brightness > 0.1 ? '#c4953a' : '#444';
              ctx.fillStyle = bulbCol;
              ctx.beginPath(); ctx.arc(bx, by, 18, 0, Math.PI * 2); ctx.fill();
              ctx.strokeStyle = '#888'; ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(bx, by, 18, 0, Math.PI * 2); ctx.stroke();
              ctx.fillStyle = '#333';
              ctx.fillRect(bx - 6, by + 15, 12, 10);
              viz.screenText('Bulb', bx, by - 30, viz.colors.text, 11);

              // --- Electrodes ---
              ctx.strokeStyle = '#aaa'; ctx.lineWidth = 4;
              ctx.beginPath(); ctx.moveTo(285, 230); ctx.lineTo(285, 310); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(435, 230); ctx.lineTo(435, 310); ctx.stroke();
              viz.screenText('+', 285, 318, viz.colors.red, 13, 'center');
              viz.screenText('−', 435, 318, viz.colors.blue, 13, 'center');

              // --- Beaker ---
              ctx.strokeStyle = '#8899bb';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(200, 190); ctx.lineTo(200, 340); ctx.lineTo(520, 340); ctx.lineTo(520, 190);
              ctx.stroke();
              const sol = solutions[selected];
              ctx.fillStyle = sol.color + '18';
              ctx.fillRect(201, 191, 318, 148);
              viz.screenText(sol.label, 360, 355, sol.color, 12);

              // --- Ions / molecules ---
              for (const p of ionParticles) {
                p.x += p.vx; p.y += p.vy;
                // boundary: beaker inner 205..515, 195..335
                if (p.x < 205 + p.r || p.x > 515 - p.r) p.vx *= -1;
                if (p.y < 195 + p.r || p.y > 335 - p.r) p.vy *= -1;
                ctx.fillStyle = p.color + 'cc';
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(p.charge, p.x, p.y);
              }
              if (solutions[selected].ions === 0) {
                for (let i = 0; i < 10; i++) {
                  const mx = 220 + (i % 5) * 60;
                  const my = 220 + Math.floor(i / 5) * 50;
                  ctx.fillStyle = viz.colors.green + 'aa';
                  ctx.beginPath(); ctx.arc(mx, my, 9, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = '#fff'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText('M', mx, my);
                }
                viz.screenText('No free ions — molecule intact', 360, 270, viz.colors.text, 11);
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex01',
          type: 'mcq',
          question: 'Which of the following is a strong electrolyte?',
          options: ['CH₃COOH (acetic acid)', 'NH₃·H₂O (ammonia water)', 'NaCl (table salt)', 'C₂H₅OH (ethanol)'],
          answer: 2,
          explanation: 'NaCl is an ionic compound that completely dissociates in solution: NaCl → Na⁺ + Cl⁻. Acetic acid and ammonia water are weak electrolytes (partial ionization), and ethanol is a non-electrolyte.'
        },
        {
          id: 'ch03-ex02',
          type: 'mcq',
          question: 'A copper wire conducts electricity well. Is copper a strong electrolyte?',
          options: ['Yes — it conducts very well', 'No — metals conduct by electron flow, not ions', 'Yes — because it is a good conductor', 'Not enough information to decide'],
          answer: 1,
          explanation: 'Electrolytes conduct by ion movement in solution or molten state. Copper conducts via free electron flow — this is metallic conduction, a completely different mechanism. Copper is neither an electrolyte nor a non-electrolyte.'
        },
        {
          id: 'ch03-ex03',
          type: 'mcq',
          question: 'CO₂ dissolves in water to form carbonic acid (H₂CO₃), which is a weak acid. What is the classification of CO₂ itself?',
          options: ['Weak electrolyte', 'Strong electrolyte', 'Non-electrolyte', 'It depends on concentration'],
          answer: 2,
          explanation: 'CO₂ is a covalent compound. In its pure form it does not ionize. It is H₂CO₃ (formed after dissolving) that is the weak electrolyte. CO₂ itself is a non-electrolyte.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 2 — Ionization Equations
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec02',
      title: 'Ionization Equations',
      content: `
<h2>电离方程式 — Ionization Equations</h2>

<p>An <strong>ionization equation</strong> (电离方程式) shows how an electrolyte breaks apart into ions in aqueous solution.</p>

<h3>Rules for Writing Ionization Equations</h3>

<div class="info-box">
<ol>
  <li><strong>Strong electrolytes</strong> use a single arrow (→) — complete dissociation.</li>
  <li><strong>Weak electrolytes</strong> use a reversible arrow (⇌) — partial ionization equilibrium.</li>
  <li>Charges must balance on both sides.</li>
  <li>Atoms must balance on both sides.</li>
  <li>Polyprotic acids ionize in steps (write the first step for weak polyprotic acids).</li>
</ol>
</div>

<h3>Strong Electrolytes — Complete Ionization</h3>

<p>Strong acids, strong bases, and most ionic salts:</p>

\\[\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-\\]
\\[\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{H}^+ + \\text{SO}_4^{2-}\\]
\\[\\text{HNO}_3 \\rightarrow \\text{H}^+ + \\text{NO}_3^-\\]
\\[\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-\\]
\\[\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^-\\]
\\[\\text{NaCl} \\rightarrow \\text{Na}^+ + \\text{Cl}^-\\]
\\[\\text{Na}_2\\text{SO}_4 \\rightarrow 2\\text{Na}^+ + \\text{SO}_4^{2-}\\]

<h3>Weak Electrolytes — Partial Ionization</h3>

<p>A double arrow indicates equilibrium between the molecular and ionic forms:</p>

\\[\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+\\]
\\[\\text{NH}_3 \\cdot \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-\\]
\\[\\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-\\quad (\\text{first step})\\]

<h3>Water Self-Ionization</h3>

<p>Water itself undergoes very slight self-ionization:</p>

\\[\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-\\]

<p>At 25 °C, the ion product of water is: \\(K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}\\)</p>

<div class="env-block" data-env="note">
<strong>Common Mistake Alert!</strong>
<ul>
  <li>H₂SO₄ gives <em>2</em> H⁺, not 1: \\(\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{H}^+ + \\text{SO}_4^{2-}\\)</li>
  <li>Ba(OH)₂ gives <em>2</em> OH⁻: \\(\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^-\\)</li>
  <li>Na₂SO₄ gives <em>2</em> Na⁺ (coefficient on the ion, not the formula): \\(\\text{Na}_2\\text{SO}_4 \\rightarrow 2\\text{Na}^+ + \\text{SO}_4^{2-}\\)</li>
</ul>
</div>

<p>The animation below shows NaCl dissolving — watch how the ionic lattice breaks apart as water molecules surround and separate the ions.</p>
      `,
      visualizations: [
        {
          id: 'ch03-viz02',
          title: 'NaCl Dissolution — Ion Dissociation Animation',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 400 });
            const ctx = viz.ctx;

            // NaCl lattice positions in crystal
            const latticeSize = 3;
            const ions = [];
            const spacing = 0.6;
            for (let row = 0; row < latticeSize; row++) {
              for (let col = 0; col < latticeSize; col++) {
                const isNa = (row + col) % 2 === 0;
                ions.push({
                  cx: (col - 1) * spacing,
                  cy: (row - 1) * spacing,
                  tx: 0, ty: 0,
                  color: isNa ? viz.colors.purple : viz.colors.green,
                  label: isNa ? 'Na⁺' : 'Cl⁻',
                  r: 0.28,
                  phase: 0,    // 0=crystal, 1=dissolving, 2=free
                  angle: Math.random() * Math.PI * 2,
                  speed: 0.008 + Math.random() * 0.006
                });
              }
            }

            // Water molecules (H2O) — background
            const waterMols = [];
            for (let i = 0; i < 22; i++) {
              waterMols.push({
                x: -7 + Math.random() * 14,
                y: -4 + Math.random() * 8,
                angle: Math.random() * Math.PI * 2,
                speed: 0.003 + Math.random() * 0.004
              });
            }

            // Controls
            const ctrlDiv = document.createElement('div');
            ctrlDiv.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:8px;align-items:center;';
            let phase = 0; // 0=crystal, 1=dissolving, 2=dissolved

            const stateLabel = document.createElement('span');
            stateLabel.style.cssText = 'color:#8b949e;font-size:0.82rem;';
            stateLabel.textContent = 'Phase: NaCl Crystal';

            const btn = document.createElement('button');
            btn.textContent = 'Add Water & Dissolve';
            btn.style.cssText = 'padding:5px 14px;border-radius:4px;cursor:pointer;border:2px solid ' + viz.colors.blue + ';background:' + viz.colors.blue + '22;color:' + viz.colors.blue + ';font-size:0.82rem;';
            btn.addEventListener('click', () => {
              if (phase === 0) {
                phase = 1;
                stateLabel.textContent = 'Phase: Dissolving...';
                // Set targets for ions — spread out
                ions.forEach((ion, i) => {
                  const angle = Math.random() * Math.PI * 2;
                  const dist = 2.5 + Math.random() * 3;
                  ion.tx = Math.cos(angle) * dist;
                  ion.ty = Math.sin(angle) * dist;
                });
                btn.textContent = 'Reset';
              } else {
                phase = 0;
                stateLabel.textContent = 'Phase: NaCl Crystal';
                ions.forEach((ion, i) => {
                  const row = Math.floor(i / latticeSize);
                  const col = i % latticeSize;
                  ion.cx = (col - 1) * spacing;
                  ion.cy = (row - 1) * spacing;
                  ion.tx = 0; ion.ty = 0;
                });
                btn.textContent = 'Add Water & Dissolve';
              }
            });
            ctrlDiv.appendChild(stateLabel);
            ctrlDiv.appendChild(btn);
            container.appendChild(ctrlDiv);

            viz.animate((t) => {
              viz.clear();

              // Background water tint
              ctx.fillStyle = '#0a1a3a44';
              ctx.fillRect(0, 0, viz.width, viz.height);

              // Water molecules
              for (const w of waterMols) {
                w.angle += w.speed;
                const [sx, sy] = viz.toScreen(w.x, w.y);
                ctx.save(); ctx.translate(sx, sy); ctx.rotate(w.angle);
                ctx.fillStyle = viz.colors.blue + '44';
                ctx.beginPath(); ctx.arc(0, 0, 9, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = viz.colors.red + '66';
                ctx.beginPath(); ctx.arc(6, -5, 5, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.arc(-6, -5, 5, 0, Math.PI * 2); ctx.fill();
                ctx.restore();
                viz.screenText('H₂O', sx, sy + 14, viz.colors.blue + '88', 8);
              }

              // Phase 1: lerp ions toward targets
              if (phase === 1) {
                let allDone = true;
                for (const ion of ions) {
                  ion.cx += (ion.tx - ion.cx) * 0.018;
                  ion.cy += (ion.ty - ion.cy) * 0.018;
                  if (Math.abs(ion.cx - ion.tx) > 0.05 || Math.abs(ion.cy - ion.ty) > 0.05) allDone = false;
                }
                if (allDone) { phase = 2; stateLabel.textContent = 'Phase: Fully Dissolved — Free Ions'; }
              }

              // Phase 2: free drift
              if (phase === 2) {
                for (const ion of ions) {
                  ion.angle += ion.speed;
                  ion.cx += Math.cos(ion.angle) * 0.03;
                  ion.cy += Math.sin(ion.angle) * 0.03;
                  if (ion.cx > 8) ion.cx = -8;
                  if (ion.cx < -8) ion.cx = 8;
                  if (ion.cy > 4.5) ion.cy = -4.5;
                  if (ion.cy < -4.5) ion.cy = 4.5;
                }
              }

              // Draw lattice bonds (only in crystal phase)
              if (phase === 0) {
                for (let a = 0; a < ions.length; a++) {
                  for (let b = a + 1; b < ions.length; b++) {
                    const dx = ions[a].cx - ions[b].cx;
                    const dy = ions[a].cy - ions[b].cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < spacing * 1.1) {
                      const [ax, ay] = viz.toScreen(ions[a].cx, ions[a].cy);
                      const [bx, by] = viz.toScreen(ions[b].cx, ions[b].cy);
                      ctx.strokeStyle = '#ffffff33'; ctx.lineWidth = 1.5;
                      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
                    }
                  }
                }
              }

              // Draw ions
              for (const ion of ions) {
                viz.drawAtom(ion.cx, ion.cy, ion.r, ion.color, ion.label, '#fff');
              }

              // Legend
              viz.screenText('Na⁺', 60, 30, viz.colors.purple, 12);
              ctx.fillStyle = viz.colors.purple;
              ctx.beginPath(); ctx.arc(40, 30, 8, 0, Math.PI * 2); ctx.fill();
              viz.screenText('Cl⁻', 60, 55, viz.colors.green, 12);
              ctx.fillStyle = viz.colors.green;
              ctx.beginPath(); ctx.arc(40, 55, 8, 0, Math.PI * 2); ctx.fill();

              if (phase === 0) {
                viz.screenText('NaCl Crystal Lattice', viz.width / 2, viz.height - 20, viz.colors.text, 12);
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex04',
          type: 'mcq',
          question: 'Which ionization equation is correctly written for H₂SO₄?',
          options: [
            'H₂SO₄ ⇌ 2H⁺ + SO₄²⁻',
            'H₂SO₄ → H⁺ + SO₄²⁻',
            'H₂SO₄ → 2H⁺ + SO₄²⁻',
            'H₂SO₄ → H₂⁺ + SO₄²⁻'
          ],
          answer: 2,
          explanation: 'H₂SO₄ is a strong acid (strong electrolyte), so it uses a single arrow (→). Each formula unit yields 2 H⁺ and 1 SO₄²⁻. Option A is wrong (uses ⇌), option B is wrong (only 1 H⁺), option D invents a nonexistent H₂⁺ ion.'
        },
        {
          id: 'ch03-ex05',
          type: 'mcq',
          question: 'Ba(OH)₂ completely ionizes. How many total moles of ions does 0.5 mol Ba(OH)₂ produce?',
          options: ['0.5 mol', '1.0 mol', '1.5 mol', '2.0 mol'],
          answer: 2,
          explanation: 'Ba(OH)₂ → Ba²⁺ + 2OH⁻. Each formula unit gives 3 ions: 1 Ba²⁺ + 2 OH⁻. So 0.5 mol × 3 = 1.5 mol total ions.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 3 — Ionic Reactions
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec03',
      title: 'Ionic Reactions',
      content: `
<h2>离子反应 — Ionic Reactions</h2>

<p>When electrolyte solutions are mixed, the ions present may react with each other. Such reactions are called <strong>ionic reactions</strong> (离子反应).</p>

<h3>Conditions for Ionic Reactions</h3>

<p>Ionic reactions proceed when the ions combine to form a product that "escapes" the solution — removing ions from the equilibrium:</p>

<div class="info-box">
<strong>Three Driving Conditions (三个驱动条件):</strong>
<ol>
  <li><strong>Formation of a precipitate (生成沉淀)</strong> — an insoluble ionic compound forms and settles out.</li>
  <li><strong>Formation of a gas (生成气体)</strong> — a volatile product escapes as bubbles.</li>
  <li><strong>Formation of water or weak electrolyte (生成水或弱电解质)</strong> — ions combine into a molecule that stays mostly un-ionized.</li>
</ol>
</div>

<h3>Examples</h3>

<table class="data-table">
  <thead><tr><th>Reaction</th><th>Driving Force</th><th>Product</th></tr></thead>
  <tbody>
    <tr><td>AgNO₃ + NaCl →</td><td>Precipitate</td><td>AgCl↓ (white, insoluble)</td></tr>
    <tr><td>Na₂CO₃ + HCl →</td><td>Gas</td><td>CO₂↑ + H₂O</td></tr>
    <tr><td>NaOH + HCl →</td><td>Weak electrolyte (water)</td><td>H₂O (neutralization)</td></tr>
    <tr><td>BaCl₂ + Na₂SO₄ →</td><td>Precipitate</td><td>BaSO₄↓ (white, insoluble)</td></tr>
    <tr><td>CaCO₃ + HCl →</td><td>Gas + Weak electrolyte</td><td>CO₂↑ + H₂O</td></tr>
  </tbody>
</table>

<h3>Solubility Rules (溶解性规则) — Key to Predicting Precipitates</h3>

<p>You must memorize which ionic compounds are insoluble (↓) vs. soluble:</p>

<div class="env-block" data-env="note">
<strong>Solubility Summary (Chinese high school standard):</strong>
<ul>
  <li>All nitrates (NO₃⁻) are soluble.</li>
  <li>All sodium (Na⁺), potassium (K⁺), and ammonium (NH₄⁺) salts are soluble.</li>
  <li>All chlorides (Cl⁻) are soluble EXCEPT AgCl↓, PbCl₂↓.</li>
  <li>All sulfates (SO₄²⁻) are soluble EXCEPT BaSO₄↓, PbSO₄↓ (and slightly CaSO₄).</li>
  <li>Most carbonates (CO₃²⁻), sulfides (S²⁻), and hydroxides (OH⁻) are insoluble EXCEPT group IA metals and NH₄⁺.</li>
</ul>
</div>

<p>The visualization below simulates mixing two solutions and watching a precipitate form at the molecular level.</p>
      `,
      visualizations: [
        {
          id: 'ch03-viz03',
          title: 'Precipitation Reaction — Mix Solutions at the Molecular Level',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 420 });
            const ctx = viz.ctx;

            const reactions = [
              {
                label: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
                solA: 'AgNO₃', solB: 'NaCl',
                ionA: { label: 'Ag⁺', color: '#c0c0c0' },
                ionB: { label: 'NO₃⁻', color: viz.colors.orange },
                ionC: { label: 'Na⁺', color: viz.colors.purple },
                ionD: { label: 'Cl⁻', color: viz.colors.green },
                precipLabel: 'AgCl↓', precipColor: '#e8e8e8',
                spectators: ['Na⁺', 'NO₃⁻']
              },
              {
                label: 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl',
                solA: 'BaCl₂', solB: 'Na₂SO₄',
                ionA: { label: 'Ba²⁺', color: viz.colors.yellow },
                ionB: { label: 'Cl⁻', color: viz.colors.green },
                ionC: { label: 'Na⁺', color: viz.colors.purple },
                ionD: { label: 'SO₄²⁻', color: viz.colors.red },
                precipLabel: 'BaSO₄↓', precipColor: '#ffffcc',
                spectators: ['Na⁺', 'Cl⁻']
              }
            ];
            let selRxn = 0;
            let mixed = false;
            const freeIons = [];
            const precipParticles = [];

            function buildIons(rxn) {
              freeIons.length = 0;
              precipParticles.length = 0;
              // Left beaker ions (A, B) — starting x around -5
              for (let i = 0; i < 7; i++) {
                freeIons.push({ x: -6.5 + Math.random() * 2.5, y: -2 + Math.random() * 4, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, ...rxn.ionA, phase: 0, target: null });
                freeIons.push({ x: -6.5 + Math.random() * 2.5, y: -2 + Math.random() * 4, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, ...rxn.ionB, phase: 0, target: null });
              }
              // Right beaker ions (C, D) — starting x around +5
              for (let i = 0; i < 7; i++) {
                freeIons.push({ x: 4 + Math.random() * 2.5, y: -2 + Math.random() * 4, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, ...rxn.ionC, phase: 0, target: null });
                freeIons.push({ x: 4 + Math.random() * 2.5, y: -2 + Math.random() * 4, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, ...rxn.ionD, phase: 0, target: null });
              }
            }
            buildIons(reactions[selRxn]);

            // Controls
            const ctrlDiv = document.createElement('div');
            ctrlDiv.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;align-items:center;';

            const rxnSelect = document.createElement('select');
            rxnSelect.style.cssText = 'padding:4px 8px;border-radius:4px;background:#1a1a40;color:#c9d1d9;border:1px solid #30363d;font-size:0.78rem;';
            reactions.forEach((r, i) => {
              const opt = document.createElement('option');
              opt.value = i;
              opt.textContent = r.solA + ' + ' + r.solB;
              rxnSelect.appendChild(opt);
            });
            rxnSelect.addEventListener('change', () => {
              selRxn = parseInt(rxnSelect.value);
              mixed = false;
              mixBtn.textContent = 'Mix Solutions';
              buildIons(reactions[selRxn]);
            });

            const mixBtn = document.createElement('button');
            mixBtn.textContent = 'Mix Solutions';
            mixBtn.style.cssText = 'padding:5px 14px;border-radius:4px;cursor:pointer;border:2px solid ' + viz.colors.teal + ';background:' + viz.colors.teal + '22;color:' + viz.colors.teal + ';font-size:0.82rem;';
            mixBtn.addEventListener('click', () => {
              if (!mixed) {
                mixed = true;
                mixBtn.textContent = 'Reset';
                // Move all ions to the center region
                for (const ion of freeIons) {
                  ion.x = -2 + Math.random() * 4;
                  ion.y = -2 + Math.random() * 4;
                  ion.vx = (Math.random() - 0.5) * 0.5;
                  ion.vy = (Math.random() - 0.5) * 0.5;
                }
              } else {
                mixed = false;
                mixBtn.textContent = 'Mix Solutions';
                buildIons(reactions[selRxn]);
              }
            });

            ctrlDiv.appendChild(rxnSelect);
            ctrlDiv.appendChild(mixBtn);
            container.appendChild(ctrlDiv);

            let precipTimer = 0;

            viz.animate((t) => {
              viz.clear();

              const rxn = reactions[selRxn];

              if (!mixed) {
                // Draw two separate beakers
                ctx.strokeStyle = '#8899bb'; ctx.lineWidth = 2;
                // Left beaker
                ctx.beginPath(); ctx.moveTo(80, 160); ctx.lineTo(80, 360); ctx.lineTo(330, 360); ctx.lineTo(330, 160); ctx.stroke();
                ctx.fillStyle = '#1a2a5a33'; ctx.fillRect(81, 161, 248, 198);
                viz.screenText(rxn.solA + ' solution', 205, 140, viz.colors.blue, 12);
                // Right beaker
                ctx.beginPath(); ctx.moveTo(390, 160); ctx.lineTo(390, 360); ctx.lineTo(640, 360); ctx.lineTo(640, 160); ctx.stroke();
                ctx.fillStyle = '#1a2a5a33'; ctx.fillRect(391, 161, 248, 198);
                viz.screenText(rxn.solB + ' solution', 515, 140, viz.colors.orange, 12);

                // Draw ions in their respective beakers
                for (const ion of freeIons) {
                  ion.x += ion.vx * 0.5;
                  ion.y += ion.vy * 0.5;
                  // Constrain to their beaker
                  if (ion.x < -8) { const isLeft = ion.label === rxn.ionA.label || ion.label === rxn.ionB.label; ion.x = isLeft ? -5 : 3; }
                  if (ion.y < -3.5 || ion.y > 3.5) ion.vy *= -1;
                  viz.drawAtom(ion.x, ion.y, 0.25, ion.color, ion.label, '#fff');
                }
              } else {
                // Merged single beaker
                ctx.strokeStyle = '#8899bb'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(80, 120); ctx.lineTo(80, 370); ctx.lineTo(640, 370); ctx.lineTo(640, 120); ctx.stroke();
                ctx.fillStyle = '#1a2a5a44'; ctx.fillRect(81, 121, 558, 248);
                viz.screenText('Mixed Solution — ' + rxn.label, viz.width / 2, 100, viz.colors.teal, 11);

                // Grow precipitate at bottom
                precipTimer += 0.5;
                const precipCount = Math.min(Math.floor(precipTimer / 8), 18);

                // Draw precipitate pile
                for (let i = 0; i < precipCount; i++) {
                  const px = 200 + (i % 9) * 30 + (Math.floor(i / 9)) * 15;
                  const py = viz.height - 40 - Math.floor(i / 9) * 18;
                  ctx.fillStyle = rxn.precipColor;
                  ctx.strokeStyle = '#88888888'; ctx.lineWidth = 1;
                  ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
                  ctx.fillStyle = '#333'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText(rxn.precipLabel.replace('↓', ''), px, py);
                }
                if (precipCount > 0) {
                  viz.screenText(rxn.precipLabel + ' precipitate forming!', viz.width / 2, viz.height - 18, viz.colors.yellow, 11);
                }

                // Free spectator ions drift around
                for (const ion of freeIons) {
                  const isSpectator = rxn.spectators.includes(ion.label);
                  if (isSpectator) {
                    ion.x += ion.vx * 0.4;
                    ion.y += ion.vy * 0.4;
                    if (ion.x < -7 || ion.x > 7) ion.vx *= -1;
                    if (ion.y < -3 || ion.y > 3) ion.vy *= -1;
                    viz.drawAtom(ion.x, ion.y, 0.22, ion.color + 'aa', ion.label, '#ffffff88');
                  }
                }

                // Reactive ions move toward precipitate zone
                for (const ion of freeIons) {
                  const isSpectator = rxn.spectators.includes(ion.label);
                  if (!isSpectator && precipCount < 18) {
                    ion.y -= 0.02;
                    ion.x += ion.vx * 0.2;
                    if (ion.y < -4) ion.y = 3;
                    viz.drawAtom(ion.x, ion.y, 0.22, ion.color, ion.label, '#fff');
                  }
                }

                // Spectator label
                viz.screenText('Spectator ions (gray = not involved)', 30, 30, viz.colors.text, 10, 'left');
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex06',
          type: 'mcq',
          question: 'Which of the following pairs of solutions will NOT produce a precipitate when mixed?',
          options: ['AgNO₃ and NaCl', 'BaCl₂ and Na₂SO₄', 'NaCl and KNO₃', 'Pb(NO₃)₂ and NaCl'],
          answer: 2,
          explanation: 'NaCl + KNO₃: all four possible products (NaNO₃, KCl) are soluble, so no precipitate forms. All others form insoluble precipitates: AgCl↓, BaSO₄↓, PbCl₂↓.'
        },
        {
          id: 'ch03-ex07',
          type: 'mcq',
          question: 'When dilute HCl is added to Na₂CO₃ solution, bubbles appear. What is the driving force?',
          options: ['Formation of a precipitate', 'Formation of CO₂ gas and water', 'Formation of NaCl salt', 'No reaction occurs'],
          answer: 1,
          explanation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑. The CO₂ gas escapes and H₂O is also formed (weak electrolyte). Both drive the reaction forward.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 4 — Writing Net Ionic Equations
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec04',
      title: 'Net Ionic Equations',
      content: `
<h2>离子方程式书写 — Writing Net Ionic Equations</h2>

<p>A <strong>net ionic equation</strong> (离子方程式) shows only the ions and molecules that actually participate in the reaction — spectator ions are omitted.</p>

<h3>Four-Step Process (四步法)</h3>

<div class="info-box">
<ol>
  <li><strong>Write the balanced molecular equation.</strong></li>
  <li><strong>Write the full ionic equation</strong> — split every strong electrolyte into its constituent ions. Keep weak electrolytes, gases, precipitates, and water as molecules.</li>
  <li><strong>Cancel spectator ions</strong> (ions appearing identically on both sides).</li>
  <li><strong>Write the net ionic equation.</strong> Check that charges and atoms balance.</li>
</ol>
</div>

<h3>Worked Example 1 — Acid-Base Neutralization</h3>

<p><em>Molecular:</em> \\(\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}\\)</p>

<p><em>Full ionic:</em> \\(\\text{H}^+ + \\text{Cl}^- + \\text{Na}^+ + \\text{OH}^- \\rightarrow \\text{Na}^+ + \\text{Cl}^- + \\text{H}_2\\text{O}\\)</p>

<p><em>Cancel spectators (Na⁺ and Cl⁻):</em></p>

\\[\\boxed{\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}}\\]

<h3>Worked Example 2 — Precipitation</h3>

<p><em>Molecular:</em> \\(\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3\\)</p>

<p><em>Full ionic:</em> \\(\\text{Ag}^+ + \\text{NO}_3^- + \\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}\\downarrow + \\text{Na}^+ + \\text{NO}_3^-\\)</p>

<p><em>Cancel spectators (Na⁺ and NO₃⁻):</em></p>

\\[\\boxed{\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}\\downarrow}\\]

<h3>Worked Example 3 — Weak Acid + Strong Base</h3>

<p><em>Molecular:</em> \\(\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}\\)</p>

<p><em>Full ionic:</em> \\(\\text{CH}_3\\text{COOH} + \\text{Na}^+ + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{Na}^+ + \\text{H}_2\\text{O}\\)</p>

<p>Note: CH₃COOH stays as a molecule (weak acid — do NOT split it!)</p>

<p><em>Cancel Na⁺:</em></p>

\\[\\boxed{\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}}\\]

<h3>What Stays as a Molecule? (不拆开的物质)</h3>

<div class="env-block" data-env="note">
<strong>Do NOT split into ions:</strong>
<ul>
  <li>Weak acids: CH₃COOH, H₂CO₃, H₂S, HF, H₂SO₃, HClO</li>
  <li>Weak bases: NH₃·H₂O, Fe(OH)₃, Cu(OH)₂, Al(OH)₃</li>
  <li>Precipitates (↓): AgCl, BaSO₄, CaCO₃, Mg(OH)₂…</li>
  <li>Gases (↑): CO₂, SO₂, H₂S, NH₃…</li>
  <li>Water: H₂O (unless the reaction involves it being split)</li>
</ul>
</div>

<p>Use the interactive equation builder below to practice!</p>
      `,
      visualizations: [
        {
          id: 'ch03-viz04',
          title: 'Net Ionic Equation — Step-by-Step Builder',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 380 });
            const ctx = viz.ctx;

            const examples = [
              {
                title: 'HCl + NaOH → NaCl + H₂O',
                step1: 'HCl + NaOH → NaCl + H₂O',
                step2: 'H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O',
                step3: 'Cancel: Na⁺ (both sides), Cl⁻ (both sides)',
                step4: 'H⁺ + OH⁻ → H₂O',
                spectators: ['Na⁺', 'Cl⁻']
              },
              {
                title: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
                step1: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
                step2: 'Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻',
                step3: 'Cancel: Na⁺ (both sides), NO₃⁻ (both sides)',
                step4: 'Ag⁺ + Cl⁻ → AgCl↓',
                spectators: ['Na⁺', 'NO₃⁻']
              },
              {
                title: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑',
                step1: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑',
                step2: '2Na⁺ + CO₃²⁻ + 2H⁺ + 2Cl⁻ → 2Na⁺ + 2Cl⁻ + H₂O + CO₂↑',
                step3: 'Cancel: 2Na⁺ (both sides), 2Cl⁻ (both sides)',
                step4: 'CO₃²⁻ + 2H⁺ → H₂O + CO₂↑',
                spectators: ['Na⁺', 'Cl⁻']
              }
            ];

            let selEx = 0;
            let currentStep = 0;

            const ctrlDiv = document.createElement('div');
            ctrlDiv.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;align-items:center;';

            const exSelect = document.createElement('select');
            exSelect.style.cssText = 'padding:4px 8px;border-radius:4px;background:#1a1a40;color:#c9d1d9;border:1px solid #30363d;font-size:0.78rem;';
            examples.forEach((e, i) => {
              const opt = document.createElement('option');
              opt.value = i;
              opt.textContent = 'Example ' + (i + 1);
              exSelect.appendChild(opt);
            });
            exSelect.addEventListener('change', () => { selEx = parseInt(exSelect.value); currentStep = 0; });

            const prevBtn = document.createElement('button');
            prevBtn.textContent = '← Prev Step';
            prevBtn.style.cssText = 'padding:5px 12px;border-radius:4px;cursor:pointer;border:1px solid #30363d;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;';
            prevBtn.addEventListener('click', () => { if (currentStep > 0) currentStep--; });

            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Next Step →';
            nextBtn.style.cssText = 'padding:5px 12px;border-radius:4px;cursor:pointer;border:1px solid ' + viz.colors.teal + ';background:' + viz.colors.teal + '22;color:' + viz.colors.teal + ';font-size:0.78rem;';
            nextBtn.addEventListener('click', () => { if (currentStep < 3) currentStep++; });

            ctrlDiv.appendChild(exSelect);
            ctrlDiv.appendChild(prevBtn);
            ctrlDiv.appendChild(nextBtn);
            container.appendChild(ctrlDiv);

            const stepTitles = ['Step 1: Molecular Equation', 'Step 2: Full Ionic Equation', 'Step 3: Identify Spectators', 'Step 4: Net Ionic Equation'];
            const stepColors = [viz.colors.blue, viz.colors.orange, viz.colors.purple, viz.colors.teal];

            viz.animate(() => {
              viz.clear();
              const ex = examples[selEx];
              const stepTexts = [ex.step1, ex.step2, ex.step3, ex.step4];

              // Title
              viz.screenText('Building the Net Ionic Equation — ' + ex.title, viz.width / 2, 30, viz.colors.white, 13);

              // Draw steps as cards
              const cardH = 68;
              const cardY0 = 60;
              for (let i = 0; i <= currentStep; i++) {
                const y = cardY0 + i * (cardH + 10);
                const active = i === currentStep;
                ctx.fillStyle = active ? stepColors[i] + '22' : '#ffffff0a';
                ctx.strokeStyle = active ? stepColors[i] : '#30363d';
                ctx.lineWidth = active ? 2 : 1;
                const rx = 40, ry = y, rw = viz.width - 80, rh = cardH;
                ctx.beginPath(); ctx.roundRect(rx, ry, rw, rh, 8); ctx.fill(); ctx.stroke();

                ctx.fillStyle = active ? stepColors[i] : viz.colors.text;
                ctx.font = 'bold 11px -apple-system,sans-serif';
                ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                ctx.fillText(stepTitles[i], rx + 12, ry + 10);

                ctx.fillStyle = active ? '#f0f6fc' : '#8b949e';
                ctx.font = (active ? 'bold ' : '') + '14px monospace';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(stepTexts[i], viz.width / 2, ry + cardH * 0.66);
              }

              // Step indicator
              viz.screenText(`Step ${currentStep + 1} of 4`, viz.width / 2, viz.height - 20, viz.colors.text, 11);
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex08',
          type: 'mcq',
          question: 'When writing the net ionic equation for Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O, how many spectator ions are there?',
          options: ['None — Ba²⁺ and SO₄²⁻ form the precipitate, OH⁻ and H⁺ form water', 'Ba²⁺ and SO₄²⁻ are spectators', 'OH⁻ and H⁺ are spectators', 'All ions are spectators'],
          answer: 0,
          explanation: 'All four ions participate! Ba²⁺ + SO₄²⁻ → BaSO₄↓ and H⁺ + OH⁻ → H₂O. There are NO spectator ions. The net ionic equation IS: Ba²⁺ + 2OH⁻ + 2H⁺ + SO₄²⁻ → BaSO₄↓ + 2H₂O.'
        },
        {
          id: 'ch03-ex09',
          type: 'mcq',
          question: 'In writing a net ionic equation, which substance should NOT be written as separate ions?',
          options: ['NaCl (sodium chloride)', 'HNO₃ (nitric acid)', 'Ba(OH)₂ (barium hydroxide)', 'CH₃COOH (acetic acid)'],
          answer: 3,
          explanation: 'CH₃COOH is a weak acid — it only partially ionizes. In net ionic equations, weak electrolytes are kept as molecules. NaCl, HNO₃, and Ba(OH)₂ are all strong electrolytes and must be split into ions.'
        },
        {
          id: 'ch03-ex10',
          type: 'mcq',
          question: 'What is the net ionic equation for: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O?',
          options: [
            '2Na⁺ + 2OH⁻ + 2H⁺ + SO₄²⁻ → 2Na⁺ + SO₄²⁻ + 2H₂O',
            'OH⁻ + H⁺ → H₂O',
            '2OH⁻ + H₂SO₄ → SO₄²⁻ + 2H₂O',
            '2OH⁻ + 2H⁺ → 2H₂O'
          ],
          answer: 3,
          explanation: 'After splitting strong electrolytes (NaOH → Na⁺ + OH⁻; H₂SO₄ → 2H⁺ + SO₄²⁻; Na₂SO₄ → 2Na⁺ + SO₄²⁻) and canceling spectator ions (Na⁺ and SO₄²⁻), we get: 2OH⁻ + 2H⁺ → 2H₂O (equivalent to H⁺ + OH⁻ → H₂O).'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 5 — Ion Coexistence
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec05',
      title: 'Ion Coexistence',
      content: `
<h2>离子共存 — Ion Coexistence in Solution</h2>

<p>Not all ions can coexist peacefully in the same solution. Two ions <strong>cannot coexist</strong> if they would react with each other to form a precipitate, gas, or weak electrolyte.</p>

<h3>When Ions CANNOT Coexist (不能共存)</h3>

<div class="info-box">
<table class="data-table">
  <thead><tr><th>Ion Pair</th><th>Reason</th><th>Product</th></tr></thead>
  <tbody>
    <tr><td>Ag⁺ + Cl⁻ (or Br⁻, I⁻)</td><td>Precipitate</td><td>AgCl↓, AgBr↓, AgI↓</td></tr>
    <tr><td>Ba²⁺ + SO₄²⁻</td><td>Precipitate</td><td>BaSO₄↓</td></tr>
    <tr><td>Ca²⁺ + CO₃²⁻</td><td>Precipitate</td><td>CaCO₃↓</td></tr>
    <tr><td>H⁺ + OH⁻</td><td>Weak electrolyte</td><td>H₂O</td></tr>
    <tr><td>H⁺ + CO₃²⁻</td><td>Gas</td><td>CO₂↑ + H₂O</td></tr>
    <tr><td>H⁺ + S²⁻</td><td>Gas</td><td>H₂S↑</td></tr>
    <tr><td>H⁺ + HCO₃⁻</td><td>Gas</td><td>CO₂↑ + H₂O</td></tr>
    <tr><td>NH₄⁺ + OH⁻</td><td>Weak base gas</td><td>NH₃·H₂O → NH₃↑</td></tr>
    <tr><td>Fe³⁺ + OH⁻</td><td>Precipitate</td><td>Fe(OH)₃↓</td></tr>
    <tr><td>Fe³⁺ + S²⁻</td><td>Redox + precipitate</td><td>Fe²⁺ + S↓</td></tr>
  </tbody>
</table>
</div>

<h3>Additional Conditions for Coexistence</h3>

<p>Sometimes a problem specifies the solution environment:</p>

<ul>
  <li><strong>Acidic solution (酸性)</strong> — H⁺ is present. Ions that react with H⁺ cannot coexist: OH⁻, CO₃²⁻, S²⁻, HCO₃⁻…</li>
  <li><strong>Basic solution (碱性)</strong> — OH⁻ is present. Ions that react with OH⁻ cannot coexist: H⁺, NH₄⁺, Fe³⁺, Al³⁺…</li>
  <li><strong>Neutral solution</strong> — neither H⁺ nor OH⁻ in excess.</li>
  <li><strong>Oxidizing/reducing conditions</strong> — may impose additional incompatibilities.</li>
</ul>

<h3>Strategy for "Can these ions coexist?" Questions</h3>

<div class="env-block" data-env="note">
<strong>Systematic Check:</strong>
<ol>
  <li>List all pairs of ions from the given set.</li>
  <li>For each pair, ask: do these two react? (precipitate / gas / weak electrolyte?)</li>
  <li>If ANY pair reacts, those ions cannot ALL coexist.</li>
  <li>Apply any stated environmental conditions (acid/base).</li>
</ol>
</div>

<p>Use the Ion Coexistence Checker below to test combinations interactively!</p>
      `,
      visualizations: [
        {
          id: 'ch03-viz05',
          title: 'Ion Coexistence Checker — Interactive',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 420 });
            const ctx = viz.ctx;

            const ionList = [
              { label: 'Na⁺', color: '#bc8cff', charge: '+' },
              { label: 'K⁺', color: '#bc8cff', charge: '+' },
              { label: 'NH₄⁺', color: '#d29922', charge: '+' },
              { label: 'Ca²⁺', color: '#f0883e', charge: '+' },
              { label: 'Ba²⁺', color: '#f0883e', charge: '+' },
              { label: 'Fe³⁺', color: '#f85149', charge: '+' },
              { label: 'Ag⁺', color: '#c0c0c0', charge: '+' },
              { label: 'H⁺', color: '#f85149', charge: '+' },
              { label: 'Cl⁻', color: '#3fb9a0', charge: '-' },
              { label: 'OH⁻', color: '#58a6ff', charge: '-' },
              { label: 'SO₄²⁻', color: '#f778ba', charge: '-' },
              { label: 'CO₃²⁻', color: '#3fb950', charge: '-' },
              { label: 'S²⁻', color: '#d29922', charge: '-' },
              { label: 'NO₃⁻', color: '#8b949e', charge: '-' },
              { label: 'HCO₃⁻', color: '#3fb9a0', charge: '-' }
            ];

            // Incompatible pairs (sets of two labels)
            const incompatible = [
              ['Ag⁺', 'Cl⁻'], ['Ag⁺', 'SO₄²⁻'], ['Ag⁺', 'CO₃²⁻'], ['Ag⁺', 'S²⁻'],
              ['Ba²⁺', 'SO₄²⁻'], ['Ba²⁺', 'CO₃²⁻'],
              ['Ca²⁺', 'CO₃²⁻'], ['Ca²⁺', 'SO₄²⁻'],
              ['H⁺', 'OH⁻'], ['H⁺', 'CO₃²⁻'], ['H⁺', 'S²⁻'], ['H⁺', 'HCO₃⁻'],
              ['NH₄⁺', 'OH⁻'],
              ['Fe³⁺', 'OH⁻'], ['Fe³⁺', 'S²⁻'], ['Fe³⁺', 'CO₃²⁻']
            ];

            const selected = new Set();

            function isIncompatiblePair(a, b) {
              return incompatible.some(pair => (pair[0] === a && pair[1] === b) || (pair[0] === b && pair[1] === a));
            }

            function checkCoexistence(sel) {
              const arr = [...sel];
              const conflicts = [];
              for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                  if (isIncompatiblePair(arr[i], arr[j])) {
                    conflicts.push([arr[i], arr[j]]);
                  }
                }
              }
              return conflicts;
            }

            // Build ion toggle buttons
            const ionGrid = document.createElement('div');
            ionGrid.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-top:8px;padding:0 20px;';
            const btnMap = {};
            ionList.forEach(ion => {
              const btn = document.createElement('button');
              btn.textContent = ion.label;
              btn.style.cssText = `padding:4px 10px;border-radius:4px;cursor:pointer;border:2px solid ${ion.color};background:transparent;color:${ion.color};font-size:0.8rem;font-family:monospace;`;
              btn.addEventListener('click', () => {
                if (selected.has(ion.label)) {
                  selected.delete(ion.label);
                  btn.style.background = 'transparent';
                } else {
                  selected.add(ion.label);
                  btn.style.background = ion.color + '33';
                }
              });
              btnMap[ion.label] = { btn, ion };
              ionGrid.appendChild(btn);
            });

            const resultDiv = document.createElement('div');
            resultDiv.style.cssText = 'text-align:center;font-size:0.82rem;color:#8b949e;margin-top:4px;min-height:36px;';

            const checkBtn = document.createElement('button');
            checkBtn.textContent = 'Check Coexistence';
            checkBtn.style.cssText = `padding:5px 14px;border-radius:4px;cursor:pointer;border:2px solid ${viz.colors.teal};background:${viz.colors.teal}22;color:${viz.colors.teal};font-size:0.82rem;display:block;margin:6px auto 4px;`;
            checkBtn.addEventListener('click', () => {
              if (selected.size < 2) { resultDiv.textContent = 'Select at least 2 ions to check.'; return; }
              const conflicts = checkCoexistence(selected);
              if (conflicts.length === 0) {
                resultDiv.innerHTML = '<span style="color:#3fb950;font-weight:bold;">✓ All selected ions CAN coexist!</span>';
              } else {
                const pairs = conflicts.map(p => p.join(' + ')).join(', ');
                resultDiv.innerHTML = '<span style="color:#f85149;font-weight:bold;">✗ Conflict(s): ' + pairs + ' cannot coexist!</span>';
              }
            });

            container.appendChild(ionGrid);
            container.appendChild(checkBtn);
            container.appendChild(resultDiv);

            // Canvas: draw selected ions in a beaker
            viz.animate((t) => {
              viz.clear();

              const selArr = [...selected];

              // Beaker
              ctx.strokeStyle = '#8899bb'; ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(100, 50); ctx.lineTo(100, 280); ctx.lineTo(620, 280); ctx.lineTo(620, 50);
              ctx.stroke();
              ctx.fillStyle = '#0a1a3a55';
              ctx.fillRect(101, 51, 518, 228);

              viz.screenText('Selected ions in solution:', viz.width / 2, 30, viz.colors.text, 12);

              if (selArr.length === 0) {
                viz.screenText('Click ion buttons below to add ions', viz.width / 2, 165, viz.colors.text + '88', 13);
              } else {
                const cols = Math.min(selArr.length, 7);
                const spacingX = Math.min(80, 500 / Math.max(cols, 1));
                const startX = 110 + spacingX / 2;

                selArr.forEach((label, i) => {
                  const row = Math.floor(i / 7);
                  const col = i % 7;
                  const px = startX + col * spacingX;
                  const py = 110 + row * 90;
                  const ion = ionList.find(io => io.label === label);
                  if (!ion) return;

                  // Drift animation
                  const wobbleX = Math.sin(t * 0.002 + i * 1.3) * 8;
                  const wobbleY = Math.cos(t * 0.0015 + i * 0.9) * 6;

                  ctx.fillStyle = ion.color + 'cc';
                  ctx.beginPath(); ctx.arc(px + wobbleX, py + wobbleY, 24, 0, Math.PI * 2); ctx.fill();
                  ctx.strokeStyle = ion.color; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.arc(px + wobbleX, py + wobbleY, 24, 0, Math.PI * 2); ctx.stroke();
                  ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace';
                  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText(label, px + wobbleX, py + wobbleY);
                });
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex11',
          type: 'mcq',
          question: 'Which set of ions CAN all coexist in the same aqueous solution?',
          options: [
            'Na⁺, K⁺, Cl⁻, NO₃⁻',
            'Na⁺, Ag⁺, Cl⁻, SO₄²⁻',
            'Ba²⁺, SO₄²⁻, Na⁺, K⁺',
            'H⁺, OH⁻, Na⁺, NO₃⁻'
          ],
          answer: 0,
          explanation: 'Na⁺, K⁺, Cl⁻, NO₃⁻: none of these pairs react — all are from soluble compounds and do not form precipitates, gases, or weak electrolytes together. Option B: Ag⁺ + Cl⁻ → AgCl↓. Option C: Ba²⁺ + SO₄²⁻ → BaSO₄↓. Option D: H⁺ + OH⁻ → H₂O.'
        },
        {
          id: 'ch03-ex12',
          type: 'mcq',
          question: 'In an acidic solution (H⁺ present), which of the following ions CANNOT exist?',
          options: ['Na⁺', 'Cl⁻', 'CO₃²⁻', 'NO₃⁻'],
          answer: 2,
          explanation: 'CO₃²⁻ reacts with H⁺: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑. So CO₃²⁻ cannot coexist with H⁺ in acidic solution. Na⁺, Cl⁻, and NO₃⁻ do not react with H⁺ and can remain in acidic solution.'
        },
        {
          id: 'ch03-ex13',
          type: 'mcq',
          question: 'A solution contains Fe³⁺ ions. Which of the following ions definitely CANNOT also be present?',
          options: ['Na⁺', 'NO₃⁻', 'OH⁻', 'Cl⁻'],
          answer: 2,
          explanation: 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ (a rust-colored precipitate). Therefore OH⁻ cannot coexist with Fe³⁺. Na⁺, NO₃⁻, and Cl⁻ do not react with Fe³⁺ and can coexist.'
        }
      ]
    }

  ]
});
