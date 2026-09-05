// ==========================================
// SIMULATION DATA
// ==========================================
const simulations = [
    // ==================== MATH & GEOMETRY ====================
    { id: "absolute-value", title: "Absolute Value", category: "math", image: "/assets/simulations/absolute-value.png", desc: "The non-negative value of a number without regard to its sign, denoted |x|." },
    { id: "algorithm", title: "Algorithm", category: "math", image: "/assets/simulations/algorithm.png", desc: "A finite sequence of well-defined instructions used to solve a class of specific problems or perform a computation." },
    { id: "asymptote", title: "Asymptote", category: "math", image: "/assets/simulations/asymptote.png", desc: "A line that a curve approaches as the curve goes to infinity." },
    { id: "binomial-theorem", title: "Binomial Theorem", category: "math", image: "/assets/simulations/binomial-theorem.png", desc: "A formula for expanding powers of a binomial expression (a + b)^n." },
    { id: "calculus", title: "Calculus", category: "math", image: "/assets/simulations/calculus.png", desc: "The mathematical study of continuous change, comprising differential and integral calculus." },
    { id: "cardinality", title: "Cardinality", category: "math", image: "/assets/simulations/cardinality.png", desc: "The number of elements in a set." },
    { id: "cartesian-coordinates", title: "Cartesian Coordinates", category: "math", image: "/assets/simulations/cartesian-coordinates.png", desc: "A system specifying each point uniquely by a pair of numerical coordinates (x, y) in a plane." },
    { id: "central-limit-theorem", title: "Central Limit Theorem", category: "math", image: "/assets/simulations/central-limit-theorem.png", desc: "The theorem stating that the distribution of sample means approximates a normal distribution as sample size grows." },
    { id: "combinatorics", title: "Combinatorics", category: "math", image: "/assets/simulations/combinatorics.png", desc: "The branch of mathematics concerned with counting, arrangement, and combination of objects." },
    { id: "complex-number", title: "Complex Number", category: "math", image: "/assets/simulations/complex-number.png", desc: "A number of the form a + bi, where a and b are real numbers and i is the imaginary unit (iÂ² = -1)." },
    { id: "conic-section", title: "Conic Section", category: "math", image: "/assets/simulations/conic-section.png", desc: "A curve obtained as the intersection of a cone with a plane, including circles, ellipses, parabolas, and hyperbolas." },
    { id: "correlation-coefficient", title: "Correlation Coefficient", category: "math", image: "/assets/simulations/correlation-coefficient.png", desc: "A statistical measure that calculates the strength of the relationship between two variables, ranging from -1 to +1." },
    { id: "derivative", title: "Derivative", category: "math", image: "/assets/simulations/derivative.png", desc: "The rate of change of a function with respect to a variable, representing the slope of the tangent line." },
    { id: "determinant", title: "Determinant", category: "math", image: "/assets/simulations/determinant.png", desc: "A scalar value computed from the elements of a square matrix, determining properties like invertibility." },
    { id: "differential-equation", title: "Differential Equation", category: "math", image: "/assets/simulations/differential-equation.png", desc: "An equation relating a function with its derivatives, used to model rates of change in physical systems." },
    { id: "eigenvalue", title: "Eigenvalue", category: "math", image: "/assets/simulations/eigenvalue.png", desc: "A scalar associated with a linear transformation such that the transformation stretches vectors by that factor." },
    { id: "eigenvector", title: "Eigenvector", category: "math", image: "/assets/simulations/eigenvector.png", desc: "A non-zero vector that changes at most by a scalar factor when a linear transformation is applied." },
    { id: "euclidean-geometry", title: "Euclidean Geometry", category: "math", image: "/assets/simulations/euclidean-geometry.png", desc: "The study of plane and solid figures based on axioms and theorems employed by the Greek mathematician Euclid." },
    { id: "exponential-function", title: "Exponential Function", category: "math", image: "/assets/simulations/exponential-function.png", desc: "A function of the form f(x) = a^x, where the variable appears as an exponent." },
    { id: "factorial", title: "Factorial", category: "math", image: "/assets/simulations/factorial.png", desc: "The product of all positive integers less than or equal to n, denoted n!." },
    { id: "fourier-transform", title: "Fourier Transform", category: "math", image: "/assets/simulations/fourier-transform.png", desc: "A mathematical transform that decomposes a function into its constituent frequencies." },
    { id: "fractal", title: "Fractal", category: "math", image: "/assets/simulations/fractal.png", desc: "A geometric shape that displays self-similarity at various scales, often with non-integer dimension." },
    { id: "function", title: "Function", category: "math", image: "/assets/simulations/function.png", desc: "A relation between a set of inputs and a set of permissible outputs where each input is related to exactly one output." },
    { id: "graph-theory", title: "Graph Theory", category: "math", image: "/assets/simulations/graph-theory.png", desc: "The study of graphs, which are mathematical structures used to model pairwise relations between objects." },
    { id: "group-theory", title: "Group Theory", category: "math", image: "/assets/simulations/group-theory.png", desc: "The branch of abstract algebra studying algebraic structures known as groups." },
    { id: "hypothesis-testing", title: "Hypothesis Testing", category: "math", image: "/assets/simulations/hypothesis-testing.png", desc: "A statistical method used to make decisions about a population parameter based on sample data." },
    { id: "imaginary-number", title: "Imaginary Number", category: "math", image: "/assets/simulations/imaginary-number.png", desc: "A complex number that can be written as a real number multiplied by the imaginary unit i, where iÂ² = -1." },
    { id: "integral", title: "Integral", category: "math", image: "/assets/simulations/integral.png", desc: "A mathematical object representing the area under a curve, or the accumulation of quantities." },
    { id: "irrational-number", title: "Irrational Number", category: "math", image: "/assets/simulations/irrational-number.png", desc: "A real number that cannot be expressed as a ratio of integers, such as Ï or â2." },
    { id: "limit", title: "Limit", category: "math", image: "/assets/simulations/limit.png", desc: "The value that a function or sequence approaches as the input or index approaches some value." },
    { id: "linear-algebra", title: "Linear Algebra", category: "math", image: "/assets/simulations/linear-algebra.png", desc: "The branch of mathematics concerning linear equations, vector spaces, linear transformations, and matrices." },
    { id: "logarithm", title: "Logarithm", category: "math", image: "/assets/simulations/logarithm.png", desc: "The inverse operation to exponentiation, representing the power to which a base must be raised to produce a given number." },
    { id: "matrix", title: "Matrix", category: "math", image: "/assets/simulations/matrix.png", desc: "A rectangular array of numbers, symbols, or expressions arranged in rows and columns." },
    { id: "mean", title: "Mean", category: "math", image: "/assets/simulations/mean.png", desc: "The arithmetic average of a set of values, calculated by summing all values and dividing by the count." },
    { id: "median", title: "Median", category: "math", image: "/assets/simulations/median.png", desc: "The middle value in a list of numbers sorted in ascending or descending order." },
    { id: "mode", title: "Mode", category: "math", image: "/assets/simulations/mode.png", desc: "The value that appears most frequently in a data set." },
    { id: "normal-distribution", title: "Normal Distribution", category: "math", image: "/assets/simulations/normal-distribution.png", desc: "A probability distribution symmetric about the mean, forming a bell-shaped curve." },
    { id: "number-theory", title: "Number Theory", category: "math", image: "/assets/simulations/number-theory.png", desc: "The branch of pure mathematics devoted primarily to the study of integers and integer-valued functions." },
    { id: "parabola", title: "Parabola", category: "math", image: "/assets/simulations/parabola.png", desc: "A U-shaped symmetrical curve where any point is at an equal distance from a fixed point (focus) and a fixed line (directrix)." },
    { id: "parametric-equations", title: "Parametric Equations", category: "math", image: "/assets/simulations/parametric-equations.png", desc: "A set of equations that express a set of quantities as explicit functions of independent variables called parameters." },
    { id: "permutation", title: "Permutation", category: "math", image: "/assets/simulations/permutation.png", desc: "An arrangement of objects in a specific order, where order matters." },
    { id: "pi", title: "Pi (Ï)", category: "math", image: "/assets/simulations/pi.png", desc: "The mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 3.14159." },
    { id: "polar-coordinates", title: "Polar Coordinates", category: "math", image: "/assets/simulations/polar-coordinates.png", desc: "A two-dimensional coordinate system where each point is determined by a distance from a reference point and an angle from a reference direction." },
    { id: "polynomial", title: "Polynomial", category: "math", image: "/assets/simulations/polynomial.png", desc: "An expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents." },
    { id: "prime-number", title: "Prime Number", category: "math", image: "/assets/simulations/prime-number.png", desc: "A natural number greater than 1 that has no positive divisors other than 1 and itself." },
    { id: "probability", title: "Probability", category: "math", image: "/assets/simulations/probability.png", desc: "The measure of the likelihood that an event will occur, quantified as a number between 0 and 1." },
    { id: "pythagorean-theorem", title: "Pythagorean Theorem", category: "math", image: "/assets/simulations/pythagorean-theorem.png", desc: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides (aÂ² + bÂ² = cÂ²)." },
    { id: "quadratic-equation", title: "Quadratic Equation", category: "math", image: "/assets/simulations/quadratic-equation.png", desc: "A polynomial equation of the second degree, typically represented as axÂ² + bx + c = 0." },
    { id: "quadrilateral", title: "Quadrilateral", category: "math", image: "/assets/simulations/quadrilateral.png", desc: "A polygon with four edges (sides) and four vertices (corners)." },
    { id: "quaternion", title: "Quaternion", category: "math", image: "/assets/simulations/quaternion.png", desc: "A number system extending complex numbers, represented as a + bi + cj + dk." },
    { id: "regression-analysis", title: "Regression Analysis", category: "math", image: "/assets/simulations/regression-analysis.png", desc: "A set of statistical processes for estimating relationships among variables." },
    { id: "riemann-hypothesis", title: "Riemann Hypothesis", category: "math", image: "/assets/simulations/riemann-hypothesis.png", desc: "A conjecture about the distribution of zeros of the Riemann zeta function, one of the most important unsolved problems in mathematics." },
    { id: "set-theory", title: "Set Theory", category: "math", image: "/assets/simulations/set-theory.png", desc: "The branch of mathematical logic studying sets, which are collections of objects." },
    { id: "standard-deviation", title: "Standard Deviation", category: "math", image: "/assets/simulations/standard-deviation.png", desc: "A measure of the amount of variation or dispersion in a set of values." },
    { id: "taylor-series", title: "Taylor Series", category: "math", image: "/assets/simulations/taylor-series.png", desc: "A representation of a function as an infinite sum of terms calculated from the function's derivatives at a single point." },
    { id: "topology", title: "Topology", category: "math", image: "/assets/simulations/topology.png", desc: "The branch of mathematics concerned with properties of space preserved under continuous deformations." },
    { id: "trigonometry", title: "Trigonometry", category: "math", image: "/assets/simulations/trigonometry.png", desc: "The branch of mathematics dealing with the relations of sides and angles of triangles and the relevant functions." },
    { id: "vector", title: "Vector", category: "math", image: "/assets/simulations/vector.png", desc: "A quantity having both magnitude and direction, often represented by an arrow." },
    { id: "variance", title: "Variance", category: "math", image: "/assets/simulations/variance.png", desc: "The expectation of the squared deviation of a random variable from its mean." },
    { id: "vector-space", title: "Vector Space", category: "math", image: "/assets/simulations/vector-space.png", desc: "A collection of vectors that can be added together and multiplied by scalars, subject to certain axioms." },
    // ==================== SCIENCE (PHYSICS, CHEMISTRY, BIOLOGY, EARTH & SPACE) ====================
    { id: "acceleration", title: "Acceleration", category: "science", image: "/assets/simulations/acceleration.png", desc: "The rate of change of velocity of an object with respect to time." },
    { id: "angular-momentum", title: "Angular Momentum", category: "science", image: "/assets/simulations/angular-momentum.png", desc: "The rotational equivalent of linear momentum, representing the quantity of rotation of a body." },
    { id: "antimatter", title: "Antimatter", category: "science", image: "/assets/simulations/antimatter.png", desc: "Matter composed of antiparticles, which have the same mass as particles of ordinary matter but opposite charge." },
    { id: "black-hole", title: "Black Hole", category: "science", image: "/assets/simulations/black-hole.png", desc: "A region of spacetime where gravity is so strong that nothing, not even light, can escape from it." },
    { id: "bose-einstein-condensate", title: "Bose-Einstein Condensate", category: "science", image: "/assets/simulations/bose-einstein-condensate.png", desc: "A state of matter formed by bosons cooled to temperatures very near absolute zero." },
    { id: "capacitance", title: "Capacitance", category: "science", image: "/assets/simulations/capacitance.png", desc: "The ability of a system to store an electric charge, measured in farads." },
    { id: "centripetal-force", title: "Centripetal Force", category: "science", image: "/assets/simulations/centripetal-force.png", desc: "A force that makes a body follow a curved path, directed toward the center of curvature." },
    { id: "chaos-theory", title: "Chaos Theory", category: "science", image: "/assets/simulations/chaos-theory.png", desc: "The study of dynamical systems highly sensitive to initial conditions, where small differences can yield widely diverging outcomes." },
    { id: "conductivity", title: "Conductivity", category: "science", image: "/assets/simulations/conductivity.png", desc: "The measure of a material's ability to conduct electric current or heat." },
    { id: "conservation-of-energy", title: "Conservation of Energy", category: "science", image: "/assets/simulations/conservation-of-energy.png", desc: "The principle that energy cannot be created or destroyed, only transformed from one form to another." },
    { id: "coulombs-law", title: "Coulomb's Law", category: "science", image: "/assets/simulations/coulombs-law.png", desc: "The law stating that the electrostatic force between two charged particles is proportional to the product of their charges and inversely proportional to the square of the distance between them." },
    { id: "dark-energy", title: "Dark Energy", category: "science", image: "/assets/simulations/dark-energy.png", desc: "A hypothetical form of energy permeating all of space, tending to accelerate the expansion of the universe." },
    { id: "dark-matter", title: "Dark Matter", category: "science", image: "/assets/simulations/dark-matter.png", desc: "A form of matter thought to account for approximately 85% of the matter in the universe that does not emit light or energy." },
    { id: "doppler-effect", title: "Doppler Effect", category: "science", image: "/assets/simulations/doppler-effect.png", desc: "The change in frequency or wavelength of a wave in relation to an observer moving relative to the wave source." },
    { id: "electric-field", title: "Electric Field", category: "science", image: "/assets/simulations/electric-field.png", desc: "A vector field surrounding electrically charged particles, exerting force on other charged objects." },
    { id: "electromagnetic-induction", title: "Electromagnetic Induction", category: "science", image: "/assets/simulations/electromagnetic-induction.png", desc: "The production of an electromotive force across an electrical conductor in a changing magnetic field." },
    { id: "electromagnetic-spectrum", title: "Electromagnetic Spectrum", category: "science", image: "/assets/simulations/electromagnetic-spectrum.png", desc: "The range of all possible frequencies of electromagnetic radiation, from radio waves to gamma rays." },
    { id: "electromagnetism", title: "Electromagnetism", category: "science", image: "/assets/simulations/electromagnetism.png", desc: "A branch of physics involving the study of the electromagnetic force, a type of physical interaction between electrically charged particles." },
    { id: "entropy", title: "Entropy", category: "science", image: "/assets/simulations/entropy.png", desc: "A thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work, often interpreted as disorder." },
    { id: "escape-velocity", title: "Escape Velocity", category: "science", image: "/assets/simulations/escape-velocity.png", desc: "The minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body." },
    { id: "fission", title: "Fission", category: "science", image: "/assets/simulations/fission.png", desc: "A nuclear reaction in which the nucleus of an atom splits into two or more smaller nuclei, releasing energy." },
    { id: "fluid-dynamics", title: "Fluid Dynamics", category: "science", image: "/assets/simulations/fluid-dynamics.png", desc: "A subdiscipline of fluid mechanics that deals with fluid flow in motion." },
    { id: "force", title: "Force", category: "science", image: "/assets/simulations/force.png", desc: "Any interaction that, when unopposed, will change the motion of an object, measured in newtons." },
    { id: "frequency", title: "Frequency", category: "science", image: "/assets/simulations/frequency.png", desc: "The number of occurrences of a repeating event per unit of time, measured in hertz (Hz)." },
    { id: "fusion", title: "Fusion", category: "science", image: "/assets/simulations/fusion.png", desc: "A nuclear reaction in which two or more atomic nuclei combine to form one or more different atomic nuclei and subatomic particles." },
    { id: "general-relativity", title: "General Relativity", category: "science", image: "/assets/simulations/general-relativity.png", desc: "The geometric theory of gravitation published by Albert Einstein, describing gravity as the curvature of spacetime." },
    { id: "gravitational-waves", title: "Gravitational Waves", category: "science", image: "/assets/simulations/gravitational-waves.png", desc: "Ripples in the curvature of spacetime that propagate as waves, generated by accelerated masses." },
    { id: "half-life", title: "Half-Life", category: "science", image: "/assets/simulations/half-life.png", desc: "The time required for half of the radioactive atoms in a sample to decay." },
    { id: "higgs-boson", title: "Higgs Boson", category: "science", image: "/assets/simulations/higgs-boson.png", desc: "An elementary particle in the Standard Model of particle physics, associated with the Higgs field that gives other particles mass." },
    { id: "inertia", title: "Inertia", category: "science", image: "/assets/simulations/inertia.png", desc: "The resistance of any physical object to any change in its velocity, including changes to speed or direction." },
    { id: "interference", title: "Interference", category: "science", image: "/assets/simulations/interference.png", desc: "A phenomenon in which two waves superpose to form a resultant wave of greater, lower, or the same amplitude." },
    { id: "isotope", title: "Isotope", category: "science", image: "/assets/simulations/isotope.png", desc: "Variants of a particular chemical element that differ in neutron number, having the same number of protons but different numbers of neutrons." },
    { id: "kinetic-energy", title: "Kinetic Energy", category: "science", image: "/assets/simulations/kinetic-energy.png", desc: "The energy possessed by an object due to its motion, equal to half the mass times the square of the velocity." },
    { id: "lorentz-force", title: "Lorentz Force", category: "science", image: "/assets/simulations/lorentz-force.png", desc: "The combination of electric and magnetic force on a point charge due to electromagnetic fields." },
    { id: "magnetic-field", title: "Magnetic Field", category: "science", image: "/assets/simulations/magnetic-field.png", desc: "A vector field that describes the magnetic influence on moving electric charges, electric currents, and magnetic materials." },
    { id: "mass", title: "Mass", category: "science", image: "/assets/simulations/mass.png", desc: "A measure of the amount of matter in an object, determining its resistance to acceleration when a force is applied." },
    { id: "momentum", title: "Momentum", category: "science", image: "/assets/simulations/momentum.png", desc: "The product of an object's mass and velocity, representing the quantity of motion." },
    { id: "newtons-laws-of-motion", title: "Newton's Laws of Motion", category: "science", image: "/assets/simulations/newtons-laws-of-motion.png", desc: "Three physical laws that laid the foundation for classical mechanics, describing the relationship between a body and the forces acting upon it." },
    { id: "ohms-law", title: "Ohm's Law", category: "science", image: "/assets/simulations/ohms-law.png", desc: "The law stating that the current through a conductor between two points is directly proportional to the voltage across the two points." },
    { id: "optics", title: "Optics", category: "science", image: "/assets/simulations/optics.png", desc: "The branch of physics that studies the behavior and properties of light, including its interactions with matter." },
    { id: "particle-physics", title: "Particle Physics", category: "science", image: "/assets/simulations/particle-physics.png", desc: "The branch of physics that studies the nature of particles that constitute matter and radiation." },
    { id: "photoelectric-effect", title: "Photoelectric Effect", category: "science", image: "/assets/simulations/photoelectric-effect.png", desc: "The emission of electrons when electromagnetic radiation hits a material, demonstrating the particle nature of light." },
    { id: "photon", title: "Photon", category: "science", image: "/assets/simulations/photon.png", desc: "A particle representing a quantum of light or other electromagnetic radiation." },
    { id: "photovoltaic-effect", title: "Photovoltaic Effect", category: "science", image: "/assets/simulations/photovoltaic-effect.png", desc: "The generation of voltage and electric current in a material upon exposure to light." },
    { id: "plancks-constant", title: "Planck's Constant", category: "science", image: "/assets/simulations/plancks-constant.png", desc: "A fundamental physical constant denoted h, relating the energy of a photon to its frequency." },
    { id: "plasma", title: "Plasma", category: "science", image: "/assets/simulations/plasma.png", desc: "One of the four fundamental states of matter, consisting of ionized gas with free electrons and ions." },
    { id: "potential-energy", title: "Potential Energy", category: "science", image: "/assets/simulations/potential-energy.png", desc: "The energy held by an object because of its position relative to other objects, stresses within itself, or its electric charge." },
    { id: "pressure", title: "Pressure", category: "science", image: "/assets/simulations/pressure.png", desc: "The force applied perpendicular to the surface of an object per unit area over which that force is distributed." },
    { id: "quantum-entanglement", title: "Quantum Entanglement", category: "science", image: "/assets/simulations/quantum-entanglement.png", desc: "A physical phenomenon occurring when pairs or groups of particles interact such that the quantum state of each particle cannot be described independently." },
    { id: "quantum-field-theory", title: "Quantum Field Theory", category: "science", image: "/assets/simulations/quantum-field-theory.png", desc: "The theoretical framework for constructing quantum mechanical models of subatomic particles in particle physics." },
    { id: "quantum-mechanics", title: "Quantum Mechanics", category: "science", image: "/assets/simulations/quantum-mechanics.png", desc: "A fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles." },
    { id: "radioactivity", title: "Radioactivity", category: "science", image: "/assets/simulations/radioactivity.png", desc: "The spontaneous emission of radiation from the nucleus of an unstable atom." },
    { id: "refraction", title: "Refraction", category: "science", image: "/assets/simulations/refraction.png", desc: "The change in direction of a wave passing from one medium to another caused by its change in speed." },
    { id: "relativity", title: "Relativity", category: "science", image: "/assets/simulations/relativity.png", desc: "The physical theory regarding the relationship between space and time, developed by Albert Einstein." },
    { id: "resistance", title: "Resistance", category: "science", image: "/assets/simulations/resistance.png", desc: "A measure of the opposition to current flow in an electrical circuit, measured in ohms." },
    { id: "schrodinger-equation", title: "Schrodinger Equation", category: "science", image: "/assets/simulations/schrodinger-equation.png", desc: "A linear partial differential equation that governs the wave function of a quantum-mechanical system." },
    { id: "simple-harmonic-motion", title: "Simple Harmonic Motion", category: "science", image: "/assets/simulations/simple-harmonic-motion.png", desc: "A type of periodic motion where the restoring force is directly proportional to the displacement." },
    { id: "sound-wave", title: "Sound Wave", category: "science", image: "/assets/simulations/sound-wave.png", desc: "A longitudinal wave that propagates through a medium by the vibration of particles in the direction of travel." },
    { id: "special-relativity", title: "Special Relativity", category: "science", image: "/assets/simulations/special-relativity.png", desc: "The physical theory regarding the relationship between space and time in the absence of gravity, based on two postulates." },
    { id: "speed-of-light", title: "Speed of Light", category: "science", image: "/assets/simulations/speed-of-light.png", desc: "The universal physical constant c, exactly 299,792,458 meters per second, the maximum speed at which all energy, matter, and information can travel." },
    { id: "standard-model", title: "Standard Model", category: "science", image: "/assets/simulations/standard-model.png", desc: "The theory of particle physics describing three of the four known fundamental forces and classifying all known elementary particles." },
    { id: "string-theory", title: "String Theory", category: "science", image: "/assets/simulations/string-theory.png", desc: "A theoretical framework in which point-like particles are replaced by one-dimensional objects called strings." },
    { id: "superconductivity", title: "Superconductivity", category: "science", image: "/assets/simulations/superconductivity.png", desc: "A phenomenon of exactly zero electrical resistance and expulsion of magnetic fields occurring in certain materials when cooled below a critical temperature." },
    { id: "superposition", title: "Superposition", category: "science", image: "/assets/simulations/superposition.png", desc: "The principle that for all linear systems, the net response caused by two or more stimuli is the sum of the responses caused by each stimulus individually." },
    { id: "thermal-conductivity", title: "Thermal Conductivity", category: "science", image: "/assets/simulations/thermal-conductivity.png", desc: "The property of a material to conduct heat, measured in watts per meter-kelvin." },
    { id: "thermodynamics", title: "Thermodynamics", category: "science", image: "/assets/simulations/thermodynamics.png", desc: "The branch of physics dealing with heat and its relation to other forms of energy and work." },
    { id: "torque", title: "Torque", category: "science", image: "/assets/simulations/torque.png", desc: "The rotational equivalent of linear force, representing the tendency of a force to rotate an object about an axis." },
    { id: "uncertainty-principle", title: "Uncertainty Principle", category: "science", image: "/assets/simulations/uncertainty-principle.png", desc: "The principle stating that the position and momentum of a particle cannot both be measured exactly at the same time." },
    { id: "velocity", title: "Velocity", category: "science", image: "/assets/simulations/velocity.png", desc: "The rate of change of an object's position with respect to a frame of reference, including both speed and direction." },
    { id: "wave-function", title: "Wave Function", category: "science", image: "/assets/simulations/wave-function.png", desc: "A mathematical description of the quantum state of an isolated quantum system." },
    { id: "wavelength", title: "Wavelength", category: "science", image: "/assets/simulations/wavelength.png", desc: "The distance between successive crests of a wave, especially points in a sound wave or electromagnetic wave." },
    { id: "work", title: "Work", category: "science", image: "/assets/simulations/work.png", desc: "The product of force and displacement in the direction of the force, representing energy transfer." },
    { id: "acid", title: "Acid", category: "science", image: "/assets/simulations/acid.png", desc: "A substance that donates protons (H+ ions) or accepts electrons, typically having a pH less than 7." },
    { id: "activation-energy", title: "Activation Energy", category: "science", image: "/assets/simulations/activation-energy.png", desc: "The minimum amount of extra energy required by a reacting molecule to get converted into a product." },
    { id: "alkali-metal", title: "Alkali Metal", category: "science", image: "/assets/simulations/alkali-metal.png", desc: "Any of the elements lithium, sodium, potassium, rubidium, cesium, and francium, occupying Group 1 of the periodic table." },
    { id: "alkaline-earth-metal", title: "Alkaline Earth Metal", category: "science", image: "/assets/simulations/alkaline-earth-metal.png", desc: "The six chemical elements in Group 2 of the periodic table: beryllium, magnesium, calcium, strontium, barium, and radium." },
    { id: "allotrope", title: "Allotrope", category: "science", image: "/assets/simulations/allotrope.png", desc: "Different structural modifications of an element, such as diamond and graphite for carbon." },
    { id: "anion", title: "Anion", category: "science", image: "/assets/simulations/anion.png", desc: "An ion with a negative electrical charge, formed when an atom gains one or more electrons." },
    { id: "aqueous-solution", title: "Aqueous Solution", category: "science", image: "/assets/simulations/aqueous-solution.png", desc: "A solution in which the solvent is water." },
    { id: "atomic-mass", title: "Atomic Mass", category: "science", image: "/assets/simulations/atomic-mass.png", desc: "The mass of an atom, typically expressed in atomic mass units (amu), approximately equal to the number of protons and neutrons." },
    { id: "atomic-number", title: "Atomic Number", category: "science", image: "/assets/simulations/atomic-number.png", desc: "The number of protons in the nucleus of an atom, determining the chemical element." },
    { id: "avogadros-number", title: "Avogadro's Number", category: "science", image: "/assets/simulations/avogadros-number.png", desc: "The number of constituent particles (usually atoms or molecules) in one mole of a substance, approximately 6.022 Ã 10Â²Â³." },
    { id: "base", title: "Base", category: "science", image: "/assets/simulations/base.png", desc: "A substance that can accept protons (H+ ions) or donate electrons, typically having a pH greater than 7." },
    { id: "bond-energy", title: "Bond Energy", category: "science", image: "/assets/simulations/bond-energy.png", desc: "The measure of bond strength in a chemical bond, defined as the amount of energy required to break one mole of bonds." },
    { id: "buffer-solution", title: "Buffer Solution", category: "science", image: "/assets/simulations/buffer-solution.png", desc: "An aqueous solution consisting of a mixture of a weak acid and its conjugate base, or vice versa, resisting pH change upon addition of small amounts of acid or base." },
    { id: "catalyst", title: "Catalyst", category: "science", image: "/assets/simulations/catalyst.png", desc: "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change." },
    { id: "cation", title: "Cation", category: "science", image: "/assets/simulations/cation.png", desc: "An ion with a positive electrical charge, formed when an atom loses one or more electrons." },
    { id: "chemical-equilibrium", title: "Chemical Equilibrium", category: "science", image: "/assets/simulations/chemical-equilibrium.png", desc: "A state in a chemical reaction where the concentrations of reactants and products remain constant over time." },
    { id: "chemical-kinetics", title: "Chemical Kinetics", category: "science", image: "/assets/simulations/chemical-kinetics.png", desc: "The branch of physical chemistry concerned with understanding the rates of chemical reactions." },
    { id: "covalent-bond", title: "Covalent Bond", category: "science", image: "/assets/simulations/covalent-bond.png", desc: "A chemical bond formed by the sharing of electron pairs between atoms." },
    { id: "crystal-lattice", title: "Crystal Lattice", category: "science", image: "/assets/simulations/crystal-lattice.png", desc: "The symmetrical three-dimensional arrangement of atoms, ions, or molecules inside a crystalline solid." },
    { id: "dipole-moment", title: "Dipole Moment", category: "science", image: "/assets/simulations/dipole-moment.png", desc: "A measure of the separation of positive and negative electrical charges within a molecule." },
    { id: "distillation", title: "Distillation", category: "science", image: "/assets/simulations/distillation.png", desc: "The process of separating components of a mixture based on differences in boiling points." },
    { id: "electrolysis", title: "Electrolysis", category: "science", image: "/assets/simulations/electrolysis.png", desc: "A technique that uses direct electric current to drive an otherwise non-spontaneous chemical reaction." },
    { id: "electronegativity", title: "Electronegativity", category: "science", image: "/assets/simulations/electronegativity.png", desc: "A measure of the tendency of an atom to attract a bonding pair of electrons." },
    { id: "electron-affinity", title: "Electron Affinity", category: "science", image: "/assets/simulations/electron-affinity.png", desc: "The amount of energy released when an electron is added to a neutral atom to form a negative ion." },
    { id: "electron-configuration", title: "Electron Configuration", category: "science", image: "/assets/simulations/electron-configuration.png", desc: "The distribution of electrons of an atom or molecule in atomic or molecular orbitals." },
    { id: "element", title: "Element", category: "science", image: "/assets/simulations/element.png", desc: "A pure substance consisting only of atoms that all have the same numbers of protons in their atomic nuclei." },
    { id: "empirical-formula", title: "Empirical Formula", category: "science", image: "/assets/simulations/empirical-formula.png", desc: "A chemical formula showing the simplest whole-number ratio of atoms in a compound." },
    { id: "endothermic", title: "Endothermic", category: "science", image: "/assets/simulations/endothermic.png", desc: "A chemical reaction that absorbs heat energy from its surroundings." },
    { id: "enthalpy", title: "Enthalpy", category: "science", image: "/assets/simulations/enthalpy.png", desc: "A thermodynamic quantity equivalent to the total heat content of a system, equal to the internal energy plus the product of pressure and volume." },
    { id: "entropy-2", title: "Entropy", category: "science", image: "/assets/simulations/entropy.png", desc: "A measure of the disorder or randomness in a system, increasing in spontaneous processes." },
    { id: "exothermic", title: "Exothermic", category: "science", image: "/assets/simulations/exothermic.png", desc: "A chemical reaction that releases heat energy to its surroundings." },
    { id: "free-radical", title: "Free Radical", category: "science", image: "/assets/simulations/free-radical.png", desc: "An atom, molecule, or ion that has unpaired valence electrons, making it highly reactive." },
    { id: "functional-group", title: "Functional Group", category: "science", image: "/assets/simulations/functional-group.png", desc: "A specific group of atoms within a molecule that is responsible for the characteristic chemical reactions of that molecule." },
    { id: "gas-chromatography", title: "Gas Chromatography", category: "science", image: "/assets/simulations/gas-chromatography.png", desc: "A common type of chromatography used in analytical chemistry for separating and analyzing compounds that can be vaporized." },
    { id: "half-reaction", title: "Half-Reaction", category: "science", image: "/assets/simulations/half-reaction.png", desc: "Either the oxidation or reduction reaction component of a redox reaction." },
    { id: "halogen", title: "Halogen", category: "science", image: "/assets/simulations/halogen.png", desc: "Any of the elements fluorine, chlorine, bromine, iodine, and astatine, occupying Group 17 of the periodic table." },
    { id: "heterogeneous-mixture", title: "Heterogeneous Mixture", category: "science", image: "/assets/simulations/heterogeneous-mixture.png", desc: "A mixture in which the composition is not uniform throughout the mixture." },
    { id: "homogeneous-mixture", title: "Homogeneous Mixture", category: "science", image: "/assets/simulations/homogeneous-mixture.png", desc: "A mixture in which the composition is uniform throughout the mixture, also called a solution." },
    { id: "hydrogen-bond", title: "Hydrogen Bond", category: "science", image: "/assets/simulations/hydrogen-bond.png", desc: "A weak bond between two molecules resulting from an electrostatic attraction between a proton in one molecule and an electronegative atom in the other." },
    { id: "hydrophobic", title: "Hydrophobic", category: "science", image: "/assets/simulations/hydrophobic.png", desc: "Tending to repel or fail to mix with water, literally 'water-fearing'." },
    { id: "ionic-bond", title: "Ionic Bond", category: "science", image: "/assets/simulations/ionic-bond.png", desc: "A chemical bond formed through the electrostatic attraction between oppositely charged ions." },
    { id: "ionization-energy", title: "Ionization Energy", category: "science", image: "/assets/simulations/ionization-energy.png", desc: "The minimum amount of energy required to remove an electron from an atom or molecule in the gaseous state." },
    { id: "isomer", title: "Isomer", category: "science", image: "/assets/simulations/isomer.png", desc: "Molecules with the same molecular formula but different structural arrangements of atoms." },
    { id: "lewis-structure", title: "Lewis Structure", category: "science", image: "/assets/simulations/lewis-structure.png", desc: "A diagram showing the bonding between atoms of a molecule and the lone pairs of electrons that may exist." },
    { id: "mass-spectrometry", title: "Mass Spectrometry", category: "science", image: "/assets/simulations/mass-spectrometry.png", desc: "An analytical technique that ionizes chemical species and sorts the resulting ions based on their mass-to-charge ratio." },
    { id: "metallic-bond", title: "Metallic Bond", category: "science", image: "/assets/simulations/metallic-bond.png", desc: "The force of attraction between valence electrons and the metal atoms, holding the metal together." },
    { id: "molar-mass", title: "Molar Mass", category: "science", image: "/assets/simulations/molar-mass.png", desc: "The mass of a given chemical element or chemical compound divided by the amount of substance, measured in g/mol." },
    { id: "molarity", title: "Molarity", category: "science", image: "/assets/simulations/molarity.png", desc: "The concentration of a solution, defined as the number of moles of solute per liter of solution." },
    { id: "mole", title: "Mole", category: "science", image: "/assets/simulations/mole.png", desc: "The unit of amount of substance in the International System of Units, defined as exactly 6.02214076 Ã 10Â²Â³ elementary entities." },
    { id: "molecular-formula", title: "Molecular Formula", category: "science", image: "/assets/simulations/molecular-formula.png", desc: "A chemical formula that gives the total number of atoms of each element in a molecule." },
    { id: "noble-gas", title: "Noble Gas", category: "science", image: "/assets/simulations/noble-gas.png", desc: "Any of the gaseous elements helium, neon, argon, krypton, xenon, and radon, occupying Group 18 of the periodic table." },
    { id: "nuclear-magnetic-resonance", title: "Nuclear Magnetic Resonance", category: "science", image: "/assets/simulations/nuclear-magnetic-resonance.png", desc: "A physical phenomenon in which nuclei in a magnetic field absorb and re-emit electromagnetic radiation, used in spectroscopy." },
    { id: "nucleophile", title: "Nucleophile", category: "science", image: "/assets/simulations/nucleophile.png", desc: "A chemical species that donates an electron pair to form a chemical bond, literally 'nucleus-loving'." },
    { id: "octet-rule", title: "Octet Rule", category: "science", image: "/assets/simulations/octet-rule.png", desc: "The principle that atoms tend to combine in such a way that they each have eight electrons in their valence shell." },
    { id: "organic-chemistry", title: "Organic Chemistry", category: "science", image: "/assets/simulations/organic-chemistry.png", desc: "The branch of chemistry that studies the structure, properties, and reactions of organic compounds containing carbon." },
    { id: "oxidation", title: "Oxidation", category: "science", image: "/assets/simulations/oxidation.png", desc: "The loss of electrons or an increase in the oxidation state of an atom, ion, or molecule." },
    { id: "oxidation-state", title: "Oxidation State", category: "science", image: "/assets/simulations/oxidation-state.png", desc: "The degree of oxidation of an atom in a chemical compound, representing the hypothetical charge if all bonds were ionic." },
    { id: "periodic-table", title: "Periodic Table", category: "science", image: "/assets/simulations/periodic-table.png", desc: "A tabular arrangement of chemical elements, ordered by atomic number, electron configuration, and recurring chemical properties." },
    { id: "ph", title: "pH", category: "science", image: "/assets/simulations/ph.png", desc: "A scale used to specify the acidity or basicity of an aqueous solution, ranging from 0 (acidic) to 14 (basic)." },
    { id: "photochemistry", title: "Photochemistry", category: "science", image: "/assets/simulations/photochemistry.png", desc: "The branch of chemistry concerned with the chemical effects of light." },
    { id: "polar-molecule", title: "Polar Molecule", category: "science", image: "/assets/simulations/polar-molecule.png", desc: "A molecule in which the distribution of electrical charge is not symmetric, resulting in a dipole moment." },
    { id: "polymer", title: "Polymer", category: "science", image: "/assets/simulations/polymer.png", desc: "A large molecule composed of many repeated subunits, called monomers." },
    { id: "precipitate", title: "Precipitate", category: "science", image: "/assets/simulations/precipitate.png", desc: "A solid that forms and settles out of a liquid mixture during a chemical reaction." },
    { id: "radioisotope", title: "Radioisotope", category: "science", image: "/assets/simulations/radioisotope.png", desc: "An atom that has excess nuclear energy, making it unstable and prone to radioactive decay." },
    { id: "redox-reaction", title: "Redox Reaction", category: "science", image: "/assets/simulations/redox-reaction.png", desc: "A type of chemical reaction that involves a transfer of electrons between two species, comprising oxidation and reduction." },
    { id: "reduction", title: "Reduction", category: "science", image: "/assets/simulations/reduction.png", desc: "The gain of electrons or a decrease in the oxidation state of an atom, ion, or molecule." },
    { id: "resonance", title: "Resonance", category: "science", image: "/assets/simulations/resonance.png", desc: "The use of two or more Lewis structures to represent a particular molecule, where the actual electronic structure is an average." },
    { id: "solubility", title: "Solubility", category: "science", image: "/assets/simulations/solubility.png", desc: "The property of a substance (solute) to dissolve in a given solvent to form a homogeneous solution." },
    { id: "solute", title: "Solute", category: "science", image: "/assets/simulations/solute.png", desc: "A substance dissolved in a solvent to make a solution." },
    { id: "solution", title: "Solution", category: "science", image: "/assets/simulations/solution.png", desc: "A homogeneous mixture composed of two or more substances." },
    { id: "solvent", title: "Solvent", category: "science", image: "/assets/simulations/solvent.png", desc: "The component of a solution that is present in the greatest amount, dissolving the solute." },
    { id: "spectroscopy", title: "Spectroscopy", category: "science", image: "/assets/simulations/spectroscopy.png", desc: "The study of the interaction between matter and electromagnetic radiation as a function of wavelength or frequency." },
    { id: "stoichiometry", title: "Stoichiometry", category: "science", image: "/assets/simulations/stoichiometry.png", desc: "The calculation of reactants and products in chemical reactions, based on the conservation of mass." },
    { id: "titration", title: "Titration", category: "science", image: "/assets/simulations/titration.png", desc: "A laboratory method used to determine the concentration of an identified analyte by reacting it with a reagent of known concentration." },
    { id: "transition-metal", title: "Transition Metal", category: "science", image: "/assets/simulations/transition-metal.png", desc: "An element whose atom has a partially filled d sub-shell, or which can give rise to cations with an incomplete d sub-shell." },
    { id: "valence-electrons", title: "Valence Electrons", category: "science", image: "/assets/simulations/valence-electrons.png", desc: "The outer shell electrons associated with an atom that can participate in the formation of a chemical bond." },
    { id: "vsepr-theory", title: "VSEPR Theory", category: "science", image: "/assets/simulations/vsepr-theory.png", desc: "Valence Shell Electron Pair Repulsion theory, used to predict the geometry of individual molecules from the number of electron pairs surrounding their central atoms." },
    { id: "allele", title: "Allele", category: "science", image: "/assets/simulations/allele.png", desc: "One of two or more versions of a gene at a given locus on a chromosome." },
    { id: "amino-acid", title: "Amino Acid", category: "science", image: "/assets/simulations/amino-acid.png", desc: "Organic compounds that serve as the building blocks of proteins, containing both amino and carboxyl functional groups." },
    { id: "anatomy", title: "Anatomy", category: "science", image: "/assets/simulations/anatomy.png", desc: "The branch of biology concerned with the study of the structure of organisms and their parts." },
    { id: "antibody", title: "Antibody", category: "science", image: "/assets/simulations/antibody.png", desc: "A protein produced by the immune system in response to the presence of a specific antigen." },
    { id: "antigen", title: "Antigen", category: "science", image: "/assets/simulations/antigen.png", desc: "A substance that induces an immune response, especially the production of antibodies." },
    { id: "asexual-reproduction", title: "Asexual Reproduction", category: "science", image: "/assets/simulations/asexual-reproduction.png", desc: "A mode of reproduction by which offspring arise from a single organism without the fusion of gametes." },
    { id: "atp", title: "ATP", category: "science", image: "/assets/simulations/atp.png", desc: "Adenosine triphosphate, the principal molecule for storing and transferring energy in cells." },
    { id: "autotroph", title: "Autotroph", category: "science", image: "/assets/simulations/autotroph.png", desc: "An organism that produces its own food from inorganic substances using light or chemical energy." },
    { id: "bacteriophage", title: "Bacteriophage", category: "science", image: "/assets/simulations/bacteriophage.png", desc: "A virus that infects and replicates within bacteria." },
    { id: "binomial-nomenclature", title: "Binomial Nomenclature", category: "science", image: "/assets/simulations/binomial-nomenclature.png", desc: "A formal system of naming species of living things by giving each a name composed of two parts: genus and species." },
    { id: "biome", title: "Biome", category: "science", image: "/assets/simulations/biome.png", desc: "A large community of vegetation and wildlife adapted to a specific climate, such as a desert or tropical rainforest." },
    { id: "biosphere", title: "Biosphere", category: "science", image: "/assets/simulations/biosphere.png", desc: "The global ecological system integrating all living beings and their relationships, including their interaction with the lithosphere, hydrosphere, and atmosphere." },
    { id: "cell", title: "Cell", category: "science", image: "/assets/simulations/cell.png", desc: "The basic structural, functional, and biological unit of all known living organisms." },
    { id: "cell-membrane", title: "Cell Membrane", category: "science", image: "/assets/simulations/cell-membrane.png", desc: "The semipermeable membrane surrounding the cytoplasm of a cell, regulating what enters and exits." },
    { id: "cellular-respiration", title: "Cellular Respiration", category: "science", image: "/assets/simulations/cellular-respiration.png", desc: "A set of metabolic reactions and processes that take place in the cells of organisms to convert biochemical energy from nutrients into ATP." },
    { id: "centriole", title: "Centriole", category: "science", image: "/assets/simulations/centriole.png", desc: "A cylindrical organelle composed of microtubules, involved in cell division in animal cells." },
    { id: "chloroplast", title: "Chloroplast", category: "science", image: "/assets/simulations/chloroplast.png", desc: "An organelle found in plant and algal cells that conducts photosynthesis, containing chlorophyll." },
    { id: "chromatid", title: "Chromatid", category: "science", image: "/assets/simulations/chromatid.png", desc: "One of two identical halves of a replicated chromosome, joined at the centromere." },
    { id: "chromosome", title: "Chromosome", category: "science", image: "/assets/simulations/chromosome.png", desc: "A thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information." },
    { id: "cilia", title: "Cilia", category: "science", image: "/assets/simulations/cilia.png", desc: "Short, hair-like projections on the surface of some cells, used for movement or sensing." },
    { id: "codon", title: "Codon", category: "science", image: "/assets/simulations/codon.png", desc: "A sequence of three nucleotides that together form a unit of genetic code in DNA or RNA." },
    { id: "commensalism", title: "Commensalism", category: "science", image: "/assets/simulations/commensalism.png", desc: "A long-term biological interaction in which one species benefits while the other is unaffected." },
    { id: "community", title: "Community", category: "science", image: "/assets/simulations/community.png", desc: "An interacting group of various species in a common location." },
    { id: "cytokinesis", title: "Cytokinesis", category: "science", image: "/assets/simulations/cytokinesis.png", desc: "The physical process of cell division, which divides the cytoplasm of a parental cell into two daughter cells." },
    { id: "cytoplasm", title: "Cytoplasm", category: "science", image: "/assets/simulations/cytoplasm.png", desc: "The material or protoplasm within a living cell, excluding the nucleus." },
    { id: "cytoskeleton", title: "Cytoskeleton", category: "science", image: "/assets/simulations/cytoskeleton.png", desc: "A network of fibers composed of proteins that gives shape and structure to a cell." },
    { id: "diploid", title: "Diploid", category: "science", image: "/assets/simulations/diploid.png", desc: "A cell or organism having two complete sets of chromosomes, one from each parent." },
    { id: "dna", title: "DNA", category: "science", image: "/assets/simulations/dna.png", desc: "Deoxyribonucleic acid, the molecule carrying genetic instructions for development, functioning, growth, and reproduction." },
    { id: "dna-replication", title: "DNA Replication", category: "science", image: "/assets/simulations/dna-replication.png", desc: "The biological process of producing two identical replicas of DNA from one original DNA molecule." },
    { id: "dominant-trait", title: "Dominant Trait", category: "science", image: "/assets/simulations/dominant-trait.png", desc: "A genetic trait that is expressed when at least one copy of the dominant allele is present." },
    { id: "ecosystem", title: "Ecosystem", category: "science", image: "/assets/simulations/ecosystem.png", desc: "A biological community of interacting organisms and their physical environment." },
    { id: "endocytosis", title: "Endocytosis", category: "science", image: "/assets/simulations/endocytosis.png", desc: "The process by which cells absorb molecules by engulfing them with the cell membrane." },
    { id: "endoplasmic-reticulum", title: "Endoplasmic Reticulum", category: "science", image: "/assets/simulations/endoplasmic-reticulum.png", desc: "A network of membranous tubules within the cytoplasm of a eukaryotic cell, involved in protein and lipid synthesis." },
    { id: "endosymbiosis", title: "Endosymbiosis", category: "science", image: "/assets/simulations/endosymbiosis.png", desc: "The theory that mitochondria and chloroplasts originated as free-living prokaryotes that were engulfed by larger cells." },
    { id: "enzyme", title: "Enzyme", category: "science", image: "/assets/simulations/enzyme.png", desc: "A biological catalyst that accelerates chemical reactions in living organisms without being consumed." },
    { id: "epigenetics", title: "Epigenetics", category: "science", image: "/assets/simulations/epigenetics.png", desc: "The study of heritable changes in gene expression that do not involve changes to the underlying DNA sequence." },
    { id: "eukaryote", title: "Eukaryote", category: "science", image: "/assets/simulations/eukaryote.png", desc: "An organism whose cells contain a nucleus and other organelles enclosed within membranes." },
    { id: "evolution", title: "Evolution", category: "science", image: "/assets/simulations/evolution.png", desc: "The change in the heritable characteristics of biological populations over successive generations." },
    { id: "exocytosis", title: "Exocytosis", category: "science", image: "/assets/simulations/exocytosis.png", desc: "The process by which a cell transports secretory vesicles out of the cell membrane." },
    { id: "fermentation", title: "Fermentation", category: "science", image: "/assets/simulations/fermentation.png", desc: "A metabolic process that produces chemical changes in organic substrates through the action of enzymes, often in the absence of oxygen." },
    { id: "flagellum", title: "Flagellum", category: "science", image: "/assets/simulations/flagellum.png", desc: "A lash-like appendage that protrudes from the cell body of certain cells, used for locomotion." },
    { id: "gene", title: "Gene", category: "science", image: "/assets/simulations/gene.png", desc: "A sequence of nucleotides in DNA or RNA that codes for a functional molecule, usually a protein." },
    { id: "gene-expression", title: "Gene Expression", category: "science", image: "/assets/simulations/gene-expression.png", desc: "The process by which information from a gene is used in the synthesis of a functional gene product." },
    { id: "genetic-drift", title: "Genetic Drift", category: "science", image: "/assets/simulations/genetic-drift.png", desc: "A mechanism of evolution referring to random fluctuations in the frequencies of alleles from one generation to the next." },
    { id: "genetics", title: "Genetics", category: "science", image: "/assets/simulations/genetics.png", desc: "The branch of biology concerned with the study of genes, genetic variation, and heredity in organisms." },
    { id: "genome", title: "Genome", category: "science", image: "/assets/simulations/genome.png", desc: "The complete set of genetic information in an organism, including all of its genes." },
    { id: "genotype", title: "Genotype", category: "science", image: "/assets/simulations/genotype.png", desc: "The genetic constitution of an individual organism, as distinct from its phenotype." },
    { id: "golgi-apparatus", title: "Golgi Apparatus", category: "science", image: "/assets/simulations/golgi-apparatus.png", desc: "An organelle in eukaryotic cells responsible for packaging, modifying, and sorting proteins and lipids." },
    { id: "haploid", title: "Haploid", category: "science", image: "/assets/simulations/haploid.png", desc: "A cell or organism having a single set of unpaired chromosomes." },
    { id: "heterotroph", title: "Heterotroph", category: "science", image: "/assets/simulations/heterotroph.png", desc: "An organism that cannot produce its own food and instead obtains nutrition from other sources of organic carbon." },
    { id: "homeostasis", title: "Homeostasis", category: "science", image: "/assets/simulations/homeostasis.png", desc: "The tendency of an organism or cell to regulate its internal conditions to maintain a stable equilibrium." },
    { id: "homologous-chromosomes", title: "Homologous Chromosomes", category: "science", image: "/assets/simulations/homologous-chromosomes.png", desc: "A pair of chromosomes, one from each parent, that have the same genes in the same positions." },
    { id: "immunology", title: "Immunology", category: "science", image: "/assets/simulations/immunology.png", desc: "The branch of biology and medicine concerned with the study of the immune system." },
    { id: "lysosome", title: "Lysosome", category: "science", image: "/assets/simulations/lysosome.png", desc: "A membrane-bound organelle containing digestive enzymes, responsible for breaking down waste materials." },
    { id: "meiosis", title: "Meiosis", category: "science", image: "/assets/simulations/meiosis.png", desc: "A type of cell division that reduces the chromosome number by half, creating four haploid cells, each genetically distinct." },
    { id: "metabolism", title: "Metabolism", category: "science", image: "/assets/simulations/metabolism.png", desc: "The set of life-sustaining chemical reactions in organisms, divided into catabolism and anabolism." },
    { id: "mitochondria", title: "Mitochondria", category: "science", image: "/assets/simulations/mitochondria.png", desc: "Double-membrane-bound organelles found in most eukaryotic cells, generating most of the cell's supply of ATP." },
    { id: "mitosis", title: "Mitosis", category: "science", image: "/assets/simulations/mitosis.png", desc: "A process of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus." },
    { id: "mutualism", title: "Mutualism", category: "science", image: "/assets/simulations/mutualism.png", desc: "A type of biological interaction where both species involved benefit from the relationship." },
    { id: "mutation", title: "Mutation", category: "science", image: "/assets/simulations/mutation.png", desc: "A permanent alteration in the nucleotide sequence of the genome of an organism." },
    { id: "natural-selection", title: "Natural Selection", category: "science", image: "/assets/simulations/natural-selection.png", desc: "The differential survival and reproduction of individuals due to differences in phenotype, a key mechanism of evolution." },
    { id: "nucleotide", title: "Nucleotide", category: "science", image: "/assets/simulations/nucleotide.png", desc: "The basic building block of nucleic acids, consisting of a sugar, a phosphate group, and a nitrogenous base." },
    { id: "nucleus", title: "Nucleus", category: "science", image: "/assets/simulations/nucleus.png", desc: "A membrane-bound organelle in eukaryotic cells that contains the cell's genetic material." },
    { id: "organelle", title: "Organelle", category: "science", image: "/assets/simulations/organelle.png", desc: "A specialized subunit within a cell that has a specific function, usually separately enclosed within its own lipid bilayer." },
    { id: "osmosis", title: "Osmosis", category: "science", image: "/assets/simulations/osmosis.png", desc: "The spontaneous net movement of solvent molecules through a selectively permeable membrane into a region of higher solute concentration." },
    { id: "parasitism", title: "Parasitism", category: "science", image: "/assets/simulations/parasitism.png", desc: "A non-mutual symbiotic relationship between species, where one organism benefits at the expense of the other." },
    { id: "pathogen", title: "Pathogen", category: "science", image: "/assets/simulations/pathogen.png", desc: "A biological agent that causes disease or illness to its host." },
    { id: "phenotype", title: "Phenotype", category: "science", image: "/assets/simulations/phenotype.png", desc: "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment." },
    { id: "photosynthesis", title: "Photosynthesis", category: "science", image: "/assets/simulations/photosynthesis.png", desc: "The process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water." },
    { id: "plasmid", title: "Plasmid", category: "science", image: "/assets/simulations/plasmid.png", desc: "A small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA." },
    { id: "prokaryote", title: "Prokaryote", category: "science", image: "/assets/simulations/prokaryote.png", desc: "A unicellular organism that lacks a membrane-bound nucleus, mitochondria, or any other membrane-bound organelle." },
    { id: "protein", title: "Protein", category: "science", image: "/assets/simulations/protein.png", desc: "Large biomolecules consisting of one or more long chains of amino acid residues, performing a vast array of functions." },
    { id: "punnett-square", title: "Punnett Square", category: "science", image: "/assets/simulations/punnett-square.png", desc: "A diagram used to predict the genotype and phenotype combinations of a genetic cross or breeding experiment." },
    { id: "recessive-trait", title: "Recessive Trait", category: "science", image: "/assets/simulations/recessive-trait.png", desc: "A genetic trait that is only expressed when two copies of the recessive allele are present." },
    { id: "ribosome", title: "Ribosome", category: "science", image: "/assets/simulations/ribosome.png", desc: "A complex molecular machine found within all living cells that serves as the site of biological protein synthesis." },
    { id: "rna", title: "RNA", category: "science", image: "/assets/simulations/rna.png", desc: "Ribonucleic acid, a polymeric molecule essential in various biological roles in coding, decoding, regulation, and expression of genes." },
    { id: "speciation", title: "Speciation", category: "science", image: "/assets/simulations/speciation.png", desc: "The evolutionary process by which biological populations evolve to become distinct species." },
    { id: "symbiosis", title: "Symbiosis", category: "science", image: "/assets/simulations/symbiosis.png", desc: "Any type of close and long-term biological interaction between two different biological organisms." },
    { id: "taxonomy", title: "Taxonomy", category: "science", image: "/assets/simulations/taxonomy.png", desc: "The science of naming, defining, and classifying groups of biological organisms on the basis of shared characteristics." },
    { id: "transcription", title: "Transcription", category: "science", image: "/assets/simulations/transcription.png", desc: "The process of making an RNA copy of a gene sequence, the first step in gene expression." },
    { id: "translation", title: "Translation", category: "science", image: "/assets/simulations/translation.png", desc: "The process in which ribosomes synthesize proteins using the mRNA template produced during transcription." },
    { id: "trophic-level", title: "Trophic Level", category: "science", image: "/assets/simulations/trophic-level.png", desc: "The position an organism occupies in a food chain, such as primary producer, herbivore, or carnivore." },
    { id: "vacuole", title: "Vacuole", category: "science", image: "/assets/simulations/vacuole.png", desc: "A membrane-bound organelle that stores substances and maintains turgor pressure in plant cells." },
    { id: "virus", title: "Virus", category: "science", image: "/assets/simulations/virus.png", desc: "A small infectious agent that replicates only inside the living cells of an organism, consisting of genetic material within a protein coat." },
    { id: "zygote", title: "Zygote", category: "science", image: "/assets/simulations/zygote.png", desc: "A eukaryotic cell formed by a fertilization event between two gametes, containing the genetic material of both parents." },
    { id: "asteroid", title: "Asteroid", category: "science", image: "/assets/simulations/asteroid.png", desc: "A small rocky body orbiting the Sun, typically found in the asteroid belt between Mars and Jupiter." },
    { id: "asthenosphere", title: "Asthenosphere", category: "science", image: "/assets/simulations/asthenosphere.png", desc: "The highly viscous, mechanically weak, and ductile region of the upper mantle of the Earth." },
    { id: "atmosphere", title: "Atmosphere", category: "science", image: "/assets/simulations/atmosphere.png", desc: "The layer of gases surrounding a planet, retained by the planet's gravity." },
    { id: "big-bang-theory", title: "Big Bang Theory", category: "science", image: "/assets/simulations/big-bang-theory.png", desc: "The prevailing cosmological model describing the early development of the universe from an extremely hot, dense state." },
    { id: "biogeochemical-cycle", title: "Biogeochemical Cycle", category: "science", image: "/assets/simulations/biogeochemical-cycle.png", desc: "The pathway by which a chemical substance moves through biotic and abiotic compartments of Earth." },
    { id: "comet", title: "Comet", category: "science", image: "/assets/simulations/comet.png", desc: "An icy small body that, when passing close to the Sun, warms and begins to release gases, forming a visible atmosphere or tail." },
    { id: "continental-drift", title: "Continental Drift", category: "science", image: "/assets/simulations/continental-drift.png", desc: "The theory that Earth's continents have moved over geologic time relative to each other, eventually forming the current configuration." },
    { id: "coriolis-effect", title: "Coriolis Effect", category: "science", image: "/assets/simulations/coriolis-effect.png", desc: "The apparent deflection of moving objects when viewed from a rotating reference frame, affecting global wind patterns." },
    { id: "cosmology", title: "Cosmology", category: "science", image: "/assets/simulations/cosmology.png", desc: "The study of the origin, evolution, and eventual fate of the universe." },
    { id: "crust", title: "Crust", category: "science", image: "/assets/simulations/crust.png", desc: "The outermost solid shell of a rocky planet or natural satellite, chemically distinct from the underlying mantle." },
    { id: "doppler-shift", title: "Doppler Shift", category: "science", image: "/assets/simulations/doppler-shift.png", desc: "The change in wavelength of light or sound waves due to the relative motion between the source and observer." },
    { id: "earthquake", title: "Earthquake", category: "science", image: "/assets/simulations/earthquake.png", desc: "The shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere." },
    { id: "eclipse", title: "Eclipse", category: "science", image: "/assets/simulations/eclipse.png", desc: "An astronomical event that occurs when an astronomical object is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer." },
    { id: "el-ni-o", title: "El NiÃ±o", category: "science", image: "/assets/simulations/el-ni-o.png", desc: "A climate pattern describing the unusual warming of surface waters in the eastern tropical Pacific Ocean." },
    { id: "erosion", title: "Erosion", category: "science", image: "/assets/simulations/erosion.png", desc: "The action of surface processes that remove soil, rock, or dissolved material from one location and transport it to another." },
    { id: "exoplanet", title: "Exoplanet", category: "science", image: "/assets/simulations/exoplanet.png", desc: "A planet that orbits a star outside our solar system." },
    { id: "fault", title: "Fault", category: "science", image: "/assets/simulations/fault.png", desc: "A fracture or zone of fractures between two blocks of rock, along which movement has occurred." },
    { id: "fossil", title: "Fossil", category: "science", image: "/assets/simulations/fossil.png", desc: "The preserved remains, impression, or trace of any once-living thing from a past geological age." },
    { id: "galaxy", title: "Galaxy", category: "science", image: "/assets/simulations/galaxy.png", desc: "A gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter." },
    { id: "geologic-time-scale", title: "Geologic Time Scale", category: "science", image: "/assets/simulations/geologic-time-scale.png", desc: "A system of chronological dating that relates geological strata to time, used to describe the timing and relationships of events in Earth's history." },
    { id: "greenhouse-effect", title: "Greenhouse Effect", category: "science", image: "/assets/simulations/greenhouse-effect.png", desc: "The process by which radiation from a planet's atmosphere warms the planet's surface to a temperature above what it would be without its atmosphere." },
    { id: "habitat", title: "Habitat", category: "science", image: "/assets/simulations/habitat.png", desc: "The natural home or environment of an animal, plant, or other organism." },
    { id: "hydrosphere", title: "Hydrosphere", category: "science", image: "/assets/simulations/hydrosphere.png", desc: "The combined mass of water found on, under, and over the surface of a planet." },
    { id: "igneous-rock", title: "Igneous Rock", category: "science", image: "/assets/simulations/igneous-rock.png", desc: "Rock formed through the cooling and solidification of magma or lava." },
    { id: "lithosphere", title: "Lithosphere", category: "science", image: "/assets/simulations/lithosphere.png", desc: "The rigid, outermost shell of the Earth, comprising the crust and upper mantle." },
    { id: "magma", title: "Magma", category: "science", image: "/assets/simulations/magma.png", desc: "Molten or semi-molten rock beneath the Earth's surface, from which igneous rocks are formed." },
    { id: "metamorphic-rock", title: "Metamorphic Rock", category: "science", image: "/assets/simulations/metamorphic-rock.png", desc: "Rock that has been changed from its original form by heat, pressure, or chemical processes." },
    { id: "meteorology", title: "Meteorology", category: "science", image: "/assets/simulations/meteorology.png", desc: "The interdisciplinary scientific study of the atmosphere focusing on weather forecasting." },
    { id: "milky-way", title: "Milky Way", category: "science", image: "/assets/simulations/milky-way.png", desc: "The barred spiral galaxy that contains our Solar System, with a diameter of about 100,000â200,000 light-years." },
    { id: "mineral", title: "Mineral", category: "science", image: "/assets/simulations/mineral.png", desc: "A naturally occurring chemical compound, usually of crystalline form and abiogenic in origin." },
    { id: "nebula", title: "Nebula", category: "science", image: "/assets/simulations/nebula.png", desc: "A giant cloud of dust and gas in space, often a region where new stars are beginning to form." },
    { id: "neutron-star", title: "Neutron Star", category: "science", image: "/assets/simulations/neutron-star.png", desc: "The collapsed core of a massive supergiant star, composed almost entirely of neutrons." },
    { id: "ocean-current", title: "Ocean Current", category: "science", image: "/assets/simulations/ocean-current.png", desc: "A continuous, directed movement of seawater generated by forces such as wind, Coriolis effect, and temperature gradients." },
    { id: "oceanography", title: "Oceanography", category: "science", image: "/assets/simulations/oceanography.png", desc: "The branch of Earth science that studies the ocean, including its physical and biological properties." },
    { id: "orbit", title: "Orbit", category: "science", image: "/assets/simulations/orbit.png", desc: "The curved path of a celestial object or spacecraft around a star, planet, or moon." },
    { id: "paleontology", title: "Paleontology", category: "science", image: "/assets/simulations/paleontology.png", desc: "The scientific study of life that existed prior to the start of the Holocene Epoch." },
    { id: "plate-tectonics", title: "Plate Tectonics", category: "science", image: "/assets/simulations/plate-tectonics.png", desc: "The scientific theory describing the large-scale motion of Earth's lithosphere, divided into tectonic plates." },
    { id: "redshift", title: "Redshift", category: "science", image: "/assets/simulations/redshift.png", desc: "A phenomenon where electromagnetic radiation from an object undergoes an increase in wavelength, indicating the object is moving away from the observer." },
    { id: "rock-cycle", title: "Rock Cycle", category: "science", image: "/assets/simulations/rock-cycle.png", desc: "The continuous process by which rocks are created, changed, destroyed, and formed again through geological processes." },
    { id: "sedimentary-rock", title: "Sedimentary Rock", category: "science", image: "/assets/simulations/sedimentary-rock.png", desc: "Rock formed by the accumulation or deposition of mineral or organic particles at Earth's surface." },
    { id: "seismology", title: "Seismology", category: "science", image: "/assets/simulations/seismology.png", desc: "The scientific study of earthquakes and the propagation of elastic waves through Earth." },
    { id: "solar-system", title: "Solar System", category: "science", image: "/assets/simulations/solar-system.png", desc: "The gravitationally bound system of the Sun and the objects that orbit it, including eight planets and their moons." },
    { id: "supernova", title: "Supernova", category: "science", image: "/assets/simulations/supernova.png", desc: "A powerful and luminous explosion of a star, often briefly outshining an entire galaxy." },
    { id: "tectonic-plate", title: "Tectonic Plate", category: "science", image: "/assets/simulations/tectonic-plate.png", desc: "A massive, irregularly shaped slab of solid rock, generally composed of both continental and oceanic lithosphere." },
    { id: "tsunami", title: "Tsunami", category: "science", image: "/assets/simulations/tsunami.png", desc: "A series of ocean waves caused by the displacement of a large volume of water, typically by earthquakes or volcanic eruptions." },
    { id: "volcano", title: "Volcano", category: "science", image: "/assets/simulations/volcano.png", desc: "A rupture in the crust of a planetary-mass object that allows hot lava, volcanic ash, and gases to escape from a magma chamber." },
    { id: "weathering", title: "Weathering", category: "science", image: "/assets/simulations/weathering.png", desc: "The breaking down of rocks, soil, and minerals through contact with the Earth's atmosphere, water, and biological organisms." },
    { id: "white-dwarf", title: "White Dwarf", category: "science", image: "/assets/simulations/white-dwarf.png", desc: "A stellar core remnant composed mostly of electron-degenerate matter, the final evolutionary state of stars not massive enough to become neutron stars." },
    // ==================== ENGINEERING & TECHNOLOGY ====================
    { id: "algorithm-2", title: "Algorithm", category: "engineering" , image: "/assets/simulations/algorithm.png", desc: "Similar to mathematics, but in engineering, this is a systematic, step-by-step computational procedure used to solve engineering problems, analyze systems, process data, or control processes." },
    { id: "api", title: "API", category: "engineering", image: "/assets/simulations/api.png", desc: "Application Programming Interface, a set of protocols and tools for building software applications." },
    { id: "artificial-intelligence", title: "Artificial Intelligence", category: "engineering", image: "/assets/simulations/artificial-intelligence.png", desc: "The simulation of human intelligence processes by machines, especially computer systems." },
    { id: "bandwidth", title: "Bandwidth", category: "engineering", image: "/assets/simulations/bandwidth.png", desc: "The maximum rate of data transfer across a given path in a network, measured in bits per second." },
    { id: "binary-code", title: "Binary Code", category: "engineering", image: "/assets/simulations/binary-code.png", desc: "A system of representing text, computer processor instructions, or any other data using a two-symbol system, usually 0 and 1." },
    { id: "blockchain", title: "Blockchain", category: "engineering", image: "/assets/simulations/blockchain.png", desc: "A decentralized, distributed digital ledger that records transactions across many computers." },
    { id: "boolean-logic", title: "Boolean Logic", category: "engineering", image: "/assets/simulations/boolean-logic.png", desc: "A branch of algebra in which variables are truth values: true or false, used in digital circuit design." },
    { id: "cad", title: "CAD", category: "engineering", image: "/assets/simulations/cad.png", desc: "Computer-Aided Design, the use of computer systems to assist in the creation, modification, analysis, or optimization of a design." },
    { id: "circuit", title: "Circuit", category: "engineering", image: "/assets/simulations/circuit.png", desc: "A path in which electrons from a voltage or current source flow, typically including conductors and components." },
    { id: "compiler", title: "Compiler", category: "engineering", image: "/assets/simulations/compiler.png", desc: "A computer program that translates computer code written in one programming language into another language." },
    { id: "data-structure", title: "Data Structure", category: "engineering", image: "/assets/simulations/data-structure.png", desc: "A specialized format for organizing, processing, retrieving, and storing data, such as arrays, trees, or graphs." },
    { id: "database", title: "Database", category: "engineering", image: "/assets/simulations/database.png", desc: "An organized collection of data stored and accessed electronically from a computer system." },
    { id: "deep-learning", title: "Deep Learning", category: "engineering", image: "/assets/simulations/deep-learning.png", desc: "A subset of machine learning based on artificial neural networks with multiple layers, capable of learning from large amounts of data." },
    { id: "encryption", title: "Encryption", category: "engineering", image: "/assets/simulations/encryption.png", desc: "The process of encoding information so that only authorized parties can access it." },
    { id: "feedback-loop", title: "Feedback Loop", category: "engineering", image: "/assets/simulations/feedback-loop.png", desc: "A process in which the outputs of a system are routed back as inputs as part of a chain of cause-and-effect." },
    { id: "finite-element-analysis", title: "Finite Element Analysis", category: "engineering", image: "/assets/simulations/finite-element-analysis.png", desc: "A numerical method for solving problems of engineering and mathematical physics by subdividing a large system into smaller parts." },
    { id: "firewall", title: "Firewall", category: "engineering", image: "/assets/simulations/firewall.png", desc: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules." },
    { id: "firmware", title: "Firmware", category: "engineering", image: "/assets/simulations/firmware.png", desc: "A specific class of computer software that provides low-level control for a device's specific hardware." },
    { id: "gui", title: "GUI", category: "engineering", image: "/assets/simulations/gui.png", desc: "Graphical User Interface, a form of user interface that allows users to interact with electronic devices through graphical icons." },
    { id: "hash-function", title: "Hash Function", category: "engineering", image: "/assets/simulations/hash-function.png", desc: "A function that converts an input of arbitrary length into a fixed-size string of characters, used in data retrieval and cryptography." },
    { id: "heat-exchanger", title: "Heat Exchanger", category: "engineering", image: "/assets/simulations/heat-exchanger.png", desc: "A system used to transfer heat between two or more fluids without mixing them." },
    { id: "hydraulics", title: "Hydraulics", category: "engineering", image: "/assets/simulations/hydraulics.png", desc: "The mechanical properties and use of liquids, especially in engineering applications involving force transmission." },
    { id: "internet-protocol", title: "Internet Protocol", category: "engineering", image: "/assets/simulations/internet-protocol.png", desc: "The principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries." },
    { id: "kernel", title: "Kernel", category: "engineering", image: "/assets/simulations/kernel.png", desc: "The core component of an operating system, managing system resources and communication between hardware and software." },
    { id: "latency", title: "Latency", category: "engineering", image: "/assets/simulations/latency.png", desc: "The time delay between the cause and the effect of some physical change in a system." },
    { id: "machine-learning", title: "Machine Learning", category: "engineering", image: "/assets/simulations/machine-learning.png", desc: "A branch of artificial intelligence focused on building systems that learn from data without being explicitly programmed." },
    { id: "machine-learning-model", title: "Machine Learning Model", category: "engineering", image: "/assets/simulations/machine-learning-model.png", desc: "A mathematical representation of a real-world process, trained on data to make predictions or decisions." },
    { id: "neural-network", title: "Neural Network", category: "engineering", image: "/assets/simulations/neural-network.png", desc: "A computing system inspired by biological neural networks, consisting of interconnected nodes that process information." },
    { id: "operating-system", title: "Operating System", category: "engineering", image: "/assets/simulations/operating-system.png", desc: "System software that manages computer hardware, software resources, and provides common services for computer programs." },
    { id: "overclocking", title: "Overclocking", category: "engineering", image: "/assets/simulations/overclocking.png", desc: "The practice of increasing the clock rate of a computer's processor beyond the manufacturer's specifications." },
    { id: "pid-controller", title: "PID Controller", category: "engineering", image: "/assets/simulations/pid-controller.png", desc: "A control loop mechanism employing feedback, widely used in industrial control systems for continuous modulation control." },
    { id: "protocol", title: "Protocol", category: "engineering", image: "/assets/simulations/protocol.png", desc: "A set of rules governing the exchange or transmission of data between devices." },
    { id: "recursion", title: "Recursion", category: "engineering", image: "/assets/simulations/recursion.png", desc: "A method of solving problems where the solution depends on solutions to smaller instances of the same problem." },
    { id: "resistor", title: "Resistor", category: "engineering", image: "/assets/simulations/resistor.png", desc: "A passive two-terminal electrical component that implements electrical resistance as a circuit element." },
    { id: "semiconductor", title: "Semiconductor", category: "engineering", image: "/assets/simulations/semiconductor.png", desc: "A material with electrical conductivity between that of a conductor and an insulator, the foundation of modern electronics." },
    { id: "signal-processing", title: "Signal Processing", category: "engineering", image: "/assets/simulations/signal-processing.png", desc: "The analysis, interpretation, and manipulation of signals such as sound, images, and biological measurements." },
    { id: "software-engineering", title: "Software Engineering", category: "engineering", image: "/assets/simulations/software-engineering.png", desc: "The systematic application of engineering approaches to the development of software." },
    { id: "sql", title: "SQL", category: "engineering", image: "/assets/simulations/sql.png", desc: "Structured Query Language, a domain-specific language used in programming and managing data held in relational database management systems." },
    { id: "stress-analysis", title: "Stress Analysis", category: "engineering", image: "/assets/simulations/stress-analysis.png", desc: "The determination of the stresses in materials and structures to establish their strength and expected service life." },
    { id: "thermodynamics-2", title: "Thermodynamics", category: "engineering", image: "/assets/simulations/thermodynamics.png", desc: "The branch of engineering and physics concerned with the relationships between heat and other forms of energy." },
    { id: "transistor", title: "Transistor", category: "engineering", image: "/assets/simulations/transistor.png", desc: "A semiconductor device used to amplify or switch electrical signals and electrical power." },
    { id: "turbine", title: "Turbine", category: "engineering", image: "/assets/simulations/turbine.png", desc: "A rotary mechanical device that extracts energy from a fluid flow and converts it into useful work." },
    { id: "user-interface", title: "User Interface", category: "engineering", image: "/assets/simulations/user-interface.png", desc: "The space where interactions between humans and machines occur, encompassing hardware and software components." },
    { id: "virtual-memory", title: "Virtual Memory", category: "engineering", image: "/assets/simulations/virtual-memory.png", desc: "A memory management technique that provides an idealized abstraction of the storage resources available on a computer." },
];

// ==========================================
// DOM ELEMENTS
// ==========================================
const grid = document.getElementById('simulationGrid');
const searchInput = document.getElementById('searchInput');
const searchPlaceholder = document.getElementById('searchPlaceholder');
const searchPlusButton = document.querySelector('.search-plus-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const noResults = document.getElementById('noResults');
const categoryListButtons = document.querySelectorAll('.category-list-btn');
const categoryTopicMenus = document.querySelectorAll('.category-topic-menu');

let currentCategory = 'math';
let searchQuery = '';
let selectedTopic = null;
let selectedResourceType = null;
let openCategoryListButton = null;

const categoryTopics = {
    math: {
        title: 'Math Simulation',
        topics: ['Algebra', 'Geometry', 'Measurement & Data', 'Calculus', 'Trigonometry', 'Probability & Statistics']
    },
    science: {
        title: 'Science Simulation',
        topics: ['Physics', 'Chemistry', 'Biology', 'Earth & Space Science', 'Environmental Science', 'Scientific Investigation']
    },
    engineering: {
        title: 'Engineering Simulation',
        topics: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Robotics & Automation', 'Design & Systems']
    }
};

// Each card can lead to a different kind of learning resource. Entries not
// listed here are references by default, rather than being mislabeled as a
// simulation.
const resourceTypes = {

    'Interactive Tool': new Set([
        // Mathematics
        'absolute-value', 'algorithm', 'binomial-theorem', 'calculus',
        'cartesian-coordinates', 'combinatorics', 'correlation-coefficient',
        'derivative', 'determinant', 'exponential-function', 'factorial',
        'function', 'integral', 'linear-algebra', 'logarithm', 'matrix',
        'mean', 'median', 'mode', 'parametric-equations', 'permutation',
        'polynomial', 'probability', 'quadratic-equation', 'regression-analysis',
        'standard-deviation', 'taylor-series', 'trigonometry', 'vector',
        'variance',

        // Physics
        'force', 'mass', 'momentum', 'velocity', 'acceleration',
        'frequency', 'pressure', 'resistance', 'capacitance', 'conductivity',
        'thermal-conductivity', 'wavelength',

        // Chemistry
        'molar-mass', 'molarity', 'mole', 'ph', 'atomic-mass',
        'empirical-formula', 'molecular-formula', 'oxidation-state',
        'electron-configuration', 'periodic-table',

        // Existing Computer Science / Engineering
        'algorithm-2', 'api', 'binary-code', 'boolean-logic', 'cad',
        'compiler', 'data-structure', 'database', 'deep-learning',
        'encryption', 'firewall', 'gui', 'machine-learning',
        'neural-network', 'recursion', 'sql', 'user-interface'
    ]),

    'Visualization': new Set([
        // Mathematics
        'asymptote', 'cardinality', 'cartesian-coordinates', 'complex-number',
        'conic-section', 'eigenvalue', 'eigenvector', 'fourier-transform',
        'fractal', 'graph-theory', 'imaginary-number', 'normal-distribution',
        'parabola', 'polar-coordinates', 'quaternion', 'set-theory',
        'topology', 'vector-space',

        // Geometry
        'quadrilateral', 'euclidean-geometry',

        // Physics
        'antimatter', 'black-hole', 'bose-einstein-condensate',
        'dark-energy', 'dark-matter', 'electric-field',
        'electromagnetic-spectrum', 'electromagnetism', 'gravitational-waves',
        'higgs-boson', 'magnetic-field', 'optics', 'particle-physics',
        'photon', 'plasma', 'quantum-entanglement', 'quantum-mechanics',
        'relativity', 'special-relativity', 'standard-model',
        'string-theory', 'superconductivity', 'superposition',
        'wave-function', 'sound-wave',

        // Existing Astronomy / Science
        'milky-way', 'nebula', 'neutron-star', 'solar-system',
        'supernova', 'white-dwarf'
    ]),

    'Simulation': new Set([
        // Mathematics
        'central-limit-theorem', 'differential-equation',
        'hypothesis-testing', 'limit', 'riemann-hypothesis',

        // Physics
        'acceleration', 'angular-momentum', 'centripetal-force',
        'chaos-theory', 'conservation-of-energy', 'coulombs-law',
        'doppler-effect', 'electromagnetic-induction', 'fission',
        'fluid-dynamics', 'fusion', 'general-relativity',
        'inertia', 'interference', 'kinetic-energy', 'lorentz-force',
        'newtons-laws-of-motion', 'ohms-law', 'photoelectric-effect',
        'photovoltaic-effect', 'potential-energy', 'radioactivity',
        'refraction', 'schrodinger-equation', 'simple-harmonic-motion',
        'thermodynamics', 'torque', 'uncertainty-principle', 'work',
        'escape-velocity', 'entropy', 'half-life',

        // Chemistry
        'activation-energy', 'bond-energy', 'chemical-equilibrium',
        'chemical-kinetics', 'distillation', 'electrolysis',
        'enthalpy', 'endothermic', 'exothermic', 'gas-chromatography',
        'mass-spectrometry', 'nuclear-magnetic-resonance',
        'oxidation', 'photochemistry',

        // Existing
        'greenhouse-effect', 'orbit', 'plate-tectonics', 'rock-cycle',
        'tsunami', 'volcano', 'circuit', 'feedback-loop',
        'finite-element-analysis', 'heat-exchanger', 'hydraulics',
        'pid-controller', 'stress-analysis', 'thermodynamics-2', 'turbine'
    ]),

};

function getResourceType(id) {
    return Object.entries(resourceTypes).find(([, ids]) => ids.has(id))?.[0] ?? 'Reference';
}

const resourceTypeOptions = [
    { type: 'Simulation', icon: 'fa-flask' },
    { type: 'Visualization', icon: 'fa-chart-line' },
    { type: 'Interactive Tool', icon: 'fa-hand-pointer' },
    { type: 'Reference', icon: 'fa-book-open' }
];

function updateResourceTypeFilterButtons() {
    document.querySelectorAll('.resource-type-filter-btn').forEach(button => {
        const isSelected = button.dataset.resourceType === selectedResourceType;
        button.classList.toggle('active', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });
}

function selectResourceType(type) {
    selectedResourceType = selectedResourceType === type ? null : type;
    updateResourceTypeFilterButtons();
    renderCards();
}

function initializeResourceTypeFilters() {
    categoryListButtons.forEach(trigger => {
        const categoryControl = trigger.closest('.category-control');
        if (!categoryControl) return;

        const filterGroup = document.createElement('div');
        filterGroup.className = 'resource-type-filter';
        filterGroup.setAttribute('role', 'group');
        filterGroup.setAttribute('aria-label', 'Filter resources by type');

        resourceTypeOptions.forEach(({ type, icon }) => {
            const filterButton = document.createElement('button');
            filterButton.type = 'button';
            filterButton.className = 'resource-type-filter-btn';
            filterButton.dataset.resourceType = type;
            filterButton.setAttribute('aria-label', `Show ${type} resources`);
            filterButton.setAttribute('aria-pressed', 'false');
            filterButton.title = type;
            filterButton.innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i>`;
            filterButton.addEventListener('click', () => selectResourceType(type));
            filterGroup.appendChild(filterButton);
        });

        categoryControl.appendChild(filterGroup);
    });
}

// Topic filters are kept separate from the terminology list above so the
// simulation entries can be updated without changing this interaction.
const topicKeywords = {
    math: {
        'Algebra': ['algebra', 'binomial', 'polynomial', 'quadratic', 'equation', 'function', 'logarithm', 'complex number', 'matrix', 'determinant', 'eigenvalue', 'eigenvector', 'group theory'],
        'Geometry': ['geometry', 'coordinate', 'conic', 'parabola', 'quadrilateral', 'pythagorean', 'fractal', 'topology', 'pi (', 'polar coordinate'],
        'Measurement & Data': ['mean', 'median', 'mode', 'variance', 'standard deviation', 'correlation', 'regression', 'distribution', 'hypothesis testing'],
        'Calculus': ['calculus', 'derivative', 'integral', 'limit', 'differential equation', 'taylor series', 'fourier transform'],
        'Trigonometry': ['trigonometry', 'pythagorean', 'polar coordinate', 'angle', 'triangle'],
        'Probability & Statistics': ['probability', 'statistics', 'combinatorics', 'permutation', 'central limit', 'normal distribution', 'hypothesis testing', 'correlation', 'regression', 'mean', 'median', 'mode', 'variance', 'standard deviation']
    },
    science: {
        'Physics': ['acceleration', 'momentum', 'force', 'velocity', 'energy', 'electric', 'magnet', 'wave', 'frequency', 'relativity', 'entropy', 'thermodynamic', 'quantum', 'radiation', 'gravity', 'particle', 'nuclear'],
        'Chemistry': ['atom', 'molecule', 'chemical', 'reaction', 'element', 'compound', 'acid', 'base', 'bond', 'periodic', 'oxidation', 'solution'],
        'Biology': ['cell', 'organism', 'genetic', 'evolution', 'ecosystem', 'habitat', 'photosynthesis', 'protein', 'dna', 'species', 'anatomy'],
        'Earth & Space Science': ['earth', 'rock', 'mineral', 'magma', 'volcano', 'tectonic', 'weather', 'climate', 'ocean', 'planet', 'star', 'galaxy', 'orbit', 'solar', 'nebula', 'eclipse'],
        'Environmental Science': ['environment', 'climate', 'ecosystem', 'habitat', 'greenhouse', 'weather', 'erosion', 'hydrosphere', 'ocean', 'atmosphere'],
        'Scientific Investigation': ['experiment', 'observation', 'hypothesis', 'measurement', 'data', 'analysis', 'model', 'variable']
    },
    engineering: {
        'Computer Science': ['algorithm', 'api', 'binary', 'boolean', 'compiler', 'data structure', 'database', 'firmware', 'kernel', 'operating system', 'recursion', 'software', 'sql', 'user interface', 'virtual memory'],
        'Electrical Engineering': ['circuit', 'resistor', 'transistor', 'semiconductor', 'signal', 'bandwidth', 'latency', 'protocol', 'internet', 'firewall', 'encryption'],
        'Mechanical Engineering': ['heat exchanger', 'hydraulics', 'turbine', 'thermodynamics', 'stress analysis', 'finite element'],
        'Civil Engineering': ['cad', 'stress analysis', 'finite element', 'hydraulics', 'thermodynamics'],
        'Robotics & Automation': ['artificial intelligence', 'machine learning', 'neural network', 'pid controller', 'feedback loop', 'control', 'sensor', 'algorithm'],
        'Design & Systems': ['cad', 'design', 'system', 'interface', 'protocol', 'database', 'feedback loop', 'finite element']
    }
};

function selectCategory(category) {
    const selectedButton = Array.from(categoryBtns).find(
        button => button.dataset.category === category
    );

    if (!selectedButton) return false;

    currentCategory = category;
    selectedTopic = null;
    categoryBtns.forEach(button => button.classList.toggle('active', button === selectedButton));
    return true;
}

function closeCategoryLists() {
    categoryTopicMenus.forEach(menu => {
        menu.hidden = true;
        menu.replaceChildren();
    });
    categoryListButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.category-control').forEach(control => {
        control.classList.remove('is-list-open');
    });
    openCategoryListButton = null;
}

function openCategoryList(category, trigger) {
    const categoryDetails = categoryTopics[category];
    if (!categoryDetails) return;

    const topicMenu = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!topicMenu) return;

    closeCategoryLists();
    topicMenu.replaceChildren(...categoryDetails.topics.map(topic => {
        const listItem = document.createElement('li');
        const topicButton = document.createElement('button');
        topicButton.type = 'button';
        topicButton.className = 'category-topic-btn';
        topicButton.textContent = topic;
        topicButton.setAttribute('aria-pressed', String(selectedTopic === topic));
        topicButton.addEventListener('click', () => {
            currentCategory = category;
            selectedTopic = topic;
            categoryBtns.forEach(button => {
                button.classList.toggle('active', button.dataset.category === category);
            });
            closeCategoryLists();
            renderCards();
        });
        listItem.appendChild(topicButton);
        return listItem;
    }));

    openCategoryListButton = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    trigger.closest('.category-control')?.classList.add('is-list-open');
    topicMenu.hidden = false;
}

// ==========================================
// RENDER ENGINE
// ==========================================
function renderCards() {
    // Clear grid
    grid.innerHTML = '';
    
    // Filter data
    const filtered = simulations.filter(sim => {
        const matchesCategory = sim.category === currentCategory;
        const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase());
        const topicTerms = topicKeywords[currentCategory]?.[selectedTopic] || [];
        const simulationText = `${sim.title} ${sim.desc}`.toLowerCase();
        const matchesTopic = !selectedTopic || topicTerms.some(term => simulationText.includes(term));
        const matchesResourceType = !selectedResourceType || getResourceType(sim.id) === selectedResourceType;
        return matchesCategory && matchesSearch && matchesTopic && matchesResourceType;
    });

    // Toggle No Results Message
    if (filtered.length === 0) {
        grid.style.display = 'none';
        noResults.classList.remove('hidden');
    } else {
        grid.style.display = 'grid';
        noResults.classList.add('hidden');
        
        // Inject Cards
        filtered.forEach((sim, index) => {
            const delay = index * 0.05; // Staggered animation
            const resourceType = getResourceType(sim.id);
            const card = document.createElement('div');
            card.className = 'sim-card animate-reveal';
            card.style.animationDelay = `${delay}s`;
            card.innerHTML = `
                <div class="sim-category">${sim.category}</div>
                <h3 class="sim-title">${sim.title}</h3>
                <img src="${sim.image}" alt="${sim.title}" class="sim-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyZDNjNWEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzU1NjY4OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='">
                <p class="sim-desc">${sim.desc}</p>
                <button class="sim-btn" onclick="launchSimulation('${sim.id}')">OPEN ${resourceType.toUpperCase()}</button>
            `;
            grid.appendChild(card);
        });
    }
}

// ==========================================
// UNDER-CONSTRUCTION NOTICE
// ==========================================
const noticeModal = document.getElementById('notice-modal');
const noticeModalText = noticeModal?.querySelector('.modal-text');
const noticeCloseButton = document.getElementById('close-modal-btn');

function openNotice(featureName = 'feature') {
    if (!noticeModal) return;

    if (noticeModalText) {
        noticeModalText.textContent = featureName === 'feature'
            ? "This feature isn't available yet. Check back soon for updates!"
            : `The ${featureName} feature isn't available yet. Check back soon for updates!`;
    }

    // Removing the class, then forcing a layout update, restarts the opening
    // transition every time any non-reference resource is selected.
    noticeModal.classList.remove('active');
    void noticeModal.offsetWidth;
    noticeModal.classList.add('active');
}

function closeNotice() {
    noticeModal?.classList.remove('active');
}

// Navigation Function Placeholder
window.launchSimulation = function(id) {
    const resourceType = getResourceType(id);

    // References remain the only resource type that opens its own page.
    if (resourceType.toLowerCase() === 'reference') {
        window.location.href = `simulation.html?id=${id}`;
        return;
    }

    openNotice(resourceType);
};

// ==========================================
// EVENT LISTENERS
// ==========================================

if (noticeCloseButton) {
    noticeCloseButton.addEventListener('click', closeNotice);
}

if (noticeModal) {
    noticeModal.addEventListener('click', event => {
        if (event.target === noticeModal) closeNotice();
    });
}

// Category Switching
categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        selectCategory(e.currentTarget.dataset.category);
        renderCards();
    });
});

categoryListButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isOpenForThisCategory = openCategoryListButton === button;

        if (isOpenForThisCategory) {
            closeCategoryLists();
            return;
        }

        openCategoryList(button.dataset.category, button);
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeCategoryLists();
    }
});

