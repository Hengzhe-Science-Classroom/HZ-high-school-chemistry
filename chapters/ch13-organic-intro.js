window.CHAPTERS.push({
    id: 'ch13',
    number: 13,
    title: 'Introduction to Organic Compounds',
    subtitle: 'The Chemistry of Carbon',
    sections: [
        // ── Section 1: Characteristics of Organic Compounds ─────────────────────
        {
            id: 'ch13-sec01',
 title:'',
            content: `
<h2>Characteristics of Organic Compounds </h2>

<p>Organic chemistry is the branch of chemistry that studies carbon-containing compounds. The vast majority of compounds containing carbon are classified as <strong>organic compounds </strong>. Today there are over 30 million known organic compounds — far more than all inorganic compounds combined.</p>

<div class="info-box">
<strong>Defining Organic Compounds</strong><br>
Organic compounds must contain <strong>carbon (C)</strong>. Most also contain hydrogen; many contain oxygen, nitrogen, halogens, sulfur, or phosphorus. A few carbon-containing compounds are treated as inorganic by convention — oxides of carbon (CO, CO₂), carbonates (CO₃²⁻), bicarbonates (HCO₃⁻), and cyanides (CN⁻).
</div>

<h3>Key Characteristics of Organic Compounds</h3>
<table class="data-table">
<thead><tr><th>Property</th><th>Typical organic compounds</th><th>Typical inorganic compounds</th></tr></thead>
<tbody>
<tr><td>Composition</td><td>C, H, and often O, N, halogens…</td><td>Metal ions + non-metal ions</td></tr>
<tr><td>Bonding</td><td>Covalent bonds dominate</td><td>Ionic or covalent bonds</td></tr>
<tr><td>Melting/Boiling point</td><td>Generally low (room-temp liquids or gases)</td><td>Generally high</td></tr>
<tr><td>Solubility in water</td><td>Many are insoluble; dissolve in organic solvents</td><td>Many ionic solids dissolve readily</td></tr>
<tr><td>Combustibility</td><td>Most are combustible (burn in O₂ to give CO₂ + H₂O)</td><td>Most are not combustible</td></tr>
<tr><td>Electrical conductivity</td><td>Generally non-conductors (no free ions)</td><td>Ionic solids conduct when melted/dissolved</td></tr>
<tr><td>Reaction rate</td><td>Often slow; side reactions common</td><td>Often fast (ion-exchange reactions)</td></tr>
</tbody>
</table>

<div class="example-block">
<strong>Example — Combustion of Ethanol:</strong><br>
\\( \\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O} \\)<br>
Carbon and hydrogen in the organic compound are oxidised to CO₂ and H₂O respectively. This is the hallmark test for organic compounds.
</div>

<h3>Why Are There So Many Organic Compounds?</h3>
<p>The extraordinary diversity of organic compounds arises from several unique features of carbon:</p>
<ul>
<li>Carbon forms <strong>four covalent bonds</strong> — more versatile than almost any other element.</li>
<li>Carbon atoms bond strongly to <em>each other</em>, forming chains, branches, and rings of almost unlimited length.</li>
<li>The same molecular formula can correspond to multiple structural arrangements (<strong>structural isomers</strong>).</li>
<li>Different functional groups can be attached to the same carbon skeleton, generating enormous variety.</li>
</ul>

<p>The interactive visualization below compares the melting points and solubilities of representative organic and inorganic compounds — notice the striking contrast.</p>
            `,
            visualizations: [
                {
                    id: 'viz-organic-properties',
                    title: 'Organic vs Inorganic: Property Comparison',
                    setup(container) {
                        // Bar chart comparing melting points
                        const viz = new VizEngine(container, {
                            width: 620, height: 340,
                            originX: 80, originY: 290,
                            scale: 1
                        });

                        const data = [
                            { name: 'NaCl', mp: 801, color: viz.colors.blue, organic: false },
                            { name: 'MgO', mp: 2852, color: viz.colors.blue, organic: false },
                            { name: 'CaCO₃', mp: 825, color: viz.colors.teal, organic: false },
                            { name: 'CH₄', mp: -182, color: viz.colors.orange, organic: true },
                            { name: 'C₂H₅OH', mp: -114, color: viz.colors.orange, organic: true },
                            { name: 'C₆H₆', mp: 6, color: viz.colors.orange, organic: true },
                            { name: 'Glucose', mp: 146, color: viz.colors.yellow, organic: true }
                        ];

                        const barW = 54;
                        const gap = 10;
                        const zeroY = viz.originY - 60;
                        const pxPerDeg = 0.06;

                        let hovered = -1;

                        const draw = () => {
                            viz.clear();
                            const ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Melting Points: Organic vs Inorganic Compounds (°C)', viz.width / 2, 18);

                            // Zero line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(60, zeroY);
                            ctx.lineTo(viz.width - 10, zeroY);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('0°C', 58, zeroY + 4);

                            data.forEach((d, i) => {
                                const x = 90 + i * (barW + gap);
                                const heightPx = d.mp * pxPerDeg;
                                const barTop = zeroY - heightPx;
                                const barH = Math.abs(heightPx);
                                const drawTop = d.mp >= 0 ? barTop : zeroY;

                                const isHov = hovered === i;
                                ctx.globalAlpha = isHov ? 1 : 0.82;
                                ctx.fillStyle = d.color;
                                ctx.fillRect(x, drawTop, barW, barH);

                                // Label on bar
                                ctx.globalAlpha = 1;
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 10px sans-serif';
                                ctx.textAlign = 'center';
                                const mpY = d.mp >= 0 ? barTop - 14 : zeroY + barH + 14;
                                ctx.fillText(d.mp + '°C', x + barW / 2, mpY);

                                // Name label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px sans-serif';
                                ctx.fillText(d.name, x + barW / 2, zeroY + (d.mp >= 0 ? 16 : barH + 28));
                            });

                            // Legend
                            ctx.globalAlpha = 1;
                            [[viz.colors.blue, 'Inorganic (NaCl type)'],
                             [viz.colors.orange, 'Organic (volatile)'],
                             [viz.colors.yellow, 'Organic (solid)']].forEach(([c, label], i) => {
                                ctx.fillStyle = c;
                                ctx.fillRect(viz.width - 170, 35 + i * 22, 14, 14);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(label, viz.width - 152, 47 + i * 22);
                            });
                        };

                        viz.canvas.addEventListener('mousemove', (e) => {
                            const r = viz.canvas.getBoundingClientRect();
                            const mx = e.clientX - r.left;
                            hovered = -1;
                            data.forEach((d, i) => {
                                const x = 90 + i * (barW + gap);
                                if (mx >= x && mx <= x + barW) hovered = i;
                            });
                            draw();
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch13-sec01-ex01',
                    type: 'multiple-choice',
                    question: 'Which of the following is classified as an INORGANIC compound by convention?',
                    choices: ['Ethanol (C₂H₅OH)', 'Carbon dioxide (CO₂)', 'Glucose (C₆H₁₂O₆)', 'Benzene (C₆H₆)'],
                    answer: 1,
                    explanation: 'CO₂ is a carbon-containing compound, but by convention carbon oxides (CO, CO₂), carbonates, bicarbonates, and cyanides are treated as inorganic compounds.'
                },
                {
                    id: 'ch13-sec01-ex02',
                    type: 'multiple-choice',
                    question: 'When an organic compound burns completely in excess oxygen, the products are always:',
                    choices: ['CO and H₂O', 'CO₂ and H₂O', 'C and H₂O', 'CO₂ and SO₂'],
                    answer: 1,
                    explanation: 'Complete combustion of an organic compound containing only C and H yields CO₂ and H₂O. If the compound also contains N or S, additional products like N₂ or SO₂ may form, but CO₂ and H₂O are always produced if C and H are present.'
                },
                {
                    id: 'ch13-sec01-ex03',
                    type: 'short-answer',
                    question: 'Explain why organic compounds generally have lower melting points than ionic inorganic compounds like NaCl.',
                    answer: 'Organic compounds consist of discrete molecules held together by weak intermolecular forces (van der Waals forces, etc.). Ionic compounds like NaCl form giant ionic lattices with strong electrostatic attractions between oppositely charged ions. Much more energy is needed to overcome ionic bonds than intermolecular forces, so ionic compounds have far higher melting points.'
                }
            ]
        },

        // ── Section 2: Carbon Bonding ────────────────────────────────────────────
        {
            id: 'ch13-sec02',
 title:'',
            content: `
<h2>Carbon Bonding </h2>

<p>Carbon is element number 6. Its electron configuration is \\(1s^22s^22p^2\\), giving it <strong>four valence electrons</strong> and a valence of four. This means every carbon atom forms exactly four covalent bonds — the cornerstone of organic chemistry.</p>

<h3>Types of Carbon–Carbon Bonds</h3>
<table class="data-table">
<thead><tr><th>Bond type</th><th>Notation</th><th>Bond order</th><th>Bond length</th><th>Bond energy</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Single bond </td><td>C−C</td><td>1</td><td>154 pm</td><td>346 kJ/mol</td><td>Ethane (C₂H₆)</td></tr>
<tr><td>Double bond </td><td>C=C</td><td>2</td><td>134 pm</td><td>610 kJ/mol</td><td>Ethene (C₂H₄)</td></tr>
<tr><td>Triple bond </td><td>C≡C</td><td>3</td><td>120 pm</td><td>835 kJ/mol</td><td>Ethyne (C₂H₂)</td></tr>
</tbody>
</table>

<div class="info-box">
<strong>Key Rule:</strong> The total number of bonds around each carbon atom must always equal <strong>four</strong>. Count carefully when drawing structures — a carbon with fewer or more than four bonds is invalid.
</div>

<h3>Carbon Skeleton Types</h3>
<p>Carbon's ability to bond to itself creates two fundamental skeleton types:</p>
<ul>
<li><strong>Chain structures :</strong> Open-chain (acyclic) — straight or branched. Examples: butane (n-C₄H₁₀), isobutane.</li>
<li><strong>Ring structures :</strong> Cyclic — carbon atoms form one or more closed rings. Examples: cyclohexane (C₆H₁₂), benzene (C₆H₆).</li>
</ul>

<h3>Hybridisation Overview</h3>
<p>The geometry around a carbon atom depends on hybridisation:</p>
<ul>
<li><strong>sp³</strong> — tetrahedral (109.5°), all single bonds, e.g. CH₄, C₂H₆</li>
<li><strong>sp²</strong> — trigonal planar (120°), one double bond, e.g. C₂H₄, C₆H₆</li>
<li><strong>sp</strong> — linear (180°), one triple bond, e.g. C₂H₂</li>
</ul>

<p>Use the interactive Carbon Bonding Explorer below to see how CH₄, C₂H₄, and C₂H₂ differ in geometry and bond character.</p>
            `,
            visualizations: [
                {
                    id: 'viz-carbon-bonding',
                    title: 'Carbon Bonding Explorer',
                    setup(container) {
                        const viz = new VizEngine(container, { width: 640, height: 380, originX: 320, originY: 190, scale: 48 });

                        // Control buttons
                        const btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        container.insertBefore(btnRow, viz.canvas);

                        const molecules = [
                            {
                                label: 'CH₄ (sp³)',
                                color: '#58a6ff',
                                draw(v) {
                                    v.clear();
                                    // Central C
                                    v.drawAtom(0, 0, 0.32, v.colors.orange, 'C', '#fff');
                                    // 4 H around
                                    const angles = [45, 135, 225, 315];
                                    const d = 1.1;
                                    angles.forEach(a => {
                                        const rad = a * Math.PI / 180;
                                        const hx = Math.cos(rad) * d;
                                        const hy = Math.sin(rad) * d;
                                        v.drawBond(0, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.22, v.colors.blue, 'H', '#fff');
                                    });
                                    v.screenText('CH₄ — Methane', v.width / 2, 28, v.colors.white, 15);
                                    v.screenText('sp³ hybridised  ·  tetrahedral  ·  all single bonds', v.width / 2, 50, v.colors.text, 12);
                                    v.screenText('Bond angle ≈ 109.5°   C–H bond length = 109 pm', v.width / 2, v.height - 20, v.colors.teal, 12);
                                }
                            },
                            {
                                label: 'C₂H₄ (sp²)',
                                color: '#3fb950',
                                draw(v) {
                                    v.clear();
                                    v.drawBond(-0.75, 0, 0.75, 0, 2, v.colors.green);
                                    v.drawAtom(-0.75, 0, 0.32, v.colors.orange, 'C', '#fff');
                                    v.drawAtom(0.75, 0, 0.32, v.colors.orange, 'C', '#fff');
                                    // H on left C
                                    v.drawBond(-0.75, 0, -1.7, 0.7, 1, v.colors.text);
                                    v.drawAtom(-1.7, 0.7, 0.22, v.colors.blue, 'H', '#fff');
                                    v.drawBond(-0.75, 0, -1.7, -0.7, 1, v.colors.text);
                                    v.drawAtom(-1.7, -0.7, 0.22, v.colors.blue, 'H', '#fff');
                                    // H on right C
                                    v.drawBond(0.75, 0, 1.7, 0.7, 1, v.colors.text);
                                    v.drawAtom(1.7, 0.7, 0.22, v.colors.blue, 'H', '#fff');
                                    v.drawBond(0.75, 0, 1.7, -0.7, 1, v.colors.text);
                                    v.drawAtom(1.7, -0.7, 0.22, v.colors.blue, 'H', '#fff');
                                    v.screenText('C₂H₄ — Ethene', v.width / 2, 28, v.colors.white, 15);
                                    v.screenText('sp² hybridised  ·  planar  ·  one C=C double bond', v.width / 2, 50, v.colors.text, 12);
                                    v.screenText('Bond angle ≈ 120°   C=C bond length = 134 pm', v.width / 2, v.height - 20, v.colors.teal, 12);
                                }
                            },
                            {
                                label: 'C₂H₂ (sp)',
                                color: '#f0883e',
                                draw(v) {
                                    v.clear();
                                    v.drawBond(-0.75, 0, 0.75, 0, 3, v.colors.orange);
                                    v.drawAtom(-0.75, 0, 0.32, v.colors.orange, 'C', '#fff');
                                    v.drawAtom(0.75, 0, 0.32, v.colors.orange, 'C', '#fff');
                                    v.drawBond(-0.75, 0, -1.9, 0, 1, v.colors.text);
                                    v.drawAtom(-1.9, 0, 0.22, v.colors.blue, 'H', '#fff');
                                    v.drawBond(0.75, 0, 1.9, 0, 1, v.colors.text);
                                    v.drawAtom(1.9, 0, 0.22, v.colors.blue, 'H', '#fff');
                                    v.screenText('C₂H₂ — Ethyne', v.width / 2, 28, v.colors.white, 15);
                                    v.screenText('sp hybridised  ·  linear  ·  one C≡C triple bond', v.width / 2, 50, v.colors.text, 12);
                                    v.screenText('Bond angle = 180°   C≡C bond length = 120 pm', v.width / 2, v.height - 20, v.colors.teal, 12);
                                }
                            }
                        ];

                        let current = 0;
                        molecules.forEach((mol, i) => {
                            const btn = VizEngine.createButton(btnRow, mol.label, () => { current = i; render(); });
                            btn.style.background = i === 0 ? '#1a1a60' : '#1a1a40';
                            btn.style.color = mol.color;
                            btn.style.borderColor = mol.color;
                        });

                        function render() {
                            btnRow.querySelectorAll('button').forEach((b, i) => {
                                b.style.background = i === current ? '#1a1a60' : '#1a1a40';
                            });
                            molecules[current].draw(viz);
                        }
                        render();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch13-sec02-ex01',
                    type: 'multiple-choice',
                    question: 'How many covalent bonds does every neutral carbon atom form in organic compounds?',
                    choices: ['2', '3', '4', '6'],
                    answer: 2,
                    explanation: 'Carbon has 4 valence electrons and always forms 4 covalent bonds (tetravalent). This is the fundamental rule of carbon bonding.'
                },
                {
                    id: 'ch13-sec02-ex02',
                    type: 'multiple-choice',
                    question: 'Which carbon–carbon bond is the shortest?',
                    choices: ['C−C single bond (154 pm)', 'C=C double bond (134 pm)', 'C≡C triple bond (120 pm)', 'All have the same length'],
                    answer: 2,
                    explanation: 'Triple bonds have the highest bond order (3) and are the shortest. The more electron density shared between two atoms, the shorter the bond. C≡C at 120 pm < C=C at 134 pm < C−C at 154 pm.'
                },
                {
                    id: 'ch13-sec02-ex03',
                    type: 'multiple-choice',
                    question: 'In ethene (C₂H₄), what is the approximate bond angle at each carbon atom?',
                    choices: ['90°', '109.5°', '120°', '180°'],
                    answer: 2,
                    explanation: 'Each carbon in ethene is sp² hybridised, giving a trigonal planar geometry with bond angles of approximately 120°.'
                },
                {
                    id: 'ch13-sec02-ex04',
                    type: 'multiple-choice',
                    question: 'Which correctly ranks C–C bond strength from WEAKEST to STRONGEST?',
                    choices: [
                        'C–C &lt; C=C &lt; C≡C',
                        'C≡C &lt; C=C &lt; C–C',
                        'C=C &lt; C–C &lt; C≡C',
                        'All three bonds have equal strength'
                    ],
                    answer: 0,
                    explanation: 'More bonds between the same two atoms means more shared electrons and a higher bond energy. C–C single bond ≈ 346 kJ/mol, C=C double bond ≈ 610 kJ/mol, C≡C triple bond ≈ 835 kJ/mol. So weakest to strongest: C–C &lt; C=C &lt; C≡C.'
                },
                {
                    id: 'ch13-sec02-ex05',
                    type: 'multiple-choice',
                    question: 'What hybridization does carbon adopt in acetylene (HC≡CH), and what is the H–C≡C bond angle?',
                    choices: ['sp³ — 109.5°', 'sp² — 120°', 'sp — 180°', 'sp³d — 90°'],
                    answer: 2,
                    explanation: 'In acetylene, each carbon forms two sigma bonds (one to H, one to the other C) and two pi bonds (the C≡C triple bond). This corresponds to sp hybridization, producing a linear geometry with 180° bond angles.'
                }
            ]
        },

        // ── Section 3: Representing Organic Compounds ────────────────────────────
        {
            id: 'ch13-sec03',
 title:'',
            content: `
<h2>Representing Organic Compounds </h2>

<p>Chemists use several complementary notations to describe organic molecules. Each reveals different information. You need to be comfortable converting between all four.</p>

<h3>The Four Representations</h3>

<div class="example-block">
<strong>Molecular formula :</strong> Shows the number of each type of atom — nothing about structure.<br>
Example: \\( \\text{C}_4\\text{H}_{10} \\)<br><br>

<strong>Structural formula :</strong> Shows every bond explicitly. Each line represents one covalent bond.<br>
Example: H–C–C–C–C–H with all H branches drawn out explicitly.<br><br>

<strong>Condensed (semi-structural) formula :</strong> Groups of atoms attached to each carbon are written in sequence; bonds within each group are implied.<br>
Example: \\( \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3 \\) or \\( \\text{CH}_3(\\text{CH}_2)_2\\text{CH}_3 \\)<br><br>

<strong>Skeletal (line) formula :</strong> Each vertex and each endpoint is a carbon; H atoms on carbon are omitted (implied by valence). Only heteroatoms and their H are drawn.<br>
Example: A zigzag line with 3 interior vertices and 2 endpoints = butane (C₄H₁₀).
</div>

<h3>Conversion Rules</h3>
<ul>
<li>In the <strong>skeletal formula</strong>, every line end and every vertex = one C atom. The number of H atoms on each C = 4 − (number of bonds at that C).</li>
<li>In the <strong>condensed formula</strong>, side-chain hydrogens are bundled with their C: CH₃–, –CH₂–, –CH&lt;, &gt;C&lt;</li>
<li>The <strong>molecular formula</strong> gives no structural information — it is derived by summing all atoms in the structural formula.</li>
</ul>

<h3>Example: Propane (C₃H₈)</h3>
<table class="data-table">
<thead><tr><th>Notation</th><th>Propane</th></tr></thead>
<tbody>
<tr><td>Molecular formula</td><td>C₃H₈</td></tr>
<tr><td>Structural formula</td><td>H−C−C−C−H (full bonds)</td></tr>
<tr><td>Condensed formula</td><td>CH₃CH₂CH₃</td></tr>
<tr><td>Skeletal formula</td><td>Zigzag with 1 interior vertex</td></tr>
</tbody>
</table>

<p>The visualization below lets you explore how these four representations look for several simple organic molecules.</p>
            `,
            visualizations: [
                {
                    id: 'viz-formula-converter',
                    title: 'Formula Converter',
                    setup(container) {
                        const viz = new VizEngine(container, { width: 660, height: 400, originX: 330, originY: 200, scale: 50 });

                        const molecules = [
                            {
                                name: 'Methane',
                                molecular: 'CH₄',
                                condensed: 'CH₄',
                                skeletal: '(single C, 4 H implied)',
                                draw(v) {
                                    v.clear();
                                    v.drawAtom(0, 0, 0.3, v.colors.orange, 'C', '#fff');
                                    [[-1, 0], [1, 0], [0, 1], [0, -1]].forEach(([hx, hy]) => {
                                        v.drawBond(0, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.2, v.colors.blue, 'H', '#fff');
                                    });
                                    v.screenText('Methane   CH₄', v.width / 2, 24, v.colors.white, 14);
                                    v.screenText('Condensed: CH₄   |   Skeletal: • (single dot = 1 C)', v.width / 2, v.height - 22, v.colors.text, 11);
                                }
                            },
                            {
                                name: 'Ethane',
                                molecular: 'C₂H₆',
                                condensed: 'CH₃CH₃',
                                draw(v) {
                                    v.clear();
                                    v.drawBond(-0.65, 0, 0.65, 0, 1, v.colors.text);
                                    v.drawAtom(-0.65, 0, 0.3, v.colors.orange, 'C', '#fff');
                                    v.drawAtom(0.65, 0, 0.3, v.colors.orange, 'C', '#fff');
                                    [[-1.5, 0.6], [-1.5, 0], [-1.5, -0.6]].forEach(([hx, hy]) => {
                                        v.drawBond(-0.65, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.2, v.colors.blue, 'H', '#fff');
                                    });
                                    [[1.5, 0.6], [1.5, 0], [1.5, -0.6]].forEach(([hx, hy]) => {
                                        v.drawBond(0.65, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.2, v.colors.blue, 'H', '#fff');
                                    });
                                    v.screenText('Ethane   C₂H₆', v.width / 2, 24, v.colors.white, 14);
                                    v.screenText('Condensed: CH₃CH₃   |   Skeletal: line with 2 endpoints', v.width / 2, v.height - 22, v.colors.text, 11);
                                }
                            },
                            {
                                name: 'Propane',
                                molecular: 'C₃H₈',
                                condensed: 'CH₃CH₂CH₃',
                                draw(v) {
                                    v.clear();
                                    v.drawBond(-1.2, 0, 0, 0, 1, v.colors.text);
                                    v.drawBond(0, 0, 1.2, 0, 1, v.colors.text);
                                    [-1.2, 0, 1.2].forEach((cx, ci) => {
                                        v.drawAtom(cx, 0, 0.28, v.colors.orange, 'C', '#fff');
                                        const hCount = ci === 1 ? 2 : 3;
                                        if (ci === 0) {
                                            [[-2, 0.55], [-2, 0], [-2, -0.55]].forEach(([hx, hy]) => {
                                                v.drawBond(cx, 0, hx, hy, 1, v.colors.text);
                                                v.drawAtom(hx, hy, 0.18, v.colors.blue, 'H', '#fff');
                                            });
                                        } else if (ci === 1) {
                                            [[0, 0.8], [0, -0.8]].forEach(([hx, hy]) => {
                                                v.drawBond(cx, 0, hx, hy, 1, v.colors.text);
                                                v.drawAtom(hx, hy, 0.18, v.colors.blue, 'H', '#fff');
                                            });
                                        } else {
                                            [[2, 0.55], [2, 0], [2, -0.55]].forEach(([hx, hy]) => {
                                                v.drawBond(cx, 0, hx, hy, 1, v.colors.text);
                                                v.drawAtom(hx, hy, 0.18, v.colors.blue, 'H', '#fff');
                                            });
                                        }
                                    });
                                    v.screenText('Propane   C₃H₈', v.width / 2, 24, v.colors.white, 14);
                                    v.screenText('Condensed: CH₃CH₂CH₃   |   Skeletal: V-shape (1 vertex)', v.width / 2, v.height - 22, v.colors.text, 11);
                                }
                            },
                            {
                                name: 'Ethene',
                                molecular: 'C₂H₄',
                                condensed: 'CH₂=CH₂',
                                draw(v) {
                                    v.clear();
                                    v.drawBond(-0.65, 0, 0.65, 0, 2, v.colors.green);
                                    v.drawAtom(-0.65, 0, 0.3, v.colors.orange, 'C', '#fff');
                                    v.drawAtom(0.65, 0, 0.3, v.colors.orange, 'C', '#fff');
                                    [[-1.5, 0.65], [-1.5, -0.65]].forEach(([hx, hy]) => {
                                        v.drawBond(-0.65, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.2, v.colors.blue, 'H', '#fff');
                                    });
                                    [[1.5, 0.65], [1.5, -0.65]].forEach(([hx, hy]) => {
                                        v.drawBond(0.65, 0, hx, hy, 1, v.colors.text);
                                        v.drawAtom(hx, hy, 0.2, v.colors.blue, 'H', '#fff');
                                    });
                                    v.screenText('Ethene   C₂H₄', v.width / 2, 24, v.colors.white, 14);
                                    v.screenText('Condensed: CH₂=CH₂   |   Skeletal: double line', v.width / 2, v.height - 22, v.colors.text, 11);
                                }
                            }
                        ];

                        const btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        container.insertBefore(btnRow, viz.canvas);

                        let current = 0;
                        molecules.forEach((mol, i) => {
                            VizEngine.createButton(btnRow, mol.name, () => { current = i; molecules[i].draw(viz); });
                        });
                        molecules[0].draw(viz);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch13-sec03-ex01',
                    type: 'multiple-choice',
                    question: 'The condensed formula CH₃CH₂OH represents ethanol. How many C, H, and O atoms does it contain?',
                    choices: ['C₂H₅O', 'C₂H₆O', 'C₂H₄O', 'C₃H₇O'],
                    answer: 1,
                    explanation: 'CH₃CH₂OH: CH₃ gives 1C + 3H; CH₂ gives 1C + 2H; OH gives 1H + 1O. Total: 2C + 6H + 1O → C₂H₆O.'
                },
                {
                    id: 'ch13-sec03-ex02',
                    type: 'multiple-choice',
                    question: 'In a skeletal (line) formula, what does each vertex and endpoint represent?',
                    choices: ['One hydrogen atom', 'One carbon atom (with implied H)', 'One double bond', 'One oxygen atom'],
                    answer: 1,
                    explanation: 'In a skeletal formula, every line endpoint and every interior vertex represents one carbon atom. The number of H atoms attached to each C is inferred from valence (4 bonds per C total).'
                },
                {
                    id: 'ch13-sec03-ex03',
                    type: 'short-answer',
                    question: 'Write the condensed formula and molecular formula for the skeletal formula: a zigzag of 4 carbons (n-butane).',
                    answer: 'Condensed formula: CH₃CH₂CH₂CH₃. Molecular formula: C₄H₁₀. The 4-carbon zigzag has two end carbons (each bonded to 3 H) and two middle carbons (each bonded to 2 H): 2×(CH₃) + 2×(CH₂) = C₄H₁₀.'
                },
                {
                    id: 'ch13-sec03-ex04',
                    type: 'multiple-choice',
                    question: 'The condensed structural formula CH₃CH(OH)CH₃ represents which compound?',
                    choices: ['Propan-1-ol', 'Propan-2-ol', 'Propanal', 'Propanone'],
                    answer: 1,
                    explanation: 'The –OH group is attached to the middle (second) carbon of the three-carbon chain, making this propan-2-ol. Propan-1-ol would have –OH on the first (end) carbon: CH₃CH₂CH₂OH.'
                },
                {
                    id: 'ch13-sec03-ex05',
                    type: 'multiple-choice',
                    question: 'Which functional group is present in acetic acid (CH₃COOH)?',
                    choices: ['Hydroxyl –OH only', 'Aldehyde –CHO', 'Carboxyl –COOH', 'Ester –COO–'],
                    answer: 2,
                    explanation: 'Acetic acid contains the carboxyl group –COOH (carbonyl C=O plus hydroxyl –OH on the same carbon). The carboxyl group is the defining functional group of all carboxylic acids and makes acetic acid weakly acidic.'
                }
            ]
        },

        // ── Section 4: Structural Isomers ────────────────────────────────────────
        {
            id: 'ch13-sec04',
 title:'',
            content: `
<h2>Structural Isomers </h2>

<p><strong>Structural isomers </strong> — also called constitutional isomers — are compounds that share the same molecular formula but differ in the connectivity of their atoms (i.e., they have different structural formulas). They are different compounds with different properties.</p>

<div class="info-box">
<strong>Key criterion:</strong> Same molecular formula, different structural arrangement of atoms. They are NOT the same compound.
</div>

<h3>Three Main Types of Structural Isomers</h3>

<h4>1. Chain (Carbon-skeleton) Isomers </h4>
<p>Same functional groups, different carbon skeleton (straight vs branched chain).</p>
<p>Example — C₄H₁₀ has two chain isomers:</p>
<ul>
<li>n-Butane: CH₃CH₂CH₂CH₃ (straight chain, bp −1°C)</li>
<li>Isobutane: (CH₃)₃CH (branched, bp −12°C)</li>
</ul>

<h4>2. Position Isomers </h4>
<p>Same carbon skeleton and same functional group, but the functional group is at a different position on the chain.</p>
<p>Example — C₃H₇Cl:</p>
<ul>
<li>1-chloropropane: CH₃CH₂CH₂Cl</li>
<li>2-chloropropane: CH₃CHClCH₃</li>
</ul>

<h4>3. Functional Group Isomers </h4>
<p>Same molecular formula, different functional groups entirely — so different chemical behavior.</p>
<p>Example — C₂H₆O:</p>
<ul>
<li>Ethanol: CH₃CH₂OH (alcohol, contains −OH)</li>
<li>Dimethyl ether: CH₃OCH₃ (ether, contains −O−)</li>
</ul>

<h3>Counting Isomers Systematically</h3>
<p>For alkanes, a systematic approach:</p>
<ol>
<li>Draw the longest possible straight chain.</li>
<li>Reduce the chain length by one, add a methyl branch — enumerate all unique positions.</li>
<li>Continue reducing until you reach the minimum chain length where branching is impossible.</li>
<li>Check for duplicates by examining symmetry.</li>
</ol>

<h3>C₄H₁₀ — Complete Isomer Set</h3>
<p>C₄H₁₀ has exactly <strong>2</strong> structural isomers: n-butane and isobutane.</p>

<h3>C₅H₁₂ — Complete Isomer Set</h3>
<p>C₅H₁₂ has exactly <strong>3</strong> structural isomers: n-pentane, isopentane, neopentane.</p>

<p>The Isomer Generator below draws all structural isomers of C₄H₁₀ and C₅H₁₂ side by side.</p>
            `,
            visualizations: [
                {
                    id: 'viz-isomer-generator',
                    title: 'Isomer Generator',
                    setup(container) {
                        const viz = new VizEngine(container, { width: 660, height: 420, originX: 330, originY: 210, scale: 46 });

                        const btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        container.insertBefore(btnRow, viz.canvas);

                        function drawAtom(ctx, sx, sy, r, color, symbol) {
                            ctx.fillStyle = color + '33';
                            ctx.beginPath(); ctx.arc(sx, sy, r + 3, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = color;
                            ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill();
                            ctx.fillStyle = '#fff';
                            ctx.font = `bold ${Math.max(10, r * 0.75)}px sans-serif`;
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillText(symbol, sx, sy);
                        }

                        function drawBondScrn(ctx, sx1, sy1, sx2, sy2, color) {
                            ctx.strokeStyle = color;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(sx2, sy2); ctx.stroke();
                        }

                        const datasets = {
                            'C₄H₁₀': {
                                title: 'C₄H₁₀ — 2 isomers',
                                isomers: [
                                    {
                                        name: 'n-Butane',
                                        formula: 'CH₃CH₂CH₂CH₃',
                                        draw(v, cx, cy, scale) {
                                            const ctx = v.ctx;
                                            const sc = scale;
                                            const positions = [cx - 1.5 * sc, cx - 0.5 * sc, cx + 0.5 * sc, cx + 1.5 * sc];
                                            positions.forEach((x, i) => {
                                                if (i < 3) drawBondScrn(ctx, x, cy, positions[i + 1], cy, '#666');
                                            });
                                            positions.forEach(x => drawAtom(ctx, x, cy, 14, '#f0883e', 'C'));
                                            ctx.fillStyle = '#8b949e';
                                            ctx.font = '11px sans-serif';
                                            ctx.textAlign = 'center';
                                            ctx.fillText('n-Butane  CH₃CH₂CH₂CH₃  bp: −1°C', cx, cy + 36);
                                        }
                                    },
                                    {
                                        name: 'Isobutane',
                                        formula: '(CH₃)₃CH',
                                        draw(v, cx, cy, scale) {
                                            const ctx = v.ctx;
                                            drawBondScrn(ctx, cx - scale, cy, cx, cy, '#666');
                                            drawBondScrn(ctx, cx, cy, cx + scale, cy, '#666');
                                            drawBondScrn(ctx, cx, cy, cx, cy - scale * 0.9, '#666');
                                            [cx - scale, cx, cx + scale].forEach(x => drawAtom(ctx, x, cy, 14, '#f0883e', 'C'));
                                            drawAtom(ctx, cx, cy - scale * 0.9, 14, '#f0883e', 'C');
                                            ctx.fillStyle = '#8b949e';
                                            ctx.font = '11px sans-serif';
                                            ctx.textAlign = 'center';
                                            ctx.fillText('Isobutane  (CH₃)₃CH  bp: −12°C', cx, cy + 36);
                                        }
                                    }
                                ]
                            },
                            'C₅H₁₂': {
                                title: 'C₅H₁₂ — 3 isomers',
                                isomers: [
                                    {
                                        name: 'n-Pentane',
                                        draw(v, cx, cy, scale) {
                                            const ctx = v.ctx;
                                            const xs = [-2, -1, 0, 1, 2].map(d => cx + d * scale);
                                            for (let i = 0; i < 4; i++) drawBondScrn(ctx, xs[i], cy, xs[i + 1], cy, '#666');
                                            xs.forEach(x => drawAtom(ctx, x, cy, 13, '#f0883e', 'C'));
                                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
                                            ctx.fillText('n-Pentane  CH₃(CH₂)₃CH₃  bp: 36°C', cx, cy + 34);
                                        }
                                    },
                                    {
                                        name: 'Isopentane',
                                        draw(v, cx, cy, scale) {
                                            const ctx = v.ctx;
                                            const xs = [-1.5, -0.5, 0.5, 1.5].map(d => cx + d * scale);
                                            for (let i = 0; i < 3; i++) drawBondScrn(ctx, xs[i], cy, xs[i + 1], cy, '#666');
                                            drawBondScrn(ctx, xs[1], cy, xs[1], cy - scale * 0.9, '#666');
                                            xs.forEach(x => drawAtom(ctx, x, cy, 13, '#f0883e', 'C'));
                                            drawAtom(ctx, xs[1], cy - scale * 0.9, 13, '#f0883e', 'C');
                                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
                                            ctx.fillText('Isopentane  (CH₃)₂CHCH₂CH₃  bp: 28°C', cx, cy + 34);
                                        }
                                    },
                                    {
                                        name: 'Neopentane',
                                        draw(v, cx, cy, scale) {
                                            const ctx = v.ctx;
                                            const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
                                            dirs.forEach(([dx, dy]) => {
                                                const ex = cx + dx * scale, ey = cy + dy * scale;
                                                drawBondScrn(ctx, cx, cy, ex, ey, '#666');
                                                drawAtom(ctx, ex, ey, 13, '#f0883e', 'C');
                                            });
                                            drawAtom(ctx, cx, cy, 15, '#bc8cff', 'C');
                                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
                                            ctx.fillText('Neopentane  C(CH₃)₄  bp: 9.5°C', cx, cy + scale + 16);
                                        }
                                    }
                                ]
                            }
                        };

                        function renderDataset(key) {
                            viz.clear();
                            const dataset = datasets[key];
                            const ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(dataset.title, viz.width / 2, 22);

                            const isomers = dataset.isomers;
                            const spacing = viz.width / (isomers.length + 1);
                            isomers.forEach((iso, i) => {
                                const cx = spacing * (i + 1);
                                iso.draw(viz, cx, viz.height / 2, 40);
                            });

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('All have the same molecular formula but different connectivity — different compounds!', viz.width / 2, viz.height - 16);
                        }

                        Object.keys(datasets).forEach((key, i) => {
                            VizEngine.createButton(btnRow, key, () => renderDataset(key));
                        });
                        renderDataset('C₄H₁₀');
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch13-sec04-ex01',
                    type: 'multiple-choice',
                    question: 'Structural isomers always have:',
                    choices: [
                        'The same structural formula',
                        'The same molecular formula but different structural formulas',
                        'Different molecular formulas but same properties',
                        'The same boiling point'
                    ],
                    answer: 1,
                    explanation: 'Structural isomers share the same molecular formula (same atoms) but differ in how those atoms are connected (different structural formulas). Because the connectivity differs, they are different compounds with different physical and chemical properties.'
                },
                {
                    id: 'ch13-sec04-ex02',
                    type: 'multiple-choice',
                    question: 'How many structural isomers does C₄H₁₀ have?',
                    choices: ['1', '2', '3', '4'],
                    answer: 1,
                    explanation: 'C₄H₁₀ has exactly 2 structural isomers: n-butane (CH₃CH₂CH₂CH₃, straight chain) and isobutane ((CH₃)₃CH, branched).'
                },
                {
                    id: 'ch13-sec04-ex03',
                    type: 'multiple-choice',
                    question: 'Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃) are both C₂H₆O. What type of isomers are they?',
                    choices: ['Chain isomers', 'Position isomers', 'Functional group isomers', 'They are the same compound'],
                    answer: 2,
 explanation:'Ethanol contains a hydroxyl group (–OH, alcohol) while dimethyl ether contains an ether linkage (–O–). They have the same molecular formula but completely different functional groups — this is a functional group isomerism .'
                },
                {
                    id: 'ch13-sec04-ex04',
                    type: 'short-answer',
                    question: 'How many structural isomers does C₅H₁₂ have? Name them using condensed formulas.',
                    answer: 'C₅H₁₂ has 3 structural isomers: (1) n-pentane: CH₃CH₂CH₂CH₂CH₃; (2) isopentane: (CH₃)₂CHCH₂CH₃; (3) neopentane: C(CH₃)₄.'
                },
                {
                    id: 'ch13-sec04-ex05',
                    type: 'multiple-choice',
                    question: 'n-Butane (CH₃CH₂CH₂CH₃, bp −0.5°C) has a higher boiling point than isobutane ((CH₃)₃CH, bp −11.7°C). Why?',
                    choices: [
                        'n-Butane has a higher molecular weight',
                        'n-Butane is linear, giving greater surface area and stronger London dispersion forces',
                        'Isobutane contains more carbon atoms',
                        'n-Butane contains oxygen atoms that increase intermolecular attraction'
                    ],
                    answer: 1,
                    explanation: 'Both n-butane and isobutane have the same molecular formula C₄H₁₀ and the same molecular weight. The difference in boiling point arises from molecular shape. The linear n-butane molecule has more surface area for contact with neighboring molecules, leading to stronger van der Waals (London dispersion) forces. The compact, more spherical isobutane molecule has less surface contact, so weaker intermolecular forces and a lower boiling point.'
                }
            ]
        },

        // ── Section 5: IUPAC Naming ──────────────────────────────────────────────
        {
            id: 'ch13-sec05',
 title:'(IUPAC)',
            content: `
<h2>Naming Organic Compounds — Alkanes </h2>

<p>The IUPAC (International Union of Pure and Applied Chemistry) naming system provides a universal language for organic compounds. For Chinese high-school chemistry, the key focus is on <strong>alkane nomenclature</strong> .</p>

<h3>Alkane Parent Names </h3>
<table class="data-table">
<thead><tr><th>Carbons</th><th>Prefix (Chinese)</th><th>IUPAC name</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>1</td><td>(jiǎ)</td><td>Methane</td><td>CH₄</td></tr>
<tr><td>2</td><td>(yǐ)</td><td>Ethane</td><td>C₂H₆</td></tr>
<tr><td>3</td><td>(bǐng)</td><td>Propane</td><td>C₃H₈</td></tr>
<tr><td>4</td><td>(dīng)</td><td>Butane</td><td>C₄H₁₀</td></tr>
<tr><td>5</td><td>(wù)</td><td>Pentane</td><td>C₅H₁₂</td></tr>
<tr><td>6</td><td>(jǐ)</td><td>Hexane</td><td>C₆H₁₄</td></tr>
<tr><td>7</td><td>(gēng)</td><td>Heptane</td><td>C₇H₁₆</td></tr>
<tr><td>8</td><td>(xīn)</td><td>Octane</td><td>C₈H₁₈</td></tr>
<tr><td>9</td><td>(rén)</td><td>Nonane</td><td>C₉H₂₀</td></tr>
<tr><td>10</td><td>(guǐ)</td><td>Decane</td><td>C₁₀H₂₂</td></tr>
</tbody>
</table>

<div class="info-box">
<strong>General formula for alkanes:</strong> \\( C_nH_{2n+2} \\)<br>
All alkanes have only single bonds (fully saturated). They are the simplest class of organic compounds.
</div>

<h3>IUPAC Naming Rules — Step by Step</h3>
<ol>
<li><strong>Identify the longest carbon chain</strong> — this is the <em>parent chain</em> . The name ends in"-ane" for alkanes.</li>
<li><strong>Number the chain</strong> — start from the end nearer to the first branch point, so substituents get the lowest possible numbers.</li>
<li><strong>Name the substituents </strong> — alkyl groups derived from alkanes: methyl (–CH₃), ethyl (–CH₂CH₃), propyl, etc.</li>
<li><strong>Assemble the name</strong> — list substituents alphabetically (in IUPAC) with their position numbers, then the parent chain name.
   Format: [position-substituent]parent<br>
 Example: 2-methylbutane (2-)</li>
<li><strong>If two identical substituents are present</strong>, use prefixes di-, tri-, tetra- with both position numbers listed.</li>
</ol>

<h3>Worked Examples</h3>
<div class="example-block">
<strong>Example 1:</strong><br>
Structure: CH₃–CH(CH₃)–CH₂–CH₃<br>
Longest chain: 4 carbons → butane<br>
Branch: –CH₃ at carbon 2<br>
Name: <strong>2-methylbutane (2-)</strong>
</div>

<div class="example-block">
<strong>Example 2:</strong><br>
Structure: CH₃–CH(CH₃)–CH(CH₃)–CH₃<br>
Longest chain: 4 carbons → butane<br>
Two –CH₃ branches at C2 and C3<br>
Name: <strong>2,3-dimethylbutane (2,3-)</strong>
</div>

<div class="example-block">
<strong>Example 3:</strong><br>
Structure: CH₃–C(CH₃)₂–CH₃ (neopentane)<br>
Longest chain: 3 carbons → propane<br>
Two –CH₃ branches, both at C2<br>
Name: <strong>2,2-dimethylpropane (2,2-)</strong>
</div>

<p>Use the interactive Naming Practice Tool below to test your naming skills.</p>
            `,
            visualizations: [
                {
                    id: 'viz-naming-practice',
                    title: 'Naming Practice Tool',
                    setup(container) {
                        const viz = new VizEngine(container, { width: 660, height: 360, originX: 330, originY: 160, scale: 46 });

                        const problems = [
                            {
                                name: '2-methylbutane',
 chinese:'2-',
                                formula: 'CH₃CH(CH₃)CH₂CH₃',
                                draw(v) {
                                    v.clear();
                                    const ctx = v.ctx;
                                    const W = v.width, H = v.height;
                                    // Main chain: 4 C in a row
                                    const mainY = H * 0.45;
                                    const xs = [W * 0.2, W * 0.37, W * 0.54, W * 0.71];
                                    for (let i = 0; i < 3; i++) {
                                        ctx.strokeStyle = '#666'; ctx.lineWidth = 2;
                                        ctx.beginPath(); ctx.moveTo(xs[i], mainY); ctx.lineTo(xs[i + 1], mainY); ctx.stroke();
                                    }
                                    // Branch on C2
                                    const branchY = mainY - 60;
                                    ctx.beginPath(); ctx.moveTo(xs[1], mainY); ctx.lineTo(xs[1], branchY); ctx.stroke();
                                    xs.forEach((x, i) => {
                                        const col = i === 1 ? '#bc8cff' : '#f0883e';
                                        const r = i === 1 ? 18 : 15;
                                        ctx.fillStyle = col + '33';
                                        ctx.beginPath(); ctx.arc(x, mainY, r + 3, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = col;
                                        ctx.beginPath(); ctx.arc(x, mainY, r, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#fff';
                                        ctx.font = `bold ${r * 0.8}px sans-serif`;
                                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                        ctx.fillText('C', x, mainY);
                                        // Number label
                                        ctx.fillStyle = '#58a6ff'; ctx.font = '12px sans-serif';
                                        ctx.fillText(i + 1, x, mainY + r + 14);
                                    });
                                    // Branch C (methyl)
                                    ctx.fillStyle = '#3fb95033';
                                    ctx.beginPath(); ctx.arc(xs[1], branchY, 18, 0, Math.PI * 2); ctx.fill();
                                    ctx.fillStyle = '#3fb950';
                                    ctx.beginPath(); ctx.arc(xs[1], branchY, 15, 0, Math.PI * 2); ctx.fill();
                                    ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif';
                                    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                    ctx.fillText('C', xs[1], branchY);
                                    ctx.fillStyle = '#3fb950'; ctx.font = '11px sans-serif';
                                    ctx.fillText('methyl branch', xs[1] + 50, branchY);

                                    ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
                                    ctx.fillText('Parent chain: 4 C = butane  |  Branch: –CH₃ at C2  →  2-methylbutane', W / 2, H - 52);
                                    ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px sans-serif';
 ctx.fillText('Name: 2-methylbutane (2-)', W / 2, H - 28);
                                }
                            },
                            {
                                name: '2,2-dimethylpropane',
 chinese:'2,2-',
                                formula: 'C(CH₃)₄',
                                draw(v) {
                                    v.clear();
                                    const ctx = v.ctx;
                                    const W = v.width, H = v.height;
                                    const cx = W / 2, cy = H * 0.45;
                                    const sc = 70;
                                    const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]];
                                    dirs.forEach(([dx, dy]) => {
                                        const ex = cx + dx * sc, ey = cy + dy * sc;
                                        ctx.strokeStyle = '#666'; ctx.lineWidth = 2;
                                        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();
                                        ctx.fillStyle = '#f0883e33';
                                        ctx.beginPath(); ctx.arc(ex, ey, 17, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#f0883e';
                                        ctx.beginPath(); ctx.arc(ex, ey, 14, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif';
                                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                        ctx.fillText('C', ex, ey);
                                    });
                                    ctx.fillStyle = '#bc8cff33';
                                    ctx.beginPath(); ctx.arc(cx, cy, 21, 0, Math.PI * 2); ctx.fill();
                                    ctx.fillStyle = '#bc8cff';
                                    ctx.beginPath(); ctx.arc(cx, cy, 17, 0, Math.PI * 2); ctx.fill();
                                    ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif';
                                    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                    ctx.fillText('C', cx, cy);
                                    ctx.fillStyle = '#58a6ff'; ctx.font = '12px sans-serif';
                                    ctx.fillText('C2', cx + 22, cy + 22);

                                    ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
                                    ctx.fillText('Parent chain: 3 C = propane  |  Two –CH₃ at C2  →  2,2-dimethylpropane', W / 2, H - 52);
                                    ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px sans-serif';
 ctx.fillText('Name: 2,2-dimethylpropane (2,2-)', W / 2, H - 28);
                                }
                            },
                            {
                                name: '2,3-dimethylbutane',
 chinese:'2,3-',
                                formula: '(CH₃)₂CHCH(CH₃)₂',
                                draw(v) {
                                    v.clear();
                                    const ctx = v.ctx;
                                    const W = v.width, H = v.height;
                                    const mainY = H * 0.5;
                                    const xs = [W * 0.27, W * 0.41, W * 0.55, W * 0.69];
                                    for (let i = 0; i < 3; i++) {
                                        ctx.strokeStyle = '#666'; ctx.lineWidth = 2;
                                        ctx.beginPath(); ctx.moveTo(xs[i], mainY); ctx.lineTo(xs[i + 1], mainY); ctx.stroke();
                                    }
                                    [[xs[1], mainY - 60], [xs[2], mainY - 60]].forEach(([bx, by]) => {
                                        ctx.beginPath(); ctx.moveTo(bx, mainY); ctx.lineTo(bx, by); ctx.stroke();
                                        ctx.fillStyle = '#3fb95033';
                                        ctx.beginPath(); ctx.arc(bx, by, 17, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#3fb950';
                                        ctx.beginPath(); ctx.arc(bx, by, 14, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif';
                                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                        ctx.fillText('C', bx, by);
                                    });
                                    xs.forEach((x, i) => {
                                        const col = [1, 2].includes(i) ? '#bc8cff' : '#f0883e';
                                        ctx.fillStyle = col + '33';
                                        ctx.beginPath(); ctx.arc(x, mainY, 18, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = col;
                                        ctx.beginPath(); ctx.arc(x, mainY, 14, 0, Math.PI * 2); ctx.fill();
                                        ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif';
                                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                        ctx.fillText('C', x, mainY);
                                        ctx.fillStyle = '#58a6ff'; ctx.font = '12px sans-serif';
                                        ctx.fillText(i + 1, x, mainY + 26);
                                    });
                                    ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
                                    ctx.fillText('Parent chain: 4 C = butane  |  –CH₃ at C2 and C3  →  2,3-dimethylbutane', W / 2, H - 48);
                                    ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px sans-serif';
 ctx.fillText('Name: 2,3-dimethylbutane (2,3-)', W / 2, H - 24);
                                }
                            }
                        ];

                        const btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        container.insertBefore(btnRow, viz.canvas);

                        let current = 0;
                        problems.forEach((p, i) => {
                            VizEngine.createButton(btnRow, p.name, () => { current = i; p.draw(viz); });
                        });
                        problems[0].draw(viz);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch13-sec05-ex01',
                    type: 'multiple-choice',
                    question: 'What is the IUPAC name of the compound with structure: CH₃CH(CH₃)CH₂CH₃?',
                    choices: ['2-methylpropane', '2-methylbutane', '3-methylbutane', 'Pentane'],
                    answer: 1,
                    explanation: 'The longest chain has 4 carbons (butane). A methyl branch is at carbon 2 (numbering from the nearest end). IUPAC name: 2-methylbutane. Note that "3-methylbutane" would use the wrong numbering direction — always number to give the lowest locant.'
                },
                {
                    id: 'ch13-sec05-ex02',
                    type: 'multiple-choice',
                    question: 'The compound 2,2-dimethylpropane has the molecular formula:',
                    choices: ['C₄H₁₀', 'C₅H₁₂', 'C₆H₁₄', 'C₃H₈'],
                    answer: 1,
                    explanation: '2,2-dimethylpropane has a 3-carbon propane parent chain plus two methyl groups at C2: total = 3 + 2 = 5 carbons. Using CₙH₂ₙ₊₂: C₅H₁₂.'
                },
                {
                    id: 'ch13-sec05-ex03',
                    type: 'multiple-choice',
                    question: 'How should substituents be listed in an IUPAC name when multiple different substituents are present?',
                    choices: [
                        'In order of increasing carbon number',
                        'Alphabetically by substituent name',
                        'In order of decreasing size',
                        'In the order they appear on the chain'
                    ],
                    answer: 1,
                    explanation: 'IUPAC rules require substituents to be listed alphabetically (ignoring di-, tri-, etc. multiplying prefixes). For example: 3-ethyl-2-methylpentane (ethyl before methyl).'
                },
                {
                    id: 'ch13-sec05-ex04',
                    type: 'multiple-choice',
                    question: 'What is the general formula for all alkanes (saturated hydrocarbons with no rings)?',
                    choices: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'],
                    answer: 1,
 explanation:'Alkanes have the general formula CₙH₂ₙ₊₂. For example: methane CH₄ (n=1, 2×1+2=4), ethane C₂H₆ (n=2, 2×2+2=6).'
                },
                {
                    id: 'ch13-sec05-ex05',
                    type: 'short-answer',
                    question: 'Give the IUPAC name for: (CH₃)₂CHCH(CH₃)CH₂CH₃ and state the number of carbons in the longest chain.',
 answer:'The longest continuous chain has 5 carbons: pentane. A methyl branch at C2, another methyl branch at C3 (numbering from the end nearest the first branch). IUPAC name: 2,3-dimethylpentane (2,3-).'
                },
                {
                    id: 'ch13-sec05-ex06',
                    type: 'multiple-choice',
                    question: 'The compound CH₂=CHCH₂CH₃ has the IUPAC name:',
                    choices: ['But-1-ene', 'But-2-ene', 'Prop-1-ene', 'But-1-yne'],
                    answer: 0,
                    explanation: 'There are 4 carbons (but-), with a double bond (-ene) between C1 and C2. Numbering from the end nearer the double bond gives the lowest locant. IUPAC name: but-1-ene. But-2-ene would have the double bond between C2 and C3 (CH₃CH=CHCH₃).'
                },
                {
                    id: 'ch13-sec05-ex07',
                    type: 'multiple-choice',
                    question: 'How many structural isomers of C₅H₁₂ (pentane) exist?',
                    choices: ['2', '3', '4', '5'],
                    answer: 1,
                    explanation: 'C₅H₁₂ has exactly 3 structural isomers: (1) n-pentane — straight chain CH₃(CH₂)₃CH₃; (2) isopentane (2-methylbutane) — one methyl branch; (3) neopentane (2,2-dimethylpropane) — two methyl branches on the central carbon. A systematic approach: draw the longest chain first, then reduce the chain length and add branches, checking for symmetry.'
                }
            ]
        }
    ]
});
