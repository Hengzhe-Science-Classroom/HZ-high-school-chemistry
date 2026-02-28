window.CHAPTERS.push({
  id: 'ch07',
  number: 7,
  title: 'Reactions & Energy',
  subtitle: 'The Thermodynamics of Chemical Change',
  sections: [

    // ─── SECTION 1 ──────────────────────────────────────────────────────────
    {
      id: 'ch07-sec01',
 title:'',
      content: `
<h2>Energy Changes in Chemical Reactions</h2>

<p>Every chemical reaction involves a rearrangement of chemical bonds — and bonds store energy. When old bonds break and new bonds form, energy is either <strong>released to the surroundings</strong> or <strong>absorbed from the surroundings</strong>. This is why some reactions feel hot and others feel cold.</p>

<div class="chem-highlight">
<strong>Two fundamental types of reactions:</strong>
<ul>
 <li><span style="color:#f85149"><strong>Exothermic </strong></span>: releases energy to surroundings → surroundings get hotter. \\(\\Delta H < 0\\)</li>
 <li><span style="color:#58a6ff"><strong>Endothermic </strong></span>: absorbs energy from surroundings → surroundings get colder. \\(\\Delta H> 0\\)</li>
</ul>
</div>

<h3>Where Does the Energy Go?</h3>
<p>Chemical potential energy is stored in the arrangement of electrons within bonds. When a reaction occurs:</p>
<ul>
  <li>Breaking bonds <strong>requires energy input</strong> (endothermic step)</li>
  <li>Forming bonds <strong>releases energy</strong> (exothermic step)</li>
  <li>The net \\(\\Delta H\\) depends on which effect dominates</li>
</ul>

<p>The energy difference between reactants and products is called the <strong>enthalpy change</strong>, symbolized \\(\\Delta H\\).</p>

<div class="chem-formula">
\\[\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}\\]
</div>

<h3>Common Examples</h3>
<table class="chem-table">
  <thead><tr><th>Reaction</th><th>Type</th><th>ΔH (kJ/mol)</th></tr></thead>
  <tbody>
    <tr><td>Combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O</td><td style="color:#f85149">Exothermic</td><td>−890</td></tr>
    <tr><td>Neutralization: HCl + NaOH → NaCl + H₂O</td><td style="color:#f85149">Exothermic</td><td>−57.3</td></tr>
    <tr><td>Dissolution of NH₄NO₃ in water</td><td style="color:#58a6ff">Endothermic</td><td>+25.7</td></tr>
    <tr><td>Decomposition of CaCO₃ → CaO + CO₂</td><td style="color:#58a6ff">Endothermic</td><td>+178</td></tr>
    <tr><td>Ba(OH)₂·8H₂O + NH₄Cl (classic cooling demo)</td><td style="color:#58a6ff">Endothermic</td><td>ΔH > 0</td></tr>
  </tbody>
</table>

<h3>Energy Conservation</h3>
<p>Energy is never created or destroyed — the First Law of Thermodynamics. In an exothermic reaction, the chemical energy of the system decreases, and that energy flows into the surroundings as heat. The total energy of (system + surroundings) remains constant.</p>

<div class="chem-highlight">
<strong>Key Distinction</strong>
<table class="chem-table" style="margin-top:8px;">
  <thead><tr><th>Feature</th><th>Exothermic</th><th>Endothermic</th></tr></thead>
  <tbody>
    <tr><td>ΔH sign</td><td>Negative (−)</td><td>Positive (+)</td></tr>
    <tr><td>Surroundings temperature</td><td>Rises</td><td>Falls</td></tr>
    <tr><td>Bond energy balance</td><td>Forming > Breaking</td><td>Breaking > Forming</td></tr>
    <tr><td>Products vs Reactants energy</td><td>Lower</td><td>Higher</td></tr>
  </tbody>
</table>
</div>
      `,
      visualizations: [
        {
          id: 'ch07-viz01',
          title: 'Potential Energy Profile: Exothermic vs Endothermic',
          setup(container) {
            const V = new VizEngine(container, {
              width: 640, height: 360,
              originX: 60, originY: 300,
              scale: 45
            });

            let mode = 'exo';

            function draw() {
              V.clear();
              const ctx = V.ctx;
              const W = V.width, H = V.height;

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(
                mode === 'exo' ? 'Exothermic Reaction  (ΔH < 0)' : 'Endothermic Reaction  (ΔH > 0)',
                W / 2, 22
              );

              ctx.save();
              ctx.translate(20, H / 2);
              ctx.rotate(-Math.PI / 2);
              ctx.fillStyle = V.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Potential Energy', 0, 0);
              ctx.restore();

              ctx.fillStyle = V.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Reaction Coordinate →', W / 2, H - 10);

              ctx.strokeStyle = V.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(50, 30); ctx.lineTo(50, H - 28);
              ctx.moveTo(50, H - 28); ctx.lineTo(W - 20, H - 28);
              ctx.stroke();

              const x0 = 70, x1 = W - 40;
              const baseline = H - 50;

              let yR, yP, yTS;
              if (mode === 'exo') {
                yR = baseline - 100;
                yP = baseline - 20;
                yTS = baseline - 190;
              } else {
                yR = baseline - 30;
                yP = baseline - 130;
                yTS = baseline - 200;
              }

              const xMid = (x0 + x1) / 2;

              const grad = ctx.createLinearGradient(x0, 0, x1, 0);
              grad.addColorStop(0, mode === 'exo' ? V.colors.orange : V.colors.blue);
              grad.addColorStop(0.5, V.colors.purple);
              grad.addColorStop(1, mode === 'exo' ? V.colors.teal : V.colors.orange);

              ctx.strokeStyle = grad;
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.moveTo(x0, yR);
              ctx.bezierCurveTo(
                x0 + (xMid - x0) * 0.5, yR,
                xMid - (xMid - x0) * 0.3, yTS,
                xMid, yTS
              );
              ctx.bezierCurveTo(
                xMid + (x1 - xMid) * 0.3, yTS,
                x1 - (x1 - xMid) * 0.5, yP,
                x1, yP
              );
              ctx.stroke();

              ctx.setLineDash([5, 4]);
              ctx.lineWidth = 1.5;

              ctx.strokeStyle = mode === 'exo' ? V.colors.orange : V.colors.blue;
              ctx.beginPath();
              ctx.moveTo(x0 - 10, yR); ctx.lineTo(x0 + 50, yR);
              ctx.stroke();

              ctx.strokeStyle = mode === 'exo' ? V.colors.teal : V.colors.orange;
              ctx.beginPath();
              ctx.moveTo(x1 - 50, yP); ctx.lineTo(x1 + 10, yP);
              ctx.stroke();

              ctx.strokeStyle = V.colors.purple;
              ctx.beginPath();
              ctx.moveTo(xMid - 30, yTS); ctx.lineTo(xMid + 30, yTS);
              ctx.stroke();

              ctx.setLineDash([]);

              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillStyle = mode === 'exo' ? V.colors.orange : V.colors.blue;
              ctx.fillText('Reactants', x0, yR - 10);

              ctx.fillStyle = mode === 'exo' ? V.colors.teal : V.colors.orange;
              ctx.fillText('Products', x1 - 55, yP - 10);

              ctx.fillStyle = V.colors.purple;
              ctx.textAlign = 'center';
              ctx.fillText('Transition State', xMid, yTS - 12);

              const eaX = xMid - 60;
              ctx.strokeStyle = V.colors.yellow;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(eaX, yR); ctx.lineTo(eaX, yTS);
              ctx.stroke();
              ctx.fillStyle = V.colors.yellow;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText('Ea', eaX - 3, (yR + yTS) / 2);

              const dhX = x1 + 18;
              const arrowColor = mode === 'exo' ? V.colors.green : V.colors.red;
              ctx.strokeStyle = arrowColor;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(dhX, yR); ctx.lineTo(dhX, yP);
              ctx.stroke();
              const dir = yP > yR ? 1 : -1;
              ctx.fillStyle = arrowColor;
              ctx.beginPath();
              ctx.moveTo(dhX, yP);
              ctx.lineTo(dhX - 5, yP - dir * 10);
              ctx.lineTo(dhX + 5, yP - dir * 10);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = arrowColor;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(mode === 'exo' ? 'ΔH < 0' : 'ΔH > 0', dhX + 5, (yR + yP) / 2);
            }

            draw();

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:10px;';

            ['Exothermic', 'Endothermic'].forEach(label => {
              const btn = document.createElement('button');
              btn.textContent = label;
              btn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;font-size:13px;';
              btn.addEventListener('click', () => {
                mode = label === 'Exothermic' ? 'exo' : 'endo';
                draw();
              });
              btnRow.appendChild(btn);
            });
            container.appendChild(btnRow);
          }
        }
      ],
      exercises: [
        {
          id: 'ch07-ex01',
          question: 'Which of the following is an endothermic process?',
          type: 'mcq',
          options: [
            'Combustion of natural gas',
            'Neutralization of HCl with NaOH',
            'Dissolution of ammonium nitrate in water',
            'Rusting of iron'
          ],
          answer: 2,
          explanation: 'Dissolving NH₄NO₃ in water absorbs heat from the surroundings, making the solution feel cold. This is an endothermic process (ΔH > 0). The other three are all exothermic.'
        },
        {
          id: 'ch07-ex02',
          question: 'For an exothermic reaction, which statement is correct?',
          type: 'mcq',
          options: [
            'ΔH > 0 and energy is released',
            'ΔH < 0 and energy is released',
            'ΔH > 0 and energy is absorbed',
            'ΔH < 0 and energy is absorbed'
          ],
          answer: 1,
          explanation: 'For exothermic reactions, the products have lower enthalpy than the reactants, so ΔH = H(products) − H(reactants) < 0. Energy flows OUT to the surroundings, making them warmer.'
        }
      ]
    },

    // ─── SECTION 2 ──────────────────────────────────────────────────────────
    {
      id: 'ch07-sec02',
 title:'',
      content: `
<h2>Bond Energy and Reaction Enthalpy</h2>

<p>Bond energy is the energy required to break one mole of a particular covalent bond in the gaseous phase, producing gaseous atoms. It is always a <strong>positive value</strong> (breaking bonds takes energy).</p>

<div class="chem-highlight">
<strong>Key formula:</strong>
\\[\\Delta H = \\sum E_{\\text{bonds broken}} - \\sum E_{\\text{bonds formed}}\\]
<p>This works because breaking bonds absorbs energy (+) and forming bonds releases energy (−), so the net ΔH tells us which effect wins.</p>
</div>

<h3>Important Bond Energies</h3>
<table class="chem-table">
  <thead><tr><th>Bond</th><th>Bond Energy (kJ/mol)</th><th>Relative Strength</th></tr></thead>
  <tbody>
    <tr><td>H–H</td><td>436</td><td>Moderate</td></tr>
    <tr><td>O=O</td><td>498</td><td>Strong</td></tr>
    <tr><td>O–H</td><td>463</td><td>Strong</td></tr>
    <tr><td>C–H</td><td>413</td><td>Moderate</td></tr>
    <tr><td>C=O (in CO₂)</td><td>803</td><td>Very strong</td></tr>
    <tr><td>N≡N</td><td>945</td><td>Exceptionally strong</td></tr>
    <tr><td>N–H</td><td>391</td><td>Moderate</td></tr>
    <tr><td>C–C</td><td>347</td><td>Moderate</td></tr>
    <tr><td>C=C</td><td>614</td><td>Strong</td></tr>
  </tbody>
</table>

<h3>Worked Example: Formation of Water</h3>
<p>\\(\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}(g)\\)</p>

<div class="chem-formula">
\\[\\Delta H = [E(\\text{H–H}) + \\frac{1}{2}E(\\text{O=O})] - [2 \\times E(\\text{O–H})]\\]
\\[\\Delta H = [436 + \\frac{1}{2}(498)] - [2 \\times 463]\\]
\\[\\Delta H = [436 + 249] - 926 = 685 - 926 = -241 \\text{ kJ/mol}\\]
</div>

<p>The negative sign confirms this is exothermic — the bonds formed (O–H) release more energy than the bonds broken (H–H and O=O) absorb.</p>

<h3>Important Caveats</h3>
<ol>
  <li>Bond energies are <strong>average</strong> values — they vary slightly in different molecules.</li>
  <li>This method gives ΔH for <strong>gaseous</strong> reactants and products only.</li>
  <li>If liquid or solid phases appear, latent heats must also be included.</li>
</ol>
      `,
      visualizations: [
        {
          id: 'ch07-viz02',
          title: 'Bond Breaking & Forming Animation with Energy Counter',
          setup(container) {
            const V = new VizEngine(container, {
              width: 640, height: 360,
              originX: 320, originY: 180,
              scale: 55
            });

            let phase = 0;
            let t = 0;
            let running = false;
            let animId = null;

            const energyBreak = 685;
            const energyForm  = 926;

            function easeInOut(x) {
              return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
            }

            function draw() {
              V.clear();
              const W = V.width, H = V.height;
              const ctx = V.ctx;

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('H₂ + ½O₂ → H₂O  (Bond Energy View)', W / 2, 20);

              const et = easeInOut(t);

              if (phase === 0 || phase === 1) {
                const h2x = -3.5 + (phase === 1 ? et * 1.2 : 0);
                V.drawAtom(h2x - 0.4, 1.0, 0.28, V.colors.blue, 'H', '#fff');
                V.drawAtom(h2x + 0.4, 1.0, 0.28, V.colors.blue, 'H', '#fff');
                if (phase === 0 || (phase === 1 && et < 0.8)) {
                  V.drawBond(h2x - 0.4, 1.0, h2x + 0.4, 1.0, 1, V.colors.text);
                }

                const o2x = -3.5 + (phase === 1 ? et * 0.8 : 0);
                V.drawAtom(o2x - 0.25, -0.8, 0.35, V.colors.red, 'O', '#fff');
                V.drawAtom(o2x + 0.25, -0.8, 0.35, V.colors.red, 'O', '#fff');
                if (phase === 0 || (phase === 1 && et < 0.7)) {
                  V.drawBond(o2x - 0.25, -0.8, o2x + 0.25, -0.8, 2, V.colors.red);
                }

                V.drawText('Reactants: H₂ + ½O₂', -3.5, 2.2, V.colors.orange, 12);
              }

              if (phase === 2 || phase === 3) {
                const ox = 1.5 + (phase === 2 ? (et - 1) * 0.5 : 0);
                V.drawAtom(ox, 0.5, 0.35, V.colors.red, 'O', '#fff');
                V.drawAtom(ox - 0.65, -0.4, 0.28, V.colors.blue, 'H', '#fff');
                V.drawAtom(ox + 0.65, -0.4, 0.28, V.colors.blue, 'H', '#fff');
                if (phase === 2 && et > 0.3) {
                  V.drawBond(ox, 0.5, ox - 0.65, -0.4, 1, V.colors.teal);
                  V.drawBond(ox, 0.5, ox + 0.65, -0.4, 1, V.colors.teal);
                } else if (phase === 3) {
                  V.drawBond(ox, 0.5, ox - 0.65, -0.4, 1, V.colors.teal);
                  V.drawBond(ox, 0.5, ox + 0.65, -0.4, 1, V.colors.teal);
                }
                V.drawText('Product: H₂O', 1.5, 1.8, V.colors.teal, 12);
              }

              // Energy counter panel
              const panelX = W - 195, panelY = 50;
              ctx.fillStyle = '#1a1a40';
              ctx.strokeStyle = V.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.roundRect(panelX, panelY, 180, 110, 8);
              ctx.fill(); ctx.stroke();

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Energy Tracker', panelX + 10, panelY + 18);

              let brokenNow = 0, formedNow = 0;
              if (phase === 1) brokenNow = energyBreak * et;
              if (phase >= 2) brokenNow = energyBreak;
              if (phase === 2) formedNow = energyForm * et;
              if (phase === 3) formedNow = energyForm;

              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillStyle = V.colors.orange;
              ctx.fillText(`Broken: +${Math.round(brokenNow)} kJ`, panelX + 10, panelY + 42);
              ctx.fillStyle = V.colors.teal;
              ctx.fillText(`Formed: -${Math.round(formedNow)} kJ`, panelX + 10, panelY + 62);

              const netNow = brokenNow - formedNow;
              ctx.fillStyle = netNow < 0 ? V.colors.green : netNow > 0 ? V.colors.red : V.colors.text;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.fillText(`ΔH = ${netNow >= 0 ? '+' : ''}${Math.round(netNow)} kJ`, panelX + 10, panelY + 86);

              const phaseLabels = ['Ready', 'Breaking bonds...', 'Forming bonds...', 'Complete!'];
              ctx.fillStyle = V.colors.yellow;
              ctx.font = 'italic 12px -apple-system,sans-serif';
              ctx.fillText(phaseLabels[phase], panelX + 10, panelY + 106);
            }

            draw();

            function stepPhase() {
              if (phase < 3) phase++;
              t = 0; running = true;
              if (animId) cancelAnimationFrame(animId);
              function loop() {
                t += 0.015;
                if (t >= 1) { t = 1; running = false; draw(); return; }
                draw();
                animId = requestAnimationFrame(loop);
              }
              animId = requestAnimationFrame(loop);
            }

            function resetAll() {
              if (animId) cancelAnimationFrame(animId);
              phase = 0; t = 0; running = false;
              draw();
            }

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:10px;';
            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Next Step';
            nextBtn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;';
            nextBtn.addEventListener('click', () => { if (!running && phase < 3) stepPhase(); });

            const resetBtn = document.createElement('button');
            resetBtn.textContent = 'Reset';
            resetBtn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;';
            resetBtn.addEventListener('click', resetAll);

            btnRow.appendChild(nextBtn);
            btnRow.appendChild(resetBtn);
            container.appendChild(btnRow);
          }
        }
      ],
      exercises: [
        {
          id: 'ch07-ex03',
          question: 'Given bond energies: H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, H–Cl = 432 kJ/mol. Calculate ΔH for H₂(g) + Cl₂(g) → 2HCl(g).',
          type: 'mcq',
          options: [
            'ΔH = −185 kJ/mol',
            'ΔH = +185 kJ/mol',
            'ΔH = −864 kJ/mol',
            'ΔH = +247 kJ/mol'
          ],
          answer: 0,
          explanation: 'ΔH = Σ(bonds broken) − Σ(bonds formed) = (436 + 243) − (2 × 432) = 679 − 864 = −185 kJ/mol. The reaction is exothermic.'
        },
        {
          id: 'ch07-ex04',
          question: 'Given bond energies: C–H = 413, O=O = 498, C=O = 799, O–H = 463 kJ/mol. Calculate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O (all gaseous).',
          type: 'mcq',
          options: [
            'ΔH = −802 kJ/mol',
            'ΔH = +802 kJ/mol',
            'ΔH = −241 kJ/mol',
            'ΔH = −685 kJ/mol'
          ],
          answer: 0,
          explanation: 'Bonds broken: 4×C–H + 2×O=O = 4(413)+2(498) = 1652+996 = 2648 kJ. Bonds formed: 2×C=O + 4×O–H = 2(799)+4(463) = 1598+1852 = 3450 kJ. ΔH = 2648 − 3450 = −802 kJ/mol.'
        }
      ]
    },

    // ─── SECTION 3 ──────────────────────────────────────────────────────────
    {
      id: 'ch07-sec03',
 title:'',
      content: `
<h2>Thermochemical Equations</h2>

<p>A <strong>thermochemical equation</strong> is a balanced chemical equation that also specifies:</p>
<ol>
  <li>The <strong>physical state</strong> of every substance: (g) gas, (l) liquid, (s) solid, (aq) aqueous</li>
  <li>The <strong>enthalpy change</strong> \\(\\Delta H\\) for the reaction as written</li>
</ol>

<div class="chem-highlight">
<strong>Example — Combustion of hydrogen:</strong>
\\[\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}(l) \\quad \\Delta H = -285.8 \\text{ kJ/mol}\\]
<p>Compare with product as gas:
\\[\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}(g) \\quad \\Delta H = -241.8 \\text{ kJ/mol}\\]
</p>
<p>The difference (44 kJ/mol) is the enthalpy of vaporization of water — showing why state symbols matter!</p>
</div>

<h3>Rules for Writing Thermochemical Equations</h3>
<ol>
  <li><strong>State symbols are mandatory</strong>. Omitting them is an error.</li>
  <li>\\(\\Delta H\\) refers to the reaction <em>as written</em>. If you double all coefficients, \\(\\Delta H\\) also doubles.</li>
  <li>The reverse reaction has \\(\\Delta H_{\\text{reverse}} = -\\Delta H_{\\text{forward}}\\)</li>
  <li>Fractional coefficients are allowed (e.g., ½ O₂) to express ΔH per mole of a specific substance.</li>
</ol>

<h3>Standard Enthalpy of Formation \\(\\Delta H_f^\\circ\\)</h3>
<p>The standard enthalpy of formation is the \\(\\Delta H\\) when <strong>one mole</strong> of a compound is formed from its elements in their standard states at 25°C and 1 atm.</p>

<div class="chem-formula">
\\[\\Delta H_{\\text{rxn}}^\\circ = \\sum \\Delta H_f^\\circ (\\text{products}) - \\sum \\Delta H_f^\\circ (\\text{reactants})\\]
</div>

<p>By definition, \\(\\Delta H_f^\\circ\\) for any element in its standard state = 0.</p>

<h3>Enthalpy of Combustion and Neutralisation</h3>
<p>The <em>enthalpy of combustion</em> is the heat released when <strong>1 mol</strong> of a substance is completely burned in O₂, with products in their stable standard states:</p>
<ul>
  <li>Methane: −890 kJ/mol</li>
  <li>Ethanol: −1367 kJ/mol</li>
  <li>Glucose: −2803 kJ/mol</li>
</ul>
<p>Standard enthalpy of neutralisation (strong acid + strong base, dilute aqueous): ΔH = −57.3 kJ/mol. This value is essentially constant regardless of which strong acid or base is used (since only H⁺ and OH⁻ react). Weak acids or bases give a less negative value because extra energy is needed to ionize them.</p>
      `,
      visualizations: [
        {
          id: 'ch07-viz03',
          title: 'Heat of Neutralisation Simulation',
          setup(container) {
            const V = new VizEngine(container, {
              width: 640, height: 360,
              originX: 320, originY: 180,
              scale: 50
            });

            const ctx = V.ctx;
            const W = V.width, H = V.height;

            let poured = false;
            let t = 0;
            let animId = null;

            let particles = [];
            function initParticles() {
              particles = [];
              for (let i = 0; i < 30; i++) {
                particles.push({
                  x: (Math.random() - 0.5) * 3 - 1.5,
                  y: (Math.random() - 0.5) * 1.4,
                  vx: (Math.random() - 0.5) * 0.01,
                  vy: (Math.random() - 0.5) * 0.01,
                  type: i < 15 ? 'H' : 'OH',
                  active: false
                });
              }
            }
            initParticles();

            let temp = 22.0;
            let targetTemp = 22.0;

            function draw() {
              V.clear();

              // Beaker outline
              ctx.strokeStyle = V.colors.axis;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(W / 2 - 120, H / 2 - 80);
              ctx.lineTo(W / 2 - 120, H / 2 + 90);
              ctx.lineTo(W / 2 + 120, H / 2 + 90);
              ctx.lineTo(W / 2 + 120, H / 2 - 80);
              ctx.stroke();

              // Liquid fill
              const fillColor = poured
                ? `rgba(255,${Math.round(120 - (temp - 22) * 8)},0,0.25)`
                : 'rgba(88,166,255,0.2)';
              ctx.fillStyle = fillColor;
              ctx.fillRect(W / 2 - 118, H / 2 - 30, 236, 118);

              // Particles
              particles.forEach(p => {
                if (!p.active) return;
                const sx = W / 2 + p.x * 50;
                const sy = H / 2 + p.y * 50;
                const col = p.type === 'H' ? V.colors.orange : V.colors.blue;
                ctx.fillStyle = col;
                ctx.beginPath();
                ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = V.colors.white;
                ctx.font = '8px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.type === 'H' ? 'H⁺' : 'OH⁻', sx, sy);
              });
              ctx.textBaseline = 'alphabetic';

              // Thermometer
              const thX = W - 80, thY = 60;
              ctx.strokeStyle = V.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.roundRect(thX - 8, thY, 16, 120, 8);
              ctx.stroke();

              const fillH = Math.min(115, Math.max(5, (temp - 20) * 20));
              ctx.fillStyle = V.colors.red;
              ctx.beginPath();
              ctx.roundRect(thX - 6, thY + 115 - fillH, 12, fillH, 4);
              ctx.fill();

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(`${temp.toFixed(1)} °C`, thX, thY + 138);
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillStyle = V.colors.text;
              ctx.fillText('Temp', thX, thY + 155);

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Neutralisation: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)', W / 2, 22);

              ctx.fillStyle = V.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText(poured ? 'ΔH ≈ −57.3 kJ/mol  (heat released → temp rises)' : 'Add NaOH solution to HCl solution', W / 2, H - 18);

              ctx.fillStyle = V.colors.orange;
              ctx.fillText('● H⁺ ions', W / 2 - 80, H - 40);
              ctx.fillStyle = V.colors.blue;
              ctx.fillText('● OH⁻ ions', W / 2 + 60, H - 40);
            }

            draw();

            function startReaction() {
              poured = true;
              particles.forEach(p => { p.active = true; });
              targetTemp = 28.6;
              if (animId) cancelAnimationFrame(animId);
              function loop() {
                temp += (targetTemp - temp) * 0.04;
                let allNeutral = true;
                particles.forEach(p => {
                  if (!p.active) return;
                  allNeutral = false;
                  p.x += p.vx + (Math.random() - 0.5) * 0.04;
                  p.y += p.vy + (Math.random() - 0.5) * 0.04;
                  p.x = Math.max(-2.3, Math.min(2.3, p.x));
                  p.y = Math.max(-1.2, Math.min(1.2, p.y));
                  if (p.type === 'H') {
                    const partner = particles.find(q => q.type === 'OH' && q.active &&
                      Math.sqrt((q.x - p.x) ** 2 + (q.y - p.y) ** 2) < 0.25);
                    if (partner) {
                      p.active = false;
                      partner.active = false;
                    }
                  }
                });
                draw();
                if (Math.abs(temp - targetTemp) > 0.05 || !allNeutral) {
                  animId = requestAnimationFrame(loop);
                }
              }
              animId = requestAnimationFrame(loop);
            }

            function resetSim() {
              if (animId) cancelAnimationFrame(animId);
              poured = false; temp = 22.0; targetTemp = 22.0;
              initParticles();
              draw();
            }

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:10px;';
            const pourBtn = document.createElement('button');
            pourBtn.textContent = 'Add NaOH';
            pourBtn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;';
            pourBtn.addEventListener('click', () => { if (!poured) startReaction(); });
            const rstBtn = document.createElement('button');
            rstBtn.textContent = 'Reset';
            rstBtn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;';
            rstBtn.addEventListener('click', resetSim);
            btnRow.appendChild(pourBtn);
            btnRow.appendChild(rstBtn);
            container.appendChild(btnRow);
          }
        },
        {
          id: 'ch07-viz03b',
          title: 'Reaction Coordinate Energy Diagram — Interactive ΔH',
          setup(container) {
            const info = document.createElement('p');
            info.style.cssText = 'color:#8b949e;font-size:0.85rem;text-align:center;margin-bottom:6px;';
            info.textContent = 'Adjust ΔH and activation energy to explore energy diagrams';
            container.appendChild(info);

            const viz = new VizEngine(container, { width: 640, height: 320, scale: 28, originX: 70, originY: 260 });

            let deltaH = -2.5, Ea = 3.5;
            VizEngine.createSlider(container, 'ΔH (kJ/mol × 10)', -5, 5, -2.5, 0.1, v => { deltaH = v; draw(); });
            VizEngine.createSlider(container, 'Activation Energy Eₐ', 1, 7, 3.5, 0.1, v => { Ea = v; draw(); });

            function draw() {
              viz.clear();
              const C = viz.colors;

              viz.screenText('Energy', 12, 140, C.text, 12, 'center', 'middle');
              viz.screenText('Reaction Coordinate →', viz.width / 2 + 30, viz.height - 8, C.text, 12);

              const xR = -6, xP = 6;
              const ctx = viz.ctx;

              const isExo = deltaH < 0;
              const curveColor = isExo ? C.orange : C.blue;

              ctx.strokeStyle = curveColor; ctx.lineWidth = 2.5;
              ctx.beginPath();
              const steps = 300;
              for (let i = 0; i <= steps; i++) {
                const x = xR + (i / steps) * (xP - xR);
                const norm = (x - xR) / (xP - xR);
                const base = norm * deltaH;
                const bump = Ea * 4 * norm * (1 - norm) * Math.exp(-0.5 * ((norm - 0.5) / 0.18) ** 2) * 1.2;
                const y = base + bump;
                const [sx, sy] = viz.toScreen(x, y);
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
              }
              ctx.stroke();

              viz.drawSegment(xR, 0, xR + 3, 0, C.green, 2, true);
              viz.screenText('Reactants', ...viz.toScreen(xR + 1.5, -0.4), C.green, 12);

              viz.drawSegment(xR + 9, deltaH, xP, deltaH, isExo ? C.orange : C.blue, 2, true);
              viz.screenText('Products', ...viz.toScreen(xR + 10.5, deltaH - 0.35), isExo ? C.orange : C.blue, 12);

              const peakY = Ea + (0.5 * deltaH);
              const [tsx, tsy] = viz.toScreen(0, peakY);
              ctx.fillStyle = C.yellow;
              ctx.beginPath(); ctx.arc(tsx, tsy, 5, 0, Math.PI * 2); ctx.fill();
              viz.screenText('Transition State', tsx, tsy - 14, C.yellow, 11, 'center', 'middle');

              const [r0x, r0y] = viz.toScreen(-5, 0);
              const [peakAx, peakAy] = viz.toScreen(-5, peakY);
              ctx.strokeStyle = C.purple; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(r0x, r0y); ctx.lineTo(peakAx, peakAy); ctx.stroke();
              viz.screenText(`Eₐ = ${Ea.toFixed(1)}`, ...viz.toScreen(-4.2, peakY / 2), C.purple, 12);

              const [p0x, p0y] = viz.toScreen(5, 0);
              const [p1x, p1y] = viz.toScreen(5, deltaH);
              ctx.strokeStyle = isExo ? C.orange : C.blue; ctx.lineWidth = 1.5;
              ctx.setLineDash([5, 3]);
              ctx.beginPath(); ctx.moveTo(p0x, p0y); ctx.lineTo(p1x, p1y); ctx.stroke();
              ctx.setLineDash([]);
              const label = `ΔH = ${(deltaH * 10).toFixed(0)} kJ/mol`;
              viz.screenText(label, ...viz.toScreen(6.5, deltaH / 2), isExo ? C.orange : C.blue, 12);

 viz.screenText(isExo ?'EXOTHERMIC' :'ENDOTHERMIC',
                viz.width / 2, 18, isExo ? C.orange : C.blue, 13, 'center', 'middle');
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch07-ex05',
          question: 'Which thermochemical equation correctly represents the enthalpy of combustion of carbon?',
          type: 'mcq',
          options: [
            'C(s) + O₂(g) → CO₂(g)  ΔH = −393.5 kJ/mol',
            'C(g) + O₂(g) → CO₂(g)  ΔH = −393.5 kJ/mol',
            '2C(s) + 2O₂(g) → 2CO₂(g)  ΔH = −393.5 kJ/mol',
            'C(s) + O₂(g) → CO(g)  ΔH = −393.5 kJ/mol'
          ],
          answer: 0,
          explanation: 'The standard enthalpy of combustion refers to burning 1 mol of substance (coefficient = 1 for C), with C in its standard solid state (graphite), and complete combustion to CO₂(g). Option A is correct.'
        },
        {
          id: 'ch07-ex06',
          question: 'If H₂(g) + ½O₂(g) → H₂O(g)  ΔH = −241.8 kJ/mol, what is ΔH for 2H₂O(g) → 2H₂(g) + O₂(g)?',
          type: 'mcq',
          options: [
            '−241.8 kJ/mol',
            '+241.8 kJ/mol',
            '+483.6 kJ/mol',
            '−483.6 kJ/mol'
          ],
          answer: 2,
          explanation: 'Reversing a reaction negates ΔH, giving ΔH = +241.8 kJ/mol. Multiplying by 2 gives ΔH = +483.6 kJ/mol. The decomposition of 2 mol water vapor requires 483.6 kJ input.'
        },
        {
          id: 'ch07-ex06b',
          question: 'Why is the standard enthalpy of neutralisation for CH₃COOH + NaOH less negative than −57.3 kJ/mol?',
          type: 'mcq',
          options: [
            'Acetic acid reacts with NaOH more vigorously',
            'Weak acid ionization requires extra energy, so less net heat is released',
            'The molar mass of acetic acid is larger',
            'The reaction produces a different salt'
          ],
          answer: 1,
          explanation: 'Acetic acid (CH₃COOH) is a weak acid that is only partially dissociated. Extra energy is needed to ionise the remaining un-ionised molecules, so less net heat is released. The value is typically around −55.8 kJ/mol.'
        }
      ]
    },

    // ─── SECTION 4 ──────────────────────────────────────────────────────────
    {
      id: 'ch07-sec04',
 title:'',
      content: `
<h2>Hess's Law</h2>

<p>Hess's Law states: <strong>The enthalpy change of a reaction is independent of the pathway taken</strong> — it depends only on the initial and final states.</p>

<p>This is a direct consequence of enthalpy being a <em>state function</em> : its value depends only on the current state of the system, not on how it got there.</p>

<div class="chem-highlight">
<strong>Practical application:</strong> If you cannot measure a ΔH directly, combine known reactions to construct the desired reaction and add their ΔH values.
<br><br>
<strong>Strategy:</strong> Think of enthalpy as a height on a mountain — no matter which path you climb, the total height gain depends only on start and finish.
</div>

<h3>Rules for Combining Reactions</h3>
<ol>
  <li>If you <strong>reverse</strong> a reaction, <strong>negate</strong> its ΔH</li>
  <li>If you <strong>multiply</strong> a reaction by a factor n, <strong>multiply</strong> ΔH by n</li>
  <li>If you <strong>add</strong> two reactions, <strong>add</strong> their ΔH values</li>
  <li>Add the equations as if they were algebraic expressions — substances appearing on both sides cancel</li>
</ol>

<h3>Classic Example: Formation of CO</h3>
<p>We cannot easily measure: \\(\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)\\) directly.</p>
<p>But we know:</p>
<div class="chem-formula">
\\[\\text{(1)} \\quad \\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g) \\quad \\Delta H_1 = -393.5 \\text{ kJ/mol}\\]
\\[\\text{(2)} \\quad \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) \\quad \\Delta H_2 = -283.0 \\text{ kJ/mol}\\]
</div>

<p>Desired reaction = Reaction (1) − Reaction (2):</p>
<div class="chem-formula">
\\[\\Delta H = \\Delta H_1 - \\Delta H_2 = -393.5 - (-283.0) = -110.5 \\text{ kJ/mol}\\]
\\[\\therefore \\quad \\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g) \\quad \\Delta H = -110.5 \\text{ kJ/mol}\\]
</div>

<h3>Born–Haber Cycles</h3>
<p>An important application of Hess's Law in ionic chemistry is the Born–Haber cycle, which links lattice energy, ionization energy, electron affinity, and enthalpy of formation into a closed thermodynamic cycle.</p>
      `,
      visualizations: [
        {
          id: 'ch07-viz04',
          title: "Hess's Law Path Diagram",
          setup(container) {
            const V = new VizEngine(container, {
              width: 640, height: 360,
              originX: 30, originY: 330,
              scale: 1
            });

            const ctx = V.ctx;
            const W = V.width, H = V.height;

            function drawArrow(x1, y1, x2, y2, color, label, dashed) {
              ctx.strokeStyle = color;
              ctx.lineWidth = 2.5;
              if (dashed) ctx.setLineDash([8, 5]);
              else ctx.setLineDash([]);
              ctx.beginPath();
              ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
              ctx.stroke();
              ctx.setLineDash([]);
              const dx = x2 - x1, dy = y2 - y1;
              const len = Math.sqrt(dx * dx + dy * dy);
              const ux = dx / len, uy = dy / len;
              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.moveTo(x2, y2);
              ctx.lineTo(x2 - 12 * ux + 6 * uy, y2 - 12 * uy - 6 * ux);
              ctx.lineTo(x2 - 12 * ux - 6 * uy, y2 - 12 * uy + 6 * ux);
              ctx.closePath(); ctx.fill();
              if (label) {
                ctx.fillStyle = color;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, (x1 + x2) / 2 + 30, (y1 + y2) / 2);
              }
            }

            function drawBox(cx, cy, text, subtext, color) {
              ctx.fillStyle = color + '22';
              ctx.strokeStyle = color;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.roundRect(cx - 90, cy - 28, 180, 56, 8);
              ctx.fill(); ctx.stroke();
              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(text, cx, cy - 8);
              if (subtext) {
                ctx.fillStyle = color;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.fillText(subtext, cx, cy + 10);
              }
            }

            V.clear();

            ctx.fillStyle = V.colors.white;
            ctx.font = 'bold 15px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText("Hess's Law: C → CO  (two paths, same ΔH)", W / 2, 24);

            const nodes = {
              start: { x: 150, y: 100, label: 'C(s) + O₂(g)', sub: 'Starting materials', color: V.colors.orange },
              co2:   { x: 490, y: 100, label: 'CO₂(g)',        sub: 'Full combustion product', color: V.colors.red },
              co:    { x: 320, y: 265, label: 'CO(g) + ½O₂(g)', sub: 'Partial combustion product', color: V.colors.teal }
            };

            Object.values(nodes).forEach(n => drawBox(n.x, n.y, n.label, n.sub, n.color));

            drawArrow(nodes.start.x + 90, nodes.start.y + 5,
                      nodes.co.x - 90, nodes.co.y - 15,
                      V.colors.yellow, 'ΔH = ?', true);

            drawArrow(nodes.start.x + 90, nodes.start.y,
                      nodes.co2.x - 90, nodes.co2.y,
                      V.colors.orange, 'ΔH₁ = −393.5', false);
            ctx.fillStyle = V.colors.orange;
            ctx.font = '11px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('kJ/mol', 320, 85);

            drawArrow(nodes.co2.x - 30, nodes.co2.y + 28,
                      nodes.co.x + 80, nodes.co.y - 15,
                      V.colors.blue, 'ΔH₂ = −283.0', false);
            ctx.fillStyle = V.colors.blue;
            ctx.font = '11px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('kJ/mol (reverse: +283.0)', 460, 200);

            ctx.fillStyle = '#1a1a40';
            ctx.strokeStyle = V.colors.green;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(W / 2 - 160, H - 65, 320, 42, 8);
            ctx.fill(); ctx.stroke();
            ctx.fillStyle = V.colors.green;
            ctx.font = 'bold 14px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('ΔH = ΔH₁ − ΔH₂ = −393.5 − (−283.0) = −110.5 kJ/mol', W / 2, H - 44);
          }
        }
      ],
      exercises: [
        {
          id: 'ch07-ex07',
          question: 'Given: (1) C(s) + O₂(g) → CO₂(g)  ΔH₁ = −393.5 kJ/mol and (2) H₂(g) + ½O₂(g) → H₂O(l)  ΔH₂ = −285.8 kJ/mol and (3) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)  ΔH₃ = −890.3 kJ/mol. Calculate ΔH for C(s) + 2H₂(g) → CH₄(g).',
          type: 'mcq',
          options: [
            'ΔH = −74.8 kJ/mol',
            'ΔH = +74.8 kJ/mol',
            'ΔH = −1569.6 kJ/mol',
            'ΔH = −211.0 kJ/mol'
          ],
          answer: 0,
          explanation: 'Target = (1) + 2×(2) − (3): ΔH = (−393.5) + 2(−285.8) − (−890.3) = −393.5 − 571.6 + 890.3 = −74.8 kJ/mol. This is the standard enthalpy of formation of methane.'
        },
        {
          id: 'ch07-ex08',
          question: "Hess's Law works because enthalpy is a:",
          type: 'mcq',
          options: [
            'Path function — depends on how the reaction happens',
            'Rate function — depends on reaction speed',
            'State function — depends only on initial and final states',
            'Activation function — depends on activation energy'
          ],
          answer: 2,
          explanation: "Enthalpy H is a state function: its change ΔH depends only on the difference between initial (reactant) and final (product) states, not on the pathway. This is the thermodynamic basis of Hess's Law."
        },
        {
          id: 'ch07-ex09',
          question: 'Given: (1) 2H₂(g) + O₂(g) → 2H₂O(l)  ΔH₁ = −571.6 kJ/mol; (2) 2H₂(g) + O₂(g) → 2H₂O(g)  ΔH₂ = −483.6 kJ/mol. Find ΔH for H₂O(l) → H₂O(g).',
          type: 'mcq',
          options: [
            '−44.0 kJ/mol',
            '+44.0 kJ/mol',
            '+88.0 kJ/mol',
            '−88.0 kJ/mol'
          ],
          answer: 1,
          explanation: 'Reverse eq(1)/2 and use eq(2)/2: ΔH = ΔH₂/2 − ΔH₁/2 = −241.8 − (−285.8) = +44.0 kJ/mol. This is the standard enthalpy of vaporisation of water.'
        }
      ]
    },

    // ─── SECTION 5 ──────────────────────────────────────────────────────────
    {
      id: 'ch07-sec05',
 title:'',
      content: `
<h2>Energy Sources and Society</h2>

<p>Human civilization runs on energy. Chemistry provides the tools to understand, compare, and improve the energy sources we use.</p>

<h3>Calorific Values of Common Fuels</h3>
<p>The <strong>calorific value</strong> (heating value) is the heat released per gram (or per mole) when a fuel is completely combusted.</p>
<table class="chem-table">
  <thead><tr><th>Fuel</th><th>Formula</th><th>ΔcH° / kJ mol⁻¹</th><th>kJ g⁻¹</th><th>CO₂ emissions</th></tr></thead>
  <tbody>
    <tr><td>Coal</td><td>C</td><td>−394</td><td>−32.8</td><td>High</td></tr>
    <tr><td>Gasoline (octane)</td><td>C₈H₁₈</td><td>−5471</td><td>−47.9</td><td>High</td></tr>
    <tr><td>Natural Gas (CH₄)</td><td>CH₄</td><td>−890</td><td>−55.5</td><td>Medium</td></tr>
    <tr><td>Ethanol</td><td>C₂H₅OH</td><td>−1367</td><td>−29.7</td><td>Medium</td></tr>
    <tr><td>Hydrogen (H₂)</td><td>H₂</td><td>−286</td><td>−142</td><td>Zero (if green)</td></tr>
    <tr><td>Li-ion Battery</td><td>—</td><td>—</td><td>0.5–0.7</td><td>Zero (in use)</td></tr>
  </tbody>
</table>

<h3>Hydrogen as a Clean Energy Carrier </h3>
<p>Hydrogen has the highest mass energy density of any fuel and produces only water:</p>
<div class="chem-formula">
\\[\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}(l) \\quad \\Delta H = -285.8 \\text{ kJ/mol}\\]
</div>
<p>Challenges: hydrogen production (green H₂ from electrolysis vs grey H₂ from methane reforming), storage (high pressure tanks, metal hydrides), and infrastructure.</p>

<h3>Thermodynamic Efficiency</h3>
<p>Real energy conversion is never 100% efficient. The <strong>Carnot efficiency</strong> sets the theoretical maximum for heat engines:</p>
<div class="chem-formula">
\\[\\eta_{\\text{max}} = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}\\]
</div>
<p>A car engine operating between 400°C and 20°C: \\(\\eta = 1 - \\frac{293}{673} \\approx 56\\%\\). In practice, real efficiencies are much lower (~25–35%) due to friction and heat losses.</p>

<h3>China's Energy Transition</h3>
<p>China aims to reach carbon neutrality by 2060. This requires:</p>
<ul>
  <li>Expanding solar, wind, and nuclear power</li>
  <li>Developing large-scale battery storage and hydrogen fuel cells</li>
  <li>Carbon capture and storage (CCS) technologies</li>
  <li>Energy-efficient industrial chemistry (catalysis, process intensification)</li>
  <li><strong>Synthetic fuels (e-fuels):</strong> CO₂ + H₂ → hydrocarbons via Fischer-Tropsch chemistry</li>
</ul>
      `,
      visualizations: [
        {
          id: 'ch07-viz05',
          title: 'Calorimeter Simulation — Measure ΔH Experimentally',
          setup(container) {
            const info = document.createElement('p');
            info.style.cssText = 'color:#8b949e;font-size:0.85rem;text-align:center;margin-bottom:6px;';
            info.textContent = 'Virtual calorimetry: choose a reaction, mix, and measure temperature change';
            container.appendChild(info);

            const viz = new VizEngine(container, { width: 660, height: 300, scale: 1, originX: 0, originY: 0 });

            const reactions = [
              { name: 'HCl + NaOH (Neutralization)', deltaH: -57.3, color: '#f85149', dT: 5.8 },
              { name: 'NH₄NO₃ dissolving (Endothermic)', deltaH: +25.7, color: '#58a6ff', dT: -2.6 },
              { name: 'Zn + H₂SO₄ (Metal + Acid)', deltaH: -152, color: '#f0883e', dT: 9.1 }
            ];

            let selected = 0;
            let mixing = false;
            let mixT = 0;
            let animId = null;

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:6px;';
            container.appendChild(btnRow);

            reactions.forEach((r, i) => {
              const btn = document.createElement('button');
              btn.textContent = r.name;
              btn.style.cssText = `padding:4px 10px;border:1px solid ${r.color};border-radius:4px;background:#1a1a40;color:${r.color};font-size:0.75rem;cursor:pointer;`;
              btn.onclick = () => {
                selected = i; mixing = false; mixT = 0;
                if (animId) { cancelAnimationFrame(animId); animId = null; }
                draw();
              };
              btnRow.appendChild(btn);
            });

            VizEngine.createButton(container, 'Mix & Measure!', () => {
              if (mixing) return;
              mixing = true; mixT = 0;
              const tick = () => {
                mixT = Math.min(1, mixT + 0.01);
                draw();
                if (mixT < 1) animId = requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;
              const rxn = reactions[selected];

              const cupX = 80, cupY = 60, cupW = 160, cupH = 180;
              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 3;
              ctx.strokeRect(cupX, cupY, cupW, cupH);
              const waterH = mixing ? Math.min(cupH - 20, 120 + mixT * 30) : 100;
              const waterColor = mixing ? (rxn.dT > 0 ? '#f8514966' : '#58a6ff66') : '#3fb9a044';
              ctx.fillStyle = waterColor;
              ctx.fillRect(cupX + 3, cupY + cupH - waterH, cupW - 6, waterH - 3);

              viz.screenText('Calorimeter', cupX + cupW / 2, cupY - 14, '#8b949e', 12);
              viz.screenText('Solution', cupX + cupW / 2, cupY + cupH - waterH / 2, '#c9d1d9aa', 12);

              const thX = cupX + cupW + 30;
              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 2;
              ctx.strokeRect(thX, cupY + 20, 24, cupH - 30);
              const baseT = 25.0;
              const currentT = mixing ? baseT + rxn.dT * mixT : baseT;
              const fillH2 = Math.abs((currentT - baseT) / 15) * (cupH - 50);
              ctx.fillStyle = rxn.dT >= 0 ? '#f85149' : '#58a6ff';
              if (mixing) ctx.fillRect(thX + 2, cupY + cupH - 40 - fillH2, 20, fillH2);
              ctx.fillStyle = '#f85149';
              ctx.beginPath(); ctx.arc(thX + 12, cupY + cupH - 14, 12, 0, Math.PI * 2); ctx.fill();
              viz.screenText(`T = ${currentT.toFixed(1)}°C`, thX + 40, cupY + cupH / 2, '#f0f6fc', 13, 'left', 'middle');
              viz.screenText('Thermometer', thX + 12, cupY + 6, '#8b949e', 11, 'center', 'bottom');

              const gx = 340, gy = 50, gw = W - gx - 30, gh = H - 80;
              ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1;
              ctx.strokeRect(gx, gy, gw, gh);
              ctx.fillStyle = '#0c0c20';
              ctx.fillRect(gx, gy, gw, gh);

              viz.screenText('Temperature vs Time', gx + gw / 2, gy - 14, '#8b949e', 12);
              viz.screenText('Time →', gx + gw / 2, gy + gh + 10, '#8b949e', 11);

              ctx.strokeStyle = rxn.color; ctx.lineWidth = 2;
              ctx.beginPath();
              const pts = Math.floor(mixT * 80);
              for (let i = 0; i <= pts; i++) {
                const px = gx + (i / 80) * gw;
                const frac = i / 80;
                let dT;
                if (frac < 0.3) { dT = 0; }
                else if (frac < 0.5) { dT = rxn.dT * ((frac - 0.3) / 0.2); }
                else { dT = rxn.dT * (1 - (frac - 0.5) * 0.3); }
                const py = gy + gh / 2 - dT / 15 * gh * 0.45;
                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
              }
              ctx.stroke();

              ctx.strokeStyle = '#4a4a7a66'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
              ctx.beginPath(); ctx.moveTo(gx, gy + gh / 2); ctx.lineTo(gx + gw, gy + gh / 2); ctx.stroke();
              ctx.setLineDash([]);
              viz.screenText('25.0°C', gx - 4, gy + gh / 2, '#4a4a7a', 10, 'right', 'middle');

              if (mixing && mixT > 0.6) {
                const sign = rxn.deltaH < 0 ? '' : '+';
                viz.screenText(`ΔH = ${sign}${rxn.deltaH} kJ/mol`, gx + gw / 2, gy + gh - 16, rxn.color, 12);
 viz.screenText(rxn.dT> 0 ?'EXOTHERMIC' :'ENDOTHERMIC',
                  gx + gw / 2, gy + 16, rxn.color, 12);
              }
            }

            draw();
          }
        },
        {
          id: 'ch07-viz06',
          title: 'Energy Content of Common Fuels (kJ per gram)',
          setup(container) {
            const V = new VizEngine(container, {
              width: 640, height: 380,
              originX: 90, originY: 350,
              scale: 2
            });

            const ctx = V.ctx;
            const W = V.width, H = V.height;

            const fuels = [
              { name: 'H₂', kJg: 142, color: V.colors.teal },
              { name: 'CH₄', kJg: 55.5, color: V.colors.blue },
              { name: 'C₈H₁₈', kJg: 47.9, color: V.colors.orange },
              { name: 'Ethanol', kJg: 29.7, color: V.colors.purple },
              { name: 'Coal', kJg: 32.8, color: V.colors.text },
              { name: 'Glucose', kJg: 15.6, color: V.colors.green }
            ];

            const maxVal = 150;
            const barWidth = 60;
            const gap = 20;
            const startX = 110;

            V.clear();

            ctx.fillStyle = V.colors.white;
            ctx.font = 'bold 14px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Energy Content of Common Fuels (kJ per gram)', W / 2, 22);

            ctx.save();
            ctx.translate(18, H / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillStyle = V.colors.text;
            ctx.font = '12px -apple-system,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Energy / kJ g⁻¹', 0, 0);
            ctx.restore();

            ctx.strokeStyle = V.colors.axis;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(85, 40); ctx.lineTo(85, H - 50);
            ctx.moveTo(85, H - 50); ctx.lineTo(W - 20, H - 50);
            ctx.stroke();

            [0, 50, 100, 150].forEach(v => {
              const sy = (H - 50) - (v / maxVal) * (H - 100);
              ctx.strokeStyle = V.colors.grid;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(85, sy); ctx.lineTo(W - 20, sy);
              ctx.stroke();
              ctx.fillStyle = V.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText(v, 80, sy + 4);
            });

            fuels.forEach((f, i) => {
              const x = startX + i * (barWidth + gap);
              const barH = (f.kJg / maxVal) * (H - 100);
              const y = H - 50 - barH;

              const grad = ctx.createLinearGradient(x, y, x, H - 50);
              grad.addColorStop(0, f.color);
              grad.addColorStop(1, f.color + '55');

              ctx.fillStyle = grad;
              ctx.strokeStyle = f.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
              ctx.fill(); ctx.stroke();

              ctx.fillStyle = V.colors.white;
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(f.kJg.toFixed(1), x + barWidth / 2, y - 6);

              ctx.fillStyle = f.color;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText(f.name, x + barWidth / 2, H - 34);
            });

            ctx.fillStyle = V.colors.teal;
            ctx.font = 'italic 11px -apple-system,sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('★ Highest energy per gram!', startX + 5, 55);
          }
        }
      ],
      exercises: [
        {
          id: 'ch07-ex10',
          question: 'Why is hydrogen considered a "clean" energy source?',
          type: 'mcq',
          options: [
            'It has the lowest energy density of all fuels',
            'Its combustion produces only water as a byproduct',
            'It is currently the cheapest fuel available',
            'It does not require any combustion reaction'
          ],
          answer: 1,
          explanation: 'The combustion of hydrogen: H₂ + ½O₂ → H₂O produces only water vapor, with no CO₂ or other pollutants. This makes it a clean fuel — provided the hydrogen itself was produced from renewable sources (green hydrogen).'
        },
        {
          id: 'ch07-ex11',
          question: 'A camping stove burns 100 g of butane (C₄H₁₀, ΔcH° = −2877 kJ/mol, M = 58 g/mol). Calculate the energy released.',
          type: 'mcq',
          options: [
            'Approximately 2877 kJ',
            'Approximately 4960 kJ',
            'Approximately 287.7 kJ',
            'Approximately 167,000 kJ'
          ],
          answer: 1,
          explanation: 'Moles of butane = 100/58 = 1.724 mol. Energy = 1.724 × 2877 = 4960 kJ ≈ 4.96 MJ.'
        },
        {
          id: 'ch07-ex12',
          question: 'A coal-fired power station converts 35% of the combustion energy into electricity. How many kJ of coal energy are needed to produce 1 kWh (3600 kJ) of electrical energy?',
          type: 'mcq',
          options: [
            'About 1260 kJ',
            'About 3600 kJ',
            'About 10 300 kJ',
            'About 5143 kJ'
          ],
          answer: 2,
          explanation: '1 kWh = 3600 kJ of electrical energy. At 35% efficiency: coal energy needed = 3600 / 0.35 = 10 286 kJ ≈ 10.3 MJ.'
        },
        {
          id: 'ch07-ex13',
          question: 'China aims to achieve carbon neutrality by which year?',
          type: 'mcq',
          options: [
            '2030',
            '2050',
            '2060',
            '2035'
          ],
          answer: 2,
          explanation: "China's official climate target is to achieve carbon neutrality (net-zero CO₂ emissions) by 2060, and to peak carbon emissions before 2030. This drives major investments in clean energy chemistry."
        }
      ]
    }

  ]
});
