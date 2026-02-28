window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',
    number: 0,
    title: 'Introduction to Chemistry',
    subtitle: 'Exploring the Methods and Tools of Chemistry',
    sections: [
        {
            id: 'ch00-sec01',
            title: 'What Is Chemistry?',
 content:`<h2>What Is Chemistry?</h2>
                <p>Chemistry is the science of <strong>matter</strong> — its composition, structure, properties, and transformations. Everything around you — the air you breathe, the water you drink, the food you eat — is made of chemicals. Chemistry helps us understand these substances and create new ones.</p>
                <div class="env-block definition">
                    <div class="env-title">Definition (Chemistry)</div>
 <div class="env-body"><p>Chemistry is the branch of science concerned with the substances of which matter is composed, the investigation of their properties and reactions, and the use of such reactions to form new substances.</p></div>
                </div>
 <h3>Why Study Chemistry?</h3>
                <p>Chemistry is central to our modern world. It underpins:</p>
                <ul>
                    <li><strong>Medicine</strong> — drugs, vaccines, and diagnostic tools</li>
                    <li><strong>Agriculture</strong> — fertilizers, pesticides, and crop science</li>
                    <li><strong>Materials</strong> — plastics, metals, ceramics, and semiconductors</li>
                    <li><strong>Energy</strong> — batteries, fuels, and solar cells</li>
                    <li><strong>Environment</strong> — pollution control, water treatment, and green chemistry</li>
                </ul>
                <div class="env-block intuition">
                    <div class="env-title">Big Picture</div>
                    <div class="env-body"><p>Chemistry operates at the boundary between the visible world and the atomic world. We observe macroscopic phenomena (color changes, gas evolution, precipitation) and explain them using microscopic models (atoms, molecules, ions, electrons). This "macro-micro" thinking is the foundation of chemical reasoning.</p></div>
                </div>
                <h3>The Scope of High School Chemistry</h3>
                <p>In this course, you will journey through:</p>
                <ul>
                    <li>Laboratory skills and safety (this chapter)</li>
                    <li>Classifying matter and chemical reactions</li>
                    <li>Stoichiometry — the language of chemistry</li>
                    <li>Atomic structure and the periodic table</li>
                    <li>Chemical bonding and molecular structure</li>
                    <li>Reaction thermodynamics and kinetics</li>
                    <li>Electrochemistry</li>
                    <li>Important element groups and organic chemistry</li>
                </ul>
                <div class="viz-placeholder" data-viz="viz-chemistry-timeline"></div>
                <div class="viz-placeholder" data-viz="viz-chem-overview"></div>`,
            visualizations: [
            {
                id: 'viz-chemistry-timeline',
                title: 'Interactive Timeline of Chemistry History',
                description: 'Explore key milestones in the history of chemistry — click on each era to learn more.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 380});
                    var ctx = viz.ctx;

                    var eras = [
 {year: -3000, label:'Ancient\nCraft', color: viz.colors.orange, detail:': Fire, pottery,\nsmelting — chemistry\nas craft'},
 {year: 500, label:'Alchemy', color: viz.colors.purple, detail:': Search for\ngold and immortality.\nDiscovered acids & bases'},
 {year: 1700, label:'Phlogiston', color: viz.colors.yellow, detail:': Wrong theory\nof combustion, but\nspurred experimentation'},
 {year: 1800, label:'Atomic\nTheory', color: viz.colors.teal, detail:': Dalton, Mendeleev.\nPeriodic Table created\nin 1869'},
 {year: 1900, label:'Quantum\nChem', color: viz.colors.blue, detail:': Bonds,\norbitals, spectroscopy.\nModern chemistry born'},
 {year: 2000, label:'Green\nChem', color: viz.colors.green, detail:': Sustainable\nprocesses, nanomaterials,\nbiotechnology'}
                    ];

                    var selected = 0;
                    var yearMin = -3500, yearMax = 2200;
                    var timelineY = 200;
                    var margin = 60;
                    var W = viz.width;

                    function yearToX(y) {
                        return margin + (y - yearMin) / (yearMax - yearMin) * (W - 2 * margin);
                    }

                    function draw() {
                        viz.clear();

                        // Timeline axis
                        ctx.strokeStyle = viz.colors.axis;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(margin, timelineY);
                        ctx.lineTo(W - margin, timelineY);
                        ctx.stroke();

                        // Arrowhead
                        ctx.fillStyle = viz.colors.axis;
                        ctx.beginPath();
                        ctx.moveTo(W - margin, timelineY);
                        ctx.lineTo(W - margin - 10, timelineY - 5);
                        ctx.lineTo(W - margin - 10, timelineY + 5);
                        ctx.closePath();
                        ctx.fill();

                        // Year labels
                        ctx.fillStyle = viz.colors.text;
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        var labelYears = [-3000, -1000, 0, 500, 1000, 1500, 1800, 1900, 2000];
                        labelYears.forEach(function(y) {
                            var x = yearToX(y);
                            ctx.fillText(y < 0 ? Math.abs(y) + ' BCE' : y + ' CE', x, timelineY + 18);
                            ctx.beginPath();
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(x, timelineY - 4);
                            ctx.lineTo(x, timelineY + 4);
                            ctx.stroke();
                        });

                        // Era dots
                        eras.forEach(function(era, i) {
                            var x = yearToX(era.year);
                            var isSelected = i === selected;
                            var r = isSelected ? 14 : 10;
                            var aboveBelow = i % 2 === 0 ? -1 : 1;
                            var dotY = timelineY + aboveBelow * 70;

                            // Connector line
                            ctx.strokeStyle = era.color + '88';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(x, timelineY);
                            ctx.lineTo(x, dotY);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Dot
                            ctx.fillStyle = isSelected ? era.color : era.color + '99';
                            ctx.beginPath();
                            ctx.arc(x, dotY, r, 0, Math.PI * 2);
                            ctx.fill();

                            if (isSelected) {
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.arc(x, dotY, r + 4, 0, Math.PI * 2);
                                ctx.stroke();
                            }

                            // Label
                            var lines = era.label.split('\n');
                            ctx.fillStyle = isSelected ? viz.colors.white : viz.colors.text;
                            ctx.font = (isSelected ? 'bold ' : '') + '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            lines.forEach(function(ln, li) {
                                ctx.fillText(ln, x, dotY + r + 14 + li * 14 * aboveBelow);
                            });
                        });

                        // Detail panel
                        var eraSelected = eras[selected];
                        var px = 30, py = 290, pw = W - 60, ph = 70;
                        ctx.fillStyle = '#1a1a40';
                        ctx.strokeStyle = eraSelected.color;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.roundRect(px, py, pw, ph, 8);
                        ctx.fill();
                        ctx.stroke();

                        ctx.fillStyle = eraSelected.color;
                        ctx.font = 'bold 13px -apple-system,sans-serif';
                        ctx.textAlign = 'left';
                        ctx.fillText(eraSelected.label.replace('\n', ' ') + ' (' + (eraSelected.year < 0 ? Math.abs(eraSelected.year) + ' BCE' : eraSelected.year + ' CE') + ')', px + 14, py + 18);

                        var detailLines = eraSelected.detail.split('\n');
                        ctx.fillStyle = viz.colors.white;
                        ctx.font = '12px -apple-system,sans-serif';
                        detailLines.forEach(function(ln, i) {
                            ctx.fillText(ln, px + 14, py + 36 + i * 16);
                        });

                        // Hint
                        ctx.fillStyle = viz.colors.text;
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'right';
                        ctx.fillText('Click an era to learn more', W - 30, 20);
                    }

                    // Mouse interaction
                    viz.canvas.addEventListener('click', function(e) {
                        var rect = viz.canvas.getBoundingClientRect();
                        var mx = e.clientX - rect.left;
                        var my = e.clientY - rect.top;
                        eras.forEach(function(era, i) {
                            var x = yearToX(era.year);
                            var aboveBelow = i % 2 === 0 ? -1 : 1;
                            var dotY = 200 + aboveBelow * 70;
                            var dx = mx - x, dy = my - dotY;
                            if (dx * dx + dy * dy < 400) {
                                selected = i;
                                draw();
                            }
                        });
                    });

                    draw();
                    return viz;
                }
            },
            {
                id: 'viz-chem-overview',
                title: 'Chemistry: Macro to Micro',
                description: 'An animated illustration of how chemistry connects the macroscopic world to the atomic scale.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 380});
                    var t = 0;
                    function draw() {
                        viz.clear();
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;

                        // Title
                        viz.screenText('Chemistry: Macro \u2194 Micro', W/2, 22, viz.colors.white, 15, 'center', 'top');

                        // Left panel: Macroscopic beaker
                        var bx = 120, by = H/2 + 20, bw = 90, bh = 100;
                        ctx.strokeStyle = viz.colors.blue;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(bx - bw/2 - 8, by - bh);
                        ctx.lineTo(bx - bw/2, by - bh + 15);
                        ctx.lineTo(bx - bw/2, by);
                        ctx.lineTo(bx + bw/2, by);
                        ctx.lineTo(bx + bw/2, by - bh + 15);
                        ctx.lineTo(bx + bw/2 + 8, by - bh);
                        ctx.stroke();

                        // Liquid in beaker
                        var liquidLevel = by - 30;
                        ctx.fillStyle = viz.colors.teal + '55';
                        ctx.fillRect(bx - bw/2 + 2, liquidLevel, bw - 4, by - liquidLevel - 2);

                        // Bubbles rising in liquid
                        for (var i = 0; i < 4; i++) {
                            var bub_x = bx - 25 + i * 16;
                            var bub_y = liquidLevel + 20 + ((t * 0.8 + i * 30) % (by - liquidLevel - 25));
                            ctx.fillStyle = viz.colors.blue + '88';
                            ctx.beginPath();
                            ctx.arc(bub_x, bub_y, 4, 0, Math.PI * 2);
                            ctx.fill();
                        }
                        viz.screenText('Macroscopic', bx, by + 20, viz.colors.blue, 13, 'center', 'top');
                        viz.screenText('(Visible World)', bx, by + 36, viz.colors.text, 11, 'center', 'top');

                        // Right panel: Atomic model
                        var ax = W - 130, ay = H/2 - 10;
                        var shells = [40, 70, 100];
                        var shellColors = [viz.colors.blue + '66', viz.colors.teal + '55', viz.colors.purple + '44'];
                        for (var s = 0; s < shells.length; s++) {
                            ctx.strokeStyle = shellColors[s];
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4,4]);
                            ctx.beginPath();
                            ctx.arc(ax, ay, shells[s], 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);
                        }
                        // Nucleus
                        ctx.fillStyle = viz.colors.orange;
                        ctx.beginPath();
                        ctx.arc(ax, ay, 12, 0, Math.PI * 2);
                        ctx.fill();
                        viz.screenText('N', ax, ay, viz.colors.white, 11, 'center', 'middle');

                        // Electrons orbiting
                        var eCounts = [2, 8, 8];
                        var eColors = [viz.colors.blue, viz.colors.green, viz.colors.yellow];
                        for (var shell = 0; shell < 3; shell++) {
                            var count = eCounts[shell];
                            for (var e = 0; e < count; e++) {
                                var angle = (e / count) * Math.PI * 2 + t * 0.02 * (shell === 0 ? 3 : shell === 1 ? 1.5 : 1);
                                var ex = ax + shells[shell] * Math.cos(angle);
                                var ey = ay + shells[shell] * Math.sin(angle);
                                ctx.fillStyle = eColors[shell];
                                ctx.beginPath();
                                ctx.arc(ex, ey, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }
                        }
                        viz.screenText('Microscopic', ax, ay + 120, viz.colors.purple, 13, 'center', 'top');
                        viz.screenText('(Atomic World)', ax, ay + 136, viz.colors.text, 11, 'center', 'top');

                        // Arrow between panels
                        var arrowY = H/2;
                        ctx.strokeStyle = viz.colors.orange;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(bx + bw/2 + 20, arrowY);
                        ctx.lineTo(ax - 120, arrowY);
                        ctx.stroke();
                        // Arrowheads
                        ctx.fillStyle = viz.colors.orange;
                        ctx.beginPath();
                        ctx.moveTo(ax - 118, arrowY);
                        ctx.lineTo(ax - 130, arrowY - 7);
                        ctx.lineTo(ax - 130, arrowY + 7);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.moveTo(bx + bw/2 + 18, arrowY);
                        ctx.lineTo(bx + bw/2 + 30, arrowY - 7);
                        ctx.lineTo(bx + bw/2 + 30, arrowY + 7);
                        ctx.fill();

                        viz.screenText('Chemistry explains', W/2, arrowY - 14, viz.colors.orange, 11, 'center', 'middle');
                        viz.screenText('what we see \u2194 why it happens', W/2, arrowY + 4, viz.colors.orange, 11, 'center', 'middle');

                        t++;
                    }
                    viz.animate(draw);
                    return viz;
                }
            }],
            exercises: [
                {
                    question: 'Chemistry operates on two levels of description. What are they, and how are they related?',
                    hint: 'Think about what you can see with your eyes versus what requires a microscope or model.',
                    solution: 'The macroscopic level describes observable properties (color, state, temperature, mass). The microscopic level explains these in terms of atoms, molecules, ions, and electrons. Chemistry connects both: macroscopic observations are explained by microscopic models.'
                },
                {
                    question: 'Name three areas of modern technology that depend on chemistry, and give one example from each.',
                    hint: 'Consider medicine, energy, and materials.',
                    solution: 'Example answers: (1) Medicine — aspirin is synthesized from salicylic acid; (2) Energy — lithium-ion batteries rely on electrochemical redox reactions; (3) Materials — nylon is a synthetic polymer made from chemical reactions between monomers.'
                },
                {
                    question: 'A chemist observes that a white powder dissolves in water and the resulting solution conducts electricity. What can she infer about the microscopic nature of the powder?',
                    hint: 'Electrical conductivity in solution requires mobile charged particles.',
                    solution: 'The powder is likely an ionic compound (like NaCl). When dissolved, it dissociates into positive and negative ions that are free to move through the solution, carrying electrical charge. This explains the observed macroscopic property (conductivity) using a microscopic model (ions).'
                }
            ]
        },
        {
            id: 'ch00-sec02',
            title: 'Laboratory Safety',
 content:`<h2>Laboratory Safety</h2>
                <p>Chemistry is an experimental science. The laboratory is where ideas are tested and discoveries are made — but it can also be dangerous if proper precautions are not followed. Safety is always the first priority.</p>
                <div class="env-block warning">
                    <div class="env-title">Warning: General Lab Rules</div>
                    <div class="env-body">
                        <ul>
 <li>Always wear <strong>safety goggles</strong> when working with chemicals.</li>
 <li>Wear <strong>gloves</strong> when handling corrosive, toxic, or irritating substances.</li>
 <li>Wear a <strong>lab coat</strong> to protect skin and clothing.</li>
                            <li>Never eat, drink, or apply cosmetics in the laboratory.</li>
 <li>Know the location of the <strong>fire extinguisher</strong>, <strong>eyewash station</strong>, and <strong>emergency shower</strong>.</li>
 <li>Work in a <strong>fume hood</strong> when handling volatile or toxic chemicals.</li>
                            <li>Never pipette by mouth.</li>
                            <li>Dispose of chemical waste in designated containers.</li>
                        </ul>
                    </div>
                </div>
 <h3>Fire Safety</h3>
                <p>Many chemicals are flammable. Rules for working with flames and flammable substances:</p>
                <ul>
                    <li>Keep flammable solvents away from open flames.</li>
                    <li>Never heat a closed container.</li>
                    <li>When igniting a Bunsen burner, use a striker — never a lighter held sideways.</li>
                    <li>If a fire breaks out: alert others, use the correct fire extinguisher (dry chemical or CO₂ for most lab fires), evacuate if necessary.</li>
                </ul>
 <h3>Chemical Handling</h3>
                <p>Different chemicals require different precautions:</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.92em;">
                    <tr style="background:#1a1a40;">
                        <th style="padding:8px; text-align:left;">Hazard Type</th>
                        <th style="padding:8px; text-align:left;">Examples</th>
                        <th style="padding:8px; text-align:left;">Precautions</th>
                    </tr>
                    <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;">Corrosive </td>
                        <td style="padding:8px;">H₂SO₄, NaOH, HCl</td>
                        <td style="padding:8px;">Gloves, goggles; add acid to water (never water to acid)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;">Flammable </td>
                        <td style="padding:8px;">Ethanol, acetone, diethyl ether</td>
                        <td style="padding:8px;">Keep away from flames; use fume hood</td>
                    </tr>
                    <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;">Toxic </td>
                        <td style="padding:8px;">Chlorine gas, lead compounds</td>
                        <td style="padding:8px;">Fume hood; gloves; minimal quantities</td>
                    </tr>
                    <tr>
 <td style="padding:8px;">Oxidizing </td>
                        <td style="padding:8px;">KMnO₄, H₂O₂, HNO₃</td>
                        <td style="padding:8px;">Keep away from flammables and reducers</td>
                    </tr>
                </table>
                <div class="env-block remark">
                    <div class="env-title">Important: Diluting Sulfuric Acid</div>
 <div class="env-body"><p>When diluting concentrated sulfuric acid, always add the acid slowly to water, never water to acid. This is because dissolution releases enormous heat. Adding water to acid can cause violent boiling and splashing of the corrosive acid. Remember:"Add acid to water, like you oughta" .</p></div>
                </div>
                <div class="viz-placeholder" data-viz="viz-lab-safety"></div>`,
            visualizations: [{
                id: 'viz-lab-safety',
                title: 'Lab Safety Equipment — Interactive Guide',
                description: 'Click on each piece of safety equipment to learn about its proper use.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 400});
                    var selected = null;

                    var items = [
 {x: 100, y: 120, r: 40, color:'#58a6ff', label:'Goggles', ch:'',
                         desc: 'Safety goggles protect your eyes from chemical splashes, flying debris, and UV radiation. Always wear them in the lab, even if you think you are only observing.'},
 {x: 250, y: 120, r: 40, color:'#3fb950', label:'Gloves', ch:'',
                         desc: 'Nitrile gloves protect your skin from corrosive, toxic, or irritating chemicals. Check gloves for holes before use. Dispose of used gloves in chemical waste bins.'},
 {x: 400, y: 120, r: 40, color:'#f0883e', label:'Fire Ext.', ch:'',
                         desc: 'The fire extinguisher is used to put out small fires. For lab fires: use CO\u2082 or dry chemical extinguishers. Never use water on chemical or electrical fires.'},
 {x: 580, y: 120, r: 40, color:'#bc8cff', label:'Fume Hood', ch:'',
                         desc: 'The fume hood removes toxic or flammable vapors from the work area. Always work inside the fume hood when using volatile, toxic, or strongly smelling chemicals. Keep the sash at the correct height.'},
 {x: 175, y: 280, r: 40, color:'#f778ba', label:'Eyewash', ch:'',
                         desc: 'The eyewash station delivers a gentle stream of water to flush chemical splashes from the eyes. If chemicals contact your eyes, immediately flush for at least 15 minutes and seek medical attention.'},
 {x: 350, y: 280, r: 40, color:'#d29922', label:'Lab Coat', ch:'',
                         desc: 'The lab coat protects your skin and clothing from chemical splashes and spills. It should be made of cotton or other flame-resistant material. Always button it fully.'},
 {x: 525, y: 280, r: 40, color:'#f85149', label:'First Aid', ch:'',
                         desc: 'The first aid kit contains bandages, antiseptic, and burn treatment for minor injuries. Know its location. For serious injuries, chemical burns or inhalation, call for emergency help immediately.'}
                    ];

                    function draw() {
                        viz.clear();
                        var ctx = viz.ctx;
                        viz.screenText('Click on each item to learn more', viz.width/2, 16, viz.colors.text, 12, 'center', 'top');

                        items.forEach(function(item, i) {
                            var isSelected = selected === i;
                            ctx.fillStyle = isSelected ? item.color : item.color + '77';
                            ctx.beginPath();
                            ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
                            ctx.fill();
                            if (isSelected) {
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 3;
                                ctx.stroke();
                            }
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(item.label, item.x, item.y - 6);
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.fillStyle = isSelected ? viz.colors.white : viz.colors.text;
                            if (item.ch) ctx.fillText(item.ch, item.x, item.y + 8);
                        });

                        if (selected !== null) {
                            var item = items[selected];
                            var boxY = viz.height - 90;
                            ctx.fillStyle = '#1a1a40';
                            ctx.fillRect(20, boxY, viz.width - 40, 80);
                            ctx.strokeStyle = item.color;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(20, boxY, viz.width - 40, 80);
                            ctx.fillStyle = item.color;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(item.ch ? item.label + ' (' + item.ch + ')' : item.label, 34, boxY + 10);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            // Wrap text
                            var words = item.desc.split(' ');
                            var line = '';
                            var lineY = boxY + 28;
                            words.forEach(function(word) {
                                var test = line + (line ? ' ' : '') + word;
                                if (ctx.measureText(test).width > viz.width - 70 && line) {
                                    ctx.fillText(line, 34, lineY);
                                    lineY += 16;
                                    line = word;
                                } else {
                                    line = test;
                                }
                            });
                            if (line) ctx.fillText(line, 34, lineY);
                        }
                    }

                    viz.canvas.addEventListener('click', function(e) {
                        var rect = viz.canvas.getBoundingClientRect();
                        var mx = e.clientX - rect.left;
                        var my = e.clientY - rect.top;
                        var hit = null;
                        items.forEach(function(item, i) {
                            var dx = mx - item.x, dy = my - item.y;
                            if (Math.sqrt(dx*dx + dy*dy) < item.r) hit = i;
                        });
                        selected = (hit === selected) ? null : hit;
                        draw();
                    });

                    draw();
                    return viz;
                }
            },
            {
                id: 'viz-lab-safety-quiz',
                title: 'Lab Safety Quiz — Interactive Scenarios',
                description: 'Test your knowledge: click the correct response for each lab safety scenario.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 420});
                    var ctx = viz.ctx;

                    var scenarios = [
                        {
                            item: 'You spill concentrated H\u2082SO\u2084 on your hand',
                            options: ['Wipe it off with a cloth', 'Rinse with water 15 min, then NaHCO\u2083', 'Apply vinegar immediately', 'Rinse with NaOH solution'],
                            correct: 1,
                            explanation: 'Correct! Rinse with lots of water first, then apply 3-5% NaHCO\u2083 (baking soda) to neutralize the acid. Never use strong NaOH \u2014 it would cause a base burn!'
                        },
                        {
                            item: 'Alcohol lamp catches fire and spreads on desk',
                            options: ['Pour water over it', 'Cover with wet cloth / sand', 'Blow it out', 'Run out of the lab'],
                            correct: 1,
                            explanation: 'Cover with a wet cloth or use sand. Water makes alcohol fires spread! Blowing spreads the flame and is dangerous.'
                        },
                        {
                            item: 'You need to check if a gas smells like ammonia',
                            options: ['Put your nose over it and inhale deeply', 'Leave it \u2014 never smell chemicals', 'Gently waft vapors toward your nose', 'Open a window and wait'],
                            correct: 2,
                            explanation: 'Always "waft" \u2014 use your hand to gently fan vapors toward your nose from a safe distance. Never inhale directly from a container.'
                        },
                        {
                            item: 'You finish an experiment with leftover mercury(II) nitrate solution',
                            options: ['Pour down the sink drain', 'Leave it in the beaker', 'Collect in heavy-metal waste container', 'Dilute with water, then drain'],
                            correct: 2,
                            explanation: 'Heavy metal solutions (Hg\u00b2\u207a, Pb\u00b2\u207a) MUST go into designated heavy-metal waste containers. Illegal to pour down drains.'
                        },
                        {
                            item: 'Before starting a lab, what is the FIRST safety step?',
                            options: ['Light the alcohol lamp', 'Put on safety goggles and lab coat', 'Read the experimental procedure once', 'Mix the chemicals together'],
                            correct: 1,
                            explanation: 'Always put on personal protective equipment (PPE) \u2014 goggles and lab coat \u2014 BEFORE anything else. Also locate the fire extinguisher and eyewash station first.'
                        }
                    ];

                    var current = 0;
                    var answered = false;
                    var chosen = -1;
                    var W = viz.width, H = viz.height;

                    function draw() {
                        viz.clear();
                        var sc = scenarios[current];

                        // Progress bar
                        ctx.fillStyle = '#1a1a40';
                        ctx.fillRect(30, 15, W - 60, 8);
                        ctx.fillStyle = viz.colors.teal;
                        ctx.fillRect(30, 15, (W - 60) * (current + 1) / scenarios.length, 8);
                        ctx.fillStyle = viz.colors.text;
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'right';
                        ctx.fillText('Scenario ' + (current + 1) + ' of ' + scenarios.length, W - 30, 10);

                        // Scenario box
                        ctx.fillStyle = '#1a2a4a';
                        ctx.strokeStyle = viz.colors.blue + '88';
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.roundRect(30, 35, W - 60, 80, 8);
                        ctx.fill();
                        ctx.stroke();

                        ctx.fillStyle = viz.colors.blue;
                        ctx.font = 'bold 12px -apple-system,sans-serif';
                        ctx.textAlign = 'left';
                        ctx.fillText('SITUATION:', 45, 55);

                        ctx.fillStyle = viz.colors.white;
                        ctx.font = '13px -apple-system,sans-serif';
                        var words = sc.item.split(' ');
                        var line = '', lines = [], maxW = W - 90;
                        words.forEach(function(w) {
                            var test = line + (line ? ' ' : '') + w;
                            if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
                            else line = test;
                        });
                        if (line) lines.push(line);
                        lines.forEach(function(l, i) { ctx.fillText(l, 45, 73 + i * 18); });

                        // Options
                        sc.options.forEach(function(opt, i) {
                            var oy = 135 + i * 55;
                            var isChosen = i === chosen;
                            var isCorrect = i === sc.correct;
                            var bgColor = '#1a1a40';
                            var borderColor = viz.colors.axis;
                            if (answered) {
                                if (isCorrect) { bgColor = '#0d2d1a'; borderColor = viz.colors.green; }
                                else if (isChosen && !isCorrect) { bgColor = '#2d0d0d'; borderColor = viz.colors.red; }
                            } else if (isChosen) {
                                bgColor = '#1a2a4a'; borderColor = viz.colors.blue;
                            }
                            ctx.fillStyle = bgColor;
                            ctx.strokeStyle = borderColor;
                            ctx.lineWidth = answered && isCorrect ? 2 : 1.5;
                            ctx.beginPath();
                            ctx.roundRect(30, oy, W - 60, 44, 6);
                            ctx.fill();
                            ctx.stroke();

                            var letter = ['A', 'B', 'C', 'D'][i];
                            ctx.fillStyle = answered && isCorrect ? viz.colors.green : (isChosen ? viz.colors.blue : viz.colors.text);
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(letter + '.', 45, oy + 22);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(opt, 68, oy + 22);
                        });

                        // Explanation
                        if (answered) {
                            ctx.fillStyle = '#0a2010';
                            ctx.strokeStyle = viz.colors.green + '66';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.roundRect(30, H - 80, W - 60, 60, 6);
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Explanation:', 45, H - 65);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            var expWords = sc.explanation.split(' ');
                            var expLine = '', expLines = [], expMaxW = W - 90;
                            expWords.forEach(function(w) {
                                var test = expLine + (expLine ? ' ' : '') + w;
                                if (ctx.measureText(test).width > expMaxW && expLine) { expLines.push(expLine); expLine = w; }
                                else expLine = test;
                            });
                            if (expLine) expLines.push(expLine);
                            expLines.slice(0, 2).forEach(function(l, i) { ctx.fillText(l, 45, H - 48 + i * 15); });
                        }

                        ctx.fillStyle = viz.colors.text;
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('Click an option to answer. Click again to advance.', W / 2, H - 8);
                    }

                    viz.canvas.addEventListener('click', function(e) {
                        var rect = viz.canvas.getBoundingClientRect();
                        var mx = e.clientX - rect.left;
                        var my = e.clientY - rect.top;
                        if (answered) {
                            if (current < scenarios.length - 1) { current++; answered = false; chosen = -1; }
                            else { current = 0; answered = false; chosen = -1; }
                            draw();
                            return;
                        }
                        scenarios[current].options.forEach(function(opt, i) {
                            var oy = 135 + i * 55;
                            if (mx >= 30 && mx <= viz.width - 30 && my >= oy && my <= oy + 44) {
                                chosen = i;
                                answered = true;
                                draw();
                            }
                        });
                    });

                    draw();
                    return viz;
                }
            }],
            exercises: [
                {
                    question: 'When diluting concentrated sulfuric acid (H\u2082SO\u2084), a student pours water into the acid. What is wrong with this procedure, and what is the correct method?',
                    hint: 'Consider which mixing order releases heat more dangerously.',
                    solution: 'Pouring water into concentrated H\u2082SO\u2084 is very dangerous. The dissolution of H\u2082SO\u2084 is highly exothermic. Since water is less dense, it floats on the acid and the violent heat generation at the surface causes superheating and explosive boiling that can spray corrosive acid. The correct method: add concentrated H\u2082SO\u2084 slowly to water with stirring, so the heat is dissipated into the large volume of water.'
                },
                {
                    question: 'A student accidentally spills a small amount of sodium hydroxide (NaOH) solution on their hand. What are the correct steps to take?',
                    hint: 'NaOH is a strong base and is corrosive. Think about immediate and then medical responses.',
                    solution: 'Immediately rinse the affected area with large amounts of running water for at least 15 minutes to dilute and remove the NaOH. Then wash gently with dilute boric acid solution (for alkali burns). Seek medical attention if the burn is significant. Do not neutralize with strong acid directly on skin.'
                },
                {
 question:'You need to work with diethyl ether, a highly flammable solvent. List at least four safety precautions you should take.',
                    hint: 'Think about fire, fumes, storage, and protective equipment.',
                    solution: 'At least four of: (1) Work inside the fume hood to contain vapors; (2) Ensure no open flames or sparks nearby; (3) Wear nitrile gloves and safety goggles; (4) Store in a cool, well-ventilated area away from oxidizers; (5) Use minimum quantities necessary; (6) Have a CO\u2082 fire extinguisher accessible; (7) Do not pour waste down the drain — dispose in labeled waste container.'
                }
            ]
        },
        {
            id: 'ch00-sec03',
            title: 'Filtration and Evaporation',
 content:`<h2>Filtration and Evaporation</h2>
                <p>Two of the most fundamental separation techniques in chemistry involve exploiting differences in <strong>solubility</strong> and <strong>boiling point</strong>. In this section we examine filtration and evaporation/crystallization.</p>
 <h3>Filtration</h3>
 <p>Filtration separates an <strong>insoluble solid</strong> from a liquid. The mixture is poured through filter paper held in a funnel. The liquid (filtrate) passes through; the solid (residue) is retained on the paper.</p>
                <div class="env-block definition">
                    <div class="env-title">Definition (Filtration)</div>
 <div class="env-body"><p>Filtration is a separation technique used to separate an insoluble solid from a liquid by passing the mixture through a porous filter medium. It works because solid particles are too large to pass through the pores of the filter paper.</p></div>
                </div>
                <h3>Setting Up Filtration: The Three Touches Rule</h3>
 <p>Correct filtration setup requires remembering"<strong></strong>" (one touch, two lows, three contacts):</p>
                <ul>
 <li><strong>(One touch)</strong>: The filter paper must be wetted and pressed flat against the funnel — no air bubbles between paper and glass.</li>
 <li><strong>(Two lows)</strong>: (1) The edge of the filter paper must be slightly below the rim of the funnel. (2) The liquid level in the funnel must be below the top of the filter paper.</li>
 <li><strong>(Three contacts)</strong>: (1) The lower tip of the funnel touches the inner wall of the beaker (so liquid runs smoothly). (2) The glass rod touches the triple-layer side of the folded filter paper. (3) The liquid is poured along the glass rod.</li>
                </ul>
                <div class="env-block example">
                    <div class="env-title">Example: Purifying Rock Salt</div>
                    <div class="env-body">
                        <p>Common table salt (NaCl) found in nature contains sand and other insoluble impurities. To purify it:</p>
                        <ol>
                            <li>Dissolve the crude salt in water — NaCl dissolves, sand does not.</li>
                            <li>Filter the mixture to remove sand (the residue).</li>
                            <li>Evaporate the filtrate to recover pure NaCl crystals.</li>
                        </ol>
                        <p>This is a classic application combining filtration and evaporation.</p>
                    </div>
                </div>
 <h3>Evaporation Crystallization</h3>
 <p>When a dissolved solid needs to be recovered from solution, we can evaporate the solvent. As the solution becomes more concentrated, the dissolved solid eventually crystallizes out .</p>
                <p>Two common approaches:</p>
                <ul>
 <li><strong>Complete evaporation</strong> : Heat until all solvent is gone. Used for salts that don't decompose on heating (e.g., NaCl).</li>
 <li><strong>Evaporation to near-dryness, then cooling</strong> : Used for salts whose solubility drops sharply with temperature (e.g., KNO₃, Na₂SO₄·10H₂O).</li>
                </ul>
                <div class="env-block remark">
                    <div class="env-title">Which Method to Use?</div>
                    <div class="env-body">
 <p>Use <strong>evaporation to dryness</strong> for salts like NaCl whose solubility changes little with temperature.</p>
 <p>Use <strong>cooling crystallization</strong> for salts like KNO₃ whose solubility drops greatly at lower temperatures.</p>
                    </div>
                </div>
                <div class="viz-placeholder" data-viz="viz-filtration"></div>`,
            visualizations: [{
                id: 'viz-filtration',
                title: 'Filtration Process',
                description: 'Interactive animation showing filtration setup and the separation of sand from saltwater.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 420});
                    var phase = 0; // 0=setup, 1=pouring, 2=filtered
                    var pourProgress = 0;
                    var animating = false;
                    var animId = null;

                    var btn = VizEngine.createButton('Start Filtration', function() {
                        if (animating) return;
                        phase = 1;
                        pourProgress = 0;
                        animating = true;
                        function step() {
                            pourProgress += 0.012;
                            if (pourProgress >= 1) {
                                pourProgress = 1;
                                phase = 2;
                                animating = false;
                                drawScene();
                                return;
                            }
                            drawScene();
                            animId = requestAnimationFrame(step);
                        }
                        animId = requestAnimationFrame(step);
                    });
                    controls.appendChild(btn);

                    var resetBtn = VizEngine.createButton('Reset', function() {
                        if (animId) cancelAnimationFrame(animId);
                        animating = false;
                        phase = 0;
                        pourProgress = 0;
                        drawScene();
                    });
                    controls.appendChild(resetBtn);

                    function drawScene() {
                        viz.clear();
                        var ctx = viz.ctx;
                        var W = viz.width;

                        // Labels at top
 viz.screenText('Filtration Setup', W/2, 18, viz.colors.white, 14,'center','top');

                        // Ring stand (simplified)
                        ctx.strokeStyle = viz.colors.text;
                        ctx.lineWidth = 3;
                        ctx.beginPath(); ctx.moveTo(60, 50); ctx.lineTo(60, 380); ctx.stroke();
                        ctx.beginPath(); ctx.moveTo(30, 380); ctx.lineTo(90, 380); ctx.stroke();
                        // Ring
                        ctx.strokeStyle = viz.colors.orange;
                        ctx.lineWidth = 2;
                        ctx.beginPath(); ctx.moveTo(60, 150); ctx.lineTo(160, 150); ctx.stroke();

                        // Funnel
                        var fx = 220, fy = 155;
                        ctx.strokeStyle = viz.colors.blue;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(fx - 60, fy);
                        ctx.lineTo(fx - 10, fy + 80);
                        ctx.lineTo(fx + 10, fy + 80);
                        ctx.lineTo(fx + 60, fy);
                        ctx.closePath();
                        ctx.stroke();
                        // Funnel stem
                        ctx.beginPath();
                        ctx.moveTo(fx - 10, fy + 80);
                        ctx.lineTo(fx - 10, fy + 130);
                        ctx.lineTo(fx + 10, fy + 130);
                        ctx.lineTo(fx + 10, fy + 80);
                        ctx.stroke();

                        // Filter paper (folded triangle)
                        ctx.fillStyle = viz.colors.white + '22';
                        ctx.strokeStyle = viz.colors.white + '88';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(fx - 58, fy + 2);
                        ctx.lineTo(fx - 10, fy + 78);
                        ctx.lineTo(fx + 10, fy + 78);
                        ctx.lineTo(fx + 58, fy + 2);
                        ctx.closePath();
                        ctx.fill(); ctx.stroke();

                        viz.screenText('Filter paper', fx + 75, fy + 40, viz.colors.text, 10, 'left', 'middle');

                        // Collection beaker
                        var cbx = 220, cby = 310, cbw = 80, cbh = 70;
                        ctx.strokeStyle = viz.colors.teal;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(cbx - cbw/2 - 6, cby - cbh);
                        ctx.lineTo(cbx - cbw/2, cby - cbh + 12);
                        ctx.lineTo(cbx - cbw/2, cby);
                        ctx.lineTo(cbx + cbw/2, cby);
                        ctx.lineTo(cbx + cbw/2, cby - cbh + 12);
                        ctx.lineTo(cbx + cbw/2 + 6, cby - cbh);
                        ctx.stroke();

                        viz.screenText('Filtrate', cbx, cby + 12, viz.colors.teal, 10, 'center', 'top');
                        // (filtrate label - removed duplicate)

                        // Pouring beaker on left
                        var pbx = 480, pby = 200;
                        ctx.strokeStyle = viz.colors.orange;
                        ctx.lineWidth = 2;
                        ctx.save();
                        if (phase >= 1) {
                            ctx.translate(pbx, pby);
                            var pourAngle = -0.4 * pourProgress;
                            ctx.rotate(pourAngle);
                            ctx.translate(-pbx, -pby);
                        }
                        ctx.beginPath();
                        ctx.moveTo(pbx - 45 - 6, pby - 70);
                        ctx.lineTo(pbx - 45, pby - 58);
                        ctx.lineTo(pbx - 45, pby);
                        ctx.lineTo(pbx + 45, pby);
                        ctx.lineTo(pbx + 45, pby - 58);
                        ctx.lineTo(pbx + 45 + 6, pby - 70);
                        ctx.stroke();

                        // Mixture in pouring beaker
                        var remainFraction = 1 - pourProgress;
                        if (remainFraction > 0) {
                            var liqH = 50 * remainFraction;
                            ctx.fillStyle = viz.colors.blue + '44';
                            ctx.fillRect(pbx - 44, pby - liqH, 88, liqH);
                            // Sand particles
                            for (var i = 0; i < 6; i++) {
                                var px2 = pbx - 30 + i * 10;
                                var py2 = pby - 10 - (i % 3) * 12;
                                if (py2 > pby - liqH) {
                                    ctx.fillStyle = viz.colors.yellow;
                                    ctx.beginPath();
                                    ctx.arc(px2, py2, 3, 0, Math.PI*2);
                                    ctx.fill();
                                }
                            }
                        }
                        ctx.restore();

                        // Pour stream
                        if (phase === 1 && pourProgress > 0 && pourProgress < 1) {
                            ctx.strokeStyle = viz.colors.blue + '88';
                            ctx.lineWidth = 3;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(440, 180);
                            ctx.quadraticCurveTo(330, 100, fx, fy + 5);
                            ctx.stroke();
                            ctx.setLineDash([]);
                        }

                        // Sand residue on filter paper
                        if (phase === 2 || (phase === 1 && pourProgress > 0.4)) {
                            var residueFrac = phase === 2 ? 1 : (pourProgress - 0.4) / 0.6;
                            for (var j = 0; j < Math.floor(6 * residueFrac); j++) {
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.beginPath();
                                ctx.arc(fx - 15 + j * 8, fy + 60 + (j % 2) * 6, 3, 0, Math.PI*2);
                                ctx.fill();
                            }
 viz.screenText('Sand', fx + 75, fy + 70, viz.colors.yellow, 10,'left','middle');
                        }

                        // Filtrate collected
                        if (phase === 2 || (phase === 1 && pourProgress > 0.5)) {
                            var filtFrac = phase === 2 ? 1 : (pourProgress - 0.5) / 0.5;
                            ctx.fillStyle = viz.colors.teal + '55';
                            ctx.fillRect(cbx - cbw/2 + 2, cby - 40 * filtFrac, cbw - 4, 40 * filtFrac);
                        }

                        // Labels
                        if (phase === 0) {
                            viz.screenText('Beaker with sand + saltwater', pbx, pby + 20, viz.colors.text, 10, 'center', 'top');
                        }

                        // State label
                        var stateLabels = ['Ready to filter', 'Pouring mixture through filter...', 'Filtration complete! Sand remains on filter, clear filtrate collected.'];
                        viz.screenText(stateLabels[phase], W/2, 390, phase === 2 ? viz.colors.green : viz.colors.orange, 11, 'center', 'top');
                    }

                    drawScene();
                    return viz;
                }
            }],
            exercises: [
                {
 question:'In filtration, what is the purpose of the glass rod ?',
                    hint: 'Think about what happens when liquid is poured freely onto filter paper.',
                    solution: 'The glass rod is used to guide the liquid gently onto the filter paper. Without it, the direct pouring force could break the filter paper. The liquid should be poured along the glass rod to distribute it gently over the triple-fold side of the filter paper.'
                },
                {
                    question: 'A student filters a mixture and notices the filtrate is cloudy. What are two possible causes, and how should she fix each?',
                    hint: 'Think about what could allow solid particles to pass through.',
                    solution: '(1) The filter paper has a hole or tear — replace the filter paper and re-filter through a new one. (2) The filtrate was poured too fast, disturbing the filter cake and causing particles to pass through — re-filter more slowly. Also check that the filter paper was properly seated against the funnel with no gaps.'
                },
                {
 question:'You have a solution of KNO\u2083 (solubility) and a solution of NaCl (solubility). Describe the best crystallization method for each.',
                    hint: 'Consider how solubility vs temperature curve affects the chosen method.',
 solution:'For KNO\u2083: Use cooling crystallization . Since KNO\u2083 solubility drops sharply with temperature, a hot saturated solution cooled to room temperature will deposit large crystals while impurities (with different solubility profiles) remain in solution. For NaCl: Use evaporation crystallization by heating the solution until most water evaporates, causing NaCl to crystallize. Since NaCl solubility barely changes with temperature, cooling alone would not work well.'
                }
            ]
        },
        {
            id: 'ch00-sec04',
            title: 'Distillation and Extraction',
 content:`<h2>Distillation and Extraction</h2>
                <p>When two miscible liquids are mixed, or when a solid is dissolved in a solvent and we need to recover a pure compound from a mixture of solvents, more advanced separation techniques are required.</p>
 <h3>Distillation</h3>
                <p>Distillation separates <strong>miscible liquids</strong> that have sufficiently different boiling points. The mixture is heated; the component with the lower boiling point vaporizes preferentially, the vapor travels through a condenser where it is cooled and condensed back to liquid, and is collected separately.</p>
                <div class="env-block definition">
                    <div class="env-title">Definition (Distillation)</div>
 <div class="env-body"><p>Distillation is a separation technique that exploits differences in boiling point between the components of a liquid mixture. The mixture is heated to vaporize the more volatile component, which is then condensed and collected.</p></div>
                </div>
                <h3>Distillation Apparatus</h3>
                <p>Key components:</p>
                <ul>
 <li><strong>Distillation flask</strong> : Holds the liquid mixture, has a side arm for vapor exit.</li>
 <li><strong>Thermometer</strong> : Placed with the bulb at the side arm opening to measure vapor temperature.</li>
 <li><strong>Condenser</strong> : Cool water flows through the outer jacket; vapor condenses on the cool inner tube.</li>
 <li><strong>Collection flask</strong> : Receives the distillate.</li>
 <li><strong>Boiling chips</strong> : Added to prevent bumping .</li>
                </ul>
                <div class="env-block warning">
                    <div class="env-title">Important: Thermometer Placement</div>
                    <div class="env-body"><p>The thermometer bulb must be positioned at the junction of the side arm — not submerged in the liquid. It measures the temperature of the <em>vapor</em> as it exits, not the liquid. When the vapor temperature equals the boiling point of the target compound, collection begins.</p></div>
                </div>
                <h3>Example: Separating Ethanol and Water</h3>
 <p>Ethanol boils at 78.4°C; water boils at 100°C. When a mixture is distilled, ethanol-rich vapor distills first. Pure ethanol cannot be obtained by simple distillation alone (an azeotrope forms at 95.6% ethanol), but distillation can enrich the ethanol fraction significantly.</p>
                <div class="viz-placeholder" data-viz="viz-distillation"></div>
 <h3>Extraction</h3>
 <p>Extraction uses a second solvent (/extractant) that is <strong>immiscible</strong> with the original solvent and that dissolves the target compound much better. The target compound preferentially moves into the extractant layer.</p>
                <div class="env-block definition">
                    <div class="env-title">Definition (Extraction)</div>
 <div class="env-body"><p>Extraction is a separation technique based on the different solubility of a substance in two immiscible solvents. The substance distributes between the two liquid layers according to its partition coefficient.</p></div>
                </div>
                <h3>Separating Funnel Technique</h3>
 <p>Extraction is performed in a <strong>separating funnel</strong> :</p>
                <ol>
                    <li>Add the aqueous solution and the extractant to the separating funnel.</li>
                    <li>Stopper and shake gently, releasing pressure frequently by inverting and opening the stopcock.</li>
                    <li>Allow the layers to separate (the denser layer sinks to the bottom).</li>
                    <li>Open the stopcock to drain the lower layer into one flask, then pour the upper layer from the top of the funnel into another flask.</li>
                </ol>
                <div class="env-block example">
                    <div class="env-title">Example: Extracting Bromine from Water</div>
                    <div class="env-body">
 <p>Bromine (Br₂) dissolves in both water and organic solvents. Since Br₂ is much more soluble in CCl₄ than in water, adding CCl₄ to bromine-water causes Br₂ to transfer into the CCl₄ layer. After shaking and separation: the lower CCl₄ layer is orange-red (Br₂-rich), the upper water layer becomes nearly colorless.</p>
                    </div>
                </div>
                <div class="viz-placeholder" data-viz="viz-extraction"></div>`,
            visualizations: [
                {
                    id: 'viz-distillation',
                    title: 'Virtual Distillation Lab',
                    description: 'Animated distillation apparatus. Adjust the temperature slider to control heating.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420});
                        var heatLevel = 0;
                        var distillateLevel = 0;
                        var t = 0;
                        var animId = null;

                        var slider = VizEngine.createSlider('Heat', 0, 100, 0, 1, function(v) {
                            heatLevel = v;
                        });
                        controls.appendChild(slider);

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var W = viz.width, H = viz.height;

 viz.screenText('Distillation Apparatus', W/2, 14, viz.colors.white, 13,'center','top');

                            var temp = heatLevel * 1.05; // 0-105 scale

                            // Update distillate
                            if (temp > 78) {
                                distillateLevel = Math.min(distillateLevel + 0.003 * (temp - 78) / 27, 1);
                            }

                            // Flask
                            var flx = 130, fly = 270, flr = 60;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(flx, fly, flr, 0, Math.PI * 2);
                            ctx.stroke();
                            // Flask neck
                            ctx.beginPath();
                            ctx.moveTo(flx - 12, fly - flr);
                            ctx.lineTo(flx - 12, fly - flr - 50);
                            ctx.lineTo(flx + 12, fly - flr - 50);
                            ctx.lineTo(flx + 12, fly - flr);
                            ctx.stroke();
                            // Side arm
                            ctx.beginPath();
                            ctx.moveTo(flx + 12, fly - flr - 30);
                            ctx.lineTo(flx + 80, fly - flr - 60);
                            ctx.stroke();

                            // Liquid in flask
                            var liqColor = heatLevel > 0 ? viz.colors.orange + '66' : viz.colors.teal + '55';
                            ctx.save();
                            ctx.beginPath();
                            ctx.arc(flx, fly, flr - 2, 0, Math.PI * 2);
                            ctx.clip();
                            ctx.fillStyle = liqColor;
                            ctx.fillRect(flx - flr, fly - 10, flr * 2, flr + 10);
                            ctx.restore();

                            // Bubbles when heating
                            if (heatLevel > 30) {
                                var numBub = Math.floor(heatLevel / 20);
                                for (var b = 0; b < numBub; b++) {
                                    var bx2 = flx - 20 + b * 15 + Math.sin(t * 0.1 + b) * 5;
                                    var by2 = fly + 5 - ((t * 0.5 + b * 20) % 50);
                                    ctx.fillStyle = viz.colors.white + '66';
                                    ctx.beginPath();
                                    ctx.arc(bx2, by2, 3, 0, Math.PI*2);
                                    ctx.fill();
                                }
                            }

                            // Flame under flask
                            if (heatLevel > 0) {
                                var fh = 20 + heatLevel * 0.3;
                                ctx.fillStyle = viz.colors.orange + 'aa';
                                ctx.beginPath();
                                ctx.moveTo(flx - 20, fly + flr + 5);
                                ctx.quadraticCurveTo(flx - 10, fly + flr + 5 - fh, flx, fly + flr - 5);
                                ctx.quadraticCurveTo(flx + 10, fly + flr + 5 - fh, flx + 20, fly + flr + 5);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.yellow + '88';
                                ctx.beginPath();
                                ctx.moveTo(flx - 10, fly + flr + 5);
                                ctx.quadraticCurveTo(flx, fly + flr + 5 - fh * 0.6, flx + 10, fly + flr + 5);
                                ctx.fill();
                            }

                            // Thermometer
                            var tmx = flx + 70, tmy = fly - flr - 30;
                            ctx.strokeStyle = viz.colors.text;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(flx + 12, tmy);
                            ctx.lineTo(flx + 35, tmy);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillRect(tmx, tmy - 30, 6, 30 + temp * 0.3);

                            // Temperature display
                            viz.screenText(Math.round(temp) + '\u00b0C', tmx + 25, tmy - 20, viz.colors.orange, 12, 'left', 'middle');

                            // Vapor line when hot enough
                            if (temp > 78) {
                                ctx.strokeStyle = viz.colors.white + '55';
                                ctx.lineWidth = 3;
                                ctx.setLineDash([5,5]);
                                ctx.beginPath();
                                ctx.moveTo(flx + 80, fly - flr - 60);
                                ctx.lineTo(flx + 200, fly - flr - 60);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                viz.screenText('Ethanol vapor', flx + 140, fly - flr - 75, viz.colors.white, 10, 'center', 'middle');
                            }

                            // Condenser
                            var cx = flx + 200, cy = fly - flr - 60, clen = 180;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(cx, cy);
                            ctx.lineTo(cx + clen * 0.7, cy + clen * 0.4);
                            ctx.stroke();
                            // Outer jacket
                            ctx.strokeStyle = viz.colors.teal + 'aa';
                            ctx.lineWidth = 8;
                            ctx.setLineDash([10, 5]);
                            ctx.beginPath();
                            ctx.moveTo(cx, cy);
                            ctx.lineTo(cx + clen * 0.7, cy + clen * 0.4);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.lineWidth = 2;

                            // Cooling water flow arrows
                            viz.screenText('Cooling water \u2193', cx + clen * 0.5, cy + clen * 0.25 - 14, viz.colors.teal, 9, 'center', 'top');

                            // Collection flask
                            var cflx = cx + clen * 0.7 + 30, cfly = cy + clen * 0.4 + 10;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cflx, cfly + 30, 35, 0, Math.PI*2);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(cflx - 8, cfly + 30 - 35);
                            ctx.lineTo(cflx - 8, cfly - 5);
                            ctx.lineTo(cflx + 8, cfly - 5);
                            ctx.lineTo(cflx + 8, cfly + 30 - 35);
                            ctx.stroke();

                            if (distillateLevel > 0) {
                                ctx.save();
                                ctx.beginPath();
                                ctx.arc(cflx, cfly + 30, 33, 0, Math.PI*2);
                                ctx.clip();
                                ctx.fillStyle = viz.colors.orange + '88';
                                ctx.fillRect(cflx - 33, cfly + 30 - 30 * distillateLevel + 10, 66, 30 * distillateLevel);
                                ctx.restore();
                                viz.screenText('Distillate', cflx, cfly + 70, viz.colors.orange, 10, 'center', 'top');
                            }

                            viz.screenText('Temp: ' + Math.round(temp) + '\u00b0C | Ethanol bp: 78.4\u00b0C | Water bp: 100\u00b0C', W/2, H - 16, temp > 78 ? viz.colors.green : viz.colors.text, 11, 'center', 'bottom');

                            t++;
                            animId = requestAnimationFrame(draw);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-extraction',
                    title: 'Extraction with Separating Funnel',
                    description: 'Click Shake to mix layers, then Separate to watch the layers form.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var state = 'initial'; // initial, shaking, separating, done
                        var shakeT = 0;
                        var sepProgress = 0;
                        var animId = null;

                        var shakeBtn = VizEngine.createButton('Shake', function() {
                            if (state === 'initial' || state === 'done') {
                                state = 'shaking';
                                shakeT = 0;
                                function shakeAnim() {
                                    shakeT++;
                                    drawScene();
                                    if (shakeT < 80) {
                                        animId = requestAnimationFrame(shakeAnim);
                                    } else {
                                        state = 'mixed';
                                        drawScene();
                                    }
                                }
                                requestAnimationFrame(shakeAnim);
                            }
                        });
                        controls.appendChild(shakeBtn);

                        var sepBtn = VizEngine.createButton('Separate Layers', function() {
                            if (state === 'mixed') {
                                state = 'separating';
                                sepProgress = 0;
                                function sepAnim() {
                                    sepProgress += 0.02;
                                    drawScene();
                                    if (sepProgress < 1) {
                                        animId = requestAnimationFrame(sepAnim);
                                    } else {
                                        sepProgress = 1;
                                        state = 'done';
                                        drawScene();
                                    }
                                }
                                requestAnimationFrame(sepAnim);
                            }
                        });
                        controls.appendChild(sepBtn);

                        var resetBtn2 = VizEngine.createButton('Reset', function() {
                            if (animId) cancelAnimationFrame(animId);
                            state = 'initial';
                            shakeT = 0;
                            sepProgress = 0;
                            drawScene();
                        });
                        controls.appendChild(resetBtn2);

                        function drawScene() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var W = viz.width, H = viz.height;
 viz.screenText('Liquid-Liquid Extraction', W/2, 14, viz.colors.white, 13,'center','top');

                            // Separating funnel shape
                            var fx = W/2, fy = 50;
                            var ftop = 80, fbottom = 260;

                            // Funnel shake offset
                            var shakeOff = 0;
                            if (state === 'shaking') {
                                shakeOff = Math.sin(shakeT * 0.5) * 15;
                            }

                            ctx.save();
                            ctx.translate(shakeOff, 0);

                            // Stopper
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillRect(fx - 12, fy - 20, 24, 20);

                            // Funnel body (trapezoid top, then cylinder, then cone)
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(fx - ftop/2, fy);
                            ctx.lineTo(fx - 30, fy + 80);
                            ctx.lineTo(fx - 30, fy + 140);
                            ctx.quadraticCurveTo(fx - 25, fy + 200, fx - 5, fy + fbottom);
                            ctx.lineTo(fx - 5, fy + fbottom + 30);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(fx + ftop/2, fy);
                            ctx.lineTo(fx + 30, fy + 80);
                            ctx.lineTo(fx + 30, fy + 140);
                            ctx.quadraticCurveTo(fx + 25, fy + 200, fx + 5, fy + fbottom);
                            ctx.lineTo(fx + 5, fy + fbottom + 30);
                            ctx.stroke();
                            // Top rim
                            ctx.beginPath();
                            ctx.moveTo(fx - ftop/2 - 5, fy);
                            ctx.lineTo(fx + ftop/2 + 5, fy);
                            ctx.stroke();
                            // Stopcock
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillRect(fx - 8, fy + fbottom + 5, 16, 12);

                            // Liquid layers
                            if (state === 'initial') {
                                // Bottom layer: CCl4 (orange-red, denser)
                                ctx.fillStyle = viz.colors.orange + '88';
                                ctx.fillRect(fx - 29, fy + 120, 58, 100);
                                // Top layer: water (blue)
                                ctx.fillStyle = viz.colors.blue + '55';
                                ctx.fillRect(fx - 29, fy + 20, 58, 100);
                                viz.screenText('Aqueous layer', fx + 50, fy + 60, viz.colors.blue, 10, 'left', 'middle');
                                viz.screenText('(bromine water)', fx + 50, fy + 75, viz.colors.blue, 9, 'left', 'middle');
                                viz.screenText('CCl\u2084 layer', fx + 50, fy + 160, viz.colors.orange, 10, 'left', 'middle');
                            } else if (state === 'shaking' || state === 'mixed') {
                                // Turbulent mixing
                                for (var i = 0; i < 12; i++) {
                                    var blobX = fx - 25 + (i % 4) * 16 + Math.sin(i + shakeT * 0.3) * 5;
                                    var blobY = fy + 30 + Math.floor(i / 4) * 60 + Math.cos(i * 0.7 + shakeT * 0.2) * 10;
                                    var isOrange = (i % 2 === 0) || state === 'mixed';
                                    ctx.fillStyle = isOrange ? viz.colors.orange + '77' : viz.colors.blue + '55';
                                    ctx.beginPath();
                                    ctx.arc(blobX, blobY, 12, 0, Math.PI*2);
                                    ctx.fill();
                                }
                                viz.screenText(state === 'shaking' ? 'Shaking... (Br\u2082 transferring)' : 'Mixed — click Separate Layers', fx, H - 30, viz.colors.yellow, 11, 'center', 'middle');
                            } else if (state === 'separating' || state === 'done') {
                                var sep = sepProgress;
                                // Layers reform
                                // Bottom CCl4 (orange, now Br2-rich)
                                var ccl4Top = fy + 120 + (1 - sep) * 100;
                                ctx.fillStyle = viz.colors.orange + 'cc';
                                ctx.fillRect(fx - 29, ccl4Top, 58, 100 * sep + (1 - sep) * 30);
                                // Top water layer (lighter now, Br2 extracted)
                                ctx.fillStyle = viz.colors.blue + (sep > 0.5 ? '33' : '66');
                                ctx.fillRect(fx - 29, fy + 20, 58, 80);

                                if (state === 'done') {
                                    viz.screenText('CCl\u2084 layer: orange-red (Br\u2082-rich)', fx + 50, fy + 170, viz.colors.orange, 10, 'left', 'middle');
                                    viz.screenText('Aqueous layer: nearly colorless', fx + 50, fy + 50, viz.colors.teal, 10, 'left', 'middle');
                                    viz.screenText('Extraction successful!', fx, H - 30, viz.colors.green, 12, 'center', 'middle');
                                }
                            }

                            ctx.restore();

                            // Stand
                            ctx.strokeStyle = viz.colors.text;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(fx - 60, fy + 100);
                            ctx.lineTo(fx - 45, fy + 100);
                            ctx.moveTo(fx + 60, fy + 100);
                            ctx.lineTo(fx + 45, fy + 100);
                            ctx.stroke();

                            // State description
                            var stateDescs = {
                                'initial': 'Two immiscible layers: aqueous bromine water (top) and CCl\u2084 (bottom)',
                                'mixed': 'Layers thoroughly mixed — Br\u2082 partitioning into CCl\u2084',
                                'separating': 'Layers separating by density...',
                                'done': 'Complete! Drain the lower CCl\u2084 layer from the stopcock.'
                            };
                            if (stateDescs[state]) {
                                viz.screenText(stateDescs[state], W/2, H - 14, viz.colors.text, 10, 'center', 'bottom');
                            }
                        }

                        drawScene();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
 question:'What is the purpose of the boiling chips added to the distillation flask?',
                    hint: 'Consider what happens to superheated liquid without nucleation sites.',
                    solution: 'Boiling chips (or broken porcelain pieces) provide nucleation sites that allow smooth, continuous bubble formation during boiling. Without them, the liquid can superheat (go above its boiling point without boiling) and then suddenly release all its vapor at once in a violent "bump" that can shatter glassware and cause spills.'
                },
                {
                    question: 'In distillation, where exactly should the thermometer bulb be positioned, and what does it measure?',
                    hint: 'The thermometer is not for measuring the liquid temperature.',
                    solution: 'The thermometer bulb must be placed at the side arm opening of the distillation flask (at the exit point for vapor), not submerged in the liquid. It measures the temperature of the vapor as it exits. The correct fraction is collected when the thermometer reads the known boiling point of the target compound.'
                },
                {
 question:'A solution of iodine in water needs to be concentrated. Would you use ethanol or carbon tetrachloride (CCl\u2084) as an extractant? Justify your choice.',
                    hint: 'Think about miscibility with water and relative solubility of I\u2082.',
                    solution: 'CCl\u2084 is the better extractant. Ethanol is miscible with water, so it cannot form two separate layers — mixing ethanol with aqueous iodine would give a single solution and extraction cannot occur. CCl\u2084 is immiscible with water and dissolves iodine much better than water does, so the iodine transfers to the CCl\u2084 layer, which can then be separated.'
                }
            ]
        },
        {
            id: 'ch00-sec05',
            title: 'Separation Methods Compared',
 content:`<h2>Comparing Separation Methods</h2>
                <p>Choosing the right separation technique depends on the physical properties of the substances involved. The four core methods are related to different physical properties that allow the components to be separated.</p>
                <div class="env-block definition">
                    <div class="env-title">The Four Core Methods</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; font-size:0.9em;">
                            <tr style="background:#1a1a40;">
 <th style="padding:8px;">Method </th>
 <th style="padding:8px;">Principle </th>
                                <th style="padding:8px;">Applicable When...</th>
                                <th style="padding:8px;">Example</th>
                            </tr>
                            <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;"><strong>Filtration</strong></td>
                                <td style="padding:8px;">Particle size difference</td>
                                <td style="padding:8px;">Solid is insoluble in the liquid</td>
                                <td style="padding:8px;">Sand from salt water</td>
                            </tr>
                            <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;"><strong>Evaporation</strong></td>
                                <td style="padding:8px;">Solvent is volatile, solute is not</td>
                                <td style="padding:8px;">Recovering dissolved solid</td>
                                <td style="padding:8px;">NaCl from saltwater</td>
                            </tr>
                            <tr style="border-bottom:1px solid #2a2a50;">
 <td style="padding:8px;"><strong>Distillation</strong></td>
                                <td style="padding:8px;">Different boiling points</td>
                                <td style="padding:8px;">Miscible liquids with different bp</td>
                                <td style="padding:8px;">Ethanol from water</td>
                            </tr>
                            <tr>
 <td style="padding:8px;"><strong>Extraction</strong></td>
                                <td style="padding:8px;">Different solubility in two solvents</td>
                                <td style="padding:8px;">Immiscible solvents; compound prefers one</td>
                                <td style="padding:8px;">Br\u2082 from water using CCl\u2084</td>
                            </tr>
                        </table>
                    </div>
                </div>
 <h3>Decision Framework</h3>
                <p>When given a separation problem, ask:</p>
                <ol>
                    <li>Is one component a solid and the other a liquid? → Is the solid soluble?
                        <ul>
                            <li>Insoluble solid → <strong>Filtration</strong></li>
                            <li>Soluble solid → <strong>Evaporation/Crystallization</strong></li>
                        </ul>
                    </li>
                    <li>Are both components liquids?
                        <ul>
                            <li>Miscible liquids with different boiling points → <strong>Distillation</strong></li>
 <li>Immiscible liquids → <strong>Separating funnel</strong> </li>
                        </ul>
                    </li>
                    <li>Is the target compound dissolved in the wrong solvent? → Can a better, immiscible solvent be found? → <strong>Extraction</strong></li>
                </ol>
                <div class="env-block intuition">
                    <div class="env-title">Real-World Application: Purifying Drinking Water</div>
                    <div class="env-body">
                        <p>Drinking water purification uses several separation steps in sequence:</p>
                        <ol>
 <li><strong>Sedimentation</strong> : Large particles settle by gravity.</li>
 <li><strong>Filtration</strong> : Fine sand filtration removes remaining solids.</li>
 <li><strong>Adsorption</strong> : Activated carbon removes dissolved organic impurities and odors.</li>
 <li><strong>Disinfection</strong> : Chlorination or UV treatment kills microorganisms.</li>
                        </ol>
                        <p>Each step removes different types of impurities using different principles.</p>
                    </div>
                </div>
                <div class="viz-placeholder" data-viz="viz-methods-comparison"></div>
 <h3>Common Lab Equipment Review</h3>
                <p>Knowing which equipment to use is as important as knowing which technique to apply:</p>
                <ul>
 <li><strong>Beaker </strong>: General container for mixing; not for precise measurement.</li>
 <li><strong>Erlenmeyer flask / Conical flask </strong>: Reduces evaporation; swirling without spilling; used in titrations.</li>
 <li><strong>Burette </strong>: Precise volume delivery, accurate to ±0.01 mL.</li>
 <li><strong>Volumetric flask </strong>: Prepares exact concentration solutions; marked at one specific volume.</li>
 <li><strong>Separating funnel </strong>: Extraction and layer separation.</li>
 <li><strong>Condenser </strong>: Converts vapor back to liquid in distillation.</li>
 <li><strong>Crucible </strong>: High-temperature reactions; ignition of substances.</li>
                </ul>`,
            visualizations: [{
                id: 'viz-methods-comparison',
                title: 'Four Separation Methods — Side by Side',
                description: 'Particle-level visualization of all four separation methods. Click each method to see a detailed view.',
                setup: function(body, controls) {
                    var viz = new VizEngine(body, {width: 700, height: 420});
                    var selected = 0;
                    var t = 0;
                    var animId = null;

                    var methods = [
 {name:'Filtration', ch:'', color:'#58a6ff'},
 {name:'Evaporation', ch:'', color:'#f0883e'},
 {name:'Distillation', ch:'', color:'#3fb9a0'},
 {name:'Extraction', ch:'', color:'#bc8cff'}
                    ];

                    methods.forEach(function(m, i) {
                        var btn2 = VizEngine.createButton(m.name, function() {
                            selected = i;
                        });
                        controls.appendChild(btn2);
                    });

                    function draw() {
                        viz.clear();
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var m = methods[selected];

                        viz.screenText(m.ch ? m.name + ' (' + m.ch + ')' : m.name, W/2, 20, m.color, 16, 'center', 'top');

                        if (selected === 0) {
                            // Filtration: particle animation
                            viz.screenText('Mixture of large (insoluble) and small (ions) particles', W/2, 50, viz.colors.text, 11, 'center', 'top');

                            // Filter paper line
                            var fpy = 220;
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(100, fpy);
                            ctx.lineTo(W - 100, fpy);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('Filter paper', W - 90, fpy, viz.colors.text, 10, 'left', 'middle');

                            // Large particles (sand) above filter paper
                            var sandPositions = [
                                [180, 100], [260, 130], [340, 90], [420, 120], [500, 105],
                                [200, 160], [300, 170], [440, 155]
                            ];
                            sandPositions.forEach(function(pos) {
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.beginPath();
                                ctx.arc(pos[0], pos[1] + Math.sin(t * 0.05 + pos[0]) * 3, 10, 0, Math.PI*2);
                                ctx.fill();
                            });
                            viz.screenText('Large particles (insoluble solid) — cannot pass', W/2, 195, viz.colors.yellow, 10, 'center', 'middle');

                            // Small ions below filter paper (passing through)
                            var ionPositions = [
                                [160, 260], [230, 290], [310, 265], [390, 300], [460, 270], [540, 285]
                            ];
                            ionPositions.forEach(function(pos) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.beginPath();
                                ctx.arc(pos[0], pos[1] + Math.sin(t * 0.07 + pos[0]) * 4, 5, 0, Math.PI*2);
                                ctx.fill();
                            });
                            viz.screenText('Small ions/molecules pass through \u2192 filtrate', W/2, 340, viz.colors.teal, 10, 'center', 'middle');

                        } else if (selected === 1) {
                            // Evaporation
                            viz.screenText('Heat drives solvent away, solid remains', W/2, 50, viz.colors.text, 11, 'center', 'top');

                            // Evaporating dish
                            var ex = W/2, ey = 260;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(ex, ey, 120, 30, 0, 0, Math.PI);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(ex - 120, ey);
                            ctx.lineTo(ex + 120, ey);
                            ctx.stroke();

                            // Liquid
                            ctx.fillStyle = viz.colors.blue + '44';
                            ctx.beginPath();
                            ctx.ellipse(ex, ey, 115, 20, 0, 0, Math.PI);
                            ctx.fill();

                            // Salt ions in liquid
                            for (var s = 0; s < 10; s++) {
                                ctx.fillStyle = s % 2 === 0 ? viz.colors.green : viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(ex - 90 + s * 20, ey - 8, 5, 0, Math.PI*2);
                                ctx.fill();
                            }

                            // Rising water vapor molecules
                            for (var v = 0; v < 8; v++) {
                                var vx = ex - 80 + v * 23;
                                var vy = ey - 30 - ((t * 1.5 + v * 40) % 140);
                                var alpha = Math.max(0, 1 - (ey - 30 - vy) / 140);
                                ctx.fillStyle = viz.colors.blue + Math.round(alpha * 0xff).toString(16).padStart(2,'0');
                                ctx.beginPath();
                                ctx.arc(vx, vy, 4, 0, Math.PI*2);
                                ctx.fill();
                            }
                            viz.screenText('Water molecules evaporate (vapor \u2191)', W/2, 90, viz.colors.blue, 10, 'center', 'top');
                            viz.screenText('Ions remain \u2014 NaCl crystals form', W/2, H - 40, viz.colors.green, 11, 'center', 'middle');

                            // Flame
                            ctx.fillStyle = viz.colors.orange + '99';
                            ctx.beginPath();
                            ctx.moveTo(ex - 30, ey + 30);
                            ctx.quadraticCurveTo(ex, ey + 10, ex + 30, ey + 30);
                            ctx.fill();

                        } else if (selected === 2) {
                            // Distillation: showing two molecules with different bp
                            viz.screenText('Components have different boiling points', W/2, 50, viz.colors.text, 11, 'center', 'top');

                            // Molecule A (low bp, ethanol)
                            var lbpY = 180;
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Ethanol (bp 78.4\u00b0C) \u2014 more volatile:', 80, lbpY - 40);
                            for (var e2 = 0; e2 < 8; e2++) {
                                var speed = 2.5;
                                var ex2 = 80 + e2 * 70 + Math.cos(t * speed * 0.1 + e2) * 25;
                                var ey2 = lbpY + Math.sin(t * speed * 0.08 + e2 * 0.7) * 20;
                                ctx.fillStyle = viz.colors.teal;
                                ctx.beginPath();
                                ctx.arc(ex2, ey2, 8, 0, Math.PI*2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '8px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('C\u2082H\u2085OH', ex2, ey2);
                            }

                            // Molecule B (high bp, water)
                            var hbpY = 310;
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Water (bp 100\u00b0C) \u2014 less volatile:', 80, hbpY - 40);
                            for (var w2 = 0; w2 < 10; w2++) {
                                var wx2 = 85 + w2 * 56 + Math.cos(t * 0.05 + w2) * 8;
                                var wy2 = hbpY + Math.sin(t * 0.04 + w2 * 0.5) * 8;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(wx2, wy2, 8, 0, Math.PI*2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '8px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('H\u2082O', wx2, wy2);
                            }

                            viz.screenText('Ethanol escapes into vapor phase first \u2192 collected separately', W/2, H - 20, viz.colors.orange, 11, 'center', 'bottom');

                        } else {
                            // Extraction
                            viz.screenText('Target compound prefers the extractant solvent', W/2, 50, viz.colors.text, 11, 'center', 'top');

                            var midY = 240;
                            // Water layer (top)
                            ctx.fillStyle = viz.colors.blue + '44';
                            ctx.fillRect(150, 80, 400, midY - 80);
 viz.screenText('Aqueous layer', W/2, 95, viz.colors.blue, 11,'center','top');

                            // CCl4 layer (bottom)
                            ctx.fillStyle = viz.colors.orange + '44';
                            ctx.fillRect(150, midY, 400, 130);
 viz.screenText('CCl\u2084 layer', W/2, midY + 60, viz.colors.orange, 11,'center','middle');

                            // Interface
                            ctx.strokeStyle = viz.colors.white + '55';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([5,5]);
                            ctx.beginPath();
                            ctx.moveTo(150, midY);
                            ctx.lineTo(550, midY);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Br2 molecules migrating
                            for (var br = 0; br < 10; br++) {
                                var frac = (t * 0.005 + br * 0.1) % 1;
                                var brX = 180 + br * 38;
                                var brY;
                                if (frac < 0.5) {
                                    // In water layer
                                    brY = 90 + 120 * (frac / 0.5);
                                } else {
                                    // In CCl4 layer
                                    brY = midY + 10 + 80 * ((frac - 0.5) / 0.5);
                                }
                                ctx.fillStyle = br < 7 ? viz.colors.orange : viz.colors.orange + '44';
                                ctx.beginPath();
                                ctx.arc(brX, brY, 7, 0, Math.PI*2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '7px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('Br\u2082', brX, brY);
                            }

                            viz.screenText('Br\u2082 migrates from water \u2192 CCl\u2084 (partition coefficient >> 1)', W/2, H - 20, viz.colors.orange, 11, 'center', 'bottom');
                        }

                        t++;
                        animId = requestAnimationFrame(draw);
                    }

                    draw();
                    return viz;
                }
            }],
            exercises: [
                {
                    question: 'A student has a mixture of copper sulfate (CuSO\u2084, soluble blue solid) and sand (SiO\u2082, insoluble). Describe a complete procedure to obtain pure CuSO\u2084 crystals from this mixture.',
                    hint: 'You will need more than one separation step.',
                    solution: 'Step 1: Add water to the mixture and stir — CuSO\u2084 dissolves (blue solution) while sand does not. Step 2: Filter the mixture to remove the sand residue; collect the blue filtrate. Step 3: Heat the filtrate to evaporate the water until the solution is nearly saturated, then allow it to cool — CuSO\u2084\u00b75H\u2082O crystals precipitate. Step 4: Filter again to collect the CuSO\u2084 crystals and allow to dry. Techniques used: dissolution, filtration (twice), and cooling crystallization.'
                },
                {
                    question: 'Explain why distillation cannot produce 100% pure ethanol from an ethanol-water mixture.',
 hint:'Look up the concept of an azeotrope .',
 solution:'Ethanol and water form a minimum-boiling azeotrope at about 95.6% ethanol (by mass) and 78.1\u00b0C. At this composition, both ethanol and water have exactly the same vapor composition as the liquid, so they evaporate together and cannot be separated further by simple distillation. The distillate approaches 95.6% ethanol but cannot exceed it. To obtain absolute ethanol (100%), a chemical desiccant like CaO (quicklime) must be added to react with the residual water, then the ethanol is distilled off.'
                },
                {
                    question: 'A chemist needs to separate: (A) a mixture of ethanol and water; (B) a mixture of salt and sand in water; (C) iodine dissolved in water. State the most suitable separation technique for each and the key physical property it exploits.',
                    hint: 'Use the decision framework: solid/liquid? miscible liquids? immiscible solvents?',
 solution:'(A) Ethanol/water (miscible liquids with different boiling points): Use distillation . Exploits difference in boiling point (78.4\u00b0C vs 100\u00b0C). (B) Salt and sand in water: Use filtration first to remove insoluble sand, then evaporation to recover NaCl from the filtrate. Exploits particle size (filtration) and solvent volatility (evaporation). (C) Iodine in water: Use extraction with an appropriate organic solvent like CCl\u2084 or hexane that is immiscible with water and dissolves iodine much better. Exploits the partition coefficient of I\u2082 between two immiscible solvents.'
                },
                {
 question:'Why must a volumetric flask never be heated or used to mix solutions with vigorous stirring?',
                    hint: 'Consider what the flask is designed to measure and what heat would do to it.',
                    solution: 'A volumetric flask is calibrated to contain an exact volume only at a specific temperature (usually 20\u00b0C). Heating the flask causes the glass to expand, changing its volume and making the calibration mark inaccurate — solutions prepared in a heated flask will have incorrect concentration. The flask is also designed for one specific volume only, so it is not suitable for mixing reactions that generate heat or require stirring (use a beaker for mixing, then transfer).'
                }
            ]
        }
    ]
});
