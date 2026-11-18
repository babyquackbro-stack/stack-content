// Pearson Edexcel A-level packs. Format: see content/SCHEMA.md and scripts/build-content-packs.js.
// topics: [name, papers examined on, 'sub; sub; sub', { opt, w }]
const LIT_TEXT = 'Plot and structure; Characters; Themes; Context; Critical views; Key quotations';

module.exports = [
  {
    id: 'pearson-economics-a-9ec0', board: 'Pearson', subject: 'Economics', title: 'Economics A', code: '9EC0', firstExam: 2017, v: 1,
    url: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-a-2015.html',
    papers: [['9EC0/01', 'Paper 1: Markets and business behaviour'], ['9EC0/02', 'Paper 2: The national and global economy'], ['9EC0/03', 'Paper 3: Microeconomics and macroeconomics']],
    topics: [
      ['Nature of economics (1.1)', '01,03', 'Economics as a social science; Positive and normative statements; The economic problem; Production possibility frontiers; Specialisation and the division of labour; Free market, mixed and command economies'],
      ['How markets work (1.2)', '01,03', 'Rational decision making; Demand; Price, income and cross elasticities of demand; Supply; Price elasticity of supply; Price determination; Price mechanism; Consumer and producer surplus; Indirect taxes and subsidies; Alternative views of consumer behaviour'],
      ['Market failure (1.3)', '01,03', 'Types of market failure; Externalities; Public goods; Information gaps'],
      ['Government intervention (1.4)', '01,03', 'Methods of government intervention; Government failure'],
      ['Business growth (3.1)', '01,03', 'Sizes and types of firms; Business growth; Demergers'],
      ['Business objectives (3.2)', '01,03', 'Profit maximisation; Revenue and sales maximisation; Satisficing'],
      ['Revenues, costs and profits (3.3)', '01,03', 'Revenue; Costs; Economies and diseconomies of scale; Normal profits, supernormal profits and losses'],
      ['Market structures (3.4)', '01,03', 'Efficiency; Perfect competition; Monopolistic competition; Oligopoly; Monopoly; Monopsony; Contestability'],
      ['Labour market (3.5)', '01,03', 'Demand for labour; Supply of labour; Wage determination in competitive and non-competitive markets'],
      ['Government intervention in business (3.6)', '01,03', 'Government intervention; The impact of government intervention'],
      ['Measures of economic performance (2.1)', '02,03', 'Economic growth; Inflation; Employment and unemployment; Balance of payments'],
      ['Aggregate demand (2.2)', '02,03', 'The characteristics of AD; Consumption; Investment; Government expenditure; Net trade'],
      ['Aggregate supply (2.3)', '02,03', 'The characteristics of AS; Short-run AS; Long-run AS'],
      ['National income (2.4)', '02,03', 'National income; Injections and withdrawals; Equilibrium levels of real national output; The multiplier'],
      ['Economic growth (2.5)', '02,03', 'Causes of growth; Output gaps; Trade (business) cycle; The impact of economic growth'],
      ['Macroeconomic objectives and policies (2.6)', '02,03', 'Possible macroeconomic objectives; Demand-side policies; Supply-side policies; Conflicts and trade-offs between objectives and policies'],
      ['International economics (4.1)', '02,03', 'Globalisation; Specialisation and trade; Pattern of trade; Terms of trade; Trading blocs and the WTO; Restrictions on free trade; Balance of payments; Exchange rates; International competitiveness'],
      ['Poverty and inequality (4.2)', '02,03', 'Absolute and relative poverty; Inequality'],
      ['Emerging and developing economies (4.3)', '02,03', 'Measures of development; Factors influencing growth and development; Strategies influencing growth and development'],
      ['The financial sector (4.4)', '02,03', 'Role of financial markets; Market failure in the financial sector; Role of central banks'],
      ['Role of the state in the macroeconomy (4.5)', '02,03', 'Public expenditure; Taxation; Public sector finances; Macroeconomic policies in a global context'],
    ],
    unsure: ['Sub-topic wording is from memory of the spec headings; check against the Pearson spec.', 'Spec issue number not recorded.'],
  },
  {
    id: 'pearson-maths-9ma0', board: 'Pearson', subject: 'Mathematics', code: '9MA0', firstExam: 2018, v: 2,
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
    id: 'pearson-englit-9et0', board: 'Pearson', subject: 'English Literature', code: '9ET0', firstExam: 2017, v: 2,
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
