window.CHAPTERS.push({
  id: 'ch10',
  number: 10,
  title: 'Electrochemistry',
  subtitle: 'Harnessing the Power of Electron Transfer',
  sections: [

    // ==================== SECTION 1: Redox Reactions ====================
    {
      id: 'ch10-sec01',
      title: 'Redox Reactions Review',
      content: `
<div class="env-definition">
<strong>Oxidation-Reduction (Redox) Reactions</strong><br>
A <em>redox reaction</em> is any chemical reaction in which electrons are transferred between species. Two complementary processes always occur simultaneously:
<ul>
  <li><strong>Oxidation:</strong> a species <em>loses</em> electrons (oxidation number increases)</li>
  <li><strong>Reduction:</strong> a species <em>gains</em> electrons (oxidation number decreases)</li>
</ul>
Memory aid: <strong>OIL RIG</strong> — Oxidation Is Loss, Reduction Is Gain.
</div>

<h3>Oxidation Numbers (化合价 / 氧化数)</h3>
<p>The <strong>oxidation number</strong> (also called oxidation state) is a bookkeeping device that tracks how electrons are distributed among atoms in a compound. Rules for assigning oxidation numbers:</p>
<ol>
  <li>Pure elements have oxidation number = 0. e.g., \\(\\text{Fe}^0\\), \\(\\text{O}_2^0\\), \\(\\text{Zn}^0\\)</li>
  <li>Monoatomic ions: oxidation number = charge. e.g., \\(\\text{Na}^{+1}\\), \\(\\text{Cl}^{-1}\\), \\(\\text{Fe}^{+3}\\)</li>
  <li>In compounds, hydrogen is usually \\(+1\\) (except metal hydrides: \\(-1\\))</li>
  <li>In compounds, oxygen is usually \\(-2\\) (except peroxides: \\(-1\\); \\(\\text{OF}_2\\): \\(+2\\))</li>
  <li>Sum of oxidation numbers = overall charge of species</li>
</ol>

<div class="env-example">
<strong>Example: Assign oxidation numbers in \\(\\text{K}_2\\text{Cr}_2\\text{O}_7\\)</strong><br>
K is \\(+1\\), O is \\(-2\\). Let Cr = \\(x\\).<br>
\\[ 2(+1) + 2x + 7(-2) = 0 \\]
\\[ 2 + 2x - 14 = 0 \\implies x = +6 \\]
Chromium is in the \\(+6\\) oxidation state.
</div>

<h3>Identifying Oxidation and Reduction</h3>
<p>Consider the classic reaction between zinc and copper sulfate:</p>
\\[ \\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu} \\]
<ul>
  <li>\\(\\text{Zn}^0 \\rightarrow \\text{Zn}^{+2}\\): oxidation number increases by 2 → <strong>Zn is oxidized</strong></li>
  <li>\\(\\text{Cu}^{+2} \\rightarrow \\text{Cu}^0\\): oxidation number decreases by 2 → <strong>Cu²⁺ is reduced</strong></li>
  <li>Zn is the <strong>reducing agent</strong> (reductant) — it donates electrons</li>
  <li>CuSO₄ (the Cu²⁺ ion) is the <strong>oxidizing agent</strong> (oxidant) — it accepts electrons</li>
</ul>

<h3>Half-Reactions</h3>
<p>A redox equation can be split into two <strong>half-reactions</strong>, each showing only oxidation or only reduction:</p>
<div class="env-definition">
<strong>Oxidation half-reaction:</strong> \\[ \\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^- \\]
<strong>Reduction half-reaction:</strong> \\[ \\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu} \\]
<strong>Overall (add the two):</strong> \\[ \\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu} \\]
Electrons cancel — this confirms the equation is balanced.
</div>

<h3>Balancing Redox Equations: Half-Reaction Method</h3>
<p>For more complex reactions (especially in acidic or basic solution), use these steps:</p>
<ol>
  <li>Split into oxidation and reduction half-reactions</li>
  <li>Balance all atoms except H and O</li>
  <li>Balance O by adding \\(\\text{H}_2\\text{O}\\); balance H by adding \\(\\text{H}^+\\) (acidic) or \\(\\text{OH}^-\\) (basic)</li>
  <li>Balance charge by adding \\(e^-\\)</li>
  <li>Multiply half-reactions so electrons cancel, then add</li>
</ol>

<div class="env-example">
<strong>Example: Balance \\(\\text{MnO}_4^- + \\text{Fe}^{2+} \\rightarrow \\text{Mn}^{2+} + \\text{Fe}^{3+}\\) in acidic solution</strong><br><br>
Reduction: \\(\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}\\)<br>
Oxidation: \\(\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-\\) (×5)<br><br>
Overall: \\[ \\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O} \\]
</div>

<div class="env-warning">
<strong>Common Mistake:</strong> When adding half-reactions, make sure the number of electrons lost equals the number gained before adding. Never add electrons to the final equation — they must cancel completely.
</div>

<div class="env-intuition">
<strong>Intuition:</strong> Think of electron transfer like money transfer — what one person loses, another gains. In every redox reaction, the total "electron debt" is zero. The oxidizing agent is like a bank that collects electrons; the reducing agent is like a customer paying in electrons.
</div>
      `,
      visualizations: [
        {
          id: 'ch10-viz-redox',
          title: 'Electron Transfer in Redox Reactions',
          description: 'Watch electrons transfer from Zn to Cu²⁺ ions. The animation shows oxidation numbers changing as the reaction proceeds.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 380});
            var t = 0;
            var running = true;
            var progress = 0;

            VizEngine.createButton(controls, 'Restart', function() {
              progress = 0;
              running = true;
            });

            var progressSlider = VizEngine.createSlider(controls, 'Reaction Progress', 0, 100, 0, 1, function(v) {
              progress = v / 100;
              running = false;
            });

            function drawScene(p) {
              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;

              // Title
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Zn + Cu\u00B2\u207A \u2192 Zn\u00B2\u207A + Cu', W / 2, 22);

              // Zn atom (left)
              var znX = 140, znY = H / 2;
              var znColor = p < 0.5 ? viz.colors.teal : viz.colors.blue;
              var znLabel = p < 0.5 ? 'Zn\u2070' : 'Zn\u00B2\u207A';
              ctx.beginPath();
              ctx.arc(znX, znY, 40, 0, Math.PI * 2);
              ctx.fillStyle = znColor + '44';
              ctx.fill();
              ctx.beginPath();
              ctx.arc(znX, znY, 36, 0, Math.PI * 2);
              ctx.fillStyle = znColor;
              ctx.fill();
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(znLabel, znX, znY);

              // Cu2+ ion (right)
              var cuX = W - 140, cuY = H / 2;
              var cuColor = p > 0.5 ? viz.colors.orange : viz.colors.red;
              var cuLabel = p > 0.5 ? 'Cu\u2070' : 'Cu\u00B2\u207A';
              ctx.beginPath();
              ctx.arc(cuX, cuY, 40, 0, Math.PI * 2);
              ctx.fillStyle = cuColor + '44';
              ctx.fill();
              ctx.beginPath();
              ctx.arc(cuX, cuY, 36, 0, Math.PI * 2);
              ctx.fillStyle = cuColor;
              ctx.fill();
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(cuLabel, cuX, cuY);

              // Electrons traveling across
              var numElectrons = 2;
              for (var i = 0; i < numElectrons; i++) {
                var eFrac = (p + i * 0.4) % 1.0;
                var eX = znX + 76 + eFrac * (cuX - znX - 152);
                var eY = H / 2 - 15 + i * 30;
                ctx.beginPath();
                ctx.arc(eX, eY, 7, 0, Math.PI * 2);
                ctx.fillStyle = viz.colors.yellow;
                ctx.fill();
                ctx.fillStyle = viz.colors.bg;
                ctx.font = 'bold 10px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('e\u207B', eX, eY);
              }

              // Arrow direction
              ctx.strokeStyle = viz.colors.yellow;
              ctx.lineWidth = 2;
              ctx.setLineDash([6, 4]);
              ctx.beginPath();
              ctx.moveTo(znX + 76, H / 2);
              ctx.lineTo(cuX - 76, H / 2);
              ctx.stroke();
              ctx.setLineDash([]);

              // Arrow head
              ctx.fillStyle = viz.colors.yellow;
              ctx.beginPath();
              ctx.moveTo(cuX - 72, H / 2);
              ctx.lineTo(cuX - 82, H / 2 - 5);
              ctx.lineTo(cuX - 82, H / 2 + 5);
              ctx.closePath();
              ctx.fill();

              // Labels below
              ctx.fillStyle = viz.colors.teal;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';
              ctx.fillText('OXIDATION', znX, znY + 48);
              ctx.fillText('Zn \u2192 Zn\u00B2\u207A + 2e\u207B', znX, znY + 64);

              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('REDUCTION', cuX, cuY + 48);
              ctx.fillText('Cu\u00B2\u207A + 2e\u207B \u2192 Cu', cuX, cuY + 64);

              // Oxidation state boxes
              ctx.fillStyle = p < 0.5 ? viz.colors.teal : viz.colors.blue;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('ox. state: ' + (p < 0.5 ? '0' : '+2'), znX, znY - 56);

              ctx.fillStyle = p > 0.5 ? viz.colors.orange : viz.colors.red;
              ctx.fillText('ox. state: ' + (p > 0.5 ? '0' : '+2'), cuX, cuY - 56);

              // Reducing/Oxidizing agent labels
              ctx.fillStyle = viz.colors.green;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('Reducing Agent', znX, 24);
              ctx.fillStyle = viz.colors.purple;
              ctx.fillText('Oxidizing Agent', cuX, 24);
            }

            viz.animate(function(timestamp) {
              t = timestamp;
              if (running) {
                progress = ((t / 3000) % 1.0);
                if (progressSlider) progressSlider.value = Math.round(progress * 100);
              }
              drawScene(progress);
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch10-ex01-mc',
          type: 'multiple-choice',
          question: 'In the reaction \\(\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\to \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}\\), what is the change in oxidation number of Mn?',
          choices: ['+7 to +2', '+2 to +7', '0 to +2', '+4 to +2'],
          answer: 0,
          explanation: 'In MnO\u2084\u207B, Mn has oxidation number +7 (since O is \u22122 and overall charge is \u22121). In Mn\u00B2\u207A, it is +2. Mn is reduced from +7 to +2 (gains 5 electrons).'
        },
        {
          id: 'ch10-ex02-mc',
          type: 'multiple-choice',
          question: 'Which statement about oxidation-reduction reactions is CORRECT?',
          choices: [
            'Oxidation can occur without reduction',
            'The reducing agent gains electrons',
            'The oxidation number of the oxidizing agent decreases',
            'Oxygen is always involved in redox reactions'
          ],
          answer: 2,
          explanation: 'The oxidizing agent accepts electrons, so its oxidation number decreases. Oxidation and reduction always occur together; the reducing agent loses (not gains) electrons. Redox does not require oxygen\u2014electron transfer is the defining feature.'
        },
        {
          question: 'In the reaction: \\(\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2\\), identify: (a) which element is oxidized, (b) which is reduced, (c) the oxidizing agent, (d) the reducing agent.',
          hint: 'Find oxidation numbers of Fe and C in each compound. Remember that O is -2 and the sum of oxidation numbers in a neutral compound is 0.',
          solution: '(a) Carbon is oxidized: in CO, C is +2; in CO\u2082, C is +4. The oxidation number increases. (b) Iron is reduced: in Fe\u2082O\u2083, Fe is +3; in pure Fe, it is 0. The oxidation number decreases. (c) The oxidizing agent is Fe\u2082O\u2083 (it causes CO to be oxidized, while Fe\u00B3\u207A itself gets reduced). (d) The reducing agent is CO (it causes Fe\u00B3\u207A to be reduced, while carbon itself gets oxidized).'
        },
        {
          question: 'Balance the following half-reactions and combine them into a balanced overall equation in acidic solution: Oxidation: \\(\\text{Cr}^{3+} \\rightarrow \\text{Cr}_2\\text{O}_7^{2-}\\); Reduction: \\(\\text{I}_2 \\rightarrow \\text{I}^-\\)',
          hint: 'Cr\u00B3\u207A \u2192 Cr\u2082O\u2087\u00B2\u207B requires high oxidation potential. Focus on balancing each half-reaction first using H\u2082O and H\u207A.',
          solution: 'Oxidation: 2Cr\u00B3\u207A + 7H\u2082O \u2192 Cr\u2082O\u2087\u00B2\u207B + 14H\u207A + 6e\u207B. Reduction: I\u2082 + 2e\u207B \u2192 2I\u207B (multiply by 3). Combined: 2Cr\u00B3\u207A + 3I\u2082 + 7H\u2082O \u2192 Cr\u2082O\u2087\u00B2\u207B + 6I\u207B + 14H\u207A. Note: This reaction is non-spontaneous under normal conditions; a strong oxidizing agent would be needed to drive Cr\u00B3\u207A\u2192Cr\u2082O\u2087\u00B2\u207B.'
        }
      ]
    },

    // ==================== SECTION 2: Galvanic Cells ====================
    {
      id: 'ch10-sec02',
      title: 'Galvanic Cells (原电池)',
      content: `
<div class="env-definition">
<strong>Galvanic Cell (原电池 / Voltaic Cell)</strong><br>
A <em>galvanic cell</em> is a device that converts chemical energy from a spontaneous redox reaction into electrical energy. It consists of two <strong>electrodes</strong> (conductors) immersed in <strong>electrolyte</strong> solutions, connected externally by a wire and internally by a <strong>salt bridge</strong>.
</div>

<h3>The Daniell Cell: Zn-Cu Cell</h3>
<p>The classic galvanic cell uses zinc and copper:</p>
<ul>
  <li><strong>Anode (负极, negative electrode):</strong> Zinc strip in ZnSO₄ solution → Oxidation occurs here</li>
  <li><strong>Cathode (正极, positive electrode):</strong> Copper strip in CuSO₄ solution → Reduction occurs here</li>
  <li><strong>Salt bridge:</strong> Contains KCl or KNO₃ solution; allows ion flow to maintain electrical neutrality</li>
  <li><strong>External circuit:</strong> Electrons flow from anode (Zn) to cathode (Cu) through the wire</li>
</ul>

<div class="env-definition">
<strong>Electrode Reactions</strong><br>
Anode (oxidation): \\[ \\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^- \\]
Cathode (reduction): \\[ \\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s) \\]
Overall cell reaction: \\[ \\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s) \\]
</div>

<h3>Cell Notation (电池符号)</h3>
<p>The international shorthand for writing galvanic cells:</p>
\\[ \\text{Zn}(s) | \\text{ZnSO}_4(aq) || \\text{CuSO}_4(aq) | \\text{Cu}(s) \\]
<ul>
  <li>Single line (|): boundary between phases (electrode/solution)</li>
  <li>Double line (||): salt bridge</li>
  <li>Anode (oxidation) is always written on the LEFT</li>
  <li>Cathode (reduction) is always written on the RIGHT</li>
</ul>

<h3>Electromotive Force (EMF, 电动势)</h3>
<p>The <strong>electromotive force (EMF)</strong>, symbol \\(\\mathcal{E}\\) or \\(E_{cell}\\), is the maximum potential difference (voltage) the cell can produce. It is measured in volts (V).</p>
\\[ E_{cell} = E_{cathode} - E_{anode} = E_{Cu^{2+}/Cu} - E_{Zn^{2+}/Zn} \\]
<p>Using standard reduction potentials (at 25°C, 1 M, 1 atm):</p>
\\[ E°_{Cu^{2+}/Cu} = +0.34 \\text{ V} \\quad E°_{Zn^{2+}/Zn} = -0.76 \\text{ V} \\]
\\[ E°_{cell} = 0.34 - (-0.76) = +1.10 \\text{ V} \\]

<div class="env-definition">
<strong>Selected Standard Reduction Potentials (25°C):</strong><br>
\\(\\text{F}_2 + 2e^- \\to 2\\text{F}^- \\quad E° = +2.87\\text{ V}\\) (strongest oxidizer)<br>
\\(\\text{Cu}^{2+} + 2e^- \\to \\text{Cu} \\quad E° = +0.34\\text{ V}\\)<br>
\\(2\\text{H}^+ + 2e^- \\to \\text{H}_2 \\quad E° = 0.00\\text{ V}\\) (reference SHE)<br>
\\(\\text{Zn}^{2+} + 2e^- \\to \\text{Zn} \\quad E° = -0.76\\text{ V}\\)<br>
\\(\\text{Li}^+ + e^- \\to \\text{Li} \\quad E° = -3.04\\text{ V}\\) (strongest reducer)
</div>

<h3>Predicting Spontaneity</h3>
<p>A reaction is spontaneous when \\(E°_{cell} > 0\\). This corresponds to a negative Gibbs free energy:</p>
\\[ \\Delta G° = -nFE°_{cell} \\]
<p>where \\(n\\) = moles of electrons transferred, \\(F = 96485\\text{ C mol}^{-1}\\) (Faraday's constant).</p>

<div class="env-intuition">
<strong>Intuition:</strong> Think of EMF like "electron pressure" — a higher positive EMF means the reaction is more spontaneous. If \\(E_{cell} > 0\\), the reaction proceeds as written. If \\(E_{cell} < 0\\), the reaction is non-spontaneous (you'd need to reverse it, or apply external voltage).
</div>

<h3>What Happens During Operation?</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:#1a1a40;">
    <th style="padding:8px;border:1px solid #30363d;text-align:left;">What changes</th>
    <th style="padding:8px;border:1px solid #30363d;text-align:left;">Anode (Zn)</th>
    <th style="padding:8px;border:1px solid #30363d;text-align:left;">Cathode (Cu)</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Electrode mass</td>
    <td style="padding:8px;border:1px solid #30363d;">Decreases (Zn dissolves)</td>
    <td style="padding:8px;border:1px solid #30363d;">Increases (Cu deposits)</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">Solution</td>
    <td style="padding:8px;border:1px solid #30363d;">[Zn²⁺] increases</td>
    <td style="padding:8px;border:1px solid #30363d;">[Cu²⁺] decreases</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Electron flow (wire)</td>
    <td colspan="2" style="padding:8px;border:1px solid #30363d;text-align:center;">Zn → wire → Cu (from anode to cathode)</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">Ion flow (salt bridge)</td>
    <td style="padding:8px;border:1px solid #30363d;">Anions (Cl⁻, NO₃⁻) migrate in</td>
    <td style="padding:8px;border:1px solid #30363d;">Cations (K⁺) migrate in</td>
  </tr>
</table>

<div class="env-warning">
<strong>Key Distinction:</strong> In external circuit — <em>electrons</em> flow from negative to positive (anode to cathode). In the electrolyte solution — <em>ions</em> carry current. Never mix these up in exam answers!
</div>
      `,
      visualizations: [
        {
          id: 'ch10-viz-galvanic',
          title: 'Galvanic Cell Animation (Zn-Cu Daniell Cell)',
          description: 'Interactive Daniell cell showing electron flow through the wire, ion migration through the salt bridge, and changes at each electrode over time.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 400});
            var t = 0;
            var speed = 1;

            VizEngine.createSlider(controls, 'Speed', 0.2, 3, 1, 0.1, function(v) { speed = v; });

            viz.animate(function(timestamp) {
              t = timestamp * 0.001 * speed;
              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;

              // === LEFT BEAKER (Zn anode) ===
              var lx = 130, ly = 220, bw = 170, bh = 150;
              ctx.strokeStyle = '#3a3a6a';
              ctx.lineWidth = 2;
              ctx.fillStyle = '#0a1525';
              ctx.beginPath();
              ctx.rect(lx - bw / 2, ly - bh / 2, bw, bh);
              ctx.fill();
              ctx.stroke();

              ctx.fillStyle = 'rgba(88, 166, 255, 0.08)';
              ctx.fillRect(lx - bw / 2 + 2, ly - bh / 2 + 2, bw - 4, bh - 4);

              ctx.fillStyle = viz.colors.blue;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('ZnSO\u2084(aq)', lx, ly + bh / 2 + 16);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Anode (-)', lx, ly + bh / 2 + 30);

              ctx.fillStyle = viz.colors.teal;
              ctx.fillRect(lx - 8, ly - bh / 2 - 30, 16, bh + 10);
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.fillText('Zn', lx, ly - bh / 2 - 38);

              // Zn2+ ions appearing
              for (var i = 0; i < 5; i++) {
                var ionPhase = (t * 0.7 + i * 0.4) % 1;
                var ionX = lx - 50 + i * 25 + Math.sin(t + i) * 15;
                var ionY = ly - bh / 4 + ionPhase * (bh / 2);
                var alpha = Math.min(ionPhase * 3, 1) * (1 - Math.max(0, (ionPhase - 0.7) * 3));
                ctx.fillStyle = 'rgba(88,166,255,' + alpha + ')';
                ctx.beginPath();
                ctx.arc(ionX, ionY, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
                ctx.font = '8px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Zn\u00B2\u207A', ionX, ionY);
              }

              // === RIGHT BEAKER (Cu cathode) ===
              var rx = W - 130, ry = 220;
              ctx.strokeStyle = '#3a3a6a';
              ctx.lineWidth = 2;
              ctx.fillStyle = '#0a1525';
              ctx.beginPath();
              ctx.rect(rx - bw / 2, ry - bh / 2, bw, bh);
              ctx.fill();
              ctx.stroke();

              ctx.fillStyle = 'rgba(240,136,62,0.08)';
              ctx.fillRect(rx - bw / 2 + 2, ry - bh / 2 + 2, bw - 4, bh - 4);

              ctx.fillStyle = viz.colors.orange;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('CuSO\u2084(aq)', rx, ry + bh / 2 + 16);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Cathode (+)', rx, ry + bh / 2 + 30);

              ctx.fillStyle = viz.colors.orange;
              ctx.fillRect(rx - 8, ry - bh / 2 - 30, 16, bh + 10);
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.fillText('Cu', rx, ry - bh / 2 - 38);

              // Cu2+ ions disappearing
              for (var j = 0; j < 5; j++) {
                var cuPhase = 1 - (t * 0.7 + j * 0.4) % 1;
                var cuX = rx - 50 + j * 25 + Math.sin(t + j * 1.3) * 15;
                var cuY = ry - bh / 4 + (1 - cuPhase) * (bh / 2);
                var cuA = Math.min(cuPhase * 3, 1) * (1 - Math.max(0, (cuPhase - 0.7) * 3));
                ctx.fillStyle = 'rgba(240,136,62,' + cuA + ')';
                ctx.beginPath();
                ctx.arc(cuX, cuY, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'rgba(255,255,255,' + cuA + ')';
                ctx.font = '8px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Cu\u00B2\u207A', cuX, cuY);
              }

              // === SALT BRIDGE ===
              var sbLeft = lx + bw / 2, sbRight = rx - bw / 2;
              var sbMid = (sbLeft + sbRight) / 2;
              var sbTop = ly - bh / 2 - 40;

              ctx.fillStyle = '#1a2040';
              ctx.strokeStyle = '#4a4a8a';
              ctx.lineWidth = 1.5;
              ctx.fillRect(sbLeft, sbTop, sbRight - sbLeft, 30);
              ctx.strokeRect(sbLeft, sbTop, sbRight - sbLeft, 30);

              ctx.fillStyle = viz.colors.purple;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Salt Bridge (KNO\u2083)', sbMid, sbTop - 8);

              for (var k = 0; k < 4; k++) {
                var sbPhase = (t * 0.5 + k * 0.25) % 1;
                var kX = sbLeft + sbPhase * (sbRight - sbLeft);
                ctx.fillStyle = viz.colors.purple;
                ctx.beginPath();
                ctx.arc(kX, sbTop + 10, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = '7px -apple-system,sans-serif';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText('K\u207A', kX, sbTop + 10);
                var noX = sbRight - sbPhase * (sbRight - sbLeft);
                ctx.fillStyle = viz.colors.pink;
                ctx.beginPath();
                ctx.arc(noX, sbTop + 20, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = '6px -apple-system,sans-serif';
                ctx.fillText('NO\u2083\u207B', noX, sbTop + 20);
              }

              // === WIRE + ELECTRONS ===
              var wireY = 60;
              ctx.strokeStyle = '#555580';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.moveTo(lx, ly - bh / 2 - 60);
              ctx.lineTo(lx, wireY);
              ctx.lineTo(rx, wireY);
              ctx.lineTo(rx, ry - bh / 2 - 60);
              ctx.stroke();

              // Voltmeter box
              ctx.fillStyle = '#1a1a3a';
              ctx.strokeStyle = '#58a6ff';
              ctx.lineWidth = 1.5;
              ctx.fillRect(sbMid - 35, wireY - 25, 70, 36);
              ctx.strokeRect(sbMid - 35, wireY - 25, 70, 36);
              ctx.fillStyle = viz.colors.green;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('1.10 V', sbMid, wireY - 7);

              // Electrons on wire
              for (var e = 0; e < 5; e++) {
                var eFrac = (t * 0.8 + e * 0.2) % 1;
                var eX, eY2;
                if (eFrac < 0.15) {
                  eX = lx;
                  eY2 = (ly - bh / 2 - 60) - eFrac / 0.15 * ((ly - bh / 2 - 60) - wireY);
                } else if (eFrac < 0.85) {
                  eX = lx + (eFrac - 0.15) / 0.7 * (rx - lx);
                  eY2 = wireY;
                } else {
                  eX = rx;
                  eY2 = wireY + (eFrac - 0.85) / 0.15 * ((ry - bh / 2 - 60) - wireY);
                }
                ctx.fillStyle = viz.colors.yellow;
                ctx.beginPath();
                ctx.arc(eX, eY2, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.bg;
                ctx.font = 'bold 9px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('e\u207B', eX, eY2);
              }

              // Electron direction label
              ctx.fillStyle = viz.colors.yellow;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('\u2190 electron flow \u2192', sbMid, wireY + 20);

              // Half-reaction labels
              ctx.fillStyle = viz.colors.teal;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Zn \u2192 Zn\u00B2\u207A + 2e\u207B', lx, H - 10);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('Cu\u00B2\u207A + 2e\u207B \u2192 Cu', rx, H - 10);
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch10-ex03-mc',
          type: 'multiple-choice',
          question: 'In a galvanic cell, electrons in the external circuit flow from:',
          choices: [
            'Cathode to anode',
            'Anode to cathode',
            'Positive terminal to negative terminal',
            'Higher potential to lower potential'
          ],
          answer: 1,
          explanation: 'Electrons are produced at the anode (oxidation) and consumed at the cathode (reduction). They flow from anode (\u2212) through the external wire to the cathode (+). This is opposite to conventional current direction.'
        },
        {
          id: 'ch10-ex04-mc',
          type: 'multiple-choice',
          question: 'A galvanic cell is constructed with Ag and Fe electrodes. Given \\(E°(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V}\\) and \\(E°(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}\\), what is \\(E°_{\\text{cell}}\\)?',
          choices: ['+1.24 V', '+0.36 V', '\u22121.24 V', '+0.80 V'],
          answer: 0,
          explanation: 'Fe is the anode (more negative potential) and Ag is the cathode. E\u00B0cell = E\u00B0cathode \u2212 E\u00B0anode = +0.80 \u2212 (\u22120.44) = +1.24 V.'
        },
        {
          question: 'For the galvanic cell: \\(\\text{Fe}(s) | \\text{FeSO}_4(aq) || \\text{AgNO}_3(aq) | \\text{Ag}(s)\\), write the electrode reactions at the anode and cathode, and the overall cell reaction. Given \\(E°_{Ag^+/Ag} = +0.80\\text{ V}\\) and \\(E°_{Fe^{2+}/Fe} = -0.44\\text{ V}\\), calculate the standard EMF.',
          hint: 'Remember: anode is on the left side of the cell notation. Anode undergoes oxidation; cathode undergoes reduction. For Ag, the reduction half-reaction involves Ag\u207A + e\u207B \u2192 Ag.',
          solution: 'Anode (oxidation): Fe \u2192 Fe\u00B2\u207A + 2e\u207B. Cathode (reduction): Ag\u207A + e\u207B \u2192 Ag (multiply by 2). Overall: Fe + 2Ag\u207A \u2192 Fe\u00B2\u207A + 2Ag. E\u00B0_cell = E\u00B0_cathode - E\u00B0_anode = 0.80 - (-0.44) = +1.24 V. The positive EMF confirms this reaction is spontaneous.'
        },
        {
          question: 'A student sets up a galvanic cell by placing two zinc electrodes in separate solutions of ZnSO₄ and CuSO₄. Will this produce electricity? Explain.',
          hint: 'Think about what happens when both electrodes are the same material. What drives electron flow in a galvanic cell?',
          solution: 'No, this cell would not produce electricity (or would produce very little). A galvanic cell requires a spontaneous redox reaction. If both electrodes are zinc, there is no net redox reaction driving electron flow. The EMF would be zero (or near zero), because both half-cells have the same electrode potential. For a working galvanic cell, the two electrodes must have different reduction potentials.'
        },
        {
          question: 'Describe the direction of current flow (conventional current, not electron flow) in the external circuit of a galvanic cell. How does this compare to electron flow?',
          hint: 'Conventional current is defined as the direction of positive charge flow. Electrons are negative charges.',
          solution: 'Conventional current in the external circuit flows from the cathode (positive terminal) to the anode (negative terminal). This is opposite to the direction of electron flow: electrons move from the anode (negative) through the wire to the cathode (positive). In the early days of electricity, the direction of current was defined before electrons were discovered, so by convention, current flows from + to -, opposite to the actual electron movement.'
        }
      ]
    },

    // ==================== SECTION 3: Electrolytic Cells ====================
    {
      id: 'ch10-sec03',
      title: 'Electrolytic Cells (电解池)',
      content: `
<div class="env-definition">
<strong>Electrolytic Cell (电解池)</strong><br>
An <em>electrolytic cell</em> uses an external electrical energy source to force a <em>non-spontaneous</em> redox reaction to occur. This process is called <strong>electrolysis (电解)</strong>. Unlike galvanic cells, electrolytic cells consume electrical energy to produce chemical change.
</div>

<h3>Comparison: Galvanic vs. Electrolytic Cell</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:#1a1a40;">
    <th style="padding:8px;border:1px solid #30363d;"></th>
    <th style="padding:8px;border:1px solid #30363d;">Galvanic Cell (原电池)</th>
    <th style="padding:8px;border:1px solid #30363d;">Electrolytic Cell (电解池)</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Energy conversion</td>
    <td style="padding:8px;border:1px solid #30363d;">Chemical → Electrical</td>
    <td style="padding:8px;border:1px solid #30363d;">Electrical → Chemical</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">Reaction spontaneity</td>
    <td style="padding:8px;border:1px solid #30363d;">Spontaneous (\\(E_{cell} > 0\\))</td>
    <td style="padding:8px;border:1px solid #30363d;">Non-spontaneous (driven by power source)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Anode charge</td>
    <td style="padding:8px;border:1px solid #30363d;">Negative (−)</td>
    <td style="padding:8px;border:1px solid #30363d;">Positive (+)</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">Cathode charge</td>
    <td style="padding:8px;border:1px solid #30363d;">Positive (+)</td>
    <td style="padding:8px;border:1px solid #30363d;">Negative (−)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Where does oxidation occur?</td>
    <td colspan="2" style="padding:8px;border:1px solid #30363d;text-align:center;">Always at the ANODE (in both cell types)</td>
  </tr>
</table>

<h3>Electrolysis of Water</h3>
\\[ 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{electrolysis}} 2\\text{H}_2(g) + \\text{O}_2(g) \\]
<p>In dilute H₂SO₄ solution:</p>
<ul>
  <li><strong>Cathode (−):</strong> \\(4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2(g)\\) ← H₂ gas evolves</li>
  <li><strong>Anode (+):</strong> \\(2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2(g) + 4\\text{H}^+ + 4e^-\\) ← O₂ gas evolves</li>
</ul>
<p>Volume ratio: \\(V_{H_2} : V_{O_2} = 2:1\\) (at cathode : anode)</p>

<h3>Electrolysis of NaCl Solution (Chlor-Alkali Process)</h3>
<p>One of the most important industrial processes:</p>
<ul>
  <li><strong>Cathode (−):</strong> \\(2\\text{H}_2\\text{O} + 2e^- \\rightarrow \\text{H}_2(g) + 2\\text{OH}^-(aq)\\)</li>
  <li><strong>Anode (+):</strong> \\(2\\text{Cl}^- \\rightarrow \\text{Cl}_2(g) + 2e^-\\)</li>
</ul>
<p>Products: H₂ (fuel), Cl₂ (disinfectant, PVC), NaOH (important base).</p>

<div class="env-warning">
<strong>Why Cl₂ instead of O₂ at anode?</strong> Though water oxidation (→ O₂) is thermodynamically preferred, the kinetic overpotential for O₂ evolution at carbon anodes is high. Also, at high [Cl⁻], Cl⁻ is preferentially oxidized. This is called <em>overpotential</em> (超电位) effect.
</div>

<h3>Faraday's Law of Electrolysis (法拉第电解定律)</h3>
<div class="env-definition">
<strong>Faraday's Law:</strong> The amount of substance deposited at an electrode is directly proportional to the quantity of electric charge passed.<br><br>
\\[ m = \\frac{M \\cdot I \\cdot t}{n \\cdot F} \\]
where:
<ul>
  <li>\\(m\\) = mass of substance deposited (g)</li>
  <li>\\(M\\) = molar mass (g/mol)</li>
  <li>\\(I\\) = current (A)</li>
  <li>\\(t\\) = time (s)</li>
  <li>\\(n\\) = number of electrons transferred per ion</li>
  <li>\\(F\\) = Faraday constant = 96485 C/mol ≈ 96500 C/mol</li>
</ul>
</div>

<div class="env-example">
<strong>Example:</strong> How much Cu deposits when 2.0 A flows for 30 min through a CuSO₄ solution?<br><br>
\\(M_{Cu} = 63.5\\text{ g/mol}\\), \\(n = 2\\) (Cu²⁺ + 2e⁻ → Cu)<br>
\\(t = 30 \\times 60 = 1800\\text{ s}\\)<br>
\\[ m = \\frac{63.5 \\times 2.0 \\times 1800}{2 \\times 96500} = \\frac{228600}{193000} \\approx 1.18\\text{ g} \\]
</div>

<h3>Applications of Electrolysis</h3>
<ul>
  <li><strong>Electroplating (电镀):</strong> Coat objects with thin metal layers (Ni, Cr, Au, Ag) for corrosion protection or aesthetics. Object to be plated = cathode; plating metal = anode.</li>
  <li><strong>Electrorefining (电解精炼):</strong> Purify metals. Crude copper anode dissolves; pure copper deposits at cathode.</li>
  <li><strong>Aluminum production (Hall-Héroult process):</strong> Electrolysis of Al₂O₃ dissolved in molten cryolite (Na₃AlF₆) at ~950°C.</li>
</ul>
      `,
      visualizations: [
        {
          id: 'ch10-viz-electrolysis',
          title: 'Electrolysis of CuSO\u2084 Solution',
          description: 'Adjust voltage and watch copper deposit at the cathode and O\u2082 evolve at the anode. Mass deposited is calculated using Faraday\'s Law.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 380});
            var voltage = 3.0;
            var elapsed = 0;
            var lastTs = null;
            var running = false;
            var massDeposited = 0;

            VizEngine.createSlider(controls, 'Voltage (V)', 1, 6, 3, 0.1, function(v) { voltage = v; });
            VizEngine.createButton(controls, 'Start/Stop', function() { running = !running; if (running) lastTs = null; });
            VizEngine.createButton(controls, 'Reset', function() { running = false; elapsed = 0; massDeposited = 0; lastTs = null; });

            var F = 96500, M_Cu = 63.5, n_Cu = 2;
            var resistance = 10;

            viz.animate(function(timestamp) {
              if (running) {
                if (lastTs === null) lastTs = timestamp;
                var dt = (timestamp - lastTs) / 1000;
                lastTs = timestamp;
                var current = voltage / resistance;
                if (voltage > 1.5) {
                  elapsed += dt;
                  massDeposited = (M_Cu * current * elapsed) / (n_Cu * F);
                }
              } else {
                lastTs = null;
              }

              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;
              var current = voltage / resistance;

              // Beaker
              var bx = W / 2, by = 220, bw = 320, bh = 160;
              ctx.fillStyle = '#0a1520';
              ctx.strokeStyle = '#3a3a6a';
              ctx.lineWidth = 2;
              ctx.fillRect(bx - bw / 2, by - bh / 2, bw, bh);
              ctx.strokeRect(bx - bw / 2, by - bh / 2, bw, bh);

              var blueIntensity = Math.max(0.04, 0.15 - massDeposited * 0.02);
              ctx.fillStyle = 'rgba(88,166,255,' + blueIntensity + ')';
              ctx.fillRect(bx - bw / 2 + 2, by - bh / 2 + 2, bw - 4, bh - 4);

              ctx.fillStyle = viz.colors.blue;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('CuSO\u2084(aq)', bx, by + bh / 2 + 16);

              // Cathode (left, negative)
              var cathX = bx - bw / 2 + 50;
              ctx.fillStyle = '#607060';
              ctx.fillRect(cathX - 8, by - bh / 2 - 40, 16, bh + 20);
              var depositH = Math.min(massDeposited * 30, bh - 20);
              if (depositH > 0) {
                ctx.fillStyle = viz.colors.orange;
                ctx.fillRect(cathX - 8, by + bh / 2 - depositH - 10, 16, depositH);
              }
              ctx.fillStyle = viz.colors.text;
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cathode (\u2212)', cathX, by - bh / 2 - 50);
              ctx.fillStyle = viz.colors.orange;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Cu\u00B2\u207A + 2e\u207B \u2192 Cu', cathX, by + bh / 2 + 30);

              // Anode (right, positive)
              var anodX = bx + bw / 2 - 50;
              ctx.fillStyle = '#505050';
              ctx.fillRect(anodX - 8, by - bh / 2 - 40, 16, bh + 20);
              ctx.fillStyle = viz.colors.text;
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Anode (+)', anodX, by - bh / 2 - 50);
              ctx.fillStyle = viz.colors.red;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('2H\u2082O \u2192 O\u2082 + 4H\u207A + 4e\u207B', anodX, by + bh / 2 + 30);

              // O2 bubbles at anode
              if (running && voltage > 1.5) {
                for (var b = 0; b < 4; b++) {
                  var bp = (elapsed * 1.5 + b * 0.25) % 1;
                  var bY = by + bh / 2 - 10 - bp * bh;
                  ctx.fillStyle = 'rgba(248,81,73,0.4)';
                  ctx.beginPath();
                  ctx.arc(anodX + 12, bY, 5, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.strokeStyle = 'rgba(248,81,73,0.7)';
                  ctx.lineWidth = 1;
                  ctx.stroke();
                }
              }

              // Power source
              var psX = bx, psY = 55;
              ctx.fillStyle = '#1a2040';
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 1.5;
              ctx.fillRect(psX - 55, psY - 20, 110, 40);
              ctx.strokeRect(psX - 55, psY - 20, 110, 40);
              ctx.fillStyle = viz.colors.green;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(voltage.toFixed(1) + ' V', psX, psY + 5);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.fillText('Power Source', psX, psY - 8);

              // Wires
              ctx.strokeStyle = '#555580';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.moveTo(cathX, by - bh / 2 - 40);
              ctx.lineTo(cathX, psY);
              ctx.lineTo(psX - 55, psY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(anodX, by - bh / 2 - 40);
              ctx.lineTo(anodX, psY);
              ctx.lineTo(psX + 55, psY);
              ctx.stroke();

              ctx.fillStyle = viz.colors.red;
              ctx.font = 'bold 12px -apple-system,sans-serif';
              ctx.fillText('+', psX + 62, psY + 4);
              ctx.fillStyle = viz.colors.blue;
              ctx.fillText('\u2212', psX - 65, psY + 4);

              // Electrons on wire
              if (running && voltage > 1.5) {
                for (var e = 0; e < 4; e++) {
                  var ef = (elapsed * 1.2 + e * 0.25) % 1;
                  var ex2, ey2;
                  if (ef < 0.3) {
                    ex2 = cathX;
                    ey2 = by - bh / 2 - 40 - ef / 0.3 * 40;
                  } else if (ef < 0.7) {
                    ex2 = cathX + (ef - 0.3) / 0.4 * (psX - cathX);
                    ey2 = psY;
                  } else {
                    ex2 = psX + (ef - 0.7) / 0.3 * (anodX - psX);
                    ey2 = psY + (ef - 0.7) / 0.3 * (by - bh / 2 - 40 - psY);
                  }
                  ctx.fillStyle = viz.colors.yellow;
                  ctx.beginPath();
                  ctx.arc(ex2, ey2, 5, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.fillStyle = viz.colors.bg;
                  ctx.font = 'bold 8px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillText('e\u207B', ex2, ey2);
                }
              }

              // Status panel
              var current2 = voltage > 1.5 ? current : 0;
              ctx.fillStyle = '#0d1525';
              ctx.strokeStyle = '#3a3a6a';
              ctx.fillRect(10, H - 60, 200, 50);
              ctx.strokeRect(10, H - 60, 200, 50);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.textBaseline = 'top';
              ctx.fillText('Current: ' + current2.toFixed(2) + ' A', 18, H - 55);
              ctx.fillText('Time: ' + elapsed.toFixed(1) + ' s', 18, H - 40);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('Cu deposited: ' + massDeposited.toFixed(4) + ' g', 18, H - 25);

              if (voltage <= 1.5) {
                ctx.fillStyle = viz.colors.red;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Voltage too low for electrolysis', bx, by);
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch10-ex05-mc',
          type: 'multiple-choice',
          question: 'During electrolysis of aqueous CuSO₄ with copper electrodes, what happens at the anode?',
          choices: [
            'Cu²⁺ ions are reduced to Cu metal',
            'Cu metal is oxidized to Cu²⁺ ions',
            'Water is oxidized to O₂',
            'SO₄²⁻ is oxidized'
          ],
          answer: 1,
          explanation: 'With an active (copper) anode, the anode itself dissolves: Cu \u2192 Cu\u00B2\u207A + 2e\u207B. This is preferred over water oxidation. This is the principle behind copper electrorefining.'
        },
        {
          id: 'ch10-ex06-mc',
          type: 'multiple-choice',
          question: 'How much silver (M = 108 g/mol) is deposited by a current of 2.0 A flowing for 965 s? (F = 96500 C/mol)',
          choices: ['2.16 g', '1.08 g', '4.32 g', '0.54 g'],
          answer: 0,
          explanation: 'm = MIt/(nF) = (108 \u00D7 2.0 \u00D7 965)/(1 \u00D7 96500) = 208440/96500 \u2248 2.16 g. Silver deposits as Ag\u207A + e\u207B \u2192 Ag, so n = 1.'
        },
        {
          question: 'In the electrolysis of dilute sulfuric acid (H₂SO₄ solution), what gases are produced at each electrode? Write the half-reactions. What is the volume ratio of gas produced at the cathode vs. anode?',
          hint: 'H\u2082SO\u2084 dissociates into H\u207A and SO\u2084\u00B2\u207B. Water is also present. Think about which ions will be reduced at the cathode, and what will be oxidized at the anode.',
          solution: 'Cathode (reduction): 2H\u207A + 2e\u207B \u2192 H\u2082(g). Hydrogen gas is produced. Anode (oxidation): 2H\u2082O \u2192 O\u2082(g) + 4H\u207A + 4e\u207B. Oxygen gas is produced. For every 4 electrons transferred: 2 mol H\u2082 at cathode, 1 mol O\u2082 at anode. Volume ratio H\u2082:O\u2082 = 2:1 (at same T, P). The net reaction is: 2H\u2082O \u2192 2H\u2082 + O\u2082.'
        },
        {
          question: 'Calculate the mass of silver deposited when a current of 0.500 A flows for 2.00 hours through a silver nitrate solution. (M(Ag) = 107.9 g/mol, F = 96500 C/mol)',
          hint: 'Ag\u207A + e\u207B \u2192 Ag, so n=1. Convert time to seconds first. Use Faraday\'s law: m = MIt/(nF).',
          solution: 't = 2.00 \u00D7 3600 = 7200 s. n = 1 (Ag\u207A + e\u207B \u2192 Ag). m = (107.9 \u00D7 0.500 \u00D7 7200) / (1 \u00D7 96500) = 388440 / 96500 = 4.025 g \u2248 4.03 g of silver is deposited.'
        },
        {
          question: 'In electroplating a metal object with gold, should the object be connected as the anode or cathode? What should serve as the anode? Explain the electrode reactions.',
          hint: 'Think about what you want to happen: gold should deposit onto the object. Deposition = reduction = cathode.',
          solution: 'The object to be plated should be the CATHODE (negative electrode). A piece of pure gold serves as the ANODE. Cathode (object): Au\u00B3\u207A + 3e\u207B \u2192 Au(s) \u2014 gold ions are reduced and deposit on the object. Anode (gold): Au(s) \u2192 Au\u00B3\u207A + 3e\u207B \u2014 gold dissolves to replenish the gold ions in solution. The gold anode gradually dissolves while gold coats the object, keeping the ion concentration roughly constant.'
        }
      ]
    },

    // ==================== SECTION 4: Metal Corrosion ====================
    {
      id: 'ch10-sec04',
      title: 'Metal Corrosion & Protection (金属腐蚀与防护)',
      content: `
<div class="env-definition">
<strong>Metal Corrosion (金属腐蚀)</strong><br>
Corrosion is the spontaneous oxidation of metals caused by their reaction with environmental substances (oxygen, water, acids, etc.). It is an electrochemical process in which the metal acts as the anode of a microscopic galvanic cell formed at the metal surface.
</div>

<h3>Types of Corrosion</h3>
<h4>1. Chemical Corrosion (化学腐蚀)</h4>
<p>Direct reaction of metal with a corrosive substance without electron flow through an external circuit. Example: steel pipe in dry HCl gas.</p>
\\[ \\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2 \\]

<h4>2. Electrochemical Corrosion (电化学腐蚀)</h4>
<p>More common and more serious. Occurs when two different metals (or different regions of the same metal) form a galvanic couple in the presence of an electrolyte.</p>

<h3>Iron Corrosion in Neutral/Weakly Acidic Conditions: Oxygen Absorption Corrosion</h3>
<p>The most common type: iron corrodes in oxygen-containing water. The rust you see on iron nails is the product of this process.</p>
<ul>
  <li><strong>Anode (Fe, oxidized):</strong> \\(\\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^-\\)</li>
  <li><strong>Cathode (impurity, e.g., C, reduced):</strong> \\(\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-\\)</li>
  <li><strong>Secondary reactions:</strong>
    \\[ \\text{Fe}^{2+} + 2\\text{OH}^- \\rightarrow \\text{Fe(OH)}_2 \\]
    \\[ 4\\text{Fe(OH)}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4\\text{Fe(OH)}_3 \\]
    \\[ 2\\text{Fe(OH)}_3 \\rightarrow \\text{Fe}_2\\text{O}_3 \\cdot 3\\text{H}_2\\text{O} \\text{ (rust)} \\]
  </li>
</ul>

<div class="env-warning">
<strong>Why does iron rust faster in salt water than in pure water?</strong> Salt (NaCl) dissociates into Na⁺ and Cl⁻ ions, increasing the electrical conductivity of the electrolyte. This allows larger currents to flow in the corrosion cell, dramatically accelerating the electrochemical corrosion rate.
</div>

<h3>Methods of Corrosion Protection</h3>

<h4>1. Sacrificial Anode Protection (牺牲阳极法)</h4>
<p>Attach a more active metal (Mg, Zn, Al) to the iron structure. The active metal becomes the anode and dissolves preferentially, while iron becomes the cathode and is protected.</p>
\\[ \\text{Mg} \\rightarrow \\text{Mg}^{2+} + 2e^- \\quad \\text{(Mg sacrificed)} \\]

<h4>2. Impressed Current Cathodic Protection (外加电流法)</h4>
<p>Connect the structure to the negative terminal of a DC power source — making it the cathode. An inert anode (graphite or Pt) completes the circuit.</p>

<h4>3. Protective Coating (覆盖层法)</h4>
<ul>
  <li><strong>Galvanizing (镀锌):</strong> Coating iron with zinc. Zinc corrodes preferentially (more active), protecting iron even at scratches — sacrificial protection.</li>
  <li><strong>Tin plating (镀锡):</strong> Used in food cans. If coating is scratched, iron becomes the anode and corrodes rapidly.</li>
  <li><strong>Alloying:</strong> Stainless steel (Fe + Cr + Ni) — chromium forms a stable Cr₂O₃ passivation layer.</li>
</ul>

<div class="env-intuition">
<strong>Galvanized vs. Tin-plated — a Critical Difference!</strong><br>
Galvanized iron (Zn coating): Zn is MORE active than Fe. Even if scratched, Zn corrodes first (sacrificial anode), protecting Fe.<br>
Tin-plated iron (Sn coating): Sn is LESS active than Fe. If the coating is intact, Fe is isolated. But if scratched, Fe becomes the anode and corrodes FASTER than without the tin!
</div>
      `,
      visualizations: [
        {
          id: 'ch10-viz-corrosion',
          title: 'Iron Nail Corrosion Process',
          description: 'See the electrochemical corrosion mechanism of an iron nail in salt water. Compare with protected iron.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 380});
            var t = 0;
            var showProtected = false;

            VizEngine.createButton(controls, 'Toggle: Normal / Protected', function() {
              showProtected = !showProtected;
              t = 0;
            });

            viz.animate(function(timestamp) {
              t = timestamp * 0.001;
              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              if (showProtected) {
                ctx.fillText('Protected Iron (Galvanized: Zn coating)', W / 2, 20);
              } else {
                ctx.fillText('Iron Nail Corrosion in Salt Water', W / 2, 20);
              }

              ctx.fillStyle = 'rgba(88,166,255,0.1)';
              ctx.fillRect(80, 60, W - 160, 230);
              ctx.strokeStyle = 'rgba(88,166,255,0.4)';
              ctx.lineWidth = 1.5;
              ctx.strokeRect(80, 60, W - 160, 230);
              ctx.fillStyle = 'rgba(88,166,255,0.6)';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('NaCl(aq) electrolyte', 88, 80);

              var nailX = W / 2, nailY = 100;
              var nailW = 20, nailH = 160;

              ctx.fillStyle = showProtected ? viz.colors.teal : '#708090';
              ctx.fillRect(nailX - nailW / 2, nailY, nailW, nailH);

              if (!showProtected) {
                ctx.fillStyle = '#303030';
                ctx.beginPath();
                ctx.arc(nailX + nailW / 2 + 15, nailY + nailH - 30, 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.text;
                ctx.font = '10px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('C', nailX + nailW / 2 + 15, nailY + nailH - 30);
              } else {
                ctx.fillStyle = viz.colors.green;
                ctx.beginPath();
                ctx.arc(nailX - nailW / 2 - 20, nailY + nailH / 2, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Zn', nailX - nailW / 2 - 20, nailY + nailH / 2);
              }

              var eSrc = showProtected ? {x: nailX - nailW / 2 - 20, y: nailY + nailH / 2} : {x: nailX, y: nailY + nailH / 2};
              var eDst = showProtected ? {x: nailX, y: nailY + nailH / 2} : {x: nailX + nailW / 2 + 15, y: nailY + nailH - 30};

              for (var i = 0; i < 4; i++) {
                var ef = (t * 0.8 + i * 0.25) % 1;
                var ex = eSrc.x + ef * (eDst.x - eSrc.x);
                var ey = eSrc.y + ef * (eDst.y - eSrc.y);
                ctx.fillStyle = viz.colors.yellow;
                ctx.beginPath();
                ctx.arc(ex, ey, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.bg;
                ctx.font = 'bold 7px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('e\u207B', ex, ey);
              }

              if (!showProtected) {
                var rustAmt = (Math.sin(t * 0.3) + 1) / 2;
                ctx.fillStyle = 'rgba(210,90,30,' + (0.4 + rustAmt * 0.4) + ')';
                ctx.beginPath();
                ctx.ellipse(nailX, nailY + nailH - 20, nailW / 2 + 8 + rustAmt * 10, 10, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.red;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Rust (Fe\u2082O\u2083\u00B7nH\u2082O)', nailX, nailY + nailH + 20);
              }

              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';

              if (showProtected) {
                ctx.fillStyle = viz.colors.green;
                ctx.fillText('Anode: Zn \u2192 Zn\u00B2\u207A + 2e\u207B', nailX - nailW / 2 - 20, nailY + nailH + 30);
                ctx.fillStyle = viz.colors.teal;
                ctx.fillText('Cathode: O\u2082 + 2H\u2082O + 4e\u207B \u2192 4OH\u207B (at Fe)', nailX + 60, nailY + nailH + 30);
                ctx.fillStyle = viz.colors.green;
                ctx.fillText('Iron is PROTECTED (cathode)', nailX, nailY + nailH + 50);
              } else {
                ctx.fillStyle = viz.colors.red;
                ctx.fillText('Anode: Fe \u2192 Fe\u00B2\u207A + 2e\u207B', nailX - 20, nailY + nailH + 50);
                ctx.fillStyle = viz.colors.teal;
                ctx.fillText('Cathode: O\u2082 + 2H\u2082O + 4e\u207B \u2192 4OH\u207B (at C)', nailX + nailW / 2 + 15, nailY + nailH + 50);
              }
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch10-ex07-mc',
          type: 'multiple-choice',
          question: 'A steel ship hull is connected to blocks of zinc metal to prevent corrosion. In this system, the zinc:',
          choices: [
            'Acts as the cathode and is protected',
            'Acts as the anode and is sacrificed to protect the steel',
            'Prevents corrosion by acting as an insulating barrier',
            'Provides electrons from an external power source'
          ],
          answer: 1,
          explanation: 'Zinc (E\u00B0 = \u22120.76 V) is more active than iron (E\u00B0 = \u22120.44 V). When connected, Zn becomes the anode and is oxidized preferentially: Zn \u2192 Zn\u00B2\u207A + 2e\u207B. Iron becomes the cathode and is protected. This is sacrificial anode cathodic protection.'
        },
        {
          id: 'ch10-ex08-mc',
          type: 'multiple-choice',
          question: 'Tin-plated iron (tin cans) corrodes faster than bare iron once the tin is scratched because:',
          choices: [
            'Tin is a stronger oxidizing agent than iron',
            'Tin and iron form an alloy that is less stable',
            'Iron becomes the anode relative to the more noble tin',
            'Tin accelerates the cathodic reaction'
          ],
          answer: 2,
          explanation: 'Tin (E\u00B0 = \u22120.14 V) is more noble (less active) than iron (E\u00B0 = \u22120.44 V). When the tin coating is scratched, a galvanic cell forms where iron is the anode and corrodes rapidly. This is the opposite of galvanizing with zinc.'
        },
        {
          question: 'Explain why galvanized iron (iron coated with zinc) is more corrosion-resistant than tin-plated iron (iron coated with tin), especially when the coating is scratched.',
          hint: 'Think about the relative activity of Zn, Sn, and Fe. Which is most easily oxidized? In a galvanic couple, the more active metal becomes the anode.',
          solution: 'Zinc is MORE active than iron (E\u00B0 Zn\u00B2\u207A/Zn = -0.76 V, E\u00B0 Fe\u00B2\u207A/Fe = -0.44 V). When the Zn coating is scratched, Fe and Zn form a galvanic cell. Zn is the anode (more active, lower reduction potential) and gets oxidized, while Fe is the cathode and is protected. This is sacrificial anode protection. Tin is LESS active than iron (E\u00B0 Sn\u00B2\u207A/Sn = -0.14 V). When Sn coating is scratched, Fe is now more active and becomes the anode. Fe corrodes faster than it would without the Sn coating, because Sn accelerates the galvanic corrosion of Fe.'
        },
        {
          question: 'A copper water pipe (Cu) is connected to an iron fitting (Fe) in a plumbing system. Which metal corrodes? Write the electrode reactions. How could you prevent this?',
          hint: 'Cu and Fe form a galvanic couple with water as electrolyte. Compare their reduction potentials: E\u00B0(Cu\u00B2\u207A/Cu) = +0.34 V, E\u00B0(Fe\u00B2\u207A/Fe) = -0.44 V.',
          solution: 'Iron corrodes. Fe is more active (lower reduction potential, -0.44 V) than Cu (+0.34 V), so Fe acts as the anode. Anode (Fe): Fe \u2192 Fe\u00B2\u207A + 2e\u207B (iron dissolves). Cathode (Cu): O\u2082 + 2H\u2082O + 4e\u207B \u2192 4OH\u207B (copper surface). Prevention: (1) Use same metal throughout the system; (2) Install an insulating plastic coupling between Fe and Cu pipes to break the electrical contact; (3) Use cathodic protection on the iron fitting; (4) Apply protective coatings to prevent electrolyte contact.'
        }
      ]
    },

    // ==================== SECTION 5: Battery Technology ====================
    {
      id: 'ch10-sec05',
      title: 'Battery Technology (电池技术)',
      content: `
<div class="env-definition">
<strong>Battery</strong><br>
A battery is one or more electrochemical cells that convert stored chemical energy into electrical energy. <em>Primary batteries</em> (一次电池) are non-rechargeable; <em>secondary batteries</em> (二次电池/蓄电池) are rechargeable; <em>fuel cells</em> (燃料电池) convert fuel energy continuously.
</div>

<h3>1. Dry Cell (干电池) — Leclanché Cell</h3>
<p>The common carbon-zinc dry cell used in remotes and flashlights.</p>
<ul>
  <li><strong>Anode:</strong> Zn case</li>
  <li><strong>Cathode:</strong> Carbon rod (C) surrounded by MnO₂ + NH₄Cl paste</li>
  <li><strong>Electrolyte:</strong> Moist NH₄Cl/ZnCl₂ paste</li>
  <li><strong>Voltage:</strong> ~1.5 V</li>
</ul>
<div class="env-definition">
<strong>Reactions (simplified):</strong><br>
Anode: \\(\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-\\)<br>
Cathode: \\(2\\text{MnO}_2 + 2\\text{NH}_4^+ + 2e^- \\rightarrow \\text{Mn}_2\\text{O}_3 + 2\\text{NH}_3 + \\text{H}_2\\text{O}\\)
</div>

<h3>2. Lead-Acid Battery (铅酸电池)</h3>
<p>The classic rechargeable battery used in cars. Composed of multiple cells (~2 V each) in series.</p>
<div class="env-definition">
<strong>Discharge reactions:</strong><br>
Anode (Pb, oxidized): \\(\\text{Pb} + \\text{SO}_4^{2-} \\rightarrow \\text{PbSO}_4 + 2e^-\\)<br>
Cathode (PbO₂, reduced): \\(\\text{PbO}_2 + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\rightarrow \\text{PbSO}_4 + 2\\text{H}_2\\text{O}\\)<br>
Overall discharge: \\(\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}\\)
</div>
<p>During charging, all reactions are reversed — PbSO₄ is converted back to Pb and PbO₂.</p>
<ul>
  <li><strong>Voltage:</strong> 2.0 V per cell, typically 12 V (6 cells)</li>
  <li><strong>Pros:</strong> Reliable, high power, recyclable</li>
  <li><strong>Cons:</strong> Heavy, contains toxic Pb and H₂SO₄, low energy density</li>
</ul>

<h3>3. Lithium-Ion Battery (锂离子电池)</h3>
<p>The dominant technology in smartphones, laptops, and electric vehicles.</p>
<div class="env-definition">
<strong>Discharge reactions:</strong><br>
Anode: \\(\\text{LiC}_6 \\rightarrow \\text{C}_6 + \\text{Li}^+ + e^-\\)<br>
Cathode: \\(\\text{CoO}_2 + \\text{Li}^+ + e^- \\rightarrow \\text{LiCoO}_2\\)
</div>
<ul>
  <li><strong>Voltage:</strong> 3.6–3.7 V per cell</li>
  <li><strong>Energy density:</strong> ~150–250 Wh/kg (much higher than lead-acid)</li>
  <li><strong>Pros:</strong> Lightweight, high voltage, no memory effect, rechargeable thousands of times</li>
  <li><strong>Cons:</strong> Expensive, safety concerns (thermal runaway), supply chain issues for Co</li>
</ul>

<h3>4. Fuel Cells (燃料电池)</h3>
<p>A fuel cell continuously converts the chemical energy of a fuel (H₂, CH₃OH, etc.) into electricity. Unlike batteries, they never "run out" as long as fuel is supplied.</p>
<div class="env-definition">
<strong>Hydrogen-Oxygen Fuel Cell:</strong><br>
Anode (fuel electrode): \\(\\text{H}_2 - 2e^- \\rightarrow 2\\text{H}^+\\) (acidic) or \\(\\text{H}_2 + 2\\text{OH}^- - 2e^- \\rightarrow 2\\text{H}_2\\text{O}\\) (alkaline)<br>
Cathode: \\(\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}\\) (acidic)<br>
Overall: \\(2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}\\)<br>
Only product is water — zero emissions!
</div>

<h3>Summary: Battery Comparison</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:#1a1a40;">
    <th style="padding:8px;border:1px solid #30363d;">Battery Type</th>
    <th style="padding:8px;border:1px solid #30363d;">Voltage</th>
    <th style="padding:8px;border:1px solid #30363d;">Rechargeable</th>
    <th style="padding:8px;border:1px solid #30363d;">Energy Density</th>
    <th style="padding:8px;border:1px solid #30363d;">Key Application</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Dry cell (Zn-C)</td>
    <td style="padding:8px;border:1px solid #30363d;">1.5 V</td>
    <td style="padding:8px;border:1px solid #30363d;">No</td>
    <td style="padding:8px;border:1px solid #30363d;">Low (~85 Wh/kg)</td>
    <td style="padding:8px;border:1px solid #30363d;">Remotes, clocks</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">Lead-acid</td>
    <td style="padding:8px;border:1px solid #30363d;">2 V/cell</td>
    <td style="padding:8px;border:1px solid #30363d;">Yes</td>
    <td style="padding:8px;border:1px solid #30363d;">Low (~35 Wh/kg)</td>
    <td style="padding:8px;border:1px solid #30363d;">Car batteries</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #30363d;">Lithium-ion</td>
    <td style="padding:8px;border:1px solid #30363d;">3.6–3.7 V</td>
    <td style="padding:8px;border:1px solid #30363d;">Yes</td>
    <td style="padding:8px;border:1px solid #30363d;">High (~200 Wh/kg)</td>
    <td style="padding:8px;border:1px solid #30363d;">Phones, EVs</td>
  </tr>
  <tr style="background:#0f0f30;">
    <td style="padding:8px;border:1px solid #30363d;">H₂ fuel cell</td>
    <td style="padding:8px;border:1px solid #30363d;">~1.2 V</td>
    <td style="padding:8px;border:1px solid #30363d;">N/A (needs fuel)</td>
    <td style="padding:8px;border:1px solid #30363d;">Very high</td>
    <td style="padding:8px;border:1px solid #30363d;">Transport, space</td>
  </tr>
</table>
      `,
      visualizations: [
        {
          id: 'ch10-viz-battery-comparison',
          title: 'Interactive Battery Comparison Chart',
          description: 'Compare different battery technologies by energy density and voltage. Click a battery type to highlight it.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 380});
            var selected = -1;

            var batteries = [
              {name: 'Dry Cell\n(Zn-C)', voltage: 1.5, energy: 85, cost: 1, color: viz.colors.text, rechargeable: false},
              {name: 'Alkaline', voltage: 1.5, energy: 160, cost: 2, color: viz.colors.blue, rechargeable: false},
              {name: 'NiMH', voltage: 1.2, energy: 100, cost: 3, color: viz.colors.teal, rechargeable: true},
              {name: 'Lead-Acid', voltage: 2.0, energy: 40, cost: 2, color: viz.colors.orange, rechargeable: true},
              {name: 'Li-ion', voltage: 3.7, energy: 200, cost: 5, color: viz.colors.purple, rechargeable: true},
              {name: 'LiFePO\u2084', voltage: 3.2, energy: 160, cost: 4, color: viz.colors.green, rechargeable: true},
              {name: 'Fuel Cell\n(H\u2082)', voltage: 1.2, energy: 500, cost: 7, color: viz.colors.yellow, rechargeable: false}
            ];

            var mode = 'energy';
            VizEngine.createButton(controls, 'Show Energy Density', function() { mode = 'energy'; });
            VizEngine.createButton(controls, 'Show Voltage', function() { mode = 'voltage'; });

            viz.canvas.addEventListener('click', function(e) {
              var r = viz.canvas.getBoundingClientRect();
              var cx = (e.clientX - r.left);
              var barW = (viz.width - 120) / batteries.length;
              for (var i = 0; i < batteries.length; i++) {
                var bx = 80 + i * barW + barW * 0.15;
                if (cx >= bx && cx <= bx + barW * 0.7) {
                  selected = (selected === i) ? -1 : i;
                  break;
                }
              }
            });

            viz.animate(function(timestamp) {
              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;
              var chartH = H - 120;
              var chartY = H - 60;
              var barW = (W - 120) / batteries.length;

              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(75, 30);
              ctx.lineTo(75, chartY);
              ctx.lineTo(W - 20, chartY);
              ctx.stroke();

              var maxVal = mode === 'energy' ? 550 : 5.0;
              var title = mode === 'energy' ? 'Energy Density (Wh/kg)' : 'Cell Voltage (V)';

              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              for (var y = 0; y <= 5; y++) {
                var val = (y / 5) * maxVal;
                var sy = chartY - (y / 5) * chartH;
                ctx.fillText(val.toFixed(mode === 'voltage' ? 1 : 0), 72, sy + 4);
                ctx.strokeStyle = viz.colors.grid;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(75, sy);
                ctx.lineTo(W - 20, sy);
                ctx.stroke();
              }

              ctx.save();
              ctx.translate(18, chartY / 2);
              ctx.rotate(-Math.PI / 2);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(title, 0, 0);
              ctx.restore();

              for (var i = 0; i < batteries.length; i++) {
                var b = batteries[i];
                var val2 = mode === 'energy' ? b.energy : b.voltage;
                var bHeight = (val2 / maxVal) * chartH;
                var bx = 80 + i * barW + barW * 0.1;
                var bw = barW * 0.8;
                var by = chartY - bHeight;

                var alpha = (selected === -1 || selected === i) ? 1 : 0.3;
                ctx.globalAlpha = alpha;

                ctx.fillStyle = b.color;
                ctx.fillRect(bx, by, bw, bHeight);

                if (b.rechargeable) {
                  ctx.fillStyle = viz.colors.white;
                  ctx.font = 'bold 9px -apple-system,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText('\u267B', bx + bw / 2, by - 5);
                }

                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                if (bHeight > 20) {
                  ctx.fillText(val2.toFixed(mode === 'voltage' ? 1 : 0), bx + bw / 2, by + 14);
                }

                ctx.fillStyle = b.color;
                ctx.font = '10px -apple-system,sans-serif';
                var lines = b.name.split('\n');
                lines.forEach(function(line, li) {
                  ctx.fillText(line, bx + bw / 2, chartY + 12 + li * 13);
                });

                ctx.globalAlpha = 1;
              }

              if (selected !== -1) {
                var sb = batteries[selected];
                ctx.fillStyle = '#0d1525';
                ctx.strokeStyle = sb.color;
                ctx.lineWidth = 1.5;
                ctx.fillRect(W - 210, 30, 190, 120);
                ctx.strokeRect(W - 210, 30, 190, 120);
                ctx.fillStyle = sb.color;
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(sb.name.replace('\n', ' '), W - 200, 50);
                ctx.fillStyle = viz.colors.white;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.fillText('Voltage: ' + sb.voltage + ' V', W - 200, 70);
                ctx.fillText('Energy: ' + sb.energy + ' Wh/kg', W - 200, 87);
                ctx.fillText('Rechargeable: ' + (sb.rechargeable ? 'Yes \u267B' : 'No'), W - 200, 104);
                ctx.fillText('Click bar to deselect', W - 200, 121);
              }

              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('\u267B = Rechargeable', 80, 18);
            });

            return viz;
          }
        },
        {
          id: 'ch10-viz-fuel-cell',
          title: 'Hydrogen Fuel Cell Operation',
          description: 'See how H\u2082 and O\u2082 are consumed at the electrodes to produce electricity and water. H\u207A ions migrate through the membrane.',
          setup: function(body, controls) {
            var viz = new VizEngine(body, {width: 700, height: 380});
            var t = 0;
            var running = true;
            VizEngine.createButton(controls, 'Start/Stop', function() { running = !running; });

            viz.animate(function(timestamp) {
              if (running) t = timestamp * 0.001;
              viz.clear();
              var W = viz.width, H = viz.height;
              var ctx = viz.ctx;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Hydrogen-Oxygen Fuel Cell (\u9178\u6027)', W / 2, 20);

              var midX = W / 2;
              var cellH = 200, cellTop = 60;

              // Anode chamber (left)
              ctx.fillStyle = '#0a1520';
              ctx.strokeStyle = '#3a6a3a';
              ctx.lineWidth = 2;
              ctx.fillRect(60, cellTop, 200, cellH);
              ctx.strokeRect(60, cellTop, 200, cellH);
              ctx.fillStyle = 'rgba(63,185,160,0.07)';
              ctx.fillRect(62, cellTop + 2, 198, cellH - 4);
              ctx.fillStyle = viz.colors.teal;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Anode Chamber', 160, cellTop + 16);
              ctx.fillText('(H\u2082 fuel)', 160, cellTop + 32);

              // Cathode chamber (right)
              ctx.fillStyle = '#0a1520';
              ctx.strokeStyle = '#6a3a3a';
              ctx.lineWidth = 2;
              ctx.fillRect(midX + 40, cellTop, 200, cellH);
              ctx.strokeRect(midX + 40, cellTop, 200, cellH);
              ctx.fillStyle = 'rgba(248,81,73,0.07)';
              ctx.fillRect(midX + 42, cellTop + 2, 198, cellH - 4);
              ctx.fillStyle = viz.colors.red;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cathode Chamber', midX + 140, cellTop + 16);
              ctx.fillText('(O\u2082 air)', midX + 140, cellTop + 32);

              // PEM membrane in middle
              ctx.fillStyle = '#2a1a40';
              ctx.strokeStyle = viz.colors.purple;
              ctx.lineWidth = 2;
              ctx.fillRect(midX - 40, cellTop, 80, cellH);
              ctx.strokeRect(midX - 40, cellTop, 80, cellH);
              ctx.fillStyle = viz.colors.purple;
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('PEM', midX, cellTop + cellH / 2 - 8);
              ctx.fillText('Membrane', midX, cellTop + cellH / 2 + 6);

              // H2 molecules entering anode
              for (var h = 0; h < 3; h++) {
                var hFrac = (t * 0.6 + h * 0.33) % 1;
                var hX = 70 + hFrac * 110;
                var hY = cellTop + 60 + h * 50;
                ctx.fillStyle = viz.colors.teal;
                ctx.beginPath();
                ctx.arc(hX, hY, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 9px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('H\u2082', hX, hY);
              }

              // H+ ions crossing membrane
              for (var p = 0; p < 5; p++) {
                var pFrac = (t * 0.7 + p * 0.2) % 1;
                var pX = midX - 35 + pFrac * 70;
                var pY = cellTop + 30 + p * 35;
                ctx.fillStyle = viz.colors.yellow;
                ctx.beginPath();
                ctx.arc(pX, pY, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.bg;
                ctx.font = 'bold 7px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('H\u207A', pX, pY);
              }

              // O2 molecules entering cathode
              for (var o = 0; o < 3; o++) {
                var oFrac = 1 - (t * 0.5 + o * 0.33) % 1;
                var oX = midX + 50 + oFrac * 110;
                var oY = cellTop + 60 + o * 50;
                ctx.fillStyle = viz.colors.red;
                ctx.beginPath();
                ctx.arc(oX, oY, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = 'bold 9px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('O\u2082', oX, oY);
              }

              // Water product at cathode
              for (var w = 0; w < 3; w++) {
                var wFrac = (t * 0.4 + w * 0.33) % 1;
                var wX = midX + 100 + Math.sin(t + w) * 20;
                var wY = cellTop + cellH - 20 - wFrac * 80;
                ctx.fillStyle = 'rgba(88,166,255,0.6)';
                ctx.beginPath();
                ctx.arc(wX, wY, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.white;
                ctx.font = '7px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('H\u2082O', wX, wY);
              }

              // External circuit
              var wireTop = cellTop - 30;
              ctx.strokeStyle = '#555580';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.moveTo(160, cellTop);
              ctx.lineTo(160, wireTop);
              ctx.lineTo(midX + 140, wireTop);
              ctx.lineTo(midX + 140, cellTop);
              ctx.stroke();

              // Load box
              ctx.fillStyle = '#1a2040';
              ctx.strokeStyle = viz.colors.green;
              ctx.lineWidth = 1.5;
              ctx.fillRect(midX - 30, wireTop - 18, 60, 28);
              ctx.strokeRect(midX - 30, wireTop - 18, 60, 28);
              ctx.fillStyle = viz.colors.green;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Load', midX, wireTop - 3);

              // Electrons on wire
              for (var e2 = 0; e2 < 5; e2++) {
                var ef = (t * 1.0 + e2 * 0.2) % 1;
                var ex3, ey3;
                if (ef < 0.2) {
                  ex3 = 160;
                  ey3 = cellTop - ef / 0.2 * 30;
                } else if (ef < 0.8) {
                  ex3 = 160 + (ef - 0.2) / 0.6 * (midX + 140 - 160);
                  ey3 = wireTop;
                } else {
                  ex3 = midX + 140;
                  ey3 = wireTop + (ef - 0.8) / 0.2 * 30;
                }
                ctx.fillStyle = viz.colors.yellow;
                ctx.beginPath();
                ctx.arc(ex3, ey3, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.bg;
                ctx.font = 'bold 7px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('e\u207B', ex3, ey3);
              }

              // Half-reaction labels below
              ctx.fillStyle = viz.colors.teal;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'alphabetic';
              ctx.fillText('Anode: H\u2082 \u2192 2H\u207A + 2e\u207B', 160, cellTop + cellH + 20);
              ctx.fillStyle = viz.colors.red;
              ctx.fillText('Cathode: O\u2082 + 4H\u207A + 4e\u207B \u2192 2H\u2082O', midX + 140, cellTop + cellH + 20);
              ctx.fillStyle = viz.colors.green;
              ctx.fillText('Overall: 2H\u2082 + O\u2082 \u2192 2H\u2082O + electricity', W / 2, cellTop + cellH + 40);
            });

            return viz;
          }
        }
      ],
      exercises: [
        {
          id: 'ch10-ex09-mc',
          type: 'multiple-choice',
          question: 'In a hydrogen fuel cell with acidic electrolyte, the reaction at the cathode is:',
          choices: [
            'H\u2082 \u2192 2H\u207A + 2e\u207B',
            'O\u2082 + 4H\u207A + 4e\u207B \u2192 2H\u2082O',
            '2H\u2082O \u2192 O\u2082 + 4H\u207A + 4e\u207B',
            'H\u207A + e\u207B \u2192 \u00BDH\u2082'
          ],
          answer: 1,
          explanation: 'At the cathode, oxygen is reduced: O\u2082 + 4H\u207A + 4e\u207B \u2192 2H\u2082O. This is the reduction half-reaction. At the anode, hydrogen is oxidized: H\u2082 \u2192 2H\u207A + 2e\u207B.'
        },
        {
          id: 'ch10-ex10-mc',
          type: 'multiple-choice',
          question: 'Which metal can be used as a sacrificial anode to protect an iron structure?',
          choices: ['Copper', 'Silver', 'Magnesium', 'Tin'],
          answer: 2,
          explanation: 'A sacrificial anode must be more active (more negative E\u00B0) than iron. Mg (E\u00B0 = \u22122.37 V) is more active than Fe (E\u00B0 = \u22120.44 V), so Mg will preferentially oxidize. Cu (+0.34 V), Ag (+0.80 V), and Sn (\u22120.14 V) are all less active than Fe.'
        },
        {
          id: 'ch10-ex11-mc',
          type: 'multiple-choice',
          question: 'Which property of lithium-ion batteries makes them preferred over lead-acid batteries in portable electronics?',
          choices: [
            'Lower cost per unit',
            'Ability to work in cold temperatures',
            'Much higher energy density (Wh/kg)',
            'Higher voltage per cell'
          ],
          answer: 2,
          explanation: 'Li-ion batteries have an energy density of ~150\u2013250 Wh/kg, compared to ~30\u201350 Wh/kg for lead-acid. This makes them far lighter for the same energy storage \u2014 critical for phones, laptops, and EVs.'
        },
        {
          question: 'In a lead-acid battery during discharge: (a) Which electrode is the anode? (b) Write the anode and cathode half-reactions. (c) What happens to the concentration of H₂SO₄ as the battery discharges? (d) How does this battery get recharged?',
          hint: 'During discharge, the battery acts as a galvanic cell. Pb is oxidized, PbO\u2082 is reduced. Both form PbSO\u2084 on the surface.',
          solution: '(a) The Pb electrode is the anode (it is oxidized). (b) Anode: Pb + SO\u2084\u00B2\u207B \u2192 PbSO\u2084 + 2e\u207B. Cathode: PbO\u2082 + 4H\u207A + SO\u2084\u00B2\u207B + 2e\u207B \u2192 PbSO\u2084 + 2H\u2082O. (c) H\u2082SO\u2084 concentration decreases, because SO\u2084\u00B2\u207B ions are incorporated into PbSO\u2084 deposits on both electrodes, and H\u207A ions are consumed at the cathode to form water. (d) To recharge, connect to an external DC power source with higher voltage than the battery. This reverses all reactions: PbSO\u2084 at both electrodes is converted back to Pb (anode) and PbO\u2082 (cathode), and H\u2082SO\u2084 is regenerated.'
        },
        {
          question: 'In a hydrogen-oxygen fuel cell using alkaline electrolyte (KOH solution), write the half-reactions at the anode and cathode. How do they differ from the acidic electrolyte version?',
          hint: 'In alkaline solution, the half-reactions involve OH\u207B ions (base) rather than H\u207A ions (acid). H\u2082 is still oxidized at the anode and O\u2082 is still reduced at the cathode.',
          solution: 'Anode (alkaline): H\u2082 + 2OH\u207B \u2192 2H\u2082O + 2e\u207B. Cathode (alkaline): O\u2082 + 2H\u2082O + 4e\u207B \u2192 4OH\u207B. Overall: 2H\u2082 + O\u2082 \u2192 2H\u2082O (same as acidic). Difference: In acidic electrolyte, H\u207A ions carry the current through the electrolyte. In alkaline, OH\u207B ions carry the current (moving in the opposite direction). The overall reaction and energy output are the same; only the mechanism of ion transport differs.'
        }
      ]
    }

  ]
});
