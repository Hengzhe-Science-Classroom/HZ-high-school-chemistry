window.CHAPTERS.push({
  id: 'ch16',
  number: 16,
  title: 'Biological Macromolecules',
  subtitle: 'The Chemistry of Life',
  sections: [

    // ─── Section 1: Carbohydrates ───────────────────────────────────────────
    {
      id: 'ch16-sec01',
      title: 'Carbohydrates',
      content: `
<h2>Carbohydrates</h2>
<p>Carbohydrates are the primary source of energy for life. Their general formula is \\((CH_2O)_n\\), composed of carbon, hydrogen, and oxygen.</p>

<div class="info-box">
<strong>Classification Overview</strong>
<ul>
  <li><strong>Monosaccharides</strong>: The simplest sugars that cannot be hydrolyzed further. Representatives: glucose \\(C_6H_{12}O_6\\), fructose \\(C_6H_{12}O_6\\) (structural isomers), ribose \\(C_5H_{10}O_5\\).</li>
  <li><strong>Disaccharides</strong>: Formed by condensation of two monosaccharides. Sucrose (glucose + fructose), maltose (glucose + glucose), molecular formula \\(C_{12}H_{22}O_{11}\\).</li>
  <li><strong>Polysaccharides</strong>: Polymers of many glucose units, \\((C_6H_{10}O_5)_n\\). Starch (plant energy storage), cellulose (plant cell walls), glycogen (animal energy storage).</li>
</ul>
</div>

<h3>Structure of Glucose</h3>
<p>Glucose exists in both chain (open-chain) and ring (cyclic) forms (Haworth projection). In aqueous solution, the six-membered ring (pyranose) form predominates:</p>
<p>Chain form: \\(CH_2OH{-}(CHOH)_4{-}CHO\\) (contains aldehyde group, an aldose)</p>
<p>Ring form: The aldehyde at C1 reacts with the hydroxyl at C5 to form a six-membered oxygen-containing ring.</p>

<div class="env-block experiment">
<strong>Identification Tests for Glucose</strong>
<ul>
  <li>Silver mirror reaction: Reacts with Tollens' reagent (silver ammonia solution) in a water bath to form a bright silver mirror on the test tube wall.</li>
  <li>Reaction with freshly prepared \\(Cu(OH)_2\\): Produces a brick-red \\(Cu_2O\\) precipitate upon heating.</li>
  <li>Both reactions demonstrate the reducing property of the <strong>aldehyde group (–CHO)</strong> in glucose.</li>
</ul>
</div>

<h3>Sucrose and Maltose</h3>
<table class="data-table">
  <tr><th></th><th>Sucrose</th><th>Maltose</th></tr>
  <tr><td>Molecular formula</td><td>\\(C_{12}H_{22}O_{11}\\)</td><td>\\(C_{12}H_{22}O_{11}\\)</td></tr>
  <tr><td>Hydrolysis products</td><td>Glucose + Fructose</td><td>Glucose + Glucose</td></tr>
  <tr><td>Silver mirror test</td><td>No reaction (non-reducing sugar)</td><td>Positive (contains free aldehyde group)</td></tr>
</table>

<h3>Starch and Cellulose</h3>
<p>Starch and cellulose share the formula \\((C_6H_{10}O_5)_n\\), but differ in \\(n\\) and linkage type (\\(\\alpha\\)-glycosidic bonds vs \\(\\beta\\)-glycosidic bonds), leading to significantly different properties:</p>
<ul>
  <li>Starch turns blue with iodine (used for identification); cellulose does not change color.</li>
  <li>Starch can be hydrolyzed to glucose by human enzymes; cellulose cannot be digested by humans.</li>
  <li>Cellulose is used to make paper, cotton, and rayon (viscose fiber).</li>
</ul>

<div class="env-block formula">
Overall hydrolysis reaction (acid-catalyzed):
\\[(C_6H_{10}O_5)_n + nH_2O \\xrightarrow{H^+, \\Delta} nC_6H_{12}O_6\\]
</div>
      `,
      visualizations: [
        {
          id: 'viz-glucose-ring',
          title: 'Glucose: Open-Chain ↔ Ring Form',
          setup: function(container) {
            const v = new VizEngine(container, {width: 700, height: 380, scale: 50, originX: 350, originY: 190});
            let t = 0;
            let animId = null;
            let mode = 0; // 0=chain, 1=transitioning, 2=ring

            function drawChain(alpha) {
              v.clear();
              v.screenText('Glucose Chain Structure', v.width / 2, 22, v.colors.teal, 16);
              // vertical carbon chain
              const cx = v.width * 0.5 * (1 - alpha) + v.width * 0.35 * alpha;
              const ys = [60, 105, 150, 195, 240, 285];
              const labels = ['CHO', 'CHOH', 'CHOH', 'CHOH', 'CHOH', 'CH₂OH'];
              const colors = [v.colors.orange, v.colors.blue, v.colors.blue, v.colors.blue, v.colors.blue, v.colors.green];
              for (let i = 0; i < 6; i++) {
                v.ctx.fillStyle = colors[i];
                v.ctx.font = 'bold 13px -apple-system,sans-serif';
                v.ctx.textAlign = 'center'; v.ctx.textBaseline = 'middle';
                v.ctx.fillText(labels[i], cx, ys[i]);
                if (i < 5) {
                  v.ctx.strokeStyle = v.colors.white; v.ctx.lineWidth = 1.5;
                  v.ctx.beginPath(); v.ctx.moveTo(cx, ys[i] + 10); v.ctx.lineTo(cx, ys[i + 1] - 10); v.ctx.stroke();
                }
              }
              // C numbering
              for (let i = 0; i < 6; i++) {
                v.screenText('C' + (i + 1), cx - 50, ys[i], v.colors.text, 11);
              }
              v.screenText('Aldehyde –CHO', cx + 80, ys[0], v.colors.orange, 11);
              v.screenText('C5–OH attacks C1', cx + 90, ys[4], v.colors.yellow, 10);
            }

            function drawRing() {
              v.clear();
              v.screenText('Glucose Ring Structure (Haworth Projection)', v.width / 2, 22, v.colors.teal, 16);
              const cx = v.width / 2, cy = v.height / 2 + 20;
              const R = 90;
              // Draw oxygen in ring
              const oAngle = -Math.PI / 2;
              const angles = [oAngle + Math.PI / 3, oAngle + 2 * Math.PI / 3, oAngle + Math.PI, oAngle + 4 * Math.PI / 3, oAngle + 5 * Math.PI / 3, oAngle];
              const atomLabels = ['C1', 'C2', 'C3', 'C4', 'C5', 'O'];
              const atomColors = [v.colors.orange, v.colors.blue, v.colors.blue, v.colors.blue, v.colors.blue, v.colors.red];
              const pts = angles.map(a => [cx + R * Math.cos(a), cy + R * Math.sin(a)]);
              // Draw ring bonds
              v.ctx.strokeStyle = v.colors.white; v.ctx.lineWidth = 2.5;
              for (let i = 0; i < 6; i++) {
                v.ctx.beginPath();
                v.ctx.moveTo(pts[i][0], pts[i][1]);
                v.ctx.lineTo(pts[(i + 1) % 6][0], pts[(i + 1) % 6][1]);
                v.ctx.stroke();
              }
              // Draw atoms
              for (let i = 0; i < 6; i++) {
                v.ctx.fillStyle = atomColors[i];
                v.ctx.beginPath(); v.ctx.arc(pts[i][0], pts[i][1], 18, 0, Math.PI * 2); v.ctx.fill();
                v.ctx.fillStyle = v.colors.white;
                v.ctx.font = 'bold 11px -apple-system,sans-serif';
                v.ctx.textAlign = 'center'; v.ctx.textBaseline = 'middle';
                v.ctx.fillText(atomLabels[i], pts[i][0], pts[i][1]);
              }
              // Substituents
              const subs = [['–OH', v.colors.green], ['–OH', v.colors.green], ['–OH', v.colors.green], ['–OH', v.colors.green], ['–CH₂OH', v.colors.teal]];
              for (let i = 0; i < 5; i++) {
                const a = angles[i];
                const ox = pts[i][0] + 34 * Math.cos(a), oy = pts[i][1] + 34 * Math.sin(a);
                v.ctx.fillStyle = subs[i][1];
                v.ctx.font = '10px -apple-system,sans-serif';
                v.ctx.textAlign = 'center'; v.ctx.textBaseline = 'middle';
                v.ctx.fillText(subs[i][0], ox, oy);
              }
              v.screenText('\u03b1-D-Glucose (six-membered pyranose ring)', v.width / 2, v.height - 20, v.colors.text, 12);
              v.screenText('C1\u2013OH below ring plane (\u03b1 form)', v.width / 2, v.height - 40, v.colors.orange, 11);
            }

            function render() {
              if (mode === 0) drawChain(0);
              else if (mode === 2) drawRing();
              else {
                t += 0.03;
                if (t >= 1) { t = 0; mode = mode === 0 ? 2 : 0; }
                drawChain(mode === 1 ? t : 1 - t);
              }
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = 'Toggle Chain \u2194 Ring';
            btn.onclick = () => { mode = 1; t = 0; };
            container.appendChild(btn);

            return () => cancelAnimationFrame(animId);
          }
        },
        {
          id: 'viz-sugar-tree',
          title: 'Sugar Classification Tree',
          setup: function(container) {
            const viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const C = viz.colors;

            function drawNode(x, y, w, h, label, sublabel, color) {
              ctx.fillStyle = color + '44';
              ctx.strokeStyle = color;
              ctx.lineWidth = 2;
              ctx.beginPath();
              const r = 8;
              ctx.roundRect(x - w/2, y - h/2, w, h, r);
              ctx.fill(); ctx.stroke();
              ctx.fillStyle = C.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(label, x, y - (sublabel ? 8 : 0));
              if (sublabel) {
                ctx.fillStyle = color;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.fillText(sublabel, x, y + 10);
              }
            }

            function drawArrow(x1, y1, x2, y2, color) {
              ctx.strokeStyle = color; ctx.lineWidth = 1.5;
              ctx.setLineDash([4, 3]);
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
              ctx.setLineDash([]);
              const ang = Math.atan2(y2 - y1, x2 - x1);
              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.moveTo(x2, y2);
              ctx.lineTo(x2 - 8*Math.cos(ang-0.4), y2 - 8*Math.sin(ang-0.4));
              ctx.lineTo(x2 - 8*Math.cos(ang+0.4), y2 - 8*Math.sin(ang+0.4));
              ctx.closePath(); ctx.fill();
            }

            viz.clear();

            // Root
            drawNode(W/2, 48, 160, 40, 'Carbohydrates', '(CH₂O)ₙ', C.teal);

            // Level 1
            drawNode(W*0.2, 140, 140, 40, 'Monosaccharides', '1 unit', C.blue);
            drawNode(W*0.5, 140, 140, 40, 'Disaccharides', '2 units', C.orange);
            drawNode(W*0.8, 140, 140, 40, 'Polysaccharides', 'many units', C.purple);

            // Arrows root to level1
            drawArrow(W/2, 68, W*0.2, 120, C.teal);
            drawArrow(W/2, 68, W*0.5, 120, C.teal);
            drawArrow(W/2, 68, W*0.8, 120, C.teal);

            // Level 2 - Monosaccharides
            drawNode(W*0.08, 240, 120, 38, 'Glucose', 'C₆H₁₂O₆', C.blue);
            drawNode(W*0.22, 240, 120, 38, 'Fructose', 'C₆H₁₂O₆', C.blue);
            drawArrow(W*0.2, 160, W*0.08, 221, C.blue);
            drawArrow(W*0.2, 160, W*0.22, 221, C.blue);

            // Level 2 - Disaccharides
            drawNode(W*0.42, 240, 110, 38, 'Sucrose', 'Glc + Fru', C.orange);
            drawNode(W*0.58, 240, 110, 38, 'Maltose', 'Glc + Glc', C.orange);
            drawArrow(W*0.5, 160, W*0.42, 221, C.orange);
            drawArrow(W*0.5, 160, W*0.58, 221, C.orange);

            // Level 2 - Polysaccharides
            drawNode(W*0.72, 240, 110, 38, 'Starch', 'α-glucose', C.purple);
            drawNode(W*0.88, 240, 110, 38, 'Cellulose', 'β-glucose', C.purple);
            drawArrow(W*0.8, 160, W*0.72, 221, C.purple);
            drawArrow(W*0.8, 160, W*0.88, 221, C.purple);

            // Properties row
            drawNode(W*0.72, 330, 110, 36, 'Digestible', 'Energy storage', C.green);
            drawNode(W*0.88, 330, 110, 36, 'Not digestible', 'Cell walls, fiber', C.red);
            drawArrow(W*0.72, 259, W*0.72, 312, C.purple);
            drawArrow(W*0.88, 259, W*0.88, 312, C.purple);

            // Title
            ctx.fillStyle = C.text; ctx.font = '12px -apple-system,sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            ctx.fillText('Carbohydrate Classification Tree', W/2, H - 20);
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec01-ex01',
          question: 'Glucose and fructose both have the molecular formula \\(C_6H_{12}O_6\\). What is their relationship?',
          type: 'mcq',
          options: ['Allotropes', 'Isotopes', 'Structural isomers', 'Same substance'],
          answer: 2,
          explanation: 'Compounds with the same molecular formula but different structures are structural isomers. Glucose contains an aldehyde group while fructose contains a ketone group.'
        },
        {
          id: 'ch16-sec01-ex02',
          question: 'Which statement about starch and cellulose is correct?',
          type: 'mcq',
          options: ['They are structural isomers', 'Both turn blue with iodine', 'Starch can be digested by humans but cellulose cannot', 'Their hydrolysis products are different'],
          answer: 2,
          explanation: 'Although both have formula (C\u2086H\u2081\u2080O\u2085)\u2099, their n values differ so they are not isomers. Only starch turns blue with iodine. Both ultimately hydrolyze to glucose, but humans lack enzymes to break \u03b2-glycosidic bonds.'
        },
        {
          id: 'ch16-sec01-ex03',
          question: 'Adding glucose to silver ammonia solution and heating in a water bath produces a silver mirror. This shows glucose contains the ________ functional group.',
          type: 'short',
          answer: 'Aldehyde group (\u2013CHO)',
          explanation: 'The silver mirror reaction is characteristic of the aldehyde group. The C1 position in the chain form of glucose contains an aldehyde group that reduces Ag\u207a to Ag.'
        }
      ]
    },

    // ─── Section 2: Fats and Oils ────────────────────────────────────────────
    {
      id: 'ch16-sec02',
      title: 'Fats and Oils',
      content: `
<h2>Fats and Oils</h2>
<p>Fats and oils are esters formed from higher fatty acids and glycerol, chemically known as <strong>triacylglycerols (triglycerides)</strong>. They are ester compounds, not macromolecules.</p>

<div class="env-block formula">
General structural formula (R represents a fatty acid hydrocarbon chain):
\\[\\underbrace{C_3H_5(OH)_3}_{\\text{glycerol}} + 3\\underbrace{RCOOH}_{\\text{fatty acid}} \\rightleftharpoons \\underbrace{C_3H_5(OOCR)_3}_{\\text{triglyceride}} + 3H_2O\\]
</div>

<h3>Saturated and Unsaturated Fatty Acids</h3>
<table class="data-table">
  <tr><th></th><th>Saturated Fatty Acids</th><th>Unsaturated Fatty Acids</th></tr>
  <tr><td>Carbon chain</td><td>All single bonds (\u2013C\u2013C\u2013)</td><td>Contains C=C double bonds (\u2013C=C\u2013)</td></tr>
  <tr><td>Examples</td><td>Stearic acid \\(C_{17}H_{35}COOH\\), palmitic acid</td><td>Oleic acid \\(C_{17}H_{33}COOH\\), linoleic acid</td></tr>
  <tr><td>State (room temp)</td><td>Solid (fat)</td><td>Liquid (oil)</td></tr>
  <tr><td>Source</td><td>Animal fats</td><td>Plant oils</td></tr>
</table>

<h3>Chemical Properties of Fats and Oils</h3>
<ol>
  <li><strong>Hydrogenation (hardening)</strong>: C=C double bonds in unsaturated oils react with H&#x2082;, becoming solid fats. Margarine is made this way.
    \\[\\text{liquid oil} + H_2 \\xrightarrow{Ni, \\Delta} \\text{solid fat}\\]
  </li>
  <li><strong>Saponification</strong>: Fats hydrolyze in aqueous NaOH or KOH to produce sodium (potassium) salts of fatty acids (soap) and glycerol.
    <div class="env-block formula">
    \\[C_3H_5(OOCR)_3 + 3NaOH \\xrightarrow{\\Delta} 3RCOONa + C_3H_5(OH)_3\\]
    Soap structure: hydrophilic head (\u2013COO\u207bNa\u207a) + hydrophobic tail (long carbon chain), forming micelles for cleaning.
    </div>
  </li>
</ol>

<div class="env-block note">
<strong>Soap vs Synthetic Detergents</strong>
<ul>
  <li>Soap: Obtained from saponification of natural fats, biodegradable, but forms insoluble scum with Ca\u00b2\u207a/Mg\u00b2\u207a in hard water, reducing cleaning power.</li>
  <li>Synthetic detergents (e.g., sodium dodecylbenzenesulfonate): resistant to hard water, but some are not easily biodegradable.</li>
</ul>
</div>

<h3>Fats and Human Health</h3>
<ul>
  <li>Fats are the most energy-dense nutrient (~37 kJ/g) and help absorb fat-soluble vitamins A, D, E, K.</li>
  <li>Trans fatty acids (from incomplete hydrogenation) increase cardiovascular risk and should be limited.</li>
  <li>Essential fatty acids (\u03c9-3, \u03c9-6) cannot be synthesized by the body and must be obtained from food.</li>
</ul>
      `,
      visualizations: [
        {
          id: 'viz-saponification',
          title: 'Saponification — Soap Making Animation',
          setup: function(container) {
            const v = new VizEngine(container, {width: 700, height: 340, scale: 40, originX: 350, originY: 170});
            let phase = 0; // 0=reactants, 1=reaction, 2=products
            let animId = null;
            let tick = 0;

            function drawPhase() {
              v.clear();
              tick++;
              const pulse = 0.5 + 0.5 * Math.sin(tick * 0.05);

              if (phase === 0) {
                // Left: triglyceride
                v.screenText('Triglyceride (Fat/Oil)', 175, 28, v.colors.teal, 14);
                v.ctx.fillStyle = v.colors.blue + 'cc';
                v.ctx.fillRect(60, 55, 230, 220);
                v.screenText('C₃H₅(OOCR)₃', 175, 165, v.colors.white, 16);
                v.screenText('(Triacylglycerol)', 175, 190, v.colors.text, 12);
                // Right: NaOH
                v.screenText('NaOH Aqueous Solution', 525, 28, v.colors.orange, 14);
                v.ctx.fillStyle = v.colors.orange + 'aa';
                v.ctx.fillRect(410, 55, 230, 220);
                v.screenText('3 NaOH(aq)', 525, 165, v.colors.white, 16);
                // Plus sign
                v.screenText('+', 350, 165, v.colors.yellow, 28);
                v.screenText('\u2190 Click "Start Saponification"', 350, 290, v.colors.text, 12);

              } else if (phase === 1) {
                // Mixing animation
                v.screenText('Heating for saponification... \u0394', v.width / 2, 28, v.colors.yellow, 15);
                for (let i = 0; i < 12; i++) {
                  const angle = (i / 12) * Math.PI * 2 + tick * 0.04;
                  const r = 80 + 20 * Math.sin(tick * 0.07 + i);
                  const px = v.width / 2 + r * Math.cos(angle);
                  const py = v.height / 2 + r * 0.5 * Math.sin(angle);
                  const col = i % 2 === 0 ? v.colors.blue : v.colors.orange;
                  v.ctx.fillStyle = col + 'bb';
                  v.ctx.beginPath(); v.ctx.arc(px, py, 14, 0, Math.PI * 2); v.ctx.fill();
                }
                v.screenText('C\u2083H\u2085(OOCR)\u2083 + 3NaOH \u2192 3RCOONa + Glycerol', v.width / 2, v.height - 30, v.colors.text, 12);
                if (tick > 140) { phase = 2; tick = 0; }

              } else {
                // Products
                v.screenText('Saponification Complete!', v.width / 2, 22, v.colors.green, 16);
                // Soap (sodium stearate)
                v.ctx.fillStyle = v.colors.green + 'bb';
                v.ctx.fillRect(40, 50, 240, 220);
                v.screenText('Soap', 160, 80, v.colors.white, 15);
                v.screenText('RCOONa', 160, 115, v.colors.white, 14);
                v.screenText('(Sodium fatty acid salt)', 160, 140, v.colors.text, 11);
                // Draw soap micelle symbol
                v.ctx.fillStyle = v.colors.teal;
                v.ctx.beginPath(); v.ctx.arc(160, 200, 20, 0, Math.PI * 2); v.ctx.fill();
                v.screenText('Micelle', 160, 200, v.colors.white, 11);
                // Arrow
                v.screenText('+', 350, 160, v.colors.yellow, 26);
                // Glycerol
                v.ctx.fillStyle = v.colors.purple + 'bb';
                v.ctx.fillRect(420, 50, 240, 220);
                v.screenText('Glycerol', 540, 80, v.colors.white, 15);
                v.screenText('C₃H₅(OH)₃', 540, 115, v.colors.white, 14);
                v.screenText('(Colorless viscous liquid)', 540, 140, v.colors.text, 11);
                v.screenText('Used in cosmetics, explosives, etc.', 540, 200, v.colors.text, 11);
              }
            }

            function loop() { drawPhase(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = 'Start Saponification';
            btn.onclick = () => { phase = 1; tick = 0; };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = 'Reset';
            btn2.onclick = () => { phase = 0; tick = 0; };
            container.appendChild(btn);
            container.appendChild(btn2);
            return () => cancelAnimationFrame(animId);
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec02-ex01',
          question: 'The essential nature of the saponification reaction of fats is:',
          type: 'mcq',
          options: ['Addition reaction', 'Alkaline hydrolysis of an ester', 'Oxidation reaction', 'Neutralization reaction'],
          answer: 1,
          explanation: 'Saponification is the hydrolysis of fats (esters) under alkaline conditions, producing fatty acid salts and glycerol.'
        },
        {
          id: 'ch16-sec02-ex02',
          question: 'When plant oil is hydrogenated with Ni catalyst to become solid fat, this process utilizes the ________ in unsaturated fatty acids undergoing hydrogenation.',
          type: 'short',
          answer: 'Carbon-carbon double bond (C=C)',
          explanation: 'Unsaturated fatty acids contain C=C double bonds that undergo addition reactions with hydrogen gas, converting liquid oils to solid fats (hydrogenation/hardening).'
        }
      ]
    },

    // ─── Section 3: Proteins ─────────────────────────────────────────────────
    {
      id: 'ch16-sec03',
      title: 'Proteins',
      content: `
<h2>Proteins</h2>
<p>Proteins are the most important organic macromolecules of life, composed of 20 types of amino acids linked by peptide bonds, performing functions such as catalysis, transport, structural support, and signal transduction.</p>

<h3>Amino Acids</h3>
<p>Amino acids are the building blocks of proteins, containing an <strong>amino group (\u2013NH\u2082)</strong> and a <strong>carboxyl group (\u2013COOH)</strong> attached to the same carbon atom (\u03b1-carbon):</p>
<div class="env-block formula">
\\[H_2N{-}\\underset{\\displaystyle |}{\\underset{R}{C}H}{-}COOH\\]
R represents the side chain of each amino acid (determines amino acid identity).
</div>
<p>Amino acids are amphoteric: they can react with acids (\u2013NH\u2082 accepts a proton) and with bases (\u2013COOH loses a proton).</p>

<h3>Peptide Bonds and Peptide Chains</h3>
<div class="env-block formula">
Two amino acids undergo condensation (dehydration), forming a <strong>peptide bond (\u2013CO\u2013NH\u2013)</strong>:
\\[{-}NH_2 + HOOC{-} \\rightarrow {-}CO{-}NH{-} + H_2O\\]
A peptide chain of n amino acids: (n-1) water molecules are removed, forming (n-1) peptide bonds.
</div>

<h3>Four Levels of Protein Structure</h3>
<ol>
  <li><strong>Primary structure</strong>: Amino acid sequence (linked by peptide bonds)</li>
  <li><strong>Secondary structure</strong>: \u03b1-helix, \u03b2-sheet (maintained by hydrogen bonds)</li>
  <li><strong>Tertiary structure</strong>: Overall 3D folding (various weak interactions)</li>
  <li><strong>Quaternary structure</strong>: Assembly of multiple peptide chains (e.g., hemoglobin)</li>
</ol>

<h3>Protein Denaturation</h3>
<p>High temperature, strong acids/bases, heavy metal ions, and organic solvents can disrupt the spatial structure of proteins, causing loss of function:</p>
<ul>
  <li>Denaturation is irreversible (a cooked egg cannot be uncooked).</li>
  <li>Denaturation does not change the primary structure (amino acid sequence remains intact).</li>
  <li>Enzymes denature at high temperatures, which is why enzyme-catalyzed reactions have an optimal temperature.</li>
</ul>

<h3>Identification Reactions for Proteins</h3>
<table class="data-table">
  <tr><th>Reaction</th><th>Reagent</th><th>Observation</th><th>Principle</th></tr>
  <tr><td>Biuret test</td><td>NaOH + CuSO\u2084</td><td>Purple</td><td>Peptide bonds form purple complex with Cu\u00b2\u207a (requires \u22652 peptide bonds)</td></tr>
  <tr><td>Xanthoproteic test</td><td>Concentrated HNO\u2083, heat</td><td>Yellow</td><td>Aromatic amino acids (phenylalanine, tyrosine) undergo nitration</td></tr>
  <tr><td>Burn test</td><td>Flame</td><td>Burnt feather smell</td><td>Contains S and N; distinguishes silk from synthetic fibers</td></tr>
</table>

<div class="env-block experiment">
<strong>Experiment: Biuret Test for Proteins</strong>
Add NaOH solution to egg white solution first, then add a few drops of CuSO\u2084 solution. Shake\u2014the solution turns <strong>purple</strong>, confirming the presence of protein.
</div>
      `,
      visualizations: [
        {
          id: 'viz-peptide-bond',
          title: 'Peptide Bond Formation',
          setup: function(container) {
            const v = new VizEngine(container, {width: 720, height: 360, scale: 40, originX: 360, originY: 180});
            let animId = null;
            let phase = 0; // 0=separate, 1=forming, 2=bonded
            let tick = 0;
            let progress = 0;

            function drawAminoAcid(ctx, cx, cy, label, color, showNH2, showCOOH) {
              // central alpha carbon
              ctx.fillStyle = color;
              ctx.beginPath(); ctx.arc(cx, cy, 22, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc';
              ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('Cα', cx, cy);

              // R group (top)
              ctx.fillStyle = '#bc8cff';
              ctx.beginPath(); ctx.arc(cx, cy - 48, 16, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc'; ctx.font = '11px sans-serif';
              ctx.fillText('R', cx, cy - 48);
              ctx.strokeStyle = '#bc8cff'; ctx.lineWidth = 2;
              ctx.beginPath(); ctx.moveTo(cx, cy - 22); ctx.lineTo(cx, cy - 32); ctx.stroke();

              if (showNH2) {
                ctx.fillStyle = '#58a6ff';
                ctx.beginPath(); ctx.arc(cx - 55, cy, 18, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 11px sans-serif';
                ctx.fillText('NH₂', cx - 55, cy);
                ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(cx - 37, cy); ctx.lineTo(cx - 22, cy); ctx.stroke();
              }

              if (showCOOH) {
                ctx.fillStyle = '#f85149';
                ctx.beginPath(); ctx.arc(cx + 55, cy, 18, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 10px sans-serif';
                ctx.fillText('COOH', cx + 55, cy);
                ctx.strokeStyle = '#f85149'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(cx + 22, cy); ctx.lineTo(cx + 37, cy); ctx.stroke();
              }

              ctx.fillStyle = color;
              ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
              ctx.fillText(label, cx, cy + 48);
            }

            function render() {
              v.clear();
              const ctx = v.ctx;
              tick++;

              if (phase === 0) {
                v.screenText('Two Amino Acids (Unreacted)', v.width / 2, 22, v.colors.teal, 15);
                drawAminoAcid(ctx, 180, 180, 'Amino Acid 1', v.colors.blue, true, true);
                drawAminoAcid(ctx, 540, 180, 'Amino Acid 2', v.colors.orange, true, true);
                v.screenText('Click "Condensation" to see peptide bond formation', v.width / 2, 330, v.colors.text, 12);

              } else if (phase === 1) {
                progress = Math.min(1, progress + 0.015);
                v.screenText('Condensation reaction in progress...', v.width / 2, 22, v.colors.yellow, 15);
                const aa1x = 180 + progress * 80;
                const aa2x = 540 - progress * 80;
                drawAminoAcid(ctx, aa1x, 180, 'Amino Acid 1', v.colors.blue, true, false);
                drawAminoAcid(ctx, aa2x, 180, 'Amino Acid 2', v.colors.orange, false, true);
                // Water molecule flying out
                const wx = v.width / 2 + progress * 50;
                const wy = 180 - progress * 80;
                ctx.fillStyle = '#3fb9a0cc';
                ctx.beginPath(); ctx.arc(wx, wy, 18, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 12px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('H₂O', wx, wy);
                v.screenText('–COOH + H₂N– → –CO–NH– + H₂O', v.width / 2, 320, v.colors.text, 12);
                if (progress >= 1) { phase = 2; }

              } else {
                v.screenText('Dipeptide (Peptide bond \u2013CO\u2013NH\u2013 formed)', v.width / 2, 22, v.colors.green, 15);
                // Draw dipeptide
                drawAminoAcid(ctx, 200, 180, 'Residue 1', v.colors.blue, true, false);
                drawAminoAcid(ctx, 520, 180, 'Residue 2', v.colors.orange, false, true);
                // Peptide bond in center
                ctx.fillStyle = v.colors.green;
                ctx.beginPath(); ctx.arc(360, 180, 26, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 10px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('–CO–', 360, 173); ctx.fillText('–NH–', 360, 187);
                // Bond lines
                ctx.strokeStyle = v.colors.green; ctx.lineWidth = 2.5;
                ctx.beginPath(); ctx.moveTo(222, 180); ctx.lineTo(334, 180); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(386, 180); ctx.lineTo(498, 180); ctx.stroke();
                v.screenText('Peptide bond (\u2013CO\u2013NH\u2013)', 360, 230, v.colors.green, 13);
              }
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = 'Condensation';
            btn.onclick = () => { if (phase === 0) { phase = 1; progress = 0; } };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = 'Reset';
            btn2.onclick = () => { phase = 0; progress = 0; tick = 0; };
            container.appendChild(btn);
            container.appendChild(btn2);
            return () => cancelAnimationFrame(animId);
          }
        },
        {
          id: 'viz-denaturation',
          title: 'Protein Denaturation — Heat / Acid',
          setup: function(container) {
            const v = new VizEngine(container, {width: 700, height: 340, scale: 40, originX: 350, originY: 170});
            let animId = null;
            let denatured = false;
            let animProgress = 0;
            let tick = 0;

            function drawProtein(cx, cy, phase) {
              const ctx = v.ctx;
              // Draw a stylized alpha helix if not denatured
              if (phase < 0.3) {
                ctx.strokeStyle = v.colors.blue;
                ctx.lineWidth = 3;
                ctx.beginPath();
                for (let i = 0; i <= 60; i++) {
                  const t2 = i / 60;
                  const x = cx - 60 + t2 * 120;
                  const y = cy + 28 * Math.sin(t2 * Math.PI * 4);
                  i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
                // Amino acid dots along helix
                for (let i = 0; i <= 8; i++) {
                  const t2 = i / 8;
                  const x = cx - 60 + t2 * 120;
                  const y = cy + 28 * Math.sin(t2 * Math.PI * 4);
                  ctx.fillStyle = i % 3 === 0 ? v.colors.orange : (i % 3 === 1 ? v.colors.teal : v.colors.purple);
                  ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
                }
              } else {
                // Unfolded / random coil
                const seed = phase;
                ctx.strokeStyle = v.colors.red;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                const pts2 = [];
                for (let i = 0; i <= 10; i++) {
                  const t2 = i / 10;
                  const rx = Math.sin(i * 3.7 + seed * 20) * 70 * phase;
                  const ry = Math.cos(i * 2.9 + seed * 15) * 55 * phase;
                  const x = cx - 60 + t2 * 120 + rx;
                  const y = cy + ry;
                  pts2.push([x, y]);
                  i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
                pts2.forEach(([x, y], i) => {
                  ctx.fillStyle = i % 3 === 0 ? v.colors.orange : (i % 3 === 1 ? v.colors.teal : v.colors.purple);
                  ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
                });
              }
            }

            function render() {
              v.clear();
              tick++;
              if (denatured && animProgress < 1) animProgress = Math.min(1, animProgress + 0.015);

              const p = animProgress;
              v.screenText('Protein Denaturation Simulation', v.width / 2, 24, v.colors.teal, 15);
              if (p < 0.05) {
                v.screenText('Normal Protein (Ordered 3D Structure)', v.width / 2, 55, v.colors.blue, 13);
              } else if (p < 0.8) {
                v.screenText('Heat/acid/base disrupting hydrogen bonds and structure...', v.width / 2, 55, v.colors.yellow, 13);
              } else {
                v.screenText('Protein denatured! Structure destroyed, activity lost (irreversible)', v.width / 2, 55, v.colors.red, 13);
              }
              drawProtein(v.width / 2, v.height / 2 + 20, p);

              if (p > 0.5) {
                v.screenText('Primary structure (amino acid sequence) unchanged', v.width / 2, v.height - 30, v.colors.text, 12);
              }

              // Temperature indicator
              const temp = Math.round(25 + p * 75);
              v.screenText('Temperature: ' + temp + '°C', 80, 90, p > 0.5 ? v.colors.red : v.colors.green, 13);
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = 'Heat Denature';
            btn.onclick = () => { denatured = true; };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = 'Reset';
            btn2.onclick = () => { denatured = false; animProgress = 0; };
            container.appendChild(btn);
            container.appendChild(btn2);
            return () => cancelAnimationFrame(animId);
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec03-ex01',
          question: 'A protein containing 100 amino acids in a single peptide chain has how many peptide bonds?',
          type: 'mcq',
          options: ['100', '99', '101', '98'],
          answer: 1,
          explanation: 'n amino acids condensing into one peptide chain form (n-1) peptide bonds and release (n-1) water molecules. So 100 amino acids form 99 peptide bonds.'
        },
        {
          id: 'ch16-sec03-ex02',
          question: 'After heating and then cooling egg white, the original properties cannot be restored. This shows that protein denaturation is:',
          type: 'mcq',
          options: ['Reversible', 'Irreversible', 'Physical change', 'Color reaction'],
          answer: 1,
          explanation: 'Protein denaturation means the spatial structure is destroyed and properties change, typically irreversibly. A cooked egg (solidified egg white) cannot be restored.'
        },
        {
          id: 'ch16-sec03-ex03',
          question: 'The biuret test requires ________ reagents, produces ________ as the observation, and can identify proteins containing more than ________ peptide bonds.',
          type: 'short',
          answer: 'NaOH and CuSO\u2084; solution turns purple; 2',
          explanation: 'Biuret test: Add NaOH to protein solution first, then add CuSO\u2084. Cu\u00b2\u207a forms a purple complex with 2 or more peptide bonds, used to detect proteins.'
        },
        {
          id: 'ch16-sec03-ex04',
          question: 'Amino acids are amphoteric because they contain the ________ and ________ functional groups.',
          type: 'short',
          answer: 'Amino group (\u2013NH\u2082); Carboxyl group (\u2013COOH)',
          explanation: 'The amino group reacts with acids (\u2013NH\u2082 + HCl \u2192 \u2013NH\u2083\u207aCl\u207b), and the carboxyl group reacts with bases (\u2013COOH + NaOH \u2192 \u2013COONa + H\u2082O), so amino acids are amphoteric.'
        }
      ]
    },

    // ─── Section 4: Nucleic Acids ─────────────────────────────────────────────
    {
      id: 'ch16-sec04',
      title: 'Nucleic Acids',
      content: `
<h2>Nucleic Acids</h2>
<p>Nucleic acids are biological macromolecules that carry genetic information, divided into <strong>DNA</strong> (deoxyribonucleic acid) and <strong>RNA</strong> (ribonucleic acid).</p>

<h3>Nucleotides</h3>
<p>The basic unit of nucleic acids is the nucleotide, composed of three parts:</p>
<div class="env-block formula">
Nucleotide = <strong>Phosphate</strong> (H\u2083PO\u2084) + <strong>Pentose sugar</strong> + <strong>Nitrogenous base</strong>
</div>

<table class="data-table">
  <tr><th></th><th>DNA</th><th>RNA</th></tr>
  <tr><td>Pentose sugar</td><td>Deoxyribose (\u2013OH \u2192 \u2013H)</td><td>Ribose</td></tr>
  <tr><td>Bases</td><td>A (adenine), T (thymine), G (guanine), C (cytosine)</td><td>A, U (uracil), G, C</td></tr>
  <tr><td>Strands</td><td>Double-stranded (double helix)</td><td>Single-stranded</td></tr>
  <tr><td>Function</td><td>Genetic information storage</td><td>Genetic information transfer and translation</td></tr>
</table>

<h3>DNA Double Helix Structure</h3>
<p>In 1953, Watson and Crick proposed the DNA double helix model based on Franklin's X-ray diffraction data:</p>
<ul>
  <li>Two antiparallel polynucleotide chains wind around a common axis to form a right-handed double helix.</li>
  <li>The phosphate-deoxyribose backbone is on the outside; bases face inward, paired by <strong>hydrogen bonds</strong>:
    <ul>
      <li>A \u2014 T (adenine \u2014 thymine): 2 hydrogen bonds</li>
      <li>G \u2261 C (guanine \u2014 cytosine): 3 hydrogen bonds</li>
    </ul>
  </li>
  <li>The base complementary pairing principle ensures accurate DNA replication.</li>
</ul>

<div class="env-block formula">
Base complementarity: If the proportion of A in DNA is x, then T is also x, and G = C = \\(\\dfrac{1-2x}{2}\\).
</div>

<h3>Flow of Genetic Information (Central Dogma)</h3>
<div class="env-block formula">
\\[DNA \\xrightarrow{\\text{transcription}} mRNA \\xrightarrow{\\text{translation}} \\text{protein}\\]
</div>
<p>Every 3 consecutive bases (codon) encode one amino acid. There are \\(4^3 = 64\\) possible codons encoding 20 amino acids (with redundancy).</p>

<h3>Types of RNA</h3>
<ul>
  <li><strong>mRNA</strong> (messenger RNA): Carries genetic information from the nucleus to the ribosome.</li>
  <li><strong>tRNA</strong> (transfer RNA): Recognizes codons and carries the corresponding amino acid.</li>
  <li><strong>rRNA</strong> (ribosomal RNA): Structural component of the ribosome.</li>
</ul>
      `,
      visualizations: [
        {
          id: 'viz-dna-helix',
          title: 'DNA Double Helix — Interactive',
          setup: function(container) {
            const v = new VizEngine(container, {width: 700, height: 400, scale: 40, originX: 350, originY: 200});
            let animId = null;
            let angle = 0;
            let zoomLevel = 1;

            const basePairs = [
              {a: 'A', b: 'T', colorA: v.colors.blue, colorB: v.colors.orange},
              {a: 'G', b: 'C', colorA: v.colors.green, colorB: v.colors.purple},
              {a: 'T', b: 'A', colorA: v.colors.orange, colorB: v.colors.blue},
              {a: 'C', b: 'G', colorA: v.colors.purple, colorB: v.colors.green},
              {a: 'A', b: 'T', colorA: v.colors.blue, colorB: v.colors.orange},
              {a: 'G', b: 'C', colorA: v.colors.green, colorB: v.colors.purple},
              {a: 'T', b: 'A', colorA: v.colors.orange, colorB: v.colors.blue},
              {a: 'C', b: 'G', colorA: v.colors.purple, colorB: v.colors.green},
            ];

            function render() {
              v.clear();
              angle += 0.008;
              const ctx = v.ctx;
              const cx = v.width / 2, baseY = 60, pitch = 38 * zoomLevel;
              const radius = 60 * zoomLevel;

              v.screenText('DNA Double Helix Structure', cx, 22, v.colors.teal, 15);
              v.screenText('A-T: 2 H-bonds | G-C: 3 H-bonds', cx, 42, v.colors.text, 11);

              for (let i = 0; i < basePairs.length; i++) {
                const y = baseY + i * pitch;
                const a1 = angle + i * (Math.PI * 2 / basePairs.length) * 1.5;
                // Left strand (strand 1)
                const x1 = cx - radius * Math.cos(a1);
                const x2 = cx - radius * Math.cos(a1 + Math.PI);
                const depth1 = Math.sin(a1);
                const depth2 = Math.sin(a1 + Math.PI);

                // Draw backbone segments
                if (i < basePairs.length - 1) {
                  const y2 = y + pitch;
                  const na1 = angle + (i + 1) * (Math.PI * 2 / basePairs.length) * 1.5;
                  const nx1 = cx - radius * Math.cos(na1);
                  const nx2 = cx - radius * Math.cos(na1 + Math.PI);
                  ctx.strokeStyle = '#8b949e';
                  ctx.lineWidth = 3;
                  ctx.globalAlpha = 0.7;
                  ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(nx1, y2); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(x2, y); ctx.lineTo(nx2, y2); ctx.stroke();
                  ctx.globalAlpha = 1;
                }

                // Base pair horizontal connection (hydrogen bonds)
                const bp = basePairs[i];
                ctx.strokeStyle = v.colors.text + '66';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 3]);
                ctx.beginPath(); ctx.moveTo(x1 + (depth1 > 0 ? 12 : -12), y); ctx.lineTo(x2 + (depth2 > 0 ? 12 : -12), y); ctx.stroke();
                ctx.setLineDash([]);

                // Base circles
                const r1 = 12 + 2 * depth1;
                const r2 = 12 + 2 * depth2;
                ctx.fillStyle = bp.colorA;
                ctx.beginPath(); ctx.arc(x1, y, Math.max(8, r1), 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = bp.colorB;
                ctx.beginPath(); ctx.arc(x2, y, Math.max(8, r2), 0, Math.PI * 2); ctx.fill();

                ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 10px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(bp.a, x1, y);
                ctx.fillText(bp.b, x2, y);
              }

              // Legend
              v.screenText('\u2190 5\' Phosphate Backbone 3\' \u2192', cx - 170, v.height - 28, v.colors.text, 10);
              v.screenText('\u2190 3\' Phosphate Backbone 5\' \u2192', cx + 100, v.height - 28, v.colors.text, 10);

              // Color legend
              const lx = 20, ly = v.height - 70;
              [['A', v.colors.blue], ['T', v.colors.orange], ['G', v.colors.green], ['C', v.colors.purple]].forEach(([label, col], i) => {
                ctx.fillStyle = col;
                ctx.beginPath(); ctx.arc(lx + 10, ly + i * 18, 7, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = v.colors.text; ctx.font = '10px sans-serif';
                ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                ctx.fillText(label, lx + 20, ly + i * 18);
              });
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const zoomIn = document.createElement('button');
            zoomIn.className = 'viz-btn';
            zoomIn.textContent = 'Zoom In +';
            zoomIn.onclick = () => { zoomLevel = Math.min(1.5, zoomLevel + 0.15); };
            const zoomOut = document.createElement('button');
            zoomOut.className = 'viz-btn';
            zoomOut.style.marginLeft = '8px';
            zoomOut.textContent = 'Zoom Out \u2013';
            zoomOut.onclick = () => { zoomLevel = Math.max(0.6, zoomLevel - 0.15); };
            container.appendChild(zoomIn);
            container.appendChild(zoomOut);
            return () => cancelAnimationFrame(animId);
          }
        },
        {
          id: 'viz-dna-basepair-game',
          title: 'DNA Base-Pair Matcher Game',
          setup: function(container) {
            const viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const C = viz.colors;
            const W = viz.width, H = viz.height;

            const bases = ['A', 'T', 'G', 'C'];
            const pairs = { A: 'T', T: 'A', G: 'C', C: 'G' };
            const baseColors = { A: C.blue, T: C.orange, G: C.purple, C: C.teal };
            const hbonds = { A: 2, T: 2, G: 3, C: 3 };

            let leftBase = 'A';
            let rightBase = 'T';
            let feedback = '';
            let feedbackColor = C.green;

            function drawStrand() {
              viz.clear();

              // Title
              ctx.fillStyle = C.teal; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('DNA Base-Pair Matcher', W/2, 12);

              const cy = H / 2;
              const lx = W * 0.28, rx = W * 0.72;

              // Sugar-phosphate backbones
              ctx.strokeStyle = C.axis; ctx.lineWidth = 8; ctx.lineCap = 'round';
              ctx.setLineDash([10, 6]);
              ctx.beginPath(); ctx.moveTo(lx - 60, cy - 80); ctx.lineTo(lx - 60, cy + 80); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(rx + 60, cy - 80); ctx.lineTo(rx + 60, cy + 80); ctx.stroke();
              ctx.setLineDash([]);

              // Backbone labels
              ctx.fillStyle = C.axis; ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText("5'→3'", lx - 60, cy - 92);
              ctx.fillText("3'←5'", rx + 60, cy - 92);

              // Left base node
              const lr = 34;
              ctx.fillStyle = baseColors[leftBase] + '55';
              ctx.beginPath(); ctx.arc(lx, cy, lr + 4, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = baseColors[leftBase];
              ctx.beginPath(); ctx.arc(lx, cy, lr, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = C.white; ctx.font = 'bold 22px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(leftBase, lx, cy);

              // Right base node
              const rr = 34;
              ctx.fillStyle = baseColors[rightBase] + '55';
              ctx.beginPath(); ctx.arc(rx, cy, rr + 4, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = baseColors[rightBase];
              ctx.beginPath(); ctx.arc(rx, cy, rr, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = C.white; ctx.font = 'bold 22px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(rightBase, rx, cy);

              // H-bonds or X mark
              const isMatch = pairs[leftBase] === rightBase;
              const mx = (lx + rx) / 2;
              if (isMatch) {
                const nb = hbonds[leftBase];
                ctx.strokeStyle = C.yellow; ctx.lineWidth = 2;
                ctx.setLineDash([5, 4]);
                const spacing = 10;
                for (let i = 0; i < nb; i++) {
                  const yy = cy - (nb - 1) * spacing / 2 + i * spacing;
                  ctx.beginPath();
                  ctx.moveTo(lx + lr, yy);
                  ctx.lineTo(rx - rr, yy);
                  ctx.stroke();
                }
                ctx.setLineDash([]);
                ctx.fillStyle = C.yellow; ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(nb + ' H-bonds', mx, cy + lr + 16);
              } else {
                ctx.strokeStyle = C.red; ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(mx - 14, cy - 14); ctx.lineTo(mx + 14, cy + 14); ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(mx + 14, cy - 14); ctx.lineTo(mx - 14, cy + 14); ctx.stroke();
              }

              // Feedback
              ctx.fillStyle = feedbackColor; ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
              ctx.fillText(feedback, W/2, H - 12);

              // Instruction
              ctx.fillStyle = C.text; ctx.font = '12px -apple-system,sans-serif';
              ctx.textBaseline = 'top';
              ctx.fillText('Select bases on left and right strands to test pairing', W/2, H - 36);
            }

            drawStrand();

            // Controls
            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:16px;justify-content:center;margin-top:6px;flex-wrap:wrap;';

            const leftLabel = document.createElement('span');
            leftLabel.textContent = 'Left: ';
            leftLabel.style.color = '#8b949e';
            ctrl.appendChild(leftLabel);

            bases.forEach(b => {
              const btn = document.createElement('button');
              btn.textContent = b;
              btn.style.cssText = 'padding:4px 12px;border:2px solid ' + baseColors[b] + ';border-radius:4px;background:' + baseColors[b] + '33;color:' + baseColors[b] + ';font-weight:bold;cursor:pointer;';
              btn.addEventListener('click', () => {
                leftBase = b;
                feedback = pairs[b] === rightBase ? 'Correct pair! ' + b + '-' + rightBase + ' (' + hbonds[b] + ' H-bonds)' : 'Not a valid pair!';
                feedbackColor = pairs[b] === rightBase ? '#3fb950' : '#f85149';
                drawStrand();
              });
              ctrl.appendChild(btn);
            });

            const sep = document.createElement('span');
            sep.textContent = ' | Right: ';
            sep.style.color = '#8b949e';
            ctrl.appendChild(sep);

            bases.forEach(b => {
              const btn = document.createElement('button');
              btn.textContent = b;
              btn.style.cssText = 'padding:4px 12px;border:2px solid ' + baseColors[b] + ';border-radius:4px;background:' + baseColors[b] + '33;color:' + baseColors[b] + ';font-weight:bold;cursor:pointer;';
              btn.addEventListener('click', () => {
                rightBase = b;
                feedback = pairs[leftBase] === b ? 'Correct pair! ' + leftBase + '-' + b + ' (' + hbonds[leftBase] + ' H-bonds)' : 'Not a valid pair!';
                feedbackColor = pairs[leftBase] === b ? '#3fb950' : '#f85149';
                drawStrand();
              });
              ctrl.appendChild(btn);
            });

            container.appendChild(ctrl);
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec04-ex01',
          question: 'What are the main differences in composition between DNA and RNA? (multiple choice)',
          type: 'mcq',
          options: ['Different pentose sugars (deoxyribose vs ribose)', 'DNA has T while RNA has U', 'DNA is double-stranded while RNA is single-stranded', 'DNA contains phosphate but RNA does not'],
          answer: '0,1,2',
          explanation: 'Differences between DNA and RNA: pentose sugar (deoxyribose vs ribose), unique base (T vs U), strand number (double vs single). Both contain phosphate.'
        },
        {
          id: 'ch16-sec04-ex02',
          question: 'In a DNA molecule, G+C makes up 40% of all bases. What percentage does A represent?',
          type: 'mcq',
          options: ['40%', '20%', '30%', '60%'],
          answer: 2,
          explanation: 'Since A=T and G=C (base complementarity), if G+C=40% then A+T=60%, so A=T=30%.'
        },
        {
          id: 'ch16-sec04-ex03',
          question: '3 bases form one codon. 4 types of bases can form ________ codons, but only encode ________ types of amino acids.',
          type: 'short',
          answer: '64; 20',
          explanation: '4 bases arranged in triplets: 4\u00b3=64 codons, encoding 20 amino acids (with redundancy). 3 codons are stop codons that do not encode any amino acid.'
        }
      ]
    },

    // ─── Section 5: Biomolecules and Health ──────────────────────────────────
    {
      id: 'ch16-sec05',
      title: 'Biomolecules and Health',
      content: `
<h2>Biomolecules and Health</h2>
<p>Biological macromolecules are the material basis of life activities. Balanced intake of nutrients is key to health.</p>

<h3>Six Major Nutrients</h3>
<table class="data-table">
  <tr><th>Nutrient</th><th>Chemical Nature</th><th>Main Function</th><th>Deficiency</th></tr>
  <tr><td>Carbohydrates</td><td>Polysaccharides, monosaccharides</td><td>Energy supply (4 kJ/g)</td><td>Hypoglycemia, fatigue</td></tr>
  <tr><td>Protein</td><td>Amino acid polymer</td><td>Structure, catalysis, transport</td><td>Malnutrition, edema</td></tr>
  <tr><td>Fat</td><td>Triglycerides</td><td>Energy storage (9 kJ/g), insulation</td><td>Fat-soluble vitamin deficiency</td></tr>
  <tr><td>Vitamins</td><td>Small organic molecules</td><td>Coenzyme components</td><td>Various vitamin deficiencies</td></tr>
  <tr><td>Minerals</td><td>Mineral ions</td><td>Regulate fluid balance</td><td>Anemia (Fe deficiency), osteoporosis (Ca deficiency)</td></tr>
  <tr><td>Water</td><td>H\u2082O</td><td>Solvent, temperature regulation</td><td>Dehydration</td></tr>
</table>

<h3>Enzymes -- Biological Catalysts</h3>
<p>Enzymes are proteins with catalytic function (a few are RNA), with the following characteristics:</p>
<ul>
  <li><strong>High efficiency</strong>: Catalytic efficiency is \\(10^7 \\sim 10^{13}\\) times higher than inorganic catalysts.</li>
  <li><strong>Specificity</strong>: Each enzyme catalyzes only one type of reaction ("lock-and-key" model).</li>
  <li><strong>Mild conditions</strong>: Functions at room temperature, atmospheric pressure, and neutral pH.</li>
  <li><strong>Regulable</strong>: Controlled by temperature, pH, inhibitors, etc.</li>
</ul>

<div class="env-block formula">
Enzyme-catalyzed reaction scheme:
\\[\\text{Substrate (S)} + \\text{Enzyme (E)} \\rightleftharpoons \\text{Enzyme-Substrate (ES)} \\rightarrow \\text{Product (P)} + \\text{Enzyme (E)}\\]
</div>

<h3>Starch Digestion -- Multi-Step Hydrolysis</h3>
<p>Digestion process of dietary starch:</p>
<div class="env-block formula">
\\[(C_6H_{10}O_5)_n \\xrightarrow{\\text{salivary amylase}} \\text{maltose} (C_{12}H_{22}O_{11}) \\xrightarrow{\\text{maltase}} \\text{glucose} (C_6H_{12}O_6)\\]
</div>

<h3>Chemistry and Nutritional Health</h3>
<ul>
  <li><strong>Balanced diet</strong>: ~60% carbohydrates, ~15% protein, ~25% fat (by energy ratio).</li>
  <li><strong>Food additives</strong>: Preservatives (sodium benzoate), antioxidants (vitamins C, E), colorants, etc. must be used within safe dosage limits.</li>
  <li><strong>Heavy metal toxicity</strong>: Hg\u00b2\u207a, Pb\u00b2\u207a, etc. bind to proteins, denaturing enzymes and causing poisoning.</li>
  <li><strong>Dietary fiber</strong>: Cellulose cannot be digested but promotes intestinal motility, prevents constipation, and reduces colon cancer risk.</li>
</ul>

<div class="env-block note">
<strong>Dietary Pyramid (Main Levels)</strong>
<ol>
  <li>Grains and tubers (staple food, 250\u2013400g/day)</li>
  <li>Vegetables and fruits (300\u2013500g + 200\u2013350g/day)</li>
  <li>Animal products (fish, poultry, eggs, meat, 120\u2013200g/day)</li>
  <li>Soy, nuts, dairy (25+25+300g/day)</li>
  <li>Oil and salt (25\u201330g oil, \u22645g salt/day)</li>
</ol>
</div>
      `,
      visualizations: [
        {
          id: 'viz-starch-hydrolysis',
          title: 'Starch Hydrolysis — Step by Step',
          setup: function(container) {
            const v = new VizEngine(container, {width: 700, height: 360, scale: 40, originX: 350, originY: 180});
            let animId = null;
            let step = 0;
            let tick = 0;
            let autoPlay = false;

            const stages = [
              {label: 'Starch (C\u2086H\u2081\u2080O\u2085)\u2099', color: '#3fb9a0', desc: 'Polysaccharide: glucose units linked by \u03b1-1,4 glycosidic bonds', n: 8},
              {label: 'Dextrin / shorter polysaccharide', color: '#58a6ff', desc: 'Amylase cleaves internal glycosidic bonds, shortening chains', n: 4},
              {label: 'Maltose C\u2081\u2082H\u2082\u2082O\u2081\u2081', color: '#d29922', desc: 'Further hydrolysis: pairs of glucose form maltose', n: 2},
              {label: 'Glucose C\u2086H\u2081\u2082O\u2086', color: '#3fb950', desc: 'Complete hydrolysis: individual glucose absorbed by the body', n: 1}
            ];

            function drawChain(n, color, cx, cy) {
              const ctx = v.ctx;
              const spacing = Math.min(60, 420 / (n * 2 + 1));
              const totalW = n * spacing;
              for (let i = 0; i < n; i++) {
                const x = cx - totalW / 2 + i * spacing + spacing / 2;
                ctx.fillStyle = color;
                ctx.beginPath(); ctx.arc(x, cy, 18, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 9px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('Glc', x, cy);
                if (i < n - 1) {
                  ctx.strokeStyle = color; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.moveTo(x + 18, cy); ctx.lineTo(x + spacing - 18, cy); ctx.stroke();
                }
              }
            }

            function render() {
              v.clear();
              tick++;
              const s = stages[step];
              v.screenText('Starch Hydrolysis Diagram', v.width / 2, 24, v.colors.teal, 15);
              v.screenText('Step ' + (step + 1) + '/4: ' + s.label, v.width / 2, 52, s.color, 14);
              v.screenText(s.desc, v.width / 2, 75, v.colors.text, 12);

              if (step === 0) {
                // Draw long chain with slight wave
                const ctx = v.ctx;
                const cy = 180, startX = 60;
                const n = 10;
                for (let i = 0; i < n; i++) {
                  const x = startX + i * 58;
                  const y = cy + (i % 2 === 0 ? 0 : -20);
                  ctx.fillStyle = s.color;
                  ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = '#0c0c20'; ctx.font = 'bold 9px sans-serif';
                  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText('Glc', x, y);
                  if (i < n - 1) {
                    const nx = startX + (i + 1) * 58;
                    const ny = cy + ((i + 1) % 2 === 0 ? 0 : -20);
                    ctx.strokeStyle = s.color; ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.moveTo(x + 20, y); ctx.lineTo(nx - 20, ny); ctx.stroke();
                  }
                }
                v.screenText('...(more glucose units)...', v.width / 2, 230, v.colors.text, 11);
              } else if (step === 1) {
                // Two shorter chains
                drawChain(5, s.color, v.width / 2 - 90, 165);
                drawChain(4, s.color, v.width / 2 + 100, 195);
                v.screenText('Salivary amylase', v.width / 2, 260, v.colors.yellow, 12);
              } else if (step === 2) {
                // Several maltose (pairs)
                for (let m = 0; m < 4; m++) {
                  const mx = 100 + m * 155, my = 180;
                  v.ctx.fillStyle = s.color;
                  v.ctx.beginPath(); v.ctx.arc(mx, my, 18, 0, Math.PI * 2); v.ctx.fill();
                  v.ctx.beginPath(); v.ctx.arc(mx + 44, my, 18, 0, Math.PI * 2); v.ctx.fill();
                  v.ctx.strokeStyle = s.color; v.ctx.lineWidth = 2;
                  v.ctx.beginPath(); v.ctx.moveTo(mx + 18, my); v.ctx.lineTo(mx + 26, my); v.ctx.stroke();
                  v.ctx.fillStyle = '#0c0c20'; v.ctx.font = 'bold 9px sans-serif';
                  v.ctx.textAlign = 'center'; v.ctx.textBaseline = 'middle';
                  v.ctx.fillText('Glc', mx, my); v.ctx.fillText('Glc', mx + 44, my);
                  v.screenText('Maltose', mx + 22, my + 35, s.color, 10);
                }
                v.screenText('Maltase', v.width / 2, 270, v.colors.yellow, 12);
              } else {
                // Individual glucose
                for (let g = 0; g < 8; g++) {
                  const gx = 55 + g * 83, gy = 175 + (g % 2 === 0 ? -18 : 18);
                  v.ctx.fillStyle = s.color;
                  v.ctx.beginPath(); v.ctx.arc(gx, gy, 24, 0, Math.PI * 2); v.ctx.fill();
                  v.ctx.fillStyle = '#0c0c20'; v.ctx.font = 'bold 10px sans-serif';
                  v.ctx.textAlign = 'center'; v.ctx.textBaseline = 'middle';
                  v.ctx.fillText('Glc', gx, gy);
                }
                v.screenText('Can be directly absorbed into blood!', v.width / 2, 260, v.colors.green, 13);
              }

              // Enzyme indicator on bottom
              const enzymes = ['Salivary amylase (mouth)', 'Pancreatic amylase (small intestine)', 'Maltase (small intestine)', 'Complete!'];
              v.screenText('Enzyme: ' + enzymes[step], v.width / 2, v.height - 18, v.colors.teal, 11);

              if (autoPlay && tick % 90 === 0) {
                step = (step + 1) % stages.length;
              }
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btnNext = document.createElement('button');
            btnNext.className = 'viz-btn';
            btnNext.textContent = 'Next';
            btnNext.onclick = () => { step = Math.min(stages.length - 1, step + 1); tick = 0; };
            const btnAuto = document.createElement('button');
            btnAuto.className = 'viz-btn';
            btnAuto.style.marginLeft = '8px';
            btnAuto.textContent = 'Auto Play';
            btnAuto.onclick = () => { autoPlay = !autoPlay; btnAuto.textContent = autoPlay ? 'Stop' : 'Auto Play'; };
            const btnReset = document.createElement('button');
            btnReset.className = 'viz-btn';
            btnReset.style.marginLeft = '8px';
            btnReset.textContent = 'Reset';
            btnReset.onclick = () => { step = 0; tick = 0; autoPlay = false; btnAuto.textContent = 'Auto Play'; };
            container.appendChild(btnNext);
            container.appendChild(btnAuto);
            container.appendChild(btnReset);
            return () => cancelAnimationFrame(animId);
          }
        },
        {
          id: 'viz-enzyme-lock-key',
          title: 'Enzyme Lock-and-Key Animation',
          setup: function(container) {
            const viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const C = viz.colors;
            const W = viz.width, H = viz.height;

            let t = 0;

            viz.animate((ts) => {
              t = ts / 1000;
              viz.clear();

              ctx.fillStyle = C.teal + '22';
              ctx.fillRect(0, 0, W, H);

              const cy = H / 2;

              // Enzyme (large molecule, left-center)
              const ex = W * 0.38;
              const ey = cy;
              const er = 70;

              // Draw enzyme body
              ctx.fillStyle = C.blue + '88';
              ctx.strokeStyle = C.blue;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.ellipse(ex, ey, er, er * 0.75, 0, 0, Math.PI * 2);
              ctx.fill(); ctx.stroke();

              // Active site indentation
              ctx.fillStyle = '#0c0c20';
              ctx.beginPath();
              ctx.ellipse(ex + er * 0.55, ey, 22, 18, Math.PI * 0.1, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = C.teal; ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.ellipse(ex + er * 0.55, ey, 22, 18, Math.PI * 0.1, 0, Math.PI * 2);
              ctx.stroke();

              ctx.fillStyle = C.blue; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('Enzyme', ex - 20, ey);
              ctx.fillStyle = C.teal; ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Active site', ex + er * 0.55, ey + 28);

              // Substrate position based on phase
              let cycle = t % 4;
              let subX, subAlpha;

              if (cycle < 1.5) {
                // Approach
                const p = cycle / 1.5;
                subX = W * 0.75 - (W * 0.75 - (ex + er * 0.55)) * p;
                subAlpha = 1;
              } else if (cycle < 2.5) {
                // Bound
                subX = ex + er * 0.55;
                subAlpha = 1;
              } else {
                // Release (product moving right)
                const p = (cycle - 2.5) / 1.5;
                subX = (ex + er * 0.55) + p * W * 0.35;
                subAlpha = 1 - p * 0.5;
              }

              // Draw substrate
              ctx.globalAlpha = subAlpha;
              ctx.fillStyle = C.orange + 'bb';
              ctx.strokeStyle = C.orange;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(subX, cy, 20, 15, Math.PI * 0.1, 0, Math.PI * 2);
              ctx.fill(); ctx.stroke();
              ctx.fillStyle = C.white; ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              const label = cycle < 2.5 ? 'S' : 'P';
              ctx.fillText(label, subX, cy);
              ctx.globalAlpha = 1;

              // H-bond lines when bound
              if (cycle >= 1.4 && cycle < 2.6) {
                ctx.strokeStyle = C.yellow; ctx.lineWidth = 1.5;
                ctx.setLineDash([4, 3]);
                const bx = ex + er * 0.55;
                for (let i = -1; i <= 1; i++) {
                  ctx.beginPath();
                  ctx.moveTo(bx - 22, cy + i * 6);
                  ctx.lineTo(bx - 20 + 20, cy + i * 6);
                  ctx.stroke();
                }
                ctx.setLineDash([]);
              }

              // Phase label
              let phaseText = '';
              if (cycle < 1.5) phaseText = 'Substrate approaching active site...';
              else if (cycle < 2.5) phaseText = 'Enzyme-substrate complex formed!';
              else phaseText = 'Product released, enzyme unchanged!';

              ctx.fillStyle = C.text; ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
              ctx.fillText(phaseText, W/2, H - 14);

              // Title
              ctx.fillStyle = C.teal; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('Lock-and-Key Model of Enzyme Action', W/2, 12);

              // Legend
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
              ctx.fillStyle = C.blue; ctx.fillText('Enzyme', 14, H - 44);
              ctx.fillStyle = C.orange; ctx.fillText('Substrate(S) \u2192 Product(P)', 14, H - 28);
              ctx.fillStyle = C.yellow; ctx.fillText('Hydrogen bonds', 14, H - 12);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec05-ex01',
          question: 'Compared to inorganic catalysts, the most important characteristics of enzymes are:',
          type: 'mcq',
          options: ['Can speed up reaction rate', 'Remain unchanged after reaction', 'Have specificity, high efficiency, and mild conditions', 'Only work inside cells'],
          answer: 2,
          explanation: 'The main difference is that enzymes have high efficiency, specificity (each enzyme catalyzes a specific reaction), and work under mild conditions (room temperature and pressure).'
        },
        {
          id: 'ch16-sec05-ex02',
          question: 'Heavy metal ions (e.g., Hg\u00b2\u207a) are harmful to the body mainly because they can:',
          type: 'mcq',
          options: ['React with amino acids to destroy amino groups', 'Denature proteins, causing enzyme inactivation', 'React with glucose to consume energy', 'Destroy DNA base pairing'],
          answer: 1,
          explanation: 'Heavy metal ions bind to \u2013SH, \u2013NH\u2082 groups in proteins, destroying the spatial structure of proteins (enzymes), causing denaturation and inactivation.'
        },
        {
          id: 'ch16-sec05-ex03',
          question: 'Which statement about dietary fiber (cellulose) is INCORRECT?',
          type: 'mcq',
          options: ['Humans cannot digest cellulose', 'Cellulose promotes intestinal motility', 'The final hydrolysis product of cellulose is glucose', 'Cellulose is the main source of energy for humans'],
          answer: 3,
          explanation: 'Humans lack enzymes to break \u03b2-glycosidic bonds, so cellulose cannot be digested and thus cannot serve as an energy source. The other statements are correct.'
        },
        {
          id: 'ch16-sec05-ex04',
          question: 'Starch is ultimately hydrolyzed to ________ during human digestion. Write the complete hydrolysis equation.',
          type: 'short',
          answer: 'Glucose; (C\u2086H\u2081\u2080O\u2085)\u2099 + nH\u2082O \u2192(enzyme)\u2192 nC\u2086H\u2081\u2082O\u2086',
          explanation: 'Starch is gradually hydrolyzed by salivary amylase, pancreatic amylase, etc. The final product is glucose, which can be directly absorbed through the intestinal wall into the blood.'
        },
        {
          id: 'ch16-sec05-ex05',
          question: 'Which nutrient provides the most energy per gram?',
          type: 'mcq',
          options: ['Carbohydrates (~4 kJ/g)', 'Protein (~4 kJ/g)', 'Fat (~9 kJ/g)', 'Vitamins (do not provide energy)'],
          answer: 2,
          explanation: 'Fat is the most energy-dense nutrient, providing ~9 kJ per gram, far more than carbohydrates and protein (~4 kJ/g each). Vitamins do not provide energy.'
        }
      ]
    }

  ] // end sections
}); // end window.CHAPTERS.push
