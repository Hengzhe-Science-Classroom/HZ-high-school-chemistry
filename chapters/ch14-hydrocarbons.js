window.CHAPTERS.push({
  id: 'ch14',
  number: 14,
  title: 'Hydrocarbons',
  subtitle: 'Alkanes, Alkenes, Alkynes, and Aromatics',
  sections: [

    // ─────────────────────────────────────────────────────────────
    // SECTION 1: Alkanes (烷烃)
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch14-sec01',
      title: 'Alkanes (烷烃)',
      content: `
<h2>Alkanes — Saturated Hydrocarbons</h2>
<p>
  Alkanes are hydrocarbons containing only C–C single bonds and C–H bonds.
  Because every carbon is bonded to the maximum number of atoms, alkanes are called
  <strong>saturated hydrocarbons</strong> (饱和烃).
</p>

<div class="info-box">
  <strong>General Formula:</strong> \\(C_nH_{2n+2}\\) &nbsp;(n = 1, 2, 3, …)
</div>

<h3>Homologous Series</h3>
<p>Each member of the alkane family differs from the next by one –CH₂– unit (methylene group). This regular pattern defines a <strong>homologous series</strong>; members share similar chemical properties.</p>
<table class="data-table">
  <thead>
    <tr><th>n</th><th>Name</th><th>Formula</th><th>Boiling Point (°C)</th><th>State (25°C)</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Methane 甲烷</td><td>CH₄</td><td>−162</td><td>Gas</td></tr>
    <tr><td>2</td><td>Ethane 乙烷</td><td>C₂H₆</td><td>−89</td><td>Gas</td></tr>
    <tr><td>3</td><td>Propane 丙烷</td><td>C₃H₈</td><td>−42</td><td>Gas</td></tr>
    <tr><td>4</td><td>Butane 丁烷</td><td>C₄H₁₀</td><td>−1</td><td>Gas</td></tr>
    <tr><td>5</td><td>Pentane 戊烷</td><td>C₅H₁₂</td><td>36</td><td>Liquid</td></tr>
    <tr><td>6</td><td>Hexane 己烷</td><td>C₆H₁₄</td><td>69</td><td>Liquid</td></tr>
    <tr><td>8</td><td>Octane 辛烷</td><td>C₈H₁₈</td><td>126</td><td>Liquid</td></tr>
    <tr><td>16+</td><td>Hexadecane+</td><td>C₁₆H₃₄+</td><td>>280</td><td>Solid</td></tr>
  </tbody>
</table>

<h3>Physical Properties</h3>
<ul>
  <li>Colorless, odorless, lighter than water, insoluble in water ("like dissolves like")</li>
  <li>Boiling point and melting point <strong>increase</strong> with chain length</li>
  <li>At room temperature: C₁–C₄ are gases, C₅–C₁₅ are liquids, C₁₆+ are solids</li>
</ul>

<h3>Structural Isomerism (同分异构体)</h3>
<p>Starting from butane (n = 4), the same molecular formula can correspond to different <strong>structural isomers</strong> — compounds with the same molecular formula but different connectivity.</p>
<ul>
  <li><strong>n-butane</strong>: CH₃–CH₂–CH₂–CH₃ (straight chain, bp −1°C)</li>
  <li><strong>Isobutane</strong>: (CH₃)₃CH (branched, bp −12°C)</li>
</ul>
<p>Branched alkanes have <em>lower</em> boiling points than their straight-chain isomers because their compact shape reduces London dispersion forces between molecules.</p>

<h3>IUPAC Naming of Alkanes</h3>
<ol>
  <li>Find the <em>longest carbon chain</em> — this is the parent chain.</li>
  <li>Number from the end nearest a branch to give substituents the lowest locants.</li>
  <li>Name substituents as prefixes: methyl– (–CH₃), ethyl– (–C₂H₅), etc.</li>
  <li>Use locants to indicate substituent positions.</li>
</ol>
<p><strong>Example:</strong> CH₃–CH(CH₃)–CH₂–CH₃ is <em>2-methylbutane</em>: the parent chain is butane (4 C), with a methyl group at carbon 2.</p>

<h3>Chemical Properties — Substitution Reaction (取代反应)</h3>
<p>
  Alkanes are chemically stable, but they react with halogens under ultraviolet (UV) light.
  In a substitution reaction, a hydrogen atom is replaced by a halogen atom:
</p>

<div class="equation-box">
  \\(CH_4 + Cl_2 \\xrightarrow{h\\nu} CH_3Cl + HCl\\)
</div>
<p style="text-align:center">Chloromethane (氯甲烷) + Hydrogen chloride</p>

<p>The reaction can continue in excess Cl₂:</p>
<div class="equation-box">
  \\(CH_3Cl + Cl_2 \\xrightarrow{h\\nu} CH_2Cl_2 + HCl\\)
  <br>\\(CH_2Cl_2 + Cl_2 \\xrightarrow{h\\nu} CHCl_3 + HCl\\)
  <br>\\(CHCl_3 + Cl_2 \\xrightarrow{h\\nu} CCl_4 + HCl\\)
</div>

<div class="info-box warning">
  <strong>Key Feature of Substitution Reactions:</strong>
  One atom or group in the molecule is replaced by another atom or group.
  The halogen atom takes the place of a hydrogen atom — this is why it is called substitution (取代).
</div>

<h3>Combustion</h3>
<div class="equation-box">
  \\(CH_4 + 2O_2 \\xrightarrow{点燃} CO_2 + 2H_2O\\)
</div>
<p>All hydrocarbons burn in oxygen to produce CO₂ and H₂O (complete combustion).</p>
      `,
      visualizations: [
        {
          id: 'viz-ch14-substitution',
          title: 'Substitution Reaction: CH₄ + Cl₂ → CH₃Cl',
          setup: function(container) {
            const viz = new VizEngine(container, {width: 700, height: 380, scale: 50, originX: 350, originY: 190});
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const c = viz.colors;

            // Animation state
            let phase = 0; // 0=initial, 1=UV flash, 2=Cl radical, 3=attack, 4=product
            let t = 0;
            let animating = false;
            let flashAlpha = 0;

            // Positions (in screen coords directly)
            const atomR = 18;

            function drawMolecule(cx, cy, label, color, smallColor, bonds, alpha) {
              ctx.globalAlpha = alpha !== undefined ? alpha : 1;
              // bonds first
              ctx.strokeStyle = '#8b949e';
              ctx.lineWidth = 3;
              bonds.forEach(([x1,y1,x2,y2,order]) => {
                if (order === 2) {
                  const dx = x2-x1, dy = y2-y1;
                  const len = Math.sqrt(dx*dx+dy*dy);
                  const nx = -dy/len*4, ny = dx/len*4;
                  ctx.beginPath(); ctx.moveTo(cx+x1+nx,cy+y1+ny); ctx.lineTo(cx+x2+nx,cy+y2+ny); ctx.stroke();
                  ctx.beginPath(); ctx.moveTo(cx+x1-nx,cy+y1-ny); ctx.lineTo(cx+x2-nx,cy+y2-ny); ctx.stroke();
                } else {
                  ctx.beginPath(); ctx.moveTo(cx+x1,cy+y1); ctx.lineTo(cx+x2,cy+y2); ctx.stroke();
                }
              });
              // center atom
              ctx.fillStyle = color+'44';
              ctx.beginPath(); ctx.arc(cx, cy, atomR+5, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = color;
              ctx.beginPath(); ctx.arc(cx, cy, atomR, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = '#fff';
              ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(label, cx, cy);
              ctx.globalAlpha = 1;
            }

            function drawAtomAt(sx, sy, symbol, color, r, alpha) {
              ctx.globalAlpha = alpha !== undefined ? alpha : 1;
              ctx.fillStyle = color+'44';
              ctx.beginPath(); ctx.arc(sx, sy, r+4, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = color;
              ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = '#fff';
              ctx.font = 'bold 11px sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(symbol, sx, sy);
              ctx.globalAlpha = 1;
            }

            // CH4: center C + 4 H at tetrahedral-ish
            const CH4bonds = [
              [0,0, 0,-32, 1],   // up H
              [0,0, 28,16, 1],   // right-down H
              [0,0,-28,16, 1],   // left-down H
              [0,0, 0, 32, 1],   // down H (will become the reacting H)
            ];

            function draw(ts) {
              ctx.fillStyle = c.bg;
              ctx.fillRect(0,0,W,H);

              // Title
              ctx.fillStyle = c.text;
              ctx.font = '13px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('CH₄ + Cl₂ → CH₃Cl + HCl', W/2, 20);

              // Phase labels
              const phaseLabels = [
                'Initial State: CH₄ and Cl₂ are unreacted',
                'UV light (hν) splits Cl₂ into two Cl• radicals',
                'Cl• radical approaches CH₄',
                'Cl• attacks C–H bond — H is abstracted',
                'Products: CH₃Cl (chloromethane) + HCl'
              ];
              ctx.fillStyle = c.yellow;
              ctx.font = 'bold 12px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(phaseLabels[Math.min(phase, 4)], W/2, H-20);

              // UV flash overlay
              if (flashAlpha > 0) {
                ctx.fillStyle = `rgba(255,240,100,${flashAlpha})`;
                ctx.fillRect(0,0,W,H);
                ctx.fillStyle = `rgba(255,220,0,${flashAlpha})`;
                ctx.font = `bold ${Math.round(30+flashAlpha*10)}px sans-serif`;
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('hν  UV Light', W/2, H/2);
              }

              if (phase === 0) {
                // Show CH4 on left, Cl2 on right, static
                drawMolecule(160, 190, 'C', c.teal, c.blue, CH4bonds);
                drawAtomAt(160, 158, 'H', c.blue, 12);
                drawAtomAt(188, 206, 'H', c.blue, 12);
                drawAtomAt(132, 206, 'H', c.blue, 12);
                drawAtomAt(160, 222, 'H', c.blue, 12);

                // Cl2
                ctx.strokeStyle = '#8b949e'; ctx.lineWidth=3;
                ctx.beginPath(); ctx.moveTo(490,190); ctx.lineTo(540,190); ctx.stroke();
                drawAtomAt(490, 190, 'Cl', c.orange, 18);
                drawAtomAt(540, 190, 'Cl', c.orange, 18);

                // + sign
                ctx.fillStyle = c.white;
                ctx.font = 'bold 24px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('+', 330, 190);

                // Arrow prompt
                ctx.fillStyle = c.text;
                ctx.font = '11px sans-serif';
                ctx.fillText('(stable — no reaction without UV)', 330, 240);

              } else if (phase === 1) {
                // Cl2 breaking apart
                const sep = t * 30;
                drawMolecule(160, 190, 'C', c.teal, c.blue, CH4bonds);
                drawAtomAt(160, 158, 'H', c.blue, 12);
                drawAtomAt(188, 206, 'H', c.blue, 12);
                drawAtomAt(132, 206, 'H', c.blue, 12);
                drawAtomAt(160, 222, 'H', c.blue, 12);

                drawAtomAt(515-sep, 190, 'Cl•', c.orange, 18);
                drawAtomAt(515+sep, 190, 'Cl•', c.orange, 18);

                // lightning bolt symbol
                ctx.fillStyle = c.yellow;
                ctx.font = 'bold 28px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('⚡', 515, 140);

              } else if (phase === 2) {
                // Cl radical moving toward CH4
                const clX = 490 - t * 200;
                drawMolecule(160, 190, 'C', c.teal, c.blue, CH4bonds);
                drawAtomAt(160, 158, 'H', c.blue, 12);
                drawAtomAt(188, 206, 'H', c.blue, 12);
                drawAtomAt(132, 206, 'H', c.blue, 12);
                drawAtomAt(160, 222, 'H', c.blue, 12);

                drawAtomAt(clX, 190, 'Cl•', c.orange, 18);
                drawAtomAt(560, 190, 'Cl•', c.orange, 18, 0.4);

                // arrow
                ctx.strokeStyle = c.orange;
                ctx.lineWidth = 2;
                ctx.setLineDash([5,3]);
                ctx.beginPath(); ctx.moveTo(clX-25, 190); ctx.lineTo(210, 190); ctx.stroke();
                ctx.setLineDash([]);

              } else if (phase === 3) {
                // H being pulled off — transition state
                const hOffset = t * 80;
                drawMolecule(160, 190, 'C', c.teal, c.blue, [
                  [0,0, 0,-32, 1], [0,0, 28,16, 1], [0,0,-28,16, 1]
                ]);
                drawAtomAt(160, 158, 'H', c.blue, 12);
                drawAtomAt(188, 206, 'H', c.blue, 12);
                drawAtomAt(132, 206, 'H', c.blue, 12);
                // H moving right toward Cl
                drawAtomAt(160+hOffset, 222, 'H', c.blue, 12);
                // Cl approaching from right
                drawAtomAt(290-hOffset*0.3, 222, 'Cl•', c.orange, 18);

                ctx.fillStyle = c.red;
                ctx.font = 'bold 10px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('C–H bond breaking', 160, 260);

              } else if (phase >= 4) {
                // Products: CH3Cl on left, HCl on right
                // CH3Cl
                drawMolecule(140, 190, 'C', c.teal, c.blue, [
                  [0,0, 0,-32, 1], [0,0,-28,16, 1], [0,0, 0, 32, 1], [0,0,36,0,1]
                ]);
                drawAtomAt(140, 158, 'H', c.blue, 12);
                drawAtomAt(112, 206, 'H', c.blue, 12);
                drawAtomAt(140, 222, 'H', c.blue, 12);
                drawAtomAt(176, 190, 'Cl', c.orange, 18);

                ctx.fillStyle = c.green;
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('CH₃Cl', 140, 280);
                ctx.fillStyle = c.text;
                ctx.font = '11px sans-serif';
                ctx.fillText('Chloromethane', 140, 298);

                // + sign
                ctx.fillStyle = c.white;
                ctx.font = 'bold 24px sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('+', 330, 190);

                // HCl
                ctx.strokeStyle = '#8b949e'; ctx.lineWidth=3;
                ctx.beginPath(); ctx.moveTo(480,190); ctx.lineTo(520,190); ctx.stroke();
                drawAtomAt(480, 190, 'H', c.blue, 12);
                drawAtomAt(538, 190, 'Cl', c.orange, 18);

                ctx.fillStyle = c.green;
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('HCl', 510, 280);

                // checkmark
                ctx.fillStyle = c.green;
                ctx.font = 'bold 18px sans-serif';
                ctx.fillText('Substitution complete!', W/2, 330);
              }
            }

            function step() {
              if (!animating) return;
              t += 0.02;
              if (t >= 1) { t = 0; phase = Math.min(phase+1, 4); animating = false; }
              draw(t);
              if (animating) requestAnimationFrame(step);
            }

            draw(0);

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:6px;';
            container.appendChild(btnDiv);

            VizEngine.createButton(btnDiv, 'Next Step ▶', () => {
              if (animating) return;
              if (phase >= 4) { phase = 0; t = 0; flashAlpha = 0; draw(0); return; }
              if (phase === 0) {
                // trigger UV flash
                flashAlpha = 0.7;
                let fading = setInterval(() => {
                  flashAlpha -= 0.05;
                  if (flashAlpha <= 0) { flashAlpha = 0; clearInterval(fading); phase = 1; animating = true; requestAnimationFrame(step); }
                  draw(t);
                }, 30);
              } else {
                phase++;
                animating = true;
                requestAnimationFrame(step);
              }
            });
            VizEngine.createButton(btnDiv, 'Reset', () => {
              animating = false; phase = 0; t = 0; flashAlpha = 0; draw(0);
            });
          }
        }
      ],
      exercises: [
        {
          question: 'What is the general molecular formula for alkanes? How many hydrogen atoms does pentane (C₅H₁₂) have — verify using the formula.',
          answer: 'The general formula is CₙH₂ₙ₊₂. For pentane (n=5): H = 2×5+2 = 12. So pentane is C₅H₁₂. Verified.'
        },
        {
          question: 'Methane reacts with Cl₂ under UV light to form four possible chlorinated products. Write the formula for each product.',
          answer: 'CH₃Cl (chloromethane), CH₂Cl₂ (dichloromethane), CHCl₃ (chloroform/trichloromethane), CCl₄ (carbon tetrachloride). Each step replaces one more H with Cl.'
        },
        {
          question: 'Why do alkanes not react with Cl₂ in the dark at room temperature, but react readily under UV light?',
          answer: 'UV light provides the energy needed to break the Cl–Cl bond (bond energy ~243 kJ/mol), generating Cl• radicals. These highly reactive radicals then attack the C–H bonds. In the dark, there is not enough energy to initiate radical formation, so no reaction occurs.'
        },
        {
          question: 'Butane (C₄H₁₀) has two structural isomers. Name them and explain why n-butane has a higher boiling point (−1°C) than isobutane (−12°C), despite having the same molecular formula.',
          answer: 'n-Butane: CH₃–CH₂–CH₂–CH₃ (straight chain). Isobutane: (CH₃)₃CH (branched). n-Butane has a higher boiling point because the straight chain has a larger surface area, enabling stronger London dispersion forces between molecules. The compact, spherical shape of isobutane reduces this surface contact area.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 2: Alkenes (烯烃)
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch14-sec02',
      title: 'Alkenes (烯烃)',
      content: `
<h2>Alkenes — The Carbon–Carbon Double Bond</h2>
<p>
  Alkenes contain at least one C=C double bond. The double bond consists of one
  \\(\\sigma\\)-bond and one \\(\\pi\\)-bond. The \\(\\pi\\)-bond is weaker and more reactive,
  making alkenes much more chemically active than alkanes.
</p>

<div class="info-box">
  <strong>General Formula:</strong> \\(C_nH_{2n}\\) &nbsp;(n ≥ 2)
</div>

<h3>Ethylene (乙烯) — The Simplest Alkene</h3>
<p>
  Ethylene (CH₂=CH₂) is a planar molecule. All 6 atoms lie in the same plane.
  Bond angle: ~120° (sp² hybridization).
</p>

<h3>Addition Reactions (加成反应)</h3>
<p>
  In an addition reaction, the \\(\\pi\\)-bond breaks and two atoms or groups add
  across the double bond, forming a single bond. No atoms are lost — all atoms
  end up in the product.
</p>

<div class="equation-box">
  <strong>Hydrogenation (氢化):</strong><br>
  \\(CH_2=CH_2 + H_2 \\xrightarrow{Ni, \\Delta} CH_3-CH_3\\)<br><br>
  <strong>Halogenation (卤化):</strong><br>
  \\(CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br\\)&nbsp;&nbsp;&nbsp;(decolorizes bromine water!)<br><br>
  <strong>Hydrohalogenation (氢卤化):</strong><br>
  \\(CH_2=CH_2 + HCl \\rightarrow CH_3CH_2Cl\\)<br><br>
  <strong>Hydration (水合):</strong><br>
  \\(CH_2=CH_2 + H_2O \\xrightarrow{H^+, \\Delta} CH_3CH_2OH\\)&nbsp;&nbsp;&nbsp;(ethanol!)
</div>

<h3>Markovnikov's Rule (马氏规则)</h3>
<p>
  When HX adds to an <em>asymmetric</em> alkene, the hydrogen adds to the carbon bearing <em>more</em> hydrogens
  (the less-substituted carbon), and X adds to the more-substituted carbon. This follows from
  carbocation stability.
</p>
<p>
  <strong>Example:</strong> CH₃–CH=CH₂ + HBr → <strong>CH₃–CHBr–CH₃</strong> (major product, 2-bromopropane),
  not CH₃–CH₂–CH₂Br.
</p>

<div class="info-box warning">
  <strong>Bromine Water Test:</strong> Alkenes rapidly decolorize bromine water (Br₂/H₂O).
  Alkanes do NOT decolorize bromine water. This test distinguishes alkenes from alkanes.
  Alkenes also decolorize acidified KMnO₄ (purple → colorless).
</div>

<h3>Polymerization (聚合反应)</h3>
<p>
  Under high temperature, pressure, and catalyst, many ethylene molecules join together
  (addition polymerization) to form polyethylene (聚乙烯, PE):
</p>
<div class="equation-box">
  \\(nCH_2=CH_2 \\xrightarrow{催化剂} [-CH_2-CH_2-]_n\\)
</div>
<p>Polyethylene is one of the world's most common plastics (plastic bags, bottles, etc.)</p>

<h3>Combustion of Ethylene</h3>
<div class="equation-box">
  \\(C_2H_4 + 3O_2 \\xrightarrow{点燃} 2CO_2 + 2H_2O\\)
</div>
      `,
      visualizations: [
        {
          id: 'viz-ch14-addition',
          title: 'Addition Reaction: C₂H₄ + Br₂',
          setup: function(container) {
            const viz = new VizEngine(container, {width: 700, height: 360, scale: 45, originX: 350, originY: 180});
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const c = viz.colors;

            let phase = 0; // 0=C2H4 alone, 1=Br2 approaching, 2=pi bond breaks, 3=product
            let anim = false;
            let t = 0;

            function drawEthylene(cx, cy, alpha, showPi, piAlpha) {
              ctx.globalAlpha = alpha || 1;
              // C=C
              ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 3;
              // sigma bond
              ctx.beginPath(); ctx.moveTo(cx-30, cy); ctx.lineTo(cx+30, cy); ctx.stroke();
              // pi bond representation
              if (showPi) {
                ctx.strokeStyle = c.purple;
                ctx.globalAlpha = (piAlpha !== undefined ? piAlpha : 1) * (alpha || 1);
                ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(cx-28,cy-7); ctx.lineTo(cx+28,cy-7); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(cx-28,cy+7); ctx.lineTo(cx+28,cy+7); ctx.stroke();
                ctx.globalAlpha = alpha || 1;
              }
              // H atoms
              ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 2;
              [[cx-30, cy, cx-52, cy-22],[cx-30, cy, cx-52, cy+22],
               [cx+30, cy, cx+52, cy-22],[cx+30, cy, cx+52, cy+22]].forEach(([x1,y1,x2,y2]) => {
                ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
              });
              // C atoms
              [cx-30, cx+30].forEach(x => {
                ctx.fillStyle = c.teal+'44'; ctx.beginPath(); ctx.arc(x,cy,18,0,Math.PI*2); ctx.fill();
                ctx.fillStyle = c.teal; ctx.beginPath(); ctx.arc(x,cy,14,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('C',x,cy);
              });
              // H atoms
              [[cx-52,cy-22],[cx-52,cy+22],[cx+52,cy-22],[cx+52,cy+22]].forEach(([x,y]) => {
                ctx.fillStyle=c.blue+'44'; ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2); ctx.fill();
                ctx.fillStyle=c.blue; ctx.beginPath(); ctx.arc(x,y,7,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('H',x,y);
              });
              ctx.globalAlpha = 1;
            }

            function drawBr(x, y, alpha) {
              ctx.globalAlpha = alpha || 1;
              ctx.fillStyle = c.red+'44'; ctx.beginPath(); ctx.arc(x,y,16,0,Math.PI*2); ctx.fill();
              ctx.fillStyle = c.red; ctx.beginPath(); ctx.arc(x,y,12,0,Math.PI*2); ctx.fill();
              ctx.fillStyle='#fff'; ctx.font='bold 10px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
              ctx.fillText('Br',x,y);
              ctx.globalAlpha = 1;
            }

            function draw() {
              ctx.fillStyle = c.bg; ctx.fillRect(0,0,W,H);

              ctx.fillStyle = c.text; ctx.font='13px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Addition Reaction: C₂H₄ + Br₂ → BrCH₂–CH₂Br', W/2, 22);

              const phaseDesc = [
                'Ethylene has a C=C double bond (σ + π). The π bond (purple) is reactive.',
                'Br₂ molecule approaches the electron-rich π bond',
                'The π bond breaks — one Br adds to each carbon',
                'Product: 1,2-dibromoethane (BrCH₂–CH₂Br) — no double bond!'
              ];
              ctx.fillStyle = c.yellow; ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
              ctx.fillText(phaseDesc[Math.min(phase,3)], W/2, H-15);

              if (phase === 0) {
                drawEthylene(350, 175, 1, true, 1);
                ctx.fillStyle = c.purple; ctx.font='11px sans-serif'; ctx.textAlign='center';
                ctx.fillText('π bond (reactive!)', 350, 230);

              } else if (phase === 1) {
                drawEthylene(270, 175, 1, true, 1);
                // Br2 approaching from right
                const brX = 520 - t*80;
                ctx.strokeStyle = '#8b949e'; ctx.lineWidth=3;
                ctx.beginPath(); ctx.moveTo(brX,175); ctx.lineTo(brX+32,175); ctx.stroke();
                drawBr(brX, 175);
                drawBr(brX+32, 175);
                // dashed arrow
                ctx.strokeStyle = c.red; ctx.lineWidth=1.5;
                ctx.setLineDash([4,3]);
                ctx.beginPath(); ctx.moveTo(brX-5,175); ctx.lineTo(330,175); ctx.stroke();
                ctx.setLineDash([]);

              } else if (phase === 2) {
                drawEthylene(270, 175, 1, true, 1-t);
                // Br atoms splitting and moving to carbons
                const brROffset = t * 50;
                drawBr(450 - brROffset*0.5, 175 - brROffset*0.3); // Br moves to right C
                drawBr(540 - brROffset*2, 175 + brROffset*0.3);   // 2nd Br moves to left C
                ctx.fillStyle = c.red; ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
                ctx.fillText('π bond breaking...', 350, 260);

              } else if (phase >= 3) {
                // Product: BrCH2-CH2Br
                const px = 350, py = 175;
                // C-C bond
                ctx.strokeStyle = '#8b949e'; ctx.lineWidth=3;
                ctx.beginPath(); ctx.moveTo(px-30,py); ctx.lineTo(px+30,py); ctx.stroke();
                // H bonds
                [[px-30,py,px-52,py-22],[px-30,py,px-52,py+22],
                 [px+30,py,px+52,py-22],[px+30,py,px+52,py+22]].forEach(([x1,y1,x2,y2]) => {
                  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
                });
                // Br bonds
                ctx.strokeStyle='#8b949e';
                ctx.beginPath(); ctx.moveTo(px-30,py); ctx.lineTo(px-30,py-50); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(px+30,py); ctx.lineTo(px+30,py-50); ctx.stroke();
                // Atoms
                [px-30,px+30].forEach(x => {
                  ctx.fillStyle=c.teal+'44'; ctx.beginPath(); ctx.arc(x,py,18,0,Math.PI*2); ctx.fill();
                  ctx.fillStyle=c.teal; ctx.beginPath(); ctx.arc(x,py,14,0,Math.PI*2); ctx.fill();
                  ctx.fillStyle='#fff'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                  ctx.fillText('C',x,py);
                });
                [[px-52,py-22],[px-52,py+22],[px+52,py-22],[px+52,py+22]].forEach(([x,y]) => {
                  ctx.fillStyle=c.blue+'44'; ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2); ctx.fill();
                  ctx.fillStyle=c.blue; ctx.beginPath(); ctx.arc(x,y,7,0,Math.PI*2); ctx.fill();
                  ctx.fillStyle='#fff'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                  ctx.fillText('H',x,y);
                });
                drawBr(px-30, py-50);
                drawBr(px+30, py-50);
                ctx.fillStyle = c.green; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
                ctx.fillText('BrCH₂–CH₂Br', px, 270);
                ctx.fillStyle = c.text; ctx.font='11px sans-serif';
                ctx.fillText('1,2-dibromoethane (no double bond)', px, 290);
              }
            }

            draw();

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:6px;';
            container.appendChild(btnDiv);

            VizEngine.createButton(btnDiv, 'Next Step ▶', () => {
              if (anim) return;
              if (phase >= 3) { phase = 0; t = 0; draw(); return; }
              anim = true; t = 0;
              const run = () => {
                t += 0.025;
                if (t >= 1) { t = 1; phase++; anim = false; draw(); return; }
                draw();
                requestAnimationFrame(run);
              };
              requestAnimationFrame(run);
            });
            VizEngine.createButton(btnDiv, 'Reset', () => { anim=false; phase=0; t=0; draw(); });
          }
        },
        {
          id: 'viz-ch14-polymer',
          title: 'Polymerization: Ethylene → Polyethylene',
          setup: function(container) {
            const viz = new VizEngine(container, {width: 700, height: 320, scale: 40, originX: 350, originY: 160});
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const c = viz.colors;

            let chainLen = 1;
            let animProgress = 0;
            let animating = false;

            function drawMonomer(cx, cy, alpha, showDouble) {
              ctx.globalAlpha = alpha || 1;
              ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 2.5;
              ctx.beginPath(); ctx.moveTo(cx-22,cy); ctx.lineTo(cx+22,cy); ctx.stroke();
              if (showDouble) {
                ctx.strokeStyle = c.purple; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.moveTo(cx-20,cy-5); ctx.lineTo(cx+20,cy-5); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(cx-20,cy+5); ctx.lineTo(cx+20,cy+5); ctx.stroke();
              }
              [[cx-22,cy,cx-38,cy-18],[cx-22,cy,cx-38,cy+18],
               [cx+22,cy,cx+38,cy-18],[cx+22,cy,cx+38,cy+18]].forEach(([x1,y1,x2,y2]) => {
                ctx.strokeStyle='#8b949e'; ctx.lineWidth=2;
                ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
              });
              [cx-22,cx+22].forEach(x => {
                ctx.fillStyle=c.teal+'33'; ctx.beginPath(); ctx.arc(x,cy,13,0,Math.PI*2); ctx.fill();
                ctx.fillStyle=c.teal; ctx.beginPath(); ctx.arc(x,cy,10,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 8px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('C',x,cy);
              });
              [[cx-38,cy-18],[cx-38,cy+18],[cx+38,cy-18],[cx+38,cy+18]].forEach(([x,y]) => {
                ctx.fillStyle=c.blue+'33'; ctx.beginPath(); ctx.arc(x,y,8,0,Math.PI*2); ctx.fill();
                ctx.fillStyle=c.blue; ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 7px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('H',x,y);
              });
              ctx.globalAlpha = 1;
            }

            function draw() {
              ctx.fillStyle = c.bg; ctx.fillRect(0,0,W,H);
              ctx.fillStyle=c.text; ctx.font='13px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Ethylene Polymerization: n CH₂=CH₂ → [–CH₂–CH₂–]ₙ', W/2, 22);

              // Draw chain
              const unitW = 80;
              const startX = W/2 - (chainLen-1)*unitW/2;
              const chainY = 140;

              for (let i = 0; i < chainLen; i++) {
                const cx = startX + i * unitW;
                const alpha = (i === chainLen-1 && animating) ? animProgress : 1;
                drawMonomer(cx, chainY, alpha, false);
                if (i > 0) {
                  ctx.globalAlpha = (i === chainLen-1 && animating) ? animProgress : 1;
                  ctx.strokeStyle = c.green; ctx.lineWidth = 3;
                  ctx.beginPath(); ctx.moveTo(cx-unitW/2+38+22, chainY); ctx.lineTo(cx-22, chainY); ctx.stroke();
                  ctx.globalAlpha = 1;
                }
              }

              // Incoming monomer (if not max)
              if (chainLen < 5 && !animating) {
                const nextX = startX + chainLen * unitW + 30;
                if (nextX + 60 < W) {
                  drawMonomer(nextX, chainY, 0.4, true);
                  ctx.strokeStyle = c.purple; ctx.lineWidth = 1.5;
                  ctx.setLineDash([4,3]);
                  ctx.beginPath(); ctx.moveTo(nextX-20, chainY); ctx.lineTo(startX+chainLen*unitW-20, chainY); ctx.stroke();
                  ctx.setLineDash([]);
                }
              }

              // Chain length label
              ctx.fillStyle = c.green; ctx.font = 'bold 13px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Chain length: n = ' + chainLen, W/2, 220);

              if (chainLen >= 5) {
                ctx.fillStyle = c.yellow; ctx.font = 'bold 12px sans-serif';
                ctx.fillText('Long chain = POLYETHYLENE (plastic!)', W/2, 245);
              }

              // Reaction equation
              ctx.fillStyle = c.text; ctx.font='11px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Each addition: π bond breaks → new C–C single bond forms', W/2, 280);
            }

            draw();

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:6px;';
            container.appendChild(btnDiv);

            VizEngine.createButton(btnDiv, 'Add Monomer ▶', () => {
              if (animating || chainLen >= 5) return;
              animating = true; animProgress = 0;
              const run = () => {
                animProgress += 0.04;
                if (animProgress >= 1) { animProgress = 1; chainLen++; animating = false; draw(); return; }
                draw();
                requestAnimationFrame(run);
              };
              requestAnimationFrame(run);
            });
            VizEngine.createButton(btnDiv, 'Reset', () => { animating=false; chainLen=1; animProgress=0; draw(); });
          }
        }
      ],
      exercises: [
        {
          question: 'Write the addition reaction equation for ethylene reacting with HCl. What is the product?',
          answer: 'CH₂=CH₂ + HCl → CH₃CH₂Cl (chloroethane). The H adds to one carbon and Cl adds to the other, breaking the π bond and forming a single C–C bond.'
        },
        {
          question: 'How would you use a simple experiment to distinguish between hexane (C₆H₁₄) and hexene (C₆H₁₂)?',
          answer: 'Add bromine water to each sample. Hexene (an alkene) will rapidly decolorize the orange/brown bromine water via addition reaction (C=C + Br₂ → CBr–CBr). Hexane (an alkane) will not react with bromine water and the color will remain.'
        },
        {
          question: 'What type of reaction is ethylene polymerization? Why is it different from a typical addition reaction?',
          answer: 'Ethylene polymerization is an addition polymerization (加聚反应). Like a regular addition reaction, the π bond of each C=C breaks and no atoms are lost. The difference is that n monomers link together into one macromolecule, rather than just two small molecules reacting.'
        },
        {
          question: 'Apply Markovnikov\'s rule: what is the major product when propene (CH₃–CH=CH₂) reacts with HBr?',
          answer: '2-bromopropane (CH₃–CHBr–CH₃). Markovnikov\'s rule states that the H adds to the less-substituted carbon (the terminal CH₂), and Br adds to the more-substituted carbon (the middle CH). The more-substituted carbocation intermediate (secondary) is more stable than the primary alternative.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 3: Alkynes (炔烃)
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch14-sec03',
      title: 'Alkynes (炔烃)',
      content: `
<h2>Alkynes — The Carbon–Carbon Triple Bond</h2>
<p>
  Alkynes contain a C≡C triple bond (one \\(\\sigma\\)-bond and two \\(\\pi\\)-bonds).
  The simplest alkyne is acetylene (乙炔, C₂H₂), a linear molecule.
</p>

<div class="info-box">
  <strong>General Formula:</strong> \\(C_nH_{2n-2}\\) &nbsp;(n ≥ 2)
</div>

<h3>Acetylene (乙炔) — Structure and Properties</h3>
<p>
  Acetylene is linear: H–C≡C–H, with all four atoms collinear (180° bond angle, sp hybridization).
  It is a colorless, slightly soluble gas. Industrially, it is made from calcium carbide (电石):
</p>
<div class="equation-box">
  \\(CaC_2 + 2H_2O \\rightarrow Ca(OH)_2 + C_2H_2\\uparrow\\)
</div>

<h3>Chemical Properties</h3>
<p>
  Like alkenes, alkynes are unsaturated and undergo <strong>addition reactions</strong>.
  However, the triple bond allows for two rounds of addition:
</p>

<div class="equation-box">
  <strong>First addition (one π bond breaks):</strong><br>
  \\(CH \\equiv CH + H_2 \\xrightarrow{Pd} CH_2=CH_2\\) (ethylene)<br><br>
  <strong>Second addition (second π bond breaks):</strong><br>
  \\(CH_2=CH_2 + H_2 \\xrightarrow{Ni} CH_3-CH_3\\) (ethane)<br><br>
  <strong>With Br₂ (two steps):</strong><br>
  \\(CH\\equiv CH + Br_2 \\rightarrow CHBr=CHBr\\)<br>
  \\(CHBr=CHBr + Br_2 \\rightarrow CHBr_2-CHBr_2\\)
</div>

<div class="info-box">
  <strong>Bromine Water Test:</strong> Acetylene also decolorizes bromine water, confirming unsaturation (C≡C behaves like C=C in this test).
</div>

<h3>Distinguishing Terminal Alkynes</h3>
<p>
  Terminal alkynes (with H directly on the triple-bonded carbon, like HC≡CH) have a slightly acidic C–H bond.
  They react with ammoniacal silver nitrate solution (AgNO₃/NH₃):
</p>
<div class="equation-box">
  \\(HC \\equiv CH + 2[Ag(NH_3)_2]^+ \\rightarrow AgC \\equiv CAg \\downarrow + 2NH_4^+\\)
</div>
<p>
  A white precipitate of silver acetylide (银乙炔化物) forms. This reaction is positive for terminal alkynes
  but negative for alkenes — so it can distinguish the two types of unsaturated compound.
</p>

<h3>Combustion</h3>
<div class="equation-box">
  \\(2C_2H_2 + 5O_2 \\xrightarrow{点燃} 4CO_2 + 2H_2O\\)
</div>
<p>
  Acetylene burns with a very hot flame (~3000°C in oxygen). This is used in
  <strong>oxy-acetylene welding</strong> (氧炔焰焊接).
</p>

<h3>Comparing Alkanes, Alkenes, and Alkynes</h3>
<table class="data-table">
  <thead>
    <tr><th>Property</th><th>Alkane (烷烃)</th><th>Alkene (烯烃)</th><th>Alkyne (炔烃)</th></tr>
  </thead>
  <tbody>
    <tr><td>Formula</td><td>CₙH₂ₙ₊₂</td><td>CₙH₂ₙ</td><td>CₙH₂ₙ₋₂</td></tr>
    <tr><td>Bond type</td><td>C–C, C–H only</td><td>One C=C</td><td>One C≡C</td></tr>
    <tr><td>Saturation</td><td>Saturated</td><td>Unsaturated</td><td>Unsaturated</td></tr>
    <tr><td>Main reaction</td><td>Substitution</td><td>Addition</td><td>Addition (×2)</td></tr>
    <tr><td>Bromine water</td><td>No reaction</td><td>Decolorizes</td><td>Decolorizes</td></tr>
    <tr><td>KMnO₄ (acidified)</td><td>No reaction</td><td>Decolorizes</td><td>Decolorizes</td></tr>
    <tr><td>AgNO₃/NH₃</td><td>No reaction</td><td>No reaction</td><td>White ppt (terminal alkynes)</td></tr>
  </tbody>
</table>
      `,
      visualizations: [],
      exercises: [
        {
          question: 'Write the molecular formula and structure of the simplest alkyne. What geometry does the molecule have?',
          answer: 'Acetylene: C₂H₂, structure H–C≡C–H. The molecule is linear — all four atoms are collinear, with bond angles of 180°. This is due to sp hybridization of the carbon atoms.'
        },
        {
          question: 'Acetylene reacts with excess HCl. Write the two-step addition reaction and name both products.',
          answer: 'Step 1: CH≡CH + HCl → CH₂=CHCl (vinyl chloride / chloroethylene). Step 2: CH₂=CHCl + HCl → CH₃CHCl₂ (1,1-dichloroethane). The first HCl adds across the triple bond (one π bond breaks); the second HCl adds across the remaining double bond.'
        },
        {
          question: 'Acetylene burns in air to produce a yellow-orange flame, while in pure oxygen the flame is extremely hot and blue. What industrial process uses this property?',
          answer: 'Oxy-acetylene welding (氧炔焊接). The oxy-acetylene flame reaches ~3000°C, hot enough to melt and cut metals. It is widely used in metalworking, welding, and cutting steel.'
        },
        {
          question: 'How can you use AgNO₃/NH₃ solution to distinguish propyne (HC≡C–CH₃) from propene (CH₃–CH=CH₂)? Describe the expected results.',
          answer: 'Add ammoniacal silver nitrate (AgNO₃/NH₃) to each compound. Propyne is a terminal alkyne — its terminal C–H bond is acidic enough to react: HC≡C–CH₃ + Ag(NH₃)₂⁺ → AgC≡C–CH₃↓ (white precipitate of silver propynylide). Propene is an alkene — it has no acidic C–H bond and does not react with AgNO₃/NH₃, so no precipitate forms.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 4: Benzene and Aromatics (苯及芳烃)
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch14-sec04',
      title: 'Benzene and Aromatics (苯及芳烃)',
      content: `
<h2>Benzene — A Special Ring Structure</h2>
<p>
  Benzene (苯, C₆H₆) has a regular hexagonal ring of 6 carbon atoms.
  Its structure puzzled chemists for decades. In 1865, August Kekulé proposed
  alternating single and double bonds — the famous <strong>Kekulé structure</strong>.
</p>

<h3>Kekulé Structure vs Reality</h3>
<p>
  The Kekulé structures (两种可能的Kekulé结构) predict two different types of C–C bonds
  in the ring. However, experiments show <em>all six C–C bonds in benzene are identical</em>:
</p>
<ul>
  <li>Bond length: 139 pm (between single 154 pm and double 134 pm)</li>
  <li>All 6 bonds are equivalent — no alternation!</li>
  <li>Extra stability: resonance energy ≈ 150 kJ/mol (aromatic stabilization)</li>
</ul>

<div class="info-box">
  <strong>Modern Picture:</strong> The 6 \\(\\pi\\) electrons are <em>delocalized</em> equally
  around the entire ring (大π键). This is shown by a circle inside the hexagon.
  Delocalization makes benzene <em>unusually stable</em> (aromatic stability / 芳香性).
</div>

<h3>Physical Properties of Benzene</h3>
<ul>
  <li>Colorless liquid with sweet odor, boiling point 80°C</li>
  <li>Insoluble in water; density 0.879 g/mL (less than water)</li>
  <li>Highly flammable; <strong>carcinogenic</strong> (致癌) — handle with care!</li>
  <li>Good solvent for organic substances</li>
</ul>

<h3>Chemical Properties — Substitution (Not Addition!)</h3>
<p>
  Despite having unsaturation equivalent to three double bonds, benzene
  <em>prefers substitution over addition</em> because addition would destroy the
  delocalized \\(\\pi\\) system (and its associated stability).
</p>

<div class="equation-box">
  <strong>Nitration (硝化反应):</strong><br>
  \\(C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4, 50{-}60°C} C_6H_5NO_2 + H_2O\\)<br>
  (benzene → nitrobenzene, 硝基苯)<br><br>
  <strong>Halogenation (卤代反应):</strong><br>
  \\(C_6H_6 + Cl_2 \\xrightarrow{FeCl_3} C_6H_5Cl + HCl\\)<br>
  (benzene → chlorobenzene, 氯苯)<br><br>
  <strong>Sulfonation (磺化反应):</strong><br>
  \\(C_6H_6 + H_2SO_4(fuming) \\xrightarrow{\\Delta} C_6H_5SO_3H + H_2O\\)
</div>

<div class="info-box warning">
  <strong>Compare with Alkenes:</strong> Alkenes undergo <em>addition</em> with Br₂ and decolorize
  bromine water. Benzene does NOT decolorize bromine water (no addition reaction)
  — it only reacts with Br₂ in the presence of a Lewis acid catalyst (FeBr₃).
</div>

<h3>Common Aromatic Compounds</h3>
<ul>
  <li><strong>Toluene</strong> (methylbenzene): solvent, precursor to TNT</li>
  <li><strong>Xylene</strong> (dimethylbenzene): three isomers (ortho, meta, para); solvent</li>
  <li><strong>Styrene</strong>: C₆H₅–CH=CH₂; polymerizes to polystyrene</li>
  <li><strong>Naphthalene</strong>: two fused rings; moth repellent</li>
</ul>

<h3>Combustion</h3>
<div class="equation-box">
  \\(2C_6H_6 + 15O_2 \\xrightarrow{点燃} 12CO_2 + 6H_2O\\)
</div>
<p>
  Benzene burns with a very sooty flame (多炭黑) because of its high carbon-to-hydrogen ratio.
</p>
      `,
      visualizations: [
        {
          id: 'viz-ch14-benzene',
          title: 'Benzene Structure: Kekulé vs Delocalized',
          setup: function(container) {
            const viz = new VizEngine(container, {width: 700, height: 360, scale: 40, originX: 350, originY: 180});
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const c = viz.colors;

            let mode = 'kekule'; // 'kekule' or 'delocalized'
            let kekuleBond = 0; // oscillation for kekule (0 or 1)
            let animId = null;
            let lastToggle = 0;

            const R = 70; // hex ring radius (screen pixels)
            const cx = W/2, cy = H/2;

            function hexPoints() {
              const pts = [];
              for (let i = 0; i < 6; i++) {
                const a = Math.PI/6 + i * Math.PI/3;
                pts.push([cx + R*Math.cos(a), cy + R*Math.sin(a)]);
              }
              return pts;
            }

            function drawHexRing(pts, bondPattern) {
              // Draw C-C bonds
              for (let i = 0; i < 6; i++) {
                const [x1,y1] = pts[i];
                const [x2,y2] = pts[(i+1)%6];
                const isDouble = bondPattern[i];

                ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();

                if (isDouble) {
                  // Draw inner parallel line for double bond
                  const mx = (x1+x2)/2 - cx, my = (y1+y2)/2 - cy;
                  const len = Math.sqrt(mx*mx+my*my);
                  const nx = mx/len*8, ny = my/len*8;
                  const dx = x2-x1, dy = y2-y1, blen = Math.sqrt(dx*dx+dy*dy);
                  const tx = dx/blen, ty = dy/blen;
                  const shrink = 8;
                  ctx.strokeStyle = c.purple; ctx.lineWidth = 2.5;
                  ctx.beginPath();
                  ctx.moveTo(x1+nx+tx*shrink, y1+ny+ty*shrink);
                  ctx.lineTo(x2+nx-tx*shrink, y2+ny-ty*shrink);
                  ctx.stroke();
                }
              }
            }

            function drawDelocalizedRing(pts) {
              // Draw all C-C bonds same
              ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 3;
              for (let i = 0; i < 6; i++) {
                const [x1,y1] = pts[i];
                const [x2,y2] = pts[(i+1)%6];
                ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
              }
              // Draw delocalized circle
              ctx.strokeStyle = c.purple; ctx.lineWidth = 2.5;
              ctx.beginPath(); ctx.arc(cx, cy, R*0.58, 0, Math.PI*2); ctx.stroke();
              // Glow
              ctx.fillStyle = c.purple+'15';
              ctx.beginPath(); ctx.arc(cx, cy, R*0.58, 0, Math.PI*2); ctx.fill();
            }

            function drawCarbons(pts) {
              pts.forEach(([x,y]) => {
                ctx.fillStyle = c.teal+'44'; ctx.beginPath(); ctx.arc(x,y,14,0,Math.PI*2); ctx.fill();
                ctx.fillStyle = c.teal; ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('C',x,y);
              });
              // H atoms outside
              pts.forEach(([x,y]) => {
                const dx = x-cx, dy = y-cy;
                const len = Math.sqrt(dx*dx+dy*dy);
                const hx = x + dx/len*28, hy = y + dy/len*28;
                ctx.strokeStyle='#8b949e'; ctx.lineWidth=1.5;
                ctx.beginPath(); ctx.moveTo(x+dx/len*10, y+dy/len*10); ctx.lineTo(hx, hy); ctx.stroke();
                ctx.fillStyle=c.blue+'44'; ctx.beginPath(); ctx.arc(hx,hy,8,0,Math.PI*2); ctx.fill();
                ctx.fillStyle=c.blue; ctx.beginPath(); ctx.arc(hx,hy,5,0,Math.PI*2); ctx.fill();
                ctx.fillStyle='#fff'; ctx.font='bold 7px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
                ctx.fillText('H',hx,hy);
              });
            }

            function draw(ts) {
              ctx.fillStyle = c.bg; ctx.fillRect(0,0,W,H);
              ctx.fillStyle=c.text; ctx.font='13px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Benzene Structure: C₆H₆', W/2, 22);

              const pts = hexPoints();

              if (mode === 'kekule') {
                // Oscillate between two Kekulé structures
                if (ts - lastToggle > 800) { kekuleBond = 1 - kekuleBond; lastToggle = ts; }
                const bp0 = [1,0,1,0,1,0]; // double bonds at 0,2,4
                const bp1 = [0,1,0,1,0,1]; // double bonds at 1,3,5
                drawHexRing(pts, kekuleBond === 0 ? bp0 : bp1);
                drawCarbons(pts);
                ctx.fillStyle = c.yellow; ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
                ctx.fillText('Kekulé structure: alternating double bonds oscillate!', W/2, H-40);
                ctx.fillStyle = c.text; ctx.font='11px sans-serif';
                ctx.fillText('Problem: all C–C bonds are actually identical in real benzene', W/2, H-20);

              } else {
                drawDelocalizedRing(pts);
                drawCarbons(pts);
                ctx.fillStyle = c.purple; ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
                ctx.fillText('Delocalized model: 6 π electrons spread equally around ring', W/2, H-40);
                ctx.fillStyle = c.green; ctx.font='11px sans-serif';
                ctx.fillText('All C–C bond lengths are equal (139 pm) — verified by X-ray!', W/2, H-20);
              }

              // Mode label
              ctx.fillStyle = mode === 'kekule' ? c.orange : c.purple;
              ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
              ctx.fillText(mode === 'kekule' ? 'Kekulé Model' : 'Delocalized (Modern) Model', W/2, H-65);
            }

            function loop(ts) {
              draw(ts);
              animId = requestAnimationFrame(loop);
            }
            lastToggle = 0;
            animId = requestAnimationFrame(loop);

            const btnDiv = document.createElement('div');
            btnDiv.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:6px;';
            container.appendChild(btnDiv);

            VizEngine.createButton(btnDiv, 'Switch Model', () => {
              mode = mode === 'kekule' ? 'delocalized' : 'kekule';
            });
          }
        }
      ],
      exercises: [
        {
          question: 'Benzene does not decolorize bromine water, but it does react with Br₂ in the presence of FeBr₃ catalyst. What type of reaction is this, and why is it different from what alkenes do?',
          answer: 'With FeBr₃, benzene undergoes a substitution reaction: C₆H₆ + Br₂ → C₆H₅Br + HBr. A hydrogen on the ring is replaced by Br. Unlike alkenes, benzene does not undergo addition with Br₂ because that would destroy the delocalized π system (芳香性). Benzene prefers substitution to preserve its aromatic stability.'
        },
        {
          question: 'The C–C bond length in benzene is 139 pm, between a single bond (154 pm) and double bond (134 pm). What does this tell us about benzene\'s structure?',
          answer: 'This shows that benzene does not have alternating single and double bonds (as the Kekulé structure suggests). Instead, all six C–C bonds are equivalent due to delocalization of the 6 π electrons over the whole ring. The bond order is approximately 1.5 (between 1 and 2), consistent with an intermediate bond length.'
        },
        {
          question: 'Write the balanced equation for the nitration of benzene. What is the product, and what conditions are required?',
          answer: 'C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O. Conditions: concentrated H₂SO₄ as catalyst, temperature 50–60°C. Product: nitrobenzene (硝基苯), a pale yellow liquid with almond-like odor. This is a substitution reaction where –NO₂ replaces –H.'
        },
        {
          question: 'Why does benzene prefer electrophilic substitution over addition reactions?',
          answer: 'The delocalized π system of benzene confers approximately 150 kJ/mol extra stability (aromatic stabilization / 芳香性). Addition reactions would destroy this delocalization, costing this stabilization energy. Substitution reactions replace one H with another group while preserving the aromatic ring, so they are strongly favored. This is why benzene does not decolorize bromine water at room temperature.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    // SECTION 5: Petroleum and Natural Gas (石油与天然气)
    // ─────────────────────────────────────────────────────────────
    {
      id: 'ch14-sec05',
      title: 'Petroleum and Natural Gas (石油与天然气)',
      content: `
<h2>Petroleum — A Mixture of Hydrocarbons</h2>
<p>
  Crude oil (原油) is not a pure substance — it is a complex mixture of hundreds of
  different hydrocarbons, primarily alkanes, cycloalkanes, and aromatic hydrocarbons.
  The hydrocarbons are separated and upgraded through three key processes.
</p>

<h3>1. Fractional Distillation (分馏)</h3>
<p>
  Crude oil is heated and the vapors are separated in a distillation column (分馏塔)
  based on boiling point differences. Lower fractions (smaller molecules, lower boiling points)
  exit near the top; heavier fractions exit at the bottom.
</p>

<table class="data-table">
  <thead>
    <tr><th>Fraction</th><th>Carbon Range</th><th>Boiling Point (°C)</th><th>Main Use</th></tr>
  </thead>
  <tbody>
    <tr><td>Petroleum gas (石油气)</td><td>C₁–C₄</td><td>below 40</td><td>Fuel (LPG)</td></tr>
    <tr><td>Gasoline (汽油)</td><td>C₅–C₁₀</td><td>40–180</td><td>Car fuel</td></tr>
    <tr><td>Kerosene (煤油)</td><td>C₁₀–C₁₆</td><td>180–250</td><td>Jet fuel, lamps</td></tr>
    <tr><td>Diesel (柴油)</td><td>C₁₅–C₂₀</td><td>250–350</td><td>Truck/ship fuel</td></tr>
    <tr><td>Lubricants (润滑油)</td><td>C₂₀–C₃₅</td><td>350–500</td><td>Lubrication</td></tr>
    <tr><td>Heavy fuel oil / Asphalt</td><td>C₃₅+</td><td>>500</td><td>Road paving</td></tr>
  </tbody>
</table>

<h3>2. Cracking (裂化)</h3>
<p>
  Cracking breaks large, less-useful heavy oil molecules into smaller, more valuable ones
  (especially gasoline-range molecules). Demand for petrol and ethylene (for plastics)
  far exceeds the natural supply from distillation.
</p>
<ul>
  <li><strong>Thermal cracking (热裂化):</strong> High temperature (450–750°C), produces alkenes</li>
  <li><strong>Catalytic cracking (催化裂化):</strong> Zeolite catalyst (~450°C), higher octane gasoline</li>
</ul>
<div class="equation-box">
  Example: \\(C_{16}H_{34} \\xrightarrow{催化剂, \\Delta} C_8H_{18} + C_8H_{16}\\)<br>
  (hexadecane → octane + 1-octene)
</div>

<h3>3. Reforming (重整)</h3>
<p>
  Reforming converts straight-chain alkanes into branched-chain alkanes and
  aromatic compounds to increase octane number (辛烷值) — how resistant the
  fuel is to engine knocking.
</p>

<h3>Combustion Energy Comparison</h3>
<p>All hydrocarbons release energy through combustion with O₂. The energy released per mole increases with chain length, but energy per gram is roughly similar for alkanes (~47 kJ/g).</p>
<table class="data-table">
  <thead>
    <tr><th>Compound</th><th>Formula</th><th>ΔH combustion (kJ/mol)</th></tr>
  </thead>
  <tbody>
    <tr><td>Methane</td><td>CH₄</td><td>−890</td></tr>
    <tr><td>Ethane</td><td>C₂H₆</td><td>−1560</td></tr>
    <tr><td>Propane</td><td>C₃H₈</td><td>−2220</td></tr>
    <tr><td>Butane</td><td>C₄H₁₀</td><td>−2877</td></tr>
    <tr><td>Ethylene</td><td>C₂H₄</td><td>−1411</td></tr>
    <tr><td>Acetylene</td><td>C₂H₂</td><td>−1300</td></tr>
    <tr><td>Benzene</td><td>C₆H₆</td><td>−3268</td></tr>
  </tbody>
</table>

<h3>Natural Gas (天然气)</h3>
<p>
  Natural gas is primarily methane (CH₄, about 85–95%), with small amounts of
  ethane, propane, and other gases. It is a clean-burning fuel:
</p>
<div class="equation-box">
  \\(CH_4 + 2O_2 \\xrightarrow{点燃} CO_2 + 2H_2O\\)
</div>
<p>
  Natural gas produces less CO₂ per unit energy than coal or oil, and no SO₂ or particulates.
</p>

<h3>Environmental Concerns</h3>
<ul>
  <li><strong>CO₂</strong>: greenhouse gas causing climate change</li>
  <li><strong>CO</strong>: from incomplete combustion; toxic</li>
  <li><strong>NOₓ</strong>: formed at high combustion temperatures; acid rain, smog</li>
  <li><strong>SO₂</strong>: from sulfur impurities in fuel; acid rain</li>
  <li><strong>Particulate matter</strong>: soot from aromatic combustion; respiratory hazard</li>
</ul>
      `,
      visualizations: [
        {
          id: 'viz-ch14-distillation',
          title: 'Fractional Distillation Tower',
          setup: function(container) {
            const viz = new VizEngine(container, {width: 700, height: 400, scale: 40, originX: 350, originY: 200});
            const ctx = viz.ctx;
            const W = viz.width, H = viz.height;
            const c = viz.colors;

            let t = 0;
            let animId = null;

            const fractions = [
              {label:'Petroleum Gas C₁–C₄', color:'#58a6ff', y: 0.10, bp:'< 40°C'},
              {label:'Gasoline C₅–C₁₀',     color:'#3fb950', y: 0.28, bp:'40–180°C'},
              {label:'Kerosene C₁₀–C₁₆',   color:'#d29922', y: 0.46, bp:'180–250°C'},
              {label:'Diesel C₁₅–C₂₀',      color:'#f0883e', y: 0.62, bp:'250–350°C'},
              {label:'Lubricants C₂₀–C₃₅',  color:'#bc8cff', y: 0.77, bp:'350–500°C'},
              {label:'Asphalt / Residue',    color:'#8b949e', y: 0.91, bp:'> 500°C'},
            ];

            // Tower geometry (screen coords)
            const towerL = 260, towerR = 380;
            const towerT = 30, towerB = 370;
            const towerW = towerR - towerL;

            function draw(ts) {
              ctx.fillStyle = c.bg; ctx.fillRect(0,0,W,H);

              // Title
              ctx.fillStyle=c.text; ctx.font='13px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Fractional Distillation Tower (分馏塔)', W/2, 18);

              // Tower body
              ctx.fillStyle = '#1a1a40';
              ctx.fillRect(towerL, towerT, towerW, towerB-towerT);
              ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 2;
              ctx.strokeRect(towerL, towerT, towerW, towerB-towerT);

              // Temperature gradient inside tower
              const grad = ctx.createLinearGradient(0, towerT, 0, towerB);
              grad.addColorStop(0, 'rgba(88,166,255,0.08)');
              grad.addColorStop(1, 'rgba(248,81,73,0.18)');
              ctx.fillStyle = grad;
              ctx.fillRect(towerL+2, towerT+2, towerW-4, towerB-towerT-4);

              // Hot crude oil input at bottom-left
              const heatY = towerB - 10;
              ctx.strokeStyle = c.red; ctx.lineWidth=3;
              ctx.beginPath(); ctx.moveTo(towerL-60, heatY); ctx.lineTo(towerL, heatY); ctx.stroke();
              ctx.fillStyle=c.red; ctx.font='bold 10px sans-serif'; ctx.textAlign='right';
              ctx.fillText('Crude oil (热)', towerL-5, heatY+14);
              // Arrow
              ctx.fillStyle=c.red;
              ctx.beginPath(); ctx.moveTo(towerL,heatY); ctx.lineTo(towerL-8,heatY-5); ctx.lineTo(towerL-8,heatY+5); ctx.closePath(); ctx.fill();

              // Fractions — pipes exiting on right side
              fractions.forEach((frac, i) => {
                const fy = towerT + (towerB-towerT)*frac.y;
                // Tray line inside tower
                ctx.strokeStyle = '#30363d'; ctx.lineWidth=1;
                ctx.beginPath(); ctx.moveTo(towerL+4, fy); ctx.lineTo(towerR-4, fy); ctx.stroke();

                // Rising bubble animation
                const bOffset = (t * 60 + i*40) % (towerB-towerT);
                ctx.fillStyle = frac.color + '55';
                ctx.beginPath(); ctx.arc(towerL + towerW/2, towerB - bOffset, 4, 0, Math.PI*2); ctx.fill();

                // Exit pipe on right
                ctx.strokeStyle = frac.color; ctx.lineWidth=3;
                ctx.beginPath(); ctx.moveTo(towerR, fy); ctx.lineTo(towerR+55, fy); ctx.stroke();

                // Label
                ctx.fillStyle = frac.color; ctx.font='bold 10px sans-serif'; ctx.textAlign='left';
                ctx.fillText(frac.label, towerR+60, fy+4);
                ctx.fillStyle=c.text; ctx.font='9px sans-serif';
                ctx.fillText(frac.bp, towerR+60, fy+16);
              });

              // Temperature labels on left
              ctx.fillStyle=c.blue; ctx.font='10px sans-serif'; ctx.textAlign='right';
              ctx.fillText('Cool (低温)', towerL-5, towerT+20);
              ctx.fillStyle=c.red;
              ctx.fillText('Hot (高温)', towerL-5, towerB-10);

              // Flame at bottom
              const fx = towerL + towerW/2, fb = towerB+8;
              for (let f=0; f<3; f++) {
                const fh = 18 + f*6 + Math.sin(ts*0.006 + f)*4;
                ctx.fillStyle = [c.red, c.orange, c.yellow][f]+'aa';
                ctx.beginPath();
                ctx.moveTo(fx-12+f*4, fb);
                ctx.quadraticCurveTo(fx-6+f*3, fb-fh*0.7, fx+f*2, fb-fh);
                ctx.quadraticCurveTo(fx+6-f*3, fb-fh*0.7, fx+12-f*4, fb);
                ctx.closePath(); ctx.fill();
              }
              ctx.fillStyle=c.text; ctx.font='10px sans-serif'; ctx.textAlign='center';
              ctx.fillText('Heat 加热', fx, fb+18);
            }

            function loop(ts) {
              t += 0.5;
              draw(ts);
              animId = requestAnimationFrame(loop);
            }
            animId = requestAnimationFrame(loop);
          }
        }
      ],
      exercises: [
        {
          question: 'Crude oil is separated by fractional distillation. Explain why different hydrocarbons exit the tower at different heights. What physical property is being exploited?',
          answer: 'Different hydrocarbons have different boiling points, which depend on molecular size (chain length). Lighter molecules (fewer carbons, lower boiling points) vaporize and condense high up in the cool part of the tower. Heavier molecules (more carbons, higher boiling points) only condense near the hot bottom. So boiling point differences are exploited to separate the mixture.'
        },
        {
          question: 'What is the purpose of catalytic cracking in petroleum refining? Write an example equation.',
          answer: 'Catalytic cracking converts large, heavy hydrocarbon molecules (with high boiling points and limited use) into smaller, more valuable molecules — mainly gasoline-range (C₅–C₁₀) hydrocarbons. Example: C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆. This increases the yield of gasoline from crude oil. Alkenes are also produced, which are useful as chemical feedstocks.'
        },
        {
          question: 'Natural gas is considered "cleaner" than coal as a fuel. Compare the combustion equations of methane and coal (simplified as carbon), and explain why natural gas produces less environmental pollution.',
          answer: 'CH₄ + 2O₂ → CO₂ + 2H₂O; C + O₂ → CO₂. Natural gas (methane) produces water as a byproduct instead of only CO₂. Per unit of energy released, methane produces about half the CO₂ of coal. Also, coal often contains sulfur → SO₂ (acid rain), and produces particulate matter (soot). Methane burns cleanly with no SO₂ or particulates.'
        },
        {
          question: 'A student says: "Since benzene has 3 double bonds (like the Kekulé structure), it should react similarly to cyclohexadiene — rapidly decolorizing bromine water." Explain the flaw in this reasoning.',
          answer: 'The flaw is treating benzene as if it had localized double bonds like cyclohexadiene. In reality, the 6 π electrons in benzene are fully delocalized over all 6 carbons, forming an aromatic system with extra stability (~150 kJ/mol). Breaking any one "double bond" would disrupt this delocalization and cost a large amount of energy. Therefore, benzene prefers substitution reactions (which preserve aromaticity) over addition reactions. Benzene does NOT decolorize bromine water at room temperature.'
        },
        {
          question: 'Identify the type of reaction for each: (a) CH₄ + Cl₂ → CH₃Cl + HCl (UV); (b) CH₂=CH₂ + H₂O → CH₃CH₂OH; (c) C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O; (d) nCH₂=CH₂ → polyethylene.',
          answer: '(a) Substitution reaction (取代反应) — H is replaced by Cl. (b) Addition reaction (加成反应) — H and OH add across the C=C double bond. (c) Substitution reaction (取代反应) — H on benzene is replaced by NO₂. (d) Addition polymerization (加聚反应) — π bonds of n monomers open to form a chain.'
        },
        {
          question: 'Which fraction from petroleum distillation is used as aviation (jet) fuel, and what is its carbon range?',
          answer: 'Kerosene (煤油) is used as jet fuel. It has a carbon range of C₁₀–C₁₆ and a boiling point range of 180–250°C.'
        }
      ]
    }

  ]
});
