window.CHAPTERS.push({
id: 'ch15',
number: 15,
title: 'Hydrocarbon Derivatives',
subtitle: 'Functional Groups and Their Reactions',
sections: [

// ─────────────────────────────────────────────
// SECTION 1: Halogenated Hydrocarbons (卤代烃)
// ─────────────────────────────────────────────
{
id: 'ch15-sec01',
title: 'Halogenated Hydrocarbons (卤代烃)',
content: `
<h2>Hydrocarbon Derivatives — Overview of Functional Groups</h2>

<p>A <strong>hydrocarbon derivative</strong> is formed when one or more hydrogen atoms in a hydrocarbon are replaced by other atoms or groups. These substituted groups are called <strong>functional groups</strong> — they determine the chemical behavior of the molecule.</p>

<table class="data-table">
  <thead>
    <tr><th>Class</th><th>Functional Group</th><th>Example</th><th>Key Feature</th></tr>
  </thead>
  <tbody>
    <tr><td>Halogenated HC (卤代烃)</td><td>–X (X = F, Cl, Br, I)</td><td>CH₃CH₂Cl</td><td>C–X bond polarized; undergoes substitution/elimination</td></tr>
    <tr><td>Alcohol (醇)</td><td>–OH</td><td>CH₃CH₂OH</td><td>Hydrogen bonding; oxidizable</td></tr>
    <tr><td>Aldehyde (醛)</td><td>–CHO</td><td>CH₃CHO</td><td>Easily oxidized; reducing agent</td></tr>
    <tr><td>Carboxylic Acid (羧酸)</td><td>–COOH</td><td>CH₃COOH</td><td>Acidic; forms esters</td></tr>
    <tr><td>Ester (酯)</td><td>–COO–</td><td>CH₃COOC₂H₅</td><td>Fragrant; formed by acid + alcohol</td></tr>
  </tbody>
</table>

<h2>Halogenated Hydrocarbons — Introducing the C–X Bond</h2>

<div class="env-definition">
<strong>Definition:</strong> A <strong>halogenated hydrocarbon (卤代烃)</strong> is an organic compound in which one or more hydrogen atoms of a hydrocarbon have been replaced by halogen atoms (F, Cl, Br, or I). The C–X bond is the key functional group.
</div>

<p>The most important halogenated hydrocarbon in the high-school curriculum is <strong>chloroethane (CH₃CH₂Cl)</strong>, but the same reactions apply to all members of this family.</p>

<h3>Naming and Structure</h3>
<p>Halogenated hydrocarbons are classified by the hydrocarbon backbone:</p>
<ul>
  <li><strong>Halogenoalkanes (卤代烷)</strong> — saturated backbone, e.g. CH₃Cl, CH₃CH₂Br</li>
  <li><strong>Halogenoalkenes (卤代烯)</strong> — unsaturated backbone, e.g. CH₂=CHCl (vinyl chloride)</li>
  <li><strong>Halogenoarenes (卤代芳烃)</strong> — aromatic backbone, e.g. C₆H₅Cl (chlorobenzene)</li>
</ul>

<div class="env-intuition">
<strong>Intuition:</strong> The electronegative halogen atom pulls electron density away from carbon, making the carbon atom electrophilically activated — it becomes susceptible to attack by nucleophiles.
</div>

<h3>Two Key Reactions</h3>

<h4>1. Nucleophilic Substitution (亲核取代, S_N)</h4>
<p>A nucleophile (Nu⁻) attacks the carbon bearing the halogen and displaces X⁻:</p>
<p style="text-align:center;">\\( \\text{R–X} + \\text{Nu}^- \\rightarrow \\text{R–Nu} + \\text{X}^- \\)</p>

<p><strong>Example — hydrolysis of chloroethane:</strong></p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CH}_2\\text{Cl} + \\text{NaOH}_{(aq)} \\xrightarrow{\\Delta} \\text{CH}_3\\text{CH}_2\\text{OH} + \\text{NaCl} \\)</p>

<div class="env-example">
<strong>Example:</strong> When 1-bromobutane reacts with aqueous NaOH, the hydroxide ion (OH⁻) acts as the nucleophile and substitutes Br⁻, producing butan-1-ol. The reaction is facilitated by heating.
</div>

<h4>2. Elimination Reaction (消去反应, E)</h4>
<p>With a base in alcoholic solution, an H atom is removed from the adjacent carbon together with the halogen, forming a C=C double bond:</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CH}_2\\text{Br} + \\text{NaOH}_{(alc)} \\xrightarrow{\\Delta} \\text{CH}_2{=}\\text{CH}_2\\uparrow + \\text{NaBr} + \\text{H}_2\\text{O} \\)</p>

<div class="env-warning">
<strong>Warning:</strong> The reaction conditions determine the product! <em>Aqueous</em> NaOH favours substitution (→ alcohol); <em>alcoholic</em> NaOH favours elimination (→ alkene). Always state the solvent.
</div>

<h3>Testing for Halogens in Organic Compounds</h3>
<ol>
  <li>Heat the compound with NaOH solution (hydrolyse the C–X bond).</li>
  <li>Acidify with dilute HNO₃ to remove excess OH⁻.</li>
  <li>Add AgNO₃ solution. A precipitate confirms halide ions:
    <ul>
      <li>White precipitate (AgCl) → Cl</li>
      <li>Pale yellow precipitate (AgBr) → Br</li>
      <li>Yellow precipitate (AgI) → I</li>
    </ul>
  </li>
</ol>

<div class="env-definition">
<strong>Key Vocabulary:</strong>
<ul>
  <li>亲核取代 (nucleophilic substitution) — Nu⁻ attacks carbon bearing X</li>
  <li>消去反应 (elimination) — loss of HX to form C=C</li>
  <li>水解 (hydrolysis) — reaction with water (or aqueous NaOH)</li>
</ul>
</div>
`,
visualizations: [
{
  id: 'ch15-viz01',
  title: 'Functional Group Identifier',
  description: 'Click "Next Molecule" to see a different organic molecule. Identify the functional group and click your answer.',
  setup: function(body, controls) {
    var viz = new VizEngine(body, {width: 700, height: 400});
    var c = viz.colors;

    var molecules = [
      {
        name: 'Chloroethane',
        formula: 'CH\u2083CH\u2082Cl',
        group: 'C\u2013X (Halogen)',
        groupKey: 'halo',
        atoms: [
          {x:-2.5, y:0, sym:'C', col:c.white},
          {x:-1.0, y:0, sym:'C', col:c.white},
          {x:0.5,  y:0, sym:'Cl', col:c.green}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:1}],
        labels: [{x:-2.5,y:-0.7,t:'CH\u2083'},{x:-1.0,y:-0.7,t:'CH\u2082'},{x:0.5,y:-0.7,t:'Cl',col:c.green}]
      },
      {
        name: 'Ethanol',
        formula: 'CH\u2083CH\u2082OH',
        group: '\u2013OH (Hydroxyl)',
        groupKey: 'oh',
        atoms: [
          {x:-2.0, y:0, sym:'C', col:c.white},
          {x:-0.5, y:0, sym:'C', col:c.white},
          {x:1.0,  y:0, sym:'O', col:c.red},
          {x:2.2,  y:0, sym:'H', col:c.white}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:1},{a:2,b:3,o:1}],
        labels: [{x:-2.0,y:-0.7,t:'CH\u2083'},{x:-0.5,y:-0.7,t:'CH\u2082'},{x:1.0,y:-0.7,t:'O',col:c.red},{x:2.2,y:-0.7,t:'H'}]
      },
      {
        name: 'Acetaldehyde',
        formula: 'CH\u2083CHO',
        group: '\u2013CHO (Aldehyde)',
        groupKey: 'cho',
        atoms: [
          {x:-1.5, y:0, sym:'C', col:c.white},
          {x:0.0,  y:0, sym:'C', col:c.white},
          {x:1.5,  y:0, sym:'O', col:c.red}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:2}],
        labels: [{x:-1.5,y:-0.7,t:'CH\u2083'},{x:0.0,y:-0.7,t:'CH'},{x:1.5,y:-0.7,t:'O',col:c.red}]
      },
      {
        name: 'Acetic Acid',
        formula: 'CH\u2083COOH',
        group: '\u2013COOH (Carboxyl)',
        groupKey: 'cooh',
        atoms: [
          {x:-1.5, y:0, sym:'C', col:c.white},
          {x:0.0,  y:0, sym:'C', col:c.white},
          {x:1.4,  y:0.7, sym:'O', col:c.red},
          {x:1.4,  y:-0.7, sym:'OH', col:c.red}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:2},{a:1,b:3,o:1}],
        labels: [{x:-1.5,y:-0.7,t:'CH\u2083'},{x:0.0,y:-0.8,t:'C'},{x:1.4,y:1.4,t:'O',col:c.red},{x:1.4,y:-1.4,t:'OH',col:c.red}]
      },
      {
        name: 'Ethyl Acetate',
        formula: 'CH\u2083COOC\u2082H\u2085',
        group: '\u2013COO\u2013 (Ester)',
        groupKey: 'ester',
        atoms: [
          {x:-2.0, y:0, sym:'C', col:c.white},
          {x:-0.5, y:0, sym:'C', col:c.white},
          {x:0.9,  y:0.7, sym:'O', col:c.red},
          {x:0.9,  y:-0.7, sym:'O', col:c.red},
          {x:2.3,  y:-0.7, sym:'C', col:c.white}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:2},{a:1,b:3,o:1},{a:3,b:4,o:1}],
        labels: [{x:-2.0,y:-0.7,t:'CH\u2083'},{x:-0.5,y:-0.8,t:'C'},{x:0.9,y:1.4,t:'O',col:c.red},{x:0.9,y:-1.4,t:'O',col:c.red},{x:2.3,y:-1.4,t:'C\u2082H\u2085'}]
      }
    ];

    var choices = [
      {key:'halo', label:'C\u2013X (Halogen)'},
      {key:'oh',   label:'\u2013OH (Hydroxyl)'},
      {key:'cho',  label:'\u2013CHO (Aldehyde)'},
      {key:'cooh', label:'\u2013COOH (Carboxyl)'},
      {key:'ester',label:'\u2013COO\u2013 (Ester)'}
    ];

    var current = 0;
    var feedback = '';
    var feedbackColor = c.white;
    var answered = false;

    function drawMolecule() {
      viz.clear();
      var m = molecules[current];
      viz.screenText('Identify the Functional Group', viz.width/2, 28, c.blue, 16);
      viz.screenText(m.name + '  (' + m.formula + ')', viz.width/2, 58, c.white, 15);

      // Shift origin for drawing
      var oldOX = viz.originX, oldOY = viz.originY;
      viz.originX = viz.width/2 - 30;
      viz.originY = viz.height/2 + 10;

      for (var bi = 0; bi < m.bonds.length; bi++) {
        var b = m.bonds[bi];
        var a1 = m.atoms[b.a], a2 = m.atoms[b.b];
        viz.drawBond(a1.x, a1.y, a2.x, a2.y, b.o, c.text);
      }
      for (var ai = 0; ai < m.atoms.length; ai++) {
        var a = m.atoms[ai];
        viz.drawAtom(a.x, a.y, 0.38, a.col, a.sym, c.bg);
      }
      for (var li = 0; li < m.labels.length; li++) {
        var lb = m.labels[li];
        viz.drawText(lb.t, lb.x, lb.y, lb.col || c.text, 11);
      }

      viz.originX = oldOX;
      viz.originY = oldOY;

      if (feedback) {
        viz.screenText(feedback, viz.width/2, viz.height - 28, feedbackColor, 14);
      }
    }

    drawMolecule();

    // Answer buttons
    for (var ci = 0; ci < choices.length; ci++) {
      (function(choice) {
        VizEngine.createButton(controls, choice.label, function() {
          if (answered) return;
          var m = molecules[current];
          if (choice.key === m.groupKey) {
            feedback = 'Correct! The functional group is ' + m.group;
            feedbackColor = c.green;
          } else {
            feedback = 'Not quite. The answer is: ' + m.group;
            feedbackColor = c.red;
          }
          answered = true;
          drawMolecule();
        });
      })(choices[ci]);
    }

    VizEngine.createButton(controls, 'Next Molecule', function() {
      current = (current + 1) % molecules.length;
      feedback = '';
      answered = false;
      drawMolecule();
    });

    return viz;
  }
}
],
exercises: [
{
  question: 'Write the product of CH\u2083CH\u2082Br reacting with aqueous NaOH solution when heated. What type of reaction is this?',
  hint: 'OH\u207b acts as a nucleophile, replacing the halogen.',
  solution: 'Product: CH\u2083CH\u2082OH (ethanol) + NaBr. This is a nucleophilic substitution reaction (SN). The equation is: CH\u2083CH\u2082Br + NaOH(aq) \u2192 CH\u2083CH\u2082OH + NaBr.'
},
{
  question: 'What product forms when CH\u2083CH\u2082Br reacts with NaOH dissolved in ethanol (alcoholic NaOH) under heating?',
  hint: 'Alcoholic base favours elimination over substitution.',
  solution: 'Product: CH\u2082=CH\u2082 (ethylene/ethene) + NaBr + H\u2082O. This is an elimination reaction. Equation: CH\u2083CH\u2082Br + NaOH(alc) \u2192\u1d0e CH\u2082=CH\u2082 + NaBr + H\u2082O.'
},
{
  question: 'A student heats an unknown organic compound with NaOH(aq), then acidifies with dilute HNO\u2083, and adds AgNO\u2083 solution, obtaining a pale yellow precipitate. What halogen is present in the compound?',
  hint: 'AgBr is pale yellow, AgCl is white, AgI is yellow.',
  solution: 'Bromine (Br). The pale yellow precipitate is AgBr, indicating the compound is a bromine-containing halogenated hydrocarbon.'
}
]
},

