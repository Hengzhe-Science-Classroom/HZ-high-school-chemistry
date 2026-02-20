window.CHAPTERS.push({
  id: 'ch16',
  number: 16,
  title: 'Biological Macromolecules',
  subtitle: 'The Chemistry of Life',
  sections: [

    // ─── Section 1: Carbohydrates ───────────────────────────────────────────
    {
      id: 'ch16-sec01',
      title: '糖类 — Carbohydrates',
      content: `
<h2>糖类 — Carbohydrates</h2>
<p>糖类（碳水化合物）是生命能量的主要来源，通式为 \\((CH_2O)_n\\)，由碳、氢、氧三种元素组成。</p>

<div class="info-box">
<strong>分类一览</strong>
<ul>
  <li><strong>单糖（Monosaccharides）</strong>：不能水解的最简单糖。代表：葡萄糖 \\(C_6H_{12}O_6\\)、果糖 \\(C_6H_{12}O_6\\)（同分异构体）、核糖 \\(C_5H_{10}O_5\\)。</li>
  <li><strong>二糖（Disaccharides）</strong>：两分子单糖脱水缩合。蔗糖（葡萄糖＋果糖）、麦芽糖（葡萄糖＋葡萄糖），分子式 \\(C_{12}H_{22}O_{11}\\)。</li>
  <li><strong>多糖（Polysaccharides）</strong>：大量葡萄糖聚合，\\((C_6H_{10}O_5)_n\\)。淀粉（植物储能）、纤维素（植物细胞壁）、糖原（动物储能）。</li>
</ul>
</div>

<h3>葡萄糖的结构</h3>
<p>葡萄糖既有链式结构又有环式结构（Haworth投影）。在水溶液中以六元环（吡喃糖）为主要存在形式：</p>
<p>链式：\\(CH_2OH{-}(CHOH)_4{-}CHO\\)（含醛基，属醛糖）</p>
<p>环式：C1的醛基与C5的羟基关环，形成六元氧环。</p>

<div class="env-block experiment">
<strong>葡萄糖的鉴别实验</strong>
<ul>
  <li>银镜反应：与银氨溶液在水浴中反应，在试管壁生成光亮银镜。</li>
  <li>与新制 \\(Cu(OH)_2\\) 反应：生成砖红色 \\(Cu_2O\\) 沉淀（加热条件）。</li>
  <li>两个反应均体现葡萄糖中的<strong>醛基（–CHO）</strong>的还原性。</li>
</ul>
</div>

<h3>蔗糖与麦芽糖</h3>
<table class="data-table">
  <tr><th></th><th>蔗糖</th><th>麦芽糖</th></tr>
  <tr><td>分子式</td><td>\\(C_{12}H_{22}O_{11}\\)</td><td>\\(C_{12}H_{22}O_{11}\\)</td></tr>
  <tr><td>水解产物</td><td>葡萄糖＋果糖</td><td>葡萄糖＋葡萄糖</td></tr>
  <tr><td>银镜反应</td><td>不反应（非还原糖）</td><td>可反应（含游离醛基）</td></tr>
</table>

<h3>淀粉与纤维素</h3>
<p>淀粉与纤维素互为同分异构体（同为 \\((C_6H_{10}O_5)_n\\)），但 \\(n\\) 不同，且连接方式不同（\\(\\alpha\\)-糖苷键 vs \\(\\beta\\)-糖苷键），导致性质差异显著：</p>
<ul>
  <li>淀粉遇碘变蓝（用于鉴别）；纤维素不变色。</li>
  <li>淀粉可被人体酶水解为葡萄糖；纤维素不能被人体消化。</li>
  <li>纤维素可制造纸张、棉花、人造丝（黏胶纤维）。</li>
</ul>

<div class="env-block formula">
水解总反应（酸催化）：
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
              v.screenText('葡萄糖链式结构', v.width / 2, 22, v.colors.teal, 16);
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
              v.screenText('醛基 –CHO', cx + 80, ys[0], v.colors.orange, 11);
              v.screenText('C5–OH 进攻 C1', cx + 90, ys[4], v.colors.yellow, 10);
            }

            function drawRing() {
              v.clear();
              v.screenText('葡萄糖环式结构 (Haworth投影)', v.width / 2, 22, v.colors.teal, 16);
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
              v.screenText('α-D-葡萄糖 (六元吡喃环)', v.width / 2, v.height - 20, v.colors.text, 12);
              v.screenText('C1–OH 在环平面下方 (α型)', v.width / 2, v.height - 40, v.colors.orange, 11);
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
            btn.textContent = '切换链式 ↔ 环式';
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
            drawNode(W*0.42, 240, 110, 38, 'Sucrose', '蔗糖', C.orange);
            drawNode(W*0.58, 240, 110, 38, 'Maltose', '麦芽糖', C.orange);
            drawArrow(W*0.5, 160, W*0.42, 221, C.orange);
            drawArrow(W*0.5, 160, W*0.58, 221, C.orange);

            // Level 2 - Polysaccharides
            drawNode(W*0.72, 240, 110, 38, 'Starch 淀粉', 'α-glucose', C.purple);
            drawNode(W*0.88, 240, 110, 38, 'Cellulose 纤维素', 'β-glucose', C.purple);
            drawArrow(W*0.8, 160, W*0.72, 221, C.purple);
            drawArrow(W*0.8, 160, W*0.88, 221, C.purple);

            // Properties row
            drawNode(W*0.72, 330, 110, 36, 'Digestible', '可消化，储能', C.green);
            drawNode(W*0.88, 330, 110, 36, 'Not digestible', '细胞壁，纤维', C.red);
            drawArrow(W*0.72, 259, W*0.72, 312, C.purple);
            drawArrow(W*0.88, 259, W*0.88, 312, C.purple);

            // Title
            ctx.fillStyle = C.text; ctx.font = '12px -apple-system,sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            ctx.fillText('糖类分类树 — Carbohydrate Classification Tree', W/2, H - 20);
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec01-ex01',
          question: '葡萄糖与果糖的分子式均为 \\(C_6H_{12}O_6\\)，它们的关系是（ ）',
          type: 'mcq',
          options: ['同素异形体', '同位素', '同分异构体', '同种物质'],
          answer: 2,
          explanation: '分子式相同但结构不同的化合物互称同分异构体。葡萄糖含醛基，果糖含酮基，结构不同，故选同分异构体。'
        },
        {
          id: 'ch16-sec01-ex02',
          question: '下列关于淀粉和纤维素的说法，正确的是（ ）',
          type: 'mcq',
          options: ['它们互为同分异构体', '遇碘均变蓝', '淀粉可被人体消化，纤维素不能被人体消化', '两者的水解产物不同'],
          answer: 2,
          explanation: '淀粉与纤维素虽同为 (C₆H₁₀O₅)ₙ，但 n 值不同，不是同分异构体。只有淀粉遇碘变蓝。水解最终产物均为葡萄糖，但人体缺乏分解 β-糖苷键的酶，所以不能消化纤维素。'
        },
        {
          id: 'ch16-sec01-ex03',
          question: '将葡萄糖加入银氨溶液并水浴加热，可以在试管壁上产生银镜。该实验说明葡萄糖分子中含有________官能团。',
          type: 'short',
          answer: '醛基（–CHO）',
          explanation: '银镜反应是醛基的特征反应。葡萄糖链式结构中C1位含有醛基，能将银氨溶液中的 Ag⁺ 还原为 Ag，在试管壁形成银镜。'
        }
      ]
    },

    // ─── Section 2: Fats and Oils ────────────────────────────────────────────
    {
      id: 'ch16-sec02',
      title: '油脂 — Fats and Oils',
      content: `
<h2>油脂 — Fats and Oils</h2>
<p>油脂是高级脂肪酸与甘油生成的酯，化学名为<strong>三酰甘油（甘油三酯）</strong>，属于酯类化合物，不是高分子。</p>

<div class="env-block formula">
结构通式（R 代表高级脂肪酸烃基）：
\\[\\underbrace{C_3H_5(OH)_3}_{\\text{甘油}} + 3\\underbrace{RCOOH}_{\\text{高级脂肪酸}} \\rightleftharpoons \\underbrace{C_3H_5(OOCR)_3}_{\\text{甘油三酯}} + 3H_2O\\]
</div>

<h3>饱和脂肪酸与不饱和脂肪酸</h3>
<table class="data-table">
  <tr><th></th><th>饱和脂肪酸</th><th>不饱和脂肪酸</th></tr>
  <tr><td>碳链</td><td>全部单键（–C–C–）</td><td>含碳碳双键（–C=C–）</td></tr>
  <tr><td>举例</td><td>硬脂酸 \\(C_{17}H_{35}COOH\\)、软脂酸</td><td>油酸 \\(C_{17}H_{33}COOH\\)、亚油酸</td></tr>
  <tr><td>状态（常温）</td><td>固态（脂肪）</td><td>液态（油）</td></tr>
  <tr><td>来源</td><td>动物脂肪</td><td>植物油</td></tr>
</table>

<h3>油脂的化学性质</h3>
<ol>
  <li><strong>氢化（硬化）</strong>：不饱和油脂中的碳碳双键加氢，变成固态脂肪。人造奶油（margarine）即此原理。
    \\[\\text{液态油} + H_2 \\xrightarrow{Ni, \\Delta} \\text{固态脂肪}\\]
  </li>
  <li><strong>皂化（Saponification）</strong>：油脂在碱（NaOH 或 KOH）水溶液中水解，生成高级脂肪酸钠（钾）盐（即肥皂）和甘油。
    <div class="env-block formula">
    \\[C_3H_5(OOCR)_3 + 3NaOH \\xrightarrow{\\Delta} 3RCOONa + C_3H_5(OH)_3\\]
    肥皂（硬脂酸钠等）的分子结构：亲水头（–COO⁻Na⁺）+ 疏水尾（长碳链），形成胶束去污。
    </div>
  </li>
</ol>

<div class="env-block note">
<strong>肥皂 vs 合成洗涤剂</strong>
<ul>
  <li>肥皂：天然油脂皂化所得，可生物降解，在硬水中与Ca²⁺/Mg²⁺生成难溶皂，去污力下降。</li>
  <li>合成洗涤剂（如十二烷基苯磺酸钠）：耐硬水，但部分不易降解。</li>
</ul>
</div>

<h3>油脂与人体健康</h3>
<ul>
  <li>油脂是能量最密集的营养素（约37 kJ/g），并帮助吸收脂溶性维生素 A、D、E、K。</li>
  <li>反式脂肪酸（不完全氢化产生）增加心血管风险，应限制摄入。</li>
  <li>必需脂肪酸（ω-3、ω-6）人体不能合成，须从食物中摄取。</li>
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
                v.screenText('甘油三酯（油脂）', 175, 28, v.colors.teal, 14);
                v.ctx.fillStyle = v.colors.blue + 'cc';
                v.ctx.fillRect(60, 55, 230, 220);
                v.screenText('C₃H₅(OOCR)₃', 175, 165, v.colors.white, 16);
                v.screenText('（三酰甘油）', 175, 190, v.colors.text, 12);
                // Right: NaOH
                v.screenText('NaOH 水溶液', 525, 28, v.colors.orange, 14);
                v.ctx.fillStyle = v.colors.orange + 'aa';
                v.ctx.fillRect(410, 55, 230, 220);
                v.screenText('3 NaOH(aq)', 525, 165, v.colors.white, 16);
                // Plus sign
                v.screenText('+', 350, 165, v.colors.yellow, 28);
                v.screenText('← 点击"开始皂化"', 350, 290, v.colors.text, 12);

              } else if (phase === 1) {
                // Mixing animation
                v.screenText('加热皂化中... Δ', v.width / 2, 28, v.colors.yellow, 15);
                for (let i = 0; i < 12; i++) {
                  const angle = (i / 12) * Math.PI * 2 + tick * 0.04;
                  const r = 80 + 20 * Math.sin(tick * 0.07 + i);
                  const px = v.width / 2 + r * Math.cos(angle);
                  const py = v.height / 2 + r * 0.5 * Math.sin(angle);
                  const col = i % 2 === 0 ? v.colors.blue : v.colors.orange;
                  v.ctx.fillStyle = col + 'bb';
                  v.ctx.beginPath(); v.ctx.arc(px, py, 14, 0, Math.PI * 2); v.ctx.fill();
                }
                v.screenText('C₃H₅(OOCR)₃ + 3NaOH → 3RCOONa + 甘油', v.width / 2, v.height - 30, v.colors.text, 12);
                if (tick > 140) { phase = 2; tick = 0; }

              } else {
                // Products
                v.screenText('皂化完成！', v.width / 2, 22, v.colors.green, 16);
                // Soap (sodium stearate)
                v.ctx.fillStyle = v.colors.green + 'bb';
                v.ctx.fillRect(40, 50, 240, 220);
                v.screenText('肥皂', 160, 80, v.colors.white, 15);
                v.screenText('RCOONa', 160, 115, v.colors.white, 14);
                v.screenText('（高级脂肪酸钠）', 160, 140, v.colors.text, 11);
                // Draw soap micelle symbol
                v.ctx.fillStyle = v.colors.teal;
                v.ctx.beginPath(); v.ctx.arc(160, 200, 20, 0, Math.PI * 2); v.ctx.fill();
                v.screenText('胶束', 160, 200, v.colors.white, 11);
                // Arrow
                v.screenText('+', 350, 160, v.colors.yellow, 26);
                // Glycerol
                v.ctx.fillStyle = v.colors.purple + 'bb';
                v.ctx.fillRect(420, 50, 240, 220);
                v.screenText('甘油', 540, 80, v.colors.white, 15);
                v.screenText('C₃H₅(OH)₃', 540, 115, v.colors.white, 14);
                v.screenText('（无色粘稠液体）', 540, 140, v.colors.text, 11);
                v.screenText('用于护肤品、炸药等', 540, 200, v.colors.text, 11);
              }
            }

            function loop() { drawPhase(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = '开始皂化';
            btn.onclick = () => { phase = 1; tick = 0; };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = '重置';
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
          question: '油脂皂化反应的本质是（ ）',
          type: 'mcq',
          options: ['加成反应', '酯的碱性水解', '氧化反应', '中和反应'],
          answer: 1,
          explanation: '皂化反应是油脂（酯类）在碱性条件下的水解反应，即酯的碱性水解，生成高级脂肪酸盐和甘油。'
        },
        {
          id: 'ch16-sec02-ex02',
          question: '植物油在 Ni 催化下加氢变成固态脂肪，这个过程利用了不饱和脂肪酸中的________发生加氢反应。',
          type: 'short',
          answer: '碳碳双键（C=C）',
          explanation: '不饱和脂肪酸含有碳碳双键，可以与氢气发生加成反应，使液态油变成固态脂肪，此过程称为油脂的氢化（硬化）。'
        }
      ]
    },

    // ─── Section 3: Proteins ─────────────────────────────────────────────────
    {
      id: 'ch16-sec03',
      title: '蛋白质 — Proteins',
      content: `
<h2>蛋白质 — Proteins</h2>
<p>蛋白质是生命最重要的有机大分子，由20种氨基酸通过肽键连接而成，承担催化、运输、结构、信号传导等功能。</p>

<h3>氨基酸（Amino Acids）</h3>
<p>氨基酸是蛋白质的基本单元，含有<strong>氨基（–NH₂）</strong>和<strong>羧基（–COOH）</strong>，连接在同一碳原子（α-碳）上：</p>
<div class="env-block formula">
\\[H_2N{-}\\underset{\\displaystyle |}{\\underset{R}{C}H}{-}COOH\\]
R 代表各氨基酸的侧链（决定氨基酸种类）。
</div>
<p>氨基酸的两性：既能与酸反应（–NH₂ 接受质子），又能与碱反应（–COOH 失去质子）。</p>

<h3>肽键与肽链</h3>
<div class="env-block formula">
两氨基酸脱水缩合，形成<strong>肽键（–CO–NH–）</strong>：
\\[{-}NH_2 + HOOC{-} \\rightarrow {-}CO{-}NH{-} + H_2O\\]
含 n 个氨基酸的肽链：脱去 (n-1) 个水分子，含 (n-1) 个肽键。
</div>

<h3>蛋白质的四级结构</h3>
<ol>
  <li><strong>一级结构</strong>：氨基酸序列（肽键相连）</li>
  <li><strong>二级结构</strong>：α-螺旋、β-折叠（氢键维持）</li>
  <li><strong>三级结构</strong>：整体三维折叠（各种弱相互作用）</li>
  <li><strong>四级结构</strong>：多条肽链的组合（如血红蛋白）</li>
</ol>

<h3>蛋白质的变性（Denaturation）</h3>
<p>高温、强酸、强碱、重金属离子、有机溶剂等可破坏蛋白质的空间结构，使其失活：</p>
<ul>
  <li>变性是不可逆的（煮熟的鸡蛋无法复原）。</li>
  <li>变性不改变蛋白质的一级结构（氨基酸序列不变）。</li>
  <li>酶在高温下变性失活，故生物体内酶促反应有最适温度。</li>
</ul>

<h3>蛋白质的鉴别反应</h3>
<table class="data-table">
  <tr><th>反应</th><th>试剂</th><th>现象</th><th>原理</th></tr>
  <tr><td>双缩脲反应</td><td>NaOH + CuSO₄</td><td>紫色</td><td>肽键与Cu²⁺形成紫色络合物（需≥2个肽键）</td></tr>
  <tr><td>黄色反应</td><td>浓硝酸，加热</td><td>黄色</td><td>含苯环的氨基酸（苯丙氨酸、酪氨酸）发生硝化</td></tr>
  <tr><td>灼烧</td><td>火焰</td><td>烧焦羽毛气味</td><td>含S、N元素，区别蚕丝与合成纤维</td></tr>
</table>

<div class="env-block experiment">
<strong>实验：蛋白质的双缩脲鉴定</strong>
向蛋清溶液中先加 NaOH 溶液，再滴加少量 CuSO₄ 溶液，振荡，溶液变为<strong>紫色</strong>，证明含蛋白质。
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
                v.screenText('两个氨基酸（未反应）', v.width / 2, 22, v.colors.teal, 15);
                drawAminoAcid(ctx, 180, 180, '氨基酸 1', v.colors.blue, true, true);
                drawAminoAcid(ctx, 540, 180, '氨基酸 2', v.colors.orange, true, true);
                v.screenText('点击"脱水缩合"查看肽键形成', v.width / 2, 330, v.colors.text, 12);

              } else if (phase === 1) {
                progress = Math.min(1, progress + 0.015);
                v.screenText('脱水缩合反应进行中...', v.width / 2, 22, v.colors.yellow, 15);
                const aa1x = 180 + progress * 80;
                const aa2x = 540 - progress * 80;
                drawAminoAcid(ctx, aa1x, 180, '氨基酸 1', v.colors.blue, true, false);
                drawAminoAcid(ctx, aa2x, 180, '氨基酸 2', v.colors.orange, false, true);
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
                v.screenText('二肽（肽键 –CO–NH– 已形成）', v.width / 2, 22, v.colors.green, 15);
                // Draw dipeptide
                drawAminoAcid(ctx, 200, 180, '残基 1', v.colors.blue, true, false);
                drawAminoAcid(ctx, 520, 180, '残基 2', v.colors.orange, false, true);
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
                v.screenText('肽键（–CO–NH–）', 360, 230, v.colors.green, 13);
              }
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = '脱水缩合';
            btn.onclick = () => { if (phase === 0) { phase = 1; progress = 0; } };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = '重置';
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
              v.screenText('蛋白质变性模拟', v.width / 2, 24, v.colors.teal, 15);
              if (p < 0.05) {
                v.screenText('正常蛋白质（有序空间结构）', v.width / 2, 55, v.colors.blue, 13);
              } else if (p < 0.8) {
                v.screenText('加热/酸碱破坏氢键和空间结构...', v.width / 2, 55, v.colors.yellow, 13);
              } else {
                v.screenText('蛋白质变性！空间结构破坏，活性丧失（不可逆）', v.width / 2, 55, v.colors.red, 13);
              }
              drawProtein(v.width / 2, v.height / 2 + 20, p);

              if (p > 0.5) {
                v.screenText('一级结构（氨基酸序列）未变', v.width / 2, v.height - 30, v.colors.text, 12);
              }

              // Temperature indicator
              const temp = Math.round(25 + p * 75);
              v.screenText('温度: ' + temp + '°C', 80, 90, p > 0.5 ? v.colors.red : v.colors.green, 13);
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btn = document.createElement('button');
            btn.className = 'viz-btn';
            btn.textContent = '加热变性';
            btn.onclick = () => { denatured = true; };
            const btn2 = document.createElement('button');
            btn2.className = 'viz-btn';
            btn2.style.marginLeft = '8px';
            btn2.textContent = '重置';
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
          question: '含有100个氨基酸的蛋白质，若只有一条肽链，则含有肽键的数目为（ ）',
          type: 'mcq',
          options: ['100个', '99个', '101个', '98个'],
          answer: 1,
          explanation: 'n个氨基酸缩合成一条肽链，形成(n-1)个肽键，脱去(n-1)个水分子。所以100个氨基酸形成99个肽键。'
        },
        {
          id: 'ch16-sec03-ex02',
          question: '将蛋清加热后再冷却，不能恢复蛋清溶液的原有性质，这说明蛋白质的变性是（ ）',
          type: 'mcq',
          options: ['可逆的', '不可逆的', '物理变化', '颜色反应'],
          answer: 1,
          explanation: '蛋白质变性是指空间结构被破坏，性质改变，且通常不可逆。煮熟的鸡蛋（蛋清固化）无法复原。'
        },
        {
          id: 'ch16-sec03-ex03',
          question: '双缩脲反应所需试剂是________，反应现象是________，可用于鉴别含________个以上肽键的蛋白质。',
          type: 'short',
          answer: 'NaOH 和 CuSO₄；溶液变紫色；2个',
          explanation: '双缩脲反应：向蛋白质溶液中先加NaOH，再加CuSO₄，Cu²⁺与两个以上肽键形成紫色络合物，用于检验蛋白质。'
        },
        {
          id: 'ch16-sec03-ex04',
          question: '氨基酸具有两性的原因是分子中含有________和________两种官能团。',
          type: 'short',
          answer: '氨基（–NH₂）；羧基（–COOH）',
          explanation: '氨基可与酸反应（–NH₂ + HCl → –NH₃⁺Cl⁻），羧基可与碱反应（–COOH + NaOH → –COONa + H₂O），因此氨基酸具有两性。'
        }
      ]
    },

    // ─── Section 4: Nucleic Acids ─────────────────────────────────────────────
    {
      id: 'ch16-sec04',
      title: '核酸 — Nucleic Acids',
      content: `
<h2>核酸 — Nucleic Acids</h2>
<p>核酸是携带遗传信息的生物大分子，分为<strong>DNA</strong>（脱氧核糖核酸）和<strong>RNA</strong>（核糖核酸）两大类。</p>

<h3>核苷酸（Nucleotides）</h3>
<p>核酸的基本单元是核苷酸，每个核苷酸由三部分组成：</p>
<div class="env-block formula">
核苷酸 ＝ <strong>磷酸</strong>（H₃PO₄）＋ <strong>五碳糖</strong> ＋ <strong>含氮碱基</strong>
</div>

<table class="data-table">
  <tr><th></th><th>DNA</th><th>RNA</th></tr>
  <tr><td>五碳糖</td><td>脱氧核糖（–OH → –H）</td><td>核糖</td></tr>
  <tr><td>碱基</td><td>A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）、C（胞嘧啶）</td><td>A、U（尿嘧啶）、G、C</td></tr>
  <tr><td>链数</td><td>双链（双螺旋）</td><td>单链</td></tr>
  <tr><td>功能</td><td>遗传信息储存</td><td>遗传信息传递与翻译</td></tr>
</table>

<h3>DNA 双螺旋结构</h3>
<p>1953年，Watson 和 Crick 根据 Franklin 的 X 射线衍射数据提出 DNA 双螺旋模型：</p>
<ul>
  <li>两条反向平行的多核苷酸链绕同一中心轴旋转形成右手双螺旋。</li>
  <li>磷酸–脱氧核糖骨架在外侧；碱基朝内，通过<strong>氢键</strong>配对：
    <ul>
      <li>A — T（腺嘌呤 — 胸腺嘧啶）：2个氢键</li>
      <li>G ≡ C（鸟嘌呤 — 胞嘧啶）：3个氢键</li>
    </ul>
  </li>
  <li>碱基互补配对原则决定了DNA的复制精确性。</li>
</ul>

<div class="env-block formula">
碱基互补：若DNA中A的比例为 x，则 T 也为 x，G = C = \\(\\dfrac{1-2x}{2}\\)。
</div>

<h3>遗传信息的流动（中心法则）</h3>
<div class="env-block formula">
\\[DNA \\xrightarrow{\\text{转录（transcription）}} mRNA \\xrightarrow{\\text{翻译（translation）}} \\text{蛋白质}\\]
</div>
<p>每3个连续碱基（密码子）编码一种氨基酸，共有 \\(4^3 = 64\\) 种密码子，编码20种氨基酸（有冗余）。</p>

<h3>RNA 的种类</h3>
<ul>
  <li><strong>mRNA</strong>（信使RNA）：携带遗传信息从细胞核到核糖体。</li>
  <li><strong>tRNA</strong>（转运RNA）：识别密码子，携带对应氨基酸。</li>
  <li><strong>rRNA</strong>（核糖体RNA）：构成核糖体的结构成分。</li>
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

              v.screenText('DNA 双螺旋结构', cx, 22, v.colors.teal, 15);
              v.screenText('A-T: 2氢键  |  G-C: 3氢键', cx, 42, v.colors.text, 11);

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
              v.screenText('←  5\' 磷酸骨架 3\' →', cx - 170, v.height - 28, v.colors.text, 10);
              v.screenText('←  3\' 磷酸骨架 5\' →', cx + 100, v.height - 28, v.colors.text, 10);

              // Color legend
              const lx = 20, ly = v.height - 70;
              [['A(蓝)', v.colors.blue], ['T(橙)', v.colors.orange], ['G(绿)', v.colors.green], ['C(紫)', v.colors.purple]].forEach(([label, col], i) => {
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
            zoomIn.textContent = '放大 +';
            zoomIn.onclick = () => { zoomLevel = Math.min(1.5, zoomLevel + 0.15); };
            const zoomOut = document.createElement('button');
            zoomOut.className = 'viz-btn';
            zoomOut.style.marginLeft = '8px';
            zoomOut.textContent = '缩小 –';
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
              ctx.fillText('DNA碱基配对练习 — Base-Pair Matcher', W/2, 12);

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
                ctx.fillText(nb + ' 氢键 (H-bonds)', mx, cy + lr + 16);
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
              ctx.fillText('选择左右链上的碱基来测试配对', W/2, H - 36);
            }

            drawStrand();

            // Controls
            const ctrl = document.createElement('div');
            ctrl.style.cssText = 'display:flex;gap:16px;justify-content:center;margin-top:6px;flex-wrap:wrap;';

            const leftLabel = document.createElement('span');
            leftLabel.textContent = '左链 Left: ';
            leftLabel.style.color = '#8b949e';
            ctrl.appendChild(leftLabel);

            bases.forEach(b => {
              const btn = document.createElement('button');
              btn.textContent = b;
              btn.style.cssText = 'padding:4px 12px;border:2px solid ' + baseColors[b] + ';border-radius:4px;background:' + baseColors[b] + '33;color:' + baseColors[b] + ';font-weight:bold;cursor:pointer;';
              btn.addEventListener('click', () => {
                leftBase = b;
                feedback = pairs[b] === rightBase ? '正确配对！' + b + '-' + rightBase + ' (' + hbonds[b] + ' 氢键)' : '不是有效配对！';
                feedbackColor = pairs[b] === rightBase ? '#3fb950' : '#f85149';
                drawStrand();
              });
              ctrl.appendChild(btn);
            });

            const sep = document.createElement('span');
            sep.textContent = ' | 右链 Right: ';
            sep.style.color = '#8b949e';
            ctrl.appendChild(sep);

            bases.forEach(b => {
              const btn = document.createElement('button');
              btn.textContent = b;
              btn.style.cssText = 'padding:4px 12px;border:2px solid ' + baseColors[b] + ';border-radius:4px;background:' + baseColors[b] + '33;color:' + baseColors[b] + ';font-weight:bold;cursor:pointer;';
              btn.addEventListener('click', () => {
                rightBase = b;
                feedback = pairs[leftBase] === b ? '正确配对！' + leftBase + '-' + b + ' (' + hbonds[leftBase] + ' 氢键)' : '不是有效配对！';
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
          question: 'DNA与RNA在组成上的主要区别是（多选）（ ）',
          type: 'mcq',
          options: ['五碳糖不同（脱氧核糖 vs 核糖）', '碱基中DNA有T而RNA有U', 'DNA为双链RNA为单链', 'DNA含磷酸而RNA不含'],
          answer: '0,1,2',
          explanation: 'DNA与RNA的区别：五碳糖（脱氧核糖 vs 核糖）、特有碱基（T vs U）、链数（双链 vs 单链）。两者均含磷酸。'
        },
        {
          id: 'ch16-sec04-ex02',
          question: '某DNA分子中，G+C占碱基总数的40%，则A占碱基总数的百分比为（ ）',
          type: 'mcq',
          options: ['40%', '20%', '30%', '60%'],
          answer: 2,
          explanation: '由于A=T，G=C（碱基互补原则），G+C=40%则A+T=60%，所以A=T=30%。'
        },
        {
          id: 'ch16-sec04-ex03',
          question: '3个碱基组成一个密码子，4种碱基共可组成________种密码子，但只编码________种氨基酸。',
          type: 'short',
          answer: '64种；20种',
          explanation: '4种碱基排列成三联体：4³=64种密码子，但编码20种氨基酸（有冗余），其中3个密码子为终止密码子，不编码氨基酸。'
        }
      ]
    },

    // ─── Section 5: Biomolecules and Health ──────────────────────────────────
    {
      id: 'ch16-sec05',
      title: '生物大分子与健康',
      content: `
<h2>生物大分子与健康</h2>
<p>生物大分子是生命活动的物质基础，合理摄入各类营养素是健康的关键。</p>

<h3>六大营养素</h3>
<table class="data-table">
  <tr><th>营养素</th><th>化学本质</th><th>主要功能</th><th>缺乏症</th></tr>
  <tr><td>糖类</td><td>多糖、单糖</td><td>提供能量（4 kJ/g）</td><td>低血糖、乏力</td></tr>
  <tr><td>蛋白质</td><td>氨基酸聚合物</td><td>结构、催化、运输</td><td>营养不良、水肿</td></tr>
  <tr><td>脂肪</td><td>甘油三酯</td><td>储能（9 kJ/g）、保温</td><td>脂溶性维生素缺乏</td></tr>
  <tr><td>维生素</td><td>小分子有机物</td><td>辅酶组分</td><td>各种维生素缺乏症</td></tr>
  <tr><td>无机盐</td><td>矿物质离子</td><td>调节体液平衡</td><td>贫血（缺Fe）、骨质疏松（缺Ca）</td></tr>
  <tr><td>水</td><td>H₂O</td><td>溶剂、体温调节</td><td>脱水</td></tr>
</table>

<h3>酶——生物催化剂</h3>
<p>酶是具有催化功能的蛋白质（极少数为RNA），具有以下特点：</p>
<ul>
  <li><strong>高效性</strong>：催化效率比无机催化剂高 \\(10^7 \\sim 10^{13}\\) 倍。</li>
  <li><strong>专一性</strong>：一种酶只催化一种或一类反应（"锁与钥匙"模型）。</li>
  <li><strong>温和性</strong>：在常温、常压、中性 pH 下发挥作用。</li>
  <li><strong>可调节性</strong>：受温度、pH、抑制剂等调控。</li>
</ul>

<div class="env-block formula">
酶促反应示意：
\\[\\text{底物（S）} + \\text{酶（E）} \\rightleftharpoons \\text{酶-底物复合物（ES）} \\rightarrow \\text{产物（P）} + \\text{酶（E）}\\]
</div>

<h3>淀粉消化——多步水解</h3>
<p>食物中淀粉的消化过程：</p>
<div class="env-block formula">
\\[(C_6H_{10}O_5)_n \\xrightarrow{唾液淀粉酶} \\text{麦芽糖} (C_{12}H_{22}O_{11}) \\xrightarrow{麦芽糖酶} \\text{葡萄糖} (C_6H_{12}O_6)\\]
</div>

<h3>化学与营养健康</h3>
<ul>
  <li><strong>均衡饮食</strong>：糖类约60%、蛋白质约15%、脂肪约25%（按能量比）。</li>
  <li><strong>食品添加剂</strong>：防腐剂（苯甲酸钠）、抗氧化剂（维生素C、E）、色素等须在安全剂量下使用。</li>
  <li><strong>重金属危害</strong>：Hg²⁺、Pb²⁺ 等与蛋白质结合使酶变性失活，导致中毒。</li>
  <li><strong>膳食纤维</strong>：纤维素不能消化，但促进肠道蠕动、预防便秘、降低结肠癌风险。</li>
</ul>

<div class="env-block note">
<strong>中国居民膳食宝塔（主要层次）</strong>
<ol>
  <li>谷薯类（主食，250–400g/天）</li>
  <li>蔬菜水果（300–500g + 200–350g/天）</li>
  <li>动物性食物（鱼禽蛋肉，120–200g/天）</li>
  <li>大豆坚果奶类（25+25+300g/天）</li>
  <li>油盐（25–30g油，5g以下食盐/天）</li>
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
              {label: '淀粉 (C₆H₁₀O₅)ₙ', color: '#3fb9a0', desc: '多糖：大量葡萄糖单元以α-1,4糖苷键连接', n: 8},
              {label: '糊精 / 较短多糖', color: '#58a6ff', desc: '淀粉酶开始切断链内糖苷键，链变短', n: 4},
              {label: '麦芽糖 C₁₂H₂₂O₁₁', color: '#d29922', desc: '进一步水解：每两个葡萄糖一组的麦芽糖', n: 2},
              {label: '葡萄糖 C₆H₁₂O₆', color: '#3fb950', desc: '完全水解：单个葡萄糖可被人体直接吸收', n: 1}
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
              v.screenText('淀粉水解示意图', v.width / 2, 24, v.colors.teal, 15);
              v.screenText('步骤 ' + (step + 1) + '/4: ' + s.label, v.width / 2, 52, s.color, 14);
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
                v.screenText('...（更多葡萄糖单元）...', v.width / 2, 230, v.colors.text, 11);
              } else if (step === 1) {
                // Two shorter chains
                drawChain(5, s.color, v.width / 2 - 90, 165);
                drawChain(4, s.color, v.width / 2 + 100, 195);
                v.screenText('唾液淀粉酶', v.width / 2, 260, v.colors.yellow, 12);
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
                  v.screenText('麦芽糖', mx + 22, my + 35, s.color, 10);
                }
                v.screenText('麦芽糖酶', v.width / 2, 270, v.colors.yellow, 12);
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
                v.screenText('可被肠壁直接吸收进入血液！', v.width / 2, 260, v.colors.green, 13);
              }

              // Enzyme indicator on bottom
              const enzymes = ['唾液淀粉酶（口腔）', '胰淀粉酶（小肠）', '麦芽糖酶（小肠）', '完成！'];
              v.screenText('催化酶：' + enzymes[step], v.width / 2, v.height - 18, v.colors.teal, 11);

              if (autoPlay && tick % 90 === 0) {
                step = (step + 1) % stages.length;
              }
            }

            function loop() { render(); animId = requestAnimationFrame(loop); }
            loop();

            const btnNext = document.createElement('button');
            btnNext.className = 'viz-btn';
            btnNext.textContent = '下一步';
            btnNext.onclick = () => { step = Math.min(stages.length - 1, step + 1); tick = 0; };
            const btnAuto = document.createElement('button');
            btnAuto.className = 'viz-btn';
            btnAuto.style.marginLeft = '8px';
            btnAuto.textContent = '自动播放';
            btnAuto.onclick = () => { autoPlay = !autoPlay; btnAuto.textContent = autoPlay ? '停止' : '自动播放'; };
            const btnReset = document.createElement('button');
            btnReset.className = 'viz-btn';
            btnReset.style.marginLeft = '8px';
            btnReset.textContent = '重置';
            btnReset.onclick = () => { step = 0; tick = 0; autoPlay = false; btnAuto.textContent = '自动播放'; };
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
              ctx.fillText('酶 Enzyme', ex - 20, ey);
              ctx.fillStyle = C.teal; ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('活性位点', ex + er * 0.55, ey + 28);

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
              if (cycle < 1.5) phaseText = '底物靠近活性位点...';
              else if (cycle < 2.5) phaseText = '酶-底物复合物形成！';
              else phaseText = '产物释放，酶不变！';

              ctx.fillStyle = C.text; ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
              ctx.fillText(phaseText, W/2, H - 14);

              // Title
              ctx.fillStyle = C.teal; ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top';
              ctx.fillText('锁钥模型 — Lock-and-Key Model of Enzyme Action', W/2, 12);

              // Legend
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
              ctx.fillStyle = C.blue; ctx.fillText('酶 Enzyme', 14, H - 44);
              ctx.fillStyle = C.orange; ctx.fillText('底物(S) → 产物(P)', 14, H - 28);
              ctx.fillStyle = C.yellow; ctx.fillText('氢键 Hydrogen bonds', 14, H - 12);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch16-sec05-ex01',
          question: '酶与无机催化剂相比，最主要的特点是（ ）',
          type: 'mcq',
          options: ['能加快反应速率', '反应后自身不变', '具有专一性、高效性、温和性', '只在细胞内起作用'],
          answer: 2,
          explanation: '酶与无机催化剂最大的区别在于酶具有高效性（催化效率极高）、专一性（一种酶只催化特定反应）和温和性（在常温常压下起作用）三大特点。'
        },
        {
          id: 'ch16-sec05-ex02',
          question: '重金属离子（如 Hg²⁺）对人体的危害，主要是因为它能（ ）',
          type: 'mcq',
          options: ['与氨基酸反应破坏氨基', '使蛋白质变性，导致酶失活', '与葡萄糖反应消耗能量', '破坏DNA碱基配对'],
          answer: 1,
          explanation: '重金属离子能与蛋白质中的–SH、–NH₂等基团结合，破坏蛋白质（酶）的空间结构，导致变性失活，这是重金属中毒的主要机制。'
        },
        {
          id: 'ch16-sec05-ex03',
          question: '下列关于膳食纤维（纤维素）的说法，不正确的是（ ）',
          type: 'mcq',
          options: ['人体不能消化纤维素', '纤维素可促进肠道蠕动', '纤维素水解的最终产物是葡萄糖', '纤维素是人体所需能量的主要来源'],
          answer: 3,
          explanation: '人体缺乏分解β-糖苷键的酶，所以不能消化纤维素，因此纤维素不能作为人体的能量来源。其他说法均正确。'
        },
        {
          id: 'ch16-sec05-ex04',
          question: '淀粉在人体消化过程中最终水解成________，写出完全水解的化学方程式。',
          type: 'short',
          answer: '葡萄糖；(C₆H₁₀O₅)ₙ + nH₂O →(酶)→ nC₆H₁₂O₆',
          explanation: '淀粉在唾液淀粉酶、胰淀粉酶等作用下逐步水解，最终产物为葡萄糖，可被肠壁直接吸收进入血液。'
        },
        {
          id: 'ch16-sec05-ex05',
          question: '下列营养素中，提供能量最高（每克）的是（ ）',
          type: 'mcq',
          options: ['糖类（约4 kJ/g）', '蛋白质（约4 kJ/g）', '脂肪（约9 kJ/g）', '维生素（不提供能量）'],
          answer: 2,
          explanation: '脂肪是能量最密集的营养素，每克脂肪提供约9 kJ能量，远高于糖类和蛋白质（各约4 kJ/g）。维生素不提供能量。'
        }
      ]
    }

  ] // end sections
}); // end window.CHAPTERS.push
