window.CHAPTERS.push({
  id: 'ch08',
  number: 8,
  title: 'Reaction Rates',
  subtitle: 'What Makes Reactions Go Faster or Slower',
  sections: [

    // ─────────────────────────────────────────────────────────────
    // SECTION 1: Expressing Reaction Rate
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch08-sec01',
      title: 'Expressing Reaction Rate',
      content: `
<h2>How Fast Is the Reaction?</h2>
<p>
  When a chemical reaction occurs, the concentrations of reactants decrease
  and products increase over time. <strong>Reaction rate</strong> (化学反应速率)
  measures how quickly this change happens.
</p>

<div class="concept-box">
  <h3>Definition of Average Reaction Rate</h3>
  <p>
    For a species X in solution, the average rate over a time interval is:
  </p>
  <p style="text-align:center;">
    \\(v = \\dfrac{|\\Delta c|}{\\Delta t} = \\dfrac{|c_2 - c_1|}{t_2 - t_1}\\)
  </p>
  <ul>
    <li>\\(\\Delta c\\) = change in molar concentration (mol/L)</li>
    <li>\\(\\Delta t\\) = time interval (s, min, or h)</li>
    <li>Units: <strong>mol/(L·s)</strong> or mol/(L·min)</li>
  </ul>
</div>

<h3>Sign Convention</h3>
<p>
  Concentration of reactants <em>decreases</em>, so \\(\\Delta c &lt; 0\\).
  We define rate as a positive number using the absolute value:
  \\(v = |\\Delta c| / \\Delta t\\).
</p>

<h3>Example: Decomposition of N₂O₅</h3>
<p>
  Consider \\(2\\text{N}_2\\text{O}_5 \\rightarrow 4\\text{NO}_2 + \\text{O}_2\\).
  If \\([\\text{N}_2\\text{O}_5]\\) drops from 0.80 mol/L to 0.20 mol/L in 200 s:
</p>
<p style="text-align:center;">
  \\(v(\\text{N}_2\\text{O}_5) = \\dfrac{0.80 - 0.20}{200} = 3.0 \\times 10^{-3} \\text{ mol/(L·s)}\\)
</p>

<div class="info-box">
  <h3>Relating Rates via Stoichiometry</h3>
  <p>
    For \\(a\\text{A} + b\\text{B} \\rightarrow c\\text{C} + d\\text{D}\\), the rates are related by:
  </p>
  <p style="text-align:center;">
    \\(\\dfrac{v(\\text{A})}{a} = \\dfrac{v(\\text{B})}{b} = \\dfrac{v(\\text{C})}{c} = \\dfrac{v(\\text{D})}{d}\\)
  </p>
  <p>
    So if \\(v(\\text{N}_2\\text{O}_5) = 3.0 \\times 10^{-3}\\) mol/(L·s), then<br>
    \\(v(\\text{NO}_2) = 2 \\times 3.0 \\times 10^{-3} = 6.0 \\times 10^{-3}\\) mol/(L·s)<br>
    \\(v(\\text{O}_2) = \\tfrac{1}{2} \\times 3.0 \\times 10^{-3} = 1.5 \\times 10^{-3}\\) mol/(L·s)
  </p>
</div>

<h3>Instantaneous vs. Average Rate</h3>
<p>
  The <em>average rate</em> over a finite interval gives an approximation.
  The <em>instantaneous rate</em> is the slope of the concentration–time curve
  at a single moment: \\(v = \\left|\\dfrac{dc}{dt}\\right|\\).
  As \\(\\Delta t \\to 0\\), the average rate approaches the instantaneous rate.
</p>
      `,
      visualizations: [
        {
          id: 'viz-rate-data-plotter',
          title: 'Rate Data Plotter',
          description: 'Plot concentration vs. time and read off the average rate between two time points.',
          setup(container) {
            const W = 680, H = 380;
            const viz = new VizEngine(container, { width: W, height: H, scale: 45, originX: 70, originY: H - 50 });
            const ctx = viz.ctx;

            const k = 0.05;
            const c0 = 1.0;

            let t1 = 5, t2 = 25;

            function c(t) { return c0 * Math.exp(-k * t); }

            function draw() {
              viz.clear();

              ctx.fillStyle = viz.colors.text;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Time (s)', W / 2, H - 8);
              ctx.save(); ctx.translate(14, H / 2); ctx.rotate(-Math.PI / 2);
              ctx.fillText('Concentration (mol/L)', 0, 0); ctx.restore();

              ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(70, 20); ctx.lineTo(70, H - 50);
              ctx.moveTo(70, H - 50); ctx.lineTo(W - 20, H - 50);
              ctx.stroke();

              const tMax = 60, cMax = 1.1;
              function sx(t) { return 70 + (t / tMax) * (W - 90); }
              function sy(cv) { return (H - 50) - (cv / cMax) * (H - 70); }

              ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
              for (let t = 0; t <= 60; t += 10) {
                ctx.textAlign = 'center';
                ctx.fillText(t, sx(t), H - 35);
                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                ctx.beginPath(); ctx.moveTo(sx(t), H - 50); ctx.lineTo(sx(t), 20); ctx.stroke();
              }
              for (let cv = 0; cv <= 1.0; cv += 0.2) {
                ctx.textAlign = 'right';
                ctx.fillText(cv.toFixed(1), 64, sy(cv) + 4);
                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                ctx.beginPath(); ctx.moveTo(70, sy(cv)); ctx.lineTo(W - 20, sy(cv)); ctx.stroke();
              }

              ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (let t = 0; t <= 60; t += 0.5) {
                const x = sx(t), y = sy(c(t));
                t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
              }
              ctx.stroke();

              const x1 = sx(t1), x2 = sx(t2);
              const y1 = sy(c(t1)), y2 = sy(c(t2));
              const yBase = H - 50;

              ctx.fillStyle = '#3fb9a022';
              ctx.beginPath();
              ctx.moveTo(x1, yBase);
              for (let t = t1; t <= t2; t += 0.5) ctx.lineTo(sx(t), sy(c(t)));
              ctx.lineTo(x2, yBase); ctx.closePath(); ctx.fill();

              ctx.setLineDash([5, 4]); ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1, yBase); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2, yBase); ctx.stroke();
              ctx.setLineDash([]);

              ctx.strokeStyle = '#f85149'; ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();

              [t1, t2].forEach(t => {
                ctx.fillStyle = viz.colors.orange;
                ctx.beginPath(); ctx.arc(sx(t), sy(c(t)), 5, 0, Math.PI * 2); ctx.fill();
              });

              const dt = t2 - t1;
              const dc = Math.abs(c(t2) - c(t1));
              const rate = dc / dt;
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(`Avg rate = ${rate.toFixed(4)} mol L\u207B\u00B9 s\u207B\u00B9`, sx(t2) + 8, sy((c(t1) + c(t2)) / 2));

              ctx.fillStyle = viz.colors.orange;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText(`t\u2081 = ${t1} s  \u2192  c = ${c(t1).toFixed(3)}`, 80, 30);
              ctx.fillText(`t\u2082 = ${t2} s  \u2192  c = ${c(t2).toFixed(3)}`, 80, 48);
            }

            draw();

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:24px;flex-wrap:wrap;margin-top:10px;align-items:center;';
            controls.innerHTML = `
              <label style="color:#8b949e;font-size:13px;">
                t\u2081: <input type="range" id="t1-slider" min="0" max="50" value="${t1}" style="width:110px;">
                <span id="t1-val">${t1}s</span>
              </label>
              <label style="color:#8b949e;font-size:13px;">
                t\u2082: <input type="range" id="t2-slider" min="5" max="60" value="${t2}" style="width:110px;">
                <span id="t2-val">${t2}s</span>
              </label>
            `;
            container.appendChild(controls);

            container.querySelector('#t1-slider').addEventListener('input', e => {
              t1 = +e.target.value;
              if (t1 >= t2) t1 = t2 - 1;
              container.querySelector('#t1-val').textContent = t1 + 's';
              draw();
            });
            container.querySelector('#t2-slider').addEventListener('input', e => {
              t2 = +e.target.value;
              if (t2 <= t1) t2 = t1 + 1;
              container.querySelector('#t2-val').textContent = t2 + 's';
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch08-sec01-ex01',
          type: 'multiple-choice',
          question: 'For the reaction 2A + B → C, if v(A) = 0.4 mol/(L·s), what is v(C)?',
          options: ['0.4 mol/(L·s)', '0.2 mol/(L·s)', '0.8 mol/(L·s)', '0.1 mol/(L·s)'],
          answer: 1,
          explanation: 'v(A)/2 = v(C)/1, so v(C) = v(A)/2 = 0.4/2 = 0.2 mol/(L·s).'
        },
        {
          id: 'ch08-sec01-ex02',
          type: 'multiple-choice',
          question: 'Which units are correct for reaction rate in solution?',
          options: ['mol/s', 'mol/(L·s)', 'g/(L·s)', 'L/(mol·s)'],
          answer: 1,
          explanation: 'Reaction rate in solution is expressed as the change in molar concentration per unit time: mol/(L·s).'
        },
        {
          id: 'ch08-sec01-ex03',
          type: 'multiple-choice',
          question: '[N₂O₅] drops from 0.60 to 0.30 mol/L in 100 s. What is v(N₂O₅)?',
          options: ['3.0×10⁻³ mol/(L·s)', '6.0×10⁻³ mol/(L·s)', '3.0×10⁻² mol/(L·s)', '6.0×10⁻² mol/(L·s)'],
          answer: 0,
          explanation: 'v = |Δc|/Δt = (0.60−0.30)/100 = 0.30/100 = 3.0×10⁻³ mol/(L·s).'
        },
        {
          id: 'ch08-sec01-ex04',
          type: 'multiple-choice',
          question: 'For 2A + B → 3C, if v(A) = 0.005 mol/(L·s), what is v(C)?',
          options: ['0.005 mol/(L·s)', '0.0075 mol/(L·s)', '0.010 mol/(L·s)', '0.0025 mol/(L·s)'],
          answer: 1,
          explanation: 'v(A)/2 = v(C)/3, so v(C) = v(A) × 3/2 = 0.005 × 1.5 = 0.0075 mol/(L·s).'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 2: Collision Theory & Activation Energy
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch08-sec02',
      title: 'Collision Theory & Activation Energy',
      content: `
<h2>Collision Theory (碰撞理论)</h2>
<p>
  The <strong>collision theory</strong> explains reaction rates at the molecular level.
  For a reaction to occur, reactant molecules must:
</p>
<ol>
  <li><strong>Collide</strong> with each other.</li>
  <li>Have sufficient <strong>kinetic energy</strong> ≥ activation energy \\(E_a\\).</li>
  <li>Have the correct <strong>orientation</strong> during the collision.</li>
</ol>

<div class="concept-box">
  <h3>Effective Collisions (有效碰撞)</h3>
  <p>
    Only collisions that satisfy both the energy and orientation requirements
    lead to products — these are called <strong>effective collisions</strong>.
  </p>
  <p style="text-align:center;">
    \\(\\text{Rate} = z \\cdot p \\cdot f\\)
  </p>
  <ul>
    <li>\\(z\\) = total collision frequency</li>
    <li>\\(p\\) = steric (orientation) factor \\((0 &lt; p \\le 1)\\)</li>
    <li>\\(f = e^{-E_a/RT}\\) = fraction of collisions with energy ≥ \\(E_a\\)</li>
  </ul>
</div>

<h3>Activation Energy</h3>
<p>
  The <strong>activation energy</strong> \\(E_a\\) is the minimum energy that
  colliding particles must possess for a reaction to occur. It is the energy
  barrier between reactants and products on the reaction energy profile.
</p>
<p style="text-align:center;">
  \\(\\text{Effective collision fraction} \\propto e^{-E_a / RT}\\)
</p>
<p>
  A higher \\(E_a\\) means fewer molecules in the population have sufficient
  energy → slower reaction.
</p>

<h3>How Each Factor Connects</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin:12px 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Factor</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Effect on Rate</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">↑ Concentration</td>
      <td style="padding:8px;border:1px solid #30363d;">↑ Rate</td>
      <td style="padding:8px;border:1px solid #30363d;">More particles → more collisions per second (↑z)</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">↑ Temperature</td>
      <td style="padding:8px;border:1px solid #30363d;">↑ Rate</td>
      <td style="padding:8px;border:1px solid #30363d;">Faster particles → more collisions AND more energetic (↑z, ↑f)</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Catalyst</td>
      <td style="padding:8px;border:1px solid #30363d;">↑ Rate</td>
      <td style="padding:8px;border:1px solid #30363d;">Lower \\(E_a\\) → larger fraction f of effective collisions</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">↑ Surface area (solids)</td>
      <td style="padding:8px;border:1px solid #30363d;">↑ Rate</td>
      <td style="padding:8px;border:1px solid #30363d;">More contact area → more collisions at the surface (↑z)</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">↑ Pressure (gases)</td>
      <td style="padding:8px;border:1px solid #30363d;">↑ Rate</td>
      <td style="padding:8px;border:1px solid #30363d;">Higher pressure → higher concentration of gas → ↑z</td>
    </tr>
  </tbody>
</table>
      `,
      visualizations: [
        {
          id: 'viz-maxwell-boltzmann-dual',
          title: 'Maxwell–Boltzmann Distribution & Temperature',
          description: 'Drag the temperature slider to see how raising T shifts the distribution and increases the fraction of molecules above Ea.',
          setup(container) {
            const W = 680, H = 360;
            const viz = new VizEngine(container, { width: W, height: H });
            const ctx = viz.ctx;

            let T = 300;
            let Ea = 120;

            function mb(E, Temp) {
              if (E <= 0) return 0;
              return Math.sqrt(E) * Math.exp(-E / (Temp * 0.5));
            }

            function mbPeak(Temp) {
              let peak = 0;
              for (let E = 0; E <= 400; E += 1) {
                const v = mb(E, Temp);
                if (v > peak) peak = v;
              }
              return peak;
            }

            function draw() {
              viz.clear();

              const padL = 65, padB = 55, padR = 20, padT = 30;
              const plotW = W - padL - padR;
              const plotH = H - padB - padT;
              const eMax = 400;

              function ex(E) { return padL + (E / eMax) * plotW; }
              function ey(f) { return padT + plotH - f * plotH; }

              // Grid and axes
              ctx.strokeStyle = '#1a1a40'; ctx.lineWidth = 0.5;
              for (let E = 0; E <= eMax; E += 50) {
                ctx.beginPath(); ctx.moveTo(ex(E), padT); ctx.lineTo(ex(E), padT + plotH); ctx.stroke();
              }
              for (let i = 0; i <= 5; i++) {
                const y = ey(i / 5);
                ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + plotW, y); ctx.stroke();
              }

              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + plotH); ctx.lineTo(padL + plotW, padT + plotH); ctx.stroke();

              ctx.fillStyle = '#8b949e'; ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Kinetic Energy (arbitrary units)', padL + plotW / 2, H - 10);
              ctx.save(); ctx.translate(14, padT + plotH / 2); ctx.rotate(-Math.PI / 2);
              ctx.fillText('Number of Molecules', 0, 0); ctx.restore();

              // Two temperature curves: 0.75*T (reference) and T (current)
              const temps = [
                { T: T * 0.75, color: '#3fb9a099', label: `T = ${Math.round(T * 0.75)} K` },
                { T: T,        color: '#58a6ff',   label: `T = ${T} K` }
              ];

              temps.forEach(({ T: Temp, color, label }) => {
                const peak = mbPeak(Temp);
                ctx.strokeStyle = color; ctx.lineWidth = 2.5;
                ctx.beginPath();
                for (let E = 0; E <= eMax; E += 2) {
                  const f = mb(E, Temp) / peak;
                  E === 0 ? ctx.moveTo(ex(E), ey(f)) : ctx.lineTo(ex(E), ey(f));
                }
                ctx.stroke();

                let peakE = 0;
                for (let E = 0; E <= eMax; E += 1) if (mb(E, Temp) > mb(peakE, Temp)) peakE = E;
                ctx.fillStyle = color; ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(label, ex(peakE) + 8, ey(mb(peakE, Temp) / peak) - 6);
              });

              // Ea vertical line
              ctx.strokeStyle = '#f85149'; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
              ctx.beginPath(); ctx.moveTo(ex(Ea), padT); ctx.lineTo(ex(Ea), padT + plotH); ctx.stroke();
              ctx.setLineDash([]);
              ctx.fillStyle = '#f85149'; ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(`Ea = ${Ea}`, ex(Ea), padT - 8);

              // Shade area > Ea for current T
              const peakCur = mbPeak(T);
              ctx.fillStyle = '#58a6ff33';
              ctx.beginPath();
              ctx.moveTo(ex(Ea), padT + plotH);
              for (let E = Ea; E <= eMax; E += 2) {
                const f = mb(E, T) / peakCur;
                ctx.lineTo(ex(E), ey(f));
              }
              ctx.lineTo(ex(eMax), padT + plotH);
              ctx.closePath(); ctx.fill();

              let areaAbove = 0, totalArea = 0;
              for (let E = 0; E <= eMax; E += 1) {
                totalArea += mb(E, T);
                if (E >= Ea) areaAbove += mb(E, T);
              }
              const pct = (areaAbove / totalArea * 100).toFixed(1);
              ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText(`Active molecules: ${pct}%`, W - padR - 5, padT + 16);
            }

            draw();

            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:28px;flex-wrap:wrap;margin-top:10px;align-items:center;';
            ctrl.innerHTML = `
              <label style="color:#8b949e;font-size:13px;">
                Temperature T:
                <input type="range" id="T-slider" min="200" max="700" value="${T}" style="width:130px;">
                <span id="T-val" style="color:#58a6ff;font-weight:bold;">${T} K</span>
              </label>
              <label style="color:#8b949e;font-size:13px;">
                Activation Energy Ea:
                <input type="range" id="Ea-slider" min="50" max="300" value="${Ea}" style="width:130px;">
                <span id="Ea-val" style="color:#f85149;font-weight:bold;">${Ea}</span>
              </label>
            `;
            container.appendChild(ctrl);

            ctrl.querySelector('#T-slider').addEventListener('input', e => {
              T = +e.target.value;
              ctrl.querySelector('#T-val').textContent = T + ' K';
              draw();
            });
            ctrl.querySelector('#Ea-slider').addEventListener('input', e => {
              Ea = +e.target.value;
              ctrl.querySelector('#Ea-val').textContent = Ea;
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch08-sec02-ex01',
          type: 'multiple-choice',
          question: 'Which TWO conditions must both be met for an effective collision?',
          options: [
            'Particles must touch AND have any energy',
            'Energy ≥ Ea AND correct orientation',
            'High pressure AND low temperature',
            'Both reactants must be in the same phase'
          ],
          answer: 1,
          explanation: 'Collision theory requires (1) kinetic energy ≥ activation energy Ea and (2) correct geometric orientation of the colliding particles.'
        },
        {
          id: 'ch08-sec02-ex02',
          type: 'multiple-choice',
          question: 'If activation energy Ea is increased (other factors constant), what happens to the reaction rate?',
          options: ['Increases', 'Decreases', 'Stays the same', 'First increases then decreases'],
          answer: 1,
          explanation: 'A higher Ea means fewer molecules in the Maxwell–Boltzmann distribution have sufficient energy, so the fraction of effective collisions decreases and the rate falls.'
        },
        {
          id: 'ch08-sec02-ex03',
          type: 'multiple-choice',
          question: 'In the Maxwell–Boltzmann distribution, raising temperature causes:',
          options: [
            'The peak to shift to lower energies',
            'The peak to shift to higher energies and more molecules above Ea',
            'No change in the distribution',
            'The curve to become narrower and taller'
          ],
          answer: 1,
          explanation: 'Higher temperature shifts the Maxwell–Boltzmann curve to higher energies, increasing the fraction of molecules with E ≥ Ea.'
        },
        {
          id: 'ch08-sec02-ex04',
          type: 'multiple-choice',
          question: 'The steric factor p in collision theory represents:',
          options: [
            'The fraction of molecules with energy ≥ Ea',
            'The total collision frequency',
            'The fraction of collisions with correct geometric orientation',
            'The activation energy'
          ],
          answer: 2,
          explanation: 'The steric (orientation) factor p accounts for the probability that a collision has the correct molecular orientation required for reaction.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 3: Effect of Concentration & Pressure
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch08-sec03',
      title: 'Concentration & Pressure Effects',
      content: `
<h2>How Concentration Affects Rate</h2>
<p>
  Increasing the concentration of a reactant generally <strong>increases</strong>
  the reaction rate. More particles per unit volume means more frequent collisions.
</p>

<div class="concept-box">
  <h3>Rate Law</h3>
  <p>
    For an elementary reaction or an experimentally determined reaction, the
    <strong>rate law</strong> (速率方程) expresses rate as:
  </p>
  <p style="text-align:center;">
    \\(v = k[\\text{A}]^m[\\text{B}]^n\\)
  </p>
  <ul>
    <li>\\(k\\) = rate constant (depends on temperature and catalyst)</li>
    <li>\\(m, n\\) = reaction orders with respect to A and B</li>
    <li>Overall order = \\(m + n\\)</li>
  </ul>
  <p>
    <em>Important:</em> \\(m\\) and \\(n\\) are determined experimentally —
    they are NOT necessarily the stoichiometric coefficients.
  </p>
</div>

<h3>Effect of Pressure (Gases Only)</h3>
<p>
  For gaseous reactants, pressure and concentration are directly linked:
</p>
<p style="text-align:center;">
  \\(pV = nRT \\implies c = \\dfrac{n}{V} = \\dfrac{p}{RT}\\)
</p>
<p>
  At constant temperature, <strong>doubling the pressure doubles the
  concentration</strong>, increasing the collision frequency and reaction rate.
</p>

<div class="info-box">
  <h3>At the High School Level</h3>
  <p>
    Chinese national curriculum (人教版) focuses on the <em>qualitative rule</em>:
    increasing concentration → more collisions per second → faster rate.
    Pressure does NOT affect the rate of reactions involving only solids or pure
    liquids, because their concentrations are essentially fixed.
  </p>
</div>
      `,
      visualizations: [
        {
          id: 'viz-reaction-progress-monitor',
          title: 'Reaction Progress Monitor',
          description: 'Watch reactant (blue) molecules convert to product (orange) particles. Adjust initial concentration to see how it affects the rate of conversion.',
          setup(container) {
            const W = 660, H = 360;
            const viz = new VizEngine(container, { width: W, height: H });
            const ctx = viz.ctx;

            const BOX = { x: 20, y: 20, w: W - 40, h: H - 80 };
            const RADIUS = 7;
            const kRate = 0.002;

            let N = 40;
            let particles = [];
            let animId = null;
            let running = false;
            let time = 0;

            function init() {
              particles = [];
              for (let i = 0; i < N; i++) {
                particles.push({
                  x: BOX.x + RADIUS + Math.random() * (BOX.w - 2 * RADIUS),
                  y: BOX.y + RADIUS + Math.random() * (BOX.h - 2 * RADIUS),
                  vx: (Math.random() - 0.5) * 3,
                  vy: (Math.random() - 0.5) * 3,
                  type: 'R'
                });
              }
              time = 0;
            }

            function step() {
              time += 16;

              for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < BOX.x + RADIUS) { p.x = BOX.x + RADIUS; p.vx = Math.abs(p.vx); }
                if (p.x > BOX.x + BOX.w - RADIUS) { p.x = BOX.x + BOX.w - RADIUS; p.vx = -Math.abs(p.vx); }
                if (p.y < BOX.y + RADIUS) { p.y = BOX.y + RADIUS; p.vy = Math.abs(p.vy); }
                if (p.y > BOX.y + BOX.h - RADIUS) { p.y = BOX.y + BOX.h - RADIUS; p.vy = -Math.abs(p.vy); }
              }

              const reactants = particles.filter(p => p.type === 'R');
              for (let i = 0; i < reactants.length - 1; i++) {
                for (let j = i + 1; j < reactants.length; j++) {
                  const a = reactants[i], b = reactants[j];
                  const dx = a.x - b.x, dy = a.y - b.y;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist < RADIUS * 2.2 && Math.random() < kRate) {
                    a.type = 'P'; b.type = 'P';
                  }
                }
              }
            }

            function draw() {
              viz.clear();

              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 2;
              ctx.strokeRect(BOX.x, BOX.y, BOX.w, BOX.h);

              for (const p of particles) {
                const color = p.type === 'R' ? '#58a6ff' : '#f0883e';
                ctx.fillStyle = color;
                ctx.beginPath(); ctx.arc(p.x, p.y, RADIUS, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = color + 'aa'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.arc(p.x, p.y, RADIUS + 2, 0, Math.PI * 2); ctx.stroke();
              }

              const nR = particles.filter(p => p.type === 'R').length;
              const nP = particles.filter(p => p.type === 'P').length;
              ctx.fillStyle = '#58a6ff'; ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(`Reactants: ${nR}`, BOX.x + 4, BOX.y + BOX.h + 22);
              ctx.fillStyle = '#f0883e';
              ctx.fillText(`Products: ${nP}`, BOX.x + 140, BOX.y + BOX.h + 22);
              ctx.fillStyle = '#8b949e';
              ctx.fillText(`Time: ${(time / 1000).toFixed(1)} s`, BOX.x + 280, BOX.y + BOX.h + 22);
              ctx.textAlign = 'right';
              ctx.fillStyle = nR === 0 ? '#3fb950' : '#8b949e';
              ctx.fillText(nR === 0 ? 'Complete!' : 'Running...', W - BOX.x - 4, BOX.y + BOX.h + 22);
            }

            function loop() {
              if (!running) return;
              step(); draw();
              animId = requestAnimationFrame(loop);
            }

            init(); draw();

            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;align-items:center;';
            ctrl.innerHTML = `
              <label style="color:#8b949e;font-size:13px;">
                N (molecules):
                <input type="range" id="n-slider" min="10" max="80" value="${N}" style="width:110px;">
                <span id="n-val">${N}</span>
              </label>
              <button id="start-btn" style="padding:6px 16px;background:#238636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Start</button>
              <button id="reset-btn" style="padding:6px 16px;background:#21262d;color:#fff;border:1px solid #4a4a7a;border-radius:6px;cursor:pointer;">Reset</button>
            `;
            container.appendChild(ctrl);

            const startBtn = ctrl.querySelector('#start-btn');
            const resetBtn = ctrl.querySelector('#reset-btn');

            startBtn.addEventListener('click', () => {
              if (running) {
                running = false; startBtn.textContent = 'Start';
              } else {
                running = true; startBtn.textContent = 'Pause'; loop();
              }
            });
            resetBtn.addEventListener('click', () => {
              running = false; startBtn.textContent = 'Start';
              if (animId) cancelAnimationFrame(animId);
              N = +ctrl.querySelector('#n-slider').value;
              init(); draw();
            });
            ctrl.querySelector('#n-slider').addEventListener('input', e => {
              ctrl.querySelector('#n-val').textContent = e.target.value;
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch08-sec03-ex01',
          type: 'multiple-choice',
          question: 'For a reaction where v = k[A]², doubling [A] causes the rate to:',
          options: ['Double', 'Triple', 'Quadruple', 'Stay the same'],
          answer: 2,
          explanation: 'Second order: v ∝ [A]². If [A] doubles, v increases by 2² = 4 times.'
        },
        {
          id: 'ch08-sec03-ex02',
          type: 'multiple-choice',
          question: 'For the gas-phase reaction A(g) + B(g) → C(g), if the pressure is tripled at constant temperature, what happens to the rate?',
          options: ['Stays the same', 'Triples', 'Increases by 9 times', 'Doubles'],
          answer: 2,
          explanation: 'Tripling pressure at constant T triples concentrations of both A and B. Rate ∝ [A][B], so rate increases by 3 × 3 = 9 times.'
        },
        {
          id: 'ch08-sec03-ex03',
          type: 'multiple-choice',
          question: 'Why does increasing pressure NOT affect the rate of CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)?',
          options: [
            'Because CaCO₃ is a solid and HCl is in solution — their concentrations are unaffected by pressure',
            'Because CO₂ is a gas and escapes',
            'Because the reaction is exothermic',
            'Because activation energy is too high'
          ],
          answer: 0,
          explanation: 'Pressure changes barely affect the concentration of solids or liquids, so increasing pressure has negligible effect on [CaCO₃] or [HCl(aq)], and hence no significant rate change.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 4: Temperature & Surface Area
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch08-sec04',
      title: 'Temperature & Surface Area',
      content: `
<h2>Why Does Heating Speed Up Reactions?</h2>
<p>
  Temperature has a dramatic effect on reaction rate. A common rule of thumb
  used in Chinese high school chemistry is:
</p>

<div class="concept-box">
  <h3>Van't Hoff Rule of Thumb (经验规律)</h3>
  <p>
    For every <strong>10°C rise</strong> in temperature, the reaction rate
    approximately <strong>doubles to triples</strong> (2–3×). A rough factor of 2 is
    commonly used in problems.
  </p>
  <p style="text-align:center;">
    \\(v_{T+10} \\approx 2\\text{–}3 \\times v_T\\)
  </p>
</div>

<h3>Arrhenius Equation</h3>
<p>
  The quantitative description is the <strong>Arrhenius equation</strong>:
</p>
<p style="text-align:center;">
  \\(k = A e^{-E_a / RT}\\)
</p>
<ul>
  <li>\\(k\\) = rate constant</li>
  <li>\\(A\\) = pre-exponential (frequency) factor</li>
  <li>\\(E_a\\) = activation energy (J/mol)</li>
  <li>\\(R = 8.314\\) J/(mol·K) = gas constant</li>
  <li>\\(T\\) = absolute temperature (K)</li>
</ul>
<p>
  Temperature increase works via two effects: (1) more collisions (molecules move
  faster) and (2) much more effective collisions (more molecules exceed \\(E_a\\)).
  Effect (2) dominates and explains the exponential dependence.
</p>

<h2>Surface Area: Unlocking Hidden Reactants</h2>
<p>
  For heterogeneous reactions (solid reacting with liquid or gas), only the
  <strong>surface molecules</strong> can participate. Breaking a solid into
  smaller pieces exposes more surface area and more molecules to react.
</p>

<div class="info-box">
  <h3>Surface Area Formula</h3>
  <p>
    A cube of side \\(L\\) cut into \\(n^3\\) equal smaller cubes of side \\(L/n\\)
    has total surface area increased by factor \\(n\\):
  </p>
  <p style="text-align:center;">
    \\(\\text{Total SA} = n^3 \\times 6\\left(\\dfrac{L}{n}\\right)^2 = 6L^2 \\cdot n\\)
  </p>
</div>

<div class="info-box">
  <h3>Real-World Example: Coal Dust Explosions</h3>
  <p>
    A lump of coal burns slowly. The same mass ground into fine dust ignites
    explosively because the surface-area-to-volume ratio is enormously increased,
    allowing rapid oxidation by atmospheric O₂.
  </p>
</div>
      `,
      visualizations: [
        {
          id: 'viz-arrhenius-plot',
          title: 'Arrhenius Plot: ln(k) vs 1/T',
          description: 'Adjust activation energy Ea to see how the slope of the Arrhenius plot changes.',
          render(container) {
            container.innerHTML = '';
            const viz = new VizEngine(container, {
              width: 580, height: 360,
              originX: 80, originY: 320,
              scale: 55
            });

            let Ea = 50000;
            const R  = 8.314;
            const lnA = 15;

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;';
            VizEngine.createSlider(controls, 'Ea (kJ/mol)', 10, 150, 50, 5, v => { Ea = v * 1000; draw(); });
            container.appendChild(controls);

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              const xMin = 1.0, xMax = 3.5;
              const yRange = 25;
              const yBase = -5;

              function toSx(x) { return 80 + ((x - xMin) / (xMax - xMin)) * 480; }
              function toSy(y) { return 320 - ((y - yBase) / yRange) * 300; }

              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(80, 20); ctx.lineTo(80, 320); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(560, 320); ctx.stroke();

              ctx.fillStyle = '#8b949e'; ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              for (let x = xMin; x <= xMax; x += 0.5) {
                const sx = toSx(x);
                ctx.beginPath(); ctx.moveTo(sx, 320); ctx.lineTo(sx, 325); ctx.stroke();
                ctx.fillText(x.toFixed(1), sx, 328);
              }
              ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
              for (let y = yBase; y <= yBase + yRange; y += 5) {
                const sy = toSy(y);
                ctx.beginPath(); ctx.moveTo(80, sy); ctx.lineTo(75, sy); ctx.stroke();
                ctx.fillText(y.toFixed(0), 72, sy);
              }

              ctx.fillStyle = '#8b949e'; ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('1/T × 10⁻³ (K⁻¹)', 320, 340);
              ctx.save(); ctx.translate(16, 170); ctx.rotate(-Math.PI / 2);
              ctx.fillText('ln(k)', 0, 0); ctx.restore();

              ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (let xi = 0; xi <= 200; xi++) {
                const x = xMin + (xi / 200) * (xMax - xMin);
                const invT = x * 1e-3;
                const lnk = lnA - (Ea / R) * invT;
                const sx = toSx(x);
                const sy = toSy(lnk);
                xi === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
              }
              ctx.stroke();

              const x1 = 1.5, x2 = 3.0;
              const y1 = lnA - (Ea / R) * x1 * 1e-3;
              const y2 = lnA - (Ea / R) * x2 * 1e-3;
              const slope = -(Ea / R) * 1e-3;

              ctx.strokeStyle = '#f0883e44'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
              ctx.beginPath(); ctx.moveTo(toSx(x1), toSy(y1)); ctx.lineTo(toSx(x2), toSy(y1)); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(toSx(x2), toSy(y1)); ctx.lineTo(toSx(x2), toSy(y2)); ctx.stroke();
              ctx.setLineDash([]);

              ctx.fillStyle = '#f0883e'; ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
              ctx.fillText(`slope = -Ea/R = ${slope.toFixed(0)} K`, toSx(x2) + 5, (toSy(y1) + toSy(y2)) / 2);

              ctx.fillStyle = '#3fb9a0'; ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left'; ctx.textBaseline = 'top';
              ctx.fillText(`Ea = ${(Ea / 1000).toFixed(0)} kJ/mol`, 90, 28);
            }

            draw();
          }
        },
        {
          id: 'viz-surface-area-demo',
          title: 'Surface Area: Cube Fragmentation Demo',
          description: 'See how cutting a large cube into n³ smaller cubes multiplies the total surface area by n.',
          setup(container) {
            const W = 660, H = 340;
            const viz = new VizEngine(container, { width: W, height: H });
            const ctx = viz.ctx;

            let n = 1;

            function draw() {
              viz.clear();

              const L = 1;
              const totalSA = 6 * L * L * n;
              const smallSide = (L / n).toFixed(3);

              function drawCubeIso(cx, cy, sideLen, color, label) {
                const s = sideLen;
                const iso = 0.4;
                const pts = {
                  front: [[cx - s, cy + s * iso], [cx + s, cy + s * iso], [cx + s, cy - s * iso * 2 + s * iso], [cx - s, cy - s * iso * 2 + s * iso]],
                  top:   [[cx - s, cy - s * iso * 2 + s * iso], [cx + s, cy - s * iso * 2 + s * iso], [cx + s + s * 0.8, cy - s * iso * 2], [cx - s + s * 0.8, cy - s * iso * 2]],
                  right: [[cx + s, cy + s * iso], [cx + s + s * 0.8, cy], [cx + s + s * 0.8, cy - s * iso * 2], [cx + s, cy - s * iso * 2 + s * iso]]
                };

                ctx.fillStyle = color + '55';
                ctx.beginPath();
                pts.front.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
                ctx.closePath(); ctx.fill();
                ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();

                ctx.fillStyle = color + '33';
                ctx.beginPath();
                pts.top.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
                ctx.closePath(); ctx.fill();
                ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();

                ctx.fillStyle = color + '44';
                ctx.beginPath();
                pts.right.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
                ctx.closePath(); ctx.fill();
                ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();

                if (label) {
                  ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 12px -apple-system,sans-serif';
                  ctx.textAlign = 'center'; ctx.fillText(label, cx, cy + s * iso + 20);
                }
              }

              drawCubeIso(160, 200, 70, '#58a6ff', '1 cube, side = 1');

              const showCount = Math.min(n * n * n, 16);
              const smallS = Math.max(10, 60 / n);
              const cols = Math.ceil(Math.sqrt(showCount));
              const startX = 340;
              const colors = ['#3fb9a0', '#f0883e', '#bc8cff', '#f778ba', '#d29922', '#3fb950', '#f85149', '#58a6ff'];

              ctx.fillStyle = '#8b949e'; ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(n * n * n > 16 ? `${n * n * n} cubes (showing 16)` : `${n * n * n} cube(s)`, startX + cols * (smallS * 2.5) / 2, H - 20);

              for (let i = 0; i < showCount; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const cx = startX + col * (smallS * 2.8) + smallS;
                const cy = 100 + row * (smallS * 1.8) + smallS;
                drawCubeIso(cx, cy, smallS, colors[i % colors.length], null);
              }

              ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(`n = ${n} cuts per side`, 20, 295);
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillStyle = '#8b949e';
              ctx.fillText(`Small cube side = ${smallSide}`, 20, 315);
              ctx.fillStyle = '#3fb9a0'; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.fillText(`Total surface area = ${totalSA.toFixed(0)} units²  (${n}× original)`, 200, 315);

              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(245, 200); ctx.lineTo(310, 200); ctx.stroke();
              ctx.fillStyle = '#4a4a7a';
              ctx.beginPath(); ctx.moveTo(318, 200); ctx.lineTo(310, 196); ctx.lineTo(310, 204); ctx.closePath(); ctx.fill();
            }

            draw();

            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:16px;align-items:center;margin-top:8px;';
            ctrl.innerHTML = `
              <label style="color:#8b949e;font-size:13px;">
                Cuts per side (n):
                <input type="range" id="n-sa-slider" min="1" max="6" value="${n}" style="width:120px;">
                <span id="n-sa-val" style="color:#3fb9a0;font-weight:bold;">${n}</span>
              </label>
            `;
            container.appendChild(ctrl);

            ctrl.querySelector('#n-sa-slider').addEventListener('input', e => {
              n = +e.target.value;
              ctrl.querySelector('#n-sa-val').textContent = n;
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch08-sec04-ex01',
          type: 'multiple-choice',
          question: 'According to the rule of thumb, if a reaction rate is 4 mol/(L·s) at 20°C, what is the approximate rate at 40°C?',
          options: ['4 mol/(L·s)', '8 mol/(L·s)', '16 mol/(L·s)', '2 mol/(L·s)'],
          answer: 2,
          explanation: 'Two 10°C rises: rate × 2 × 2 = 4 × 4 = 16 mol/(L·s).'
        },
        {
          id: 'ch08-sec04-ex02',
          type: 'multiple-choice',
          question: 'A reaction has rate v at temperature T. Using the 10°C rule (rate doubles per 10°C), what is the approximate rate at T + 30°C?',
          options: ['2v', '4v', '6v', '8v'],
          answer: 3,
          explanation: 'Each 10°C rise doubles the rate. Three 10°C rises: 2³ = 8. So the rate becomes approximately 8v.'
        },
        {
          id: 'ch08-sec04-ex03',
          type: 'multiple-choice',
          question: 'A cube of zinc with side 2 cm is cut into cubes of side 0.5 cm. By what factor does the surface area increase?',
          options: ['2', '4', '8', '16'],
          answer: 1,
          explanation: 'n = 2 cm / 0.5 cm = 4 cuts per side. Surface area increases by factor n = 4.'
        },
        {
          id: 'ch08-sec04-ex04',
          type: 'multiple-choice',
          question: 'Finely powdered iron reacts with hydrochloric acid faster than iron lumps. This is because:',
          options: [
            'Powder has lower activation energy',
            'Powder increases temperature',
            'Powder has larger surface area, increasing collision frequency',
            'Powder changes the rate law'
          ],
          answer: 2,
          explanation: 'Smaller particles expose more surface area to the acid, resulting in more frequent collisions and a faster reaction rate.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 5: Catalysts
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch08-sec05',
      title: 'Catalysts',
      content: `
<h2>Catalysts: Lowering the Energy Barrier</h2>
<p>
  A <strong>catalyst</strong> (催化剂) is a substance that <em>increases</em> the
  reaction rate without itself being consumed in the overall reaction.
  It works by providing an alternative reaction pathway with a <strong>lower
  activation energy</strong> \\(E_a\\).
</p>

<div class="concept-box">
  <h3>How Catalysts Work</h3>
  <ul>
    <li>A catalyst lowers \\(E_a\\), so more collisions have sufficient energy.</li>
    <li>By the Arrhenius equation, smaller \\(E_a\\) → much larger \\(k\\).</li>
    <li>The catalyst is regenerated at the end — it is not consumed.</li>
    <li>The <strong>overall energy change</strong> \\(\\Delta H\\) of the reaction is
        unchanged — only the pathway changes.</li>
  </ul>
</div>

<h3>Homogeneous vs. Heterogeneous Catalysts</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin:12px 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Type</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Description</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Homogeneous (均相)</td>
      <td style="padding:8px;border:1px solid #30363d;">Same phase as reactants</td>
      <td style="padding:8px;border:1px solid #30363d;">H⁺ catalyzing ester hydrolysis</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Heterogeneous (多相)</td>
      <td style="padding:8px;border:1px solid #30363d;">Different phase from reactants</td>
      <td style="padding:8px;border:1px solid #30363d;">Fe catalyst in Haber process</td>
    </tr>
  </tbody>
</table>

<h3>Enzymes — Nature's Catalysts</h3>
<p>
  <strong>Enzymes</strong> (酶) are biological catalysts — protein molecules that
  catalyze reactions in living cells with extraordinary specificity and efficiency.
  The active site is precisely shaped to bind its specific substrate, dramatically
  lowering the activation energy.
</p>
<ul>
  <li>Each enzyme catalyzes a specific reaction (lock-and-key model).</li>
  <li>Optimal temperature ~37°C for most human enzymes; high temperature denatures them.</li>
  <li>Example: amylase (淀粉酶) breaks down starch; catalase (过氧化氢酶) decomposes H₂O₂.</li>
</ul>

<h3>Summary: All Factors Affecting Rate</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin:12px 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Factor</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Change</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Effect</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Mechanism</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #30363d;">Concentration</td><td style="padding:8px;border:1px solid #30363d;">↑</td><td style="padding:8px;border:1px solid #30363d;">↑ Rate</td><td style="padding:8px;border:1px solid #30363d;">More collisions</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Pressure (gases)</td><td style="padding:8px;border:1px solid #30363d;">↑</td><td style="padding:8px;border:1px solid #30363d;">↑ Rate</td><td style="padding:8px;border:1px solid #30363d;">↑ Concentration</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Temperature</td><td style="padding:8px;border:1px solid #30363d;">↑</td><td style="padding:8px;border:1px solid #30363d;">↑ Rate strongly</td><td style="padding:8px;border:1px solid #30363d;">More molecules ≥ Ea</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Surface area</td><td style="padding:8px;border:1px solid #30363d;">↑ (solids)</td><td style="padding:8px;border:1px solid #30363d;">↑ Rate</td><td style="padding:8px;border:1px solid #30363d;">More exposed reactants</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Catalyst</td><td style="padding:8px;border:1px solid #30363d;">Added</td><td style="padding:8px;border:1px solid #30363d;">↑ Rate</td><td style="padding:8px;border:1px solid #30363d;">Lower Ea pathway</td></tr>
  </tbody>
</table>
      `,
      visualizations: [
        {
          id: 'viz-enzyme-catalysis',
          title: 'Enzyme Catalysis Animation',
          description: 'Watch the energy barrier lower when a catalyst is present. Toggle the catalyst on/off and animate a molecule traversing the energy profile.',
          setup(container) {
            const W = 660, H = 360;
            const viz = new VizEngine(container, { width: W, height: H });
            const ctx = viz.ctx;

            let catalystOn = false;
            let animT = 0;
            let animId = null;
            let running = false;

            const padL = 70, padR = 30, padT = 40, padB = 60;
            const plotW = W - padL - padR;
            const plotH = H - padT - padB;

            const E_react = 0.25;
            const E_prod  = 0.15;
            const E_ts    = 0.85;
            const E_ts_cat = 0.55;

            function ey(e) { return padT + plotH * (1 - e); }
            function ex(frac) { return padL + frac * plotW; }

            function drawProfile(ts_E, color, label) {
              ctx.strokeStyle = color; ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.moveTo(ex(0), ey(E_react));
              ctx.bezierCurveTo(ex(0.25), ey(E_react), ex(0.35), ey(ts_E), ex(0.5), ey(ts_E));
              ctx.bezierCurveTo(ex(0.65), ey(ts_E), ex(0.75), ey(E_prod), ex(1), ey(E_prod));
              ctx.stroke();

              ctx.fillStyle = color; ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(label, ex(0.52), ey(ts_E) - 10);
            }

            function drawMolecule(frac, ts_E, color) {
              const t = frac;
              let molE;
              if (t < 0.5) {
                molE = E_react + (ts_E - E_react) * Math.sin(t / 0.5 * Math.PI / 2);
              } else {
                molE = ts_E + (E_prod - ts_E) * Math.sin((t - 0.5) / 0.5 * Math.PI / 2);
              }
              const mx = ex(frac);
              const my = ey(molE) - 10;

              ctx.fillStyle = color;
              ctx.beginPath(); ctx.arc(mx, my, 9, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 9px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('M', mx, my);
              ctx.textBaseline = 'alphabetic';
            }

            function draw() {
              viz.clear();

              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + plotH);
              ctx.moveTo(padL, padT + plotH); ctx.lineTo(padL + plotW, padT + plotH);
              ctx.stroke();

              ctx.fillStyle = '#8b949e'; ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Reaction Progress', padL + plotW / 2, H - 12);
              ctx.save(); ctx.translate(16, padT + plotH / 2); ctx.rotate(-Math.PI / 2);
              ctx.fillText('Potential Energy', 0, 0); ctx.restore();

              ctx.fillStyle = '#8b949e'; ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText('Reactants', padL - 4, ey(E_react) + 4);
              ctx.fillText('Products', padL - 4, ey(E_prod) + 4);

              ctx.setLineDash([4, 4]); ctx.lineWidth = 1; ctx.strokeStyle = '#2a2a50';
              ctx.beginPath(); ctx.moveTo(padL, ey(E_react)); ctx.lineTo(padL + plotW, ey(E_react)); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(padL, ey(E_prod)); ctx.lineTo(padL + plotW, ey(E_prod)); ctx.stroke();
              ctx.setLineDash([]);

              drawProfile(E_ts, '#f85149', 'Without catalyst');

              if (catalystOn) {
                drawProfile(E_ts_cat, '#3fb950', 'With catalyst');
              }

              const arrowX = ex(0.15);
              ctx.strokeStyle = '#f85149'; ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(arrowX, ey(E_react));
              ctx.lineTo(arrowX, ey(E_ts));
              ctx.stroke();
              ctx.fillStyle = '#f85149'; ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(`Ea = ${((E_ts - E_react) * 100).toFixed(0)} kJ/mol`, arrowX + 4, ey((E_react + E_ts) / 2));

              if (catalystOn) {
                ctx.strokeStyle = '#3fb950'; ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(arrowX + 65, ey(E_react));
                ctx.lineTo(arrowX + 65, ey(E_ts_cat));
                ctx.stroke();
                ctx.fillStyle = '#3fb950';
                ctx.fillText(`Ea' = ${((E_ts_cat - E_react) * 100).toFixed(0)} kJ/mol`, arrowX + 70, ey((E_react + E_ts_cat) / 2));
              }

              if (running) {
                const ts_E = catalystOn ? E_ts_cat : E_ts;
                const frac = (Math.sin(animT * 0.015) + 1) / 2;
                drawMolecule(frac, ts_E, catalystOn ? '#3fb950' : '#f85149');
              }

              const dhX = ex(0.88);
              ctx.strokeStyle = '#d29922'; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(dhX, ey(E_react)); ctx.lineTo(dhX, ey(E_prod)); ctx.stroke();
              ctx.fillStyle = '#d29922'; ctx.font = 'bold 11px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText('\u0394H = ' + (-(E_react - E_prod) * 100).toFixed(0) + ' kJ/mol (unchanged)', dhX - 4, ey((E_react + E_prod) / 2));

              ctx.fillStyle = catalystOn ? '#3fb950' : '#f85149';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(catalystOn ? 'Catalyst ACTIVE — lower Ea!' : 'No catalyst', padL + plotW / 2, padT - 14);
            }

            draw();

            function loop() {
              if (!running) return;
              animT++;
              draw();
              animId = requestAnimationFrame(loop);
            }

            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;align-items:center;';
            ctrl.innerHTML = `
              <button id="cat-btn" style="padding:6px 18px;background:#21262d;color:#3fb950;border:2px solid #3fb950;border-radius:6px;cursor:pointer;font-weight:bold;">Add Catalyst</button>
              <button id="anim-btn" style="padding:6px 16px;background:#238636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Animate Molecule</button>
            `;
            container.appendChild(ctrl);

            ctrl.querySelector('#cat-btn').addEventListener('click', e => {
              catalystOn = !catalystOn;
              e.target.textContent = catalystOn ? 'Remove Catalyst' : 'Add Catalyst';
              e.target.style.color = catalystOn ? '#f85149' : '#3fb950';
              e.target.style.borderColor = catalystOn ? '#f85149' : '#3fb950';
              draw();
            });
            ctrl.querySelector('#anim-btn').addEventListener('click', e => {
              if (running) {
                running = false; e.target.textContent = 'Animate Molecule';
              } else {
                running = true; e.target.textContent = 'Stop'; loop();
              }
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch08-sec05-ex01',
          type: 'multiple-choice',
          question: 'A catalyst speeds up a reaction by:',
          options: ['Increasing temperature', 'Lowering activation energy', 'Increasing concentration of reactants', 'Changing the equilibrium constant'],
          answer: 1,
          explanation: 'A catalyst provides an alternative pathway with lower Ea. It does not change temperature, concentration, or the equilibrium constant.'
        },
        {
          id: 'ch08-sec05-ex02',
          type: 'multiple-choice',
          question: 'When a catalyst is added to a reaction, the overall ΔH of the reaction:',
          options: ['Increases', 'Decreases', 'Remains unchanged', 'Becomes zero'],
          answer: 2,
          explanation: 'A catalyst only changes the pathway (lowers Ea), not the overall energy change ΔH of the reaction.'
        },
        {
          id: 'ch08-sec05-ex03',
          type: 'multiple-choice',
          question: 'In the Haber process (N₂ + 3H₂ → 2NH₃), iron (Fe) acts as a catalyst. This means Fe:',
          options: [
            'Is consumed to form FeN compounds',
            'Increases the equilibrium yield of NH₃',
            'Lowers the activation energy of both forward and reverse reactions',
            'Raises the temperature needed for the reaction'
          ],
          answer: 2,
          explanation: 'Catalysts lower Ea for both forward and reverse reactions equally, speeding up both without changing ΔH or the equilibrium position. Fe is regenerated, not consumed.'
        },
        {
          id: 'ch08-sec05-ex04',
          type: 'multiple-choice',
          question: 'Four experiments compare the rate of Zn + H₂SO₄ → ZnSO₄ + H₂. Which setup gives the FASTEST rate?',
          options: [
            'Zn lumps + dilute H₂SO₄ at 20°C',
            'Zn powder + dilute H₂SO₄ at 20°C',
            'Zn lumps + concentrated H₂SO₄ at 20°C',
            'Zn powder + dilute H₂SO₄ at 50°C'
          ],
          answer: 3,
          explanation: 'Option D combines both increased surface area (powder) AND higher temperature (50°C), both of which accelerate the rate. Concentrated H₂SO₄ actually passivates Zn, so D wins.'
        },
        {
          id: 'ch08-sec05-ex05',
          type: 'multiple-choice',
          question: 'An enzyme works much faster than an inorganic catalyst at body temperature (37°C) mainly because:',
          options: [
            'Enzymes are larger molecules',
            'Enzymes have an active site perfectly shaped for the substrate, giving a very low Ea',
            'Enzymes increase the concentration of reactants',
            'Enzymes raise the temperature locally'
          ],
          answer: 1,
          explanation: 'The active site of an enzyme is precisely shaped to bind its specific substrate, dramatically lowering the activation energy — far more effectively than general inorganic catalysts.'
        },
        {
          id: 'ch08-sec05-ex06',
          type: 'multiple-choice',
          question: 'Which factor affects the reaction rate of a SOLID reactant dissolving in acid?',
          options: [
            'Only the concentration of acid',
            'Only the surface area of the solid',
            'Both surface area of solid AND concentration of acid',
            'Neither — rate is determined solely by temperature'
          ],
          answer: 2,
          explanation: 'For a heterogeneous reaction (solid in liquid), both the surface area of the solid (how much is exposed) and the concentration of the liquid reactant (how frequently molecules collide with the surface) affect the rate.'
        }
      ]
    }

  ]
});