// ─────────────────────────────────────────────
// SECTION 2: Alcohols (醇)
// ─────────────────────────────────────────────
{
id: 'ch15-sec02',
title: 'Alcohols (醇)',
content: `
<h2>Alcohols — The Hydroxyl Functional Group</h2>

<div class="env-definition">
<strong>Definition:</strong> An <strong>alcohol (醇)</strong> is an organic compound containing one or more hydroxyl groups (–OH) bonded directly to a saturated carbon atom. The general formula for monohydric alcohols is CₙH₂ₙ₊₁OH.
</div>

<h3>Ethanol (CH₃CH₂OH) — The Prototypical Alcohol</h3>
<p>Ethanol is the most important alcohol in the high-school curriculum. It is a colourless liquid with a characteristic smell, miscible with water in all proportions.</p>

<div class="env-intuition">
<strong>Why is ethanol miscible with water?</strong> The –OH group can form hydrogen bonds with water molecules. The short ethyl chain (CH₃CH₂–) is not large enough to overcome the hydrophilic character of the –OH group.
</div>

<h3>Key Reactions of Ethanol</h3>

<h4>1. Reaction with Sodium Metal</h4>
<p style="text-align:center;">\\( 2\\,\\text{CH}_3\\text{CH}_2\\text{OH} + 2\\,\\text{Na} \\rightarrow 2\\,\\text{CH}_3\\text{CH}_2\\text{ONa} + \\text{H}_2\\uparrow \\)</p>
<p>This confirms the acidic H on the –OH group. The reaction is less vigorous than Na with water.</p>

<h4>2. Oxidation — Catalytic Oxidation to Acetaldehyde</h4>
<p style="text-align:center;">\\( 2\\,\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{O}_2 \\xrightarrow{\\text{Cu or Ag},\\,\\Delta} 2\\,\\text{CH}_3\\text{CHO} + 2\\,\\text{H}_2\\text{O} \\)</p>
<p>Copper or silver acts as a catalyst. The –OH is oxidised to –CHO (aldehyde), losing 2 hydrogen atoms.</p>

<div class="env-example">
<strong>Lab observation:</strong> A glowing copper wire is inserted into ethanol vapour. The copper oxidises to black CuO, then is reduced back to copper by ethanol vapour — the wire glows and the smell of acetaldehyde (pungent, fruity) is detected.
</div>

<h4>3. Dehydration — Intramolecular (Elimination to Alkene)</h4>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{conc.}\\,\\text{H}_2\\text{SO}_4,\\,170°\\text{C}} \\text{CH}_2{=}\\text{CH}_2\\uparrow + \\text{H}_2\\text{O} \\)</p>

<h4>4. Dehydration — Intermolecular (Etherification)</h4>
<p style="text-align:center;">\\( 2\\,\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{conc.}\\,\\text{H}_2\\text{SO}_4,\\,140°\\text{C}} \\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3 + \\text{H}_2\\text{O} \\)</p>

<div class="env-warning">
<strong>Temperature matters!</strong> At 140°C, two ethanol molecules combine to form diethyl ether (intermolecular dehydration). At 170°C, one molecule loses water to give ethylene (intramolecular dehydration).
</div>

<h4>5. Esterification</h4>
<p>Alcohols react with carboxylic acids in the presence of concentrated H₂SO₄ to form esters (covered in Sections 4 and 5).</p>

<h3>Oxidation States and the Oxidation Sequence</h3>
<p>Ethanol sits in the middle of an oxidation ladder:</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CH}_3 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{OH} \\rightarrow \\text{CH}_3\\text{CHO} \\rightarrow \\text{CH}_3\\text{COOH} \\)</p>
<p>Each arrow represents a 2-electron oxidation (loss of H₂ or addition of O).</p>
`,
visualizations: [
{
  id: 'ch15-viz04',
  title: 'Ethanol Oxidation Pathway',
  description: 'Step through the oxidation ladder: ethanol \u2192 acetaldehyde \u2192 acetic acid. Observe the structural change at each step.',
  setup: function(body, controls) {
    var viz = new VizEngine(body, {width: 700, height: 420});
    var c = viz.colors;
    var step = 0;

    var stages = [
      {
        name: 'Ethanol  CH\u2083CH\u2082OH',
        desc: 'Oxidation state of C: \u22121 (in CH\u2082OH)',
        color: c.blue,
        atoms: [
          {x:-2.0, y:0, sym:'C', col:c.white},
          {x:-0.5, y:0, sym:'C', col:c.white},
          {x:1.0,  y:0, sym:'O', col:c.red},
          {x:2.2,  y:0, sym:'H', col:c.teal}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:1},{a:2,b:3,o:1}],
        topLabels: ['CH\u2083','CH\u2082','O','H']
      },
      {
        name: 'Acetaldehyde  CH\u2083CHO',
        desc: 'Oxidation state of C: +1 (in CHO). Lost 2H from \u2013OH \u2192 C=O',
        color: c.orange,
        atoms: [
          {x:-1.5, y:0, sym:'C', col:c.white},
          {x:0.0,  y:0, sym:'C', col:c.white},
          {x:1.5,  y:0, sym:'O', col:c.red}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:2}],
        topLabels: ['CH\u2083','CH','\u22120']
      },
      {
        name: 'Acetic Acid  CH\u2083COOH',
        desc: 'Oxidation state of C: +3 (in COOH). Added O (further oxidation)',
        color: c.green,
        atoms: [
          {x:-1.5, y:0, sym:'C', col:c.white},
          {x:0.0,  y:0, sym:'C', col:c.white},
          {x:1.4,  y:0.8, sym:'O', col:c.red},
          {x:1.4,  y:-0.8, sym:'O', col:c.red},
          {x:2.6,  y:-0.8, sym:'H', col:c.teal}
        ],
        bonds: [{a:0,b:1,o:1},{a:1,b:2,o:2},{a:1,b:3,o:1},{a:3,b:4,o:1}],
        topLabels: ['CH\u2083','C','=O','\u2013OH','H']
      }
    ];

    var animT = 0;
    var animating = false;
    var animId = null;

    function draw(t) {
      viz.clear();
      var s = stages[step];
      viz.screenText('Ethanol Oxidation Pathway', viz.width/2, 28, c.blue, 16);
      viz.screenText(s.name, viz.width/2, 58, s.color, 15);
      viz.screenText(s.desc, viz.width/2, 82, c.text, 12);

      // Progress bar
      var barW = 500;
      var barX = (viz.width - barW) / 2;
      var barY = 105;
      viz.ctx.fillStyle = c.grid;
      viz.ctx.fillRect(barX, barY, barW, 10);
      viz.ctx.fillStyle = s.color;
      viz.ctx.fillRect(barX, barY, barW * (step / 2), 10);
      var stages_labels = ['Ethanol','Acetaldehyde','Acetic Acid'];
      for (var si = 0; si < 3; si++) {
        var bx = barX + barW * (si / 2);
        viz.ctx.fillStyle = si <= step ? s.color : c.text;
        viz.ctx.font = '11px -apple-system,sans-serif';
        viz.ctx.textAlign = 'center';
        viz.ctx.fillText(stages_labels[si], bx, barY + 24);
      }

      // Molecule drawing
      var oldOX = viz.originX, oldOY = viz.originY;
      viz.originX = viz.width/2;
      viz.originY = 260;

      // Animate a pulse on newly changed atoms
      var pulse = animating ? Math.abs(Math.sin(t * 0.003)) : 0;

      for (var bi = 0; bi < s.bonds.length; bi++) {
        var b = s.bonds[bi];
        var a1 = s.atoms[b.a], a2 = s.atoms[b.b];
        viz.drawBond(a1.x, a1.y, a2.x, a2.y, b.o, c.text);
      }
      for (var ai = 0; ai < s.atoms.length; ai++) {
        var a = s.atoms[ai];
        var highlight = animating && (a.sym === 'O' || a.sym === 'H') ? pulse : 0;
        var r = 0.36 + highlight * 0.08;
        viz.drawAtom(a.x, a.y, r, a.col, a.sym, c.bg);
      }

      viz.originX = oldOX;
      viz.originY = oldOY;

      // Oxidation arrow
      if (step < 2) {
        viz.screenText('\u2193 [O] (oxidation)', viz.width/2, viz.height - 40, c.orange, 13);
      } else {
        viz.screenText('Fully oxidised carboxyl group', viz.width/2, viz.height - 40, c.green, 13);
      }
    }

    draw(0);

    VizEngine.createButton(controls, 'Step: Oxidise', function() {
      if (step < 2) step++;
      animating = true;
      animT = 0;
      viz.stopAnimation();
      viz.animate(function(t) {
        draw(t);
        animT++;
        if (animT > 60) { viz.stopAnimation(); animating = false; draw(0); }
      });
    });

    VizEngine.createButton(controls, 'Reset', function() {
      step = 0;
      animating = false;
      viz.stopAnimation();
      draw(0);
    });

    return viz;
  }
}
],
exercises: [
{
  question: 'Ethanol reacts with concentrated H\u2082SO\u2084 at 170\u00b0C. Write the equation and name the product.',
  hint: 'Intramolecular dehydration occurs at 170\u00b0C.',
  solution: 'CH\u2083CH\u2082OH \u2192(conc. H\u2082SO\u2084, 170\u00b0C) CH\u2082=CH\u2082 + H\u2082O. Product is ethylene (ethene). This is an elimination (dehydration) reaction.'
},
{
  question: 'A copper wire is oxidised to black CuO and then placed into ethanol vapour. What happens to the wire and what is the organic product formed?',
  hint: 'CuO is a mild oxidising agent; ethanol is the reducing agent.',
  solution: 'The CuO is reduced back to copper (Cu), so the wire turns shiny/red again. Ethanol is oxidised to acetaldehyde (CH\u2083CHO). Overall: CuO + CH\u2083CH\u2082OH \u2192 Cu + CH\u2083CHO + H\u2082O.'
},
{
  question: 'Predict the product and state the type of reaction when ethanol reacts with sodium metal. Write a balanced equation.',
  hint: 'The O\u2013H bond is broken; Na displaces H.',
  solution: '2 CH\u2083CH\u2082OH + 2 Na \u2192 2 CH\u2083CH\u2082ONa + H\u2082\u2191. The product is sodium ethoxide. This is a substitution reaction (the active metal Na replaces H in the O\u2013H bond).'
}
]
},

