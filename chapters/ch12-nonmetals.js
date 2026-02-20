window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch12',
    number: 12,
    title: 'Nonmetals & Their Compounds',
    subtitle: 'Silicon, Chlorine, Sulfur, and Nitrogen',
    sections: [

        // ============================================================
        // SECTION 1: Silicon and Its Compounds (硅及其化合物)
        // ============================================================
        {
            id: 'ch12-sec01',
            title: 'Silicon & Its Compounds',
            content: `
                <h2>Silicon &amp; Its Compounds</h2>

                <p>Silicon (Si) is the second most abundant element in Earth's crust — only oxygen is more plentiful. Yet pure silicon almost never appears in nature; instead, it forms stable compounds that make up rocks, sand, glass, and ceramics.</p>

                <div class="env-block intuition">
                    <div class="env-title">Key Idea</div>
                    <div class="env-body">
                        <p>Silicon behaves very differently from carbon even though they are in the same group. Carbon forms \\(\\text{CO}_2\\) — a gas. Silicon forms \\(\\text{SiO}_2\\) — a hard, high-melting solid network. The Si–O bond is extremely strong, which is why silica-based materials are so durable.</p>
                    </div>
                </div>

                <h3>Silicon Dioxide (SiO₂)</h3>
                <p>Silicon dioxide — the main component of quartz and sand — is a giant covalent solid. Every Si atom is bonded to four O atoms in a three-dimensional network, making it very hard and resistant to melting.</p>

                <ul>
                    <li><strong>Melting point:</strong> ~1713 °C (cannot be melted easily)</li>
                    <li><strong>Reacts with HF (not HCl, HNO₃, or H₂SO₄):</strong> \\(\\text{SiO}_2 + 4\\text{HF} \\rightarrow \\text{SiF}_4 + 2\\text{H}_2\\text{O}\\)</li>
                    <li><strong>Reacts with NaOH:</strong> \\(\\text{SiO}_2 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SiO}_3 + \\text{H}_2\\text{O}\\)</li>
                    <li><strong>Reacts with Na₂CO₃ at high temperature:</strong> \\(\\text{SiO}_2 + \\text{Na}_2\\text{CO}_3 \\xrightarrow{\\text{high T}} \\text{Na}_2\\text{SiO}_3 + \\text{CO}_2\\)</li>
                </ul>

                <div class="env-block example">
                    <div class="env-title">Why HF Etches Glass</div>
                    <div class="env-body">
                        <p>Glass is mostly SiO₂. HF is the only common acid that attacks glass because F⁻ is uniquely small and electronegative — it can break the strong Si–O bond. That is why HF is stored in plastic bottles, not glass.</p>
                        <p>\\(\\text{SiO}_2 + 4\\text{HF} \\rightarrow \\text{SiF}_4\\uparrow + 2\\text{H}_2\\text{O}\\)</p>
                    </div>
                </div>

                <h3>Silicic Acid (H₂SiO₃) and Silicates</h3>
                <p>Silicates are salts of silicic acid. Sodium silicate (Na₂SiO₃) is the most common:</p>
                <ul>
                    <li>Dissolves in water to form a viscous, alkaline solution called <strong>water glass</strong></li>
                    <li>Used as fireproofing material, adhesive, and egg preservation</li>
                    <li>Reacting with CO₂: \\(\\text{Na}_2\\text{SiO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SiO}_3\\downarrow + \\text{Na}_2\\text{CO}_3\\) (shows SiO₂ is a weaker acid anhydride than CO₂)</li>
                </ul>

                <h3>Glass, Cement, and Ceramics — the Three Silicate Industries</h3>

                <div class="env-block remark">
                    <div class="env-title">The Silicate Big Three</div>
                    <div class="env-body">
                        <table style="width:100%;border-collapse:collapse;font-size:0.93em;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="text-align:left;padding:4px 8px;">Material</th>
                                <th style="text-align:left;padding:4px 8px;">Key Raw Materials</th>
                                <th style="text-align:left;padding:4px 8px;">Process</th>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;"><strong>Glass</strong></td>
                                <td style="padding:4px 8px;">SiO₂, Na₂CO₃, CaCO₃</td>
                                <td style="padding:4px 8px;">High-temperature melting and rapid cooling</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;"><strong>Cement</strong></td>
                                <td style="padding:4px 8px;">Limestone (CaCO₃), clay</td>
                                <td style="padding:4px 8px;">Calcination in rotary kiln ~1450 °C</td>
                            </tr>
                            <tr>
                                <td style="padding:4px 8px;"><strong>Ceramics</strong></td>
                                <td style="padding:4px 8px;">Clay (Al₂O₃·2SiO₂·2H₂O)</td>
                                <td style="padding:4px 8px;">Shaping then high-temperature firing</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="silicon-network-viz"></div>

                <h3>Semiconductor Silicon</h3>
                <p>Pure elemental silicon (Si) is a metalloid semiconductor used in computer chips. It is obtained by reducing SiO₂:</p>
                <p>\\(\\text{SiO}_2 + 2\\text{C} \\xrightarrow{\\text{high T}} \\text{Si} + 2\\text{CO}\\uparrow\\)</p>
                <p>Further purification to "electronic-grade silicon" (99.9999999% pure!) uses the Siemens process.</p>
            `,
            visualizations: [
                {
                    id: 'silicon-network-viz',
                    title: 'SiO₂ Network Structure vs CO₂ Molecule',
                    description: 'Compare the giant covalent network of SiO₂ with the simple molecular structure of CO₂.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 340, scale: 40, originX: 320, originY: 170});
                        var ctx = viz.ctx;
                        var showSi = true;

                        VizEngine.createButton(controls, 'Show SiO\u2082 Network', function() { showSi = true; draw(); });
                        VizEngine.createButton(controls, 'Show CO\u2082 Molecule', function() { showSi = false; draw(); });

                        function drawSiO2() {
                            // Draw a fragment of the SiO2 3D network (projected 2D honeycomb-like)
                            var nodes = [
                                {x: 0,    y: 0,    el: 'Si', col: '#58a6ff'},
                                {x: 1.5,  y: 0.9,  el: 'O',  col: '#f85149'},
                                {x: 1.5,  y: -0.9, el: 'O',  col: '#f85149'},
                                {x: -1.5, y: 0.9,  el: 'O',  col: '#f85149'},
                                {x: -1.5, y: -0.9, el: 'O',  col: '#f85149'},
                                {x: 3,    y: 0,    el: 'Si', col: '#58a6ff'},
                                {x: -3,   y: 0,    el: 'Si', col: '#58a6ff'},
                                {x: 3,    y: 1.8,  el: 'O',  col: '#f85149'},
                                {x: 3,    y: -1.8, el: 'O',  col: '#f85149'},
                                {x: -3,   y: 1.8,  el: 'O',  col: '#f85149'},
                                {x: -3,   y: -1.8, el: 'O',  col: '#f85149'},
                            ];
                            var bonds = [
                                [0,1],[0,2],[0,3],[0,4],
                                [1,5],[2,5],[3,6],[4,6],
                                [5,7],[5,8],[6,9],[6,10]
                            ];
                            ctx.strokeStyle = '#8b949e';
                            ctx.lineWidth = 3;
                            bonds.forEach(function(b) {
                                var a = nodes[b[0]], c = nodes[b[1]];
                                var s1 = viz.toScreen(a.x, a.y);
                                var s2 = viz.toScreen(c.x, c.y);
                                ctx.beginPath(); ctx.moveTo(s1[0], s1[1]); ctx.lineTo(s2[0], s2[1]); ctx.stroke();
                            });
                            nodes.forEach(function(n) {
                                var r = n.el === 'Si' ? 0.38 : 0.25;
                                var s = viz.toScreen(n.x, n.y);
                                ctx.fillStyle = n.col + '33';
                                ctx.beginPath(); ctx.arc(s[0], s[1], r * viz.scale + 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = n.col;
                                ctx.beginPath(); ctx.arc(s[0], s[1], r * viz.scale, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = '#f0f6fc';
                                ctx.font = 'bold ' + Math.round(r * viz.scale * 1.2) + 'px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText(n.el, s[0], s[1]);
                            });

                            viz.screenText('SiO\u2082: Giant Covalent Network', viz.width / 2, 30, '#f0f6fc', 16);
                            viz.screenText('Melting point: 1713 \u00b0C  |  Hard solid', viz.width / 2, 310, '#8b949e', 13);
                        }

                        function drawCO2() {
                            // Simple linear O=C=O molecule
                            var atoms = [
                                {x: -2, y: 0, el: 'O', col: '#f85149'},
                                {x:  0, y: 0, el: 'C', col: '#3fb950'},
                                {x:  2, y: 0, el: 'O', col: '#f85149'},
                            ];
                            // Double bonds
                            [[0,1],[1,2]].forEach(function(b) {
                                var a1 = atoms[b[0]], a2 = atoms[b[1]];
                                var s1 = viz.toScreen(a1.x, a1.y);
                                var s2 = viz.toScreen(a2.x, a2.y);
                                ctx.strokeStyle = '#8b949e';
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(s1[0], s1[1] - 6); ctx.lineTo(s2[0], s2[1] - 6); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(s1[0], s1[1] + 6); ctx.lineTo(s2[0], s2[1] + 6); ctx.stroke();
                                viz.screenText('=', (s1[0] + s2[0]) / 2, s1[1] - 22, '#8b949e', 20);
                            });
                            atoms.forEach(function(n) {
                                var r = n.el === 'C' ? 0.35 : 0.28;
                                var s = viz.toScreen(n.x, n.y);
                                ctx.fillStyle = n.col + '33';
                                ctx.beginPath(); ctx.arc(s[0], s[1], r * viz.scale + 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = n.col;
                                ctx.beginPath(); ctx.arc(s[0], s[1], r * viz.scale, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = '#f0f6fc';
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText(n.el, s[0], s[1]);
                            });

                            viz.screenText('CO\u2082: Simple Covalent Molecule', viz.width / 2, 30, '#f0f6fc', 16);
                            viz.screenText('Melting point: \u221256.6 \u00b0C  |  Gas at room temperature', viz.width / 2, 310, '#8b949e', 13);
                        }

                        function draw() {
                            viz.clear();
                            if (showSi) drawSiO2(); else drawCO2();
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-sec01-ex01',
                    type: 'multiple-choice',
                    question: 'Which reagent can dissolve SiO₂?',
                    choices: ['HCl', 'H₂SO₄ (dilute)', 'HF', 'HNO₃'],
                    answer: 2,
                    explanation: 'SiO₂ does not react with HCl, H₂SO₄, or HNO₃. Only HF dissolves SiO₂ via: SiO₂ + 4HF → SiF₄↑ + 2H₂O.'
                },
                {
                    id: 'ch12-sec01-ex02',
                    type: 'multiple-choice',
                    question: 'When Na₂SiO₃ solution is exposed to CO₂ in air, which product precipitates?',
                    choices: ['SiO₂', 'H₂SiO₃', 'Na₂CO₃', 'NaHCO₃'],
                    answer: 1,
                    explanation: 'Na₂SiO₃ + CO₂ + H₂O → H₂SiO₃↓ + Na₂CO₃. Silicic acid precipitates because it is less soluble and a weaker acid than H₂CO₃.'
                },
                {
                    id: 'ch12-sec01-ex03',
                    type: 'short-answer',
                    question: 'Explain why HF must be stored in plastic containers rather than glass bottles.',
                    answer: 'HF reacts with SiO₂ in glass: SiO₂ + 4HF → SiF₄↑ + 2H₂O, which would dissolve the glass container. Plastic (e.g., polyethylene) does not contain SiO₂ and is not attacked by HF.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Chlorine and Its Compounds (氯及其化合物)
        // ============================================================
        {
            id: 'ch12-sec02',
            title: 'Chlorine & Its Compounds',
            content: `
                <h2>Chlorine &amp; Its Compounds</h2>

                <p>Chlorine (Cl₂) is a yellow-green, toxic gas with a suffocating odor. It is one of the most important industrial chemicals — used to make PVC plastics, pharmaceuticals, disinfectants, and paper. Understanding chlorine chemistry is central to high school chemistry.</p>

                <h3>Physical Properties of Cl₂</h3>
                <ul>
                    <li>Yellow-green gas at room temperature</li>
                    <li>Density: 2.5 times heavier than air (collected by downward air displacement)</li>
                    <li>Soluble in water (1 volume water dissolves ~2 volumes Cl₂ at 20 °C)</li>
                    <li>Poisonous — causes severe lung irritation</li>
                </ul>

                <h3>Industrial Production: Electrolysis of Brine</h3>
                <p>Chlorine is manufactured by the <strong>chlor-alkali process</strong>: electrolysis of saturated NaCl (brine) solution.</p>

                <div class="env-block example">
                    <div class="env-title">Chlor-Alkali Reactions</div>
                    <div class="env-body">
                        <p><strong>Cathode (reduction):</strong> \\(2\\text{H}_2\\text{O} + 2e^- \\rightarrow \\text{H}_2\\uparrow + 2\\text{OH}^-\\)</p>
                        <p><strong>Anode (oxidation):</strong> \\(2\\text{Cl}^- - 2e^- \\rightarrow \\text{Cl}_2\\uparrow\\)</p>
                        <p><strong>Overall:</strong> \\(2\\text{NaCl} + 2\\text{H}_2\\text{O} \\xrightarrow{\\text{electrolysis}} 2\\text{NaOH} + \\text{H}_2\\uparrow + \\text{Cl}_2\\uparrow\\)</p>
                        <p>Three products: chlorine (Cl₂), hydrogen (H₂), and sodium hydroxide (NaOH) — all commercially valuable.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cl2-electrolysis-viz"></div>

                <h3>Chemical Properties of Cl₂</h3>
                <p>Chlorine is a strong oxidizing agent. Its most important reactions:</p>

                <p><strong>1. With water (hydrolysis):</strong></p>
                <p>\\(\\text{Cl}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCl} + \\text{HClO}\\)</p>
                <p>This equilibrium lies to the left — only a small fraction of Cl₂ reacts. HClO (hypochlorous acid) is a weak acid and powerful oxidizer, responsible for Cl₂'s bleaching action.</p>

                <p><strong>2. With NaOH (cold):</strong></p>
                <p>\\(\\text{Cl}_2 + 2\\text{NaOH} \\rightarrow \\text{NaCl} + \\text{NaClO} + \\text{H}_2\\text{O}\\)</p>
                <p>This is a disproportionation reaction: Cl₂ (0) → Cl⁻ (−1) and ClO⁻ (+1).</p>

                <p><strong>3. With Ca(OH)₂ (bleaching powder):</strong></p>
                <p>\\(2\\text{Cl}_2 + 2\\text{Ca(OH)}_2 \\rightarrow \\text{Ca(ClO)}_2 + \\text{CaCl}_2 + 2\\text{H}_2\\text{O}\\)</p>

                <div class="env-block intuition">
                    <div class="env-title">Bleaching Powder vs Bleach</div>
                    <div class="env-body">
                        <p><strong>Bleaching powder</strong> is a mixture of Ca(ClO)₂ and CaCl₂. The actual bleaching agent is Ca(ClO)₂ (calcium hypochlorite), which releases HClO in acid or CO₂:</p>
                        <p>\\(\\text{Ca(ClO)}_2 + \\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{CaCO}_3\\downarrow + 2\\text{HClO}\\)</p>
                        <p>HClO then oxidizes (bleaches) colored compounds. It decomposes in sunlight: \\(2\\text{HClO} \\xrightarrow{\\text{light}} 2\\text{HCl} + \\text{O}_2\\uparrow\\)</p>
                    </div>
                </div>

                <h3>Hydrogen Chloride (HCl)</h3>
                <p>HCl is a colorless gas with a sharp, irritating odor. It dissolves readily in water to form <strong>hydrochloric acid</strong>, a strong acid.</p>
                <ul>
                    <li>Formation from elements: \\(\\text{H}_2 + \\text{Cl}_2 \\xrightarrow{\\text{ignition}} 2\\text{HCl}\\)</li>
                    <li>Lab preparation (salt + H₂SO₄): \\(\\text{NaCl} + \\text{H}_2\\text{SO}_4 \\xrightarrow{\\Delta} \\text{NaHSO}_4 + \\text{HCl}\\uparrow\\)</li>
                    <li>Hydrochloric acid: strong acid, fully ionized; used to dissolve metals, clean surfaces, and in the stomach as gastric acid</li>
                </ul>

                <div class="env-block remark">
                    <div class="env-title">Chlorine's Oxidation States</div>
                    <div class="env-body">
                        <p>Cl can exist in many oxidation states:</p>
                        <p>\\(\\text{Cl}^-\\) (−1): HCl, NaCl &nbsp;&nbsp;|&nbsp;&nbsp; \\(\\text{Cl}_2\\) (0) &nbsp;&nbsp;|&nbsp;&nbsp; HClO (+1) &nbsp;&nbsp;|&nbsp;&nbsp; HClO₂ (+3) &nbsp;&nbsp;|&nbsp;&nbsp; HClO₃ (+5) &nbsp;&nbsp;|&nbsp;&nbsp; HClO₄ (+7)</p>
                        <p>The most common in high school are −1, 0, and +1.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'cl2-electrolysis-viz',
                    title: 'Industrial Cl₂ Production: Electrolysis of Brine',
                    description: 'Watch brine electrolysis in action. Press Start to begin electrolysis.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 360, scale: 40, originX: 320, originY: 180});
                        var ctx = viz.ctx;
                        var running = false;
                        var t = 0;
                        var bubbles = [];

                        VizEngine.createButton(controls, 'Start Electrolysis', function() { running = true; });
                        VizEngine.createButton(controls, 'Stop', function() { running = false; });
                        VizEngine.createButton(controls, 'Reset', function() { running = false; t = 0; bubbles = []; });

                        function addBubble(x, y, color, label) {
                            bubbles.push({x: x, y: y, vy: -(0.5 + Math.random() * 0.5), vx: (Math.random() - 0.5) * 0.2, color: color, label: label, life: 1.0});
                        }

                        function draw() {
                            viz.clear();
                            var W = viz.width, H = viz.height;

                            // Electrolytic cell body
                            ctx.fillStyle = '#1a1a40';
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.roundRect(80, 60, 480, 240, 8);
                            ctx.fill(); ctx.stroke();

                            // Brine solution (blue-teal fill)
                            ctx.fillStyle = '#0d3045';
                            ctx.beginPath();
                            ctx.rect(82, 160, 476, 138);
                            ctx.fill();

                            // Brine label
                            ctx.fillStyle = '#3fb9a0';
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Saturated NaCl(aq) — Brine', W / 2, 240);

                            // Electrodes
                            // Anode (right) — graphite/titanium
                            ctx.fillStyle = '#f0883e';
                            ctx.fillRect(430, 70, 18, 220);
                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('ANODE (+)', 439, 58);
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('Cl\u2082 \u2191', 439, 315);

                            // Cathode (left)
                            ctx.fillStyle = '#58a6ff';
                            ctx.fillRect(192, 70, 18, 220);
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('CATHODE (\u2212)', 201, 58);
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('H\u2082 \u2191', 201, 315);

                            // Membrane divider
                            ctx.strokeStyle = '#d29922';
                            ctx.lineWidth = 3;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(320, 62); ctx.lineTo(320, 298); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = '#d29922';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Ion Exchange Membrane', 320, 320);

                            // Bubbles
                            bubbles.forEach(function(b) {
                                ctx.globalAlpha = b.life;
                                ctx.fillStyle = b.color;
                                ctx.beginPath();
                                ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.strokeStyle = b.color + '88';
                                ctx.lineWidth = 1;
                                ctx.stroke();
                                ctx.globalAlpha = 1;
                            });

                            // Electron flow arrow
                            if (running) {
                                ctx.fillStyle = '#f85149';
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('e\u207b flow \u2192', W / 2, 38);
                            }

                            // Title
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Chlor-Alkali Electrolysis', W / 2, 345);

                            // NaOH label on cathode side
                            ctx.fillStyle = '#3fb950';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('NaOH produced', 200, 195);
                        }

                        viz.animate(function() {
                            if (running) {
                                t++;
                                if (t % 8 === 0) {
                                    // Anode: Cl2 bubbles (yellow-green)
                                    addBubble(439, 280, '#d4e06e', 'Cl\u2082');
                                    addBubble(439, 265, '#d4e06e', 'Cl\u2082');
                                    // Cathode: H2 bubbles (blue)
                                    addBubble(201, 280, '#58a6ff', 'H\u2082');
                                    addBubble(201, 265, '#58a6ff', 'H\u2082');
                                }
                                bubbles.forEach(function(b) {
                                    b.y += b.vy * 2;
                                    b.x += b.vx;
                                    b.life -= 0.008;
                                });
                                bubbles = bubbles.filter(function(b) { return b.life > 0 && b.y > 60; });
                            }
                            draw();
                        });
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-sec02-ex01',
                    type: 'multiple-choice',
                    question: 'In the electrolysis of brine, what is produced at the cathode?',
                    choices: ['Cl₂', 'O₂', 'H₂ and OH⁻', 'Na metal'],
                    answer: 2,
                    explanation: 'At the cathode (reduction): 2H₂O + 2e⁻ → H₂↑ + 2OH⁻. Water is reduced (not Na⁺, because the discharge potential of H₂O is lower in practice).'
                },
                {
                    id: 'ch12-sec02-ex02',
                    type: 'multiple-choice',
                    question: 'Bleaching powder loses its bleaching ability when exposed to air for a long time. Which reaction explains this?',
                    choices: [
                        'Ca(ClO)₂ decomposes to CaO + Cl₂ + O₂',
                        'Ca(ClO)₂ + CO₂ + H₂O → CaCO₃ + 2HClO, then 2HClO → 2HCl + O₂',
                        'CaCl₂ reacts with O₂',
                        'Ca(ClO)₂ dissolves in rainwater'
                    ],
                    answer: 1,
                    explanation: 'CO₂ in air reacts with Ca(ClO)₂ to form HClO, which then decomposes in sunlight/air: 2HClO → 2HCl + O₂↑. This consumes the active ClO⁻ bleaching agent.'
                },
                {
                    id: 'ch12-sec02-ex03',
                    type: 'short-answer',
                    question: 'Write the equation for the reaction of Cl₂ with cold NaOH solution, and identify the oxidation state change.',
                    answer: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Cl₂ undergoes disproportionation: Cl (0) → Cl⁻ (−1) in NaCl and Cl (+1) in NaClO.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Sulfur and Its Compounds (硫及其化合物)
        // ============================================================
        {
            id: 'ch12-sec03',
            title: 'Sulfur & Its Compounds',
            content: `
                <h2>Sulfur &amp; Its Compounds</h2>

                <p>Sulfur (S) is a yellow nonmetal solid found in nature as the free element and in many compounds. Its chemistry spans a wide range of oxidation states (−2, 0, +4, +6), giving rise to important compounds like H₂S, SO₂, SO₃, and H₂SO₄.</p>

                <h3>Elemental Sulfur</h3>
                <ul>
                    <li>Yellow crystalline solid at room temperature</li>
                    <li>Insoluble in water, slightly soluble in ethanol, very soluble in CS₂</li>
                    <li>Exists as S₈ rings (rhombic sulfur, stable below 96 °C)</li>
                    <li>Burns in air/oxygen: \\(\\text{S} + \\text{O}_2 \\xrightarrow{\\text{ignition}} \\text{SO}_2\\)</li>
                </ul>

                <h3>Sulfur Dioxide (SO₂) — Oxidation State +4</h3>
                <p>SO₂ is a colorless, toxic gas with a sharp, choking odor. It is the key intermediate in sulfuric acid production.</p>

                <div class="env-block intuition">
                    <div class="env-title">SO₂ — Both Reducing AND Oxidizing Agent</div>
                    <div class="env-body">
                        <p>With S in +4 state, SO₂ can be oxidized (+4 → +6) or reduced (+4 → 0 or −2), making it amphoteric as a redox agent.</p>
                        <p><strong>As reducing agent</strong> (gets oxidized): \\(2\\text{SO}_2 + \\text{O}_2 \\xrightarrow{\\text{V}_2\\text{O}_5, \\Delta} 2\\text{SO}_3\\)</p>
                        <p><strong>As oxidizing agent</strong> (gets reduced): \\(\\text{SO}_2 + 2\\text{H}_2\\text{S} \\rightarrow 3\\text{S} + 2\\text{H}_2\\text{O}\\)</p>
                    </div>
                </div>

                <p><strong>Reaction with water:</strong> \\(\\text{SO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{SO}_3\\) (sulfurous acid, weak diprotic acid)</p>
                <p><strong>Reaction with NaOH:</strong> \\(\\text{SO}_2 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_3 + \\text{H}_2\\text{O}\\) (excess NaOH) or \\(\\text{SO}_2 + \\text{NaOH} \\rightarrow \\text{NaHSO}_3\\) (excess SO₂)</p>
                <p><strong>Bleaching:</strong> SO₂ bleaches colored compounds by combining with them (not by oxidizing). This bleaching is reversible (heating restores color), unlike Cl₂ bleaching.</p>

                <h3>Sulfur Trioxide (SO₃) and Sulfuric Acid (H₂SO₄)</h3>
                <p>SO₃ reacts vigorously with water: \\(\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4\\)</p>

                <div class="env-block example">
                    <div class="env-title">Contact Process — Industrial H₂SO₄</div>
                    <div class="env-body">
                        <p><strong>Step 1:</strong> \\(\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2\\) (burning sulfur)</p>
                        <p><strong>Step 2:</strong> \\(2\\text{SO}_2 + \\text{O}_2 \\xrightarrow{\\text{V}_2\\text{O}_5,\\,450{-}500°C} 2\\text{SO}_3\\) (catalytic oxidation, equilibrium reaction)</p>
                        <p><strong>Step 3:</strong> \\(\\text{SO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}_2\\text{S}_2\\text{O}_7\\) (dissolve SO₃ in conc. H₂SO₄ to form oleum)</p>
                        <p><strong>Step 4:</strong> \\(\\text{H}_2\\text{S}_2\\text{O}_7 + \\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4\\) (dilute with water)</p>
                        <p>Note: SO₃ is NOT absorbed directly in water — it forms acid mist. Instead, it is absorbed in concentrated H₂SO₄ first.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="contact-process-viz"></div>

                <h3>Dilute vs Concentrated H₂SO₄</h3>

                <table style="width:100%;border-collapse:collapse;font-size:0.93em;margin-top:8px;">
                    <tr style="border-bottom:1px solid #30363d;">
                        <th style="text-align:left;padding:6px 8px;">Property</th>
                        <th style="text-align:left;padding:6px 8px;">Dilute H₂SO₄</th>
                        <th style="text-align:left;padding:6px 8px;">Concentrated H₂SO₄</th>
                    </tr>
                    <tr style="border-bottom:1px solid #30363d;">
                        <td style="padding:4px 8px;">Acid character</td>
                        <td style="padding:4px 8px;">Strong acid (ionized)</td>
                        <td style="padding:4px 8px;">Strongly oxidizing, dehydrating</td>
                    </tr>
                    <tr style="border-bottom:1px solid #30363d;">
                        <td style="padding:4px 8px;">Reacts with Cu?</td>
                        <td style="padding:4px 8px;">No reaction</td>
                        <td style="padding:4px 8px;">Yes: Cu + 2H₂SO₄(conc) → CuSO₄ + SO₂↑ + 2H₂O (hot)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #30363d;">
                        <td style="padding:4px 8px;">With Fe/Al?</td>
                        <td style="padding:4px 8px;">Dissolves (gives H₂)</td>
                        <td style="padding:4px 8px;">Passivation (cold) — forms protective oxide layer</td>
                    </tr>
                    <tr>
                        <td style="padding:4px 8px;">Dehydration?</td>
                        <td style="padding:4px 8px;">No</td>
                        <td style="padding:4px 8px;">Yes — chars sugar: C₁₂H₂₂O₁₁ → 12C + 11H₂O</td>
                    </tr>
                </table>

                <div class="viz-placeholder" data-viz="h2so4-properties-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">Safety: Diluting Concentrated H₂SO₄</div>
                    <div class="env-body">
                        <p>Always add acid to water — NEVER add water to concentrated H₂SO₄. Mixing releases enormous heat, and adding water to acid causes violent boiling and spattering of corrosive liquid. Remember: "A to W" (Acid to Water).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'contact-process-viz',
                    title: 'Contact Process: Industrial H₂SO₄ Production',
                    description: 'Follow sulfur through each step of the Contact Process. Click a stage to see its details.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 320, scale: 40, originX: 320, originY: 160});
                        var ctx = viz.ctx;
                        var selected = 0;

                        var stages = [
                            {label: 'S\nburned', product: 'SO\u2082', color: '#f0883e', desc: 'S + O\u2082 \u2192 SO\u2082\n(Sulfur burned in furnace)'},
                            {label: 'V\u2082O\u2085\ncatalyst', product: 'SO\u2083', color: '#d29922', desc: '2SO\u2082 + O\u2082 \u21cc 2SO\u2083\n(450\u2013500\u00b0C, V\u2082O\u2085 catalyst)'},
                            {label: 'Oleum\nformation', product: 'H\u2082S\u2082O\u2087', color: '#bc8cff', desc: 'SO\u2083 + H\u2082SO\u2084 \u2192 H\u2082S\u2082O\u2087\n(SO\u2083 absorbed in conc. H\u2082SO\u2084)'},
                            {label: 'Dilution', product: 'H\u2082SO\u2084', color: '#3fb950', desc: 'H\u2082S\u2082O\u2087 + H\u2082O \u2192 2H\u2082SO\u2084\n(Oleum diluted carefully with water)'}
                        ];

                        var stageX = [120, 253, 387, 520];

                        VizEngine.createButton(controls, 'Step 1: S\u2192SO\u2082', function() { selected = 0; });
                        VizEngine.createButton(controls, 'Step 2: SO\u2082\u2192SO\u2083', function() { selected = 1; });
                        VizEngine.createButton(controls, 'Step 3: Oleum', function() { selected = 2; });
                        VizEngine.createButton(controls, 'Step 4: H\u2082SO\u2084', function() { selected = 3; });

                        function draw() {
                            viz.clear();
                            var W = viz.width;

                            // Arrows between stages
                            for (var i = 0; i < 3; i++) {
                                ctx.strokeStyle = '#4a4a7a';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(stageX[i] + 36, 140);
                                ctx.lineTo(stageX[i + 1] - 36, 140);
                                ctx.stroke();
                                // Arrowhead
                                var ax = stageX[i + 1] - 36;
                                ctx.fillStyle = '#4a4a7a';
                                ctx.beginPath();
                                ctx.moveTo(ax, 140);
                                ctx.lineTo(ax - 10, 133);
                                ctx.lineTo(ax - 10, 147);
                                ctx.closePath(); ctx.fill();
                            }

                            // Stage boxes
                            stages.forEach(function(s, i) {
                                var x = stageX[i];
                                var isSelected = i === selected;
                                ctx.fillStyle = isSelected ? s.color + '44' : '#1a1a40';
                                ctx.strokeStyle = isSelected ? s.color : '#30363d';
                                ctx.lineWidth = isSelected ? 2.5 : 1.5;
                                ctx.beginPath();
                                ctx.roundRect(x - 36, 108, 72, 64, 8);
                                ctx.fill(); ctx.stroke();

                                // Product label
                                ctx.fillStyle = s.color;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(s.product, x, 145);

                                // Stage label
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '10px -apple-system,sans-serif';
                                var lines = s.label.split('\n');
                                lines.forEach(function(line, li) {
                                    ctx.fillText(line, x, 162 + li * 12);
                                });
                            });

                            // Info box for selected stage
                            var desc = stages[selected].desc.split('\n');
                            ctx.fillStyle = '#0c0c20';
                            ctx.strokeStyle = stages[selected].color + '88';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.roundRect(60, 220, W - 120, 70, 8);
                            ctx.fill(); ctx.stroke();

                            ctx.fillStyle = stages[selected].color;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(desc[0], W / 2, 245);
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(desc[1], W / 2, 268);

                            // Title
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Contact Process \u2014 4 Steps to H\u2082SO\u2084', W / 2, 80);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'h2so4-properties-viz',
                    title: 'Concentrated H₂SO₄: Dehydration & Oxidizing Properties',
                    description: 'Observe the dramatic dehydration of sugar and oxidation of copper by concentrated H₂SO₄.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 300, scale: 40, originX: 320, originY: 150});
                        var ctx = viz.ctx;
                        var demo = 0;
                        var t = 0;
                        var running = false;

                        VizEngine.createButton(controls, 'Demo: Sugar Charring', function() { demo = 0; t = 0; running = true; });
                        VizEngine.createButton(controls, 'Demo: Cu + conc. H\u2082SO\u2084', function() { demo = 1; t = 0; running = true; });
                        VizEngine.createButton(controls, 'Reset', function() { running = false; t = 0; });

                        function drawSugarDemo() {
                            var progress = Math.min(t / 180, 1);
                            var W = viz.width, H = viz.height;

                            // Beaker
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 2;
                            ctx.fillStyle = '#0c1a2a';
                            ctx.beginPath();
                            ctx.moveTo(200, 80); ctx.lineTo(180, 250); ctx.lineTo(360, 250); ctx.lineTo(340, 80);
                            ctx.fill(); ctx.stroke();

                            // Sugar (white) transitioning to carbon (black)
                            var sugarColor = 'rgb(' + Math.round(240 - 240 * progress) + ',' + Math.round(240 - 240 * progress) + ',' + Math.round(240 - 240 * progress) + ')';
                            ctx.fillStyle = sugarColor;
                            ctx.beginPath();
                            ctx.rect(185, 200, 165, 45);
                            ctx.fill();

                            // Carbon column rising
                            if (progress > 0.2) {
                                var colH = (progress - 0.2) / 0.8 * 80;
                                ctx.fillStyle = '#1a1a1a';
                                ctx.beginPath();
                                ctx.rect(240, 200 - colH, 50, colH + 45);
                                ctx.fill();
                                ctx.fillStyle = '#3a3a3a';
                                ctx.beginPath();
                                ctx.ellipse(265, 200 - colH, 25, 8, 0, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Steam/water vapor
                            if (progress > 0.3) {
                                for (var i = 0; i < 5; i++) {
                                    var wx = 220 + i * 30 + Math.sin(t * 0.05 + i) * 8;
                                    var wy = 180 - (progress - 0.3) * 100 - i * 20 + Math.sin(t * 0.08 + i * 0.7) * 5;
                                    if (wy > 80 && wy < 200) {
                                        ctx.fillStyle = 'rgba(200,220,255,' + (0.4 * (1 - (i / 5))) + ')';
                                        ctx.beginPath();
                                        ctx.arc(wx, wy, 8, 0, Math.PI * 2);
                                        ctx.fill();
                                    }
                                }
                            }

                            // Labels
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Dehydration of Sugar', W / 2, 40);

                            ctx.fillStyle = '#58a6ff';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('conc. H\u2082SO\u2084 added', 270, 195);

                            if (progress > 0.5) {
                                ctx.fillStyle = '#d29922';
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.fillText('C\u2081\u2082H\u2082\u2082O\u2081\u2081 \u2192 12C + 11H\u2082O', W / 2, 275);
                            }

                            // Acid dropper
                            ctx.fillStyle = '#58a6ff';
                            ctx.beginPath();
                            ctx.ellipse(390, 110, 12, 20, 0, 0, Math.PI * 2);
                            ctx.fill();
                            if (progress < 0.15) {
                                ctx.fillStyle = '#58a6ff88';
                                ctx.beginPath();
                                ctx.arc(390, 135, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('conc. H\u2082SO\u2084', 410, 105);
                        }

                        function drawCuDemo() {
                            var progress = Math.min(t / 200, 1);
                            var W = viz.width;

                            // Flask
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 2;
                            ctx.fillStyle = '#0c1a2a';
                            ctx.beginPath();
                            ctx.arc(280, 190, 80, 0, Math.PI * 2);
                            ctx.fill(); ctx.stroke();

                            // Acid solution
                            var solutionColor = 'rgba(' + Math.round(13 + 50 * progress) + ',' + Math.round(26 + 150 * progress) + ',' + Math.round(42 + 100 * progress) + ',0.8)';
                            ctx.fillStyle = solutionColor;
                            ctx.beginPath();
                            ctx.arc(280, 190, 78, 0, Math.PI * 2);
                            ctx.fill();

                            // Cu strip
                            if (progress < 0.9) {
                                var cuH = 120 - progress * 100;
                                ctx.fillStyle = '#d29922';
                                ctx.fillRect(268, 130, 24, Math.max(cuH, 5));
                            }

                            // SO2 bubbles rising
                            if (progress > 0.2) {
                                for (var j = 0; j < 6; j++) {
                                    var bx = 240 + Math.random() * 80;
                                    var by = 130 + Math.sin(t * 0.06 + j) * 15;
                                    ctx.fillStyle = 'rgba(255,220,100,0.3)';
                                    ctx.beginPath();
                                    ctx.arc(bx, by, 5, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }

                            // Flask neck
                            ctx.fillStyle = '#0c1a2a';
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.rect(268, 90, 24, 30);
                            ctx.fill(); ctx.stroke();

                            // Gas tube
                            ctx.strokeStyle = '#8b949e';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(280, 90);
                            ctx.lineTo(280, 60);
                            ctx.lineTo(450, 60);
                            ctx.stroke();
                            if (progress > 0.3) {
                                ctx.fillStyle = 'rgba(255,220,100,0.4)';
                                ctx.beginPath();
                                ctx.arc(450, 60, 10, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = '#d29922';
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('SO\u2082\u2191', 450, 42);
                            }

                            // Labels
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cu + Concentrated H\u2082SO\u2084 (hot)', W / 2, 40);

                            ctx.fillStyle = '#d29922';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Cu + 2H\u2082SO\u2084(conc) \u2192 CuSO\u2084 + SO\u2082\u2191 + 2H\u2082O', W / 2, 275);

                            if (progress > 0.4) {
                                ctx.fillStyle = '#3fb9a0';
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('Solution turns blue (Cu\u00b2\u207a ions)', 280, 210);
                            }
                        }

                        viz.animate(function() {
                            viz.clear();
                            if (running) t++;
                            if (demo === 0) drawSugarDemo();
                            else drawCuDemo();
                        });
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-sec03-ex01',
                    type: 'multiple-choice',
                    question: 'What is the catalyst used in the Contact Process (Step 2: SO₂ → SO₃)?',
                    choices: ['Fe₂O₃', 'Pt', 'V₂O₅', 'MnO₂'],
                    answer: 2,
                    explanation: 'Vanadium(V) oxide (V₂O₅) is the catalyst used in the Contact Process at 450–500 °C. Pt was used historically but V₂O₅ is cheaper and more practical.'
                },
                {
                    id: 'ch12-sec03-ex02',
                    type: 'multiple-choice',
                    question: 'A piece of iron is placed in cold concentrated H₂SO₄. What happens?',
                    choices: ['It dissolves rapidly forming FeSO₄ and H₂', 'No visible reaction — passivation occurs', 'It dissolves forming Fe₂(SO₄)₃ and SO₂', 'The acid is reduced to H₂S'],
                    answer: 1,
                    explanation: 'Cold concentrated H₂SO₄ passivates iron and aluminum — a dense, adherent oxide layer forms that prevents further reaction. This is why conc. H₂SO₄ can be stored in iron/aluminum containers.'
                },
                {
                    id: 'ch12-sec03-ex03',
                    type: 'short-answer',
                    question: 'Explain why SO₃ is NOT absorbed directly in water during the Contact Process.',
                    answer: 'When SO₃ contacts water vapor, it forms a very stable sulfuric acid mist (fine droplets) rather than dissolving, making absorption very inefficient and releasing corrosive aerosols. Instead, SO₃ is absorbed in concentrated H₂SO₄ to form oleum (H₂S₂O₇), which is then carefully diluted with water to give H₂SO₄.'
                },
                {
                    id: 'ch12-sec03-ex04',
                    type: 'multiple-choice',
                    question: 'Both SO₂ and Cl₂ can be used as bleaching agents, but their bleaching mechanisms are fundamentally different. Which statement correctly distinguishes them?',
                    choices: [
                        'SO₂ bleaches by oxidation; Cl₂ bleaches by reduction',
                        'SO₂ bleaches by combining with colored compounds (reversible); Cl₂ bleaches by oxidizing them (permanent)',
                        'Both bleach by the same mechanism — they both produce HClO',
                        'Cl₂ bleaches by reduction; SO₂ bleaches by oxidation'
                    ],
                    answer: 1,
                    explanation: 'SO₂ bleaches by combining with colored organic compounds to form colorless addition products — this is reversible (heating restores the color). Cl₂ (via HClO) bleaches by oxidizing the colored compounds, destroying their chromophore permanently. This is why Cl₂-bleached fabrics stay white, while SO₂-bleached ones may yellow again over time.'
                },
                {
                    id: 'ch12-sec03-ex05',
                    type: 'multiple-choice',
                    question: 'A copper wire is placed in hot concentrated H₂SO₄. Which products are formed?',
                    choices: [
                        'CuSO₄, H₂O only (no gas produced)',
                        'CuSO₄, SO₂, and H₂O',
                        'CuO, SO₂, and H₂O',
                        'No reaction occurs — copper does not react with sulfuric acid'
                    ],
                    answer: 1,
                    explanation: 'Hot concentrated H₂SO₄ is a strong oxidizing acid and can dissolve copper (unlike dilute H₂SO₄, which cannot). The equation is: Cu + 2H₂SO₄(conc, hot) → CuSO₄ + SO₂↑ + 2H₂O. The SO₂ produced turns acidified KMnO₄ colorless, confirming its presence. Cold concentrated H₂SO₄ passivates copper but does not dissolve it.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Nitrogen and Its Compounds (氮及其化合物)
        // ============================================================
        {
            id: 'ch12-sec04',
            title: 'Nitrogen & Its Compounds',
            content: `
                <h2>Nitrogen &amp; Its Compounds</h2>

                <p>Nitrogen makes up 78% of our atmosphere as N₂. Yet it is surprisingly inert at room temperature — the triple bond (N≡N, bond energy 945 kJ/mol) is the strongest diatomic bond, making N₂ very stable. "Fixing" atmospheric nitrogen into reactive compounds is one of chemistry's greatest industrial achievements.</p>

                <h3>Nitrogen Gas (N₂)</h3>
                <ul>
                    <li>Colorless, odorless, very stable gas</li>
                    <li>Can react at high temperature/pressure or with lightning:</li>
                    <li>\\(\\text{N}_2 + \\text{O}_2 \\xrightarrow{\\text{lightning or high T}} 2\\text{NO}\\)</li>
                    <li>Used as inert atmosphere in food packaging, welding, liquid N₂ for freezing</li>
                </ul>

                <h3>Nitric Oxide (NO) and Nitrogen Dioxide (NO₂)</h3>

                <div class="env-block example">
                    <div class="env-title">N₂ → NO → NO₂</div>
                    <div class="env-body">
                        <p><strong>NO</strong> (colorless, slightly soluble in water):</p>
                        <p>\\(2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2\\) (rapid in air)</p>
                        <p><strong>NO₂</strong> (reddish-brown, pungent, toxic):</p>
                        <p>\\(3\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_3 + \\text{NO}\\) (tail gas treatment)</p>
                        <p>In this last reaction, NO₂ disproportionates: N(+4) → N(+5) in HNO₃ and N(+2) in NO.</p>
                    </div>
                </div>

                <h3>Ammonia (NH₃)</h3>
                <p>Ammonia is the key intermediate for all nitrogen fertilizers, explosives, and many chemicals. It is made industrially by the <strong>Haber-Bosch Process</strong>:</p>

                <p>\\(\\text{N}_2 + 3\\text{H}_2 \\xrightarrow[\\text{Fe catalyst}]{450°C,\\,20{-}50\\text{ MPa}} 2\\text{NH}_3 \\quad \\Delta H = -92\\text{ kJ/mol}\\)</p>

                <div class="env-block intuition">
                    <div class="env-title">NH₃ Properties</div>
                    <div class="env-body">
                        <ul>
                            <li>Colorless gas with sharp, suffocating odor; less dense than air</li>
                            <li>Very soluble in water (1 volume water dissolves ~700 volumes NH₃ at 20 °C) — used in "fountain" experiment</li>
                            <li>Weakly basic: \\(\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3\\cdot\\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-\\)</li>
                            <li>With HCl: \\(\\text{NH}_3 + \\text{HCl} \\rightarrow \\text{NH}_4\\text{Cl}\\) (white smoke)</li>
                            <li>Reducing agent: \\(4\\text{NH}_3 + 5\\text{O}_2 \\xrightarrow{\\text{Pt}} 4\\text{NO} + 6\\text{H}_2\\text{O}\\) (catalytic oxidation, industrial route to HNO₃)</li>
                        </ul>
                    </div>
                </div>

                <h3>Nitric Acid (HNO₃) — The Oxidizing Acid</h3>
                <p>HNO₃ is a strong acid AND a powerful oxidizing agent. The oxidizing species is NO₃⁻ in acid solution, not H⁺.</p>

                <ul>
                    <li><strong>Dilute HNO₃ + Cu:</strong> \\(3\\text{Cu} + 8\\text{HNO}_3\\text{(dilute)} \\rightarrow 3\\text{Cu(NO}_3)_2 + 2\\text{NO}\\uparrow + 4\\text{H}_2\\text{O}\\)</li>
                    <li><strong>Concentrated HNO₃ + Cu:</strong> \\(\\text{Cu} + 4\\text{HNO}_3\\text{(conc.)} \\rightarrow \\text{Cu(NO}_3)_2 + 2\\text{NO}_2\\uparrow + 2\\text{H}_2\\text{O}\\)</li>
                    <li><strong>Aqua regia</strong> (3:1 conc. HCl:HNO₃): dissolves gold and platinum — neither acid alone can</li>
                    <li>Fe and Al are passivated by cold concentrated HNO₃ (same as conc. H₂SO₄)</li>
                </ul>

                <div class="env-block remark">
                    <div class="env-title">The Nitrogen Cycle in Industry</div>
                    <div class="env-body">
                        <p>\\(\\text{N}_2 \\xrightarrow{\\text{Haber}} \\text{NH}_3 \\xrightarrow{\\text{Ostwald}} \\text{NO} \\xrightarrow{+\\text{O}_2} \\text{NO}_2 \\xrightarrow{+\\text{H}_2\\text{O}} \\text{HNO}_3\\)</p>
                        <p>This chain of reactions, developed in the early 20th century, allowed mass production of fertilizers and explosives — transforming agriculture and warfare forever.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="nitrogen-cycle-viz"></div>
            `,
            visualizations: [
                {
                    id: 'nitrogen-cycle-viz',
                    title: 'Industrial Nitrogen Cycle: N₂ to HNO₃',
                    description: 'Click each compound to see how nitrogen transforms through the industrial cycle.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 340, scale: 40, originX: 320, originY: 170});
                        var ctx = viz.ctx;
                        var selected = -1;
                        var t = 0;

                        var nodes = [
                            {id: 0, label: 'N\u2082', x: 320, y: 60,  color: '#58a6ff', ox: 0,  desc: 'Atmospheric N\u2082 (78% of air)\nN\u2261N triple bond \u2014 very stable'},
                            {id: 1, label: 'NH\u2083', x: 110, y: 180, color: '#3fb950', ox: -3, desc: 'Haber-Bosch: N\u2082 + 3H\u2082 \u2192 2NH\u2083\nFe catalyst, 450\u00b0C, 20-50 MPa'},
                            {id: 2, label: 'NO',   x: 320, y: 180, color: '#f0883e', ox: +2, desc: 'Ostwald: 4NH\u2083 + 5O\u2082 \u2192 4NO + 6H\u2082O\nPt catalyst, ~900\u00b0C'},
                            {id: 3, label: 'NO\u2082', x: 530, y: 180, color: '#f85149', ox: +4, desc: '2NO + O\u2082 \u2192 2NO\u2082\nRed-brown gas'},
                            {id: 4, label: 'HNO\u2083', x: 320, y: 290, color: '#bc8cff', ox: +5, desc: '3NO\u2082 + H\u2082O \u2192 2HNO\u2083 + NO\nStrong oxidizing acid'}
                        ];

                        var edges = [
                            {from: 0, to: 1, label: 'Haber-Bosch'},
                            {from: 0, to: 2, label: 'lightning/high T'},
                            {from: 1, to: 2, label: 'Ostwald (Pt)'},
                            {from: 2, to: 3, label: '+ O\u2082'},
                            {from: 3, to: 4, label: '+ H\u2082O'},
                            {from: 4, to: 2, label: 'NO released', dashed: true}
                        ];

                        function hitTest(mx, my) {
                            for (var i = 0; i < nodes.length; i++) {
                                var n = nodes[i];
                                var dx = mx - n.x, dy = my - n.y;
                                if (Math.sqrt(dx * dx + dy * dy) < 32) return i;
                            }
                            return -1;
                        }

                        viz.canvas.addEventListener('click', function(e) {
                            var r = viz.canvas.getBoundingClientRect();
                            var scaleX = viz.canvas.width / viz.canvas.style.width.replace('px', '') / (window.devicePixelRatio || 1);
                            var mx = (e.clientX - r.left);
                            var my = (e.clientY - r.top);
                            selected = hitTest(mx, my);
                        });

                        function draw() {
                            viz.clear();
                            var W = viz.width;
                            t++;

                            // Draw edges
                            edges.forEach(function(e) {
                                var fn = nodes[e.from], tn = nodes[e.to];
                                ctx.strokeStyle = '#30363d';
                                ctx.lineWidth = 2;
                                if (e.dashed) ctx.setLineDash([5, 5]);
                                ctx.beginPath();
                                ctx.moveTo(fn.x, fn.y);
                                ctx.lineTo(tn.x, tn.y);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Arrowhead
                                var dx = tn.x - fn.x, dy = tn.y - fn.y;
                                var len = Math.sqrt(dx * dx + dy * dy);
                                var ux = dx / len, uy = dy / len;
                                var ax = tn.x - ux * 33, ay = tn.y - uy * 33;
                                ctx.fillStyle = '#30363d';
                                ctx.beginPath();
                                ctx.moveTo(ax, ay);
                                ctx.lineTo(ax - 10 * ux + 6 * uy, ay - 10 * uy - 6 * ux);
                                ctx.lineTo(ax - 10 * ux - 6 * uy, ay - 10 * uy + 6 * ux);
                                ctx.closePath(); ctx.fill();

                                // Edge label
                                var mx2 = (fn.x + tn.x) / 2, my2 = (fn.y + tn.y) / 2;
                                var perp = [-uy * 12, ux * 12];
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(e.label, mx2 + perp[0], my2 + perp[1]);
                            });

                            // Draw nodes
                            nodes.forEach(function(n, i) {
                                var isSelected = i === selected;
                                var r = 28;
                                // Pulse if selected
                                if (isSelected) {
                                    var pulse = 3 * Math.sin(t * 0.1);
                                    ctx.fillStyle = n.color + '22';
                                    ctx.beginPath();
                                    ctx.arc(n.x, n.y, r + 8 + pulse, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                                ctx.fillStyle = isSelected ? n.color + '55' : '#1a1a40';
                                ctx.strokeStyle = n.color;
                                ctx.lineWidth = isSelected ? 2.5 : 1.5;
                                ctx.beginPath();
                                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                                ctx.fill(); ctx.stroke();

                                ctx.fillStyle = n.color;
                                ctx.font = 'bold 15px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(n.label, n.x, n.y - 4);
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillStyle = '#8b949e';
                                ctx.fillText(n.ox >= 0 ? '+' + n.ox : '' + n.ox, n.x, n.y + 10);
                                ctx.textBaseline = 'alphabetic';
                            });

                            // Info box
                            if (selected >= 0) {
                                var sn = nodes[selected];
                                var lines = sn.desc.split('\n');
                                ctx.fillStyle = '#0c0c20';
                                ctx.strokeStyle = sn.color + '99';
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.roundRect(30, 305, W - 60, 45, 6);
                                ctx.fill(); ctx.stroke();
                                ctx.fillStyle = sn.color;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(lines[0], W / 2, 322);
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText(lines[1], W / 2, 338);
                            } else {
                                ctx.fillStyle = '#4a4a7a';
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Click a compound to see its role in the nitrogen cycle', W / 2, 325);
                            }

                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Industrial Nitrogen Cycle', W / 2, 25);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-sec04-ex01',
                    type: 'multiple-choice',
                    question: 'What gas is produced when copper reacts with dilute HNO₃?',
                    choices: ['NO₂ (red-brown)', 'NO (colorless)', 'H₂', 'N₂'],
                    answer: 1,
                    explanation: 'With dilute HNO₃: 3Cu + 8HNO₃(dilute) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O. NO is colorless, but it turns red-brown on contact with air: 2NO + O₂ → 2NO₂.'
                },
                {
                    id: 'ch12-sec04-ex02',
                    type: 'multiple-choice',
                    question: 'In the Haber-Bosch process, why are high pressure and moderate temperature (not very high temperature) used?',
                    choices: [
                        'High pressure and low temperature both increase yield; low temperature is used for safety',
                        'High pressure increases yield (fewer gas moles on right); moderate temperature balances yield with reaction rate',
                        'High pressure and high temperature both increase yield; temperature is only limited by catalyst',
                        'Pressure has no effect on this reaction'
                    ],
                    answer: 1,
                    explanation: 'N₂ + 3H₂ ⇌ 2NH₃ has fewer moles of gas on the right (2 vs 4), so high pressure favors product. Higher temperature speeds the reaction but shifts equilibrium LEFT (exothermic). ~450°C is a compromise: fast enough rate with acceptable yield. The Fe catalyst makes this feasible.'
                },
                {
                    id: 'ch12-sec04-ex03',
                    type: 'short-answer',
                    question: 'Write the equation for the industrial catalytic oxidation of NH₃ (the Ostwald Process), and name the catalyst.',
                    answer: '4NH₃ + 5O₂ → 4NO + 6H₂O (Pt or Pt-Rh alloy catalyst, ~900°C). This is the key step for converting ammonia to NO, which is further oxidized to NO₂ and then absorbed in water to give HNO₃.'
                },
                {
                    id: 'ch12-sec04-ex04',
                    type: 'multiple-choice',
                    question: 'In the Ostwald Process for manufacturing nitric acid, place the following steps in the correct order: (1) Absorb NO₂ in water, (2) Oxidize NO to NO₂, (3) Catalytically oxidize NH₃ to NO',
                    choices: [
                        '1 → 2 → 3',
                        '2 → 3 → 1',
                        '3 → 2 → 1',
                        '3 → 1 → 2'
                    ],
                    answer: 2,
                    explanation: 'The Ostwald Process proceeds in three stages: (3) NH₃ is catalytically oxidized to NO using a Pt catalyst at ~900°C: 4NH₃ + 5O₂ → 4NO + 6H₂O; then (2) NO is further oxidized to NO₂ in excess air: 2NO + O₂ → 2NO₂; finally (1) NO₂ is absorbed in water to give HNO₃: 3NO₂ + H₂O → 2HNO₃ + NO. The released NO is recycled.'
                },
                {
                    id: 'ch12-sec04-ex05',
                    type: 'multiple-choice',
                    question: 'Excess copper is added to dilute HNO₃. Which gas is produced, and what color is it when it first emerges from solution?',
                    choices: [
                        'NO₂ — reddish-brown',
                        'NO — colorless, but turns reddish-brown in air',
                        'N₂O — colorless',
                        'H₂ — colorless'
                    ],
                    answer: 1,
                    explanation: 'Dilute HNO₃ is reduced to NO (colorless) by copper: 8HNO₃(dilute) + 3Cu → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O. The gas is colorless when it leaves the solution, but rapidly turns reddish-brown in air because NO is oxidized: 2NO + O₂ → 2NO₂. Concentrated HNO₃ would produce reddish-brown NO₂ directly.'
                },
                {
                    id: 'ch12-sec04-ex06',
                    type: 'short-answer',
                    question: 'In the ammonia fountain demonstration, a flask full of dry NH₃ is inverted over a water trough. When a small amount of water enters, a spectacular fountain appears and the water level inside the flask rises dramatically. Explain why this happens using the properties of NH₃.',
                    answer: 'NH₃ is extraordinarily soluble in water — about 700 volumes of NH₃ dissolve in 1 volume of water at room temperature. When the initial water droplet enters, it rapidly dissolves the NH₃ near the opening, causing a sharp pressure drop inside the flask. This creates a near-vacuum. Atmospheric pressure then pushes the water forcefully upward into the flask in a fountain. The water continues rising until nearly all NH₃ is dissolved or the pressure equalizes. The resulting solution is alkaline (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻), which can be shown by adding an indicator that turns blue.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Environmental Issues (环境问题)
        // ============================================================
        {
            id: 'ch12-sec05',
            title: 'Environmental Issues',
            content: `
                <h2>Environmental Issues: Acid Rain, Ozone, and Smog</h2>

                <p>The nonmetals we have studied — sulfur, nitrogen, and chlorine — are also central players in serious environmental problems. Understanding the chemistry helps us understand both the problems and potential solutions.</p>

                <h3>Acid Rain (酸雨)</h3>
                <p>Normal rain has pH ≈ 5.6 (naturally slightly acidic from dissolved CO₂). Acid rain has pH &lt; 5.6, often 4–5, sometimes even lower near industrial areas.</p>

                <div class="env-block intuition">
                    <div class="env-title">Formation of Acid Rain</div>
                    <div class="env-body">
                        <p><strong>Sulfur pathway (SO₂):</strong></p>
                        <p>\\(\\text{SO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{SO}_3\\)</p>
                        <p>\\(2\\text{SO}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4\\) (via catalysis by soot/metal ions)</p>
                        <p><strong>Nitrogen pathway (NOₓ):</strong></p>
                        <p>\\(2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2\\)</p>
                        <p>\\(3\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_3 + \\text{NO}\\)</p>
                        <p>Both H₂SO₄ and HNO₃ in precipitation = acid rain.</p>
                    </div>
                </div>

                <p><strong>Sources of SO₂ and NOₓ:</strong></p>
                <ul>
                    <li>Burning of sulfur-containing fossil fuels (coal, oil) — main source of SO₂</li>
                    <li>Smelting of metal sulfide ores (e.g., 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂)</li>
                    <li>Vehicle exhaust — main source of NOₓ (high-temperature combustion)</li>
                    <li>Industrial boilers and power plants</li>
                </ul>

                <p><strong>Effects of acid rain:</strong></p>
                <ul>
                    <li>Damages forests, lakes, and aquatic life</li>
                    <li>Corrodes stone statues, buildings (especially limestone/marble: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂)</li>
                    <li>Damages crops and soil ecosystems</li>
                    <li>Corrodes metal structures and bridges</li>
                </ul>

                <div class="viz-placeholder" data-viz="acid-rain-viz"></div>

                <h3>Ozone Layer Depletion</h3>
                <p>The stratospheric ozone layer (15–50 km altitude) absorbs harmful UV-B radiation from the sun. Chlorofluorocarbons (CFCs) — formerly used in refrigerants and aerosols — catalytically destroy ozone:</p>
                <p>\\(\\text{CF}_2\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\cdot + \\text{Cl}^\\cdot\\)</p>
                <p>\\(\\text{Cl}^\\cdot + \\text{O}_3 \\rightarrow \\text{ClO}^\\cdot + \\text{O}_2\\)</p>
                <p>\\(\\text{ClO}^\\cdot + \\text{O} \\rightarrow \\text{Cl}^\\cdot + \\text{O}_2\\) (Cl· is regenerated — it is a catalyst)</p>
                <p>One Cl atom can destroy ~100,000 ozone molecules! The Montreal Protocol (1987) banned CFCs.</p>

                <h3>Photochemical Smog (光化学烟雾)</h3>
                <p>In cities with intense sunlight and heavy traffic, NOₓ and unburned hydrocarbons undergo photochemical reactions to produce ozone (near ground level — harmful!), PAN (peroxyacetyl nitrate), and aldehydes. This creates the brown haze characteristic of photochemical smog.</p>
                <ul>
                    <li>\\(\\text{NO}_2 \\xrightarrow{h\\nu} \\text{NO} + \\text{O}\\)</li>
                    <li>\\(\\text{O} + \\text{O}_2 \\rightarrow \\text{O}_3\\) (ground-level ozone — irritates lungs)</li>
                </ul>

                <div class="env-block example">
                    <div class="env-title">Pollution Control Strategies</div>
                    <div class="env-body">
                        <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="text-align:left;padding:4px 8px;">Problem</th>
                                <th style="text-align:left;padding:4px 8px;">Key Chemical</th>
                                <th style="text-align:left;padding:4px 8px;">Control Method</th>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Acid rain (S)</td>
                                <td style="padding:4px 8px;">SO₂</td>
                                <td style="padding:4px 8px;">Flue gas desulfurization (CaO + SO₂ → CaSO₃); use low-sulfur coal</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Acid rain (N)</td>
                                <td style="padding:4px 8px;">NOₓ</td>
                                <td style="padding:4px 8px;">Catalytic converters: 2NO + 2CO → N₂ + 2CO₂</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Ozone depletion</td>
                                <td style="padding:4px 8px;">CFCs (Cl·)</td>
                                <td style="padding:4px 8px;">Replace CFCs with HFCs (no chlorine); Montreal Protocol</td>
                            </tr>
                            <tr>
                                <td style="padding:4px 8px;">Photochemical smog</td>
                                <td style="padding:4px 8px;">NOₓ + HC</td>
                                <td style="padding:4px 8px;">Catalytic converters; electric vehicles; emission standards</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Ground-level Ozone vs Stratospheric Ozone</div>
                    <div class="env-body">
                        <p>O₃ in the stratosphere is beneficial — it shields us from UV radiation. But O₃ at ground level (troposphere) is a pollutant — it irritates the respiratory system, damages crops, and degrades rubber and plastics. Same molecule, very different context!</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'acid-rain-viz',
                    title: 'Acid Rain Formation Cycle',
                    description: 'Watch SO₂ and NOₓ from industrial and vehicle sources transform into acid rain. Use the pH slider to see the effect.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 640, height: 360, scale: 40, originX: 320, originY: 180});
                        var ctx = viz.ctx;
                        var t = 0;
                        var ph = 4.2;
                        var raindrops = [];

                        VizEngine.createSlider(controls, 'Pollution level', 1, 5, 3, 0.1, function(v) {
                            ph = 5.6 - (v - 1) * 0.35;
                            ph = Math.max(3.5, Math.min(5.6, ph));
                        });

                        function addRaindrop() {
                            raindrops.push({
                                x: 50 + Math.random() * 540,
                                y: 150 + Math.random() * 30,
                                vy: 1.5 + Math.random(),
                                size: 3 + Math.random() * 3
                            });
                        }

                        function phColor(ph) {
                            if (ph < 4.0) return '#f85149';
                            if (ph < 4.5) return '#f0883e';
                            if (ph < 5.0) return '#d29922';
                            if (ph < 5.6) return '#58a6ff';
                            return '#3fb950';
                        }

                        function draw() {
                            viz.clear();
                            var W = viz.width, H = viz.height;
                            t++;

                            // Sky gradient (upper portion)
                            var grad = ctx.createLinearGradient(0, 0, 0, 200);
                            grad.addColorStop(0, '#0c0c20');
                            grad.addColorStop(1, '#0d2030');
                            ctx.fillStyle = grad;
                            ctx.fillRect(0, 0, W, 200);

                            // Ground
                            ctx.fillStyle = '#0d200d';
                            ctx.fillRect(0, 300, W, H - 300);
                            ctx.fillStyle = '#1a2f1a';
                            ctx.fillRect(0, 295, W, 8);

                            // Clouds with SO2/NOx
                            [[150, 80], [320, 70], [490, 85]].forEach(function(pos) {
                                var cx = pos[0], cy = pos[1];
                                ctx.fillStyle = '#2a2a3a';
                                [[-30, 10], [0, 0], [30, 8], [-15, -10], [20, -12]].forEach(function(d) {
                                    ctx.beginPath();
                                    ctx.arc(cx + d[0], cy + d[1], 25, 0, Math.PI * 2);
                                    ctx.fill();
                                });
                            });

                            // SO2 and NO2 labels rising from factories
                            var factoryX = [80, 560];
                            factoryX.forEach(function(fx) {
                                // Factory outline
                                ctx.fillStyle = '#1a1a2a';
                                ctx.strokeStyle = '#3a3a5a';
                                ctx.lineWidth = 1.5;
                                ctx.fillRect(fx - 25, 260, 50, 40);
                                ctx.strokeRect(fx - 25, 260, 50, 40);
                                // Chimney
                                ctx.fillRect(fx - 8, 230, 16, 32);
                                ctx.strokeRect(fx - 8, 230, 16, 32);
                                // Smoke
                                var smokeY = 230 - ((t * 0.8 + fx) % 80);
                                if (smokeY > 60) {
                                    ctx.fillStyle = 'rgba(200,180,150,0.15)';
                                    ctx.beginPath();
                                    ctx.arc(fx, smokeY, 14, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                                ctx.fillStyle = '#f0883e';
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('SO\u2082 / NO\u2093', fx, 225);
                            });

                            // Car
                            var carX = 250 + Math.sin(t * 0.01) * 30;
                            ctx.fillStyle = '#2a3a5a';
                            ctx.beginPath();
                            ctx.roundRect(carX - 35, 280, 70, 20, 6);
                            ctx.fill();
                            ctx.fillStyle = '#1a2a4a';
                            ctx.beginPath();
                            ctx.roundRect(carX - 20, 268, 40, 16, 4);
                            ctx.fill();
                            // Exhaust
                            ctx.fillStyle = 'rgba(220,180,100,0.2)';
                            ctx.beginPath();
                            ctx.arc(carX - 38, 295, 6, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillStyle = '#f85149';
                            ctx.font = '9px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('NO\u2093', carX - 55, 290);

                            // Raindrops
                            if (t % 4 === 0) addRaindrop();
                            var dropColor = phColor(ph);
                            raindrops.forEach(function(d) {
                                ctx.fillStyle = dropColor + 'bb';
                                ctx.beginPath();
                                ctx.ellipse(d.x, d.y, d.size * 0.6, d.size, 0, 0, Math.PI * 2);
                                ctx.fill();
                                d.y += d.vy * 2;
                            });
                            raindrops = raindrops.filter(function(d) { return d.y < 300; });

                            // pH indicator
                            var pColor = phColor(ph);
                            ctx.fillStyle = pColor;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Rain pH: ' + ph.toFixed(1), W / 2, 195);

                            var pLabel = ph < 5.6 ? 'ACID RAIN' : 'Normal rain';
                            ctx.fillStyle = ph < 5.6 ? '#f85149' : '#3fb950';
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText(pLabel, W / 2, 215);

                            // Reactions text at bottom
                            ctx.fillStyle = '#4a4a7a';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('SO\u2082 + H\u2082O \u2192 H\u2082SO\u2083  |  3NO\u2082 + H\u2082O \u2192 2HNO\u2083 + NO', W / 2, 340);

                            // Title
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Acid Rain Formation', W / 2, 22);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-sec05-ex01',
                    type: 'multiple-choice',
                    question: 'What is the approximate pH of normal (unpolluted) rainwater?',
                    choices: ['7.0 (neutral)', '5.6 (slightly acidic from CO₂)', '4.0 (moderately acidic)', '6.5'],
                    answer: 1,
                    explanation: 'CO₂ in air dissolves in rainwater forming carbonic acid: CO₂ + H₂O → H₂CO₃. This gives normal rain a pH of about 5.6. Rain with pH below 5.6 is defined as acid rain.'
                },
                {
                    id: 'ch12-sec05-ex02',
                    type: 'multiple-choice',
                    question: 'Why is a single chlorine atom from a CFC molecule so damaging to the ozone layer?',
                    choices: [
                        'Because each Cl atom reacts with exactly one O₃ molecule',
                        'Because Cl atoms form stable compounds with O₃',
                        'Because Cl· acts as a catalyst and is regenerated after each O₃ destruction cycle',
                        'Because CFCs release many Cl atoms at once'
                    ],
                    answer: 2,
                    explanation: 'Cl· is regenerated in the chain reaction: Cl· + O₃ → ClO· + O₂, then ClO· + O → Cl· + O₂. The catalyst Cl· is not consumed, so one atom can destroy ~100,000 ozone molecules before being deactivated by other reactions.'
                },
                {
                    id: 'ch12-sec05-ex03',
                    type: 'multiple-choice',
                    question: 'Which reaction is used in flue gas desulfurization (FGD) to remove SO₂ from power plant emissions?',
                    choices: [
                        'SO₂ + 2NaOH → Na₂SO₃ + H₂O',
                        'SO₂ + CaO → CaSO₃ (or SO₂ + Ca(OH)₂ → CaSO₃ + H₂O)',
                        'SO₂ + H₂O → H₂SO₃',
                        'SO₂ + O₂ → SO₃'
                    ],
                    answer: 1,
                    explanation: 'In flue gas desulfurization, limestone (CaCO₃) or lime (CaO/Ca(OH)₂) is used: SO₂ + Ca(OH)₂ → CaSO₃↓ + H₂O. The CaSO₃ can be further oxidized to gypsum (CaSO₄), which has commercial uses in construction.'
                },
                {
                    id: 'ch12-sec05-ex04',
                    type: 'short-answer',
                    question: 'Marble statues (CaCO₃) are damaged by acid rain. Write the chemical equation and explain what happens to the marble surface.',
                    answer: 'CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑ (and CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂↑). The marble is dissolved by the acids in acid rain, eroding the surface. CaSO₄ (gypsum) is slightly soluble and may form a crust that eventually flakes off, progressively destroying the statue.'
                },
                {
                    id: 'ch12-sec05-ex05',
                    type: 'short-answer',
                    question: 'Distinguish between the role of ozone in the stratosphere and at ground level. Why is O₃ beneficial in one place but harmful in another?',
                    answer: 'Stratospheric ozone (15–50 km) is beneficial: it absorbs UV-B radiation from the sun, protecting living organisms from DNA damage and skin cancer. Ground-level ozone (troposphere) is harmful: it is a strong oxidant that damages lung tissue, irritates the respiratory tract, harms crops, and degrades rubber/plastics. The molecule is the same, but its location determines its effect — beneficial UV shield high above, harmful pollutant at breathing level.'
                }
            ]
        }

    ] // end sections
}); // end CHAPTERS.push
