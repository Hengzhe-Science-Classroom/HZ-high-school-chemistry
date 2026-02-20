window.CHAPTERS.push({
  id: 'ch09',
  number: 9,
  title: 'Chemical Equilibrium',
  subtitle: 'When Forward and Reverse Reactions Balance',
  sections: [

    // ─── Section 1: Reversible Reactions ───────────────────────────────────
    {
      id: 'ch09-sec01',
      title: 'Reversible Reactions',
      content: `
<h2>Reversible Reactions (可逆反应)</h2>

<p>Many chemical reactions can proceed in <strong>both directions</strong> simultaneously — forward and reverse. These are called <em>reversible reactions</em> (可逆反应).</p>

<div class="env-block concept">
<strong>Definition:</strong> A reversible reaction is one in which the products can react with each other to regenerate the original reactants under the same conditions. We write them with a double arrow: ⇌
</div>

<h3>Notation</h3>
<p>Instead of the single arrow <code>→</code> used for irreversible reactions, reversible reactions use the double half-arrow:</p>

<div class="env-block formula">
\\( \\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\)
</div>

<p>The top arrow represents the <strong>forward reaction</strong> (正反应); the bottom arrow represents the <strong>reverse reaction</strong> (逆反应).</p>

<h3>Classic Examples</h3>
<ul>
  <li><strong>Haber process:</strong> \\( \\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3 \\)</li>
  <li><strong>Esterification:</strong> \\( \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\)</li>
  <li><strong>Nitrogen dioxide:</strong> \\( 2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g) \\)</li>
  <li><strong>Water autoionization:</strong> \\( \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^- \\)</li>
</ul>

<div class="env-block warning">
<strong>Key point:</strong> In a reversible reaction, reactants are <em>never completely consumed</em>. At equilibrium, both reactants and products coexist.
</div>

<h3>What is Dynamic Equilibrium?</h3>
<p>At the start, only the forward reaction occurs (no products yet). As products accumulate, the reverse reaction begins. Over time:</p>
<ul>
  <li>The <strong>forward rate decreases</strong> (reactant concentrations fall).</li>
  <li>The <strong>reverse rate increases</strong> (product concentrations rise).</li>
  <li>Eventually: <strong>forward rate = reverse rate</strong>.</li>
</ul>
<p>This state is called <strong>dynamic equilibrium</strong> (动态平衡). Both reactions are still happening, just at equal rates. Concentrations remain constant, but molecules are constantly being converted in both directions.</p>

<h3>Irreversible vs. Reversible</h3>
<table>
<thead><tr><th>Feature</th><th>Irreversible</th><th>Reversible</th></tr></thead>
<tbody>
  <tr><td>Arrow</td><td>→</td><td>⇌</td></tr>
  <tr><td>Completion</td><td>Goes to completion</td><td>Never complete</td></tr>
  <tr><td>Final state</td><td>Only products</td><td>Mix of both</td></tr>
  <tr><td>Example</td><td>Burning wood</td><td>Haber process</td></tr>
</tbody>
</table>
      `,
      visualizations: [
        {
          id: 'ch09-viz01',
          title: 'Molecules Reaching Equilibrium',
          description: 'Watch as forward and reverse reaction rates balance, creating a dynamic equilibrium. Rate bars show both reactions proceeding simultaneously.',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;

            let maxMol = 100;
            let reactants = maxMol;
            let products = 0;
            let time = 0;
            let running = true;
            let history = [];

            function forwardRate() { return 0.04 * (reactants / maxMol); }
            function reverseRate() { return 0.015 * (products / maxMol); }

            function update() {
              const fwd = forwardRate() * maxMol * 0.5;
              const rev = reverseRate() * maxMol * 0.5;
              reactants = Math.max(0, Math.min(maxMol, reactants - fwd + rev));
              products = Math.max(0, Math.min(maxMol, products + fwd - rev));
              time++;
              history.push({ t: time, r: reactants, p: products, fr: forwardRate(), rr: reverseRate() });
              if (history.length > 200) history.shift();
            }

            function draw() {
              ctx.fillStyle = viz.colors.bg;
              ctx.fillRect(0, 0, W, H);

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Reactants (blue) and Products (orange) vs Time', W / 2, 20);

              const gx = 70, gy = 40, gw = W - 130, gh = H - 160;

              ctx.fillStyle = '#111130';
              ctx.fillRect(gx, gy, gw, gh);

              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh);
              ctx.stroke();

              ctx.fillStyle = viz.colors.text;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText('100', gx - 5, gy + 5);
              ctx.fillText('50', gx - 5, gy + gh / 2);
              ctx.fillText('0', gx - 5, gy + gh);
              ctx.textAlign = 'center';
              ctx.fillText('Concentration (%)', 20, gy + gh / 2);
              ctx.fillText('Time', gx + gw / 2, gy + gh + 15);

              if (history.length > 1) {
                const step = gw / 200;
                ctx.strokeStyle = viz.colors.blue;
                ctx.lineWidth = 2;
                ctx.beginPath();
                history.forEach((d, i) => {
                  const px = gx + i * step;
                  const py = gy + gh - (d.r / maxMol) * gh;
                  i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                });
                ctx.stroke();

                ctx.strokeStyle = viz.colors.orange;
                ctx.lineWidth = 2;
                ctx.beginPath();
                history.forEach((d, i) => {
                  const px = gx + i * step;
                  const py = gy + gh - (d.p / maxMol) * gh;
                  i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                });
                ctx.stroke();

                const last = history[history.length - 1];
                const diff = Math.abs(last.fr - last.rr);
                if (diff < 0.003 && time > 30) {
                  ctx.strokeStyle = viz.colors.green + '88';
                  ctx.setLineDash([6, 4]);
                  ctx.lineWidth = 1;
                  const eqY = gy + gh - (last.r / maxMol) * gh;
                  ctx.beginPath();
                  ctx.moveTo(gx, eqY); ctx.lineTo(gx + gw, eqY);
                  ctx.stroke();
                  ctx.setLineDash([]);
                  ctx.fillStyle = viz.colors.green;
                  ctx.font = '11px -apple-system,sans-serif';
                  ctx.textAlign = 'left';
                  ctx.fillText('Equilibrium!', gx + 5, eqY - 6);
                }
              }

              // Rate bars
              const barY = H - 105;
              ctx.fillStyle = viz.colors.white;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Reaction Rates', W / 2, barY - 15);

              const barW = 200;
              const fRate = forwardRate();
              const rRate = reverseRate();
              const maxRate = 0.05;

              ctx.fillStyle = '#1a2050';
              ctx.fillRect(W / 2 - barW - 10, barY, barW, 18);
              ctx.fillStyle = viz.colors.blue;
              ctx.fillRect(W / 2 - barW - 10, barY, (fRate / maxRate) * barW, 18);
              ctx.fillStyle = viz.colors.white;
              ctx.textAlign = 'right';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Forward \u2192', W / 2 - barW - 15, barY + 13);

              ctx.fillStyle = '#1a2050';
              ctx.fillRect(W / 2 + 10, barY, barW, 18);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillRect(W / 2 + 10, barY, (rRate / maxRate) * barW, 18);
              ctx.fillStyle = viz.colors.white;
              ctx.textAlign = 'left';
              ctx.fillText('\u2190 Reverse', W / 2 + 10 + barW + 5, barY + 13);

              ctx.textAlign = 'center';
              ctx.fillStyle = viz.colors.blue;
              ctx.fillText('Reactants: ' + reactants.toFixed(0) + '%', W / 4, H - 55);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('Products: ' + products.toFixed(0) + '%', 3 * W / 4, H - 55);

              // Legend
              ctx.fillStyle = viz.colors.blue;
              ctx.fillRect(gx, gy + gh + 25, 20, 4);
              ctx.fillStyle = viz.colors.white;
              ctx.textAlign = 'left';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Reactants', gx + 25, gy + gh + 29);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillRect(gx + 110, gy + gh + 25, 20, 4);
              ctx.fillStyle = viz.colors.white;
              ctx.fillText('Products', gx + 135, gy + gh + 29);
            }

            const interval = setInterval(() => {
              if (running) { update(); draw(); }
            }, 50);

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:12px;margin-top:8px;';
            container.appendChild(controls);

            VizEngine.createButton(controls, 'Reset', () => {
              reactants = maxMol; products = 0; time = 0; history = [];
            });
            VizEngine.createButton(controls, 'Pause / Resume', () => {
              running = !running;
            });

            draw();

            container._cleanup = () => { clearInterval(interval); };
          }
        }
      ],
      exercises: [
        {
          id: 'ch09-sec01-ex01',
          question: 'Which of the following uses the correct notation for a reversible reaction?',
          type: 'mcq',
          options: [
            'A) N₂ + 3H₂ → 2NH₃',
            'B) N₂ + 3H₂ ⇌ 2NH₃',
            'C) N₂ + 3H₂ ← 2NH₃',
            'D) N₂ + 3H₂ (irreversible arrow)'
          ],
          answer: 1,
          explanation: 'Reversible reactions use the double half-arrow ⇌, indicating both forward and reverse reactions occur simultaneously.'
        },
        {
          id: 'ch09-sec01-ex02',
          question: 'In a reversible reaction, when can we say that reactants are completely consumed?',
          type: 'mcq',
          options: [
            'A) When the reaction reaches equilibrium',
            'B) When the temperature is high enough',
            'C) Never — reactants always remain at equilibrium',
            'D) When the reaction is exothermic'
          ],
          answer: 2,
          explanation: 'In a reversible reaction, both reactants and products always coexist. Reactants are never completely consumed because the reverse reaction continuously regenerates them.'
        }
      ]
    },

    // ─── Section 2: Equilibrium State ──────────────────────────────────────
    {
      id: 'ch09-sec02',
      title: 'Chemical Equilibrium State',
      content: `
<h2>Chemical Equilibrium State (化学平衡状态)</h2>

<p>When a reversible reaction is placed in a closed container and allowed to proceed, eventually it reaches a state called <strong>chemical equilibrium</strong> (化学平衡).</p>

<h3>What is Chemical Equilibrium?</h3>
<div class="env-block concept">
<strong>Definition:</strong> Chemical equilibrium is reached when the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of all species remain constant over time.
<br><br>
\\( v_{\\text{forward}} = v_{\\text{reverse}} \\)
</div>

<h3>Four Key Characteristics of Equilibrium</h3>
<ol>
  <li><strong>Dynamic (动态):</strong> Both forward and reverse reactions are still occurring — this is a <em>dynamic equilibrium</em> (动态平衡).</li>
  <li><strong>Equal rates (等速):</strong> The forward rate equals the reverse rate: \\( v_f = v_r \\)</li>
  <li><strong>Constant concentrations (不变):</strong> Concentrations of all reactants and products remain unchanged.</li>
  <li><strong>Condition-dependent (条件依赖):</strong> Changing conditions (temperature, pressure, concentration) shifts the equilibrium.</li>
</ol>

<h3>How to Recognize Equilibrium</h3>
<p>A system is at equilibrium when:</p>
<ul>
  <li>Concentrations no longer change with time</li>
  <li>Color (if applicable) no longer changes (e.g., NO₂/N₂O₄ system — brown color stops changing)</li>
  <li>The rate of consumption of a reactant equals the rate of production of that same reactant</li>
</ul>

<div class="env-block warning">
<strong>Common Mistake:</strong> "Equal rates" means the rate of the <em>forward reaction</em> equals the rate of the <em>reverse reaction</em> — NOT that both rates are zero!
</div>

<h3>Example: SO₂ Oxidation</h3>
<div class="env-block formula">
\\( 2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) \\)
</div>
<p>Equilibrium indicators for this system:</p>
<ul>
  <li>✓ Rate of SO₂ consumption = rate of SO₂ production</li>
  <li>✓ The ratio [SO₂]:[O₂]:[SO₃] remains constant</li>
  <li>✗ Rate of SO₂ consumption = rate of O₂ consumption (different stoichiometry — this does NOT indicate equilibrium!)</li>
</ul>
      `,
      visualizations: [
        {
          id: 'ch09-viz02',
          title: 'Rate vs Time: Approaching Equilibrium',
          description: 'See how forward and reverse reaction rates change over time until they meet at equilibrium.',
          render(container) {
            container.innerHTML = '';
            const viz = new VizEngine(container, {
              width: 660, height: 340,
              originX: 60, originY: 300,
              scale: 40
            });

            const W = viz.width, H = viz.height;
            const ctx = viz.ctx;

            ctx.fillStyle = viz.colors.bg;
            ctx.fillRect(0, 0, W, H);

            const ox = 60, oy = 300;
            const aw = W - 80, ah = 260;

            ctx.strokeStyle = viz.colors.axis;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + aw, oy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - ah); ctx.stroke();

            ctx.fillStyle = viz.colors.text;
            ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Time \u2192', ox + aw / 2, oy + 24);
            ctx.save();
            ctx.translate(16, oy - ah / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText('Reaction Rate', 0, 0);
            ctx.restore();

            const eq = 0.35;
            const forwardStart = 0.92;
            const reverseStart = 0.05;

            ctx.lineWidth = 2.5;

            ctx.strokeStyle = viz.colors.blue;
            ctx.beginPath();
            for (let px = 0; px <= aw; px++) {
              const t = px / aw;
              const rate = eq + (forwardStart - eq) * Math.exp(-5 * t);
              const sy = oy - rate * ah;
              px === 0 ? ctx.moveTo(ox + px, sy) : ctx.lineTo(ox + px, sy);
            }
            ctx.stroke();

            ctx.strokeStyle = viz.colors.orange;
            ctx.beginPath();
            for (let px = 0; px <= aw; px++) {
              const t = px / aw;
              const rate = eq - (eq - reverseStart) * Math.exp(-5 * t);
              const sy = oy - rate * ah;
              px === 0 ? ctx.moveTo(ox + px, sy) : ctx.lineTo(ox + px, sy);
            }
            ctx.stroke();

            ctx.strokeStyle = viz.colors.green + 'aa';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([8, 5]);
            ctx.beginPath();
            ctx.moveTo(ox, oy - eq * ah);
            ctx.lineTo(ox + aw, oy - eq * ah);
            ctx.stroke();
            ctx.setLineDash([]);

            const eqX = ox + aw * 0.55;
            ctx.strokeStyle = viz.colors.green + '88';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(eqX, oy - eq * ah - 5); ctx.lineTo(eqX, oy); ctx.stroke();
            ctx.setLineDash([]);

            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillStyle = viz.colors.blue;
            ctx.fillText('v forward (正反应速率)', ox + 8, oy - forwardStart * ah + 4);
            ctx.fillStyle = viz.colors.orange;
            ctx.fillText('v reverse (逆反应速率)', ox + 8, oy - reverseStart * ah - 8);
            ctx.fillStyle = viz.colors.green;
            ctx.textAlign = 'right';
            ctx.fillText('v\u2091 = v\u1d63  (Equilibrium)', ox + aw - 6, oy - eq * ah - 8);

            ctx.fillStyle = viz.colors.text;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Equilibrium reached', eqX, oy + 14);
          }
        },
        {
          id: 'ch09-viz03',
          title: 'Concentration vs Time Graph',
          description: 'Reactant concentrations decrease, product concentrations increase, and both level off at equilibrium.',
          render(container) {
            container.innerHTML = '';
            const viz = new VizEngine(container, { width: 660, height: 340, originX: 60, originY: 300, scale: 40 });
            const W = viz.width, H = viz.height;
            const ctx = viz.ctx;

            ctx.fillStyle = viz.colors.bg;
            ctx.fillRect(0, 0, W, H);

            const ox = 60, oy = 300, aw = W - 90, ah = 260;

            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + aw, oy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - ah); ctx.stroke();

            ctx.fillStyle = viz.colors.text; ctx.font = '13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Time \u2192', ox + aw / 2, oy + 24);
            ctx.save();
            ctx.translate(16, oy - ah / 2); ctx.rotate(-Math.PI / 2);
            ctx.fillText('Concentration (mol/L)', 0, 0);
            ctx.restore();

            const reactantStart = 0.88, reactantEq = 0.38;
            const productStart = 0.05, productEq = 0.55;
            const eqT = 0.55;

            function reactantC(t) {
              if (t < eqT) return reactantStart - (reactantStart - reactantEq) * (1 - Math.exp(-6 * t / eqT));
              return reactantEq;
            }
            function productC(t) {
              if (t < eqT) return productStart + (productEq - productStart) * (1 - Math.exp(-6 * t / eqT));
              return productEq;
            }

            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let px = 0; px <= aw; px++) {
              const t = px / aw;
              const sy = oy - reactantC(t) * ah;
              px === 0 ? ctx.moveTo(ox + px, sy) : ctx.lineTo(ox + px, sy);
            }
            ctx.stroke();

            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let px = 0; px <= aw; px++) {
              const t = px / aw;
              const sy = oy - productC(t) * ah;
              px === 0 ? ctx.moveTo(ox + px, sy) : ctx.lineTo(ox + px, sy);
            }
            ctx.stroke();

            const eqX = ox + aw * eqT;
            ctx.strokeStyle = viz.colors.green + '88'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
            ctx.beginPath(); ctx.moveTo(eqX, oy); ctx.lineTo(eqX, oy - ah + 10); ctx.stroke();
            ctx.setLineDash([]);

            ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
            ctx.fillStyle = viz.colors.blue;
            ctx.fillText('[Reactant] decreasing', ox + 8, oy - reactantStart * ah - 10);
            ctx.fillStyle = viz.colors.orange;
            ctx.fillText('[Product] increasing', ox + 8, oy - productStart * ah + 16);
            ctx.fillStyle = viz.colors.green;
            ctx.textAlign = 'center';
            ctx.font = '11px sans-serif';
            ctx.fillText('Equilibrium', eqX, oy - ah + 6);
          }
        }
      ],
      exercises: [
        {
          id: 'ch09-sec02-ex01',
          question: 'At chemical equilibrium, which statement is TRUE?',
          type: 'mcq',
          options: [
            'A) Both forward and reverse reactions have stopped',
            'B) The concentrations of all species are equal',
            'C) The rate of forward reaction equals the rate of reverse reaction',
            'D) Only the forward reaction is occurring'
          ],
          answer: 2,
          explanation: 'At equilibrium, v(forward) = v(reverse). Both reactions continue to occur — it is a dynamic equilibrium. Concentrations remain constant but are not necessarily equal.'
        },
        {
          id: 'ch09-sec02-ex02',
          question: 'For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which criterion correctly identifies equilibrium?',
          type: 'mcq',
          options: [
            'A) Rate of SO₂ consumption = rate of O₂ consumption',
            'B) Rate of SO₂ consumption = rate of SO₃ production',
            'C) Rate of SO₂ consumption (forward) = rate of SO₂ production (reverse)',
            'D) Total moles of gas remain constant'
          ],
          answer: 2,
          explanation: 'Equilibrium is when the forward rate equals the reverse rate for the SAME species. Rate of SO₂ consumption (forward) = rate of SO₂ production (reverse) is the correct criterion.'
        },
        {
          id: 'ch09-sec02-ex03',
          question: 'A sealed container holds N₂O₄(g) ⇌ 2NO₂(g). The system is at equilibrium when:',
          type: 'mcq',
          options: [
            'A) The brown color of NO₂ disappears completely',
            'B) The brown color stops changing',
            'C) All N₂O₄ is converted to NO₂',
            'D) The pressure in the container reaches zero'
          ],
          answer: 1,
          explanation: 'The brown color of NO₂ stops changing when [NO₂] and [N₂O₄] are constant — this is equilibrium. The color never disappears because the reaction is reversible, so NO₂ always remains.'
        }
      ]
    },

    // ─── Section 3: Equilibrium Constant K ─────────────────────────────────
    {
      id: 'ch09-sec03',
      title: 'Equilibrium Constant K',
      content: `
<h2>Equilibrium Constant K (平衡常数)</h2>

<p>For any reversible reaction at equilibrium, there is a specific mathematical relationship between the concentrations of products and reactants — the <strong>equilibrium constant K</strong>.</p>

<h3>The K Expression</h3>
<p>For a general reaction:</p>
<div class="env-block formula">
\\( a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D} \\)
</div>
<p>The equilibrium constant is:</p>
<div class="env-block formula">
\\( K = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b} \\)
</div>
<p>where [X] denotes the equilibrium concentration of species X in mol/L, and the exponents are the stoichiometric coefficients.</p>

<div class="env-block concept">
<strong>Key Properties of K:</strong>
<ul>
  <li>K depends only on <strong>temperature</strong> — it is constant at a given temperature</li>
  <li>K does NOT depend on initial concentrations, pressure (directly), or catalysts</li>
  <li>Large K (≫1): equilibrium favors products</li>
  <li>Small K (≪1): equilibrium favors reactants</li>
  <li><strong>Pure solids and liquids are excluded</strong> from the K expression</li>
</ul>
</div>

<h3>Rules for Writing K</h3>
<ul>
  <li>If you <strong>reverse</strong> the reaction: \\(K_{\\text{new}} = 1/K\\)</li>
  <li>If you <strong>multiply</strong> all coefficients by \\(n\\): \\(K_{\\text{new}} = K^n\\)</li>
  <li>If you <strong>add</strong> two reactions: \\(K_{\\text{total}} = K_1 \\times K_2\\)</li>
</ul>

<h3>Example: Haber Process</h3>
<div class="env-block formula">
\\( K = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} \\)
</div>

<h3>Q vs K: Predicting Reaction Direction</h3>
<p>The <strong>reaction quotient Q</strong> uses the same expression as K but with current (non-equilibrium) concentrations:</p>
<ul>
  <li>If <strong>Q &lt; K</strong>: reaction proceeds forward (→) to reach equilibrium</li>
  <li>If <strong>Q = K</strong>: system is at equilibrium</li>
  <li>If <strong>Q &gt; K</strong>: reaction proceeds in reverse (←) to reach equilibrium</li>
</ul>
      `,
      visualizations: [
        {
          id: 'ch09-viz04',
          title: 'ICE Table & K Calculator',
          description: 'Enter initial concentrations and see the ICE table fill in, with equilibrium concentrations calculated numerically and shown as a bar chart.',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 420, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;

            let n2Init = 1.0;
            let h2Init = 3.0;
            let nh3Init = 0.0;
            const Kc = 112.5;

            function solveEquilibrium(n2, h2, nh3) {
              let x = 0;
              let dx = 0.001;
              const maxIter = 10000;
              for (let i = 0; i < maxIter; i++) {
                const r = n2 - x, h = h2 - 3 * x, a = nh3 + 2 * x;
                if (r <= 0.0001 || h <= 0.0001) break;
                const Q = (a * a) / (r * h * h * h);
                if (Math.abs(Q - Kc) < 0.01) break;
                if (Q < Kc) x += dx; else x -= dx * 0.5;
                dx *= 0.999;
              }
              return {
                n2: Math.max(0, n2 - x),
                h2: Math.max(0, h2 - 3 * x),
                nh3: Math.max(0, nh3 + 2 * x),
                x: x
              };
            }

            function draw() {
              ctx.fillStyle = viz.colors.bg;
              ctx.fillRect(0, 0, W, H);

              const eq = solveEquilibrium(n2Init, h2Init, nh3Init);
              const x = eq.x;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('N\u2082 + 3H\u2082 \u21cc 2NH\u2083  |  ICE Table', W / 2, 22);

              const cols = ['', 'N\u2082', '3H\u2082', '2NH\u2083'];
              const rows = ['Initial (M)', 'Change (M)', 'Equilibrium (M)'];
              const data = [
                [n2Init.toFixed(2), h2Init.toFixed(2), nh3Init.toFixed(2)],
                [('-' + x.toFixed(3)), ('-' + (3 * x).toFixed(3)), ('+' + (2 * x).toFixed(3))],
                [eq.n2.toFixed(3), eq.h2.toFixed(3), eq.nh3.toFixed(3)]
              ];
              const rowColors = [viz.colors.blue + '44', viz.colors.orange + '44', viz.colors.green + '44'];

              const tx = 50, ty = 45, cw = 155, rh = 42;
              ctx.font = '12px -apple-system,sans-serif';

              cols.forEach((c, ci) => {
                ctx.fillStyle = '#1a2050';
                ctx.fillRect(tx + ci * cw, ty, cw, rh);
                ctx.strokeStyle = viz.colors.axis;
                ctx.lineWidth = 1;
                ctx.strokeRect(tx + ci * cw, ty, cw, rh);
                ctx.fillStyle = viz.colors.teal;
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(c, tx + ci * cw + cw / 2, ty + rh / 2 + 4);
              });

              rows.forEach((r, ri) => {
                ctx.fillStyle = rowColors[ri];
                ctx.fillRect(tx, ty + (ri + 1) * rh, cw, rh);
                ctx.strokeStyle = viz.colors.axis;
                ctx.lineWidth = 1;
                ctx.strokeRect(tx, ty + (ri + 1) * rh, cw, rh);
                ctx.fillStyle = viz.colors.white;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(r, tx + cw / 2, ty + (ri + 1) * rh + rh / 2 + 4);

                data[ri].forEach((d, di) => {
                  ctx.fillStyle = '#0d1030';
                  ctx.fillRect(tx + (di + 1) * cw, ty + (ri + 1) * rh, cw, rh);
                  ctx.strokeStyle = viz.colors.axis;
                  ctx.strokeRect(tx + (di + 1) * cw, ty + (ri + 1) * rh, cw, rh);
                  const col = ri === 0 ? viz.colors.blue : ri === 1 ? viz.colors.orange : viz.colors.green;
                  ctx.fillStyle = col;
                  ctx.font = '12px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText(d, tx + (di + 1) * cw + cw / 2, ty + (ri + 1) * rh + rh / 2 + 4);
                });
              });

              const calcK = (eq.nh3 * eq.nh3) / (eq.n2 * eq.h2 * eq.h2 * eq.h2);
              ctx.fillStyle = viz.colors.white;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Calculated Kc = [NH\u2083]\u00b2 / ([N\u2082][H\u2082]\u00b3) = ' + calcK.toFixed(1), W / 2, ty + 5 * rh + 25);

              // Bar chart
              const barY = ty + 5 * rh + 50;
              const barH = H - barY - 30;
              const species = [
                { label: 'N\u2082', val: eq.n2, color: viz.colors.blue },
                { label: 'H\u2082', val: eq.h2, color: viz.colors.purple },
                { label: 'NH\u2083', val: eq.nh3, color: viz.colors.green }
              ];
              const maxVal = Math.max(n2Init, h2Init, nh3Init, 0.01);
              const bw = 60, gap = 40;
              const startX = W / 2 - (species.length * (bw + gap)) / 2 + gap / 2;

              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Equilibrium Concentrations', W / 2, barY - 8);

              species.forEach((s, i) => {
                const bx = startX + i * (bw + gap);
                const bh = Math.max(2, (s.val / maxVal) * barH);
                ctx.fillStyle = s.color + '33';
                ctx.fillRect(bx, barY, bw, barH);
                ctx.fillStyle = s.color;
                ctx.fillRect(bx, barY + barH - bh, bw, bh);
                ctx.fillStyle = viz.colors.white;
                ctx.textAlign = 'center';
                ctx.font = 'bold 12px -apple-system,sans-serif';
                ctx.fillText(s.label, bx + bw / 2, barY + barH + 14);
                ctx.font = '10px -apple-system,sans-serif';
                ctx.fillStyle = s.color;
                ctx.fillText(s.val.toFixed(3) + ' M', bx + bw / 2, barY + barH - bh - 5);
              });
            }

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-top:10px;';
            container.appendChild(controls);

            VizEngine.createSlider(controls, '[N\u2082]\u2080 (M)', 0.1, 3.0, n2Init, 0.1, v => { n2Init = v; draw(); });
            VizEngine.createSlider(controls, '[H\u2082]\u2080 (M)', 0.3, 6.0, h2Init, 0.1, v => { h2Init = v; draw(); });
            VizEngine.createSlider(controls, '[NH\u2083]\u2080 (M)', 0.0, 2.0, nh3Init, 0.1, v => { nh3Init = v; draw(); });

            draw();
          }
        },
        {
          id: 'ch09-viz05',
          title: 'Q vs K: Equilibrium Position Visualizer',
          description: 'Adjust concentrations on a log scale and see whether the system will shift forward or reverse.',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 360, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;

            const Kc = 2.5;
            let concA = 1.0;
            let concB = 0.5;

            function draw() {
              ctx.fillStyle = viz.colors.bg;
              ctx.fillRect(0, 0, W, H);

              const Q = concB / concA;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('A \u21cc B  (Kc = ' + Kc + ')', W / 2, 22);

              ctx.font = '15px -apple-system,sans-serif';
              ctx.fillStyle = viz.colors.yellow;
              ctx.fillText('Q = [B]/[A] = ' + concB.toFixed(2) + '/' + concA.toFixed(2) + ' = ' + Q.toFixed(3), W / 2, 50);
              ctx.fillStyle = viz.colors.teal;
              ctx.fillText('K = ' + Kc, W / 2, 72);

              let direction, col;
              if (Math.abs(Q - Kc) < 0.05) {
                direction = 'EQUILIBRIUM \u2014 no net reaction'; col = viz.colors.green;
              } else if (Q < Kc) {
                direction = 'Q < K: Reaction proceeds FORWARD \u2192'; col = viz.colors.blue;
              } else {
                direction = 'Q > K: Reaction proceeds REVERSE \u2190'; col = viz.colors.orange;
              }
              ctx.fillStyle = col;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.fillText(direction, W / 2, 100);

              // Log-scale bar
              const scaleX = 60, scaleY = 130, scaleW = W - 120, scaleH = 40;
              const logMin = -2, logMax = 2;

              const grad = ctx.createLinearGradient(scaleX, scaleY, scaleX + scaleW, scaleY);
              grad.addColorStop(0, viz.colors.orange + 'cc');
              grad.addColorStop(0.5, viz.colors.green + 'cc');
              grad.addColorStop(1, viz.colors.blue + 'cc');
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.roundRect(scaleX, scaleY, scaleW, scaleH, 6);
              ctx.fill();

              const logK = Math.log10(Kc);
              const kPosX = scaleX + ((logK - logMin) / (logMax - logMin)) * scaleW;
              ctx.fillStyle = viz.colors.white;
              ctx.fillRect(kPosX - 1.5, scaleY - 5, 3, scaleH + 10);
              ctx.fillStyle = viz.colors.teal;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('K=' + Kc, kPosX, scaleY - 10);

              const safeQ = Math.max(0.01, Math.min(99, Q));
              const logQ = Math.log10(safeQ);
              let qPosX = scaleX + ((logQ - logMin) / (logMax - logMin)) * scaleW;
              qPosX = Math.max(scaleX + 5, Math.min(scaleX + scaleW - 5, qPosX));

              ctx.fillStyle = viz.colors.yellow;
              ctx.beginPath();
              ctx.arc(qPosX, scaleY + scaleH / 2, 10, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#000';
              ctx.font = 'bold 10px -apple-system,sans-serif';
              ctx.fillText('Q', qPosX, scaleY + scaleH / 2 + 4);

              ctx.fillStyle = viz.colors.orange;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Reverse \u2190', scaleX + 4, scaleY + scaleH + 14);
              ctx.fillStyle = viz.colors.blue;
              ctx.textAlign = 'right';
              ctx.fillText('\u2192 Forward', scaleX + scaleW - 4, scaleY + scaleH + 14);

              // Concentration bars
              const barY = 210, barH = 100;
              const barSpecies = [
                { label: 'A (Reactant)', val: concA, color: viz.colors.blue },
                { label: 'B (Product)', val: concB, color: viz.colors.orange }
              ];
              const maxConc = 4.0;
              const bw = 80;
              const startX = W / 2 - (barSpecies.length * (bw + 60)) / 2 + 30;

              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Current Concentrations', W / 2, barY - 10);

              barSpecies.forEach((s, i) => {
                const bx = startX + i * (bw + 120);
                const bh = Math.max(2, (s.val / maxConc) * barH);
                ctx.fillStyle = '#111130';
                ctx.fillRect(bx, barY, bw, barH);
                ctx.fillStyle = s.color;
                ctx.fillRect(bx, barY + barH - bh, bw, bh);
                ctx.fillStyle = viz.colors.white;
                ctx.textAlign = 'center';
                ctx.font = '11px -apple-system,sans-serif';
                ctx.fillText(s.label, bx + bw / 2, barY + barH + 16);
                ctx.fillStyle = s.color;
                ctx.font = 'bold 12px -apple-system,sans-serif';
                ctx.fillText(s.val.toFixed(2) + ' M', bx + bw / 2, barY + barH - bh - 8);
              });

              const totalA = concA + concB;
              const eqA = totalA / (1 + Kc);
              const eqB = Kc * eqA;
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Equilibrium: [A]=' + eqA.toFixed(3) + 'M, [B]=' + eqB.toFixed(3) + 'M', W / 2, H - 10);
            }

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:24px;flex-wrap:wrap;margin-top:10px;';
            container.appendChild(controls);

            VizEngine.createSlider(controls, '[A] (M)', 0.1, 4.0, concA, 0.05, v => { concA = v; draw(); });
            VizEngine.createSlider(controls, '[B] (M)', 0.0, 4.0, concB, 0.05, v => { concB = v; draw(); });

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch09-sec03-ex01',
          question: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), write the correct K expression.',
          type: 'mcq',
          options: [
            'A) K = [NH₃]² / ([N₂][H₂]³)',
            'B) K = [N₂][H₂]³ / [NH₃]²',
            'C) K = [NH₃] / ([N₂][H₂])',
            'D) K = [NH₃]² / ([N₂]²[H₂]³)'
          ],
          answer: 0,
          explanation: 'K = [products]^(stoich coefficients) / [reactants]^(stoich coefficients) = [NH₃]² / ([N₂][H₂]³)'
        },
        {
          id: 'ch09-sec03-ex02',
          question: 'For H₂(g) + I₂(g) ⇌ 2HI(g) at equilibrium: [H₂] = 0.11 mol/L, [I₂] = 0.11 mol/L, [HI] = 0.78 mol/L. What is K?',
          type: 'mcq',
          options: [
            'A) K ≈ 50',
            'B) K ≈ 7',
            'C) K ≈ 0.02',
            'D) K ≈ 1'
          ],
          answer: 0,
          explanation: 'K = [HI]² / ([H₂][I₂]) = (0.78)² / (0.11 × 0.11) = 0.6084 / 0.0121 ≈ 50.3'
        },
        {
          id: 'ch09-sec03-ex03',
          question: 'For the reaction CaCO₃(s) ⇌ CaO(s) + CO₂(g), what is the correct K expression?',
          type: 'mcq',
          options: [
            'A) K = [CaO][CO₂] / [CaCO₃]',
            'B) K = [CO₂]',
            'C) K = 1 / [CO₂]',
            'D) K = [CaCO₃] / [CaO][CO₂]'
          ],
          answer: 1,
          explanation: 'Pure solids (CaCO₃ and CaO) are excluded from the K expression. Only the gaseous CO₂ appears: K = [CO₂].'
        },
        {
          id: 'ch09-sec03-ex04',
          question: 'If Q > K for a given reaction, what happens?',
          type: 'mcq',
          options: [
            'A) The reaction shifts forward to produce more products',
            'B) The reaction shifts in reverse to consume products',
            'C) The reaction is at equilibrium and does not shift',
            'D) K increases until it equals Q'
          ],
          answer: 1,
          explanation: 'When Q > K, there are too many products relative to the equilibrium position. The reaction shifts in reverse (←) to decrease product concentrations until Q = K.'
        }
      ]
    },

    // ─── Section 4: Conversion Rate ─────────────────────────────────────────
    {
      id: 'ch09-sec04',
      title: 'Conversion Rate',
      content: `
<h2>Conversion Rate (转化率)</h2>

<p>The <strong>conversion rate</strong> (转化率, α) tells us what fraction of a reactant has been consumed when equilibrium is reached.</p>

<div class="env-block formula">
\\( \\alpha = \\frac{\\text{moles consumed at equilibrium}}{\\text{initial moles}} \\times 100\\% \\)
</div>

<h3>How to Calculate Conversion Rate</h3>
<p>We use an <strong>ICE table</strong> (Initial-Change-Equilibrium) to organize the calculation:</p>

<table>
<thead><tr><th></th><th>N₂</th><th>3H₂</th><th>2NH₃</th></tr></thead>
<tbody>
  <tr><td><strong>I</strong>nitial (mol/L)</td><td>1.0</td><td>3.0</td><td>0</td></tr>
  <tr><td><strong>C</strong>hange (mol/L)</td><td>-x</td><td>-3x</td><td>+2x</td></tr>
  <tr><td><strong>E</strong>quilibrium (mol/L)</td><td>1.0 - x</td><td>3.0 - 3x</td><td>2x</td></tr>
</tbody>
</table>

<p>If [NH₃] at equilibrium = 0.4 mol/L, then 2x = 0.4, so x = 0.2.</p>
<div class="env-block formula">
\\( \\alpha(\\text{N}_2) = \\frac{x}{1.0} \\times 100\\% = \\frac{0.2}{1.0} \\times 100\\% = 20\\% \\)
</div>

<h3>Factors Affecting Conversion Rate</h3>
<ul>
  <li><strong>Temperature:</strong> Higher T increases α for endothermic reactions, decreases α for exothermic reactions</li>
  <li><strong>Pressure:</strong> Higher P increases α for reactions where moles of gas decrease</li>
  <li><strong>Excess of one reactant:</strong> Increases the conversion rate of the other reactant</li>
  <li><strong>Catalysts:</strong> Do NOT change equilibrium position or α (only speed up reaching equilibrium)</li>
</ul>

<h3>Worked Example</h3>
<div class="env-block problem">
<strong>Problem:</strong> For A(g) + B(g) ⇌ 2C(g), start with 1.0 mol/L each of A and B, no C. At equilibrium, [C] = 0.60 mol/L. Find: (a) K, (b) α(A).

<strong>Solution (ICE table):</strong>
<br>Change in C: +0.60, so change in A and B: each −0.30
<br>Equilibrium: [A] = 0.70, [B] = 0.70, [C] = 0.60
<br><br>
\\( K = \\frac{[C]^2}{[A][B]} = \\frac{(0.60)^2}{(0.70)(0.70)} = \\frac{0.36}{0.49} \\approx 0.73 \\)
<br><br>
\\( \\alpha(A) = \\frac{0.30}{1.0} \\times 100\\% = 30\\% \\)
</div>
      `,
      visualizations: [
        {
          id: 'ch09-viz06',
          title: 'ICE Table Calculator',
          description: 'Adjust initial concentrations and equilibrium product concentration to compute conversion rates automatically.',
          render(container) {
            container.innerHTML = '';
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:16px;font-family:-apple-system,sans-serif;color:#c9d1d9;';
            container.appendChild(wrap);

            const title = document.createElement('div');
            title.style.cssText = 'font-size:14px;margin-bottom:12px;color:#8b949e;';
            title.textContent = 'Reaction: A(g) + B(g) \u21cc 2C(g)';
            wrap.appendChild(title);

            const sliderArea = document.createElement('div');
            sliderArea.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-bottom:16px;';
            wrap.appendChild(sliderArea);

            let initA = 1.0, initB = 1.0, eqC = 0.6;

            const output = document.createElement('div');
            output.style.cssText = 'background:#0c0c20;border:1px solid #30363d;border-radius:8px;padding:16px;font-size:13px;line-height:2;';
            wrap.appendChild(output);

            function update() {
              const changeC = eqC;
              const changeAB = changeC / 2;
              const eqA = Math.max(0, initA - changeAB);
              const eqB = Math.max(0, initB - changeAB);
              const K = eqA > 0 && eqB > 0 ? (eqC * eqC) / (eqA * eqB) : Infinity;
              const alphaA = initA > 0 ? (changeAB / initA * 100) : 0;
              const alphaB = initB > 0 ? (changeAB / initB * 100) : 0;

              output.innerHTML = `
<table style="width:100%;border-collapse:collapse;">
<tr style="color:#8b949e;font-size:11px;"><td></td><td style="text-align:center;">A</td><td style="text-align:center;">B</td><td style="text-align:center;">2C</td></tr>
<tr><td style="color:#58a6ff;padding:4px 0;">Initial (mol/L)</td><td style="text-align:center;">${initA.toFixed(2)}</td><td style="text-align:center;">${initB.toFixed(2)}</td><td style="text-align:center;">0.00</td></tr>
<tr><td style="color:#f0883e;padding:4px 0;">Change (mol/L)</td><td style="text-align:center;">-${changeAB.toFixed(2)}</td><td style="text-align:center;">-${changeAB.toFixed(2)}</td><td style="text-align:center;">+${eqC.toFixed(2)}</td></tr>
<tr><td style="color:#3fb950;padding:4px 0;">Equilibrium (mol/L)</td><td style="text-align:center;">${eqA.toFixed(2)}</td><td style="text-align:center;">${eqB.toFixed(2)}</td><td style="text-align:center;">${eqC.toFixed(2)}</td></tr>
</table>
<div style="margin-top:12px;border-top:1px solid #30363d;padding-top:10px;">
<span style="color:#bc8cff;">K = [C]² / ([A][B]) = ${eqC.toFixed(2)}² / (${eqA.toFixed(2)} × ${eqB.toFixed(2)}) = <strong>${isFinite(K) ? K.toFixed(3) : '\u221e'}</strong></span><br>
<span style="color:#58a6ff;">α(A) = ${changeAB.toFixed(2)} / ${initA.toFixed(2)} × 100% = <strong>${alphaA.toFixed(1)}%</strong></span><br>
<span style="color:#f0883e;">α(B) = ${changeAB.toFixed(2)} / ${initB.toFixed(2)} × 100% = <strong>${alphaB.toFixed(1)}%</strong></span>
</div>`;
            }

            VizEngine.createSlider(sliderArea, '[A]\u2080 (mol/L)', 0.1, 3.0, initA, 0.1, v => { initA = v; update(); });
            VizEngine.createSlider(sliderArea, '[B]\u2080 (mol/L)', 0.1, 3.0, initB, 0.1, v => { initB = v; update(); });
            VizEngine.createSlider(sliderArea, '[C]eq (mol/L)', 0.0, 2.0, eqC, 0.05, v => { eqC = v; update(); });

            update();
          }
        }
      ],
      exercises: [
        {
          id: 'ch09-sec04-ex01',
          question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), if initially [N₂]=1.0 mol/L and [H₂]=3.0 mol/L and [NH₃] at equilibrium is 0.40 mol/L, what is α(N₂)?',
          type: 'mcq',
          options: [
            'A) 10%',
            'B) 20%',
            'C) 40%',
            'D) 30%'
          ],
          answer: 1,
          explanation: '[NH₃]=0.40 mol/L means 0.40 mol/L of NH₃ was produced. From stoichiometry, 0.20 mol/L of N₂ was consumed. α(N₂) = 0.20/1.0 × 100% = 20%'
        },
        {
          id: 'ch09-sec04-ex02',
          question: 'For A(g) + B(g) ⇌ 2C(g), start with [A]₀=1.0, [B]₀=1.0, [C]₀=0. At equilibrium [C]=0.80 mol/L. Find K.',
          type: 'mcq',
          options: [
            'A) K ≈ 4.0',
            'B) K ≈ 1.8',
            'C) K = 6.4',
            'D) K ≈ 16'
          ],
          answer: 1,
          explanation: 'ICE: change in A,B = -0.40; [A]eq = [B]eq = 0.60, [C]eq = 0.80. K = (0.80)² / (0.60 × 0.60) = 0.64 / 0.36 ≈ 1.78 ≈ 1.8.'
        },
        {
          id: 'ch09-sec04-ex03',
          question: 'Which factor does NOT change the equilibrium conversion rate of a reactant?',
          type: 'mcq',
          options: [
            'A) Increasing temperature for an exothermic reaction',
            'B) Adding a catalyst',
            'C) Increasing pressure for a reaction with fewer moles of gas on the product side',
            'D) Adding excess of the other reactant'
          ],
          answer: 1,
          explanation: 'A catalyst speeds up both forward and reverse reactions equally, so equilibrium position (and thus conversion rate) does not change. All other options shift the equilibrium and change α.'
        }
      ]
    },

    // ─── Section 5: Le Chatelier's Principle ───────────────────────────────
    {
      id: 'ch09-sec05',
      title: "Le Chatelier's Principle & Industrial Applications",
      content: `
<h2>Le Chatelier's Principle (勒夏特列原理)</h2>

<p>When an equilibrium system is subjected to a stress (disturbance), it responds by <strong>shifting in the direction that partially relieves the stress</strong>.</p>

<h3>Three Types of Stress</h3>

<h4>1. Concentration Change (浓度变化)</h4>
<table>
<thead><tr><th>Stress</th><th>Shift Direction</th><th>Reason</th></tr></thead>
<tbody>
  <tr><td>Add reactant</td><td>Forward →</td><td>Increases Q, reaction proceeds forward to restore Q=K</td></tr>
  <tr><td>Remove reactant</td><td>Reverse ←</td><td>Decreases Q, reaction reverses</td></tr>
  <tr><td>Add product</td><td>Reverse ←</td><td>Increases Q above K</td></tr>
  <tr><td>Remove product</td><td>Forward →</td><td>Decreases Q below K</td></tr>
</tbody>
</table>

<h4>2. Pressure Change (压强变化) — for gas reactions</h4>
<table>
<thead><tr><th>Stress</th><th>Shift Direction</th><th>Condition</th></tr></thead>
<tbody>
  <tr><td>Increase pressure (decrease volume)</td><td>Toward fewer moles of gas</td><td>Only if moles of gas differ</td></tr>
  <tr><td>Decrease pressure (increase volume)</td><td>Toward more moles of gas</td><td>Only if moles of gas differ</td></tr>
  <tr><td>Add inert gas at constant volume</td><td>No shift</td><td>Partial pressures unchanged</td></tr>
  <tr><td>Equal moles of gas on both sides</td><td>No shift</td><td>Pressure change has no effect</td></tr>
</tbody>
</table>

<h4>3. Temperature Change (温度变化)</h4>
<table>
<thead><tr><th>Reaction type</th><th>Increase T</th><th>Decrease T</th></tr></thead>
<tbody>
  <tr><td>Exothermic (ΔH &lt; 0)</td><td>Shift reverse ← (decreases K)</td><td>Shift forward → (increases K)</td></tr>
  <tr><td>Endothermic (ΔH &gt; 0)</td><td>Shift forward → (increases K)</td><td>Shift reverse ← (decreases K)</td></tr>
</tbody>
</table>

<div class="env-block warning">
<strong>Temperature is special:</strong> Unlike concentration and pressure changes, changing temperature actually changes the value of K itself.
</div>

<h2>Haber Process Application</h2>
<div class="env-block formula">
\\( \\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad \\Delta H = -92 \\text{ kJ/mol} \\)
</div>
<p>Industrial conditions: moderate temperature (400–500°C), high pressure (~200 atm), iron catalyst.</p>
<ul>
  <li><strong>High pressure:</strong> Shifts equilibrium toward NH₃ (4 mol gas → 2 mol gas)</li>
  <li><strong>Moderate temperature:</strong> Too low = slow rate, too high = reverse shift. Compromise ~450°C.</li>
  <li><strong>Catalyst:</strong> Speeds up reaction, no effect on equilibrium position</li>
  <li><strong>Removing NH₃:</strong> Drives reaction forward continuously</li>
</ul>

<p>This reaction is central to global food production — ammonia is the basis of nitrogen fertilizers that feed billions of people. It is estimated that half the nitrogen atoms in your body came through the Haber process!</p>
      `,
      visualizations: [
        {
          id: 'ch09-viz07',
          title: "Le Chatelier's Principle Interactive Demo",
          description: 'Apply stresses to the N₂ + 3H₂ ⇌ 2NH₃ system and watch concentration bars shift animated to a new equilibrium.',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;

            let state = { n2: 0.5, h2: 1.5, nh3: 0.6 };
            const Kc = Math.pow(state.nh3, 2) / (state.n2 * Math.pow(state.h2, 3));
            let message = 'System at equilibrium. Apply a stress below.';
            let msgColor = '#3fb950';
            let targetState = { n2: 0.5, h2: 1.5, nh3: 0.6 };
            let animating = false;
            let animSteps = 0;
            const maxSteps = 60;

            function calcEquilibrium(n2, h2, nh3) {
              let x = 0, dx = 0.001;
              for (let i = 0; i < 50000; i++) {
                const rn2 = n2 - x, rh2 = h2 - 3 * x, rnh3 = nh3 + 2 * x;
                if (rn2 <= 0.001 || rh2 <= 0.001) { x -= dx; dx *= 0.5; continue; }
                const Q = (rnh3 * rnh3) / (rn2 * rh2 * rh2 * rh2);
                if (Math.abs(Q - Kc) < 0.005) break;
                if (Q < Kc) x += dx; else x -= dx * 0.5;
                dx *= 0.9995;
              }
              return {
                n2: Math.max(0.001, n2 - x),
                h2: Math.max(0.001, h2 - 3 * x),
                nh3: Math.max(0.001, nh3 + 2 * x)
              };
            }

            function applyStress(stress) {
              if (stress === 'addN2') {
                state.n2 += 0.5;
                message = 'Added N\u2082 \u2192 Q < K \u2192 Shifts FORWARD \u2192 More NH\u2083 produced!';
                msgColor = viz.colors.blue;
              } else if (stress === 'addNH3') {
                state.nh3 += 0.4;
                message = 'Added NH\u2083 \u2192 Q > K \u2192 Shifts REVERSE \u2192 NH\u2083 decomposes!';
                msgColor = viz.colors.orange;
              } else if (stress === 'removeNH3') {
                state.nh3 = Math.max(0.05, state.nh3 - 0.3);
                message = 'Removed NH\u2083 \u2192 Q < K \u2192 Shifts FORWARD \u2192 More NH\u2083 produced!';
                msgColor = viz.colors.blue;
              } else if (stress === 'incrPress') {
                state.n2 *= 1.5; state.h2 *= 1.5; state.nh3 *= 1.5;
                message = 'Increased pressure \u2192 4 mol gas \u2192 2 mol gas \u2192 Shifts FORWARD!';
                msgColor = viz.colors.blue;
              }
              targetState = calcEquilibrium(state.n2, state.h2, state.nh3);
              animating = true; animSteps = 0;
            }

            const animInterval = setInterval(() => {
              if (animating) {
                animSteps++;
                state.n2 = state.n2 + (targetState.n2 - state.n2) * 0.1;
                state.h2 = state.h2 + (targetState.h2 - state.h2) * 0.1;
                state.nh3 = state.nh3 + (targetState.nh3 - state.nh3) * 0.1;
                if (animSteps >= maxSteps) {
                  animating = false;
                  state = { n2: targetState.n2, h2: targetState.h2, nh3: targetState.nh3 };
                  message = 'New equilibrium reached!';
                  msgColor = viz.colors.green;
                }
                draw();
              }
            }, 40);

            function draw() {
              ctx.fillStyle = viz.colors.bg;
              ctx.fillRect(0, 0, W, H);

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('N\u2082 + 3H\u2082 \u21cc 2NH\u2083  (Le Chatelier\'s Principle)', W / 2, 22);

              ctx.fillStyle = msgColor;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(message, W / 2, 45);

              const barSpecies = [
                { label: 'N\u2082', val: state.n2, color: viz.colors.blue },
                { label: 'H\u2082', val: state.h2, color: viz.colors.purple },
                { label: 'NH\u2083', val: state.nh3, color: viz.colors.green }
              ];
              const barY = 70, barH = 200;
              const maxVal = 3.5;
              const bw = 100, gap = 80;
              const startX = W / 2 - (barSpecies.length * (bw + gap)) / 2 + gap / 2;

              barSpecies.forEach((s, i) => {
                const bx = startX + i * (bw + gap);
                const bh = Math.max(2, (s.val / maxVal) * barH);
                ctx.fillStyle = '#111130';
                ctx.fillRect(bx, barY, bw, barH);
                ctx.fillStyle = s.color;
                ctx.fillRect(bx, barY + barH - bh, bw, bh);
                ctx.fillStyle = viz.colors.white;
                ctx.textAlign = 'center';
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.fillText(s.label, bx + bw / 2, barY + barH + 18);
                ctx.fillStyle = s.color;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.fillText(s.val.toFixed(3) + ' M', bx + bw / 2, barY + barH - bh - 8);
              });

              const Q = (state.nh3 * state.nh3) / (state.n2 * state.h2 * state.h2 * state.h2);
              ctx.fillStyle = viz.colors.white;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Q = ' + Q.toFixed(2) + '  |  K = ' + Kc.toFixed(2), W / 2, barY + barH + 42);

              const qRatio = Q / Kc;
              const col = Math.abs(qRatio - 1) < 0.05 ? viz.colors.green : qRatio < 1 ? viz.colors.blue : viz.colors.orange;
              ctx.fillStyle = col;
              const txt = Math.abs(qRatio - 1) < 0.05 ? 'Q \u2248 K: Equilibrium' : qRatio < 1 ? 'Q < K: Forward' : 'Q > K: Reverse';
              ctx.fillText(txt, W / 2, barY + barH + 65);
            }

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;';
            container.appendChild(controls);

            VizEngine.createButton(controls, 'Add N\u2082', () => { applyStress('addN2'); });
            VizEngine.createButton(controls, 'Add NH\u2083', () => { applyStress('addNH3'); });
            VizEngine.createButton(controls, 'Remove NH\u2083', () => { applyStress('removeNH3'); });
            VizEngine.createButton(controls, 'Increase Pressure', () => { applyStress('incrPress'); });
            VizEngine.createButton(controls, 'Reset', () => {
              state = { n2: 0.5, h2: 1.5, nh3: 0.6 };
              message = 'System at equilibrium. Apply a stress below.';
              msgColor = viz.colors.green;
              animating = false; draw();
            });

            draw();

            container._cleanup = () => { clearInterval(animInterval); };
          }
        },
        {
          id: 'ch09-viz08',
          title: 'Haber Process Conditions Optimizer',
          description: 'Adjust temperature and pressure to see how NH₃ yield changes, and find the industrial sweet spot.',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;

            let temp = 450;
            let pressure = 200;
            let useCatalyst = true;

            function calcYield(T, P) {
              const Tk = T + 273.15;
              const R = 8.314;
              const dH = -92000;
              const K298 = 6e5;
              const Kp = K298 * Math.exp(-dH / R * (1 / Tk - 1 / 298));

              let a = 0.5;
              for (let i = 0; i < 10000; i++) {
                const tot = 4 - 2 * a;
                const xNH3 = 2 * a / tot;
                const xN2 = (1 - a) / tot;
                const xH2 = 3 * (1 - a) / tot;
                if (xN2 < 1e-6 || xH2 < 1e-6) { a -= 0.001; break; }
                const Qp = (xNH3 * xNH3 * P * P) / (xN2 * P * Math.pow(xH2 * P, 3));
                const err = Qp - Kp;
                if (Math.abs(err) < Kp * 0.001) break;
                a = a - err / (Kp * 100 + Math.abs(err)) * 0.1;
                a = Math.max(0.001, Math.min(0.999, a));
              }
              const yieldFrac = 2 * a / (4 - 2 * a);
              return Math.max(0, Math.min(1, yieldFrac));
            }

            function rateScore(T, catalyst) {
              const Ea = catalyst ? 60000 : 140000;
              const R = 8.314;
              const rate = Math.exp(-Ea / (R * (T + 273.15)));
              const refRate = Math.exp(-Ea / (R * 723.15));
              return Math.min(1, rate / refRate);
            }

            function draw() {
              ctx.fillStyle = viz.colors.bg;
              ctx.fillRect(0, 0, W, H);

              const yieldFrac = calcYield(temp, pressure);
              const yield_pct = (yieldFrac * 100).toFixed(1);
              const rate = rateScore(temp, useCatalyst);

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Haber Process Optimizer: N\u2082 + 3H\u2082 \u21cc 2NH\u2083', W / 2, 22);

              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillStyle = viz.colors.text;
              ctx.fillText('T = ' + temp + '\u00b0C  |  P = ' + pressure + ' atm  |  Catalyst: ' + (useCatalyst ? 'Fe (ON)' : 'None (OFF)'), W / 2, 44);

              const meterY = 70, meterH = 30, meterW = 260;
              const labels = ['NH\u2083 Yield', 'Reaction Rate'];
              const vals = [yieldFrac, rate];
              const meterColors = [viz.colors.green, viz.colors.blue];
              const nums = [yield_pct + '%', (rate * 100).toFixed(0) + '%'];

              labels.forEach((lbl, i) => {
                const mx = W / 4 + i * W / 2 - meterW / 2;
                ctx.fillStyle = viz.colors.text;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(lbl, mx, meterY - 5);
                ctx.fillStyle = '#1a2050';
                ctx.fillRect(mx, meterY, meterW, meterH);
                ctx.fillStyle = meterColors[i];
                ctx.fillRect(mx, meterY, vals[i] * meterW, meterH);
                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(nums[i], mx + meterW / 2, meterY + meterH / 2 + 5);
              });

              // Heatmap
              const mapX = 60, mapY = 120, mapW = 280, mapH = 230;
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Yield Map (color = NH\u2083 %)', mapX + mapW / 2, mapY - 10);

              const tMin = 200, tMax = 700, pMin = 50, pMax = 500;
              const imgData = ctx.createImageData(mapW, mapH);

              for (let py = 0; py < mapH; py++) {
                for (let px = 0; px < mapW; px++) {
                  const t = tMin + (px / mapW) * (tMax - tMin);
                  const p = pMax - (py / mapH) * (pMax - pMin);
                  const y = calcYield(t, p);
                  const idx = (py * mapW + px) * 4;
                  const r2 = Math.round(Math.min(255, y * 2 * 255));
                  const g2 = Math.round(Math.min(255, y < 0.5 ? y * 2 * 180 : (1 - y) * 2 * 180));
                  const b2 = Math.round(Math.min(255, (1 - y) * 2 * 200));
                  imgData.data[idx] = r2;
                  imgData.data[idx + 1] = g2;
                  imgData.data[idx + 2] = b2;
                  imgData.data[idx + 3] = 220;
                }
              }
              ctx.putImageData(imgData, mapX, mapY);

              const markerX = mapX + ((temp - tMin) / (tMax - tMin)) * mapW;
              const markerY = mapY + ((pMax - pressure) / (pMax - pMin)) * mapH;
              ctx.strokeStyle = viz.colors.white;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(markerX, markerY, 8, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.white;
              ctx.font = '9px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('You', markerX, markerY - 12);

              const indX = mapX + ((450 - tMin) / (tMax - tMin)) * mapW;
              const indY = mapY + ((pMax - 200) / (pMax - pMin)) * mapH;
              ctx.strokeStyle = viz.colors.yellow;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(indX, indY, 8, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.yellow;
              ctx.fillText('Industry', indX, indY - 12);

              ctx.fillStyle = viz.colors.text;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Temperature (\u00b0C)', mapX + mapW / 2, mapY + mapH + 14);
              ctx.fillText(tMin + '', mapX, mapY + mapH + 14);
              ctx.fillText(tMax + '', mapX + mapW, mapY + mapH + 14);

              ctx.save();
              ctx.translate(mapX - 18, mapY + mapH / 2);
              ctx.rotate(-Math.PI / 2);
              ctx.textAlign = 'center';
              ctx.fillText('Pressure (atm)', 0, 0);
              ctx.restore();
              ctx.textAlign = 'left';
              ctx.fillText(pMax + '', mapX - 35, mapY + 5);
              ctx.fillText(pMin + '', mapX - 35, mapY + mapH - 5);

              // Right panel
              const panX = mapX + mapW + 40, panY = 120, panW = W - panX - 20;
              ctx.fillStyle = '#111130';
              ctx.fillRect(panX, panY, panW, 230);
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1;
              ctx.strokeRect(panX, panY, panW, 230);

              ctx.fillStyle = viz.colors.teal;
              ctx.font = 'bold 11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Analysis', panX + panW / 2, panY + 18);

              ctx.fillStyle = viz.colors.white;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'left';

              const lines = [
                'Yield: ' + yield_pct + '%',
                'Rate: ' + (rate * 100).toFixed(0) + '%',
                '',
                temp < 300 ? 'T too low: very slow' : temp > 600 ? 'T too high: low yield' : 'T optimal range',
                pressure < 100 ? 'P too low: low yield' : pressure > 400 ? 'P too high: costly' : 'P good range',
                useCatalyst ? 'Catalyst: speeds rate' : 'No catalyst: very slow',
                '',
                'Industrial: 450\u00b0C, 200 atm',
                '+ Fe catalyst'
              ];

              lines.forEach((line, i) => {
                if (line === '') return;
                ctx.fillStyle = i < 2 ? viz.colors.green : viz.colors.white;
                ctx.fillText(line, panX + 10, panY + 35 + i * 18);
              });
            }

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;';
            container.appendChild(controls);

            VizEngine.createSlider(controls, 'Temperature (\u00b0C)', 200, 700, temp, 10, v => { temp = v; draw(); });
            VizEngine.createSlider(controls, 'Pressure (atm)', 50, 500, pressure, 10, v => { pressure = v; draw(); });
            VizEngine.createButton(controls, 'Toggle Catalyst', () => { useCatalyst = !useCatalyst; draw(); });
            VizEngine.createButton(controls, 'Industrial Settings', () => { temp = 450; pressure = 200; useCatalyst = true; draw(); });

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch09-sec05-ex01',
          question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ/mol), increasing temperature will:',
          type: 'mcq',
          options: [
            'A) Shift equilibrium forward, increasing [NH₃]',
            'B) Shift equilibrium in reverse, decreasing [NH₃]',
            'C) Have no effect on equilibrium position',
            'D) Only speed up the forward reaction'
          ],
          answer: 1,
          explanation: 'The reaction is exothermic. By Le Chatelier\'s principle, increasing temperature stresses the system by adding heat. The equilibrium shifts in the endothermic (reverse) direction to absorb heat, decreasing [NH₃] and decreasing K.'
        },
        {
          id: 'ch09-sec05-ex02',
          question: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), increasing pressure will:',
          type: 'mcq',
          options: [
            'A) Shift the equilibrium toward SO₂ and O₂',
            'B) Shift the equilibrium toward SO₃',
            'C) Have no effect (equal moles of gas on both sides)',
            'D) Only affect the reverse rate'
          ],
          answer: 1,
          explanation: 'Reactant side: 2+1 = 3 moles of gas. Product side: 2 moles of gas. Increasing pressure shifts equilibrium toward the side with fewer moles of gas — toward SO₃ (products).'
        },
        {
          id: 'ch09-sec05-ex03',
          question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), if we increase pressure, the equilibrium will:',
          type: 'mcq',
          options: [
            'A) Shift toward HI (fewer moles)',
            'B) Shift toward H₂ + I₂ (more moles)',
            'C) Not shift — equal moles of gas on both sides',
            'D) Cannot be determined without knowing K'
          ],
          answer: 2,
          explanation: 'Both sides have 2 moles of gas: H₂ + I₂ (2 mol) ⇌ 2HI (2 mol). Pressure change has no effect on equilibrium position when moles of gas are equal on both sides.'
        },
        {
          id: 'ch09-sec05-ex04',
          question: 'Adding a catalyst to a system at equilibrium will:',
          type: 'mcq',
          options: [
            'A) Shift the equilibrium toward products',
            'B) Shift the equilibrium toward reactants',
            'C) Speed up reaching equilibrium but not change the equilibrium position',
            'D) Increase K at the given temperature'
          ],
          answer: 2,
          explanation: 'A catalyst lowers the activation energy equally for both forward and reverse reactions. It speeds up both directions by the same factor, so the equilibrium position (K value and concentrations at equilibrium) is unchanged.'
        },
        {
          id: 'ch09-sec05-ex05',
          question: 'In the Haber process, NH₃ is continuously removed from the reaction vessel. This causes:',
          type: 'mcq',
          options: [
            'A) The reaction to shift in reverse, producing more N₂ and H₂',
            'B) K to increase, favoring more NH₃ production',
            'C) The equilibrium to shift forward, producing more NH₃',
            'D) No change, since K depends only on temperature'
          ],
          answer: 2,
          explanation: 'Removing NH₃ decreases [NH₃], making Q < K. The equilibrium shifts forward to produce more NH₃ and restore Q = K. This is an industrial strategy to maximize yield.'
        },
        {
          id: 'ch09-sec05-ex06',
          question: 'In the Contact Process for H₂SO₄: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ/mol. Why is V₂O₅ catalyst used at 450°C rather than at 200°C?',
          type: 'mcq',
          options: [
            'A) At 200°C, K is too small to produce useful amounts of SO₃',
            'B) At 200°C, the reaction rate is too slow for industrial use; 450°C gives acceptable rate and yield',
            'C) At 200°C, the V₂O₅ catalyst is inactive',
            'D) At 450°C, the reaction is endothermic so high temperature is needed'
          ],
          answer: 1,
          explanation: 'At 200°C, K is higher (more SO₃ at equilibrium) but the reaction rate is too slow for industrial purposes. At 450°C, the rate is fast enough and yield is still acceptable (~98%). V₂O₅ catalyst allows this compromise to be effective.'
        }
      ]
    }
  ]
});
