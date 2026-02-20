window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Chemical Bonds',
    subtitle: 'The Forces That Hold Atoms Together',
    sections: [

        // ============================================================
        // SECTION 1: Ionic Bonds (离子键)
        // ============================================================
        {
            id: 'ch06-sec01',
            title: 'Ionic Bonds',
            content: `
                <h2>Ionic Bonds (离子键)</h2>

                <p>Atoms are social creatures — they rarely exist alone! When atoms combine, they form <strong>chemical bonds</strong>. The first type we'll explore is the <strong>ionic bond</strong>, where one atom hands off an electron to another, creating an electrostatic attraction between the resulting ions.</p>

                <div class="env-block intuition">
                    <div class="env-title">Core Idea</div>
                    <div class="env-body">
                        <p>An <strong>ionic bond</strong> forms when a metal atom <em>transfers</em> one or more valence electrons to a nonmetal atom. This produces a positive cation (metal) and a negative anion (nonmetal), which attract each other strongly.</p>
                        <p style="text-align:center;">\\(\\text{Na} \\rightarrow \\text{Na}^+ + e^-\\) &nbsp;&nbsp; and &nbsp;&nbsp; \\(\\text{Cl} + e^- \\rightarrow \\text{Cl}^-\\)</p>
                        <p style="text-align:center;">\\(\\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{NaCl}\\)</p>
                    </div>
                </div>

                <h3>Why Does Electron Transfer Happen?</h3>

                <p>Atoms obey the <strong>octet rule</strong>: they "want" 8 electrons in their outermost shell (like the noble gases). Sodium has 1 valence electron — it's far easier to give it away than to gain 7 more. Chlorine has 7 valence electrons — it's far easier to accept 1 than to lose 7. The transfer benefits both atoms!</p>

                <ul>
                    <li><strong>Na</strong>: [Ne] 3s¹ → loses 1e⁻ → Na⁺: [Ne] (stable, like neon)</li>
                    <li><strong>Cl</strong>: [Ne] 3s²3p⁵ → gains 1e⁻ → Cl⁻: [Ne] 3s²3p⁶ = [Ar] (stable, like argon)</li>
                </ul>

                <h3>Lattice Energy</h3>

                <p>When ions pack into a crystal, energy is released — the <strong>lattice energy</strong>:</p>
                <p style="text-align:center;">\\(U \\propto \\dfrac{z^+ z^-}{r_0}\\)</p>
                <p>Higher charges and smaller ionic radii → stronger ionic bond → higher melting point.</p>

                <div class="env-block example">
                    <div class="env-title">Lattice Energy Comparison</div>
                    <div class="env-body">
                        <table style="border-collapse:collapse;width:100%;text-align:center;font-size:13px;">
                            <tr style="background:#21262d;">
                                <th style="padding:6px;border:1px solid #30363d;">Compound</th>
                                <th style="padding:6px;border:1px solid #30363d;">Ion Charges</th>
                                <th style="padding:6px;border:1px solid #30363d;">Lattice Energy (kJ/mol)</th>
                                <th style="padding:6px;border:1px solid #30363d;">Melting Point (°C)</th>
                            </tr>
                            <tr>
                                <td style="padding:6px;border:1px solid #30363d;">NaF</td>
                                <td style="padding:6px;border:1px solid #30363d;">+1, −1</td>
                                <td style="padding:6px;border:1px solid #30363d;">923</td>
                                <td style="padding:6px;border:1px solid #30363d;">993</td>
                            </tr>
                            <tr>
                                <td style="padding:6px;border:1px solid #30363d;">MgO</td>
                                <td style="padding:6px;border:1px solid #30363d;">+2, −2</td>
                                <td style="padding:6px;border:1px solid #30363d;">3795</td>
                                <td style="padding:6px;border:1px solid #30363d;">2852</td>
                            </tr>
                            <tr>
                                <td style="padding:6px;border:1px solid #30363d;">AlN</td>
                                <td style="padding:6px;border:1px solid #30363d;">+3, −3</td>
                                <td style="padding:6px;border:1px solid #30363d;">7963</td>
                                <td style="padding:6px;border:1px solid #30363d;">2200</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ionic-crystal-builder"></div>

                <h3>Properties of Ionic Compounds</h3>

                <ul>
                    <li><strong>High melting/boiling points</strong>: The lattice energy is large, so you need a lot of heat to break the crystal apart.</li>
                    <li><strong>Hard but brittle</strong>: Ions are locked in a rigid lattice; shifting layers causes like charges to align and the crystal shatters.</li>
                    <li><strong>Conduct electricity when molten or dissolved</strong>: Free ions act as charge carriers. Solid NaCl doesn't conduct because ions can't move.</li>
                    <li><strong>Often soluble in water</strong>: Water molecules surround and stabilize the ions (solvation).</li>
                </ul>

                <div class="env-block remark">
                    <div class="env-title">Electronegativity & Ionic Character</div>
                    <div class="env-body">
                        <p>Ionic bonds typically form when the electronegativity difference between the two atoms is large (generally \\(\\Delta\\chi > 1.7\\)). The bigger the difference, the more ionic the bond.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ionic-crystal-builder',
                    title: 'NaCl Ionic Crystal Builder',
                    description: 'Watch Na\u207a and Cl\u207b ions stack into an ionic lattice. Use the slider to grow the crystal.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 360, scale: 36, originX: 280, originY: 180});
                        var layers = 2;

                        VizEngine.createSlider(controls, 'Crystal Size', 1, 4, 2, 1, function(v) {
                            layers = Math.round(v);
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var spacing = 0.9;
                            var ions = [];
                            for (var row = 0; row < layers * 2; row++) {
                                for (var col = 0; col < layers * 2; col++) {
                                    var x = (col - layers + 0.5) * spacing;
                                    var y = (layers - 0.5 - row) * spacing;
                                    var isNa = (row + col) % 2 === 0;
                                    ions.push({x: x, y: y, isNa: isNa});
                                }
                            }

                            var ctx = viz.ctx;
                            // Draw bonds
                            for (var i = 0; i < ions.length; i++) {
                                for (var j = i + 1; j < ions.length; j++) {
                                    var a = ions[i], b = ions[j];
                                    if (a.isNa === b.isNa) continue;
                                    var dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                                    if (dist < spacing * 1.05) {
                                        var p1 = viz.toScreen(a.x, a.y);
                                        var p2 = viz.toScreen(b.x, b.y);
                                        ctx.strokeStyle = '#4a4a7a';
                                        ctx.lineWidth = 1.5;
                                        ctx.beginPath();
                                        ctx.moveTo(p1[0], p1[1]);
                                        ctx.lineTo(p2[0], p2[1]);
                                        ctx.stroke();
                                    }
                                }
                            }

                            // Draw ions
                            for (var i = 0; i < ions.length; i++) {
                                var ion = ions[i];
                                if (ion.isNa) {
                                    viz.drawAtom(ion.x, ion.y, 0.32, '#58a6ff', 'Na\u207a', '#fff');
                                } else {
                                    viz.drawAtom(ion.x, ion.y, 0.38, '#f85149', 'Cl\u207b', '#fff');
                                }
                            }

                            viz.screenText('Na\u207a (cation)', 80, 28, '#58a6ff', 12, 'center');
                            viz.screenText('Cl\u207b (anion)', 80, 46, '#f85149', 12, 'center');
                            viz.screenText(layers * 2 + '\u00d7' + layers * 2 + ' NaCl ionic lattice', viz.width / 2, viz.height - 14, '#8b949e', 12, 'center');
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-sec01-ex01',
                    type: 'multiple-choice',
                    question: 'Which of the following best describes an ionic bond?',
                    options: [
                        'Two atoms share a pair of electrons equally',
                        'A metal atom transfers electrons to a nonmetal atom, forming oppositely charged ions that attract',
                        'Positive metal ions are held together by a "sea" of delocalized electrons',
                        'Molecules are held together by weak dipole-dipole forces'
                    ],
                    answer: 1,
                    explanation: 'Ionic bonds form by complete electron transfer from a metal to a nonmetal, creating cations and anions that attract electrostatically.'
                },
                {
                    id: 'ch06-sec01-ex02',
                    type: 'multiple-choice',
                    question: 'Which compound has the highest lattice energy?',
                    options: ['NaCl', 'KCl', 'MgO', 'CaO'],
                    answer: 2,
                    explanation: 'MgO has Mg\u00b2\u207a and O\u00b2\u207b (charge +2/\u22122) with small ionic radii. Higher charges and smaller ions lead to much larger lattice energy (~3795 kJ/mol) vs NaCl (~787 kJ/mol).'
                },
                {
                    id: 'ch06-sec01-ex03',
                    type: 'multiple-choice',
                    question: 'Why do ionic compounds conduct electricity when dissolved in water but not in solid form?',
                    options: [
                        'Electrons become free in solution',
                        'Ions become mobile when separated by water molecules',
                        'The compound decomposes into metals',
                        'Water donates extra electrons'
                    ],
                    answer: 1,
                    explanation: 'In solid form, ions are locked in a fixed lattice and cannot move. When dissolved, water molecules surround and separate the ions, making them mobile charge carriers.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Covalent Bonds (共价键)
        // ============================================================
        {
            id: 'ch06-sec02',
            title: 'Covalent Bonds',
            content: `
                <h2>Covalent Bonds (共价键)</h2>

                <p>Not all atoms want to give or take electrons. When two nonmetal atoms meet, it's more efficient to <strong>share</strong> electrons. The result is a <strong>covalent bond</strong> — the backbone of most of chemistry's most important molecules.</p>

                <div class="env-block intuition">
                    <div class="env-title">Core Idea</div>
                    <div class="env-body">
                        <p>A <strong>covalent bond</strong> forms when two atoms share one or more pairs of electrons. Both atoms are simultaneously attracted to the shared electrons, holding the atoms together.</p>
                        <p style="text-align:center;">\\(\\text{H} \\cdot + \\cdot \\text{H} \\rightarrow \\text{H:H} \\quad (\\text{H}_2 \\text{ molecule})\\)</p>
                    </div>
                </div>

                <h3>Sigma (\\(\\sigma\\)) and Pi (\\(\\pi\\)) Bonds</h3>

                <p>Covalent bonds can be described in terms of orbital overlap:</p>
                <ul>
                    <li><strong>Sigma (\\(\\sigma\\)) bond</strong>: The first bond between two atoms, formed by direct (head-on) overlap along the internuclear axis. Every single, double, and triple bond contains one sigma bond.</li>
                    <li><strong>Pi (\\(\\pi\\)) bond</strong>: Formed by sideways overlap of p orbitals, above and below the sigma bond axis. Pi bonds only exist alongside a sigma bond.</li>
                </ul>

                <table style="width:100%;border-collapse:collapse;margin:1em 0;">
                    <tr style="border-bottom:1px solid #30363d;">
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Bond Type</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">\\(\\sigma\\) Bonds</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">\\(\\pi\\) Bonds</th>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#58a6ff;">Single (–)</td>
                        <td style="padding:8px;color:#8b949e;">1</td>
                        <td style="padding:8px;color:#8b949e;">0</td>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#3fb9a0;">Double (=)</td>
                        <td style="padding:8px;color:#8b949e;">1</td>
                        <td style="padding:8px;color:#8b949e;">1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px;color:#f0883e;">Triple (≡)</td>
                        <td style="padding:8px;color:#8b949e;">1</td>
                        <td style="padding:8px;color:#8b949e;">2</td>
                    </tr>
                </table>

                <h3>Polar vs. Nonpolar Covalent Bonds</h3>

                <p>The concept of <strong>electronegativity</strong> (\\(\\chi\\)) measures how strongly an atom attracts electrons in a bond.</p>

                <ul>
                    <li><strong>Nonpolar covalent bond</strong>: Electrons shared equally. Occurs between identical atoms (\\(\\Delta\\chi = 0\\)), e.g., H₂, Cl₂, O₂.</li>
                    <li><strong>Polar covalent bond</strong>: Electrons shared unequally. Occurs when \\(0 < \\Delta\\chi \\leq 1.7\\), e.g., HCl, H₂O. The more electronegative atom carries \\(\\delta^-\\).</li>
                </ul>

                <div class="env-block remark">
                    <div class="env-title">Bond Order and Strength</div>
                    <div class="env-body">
                        <p>Multiple bonds share more electron pairs, resulting in:</p>
                        <ul>
                            <li><strong>Higher bond energy</strong>: Harder to break (triple > double > single)</li>
                            <li><strong>Shorter bond length</strong>: Atoms pulled closer together</li>
                        </ul>
                        <table style="border-collapse:collapse;width:100%;text-align:center;font-size:13px;">
                            <tr style="background:#21262d;">
                                <th style="padding:5px;border:1px solid #30363d;">Bond</th>
                                <th style="padding:5px;border:1px solid #30363d;">Length (pm)</th>
                                <th style="padding:5px;border:1px solid #30363d;">Energy (kJ/mol)</th>
                            </tr>
                            <tr>
                                <td style="padding:5px;border:1px solid #30363d;">C–C</td>
                                <td style="padding:5px;border:1px solid #30363d;">154</td>
                                <td style="padding:5px;border:1px solid #30363d;">347</td>
                            </tr>
                            <tr>
                                <td style="padding:5px;border:1px solid #30363d;">C=C</td>
                                <td style="padding:5px;border:1px solid #30363d;">134</td>
                                <td style="padding:5px;border:1px solid #30363d;">614</td>
                            </tr>
                            <tr>
                                <td style="padding:5px;border:1px solid #30363d;">C≡C</td>
                                <td style="padding:5px;border:1px solid #30363d;">120</td>
                                <td style="padding:5px;border:1px solid #30363d;">839</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lewis-dot-drawer"></div>
                <div class="viz-placeholder" data-viz="bond-polarity-viz"></div>
            `,
            visualizations: [
                {
                    id: 'lewis-dot-drawer',
                    title: 'Lewis Dot Structure Drawer',
                    description: 'Select a molecule to visualize its Lewis dot structure with sigma and pi bond labels.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 300, scale: 44, originX: 280, originY: 150});

                        var molecules = {
                            'H\u2082': {
                                atoms: [{sym:'H', x:-1.0, y:0, r:0.22, col:'#8b949e', dots:0}, {sym:'H', x:1.0, y:0, r:0.22, col:'#8b949e', dots:0}],
                                bonds: [{i:0, j:1, order:1}],
                                desc: 'H\u2082: single \u03c3 bond, nonpolar'
                            },
                            'O\u2082': {
                                atoms: [{sym:'O', x:-0.9, y:0, r:0.30, col:'#f85149', dots:4}, {sym:'O', x:0.9, y:0, r:0.30, col:'#f85149', dots:4}],
                                bonds: [{i:0, j:1, order:2}],
                                desc: 'O\u2082: one \u03c3 bond + one \u03c0 bond'
                            },
                            'N\u2082': {
                                atoms: [{sym:'N', x:-0.8, y:0, r:0.28, col:'#58a6ff', dots:2}, {sym:'N', x:0.8, y:0, r:0.28, col:'#58a6ff', dots:2}],
                                bonds: [{i:0, j:1, order:3}],
                                desc: 'N\u2082: one \u03c3 + two \u03c0 bonds (very strong triple bond)'
                            },
                            'HF': {
                                atoms: [{sym:'H', x:-1.1, y:0, r:0.22, col:'#8b949e', dots:0}, {sym:'F', x:0.8, y:0, r:0.28, col:'#3fb9a0', dots:6}],
                                bonds: [{i:0, j:1, order:1}],
                                desc: 'HF: polar covalent, \u03b4+ on H, \u03b4\u2212 on F'
                            },
                            'CO\u2082': {
                                atoms: [
                                    {sym:'O', x:-1.5, y:0, r:0.30, col:'#f85149', dots:4},
                                    {sym:'C', x:0, y:0, r:0.26, col:'#8b949e', dots:0},
                                    {sym:'O', x:1.5, y:0, r:0.30, col:'#f85149', dots:4}
                                ],
                                bonds: [{i:0, j:1, order:2}, {i:1, j:2, order:2}],
                                desc: 'CO\u2082: linear, two C=O double bonds (\u03c3+\u03c0 each)'
                            }
                        };

                        var current = 'H\u2082';

                        Object.keys(molecules).forEach(function(name) {
                            VizEngine.createButton(controls, name, function() { current = name; draw(); });
                        });

                        function draw() {
                            viz.clear();
                            var mol = molecules[current];

                            for (var bi = 0; bi < mol.bonds.length; bi++) {
                                var b = mol.bonds[bi];
                                var a = mol.atoms[b.i], d = mol.atoms[b.j];
                                viz.drawBond(a.x, a.y, d.x, d.y, b.order, '#c9d1d9');
                            }

                            for (var ai = 0; ai < mol.atoms.length; ai++) {
                                var at = mol.atoms[ai];
                                viz.drawAtom(at.x, at.y, at.r, at.col, at.sym, '#fff');
                                if (at.dots > 0) viz.drawElectronDots(at.x, at.y, at.r, at.dots, '#d29922');
                            }

                            for (var bi = 0; bi < mol.bonds.length; bi++) {
                                var b = mol.bonds[bi];
                                var a = mol.atoms[b.i], d = mol.atoms[b.j];
                                var mx = (a.x + d.x) / 2, my = (a.y + d.y) / 2 + 0.55;
                                var label = b.order === 1 ? '\u03c3' : b.order === 2 ? '\u03c3 + \u03c0' : '\u03c3 + 2\u03c0';
                                viz.drawText(label, mx, my, '#58a6ff', 12);
                            }

                            viz.screenText(mol.desc, viz.width / 2, viz.height - 16, '#8b949e', 12, 'center');
                        }

                        draw();
                    }
                },
                {
                    id: 'bond-polarity-viz',
                    title: 'Bond Polarity: Electronegativity Difference',
                    description: 'Adjust the electronegativity difference to see how bond character changes from nonpolar to ionic.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 260, scale: 40, originX: 280, originY: 130});
                        var ctx = viz.ctx;
                        var deltaEn = 0.0;

                        VizEngine.createSlider(controls, '\u0394\u03c7 (Electronegativity Diff.)', 0, 3.3, 0, 0.1, function(v) {
                            deltaEn = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var W = viz.width, H = viz.height;
                            var cx = W / 2, cy = H / 2 - 10;
                            var x1 = cx - 100, x2 = cx + 100;

                            var bondType, leftCharge, rightCharge, leftColor, rightColor;
                            if (deltaEn < 0.5) {
                                bondType = 'Nonpolar Covalent';
                                leftCharge = ''; rightCharge = '';
                                leftColor = viz.colors.blue; rightColor = viz.colors.blue;
                            } else if (deltaEn < 1.7) {
                                bondType = 'Polar Covalent';
                                leftCharge = '\u03b4+'; rightCharge = '\u03b4-';
                                leftColor = viz.colors.blue; rightColor = viz.colors.orange;
                            } else {
                                bondType = 'Ionic Bond';
                                leftCharge = '+'; rightCharge = '-';
                                leftColor = viz.colors.purple; rightColor = viz.colors.red;
                            }

                            var shift = Math.min(deltaEn / 3.3, 1) * 30;
                            var cloudX = cx + shift;
                            var grad = ctx.createRadialGradient(cloudX, cy, 0, cloudX, cy, 50);
                            grad.addColorStop(0, 'rgba(88, 166, 255, 0.7)');
                            grad.addColorStop(1, 'rgba(88, 166, 255, 0.0)');
                            ctx.fillStyle = grad;
                            ctx.beginPath(); ctx.ellipse(cloudX, cy, 50 + shift * 0.5, 28, 0, 0, Math.PI * 2); ctx.fill();

                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 3;
                            ctx.beginPath(); ctx.moveTo(x1 + 28, cy); ctx.lineTo(x2 - 28, cy); ctx.stroke();

                            ctx.fillStyle = leftColor + '33';
                            ctx.beginPath(); ctx.arc(x1, cy, 34, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = leftColor;
                            ctx.beginPath(); ctx.arc(x1, cy, 28, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = '#fff'; ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillText('A', x1, cy);
                            if (leftCharge) {
                                ctx.fillStyle = leftColor;
                                ctx.font = 'bold 13px sans-serif';
                                ctx.fillText(leftCharge, x1, cy - 38);
                            }

                            ctx.fillStyle = rightColor + '33';
                            ctx.beginPath(); ctx.arc(x2, cy, 34, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = rightColor;
                            ctx.beginPath(); ctx.arc(x2, cy, 28, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = '#fff';
                            ctx.fillText('B', x2, cy);
                            if (rightCharge) {
                                ctx.fillStyle = rightColor;
                                ctx.font = 'bold 13px sans-serif';
                                ctx.fillText(rightCharge, x2, cy - 38);
                            }

                            var typeColor = deltaEn < 0.5 ? viz.colors.blue : (deltaEn < 1.7 ? viz.colors.orange : viz.colors.red);
                            ctx.fillStyle = typeColor;
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(bondType, cx, H - 40);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px sans-serif';
                            ctx.fillText('\u0394\u03c7 = ' + deltaEn.toFixed(1) + '  |  0\u20130.5: Nonpolar  |  0.5\u20131.7: Polar  |  >1.7: Ionic', cx, H - 16);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-sec02-ex01',
                    type: 'multiple-choice',
                    question: 'How many sigma and pi bonds are in a C≡N triple bond?',
                    options: ['0 σ, 3 π', '1 σ, 2 π', '2 σ, 1 π', '3 σ, 0 π'],
                    answer: 1,
                    explanation: 'Every triple bond consists of exactly 1 sigma bond (head-on orbital overlap) and 2 pi bonds (sideways p-orbital overlap above/below and in front/behind the axis).'
                },
                {
                    id: 'ch06-sec02-ex02',
                    type: 'multiple-choice',
                    question: 'Which of the following molecules contains a nonpolar covalent bond?',
                    options: ['HCl', 'H₂O', 'Cl₂', 'NH₃'],
                    answer: 2,
                    explanation: 'Cl₂ consists of two identical chlorine atoms with the same electronegativity, so the electrons are shared equally — a nonpolar covalent bond.'
                },
                {
                    id: 'ch06-sec02-ex03',
                    type: 'multiple-choice',
                    question: 'As bond order increases from single to double to triple, what happens to bond length and bond energy?',
                    options: [
                        'Bond length increases; bond energy increases',
                        'Bond length decreases; bond energy increases',
                        'Bond length decreases; bond energy decreases',
                        'Bond length increases; bond energy decreases'
                    ],
                    answer: 1,
                    explanation: 'More shared electron pairs pull the nuclei closer together (shorter bond length) and make the bond harder to break (higher bond energy).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Metallic Bonds (金属键)
        // ============================================================
        {
            id: 'ch06-sec03',
            title: 'Metallic Bonds',
            content: `
                <h2>Metallic Bonds (金属键)</h2>

                <p>When metal atoms pack together, neither ionic nor covalent bonding fully explains what holds them together. The answer is the <strong>metallic bond</strong> — a unique type of bonding where valence electrons become free to roam throughout the entire metal.</p>

                <div class="env-block intuition">
                    <div class="env-title">The Electron Sea Model</div>
                    <div class="env-body">
                        <p>In a metal, each atom releases its valence electrons into a <strong>"sea" of delocalized electrons</strong> that flows freely throughout the metallic lattice. The positive metal cations (nuclei + core electrons) are embedded in this electron sea and held in place by the attraction between the positive ions and the negative electron sea.</p>
                        <p style="text-align:center;">\\(\\text{Metal} \\rightarrow \\text{M}^{n+} \\text{ cation} + n \\, e^- \\text{ (delocalized)}\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="electron-sea-animation"></div>

                <h3>Properties Explained by the Electron Sea</h3>

                <table style="width:100%;border-collapse:collapse;margin:1em 0;">
                    <tr style="border-bottom:1px solid #30363d;">
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Property</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Explanation</th>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#58a6ff;"><strong>Electrical conductivity</strong></td>
                        <td style="padding:8px;color:#8b949e;">Free electrons can move under an electric field, carrying charge throughout the metal</td>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#3fb9a0;"><strong>Thermal conductivity</strong></td>
                        <td style="padding:8px;color:#8b949e;">Mobile electrons rapidly transfer kinetic energy from hot regions to cooler ones</td>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#f0883e;"><strong>Malleability & ductility</strong></td>
                        <td style="padding:8px;color:#8b949e;">Layers of cations can slide past each other while the electron sea keeps bonding intact</td>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;">
                        <td style="padding:8px;color:#bc8cff;"><strong>Metallic luster</strong></td>
                        <td style="padding:8px;color:#8b949e;">Free electrons absorb and re-emit light of all frequencies</td>
                    </tr>
                    <tr>
                        <td style="padding:8px;color:#d29922;"><strong>High melting points</strong></td>
                        <td style="padding:8px;color:#8b949e;">Strong cation-to-electron-sea attraction requires significant energy to break (W: 3422°C)</td>
                    </tr>
                </table>

                <div class="env-block remark">
                    <div class="env-title">Metallic Bond Strength</div>
                    <div class="env-body">
                        <p>Metallic bond strength depends on:</p>
                        <ul>
                            <li><strong>Number of valence electrons</strong>: More electrons in the sea → stronger bonding.</li>
                            <li><strong>Atomic radius</strong>: Smaller atoms pack cations more closely → stronger attraction.</li>
                        </ul>
                        <table style="border-collapse:collapse;font-size:13px;margin-top:8px;">
                            <tr style="background:#21262d;">
                                <th style="padding:5px 10px;border:1px solid #30363d;">Metal</th>
                                <th style="padding:5px 10px;border:1px solid #30363d;">Valence e⁻</th>
                                <th style="padding:5px 10px;border:1px solid #30363d;">Melting Point (°C)</th>
                            </tr>
                            <tr><td style="padding:5px 10px;border:1px solid #30363d;">Na</td><td style="padding:5px 10px;border:1px solid #30363d;">1</td><td style="padding:5px 10px;border:1px solid #30363d;">98</td></tr>
                            <tr><td style="padding:5px 10px;border:1px solid #30363d;">Mg</td><td style="padding:5px 10px;border:1px solid #30363d;">2</td><td style="padding:5px 10px;border:1px solid #30363d;">650</td></tr>
                            <tr><td style="padding:5px 10px;border:1px solid #30363d;">Al</td><td style="padding:5px 10px;border:1px solid #30363d;">3</td><td style="padding:5px 10px;border:1px solid #30363d;">660</td></tr>
                            <tr><td style="padding:5px 10px;border:1px solid #30363d;">W</td><td style="padding:5px 10px;border:1px solid #30363d;">6</td><td style="padding:5px 10px;border:1px solid #30363d;">3422</td></tr>
                        </table>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'electron-sea-animation',
                    title: 'The Electron Sea Model',
                    description: 'Delocalized electrons drift through the metal cation lattice. Click "Apply Voltage" to see directed current flow.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 300, scale: 40, originX: 280, originY: 150});
                        var ctx = viz.ctx;
                        var applyVoltage = false;
                        var W = viz.width, H = viz.height;

                        var cations = [];
                        for (var r = 0; r < 4; r++) {
                            for (var c = 0; c < 5; c++) {
                                cations.push({x: (c - 2) * 1.3, y: (1.5 - r) * 1.1});
                            }
                        }

                        var electrons = [];
                        for (var i = 0; i < 18; i++) {
                            electrons.push({
                                x: (Math.random() - 0.5) * 8,
                                y: (Math.random() - 0.5) * 4.2,
                                vx: (Math.random() - 0.5) * 1.2,
                                vy: (Math.random() - 0.5) * 1.2
                            });
                        }

                        VizEngine.createButton(controls, 'Apply Voltage', function() { applyVoltage = !applyVoltage; });

                        viz.animate(function() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            if (applyVoltage) {
                                var grad = ctx.createLinearGradient(0, 0, W, 0);
                                grad.addColorStop(0, '#f8514920');
                                grad.addColorStop(1, '#58a6ff20');
                                ctx.fillStyle = grad;
                                ctx.fillRect(0, 0, W, H);
                                viz.screenText('+ (anode)', 26, H / 2, '#f85149', 11, 'center');
                                viz.screenText('\u2212 (cathode)', W - 30, H / 2, '#58a6ff', 11, 'center');
                            }

                            var dt = 0.016;
                            for (var i = 0; i < electrons.length; i++) {
                                var e = electrons[i];
                                if (applyVoltage) {
                                    e.vx -= 0.4 * dt;
                                } else {
                                    e.vx += (Math.random() - 0.5) * 0.15;
                                    e.vy += (Math.random() - 0.5) * 0.15;
                                }
                                var sp = Math.sqrt(e.vx * e.vx + e.vy * e.vy);
                                var maxSp = applyVoltage ? 1.4 : 0.9;
                                if (sp > maxSp) { e.vx *= maxSp / sp; e.vy *= maxSp / sp; }
                                e.x += e.vx * dt * 1.5;
                                e.y += e.vy * dt * 1.5;
                                if (e.x < -4.5) e.x = 4.5;
                                if (e.x > 4.5) e.x = -4.5;
                                if (e.y < -2.5) e.y = 2.5;
                                if (e.y > 2.5) e.y = -2.5;
                            }

                            for (var j = 0; j < cations.length; j++) {
                                var c = cations[j];
                                viz.drawAtom(c.x, c.y, 0.34, '#58a6ff', 'M\u207a', '#fff');
                            }

                            for (var i = 0; i < electrons.length; i++) {
                                var e = electrons[i];
                                var pos = viz.toScreen(e.x, e.y);
                                var sx = pos[0], sy = pos[1];
                                ctx.fillStyle = '#d29922';
                                ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = '#d2992244';
                                ctx.beginPath(); ctx.arc(sx, sy, 7, 0, Math.PI * 2); ctx.fill();
                            }

                            viz.screenText('Delocalized electron sea (yellow dots)', W / 2, H - 16, '#8b949e', 11, 'center');
                            viz.screenText(applyVoltage ? 'Voltage ON \u2014 electrons drifting = electric current!' : 'No voltage \u2014 electrons move randomly', W / 2, 18, '#d29922', 11, 'center');
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-sec03-ex01',
                    type: 'multiple-choice',
                    question: 'What best explains why metals are good electrical conductors?',
                    options: [
                        'Metals contain many ionic bonds that allow ions to flow',
                        'Metals have delocalized valence electrons that can move freely under an electric field',
                        'Metals have very strong covalent bonds that transfer electrons rapidly',
                        'Metal ions carry charge through the solid lattice'
                    ],
                    answer: 1,
                    explanation: 'In the electron sea model, valence electrons are delocalized and not bound to specific atoms. When a voltage is applied, these free electrons drift in one direction, creating an electric current.'
                },
                {
                    id: 'ch06-sec03-ex02',
                    type: 'multiple-choice',
                    question: 'Why can metals be hammered into thin sheets (malleability) while ionic crystals shatter?',
                    options: [
                        'Metal bonds break more easily than ionic bonds',
                        'When metal layers slide, the electron sea maintains bonding; in ionic crystals, sliding aligns like charges causing repulsion and fracture',
                        'Metals have lighter atoms that can move without breaking bonds',
                        'Ionic crystals have stronger lattice energies than metallic bonds'
                    ],
                    answer: 1,
                    explanation: 'The electron sea surrounds all ions uniformly. When metal layers shift, the delocalized electrons adapt and maintain bonding. In ionic crystals, shifting brings like-charged ions adjacent, causing repulsion and fracture.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Intermolecular Forces (分子间作用力)
        // ============================================================
        {
            id: 'ch06-sec04',
            title: 'Intermolecular Forces',
            content: `
                <h2>Intermolecular Forces (分子间作用力)</h2>

                <p>Inside molecules, atoms are held together by strong intramolecular bonds. But what holds <em>molecules</em> to each other? These weaker forces, called <strong>intermolecular forces (IMF)</strong>, determine whether a substance is a gas, liquid, or solid at room temperature.</p>

                <div class="env-block intuition">
                    <div class="env-title">Hierarchy of Intermolecular Forces (Weakest to Strongest)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>London Dispersion Forces</strong> (van der Waals) — exist in ALL molecules</li>
                            <li><strong>Dipole-Dipole Forces</strong> — exist in polar molecules</li>
                            <li><strong>Hydrogen Bonds</strong> — special, unusually strong, occurs when H bonded to N, O, or F</li>
                        </ol>
                    </div>
                </div>

                <h3>van der Waals Forces</h3>

                <p><strong>London dispersion forces</strong> arise from instantaneous fluctuations in electron distribution. They are:</p>
                <ul>
                    <li>Present in <em>all</em> molecules (even noble gases)</li>
                    <li>Stronger for larger atoms/molecules (more electrons = larger polarizability)</li>
                    <li>Explain why boiling points of noble gases increase: He (-269°C) < Ne (-246°C) < Ar (-186°C) < Kr (-153°C)</li>
                </ul>

                <h3>Hydrogen Bonds (氢键)</h3>

                <p>The hydrogen bond occurs when H is bonded to F, O, or N and is attracted to a lone pair on another F, O, or N:</p>
                <p style="text-align:center;">\\(\\text{X}-\\text{H} \\cdots \\text{Y} \\quad \\text{where X, Y} \\in \\{\\text{F, O, N}\\}\\)</p>

                <div class="env-block example">
                    <div class="env-title">Why Water Has an Anomalously High Boiling Point</div>
                    <div class="env-body">
                        <p>Compare Group 16 hydrides (the trend predicts H₂O should boil around −80°C):</p>
                        <ul>
                            <li>H₂Te: bp = −2°C</li>
                            <li>H₂Se: bp = −41°C</li>
                            <li>H₂S: bp = −60°C</li>
                            <li><strong>H₂O: bp = 100°C</strong> (much higher than expected — hydrogen bonding!)</li>
                        </ul>
                        <p>Each water molecule can form up to <strong>4 hydrogen bonds</strong> (2 as donor, 2 as acceptor).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="boiling-point-chart"></div>

                <div class="env-block remark">
                    <div class="env-title">IMF vs. Intramolecular Bonds</div>
                    <div class="env-body">
                        <p><strong>Boiling water</strong> breaks hydrogen bonds between H₂O molecules (IMF). H-O bonds inside each water molecule remain intact. Hydrogen bonds are ~5-10% as strong as covalent bonds.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'boiling-point-chart',
                    title: 'Boiling Points of Group 16 Hydrides',
                    description: 'A bar chart showing the dramatic effect of hydrogen bonding on water\'s boiling point vs the expected trend.',
                    setup: function(container, controls) {
                        var canvas = document.createElement('canvas');
                        var W = 580, H = 360;
                        canvas.width = W; canvas.height = H;
                        canvas.style.maxWidth = '100%';
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var data = [
                            {label: 'H\u2082O', bp: 100, color: '#58a6ff', note: 'H\u2011bonds!'},
                            {label: 'H\u2082S', bp: -60, color: '#8b949e', note: ''},
                            {label: 'H\u2082Se', bp: -41, color: '#8b949e', note: ''},
                            {label: 'H\u2082Te', bp: -2, color: '#8b949e', note: ''}
                        ];

                        var scaleY = 1.4;
                        var originY = 230;
                        var originX = 80;

                        ctx.fillStyle = '#0c0c20';
                        ctx.fillRect(0, 0, W, H);

                        // Y axis
                        ctx.strokeStyle = '#4a4a7a';
                        ctx.lineWidth = 1.5;
                        ctx.beginPath(); ctx.moveTo(originX, 40); ctx.lineTo(originX, 330); ctx.stroke();

                        var yTicks = [-100, -60, -20, 0, 40, 80, 100];
                        for (var ti = 0; ti < yTicks.length; ti++) {
                            var t = yTicks[ti];
                            var py = originY - t * scaleY;
                            ctx.strokeStyle = '#1a1a40';
                            ctx.lineWidth = 0.5;
                            ctx.beginPath(); ctx.moveTo(originX + 2, py); ctx.lineTo(W - 20, py); ctx.stroke();
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(t + '\u00b0C', originX - 4, py);
                        }

                        // Zero line
                        ctx.strokeStyle = '#4a4a7a';
                        ctx.lineWidth = 1;
                        ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(W - 20, originY); ctx.stroke();

                        // Bars
                        var barW = 60;
                        var gap = 100;
                        for (var i = 0; i < data.length; i++) {
                            var d = data[i];
                            var x = originX + 55 + i * gap;
                            var barH = Math.abs(d.bp) * scaleY;
                            var barY = d.bp >= 0 ? originY - d.bp * scaleY : originY;

                            ctx.fillStyle = d.color + 'aa';
                            ctx.fillRect(x - barW / 2, barY, barW, barH);
                            ctx.strokeStyle = d.color;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(x - barW / 2, barY, barW, barH);

                            ctx.fillStyle = d.color;
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText(d.label, x, 336);

                            var valY = d.bp >= 0 ? barY - 16 : barY + 4;
                            ctx.fillStyle = d.color;
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillText(d.bp + '\u00b0C', x, valY);

                            if (d.note) {
                                ctx.fillStyle = '#d29922';
                                ctx.font = 'bold 11px sans-serif';
                                ctx.fillText(d.note, x, barY - 30);
                            }
                        }

                        // Expected trend line
                        ctx.strokeStyle = '#f0883e66';
                        ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
                        ctx.beginPath();
                        ctx.moveTo(originX + 55, originY - (-100) * scaleY);
                        ctx.lineTo(originX + 55 + 300, originY - (-2) * scaleY);
                        ctx.stroke();
                        ctx.setLineDash([]);
                        ctx.fillStyle = '#f0883e';
                        ctx.font = '10px sans-serif';
                        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                        ctx.fillText('Expected trend (without H\u2011bonds)', originX + 370, originY - 30);

                        // Y axis label
                        ctx.save();
                        ctx.translate(16, 185);
                        ctx.rotate(-Math.PI / 2);
                        ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif';
                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                        ctx.fillText('Boiling Point (\u00b0C)', 0, 0);
                        ctx.restore();

                        // Title
                        ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 12px sans-serif';
                        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                        ctx.fillText('Group 16 Hydride Boiling Points \u2014 Effect of Hydrogen Bonding', W / 2, 12);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-sec04-ex01',
                    type: 'multiple-choice',
                    question: 'Which type of intermolecular force exists in ALL substances, even noble gases?',
                    options: ['Dipole\u2013dipole', 'Hydrogen bonding', 'London dispersion forces', 'Ion\u2013dipole'],
                    answer: 2,
                    explanation: 'London dispersion forces arise from temporary fluctuations in electron distribution. They are present in every substance, polar or nonpolar, even monatomic noble gases.'
                },
                {
                    id: 'ch06-sec04-ex02',
                    type: 'multiple-choice',
                    question: 'NH₃ has a much higher boiling point than PH₃ despite similar molecular masses. Why?',
                    options: [
                        'NH₃ has stronger London dispersion forces',
                        'N\u2013H bonds form hydrogen bonds with lone pairs on other NH₃ molecules; P is too large for H-bonding',
                        'PH₃ is nonpolar',
                        'NH₃ has ionic character'
                    ],
                    answer: 1,
                    explanation: 'Nitrogen is small and highly electronegative, so N\u2013H bonds create strong H-bonds between molecules. Phosphorus is larger and less electronegative, so P\u2013H does not form H-bonds.'
                },
                {
                    id: 'ch06-sec04-ex03',
                    type: 'multiple-choice',
                    question: 'When water boils (liquid \u2192 vapor), what bonds or interactions are broken?',
                    options: [
                        'The covalent O-H bonds inside water molecules are broken',
                        'The ionic bonds holding water in a crystal lattice are broken',
                        'The hydrogen bonds between water molecules are broken',
                        'Both the O-H bonds and the hydrogen bonds are broken'
                    ],
                    answer: 2,
                    explanation: 'Boiling breaks the intermolecular hydrogen bonds between H₂O molecules. The covalent O-H bonds inside each molecule remain intact. Water vapor still consists of H₂O molecules.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Molecular Geometry (分子空间构型)
        // ============================================================
        {
            id: 'ch06-sec05',
            title: 'Molecular Geometry',
            content: `
                <h2>Molecular Geometry (分子空间构型)</h2>

                <p>Molecules aren't flat! The three-dimensional shape of a molecule determines its polarity, reactivity, and biological function. The <strong>VSEPR theory</strong> (Valence Shell Electron Pair Repulsion) gives us a simple, powerful way to predict molecular shapes.</p>

                <div class="env-block intuition">
                    <div class="env-title">VSEPR Theory</div>
                    <div class="env-body">
                        <p>Electron pairs (both bonding pairs and lone pairs) in the valence shell of an atom repel each other and arrange themselves as far apart as possible to minimize repulsion.</p>
                        <p>The repulsion order is: <strong>lone pair–lone pair > lone pair–bonding pair > bonding pair–bonding pair</strong></p>
                        <p>Lone pairs take up more angular space, compressing bond angles.</p>
                    </div>
                </div>

                <h3>Common Molecular Shapes</h3>

                <table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.92em;">
                    <tr style="border-bottom:1px solid #30363d;">
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Geometry</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Bonding Pairs</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Lone Pairs</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Bond Angle</th>
                        <th style="padding:8px;text-align:left;color:#c9d1d9;">Example</th>
                    </tr>
                    <tr style="border-bottom:1px solid #21262d;"><td style="padding:8px;color:#58a6ff;">Linear</td><td style="padding:8px;color:#8b949e;">2</td><td style="padding:8px;color:#8b949e;">0</td><td style="padding:8px;color:#8b949e;">180°</td><td style="padding:8px;color:#8b949e;">CO₂, BeCl₂</td></tr>
                    <tr style="border-bottom:1px solid #21262d;"><td style="padding:8px;color:#3fb9a0;">Trigonal Planar</td><td style="padding:8px;color:#8b949e;">3</td><td style="padding:8px;color:#8b949e;">0</td><td style="padding:8px;color:#8b949e;">120°</td><td style="padding:8px;color:#8b949e;">BF₃, SO₃</td></tr>
                    <tr style="border-bottom:1px solid #21262d;"><td style="padding:8px;color:#f0883e;">Tetrahedral</td><td style="padding:8px;color:#8b949e;">4</td><td style="padding:8px;color:#8b949e;">0</td><td style="padding:8px;color:#8b949e;">109.5°</td><td style="padding:8px;color:#8b949e;">CH₄, CCl₄</td></tr>
                    <tr style="border-bottom:1px solid #21262d;"><td style="padding:8px;color:#bc8cff;">Trigonal Pyramidal</td><td style="padding:8px;color:#8b949e;">3</td><td style="padding:8px;color:#8b949e;">1</td><td style="padding:8px;color:#8b949e;">107°</td><td style="padding:8px;color:#8b949e;">NH₃, PCl₃</td></tr>
                    <tr><td style="padding:8px;color:#f778ba;">Bent (V-shape)</td><td style="padding:8px;color:#8b949e;">2</td><td style="padding:8px;color:#8b949e;">2</td><td style="padding:8px;color:#8b949e;">104.5°</td><td style="padding:8px;color:#8b949e;">H₂O, H₂S</td></tr>
                </table>

                <div class="viz-placeholder" data-viz="vsepr-shape-rotator"></div>

                <h3>Molecular Polarity</h3>

                <p>A molecule's <strong>polarity</strong> depends on both bond polarity and molecular geometry. Even if all individual bonds are polar, the molecule can be nonpolar if the bond dipoles cancel by symmetry.</p>

                <div class="env-block example">
                    <div class="env-title">CO₂ vs. H₂O</div>
                    <div class="env-body">
                        <p><strong>CO₂</strong>: Both C=O bonds are polar, but the molecule is <em>linear</em>, so the two equal dipoles exactly cancel. CO₂ is <strong>nonpolar</strong>.</p>
                        <p><strong>H₂O</strong>: Both O-H bonds are polar, and the molecule is <em>bent</em>, so the dipoles don't cancel. H₂O is <strong>polar</strong>.</p>
                        <p>This polarity makes water an excellent solvent for ionic compounds ("like dissolves like").</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'vsepr-shape-rotator',
                    title: '3D VSEPR Shape Visualizer',
                    description: 'Select a molecule to see its VSEPR geometry. Use the rotation slider to view from different angles.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 340, scale: 55, originX: 280, originY: 180});

                        var molecules = {
                            'CH\u2084 (Tetrahedral)': {
                                central: {sym: 'C', col: '#8b949e'},
                                ligands: [
                                    {sym: 'H', col: '#c9d1d9', theta: 0, phi: 0},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI * 2 / 3, phi: Math.PI * 109.5 / 180 / 2},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI * 4 / 3, phi: Math.PI * 109.5 / 180 / 2},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI, phi: Math.PI * 109.5 / 180}
                                ],
                                lonePairs: 0, angle: '109.5°', geometry: 'Tetrahedral'
                            },
                            'NH\u2083 (Pyramidal)': {
                                central: {sym: 'N', col: '#58a6ff'},
                                ligands: [
                                    {sym: 'H', col: '#c9d1d9', theta: 0, phi: 0.4},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI * 2 / 3, phi: 0.4},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI * 4 / 3, phi: 0.4}
                                ],
                                lonePairs: 1, angle: '107°', geometry: 'Trigonal Pyramidal'
                            },
                            'H\u2082O (Bent)': {
                                central: {sym: 'O', col: '#f85149'},
                                ligands: [
                                    {sym: 'H', col: '#c9d1d9', theta: -Math.PI / 3.2, phi: 0.3},
                                    {sym: 'H', col: '#c9d1d9', theta: Math.PI / 3.2, phi: 0.3}
                                ],
                                lonePairs: 2, angle: '104.5°', geometry: 'Bent'
                            },
                            'BF\u2083 (Trigonal Planar)': {
                                central: {sym: 'B', col: '#3fb950'},
                                ligands: [
                                    {sym: 'F', col: '#3fb9a0', theta: 0, phi: Math.PI / 2},
                                    {sym: 'F', col: '#3fb9a0', theta: 2 * Math.PI / 3, phi: Math.PI / 2},
                                    {sym: 'F', col: '#3fb9a0', theta: 4 * Math.PI / 3, phi: Math.PI / 2}
                                ],
                                lonePairs: 0, angle: '120°', geometry: 'Trigonal Planar'
                            },
                            'CO\u2082 (Linear)': {
                                central: {sym: 'C', col: '#8b949e'},
                                ligands: [
                                    {sym: 'O', col: '#f85149', theta: 0, phi: Math.PI / 2},
                                    {sym: 'O', col: '#f85149', theta: Math.PI, phi: Math.PI / 2}
                                ],
                                lonePairs: 0, angle: '180°', geometry: 'Linear'
                            }
                        };

                        var currentMol = 'CH\u2084 (Tetrahedral)';
                        var rotAngle = 0;

                        var btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:5px;flex-wrap:wrap;';
                        controls.appendChild(btnRow);

                        Object.keys(molecules).forEach(function(name) {
                            VizEngine.createButton(btnRow, name, function() { currentMol = name; });
                        });

                        var sliderRow = document.createElement('div');
                        sliderRow.style.cssText = 'display:flex;gap:8px;align-items:center;margin-top:6px;';
                        container.appendChild(sliderRow);
                        VizEngine.createSlider(sliderRow, 'Rotate', 0, 360, 0, 1, function(v) { rotAngle = v * Math.PI / 180; });

                        function project3D(r, theta, phi, rotY) {
                            var x0 = r * Math.sin(phi) * Math.cos(theta);
                            var y0 = r * Math.cos(phi);
                            var z0 = r * Math.sin(phi) * Math.sin(theta);
                            var x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
                            var z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
                            return {px: x1, py: y0, depth: z1};
                        }

                        viz.animate(function() {
                            viz.clear();
                            var mol = molecules[currentMol];
                            var bondLen = 1.0;

                            var ligandData = mol.ligands.map(function(lig) {
                                var p = project3D(bondLen, lig.theta, lig.phi, rotAngle);
                                return {sym: lig.sym, col: lig.col, px: p.px, py: p.py, depth: p.depth};
                            });

                            ligandData.sort(function(a, b) { return a.depth - b.depth; });

                            for (var i = 0; i < ligandData.length; i++) {
                                var lig = ligandData[i];
                                viz.drawBond(0, 0, lig.px, lig.py, 1, lig.depth < 0 ? '#2a2a50' : '#c9d1d960');
                            }

                            for (var i = 0; i < ligandData.length; i++) {
                                var lig = ligandData[i];
                                if (lig.depth < 0) {
                                    viz.drawAtom(lig.px, lig.py, 0.22, lig.col + '88', lig.sym, '#fff');
                                }
                            }

                            viz.drawAtom(0, 0, 0.30, mol.central.col, mol.central.sym, '#fff');

                            if (mol.lonePairs) {
                                var ctx = viz.ctx;
                                for (var lpi = 0; lpi < mol.lonePairs; lpi++) {
                                    var ang = Math.PI + (lpi - (mol.lonePairs - 1) / 2) * 0.5;
                                    var lx = Math.cos(ang) * 0.65;
                                    var ly = Math.sin(ang) * 0.65;
                                    var pos = viz.toScreen(lx, ly);
                                    ctx.fillStyle = '#d29922';
                                    for (var d = -4; d <= 4; d += 8) {
                                        ctx.beginPath(); ctx.arc(pos[0] + d, pos[1], 3.5, 0, Math.PI * 2); ctx.fill();
                                    }
                                }
                            }

                            for (var i = 0; i < ligandData.length; i++) {
                                var lig = ligandData[i];
                                if (lig.depth >= 0) {
                                    viz.drawAtom(lig.px, lig.py, 0.22, lig.col, lig.sym, '#fff');
                                }
                            }

                            viz.screenText(mol.geometry, viz.width / 2, 18, '#c9d1d9', 14, 'center');
                            viz.screenText('Bond angle: ' + mol.angle, viz.width / 2, 38, '#58a6ff', 12, 'center');
                            if (mol.lonePairs) {
                                viz.screenText('Lone pairs: ' + mol.lonePairs + ' (yellow dots)', viz.width / 2, viz.height - 16, '#d29922', 11, 'center');
                            }
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-sec05-ex01',
                    type: 'multiple-choice',
                    question: 'A water molecule (H₂O) has 2 bonding pairs and 2 lone pairs around oxygen. What is its molecular geometry?',
                    options: [
                        'Linear (180°)',
                        'Trigonal planar (120°)',
                        'Tetrahedral (109.5°)',
                        'Bent/V-shaped (~104.5°)'
                    ],
                    answer: 3,
                    explanation: 'The 4 electron groups (2 bonding + 2 lone pairs) arrange tetrahedrally. But molecular geometry only counts bonding pairs. The 2 lone pairs push the H-O-H bond angle down from 109.5° to 104.5°, giving a bent shape.'
                },
                {
                    id: 'ch06-sec05-ex02',
                    type: 'multiple-choice',
                    question: 'CO₂ has two polar C=O bonds, yet the molecule is nonpolar. Why?',
                    options: [
                        'Carbon and oxygen have the same electronegativity',
                        'The molecule is linear, so the bond dipoles point in exactly opposite directions and cancel',
                        'The two double bonds cancel each other electronically',
                        'CO₂ is actually polar — it has a large dipole moment'
                    ],
                    answer: 1,
                    explanation: 'CO₂ is linear (O=C=O). The two C=O bond dipoles point in opposite directions along the same axis and exactly cancel, giving a net dipole of zero.'
                },
                {
                    id: 'ch06-sec05-ex03',
                    type: 'multiple-choice',
                    question: 'What is the correct order of bond angles: CH₄, NH₃, H₂O?',
                    options: [
                        'H₂O > NH₃ > CH₄',
                        'CH₄ > NH₃ > H₂O',
                        'NH₃ > H₂O > CH₄',
                        'CH₄ > H₂O > NH₃'
                    ],
                    answer: 1,
                    explanation: 'CH₄ (0 lone pairs) = 109.5°; NH₃ (1 lone pair) \u2248 107°; H₂O (2 lone pairs) \u2248 104.5°. Each additional lone pair compresses the bond angle further.'
                },
                {
                    id: 'ch06-sec05-ex04',
                    type: 'multiple-choice',
                    question: 'Which of the following molecules is expected to be nonpolar due to symmetry, even though it contains polar bonds?',
                    options: ['HCl', 'H₂O', 'NH₃', 'CCl₄'],
                    answer: 3,
                    explanation: 'CCl₄ is tetrahedral with 4 identical C-Cl polar bonds arranged symmetrically. The four bond dipoles point toward the corners of a tetrahedron and exactly cancel, making the overall molecule nonpolar.'
                }
            ]
        }

    ] // end sections
}); // end CHAPTERS.push