// ─────────────────────────────────────────────
// SECTION 3: Aldehydes (醛)
// ─────────────────────────────────────────────
{
id: 'ch15-sec03',
title: 'Aldehydes (醛)',
content: `
<h2>Aldehydes — The –CHO Functional Group</h2>

<div class="env-definition">
<strong>Definition:</strong> An <strong>aldehyde (醛)</strong> contains the formyl group –CHO, where a carbonyl carbon (C=O) is bonded to at least one hydrogen. The simplest aldehyde is methanal (HCHO, formaldehyde); the most important at this level is ethanal (CH₃CHO, acetaldehyde).
</div>

<h3>Structure of Acetaldehyde (CH₃CHO)</h3>
<p>The carbonyl carbon in –CHO is sp² hybridised and trigonal planar. The C=O bond is polarised (O is more electronegative), making the carbon electrophilic — but the H on the aldehyde carbon also makes it uniquely reactive as a <strong>reducing agent</strong>.</p>

<h3>Key Reactions</h3>

<h4>1. Silver Mirror Reaction (银镜反应) — Tollens' Test</h4>
<p>Aldehyde + Tollens' reagent (silver–ammonia complex Ag(NH₃)₂⁺OH⁻):</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CHO} + 2\\,\\text{Ag}(\\text{NH}_3)_2^+ + 2\\,\\text{OH}^- \\xrightarrow{\\Delta,\\text{water bath}} \\text{CH}_3\\text{COO}^- + 2\\,\\text{Ag}\\downarrow + \\text{NH}_3 + \\text{H}_2\\text{O} \\)</p>
<p>A brilliant silver mirror forms on the inside of the test tube. This is the classic <strong>positive test for aldehydes</strong>.</p>

<div class="env-warning">
<strong>Lab Tips:</strong> The test tube must be <em>very clean</em> (no grease). Heat gently in a water bath — direct flame causes a black Ag precipitate rather than a mirror. Do not shake the tube during heating.
</div>

<h4>2. Cu(OH)₂ Test (Fehling's Test Variant)</h4>
<p>Aldehyde reduces blue Cu(OH)₂ (copper(II) hydroxide) to brick-red Cu₂O (copper(I) oxide):</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CHO} + 2\\,\\text{Cu(OH)}_2 \\xrightarrow{\\Delta} \\text{CH}_3\\text{COOH} + \\text{Cu}_2\\text{O}\\downarrow + 2\\,\\text{H}_2\\text{O} \\)</p>
<p>The colour change is blue → brick-red. Both this test and the silver mirror reaction confirm the aldehyde group.</p>

<h4>3. Oxidation to Carboxylic Acid</h4>
<p>Aldehydes are easily oxidised to the corresponding carboxylic acid:</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{CHO} + [\\text{O}] \\rightarrow \\text{CH}_3\\text{COOH} \\)</p>
<p>Oxidising agents include KMnO₄, K₂Cr₂O₇, or air (catalytic).</p>

<div class="env-intuition">
<strong>Why are aldehydes such good reducing agents?</strong> The H on the –CHO carbon is weakly held (low bond energy due to adjacent electronegative C=O). It can be lost easily, transferring electrons to the oxidising agent. Ketones (R–CO–R') lack this H and cannot be oxidised as easily.
</div>

<div class="env-definition">
<strong>Summary of Tests:</strong>
<ul>
  <li>Silver mirror reaction (Tollens'): positive for aldehydes only</li>
  <li>Cu(OH)₂ (Fehling's variant): positive for aldehydes only</li>
  <li>Ketones: neither test gives a positive result</li>
</ul>
</div>
`,
visualizations: [
{
  id: 'ch15-viz03',
  title: 'Silver Mirror Reaction',
  description: 'Watch the silver mirror form as acetaldehyde reduces the silver-ammonia complex. Click "Run Reaction" to animate.',
  setup: function(body, controls) {
    var viz = new VizEngine(body, {width: 700, height: 400});
    var c = viz.colors;

    var progress = 0;
    var running = false;

    function drawScene(prog) {
      viz.clear();
      viz.screenText('Silver Mirror Reaction (银镜反应)', viz.width/2, 28, c.blue, 16);
      viz.screenText('CH\u2083CHO + 2 Ag(NH\u2083)\u2082\u207a + 2 OH\u207b \u2192 CH\u2083COO\u207b + 2 Ag\u2193 + H\u2082O', viz.width/2, 52, c.text, 12);

      // Test tube outline
      var ctx = viz.ctx;
      var tubeX = viz.width/2 - 50;
      var tubeTop = 80;
      var tubeW = 100;
      var tubeH = 270;
      var tubeBottom = tubeTop + tubeH;

      // Tube walls
      ctx.strokeStyle = c.text;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(tubeX, tubeTop);
      ctx.lineTo(tubeX, tubeBottom - 20);
      ctx.quadraticCurveTo(tubeX, tubeBottom + 10, tubeX + tubeW/2, tubeBottom + 10);
      ctx.quadraticCurveTo(tubeX + tubeW, tubeBottom + 10, tubeX + tubeW, tubeBottom - 20);
      ctx.lineTo(tubeX + tubeW, tubeTop);
      ctx.stroke();

      // Liquid level — Tollens' reagent (blue-ish)
      var liquidH = tubeH * 0.75;
      var liquidTop = tubeBottom - liquidH;
      var lerpColor = function(c1r, c1g, c1b, c2r, c2g, c2b, t) {
        var r = Math.round(c1r + (c2r - c1r) * t);
        var g = Math.round(c1g + (c2g - c1g) * t);
        var b2 = Math.round(c1b + (c2b - c1b) * t);
        return 'rgb(' + r + ',' + g + ',' + b2 + ')';
      };

      // Liquid colour: clear -> slightly yellow as reaction proceeds
      var liquidColor = lerpColor(180, 200, 240, 220, 220, 180, prog);
      ctx.fillStyle = liquidColor + 'aa';
      ctx.beginPath();
      ctx.moveTo(tubeX + 3, liquidTop);
      ctx.lineTo(tubeX + 3, tubeBottom - 20);
      ctx.quadraticCurveTo(tubeX + 3, tubeBottom + 7, tubeX + tubeW/2, tubeBottom + 7);
      ctx.quadraticCurveTo(tubeX + tubeW - 3, tubeBottom + 7, tubeX + tubeW - 3, tubeBottom - 20);
      ctx.lineTo(tubeX + tubeW - 3, liquidTop);
      ctx.closePath();
      ctx.fill();

      // Silver mirror on inner wall (grows from bottom)
      if (prog > 0.1) {
        var mirrorH = (prog - 0.1) / 0.9 * liquidH * 0.85;
        var mirrorTop = tubeBottom - mirrorH;
        var alpha = Math.min(1, (prog - 0.1) * 2);
        ctx.fillStyle = 'rgba(200,200,210,' + (alpha * 0.9) + ')';
        ctx.fillRect(tubeX + 3, mirrorTop, 12, mirrorH);
        ctx.fillRect(tubeX + tubeW - 15, mirrorTop, 12, mirrorH);

        // Shimmer effect
        var shimmer = (prog * 7) % 1;
        ctx.fillStyle = 'rgba(255,255,255,' + (shimmer * 0.5 * alpha) + ')';
        ctx.fillRect(tubeX + 4, mirrorTop + mirrorH * 0.2, 8, mirrorH * 0.3);
      }

      // Silver particles falling
      if (prog > 0.2) {
        var nParticles = Math.floor((prog - 0.2) / 0.8 * 30);
        ctx.fillStyle = 'rgba(210,210,220,0.7)';
        for (var i = 0; i < nParticles; i++) {
          var px = tubeX + 15 + (i * 37 % (tubeW - 30));
          var py = liquidTop + ((i * 53 + prog * 200) % (liquidH * 0.7));
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Labels
      if (prog < 0.15) {
        viz.screenText('Ag(NH\u2083)\u2082\u207a solution (clear)', viz.width/2, tubeTop - 10, c.teal, 12);
      } else if (prog < 0.5) {
        viz.screenText('Reaction in progress...', viz.width/2, tubeTop - 10, c.yellow, 12);
      } else {
        viz.screenText('Silver mirror formed! (Ag\u2193)', viz.width/2, tubeTop - 10, c.green, 13);
      }

      // Status
      var status = prog < 0.05 ? 'Add CH\u2083CHO to Tollens\u2019 reagent, then heat in water bath' :
                   prog < 0.5 ? 'CH\u2083CHO is oxidised \u2192 CH\u2083COO\u207b; Ag\u207a is reduced \u2192 Ag' :
                   'Complete: bright silver mirror on glass wall';
      viz.screenText(status, viz.width/2, viz.height - 18, c.text, 11);
    }

    drawScene(0);

    VizEngine.createButton(controls, 'Run Reaction', function() {
      if (running) return;
      running = true;
      progress = 0;
      viz.animate(function() {
        progress += 0.005;
        if (progress >= 1) { progress = 1; viz.stopAnimation(); running = false; }
        drawScene(progress);
      });
    });

    VizEngine.createButton(controls, 'Reset', function() {
      viz.stopAnimation();
      running = false;
      progress = 0;
      drawScene(0);
    });

    return viz;
  }
}
],
exercises: [
{
  question: 'A student adds a few drops of acetaldehyde (CH\u2083CHO) to freshly prepared Tollens\u2019 reagent and heats the tube in a water bath. Describe the expected observation and write the ionic equation.',
  hint: 'Ag\u207a is reduced to Ag metal; the aldehyde is oxidised to carboxylate.',
  solution: 'A bright silver mirror forms on the inner wall of the test tube. Ionic equation: CH\u2083CHO + 2Ag(NH\u2083)\u2082\u207a + 2OH\u207b \u2192 CH\u2083COO\u207b + 2Ag\u2193 + 4NH\u2083 + H\u2082O.'
},
{
  question: 'Why do ketones (e.g. CH\u2083COCH\u2083) NOT give a positive silver mirror reaction, while aldehydes do?',
  hint: 'Think about the hydrogen atom on the carbonyl carbon.',
  solution: 'Aldehydes have a hydrogen atom directly bonded to the carbonyl carbon (\u2013CHO), which can be oxidised. Ketones have no such hydrogen (the carbonyl carbon bonds to two carbon groups only), so ketones cannot act as reducing agents in Tollens\u2019 test.'
},
{
  question: 'Acetaldehyde reacts with Cu(OH)\u2082 on heating. Write the equation and describe the colour change.',
  hint: 'Cu\u00b2\u207a (blue) is reduced to Cu\u207a (brick-red).',
  solution: 'CH\u2083CHO + 2Cu(OH)\u2082 \u2192 CH\u2083COOH + Cu\u2082O\u2193 + 2H\u2082O. Colour changes from blue (Cu(OH)\u2082) to brick-red (Cu\u2082O precipitate).'
}
]
},

// ─────────────────────────────────────────────
// SECTION 4: Carboxylic Acids (羧酸)
// ─────────────────────────────────────────────
{
id: 'ch15-sec04',
title: 'Carboxylic Acids (羧酸)',
content: `
<h2>Carboxylic Acids — The –COOH Functional Group</h2>

<div class="env-definition">
<strong>Definition:</strong> A <strong>carboxylic acid (羧酸)</strong> contains the carboxyl group –COOH, which consists of a carbonyl (C=O) and a hydroxyl (–OH) on the same carbon. General formula for monocarboxylic acids: CₙH₂ₙ₊₁COOH.
</div>

<h3>Acetic Acid (CH₃COOH, Ethanoic Acid)</h3>
<p>Pure acetic acid (glacial acetic acid, 冰醋酸) is a colourless liquid with a sharp, pungent smell. It freezes at 16.6°C (hence "glacial"). Vinegar is 3–8% acetic acid in water.</p>

<h3>Acetic Acid as a Weak Acid</h3>
<p>Acetic acid is a <strong>weak acid</strong> — it only partially dissociates in water:</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+ \\quad K_a \\approx 1.8 \\times 10^{-5} \\)</p>

<p>Despite being weak, acetic acid still shows all typical acid reactions:</p>
<ul>
  <li><strong>With metals:</strong> \\( 2\\,\\text{CH}_3\\text{COOH} + 2\\,\\text{Na} \\rightarrow 2\\,\\text{CH}_3\\text{COONa} + \\text{H}_2\\uparrow \\)</li>
  <li><strong>With bases:</strong> \\( \\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} \\)</li>
  <li><strong>With carbonates:</strong> \\( 2\\,\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\rightarrow 2\\,\\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow \\)</li>
</ul>

<div class="env-intuition">
<strong>Intuition:</strong> The carboxylate anion CH₃COO⁻ is stabilised by resonance — the negative charge is delocalised over both oxygens. This makes it a stable conjugate base, which explains why –COOH is a much stronger acid than –OH (alcohols essentially don't ionise).
</div>

<h3>Esterification Reaction</h3>
<p>This is the most important reaction of carboxylic acids in organic chemistry:</p>
<p style="text-align:center;">\\( \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\underset{\\Delta}{\\overset{\\text{conc. H}_2\\text{SO}_4}{\\rightleftharpoons}} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\)</p>

<p><strong>Key features of esterification:</strong></p>
<ol>
  <li>It is a <strong>reversible equilibrium</strong> reaction</li>
  <li>The catalyst is concentrated H₂SO₄ (also acts as dehydrating agent)</li>
  <li>Heating is required (reflux)</li>
  <li>The \\(^{18}\\text{O}\\) isotope labelling experiment shows the oxygen in water comes from the <strong>acid</strong> (the –OH of –COOH is lost), not from the alcohol</li>
</ol>

<div class="env-example">
<strong>Bond-breaking in esterification:</strong><br>
The –OH is lost from the carboxylic acid side, and H is lost from the alcohol's –OH. This is called <strong>acid–alcohol condensation</strong> (酸失去OH，醇失去H).
</div>

<div class="env-warning">
<strong>Exam Tip:</strong> The double arrow ⇌ indicates the reaction is reversible. To improve yield: (1) use excess of one reactant, (2) remove water (or ester) as it forms, (3) use a catalyst. Le Chatelier's principle applies here.
</div>
`,
visualizations: [],
exercises: [
{
  question: 'Acetic acid reacts with Na\u2082CO\u2083 solution. Write the equation and describe the observation.',
  hint: 'A stronger acid displaces the weaker carbonic acid from its salt.',
  solution: '2 CH\u2083COOH + Na\u2082CO\u2083 \u2192 2 CH\u2083COONa + H\u2082O + CO\u2082\u2191. Observation: bubbles of colourless gas (CO\u2082) are produced and the solid/solution dissolves. This shows acetic acid is stronger than carbonic acid.'
},
{
  question: 'In the esterification of acetic acid with ethanol, which bond in the acid is broken — the C\u2013OH bond or the O\u2013H bond? How was this determined?',
  hint: 'Think about isotope labelling experiments.',
  solution: 'The O\u2013H bond in the carboxyl group (\u2013COOH) is broken. This was determined using \u00b9\u2078O isotope labelling: when \u00b9\u2078O-labelled ethanol is used, the \u00b9\u2078O ends up in the ester, not in the water. This confirms that the OH in water comes from the acid, not the alcohol.'
},
{
  question: 'How could you use Na\u2082CO\u2083 solution to distinguish between ethanol and acetic acid? Describe the experiment and expected results.',
  hint: 'Only acids react with Na\u2082CO\u2083 to produce CO\u2082.',
  solution: 'Add Na\u2082CO\u2083 solution to each sample. Acetic acid reacts: 2 CH\u2083COOH + Na\u2082CO\u2083 \u2192 2 CH\u2083COONa + H\u2082O + CO\u2082\u2191 (bubbles observed). Ethanol does not react with Na\u2082CO\u2083 (no bubbles). The sample that produces gas is acetic acid.'
}
]
},

// ─────────────────────────────────────────────
// SECTION 5: Esters and Organic Reaction Map
// ─────────────────────────────────────────────
{
id: 'ch15-sec05',
title: 'Esters & Organic Reaction Map (酯)',
content: `
<h2>Esters — Formation, Properties, and Applications</h2>

<div class="env-definition">
<strong>Definition:</strong> An <strong>ester (酯)</strong> is an organic compound formed by the condensation of a carboxylic acid and an alcohol, with the elimination of water. The general structure is R–COO–R', where the –COO– linkage is the ester functional group.
</div>

<h3>Formation: Esterification</h3>
<p style="text-align:center;">\\( \\underbrace{\\text{CH}_3\\text{CO}\\!\\!\\underbrace{\\text{OH}}_{\\text{lost from acid}}}_{\\text{acetic acid}} + \\underbrace{\\text{H}}_{\\text{lost from alcohol}}\\!\\!\\underbrace{\\text{OC}_2\\text{H}_5}_{\\text{remains}}_{\\text{ethanol}} \\underset{\\Delta}{\\overset{\\text{H}_2\\text{SO}_4}{\\rightleftharpoons}} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\)</p>

<p><strong>Product:</strong> Ethyl acetate (乙酸乙酯, CH₃COOC₂H₅) — a sweet-smelling, colourless liquid used as a solvent and food flavouring.</p>

<h3>Physical Properties of Esters</h3>
<ul>
  <li>Low-molecular-weight esters are <strong>volatile liquids with pleasant fruity smells</strong> — many natural fruit aromas come from esters</li>
  <li>Esters are <strong>less soluble in water</strong> than the corresponding acids or alcohols (no H-bonding ability at the –COO– group)</li>
  <li>Esters are good <strong>organic solvents</strong></li>
</ul>

<div class="env-example">
<strong>Natural Ester Aromas:</strong>
<ul>
  <li>Isoamyl acetate (CH₃COOC₅H₁₁) — banana</li>
  <li>Ethyl butyrate (C₃H₇COOC₂H₅) — pineapple</li>
  <li>Methyl salicylate — wintergreen</li>
  <li>Ethyl acetate (CH₃COOC₂H₅) — pear/nail polish remover</li>
</ul>
</div>

<h3>Hydrolysis of Esters</h3>
<p>Esterification is reversible; the reverse reaction is <strong>hydrolysis</strong>:</p>

<h4>Acid-catalysed Hydrolysis</h4>
<p style="text-align:center;">\\( \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\underset{\\Delta}{\\overset{\\text{H}^+}{\\rightleftharpoons}} \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\)</p>

<h4>Base-catalysed Hydrolysis (Saponification)</h4>
<p style="text-align:center;">\\( \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\xrightarrow{\\Delta} \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH} \\)</p>
<p>Base-catalysed hydrolysis is <strong>irreversible</strong> because the carboxylate ion (CH₃COO⁻) does not react back with the alcohol. This is why soap-making (saponification of fats with NaOH) goes to completion.</p>

<div class="env-warning">
<strong>Key Distinction:</strong><br>
Acid hydrolysis: reversible ⇌, equilibrium<br>
Base hydrolysis: irreversible →, goes to completion
</div>

<h3>Chapter Summary — Functional Group Interconversions</h3>
<p>All the functional groups in this chapter are interconnected through oxidation, reduction, and substitution:</p>
<ul>
  <li>Halogenoalkane + NaOH(aq) → Alcohol (substitution)</li>
  <li>Alcohol + [O] → Aldehyde (oxidation)</li>
  <li>Aldehyde + [O] → Carboxylic Acid (oxidation)</li>
  <li>Alcohol + Carboxylic Acid → Ester + H₂O (esterification)</li>
  <li>Ester + H₂O → Alcohol + Carboxylic Acid (hydrolysis)</li>
  <li>Alcohol − H₂O (170°C) → Alkene (elimination)</li>
  <li>Alkene + HX → Halogenoalkane (addition)</li>
</ul>

<h3>How to Distinguish Hydrocarbon Derivatives — Test Summary</h3>
<table class="data-table">
  <thead>
    <tr><th>Test</th><th>Positive Result</th><th>What It Detects</th></tr>
  </thead>
  <tbody>
    <tr><td>AgNO₃/NH₃ solution (Tollens')</td><td>Silver mirror on glass wall</td><td>Aldehyde (–CHO)</td></tr>
    <tr><td>Cu(OH)₂, heat (Fehling's variant)</td><td>Brick-red Cu₂O precipitate</td><td>Aldehyde (–CHO)</td></tr>
    <tr><td>Na metal</td><td>H₂ gas (slower than water)</td><td>Alcohol –OH or carboxylic –COOH</td></tr>
    <tr><td>NaOH solution</td><td>Dissolves/neutralizes; no CO₂</td><td>Carboxylic acid</td></tr>
    <tr><td>Na₂CO₃ solution</td><td>CO₂ bubbles (effervescence)</td><td>Carboxylic acid (stronger than H₂CO₃)</td></tr>
    <tr><td>NaHCO₃ solution</td><td>CO₂ bubbles</td><td>Carboxylic acid only (NOT alcohols or phenols)</td></tr>
    <tr><td>Bromine water</td><td>Decolorizes</td><td>Alkene, alkyne, or aldehyde</td></tr>
    <tr><td>AgNO₃/HNO₃ (after hydrolysis)</td><td>White/pale yellow/yellow ppt</td><td>Halide ion (Cl⁻/Br⁻/I⁻) from halogenated HC</td></tr>
  </tbody>
</table>

<div class="env-warning">
<strong>Key Diagnostic Tip:</strong> NaHCO₃ distinguishes carboxylic acids (reacts, CO₂ produced) from alcohols and phenols (no reaction). This is because carboxylic acids (Ka ≈ 10⁻⁵) are stronger acids than H₂CO₃ (Ka₁ ≈ 4.3×10⁻⁷), while alcohols and phenols are weaker than H₂CO₃.
</div>
`,
visualizations: [
{
  id: 'ch15-viz02',
  title: 'Esterification Reaction Animation',
  description: 'Watch acetic acid (CH\u2083COOH) and ethanol (C\u2082H\u2085OH) react to form ethyl acetate (CH\u2083COOC\u2082H\u2085) and water. Click "Animate" to see bond breaking and forming.',
  setup: function(body, controls) {
    var viz = new VizEngine(body, {width: 700, height: 420});
    var c = viz.colors;
    var phase = 0;
    var animT = 0;
    var running = false;

    function drawPhase(p, t) {
      viz.clear();
      var ctx = viz.ctx;
      var W = viz.width, H = viz.height;

      viz.screenText('Esterification  CH\u2083COOH + C\u2082H\u2085OH \u21cc CH\u2083COOC\u2082H\u2085 + H\u2082O', W/2, 26, c.blue, 14);
      viz.screenText('Catalyst: conc. H\u2082SO\u2084  |  Heat (\u0394)', W/2, 48, c.text, 12);

      var oldOX = viz.originX, oldOY = viz.originY;

      if (p === 0) {
        // Reactants side by side
        viz.screenText('Reactants', W/2, 72, c.teal, 13);

        viz.originX = W * 0.28;
        viz.originY = H * 0.55;
        // Acetic acid: CH3-C(=O)-OH
        viz.drawAtom(-1.5, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(0,   0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(1.2,  0.7, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(1.2, -0.7, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(2.4, -0.7, 0.28, c.teal, 'H', c.bg);
        viz.drawBond(-1.5, 0, 0, 0, 1, c.text);
        viz.drawBond(0, 0, 1.2, 0.7, 2, c.text);
        viz.drawBond(0, 0, 1.2, -0.7, 1, c.text);
        viz.drawBond(1.2, -0.7, 2.4, -0.7, 1, c.red);
        viz.drawText('CH\u2083', -1.5, -0.85, c.text, 10);
        viz.drawText('C', 0, -0.6, c.text, 10);
        viz.drawText('=O', 1.2, 1.45, c.red, 10);
        viz.drawText('\u2013OH', 1.8, -1.45, c.red, 10);
        viz.screenText('Acetic Acid (CH\u2083COOH)', W*0.28, H*0.55 + 90, c.teal, 11);

        // + sign
        viz.originX = W/2;
        viz.originY = H/2;
        viz.screenText('+', W/2, H/2, c.white, 28);

        // Ethanol
        viz.originX = W * 0.72;
        viz.originY = H * 0.55;
        viz.drawAtom(-1.5, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(-0.1, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(1.2,  0, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(2.4,  0, 0.28, c.teal, 'H', c.bg);
        viz.drawBond(-1.5, 0, -0.1, 0, 1, c.text);
        viz.drawBond(-0.1, 0, 1.2, 0, 1, c.text);
        viz.drawBond(1.2, 0, 2.4, 0, 1, c.red);
        viz.drawText('CH\u2083', -1.5, -0.85, c.text, 10);
        viz.drawText('CH\u2082', -0.1, -0.85, c.text, 10);
        viz.drawText('O', 1.2, -0.85, c.red, 10);
        viz.drawText('H', 2.4, -0.85, c.teal, 10);
        viz.screenText('Ethanol (C\u2082H\u2085OH)', W*0.72, H*0.55 + 90, c.teal, 11);

      } else if (p === 1) {
        // Transition state — bonds breaking
        var pulse = 0.5 + 0.5 * Math.sin(t * 0.08);
        viz.screenText('Bond Breaking in Progress...', W/2, 72, c.yellow, 13);
        viz.screenText('The OH leaves the acid; the H leaves the alcohol', W/2, 94, c.text, 12);

        viz.originX = W/2;
        viz.originY = H/2 + 20;

        // Show breaking bonds with flashing
        viz.drawAtom(-3.5, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(-2.0, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(-0.8, 0.7, 0.32, c.red, 'O', c.bg);
        viz.drawBond(-3.5, 0, -2.0, 0, 1, c.text);
        viz.drawBond(-2.0, 0, -0.8, 0.7, 2, c.text);

        // Breaking O-H bond (flashing red)
        ctx.strokeStyle = 'rgba(248,81,73,' + pulse + ')';
        ctx.lineWidth = 3;
        ctx.setLineDash([5,3]);
        var [bx1, by1] = viz.toScreen(-2.0, 0);
        var [bx2, by2] = viz.toScreen(-0.8, -0.7);
        ctx.beginPath(); ctx.moveTo(bx1, by1); ctx.lineTo(bx2, by2); ctx.stroke();
        ctx.setLineDash([]);
        viz.drawAtom(-0.8, -0.7, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(0.5, -0.7, 0.28, c.teal, 'H', c.bg);

        viz.drawAtom(1.5, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(2.8, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(4.0, 0, 0.32, c.red, 'O', c.bg);

        // Breaking O-H on ethanol
        ctx.strokeStyle = 'rgba(248,81,73,' + pulse + ')';
        ctx.lineWidth = 3;
        ctx.setLineDash([5,3]);
        var [bx3, by3] = viz.toScreen(4.0, 0);
        var [bx4, by4] = viz.toScreen(5.2, 0);
        ctx.beginPath(); ctx.moveTo(bx3, by3); ctx.lineTo(bx4, by4); ctx.stroke();
        ctx.setLineDash([]);
        viz.drawAtom(5.2, 0, 0.28, c.teal, 'H', c.bg);
        viz.drawBond(1.5, 0, 2.8, 0, 1, c.text);
        viz.drawBond(2.8, 0, 4.0, 0, 1, c.text);

        viz.screenText('Breaking: acid O\u2013H and alcohol O\u2013H', W/2, H - 40, c.red, 12);

      } else {
        // Products
        viz.screenText('Products', W/2, 72, c.green, 13);

        viz.originX = W * 0.32;
        viz.originY = H * 0.55;
        // Ester: CH3-C(=O)-O-C2H5
        viz.drawAtom(-2.0, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(-0.6, 0, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(0.6,  0.8, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(0.6, -0.8, 0.32, c.red, 'O', c.bg);
        viz.drawAtom(1.8, -0.8, 0.35, c.white, 'C', c.bg);
        viz.drawAtom(3.0, -0.8, 0.35, c.white, 'C', c.bg);
        viz.drawBond(-2.0, 0, -0.6, 0, 1, c.text);
        viz.drawBond(-0.6, 0, 0.6, 0.8, 2, c.text);
        viz.drawBond(-0.6, 0, 0.6, -0.8, 1, c.text);
        viz.drawBond(0.6, -0.8, 1.8, -0.8, 1, c.green);
        viz.drawBond(1.8, -0.8, 3.0, -0.8, 1, c.text);
        viz.drawText('CH\u2083', -2.0, -0.85, c.text, 10);
        viz.drawText('C', -0.6, -0.6, c.text, 10);
        viz.drawText('=O', 0.6, 1.55, c.red, 10);
        viz.drawText('\u2013O\u2013', 0.6, -1.6, c.green, 10);
        viz.drawText('CH\u2082', 1.8, -1.6, c.text, 10);
        viz.drawText('CH\u2083', 3.0, -1.6, c.text, 10);
        viz.screenText('Ethyl Acetate (CH\u2083COOC\u2082H\u2085)', W*0.32, H*0.55 + 100, c.green, 11);
        viz.screenText('Sweet, fruity smell (pear/nail polish)', W*0.32, H*0.55 + 116, c.text, 10);

        // + sign
        viz.originX = W * 0.72;
        viz.originY = H/2;
        viz.screenText('+', W*0.72, H/2, c.white, 28);

        // Water
        viz.originX = W * 0.88;
        viz.originY = H * 0.55;
        viz.drawAtom(0, 0, 0.35, c.red, 'O', c.bg);
        viz.drawAtom(-0.8, -0.7, 0.28, c.teal, 'H', c.bg);
        viz.drawAtom(0.8, -0.7, 0.28, c.teal, 'H', c.bg);
        viz.drawBond(0, 0, -0.8, -0.7, 1, c.text);
        viz.drawBond(0, 0, 0.8, -0.7, 1, c.text);
        viz.screenText('H\u2082O', W*0.88, H*0.55 + 70, c.teal, 12);
      }

      viz.originX = oldOX;
      viz.originY = oldOY;

      // Phase indicator
      var phases = ['Reactants', 'Transition State', 'Products'];
      for (var i = 0; i < 3; i++) {
        var px = W/2 - 120 + i * 120;
        ctx.fillStyle = i === p ? c.blue : c.grid;
        ctx.beginPath(); ctx.arc(px, H - 18, 7, 0, Math.PI * 2); ctx.fill();
        viz.screenText(phases[i], px, H - 30, i === p ? c.blue : c.text, 10);
      }
    }

    drawPhase(0, 0);

    VizEngine.createButton(controls, 'Animate', function() {
      if (running) return;
      running = true;
      phase = 1;
      animT = 0;
      viz.animate(function(t) {
        animT++;
        drawPhase(phase, t);
        if (phase === 1 && animT > 90) {
          phase = 2;
          animT = 0;
          viz.stopAnimation();
          drawPhase(2, 0);
          running = false;
        }
      });
    });

    VizEngine.createButton(controls, 'Show Reactants', function() {
      viz.stopAnimation();
      running = false;
      phase = 0;
      drawPhase(0, 0);
    });

    VizEngine.createButton(controls, 'Show Products', function() {
      viz.stopAnimation();
      running = false;
      phase = 2;
      drawPhase(2, 0);
    });

    return viz;
  }
},
{
  id: 'ch15-viz05',
  title: 'Organic Reaction Map',
  description: 'Interactive flowchart of all functional group interconversions. Click a node to highlight its reactions.',
  setup: function(body, controls) {
    var viz = new VizEngine(body, {width: 700, height: 460});
    var c = viz.colors;

    var nodes = [
      {id:'alkane',  label:'Alkane\n(烷烃)',   x:-4.5, y: 2.5, col:c.text},
      {id:'alkene',  label:'Alkene\n(烯烃)',   x:-2.0, y: 2.5, col:c.purple},
      {id:'halo',    label:'Halide\n(卤代烃)', x: 0.5, y: 2.5, col:c.green},
      {id:'alcohol', label:'Alcohol\n(醇)',    x: 0.5, y: 0.0, col:c.blue},
      {id:'aldehyde',label:'Aldehyde\n(醛)',   x: 3.0, y: 0.0, col:c.orange},
      {id:'acid',    label:'Acid\n(羧酸)',     x: 5.5, y: 0.0, col:c.red},
      {id:'ester',   label:'Ester\n(酯)',      x: 5.5, y:-2.5, col:c.teal},
      {id:'water',   label:'H\u2082O',         x: 3.0, y:-2.5, col:c.white}
    ];

    var edges = [
      {a:'alkane',   b:'halo',     label:'+X\u2082 (substitution)', col:c.green},
      {a:'alkene',   b:'halo',     label:'+HX (addition)', col:c.green},
      {a:'halo',     b:'alkene',   label:'NaOH(alc)/\u0394 (elimination)', col:c.purple},
      {a:'halo',     b:'alcohol',  label:'NaOH(aq)/\u0394 (substitution)', col:c.blue},
      {a:'alcohol',  b:'alkene',   label:'H\u2082SO\u2084/170\u00b0C (elimination)', col:c.purple},
      {a:'alcohol',  b:'aldehyde', label:'[O] / Cu catalyst', col:c.orange},
      {a:'aldehyde', b:'acid',     label:'[O] (oxidation)', col:c.red},
      {a:'acid',     b:'ester',    label:'+ ROH, H\u2082SO\u2084/\u0394', col:c.teal},
      {a:'ester',    b:'acid',     label:'+ H\u2082O, H\u207a (hydrolysis)', col:c.red},
      {a:'ester',    b:'alcohol',  label:'+ NaOH (saponification)', col:c.blue}
    ];

    var selectedNode = null;

    function getNodePos(id) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) return nodes[i];
      }
      return null;
    }

    function draw() {
      viz.clear();
      var oldOX = viz.originX, oldOY = viz.originY;
      viz.originX = viz.width / 2 - 40;
      viz.originY = viz.height / 2 + 40;

      viz.screenText('Organic Reaction Map — Click a node', viz.width/2, 22, c.blue, 14);

      // Draw edges
      for (var ei = 0; ei < edges.length; ei++) {
        var e = edges[ei];
        var na = getNodePos(e.a);
        var nb = getNodePos(e.b);
        var isActive = selectedNode && (selectedNode === e.a || selectedNode === e.b);
        var edgeCol = isActive ? e.col : c.grid;
        var edgeLW = isActive ? 2.5 : 1;

        // Offset for parallel edges
        var [sx1, sy1] = viz.toScreen(na.x, na.y);
        var [sx2, sy2] = viz.toScreen(nb.x, nb.y);
        var dx = sx2 - sx1, dy = sy2 - sy1;
        var len = Math.sqrt(dx*dx + dy*dy);
        if (len < 1) continue;
        var nx2 = -dy/len * 6, ny2 = dx/len * 6;

        viz.ctx.strokeStyle = edgeCol;
        viz.ctx.lineWidth = edgeLW;
        viz.ctx.beginPath();
        viz.ctx.moveTo(sx1 + nx2, sy1 + ny2);
        viz.ctx.lineTo(sx2 + nx2, sy2 + ny2);
        viz.ctx.stroke();

        // Arrow head
        var angle = Math.atan2(dy, dx);
        var arrowSize = 10;
        viz.ctx.fillStyle = edgeCol;
        viz.ctx.beginPath();
        viz.ctx.moveTo(sx2 + nx2, sy2 + ny2);
        viz.ctx.lineTo(sx2 + nx2 - arrowSize * Math.cos(angle - Math.PI/6), sy2 + ny2 - arrowSize * Math.sin(angle - Math.PI/6));
        viz.ctx.lineTo(sx2 + nx2 - arrowSize * Math.cos(angle + Math.PI/6), sy2 + ny2 - arrowSize * Math.sin(angle + Math.PI/6));
        viz.ctx.closePath();
        viz.ctx.fill();

        // Label
        if (isActive) {
          var midX = (sx1 + sx2) / 2 + nx2 * 1.5;
          var midY = (sy1 + sy2) / 2 + ny2 * 1.5;
          viz.ctx.fillStyle = edgeCol;
          viz.ctx.font = '10px -apple-system,sans-serif';
          viz.ctx.textAlign = 'center';
          viz.ctx.textBaseline = 'middle';
          viz.ctx.fillText(e.label, midX, midY - 10);
        }
      }

      // Draw nodes
      for (var ni = 0; ni < nodes.length; ni++) {
        var n = nodes[ni];
        var isSelected = selectedNode === n.id;
        var r = isSelected ? 0.65 : 0.55;
        var nodeCol = isSelected ? n.col : n.col + '88';
        viz.drawCircle(n.x, n.y, r, nodeCol, isSelected ? n.col : c.grid, 2);

        // Multi-line label
        var parts = n.label.split('\n');
        var lx = viz.originX + n.x * viz.scale;
        var ly = viz.originY - n.y * viz.scale;
        viz.ctx.fillStyle = isSelected ? c.bg : c.white;
        viz.ctx.font = (isSelected ? 'bold ' : '') + '11px -apple-system,sans-serif';
        viz.ctx.textAlign = 'center';
        for (var pi = 0; pi < parts.length; pi++) {
          viz.ctx.textBaseline = 'middle';
          viz.ctx.fillText(parts[pi], lx, ly + (pi - (parts.length-1)/2) * 13);
        }
      }

      viz.originX = oldOX;
      viz.originY = oldOY;

      if (!selectedNode) {
        viz.screenText('Click a functional group node to see its reactions', viz.width/2, viz.height - 18, c.text, 11);
      }
    }

    draw();

    // Click detection
    viz.canvas.addEventListener('click', function(ev) {
      var rect = viz.canvas.getBoundingClientRect();
      var mx = ev.clientX - rect.left;
      var my = ev.clientY - rect.top;
      var oldOX = viz.originX, oldOY = viz.originY;
      viz.originX = viz.width / 2 - 40;
      viz.originY = viz.height / 2 + 40;

      var clickedNode = null;
      for (var ni = 0; ni < nodes.length; ni++) {
        var n = nodes[ni];
        var [sx, sy] = viz.toScreen(n.x, n.y);
        var dist = Math.sqrt((mx - sx) * (mx - sx) + (my - sy) * (my - sy));
        if (dist < 0.65 * viz.scale + 5) { clickedNode = n.id; break; }
      }

      viz.originX = oldOX;
      viz.originY = oldOY;

      selectedNode = (clickedNode === selectedNode) ? null : clickedNode;
      draw();
    });

    VizEngine.createButton(controls, 'Clear Selection', function() {
      selectedNode = null;
      draw();
    });

    return viz;
  }
}
],
exercises: [
{
  question: 'Write the equation for the hydrolysis of ethyl acetate (CH\u2083COOC\u2082H\u2085) in the presence of NaOH solution and heat. Is this reaction reversible?',
  hint: 'The carboxylate ion formed (CH\u2083COO\u207b) cannot re-esterify under these conditions.',
  solution: 'CH\u2083COOC\u2082H\u2085 + NaOH \u2192 CH\u2083COONa + C\u2082H\u2085OH. The reaction is NOT reversible (irreversible). The sodium acetate formed is ionic and stable; it does not react back with ethanol to reform the ester.'
},
{
  question: 'State two ways to increase the yield of ester in the esterification of CH\u2083COOH with C\u2082H\u2085OH.',
  hint: 'Use Le Chatelier\u2019s principle: shift equilibrium to the right.',
  solution: 'Any two of: (1) Use excess of one reactant (e.g., excess acetic acid or ethanol). (2) Remove water as it forms (e.g., add a desiccant or distil off water). (3) Remove the ester product as it forms. (4) Use a suitable catalyst (conc. H\u2082SO\u2084).'
},
{
  question: 'A fragrant compound has the molecular formula C\u2084H\u2088O\u2082 and is known to be an ester. Write the structural formula(e) of possible ester(s) and identify the acid and alcohol that formed each.',
  hint: 'C\u2084H\u2088O\u2082 esters: look for \u2013COO\u2013 group. Total 4 C, so split between R and R\u2019 of R-COO-R\u2019.',
  solution: 'Possible esters with formula C\u2084H\u2088O\u2082: (1) HCOOC\u2083H\u2087 \u2014 methyl propanoate? No. Let\u2019s use R-COO-R\u2019 where the total carbons = 4. Options: (a) HCOOC\u2083H\u2087 (formic acid + propanol): HCOOH + CH\u2083CH\u2082CH\u2082OH; (b) CH\u2083COOC\u2082H\u2085 (acetic acid + ethanol): CH\u2083COOH + C\u2082H\u2085OH; (c) C\u2082H\u2085COOCH\u2083 (propanoic acid + methanol): C\u2082H\u2085COOH + CH\u2083OH; (d) C\u2083H\u2087COOH would require 5 C \u2014 excluded. So there are three possible structural isomers.'
},
{
  question: 'In the reaction network: alkene \u2192 [A] \u2192 alcohol \u2192 [B] \u2192 carboxylic acid \u2192 [C] + H\u2082O. Identify [A], [B], and [C].',
  hint: 'Follow the oxidation/substitution pathway from the chapter map.',
  solution: '[A] = Halogenated hydrocarbon (卤代烃): alkene + HX \u2192 R\u2013X, then R\u2013X + NaOH(aq) \u2192 alcohol. [B] = Aldehyde (醛): alcohol is oxidised ([O], Cu catalyst) to aldehyde, then further oxidised to carboxylic acid. [C] = Ester (酯): carboxylic acid + alcohol (in the presence of conc. H\u2082SO\u2084 and heat) \u2192 ester + H\u2082O.'
}
]
}

] // end sections
}); // end CHAPTERS.push