document.addEventListener('click', event => {
    if (!event.target.closest('.category-control')) {
        closeCategoryLists();
    }
});

// Search Input
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    
    // Hide placeholder if typing
    if (searchQuery.length > 0) {
        searchPlaceholder.classList.remove('fade-in');
        searchPlaceholder.classList.add('fade-out');
    } else {
        searchPlaceholder.classList.remove('fade-out');
        searchPlaceholder.classList.add('fade-in');
    }
    
    renderCards();
});

searchInput.addEventListener('focus', () => {
    searchPlaceholder.classList.remove('fade-in');
    searchPlaceholder.classList.add('fade-out');
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value.length === 0) {
        searchPlaceholder.classList.remove('fade-out');
        searchPlaceholder.classList.add('fade-in');
    }
});


searchPlusButton.addEventListener('click', () => searchInput.focus());

// ==========================================
// SEARCH PLACEHOLDER ANIMATION
// ==========================================
const placeholders = [
    "What you're looking for?",
    'Try "Quadratic Equation"',
    'Try "Newton\'s Laws"',
    'Try "Projectile Motion"',
    'Try "Pythagorean Theorem"',
    'Try "Cell Division"',
    'Try "Electric Circuits"',
    'Try "Chemical Reactions"',
    'Try "Trigonometry"'
];

