window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch04',
  number: 4,
  title: 'Atomic Structure',
  subtitle: 'From Nucleus to Electron Cloud',
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1: Atomic Composition
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch04-sec01',
      title: 'Atomic Composition',
      content: `
<h2>原子的构成 · Atomic Composition</h2>

<p>Every atom consists of a tiny, dense <strong>nucleus</strong> surrounded by rapidly moving <strong>electrons</strong>.</p>

<div class="info-box">
  <h3>Subatomic Particles</h3>
  <table class="data-table">
    <thead><tr><th>Particle</th><th>Symbol</th><th>Charge</th><th>Mass (u)</th><th>Location</th></tr></thead>
    <tbody>
      <tr><td>Proton</td><td>p⁺</td><td>+1</td><td>1.0073</td><td>Nucleus</td></tr>
      <tr><td>Neutron</td><td>n⁰</td><td>0</td><td>1.0087</td><td>Nucleus</td></tr>
      <tr><td>Electron</td><td>e⁻</td><td>−1</td><td>0.000549</td><td>Electron cloud</td></tr>
    </tbody>
  </table>
</div>

<h3>Key Quantities</h3>

<p><strong>Atomic Number (Z)</strong> — the number of protons in the nucleus. This uniquely identifies the element.</p>

<div class="formula-box">\\(Z = \\text{number of protons}\\)</div>

<p><strong>Mass Number (A)</strong> — the total count of protons and neutrons (nucleons) in the nucleus.</p>

<div class="formula-box">\\(A = Z + N\\) &nbsp; where \\(N\\) = number of neutrons</div>

<p>Neutral atoms have equal numbers of protons and electrons:</p>
<div class="formula-box">\\(Z = \\text{protons} = \\text{electrons (neutral atom)}\\)</div>

<h3>Nuclide Notation</h3>
<p>An atom is written as:</p>
<div class="formula-box">\\(^{A}_{Z}\\text{X}\\)</div>
<p>For example, carbon-12 is written \\(^{12}_{6}\\text{C}\\), meaning 6 protons, 6 neutrons, and (when neutral) 6 electrons.</p>

<div class="example-box">
  <h4>Example: Sodium</h4>
  <p>\\(^{23}_{11}\\text{Na}\\): atomic number Z = 11 (protons), mass number A = 23, so neutrons N = 23 − 11 = 12, electrons = 11.</p>
</div>

<div class="viz-container" id="viz-atom-structure"></div>

<h3>Ion Formation</h3>
<p>When atoms gain or lose electrons they become <strong>ions</strong>:</p>
<ul>
  <li><strong>Cation (positive ion)</strong>: loses electrons, e.g. Na → Na⁺ loses 1 e⁻</li>
  <li><strong>Anion (negative ion)</strong>: gains electrons, e.g. Cl → Cl⁻ gains 1 e⁻</li>
</ul>
<p>The number of protons never changes in a chemical reaction — only electrons are transferred.</p>
      `,
      visualizations: [
        {
          id: 'viz-atom-structure',
          title: 'Atomic Structure Explorer',
          setup(container) {
            const v = new VizEngine(container, { width: 600, height: 360 });

            const elements = [
              { sym: 'H',  Z: 1,  A: 1,  color: '#58a6ff' },
              { sym: 'He', Z: 2,  A: 4,  color: '#3fb9a0' },
              { sym: 'Li', Z: 3,  A: 7,  color: '#f0883e' },
              { sym: 'C',  Z: 6,  A: 12, color: '#bc8cff' },
              { sym: 'N',  Z: 7,  A: 14, color: '#3fb950' },
              { sym: 'O',  Z: 8,  A: 16, color: '#f85149' },
              { sym: 'Na', Z: 11, A: 23, color: '#d29922' },
              { sym: 'Mg', Z: 12, A: 24, color: '#f778ba' },
              { sym: 'Al', Z: 13, A: 27, color: '#58a6ff' },
              { sym: 'Cl', Z: 17, A: 35, color: '#3fb950' },
              { sym: 'Ca', Z: 20, A: 40, color: '#f0883e' },
            ];

            let idx = 0;

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;justify-content:center';

            elements.forEach((el, i) => {
              const b = document.createElement('button');
              b.textContent = el.sym;
              b.style.cssText = 'padding:4px 10px;border:1px solid #4a4a7a;border-radius:4px;background:#1a1a40;color:#f0f6fc;cursor:pointer;font-size:13px';
              b.onclick = () => { idx = i; draw(); };
              btnRow.appendChild(b);
            });
            container.appendChild(btnRow);

            function draw() {
              const el = elements[idx];
              const N = el.A - el.Z;
              v.clear();

              // Title
              v.screenText(`${el.sym}  (Z=${el.Z}, A=${el.A}, N=${N})`, v.width / 2, 24, v.colors.white, 15);

              // Nucleus
              const nx = v.width / 2, ny = v.height / 2;
              const ctx = v.ctx;
              ctx.save();
              // Glow
              const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, 30);
              grad.addColorStop(0, el.color + 'cc');
              grad.addColorStop(1, el.color + '00');
              ctx.fillStyle = grad;
              ctx.beginPath(); ctx.arc(nx, ny, 40, 0, Math.PI * 2); ctx.fill();
              // Nucleus circle
              ctx.fillStyle = el.color + '55';
              ctx.strokeStyle = el.color;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(nx, ny, 22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
              // Symbol inside nucleus
              ctx.fillStyle = '#f0f6fc';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(el.sym, nx, ny);
              ctx.restore();

              // Proton/neutron counts in nucleus label
              v.screenText(`${el.Z}p + ${N}n`, nx, ny + 38, v.colors.text, 12);

              // Electron shells
              const shellCapacity = [2, 8, 8, 18];
              let remaining = el.Z;
              const radii = [65, 110, 155, 200];

              for (let s = 0; s < shellCapacity.length && remaining > 0; s++) {
                const cap = shellCapacity[s];
                const count = Math.min(remaining, cap);
                remaining -= count;
                const r = radii[s];
                const shellColors = [v.colors.blue, v.colors.teal, v.colors.orange, v.colors.purple];
                // Shell orbit
                ctx.save();
                ctx.strokeStyle = shellColors[s] + '55';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.beginPath(); ctx.arc(nx, ny, r, 0, Math.PI * 2); ctx.stroke();
                ctx.setLineDash([]);
                // Shell label (K, L, M, N)
                const shellName = ['K', 'L', 'M', 'N'][s];
                ctx.fillStyle = shellColors[s] + '99';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                ctx.fillText(shellName + ' (' + count + ')', nx + r + 4, ny - 10);
                // Electrons
                ctx.fillStyle = shellColors[s];
                for (let e = 0; e < count; e++) {
                  const angle = (e / count) * Math.PI * 2 - Math.PI / 2;
                  const ex = nx + r * Math.cos(angle);
                  const ey = ny + r * Math.sin(angle);
                  ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fill();
                  // Electron label
                  ctx.fillStyle = '#f0f6fc88';
                  ctx.font = '9px -apple-system,sans-serif';
                  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText('e⁻', ex, ey);
                  ctx.fillStyle = shellColors[s];
                }
                ctx.restore();
              }

              // Bottom summary
              v.screenText(`Electrons: ${el.Z}  |  Protons: ${el.Z}  |  Neutrons: ${N}`, v.width / 2, v.height - 14, v.colors.text, 12);
            }

            draw();
            return v;
          }
        }
      ],
      exercises: [
        {
          id: 'ch04-s1-q1',
          type: 'mc',
          question: 'An atom has atomic number Z = 8 and mass number A = 16. How many neutrons does it have?',
          options: ['6', '7', '8', '16'],
          answer: 2,
          explanation: 'Neutrons N = A − Z = 16 − 8 = 8.'
        },
        {
          id: 'ch04-s1-q2',
          type: 'mc',
          question: 'Which subatomic particle determines the identity (element type) of an atom?',
          options: ['Neutron', 'Electron', 'Proton', 'Nucleon'],
          answer: 2,
          explanation: 'The proton count (atomic number Z) uniquely identifies every element.'
        },
        {
          id: 'ch04-s1-q3',
          type: 'mc',
          question: 'A sodium ion Na⁺ has Z = 11. How many electrons does Na⁺ have?',
          options: ['11', '12', '10', '9'],
          answer: 2,
          explanation: 'Na loses 1 electron to form Na⁺, so electrons = 11 − 1 = 10.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2: Electron Configuration (Shells)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch04-sec02',
      title: 'Electron Shell Configuration',
      content: `
<h2>核外电子排布 · Electron Shell Configuration</h2>

<p>Electrons in atoms are arranged in concentric <strong>shells</strong>, labeled K, L, M, N … (or n = 1, 2, 3, 4 …) in order of increasing distance from the nucleus.</p>

<h3>Maximum Electrons Per Shell</h3>
<p>Each shell can hold at most \\(2n^2\\) electrons:</p>

<div class="formula-box">\\(\\text{Max electrons in shell } n = 2n^2\\)</div>

<table class="data-table">
  <thead><tr><th>Shell</th><th>n</th><th>Max electrons (2n²)</th></tr></thead>
  <tbody>
    <tr><td>K</td><td>1</td><td>2</td></tr>
    <tr><td>L</td><td>2</td><td>8</td></tr>
    <tr><td>M</td><td>3</td><td>18</td></tr>
    <tr><td>N</td><td>4</td><td>32</td></tr>
  </tbody>
</table>

<div class="info-box">
  <h4>Important Rules for Main-Group Elements (first 20 elements)</h4>
  <ul>
    <li>Electrons fill from the innermost shell outward.</li>
    <li>The outermost shell never holds more than <strong>8 electrons</strong> (octet rule in the valence shell).</li>
    <li>The second-to-last shell never holds more than <strong>18 electrons</strong>.</li>
  </ul>
</div>

<h3>Examples — First 20 Elements</h3>
<table class="data-table">
  <thead><tr><th>Element</th><th>Z</th><th>K</th><th>L</th><th>M</th><th>N</th></tr></thead>
  <tbody>
    <tr><td>H</td><td>1</td><td>1</td><td></td><td></td><td></td></tr>
    <tr><td>He</td><td>2</td><td>2</td><td></td><td></td><td></td></tr>
    <tr><td>Li</td><td>3</td><td>2</td><td>1</td><td></td><td></td></tr>
    <tr><td>Ne</td><td>10</td><td>2</td><td>8</td><td></td><td></td></tr>
    <tr><td>Na</td><td>11</td><td>2</td><td>8</td><td>1</td><td></td></tr>
    <tr><td>Ar</td><td>18</td><td>2</td><td>8</td><td>8</td><td></td></tr>
    <tr><td>K</td><td>19</td><td>2</td><td>8</td><td>8</td><td>1</td></tr>
    <tr><td>Ca</td><td>20</td><td>2</td><td>8</td><td>8</td><td>2</td></tr>
  </tbody>
</table>

<h3>Valence Electrons</h3>
<p>The electrons in the <strong>outermost shell</strong> are called <em>valence electrons</em>. They control an element's chemical behavior.</p>
<ul>
  <li>Noble gases (He, Ne, Ar, Kr) have full valence shells → very stable, unreactive.</li>
  <li>Alkali metals (Li, Na, K) have 1 valence electron → easily lost, forming +1 cations.</li>
  <li>Halogens (F, Cl, Br) have 7 valence electrons → easily gain 1 electron, forming −1 anions.</li>
</ul>

<div class="viz-container" id="viz-shell-filling"></div>
      `,
      visualizations: [
        {
          id: 'viz-shell-filling',
          title: 'Electron Shell Filling — Elements 1–20',
          setup(container) {
            const v = new VizEngine(container, { width: 620, height: 380 });

            const elData = [
              { sym:'H',  Z:1  }, { sym:'He', Z:2  }, { sym:'Li', Z:3  }, { sym:'Be', Z:4  },
              { sym:'B',  Z:5  }, { sym:'C',  Z:6  }, { sym:'N',  Z:7  }, { sym:'O',  Z:8  },
              { sym:'F',  Z:9  }, { sym:'Ne', Z:10 }, { sym:'Na', Z:11 }, { sym:'Mg', Z:12 },
              { sym:'Al', Z:13 }, { sym:'Si', Z:14 }, { sym:'P',  Z:15 }, { sym:'S',  Z:16 },
              { sym:'Cl', Z:17 }, { sym:'Ar', Z:18 }, { sym:'K',  Z:19 }, { sym:'Ca', Z:20 }
            ];

            const shellCap = [2, 8, 8, 2];
            const shellColors = [v.colors.blue, v.colors.teal, v.colors.orange, v.colors.purple];
            const shellRadii = [55, 100, 148, 190];
            const shellNames = ['K', 'L', 'M', 'N'];

            let currentZ = 1;
            let animating = false;
            let frame = 0;

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:8px;flex-wrap:wrap';
            const playBtn = document.createElement('button');
            playBtn.textContent = 'Play Animation';
            playBtn.style.cssText = 'padding:6px 14px;background:#1a1a40;border:1px solid #4a4a7a;color:#f0f6fc;border-radius:4px;cursor:pointer';

            const sl = VizEngine.createSlider(container, 'Element Z: ', 1, 20, 1, 1, (val) => {
              currentZ = Math.round(val);
              animating = false;
              drawStatic(currentZ);
            });
            controls.appendChild(playBtn);
            container.appendChild(controls);

            function getShells(Z) {
              const shells = [];
              let rem = Z;
              for (let s = 0; s < shellCap.length && rem > 0; s++) {
                const c = Math.min(rem, shellCap[s]);
                shells.push(c);
                rem -= c;
              }
              return shells;
            }

            function drawStatic(Z) {
              v.clear();
              const el = elData[Z - 1];
              const shells = getShells(Z);
              const cx = v.width / 2, cy = v.height / 2;
              const ctx = v.ctx;

              // Title
              v.screenText(`${el.sym}  Z = ${Z}`, cx, 22, v.colors.white, 16);

              // Nucleus
              const nCol = v.colors.orange;
              ctx.save();
              ctx.fillStyle = nCol + '44';
              ctx.beginPath(); ctx.arc(cx, cy, 24, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = nCol;
              ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc';
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(el.sym, cx, cy);
              ctx.restore();

              // Shells
              shells.forEach((count, s) => {
                const r = shellRadii[s];
                // Dashed orbit
                ctx.save();
                ctx.strokeStyle = shellColors[s] + '44';
                ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
                ctx.setLineDash([]);
                // Shell label
                ctx.fillStyle = shellColors[s] + 'bb';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                ctx.fillText(`${shellNames[s]}: ${count}e`, cx + r + 5, cy - 12);
                // Electrons
                for (let e = 0; e < count; e++) {
                  const angle = (e / count) * Math.PI * 2 - Math.PI / 2;
                  const ex = cx + r * Math.cos(angle);
                  const ey = cy + r * Math.sin(angle);
                  ctx.fillStyle = shellColors[s];
                  ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fill();
                }
                ctx.restore();
              });

              // Config text at bottom
              const cfgStr = shells.map((c, i) => `${shellNames[i]}:${c}`).join('  ');
              v.screenText('Configuration: ' + cfgStr, cx, v.height - 14, v.colors.text, 12);
            }

            playBtn.onclick = () => {
              if (animating) { animating = false; playBtn.textContent = 'Play Animation'; return; }
              animating = true;
              playBtn.textContent = 'Pause';
              currentZ = 1;
              frame = 0;
              const interval = setInterval(() => {
                if (!animating || currentZ > 20) {
                  clearInterval(interval);
                  animating = false;
                  playBtn.textContent = 'Play Animation';
                  return;
                }
                drawStatic(currentZ);
                currentZ++;
              }, 600);
            };

            drawStatic(1);
            return v;
          }
        }
      ],
      exercises: [
        {
          id: 'ch04-s2-q1',
          type: 'mc',
          question: 'What is the maximum number of electrons that can occupy the M shell (n = 3)?',
          options: ['8', '16', '18', '32'],
          answer: 2,
          explanation: 'Maximum = 2n² = 2 × 3² = 18.'
        },
        {
          id: 'ch04-s2-q2',
          type: 'mc',
          question: 'Which electron configuration belongs to chlorine (Z = 17)?',
          options: ['2, 8, 7', '2, 8, 8', '2, 7, 8', '2, 6, 9'],
          answer: 0,
          explanation: 'Cl: K=2, L=8, M=7. Total = 17 = Z.'
        },
        {
          id: 'ch04-s2-q3',
          type: 'mc',
          question: 'How many valence electrons does an oxygen atom (Z = 8) have?',
          options: ['2', '4', '6', '8'],
          answer: 2,
          explanation: 'O has configuration 2, 6. The outermost (L) shell has 6 electrons.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3: Energy Levels and Orbitals
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch04-sec03',
      title: 'Energy Levels and Orbitals',
      content: `
<h2>能级与轨道 · Energy Levels and Orbitals</h2>

<p>Within each electron shell, electrons occupy <strong>subshells</strong> labeled s, p, d, f, and within subshells they occupy individual <strong>orbitals</strong>.</p>

<h3>Subshell Types</h3>
<table class="data-table">
  <thead><tr><th>Subshell</th><th>Orbitals</th><th>Max electrons</th><th>Shape</th></tr></thead>
  <tbody>
    <tr><td>s</td><td>1</td><td>2</td><td>Sphere</td></tr>
    <tr><td>p</td><td>3</td><td>6</td><td>Dumbbell (3 axes)</td></tr>
    <tr><td>d</td><td>5</td><td>10</td><td>Cloverleaf</td></tr>
    <tr><td>f</td><td>7</td><td>14</td><td>Complex</td></tr>
  </tbody>
</table>

<h3>The Aufbau Principle (构造原理)</h3>
<p>Electrons fill orbitals in order of <em>increasing energy</em>. For most atoms, the approximate filling order is:</p>
<div class="formula-box">1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → …</div>

<div class="info-box">
  <h4>Memory Tip — Diagonal Rule</h4>
  <p>Draw subshells in rows by shell number, then read diagonally:</p>
  <pre style="color:#3fb9a0;font-size:13px;">
  1s
  2s  2p
  3s  3p  3d
  4s  4p  4d  4f
  Read diagonals: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, ...
  </pre>
</div>

<h3>Pauli Exclusion Principle</h3>
<p>Each orbital holds at most <strong>2 electrons</strong>, and they must have opposite spins (↑↓). No two electrons in an atom can have the same set of four quantum numbers.</p>

<h3>Hund's Rule</h3>
<p>When filling orbitals of <em>equal energy</em> (same subshell), electrons occupy separate orbitals with <em>parallel spins</em> before pairing up.</p>

<div class="example-box">
  <h4>Example: Nitrogen (Z = 7) — 1s²2s²2p³</h4>
  <p>The three 2p electrons each occupy one of the three 2p orbitals with spin ↑ (parallel), not two in one orbital.</p>
  <p>Correct:&nbsp; <span style="color:#3fb9a0">↑</span>|<span style="color:#3fb9a0">↑</span>|<span style="color:#3fb9a0">↑</span>&nbsp; (three separate 2p orbitals)</p>
  <p>Wrong:&nbsp; <span style="color:#f85149">↑↓</span>|<span style="color:#f85149">↑</span>|&nbsp; (pairing before filling empty orbitals)</p>
</div>

<h3>Electron Configurations — Selected Elements</h3>
<table class="data-table">
  <thead><tr><th>Element</th><th>Z</th><th>Configuration</th></tr></thead>
  <tbody>
    <tr><td>H</td><td>1</td><td>1s¹</td></tr>
    <tr><td>He</td><td>2</td><td>1s²</td></tr>
    <tr><td>Li</td><td>3</td><td>1s²2s¹</td></tr>
    <tr><td>C</td><td>6</td><td>1s²2s²2p²</td></tr>
    <tr><td>N</td><td>7</td><td>1s²2s²2p³</td></tr>
    <tr><td>O</td><td>8</td><td>1s²2s²2p⁴</td></tr>
    <tr><td>Ne</td><td>10</td><td>1s²2s²2p⁶</td></tr>
    <tr><td>Na</td><td>11</td><td>[Ne]3s¹</td></tr>
    <tr><td>Ar</td><td>18</td><td>[Ne]3s²3p⁶</td></tr>
    <tr><td>K</td><td>19</td><td>[Ar]4s¹</td></tr>
    <tr><td>Ca</td><td>20</td><td>[Ar]4s²</td></tr>
    <tr><td>Fe</td><td>26</td><td>[Ar]3d⁶4s²</td></tr>
  </tbody>
</table>

<div class="viz-container" id="viz-orbital-energy"></div>
      `,
      visualizations: [
        {
          id: 'viz-orbital-energy',
          title: 'Electron Configuration Builder',
          setup(container) {
            const v = new VizEngine(container, { width: 640, height: 400 });
            const ctx = v.ctx;

            // Subshell data in filling order with pixel positions
            const subshells = [
              { label:'1s', cap:2,  col: v.colors.blue   },
              { label:'2s', cap:2,  col: v.colors.teal   },
              { label:'2p', cap:6,  col: v.colors.green  },
              { label:'3s', cap:2,  col: v.colors.orange },
              { label:'3p', cap:6,  col: v.colors.orange },
              { label:'4s', cap:2,  col: v.colors.purple },
              { label:'3d', cap:10, col: v.colors.yellow },
              { label:'4p', cap:6,  col: v.colors.purple },
            ];

            // Layout: y increases downward with energy levels
            // Arrange subshells on canvas with y reflecting energy
            const energyY = [340, 300, 290, 255, 240, 210, 205, 185];
            const startX = 80;
            const boxW = 28, boxH = 18, gap = 4;

            function getOrbitalCount(ss) { return ss.cap / 2; }

            function drawConfig(filledSubshells) {
              v.clear();
              v.screenText('Energy Level Diagram', v.width / 2, 20, v.colors.white, 15);
              v.screenText('Energy →', 14, v.height / 2, v.colors.axis, 12);

              // Energy axis arrow
              ctx.save();
              ctx.strokeStyle = v.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(30, v.height - 30); ctx.lineTo(30, 40); ctx.stroke();
              // Arrow head
              ctx.beginPath(); ctx.moveTo(30, 35); ctx.lineTo(25, 48); ctx.lineTo(35, 48); ctx.closePath();
              ctx.fillStyle = v.colors.axis; ctx.fill();
              ctx.restore();

              subshells.forEach((ss, i) => {
                const y = energyY[i];
                const orbCount = getOrbitalCount(ss);
                const totalW = orbCount * (boxW + gap) - gap;
                const x0 = startX;

                // Subshell label
                ctx.save();
                ctx.fillStyle = ss.col;
                ctx.font = '13px -apple-system,sans-serif';
                ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                ctx.fillText(ss.label, x0 - 8, y);
                ctx.restore();

                const filled = filledSubshells[i] || 0;
                for (let o = 0; o < orbCount; o++) {
                  const bx = x0 + o * (boxW + gap);
                  // Box
                  ctx.save();
                  ctx.strokeStyle = ss.col + '88';
                  ctx.lineWidth = 1.5;
                  ctx.strokeRect(bx, y - boxH / 2, boxW, boxH);
                  // Electrons
                  const e1 = o * 2 < filled;
                  const e2 = o * 2 + 1 < filled;
                  ctx.fillStyle = ss.col;
                  ctx.font = '12px -apple-system,sans-serif';
                  ctx.textBaseline = 'middle';
                  if (e1) { ctx.textAlign = 'left'; ctx.fillText('↑', bx + 3, y); }
                  if (e2) { ctx.textAlign = 'right'; ctx.fillText('↓', bx + boxW - 2, y); }
                  ctx.restore();
                }
              });
            }

            // Build config string from filled array
            function buildLabel(filledArr) {
              return subshells
                .map((ss, i) => filledArr[i] > 0 ? `${ss.label}${filledArr[i]}` : '')
                .filter(Boolean)
                .join(' ');
            }

            function fillForZ(Z) {
              let rem = Z;
              return subshells.map(ss => {
                const take = Math.min(rem, ss.cap);
                rem -= take;
                return take;
              });
            }

            let currentZ = 1;

            const sl = VizEngine.createSlider(container, 'Z = ', 1, 26, 1, 1, (val) => {
              currentZ = Math.round(val);
              const filled = fillForZ(currentZ);
              drawConfig(filled);
              const lbl = buildLabel(filled);
              confLabel.textContent = 'Config: ' + lbl;
            });

            const confLabel = document.createElement('div');
            confLabel.style.cssText = 'text-align:center;color:#3fb9a0;font-size:14px;margin-top:4px;font-family:monospace';
            container.appendChild(confLabel);

            const filled0 = fillForZ(1);
            drawConfig(filled0);
            confLabel.textContent = 'Config: 1s1';
            return v;
          }
        }
      ],
      exercises: [
        {
          id: 'ch04-s3-q1',
          type: 'mc',
          question: 'What is the electron configuration of carbon (Z = 6)?',
          options: ['1s²2s²2p⁴', '1s²2s²2p²', '1s²2p⁴', '2s²2p⁴'],
          answer: 1,
          explanation: 'C (Z=6): 1s²(2) + 2s²(2) + 2p²(2) = 6 electrons total. Configuration is 1s²2s²2p².'
        },
        {
          id: 'ch04-s3-q2',
          type: 'mc',
          question: 'According to Hund\'s rule, when filling three 2p orbitals with 3 electrons, the correct arrangement is:',
          options: ['↑↓ | _ | _', '↑↓ | ↑ | _', '↑ | ↑ | ↑', '↓ | ↓ | ↓'],
          answer: 2,
          explanation: 'Hund\'s rule: each orbital gets one electron with parallel spin before any orbital gets a second electron.'
        },
        {
          id: 'ch04-s3-q3',
          type: 'mc',
          question: 'Which subshell is filled immediately AFTER 3p in the Aufbau order?',
          options: ['3d', '4p', '4s', '3f'],
          answer: 2,
          explanation: 'The filling order is ... 3p → 4s → 3d → 4p. After 3p comes 4s.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4: Electron Clouds and Atomic Models
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch04-sec04',
      title: 'Electron Clouds and Atomic Models',
      content: `
<h2>电子云与原子模型 · Electron Clouds and Atomic Models</h2>

<h3>The History of Atomic Models</h3>

<div class="timeline">
  <div class="timeline-item">
    <span class="timeline-year">1803 — Dalton</span>
    <p><strong>Solid Sphere Model</strong>: atoms are tiny, indivisible solid spheres. Different elements have different mass spheres.</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-year">1897 — Thomson</span>
    <p><strong>Plum Pudding Model</strong>: electrons (discovered via cathode rays) are embedded in a diffuse positive "pudding." Atom is divisible!</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-year">1911 — Rutherford</span>
    <p><strong>Nuclear Model</strong>: the gold foil experiment showed most mass/positive charge is concentrated in a tiny nucleus; electrons orbit far away.</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-year">1913 — Bohr</span>
    <p><strong>Planetary Model</strong>: electrons travel in fixed circular orbits (shells) at specific energies. Each orbit has a definite radius and energy.</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-year">1926 — Quantum Model</span>
    <p><strong>Electron Cloud Model</strong>: electrons have no definite path — they exist as a probability density "cloud" (wave function ψ). Orbitals describe where electrons are <em>likely</em> to be found.</p>
  </div>
</div>

<h3>Electron Cloud (电子云)</h3>
<p>The electron cloud is a visual representation of the probability of finding an electron at different locations around the nucleus. Denser regions mean higher probability.</p>

<ul>
  <li><strong>1s orbital</strong>: spherically symmetric, highest probability near the nucleus, decreasing smoothly outward.</li>
  <li><strong>2s orbital</strong>: also spherical but with a spherical node (region of zero probability).</li>
  <li><strong>2p orbitals</strong>: dumbbell-shaped, oriented along x, y, or z axes.</li>
</ul>

<div class="formula-box">Probability density \\(\\propto |\\psi|^2\\)</div>

<p>The Heisenberg Uncertainty Principle states we cannot simultaneously know an electron's exact position and momentum. This is why we speak of probability clouds rather than definite orbits.</p>

<div class="formula-box">\\(\\Delta x \\cdot \\Delta p \\geq \\dfrac{\\hbar}{2}\\)</div>

<div class="viz-container" id="viz-electron-cloud"></div>
<div class="viz-container" id="viz-atomic-models"></div>
      `,
      visualizations: [
        {
          id: 'viz-electron-cloud',
          title: 'Electron Cloud Probability Density',
          setup(container) {
            const v = new VizEngine(container, { width: 620, height: 340 });
            const ctx = v.ctx;

            const orbitals = [
              {
                name: '1s',
                color: '#58a6ff',
                prob: (r) => Math.exp(-2 * r) * 4 * r * r
              },
              {
                name: '2s',
                color: '#3fb9a0',
                prob: (r) => { const x = r / 2; return Math.exp(-x) * (2 - x) * (2 - x) * r * r * 0.15; }
              },
              {
                name: '2p',
                color: '#f0883e',
                prob: (r) => { const x = r / 2; return Math.exp(-x) * x * x * r * r * 0.08; }
              }
            ];

            let selected = 0;

            function drawCloud() {
              v.clear();
              const orb = orbitals[selected];

              // Title
              v.screenText(`Electron Cloud: ${orb.name} orbital`, v.width / 2, 20, v.colors.white, 15);

              // Draw dot density representation on left half
              const cx = v.width / 4, cy = v.height / 2;
              const maxR = 110;

              // Generate dot density
              ctx.save();
              const numDots = 3000;
              for (let i = 0; i < numDots; i++) {
                const r = Math.random() * maxR;
                const angle = Math.random() * Math.PI * 2;
                const normalizedR = r / 20;
                const prob = orb.prob(normalizedR);
                const threshold = Math.random() * 0.4;
                if (prob > threshold) {
                  const px = cx + r * Math.cos(angle);
                  const py = cy + r * Math.sin(angle);
                  const alpha = Math.min(1, prob * 2);
                  ctx.fillStyle = orb.color + Math.round(alpha * 200).toString(16).padStart(2, '0');
                  ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI * 2); ctx.fill();
                }
              }
              // Nucleus dot
              ctx.fillStyle = '#f0883e';
              ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc';
              ctx.font = '10px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText('+', cx, cy);
              ctx.restore();

              // Label
              v.screenText('Dot density ∝ probability', cx, v.height - 18, v.colors.text, 11);

              // Draw radial probability curve on right half
              const px0 = v.width / 2 + 40, py0 = v.height - 50;
              const graphW = v.width / 2 - 60, graphH = v.height - 90;

              ctx.save();
              ctx.strokeStyle = v.colors.axis; ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(px0, py0 - graphH); ctx.lineTo(px0, py0); ctx.lineTo(px0 + graphW, py0); ctx.stroke();
              ctx.fillStyle = v.colors.text; ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText('r / a₀', px0 + graphW / 2, py0 + 5);
              ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
              ctx.save(); ctx.translate(px0 - 8, py0 - graphH / 2); ctx.rotate(-Math.PI / 2);
              ctx.fillText('4πr²|ψ|²', 0, 0); ctx.restore();

              // Find max for normalization
              let maxP = 0;
              for (let ri = 0; ri <= 8; ri += 0.05) maxP = Math.max(maxP, orb.prob(ri));

              ctx.strokeStyle = orb.color; ctx.lineWidth = 2;
              ctx.beginPath();
              let started = false;
              for (let ri = 0; ri <= 8; ri += 0.05) {
                const prob = orb.prob(ri);
                const sx = px0 + (ri / 8) * graphW;
                const sy = py0 - (prob / maxP) * graphH;
                if (!started) { ctx.moveTo(sx, sy); started = true; }
                else ctx.lineTo(sx, sy);
              }
              ctx.stroke();
              ctx.restore();

              v.screenText('Radial Probability', px0 + graphW / 2, 20, orb.color, 13);
            }

            // Orbital buttons
            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;margin-bottom:8px';
            orbitals.forEach((orb, i) => {
              const b = document.createElement('button');
              b.textContent = orb.name + ' orbital';
              b.style.cssText = `padding:5px 14px;border:1px solid ${orb.color};border-radius:4px;background:#1a1a40;color:${orb.color};cursor:pointer`;
              b.onclick = () => { selected = i; drawCloud(); };
              btnRow.appendChild(b);
            });
            container.appendChild(btnRow);

            drawCloud();
            return v;
          }
        },
        {
          id: 'viz-atomic-models',
          title: 'Evolution of Atomic Models',
          setup(container) {
            const v = new VizEngine(container, { width: 620, height: 300 });
            const ctx = v.ctx;

            const models = [
              {
                name: 'Dalton (1803)',
                subtitle: 'Solid Sphere',
                draw(cx, cy, v) {
                  ctx.save();
                  ctx.fillStyle = '#58a6ff88';
                  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI * 2); ctx.fill();
                  ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 2;
                  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI * 2); ctx.stroke();
                  ctx.fillStyle = '#f0f6fc'; ctx.font = '11px sans-serif';
                  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                  ctx.fillText('●', cx, cy);
                  ctx.restore();
                }
              },
              {
                name: 'Thomson (1897)',
                subtitle: 'Plum Pudding',
                draw(cx, cy, v) {
                  ctx.save();
                  ctx.fillStyle = '#f0883e55';
                  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI * 2); ctx.fill();
                  ctx.strokeStyle = '#f0883e'; ctx.lineWidth = 1.5;
                  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI * 2); ctx.stroke();
                  const ePos = [[0,-18],[14,12],[-14,12],[0,8],[-18,-5],[18,-5]];
                  ePos.forEach(([dx, dy]) => {
                    ctx.fillStyle = '#f85149';
                    ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 4, 0, Math.PI * 2); ctx.fill();
                  });
                  ctx.restore();
                }
              },
              {
                name: 'Rutherford (1911)',
                subtitle: 'Nuclear Model',
                draw(cx, cy, v) {
                  ctx.save();
                  ctx.strokeStyle = '#3fb9a055'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
                  ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.stroke();
                  ctx.setLineDash([]);
                  ctx.fillStyle = '#f0883e';
                  ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fill();
                  ctx.fillStyle = '#58a6ff';
                  [[30, 0], [-30, 0], [0, 30], [0, -30]].forEach(([dx, dy]) => {
                    ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 4, 0, Math.PI * 2); ctx.fill();
                  });
                  ctx.restore();
                }
              },
              {
                name: 'Bohr (1913)',
                subtitle: 'Planetary Model',
                draw(cx, cy, v) {
                  ctx.save();
                  [18, 30].forEach((r, i) => {
                    ctx.strokeStyle = ['#58a6ff66', '#3fb9a066'][i]; ctx.lineWidth = 1.5;
                    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
                  });
                  ctx.fillStyle = '#f0883e';
                  ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();
                  [[18, 0], [-18, 0], [30, 0], [0, -30]].forEach(([dx, dy]) => {
                    ctx.fillStyle = '#58a6ff';
                    ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 4, 0, Math.PI * 2); ctx.fill();
                  });
                  ctx.restore();
                }
              },
              {
                name: 'Quantum (1926)',
                subtitle: 'Electron Cloud',
                draw(cx, cy, v) {
                  ctx.save();
                  for (let i = 0; i < 500; i++) {
                    const r = Math.random() * 36;
                    const a = Math.random() * Math.PI * 2;
                    const prob = Math.exp(-r / 12);
                    if (Math.random() < prob) {
                      const alpha = Math.floor(prob * 200).toString(16).padStart(2, '0');
                      ctx.fillStyle = '#58a6ff' + alpha;
                      ctx.beginPath(); ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 1.5, 0, Math.PI * 2); ctx.fill();
                    }
                  }
                  ctx.fillStyle = '#f0883e';
                  ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
                  ctx.restore();
                }
              }
            ];

            let selectedModel = 0;

            function draw() {
              v.clear();
              v.screenText('Atomic Model Evolution', v.width / 2, 20, v.colors.white, 15);

              const slotW = v.width / 5;
              models.forEach((m, i) => {
                const cx = slotW * i + slotW / 2;
                const cy = v.height / 2 - 10;

                // Highlight selected
                if (i === selectedModel) {
                  ctx.save();
                  ctx.strokeStyle = v.colors.yellow + '66';
                  ctx.lineWidth = 2;
                  ctx.strokeRect(slotW * i + 4, 35, slotW - 8, v.height - 65);
                  ctx.restore();
                }

                m.draw(cx, cy, v);
                v.screenText(m.name, cx, v.height - 40, i === selectedModel ? v.colors.yellow : v.colors.text, 11);
                v.screenText(m.subtitle, cx, v.height - 24, v.colors.text, 10);
              });
            }

            v.canvas.addEventListener('click', (e) => {
              const r = v.canvas.getBoundingClientRect();
              const mx = (e.clientX - r.left) * (v.width / r.width);
              const slotW = v.width / 5;
              const idx = Math.floor(mx / slotW);
              if (idx >= 0 && idx < 5) { selectedModel = idx; draw(); }
            });

            draw();
            return v;
          }
        }
      ],
      exercises: [
        {
          id: 'ch04-s4-q1',
          type: 'mc',
          question: 'Which experiment led Rutherford to propose the nuclear model of the atom?',
          options: [
            'Cathode ray tube experiment',
            'Gold foil (alpha particle scattering) experiment',
            'Photoelectric effect experiment',
            'Oil drop experiment'
          ],
          answer: 1,
          explanation: 'Rutherford\'s gold foil experiment showed that most alpha particles passed straight through, but a few were deflected at large angles, indicating a tiny, dense positive nucleus.'
        },
        {
          id: 'ch04-s4-q2',
          type: 'mc',
          question: 'In the quantum mechanical model, an orbital represents:',
          options: [
            'A fixed circular path for the electron',
            'The exact location of an electron at a given time',
            'A region in space where an electron is likely to be found',
            'The speed of an electron around the nucleus'
          ],
          answer: 2,
          explanation: 'In quantum mechanics, an orbital (electron cloud) describes the probability distribution of finding an electron in a region of space.'
        },
        {
          id: 'ch04-s4-q3',
          type: 'mc',
          question: 'The "plum pudding" model of the atom was proposed by:',
          options: ['Dalton', 'Rutherford', 'Bohr', 'Thomson'],
          answer: 3,
          explanation: 'J.J. Thomson proposed the plum pudding model after discovering the electron in 1897.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5: Isotopes and Nuclides
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ch04-sec05',
      title: 'Isotopes and Nuclides',
      content: `
<h2>同位素与核素 · Isotopes and Nuclides</h2>

<h3>Definitions</h3>

<div class="info-box">
  <p><strong>Nuclide (核素)</strong>: a specific atomic species defined by both its atomic number Z and mass number A. Written as \\(^{A}_{Z}\\text{X}\\).</p>
  <p><strong>Isotopes (同位素)</strong>: nuclides of the <em>same element</em> (same Z) but different mass numbers (different number of neutrons). Isotopes of an element have <em>identical chemical properties</em> but slightly different physical properties.</p>
</div>

<h3>Hydrogen Isotopes — A Classic Example</h3>
<table class="data-table">
  <thead><tr><th>Isotope</th><th>Symbol</th><th>Protons</th><th>Neutrons</th><th>Name</th><th>Abundance</th></tr></thead>
  <tbody>
    <tr><td>¹H</td><td>\\(^{1}_{1}\\text{H}\\)</td><td>1</td><td>0</td><td>Protium</td><td>99.985%</td></tr>
    <tr><td>²H</td><td>\\(^{2}_{1}\\text{H}\\)</td><td>1</td><td>1</td><td>Deuterium (D)</td><td>0.015%</td></tr>
    <tr><td>³H</td><td>\\(^{3}_{1}\\text{H}\\)</td><td>1</td><td>2</td><td>Tritium (T)</td><td>trace</td></tr>
  </tbody>
</table>

<h3>Carbon Isotopes</h3>
<table class="data-table">
  <thead><tr><th>Isotope</th><th>Protons</th><th>Neutrons</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>¹²C</td><td>6</td><td>6</td><td>98.9% of natural carbon; defines atomic mass unit</td></tr>
    <tr><td>¹³C</td><td>6</td><td>7</td><td>1.1%; used in NMR spectroscopy</td></tr>
    <tr><td>¹⁴C</td><td>6</td><td>8</td><td>Radioactive; used in carbon dating (t½ ≈ 5730 yr)</td></tr>
  </tbody>
</table>

<h3>Relative Atomic Mass</h3>
<p>The <em>relative atomic mass</em> (原子量) of an element is the weighted average of all its naturally occurring isotopes:</p>
<div class="formula-box">\\(A_r = \\sum_i f_i \\cdot A_i\\)</div>
<p>where \\(f_i\\) is the fractional abundance and \\(A_i\\) is the mass number of isotope \\(i\\).</p>

<div class="example-box">
  <h4>Example: Chlorine</h4>
  <p>Cl has two isotopes: ³⁵Cl (75.77%) and ³⁷Cl (24.23%).</p>
  <p>\\(A_r(\\text{Cl}) = 0.7577 \\times 35 + 0.2423 \\times 37 = 26.52 + 8.97 = 35.45\\)</p>
  <p>This matches the value on the periodic table: 35.45 u.</p>
</div>

<h3>Applications of Isotopes</h3>
<ul>
  <li><strong>¹⁴C Carbon Dating</strong>: living organisms absorb ¹⁴C; after death it decays, allowing age determination.</li>
  <li><strong>²H (Deuterium)</strong>: heavy water (D₂O) used as neutron moderator in nuclear reactors.</li>
  <li><strong>⁶⁰Co</strong>: gamma-ray source for cancer radiotherapy.</li>
  <li><strong>¹³¹I</strong>: used in thyroid cancer treatment.</li>
  <li><strong>²³⁵U / ²³⁸U</strong>: uranium isotopes; ²³⁵U is fissile and used in nuclear fuel.</li>
</ul>

<div class="viz-container" id="viz-isotope-explorer"></div>
      `,
      visualizations: [
        {
          id: 'viz-isotope-explorer',
          title: 'Isotope Explorer',
          setup(container) {
            const v = new VizEngine(container, { width: 640, height: 360 });
            const ctx = v.ctx;

            const elements = [
              { sym: 'H',  Z: 1,  color: '#58a6ff',
                isotopes: [{A:1, name:'Protium', abund:'99.985%', stable:true},{A:2,name:'Deuterium',abund:'0.015%',stable:true},{A:3,name:'Tritium',abund:'trace',stable:false}] },
              { sym: 'C',  Z: 6,  color: '#bc8cff',
                isotopes: [{A:12,name:'Carbon-12',abund:'98.89%',stable:true},{A:13,name:'Carbon-13',abund:'1.11%',stable:true},{A:14,name:'Carbon-14',abund:'trace',stable:false}] },
              { sym: 'O',  Z: 8,  color: '#f85149',
                isotopes: [{A:16,name:'Oxygen-16',abund:'99.76%',stable:true},{A:17,name:'Oxygen-17',abund:'0.04%',stable:true},{A:18,name:'Oxygen-18',abund:'0.20%',stable:true}] },
              { sym: 'Cl', Z: 17, color: '#3fb950',
                isotopes: [{A:35,name:'Chlorine-35',abund:'75.77%',stable:true},{A:37,name:'Chlorine-37',abund:'24.23%',stable:true}] },
              { sym: 'U',  Z: 92, color: '#d29922',
                isotopes: [{A:234,name:'Uranium-234',abund:'0.005%',stable:false},{A:235,name:'Uranium-235',abund:'0.720%',stable:false},{A:238,name:'Uranium-238',abund:'99.275%',stable:false}] },
            ];

            let selEl = 0;
            let selIso = 0;

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-bottom:8px';
            elements.forEach((el, i) => {
              const b = document.createElement('button');
              b.textContent = el.sym;
              b.style.cssText = `padding:4px 14px;border:1px solid ${el.color};border-radius:4px;background:#1a1a40;color:${el.color};cursor:pointer`;
              b.onclick = () => { selEl = i; selIso = 0; draw(); };
              btnRow.appendChild(b);
            });
            container.appendChild(btnRow);

            function draw() {
              v.clear();
              const el = elements[selEl];
              const iso = el.isotopes[selIso];
              const N = iso.A - el.Z;

              v.screenText(`Element: ${el.sym}  (Z = ${el.Z})`, v.width / 2, 20, el.color, 15);

              // Draw isotope cards
              const cardW = 100, cardH = 80, startX = 30, cardY = 50;
              el.isotopes.forEach((isoItem, i) => {
                const cx = startX + i * (cardW + 14);
                const isSelected = i === selIso;
                ctx.save();
                ctx.strokeStyle = isSelected ? el.color : el.color + '44';
                ctx.lineWidth = isSelected ? 2 : 1;
                ctx.fillStyle = isSelected ? el.color + '22' : '#1a1a4022';
                ctx.beginPath();
                ctx.roundRect(cx, cardY, cardW, cardH, 6);
                ctx.fill(); ctx.stroke();
                ctx.fillStyle = isSelected ? el.color : el.color + '88';
                ctx.font = 'bold 18px -apple-system,sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                ctx.fillText(`${isoItem.A}${el.sym}`, cx + cardW / 2, cardY + 10);
                ctx.font = '11px -apple-system,sans-serif';
                ctx.fillStyle = isoItem.stable ? '#3fb950' : '#f85149';
                ctx.fillText(isoItem.stable ? 'Stable' : 'Radioactive', cx + cardW / 2, cardY + 36);
                ctx.fillStyle = '#8b949e';
                ctx.fillText(isoItem.abund, cx + cardW / 2, cardY + 55);
                ctx.restore();
              });

              // Click handler for cards
              v.canvas.onclick = (e) => {
                const r = v.canvas.getBoundingClientRect();
                const mx = (e.clientX - r.left) * (v.width / r.width);
                const my = (e.clientY - r.top) * (v.height / r.height);
                el.isotopes.forEach((_, i) => {
                  const cx = startX + i * (cardW + 14);
                  if (mx >= cx && mx <= cx + cardW && my >= cardY && my <= cardY + cardH) {
                    selIso = i; draw();
                  }
                });
              };

              // Draw nucleus diagram for selected isotope
              const nx = v.width * 0.72, ny = v.height * 0.6;
              const nucR = 38;

              v.screenText(`${iso.name}`, nx, ny - nucR - 30, el.color, 13);
              v.screenText(`${el.Z} protons + ${N} neutrons`, nx, ny - nucR - 12, v.colors.text, 11);

              // Draw protons and neutrons as packed circles
              const allParticles = [];
              for (let p = 0; p < el.Z; p++) allParticles.push('p');
              for (let n = 0; n < N; n++) allParticles.push('n');

              const maxShow = Math.min(allParticles.length, 30);
              const pr = 7;
              const cols = Math.ceil(Math.sqrt(maxShow * 1.5));
              allParticles.slice(0, maxShow).forEach((type, i) => {
                const col = i % cols, row = Math.floor(i / cols);
                const totalCols = Math.min(cols, maxShow);
                const totalRows = Math.ceil(maxShow / cols);
                const ox = nx - (totalCols * (pr * 2 + 2)) / 2 + col * (pr * 2 + 2) + pr;
                const oy = ny - (totalRows * (pr * 2 + 2)) / 2 + row * (pr * 2 + 2) + pr;
                ctx.save();
                ctx.fillStyle = type === 'p' ? '#f0883e' : '#58a6ff';
                ctx.beginPath(); ctx.arc(ox, oy, pr, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#f0f6fccc';
                ctx.font = '7px -apple-system,sans-serif';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(type, ox, oy);
                ctx.restore();
              });
              if (allParticles.length > maxShow) {
                v.screenText(`(+${allParticles.length - maxShow} more)`, nx, ny + nucR + 12, v.colors.text, 10);
              }

              // Legend
              const lx = v.width - 110, ly = v.height - 60;
              ctx.save();
              ctx.fillStyle = '#f0883e'; ctx.beginPath(); ctx.arc(lx, ly, 6, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc'; ctx.font = '11px sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
              ctx.fillText(' Proton (p)', lx + 4, ly);
              ctx.fillStyle = '#58a6ff'; ctx.beginPath(); ctx.arc(lx, ly + 18, 6, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#f0f6fc'; ctx.fillText(' Neutron (n)', lx + 4, ly + 18);
              ctx.restore();

              // Weighted avg mass reminder
              const avgMass = el.isotopes.reduce((s, iso2) => {
                const frac = parseFloat(iso2.abund) / 100;
                return s + (isNaN(frac) ? 0 : frac * iso2.A);
              }, 0);
              if (avgMass > 0) {
                v.screenText(`Avg atomic mass ≈ ${avgMass.toFixed(2)} u`, v.width / 2, v.height - 14, v.colors.text, 11);
              }
            }

            draw();
            return v;
          }
        }
      ],
      exercises: [
        {
          id: 'ch04-s5-q1',
          type: 'mc',
          question: 'Isotopes of the same element differ in their:',
          options: [
            'Number of protons',
            'Number of electrons (when neutral)',
            'Number of neutrons',
            'Chemical properties'
          ],
          answer: 2,
          explanation: 'Isotopes have the same number of protons (and electrons in neutral atoms) but different numbers of neutrons, giving different mass numbers.'
        },
        {
          id: 'ch04-s5-q2',
          type: 'mc',
          question: 'Chlorine has two isotopes: ³⁵Cl (75.77%) and ³⁷Cl (24.23%). What is the approximate relative atomic mass of Cl?',
          options: ['35.00', '35.45', '36.00', '37.00'],
          answer: 1,
          explanation: 'Ar = 0.7577 × 35 + 0.2423 × 37 = 26.52 + 8.97 = 35.45 u.'
        },
        {
          id: 'ch04-s5-q3',
          type: 'mc',
          question: '¹⁴C (carbon-14) is used for:',
          options: [
            'Nuclear power generation',
            'Radiocarbon dating of ancient materials',
            'NMR spectroscopy',
            'Heavy water production'
          ],
          answer: 1,
          explanation: 'The radioactive decay of ¹⁴C (t½ ≈ 5730 years) is used to date organic remains up to ~50,000 years old.'
        },
        {
          id: 'ch04-s5-q4',
          type: 'mc',
          question: 'How many neutrons does ²H (deuterium) have?',
          options: ['0', '1', '2', '3'],
          answer: 1,
          explanation: '²H: A=2, Z=1, so N = A − Z = 2 − 1 = 1 neutron.'
        },
        {
          id: 'ch04-s5-q5',
          type: 'mc',
          question: 'Which statement about isotopes is CORRECT?',
          options: [
            'Isotopes have different chemical properties',
            'Isotopes have the same mass number',
            'Isotopes occupy the same position in the periodic table',
            'Isotopes have different numbers of protons'
          ],
          answer: 2,
          explanation: 'Isotopes of the same element occupy the same position in the periodic table because they have the same atomic number Z. Their chemical properties are virtually identical.'
        }
      ]
    }

  ]
});
