// Pearson Edexcel A-level packs. Format: see content/SCHEMA.md and scripts/build-content-packs.js.
// topics: [name, papers examined on, 'sub; sub; sub', { opt, w }]
const LIT_TEXT = 'Plot and structure; Characters; Themes; Context; Critical views; Key quotations';

module.exports = [
  {
    id: 'pearson-maths-9ma0', board: 'Pearson', subject: 'Mathematics', code: '9MA0', firstExam: 2018,
    url: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html',
    papers: [['9MA0/01', 'Paper 1: Pure Mathematics 1'], ['9MA0/02', 'Paper 2: Pure Mathematics 2'], ['9MA0/03', 'Paper 3: Statistics and Mechanics']],
    topics: [
      ['Proof', '01,02', 'Proof by deduction; Proof by exhaustion; Disproof by counter-example; Proof by contradiction'],
      ['Algebra and functions', '01,02', 'Indices and surds; Quadratics and the discriminant; Simultaneous equations; Inequalities; Polynomials and the factor theorem; Partial fractions; Graphs and transformations; Modulus; Composite and inverse functions'],
      ['Coordinate geometry in the (x, y) plane', '01,02', 'Straight lines; Circles; Parametric equations'],
      ['Sequences and series', '01,02', 'Binomial expansion; Arithmetic sequences and series; Geometric sequences and series; Sigma notation; Recurrence relations'],
      ['Trigonometry', '01,02', 'Radians, arc length and sector area; Small angle approximations; Sec, cosec, cot and inverse trig; Identities; Compound and double angle formulae; R cos(x ± a) form; Solving equations'],
      ['Exponentials and logarithms', '01,02', 'e^x and ln x; Laws of logarithms; Solving equations; Exponential models; Using log graphs to find constants'],
      ['Differentiation', '01,02', 'First principles; Standard derivatives; Tangents and normals; Stationary points; Chain, product and quotient rules; Implicit and parametric; Connected rates of change; Concave, convex and points of inflection'],
      ['Integration', '01,02', 'Standard integrals; Definite integrals and areas; Substitution; By parts; Partial fractions; Separable differential equations'],
      ['Numerical methods', '01,02', 'Locating roots; Iteration; Newton-Raphson; Trapezium rule'],
      ['Vectors', '01,02', 'Vectors in 2D and 3D; Magnitude and direction; Position vectors; Geometric problems'],
      ['Statistical sampling', '03', 'Populations and samples; Sampling methods'],
      ['Data presentation and interpretation', '03', 'Histograms, box plots and cumulative frequency; Measures of location and spread; Correlation and regression; Outliers and cleaning data; The large data set'],
      ['Probability', '03', 'Venn and tree diagrams; Mutually exclusive and independent events; Conditional probability'],
      ['Statistical distributions', '03', 'Binomial distribution; Normal distribution; Choosing and approximating distributions'],
      ['Statistical hypothesis testing', '03', 'Binomial tests; Tests for a normal mean; Correlation coefficient tests; Critical regions and significance'],
      ['Quantities and units in mechanics', '03', 'SI units; Modelling assumptions'],
      ['Kinematics', '03', 'Constant acceleration (suvat); Displacement-time and velocity-time graphs; Variable acceleration with calculus; Projectiles'],
      ['Forces and Newton\'s laws', '03', 'Newton\'s laws; Connected particles and pulleys; Resolving forces; Friction; Inclined planes'],
      ['Moments', '03', 'Moments; Equilibrium of rigid bodies; Ladders and beams'],
    ],
    unsure: ['Spec issue number not recorded.'],
  },
  {
    id: 'pearson-englit-9et0', board: 'Pearson', subject: 'English Literature', code: '9ET0', firstExam: 2017,
    url: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/english-literature-2015.html',
    options: [
      { id: 'shakes', name: 'Paper 1 Shakespeare play', choices: [['ac', 'Antony and Cleopatra'], ['ham', 'Hamlet'], ['lear', 'King Lear'], ['oth', 'Othello'], ['mfm', 'Measure for Measure'], ['shrew', 'The Taming of the Shrew'], ['msnd', 'A Midsummer Night\'s Dream'], ['twn', 'Twelfth Night']] },
      { id: 'drama', name: 'Paper 1 other drama', choices: [['faust', 'Doctor Faustus'], ['malfi', 'The Duchess of Malfi'], ['streetcar', 'A Streetcar Named Desire'], ['salesman', 'Death of a Salesman'], ['rover', 'The Rover'], ['stoops', 'She Stoops to Conquer'], ['earnest', 'The Importance of Being Earnest'], ['godot', 'Waiting for Godot']] },
      { id: 'prose', name: 'Paper 2 prose theme', choices: [['child', 'Childhood'], ['colon', 'Colonisation and its Aftermath'], ['crime', 'Crime and Detection'], ['sci', 'Science and Society'], ['super', 'The Supernatural'], ['women', 'Women and Society']] },
      { id: 'poetry', name: 'Paper 3 specified poetry', choices: [['meta', 'Metaphysical Poetry'], ['rom', 'The Romantics'], ['vic', 'The Victorians'], ['mod', 'Modernism'], ['move', 'The Movement']] },
    ],
    papers: [['9ET0/01', 'Paper 1: Drama'], ['9ET0/02', 'Paper 2: Prose'], ['9ET0/03', 'Paper 3: Poetry']],
    topics: [
      ...[['ac', 'Antony and Cleopatra'], ['ham', 'Hamlet'], ['lear', 'King Lear'], ['oth', 'Othello'], ['mfm', 'Measure for Measure'], ['shrew', 'The Taming of the Shrew'], ['msnd', 'A Midsummer Night\'s Dream'], ['twn', 'Twelfth Night']]
        .map(([id, n]) => [n, '01', `${LIT_TEXT}; Critical Anthology essays`, { opt: `shakes:${id}`, w: 8 }]),
      ...[['faust', 'Doctor Faustus'], ['malfi', 'The Duchess of Malfi'], ['streetcar', 'A Streetcar Named Desire'], ['salesman', 'Death of a Salesman'], ['rover', 'The Rover'], ['stoops', 'She Stoops to Conquer'], ['earnest', 'The Importance of Being Earnest'], ['godot', 'Waiting for Godot']]
        .map(([id, n]) => [n, '01', LIT_TEXT, { opt: `drama:${id}`, w: 7 }]),
      ...[['child', 'Childhood'], ['colon', 'Colonisation and its Aftermath'], ['crime', 'Crime and Detection'], ['sci', 'Science and Society'], ['super', 'The Supernatural'], ['women', 'Women and Society']]
        .map(([id, n]) => [`Prose: ${n}`, '02', 'First text (pre-1900); Second text; Comparing the pair; Context; Key quotations', { opt: `prose:${id}`, w: 10 }]),
      ['Poems of the Decade (post-2000 poetry)', '03', 'The 20 set poems; Comparing a set poem with an unseen poem', { w: 8 }],
      ...[['meta', 'Metaphysical Poetry'], ['rom', 'The Romantics'], ['vic', 'The Victorians'], ['mod', 'Modernism'], ['move', 'The Movement']]
        .map(([id, n]) => [`Specified poetry: ${n}`, '03', 'The set poems; Poets and context; Themes and methods; Critical views', { opt: `poetry:${id}`, w: 8 }]),
    ],
    unsure: [
      'Set text and poetry lists written from memory of the 2015 spec. Check them against the current spec before publishing, as Pearson has updated some texts.',
      'Paper 3 specified poetry can also be a named poet instead of a movement; named poets are not listed yet.',
      'The coursework (non-exam assessment) is not included.',
    ],
  },
];