let placeholderIndex = 0;

function cyclePlaceholder() {
    if (searchQuery.length > 0 || document.activeElement === searchInput) return; // Don't animate while typing or focused
    
    searchPlaceholder.classList.remove('fade-in');
    searchPlaceholder.classList.add('fade-out');
    
    setTimeout(() => {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        searchPlaceholder.textContent = placeholders[placeholderIndex];
        
        if (searchQuery.length === 0 && document.activeElement !== searchInput) {
            searchPlaceholder.classList.remove('fade-out');
            searchPlaceholder.classList.add('fade-in');
        }
    }, 300); // Wait for fade out
}

setInterval(cyclePlaceholder, 3000); // Change text every 3 seconds

// Open the category selected from the navigation submenu, if one was requested.
const requestedCategory = new URLSearchParams(window.location.search).get('category');
if (requestedCategory) {
    selectCategory(requestedCategory);
}

// Initial Render
initializeResourceTypeFilters();
renderCards();

const chatLink = document.getElementById('ai-chat-link');
if (chatLink) {
    chatLink.addEventListener('click', event => {
        event.preventDefault();
        openNotice('AI Chat');
    });
}

// Support notice buttons added dynamically elsewhere on this page.
document.addEventListener('click', event => {
    const noticeButton = event.target.closest('.notice-trigger-btn');
    if (!noticeButton) return;

    event.preventDefault();
    openNotice(noticeButton.dataset.feature || 'feature');
});
