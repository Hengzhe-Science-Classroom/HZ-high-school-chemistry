window.CHAPTERS.push({
  id: 'ch01',
  number: 1,
  title: 'Classification & Transformation',
  subtitle: '物质的分类与转化 — Organizing the chemical world and understanding how substances interconvert',
  sections: [

    // ─── SECTION 1 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec01',
      title: '1. Pure Substances & Mixtures',
      content: `
<h2>纯净物与混合物 — Pure Substances & Mixtures</h2>

<div class="definition">
  <strong>Pure Substance (纯净物)</strong>: Matter composed of only one kind of particle (one element or one compound).
  It has a fixed composition and definite physical properties (fixed melting point, boiling point, density, etc.).
  <br><br>
  <strong>Mixture (混合物)</strong>: Matter composed of two or more pure substances physically combined.
  Its composition is variable and its properties are not fixed — they depend on proportions.
</div>

<h3>Classification at a Glance</h3>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Property</th>
      <th style="padding:8px;border:1px solid #30363d;color:#3fb9a0;">Pure Substance</th>
      <th style="padding:8px;border:1px solid #30363d;color:#f0883e;">Mixture</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Composition</td>
      <td style="padding:8px;border:1px solid #30363d;">Fixed ratio</td>
      <td style="padding:8px;border:1px solid #30363d;">Variable ratio</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Melting / Boiling Point</td>
      <td style="padding:8px;border:1px solid #30363d;">Sharp, definite</td>
      <td style="padding:8px;border:1px solid #30363d;">Range (varies)</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Separation</td>
      <td style="padding:8px;border:1px solid #30363d;">Cannot be separated physically</td>
      <td style="padding:8px;border:1px solid #30363d;">Separable by physical means</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Examples</td>
      <td style="padding:8px;border:1px solid #30363d;">Water (H₂O), Gold (Au), NaCl</td>
      <td style="padding:8px;border:1px solid #30363d;">Air, seawater, alloys, cola</td>
    </tr>
  </tbody>
</table>

<div class="example">
  <strong>Example 1:</strong> Classify the following: ① distilled water ② tap water ③ liquid oxygen ④ air ⑤ dry ice ⑥ bronze (tin-copper alloy)
  <br><br>
  <strong>Answer:</strong>
  <ul>
    <li>Pure substances: ① distilled water (H₂O), ③ liquid oxygen (O₂), ⑤ dry ice (CO₂)</li>
    <li>Mixtures: ② tap water (water + dissolved minerals), ④ air (N₂, O₂, Ar, CO₂…), ⑥ bronze (Cu + Sn)</li>
  </ul>
</div>

<h3>Homogeneous vs. Heterogeneous Mixtures</h3>
<p>Mixtures are further divided by uniformity:</p>
<ul>
  <li><strong>Homogeneous mixture (均匀混合物)</strong> — uniform throughout; same composition in every part. Example: saltwater, alcohol in water.</li>
  <li><strong>Heterogeneous mixture (非均匀混合物)</strong> — composition varies from place to place. Example: sand in water, oil in water.</li>
</ul>

<div class="intuition">
  <strong>Key Intuition:</strong> A pure substance is like a single LEGO brick colour — every piece is identical.
  A mixture is like a bucket of mixed LEGO bricks — you can separate them by hand (physical means), but they are not chemically bonded to each other.
</div>

<div class="warning">
  <strong>Common Mistake:</strong> Alloys (合金) like steel, brass, and bronze are <em>mixtures</em>, not pure substances, even though they look uniform. They are solid solutions of metals.
</div>

<h3>Methods to Separate Mixtures</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Method (方法)</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Principle</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Filtration (过滤)</td>
      <td style="padding:8px;border:1px solid #30363d;">Particle size difference</td>
      <td style="padding:8px;border:1px solid #30363d;">Remove sand from water</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Distillation (蒸馏)</td>
      <td style="padding:8px;border:1px solid #30363d;">Different boiling points</td>
      <td style="padding:8px;border:1px solid #30363d;">Separate alcohol from water</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Evaporation (蒸发结晶)</td>
      <td style="padding:8px;border:1px solid #30363d;">Solubility — solute left behind</td>
      <td style="padding:8px;border:1px solid #30363d;">Get salt from seawater</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Chromatography (色谱法)</td>
      <td style="padding:8px;border:1px solid #30363d;">Different affinities for stationary phase</td>
      <td style="padding:8px;border:1px solid #30363d;">Separate ink pigments</td>
    </tr>
  </tbody>
</table>
`,
      visualizations: [
        {
          id: 'viz-classification-tree',
          title: 'Interactive Classification Tree',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 420 });

            const nodes = [
              { id: 'matter', label: '物质 Matter', x: 350, y: 40, color: '#bc8cff', w: 140, h: 36 },
              { id: 'pure', label: '纯净物 Pure Substance', x: 175, y: 130, color: '#58a6ff', w: 180, h: 36 },
              { id: 'mix', label: '混合物 Mixture', x: 525, y: 130, color: '#f0883e', w: 160, h: 36 },
              { id: 'element', label: '单质 Element', x: 80, y: 230, color: '#3fb950', w: 130, h: 36 },
              { id: 'compound', label: '化合物 Compound', x: 270, y: 230, color: '#3fb9a0', w: 160, h: 36 },
              { id: 'homo', label: '均匀混合物\nHomogeneous', x: 455, y: 230, color: '#d29922', w: 155, h: 36 },
              { id: 'hete', label: '非均匀混合物\nHeterogeneous', x: 620, y: 230, color: '#f85149', w: 155, h: 36 },
              { id: 'metal', label: '金属 Metal\nFe, Cu, Au', x: 40, y: 340, color: '#3fb950', w: 120, h: 48 },
              { id: 'nonmetal', label: '非金属 Non-metal\nO₂, C, S', x: 175, y: 340, color: '#3fb950', w: 130, h: 48 },
              { id: 'oxide', label: '氧化物 Oxide\nH₂O, CO₂', x: 320, y: 340, color: '#3fb9a0', w: 130, h: 48 },
              { id: 'acidsalt', label: '酸/碱/盐\nAcid/Base/Salt', x: 470, y: 340, color: '#3fb9a0', w: 140, h: 48 },
            ];

            const edges = [
              ['matter', 'pure'], ['matter', 'mix'],
              ['pure', 'element'], ['pure', 'compound'],
              ['mix', 'homo'], ['mix', 'hete'],
              ['element', 'metal'], ['element', 'nonmetal'],
              ['compound', 'oxide'], ['compound', 'acidsalt'],
            ];

            function nodePos(id) {
              return nodes.find(n => n.id === id);
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              // Draw edges
              ctx.strokeStyle = '#30363d';
              ctx.lineWidth = 1.5;
              for (const [from, to] of edges) {
                const a = nodePos(from), b = nodePos(to);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y + 18);
                ctx.lineTo(b.x, b.y - 18);
                ctx.stroke();
              }

              // Draw nodes
              for (const n of nodes) {
                const lines = n.label.split('\n');
                ctx.fillStyle = n.color + '22';
                ctx.strokeStyle = n.color;
                ctx.lineWidth = 1.5;
                const h = n.h || 36;
                const rx = 8;
                const x = n.x - n.w / 2, y = n.y - h / 2;
                ctx.beginPath();
                ctx.roundRect(x, y, n.w, h, rx);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = n.color;
                ctx.font = 'bold 12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                if (lines.length === 1) {
                  ctx.fillText(lines[0], n.x, n.y);
                } else {
                  ctx.fillText(lines[0], n.x, n.y - 8);
                  ctx.font = '10px -apple-system,sans-serif';
                  ctx.fillStyle = n.color + 'cc';
                  ctx.fillText(lines[1], n.x, n.y + 8);
                }
              }

              viz.screenText('Click nodes to highlight branches', 350, 400, viz.colors.text, 12);
            }

            draw();

            viz.canvas.addEventListener('click', (e) => {
              const r = viz.canvas.getBoundingClientRect();
              const mx = e.clientX - r.left;
              const my = e.clientY - r.top;
              let hit = null;
              for (const n of nodes) {
                if (Math.abs(mx - n.x) < n.w / 2 && Math.abs(my - n.y) < (n.h || 36) / 2) {
                  hit = n.id;
                  break;
                }
              }
              draw();
              if (hit) {
                const ctx = viz.ctx;
                const n = nodePos(hit);
                ctx.fillStyle = n.color + '55';
                ctx.strokeStyle = n.color;
                ctx.lineWidth = 3;
                const h = n.h || 36;
                ctx.beginPath();
                ctx.roundRect(n.x - n.w / 2, n.y - h / 2, n.w, h, 8);
                ctx.fill();
                ctx.stroke();
              }
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec01-ex01',
          type: 'mcq',
          question: '下列物质中属于纯净物的是 (Which of the following is a pure substance?)',
          options: ['空气 Air', '盐水 Saltwater', '液态氧 Liquid oxygen (O₂)', '合金钢 Steel alloy'],
          answer: 2,
          explanation: 'Liquid oxygen (液态氧) consists only of O₂ molecules — it is a pure substance. Air is a mixture of N₂, O₂, Ar, etc. Saltwater contains water and dissolved salts. Steel is an alloy (mixture of iron and carbon).'
        },
        {
          id: 'ch01-sec01-ex02',
          type: 'mcq',
          question: '下列分离方法中，用于分离沸点不同的液态混合物的是 (Which separation method is used for liquids with different boiling points?)',
          options: ['过滤 Filtration', '蒸馏 Distillation', '蒸发结晶 Evaporation crystallization', '磁性分离 Magnetic separation'],
          answer: 1,
          explanation: 'Distillation (蒸馏) exploits different boiling points to separate liquid mixtures, such as separating ethanol (b.p. 78°C) from water (b.p. 100°C).'
        },
        {
          id: 'ch01-sec01-ex03',
          type: 'mcq',
          question: '食盐水属于 (Saltwater is classified as):',
          options: ['纯净物 Pure substance', '单质 Element', '均匀混合物 Homogeneous mixture', '非均匀混合物 Heterogeneous mixture'],
          answer: 2,
          explanation: 'Saltwater (NaCl dissolved in water) has a uniform composition throughout — it is a homogeneous mixture (均匀混合物). However, its composition can vary depending on how much salt was dissolved.'
        }
      ]
    },

    // ─── SECTION 2 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec02',
      title: '2. Elements & Compounds',
      content: `
<h2>单质与化合物 — Elements & Compounds</h2>

<div class="definition">
  <strong>Element (单质, elemental form)</strong>: A pure substance made of only <em>one</em> kind of element.
  Examples: Fe (iron), O₂ (oxygen), S (sulfur), Na (sodium), C (carbon — as diamond or graphite).
  <br><br>
  <strong>Compound (化合物)</strong>: A pure substance made of <em>two or more</em> different elements chemically bonded in a fixed ratio.
  Examples: H₂O, CO₂, NaCl, H₂SO₄, NaOH.
</div>

<div class="remark">
  <strong>Important Distinction:</strong><br>
  "元素 (element)" refers to the <em>type</em> of atom — an abstract concept about atomic identity (e.g., "oxygen element").<br>
  "单质 (elemental substance)" refers to a <em>real substance</em> made entirely of one element (e.g., O₂ gas, liquid oxygen, ozone O₃).
  <br><br>
  Ozone (O₃) and oxygen (O₂) are both elemental forms of the oxygen element — different substances, same element.
  This is called <strong>allotropy (同素异形体)</strong>.
</div>

<h3>Common Allotropes (同素异形体)</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Element</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Allotropes</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Carbon (C)</td>
      <td style="padding:8px;border:1px solid #30363d;">Diamond, Graphite, C₆₀ (Buckminsterfullerene)</td>
      <td style="padding:8px;border:1px solid #30363d;">Diamond: hardest natural material; Graphite: conducts electricity; C₆₀: soccer-ball structure</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Oxygen (O)</td>
      <td style="padding:8px;border:1px solid #30363d;">O₂ (dioxygen), O₃ (ozone)</td>
      <td style="padding:8px;border:1px solid #30363d;">O₂ supports combustion; O₃ absorbs UV radiation in stratosphere</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Phosphorus (P)</td>
      <td style="padding:8px;border:1px solid #30363d;">White phosphorus, Red phosphorus</td>
      <td style="padding:8px;border:1px solid #30363d;">White P: very reactive, toxic; Red P: less reactive, used in matches</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Sulfur (S)</td>
      <td style="padding:8px;border:1px solid #30363d;">Rhombic sulfur, Monoclinic sulfur</td>
      <td style="padding:8px;border:1px solid #30363d;">Same element, different crystal structures</td>
    </tr>
  </tbody>
</table>

<div class="example">
  <strong>Example 2:</strong> Among the following, identify elements (单质) and compounds (化合物):
  <br>CO₂, N₂, NaOH, Fe, KMnO₄, H₂, O₃
  <br><br>
  <strong>Answer:</strong>
  <ul>
    <li><strong>Elements (单质)</strong>: N₂, Fe, H₂, O₃ — each is made of only one type of element</li>
    <li><strong>Compounds (化合物)</strong>: CO₂, NaOH, KMnO₄ — each contains two or more types of elements</li>
  </ul>
</div>

<h3>Chemical Formula & Composition</h3>
<p>Every compound has a fixed ratio of elements by mass, expressed by its chemical formula:</p>
<ul>
  <li>\\(\\text{H}_2\\text{O}\\): hydrogen : oxygen = 2 : 16 = 1 : 8 by mass</li>
  <li>\\(\\text{CO}_2\\): carbon : oxygen = 12 : 32 = 3 : 8 by mass</li>
  <li>\\(\\text{NaCl}\\): sodium : chlorine = 23 : 35.5 by mass</li>
</ul>

<div class="warning">
  <strong>Be careful!</strong> H₂O₂ (hydrogen peroxide) and H₂O (water) both contain only hydrogen and oxygen, but they are <em>different compounds</em> with different formulas, properties, and uses. Same elements, different ratios → different compounds.
</div>
`,
      visualizations: [
        {
          id: 'viz-allotropes',
          title: 'Carbon Allotropes Visualisation',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 380 });

            let selected = 0;
            const labels = ['Diamond (金刚石)', 'Graphite (石墨)', 'Fullerene C₆₀'];

            function drawDiamond(ctx, cx, cy) {
              const r = 30;
              const positions = [
                [cx, cy - r], [cx - r * 0.8, cy], [cx + r * 0.8, cy],
                [cx - r * 0.4, cy + r * 0.7], [cx + r * 0.4, cy + r * 0.7]
              ];
              const bonds = [[0,1],[0,2],[1,3],[2,4],[3,4],[0,3],[0,4],[1,2]];
              ctx.strokeStyle = '#3fb9a0'; ctx.lineWidth = 2;
              for (const [a, b] of bonds) {
                ctx.beginPath();
                ctx.moveTo(positions[a][0], positions[a][1]);
                ctx.lineTo(positions[b][0], positions[b][1]);
                ctx.stroke();
              }
              for (const [x, y] of positions) {
                ctx.fillStyle = '#1a1a40';
                ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#58a6ff';
                ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#f0f6fc';
                ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('C', x, y);
              }
              ctx.fillStyle = '#3fb9a0'; ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('Tetrahedral 3D network', cx, cy + r + 20);
              ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
              ctx.fillText('Each C bonded to 4 others — very hard!', cx, cy + r + 38);
            }

            function drawGraphite(ctx, cx, cy) {
              const rows = 3, cols = 4;
              const dx = 36, dy = 20;
              ctx.strokeStyle = '#d29922'; ctx.lineWidth = 2;
              for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                  const x = cx - cols * dx / 2 + col * dx + (row % 2 ? dx / 2 : 0);
                  const y = cy - 30 + row * dy * 1.5;
                  if (col < cols - 1) {
                    const x2 = x + dx;
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y); ctx.stroke();
                  }
                  if (row < rows - 1) {
                    const x2 = cx - cols * dx / 2 + col * dx + ((row + 1) % 2 ? dx / 2 : 0);
                    const y2 = y + dy * 1.5;
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
                  }
                  ctx.fillStyle = '#d29922';
                  ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = '#0c0c20';
                  ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText('C', x, y);
                }
              }
              ctx.strokeStyle = '#d2992244'; ctx.lineWidth = 1;
              ctx.setLineDash([4, 4]);
              ctx.beginPath(); ctx.moveTo(cx - 80, cy + 55); ctx.lineTo(cx + 80, cy + 55); ctx.stroke();
              ctx.setLineDash([]);
              ctx.fillStyle = '#d29922'; ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('Layered hexagonal sheets', cx, cy + 65);
              ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
              ctx.fillText('Layers slide apart — conducts electricity!', cx, cy + 83);
            }

            function drawFullerene(ctx, cx, cy) {
              const R = 65;
              const count = 20;
              ctx.strokeStyle = '#f0883e'; ctx.lineWidth = 1.5;
              const pts = [];
              for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2;
                const x = cx + R * Math.cos(angle);
                const y = cy + R * 0.55 * Math.sin(angle);
                pts.push([x, y]);
              }
              for (let i = 0; i < count; i++) {
                const [x1, y1] = pts[i];
                const [x2, y2] = pts[(i + 1) % count];
                ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
                if (i % 3 === 0) {
                  const inner = pts[(i + 10) % count];
                  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(inner[0], inner[1]); ctx.stroke();
                }
              }
              for (const [x, y] of pts) {
                ctx.fillStyle = '#f0883e';
                ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#0c0c20';
                ctx.font = 'bold 8px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('C', x, y);
              }
              ctx.fillStyle = '#f0883e'; ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('Soccer-ball structure (60 atoms)', cx, cy + R * 0.55 + 14);
              ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
              ctx.fillText('Used in nanotechnology & medicine', cx, cy + R * 0.55 + 32);
            }

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
            wrap.insertBefore(btnRow, wrap.firstChild);

            const colors = ['#58a6ff', '#d29922', '#f0883e'];
            labels.forEach((lbl, i) => {
              const btn = document.createElement('button');
              btn.textContent = lbl;
              btn.style.cssText = `padding:6px 14px;border:1px solid ${colors[i]};border-radius:6px;background:#0c0c20;color:${colors[i]};cursor:pointer;font-size:0.82rem;`;
              btn.addEventListener('click', () => { selected = i; draw(); });
              btnRow.appendChild(btn);
            });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const cx = viz.width / 2, cy = viz.height / 2 - 20;
              viz.screenText('Carbon Allotropes — Same Element, Different Structures', cx, 22, viz.colors.white, 14);
              if (selected === 0) drawDiamond(ctx, cx, cy);
              else if (selected === 1) drawGraphite(ctx, cx, cy);
              else drawFullerene(ctx, cx, cy);
            }
            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec02-ex01',
          type: 'mcq',
          question: '下列关于单质和化合物的说法正确的是 (Which statement about elements and compounds is correct?)',
          options: [
            'O₂和O₃是氧元素的两种化合物 (O₂ and O₃ are two compounds of oxygen)',
            '单质一定是由同种元素组成的纯净物 (An elemental substance must be a pure substance of one element type)',
            '化合物中只含有一种元素 (A compound contains only one type of element)',
            '混合物也可以是化合物 (A mixture can also be a compound)'
          ],
          answer: 1,
          explanation: 'An elemental substance (单质) is indeed a pure substance made of only one type of element. O₂ and O₃ are allotropes (同素异形体) — elemental forms, not compounds. Compounds contain two or more elements. Mixtures and compounds are mutually exclusive categories.'
        },
        {
          id: 'ch01-sec02-ex02',
          type: 'mcq',
          question: '下列互为同素异形体的是 (Which pair are allotropes of each other?)',
          options: [
            'H₂O 和 H₂O₂',
            '金刚石 和 石墨 (Diamond and Graphite)',
            'O₂ 和 CO₂',
            '白磷 和 氯化磷 (White phosphorus and phosphorus chloride)'
          ],
          answer: 1,
          explanation: 'Diamond (金刚石) and graphite (石墨) are both pure carbon substances — they are allotropes (同素异形体). H₂O and H₂O₂ are different compounds. O₂ and CO₂ contain different elements. Phosphorus chloride is a compound, not an allotrope.'
        },
        {
          id: 'ch01-sec02-ex03',
          type: 'mcq',
          question: 'KMnO₄（高锰酸钾）中包含的元素种类数为 (How many types of elements does KMnO₄ contain?)',
          options: ['1种', '2种', '3种', '4种'],
          answer: 2,
          explanation: 'KMnO₄ contains potassium (K), manganese (Mn), and oxygen (O) — 3 types of elements. Therefore it is a compound with 3 element types.'
        }
      ]
    },

    // ─── SECTION 3 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec03',
      title: '3. Acid–Base–Salt–Oxide System',
      content: `
<h2>酸碱盐氧化物分类体系 — The Acid–Base–Salt–Oxide Classification System</h2>

<p>Compounds in chemistry are classified into four major categories based on their composition and properties:</p>

<div class="definition">
  <strong>Oxide (氧化物)</strong>: A compound of an element with oxygen only. Formula: element + O.
  <br>Examples: H₂O, CO₂, SO₃, Fe₂O₃, Na₂O, CaO
  <br><br>
  <strong>Acid (酸)</strong>: A compound that produces H⁺ ions in water solution, or more precisely, a hydrogen-containing compound that donates protons.
  <br>Examples: HCl, H₂SO₄, HNO₃, H₃PO₄, CH₃COOH
  <br><br>
  <strong>Base (碱)</strong>: A compound that produces OH⁻ ions in water. Contains metal + hydroxide group (OH).
  <br>Examples: NaOH, Ca(OH)₂, KOH, NH₃·H₂O (ammonia hydrate)
  <br><br>
  <strong>Salt (盐)</strong>: An ionic compound formed from the reaction of an acid and a base (neutralization), composed of a metal cation and an acid anion.
  <br>Examples: NaCl, CaCO₃, Na₂SO₄, NH₄Cl, CuSO₄
</div>

<h3>Oxide Classification (氧化物细分)</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Type</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Definition</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Acidic oxide (酸性氧化物)</td>
      <td style="padding:8px;border:1px solid #30363d;">Reacts with base to form salt + water</td>
      <td style="padding:8px;border:1px solid #30363d;">CO₂, SO₃, SO₂, P₂O₅, SiO₂</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Basic oxide (碱性氧化物)</td>
      <td style="padding:8px;border:1px solid #30363d;">Reacts with acid to form salt + water</td>
      <td style="padding:8px;border:1px solid #30363d;">Na₂O, CaO, Fe₂O₃, CuO, MgO</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Amphoteric oxide (两性氧化物)</td>
      <td style="padding:8px;border:1px solid #30363d;">Reacts with both acid AND base</td>
      <td style="padding:8px;border:1px solid #30363d;">Al₂O₃ (aluminium oxide)</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Non-salt-forming oxide (不成盐氧化物)</td>
      <td style="padding:8px;border:1px solid #30363d;">Does not react with acid or base</td>
      <td style="padding:8px;border:1px solid #30363d;">CO, NO (at room temperature)</td>
    </tr>
  </tbody>
</table>

<h3>Acid Classification (酸的细分)</h3>
<ul>
  <li><strong>Strong acids (强酸)</strong>: Fully ionize in water — HCl, H₂SO₄, HNO₃, HClO₄, HBr, HI</li>
  <li><strong>Weak acids (弱酸)</strong>: Partially ionize — CH₃COOH (acetic), H₂CO₃ (carbonic), H₃PO₄</li>
  <li><strong>Oxyacids (含氧酸)</strong>: Contain oxygen — H₂SO₄, HNO₃, H₃PO₄</li>
  <li><strong>Hydroacids (无氧酸)</strong>: No oxygen — HCl, HBr, HI, H₂S</li>
</ul>

<h3>Base Classification (碱的细分)</h3>
<ul>
  <li><strong>Soluble bases (可溶性碱)</strong>: Dissolve in water — NaOH, KOH, Ba(OH)₂, NH₃·H₂O</li>
  <li><strong>Insoluble bases (难溶性碱)</strong>: Don't dissolve easily — Fe(OH)₃, Cu(OH)₂, Al(OH)₃, Ca(OH)₂ (slightly)</li>
</ul>

<div class="example">
  <strong>Example 3:</strong> Key reactions to memorize:
  <br><br>
  Acidic oxide + base → salt + water:
  \\[\\text{CO}_2 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O}\\]
  <br>
  Basic oxide + acid → salt + water:
  \\[\\text{CaO} + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O}\\]
  <br>
  Acid + base (neutralization) → salt + water:
  \\[\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}\\]
  <br>
  Aluminium oxide (amphoteric) reactions:
  \\[\\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}\\]
  \\[\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\rightarrow 2\\text{NaAlO}_2 + \\text{H}_2\\text{O}\\]
</div>

<div class="remark">
  <strong>Memory Aid:</strong> Think of acids as "H-donors" and bases as "OH-donors". When they meet, H and OH combine to make water, leaving the remaining ions to form a salt.
</div>
`,
      visualizations: [
        {
          id: 'viz-acid-base-salt-map',
          title: 'Acid–Base–Salt Relationship Map',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 400 });

            const reactions = [
              { from: 'Acid\n(酸)', to: 'Salt\n(盐)', via: '+ Base / Metal / Metal Oxide', color: '#58a6ff' },
              { from: 'Base\n(碱)', to: 'Salt\n(盐)', via: '+ Acid / Acidic Oxide', color: '#3fb950' },
              { from: 'Acidic Oxide\n(酸性氧化物)', to: 'Acid\n(酸)', via: '+ H₂O', color: '#f0883e' },
              { from: 'Basic Oxide\n(碱性氧化物)', to: 'Base\n(碱)', via: '+ H₂O', color: '#bc8cff' },
              { from: 'Acidic Oxide\n(酸性氧化物)', to: 'Salt\n(盐)', via: '+ Basic Oxide / Base', color: '#d29922' },
              { from: 'Basic Oxide\n(碱性氧化物)', to: 'Salt\n(盐)', via: '+ Acidic Oxide / Acid', color: '#3fb9a0' },
            ];

            const nodeMap = {
              'Acid\n(酸)': { x: 150, y: 130 },
              'Base\n(碱)': { x: 550, y: 130 },
              'Salt\n(盐)': { x: 350, y: 300 },
              'Acidic Oxide\n(酸性氧化物)': { x: 110, y: 280 },
              'Basic Oxide\n(碱性氧化物)': { x: 590, y: 280 },
            };

            const nodeColors = {
              'Acid\n(酸)': '#f85149',
              'Base\n(碱)': '#3fb950',
              'Salt\n(盐)': '#58a6ff',
              'Acidic Oxide\n(酸性氧化物)': '#f0883e',
              'Basic Oxide\n(碱性氧化物)': '#bc8cff',
            };

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              viz.screenText('Relationships Among Inorganic Compound Classes', 350, 22, viz.colors.white, 14);

              // Draw arrows
              for (const r of reactions) {
                const a = nodeMap[r.from], b = nodeMap[r.to];
                const dx = b.x - a.x, dy = b.y - a.y;
                const len = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / len, uy = dy / len;
                const ox = a.x + ux * 45, oy = a.y + uy * 25;
                const tx = b.x - ux * 45, ty = b.y - uy * 25;

                ctx.strokeStyle = r.color + '88'; ctx.lineWidth = 1.5;
                ctx.setLineDash([5, 4]);
                ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(tx, ty); ctx.stroke();
                ctx.setLineDash([]);

                // Arrow head
                const angle = Math.atan2(ty - oy, tx - ox);
                ctx.fillStyle = r.color + '88';
                ctx.beginPath();
                ctx.moveTo(tx, ty);
                ctx.lineTo(tx - 10 * Math.cos(angle - 0.4), ty - 10 * Math.sin(angle - 0.4));
                ctx.lineTo(tx - 10 * Math.cos(angle + 0.4), ty - 10 * Math.sin(angle + 0.4));
                ctx.closePath(); ctx.fill();

                // Via label
                ctx.fillStyle = r.color + 'cc';
                ctx.font = '9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                const mx = (ox + tx) / 2, my = (oy + ty) / 2;
                const perpX = -uy * 14, perpY = ux * 14;
                ctx.fillText(r.via, mx + perpX, my + perpY);
              }

              // Draw nodes
              for (const [label, pos] of Object.entries(nodeMap)) {
                const col = nodeColors[label];
                const lines = label.split('\n');
                ctx.fillStyle = col + '22';
                ctx.strokeStyle = col; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.arc(pos.x, pos.y, 42, 0, Math.PI * 2);
                ctx.fill(); ctx.stroke();
                ctx.fillStyle = col; ctx.textAlign = 'center';
                if (lines.length === 1) {
                  ctx.font = 'bold 13px sans-serif'; ctx.textBaseline = 'middle';
                  ctx.fillText(lines[0], pos.x, pos.y);
                } else {
                  ctx.font = 'bold 13px sans-serif'; ctx.textBaseline = 'middle';
                  ctx.fillText(lines[0], pos.x, pos.y - 9);
                  ctx.font = '10px sans-serif';
                  ctx.fillStyle = col + 'cc';
                  ctx.fillText(lines[1], pos.x, pos.y + 9);
                }
              }

              viz.screenText('Hover over nodes to see reactions (see table above)', 350, 380, viz.colors.text, 11);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec03-ex01',
          type: 'mcq',
          question: '下列氧化物中属于碱性氧化物的是 (Which oxide below is a basic oxide?)',
          options: ['CO₂', 'SO₃', 'Na₂O', 'Al₂O₃'],
          answer: 2,
          explanation: 'Na₂O (sodium oxide) is a basic oxide — it reacts with water to form NaOH: Na₂O + H₂O → 2NaOH. CO₂ and SO₃ are acidic oxides. Al₂O₃ is amphoteric (两性氧化物).'
        },
        {
          id: 'ch01-sec03-ex02',
          type: 'mcq',
          question: '下列物质中属于盐的是 (Which of the following is a salt?)',
          options: ['NaOH', 'H₂SO₄', 'CuSO₄', 'SO₃'],
          answer: 2,
          explanation: 'CuSO₄ (copper sulfate) is a salt — formed from Cu²⁺ cation and SO₄²⁻ anion. NaOH is a base, H₂SO₄ is an acid, SO₃ is an acidic oxide.'
        },
        {
          id: 'ch01-sec03-ex03',
          type: 'mcq',
          question: 'Al₂O₃与NaOH溶液反应的产物是 (Products of Al₂O₃ reacting with NaOH solution are):',
          options: [
            'Al(OH)₃ + Na₂O',
            'NaAlO₂ + H₂O',
            'AlO₂⁻ only',
            'Al₂O₃ does not react with NaOH'
          ],
          answer: 1,
          explanation: 'Al₂O₃ is amphoteric — it reacts with NaOH: Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O. The product is sodium aluminate (NaAlO₂) and water.'
        },
        {
          id: 'ch01-sec03-ex04',
          type: 'mcq',
          question: 'HCl属于 (HCl is classified as):',
          options: ['含氧酸 Oxyacid', '无氧强酸 Non-oxyacid strong acid', '弱酸 Weak acid', '碱 Base'],
          answer: 1,
          explanation: 'HCl is hydrochloric acid — a strong acid (完全电离) that contains no oxygen, so it is a non-oxyacid (无氧酸). It is not a weak acid because it fully ionizes in water: HCl → H⁺ + Cl⁻.'
        }
      ]
    },

    // ─── SECTION 4 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec04',
      title: '4. Transformation Relationships',
      content: `
<h2>物质间的转化关系 — Transformation Relationships Between Substances</h2>

<p>One of the most powerful ideas in chemistry is that substances can be <em>interconverted</em> through chemical reactions.
Understanding these pathways is essential for both predicting reactions and for industrial synthesis.</p>

<h3>The Four Big Transformation Chains</h3>

<div class="definition">
  <strong>Metal Transformation Chain (金属转化链):</strong>
  <br>
  \\[\\text{Metal} \\xrightarrow{+O_2} \\text{Basic Oxide} \\xrightarrow{+H_2O} \\text{Base} \\xrightarrow{+\\text{Acid}} \\text{Salt}\\]
  <br>
  Example with sodium (Na):
  \\[\\text{Na} \\xrightarrow{+O_2} \\text{Na}_2\\text{O} \\xrightarrow{+H_2O} \\text{NaOH} \\xrightarrow{+\\text{HCl}} \\text{NaCl}\\]
</div>

<div class="definition">
  <strong>Nonmetal Transformation Chain (非金属转化链):</strong>
  <br>
  \\[\\text{Nonmetal} \\xrightarrow{+O_2} \\text{Acidic Oxide} \\xrightarrow{+H_2O} \\text{Acid} \\xrightarrow{+\\text{Base}} \\text{Salt}\\]
  <br>
  Example with sulfur (S):
  \\[\\text{S} \\xrightarrow{+O_2} \\text{SO}_2 \\xrightarrow{+O_2/\\text{cat}} \\text{SO}_3 \\xrightarrow{+H_2O} \\text{H}_2\\text{SO}_4 \\xrightarrow{+\\text{NaOH}} \\text{Na}_2\\text{SO}_4\\]
</div>

<h3>Common Transformation Reactions Table</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Starting Material</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Reagent</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Product</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Equation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Na (sodium)</td>
      <td style="padding:8px;border:1px solid #30363d;">O₂ (limited)</td>
      <td style="padding:8px;border:1px solid #30363d;">Na₂O</td>
      <td style="padding:8px;border:1px solid #30363d;">4Na + O₂ → 2Na₂O</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Na (sodium)</td>
      <td style="padding:8px;border:1px solid #30363d;">O₂ (excess, burn)</td>
      <td style="padding:8px;border:1px solid #30363d;">Na₂O₂</td>
      <td style="padding:8px;border:1px solid #30363d;">2Na + O₂ → Na₂O₂</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Na₂O</td>
      <td style="padding:8px;border:1px solid #30363d;">H₂O</td>
      <td style="padding:8px;border:1px solid #30363d;">NaOH</td>
      <td style="padding:8px;border:1px solid #30363d;">Na₂O + H₂O → 2NaOH</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">NaOH</td>
      <td style="padding:8px;border:1px solid #30363d;">CO₂ (excess)</td>
      <td style="padding:8px;border:1px solid #30363d;">NaHCO₃</td>
      <td style="padding:8px;border:1px solid #30363d;">NaOH + CO₂ → NaHCO₃</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">NaOH</td>
      <td style="padding:8px;border:1px solid #30363d;">CO₂ (limited)</td>
      <td style="padding:8px;border:1px solid #30363d;">Na₂CO₃</td>
      <td style="padding:8px;border:1px solid #30363d;">2NaOH + CO₂ → Na₂CO₃ + H₂O</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">CaO</td>
      <td style="padding:8px;border:1px solid #30363d;">H₂O</td>
      <td style="padding:8px;border:1px solid #30363d;">Ca(OH)₂</td>
      <td style="padding:8px;border:1px solid #30363d;">CaO + H₂O → Ca(OH)₂</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #30363d;">Ca(OH)₂</td>
      <td style="padding:8px;border:1px solid #30363d;">CO₂</td>
      <td style="padding:8px;border:1px solid #30363d;">CaCO₃ ↓ + H₂O</td>
      <td style="padding:8px;border:1px solid #30363d;">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</td>
    </tr>
  </tbody>
</table>

<div class="warning">
  <strong>Exam Trap:</strong> When Na burns in excess O₂, it forms Na₂O₂ (sodium peroxide), NOT Na₂O! Na₂O₂ is special — it contains the O₂²⁻ peroxide ion and reacts vigorously with both water and CO₂, releasing O₂. This is why it's used in breathing apparatus for miners and firefighters.
  \\[2\\text{Na}_2\\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4\\text{NaOH} + \\text{O}_2\\uparrow\\]
  \\[2\\text{Na}_2\\text{O}_2 + 2\\text{CO}_2 \\rightarrow 2\\text{Na}_2\\text{CO}_3 + \\text{O}_2\\uparrow\\]
</div>

<div class="remark">
  <strong>CO₂ + Ca(OH)₂ → white precipitate</strong> is a classic test for CO₂ in the lab. The white solid is CaCO₃ (limestone). If excess CO₂ is added, the precipitate dissolves:
  \\[\\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(HCO}_3)_2 \\text{ (soluble)}\\]
</div>
`,
      visualizations: [
        {
          id: 'viz-transformation-network',
          title: 'Substance Transformation Network',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 420 });

            const substances = [
              { id: 'Na', label: 'Na', x: 90, y: 200, color: '#58a6ff', r: 28 },
              { id: 'Na2O', label: 'Na₂O', x: 220, y: 120, color: '#3fb9a0', r: 28 },
              { id: 'Na2O2', label: 'Na₂O₂', x: 220, y: 290, color: '#f85149', r: 28 },
              { id: 'NaOH', label: 'NaOH', x: 380, y: 120, color: '#3fb950', r: 28 },
              { id: 'Na2CO3', label: 'Na₂CO₃', x: 540, y: 100, color: '#d29922', r: 32 },
              { id: 'NaHCO3', label: 'NaHCO₃', x: 540, y: 200, color: '#f0883e', r: 32 },
              { id: 'NaCl', label: 'NaCl', x: 540, y: 300, color: '#bc8cff', r: 28 },
              { id: 'Na2SO4', label: 'Na₂SO₄', x: 380, y: 330, color: '#f778ba', r: 32 },
            ];

            const arrows = [
              { from: 'Na', to: 'Na2O', label: '+O₂(limited)', color: '#3fb9a0' },
              { from: 'Na', to: 'Na2O2', label: '+O₂(burn)', color: '#f85149' },
              { from: 'Na2O', to: 'NaOH', label: '+H₂O', color: '#3fb950' },
              { from: 'NaOH', to: 'Na2CO3', label: '+CO₂(limited)', color: '#d29922' },
              { from: 'NaOH', to: 'NaHCO3', label: '+CO₂(excess)', color: '#f0883e' },
              { from: 'NaOH', to: 'NaCl', label: '+HCl', color: '#bc8cff' },
              { from: 'NaOH', to: 'Na2SO4', label: '+H₂SO₄', color: '#f778ba' },
              { from: 'Na2O2', to: 'NaOH', label: '+H₂O', color: '#3fb950' },
            ];

            let highlighted = null;

            function getSub(id) { return substances.find(s => s.id === id); }

            function draw() {
              viz.clear();
              viz.screenText('Sodium Compound Transformation Network', 350, 22, viz.colors.white, 14);
              viz.screenText('Click a substance node to highlight its pathways', 350, 400, viz.colors.text, 11);

              const ctx = viz.ctx;

              for (const a of arrows) {
                const from = getSub(a.from), to = getSub(a.to);
                const dx = to.x - from.x, dy = to.y - from.y;
                const len = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / len, uy = dy / len;
                const ox = from.x + ux * (from.r + 3);
                const oy = from.y + uy * (from.r + 3);
                const tx = to.x - ux * (to.r + 3);
                const ty = to.y - uy * (to.r + 3);
                const isHighlighted = highlighted === a.from || highlighted === a.to;
                ctx.globalAlpha = highlighted ? (isHighlighted ? 1 : 0.2) : 1;
                ctx.strokeStyle = a.color; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(tx, ty); ctx.stroke();
                const angle = Math.atan2(ty - oy, tx - ox);
                ctx.fillStyle = a.color;
                ctx.beginPath();
                ctx.moveTo(tx, ty);
                ctx.lineTo(tx - 10 * Math.cos(angle - 0.45), ty - 10 * Math.sin(angle - 0.45));
                ctx.lineTo(tx - 10 * Math.cos(angle + 0.45), ty - 10 * Math.sin(angle + 0.45));
                ctx.closePath(); ctx.fill();
                ctx.fillStyle = a.color; ctx.font = '9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                const mx = (ox + tx) / 2 + uy * (-12);
                const my = (oy + ty) / 2 + ux * 12;
                ctx.fillText(a.label, mx, my);
                ctx.globalAlpha = 1;
              }

              for (const s of substances) {
                const isHighlighted = highlighted === s.id;
                ctx.globalAlpha = highlighted ? (isHighlighted ? 1 : 0.35) : 1;
                ctx.fillStyle = s.color + '22';
                ctx.strokeStyle = s.color; ctx.lineWidth = isHighlighted ? 3 : 1.5;
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
                ctx.fillStyle = s.color; ctx.font = 'bold 12px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(s.label, s.x, s.y);
                ctx.globalAlpha = 1;
              }
            }

            draw();

            viz.canvas.addEventListener('click', (e) => {
              const r = viz.canvas.getBoundingClientRect();
              const mx = e.clientX - r.left, my = e.clientY - r.top;
              let hit = null;
              for (const s of substances) {
                if (Math.sqrt((mx - s.x) ** 2 + (my - s.y) ** 2) < s.r + 4) { hit = s.id; break; }
              }
              highlighted = (highlighted === hit) ? null : hit;
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec04-ex01',
          type: 'mcq',
          question: 'Na在充足O₂中点燃后得到的产物是 (Burning Na in excess O₂ produces):',
          options: ['Na₂O', 'Na₂O₂', 'NaOH', 'Na₂CO₃'],
          answer: 1,
          explanation: 'When sodium burns in excess O₂, it produces sodium peroxide (Na₂O₂): 2Na + O₂ → Na₂O₂. Na₂O is only formed when Na reacts with a limited amount of O₂ at room temperature.'
        },
        {
          id: 'ch01-sec04-ex02',
          type: 'mcq',
          question: '向澄清石灰水中通入过量CO₂后，现象是 (Passing excess CO₂ into clear limewater):',
          options: [
            '产生白色沉淀，沉淀不消失 (White precipitate forms, does not dissolve)',
            '溶液变蓝色 (Solution turns blue)',
            '先产生白色沉淀，后沉淀消失变澄清 (White precipitate first, then dissolves to clear)',
            '没有明显现象 (No visible change)'
          ],
          answer: 2,
          explanation: 'First, CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O (white precipitate). Then excess CO₂ dissolves the precipitate: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (soluble). The solution clears.'
        },
        {
          id: 'ch01-sec04-ex03',
          type: 'mcq',
          question: '以下转化中不能一步实现的是 (Which transformation CANNOT be achieved in one step?)',
          options: [
            'Na → NaOH',
            'Na₂O → NaOH',
            'NaOH → Na₂CO₃',
            'Na → Na₂CO₃'
          ],
          answer: 3,
          explanation: 'Na → Na₂CO₃ cannot be done in one step — sodium does not react directly with CO₂ to give Na₂CO₃. The pathway must go Na → Na₂O/NaOH → Na₂CO₃. The other three can each be achieved in one reaction.'
        }
      ]
    },

    // ─── SECTION 5 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec05',
      title: '5. Dispersions & Colloids',
      content: `
<h2>分散系与胶体 — Dispersions and Colloids</h2>

<p>When one substance is spread through another, we call the system a <strong>dispersion (分散系)</strong>.
The substance being dispersed is the <em>dispersed phase (分散质)</em>,
and the medium it's spread in is the <em>dispersion medium (分散剂)</em>.</p>

<h3>Three Types of Dispersions</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Type (类型)</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Particle Size</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Appearance</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Stability</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#1a2a1a;">
      <td style="padding:8px;border:1px solid #30363d;"><strong>True solution (溶液)</strong></td>
      <td style="padding:8px;border:1px solid #30363d;">&lt; 1 nm (ions/molecules)</td>
      <td style="padding:8px;border:1px solid #30363d;">Clear, transparent</td>
      <td style="padding:8px;border:1px solid #30363d;">Very stable, no settling</td>
      <td style="padding:8px;border:1px solid #30363d;">NaCl(aq), sugar water</td>
    </tr>
    <tr style="background:#1a1a2a;">
      <td style="padding:8px;border:1px solid #30363d;"><strong>Colloid (胶体)</strong></td>
      <td style="padding:8px;border:1px solid #30363d;">1–100 nm (clusters)</td>
      <td style="padding:8px;border:1px solid #30363d;">Clear or slightly cloudy</td>
      <td style="padding:8px;border:1px solid #30363d;">Stable (charged particles repel)</td>
      <td style="padding:8px;border:1px solid #30363d;">Fe(OH)₃ sol, blood, milk, fog, jelly</td>
    </tr>
    <tr style="background:#2a1a1a;">
      <td style="padding:8px;border:1px solid #30363d;"><strong>Suspension (浊液)</strong></td>
      <td style="padding:8px;border:1px solid #30363d;">&gt; 100 nm (visible)</td>
      <td style="padding:8px;border:1px solid #30363d;">Cloudy, opaque</td>
      <td style="padding:8px;border:1px solid #30363d;">Unstable — settles on standing</td>
      <td style="padding:8px;border:1px solid #30363d;">Muddy water, chalk in water</td>
    </tr>
  </tbody>
</table>

<h3>The Tyndall Effect (丁达尔效应)</h3>

<div class="definition">
  <strong>Tyndall Effect (丁达尔效应)</strong>: When a beam of light passes through a colloid, the path of the beam becomes visible as a bright cone or column of scattered light.
  <br><br>
  This occurs because colloid particles (1–100 nm) are large enough to scatter visible light (wavelength ~400–700 nm).
  Solution particles are too small (ionic/molecular) to scatter light noticeably.
</div>

<div class="example">
  <strong>Demonstration:</strong> Shine a laser pointer through:
  <ul>
    <li>Saltwater solution → no visible beam</li>
    <li>Iron(III) hydroxide colloid (Fe(OH)₃ sol) → bright glowing beam visible!</li>
  </ul>
  The Tyndall effect is used to <strong>distinguish colloids from solutions</strong>.
</div>

<h3>Properties of Colloids</h3>
<ul>
  <li><strong>Tyndall effect (丁达尔效应)</strong>: Distinguishes from solutions</li>
  <li><strong>Brownian motion (布朗运动)</strong>: Particles move randomly, do not settle</li>
  <li><strong>Electrophoresis (电泳)</strong>: Charged colloidal particles migrate in electric field</li>
  <li><strong>Coagulation (聚沉)</strong>: Adding electrolytes (or heating) causes particles to aggregate and precipitate</li>
  <li><strong>Dialysis (渗析)</strong>: Semi-permeable membrane lets solvent/ions through but not colloid particles — used to purify colloids</li>
</ul>

<h3>Preparation of Fe(OH)₃ Colloid (重要实验)</h3>
<div class="example">
  <strong>Method:</strong> Add FeCl₃ solution dropwise to boiling distilled water (not FeCl₃ solution!):
  \\[\\text{FeCl}_3 + 3\\text{H}_2\\text{O} \\xrightarrow{\\Delta} \\text{Fe(OH)}_3\\text{(sol)} + 3\\text{HCl}\\]
  Stop boiling as soon as the solution turns reddish-brown. Do NOT add electrolytes — it will coagulate!
</div>

<div class="warning">
  <strong>Common Exam Question:</strong> Why does adding salt (NaCl) destroy a Fe(OH)₃ colloid?
  <br>
  Electrolytes neutralize the charges on colloidal particles, causing them to aggregate → precipitate (coagulation, 聚沉).
</div>

<h3>Real-World Colloids (生活中的胶体)</h3>
<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="background:#1a1a40;">
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Colloid Type</th>
      <th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #30363d;">Sol (液溶胶)</td><td style="padding:8px;border:1px solid #30363d;">Fe(OH)₃ sol, ink, paint</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Gel (凝胶)</td><td style="padding:8px;border:1px solid #30363d;">Jelly, silica gel, agar</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Aerosol — liquid (气溶胶)</td><td style="padding:8px;border:1px solid #30363d;">Fog, clouds, mist</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Aerosol — solid</td><td style="padding:8px;border:1px solid #30363d;">Smoke, dust in air</td></tr>
    <tr><td style="padding:8px;border:1px solid #30363d;">Emulsion (乳浊液)</td><td style="padding:8px;border:1px solid #30363d;">Milk, mayonnaise</td></tr>
  </tbody>
</table>
`,
      visualizations: [
        {
          id: 'viz-tyndall',
          title: 'Tyndall Effect Demo — Light Through Colloid vs Solution',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 400 });
            let mode = 'solution';
            let t = 0;
            let animId = null;

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
            wrap.insertBefore(btnRow, wrap.firstChild);

            function makeBtn(label, m, color) {
              const btn = document.createElement('button');
              btn.textContent = label;
              btn.style.cssText = `padding:6px 16px;border:1px solid ${color};border-radius:6px;background:#0c0c20;color:${color};cursor:pointer;font-size:0.82rem;`;
              btn.addEventListener('click', () => { mode = m; });
              btnRow.appendChild(btn);
            }
            makeBtn('溶液 Solution (NaCl)', 'solution', '#3fb9a0');
            makeBtn('胶体 Colloid (Fe(OH)₃)', 'colloid', '#f0883e');
            makeBtn('浊液 Suspension', 'suspension', '#8b949e');

            function draw(ts) {
              t = ts / 1000;
              viz.clear();
              const ctx = viz.ctx;
              const w = viz.width, h = viz.height;

              // Beaker
              const bx = 200, by = 100, bw = 300, bh = 240;
              ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(bx, by);
              ctx.lineTo(bx, by + bh);
              ctx.lineTo(bx + bw, by + bh);
              ctx.lineTo(bx + bw, by);
              ctx.stroke();

              // Liquid fill
              let liquidColor;
              if (mode === 'solution') liquidColor = '#3fb9a020';
              else if (mode === 'colloid') liquidColor = '#f0883e15';
              else liquidColor = '#8b949e30';

              ctx.fillStyle = liquidColor;
              ctx.fillRect(bx + 2, by, bw - 4, bh - 2);

              // Particles (for suspension and colloid)
              if (mode === 'colloid' || mode === 'suspension') {
                const count = mode === 'colloid' ? 80 : 40;
                const psize = mode === 'colloid' ? 2 : 5;
                const pcol = mode === 'colloid' ? '#f0883e88' : '#8b949eaa';
                for (let i = 0; i < count; i++) {
                  const seed = i * 137.508;
                  const px = bx + 10 + ((seed * 73.1) % (bw - 20));
                  const pbase = by + 10 + ((seed * 41.3) % (bh - 30));
                  const drift = mode === 'colloid' ? Math.sin(t * 0.5 + seed) * 3 : 0;
                  const settle = mode === 'suspension' ? Math.min((t * 5 * ((seed % 10) / 10 + 0.5)) % (bh - 20), bh - 20) : 0;
                  const py = mode === 'suspension' ? by + settle : pbase + drift;
                  ctx.fillStyle = pcol;
                  ctx.beginPath(); ctx.arc(px, py, psize, 0, Math.PI * 2); ctx.fill();
                }
              }

              // Light beam from left
              const beamY = by + bh / 2;
              const beamW = 14;

              // Beam entering from left
              const gradient = ctx.createLinearGradient(0, beamY, bx, beamY);
              gradient.addColorStop(0, 'transparent');
              gradient.addColorStop(1, '#ffff8088');
              ctx.fillStyle = gradient;
              ctx.fillRect(60, beamY - beamW / 2, bx - 60, beamW);

              // Beam through liquid
              if (mode === 'solution') {
                // Beam passes through invisible — barely visible
                ctx.fillStyle = '#ffff8008';
                ctx.fillRect(bx, beamY - beamW / 2, bw, beamW);
              } else if (mode === 'colloid') {
                // Tyndall: bright scattered cone
                const coneGrad = ctx.createLinearGradient(bx, beamY, bx + bw, beamY);
                coneGrad.addColorStop(0, '#ffff6088');
                coneGrad.addColorStop(0.5, '#ffaa4060');
                coneGrad.addColorStop(1, '#ff882040');
                ctx.fillStyle = coneGrad;
                ctx.beginPath();
                ctx.moveTo(bx, beamY - beamW / 2);
                ctx.lineTo(bx + bw, beamY - beamW * 2);
                ctx.lineTo(bx + bw, beamY + beamW * 2);
                ctx.lineTo(bx, beamY + beamW / 2);
                ctx.closePath(); ctx.fill();
              } else {
                // Suspension: beam absorbed/scattered
                ctx.fillStyle = '#ffff4018';
                ctx.fillRect(bx, beamY - beamW / 2, bw / 3, beamW);
              }

              // Beam exiting right
              if (mode === 'solution') {
                const egr = ctx.createLinearGradient(bx + bw, beamY, w - 60, beamY);
                egr.addColorStop(0, '#ffff8066');
                egr.addColorStop(1, 'transparent');
                ctx.fillStyle = egr;
                ctx.fillRect(bx + bw, beamY - beamW / 2, w - 60 - bx - bw, beamW);
              }

              // Labels
              ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
              if (mode === 'solution') {
                ctx.fillStyle = '#3fb9a0';
                ctx.fillText('溶液 (Solution)', bx + bw / 2, by - 15);
                ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                ctx.fillText('Beam passes through invisible — no Tyndall Effect', bx + bw / 2, by + bh + 20);
                ctx.fillText('Particles < 1 nm: ions and molecules', bx + bw / 2, by + bh + 38);
              } else if (mode === 'colloid') {
                ctx.fillStyle = '#f0883e';
                ctx.fillText('胶体 Fe(OH)₃ (Colloid)', bx + bw / 2, by - 15);
                ctx.fillStyle = '#f0883e'; ctx.font = '12px sans-serif';
                ctx.fillText('Tyndall Effect! Bright light cone visible (丁达尔效应)', bx + bw / 2, by + bh + 20);
                ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                ctx.fillText('Particles 1–100 nm: scatter visible light', bx + bw / 2, by + bh + 38);
              } else {
                ctx.fillStyle = '#8b949e';
                ctx.fillText('浊液 (Suspension)', bx + bw / 2, by - 15);
                ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                ctx.fillText('Beam blocked — particles settle over time', bx + bw / 2, by + bh + 20);
                ctx.fillText('Particles > 100 nm: visible, unstable', bx + bw / 2, by + bh + 38);
              }

              // Laser source
              ctx.fillStyle = '#ffff00';
              ctx.beginPath(); ctx.arc(50, beamY, 12, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#0c0c20'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('光源', 50, beamY);

              animId = requestAnimationFrame(draw);
            }

            animId = requestAnimationFrame(draw);

            const obs = new IntersectionObserver((entries) => {
              if (!entries[0].isIntersecting && animId) {
                cancelAnimationFrame(animId);
                animId = null;
              } else if (entries[0].isIntersecting && !animId) {
                animId = requestAnimationFrame(draw);
              }
            });
            obs.observe(wrap);
          }
        },
        {
          id: 'viz-particle-size',
          title: 'Particle Size Comparison — Solution vs Colloid vs Suspension',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 340 });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              viz.screenText('Particle Size Comparison: Solution vs Colloid vs Suspension', 350, 20, viz.colors.white, 14);

              const sections = [
                {
                  label: '溶液 Solution',
                  sublabel: 'particle < 1 nm\n(ions / molecules)',
                  x: 117, color: '#3fb9a0',
                  particles: Array.from({ length: 12 }, (_, i) => ({
                    x: 60 + (i % 4) * 30,
                    y: 130 + Math.floor(i / 4) * 30,
                    r: 3
                  }))
                },
                {
                  label: '胶体 Colloid',
                  sublabel: '1 nm < particle < 100 nm\n(colloidal clusters)',
                  x: 350, color: '#f0883e',
                  particles: Array.from({ length: 6 }, (_, i) => ({
                    x: 270 + (i % 3) * 60,
                    y: 140 + Math.floor(i / 3) * 60,
                    r: 10
                  }))
                },
                {
                  label: '浊液 Suspension',
                  sublabel: 'particle > 100 nm\n(visible chunks)',
                  x: 590, color: '#8b949e',
                  particles: Array.from({ length: 3 }, (_, i) => ({
                    x: 510 + i * 65,
                    y: 180,
                    r: 24
                  }))
                }
              ];

              // Dividers
              ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
              ctx.beginPath(); ctx.moveTo(233, 60); ctx.lineTo(233, 300); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(466, 60); ctx.lineTo(466, 300); ctx.stroke();
              ctx.setLineDash([]);

              for (const s of sections) {
                ctx.fillStyle = s.color;
                ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
                ctx.fillText(s.label, s.x, 55);
                ctx.fillStyle = '#8b949e'; ctx.font = '10px sans-serif';
                const lines = s.sublabel.split('\n');
                ctx.fillText(lines[0], s.x, 73);
                ctx.fillText(lines[1], s.x, 87);

                for (const p of s.particles) {
                  ctx.fillStyle = s.color + '55';
                  ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 2, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = s.color;
                  ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
                }
              }

              // Scale bar
              ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(60, 290); ctx.lineTo(640, 290); ctx.stroke();
              ctx.fillStyle = '#58a6ff'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('← Increasing particle size →', 350, 310);
              ctx.fillText('1 nm', 233, 308); ctx.fillText('100 nm', 466, 308);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec05-ex01',
          type: 'mcq',
          question: '区分溶液和胶体的最简便方法是 (The simplest method to distinguish a solution from a colloid is):',
          options: [
            '过滤 Filtration',
            '用激光笔照射，观察丁达尔效应 (Shine a laser — observe Tyndall effect)',
            '加热 Heating',
            '测量密度 Measuring density'
          ],
          answer: 1,
          explanation: 'The Tyndall effect (丁达尔效应) is the definitive test: a laser beam shows a bright path through a colloid but not through a solution. This is because colloid particles (1–100 nm) scatter light, while solution particles (< 1 nm) do not.'
        },
        {
          id: 'ch01-sec05-ex02',
          type: 'mcq',
          question: '下列分散系属于胶体的是 (Which of the following dispersions is a colloid?)',
          options: ['食盐水 Saltwater', '泥水 Muddy water', '豆浆 Soy milk', '酒精水溶液 Alcohol solution'],
          answer: 2,
          explanation: 'Soy milk (豆浆) is a colloid — it contains large protein and fat particles (1–100 nm) dispersed in water. Saltwater and alcohol solution are true solutions. Muddy water is a suspension (particles > 100 nm).'
        },
        {
          id: 'ch01-sec05-ex03',
          type: 'mcq',
          question: '向Fe(OH)₃胶体中加入大量NaCl溶液会出现 (Adding excess NaCl solution to Fe(OH)₃ colloid causes):',
          options: [
            '无明显变化 No visible change',
            '胶体分层 Colloid separates into layers',
            '胶体聚沉，产生红褐色沉淀 Coagulation — red-brown precipitate forms',
            '胶体变成溶液 Colloid becomes a solution'
          ],
          answer: 2,
          explanation: 'Adding an electrolyte like NaCl neutralizes the surface charges on Fe(OH)₃ colloidal particles, causing them to coagulate (聚沉) and settle as a red-brown precipitate. This process is irreversible.'
        },
        {
          id: 'ch01-sec05-ex04',
          type: 'mcq',
          question: '下列关于胶体的说法正确的是 (Which statement about colloids is correct?)',
          options: [
            '胶体能通过滤纸 (Colloid particles can pass through filter paper)',
            '胶体粒子直径大于100nm (Colloid particles are larger than 100 nm)',
            '胶体不稳定，静置后自然沉降 (Colloids are unstable and settle naturally)',
            '胶体不能通过半透膜 (Colloid particles cannot pass through a semi-permeable membrane)'
          ],
          answer: 3,
          explanation: 'Colloid particles (1–100 nm) cannot pass through semi-permeable membranes (dialysis membranes), which is why dialysis (渗析) is used to purify colloids. They CAN pass through ordinary filter paper (that is a key distinction — only suspensions are caught by filter paper). They do NOT settle naturally due to Brownian motion.'
        },
        {
          id: 'ch01-sec05-ex05',
          type: 'mcq',
          question: '雾属于哪种分散系？(Fog is which type of dispersion?)',
          options: [
            '溶液 Solution',
            '浊液(悬浊液) Suspension',
            '气溶胶 Aerosol colloid',
            '不是分散系 Not a dispersion'
          ],
          answer: 2,
          explanation: 'Fog (雾) is an aerosol (气溶胶) — tiny liquid water droplets (1–100 nm range) dispersed in air (a gas). It is a colloid type. The Tyndall effect explains why fog beams are visible from car headlights!'
        }
      ]
    }

  ]
});
