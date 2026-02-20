window.CHAPTERS.push({
  id: 'ch11',
  number: 11,
  title: 'Metals & Their Compounds',
  subtitle: 'Sodium, Aluminum, and Iron in Action',
  sections: [

    // ── Section 1: Sodium & Its Compounds ──────────────────────────────────
    {
      id: 'ch11-sec01',
      title: 'Sodium & Its Compounds',
      content: `
<h2>钠及其化合物 — Sodium and Its Compounds</h2>

<p>Sodium (Na) is the quintessential alkali metal: soft, silvery, and intensely reactive with water and air. Understanding Na and its key compounds is a cornerstone of Chinese high-school chemistry.</p>

<div class="concept-block">
  <h3>Physical Properties of Na</h3>
  <ul>
    <li>Density: 0.97 g/cm³ — <strong>floats on water</strong></li>
    <li>Melting point: 97.8 °C — can be melted by the heat of its own water reaction</li>
    <li>Soft enough to cut with a knife; freshly cut surface is bright silver</li>
    <li>Stored under mineral oil (kerosene) to prevent reaction with O₂ and moisture</li>
  </ul>
</div>

<h3>Na Reacting with Water</h3>
<p>One of the most dramatic reactions in introductory chemistry:</p>

\\[ 2\\text{Na} + 2\\text{H}_2\\text{O} \\longrightarrow 2\\text{NaOH} + \\text{H}_2\\uparrow \\]

<p><strong>Observations (记住"浮游嘶鸣红"):</strong></p>
<ul>
  <li>浮 — Na <em>floats</em> (density &lt; water)</li>
  <li>游 — Na <em>moves</em> (scooted by H₂ bubbles)</li>
  <li>嘶 — Na <em>hisses</em> (rapid H₂ release)</li>
  <li>鸣 — Na <em>melts</em> into a shiny ball (heat generated melts it)</li>
  <li>红 — Phenolphthalein turns <em>pink/red</em> (NaOH is basic)</li>
</ul>

<h3>Na Reacting with O₂</h3>
<table class="data-table">
  <thead><tr><th>Condition</th><th>Product</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Excess O₂, room temp</td><td>Na₂O (白色)</td><td>\\(4\\text{Na} + \\text{O}_2 \\to 2\\text{Na}_2\\text{O}\\)</td></tr>
    <tr><td>Burning in O₂</td><td>Na₂O₂ (淡黄色)</td><td>\\(2\\text{Na} + \\text{O}_2 \\xrightarrow{\\Delta} \\text{Na}_2\\text{O}_2\\)</td></tr>
  </tbody>
</table>

<div class="concept-block">
  <h3>Na₂O₂ — Sodium Peroxide (重点!)</h3>
  <p>Na₂O₂ contains the peroxide ion O₂²⁻. It reacts vigorously with both water and CO₂, <strong>releasing O₂</strong> — making it useful in oxygen masks and submarines.</p>

  \\[ 2\\text{Na}_2\\text{O}_2 + 2\\text{H}_2\\text{O} \\longrightarrow 4\\text{NaOH} + \\text{O}_2\\uparrow \\]
  \\[ 2\\text{Na}_2\\text{O}_2 + 2\\text{CO}_2 \\longrightarrow 2\\text{Na}_2\\text{CO}_3 + \\text{O}_2\\uparrow \\]

  <p><strong>Electron-transfer analysis:</strong> In Na₂O₂, oxygen has oxidation state −1. When it reacts with water, one O is oxidized to 0 (in O₂) and one is reduced to −2 (in OH⁻). It is a <em>disproportionation reaction</em>.</p>
</div>

<h3>NaOH — Caustic Soda (烧碱)</h3>
<ul>
  <li>Strong base, highly corrosive — handle with care!</li>
  <li>Reacts with acids: \\(\\text{NaOH} + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O}\\)</li>
  <li>Reacts with acid oxides: \\(2\\text{NaOH} + \\text{CO}_2 \\to \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O}\\)</li>
  <li>Reacts with amphoteric Al₂O₃: \\(2\\text{NaOH} + \\text{Al}_2\\text{O}_3 \\to 2\\text{NaAlO}_2 + \\text{H}_2\\text{O}\\)</li>
</ul>

<h3>Na₂CO₃ vs NaHCO₃</h3>
<table class="data-table">
  <thead><tr><th>Property</th><th>Na₂CO₃ (纯碱/苏打)</th><th>NaHCO₃ (小苏打)</th></tr></thead>
  <tbody>
    <tr><td>Solubility</td><td>More soluble</td><td>Less soluble</td></tr>
    <tr><td>Alkalinity</td><td>Stronger (CO₃²⁻)</td><td>Weaker (HCO₃⁻)</td></tr>
    <tr><td>Thermal stability</td><td>Stable to heat</td><td>Decomposes: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂</td></tr>
    <tr><td>Reaction with HCl</td><td>Slow bubble if dilute</td><td>Immediate bubbling</td></tr>
    <tr><td>Everyday use</td><td>Glass, soap making</td><td>Baking powder</td></tr>
  </tbody>
</table>

<p><strong>Interconversions:</strong></p>
\\[ \\text{Na}_2\\text{CO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O} \\longrightarrow 2\\text{NaHCO}_3 \\]
\\[ 2\\text{NaHCO}_3 \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow \\]
`,
      visualizations: [
        {
          id: 'viz-na-water',
          title: 'Na + Water Reaction Animation',
          setup(container) {
            const viz = new VizEngine(container, { width: 700, height: 380, scale: 35, originX: 350, originY: 190 });
            let t = 0;
            let running = true;

            VizEngine.createButton(container, 'Restart', () => { t = 0; });

            viz.animate((ts) => {
              t = (t + 0.018) % (Math.PI * 2);
              const ctx = viz.ctx;
              viz.clear();

              // Water surface
              const waterY = 200;
              ctx.fillStyle = '#1a3a6b';
              ctx.fillRect(60, waterY, 580, 160);
              ctx.fillStyle = '#2255aa55';
              ctx.fillRect(60, waterY, 580, 10);

              // Water ripple waves
              ctx.strokeStyle = '#58a6ff44';
              ctx.lineWidth = 1;
              for (let ri = 0; ri < 4; ri++) {
                const phase = t * 2 + ri * 1.1;
                const amplitude = 4 * Math.sin(phase) * (1 - ri * 0.2);
                ctx.beginPath();
                for (let wx = 60; wx <= 640; wx += 5) {
                  const wy = waterY + amplitude * Math.sin((wx - 200) * 0.04 + phase);
                  wx === 60 ? ctx.moveTo(wx, wy) : ctx.lineTo(wx, wy);
                }
                ctx.stroke();
              }

              // Sodium piece position (moves horizontally)
              const naX = 200 + Math.sin(t * 1.2) * 120;
              const naY = waterY - 8 + Math.sin(t * 2.4) * 4;

              // Na piece shape (irregular polygon for realism)
              ctx.fillStyle = '#c0c0e0';
              ctx.strokeStyle = '#8888bb';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(naX - 18, naY - 8);
              ctx.lineTo(naX + 14, naY - 10);
              ctx.lineTo(naX + 20, naY + 6);
              ctx.lineTo(naX - 10, naY + 10);
              ctx.closePath();
              ctx.fill(); ctx.stroke();

              // Na label
              ctx.fillStyle = '#f0f6fc';
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('Na', naX, naY);

              // Bubbles (H₂ gas)
              for (let bi = 0; bi < 12; bi++) {
                const bPhase = (t * 2.5 + bi * 0.52) % (Math.PI * 2);
                const bProgress = bPhase / (Math.PI * 2);
                const bx = naX + (bi % 3 - 1) * 12 + Math.sin(bPhase * 3) * 5;
                const by = waterY - bProgress * 90 - 5;
                if (by > 60) {
                  const alpha = 1 - bProgress * 0.7;
                  ctx.strokeStyle = `rgba(88,166,255,${alpha})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.arc(bx, by, 3 + bProgress * 2, 0, Math.PI * 2);
                  ctx.stroke();
                }
              }

              // NaOH indicator (pink color spreading in water)
              const pinkAlpha = Math.min(0.3, t * 0.05);
              ctx.fillStyle = `rgba(248,113,120,${pinkAlpha})`;
              ctx.fillRect(60, waterY + 10, 580, 150);

              // Labels
              ctx.fillStyle = '#f0f6fc';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('H₂ bubbles rising', 460, 160);
              ctx.fillText('NaOH solution (turns pink)', 80, 290);
              ctx.fillText('Na slides on surface', 120, 165);

              // Reaction equation overlay
              ctx.fillStyle = '#d29922';
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('2Na + 2H\u2082O \u2192 2NaOH + H\u2082\u2191', 350, 30);

              // Temperature indicator
              const temp = 25 + Math.sin(t) * 15 + t * 8;
              const displayTemp = Math.min(80, Math.round(temp));
              ctx.fillStyle = '#f85149';
              ctx.fillRect(620, 340 - displayTemp, 16, displayTemp);
              ctx.strokeStyle = '#f85149';
              ctx.lineWidth = 1;
              ctx.strokeRect(620, 240, 16, 100);
              ctx.fillStyle = '#8b949e';
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(displayTemp + '\u00b0C', 628, 230);
            });
          }
        }
      ],
      exercises: [
        {
          question: 'Sodium is stored under kerosene (mineral oil). Which of the following best explains why?',
          type: 'multiple-choice',
          choices: [
            'Kerosene makes Na easier to cut',
            'Kerosene prevents Na from reacting with air (O₂) and moisture',
            'Kerosene improves Na electrical conductivity',
            'Kerosene is cheaper than water'
          ],
          answer: 1,
          explanation: 'Na reacts vigorously with O₂ and H₂O. Kerosene is a non-polar liquid that neither reacts with Na nor lets air or moisture through, making it ideal for storage.'
        },
        {
          question: 'When sodium burns in excess oxygen, the product is Na₂O₂. What is the oxidation state of oxygen in Na₂O₂?',
          type: 'multiple-choice',
          choices: ['-2', '-1', '0', '+1'],
          answer: 1,
          explanation: 'In Na₂O₂, Na is +1 (×2 = +2 total). For the compound to be neutral, the two O atoms share −2 total, giving each O an oxidation state of −1. This is the peroxide state.'
        },
        {
          question: 'Which reagent can distinguish Na₂CO₃ from NaHCO₃ most effectively?',
          type: 'multiple-choice',
          choices: [
            'NaOH solution',
            'Dilute HCl — observe rate of bubbling',
            'Litmus paper',
            'NaCl solution'
          ],
          answer: 1,
          explanation: 'NaHCO₃ reacts with HCl immediately with vigorous bubbling. Na₂CO₃ reacts more slowly with dilute HCl (producing NaHCO₃ first). The different rates of CO₂ release distinguish them clearly.'
        },
        {
          question: 'Sodium peroxide (Na\u2082O\u2082) reacts with water. Which pair of products is formed?',
          type: 'multiple-choice',
          choices: ['Na\u2082O and H\u2082O\u2082', 'NaOH and O\u2082', 'NaOH and H\u2082', 'Na\u2082CO\u2083 and O\u2082'],
          answer: 1,
          explanation: '2Na\u2082O\u2082 + 2H\u2082O \u2192 4NaOH + O\u2082\u2191. Sodium hydroxide and oxygen gas are the products. The oxygen comes from disproportionation of the peroxide ion O\u2082\u00B2\u207B.'
        },
        {
          question: 'Excess CO\u2082 is bubbled into NaOH solution. What is the final product?',
          type: 'multiple-choice',
          choices: ['Na\u2082CO\u2083', 'NaHCO\u2083', 'NaOH remains unchanged', 'Na\u2082O'],
          answer: 1,
          explanation: 'With excess CO\u2082, NaOH first forms Na\u2082CO\u2083 (NaOH + CO\u2082 \u2192 Na\u2082CO\u2083 + H\u2082O), then further reacts to NaHCO\u2083 (Na\u2082CO\u2083 + CO\u2082 + H\u2082O \u2192 2NaHCO\u2083). Excess CO\u2082 drives the reaction to NaHCO\u2083.'
        }
      ]
    },

    // ── Section 2: Aluminum & Its Compounds ───────────────────────────────
    {
      id: 'ch11-sec02',
      title: 'Aluminum & Its Compounds',
      content: `
<h2>铝及其化合物 — Aluminum and Its Compounds</h2>

<p>Aluminum is the most abundant metal in Earth's crust and a marvel of modern materials science. Its key chemical trait is <strong>amphotericity (两性)</strong> — it can react with both acids <em>and</em> bases.</p>

<div class="concept-block">
  <h3>Physical Properties of Al</h3>
  <ul>
    <li>Density: 2.7 g/cm³ — lightweight structural metal</li>
    <li>Excellent conductor of heat and electricity</li>
    <li>Forms a thin, dense Al₂O₃ oxide layer that prevents further oxidation (passivation)</li>
    <li>Found in Earth's crust mainly as Al₂O₃ · 2SiO₂ · 2H₂O (kaolin) and Al₂O₃ (corundum)</li>
  </ul>
</div>

<h3>Al Reacting with Acids and Bases</h3>
<p>Unlike most metals that only dissolve in acid, Al dissolves in both:</p>

\\[ 2\\text{Al} + 6\\text{HCl} \\longrightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\uparrow \\quad (\\text{acid}) \\]
\\[ 2\\text{Al} + 2\\text{NaOH} + 2\\text{H}_2\\text{O} \\longrightarrow 2\\text{NaAlO}_2 + 3\\text{H}_2\\uparrow \\quad (\\text{base}) \\]

<div class="highlight-box warning">
  <strong>Passivation (钝化):</strong> Al does NOT dissolve in concentrated H₂SO₄ or concentrated HNO₃ at room temperature — it forms an inert oxide layer. This is why Al tanks can store concentrated HNO₃!
</div>

<h3>Al₂O₃ — Amphoteric Oxide (两性氧化物)</h3>
<p>Al₂O₃ reacts with both acids and bases:</p>

\\[ \\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\longrightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O} \\quad (\\text{acid}) \\]
\\[ \\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\longrightarrow 2\\text{NaAlO}_2 + \\text{H}_2\\text{O} \\quad (\\text{base}) \\]

<p>Natural Al₂O₃ crystals include ruby (红宝石, Cr³⁺ impurity → red) and sapphire (蓝宝石, Fe²⁺/Ti⁴⁺ → blue).</p>

<h3>Al(OH)₃ — Amphoteric Hydroxide (两性氢氧化物)</h3>
<p>Al(OH)₃ is a white, gelatinous precipitate that dissolves in both acids and bases:</p>

\\[ \\text{Al(OH)}_3 + 3\\text{HCl} \\longrightarrow \\text{AlCl}_3 + 3\\text{H}_2\\text{O} \\quad (\\text{acts as base}) \\]
\\[ \\text{Al(OH)}_3 + \\text{NaOH} \\longrightarrow \\text{NaAlO}_2 + 2\\text{H}_2\\text{O} \\quad (\\text{acts as acid}) \\]

<div class="concept-block">
  <h3>Preparing Al(OH)₃ — Careful with Reagents!</h3>
  <p>To get Al(OH)₃ as a precipitate, use <strong>excess AlCl₃ + limited NaOH</strong>, or use NH₃·H₂O (ammonia water) — which is not strong enough to dissolve Al(OH)₃:</p>
  \\[ \\text{AlCl}_3 + 3\\text{NH}_3\\cdot\\text{H}_2\\text{O} \\longrightarrow \\text{Al(OH)}_3 \\downarrow + 3\\text{NH}_4\\text{Cl} \\]
  <p><strong>Do NOT use excess NaOH</strong> — Al(OH)₃ will dissolve in excess NaOH to form NaAlO₂.</p>
</div>

<h3>AlCl₃ + NaOH: A Classic Titration Story</h3>
<p>Adding NaOH dropwise to AlCl₃ solution — what happens?</p>
<ol>
  <li>Initially: \\(\\text{Al}^{3+} + 3\\text{OH}^- \\to \\text{Al(OH)}_3\\downarrow\\) (white precipitate forms)</li>
  <li>With excess NaOH: \\(\\text{Al(OH)}_3 + \\text{OH}^- \\to \\text{AlO}_2^- + 2\\text{H}_2\\text{O}\\) (precipitate dissolves)</li>
</ol>
<p>Conversely: adding AlCl₃ to NaOH — the first AlCl₃ dissolves immediately (excess NaOH), precipitate only forms later.</p>
`,
      visualizations: [
        {
          id: 'viz-al-amphoteric',
          title: 'Aluminum Amphoteric Demo',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 400, scale: 30, originX: 360, originY: 200 });
            let state = 'neutral'; // 'neutral', 'acid', 'base'
            let animT = 0;
            let particlesActive = false;

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText = 'display:flex;gap:8px;margin:6px 0;flex-wrap:wrap;';
            container.appendChild(btnDiv);
            VizEngine.createButton(btnDiv, 'Add HCl (acid)', () => { state = 'acid'; animT = 0; particlesActive = true; });
            VizEngine.createButton(btnDiv, 'Add NaOH (base)', () => { state = 'base'; animT = 0; particlesActive = true; });
            VizEngine.createButton(btnDiv, 'Reset', () => { state = 'neutral'; animT = 0; particlesActive = false; });

            viz.animate((ts) => {
              if (particlesActive) animT = Math.min(animT + 0.02, 1);
              viz.clear();

              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              // Draw two beakers
              const beakers = [
                { cx: 180, label: 'Acid Side (HCl)', rxLabel: 'Al(OH)\u2083 + 3HCl \u2192 AlCl\u2083 + 3H\u2082O' },
                { cx: 540, label: 'Base Side (NaOH)', rxLabel: 'Al(OH)\u2083 + NaOH \u2192 NaAlO\u2082 + 2H\u2082O' }
              ];

              beakers.forEach((b, idx) => {
                const isActive = (idx === 0 && state === 'acid') || (idx === 1 && state === 'base');
                const isNeutral = state === 'neutral';

                // Beaker outline
                ctx.strokeStyle = '#4a4a7a';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(b.cx - 70, 120);
                ctx.lineTo(b.cx - 70, 320);
                ctx.lineTo(b.cx + 70, 320);
                ctx.lineTo(b.cx + 70, 120);
                ctx.stroke();

                // Solution color
                let solutionColor;
                if (isNeutral) solutionColor = 'rgba(180,180,255,0.25)';
                else if (isActive) solutionColor = idx === 0 ? `rgba(88,166,255,${0.15 + animT * 0.3})` : `rgba(248,113,120,${0.15 + animT * 0.3})`;
                else solutionColor = 'rgba(80,80,100,0.2)';

                ctx.fillStyle = solutionColor;
                ctx.fillRect(b.cx - 68, 140, 136, 178);

                // Al(OH)₃ precipitate (white particles)
                const precipFade = isActive ? Math.max(0, 1 - animT * 1.5) : 1;
                if (precipFade > 0.05) {
                  ctx.fillStyle = `rgba(200,200,230,${precipFade * 0.8})`;
                  for (let pi = 0; pi < 20; pi++) {
                    const px = b.cx - 50 + (pi % 5) * 22 + Math.sin(pi) * 5;
                    const py = 240 + Math.floor(pi / 5) * 18 + Math.cos(pi * 1.3) * 3;
                    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
                  }
                  ctx.fillStyle = `rgba(220,220,240,${precipFade * 0.7})`;
                  ctx.font = '11px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText('Al(OH)\u2083 precipitate', b.cx, 310);
                }

                // Dissolved state
                if (isActive && animT > 0.4) {
                  const dissolveAlpha = (animT - 0.4) / 0.6;
                  ctx.fillStyle = idx === 0
                    ? `rgba(88,166,255,${dissolveAlpha * 0.9})`
                    : `rgba(63,185,160,${dissolveAlpha * 0.9})`;
                  ctx.font = 'bold 13px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText(idx === 0 ? 'AlCl\u2083 dissolved' : 'NaAlO\u2082 dissolved', b.cx, 270);
                }

                // Label
                ctx.fillStyle = '#8b949e';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(b.label, b.cx, 108);

                // Reaction label
                if (isActive && animT > 0.2) {
                  ctx.fillStyle = '#d29922';
                  ctx.font = '11px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText(b.rxLabel, b.cx, 360);
                }
              });

              // Center label
              ctx.fillStyle = '#bc8cff';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Al(OH)\u2083 is AMPHOTERIC \u2014 dissolves in both!', W / 2, 60);

              ctx.fillStyle = '#4a4a7a';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('(两性氢氧化物)', W / 2, 80);
            });
          }
        }
      ],
      exercises: [
        {
          question: 'Al(OH)₃ dissolves in both HCl and NaOH. What term describes this property?',
          type: 'multiple-choice',
          choices: ['Oxidizing', 'Amphoteric (两性)', 'Reducing', 'Catalytic'],
          answer: 1,
          explanation: 'Amphoteric (两性) means a substance can act as both an acid and a base. Al(OH)₃ acts as a base with HCl and as an acid with NaOH.'
        },
        {
          question: 'To prepare Al(OH)₃ precipitate from AlCl₃ solution, which reagent should you add?',
          type: 'multiple-choice',
          choices: [
            'Excess NaOH',
            'Ammonia water (NH₃·H₂O)',
            'Concentrated H₂SO₄',
            'NaCl solution'
          ],
          answer: 1,
          explanation: 'NH₃·H₂O is a weak base — strong enough to precipitate Al(OH)₃ but NOT strong enough to dissolve it. Excess NaOH would dissolve the precipitate, giving NaAlO₂.'
        },
        {
          question: 'Why is Al used for storing concentrated HNO₃?',
          type: 'multiple-choice',
          choices: [
            'Al is cheaper than steel',
            'Al reacts with HNO₃ to form a protective nitrate coating',
            'Concentrated HNO₃ passivates Al, forming an inert Al₂O₃ layer',
            'Al is soluble in dilute HNO₃ but not in concentrated HNO₃'
          ],
          answer: 2,
          explanation: 'Concentrated HNO₃ passivates Al by forming a dense, inert Al₂O₃ film on its surface that blocks further reaction. This is called passivation (钝化). The same occurs with concentrated H₂SO₄.'
        }
      ]
    },

    // ── Section 3: Iron & Its Compounds ───────────────────────────────────
    {
      id: 'ch11-sec03',
      title: 'Iron & Its Compounds',
      content: `
<h2>铁及其化合物 — Iron and Its Compounds</h2>

<p>Iron is the most used structural metal on Earth. Its chemistry is dominated by two oxidation states: <strong>Fe²⁺</strong> (ferrous, 亚铁) and <strong>Fe³⁺</strong> (ferric, 铁). Knowing how to interconvert and identify them is essential.</p>

<div class="concept-block">
  <h3>Fe²⁺ vs Fe³⁺: Quick Reference</h3>
  <table class="data-table">
    <thead><tr><th>Property</th><th>Fe²⁺ (亚铁离子)</th><th>Fe³⁺ (铁离子)</th></tr></thead>
    <tbody>
      <tr><td>Solution color</td><td>Light green (浅绿色)</td><td>Yellow-brown (棕黄色)</td></tr>
      <tr><td>Precipitate with NaOH</td><td>Fe(OH)₂ — white</td><td>Fe(OH)₃ — red-brown</td></tr>
      <tr><td>Test with KSCN</td><td>No color change</td><td>Blood red (血红色)</td></tr>
      <tr><td>Oxidizing/Reducing</td><td>Reducing agent (还原性)</td><td>Oxidizing agent (氧化性)</td></tr>
    </tbody>
  </table>
</div>

<h3>Fe²⁺ ⇌ Fe³⁺ Interconversions</h3>
<p><strong>Fe → Fe²⁺ (oxidation by dilute acid, not oxidizing):</strong></p>
\\[ \\text{Fe} + 2\\text{HCl} \\longrightarrow \\text{FeCl}_2 + \\text{H}_2\\uparrow \\]

<p><strong>Fe → Fe³⁺ (oxidation by Cl₂ or dilute HNO₃):</strong></p>
\\[ 2\\text{Fe} + 3\\text{Cl}_2 \\longrightarrow 2\\text{FeCl}_3 \\]

<p><strong>Fe reduces Fe³⁺ back to Fe²⁺:</strong></p>
\\[ \\text{Fe} + 2\\text{Fe}^{3+} \\longrightarrow 3\\text{Fe}^{2+} \\]
<p>(This is why excess Fe powder added to FeCl₃ solution gives FeCl₂!)</p>

<p><strong>Cu reduces Fe³⁺ to Fe²⁺:</strong></p>
\\[ \\text{Cu} + 2\\text{Fe}^{3+} \\longrightarrow \\text{Cu}^{2+} + 2\\text{Fe}^{2+} \\]

<h3>Iron Hydroxides</h3>
<p>Adding NaOH to iron salts:</p>
\\[ \\text{FeCl}_2 + 2\\text{NaOH} \\longrightarrow \\text{Fe(OH)}_2\\downarrow(\\text{white}) + 2\\text{NaCl} \\]
\\[ \\text{FeCl}_3 + 3\\text{NaOH} \\longrightarrow \\text{Fe(OH)}_3\\downarrow(\\text{red-brown}) + 3\\text{NaCl} \\]

<div class="concept-block">
  <h3>The White → Gray-Green → Red-Brown Transformation (重点!)</h3>
  <p>Freshly precipitated Fe(OH)₂ is white, but it rapidly oxidizes in air:</p>
  \\[ 4\\text{Fe(OH)}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O} \\longrightarrow 4\\text{Fe(OH)}_3 \\]
  <p>You see: white → gray-green (intermediate) → red-brown Fe(OH)₃</p>
  <p><strong>Trick to keep Fe(OH)₂ white:</strong> use freshly boiled (deoxygenated) NaOH; add along the tube wall; work under N₂ atmosphere.</p>
</div>

<h3>Iron Oxides</h3>
<table class="data-table">
  <thead><tr><th>Compound</th><th>Color</th><th>Fe Oxidation State</th><th>Common Name</th></tr></thead>
  <tbody>
    <tr><td>FeO</td><td>Black</td><td>+2</td><td>Iron(II) oxide</td></tr>
    <tr><td>Fe₂O₃</td><td>Red-brown</td><td>+3</td><td>Iron(III) oxide, rust</td></tr>
    <tr><td>Fe₃O₄</td><td>Black</td><td>+2 and +3 mixed</td><td>Magnetite (magnetic iron ore)</td></tr>
  </tbody>
</table>

<p>Note: Fe₃O₄ = FeO · Fe₂O₃ — it contains both Fe²⁺ and Fe³⁺ in a 1:2 ratio.</p>

<h3>Key Tests for Fe Ions</h3>
<ol>
  <li><strong>KSCN test:</strong> Add KSCN → blood red color = Fe³⁺ present (Fe(SCN)₃)</li>
  <li><strong>NaOH test:</strong> White precipitate = Fe²⁺ (Fe(OH)₂); Red-brown precipitate = Fe³⁺ (Fe(OH)₃)</li>
  <li><strong>Sequence:</strong> Add KSCN first to detect Fe³⁺, then add excess NaOH — if color disappears = no Fe³⁺</li>
</ol>
`,
      visualizations: [
        {
          id: 'viz-fe-color',
          title: 'Fe²⁺/Fe³⁺ Color Change & Detection',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 420, scale: 30, originX: 360, originY: 210 });
            let step = 0;

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText = 'display:flex;gap:8px;margin:6px 0;flex-wrap:wrap;';
            container.appendChild(btnDiv);

            const steps = [
              { label: 'Start: FeCl₂ (green)', desc: 'FeCl\u2082 solution — Fe\u00b2\u207a ions, light green', tubeColor: 'rgba(100,200,100,0.5)', textColor: '#3fb950' },
              { label: 'Add Cl₂ → Fe³⁺', desc: 'Cl\u2082 oxidizes Fe\u00b2\u207a to Fe\u00b3\u207a: 2Fe\u00b2\u207a + Cl\u2082 \u2192 2Fe\u00b3\u207a + 2Cl\u207b', tubeColor: 'rgba(200,160,50,0.6)', textColor: '#d29922' },
              { label: 'Add KSCN → blood red', desc: 'Fe\u00b3\u207a + SCN\u207b \u2192 Fe(SCN)\u00b3 — blood red! Confirms Fe\u00b3\u207a', tubeColor: 'rgba(200,20,20,0.75)', textColor: '#f85149' },
              { label: 'Add Fe powder → Fe²⁺', desc: 'Fe + 2Fe\u00b3\u207a \u2192 3Fe\u00b2\u207a — Fe reduces Fe\u00b3\u207a back to Fe\u00b2\u207a', tubeColor: 'rgba(100,180,120,0.55)', textColor: '#3fb950' },
              { label: 'Add NaOH → precipitate', desc: 'Fe\u00b2\u207a + 2OH\u207b \u2192 Fe(OH)\u2082\u2193 (white), then Fe(OH)\u2083 (red-brown in air)', tubeColor: 'rgba(200,200,210,0.7)', textColor: '#8b949e' }
            ];

            const prevBtn = VizEngine.createButton(btnDiv, 'Previous', () => { step = Math.max(0, step - 1); });
            const nextBtn = VizEngine.createButton(btnDiv, 'Next Step', () => { step = Math.min(steps.length - 1, step + 1); });

            viz.animate(() => {
              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width;

              const s = steps[step];

              // Draw test tube
              const tx = W / 2, ty = 100;
              const tw = 60, th = 200;

              // Tube shape
              ctx.strokeStyle = '#4a4a7a';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.moveTo(tx - tw / 2, ty);
              ctx.lineTo(tx - tw / 2, ty + th - 30);
              ctx.quadraticCurveTo(tx - tw / 2, ty + th, tx, ty + th);
              ctx.quadraticCurveTo(tx + tw / 2, ty + th, tx + tw / 2, ty + th - 30);
              ctx.lineTo(tx + tw / 2, ty);
              ctx.stroke();

              // Solution inside
              ctx.fillStyle = s.tubeColor;
              ctx.beginPath();
              ctx.moveTo(tx - tw / 2 + 3, ty + 20);
              ctx.lineTo(tx - tw / 2 + 3, ty + th - 30);
              ctx.quadraticCurveTo(tx - tw / 2 + 3, ty + th - 5, tx, ty + th - 5);
              ctx.quadraticCurveTo(tx + tw / 2 - 3, ty + th - 5, tx + tw / 2 - 3, ty + th - 30);
              ctx.lineTo(tx + tw / 2 - 3, ty + 20);
              ctx.closePath();
              ctx.fill();

              // Step number
              ctx.fillStyle = '#58a6ff';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Step ' + (step + 1) + ' / ' + steps.length, W / 2, 40);

              // Step label
              ctx.fillStyle = s.textColor;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.fillText(s.label, W / 2, 70);

              // Description
              ctx.fillStyle = '#c9d1d9';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              const words = s.desc;
              ctx.fillText(words, W / 2, 360);

              // Ion display in tube
              ctx.fillStyle = s.textColor;
              ctx.font = 'bold 20px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              const ionLabel = step === 0 ? 'Fe\u00b2\u207a' : step === 1 ? 'Fe\u00b3\u207a' : step === 2 ? 'Fe(SCN)\u00b3' : step === 3 ? 'Fe\u00b2\u207a' : 'Fe(OH)\u2082\u2193';
              ctx.fillText(ionLabel, tx, ty + th / 2 + 10);

              // Arrow indicator for step progression
              if (step < steps.length - 1) {
                ctx.fillStyle = '#3fb9a0';
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('\u25bc Click "Next Step" to continue', W / 2, 400);
              }
            });
          }
        }
      ],
      exercises: [
        {
          question: 'Which reagent gives a blood-red color when added to a solution containing Fe³⁺?',
          type: 'multiple-choice',
          choices: ['NaOH', 'KSCN', 'NH₃·H₂O', 'Na₂CO₃'],
          answer: 1,
          explanation: 'KSCN (potassium thiocyanate) forms Fe(SCN)₃, an intensely blood-red complex with Fe³⁺. This is the standard qualitative test for Fe³⁺ ions.'
        },
        {
          question: 'Excess iron powder is added to FeCl₃ solution. What is the final main product?',
          type: 'multiple-choice',
          choices: ['Fe₂O₃', 'FeCl₃ (unchanged)', 'FeCl₂', 'FeS'],
          answer: 2,
          explanation: 'Fe reacts with Fe³⁺: Fe + 2Fe³⁺ → 3Fe²⁺. Excess Fe ensures all Fe³⁺ is reduced to Fe²⁺, giving FeCl₂ as the main product in solution.'
        },
        {
          question: 'Fresh Fe(OH)₂ is white. After exposure to air, it turns red-brown. What is the red-brown product?',
          type: 'multiple-choice',
          choices: ['Fe₂O₃', 'Fe(OH)₃', 'FeO', 'Fe₃O₄'],
          answer: 1,
          explanation: '4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃. The white Fe(OH)₂ is oxidized by atmospheric O₂ to form red-brown Fe(OH)₃.'
        }
      ]
    },

    // ── Section 4: General Metallic Properties ────────────────────────────
    {
      id: 'ch11-sec04',
      title: 'General Metallic Properties',
      content: `
<h2>金属的通性 — General Properties of Metals</h2>

<p>Metals share a characteristic set of physical and chemical properties, rooted in the presence of a "sea" of delocalized electrons (金属键, metallic bonding).</p>

<h3>Physical Properties</h3>
<table class="data-table">
  <thead><tr><th>Property</th><th>Explanation</th><th>Exceptions / Notes</th></tr></thead>
  <tbody>
    <tr><td>Metallic luster (金属光泽)</td><td>Free electrons reflect light</td><td>Powdered metals appear dull (大black)</td></tr>
    <tr><td>Good conductors</td><td>Delocalized electrons carry charge</td><td>Ag best conductor; Hg is liquid at RT</td></tr>
    <tr><td>Thermal conductivity</td><td>Electrons transfer kinetic energy</td><td>Correlates with electrical conductivity</td></tr>
    <tr><td>Malleability & ductility</td><td>Metal layers slide without breaking bonds</td><td>Most malleable: Au; most ductile: Au</td></tr>
    <tr><td>High density (generally)</td><td>Close-packed metal ions + electrons</td><td>Li, Na, K float on water; Ir is densest</td></tr>
  </tbody>
</table>

<h3>Chemical Activity — The Activity Series (活动性顺序)</h3>
<p>The standard activity series for metals (from most to least reactive):</p>

<div class="concept-block" style="text-align:center; font-family: monospace; font-size: 1.1em; letter-spacing: 2px;">
  K &gt; Ca &gt; Na &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Ni &gt; Sn &gt; Pb &gt; (H) &gt; Cu &gt; Hg &gt; Ag &gt; Pt &gt; Au
</div>

<p>Mnemonic (记忆口诀): <strong>钾钙钠镁铝锌铁镍锡铅氢铜汞银铂金</strong></p>

<h3>Reactions of Metals with Acids</h3>
<ul>
  <li>Metals above H in the activity series react with dilute HCl or dilute H₂SO₄ to produce H₂</li>
  <li>Metals below H (Cu, Ag, Au) do NOT react with non-oxidizing dilute acids</li>
  <li>Dilute HNO₃ and H₂SO₄(concentrated) are oxidizing acids that react with Cu and Ag</li>
</ul>

\\[ \\text{Cu} + 4\\text{HNO}_3(\\text{conc.}) \\longrightarrow \\text{Cu(NO}_3)_2 + 2\\text{NO}_2\\uparrow + 2\\text{H}_2\\text{O} \\]
\\[ 3\\text{Cu} + 8\\text{HNO}_3(\\text{dilute}) \\longrightarrow 3\\text{Cu(NO}_3)_2 + 2\\text{NO}\\uparrow + 4\\text{H}_2\\text{O} \\]

<h3>Displacement Reactions (置换反应)</h3>
<p>A more active metal can displace a less active metal from its salt solution:</p>
\\[ \\text{Fe} + \\text{CuSO}_4 \\longrightarrow \\text{FeSO}_4 + \\text{Cu} \\quad (\\text{iron displaces copper}) \\]
\\[ \\text{Zn} + \\text{CuSO}_4 \\longrightarrow \\text{ZnSO}_4 + \\text{Cu} \\]

<div class="highlight-box">
  <strong>Important:</strong> Na in CuSO₄ solution does NOT give Cu! Na reacts with water first: 2Na + 2H₂O → 2NaOH + H₂↑, then NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄.
</div>

<h3>Reactions of Metals with Water</h3>
<table class="data-table">
  <thead><tr><th>Metal</th><th>Reaction with Water</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>K, Na, Ca, Li</td><td>Vigorous reaction at RT</td><td>Room temperature</td></tr>
    <tr><td>Mg</td><td>Slow at RT; fast with hot water</td><td>Hot water / steam</td></tr>
    <tr><td>Al, Zn, Fe</td><td>React with steam at high temp</td><td>Steam, high temperature</td></tr>
    <tr><td>Cu, Ag, Au, Pt</td><td>No reaction with water or steam</td><td>—</td></tr>
  </tbody>
</table>
`,
      visualizations: [
        {
          id: 'viz-activity-series',
          title: 'Metal Activity Series — Drag to Order',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 400, scale: 30, originX: 360, originY: 200 });
            const ctx = viz.ctx;

            // Static visualization: ranked activity series with displacement demo
            let highlightIdx = -1;
            const metals = [
              { sym: 'K',  color: '#bc8cff', x: 40  },
              { sym: 'Ca', color: '#bc8cff', x: 90  },
              { sym: 'Na', color: '#f0883e', x: 140 },
              { sym: 'Mg', color: '#f0883e', x: 190 },
              { sym: 'Al', color: '#f0883e', x: 240 },
              { sym: 'Zn', color: '#3fb9a0', x: 290 },
              { sym: 'Fe', color: '#3fb9a0', x: 340 },
              { sym: 'Sn', color: '#3fb9a0', x: 390 },
              { sym: 'Pb', color: '#3fb9a0', x: 440 },
              { sym: 'H',  color: '#8b949e', x: 490, special: true },
              { sym: 'Cu', color: '#d29922', x: 540 },
              { sym: 'Ag', color: '#d29922', x: 590 },
              { sym: 'Au', color: '#d29922', x: 640 }
            ];

            const infoPanel = document.createElement('div');
            infoPanel.style.cssText = 'margin:6px 0;color:#c9d1d9;font-size:12px;min-height:36px;text-align:center;';
            infoPanel.textContent = 'Hover over a metal to learn about its reactivity.';
            container.appendChild(infoPanel);

            viz.canvas.addEventListener('mousemove', (e) => {
              const rect = viz.canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              let found = -1;
              for (let i = 0; i < metals.length; i++) {
                if (Math.abs(mx - metals[i].x) < 22) { found = i; break; }
              }
              if (found !== highlightIdx) {
                highlightIdx = found;
                if (found >= 0) {
                  const m = metals[found];
                  const reactivity = found < 3 ? 'Very active — reacts vigorously with water and acids' :
                    found < 5 ? 'Active — reacts with dilute acids, steam at high temp' :
                    found < 9 ? 'Moderately active — reacts with dilute acids, produces H\u2082' :
                    found === 9 ? '(Hydrogen reference)' :
                    'Inactive — does not react with water or dilute HCl/H\u2082SO\u2084';
                  infoPanel.textContent = m.sym + ': ' + reactivity;
                } else {
                  infoPanel.textContent = 'Hover over a metal to learn about its reactivity.';
                }
              }
            });

            viz.animate(() => {
              viz.clear();

              // Title
              ctx.fillStyle = '#f0f6fc';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Metal Activity Series (活动性顺序)', viz.width / 2, 30);

              // Arrow label
              ctx.fillStyle = '#4a4a7a';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('More active \u2192', 30, 60);
              ctx.textAlign = 'right';
              ctx.fillText('\u2190 Less active', viz.width - 10, 60);

              // Draw arrow
              ctx.strokeStyle = '#3a3a6a';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(30, 70);
              ctx.lineTo(viz.width - 30, 70);
              ctx.stroke();
              // Arrowhead
              ctx.fillStyle = '#3a3a6a';
              ctx.beginPath();
              ctx.moveTo(viz.width - 20, 70);
              ctx.lineTo(viz.width - 30, 65);
              ctx.lineTo(viz.width - 30, 75);
              ctx.closePath();
              ctx.fill();

              // Metal circles
              metals.forEach((m, i) => {
                const isHigh = highlightIdx === i;
                const r = isHigh ? 24 : 18;
                const y = 130;

                // Glow on hover
                if (isHigh) {
                  ctx.fillStyle = m.color + '33';
                  ctx.beginPath();
                  ctx.arc(m.x, y, r + 6, 0, Math.PI * 2);
                  ctx.fill();
                }

                // Circle
                ctx.fillStyle = m.special ? '#333355' : m.color + 'cc';
                ctx.beginPath();
                ctx.arc(m.x, y, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = m.color;
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Symbol
                ctx.fillStyle = m.special ? '#8b949e' : '#0c0c20';
                ctx.font = `bold ${isHigh ? 14 : 12}px -apple-system,sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(m.sym, m.x, y);
                ctx.textBaseline = 'alphabetic';

                // Dashed line at H
                if (m.special) {
                  ctx.strokeStyle = '#8b949e66';
                  ctx.lineWidth = 1;
                  ctx.setLineDash([4, 3]);
                  ctx.beginPath();
                  ctx.moveTo(m.x, 90);
                  ctx.lineTo(m.x, 170);
                  ctx.stroke();
                  ctx.setLineDash([]);
                }
              });

              // Legend
              const legendItems = [
                { color: '#bc8cff', label: 'Reacts with cold water' },
                { color: '#f0883e', label: 'Reacts with steam/hot water' },
                { color: '#3fb9a0', label: 'Reacts with dilute acids' },
                { color: '#d29922', label: 'Inactive metals' }
              ];
              legendItems.forEach((item, i) => {
                const lx = 40 + i * 170;
                ctx.fillStyle = item.color;
                ctx.beginPath();
                ctx.arc(lx, 220, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#8b949e';
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(item.label, lx + 12, 224);
              });

              // Displacement example
              ctx.fillStyle = '#58a6ff';
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Displacement: Fe + CuSO\u2084 \u2192 FeSO\u2084 + Cu', viz.width / 2, 280);

              ctx.fillStyle = '#8b949e';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('(Fe is above Cu in activity series, so Fe displaces Cu\u00b2\u207a)', viz.width / 2, 300);

              // Visual displacement arrow
              ctx.fillStyle = '#3fb9a0';
              ctx.beginPath(); ctx.arc(280, 340, 18, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#0c0c20';
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('Fe', 280, 340);

              ctx.strokeStyle = '#58a6ff';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(305, 340);
              ctx.lineTo(410, 340);
              ctx.stroke();
              ctx.fillStyle = '#58a6ff';
              ctx.beginPath();
              ctx.moveTo(415, 340);
              ctx.lineTo(405, 334);
              ctx.lineTo(405, 346);
              ctx.closePath();
              ctx.fill();

              ctx.fillStyle = '#d29922';
              ctx.beginPath(); ctx.arc(440, 340, 18, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#0c0c20';
              ctx.fillText('Cu', 440, 340);
              ctx.fillStyle = '#d29922';
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textBaseline = 'alphabetic';
              ctx.fillText('displaced from CuSO\u2084', 440, 370);
              ctx.textBaseline = 'middle';
            });
          }
        }
      ],
      exercises: [
        {
          question: 'A piece of Na is dropped into CuSO₄ solution. Which products form?',
          type: 'multiple-choice',
          choices: [
            'Cu metal and Na₂SO₄',
            'Cu(OH)₂ precipitate, Na₂SO₄, and H₂ gas',
            'Cu metal and H₂SO₄',
            'NaOH and CuSO₄ unchanged'
          ],
          answer: 1,
          explanation: 'Na first reacts with water: 2Na + 2H₂O → 2NaOH + H₂↑. The NaOH then reacts with CuSO₄: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄. Na does NOT directly displace Cu.'
        },
        {
          question: 'Which pair of metals can displace hydrogen from dilute HCl?',
          type: 'multiple-choice',
          choices: ['Cu and Ag', 'Fe and Zn', 'Cu and Fe', 'Au and Pt'],
          answer: 1,
          explanation: 'Only metals above H in the activity series react with dilute HCl to produce H₂. Fe and Zn are both above H, while Cu and Ag are below H.'
        },
        {
          question: 'The order K > Na > Mg > Al in the activity series means:',
          type: 'multiple-choice',
          choices: [
            'K is heavier than Na',
            'K loses electrons more easily than Na, which loses more easily than Mg, etc.',
            'Al has more valence electrons than K',
            'K has a higher melting point than Al'
          ],
          answer: 1,
          explanation: 'Activity series measures how readily a metal loses electrons (oxidizes). K > Na means K is a stronger reducing agent and oxidizes more readily. This correlates with lower ionization energies and higher electron-giving tendency.'
        }
      ]
    },

    // ── Section 5: Alloys & Metallurgy ────────────────────────────────────
    {
      id: 'ch11-sec05',
      title: 'Alloys & Metallurgy',
      content: `
<h2>合金与冶炼 — Alloys and Metallurgy</h2>

<p>Pure metals are often too soft or too reactive for practical applications. Alloys (合金) — mixtures of a metal with other elements — dramatically improve mechanical, electrical, and chemical properties.</p>

<h3>What is an Alloy?</h3>
<p>An alloy is a homogeneous mixture where metal atoms are mixed at the atomic level. The resulting material has properties different from (and usually superior to) the pure metals it contains.</p>

<div class="concept-block">
  <h3>Important Alloys</h3>
  <table class="data-table">
    <thead><tr><th>Alloy</th><th>Main Components</th><th>Properties</th><th>Uses</th></tr></thead>
    <tbody>
      <tr><td>Steel (钢)</td><td>Fe + C (0.03–2.14%)</td><td>Stronger & harder than pure Fe</td><td>Construction, machinery</td></tr>
      <tr><td>Stainless steel (不锈钢)</td><td>Fe + Cr (≥12%) + Ni</td><td>Corrosion resistant</td><td>Cutlery, medical tools</td></tr>
      <tr><td>Bronze (青铜)</td><td>Cu + Sn</td><td>Harder than Cu, lower melting pt</td><td>Bells, statues, bearings</td></tr>
      <tr><td>Brass (黄铜)</td><td>Cu + Zn</td><td>Harder, golden color</td><td>Plumbing fittings, musical instruments</td></tr>
      <tr><td>Duralumin (硬铝)</td><td>Al + Cu + Mg + Mn</td><td>Light & strong</td><td>Aircraft frames</td></tr>
      <tr><td>Solder (焊锡)</td><td>Pb + Sn</td><td>Low melting point</td><td>Electronics soldering</td></tr>
    </tbody>
  </table>
</div>

<h3>Why Are Alloys Stronger?</h3>
<p>Different-sized atoms in an alloy disrupt the regular metal lattice, making it harder for layers to slide past each other. This increases hardness and tensile strength.</p>

<h3>Methods of Metal Extraction (冶炼)</h3>
<p>The method used to extract a metal from its ore depends on the metal's position in the activity series:</p>

<table class="data-table">
  <thead><tr><th>Activity Level</th><th>Metals</th><th>Extraction Method</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Very active</td><td>K, Ca, Na, Mg, Al</td><td>Electrolysis (电解) of molten ore</td><td>2Al₂O₃ → 4Al + 3O₂ (electrolysis)</td></tr>
    <tr><td>Moderately active</td><td>Zn, Fe, Sn, Pb</td><td>Thermal reduction (热还原)</td><td>Fe₂O₃ + 3CO → 2Fe + 3CO₂</td></tr>
    <tr><td>Less active</td><td>Cu</td><td>Reduction or hydrometallurgy</td><td>Cu₂S + O₂ → 2Cu + SO₂</td></tr>
    <tr><td>Inactive</td><td>Hg, Ag, Au, Pt</td><td>Heating ore alone (热分解)</td><td>2HgO → 2Hg + O₂</td></tr>
  </tbody>
</table>

<h3>Blast Furnace — Iron Smelting (高炉炼铁)</h3>
<p>Iron is smelted in a blast furnace (高炉) using:</p>
<ul>
  <li><strong>Iron ore (铁矿石):</strong> Fe₂O₃, Fe₃O₄</li>
  <li><strong>Coke (焦炭):</strong> provides carbon for reduction</li>
  <li><strong>Limestone (石灰石):</strong> removes impurity SiO₂ as slag</li>
</ul>

<p><strong>Key reactions in the blast furnace:</strong></p>
\\[ \\text{C} + \\text{O}_2 \\xrightarrow{\\text{ignite}} \\text{CO}_2 \\]
\\[ \\text{CO}_2 + \\text{C} \\rightarrow 2\\text{CO} \\quad (\\text{main reducing agent}) \\]
\\[ \\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2 \\]
\\[ \\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2 \\]
\\[ \\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3 \\quad (\\text{slag, 炉渣}) \\]

<div class="concept-block">
  <h3>Thermite Reaction (铝热反应)</h3>
  <p>Al is such a strong reducing agent that it can reduce metal oxides — releasing enormous heat. This is the thermite reaction:</p>
  \\[ 2\\text{Al} + \\text{Fe}_2\\text{O}_3 \\xrightarrow{\\text{高温}} \\text{Al}_2\\text{O}_3 + 2\\text{Fe} + \\text{heat (>2000°C)} \\]
  <p>Applications: field welding of railway tracks (铁轨焊接), incendiary materials</p>
  <p>The reaction is triggered by burning Mg ribbon, which ignites the Al-Fe₂O₃ mixture.</p>
</div>

<h3>Aluminum Smelting — Hall-Héroult Process</h3>
<p>Al cannot be smelted with carbon because Al₂O₃ + C → only at extremely high temperatures, and AlC product forms. Instead, electrolysis is used:</p>
\\[ 2\\text{Al}_2\\text{O}_3 \\xrightarrow{\\text{electrolysis, cryolite}} 4\\text{Al} + 3\\text{O}_2 \\]
<p>Cryolite (Na₃AlF₆, 冰晶石) is added to lower the melting point of Al₂O₃ from 2072°C to ~960°C.</p>
`,
      visualizations: [
        {
          id: 'viz-thermite',
          title: 'Thermite Reaction Animation',
          setup(container) {
            const viz = new VizEngine(container, { width: 720, height: 420, scale: 30, originX: 360, originY: 210 });
            let t = 0;
            let reacting = false;
            let intensity = 0;

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText = 'display:flex;gap:8px;margin:6px 0;';
            container.appendChild(btnDiv);
            VizEngine.createButton(btnDiv, 'Ignite Thermite!', () => { reacting = true; t = 0; intensity = 0; });
            VizEngine.createButton(btnDiv, 'Reset', () => { reacting = false; t = 0; intensity = 0; });

            viz.animate((ts) => {
              if (reacting) {
                t += 0.025;
                intensity = Math.min(1, t / 2);
              }

              viz.clear();
              const ctx = viz.ctx;
              const W = viz.width, H = viz.height;

              // Crucible
              const crX = W / 2, crY = 280;
              ctx.strokeStyle = '#4a4a7a';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.moveTo(crX - 80, crY - 80);
              ctx.lineTo(crX - 60, crY + 60);
              ctx.quadraticCurveTo(crX, crY + 80, crX + 60, crY + 60);
              ctx.lineTo(crX + 80, crY - 80);
              ctx.stroke();

              // Thermite mixture (before reaction)
              const mixtureAlpha = Math.max(0, 1 - intensity * 2);
              if (mixtureAlpha > 0) {
                ctx.fillStyle = `rgba(180,100,60,${mixtureAlpha * 0.8})`;
                ctx.beginPath();
                ctx.moveTo(crX - 68, crY - 30);
                ctx.lineTo(crX - 55, crY + 50);
                ctx.quadraticCurveTo(crX, crY + 65, crX + 55, crY + 50);
                ctx.lineTo(crX + 68, crY - 30);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#c9d1d9';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Al + Fe\u2082O\u2083 mixture', crX, crY + 20);
              }

              // Reaction: fire and molten iron
              if (reacting && intensity > 0) {
                // Bright flash
                const flashAlpha = Math.max(0, 0.8 - intensity * 0.5) * Math.sin(t * 15) * 0.3 + Math.max(0, 0.6 - intensity * 0.4);
                ctx.fillStyle = `rgba(255, 220, 100, ${flashAlpha * 0.3})`;
                ctx.fillRect(crX - 120, crY - 200, 240, 300);

                // Fire particles
                for (let fp = 0; fp < 30; fp++) {
                  const fphase = (t * 3 + fp * 0.21) % (Math.PI * 2);
                  const fprog = (fphase / (Math.PI * 2));
                  const fx = crX + (fp % 7 - 3) * 18 + Math.sin(fphase * 2.3 + fp) * 20;
                  const fy = crY - 60 - fprog * (80 + fp % 3 * 30);
                  const fsize = 8 + (1 - fprog) * 12;

                  if (fy > crY - 200) {
                    const hue = 30 + (1 - fprog) * 30;
                    ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${(1 - fprog) * intensity})`;
                    ctx.beginPath();
                    ctx.arc(fx, fy, fsize, 0, Math.PI * 2);
                    ctx.fill();
                  }
                }

                // Sparks
                for (let sp = 0; sp < 20; sp++) {
                  const sphase = (t * 4 + sp * 0.31) % (Math.PI * 2);
                  const spX = crX + Math.sin(sp * 1.7 + sphase) * (60 + sp * 5);
                  const spY = crY - 40 - Math.abs(Math.sin(sphase)) * 100;
                  const sAlpha = Math.sin(sphase) * intensity;
                  if (sAlpha > 0) {
                    ctx.fillStyle = `rgba(255, 255, 180, ${sAlpha})`;
                    ctx.beginPath();
                    ctx.arc(spX, spY, 2, 0, Math.PI * 2);
                    ctx.fill();
                  }
                }

                // Molten iron pool
                const ironAlpha = Math.min(1, (intensity - 0.3) * 2);
                if (ironAlpha > 0) {
                  const poolShimmer = Math.sin(t * 5) * 0.1;
                  ctx.fillStyle = `rgba(${Math.round(220 + poolShimmer * 35)}, ${Math.round(80 + poolShimmer * 20)}, 20, ${ironAlpha * 0.9})`;
                  ctx.beginPath();
                  ctx.moveTo(crX - 60 + 5, crY + 30);
                  ctx.lineTo(crX - 45, crY + 58);
                  ctx.quadraticCurveTo(crX, crY + 72, crX + 45, crY + 58);
                  ctx.lineTo(crX + 60 - 5, crY + 30);
                  ctx.closePath();
                  ctx.fill();

                  ctx.fillStyle = '#f0f6fc';
                  ctx.font = 'bold 12px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText('Molten Fe (>2000\u00b0C)', crX, crY + 55);
                }

                // Temperature gauge
                const tempC = Math.round(intensity * 2300);
                const gaugeH = intensity * 140;
                ctx.fillStyle = '#1a1a40';
                ctx.fillRect(W - 55, 60, 30, 150);
                ctx.fillStyle = intensity > 0.5 ? '#f85149' : '#f0883e';
                ctx.fillRect(W - 55, 210 - gaugeH, 30, gaugeH);
                ctx.strokeStyle = '#4a4a7a';
                ctx.lineWidth = 1;
                ctx.strokeRect(W - 55, 60, 30, 150);
                ctx.fillStyle = intensity > 0.5 ? '#f85149' : '#f0883e';
                ctx.font = 'bold 11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(tempC + '\u00b0C', W - 40, 46);
                ctx.fillStyle = '#8b949e';
                ctx.font = '10px -apple-system,sans-serif';
                ctx.fillText('Temp', W - 40, 226);
              }

              // Title and equation
              ctx.fillStyle = reacting ? '#f0883e' : '#f0f6fc';
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Thermite Reaction: 2Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe', W / 2, 35);

              if (!reacting) {
                ctx.fillStyle = '#58a6ff';
                ctx.font = '13px -apple-system,sans-serif';
                ctx.fillText('Click "Ignite Thermite!" to start the reaction', W / 2, 380);
              }

              // Al₂O₃ layer label (byproduct)
              if (intensity > 0.5) {
                ctx.fillStyle = `rgba(188,140,255,${(intensity - 0.5) * 2})`;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('Al\u2082O\u2083 slag (byproduct)', 20, 300);
              }
            });
          }
        }
      ],
      exercises: [
        {
          question: 'Steel is an alloy of Fe and C. What advantage does steel have over pure iron?',
          type: 'multiple-choice',
          choices: [
            'Steel has higher electrical conductivity than iron',
            'Steel is harder and stronger than pure iron',
            'Steel rusts more slowly due to less iron content',
            'Steel has lower density than iron'
          ],
          answer: 1,
          explanation: 'The carbon atoms in steel disrupt the regular iron lattice, preventing layers from sliding easily. This makes steel harder and stronger than pure iron, which is relatively soft and malleable.'
        },
        {
          question: 'Why is electrolysis used to produce aluminum, while iron is produced by reduction with CO?',
          type: 'multiple-choice',
          choices: [
            'Aluminum ore is more common than iron ore',
            'Al is more active than Fe, so it cannot be reduced by carbon at practical temperatures',
            'CO is too expensive for aluminum production',
            'Electrolysis produces purer iron than carbon reduction'
          ],
          answer: 1,
          explanation: 'Al is much more active (higher in the activity series) than Fe. Al₂O₃ is extremely stable and requires electrolysis to decompose. Fe₂O₃ can be reduced by CO in a blast furnace at economical temperatures.'
        },
        {
          question: 'The thermite reaction uses Al to reduce Fe₂O₃. This demonstrates that:',
          type: 'multiple-choice',
          choices: [
            'Al is less active than Fe',
            'Al is more active than Fe and can displace it from its oxide',
            'Fe₂O₃ is a stronger oxidizing agent than Al₂O₃',
            'Al and Fe have the same activity'
          ],
          answer: 1,
          explanation: 'In the thermite reaction (2Al + Fe₂O₃ → Al₂O₃ + 2Fe), Al reduces Fe³⁺ to Fe metal. This is only possible because Al is MORE active (stronger reducing agent) than Fe, so Al can take oxygen away from Fe₂O₃.'
        },
        {
          question: 'In the blast furnace, limestone (CaCO₃) is added. Its primary role is:',
          type: 'multiple-choice',
          choices: [
            'To provide oxygen for combustion',
            'To act as a reducing agent for Fe₂O₃',
            'To remove SiO₂ impurity by forming CaSiO₃ slag',
            'To lower the melting point of iron'
          ],
          answer: 2,
          explanation: 'CaCO₃ decomposes to CaO + CO₂ in the furnace. CaO then reacts with acidic SiO₂ impurity: CaO + SiO₂ → CaSiO₃ (slag). The slag is less dense than liquid iron and floats on top, making separation easy.'
        },
        {
          question: 'In a blast furnace, what is the primary reducing agent that converts iron ore to iron?',
          type: 'multiple-choice',
          choices: ['Carbon (C) directly', 'Carbon monoxide (CO)', 'Calcium oxide (CaO)', 'Hydrogen gas (H\u2082)'],
          answer: 1,
          explanation: 'CO is the primary reducing agent in the blast furnace: Fe\u2082O\u2083 + 3CO \u2192 2Fe + 3CO\u2082. CO is generated from incomplete combustion of coke (C + CO\u2082 \u2192 2CO) at high temperatures.'
        },
        {
          question: 'What is the oxidation state of iron in Fe\u2083O\u2084?',
          type: 'multiple-choice',
          choices: [
            'All Fe atoms are +2',
            'All Fe atoms are +3',
            'Fe atoms are a mix of +2 and +3',
            'All Fe atoms are +4'
          ],
          answer: 2,
          explanation: 'Fe\u2083O\u2084 = FeO\u00B7Fe\u2082O\u2083, containing both Fe\u00B2\u207A and Fe\u00B3\u207A. Its formula unit has 1 Fe at +2 and 2 Fe at +3. This mixed oxide is also called magnetite and is ferromagnetic.'
        }
      ]
    }

  ] // end sections
}); // end window.CHAPTERS.push
