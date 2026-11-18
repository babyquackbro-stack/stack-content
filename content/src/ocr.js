// OCR A-level packs. Format: see content/SCHEMA.md and scripts/build-content-packs.js.
// topics: [name, papers examined on, 'sub; sub; sub', { opt, w }]
module.exports = [
  {
    id: 'ocr-physics-a-h556', board: 'OCR', subject: 'Physics', title: 'Physics A', code: 'H556', firstExam: 2017, v: 2,
    url: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/',
    papers: [['H556/01', 'Paper 1: Modelling physics'], ['H556/02', 'Paper 2: Exploring physics'], ['H556/03', 'Paper 3: Unified physics']],
    topics: [
      ['Development of practical skills (Module 1)', '01,02,03', 'Planning; Implementing; Analysis; Evaluation'],
      ['Foundations of physics (Module 2)', '01,02,03', 'Physical quantities and units; Making measurements and analysing data; Scalars and vectors'],
      ['Motion', '01,03', 'Kinematics; Linear motion; Projectile motion'],
      ['Forces in action', '01,03', 'Dynamics; Motion with non-uniform acceleration; Equilibrium; Density and pressure'],
      ['Work, energy and power', '01,03', 'Work and conservation of energy; Kinetic and potential energies; Power'],
      ['Materials', '01,03', 'Springs; Mechanical properties of matter'],
      ['Newton\'s laws of motion and momentum', '01,03', 'Newton\'s laws; Collisions'],
      ['Charge and current', '02,03', 'Charge; Mean drift velocity'],
      ['Energy, power and resistance', '02,03', 'Circuit symbols; E.m.f. and p.d.; Resistance; Resistivity; Power'],
      ['Electrical circuits', '02,03', 'Series and parallel circuits; Internal resistance; Potential dividers'],
      ['Waves', '02,03', 'Wave motion; Electromagnetic waves; Superposition; Stationary waves'],
      ['Quantum physics', '02,03', 'Photons; Photoelectric effect; Wave-particle duality'],
      ['Thermal physics', '01,03', 'Temperature; Solid, liquid and gas; Thermal properties of materials; Ideal gases'],
      ['Circular motion', '01,03', 'Kinematics of circular motion; Centripetal force'],
      ['Oscillations', '01,03', 'Simple harmonic oscillations; Energy of a simple harmonic oscillator; Damping and resonance'],
      ['Gravitational fields', '01,03', 'Point and spherical masses; Newton\'s law of gravitation; Planetary motion; Gravitational potential and energy'],
      ['Astrophysics and cosmology', '01,03', 'Stars; Electromagnetic radiation from stars; Cosmology'],
      ['Capacitors', '02,03', 'Capacitors; Energy; Charging and discharging'],
      ['Electric fields', '02,03', 'Point and spherical charges; Coulomb\'s law; Uniform electric fields; Electric potential and energy'],
      ['Electromagnetism', '02,03', 'Magnetic fields; Motion of charged particles; Electromagnetic induction'],
      ['Nuclear and particle physics', '02,03', 'The nuclear atom; Fundamental particles; Radioactivity; Nuclear fission and fusion'],
      ['Medical imaging', '02,03', 'Using X-rays; Diagnostic methods in medicine; Using ultrasound'],
    ],
    unsure: ['Spec version number not recorded.'],
  },
];
