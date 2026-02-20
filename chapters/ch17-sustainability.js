window.CHAPTERS.push({
  id: 'ch17',
  number: 17,
  title: 'Chemistry & Sustainability',
  subtitle: 'Building a Greener Future Through Chemistry',
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // Section 1: Water Pollution & Treatment (水污染与治理)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch17-sec01',
      title: 'Water Pollution & Treatment',
      content: `
<h2>Water Pollution & Treatment (水污染与治理)</h2>
<p>
  Water is fundamental to all life, yet rapid industrialization and agriculture
  have introduced a wide range of pollutants into freshwater and marine systems.
  Chemistry provides both the diagnosis of these pollutants and the tools to
  remove them.
</p>

<h3>Major Pollutant Categories</h3>

<div class="info-box">
  <strong>1. Heavy Metal Ions</strong><br>
  Industries release cadmium (Cd²⁺), mercury (Hg²⁺), lead (Pb²⁺), and
  chromium (Cr⁶⁺) into waterways. These ions are toxic at very low
  concentrations and accumulate in food chains (bioaccumulation).<br><br>
  <em>Example reaction — precipitation of Cu²⁺:</em><br>
  \\[\\text{Cu}^{2+}(aq) + 2\\text{OH}^-(aq) \\rightarrow \\text{Cu(OH)}_2(s) \\downarrow\\]
</div>

<div class="info-box">
  <strong>2. Organic Pollutants</strong><br>
  Pesticides (DDT, glyphosate), pharmaceuticals, and industrial solvents are
  difficult to degrade. Persistent organic pollutants (POPs) accumulate in
  fatty tissues.<br><br>
  <em>Aerobic decomposition of organic matter:</em><br>
  \\[\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow
    6\\text{CO}_2 + 6\\text{H}_2\\text{O}\\]
  Excessive organic load depletes dissolved O₂, causing dead zones.
</div>

<div class="info-box">
  <strong>3. Nitrogen & Phosphorus (Eutrophication)</strong><br>
  Agricultural runoff carries NO₃⁻ and PO₄³⁻, stimulating algal blooms.
  When algae die and decompose, oxygen is consumed, suffocating aquatic life.
</div>

<h3>Water Treatment Methods</h3>
<table class="data-table">
  <thead>
    <tr><th>Stage</th><th>Method</th><th>Removes</th><th>Chemistry</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Coagulation / Flocculation</td>
      <td>Add Al₂(SO₄)₃ or FeCl₃</td>
      <td>Suspended particles, colloids</td>
      <td>Al³⁺ + 3H₂O → Al(OH)₃↓ + 3H⁺ (colloid adsorption)</td>
    </tr>
    <tr>
      <td>2. Sedimentation</td>
      <td>Gravity settling</td>
      <td>Flocs, heavy particles</td>
      <td>Physical</td>
    </tr>
    <tr>
      <td>3. Filtration</td>
      <td>Sand / gravel bed</td>
      <td>Fine solids, some bacteria</td>
      <td>Physical trapping</td>
    </tr>
    <tr>
      <td>4. Activated Carbon</td>
      <td>Adsorption on porous carbon</td>
      <td>Organics, odors, chlorine</td>
      <td>Physisorption (van der Waals)</td>
    </tr>
    <tr>
      <td>5. Membrane (Reverse Osmosis)</td>
      <td>Pressure through semipermeable membrane</td>
      <td>Salts, heavy metals, viruses</td>
      <td>Osmotic pressure: \\(\\Pi = iMRT\\)</td>
    </tr>
    <tr>
      <td>6. Disinfection</td>
      <td>Cl₂, O₃, or UV</td>
      <td>Bacteria, viruses</td>
      <td>Cl₂ + H₂O → HClO + HCl (oxidative kill)</td>
    </tr>
  </tbody>
</table>

<h3>Chemical Oxygen Demand (COD)</h3>
<p>
  COD measures the amount of oxygen needed to oxidize organic matter in water.
  Higher COD means more organic pollution. The standard method uses K₂Cr₂O₇
  as the oxidant:
  \\[\\text{Organic matter} + \\text{Cr}_2\\text{O}_7^{2-} \\xrightarrow{\\text{H}^+, \\Delta}
    \\text{CO}_2 + \\text{H}_2\\text{O} + \\text{Cr}^{3+}\\]
  Safe drinking water typically has COD &lt; 3 mg/L.
</p>

<div class="example-box">
  <strong>Key Reaction: Alum Coagulation</strong><br>
  Alum (KAl(SO₄)₂·12H₂O) dissolves to give Al³⁺, which hydrolyzes:<br>
  \\[\\text{Al}^{3+} + 3\\text{H}_2\\text{O} \\rightleftharpoons
    \\text{Al(OH)}_3 + 3\\text{H}^+\\]
  The colloidal Al(OH)₃ has a large surface area and opposite charge to
  suspended particles, causing them to coagulate and settle.
</div>
`,
      visualizations: [
        {
          id: 'water-treatment-viz',
          title: 'Water Treatment Process — Stage by Stage',
          description: 'Step through each stage of a municipal water treatment plant and see what each process removes.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 360 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            const stages = [
              { name: 'Raw Water', color: '#8B4513', quality: 0.05, label: 'Turbid, contaminated' },
              { name: 'Coagulation', color: '#A0522D', quality: 0.25, label: 'Add Al₂(SO₄)₃ — flocs form' },
              { name: 'Sedimentation', color: '#6B8E23', quality: 0.45, label: 'Flocs settle by gravity' },
              { name: 'Sand Filtration', color: '#4682B4', quality: 0.65, label: 'Fine particles removed' },
              { name: 'Active Carbon', color: '#3a7a68', quality: 0.82, label: 'Organics & odors adsorbed' },
              { name: 'Disinfection', color: '#3fb9a0', quality: 0.95, label: 'Cl₂ kills bacteria/viruses' },
              { name: 'Clean Water', color: '#58a6ff', quality: 1.0, label: 'Safe drinking water' }
            ];

            let currentStage = 0;
            let t = 0;

            function draw(time) {
              t = time * 0.001;
              viz.clear();
              const w = viz.width, h = viz.height;
              const ctx = viz.ctx;

              viz.screenText('Water Treatment — Stage by Stage', w / 2, 22, viz.colors.teal, 15, 'center');

              const pipeY = 70, pipeH = 30, pipeStart = 40, pipeEnd = w - 40;
              const stageW = (pipeEnd - pipeStart) / stages.length;

              stages.forEach((s, i) => {
                const sx = pipeStart + i * stageW;
                const active = i === currentStage;
                const done = i < currentStage;

                ctx.fillStyle = done ? s.color : (active ? s.color + 'cc' : '#1a1a40');
                ctx.strokeStyle = active ? viz.colors.yellow : viz.colors.axis;
                ctx.lineWidth = active ? 2.5 : 1;
                ctx.beginPath();
                ctx.roundRect(sx + 2, pipeY, stageW - 4, pipeH, 4);
                ctx.fill();
                ctx.stroke();

                viz.screenText(String(i + 1), sx + stageW / 2, pipeY + pipeH / 2 + 1, active ? viz.colors.yellow : viz.colors.white, 12, 'center', 'middle');
              });

              for (let i = 0; i < stages.length - 1; i++) {
                const ax = pipeStart + (i + 1) * stageW;
                ctx.fillStyle = viz.colors.axis;
                ctx.beginPath();
                ctx.moveTo(ax - 6, pipeY + pipeH / 2);
                ctx.lineTo(ax + 6, pipeY + pipeH / 2);
                ctx.lineTo(ax, pipeY + pipeH / 2 - 6);
                ctx.closePath();
                ctx.fill();
              }

              const s = stages[currentStage];
              const panelX = 40, panelY = 120, panelW = w - 80, panelH = 160;

              ctx.fillStyle = '#0f0f28';
              ctx.strokeStyle = s.color;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.roundRect(panelX, panelY, panelW, panelH, 10);
              ctx.fill();
              ctx.stroke();

              viz.screenText(s.name, panelX + panelW / 2, panelY + 26, s.color, 18, 'center');
              viz.screenText(s.label, panelX + panelW / 2, panelY + 52, viz.colors.text, 13, 'center');

              const barX = panelX + 60, barY = panelY + 80, barW = panelW - 120, barH = 28;
              ctx.fillStyle = '#1a1a40';
              ctx.beginPath();
              ctx.roundRect(barX, barY, barW, barH, 6);
              ctx.fill();

              const fillW = barW * s.quality;
              const grad = ctx.createLinearGradient(barX, 0, barX + fillW, 0);
              grad.addColorStop(0, '#8B4513');
              grad.addColorStop(1, s.color);
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.roundRect(barX, barY, fillW, barH, 6);
              ctx.fill();

              viz.screenText('Water Quality:', panelX + 55, barY + barH / 2 + 1, viz.colors.text, 11, 'right', 'middle');
              viz.screenText(Math.round(s.quality * 100) + '%', barX + fillW + 30, barY + barH / 2 + 1, viz.colors.white, 13, 'center', 'middle');

              const numParticles = Math.round((1 - s.quality) * 30);
              for (let i = 0; i < numParticles; i++) {
                const seed = i * 137.508;
                const px = panelX + 30 + ((seed * 7 + t * 15 * (i % 3 === 0 ? 1 : -0.5)) % (panelW - 60));
                const py = panelY + 105 + (Math.sin(t * 1.5 + seed) * 20);
                const pSize = 3 + (i % 4);
                ctx.fillStyle = i % 2 === 0 ? '#8B4513aa' : '#A0522Daa';
                ctx.beginPath();
                ctx.arc(px, py, pSize, 0, Math.PI * 2);
                ctx.fill();
              }

              viz.screenText('Use buttons below to step through stages', w / 2, h - 20, viz.colors.text, 11, 'center');
            }

            VizEngine.createButton(controls, 'Previous Stage', () => {
              if (currentStage > 0) currentStage--;
            });
            VizEngine.createButton(controls, 'Next Stage', () => {
              if (currentStage < stages.length - 1) currentStage++;
            });
            stages.forEach((s, i) => {
              VizEngine.createButton(controls, String(i + 1), () => { currentStage = i; });
            });

            viz.animate(draw);
          }
        },
        {
          id: 'pollution-pie',
          title: 'Global Water Pollution Sources',
          description: 'Interactive pie chart showing relative contributions of different pollution sources.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 400 });

            const sources = [
              { label: 'Agricultural Runoff', value: 38, color: '#4caf50' },
              { label: 'Industrial Effluents', value: 26, color: '#f44336' },
              { label: 'Municipal Sewage', value: 19, color: '#2196f3' },
              { label: 'Mining Activities', value: 10, color: '#ff9800' },
              { label: 'Other Sources', value: 7, color: '#9c27b0' }
            ];

            let hoveredIndex = -1;
            const cx = 200, cy = 200, r = 140;

            const canvas = viz.canvas;
            canvas.addEventListener('mousemove', (e) => {
              const rect = canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;
              const dx = mx - cx, dy = my - cy;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < r) {
                let angle = Math.atan2(dy, dx);
                if (angle < -Math.PI / 2) angle += 2 * Math.PI;
                let cumAngle = -Math.PI / 2;
                const total = sources.reduce((s, d) => s + d.value, 0);
                hoveredIndex = -1;
                for (let i = 0; i < sources.length; i++) {
                  const slice = (sources[i].value / total) * 2 * Math.PI;
                  if (angle >= cumAngle && angle < cumAngle + slice) {
                    hoveredIndex = i;
                    break;
                  }
                  cumAngle += slice;
                }
              } else {
                hoveredIndex = -1;
              }
              drawPie();
            });

            function drawPie() {
              viz.clear();
              const ctx = viz.ctx;
              const total = sources.reduce((s, d) => s + d.value, 0);
              let startAngle = -Math.PI / 2;

              sources.forEach((src, i) => {
                const slice = (src.value / total) * 2 * Math.PI;
                const isHovered = i === hoveredIndex;
                const offset = isHovered ? 12 : 0;
                const midAngle = startAngle + slice / 2;
                const ox = Math.cos(midAngle) * offset;
                const oy = Math.sin(midAngle) * offset;

                ctx.beginPath();
                ctx.moveTo(cx + ox, cy + oy);
                ctx.arc(cx + ox, cy + oy, r, startAngle, startAngle + slice);
                ctx.closePath();
                ctx.fillStyle = src.color + (isHovered ? 'ff' : 'cc');
                ctx.fill();
                ctx.strokeStyle = '#1a1a2e';
                ctx.lineWidth = 2;
                ctx.stroke();

                const labelR = r * 0.65;
                const lx = cx + ox + Math.cos(midAngle) * labelR;
                const ly = cy + oy + Math.sin(midAngle) * labelR;
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(src.value + '%', lx, ly);

                startAngle += slice;
              });

              viz.screenText('Global Freshwater Pollution Sources', 350, 22, viz.colors.teal, 14, 'center');

              const legX = 420, legStartY = 80;
              sources.forEach((src, i) => {
                const ly = legStartY + i * 52;
                const isHov = i === hoveredIndex;
                const ctx2 = viz.ctx;
                ctx2.fillStyle = src.color;
                ctx2.fillRect(legX, ly, 20, 20);
                ctx2.fillStyle = isHov ? viz.colors.yellow : viz.colors.text;
                ctx2.font = (isHov ? 'bold ' : '') + '13px sans-serif';
                ctx2.textAlign = 'left';
                ctx2.textBaseline = 'middle';
                ctx2.fillText(src.label, legX + 28, ly + 10);
                ctx2.fillStyle = viz.colors.teal;
                ctx2.font = '12px sans-serif';
                ctx2.fillText(src.value + '% of total', legX + 28, ly + 26);
              });

              if (hoveredIndex >= 0) {
                const src = sources[hoveredIndex];
                viz.screenText(src.label + ': ' + src.value + '%', 200, 370, viz.colors.yellow, 13, 'center');
              }
            }

            drawPie();
          }
        }
      ],
      exercises: [
        {
          question: 'Which chemical is most commonly added during the coagulation step of water treatment?',
          type: 'mcq',
          options: ['NaCl', 'Al₂(SO₄)₃', 'HCl', 'Na₂SO₄'],
          answer: 1,
          explanation: 'Alum (aluminum sulfate) provides Al³⁺ ions that hydrolyze to form Al(OH)₃ colloids, which coagulate suspended particles.'
        },
        {
          question: 'Activated carbon removes organic pollutants from water primarily by which mechanism?',
          type: 'mcq',
          options: ['Chemical oxidation', 'Ion exchange', 'Physical adsorption', 'Precipitation'],
          answer: 2,
          explanation: 'Activated carbon has an enormous surface area (~1000 m²/g) that physically adsorbs organic molecules by van der Waals forces.'
        },
        {
          question: 'What does a high COD (Chemical Oxygen Demand) value indicate about water quality?',
          type: 'mcq',
          options: ['The water is very clear', 'The water contains high organic matter', 'The water has excess dissolved oxygen', 'The water is slightly acidic'],
          answer: 1,
          explanation: 'COD measures how much oxygen is needed to oxidize organic matter. High COD means high organic pollution.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Section 2: Air Pollution (大气污染)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch17-sec02',
      title: 'Air Pollution',
      content: `
<h2>Air Pollution (大气污染)</h2>
<p>
  The atmosphere is a fragile chemical system. Combustion of fossil fuels,
  industrial processes, and transportation release pollutants that alter
  atmospheric chemistry in ways that harm human health and ecosystems.
</p>

<h3>Key Pollutants and Their Sources</h3>

<table class="data-table">
  <thead>
    <tr><th>Pollutant</th><th>Sources</th><th>Key Effects</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>SO₂</td>
      <td>Coal burning, smelting</td>
      <td>Acid rain, respiratory damage</td>
    </tr>
    <tr>
      <td>NOₓ (NO, NO₂)</td>
      <td>Vehicle engines, power plants</td>
      <td>Acid rain, smog, ozone formation</td>
    </tr>
    <tr>
      <td>PM2.5</td>
      <td>Combustion, dust, secondary formation</td>
      <td>Deep lung penetration, cardiovascular disease</td>
    </tr>
    <tr>
      <td>CO₂</td>
      <td>All combustion, respiration</td>
      <td>Greenhouse effect, ocean acidification</td>
    </tr>
    <tr>
      <td>CO</td>
      <td>Incomplete combustion</td>
      <td>Binds hemoglobin, lethal at high concentrations</td>
    </tr>
    <tr>
      <td>CFCs</td>
      <td>Old refrigerants, aerosols</td>
      <td>Ozone depletion</td>
    </tr>
  </tbody>
</table>

<h3>Acid Rain Chemistry</h3>
<p>
  Acid rain forms when SO₂ and NOₓ react with water vapor in the atmosphere:
</p>

<div class="info-box">
  <strong>Sulfur dioxide pathway:</strong><br>
  \\[\\text{SO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{SO}_3\\]
  \\[2\\text{SO}_2 + \\text{O}_2 \\xrightarrow{\\text{catalyst}} 2\\text{SO}_3\\]
  \\[\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4\\]
  <br>
  <strong>Nitrogen oxide pathway:</strong><br>
  \\[4\\text{NO} + 3\\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4\\text{HNO}_3\\]
</div>

<p>
  Normal rain has pH ≈ 5.6 (due to dissolved CO₂). Acid rain has pH &lt; 5.6.
  It damages ecosystems, corrodes metals and stone, and acidifies soils.
</p>

<h3>The Greenhouse Effect</h3>
<p>
  The Earth absorbs sunlight and re-emits infrared radiation. Greenhouse gases
  (CO₂, CH₄, N₂O, H₂O) absorb this infrared and re-emit it in all directions,
  warming the surface. The natural greenhouse effect keeps Earth ~33°C warmer
  than it would otherwise be. Human emissions are enhancing this effect.
</p>

<div class="info-box">
  <strong>Greenhouse Gas Potentials (GWP, relative to CO₂ over 100 years):</strong><br>
  CO₂: 1 &nbsp;|&nbsp; CH₄: 28 &nbsp;|&nbsp; N₂O: 265 &nbsp;|&nbsp; SF₆: 23,500
</div>

<h3>Ozone Layer Depletion</h3>
<p>
  Stratospheric ozone (O₃) absorbs harmful UV-B radiation. CFCs (e.g., CCl₂F₂)
  released at ground level drift to the stratosphere where UV breaks them down:
  \\[\\text{CCl}_2\\text{F}_2 \\xrightarrow{h\\nu} \\text{CClF}_2^\\bullet + \\text{Cl}^\\bullet\\]
  \\[\\text{Cl}^\\bullet + \\text{O}_3 \\rightarrow \\text{ClO}^\\bullet + \\text{O}_2\\]
  \\[\\text{ClO}^\\bullet + \\text{O} \\rightarrow \\text{Cl}^\\bullet + \\text{O}_2 \\quad (\\text{catalytic cycle})\\]
  One Cl atom can destroy ~100,000 ozone molecules!
  The Montreal Protocol (1987) phased out CFCs and the ozone layer is now recovering.
</p>

<h3>Air Pollution Control</h3>
<ul>
  <li><strong>Flue-gas desulfurization (FGD):</strong> \\(\\text{CaCO}_3 + \\text{SO}_2 \\rightarrow \\text{CaSO}_3 + \\text{CO}_2\\), then oxidized to gypsum (CaSO₄·2H₂O)</li>
  <li><strong>Catalytic converters:</strong> Pt/Pd/Rh catalysts convert CO, NOₓ, and unburned hydrocarbons to CO₂, N₂, and H₂O</li>
  <li><strong>Electrostatic precipitators:</strong> Remove PM from flue gas by ionizing particles and collecting them on charged plates</li>
</ul>

<h3>The Air Quality Index (AQI)</h3>
<table class="data-table">
  <thead><tr><th>AQI Range</th><th>Category</th><th>PM₂.₅ (μg/m³)</th></tr></thead>
  <tbody>
    <tr><td>0–50</td><td>Good</td><td>0–12</td></tr>
    <tr><td>51–100</td><td>Moderate</td><td>12.1–35.4</td></tr>
    <tr><td>101–150</td><td>Unhealthy (Sensitive)</td><td>35.5–55.4</td></tr>
    <tr><td>151–200</td><td>Unhealthy</td><td>55.5–150.4</td></tr>
    <tr><td>201–300</td><td>Very Unhealthy</td><td>150.5–250.4</td></tr>
    <tr><td>301–500</td><td>Hazardous</td><td>250.5+</td></tr>
  </tbody>
</table>
`,
      visualizations: [
        {
          id: 'greenhouse-simulator',
          title: 'Greenhouse Effect Simulator',
          description: 'Adjust CO₂ concentration and see how it affects Earth\'s energy balance and temperature.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 380 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            let co2Level = 420; // ppm
            let t = 0;

            function getTemperature(ppm) {
              return 14 + 3 * Math.log2(ppm / 280);
            }

            function draw(time) {
              t = time * 0.001;
              viz.clear();
              const w = viz.width, h = viz.height;
              const ctx = viz.ctx;

              const temp = getTemperature(co2Level);
              const co2Opacity = Math.min((co2Level - 200) / 1000, 0.85);

              viz.screenText('Greenhouse Effect Simulator', w / 2, 22, viz.colors.teal, 15, 'center');

              const earthY = h - 100;
              const atmTop = 80, atmBot = earthY;

              const sunX = 80, sunY = 80;
              ctx.fillStyle = '#FFD700aa';
              ctx.beginPath();
              ctx.arc(sunX, sunY, 38, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#FFD700';
              ctx.beginPath();
              ctx.arc(sunX, sunY, 28, 0, Math.PI * 2);
              ctx.fill();
              viz.screenText('Sun', sunX, sunY + 50, viz.colors.yellow, 11, 'center');

              const atmAlpha = Math.round(co2Opacity * 180).toString(16).padStart(2, '0');
              ctx.fillStyle = '#2a4a6a' + atmAlpha;
              ctx.fillRect(0, atmTop, w, atmBot - atmTop);
              ctx.strokeStyle = viz.colors.blue + '88';
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(0, atmTop); ctx.lineTo(w, atmTop);
              ctx.moveTo(0, atmBot); ctx.lineTo(w, atmBot);
              ctx.stroke();
              ctx.setLineDash([]);
              viz.screenText('Atmosphere (CO₂: ' + co2Level + ' ppm)', w / 2, (atmTop + atmBot) / 2, viz.colors.blue, 13, 'center');

              const grad = ctx.createLinearGradient(0, earthY, 0, h);
              if (temp > 20) {
                grad.addColorStop(0, '#8B2500');
                grad.addColorStop(1, '#5a1200');
              } else if (temp > 14) {
                grad.addColorStop(0, '#2d6a2d');
                grad.addColorStop(1, '#1a3d1a');
              } else {
                grad.addColorStop(0, '#4a7a8a');
                grad.addColorStop(1, '#2a4a5a');
              }
              ctx.fillStyle = grad;
              ctx.fillRect(0, earthY, w, h - earthY);
              viz.screenText('Earth Surface', w / 2, earthY + 25, viz.colors.white, 12, 'center');

              for (let i = 0; i < 3; i++) {
                const ax = 150 + i * 160;
                const arrowT = (t * 0.8 + i * 0.4) % 1;
                const ay = atmTop + arrowT * (atmBot - atmTop - 20);
                ctx.fillStyle = '#FFD700cc';
                ctx.strokeStyle = '#FFD700cc';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.lineTo(ax, ay + 30);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(ax, ay + 30);
                ctx.lineTo(ax - 5, ay + 18);
                ctx.lineTo(ax + 5, ay + 18);
                ctx.closePath();
                ctx.fill();
              }

              const numIR = Math.round(co2Level / 100);
              for (let i = 0; i < Math.min(numIR, 8); i++) {
                const ax = 120 + i * 75;
                const irT = (t * 0.6 + i * 0.25) % 1;
                const goingDown = i % 2 === 0;
                const ay = goingDown
                  ? atmBot - 20 - irT * (atmBot - atmTop - 20)
                  : atmTop + irT * (atmBot - atmTop - 20);
                ctx.strokeStyle = '#FF4500bb';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.lineTo(ax, ay + (goingDown ? -20 : 20));
                ctx.stroke();
                ctx.fillStyle = '#FF4500bb';
                ctx.beginPath();
                if (goingDown) {
                  ctx.moveTo(ax, ay - 20);
                  ctx.lineTo(ax - 4, ay - 8);
                  ctx.lineTo(ax + 4, ay - 8);
                } else {
                  ctx.moveTo(ax, ay + 20);
                  ctx.lineTo(ax - 4, ay + 8);
                  ctx.lineTo(ax + 4, ay + 8);
                }
                ctx.closePath();
                ctx.fill();
              }

              const tempColor = temp > 20 ? viz.colors.red : temp > 14 ? viz.colors.green : viz.colors.blue;
              ctx.fillStyle = '#0f0f28cc';
              ctx.beginPath();
              ctx.roundRect(w - 180, 40, 160, 80, 8);
              ctx.fill();
              viz.screenText('Surface Temperature', w - 100, 60, viz.colors.text, 11, 'center');
              viz.screenText(temp.toFixed(1) + ' °C', w - 100, 90, tempColor, 22, 'center');
              viz.screenText('CO₂: ' + co2Level + ' ppm', w - 100, 112, viz.colors.text, 11, 'center');

              ctx.fillStyle = '#FFD70088'; ctx.fillRect(20, h - 30, 14, 8);
              viz.screenText('Solar (shortwave)', 90, h - 26, viz.colors.yellow, 10, 'center');
              ctx.fillStyle = '#FF450088'; ctx.fillRect(170, h - 30, 14, 8);
              viz.screenText('Infrared (longwave)', 250, h - 26, viz.colors.orange, 10, 'center');
            }

            VizEngine.createSlider(controls, 'CO₂ (ppm):', 280, 1200, 420, 20, (v) => { co2Level = v; });
            viz.animate(draw);
          }
        },
        {
          id: 'aqi-monitor',
          title: 'Air Quality Index Monitor',
          description: 'Adjust PM2.5 concentration and observe how AQI and health category change.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 420 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            const categories = [
              { max: 50, label: 'Good', color: '#00e400', textColor: '#000' },
              { max: 100, label: 'Moderate', color: '#ffff00', textColor: '#000' },
              { max: 150, label: 'Unhealthy (Sensitive)', color: '#ff7e00', textColor: '#fff' },
              { max: 200, label: 'Unhealthy', color: '#ff0000', textColor: '#fff' },
              { max: 300, label: 'Very Unhealthy', color: '#8f3f97', textColor: '#fff' },
              { max: 500, label: 'Hazardous', color: '#7e0023', textColor: '#fff' }
            ];

            let pm25 = 12;

            function pm25ToAQI(c) {
              const bp = [
                { cLow: 0, cHigh: 12, iLow: 0, iHigh: 50 },
                { cLow: 12.1, cHigh: 35.4, iLow: 51, iHigh: 100 },
                { cLow: 35.5, cHigh: 55.4, iLow: 101, iHigh: 150 },
                { cLow: 55.5, cHigh: 150.4, iLow: 151, iHigh: 200 },
                { cLow: 150.5, cHigh: 250.4, iLow: 201, iHigh: 300 },
                { cLow: 250.5, cHigh: 500, iLow: 301, iHigh: 500 }
              ];
              for (const b of bp) {
                if (c <= b.cHigh) {
                  return Math.round(((b.iHigh - b.iLow) / (b.cHigh - b.cLow)) * (c - b.cLow) + b.iLow);
                }
              }
              return 500;
            }

            function getCategory(aqi) {
              return categories.find(c => aqi <= c.max) || categories[categories.length - 1];
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const w = viz.width, h = viz.height;
              const aqi = pm25ToAQI(pm25);
              const cat = getCategory(aqi);

              viz.screenText('Real-Time AQI Monitor', w / 2, 24, viz.colors.teal, 15, 'center');

              const gx = 200, gy = 240, gr = 140;
              const startA = Math.PI * 0.75, endA = Math.PI * 2.25;
              const totalArc = endA - startA;

              let prevAngle = startA;
              categories.forEach((c, i) => {
                const fraction = (c.max - (i === 0 ? 0 : categories[i - 1].max)) / 500;
                const arcEnd = prevAngle + totalArc * fraction;
                ctx.beginPath();
                ctx.arc(gx, gy, gr, prevAngle, arcEnd);
                ctx.lineWidth = 28;
                ctx.strokeStyle = c.color + 'bb';
                ctx.stroke();
                prevAngle = arcEnd;
              });

              const aqiFraction = Math.min(aqi / 500, 1);
              const needleAngle = startA + totalArc * aqiFraction;
              const nx = gx + Math.cos(needleAngle) * (gr - 10);
              const ny = gy + Math.sin(needleAngle) * (gr - 10);
              ctx.beginPath();
              ctx.moveTo(gx, gy);
              ctx.lineTo(nx, ny);
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 3;
              ctx.stroke();

              ctx.beginPath();
              ctx.arc(gx, gy, 12, 0, Math.PI * 2);
              ctx.fillStyle = '#ffffff';
              ctx.fill();

              ctx.fillStyle = cat.color;
              ctx.font = 'bold 52px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(aqi.toString(), gx, gy + 30);

              ctx.fillStyle = viz.colors.text;
              ctx.font = '13px sans-serif';
              ctx.fillText('AQI', gx, gy + 62);

              const badgeW = 200, badgeH = 36;
              const bx = gx - badgeW / 2, by = gy + 80;
              ctx.fillStyle = cat.color;
              ctx.beginPath();
              ctx.roundRect(bx, by, badgeW, badgeH, 8);
              ctx.fill();
              ctx.fillStyle = cat.textColor;
              ctx.font = 'bold 14px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(cat.label, gx, by + 18);

              const bars = [
                { name: 'PM₂.₅', value: pm25, max: 250, unit: 'μg/m³', color: viz.colors.blue },
                { name: 'PM₁₀', value: pm25 * 1.8, max: 430, unit: 'μg/m³', color: viz.colors.teal },
                { name: 'NO₂', value: pm25 * 0.6, max: 360, unit: 'μg/m³', color: viz.colors.orange },
                { name: 'SO₂', value: pm25 * 0.3, max: 200, unit: 'μg/m³', color: viz.colors.purple }
              ];

              const panelX = 390, panelY = 60, barMaxW = 250;
              viz.screenText('Pollutant Concentrations', panelX + barMaxW / 2, panelY - 14, viz.colors.text, 12, 'center');

              bars.forEach((b, i) => {
                const by2 = panelY + i * 75;
                ctx.fillStyle = viz.colors.grid;
                ctx.fillRect(panelX, by2, barMaxW, 22);
                const bw = Math.min((b.value / b.max) * barMaxW, barMaxW);
                ctx.fillStyle = b.color;
                ctx.fillRect(panelX, by2, bw, 22);
                ctx.fillStyle = viz.colors.text;
                ctx.font = '13px sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText(b.name, panelX, by2 + 28);
                ctx.fillStyle = viz.colors.teal;
                ctx.font = '12px sans-serif';
                ctx.fillText(b.value.toFixed(1) + ' ' + b.unit, panelX + 60, by2 + 28);
              });

              const tips = {
                'Good': 'Air quality is satisfactory. No restrictions.',
                'Moderate': 'Unusually sensitive people should limit outdoor exertion.',
                'Unhealthy (Sensitive)': 'Sensitive groups should reduce outdoor activity.',
                'Unhealthy': 'Everyone should limit prolonged outdoor exertion.',
                'Very Unhealthy': 'Everyone should avoid outdoor activity.',
                'Hazardous': 'Stay indoors. Avoid all outdoor activity.'
              };
              viz.screenText('Advice: ' + (tips[cat.label] || ''), w / 2, h - 16, viz.colors.yellow, 12, 'center');
            }

            VizEngine.createSlider(controls, 'PM₂.₅ (μg/m³):', 0, 300, 12, 1, (v) => {
              pm25 = v;
              draw();
            });

            draw();
          }
        }
      ],
      exercises: [
        {
          question: 'What is the approximate pH of normal (unpolluted) rain?',
          type: 'mcq',
          options: ['7.0', '6.5', '5.6', '4.5'],
          answer: 2,
          explanation: 'Normal rain dissolves atmospheric CO₂ to form carbonic acid (H₂CO₃), giving a pH of about 5.6. Below this is considered acid rain.'
        },
        {
          question: 'Which gas is primarily responsible for ozone layer depletion?',
          type: 'mcq',
          options: ['CO₂', 'SO₂', 'CH₄', 'CFCs (chlorofluorocarbons)'],
          answer: 3,
          explanation: 'CFCs release Cl• radicals in the stratosphere that catalytically destroy ozone (O₃). One Cl atom can destroy ~100,000 O₃ molecules.'
        },
        {
          question: 'In flue-gas desulfurization, limestone (CaCO₃) reacts with SO₂. What is the initial product?',
          type: 'mcq',
          options: ['CaSO₄', 'CaSO₃', 'CaCl₂', 'Ca(OH)₂'],
          answer: 1,
          explanation: 'CaCO₃ + SO₂ → CaSO₃ + CO₂. The calcium sulfite can be further oxidized to calcium sulfate (gypsum, CaSO₄·2H₂O).'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Section 3: Solid Waste & Recycling (固体废物处理)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch17-sec03',
      title: 'Solid Waste Management',
      content: `
<h2>Solid Waste Management (固体废物处理)</h2>
<p>
  Modern society generates enormous quantities of solid waste. Chemistry is
  central to understanding how materials can be recycled, safely disposed of,
  or converted to useful products.
</p>

<h3>Waste Classification (China Standard)</h3>

<table class="data-table">
  <thead>
    <tr><th>Category</th><th>Examples</th><th>Treatment</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Kitchen Waste (厨余垃圾)</td>
      <td>Food scraps, vegetable peels</td>
      <td>Composting, anaerobic digestion (→ biogas)</td>
    </tr>
    <tr>
      <td>Recyclables (可回收物)</td>
      <td>Paper, glass, metals, plastics</td>
      <td>Sorting & recycling</td>
    </tr>
    <tr>
      <td>Hazardous Waste (有害垃圾)</td>
      <td>Batteries, paint, pesticides, fluorescent tubes</td>
      <td>Special collection & treatment</td>
    </tr>
    <tr>
      <td>Residual Waste (其他垃圾)</td>
      <td>Mixed non-recyclable waste</td>
      <td>Incineration or landfill</td>
    </tr>
  </tbody>
</table>

<h3>Plastic Recycling Chemistry</h3>
<p>
  Plastics are identified by the Resin Identification Code (RIC 1–7):
</p>

<div class="info-box">
  <strong>Common Recyclable Plastics:</strong><br>
  <strong>#1 PET</strong> (polyethylene terephthalate) — bottles, clothing<br>
  <strong>#2 HDPE</strong> (high-density polyethylene) — bottles, pipes<br>
  <strong>#5 PP</strong> (polypropylene) — food containers, medical equipment<br><br>
  <em>Recycling PET:</em> Glycolysis with ethylene glycol breaks ester bonds
  to recover monomers:<br>
  \\[-[\\text{OC-C}_6\\text{H}_4\\text{-COO-(CH}_2)_2\\text{O}-]_n + n\\text{HOCH}_2\\text{CH}_2\\text{OH}
    \\rightarrow n\\text{ HOCH}_2\\text{CH}_2\\text{O-CO-C}_6\\text{H}_4\\text{-COOH}\\]
</div>

<h3>Incineration</h3>
<p>
  Modern waste-to-energy (WTE) plants burn residual waste at &gt;850°C.
  The heat generates steam for electricity. However, incomplete combustion
  can produce dioxins (highly toxic organochlorines). Proper temperature
  control and flue-gas treatment are essential.
</p>

<div class="info-box">
  <strong>Energy recovery from incineration:</strong><br>
  Typical calorific value of mixed municipal waste ≈ 8–12 MJ/kg<br>
  Efficiency of electricity generation ≈ 20–25%
</div>

<h3>Hazardous Waste Treatment</h3>

<table class="data-table">
  <thead>
    <tr><th>Waste Type</th><th>Treatment Method</th><th>Key Chemistry</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Lead-acid batteries</td>
      <td>Smelting</td>
      <td>PbSO₄ + C → Pb + SO₂ + CO₂ (pyrometallurgy)</td>
    </tr>
    <tr>
      <td>Chromium wastewater</td>
      <td>Reduction then precipitation</td>
      <td>Cr⁶⁺ → Cr³⁺ (by FeSO₄), then Cr(OH)₃↓ at pH 8–9</td>
    </tr>
    <tr>
      <td>Mercury lamps</td>
      <td>Retort process</td>
      <td>Hg vaporized at 450°C, condensed and recovered</td>
    </tr>
    <tr>
      <td>Cyanide wastewater</td>
      <td>Oxidative destruction</td>
      <td>CN⁻ + ClO⁻ → CNO⁻ → CO₂ + N₂ (alkaline chlorination)</td>
    </tr>
  </tbody>
</table>

<h3>Composting Chemistry</h3>
<p>
  Composting is the aerobic microbial decomposition of organic waste.
  The C:N ratio of the starting material should be 25–30:1 for optimal
  composting. The process releases heat (temperatures reach 55–65°C,
  killing pathogens) and produces humus — a stable, nutrient-rich material.
</p>

<div class="example-box">
  <strong>Anaerobic Digestion (biogas):</strong><br>
  Kitchen waste → organic acids → acetate → methane:<br>
  \\[\\text{CH}_3\\text{COOH} \\xrightarrow{\\text{methanogens}} \\text{CH}_4 + \\text{CO}_2\\]
  Biogas is typically 60% CH₄, 40% CO₂ — a renewable fuel.
</div>
`,
      visualizations: [
        {
          id: 'carbon-footprint-calculator',
          title: 'Carbon Footprint Calculator',
          description: 'Enter your daily activities to estimate your CO₂ emissions and compare against global averages.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 400 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            const categories = [
              { name: 'Car driving', unit: 'km/day', factor: 0.21, value: 30, color: '#f85149' },
              { name: 'Electricity', unit: 'kWh/day', factor: 0.55, value: 8, color: '#f0883e' },
              { name: 'Meat consumption', unit: 'portions/day', factor: 2.5, value: 1, color: '#d29922' },
              { name: 'Air travel', unit: 'km/month / 30', factor: 0.115, value: 0, color: '#bc8cff' },
              { name: 'Heating/Cooling', unit: 'hours/day', factor: 0.5, value: 4, color: '#3fb9a0' }
            ];

            let values = categories.map(c => c.value);

            function draw() {
              viz.clear();
              const w = viz.width, h = viz.height;
              const ctx = viz.ctx;

              viz.screenText('Daily Carbon Footprint Calculator', w / 2, 22, viz.colors.teal, 15, 'center');

              const emissions = categories.map((c, i) => values[i] * c.factor);
              const total = emissions.reduce((s, v) => s + v, 0);
              const worldAvg = 13.5;

              const barAreaX = 40, barAreaY = 50, barAreaW = 280, barAreaH = 310;
              const maxEmission = Math.max(...emissions, 3);
              const barH = 48;
              const barGap = 12;

              emissions.forEach((e, i) => {
                const bx = barAreaX;
                const by = barAreaY + i * (barH + barGap);
                const bw = (e / maxEmission) * barAreaW;
                const c = categories[i];

                ctx.fillStyle = '#1a1a40';
                ctx.beginPath();
                ctx.roundRect(bx, by, barAreaW, barH, 4);
                ctx.fill();

                ctx.fillStyle = c.color + 'cc';
                ctx.beginPath();
                ctx.roundRect(bx, by, Math.max(bw, 4), barH, 4);
                ctx.fill();

                viz.screenText(c.name, bx + 6, by + 14, viz.colors.white, 11, 'left', 'middle');
                viz.screenText(values[i].toFixed(1) + ' ' + c.unit.split('/')[0], bx + 6, by + 34, viz.colors.text, 10, 'left', 'middle');
                viz.screenText(e.toFixed(2) + ' kg CO₂', bx + barAreaW - 4, by + barH / 2, c.color, 11, 'right', 'middle');
              });

              const panX = barAreaX + barAreaW + 40, panY = 50, panW = w - panX - 20, panH = 320;
              ctx.fillStyle = '#0f0f28';
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.roundRect(panX, panY, panW, panH, 10);
              ctx.fill();
              ctx.stroke();

              viz.screenText('Your Daily Total', panX + panW / 2, panY + 24, viz.colors.text, 12, 'center');
              const totalColor = total > worldAvg ? viz.colors.red : viz.colors.green;
              viz.screenText(total.toFixed(1), panX + panW / 2, panY + 72, totalColor, 36, 'center');
              viz.screenText('kg CO₂/day', panX + panW / 2, panY + 100, viz.colors.text, 12, 'center');

              const cx = panX + panW / 2, cy = panY + 195;
              const outerR = 65, innerR = 38;
              let startAngle = -Math.PI / 2;
              emissions.forEach((e, i) => {
                if (e <= 0) return;
                const sweep = (e / Math.max(total, 0.1)) * Math.PI * 2;
                ctx.fillStyle = categories[i].color;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, outerR, startAngle, startAngle + sweep);
                ctx.closePath();
                ctx.fill();
                startAngle += sweep;
              });
              ctx.fillStyle = '#0f0f28';
              ctx.beginPath();
              ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
              ctx.fill();

              ctx.strokeStyle = viz.colors.yellow;
              ctx.lineWidth = 1.5;
              ctx.setLineDash([4, 3]);
              ctx.beginPath();
              ctx.moveTo(panX + 10, panY + 130);
              ctx.lineTo(panX + panW - 10, panY + 130);
              ctx.stroke();
              ctx.setLineDash([]);
              viz.screenText('World avg: 13.5 kg/day', panX + panW / 2, panY + 144, viz.colors.yellow, 10, 'center');

              const cmpText = total > worldAvg
                ? ((total - worldAvg) / worldAvg * 100).toFixed(0) + '% above average'
                : ((worldAvg - total) / worldAvg * 100).toFixed(0) + '% below average';
              viz.screenText(cmpText, panX + panW / 2, panY + 160, totalColor, 10, 'center');
            }

            categories.forEach((c, i) => {
              VizEngine.createSlider(controls, c.name + ' (' + c.unit + '):', 0, c.value * 4 + 5, c.value, 0.5, (v) => {
                values[i] = v;
                draw();
              });
            });

            draw();
          }
        },
        {
          id: 'recycling-sort',
          title: 'Plastic Recycling Sorting Game',
          description: 'Identify whether each plastic item is recyclable based on its resin code. Click the correct bin!',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 420 });

            const items = [
              { name: 'Water Bottle', code: 1, recyclable: true, detail: 'PET — widely accepted' },
              { name: 'Milk Jug', code: 2, recyclable: true, detail: 'HDPE — widely accepted' },
              { name: 'PVC Pipe', code: 3, recyclable: false, detail: 'PVC — releases toxic HCl when melted' },
              { name: 'Bread Bag', code: 4, recyclable: false, detail: 'LDPE — not accepted in most curbside' },
              { name: 'Yogurt Cup', code: 5, recyclable: true, detail: 'PP — increasingly accepted' },
              { name: 'Foam Cup', code: 6, recyclable: false, detail: 'PS — rarely recyclable' }
            ];

            let currentIndex = 0;
            let score = 0;
            let feedback = '';
            let feedbackColor = viz.colors.text;
            let answered = false;

            const canvas = viz.canvas;

            const bin1 = { x: 120, y: 300, w: 120, h: 80, label: 'Recycle', color: '#4caf50' };
            const bin2 = { x: 460, y: 300, w: 120, h: 80, label: 'Landfill', color: '#f44336' };

            canvas.addEventListener('click', (e) => {
              if (answered) {
                currentIndex = (currentIndex + 1) % items.length;
                answered = false;
                feedback = '';
                draw();
                return;
              }
              const rect = canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;
              const item = items[currentIndex];
              let clicked = null;

              if (mx >= bin1.x && mx <= bin1.x + bin1.w && my >= bin1.y && my <= bin1.y + bin1.h) {
                clicked = true;
              } else if (mx >= bin2.x && mx <= bin2.x + bin2.w && my >= bin2.y && my <= bin2.y + bin2.h) {
                clicked = false;
              }

              if (clicked !== null) {
                answered = true;
                if (clicked === item.recyclable) {
                  score++;
                  feedback = 'Correct! ' + item.detail;
                  feedbackColor = '#4caf50';
                } else {
                  feedback = 'Incorrect. ' + item.detail;
                  feedbackColor = '#f44336';
                }
                draw();
              }
            });

            function drawBin(b) {
              const ctx = viz.ctx;
              ctx.fillStyle = b.color + '44';
              ctx.strokeStyle = b.color;
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.roundRect(b.x, b.y, b.w, b.h, 8);
              ctx.fill();
              ctx.stroke();
              ctx.fillStyle = b.color;
              ctx.font = 'bold 15px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(b.label, b.x + b.w / 2, b.y + b.h / 2);
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const w = viz.width;

              viz.screenText('Plastic Sorting Challenge', w / 2, 24, viz.colors.teal, 15, 'center');
              viz.screenText('Score: ' + score + '/' + items.length, w / 2, 48, viz.colors.yellow, 13, 'center');

              const item = items[currentIndex];

              const cx = w / 2, cy = 150;
              ctx.fillStyle = viz.colors.grid;
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.roundRect(cx - 120, cy - 60, 240, 110, 10);
              ctx.fill();
              ctx.stroke();

              ctx.beginPath();
              ctx.arc(cx, cy - 20, 32, 0, Math.PI * 2);
              ctx.fillStyle = viz.colors.blue;
              ctx.fill();
              ctx.fillStyle = '#fff';
              ctx.font = 'bold 24px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(item.code.toString(), cx, cy - 20);

              ctx.fillStyle = viz.colors.text;
              ctx.font = 'bold 15px sans-serif';
              ctx.fillText(item.name, cx, cy + 24);

              ctx.fillStyle = viz.colors.teal;
              ctx.font = '12px sans-serif';
              ctx.fillText('Resin Code: ' + item.code, cx, cy + 42);

              ctx.fillStyle = viz.colors.text;
              ctx.font = '28px sans-serif';
              ctx.fillText('\u2193', cx, cy + 80);

              viz.screenText('Click the correct bin:', cx, 258, viz.colors.text, 13, 'center');

              drawBin(bin1);
              drawBin(bin2);

              if (feedback) {
                ctx.fillStyle = feedbackColor;
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(feedback, w / 2, 390);
                ctx.fillStyle = viz.colors.text;
                ctx.font = '12px sans-serif';
                ctx.fillText('Click anywhere to continue...', w / 2, 408);
              }
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          question: 'Which waste category should batteries and fluorescent tubes be placed in (China classification)?',
          type: 'mcq',
          options: ['Kitchen waste (厨余垃圾)', 'Recyclables (可回收物)', 'Hazardous waste (有害垃圾)', 'Residual waste (其他垃圾)'],
          answer: 2,
          explanation: 'Batteries and fluorescent tubes contain toxic metals (Pb, Hg) and must be collected as hazardous waste for special treatment.'
        },
        {
          question: 'What is the ideal C:N ratio for aerobic composting?',
          type: 'mcq',
          options: ['5:1', '10:1', '25–30:1', '100:1'],
          answer: 2,
          explanation: 'A C:N ratio of 25–30:1 provides optimal conditions for microbial activity. Too low causes nitrogen loss (smell); too high slows decomposition.'
        },
        {
          question: 'In a WTE (waste-to-energy) incineration plant, what minimum temperature is required to prevent dioxin formation?',
          type: 'mcq',
          options: ['400°C', '650°C', '850°C', '1200°C'],
          answer: 2,
          explanation: 'Temperatures above 850°C are required to destroy dioxins and furans. Modern plants also have secondary combustion chambers and flue-gas treatment.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Section 4: New Energy Sources (新能源)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch17-sec04',
      title: 'New Energy Sources',
      content: `
<h2>New Energy Sources (新能源)</h2>
<p>
  Fossil fuels (coal, oil, natural gas) are finite and emit CO₂. The
  transition to sustainable energy systems requires chemistry at every step —
  from materials for solar panels to electrolytes in batteries to catalysts
  for hydrogen production.
</p>

<h3>Hydrogen Fuel Cells</h3>
<p>
  A hydrogen fuel cell converts chemical energy directly to electrical energy
  with high efficiency and zero emissions (product is only water).
</p>

<div class="info-box">
  <strong>Proton Exchange Membrane (PEM) Fuel Cell Reactions:</strong><br>
  Anode (oxidation): \\[\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2e^-\\]
  Cathode (reduction): \\[\\frac{1}{2}\\text{O}_2 + 2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2\\text{O}\\]
  Overall: \\[\\text{H}_2 + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{H}_2\\text{O}\\]
  Theoretical maximum efficiency: ~83% (vs ~35% for combustion engines)
</div>

<h3>Green Hydrogen Production</h3>
<p>
  Water electrolysis powered by renewable energy ("green hydrogen"):
  \\[2\\text{H}_2\\text{O} \\xrightarrow{\\text{electricity}} 2\\text{H}_2 + \\text{O}_2\\]
  The challenge is reducing the cost of electricity and finding durable
  catalysts (e.g., IrO₂ for oxygen evolution, Pt for hydrogen evolution).
</p>

<h3>Solar Cells (Photovoltaics)</h3>
<p>
  Silicon solar cells (p-n junction) convert photons to electron-hole pairs.
  When a photon excites an electron across the band gap, it can do work in
  an external circuit.
</p>

<table class="data-table">
  <thead>
    <tr><th>Technology</th><th>Efficiency</th><th>Material</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Crystalline Silicon</td><td>20–24%</td><td>Si</td><td>Commercial</td></tr>
    <tr><td>Thin-film (CdTe)</td><td>15–18%</td><td>CdTe, CIS</td><td>Commercial</td></tr>
    <tr><td>Perovskite</td><td>25–29%</td><td>CH₃NH₃PbI₃</td><td>Emerging</td></tr>
    <tr><td>Multi-junction</td><td>40–47%</td><td>GaAs/InP</td><td>Aerospace</td></tr>
  </tbody>
</table>

<h3>Biofuels</h3>

<div class="info-box">
  <strong>First-generation biofuels</strong> use food crops (corn, sugarcane, rapeseed).<br>
  <strong>Second-generation biofuels</strong> use lignocellulosic biomass (agricultural waste, wood).<br>
  <strong>Third-generation biofuels</strong> use algae (100× more productive than land crops per hectare).<br><br>
  <em>Transesterification to produce biodiesel:</em><br>
  \\[\\text{Triglyceride} + 3\\text{CH}_3\\text{OH} \\xrightarrow{\\text{NaOH}}
    3\\text{ Fatty acid methyl esters (FAME)} + \\text{Glycerol}\\]
</div>

<h3>Nuclear Energy</h3>
<p>
  Nuclear fission releases about a million times more energy per atom than
  chemical reactions. The fission of ²³⁵U:
  \\[{}^{235}_{92}\\text{U} + {}^{1}_{0}n \\rightarrow {}^{144}_{56}\\text{Ba} +
    {}^{89}_{36}\\text{Kr} + 3{}^{1}_{0}n + \\text{energy}\\]
  Mass defect \\(\\Delta m\\) converts to energy by \\(E = \\Delta mc^2\\).
</p>

<h3>Energy Storage: Lithium-Ion Batteries</h3>
<p>
  Rechargeable Li-ion batteries store energy through reversible intercalation:
</p>
<div class="info-box">
  Charging — cathode releases Li⁺:<br>
  \\[\\text{LiCoO}_2 \\rightarrow \\text{Li}_{1-x}\\text{CoO}_2 + x\\text{Li}^+ + xe^-\\]
  Charging — anode intercalates Li⁺:<br>
  \\[x\\text{Li}^+ + xe^- + 6\\text{C} \\rightarrow x\\text{LiC}_6\\]
  Discharging reverses both reactions, releasing stored energy.
</div>
`,
      visualizations: [
        {
          id: 'battery-comparison',
          title: 'Battery Technology Comparison',
          description: 'Compare different battery types across key performance metrics.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 400 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            const batteries = [
              { name: 'Lead-Acid', color: '#8B4513', energyDensity: 35, powerDensity: 180, lifespan: 500, cost: 100, safety: 70, eco: 30 },
              { name: 'NiMH', color: '#4682B4', energyDensity: 80, powerDensity: 250, lifespan: 1000, cost: 200, safety: 85, eco: 60 },
              { name: 'Li-ion', color: '#58a6ff', energyDensity: 200, powerDensity: 1000, lifespan: 1500, cost: 350, safety: 75, eco: 65 },
              { name: 'LiFePO₄', color: '#3fb950', energyDensity: 160, powerDensity: 1200, lifespan: 3000, cost: 300, safety: 95, eco: 80 },
              { name: 'Fuel Cell (H₂)', color: '#bc8cff', energyDensity: 1000, powerDensity: 600, lifespan: 5000, cost: 800, safety: 80, eco: 95 }
            ];

            const metrics = [
              { key: 'energyDensity', label: 'Energy Density (Wh/kg)', max: 1000 },
              { key: 'powerDensity', label: 'Power Density (W/kg)', max: 1200 },
              { key: 'lifespan', label: 'Cycle Life', max: 5000 },
              { key: 'safety', label: 'Safety Score', max: 100 },
              { key: 'eco', label: 'Eco-friendliness', max: 100 }
            ];

            let selectedIdx = 2;
            let metric = 0;

            function draw() {
              viz.clear();
              const w = viz.width, h = viz.height;
              const ctx = viz.ctx;

              viz.screenText('Battery Technology Comparison', w / 2, 22, viz.colors.teal, 15, 'center');

              const m = metrics[metric];
              const barAreaX = 60, barAreaY = 55, barAreaW = w - 80, barAreaH = h - 110;
              const barW = (barAreaW / batteries.length) - 20;

              for (let i = 0; i <= 4; i++) {
                const gy = barAreaY + barAreaH - (i / 4) * barAreaH;
                ctx.strokeStyle = viz.colors.grid;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(barAreaX, gy);
                ctx.lineTo(barAreaX + barAreaW, gy);
                ctx.stroke();
                viz.screenText(Math.round(m.max * i / 4).toString(), barAreaX - 6, gy, viz.colors.text, 10, 'right', 'middle');
              }

              batteries.forEach((b, i) => {
                const val = b[m.key];
                const bh = (val / m.max) * barAreaH;
                const bx = barAreaX + i * (barAreaW / batteries.length) + 10;
                const by = barAreaY + barAreaH - bh;
                const isSelected = i === selectedIdx;

                if (isSelected) {
                  ctx.fillStyle = b.color + '33';
                  ctx.beginPath();
                  ctx.roundRect(bx - 4, by - 4, barW + 8, bh + 8, 6);
                  ctx.fill();
                }

                const grad = ctx.createLinearGradient(bx, by, bx, by + bh);
                grad.addColorStop(0, b.color);
                grad.addColorStop(1, b.color + '66');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.roundRect(bx, by, barW, bh, [6, 6, 0, 0]);
                ctx.fill();

                if (isSelected) {
                  ctx.strokeStyle = viz.colors.yellow;
                  ctx.lineWidth = 2;
                  ctx.beginPath();
                  ctx.roundRect(bx, by, barW, bh, [6, 6, 0, 0]);
                  ctx.stroke();
                }

                viz.screenText(val.toString(), bx + barW / 2, by - 10, b.color, 12, 'center');
                viz.screenText(b.name, bx + barW / 2, barAreaY + barAreaH + 18, isSelected ? viz.colors.yellow : viz.colors.text, 10, 'center');
              });

              viz.screenText(m.label, w / 2, h - 18, viz.colors.text, 11, 'center');
            }

            metrics.forEach((m, i) => {
              VizEngine.createButton(controls, m.label.split('(')[0].trim(), () => { metric = i; draw(); });
            });
            batteries.forEach((b, i) => {
              VizEngine.createButton(controls, b.name, () => { selectedIdx = i; draw(); });
            });

            draw();
          }
        }
      ],
      exercises: [
        {
          question: 'In a PEM hydrogen fuel cell, what is the reaction at the cathode?',
          type: 'mcq',
          options: [
            'H₂ → 2H⁺ + 2e⁻',
            'O₂ + 4H⁺ + 4e⁻ → 2H₂O',
            '2H₂O → O₂ + 4H⁺ + 4e⁻',
            '2H⁺ + 2e⁻ → H₂'
          ],
          answer: 1,
          explanation: 'At the cathode (positive electrode), O₂ is reduced: O₂ + 4H⁺ + 4e⁻ → 2H₂O. This is the reduction (cathodic) reaction.'
        },
        {
          question: 'Which renewable energy technology produces fuel (H₂) by splitting water using electricity?',
          type: 'mcq',
          options: ['Photovoltaics', 'Water electrolysis', 'Wind turbines', 'Tidal power'],
          answer: 1,
          explanation: 'Water electrolysis (2H₂O → 2H₂ + O₂) produces hydrogen. When powered by renewable electricity, this is "green hydrogen."'
        },
        {
          question: 'The transesterification reaction produces biodiesel from which starting material?',
          type: 'mcq',
          options: ['Cellulose', 'Triglycerides (vegetable oils/fats)', 'Glucose', 'Ethanol'],
          answer: 1,
          explanation: 'Triglycerides (from vegetable oils or animal fats) react with methanol in the presence of NaOH catalyst to give fatty acid methyl esters (FAME = biodiesel) and glycerol.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Section 5: New Materials (新材料)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch17-sec05',
      title: 'Advanced Materials',
      content: `
<h2>Advanced Materials (新材料)</h2>
<p>
  Materials chemistry drives technological innovation. From the plastic in
  your phone case to the superconductors in MRI machines, modern materials
  are designed at the molecular level.
</p>

<h3>Polymers (高分子材料)</h3>
<p>
  Polymers are large molecules built from repeating monomer units. The
  properties of a polymer depend on the monomer, degree of polymerization,
  chain architecture, and additives.
</p>

<table class="data-table">
  <thead>
    <tr><th>Polymer</th><th>Monomer</th><th>Key Properties</th><th>Applications</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Polyethylene (PE)</td>
      <td>CH₂=CH₂</td>
      <td>Flexible, chemically inert, low cost</td>
      <td>Packaging, pipes, bags</td>
    </tr>
    <tr>
      <td>Polypropylene (PP)</td>
      <td>CH₂=CHCH₃</td>
      <td>Stiffer than PE, heat-resistant</td>
      <td>Food containers, medical devices</td>
    </tr>
    <tr>
      <td>Polyvinyl chloride (PVC)</td>
      <td>CH₂=CHCl</td>
      <td>Rigid or flexible, flame-retardant</td>
      <td>Pipes, window frames, floor coverings</td>
    </tr>
    <tr>
      <td>Polystyrene (PS)</td>
      <td>CH₂=CHC₆H₅</td>
      <td>Rigid, transparent, brittle</td>
      <td>Packaging, insulation (foam)</td>
    </tr>
    <tr>
      <td>Nylon-66</td>
      <td>Hexanediamine + adipic acid</td>
      <td>Strong, abrasion-resistant</td>
      <td>Fibers, gears, bearings</td>
    </tr>
    <tr>
      <td>PTFE (Teflon)</td>
      <td>CF₂=CF₂</td>
      <td>Extremely low friction, chemically inert</td>
      <td>Non-stick coatings, seals</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>Addition vs. Condensation Polymerization:</strong><br>
  <em>Addition (chain growth):</em> Monomers add without losing atoms.
  \\[n(\\text{CH}_2=\\text{CH}_2) \\rightarrow [-\\text{CH}_2-\\text{CH}_2-]_n\\]
  <em>Condensation:</em> Monomers react with loss of a small molecule (often H₂O).
  \\[n\\text{H}_2\\text{N}-(\\text{CH}_2)_6-\\text{NH}_2 + n\\text{HOOC}-(\\text{CH}_2)_4-\\text{COOH}
    \\rightarrow [-\\text{NH}-(\\text{CH}_2)_6-\\text{NH-CO}-(\\text{CH}_2)_4-\\text{CO}-]_n + n\\text{H}_2\\text{O}\\]
  (This forms Nylon-66)
</div>

<h3>Nanomaterials (纳米材料)</h3>
<p>
  Nanomaterials have at least one dimension between 1 and 100 nm. At this
  scale, quantum effects and surface-to-volume ratios dominate:
</p>

<table class="data-table">
  <thead>
    <tr><th>Nanomaterial</th><th>Structure</th><th>Properties</th><th>Applications</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Carbon nanotubes (CNTs)</td>
      <td>Rolled graphene sheets</td>
      <td>Tensile strength ~100× steel; conducts electricity</td>
      <td>Composites, electronics, drug delivery</td>
    </tr>
    <tr>
      <td>Graphene</td>
      <td>Single layer of graphite</td>
      <td>Highest known conductivity; transparent</td>
      <td>Flexible electronics, sensors, membranes</td>
    </tr>
    <tr>
      <td>Quantum dots (CdSe)</td>
      <td>2–10 nm semiconductor crystals</td>
      <td>Tunable fluorescence by size</td>
      <td>Displays (QLED), bioimaging</td>
    </tr>
    <tr>
      <td>Iron oxide NPs (Fe₃O₄)</td>
      <td>Magnetic nanoparticles</td>
      <td>Superparamagnetic</td>
      <td>MRI contrast agents, drug targeting</td>
    </tr>
  </tbody>
</table>

<h3>Superconductors</h3>
<p>
  Superconductors conduct electricity with <strong>zero resistance</strong> below
  a critical temperature (T_c). High-temperature superconductors (HTS) based
  on copper-oxide ceramics (e.g., YBa₂Cu₃O₇, T_c ≈ 93 K) can be cooled
  with liquid nitrogen (~77 K) instead of expensive liquid helium.
  Applications include MRI machines, particle accelerators (LHC), and
  maglev trains.
</p>

<h3>Smart Materials (智能材料)</h3>

<table class="data-table">
  <thead>
    <tr><th>Material</th><th>Stimulus</th><th>Response</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Shape memory alloys (SMA)</td>
      <td>Temperature</td>
      <td>Returns to original shape</td>
      <td>NiTi (Nitinol) stents, actuators</td>
    </tr>
    <tr>
      <td>Photochromic materials</td>
      <td>UV light</td>
      <td>Changes color</td>
      <td>Transitions lenses</td>
    </tr>
    <tr>
      <td>Piezoelectric materials</td>
      <td>Mechanical stress</td>
      <td>Generates voltage (and vice versa)</td>
      <td>PZT in sensors, ultrasound</td>
    </tr>
    <tr>
      <td>Hydrogels</td>
      <td>pH, temperature</td>
      <td>Swells or contracts</td>
      <td>Drug delivery, soft robotics</td>
    </tr>
  </tbody>
</table>
`,
      visualizations: [
        {
          id: 'polymer-gallery',
          title: 'Polymer Structure Gallery',
          description: 'Click a polymer to explore its monomer, repeat unit structure, and everyday applications.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 400 });
            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;padding:6px 0;';
            wrapper.appendChild(controls);

            const polymers = [
              {
                name: 'Polyethylene (PE)',
                monomer: 'CH₂=CH₂',
                color: '#58a6ff',
                repeat: ['C', 'C'],
                apps: ['Plastic bags', 'Bottles', 'Pipes', 'Packaging film'],
                tempRange: '-50 to 80°C',
                density: '0.91–0.97 g/cm³'
              },
              {
                name: 'PVC',
                monomer: 'CH₂=CHCl',
                color: '#f0883e',
                repeat: ['C', 'C', 'Cl'],
                apps: ['Window frames', 'Pipes', 'Flooring', 'Wire insulation'],
                tempRange: '-15 to 60°C',
                density: '1.35–1.45 g/cm³'
              },
              {
                name: 'Nylon-66',
                monomer: 'Hexanediamine + Adipic acid',
                color: '#3fb950',
                repeat: ['N', 'C', 'C', 'C', 'C', 'C', 'C', 'O'],
                apps: ['Ropes & fibers', 'Gears', 'Toothbrush bristles', 'Parachutes'],
                tempRange: '-40 to 120°C',
                density: '1.14 g/cm³'
              },
              {
                name: 'PTFE (Teflon)',
                monomer: 'CF₂=CF₂',
                color: '#bc8cff',
                repeat: ['C', 'C', 'F', 'F', 'F', 'F'],
                apps: ['Non-stick cookware', 'Seals', 'Lab equipment', 'Gore-Tex fabric'],
                tempRange: '-200 to 260°C',
                density: '2.15 g/cm³'
              },
              {
                name: 'Polystyrene (PS)',
                monomer: 'CH₂=CHC₆H₅',
                color: '#d29922',
                repeat: ['C', 'C', 'Ring'],
                apps: ['Disposable cups', 'Foam packaging', 'CD cases', 'Petri dishes'],
                tempRange: '-20 to 70°C',
                density: '1.05 g/cm³'
              }
            ];

            let selected = 0;
            let t = 0;

            function draw(time) {
              t = (time || 0) * 0.001;
              viz.clear();
              const w = viz.width, h = viz.height;
              const ctx = viz.ctx;

              const p = polymers[selected];

              viz.screenText('Polymer Structure Gallery', w / 2, 22, viz.colors.teal, 15, 'center');

              const chainX = 40, chainY = 60, chainW = 300, chainH = 300;
              ctx.fillStyle = '#0f0f28';
              ctx.strokeStyle = p.color + '88';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.roundRect(chainX, chainY, chainW, chainH, 8);
              ctx.fill();
              ctx.stroke();

              const numUnits = 6;
              const unitSpacing = chainW / (numUnits + 1);
              const chainCY = chainY + chainH / 2;

              for (let i = 0; i < numUnits; i++) {
                const ux = chainX + (i + 1) * unitSpacing;
                const uy = chainCY + Math.sin(t + i * 0.6) * 18;

                if (i > 0) {
                  const px = chainX + i * unitSpacing;
                  const py = chainCY + Math.sin(t + (i - 1) * 0.6) * 18;
                  ctx.strokeStyle = p.color + 'aa';
                  ctx.lineWidth = 3;
                  ctx.beginPath();
                  ctx.moveTo(px, py);
                  ctx.lineTo(ux, uy);
                  ctx.stroke();
                }

                ctx.fillStyle = p.color + 'cc';
                ctx.beginPath();
                ctx.arc(ux, uy, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 10px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.repeat[0] || 'R', ux, uy);

                if (p.repeat.length > 2) {
                  const sgY = uy - 35;
                  ctx.strokeStyle = p.color + '88';
                  ctx.lineWidth = 1.5;
                  ctx.beginPath();
                  ctx.moveTo(ux, uy - 18);
                  ctx.lineTo(ux, sgY + 8);
                  ctx.stroke();
                  ctx.fillStyle = p.color + '99';
                  ctx.beginPath();
                  ctx.arc(ux, sgY, 10, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.fillStyle = viz.colors.white;
                  ctx.font = '9px -apple-system,sans-serif';
                  ctx.fillText(p.repeat[2] || 'X', ux, sgY);
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                }
              }

              viz.screenText('[', chainX + 38, chainCY, p.color, 28, 'center');
              viz.screenText(']n', chainX + chainW - 26, chainCY, p.color, 22, 'center');
              viz.screenText(p.name, chainX + chainW / 2, chainY + chainH - 18, p.color, 12, 'center');

              const infoX = chainX + chainW + 20, infoY = chainY, infoW = w - infoX - 20, infoH = chainH;
              ctx.fillStyle = '#0f0f28';
              ctx.strokeStyle = p.color + '88';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.roundRect(infoX, infoY, infoW, infoH, 8);
              ctx.fill();
              ctx.stroke();

              viz.screenText('Monomer:', infoX + 10, infoY + 24, viz.colors.text, 11, 'left');
              viz.screenText(p.monomer, infoX + 10, infoY + 42, p.color, 13, 'left');
              viz.screenText('Temperature Range:', infoX + 10, infoY + 68, viz.colors.text, 11, 'left');
              viz.screenText(p.tempRange, infoX + 10, infoY + 84, viz.colors.white, 12, 'left');
              viz.screenText('Density:', infoX + 10, infoY + 108, viz.colors.text, 11, 'left');
              viz.screenText(p.density, infoX + 10, infoY + 124, viz.colors.white, 12, 'left');
              viz.screenText('Applications:', infoX + 10, infoY + 150, viz.colors.text, 11, 'left');
              p.apps.forEach((app, ai) => {
                viz.screenText('\u25cf ' + app, infoX + 12, infoY + 168 + ai * 20, viz.colors.white, 11, 'left');
              });
            }

            polymers.forEach((p, i) => {
              VizEngine.createButton(controls, p.name.split(' ')[0], () => {
                selected = i;
              });
            });

            viz.animate(draw);
          }
        },
        {
          id: 'material-radar',
          title: 'Material Property Radar Chart',
          description: 'Compare five advanced materials across six key properties. Click a material name to highlight it.',
          setup(container) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
            container.appendChild(wrapper);

            const viz = new VizEngine(wrapper, { width: 700, height: 440 });

            const properties = ['Strength', 'Conductivity', 'Flexibility', 'Biocompat.', 'Stability', 'Cost Eff.'];
            const materials = [
              { name: 'Graphene', values: [10, 10, 7, 5, 8, 3], color: '#4caf50' },
              { name: 'Kevlar', values: [9, 1, 3, 4, 9, 6], color: '#2196f3' },
              { name: 'PEDOT', values: [3, 9, 8, 6, 6, 7], color: '#e91e63' },
              { name: 'YBCO', values: [6, 10, 2, 3, 7, 2], color: '#ffd700' },
              { name: 'PLA', values: [4, 1, 5, 9, 4, 9], color: '#ff9800' }
            ];

            const maxVal = 10;
            const cx = 210, cy = 220, maxR = 155;
            const N = properties.length;
            let selectedIndex = -1;

            const canvas = viz.canvas;
            canvas.addEventListener('click', (e) => {
              const rect = canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;
              const legX = 420, legStartY = 80;
              materials.forEach((m, i) => {
                const ly = legStartY + i * 56;
                if (mx >= legX && mx <= legX + 200 && my >= ly && my <= ly + 36) {
                  selectedIndex = selectedIndex === i ? -1 : i;
                }
              });
              draw();
            });

            function angleFor(i) {
              return (i / N) * 2 * Math.PI - Math.PI / 2;
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              viz.screenText('Advanced Materials: Property Comparison', viz.width / 2, 22, viz.colors.teal, 14, 'center');

              for (let ring = 2; ring <= maxVal; ring += 2) {
                ctx.beginPath();
                for (let i = 0; i < N; i++) {
                  const a = angleFor(i);
                  const r = (ring / maxVal) * maxR;
                  const x = cx + Math.cos(a) * r;
                  const y = cy + Math.sin(a) * r;
                  if (i === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = viz.colors.grid;
                ctx.lineWidth = ring === 10 ? 1.5 : 0.8;
                ctx.stroke();
                const labelR = (ring / maxVal) * maxR;
                ctx.fillStyle = viz.colors.text;
                ctx.font = '10px sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(ring.toString(), cx + 4, cy - labelR);
              }

              properties.forEach((prop, i) => {
                const a = angleFor(i);
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
                ctx.strokeStyle = viz.colors.axis;
                ctx.lineWidth = 1;
                ctx.stroke();

                const lx = cx + Math.cos(a) * (maxR + 22);
                const ly = cy + Math.sin(a) * (maxR + 22);
                ctx.fillStyle = viz.colors.teal;
                ctx.font = 'bold 12px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(prop, lx, ly);
              });

              const order = [...materials.keys()].filter(i => i !== selectedIndex);
              if (selectedIndex >= 0) order.push(selectedIndex);

              order.forEach((mi) => {
                const mat = materials[mi];
                const isSelected = mi === selectedIndex;
                const alpha = selectedIndex < 0 ? 0.25 : (isSelected ? 0.45 : 0.08);
                const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');

                ctx.beginPath();
                mat.values.forEach((v, i) => {
                  const a = angleFor(i);
                  const r = (v / maxVal) * maxR;
                  const x = cx + Math.cos(a) * r;
                  const y = cy + Math.sin(a) * r;
                  if (i === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                });
                ctx.closePath();
                ctx.fillStyle = mat.color + alphaHex;
                ctx.fill();
                ctx.strokeStyle = mat.color;
                ctx.lineWidth = isSelected ? 3 : 1.5;
                ctx.stroke();

                if (isSelected) {
                  mat.values.forEach((v, i) => {
                    const a = angleFor(i);
                    const r = (v / maxVal) * maxR;
                    const x = cx + Math.cos(a) * r;
                    const y = cy + Math.sin(a) * r;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, Math.PI * 2);
                    ctx.fillStyle = mat.color;
                    ctx.fill();
                  });
                }
              });

              const legX = 420, legStartY = 80;
              materials.forEach((mat, i) => {
                const ly = legStartY + i * 56;
                const isSelected = i === selectedIndex;
                ctx.fillStyle = mat.color + (isSelected ? 'ff' : '88');
                ctx.fillRect(legX, ly + 2, 18, 18);
                ctx.fillStyle = isSelected ? mat.color : viz.colors.text;
                ctx.font = (isSelected ? 'bold ' : '') + '13px sans-serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText(mat.name, legX + 24, ly + 2);
                const avgVal = mat.values.reduce((a, b) => a + b, 0) / mat.values.length;
                ctx.fillStyle = viz.colors.grid;
                ctx.fillRect(legX + 24, ly + 20, 200, 10);
                ctx.fillStyle = mat.color;
                ctx.fillRect(legX + 24, ly + 20, (avgVal / maxVal) * 200, 10);
                ctx.fillStyle = viz.colors.text;
                ctx.font = '10px sans-serif';
                ctx.fillText('avg: ' + avgVal.toFixed(1) + '/10', legX + 230, ly + 21);
              });
              viz.screenText('Click material name to highlight', 560, legStartY + materials.length * 56 + 10, viz.colors.text, 11, 'center');
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          question: 'Which of the following polymers is formed by addition polymerization (not condensation)?',
          type: 'mcq',
          options: ['Nylon-66', 'Polyester (PET)', 'Polyethylene (PE)', 'Bakelite'],
          answer: 2,
          explanation: 'Polyethylene forms by addition polymerization of ethylene (CH₂=CH₂). No small molecules are lost. Nylon, PET, and bakelite are condensation polymers.'
        },
        {
          question: 'What makes graphene and carbon nanotubes so strong despite being made of carbon?',
          type: 'mcq',
          options: ['Ionic bonds between carbon atoms', 'sp³ hybridization with sigma bonds in all directions', 'Delocalized sp² bonds in a hexagonal lattice', 'van der Waals interactions between layers'],
          answer: 2,
          explanation: 'In graphene and CNTs, each carbon forms 3 sigma bonds in a hexagonal lattice (sp² hybridization) plus a delocalized pi system — this gives extraordinary in-plane strength and conductivity.'
        },
        {
          question: 'What is the key advantage of high-temperature superconductors (HTS) like YBa₂Cu₃O₇ over conventional superconductors?',
          type: 'mcq',
          options: ['They conduct with zero resistance at room temperature', 'They can be cooled with liquid nitrogen instead of liquid helium', 'They have a higher electrical resistance than copper', 'They require no cooling at all'],
          answer: 1,
          explanation: 'HTS materials have a critical temperature above 77 K, allowing cooling with liquid nitrogen (~$0.5/L) instead of liquid helium (~$10/L), making practical applications much more economical.'
        },
        {
          question: 'A shape memory alloy (SMA) responds to which stimulus to return to its programmed shape?',
          type: 'mcq',
          options: ['Electrical current', 'Magnetic field', 'Temperature change', 'UV light'],
          answer: 2,
          explanation: 'SMAs such as Nitinol (NiTi) undergo a reversible phase transition (martensite to austenite) triggered by temperature, allowing them to recover a pre-programmed shape upon heating.'
        }
      ]
    }

  ]
});
