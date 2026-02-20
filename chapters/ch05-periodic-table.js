window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Periodic Table & Periodic Law',
    subtitle: 'Patterns in the Elements',
    sections: [

        {
            id: 'ch05-sec01',
            title: 'Structure of the Periodic Table',
            content: `
<h2>元素周期表的结构 (Structure of the Periodic Table)</h2>

<p>The periodic table arranges all known elements in order of increasing <strong>atomic number</strong> (proton number), revealing the periodic pattern of element properties.</p>

<div class="chem-highlight">
<strong>Two fundamental organizing principles:</strong>
<ul>
  <li><strong>Rows (Periods):</strong> Elements in the same row have the same number of <em>electron shells</em>. Atomic number increases left to right.</li>
  <li><strong>Columns (Groups):</strong> Elements in the same column have the same number of <em>outermost (valence) electrons</em> — hence similar chemical properties.</li>
</ul>
</div>

<h3>Periods</h3>
<table class="chem-table">
  <thead><tr><th>Period</th><th>Elements</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Period 1 (short)</td><td>2 elements</td><td>H, He</td></tr>
    <tr><td>Periods 2 & 3 (short)</td><td>8 elements each</td><td>Li–Ne, Na–Ar</td></tr>
    <tr><td>Periods 4 & 5 (long)</td><td>18 elements each</td><td>Include transition metals</td></tr>
    <tr><td>Periods 6 & 7 (very long)</td><td>32 elements each</td><td>Include lanthanides and actinides</td></tr>
  </tbody>
</table>

<h3>Groups</h3>
<ul>
  <li><strong>Main Groups (A groups):</strong> IA–VIIA, 7 groups. Valence electrons = group number.</li>
  <li><strong>Transition Groups (B groups):</strong> IIIB–VIIB, IB, IIB — d-block elements.</li>
  <li><strong>Group VIII:</strong> Columns 8, 9, 10 (Fe, Co, Ni and analogues).</li>
  <li><strong>Group 0 (Noble gases):</strong> Outermost shell full — chemically inert.</li>
</ul>

<h3>Metal / Nonmetal Boundary</h3>
<p>A diagonal staircase along B–Si–As–Te–At divides metals (left) from nonmetals (right). Elements along the boundary (Si, Ge, As, etc.) are <strong>metalloids (半导体)</strong> — crucial for modern electronics.</p>
            `,
            visualizations: [
                {
                    id: 'ch05-viz01',
                    title: 'Interactive Periodic Table (First 36 Elements)',
                    setup(container) {
                        var elements = [
                            {n:1,  sym:'H',  name:'Hydrogen',   period:1, group:1,  type:'nonmetal',   mass:1.008},
                            {n:2,  sym:'He', name:'Helium',     period:1, group:18, type:'noble',      mass:4.003},
                            {n:3,  sym:'Li', name:'Lithium',    period:2, group:1,  type:'alkali',     mass:6.941},
                            {n:4,  sym:'Be', name:'Beryllium',  period:2, group:2,  type:'alkaline',   mass:9.012},
                            {n:5,  sym:'B',  name:'Boron',      period:2, group:13, type:'metalloid',  mass:10.81},
                            {n:6,  sym:'C',  name:'Carbon',     period:2, group:14, type:'nonmetal',   mass:12.01},
                            {n:7,  sym:'N',  name:'Nitrogen',   period:2, group:15, type:'nonmetal',   mass:14.01},
                            {n:8,  sym:'O',  name:'Oxygen',     period:2, group:16, type:'nonmetal',   mass:16.00},
                            {n:9,  sym:'F',  name:'Fluorine',   period:2, group:17, type:'halogen',    mass:19.00},
                            {n:10, sym:'Ne', name:'Neon',       period:2, group:18, type:'noble',      mass:20.18},
                            {n:11, sym:'Na', name:'Sodium',     period:3, group:1,  type:'alkali',     mass:22.99},
                            {n:12, sym:'Mg', name:'Magnesium',  period:3, group:2,  type:'alkaline',   mass:24.31},
                            {n:13, sym:'Al', name:'Aluminum',   period:3, group:13, type:'metal',      mass:26.98},
                            {n:14, sym:'Si', name:'Silicon',    period:3, group:14, type:'metalloid',  mass:28.09},
                            {n:15, sym:'P',  name:'Phosphorus', period:3, group:15, type:'nonmetal',   mass:30.97},
                            {n:16, sym:'S',  name:'Sulfur',     period:3, group:16, type:'nonmetal',   mass:32.07},
                            {n:17, sym:'Cl', name:'Chlorine',   period:3, group:17, type:'halogen',    mass:35.45},
                            {n:18, sym:'Ar', name:'Argon',      period:3, group:18, type:'noble',      mass:39.95},
                            {n:19, sym:'K',  name:'Potassium',  period:4, group:1,  type:'alkali',     mass:39.10},
                            {n:20, sym:'Ca', name:'Calcium',    period:4, group:2,  type:'alkaline',   mass:40.08},
                            {n:21, sym:'Sc', name:'Scandium',   period:4, group:3,  type:'transition', mass:44.96},
                            {n:22, sym:'Ti', name:'Titanium',   period:4, group:4,  type:'transition', mass:47.87},
                            {n:23, sym:'V',  name:'Vanadium',   period:4, group:5,  type:'transition', mass:50.94},
                            {n:24, sym:'Cr', name:'Chromium',   period:4, group:6,  type:'transition', mass:52.00},
                            {n:25, sym:'Mn', name:'Manganese',  period:4, group:7,  type:'transition', mass:54.94},
                            {n:26, sym:'Fe', name:'Iron',       period:4, group:8,  type:'transition', mass:55.85},
                            {n:27, sym:'Co', name:'Cobalt',     period:4, group:9,  type:'transition', mass:58.93},
                            {n:28, sym:'Ni', name:'Nickel',     period:4, group:10, type:'transition', mass:58.69},
                            {n:29, sym:'Cu', name:'Copper',     period:4, group:11, type:'transition', mass:63.55},
                            {n:30, sym:'Zn', name:'Zinc',       period:4, group:12, type:'transition', mass:65.38},
                            {n:31, sym:'Ga', name:'Gallium',    period:4, group:13, type:'metal',      mass:69.72},
                            {n:32, sym:'Ge', name:'Germanium',  period:4, group:14, type:'metalloid',  mass:72.63},
                            {n:33, sym:'As', name:'Arsenic',    period:4, group:15, type:'metalloid',  mass:74.92},
                            {n:34, sym:'Se', name:'Selenium',   period:4, group:16, type:'nonmetal',   mass:78.97},
                            {n:35, sym:'Br', name:'Bromine',    period:4, group:17, type:'halogen',    mass:79.90},
                            {n:36, sym:'Kr', name:'Krypton',    period:4, group:18, type:'noble',      mass:83.80}
                        ];

                        var typeColors = {
                            alkali:'#f85149', alkaline:'#f0883e', transition:'#bc8cff',
                            metal:'#d29922', metalloid:'#3fb9a0', nonmetal:'#58a6ff',
                            halogen:'#f778ba', noble:'#8b949e'
                        };

                        var cellW = 46, cellH = 46, padX = 8, padY = 30;
                        var totalW = 18 * cellW + 2 * padX;
                        var totalH = 4 * cellH + 2 * padY + 60;

                        var canvas = document.createElement('canvas');
                        canvas.width = totalW;
                        canvas.height = totalH;
                        canvas.style.cssText = 'width:100%;max-width:' + totalW + 'px;cursor:pointer;display:block;';
                        container.appendChild(canvas);

                        var ctx = canvas.getContext('2d');
                        var hovered = null;

                        function draw() {
                            ctx.clearRect(0, 0, totalW, totalH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, totalW, totalH);

                            ctx.fillStyle = '#8b949e';
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Interactive Periodic Table — First 36 Elements', totalW / 2, 18);

                            elements.forEach(function(el) {
                                var col = el.group;
                                var row = el.period;
                                var x = padX + (col - 1) * cellW;
                                var y = padY + (row - 1) * cellH;
                                var isHov = hovered && hovered.n === el.n;
                                var color = typeColors[el.type] || '#aaa';

                                ctx.fillStyle = isHov ? color : color + '44';
                                ctx.beginPath();
                                ctx.roundRect(x + 1, y + 1, cellW - 2, cellH - 2, 4);
                                ctx.fill();
                                ctx.strokeStyle = isHov ? color : color + '99';
                                ctx.lineWidth = isHov ? 2 : 1;
                                ctx.stroke();

                                ctx.fillStyle = isHov ? '#fff' : '#c9d1d9';
                                ctx.font = 'bold ' + (isHov ? 14 : 12) + 'px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(el.sym, x + cellW / 2, y + cellH / 2 + 2);
                                ctx.fillStyle = isHov ? '#fff' : '#8b949e';
                                ctx.font = '8px -apple-system,sans-serif';
                                ctx.fillText(el.n, x + cellW / 2, y + 11);
                            });

                            var legY = padY + 4 * cellH + 12;
                            var types = ['alkali','alkaline','transition','metal','metalloid','nonmetal','halogen','noble'];
                            var labels = ['Alkali','Alkaline','Transition','Metal','Metalloid','Nonmetal','Halogen','Noble'];
                            var legW2 = totalW / types.length;
                            types.forEach(function(t, i) {
                                ctx.fillStyle = typeColors[t] + '88';
                                ctx.fillRect(i * legW2 + 2, legY, legW2 - 4, 14);
                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(labels[i], i * legW2 + legW2 / 2, legY + 10);
                            });

                            if (hovered) {
                                var infoY = legY + 22;
                                ctx.fillStyle = typeColors[hovered.type] + '22';
                                ctx.beginPath();
                                ctx.roundRect(padX, infoY, totalW - 2 * padX, 28, 6);
                                ctx.fill();
                                ctx.fillStyle = typeColors[hovered.type];
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(
                                    hovered.n + '  ' + hovered.sym + ' — ' + hovered.name +
                                    '  |  Mass: ' + hovered.mass + ' u  |  Period ' + hovered.period + ', Group ' + hovered.group,
                                    totalW / 2, infoY + 18
                                );
                            }
                        }

                        draw();

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var scale = canvas.width / rect.width;
                            var mx = (e.clientX - rect.left) * scale;
                            var my = (e.clientY - rect.top) * scale;
                            var found = null;
                            elements.forEach(function(el) {
                                var x = padX + (el.group - 1) * cellW;
                                var y = padY + (el.period - 1) * cellH;
                                if (mx >= x && mx <= x + cellW && my >= y && my <= y + cellH) found = el;
                            });
                            hovered = found;
                            draw();
                        });
                        canvas.addEventListener('mouseleave', function() { hovered = null; draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex01',
                    type: 'mcq',
                    question: 'Which of the following correctly describes elements in the same group (族) of the periodic table?',
                    options: [
                        'They have the same number of electron shells',
                        'They have the same number of valence (outer-shell) electrons',
                        'They have the same atomic mass',
                        'They all react violently with water'
                    ],
                    answer: 1,
                    explanation: 'Elements in the same group have the same number of valence electrons, giving them similar chemical properties. For example, all Group IA alkali metals have 1 valence electron.'
                },
                {
                    id: 'ch05-ex02',
                    type: 'mcq',
                    question: 'An element is in Period 3, Group VIIA. Which element is this?',
                    options: ['Fluorine (F)', 'Chlorine (Cl)', 'Sulfur (S)', 'Argon (Ar)'],
                    answer: 1,
                    explanation: 'Period 3 = 3 electron shells; Group VIIA = 7 valence electrons. This uniquely identifies Cl (Z=17). F is Period 2, S is Group VIA, Ar is Group 0.'
                },
                {
                    id: 'ch05-ex03',
                    type: 'mcq',
                    question: 'How many elements are in Period 4 of the periodic table?',
                    options: ['8', '10', '18', '32'],
                    answer: 2,
                    explanation: 'Period 4 is a long period with 18 elements (K through Kr, Z=19–36), including the first row of transition metals (Sc through Zn).'
                }
            ]
        },

        {
            id: 'ch05-sec02',
            title: 'Atomic Radius Trends',
            content: `
<h2>原子半径的变化规律 (Trends in Atomic Radius)</h2>

<p>Atomic radius is governed by two competing effects:</p>

<div class="chem-highlight">
<strong>Two controlling factors:</strong>
<ul>
  <li><strong>More electron shells (top → bottom):</strong> Electrons farther from nucleus → radius <span style="color:#f85149">increases</span></li>
  <li><strong>Higher nuclear charge (left → right):</strong> Stronger attraction → radius <span style="color:#58a6ff">decreases</span></li>
</ul>
</div>

<h3>Summary of Trends</h3>
<table class="chem-table">
  <thead><tr><th>Direction</th><th>Trend</th><th>Reason</th></tr></thead>
  <tbody>
    <tr><td>Same period (left → right)</td><td>Radius decreases</td><td>Z increases, shells constant, stronger attraction</td></tr>
    <tr><td>Same group (top → bottom)</td><td>Radius increases</td><td>More electron shells, greater shielding</td></tr>
  </tbody>
</table>

<h3>Typical Data (pm)</h3>
<table class="chem-table">
  <thead><tr><th>Element</th><th>Li</th><th>Be</th><th>B</th><th>C</th><th>N</th><th>O</th><th>F</th></tr></thead>
  <tbody>
    <tr><td>Radius (pm)</td><td>152</td><td>112</td><td>87</td><td>77</td><td>75</td><td>73</td><td>72</td></tr>
  </tbody>
</table>
<table class="chem-table" style="margin-top:8px;">
  <thead><tr><th>Element</th><th>Li</th><th>Na</th><th>K</th><th>Rb</th><th>Cs</th></tr></thead>
  <tbody>
    <tr><td>Radius (pm)</td><td>152</td><td>186</td><td>227</td><td>248</td><td>265</td></tr>
  </tbody>
</table>
            `,
            visualizations: [
                {
                    id: 'ch05-viz02',
                    title: 'Atomic Radius: Period & Group Comparison',
                    setup(container) {
                        var V = new VizEngine(container, {
                            width: 640, height: 320,
                            originX: 320, originY: 160,
                            scale: 40
                        });

                        var mode = 'period';

                        var periodData = [
                            {sym:'Li',r:152},{sym:'Be',r:112},{sym:'B',r:87},
                            {sym:'C',r:77},{sym:'N',r:75},{sym:'O',r:73},{sym:'F',r:72}
                        ];
                        var groupData = [
                            {sym:'Li',r:152},{sym:'Na',r:186},{sym:'K',r:227},
                            {sym:'Rb',r:248},{sym:'Cs',r:265}
                        ];
                        var colors = ['#58a6ff','#3fb9a0','#f0883e','#f85149','#bc8cff','#f778ba','#d29922'];

                        function draw() {
                            V.clear();
                            var ctx = V.ctx;
                            var W = V.width, H = V.height;
                            var data = mode === 'period' ? periodData : groupData;
                            var maxR = 0;
                            data.forEach(function(d){if(d.r>maxR)maxR=d.r;});
                            var n = data.length;
                            var spacing = (W - 80) / n;
                            var startX = 50 + spacing / 2;
                            var baseY = H - 50;

                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                mode === 'period' ? 'Period 2: Atomic Radius Decreases Left to Right' :
                                                    'Group IA: Atomic Radius Increases Top to Bottom',
                                W / 2, 20
                            );

                            data.forEach(function(el, i) {
                                var cx = startX + i * spacing;
                                var maxDispR = (H - 120) / 2 * 0.85;
                                var dispR = Math.max(8, (el.r / maxR) * maxDispR);
                                var cy = baseY - dispR;
                                var color = colors[i % colors.length];

                                ctx.fillStyle = color + '44';
                                ctx.beginPath();
                                ctx.arc(cx, cy, dispR, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = '#f0f6fc';
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(el.sym, cx, cy + 5);
                                ctx.fillStyle = color;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText(el.r + ' pm', cx, baseY + 16);
                            });

                            var arrowColor = mode === 'period' ? '#f85149' : '#3fb950';
                            ctx.fillStyle = arrowColor;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(mode === 'period' ? '→ radius decreases' : '↓ radius increases', W / 2, H - 12);
                        }

                        draw();

                        var btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:10px;';
                        ['Period 2 (left → right)', 'Group IA (top → bottom)'].forEach(function(label, i) {
                            var btn = document.createElement('button');
                            btn.textContent = label;
                            btn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;font-size:13px;';
                            btn.addEventListener('click', function() { mode = i === 0 ? 'period' : 'group'; draw(); });
                            btnRow.appendChild(btn);
                        });
                        container.appendChild(btnRow);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex04',
                    type: 'mcq',
                    question: 'Which element has the largest atomic radius?',
                    options: ['Na', 'Mg', 'Al', 'Si'],
                    answer: 0,
                    explanation: 'Na, Mg, Al, Si are all Period 3. Atomic radius decreases left to right as nuclear charge increases with the same number of shells. Na (leftmost) has the largest radius.'
                },
                {
                    id: 'ch05-ex05',
                    type: 'mcq',
                    question: 'Arrange F, Cl, Br, I in order of increasing atomic radius.',
                    options: ['F < Cl < Br < I', 'I < Br < Cl < F', 'F < Br < Cl < I', 'Cl < F < Br < I'],
                    answer: 0,
                    explanation: 'All are Group VIIA halogens. Going down the group, more electron shells → larger radius: F < Cl < Br < I.'
                }
            ]
        },

        {
            id: 'ch05-sec03',
            title: 'Ionization Energy & Metallic/Nonmetallic Character',
            content: `
<h2>Ionization Energy & Metallic/Nonmetallic Character</h2>

<p><strong>Metallic character (金属性):</strong> tendency to <em>lose</em> electrons. <strong>Nonmetallic character (非金属性):</strong> tendency to <em>gain</em> electrons. Both are quantified by ionization energy and electronegativity.</p>

<h3>First Ionization Energy (IE₁)</h3>

<div class="chem-highlight">
<strong>IE₁:</strong> minimum energy to remove one electron from a gaseous neutral atom.<br>
<strong>Trends:</strong>
<ul>
  <li>Same period (left → right): IE₁ generally <span style="color:#f85149">increases</span> (harder to lose e⁻)</li>
  <li>Same group (top → bottom): IE₁ <span style="color:#58a6ff">decreases</span> (larger radius, weaker attraction)</li>
  <li>Anomalies: Be > B (B's 2p is higher energy, easier to remove); N > O (N has stable half-filled 2p³)</li>
</ul>
</div>

<h3>Successive Ionization Energies — Confirming Valence</h3>
<p>A large jump in successive IEs occurs after all valence electrons are removed. For Na: IE₁ = 496, IE₂ = 4562 kJ/mol — the jump after 1st confirms valence = +1.</p>

<h3>Electronegativity (电负性)</h3>
<table class="chem-table">
  <thead><tr><th>Element</th><th>F</th><th>O</th><th>N</th><th>Cl</th><th>C</th><th>H</th><th>Na</th><th>K</th></tr></thead>
  <tbody>
    <tr><td>Electronegativity</td><td>4.0</td><td>3.5</td><td>3.0</td><td>3.2</td><td>2.5</td><td>2.1</td><td>0.9</td><td>0.8</td></tr>
  </tbody>
</table>
<p>Rule: EN increases left→right and bottom→top. Difference > 1.7 → ionic bond; < 1.7 → covalent bond.</p>
            `,
            visualizations: [
                {
                    id: 'ch05-viz03',
                    title: 'First Ionization Energy — Period 2 & Period 3',
                    setup(container) {
                        var V = new VizEngine(container, {
                            width: 640, height: 360,
                            originX: 60, originY: 310,
                            scale: 1
                        });

                        var period2 = [
                            {sym:'Li',ie:520},{sym:'Be',ie:900},{sym:'B',ie:801},
                            {sym:'C',ie:1086},{sym:'N',ie:1402},{sym:'O',ie:1314},
                            {sym:'F',ie:1681},{sym:'Ne',ie:2081}
                        ];
                        var period3 = [
                            {sym:'Na',ie:496},{sym:'Mg',ie:738},{sym:'Al',ie:578},
                            {sym:'Si',ie:786},{sym:'P',ie:1012},{sym:'S',ie:1000},
                            {sym:'Cl',ie:1251},{sym:'Ar',ie:1521}
                        ];

                        var showPeriod = 2;

                        function draw() {
                            V.clear();
                            var ctx = V.ctx;
                            var W = V.width, H = V.height;
                            var data = showPeriod === 2 ? period2 : period3;
                            var maxIE = 2200;
                            var ox = 65, oy = H - 45;
                            var aw = W - 100, ah = H - 80;
                            var n = data.length;
                            var barW = aw / n * 0.55;
                            var gap = aw / n;

                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('First Ionization Energy — Period ' + showPeriod, W / 2, 22);

                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(ox, 30);
                            ctx.lineTo(ox, oy);
                            ctx.lineTo(ox + aw, oy);
                            ctx.stroke();

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            [0,500,1000,1500,2000].forEach(function(v) {
                                var sy = oy - (v / maxIE) * ah;
                                ctx.fillText(v, ox - 5, sy + 4);
                                ctx.strokeStyle = '#1a1a40';
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(ox, sy);
                                ctx.lineTo(ox + aw, sy);
                                ctx.stroke();
                            });

                            data.forEach(function(el, i) {
                                var bx = ox + i * gap + gap / 2 - barW / 2;
                                var bh = (el.ie / maxIE) * ah;
                                var by = oy - bh;
                                var isAnom = (el.sym==='B'||el.sym==='O'||el.sym==='Al'||el.sym==='S');
                                var color = isAnom ? '#f0883e' : '#58a6ff';

                                var grad = ctx.createLinearGradient(bx, by, bx, oy);
                                grad.addColorStop(0, color);
                                grad.addColorStop(1, color + '55');
                                ctx.fillStyle = grad;
                                ctx.beginPath();
                                ctx.roundRect(bx, by, barW, bh, [4,4,0,0]);
                                ctx.fill();

                                ctx.fillStyle = '#f0f6fc';
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(el.sym, bx + barW / 2, oy + 16);
                                ctx.fillStyle = color;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillText(el.ie, bx + barW / 2, by - 4);
                                if (isAnom) {
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.fillText('anomaly', bx + barW / 2, by - 14);
                                }
                            });

                            ctx.fillStyle = '#f0883e';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Orange = anomaly (Be>B: half-filled s stable; N>O: half-filled p stable)', ox, H - 8);
                        }

                        draw();

                        var btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-top:10px;';
                        ['Period 2','Period 3'].forEach(function(label, i) {
                            var btn = document.createElement('button');
                            btn.textContent = label;
                            btn.style.cssText = 'padding:6px 18px;border-radius:6px;border:1px solid #444;background:#1a1a40;color:#f0f6fc;cursor:pointer;font-size:13px;';
                            btn.addEventListener('click', function() { showPeriod = i + 2; draw(); });
                            btnRow.appendChild(btn);
                        });
                        container.appendChild(btnRow);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex06',
                    type: 'mcq',
                    question: 'Why is the first ionization energy of N (1402 kJ/mol) greater than that of O (1314 kJ/mol)?',
                    options: [
                        'N has fewer protons than O',
                        'N has a half-filled 2p subshell — an especially stable configuration',
                        'O has a larger atomic radius than N',
                        'N is a metal while O is not'
                    ],
                    answer: 1,
                    explanation: 'N has a half-filled 2p³ configuration (one electron per orbital), stabilized by exchange energy. Removing an electron from this stable arrangement requires more energy than removing the 4th 2p electron from O (which has a paired 2p⁴ configuration).'
                },
                {
                    id: 'ch05-ex07',
                    type: 'mcq',
                    question: 'An element has successive ionization energies (kJ/mol): 738, 1451, 7733, 10540... What is its main valence?',
                    options: ['+1', '+2', '+3', '+4'],
                    answer: 1,
                    explanation: 'There is a large jump between IE₂ (1451) and IE₃ (7733), meaning the 3rd electron is in an inner shell. The element has 2 valence electrons, so its main valence is +2. (This is Mg.)'
                }
            ]
        },

        {
            id: 'ch05-sec04',
            title: 'Periodic Trends — Predicting Element Properties',
            content: `
<h2>Periodic Trends — Predicting Element Properties</h2>

<p>The periodic law states: <strong>properties of elements vary periodically with increasing atomic number.</strong></p>

<h3>Judging Metallic Character (金属性)</h3>
<ul>
  <li>More vigorous reaction with water or acid → stronger metallic character</li>
  <li>Stronger basicity of highest-oxide hydroxide → stronger metallic character</li>
  <li>Displacement: stronger metal displaces weaker from salt solution</li>
</ul>

<h3>Judging Nonmetallic Character (非金属性)</h3>
<ul>
  <li>Reacts with H₂ under milder conditions → stronger nonmetallic character</li>
  <li>More stable hydride → stronger nonmetallic character</li>
  <li>Stronger highest-oxide acid → stronger nonmetallic character (e.g., HClO₄ > H₂SO₄ > H₃PO₄)</li>
</ul>

<h3>Diagonal Relationship (对角线规则)</h3>
<table class="chem-table">
  <thead><tr><th>Diagonal Pair</th><th>Similarity</th></tr></thead>
  <tbody>
    <tr><td>Li / Mg</td><td>Both form non-deliquescent chlorides; similar oxide stability</td></tr>
    <tr><td>Be / Al</td><td>Both are amphoteric metals — react with both acids and bases</td></tr>
    <tr><td>B / Si</td><td>Both semiconductors; form similar oxoacids</td></tr>
  </tbody>
</table>
            `,
            visualizations: [
                {
                    id: 'ch05-viz04',
                    title: 'Electronegativity Heatmap',
                    setup(container) {
                        var V = new VizEngine(container, {
                            width: 640, height: 280,
                            originX: 0, originY: 0,
                            scale: 1
                        });

                        var ctx = V.ctx;
                        var W = V.width, H = V.height;

                        var data = [
                            [{sym:'Li',en:1.0},{sym:'Be',en:1.5},{sym:'B',en:2.0},{sym:'C',en:2.5},{sym:'N',en:3.0},{sym:'O',en:3.5},{sym:'F',en:4.0}],
                            [{sym:'Na',en:0.9},{sym:'Mg',en:1.2},{sym:'Al',en:1.5},{sym:'Si',en:1.8},{sym:'P',en:2.1},{sym:'S',en:2.5},{sym:'Cl',en:3.2}],
                            [{sym:'K',en:0.8},{sym:'Ca',en:1.0},{sym:'Ga',en:1.6},{sym:'Ge',en:1.8},{sym:'As',en:2.0},{sym:'Se',en:2.4},{sym:'Br',en:2.8}]
                        ];

                        V.clear();

                        ctx.fillStyle = '#f0f6fc';
                        ctx.font = 'bold 14px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('Electronegativity Heatmap (Pauling Scale)', W / 2, 20);

                        var cellW = 75, cellH = 58;
                        var startX = (W - 7 * cellW) / 2;
                        var startY = 32;

                        ['Period 2','Period 3','Period 4'].forEach(function(label, pi) {
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText(label, startX - 6, startY + pi * cellH + cellH / 2 + 4);
                        });

                        data.forEach(function(period, pi) {
                            period.forEach(function(el, gi) {
                                var x = startX + gi * cellW;
                                var y = startY + pi * cellH;
                                var t = (el.en - 0.5) / 3.5;
                                var r2 = Math.round((1-t)*30+t*248);
                                var g2 = Math.round((1-t)*100+t*80);
                                var b2 = Math.round((1-t)*200+t*50);

                                ctx.fillStyle = 'rgb('+r2+','+g2+','+b2+')';
                                ctx.fillRect(x+1, y+1, cellW-2, cellH-2);
                                ctx.strokeStyle = '#0d1117';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x+1, y+1, cellW-2, cellH-2);

                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(el.sym, x+cellW/2, y+cellH/2-2);
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText(el.en.toFixed(1), x+cellW/2, y+cellH/2+13);
                            });
                        });

                        var legX = startX, legY = startY + 3*cellH + 10;
                        var legW = 7*cellW;
                        var grad = ctx.createLinearGradient(legX, 0, legX+legW, 0);
                        grad.addColorStop(0, 'rgb(30,100,200)');
                        grad.addColorStop(1, 'rgb(248,80,50)');
                        ctx.fillStyle = grad;
                        ctx.fillRect(legX, legY, legW, 14);
                        ctx.fillStyle = '#c9d1d9';
                        ctx.font = '10px -apple-system,sans-serif';
                        ctx.textAlign = 'left';
                        ctx.fillText('Low EN (metallic)', legX, legY+26);
                        ctx.textAlign = 'right';
                        ctx.fillText('High EN (nonmetallic)', legX+legW, legY+26);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex08',
                    type: 'mcq',
                    question: 'Which correctly ranks K, Na, Li by metallic character from strongest to weakest?',
                    options: ['K > Na > Li', 'Li > Na > K', 'Na > K > Li', 'K > Li > Na'],
                    answer: 0,
                    explanation: 'All are Group IA alkali metals. Going down the group, atomic radius increases and IE₁ decreases, so metallic character increases: Li < Na < K, i.e. K > Na > Li.'
                },
                {
                    id: 'ch05-ex09',
                    type: 'mcq',
                    question: 'Which element has the highest electronegativity?',
                    options: ['O', 'N', 'F', 'Cl'],
                    answer: 2,
                    explanation: 'Fluorine (F) has the highest electronegativity of all elements (4.0 on Pauling scale). It sits in the top-right corner of the table — very small and very high nuclear charge.'
                }
            ]
        },

        {
            id: 'ch05-sec05',
            title: 'Element Identification & Periodic Law Applications',
            content: `
<h2>Element Identification & Applications of the Periodic Law</h2>

<p>With the periodic law, we can:</p>
<ol>
  <li><strong>Identify unknown elements</strong> from their position or atomic number.</li>
  <li><strong>Compare relative strengths</strong> — metallic/nonmetallic character, acid/base strength.</li>
  <li><strong>Predict properties</strong> of compounds by analogy with known elements.</li>
</ol>

<h3>Common Landmark Elements</h3>
<ul>
  <li>Lightest nonmetal: H (Z=1)</li>
  <li>Strongest nonmetal in Period 2: F; in Period 3: Cl</li>
  <li>Only liquid nonmetal at room temperature: Br₂</li>
  <li>Most compounds formed by: C (organic chemistry backbone)</li>
  <li>Most abundant metal in Earth's crust: Al; most abundant nonmetal: O</li>
</ul>

<h3>Comparing Acid/Base Strength</h3>
<table class="chem-table">
  <thead><tr><th>Comparison</th><th>Result</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>NaOH vs Mg(OH)₂</td><td>NaOH stronger base</td><td>Na metallic > Mg</td></tr>
    <tr><td>HClO₄ vs H₂SO₄</td><td>HClO₄ stronger acid</td><td>Cl nonmetallic > S</td></tr>
    <tr><td>HF, HCl, HBr, HI stability</td><td>HF > HCl > HBr > HI</td><td>F nonmetallic > Cl > Br > I</td></tr>
    <tr><td>HNO₃ vs H₃PO₄</td><td>HNO₃ stronger acid</td><td>N nonmetallic > P</td></tr>
  </tbody>
</table>
            `,
            visualizations: [
                {
                    id: 'ch05-viz05',
                    title: 'Element Quiz — Test Your Periodic Table Knowledge',
                    setup(container) {
                        var questions = [
                            {
                                q: 'An element is in Period 3, Group IIA. Identify it.',
                                opts: ['Na', 'Mg', 'Al', 'Ca'],
                                ans: 1,
                                exp: 'Period 3 = 3 electron shells; Group IIA = 2 valence electrons. This is Mg (Z=12).'
                            },
                            {
                                q: 'An element has electron configuration 2, 8, 7. What is it?',
                                opts: ['F', 'Cl', 'Br', 'O'],
                                ans: 1,
                                exp: '2+8+7 = 17 electrons, so Z=17 = Cl. Period 3 (3 shells), Group VIIA (7 valence electrons).'
                            },
                            {
                                q: 'Which pair demonstrates the diagonal relationship?',
                                opts: ['Na / K', 'Li / Mg', 'C / N', 'O / S'],
                                ans: 1,
                                exp: 'Li (Period 2, Group IA) and Mg (Period 3, Group IIA) are diagonally adjacent and share similar properties due to similar charge-to-radius ratio.'
                            },
                            {
                                q: 'Metallic character increases in which order?',
                                opts: ['Na < K < Rb', 'K < Na < Li', 'Li < K < Na', 'Rb < K < Na'],
                                ans: 0,
                                exp: 'Group IA: going down, atomic radius increases and IE₁ decreases → metallic character increases: Na < K < Rb.'
                            },
                            {
                                q: 'Which oxide produces the strongest acid when dissolved in water?',
                                opts: ['P4O10', 'SO3', 'Cl2O7', 'N2O5'],
                                ans: 2,
                                exp: 'Cl2O7 forms HClO4 (perchloric acid), the strongest common oxoacid. SO3 gives H2SO4, N2O5 gives HNO3, P4O10 gives H3PO4 — all weaker.'
                            }
                        ];

                        var current = 0;
                        var selected = -1;
                        var revealed = false;

                        function render() {
                            container.innerHTML = '';
                            var q = questions[current];

                            var header = document.createElement('div');
                            header.style.cssText = 'background:#1a1a40;border:1px solid #30363d;border-radius:8px;padding:14px 18px;margin-bottom:12px;';
                            header.innerHTML = '<span style="color:#8b949e;font-size:12px;">Question ' + (current+1) + ' / ' + questions.length + '</span><br><span style="color:#f0f6fc;font-size:14px;font-weight:bold;">' + q.q + '</span>';
                            container.appendChild(header);

                            var optGrid = document.createElement('div');
                            optGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;';
                            q.opts.forEach(function(opt, i) {
                                var btn = document.createElement('button');
                                var isCorrect = i === q.ans;
                                var isSelected = i === selected;
                                var bg = '#0d1117', border = '#30363d', color = '#c9d1d9';
                                if (revealed) {
                                    if (isCorrect) { bg='#0a3020'; border='#3fb950'; color='#3fb950'; }
                                    else if (isSelected && !isCorrect) { bg='#3a1020'; border='#f85149'; color='#f85149'; }
                                } else if (isSelected) {
                                    bg='#1a1a40'; border='#58a6ff'; color='#58a6ff';
                                }
                                btn.style.cssText = 'padding:10px 14px;background:'+bg+';border:2px solid '+border+';border-radius:6px;color:'+color+';cursor:pointer;text-align:left;font-size:13px;';
                                btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
                                btn.addEventListener('click', function() {
                                    if (revealed) return;
                                    selected = i;
                                    render();
                                });
                                optGrid.appendChild(btn);
                            });
                            container.appendChild(optGrid);

                            if (revealed) {
                                var expBox = document.createElement('div');
                                expBox.style.cssText = 'background:#0a1520;border:1px solid #1f6feb;border-radius:6px;padding:10px 14px;margin-bottom:10px;color:#58a6ff;font-size:13px;';
                                expBox.textContent = (selected === q.ans ? 'Correct! ' : 'Incorrect. ') + q.exp;
                                container.appendChild(expBox);
                            }

                            var btnRow = document.createElement('div');
                            btnRow.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;';
                            if (!revealed && selected >= 0) {
                                var revBtn = document.createElement('button');
                                revBtn.textContent = 'Check Answer';
                                revBtn.style.cssText = 'padding:8px 18px;background:#238636;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;';
                                revBtn.addEventListener('click', function() { revealed = true; render(); });
                                btnRow.appendChild(revBtn);
                            }
                            if (revealed) {
                                var navBtn = document.createElement('button');
                                navBtn.textContent = current < questions.length - 1 ? 'Next Question' : 'Restart Quiz';
                                navBtn.style.cssText = 'padding:8px 18px;background:#1a1a40;color:#f0f6fc;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:13px;';
                                navBtn.addEventListener('click', function() {
                                    if (current < questions.length - 1) { current++; } else { current = 0; }
                                    selected = -1; revealed = false; render();
                                });
                                btnRow.appendChild(navBtn);
                            }
                            container.appendChild(btnRow);
                        }

                        render();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex10',
                    type: 'mcq',
                    question: 'Element X is in Period 3, Group IVA. Which property does X have?',
                    options: [
                        'X reacts vigorously with cold water',
                        'X is a metalloid used as a semiconductor',
                        'X forms a strongly basic oxide',
                        'X has 3 electron shells and 3 valence electrons'
                    ],
                    answer: 1,
                    explanation: 'Period 3, Group IVA = Si (Z=14). Silicon is a metalloid semiconductor. It does not react vigorously with water, its oxide SiO₂ is acidic, and it has 4 (not 3) valence electrons.'
                },
                {
                    id: 'ch05-ex11',
                    type: 'mcq',
                    question: 'Which pair correctly identifies the strongest and weakest acid?',
                    options: [
                        'Strongest: HClO4; Weakest: H2SiO3',
                        'Strongest: HNO3; Weakest: H3PO4',
                        'Strongest: H2SO4; Weakest: HCl',
                        'Strongest: HF; Weakest: HI'
                    ],
                    answer: 0,
                    explanation: 'HClO4 (perchloric acid) is the strongest common oxoacid — Cl has very high nonmetallic character. H2SiO3 (silicic acid) is very weak — Si has low nonmetallic character. This matches the periodic trend perfectly.'
                }
            ]
        }

    ]
});
