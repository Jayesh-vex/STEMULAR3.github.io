document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Search Placeholder Text ---
    const placeholderText = document.getElementById("dynamic-placeholder");
    const searchInput = document.getElementById("main-search");
    
    const searchExamples = [
        "What you're looking for?",
        "Try 'Photosynthesis'",
        "Try 'Quadratic Equation'",
        "Try 'Newton’s Laws'",
        "Try 'Mitochondria'",
        "Try 'Derivative'",
        "Try 'Electromagnetic Induction'",
        "Try 'Molarity'"
    ];
    
    let placeholderIndex = 0;
    
    const rotatePlaceholder = () => {
        // Only rotate if the user isn't typing
        if(searchInput.value.length > 0) return;

        // Fade out
        placeholderText.classList.remove("fade-in");
        placeholderText.classList.add("fade-out");
        
        setTimeout(() => {
            // Change text
            placeholderIndex = (placeholderIndex + 1) % searchExamples.length;
            placeholderText.textContent = searchExamples[placeholderIndex];
            
            // Fade in
            placeholderText.classList.remove("fade-out");
            placeholderText.classList.add("fade-in");
        }, 300); // Matches CSS transition duration
    };

    setInterval(rotatePlaceholder, 3000);

    // Hide placeholder immediately when user clicks into input
    searchInput.addEventListener("focus", () => {
        placeholderText.style.opacity = "0";
    });

    searchInput.addEventListener("blur", () => {
        if(searchInput.value.length === 0) {
            placeholderText.style.opacity = "1";
        }
    });

    // --- 2. Interactive Search & Wipe Down Animation ---
    const mainLayout = document.getElementById("main-layout");
    const resultsGrid = document.getElementById("results-grid");
    
    // Developer Customization: STEM Terminology Database Mockup
const stemDatabase = [
    // MATHEMATICS
    { term: "Absolute Value", category: "Mathematics", def: "The non-negative value of a number without regard to its sign, denoted |x|." },
    { term: "Algorithm", category: "Mathematics", def: "A finite sequence of well-defined instructions used to solve a class of specific problems or perform a computation." },
    { term: "Asymptote", category: "Mathematics", def: "A line that a curve approaches as the curve goes to infinity." },
    { term: "Binomial Theorem", category: "Mathematics", def: "A formula for expanding powers of a binomial expression (a + b)^n." },
    { term: "Calculus", category: "Mathematics", def: "The mathematical study of continuous change, comprising differential and integral calculus." },
    { term: "Cardinality", category: "Mathematics", def: "The number of elements in a set." },
    { term: "Cartesian Coordinates", category: "Mathematics", def: "A system specifying each point uniquely by a pair of numerical coordinates (x, y) in a plane." },
    { term: "Central Limit Theorem", category: "Mathematics", def: "The theorem stating that the distribution of sample means approximates a normal distribution as sample size grows." },
    { term: "Combinatorics", category: "Mathematics", def: "The branch of mathematics concerned with counting, arrangement, and combination of objects." },
    { term: "Complex Number", category: "Mathematics", def: "A number of the form a + bi, where a and b are real numbers and i is the imaginary unit (i² = -1)." },
    { term: "Conic Section", category: "Mathematics", def: "A curve obtained as the intersection of a cone with a plane, including circles, ellipses, parabolas, and hyperbolas." },
    { term: "Correlation Coefficient", category: "Mathematics", def: "A statistical measure that calculates the strength of the relationship between two variables, ranging from -1 to +1." },
    { term: "Derivative", category: "Mathematics", def: "The rate of change of a function with respect to a variable, representing the slope of the tangent line." },
    { term: "Determinant", category: "Mathematics", def: "A scalar value computed from the elements of a square matrix, determining properties like invertibility." },
    { term: "Differential Equation", category: "Mathematics", def: "An equation relating a function with its derivatives, used to model rates of change in physical systems." },
    { term: "Eigenvalue", category: "Mathematics", def: "A scalar associated with a linear transformation such that the transformation stretches vectors by that factor." },
    { term: "Eigenvector", category: "Mathematics", def: "A non-zero vector that changes at most by a scalar factor when a linear transformation is applied." },
    { term: "Euclidean Geometry", category: "Mathematics", def: "The study of plane and solid figures based on axioms and theorems employed by the Greek mathematician Euclid." },
    { term: "Exponential Function", category: "Mathematics", def: "A function of the form f(x) = a^x, where the variable appears as an exponent." },
    { term: "Factorial", category: "Mathematics", def: "The product of all positive integers less than or equal to n, denoted n!." },
    { term: "Fourier Transform", category: "Mathematics", def: "A mathematical transform that decomposes a function into its constituent frequencies." },
    { term: "Fractal", category: "Mathematics", def: "A geometric shape that displays self-similarity at various scales, often with non-integer dimension." },
    { term: "Function", category: "Mathematics", def: "A relation between a set of inputs and a set of permissible outputs where each input is related to exactly one output." },
    { term: "Graph Theory", category: "Mathematics", def: "The study of graphs, which are mathematical structures used to model pairwise relations between objects." },
    { term: "Group Theory", category: "Mathematics", def: "The branch of abstract algebra studying algebraic structures known as groups." },
    { term: "Hypothesis Testing", category: "Mathematics", def: "A statistical method used to make decisions about a population parameter based on sample data." },
    { term: "Imaginary Number", category: "Mathematics", def: "A complex number that can be written as a real number multiplied by the imaginary unit i, where i² = -1." },
    { term: "Integral", category: "Mathematics", def: "A mathematical object representing the area under a curve, or the accumulation of quantities." },
    { term: "Irrational Number", category: "Mathematics", def: "A real number that cannot be expressed as a ratio of integers, such as π or √2." },
    { term: "Limit", category: "Mathematics", def: "The value that a function or sequence approaches as the input or index approaches some value." },
    { term: "Linear Algebra", category: "Mathematics", def: "The branch of mathematics concerning linear equations, vector spaces, linear transformations, and matrices." },
    { term: "Logarithm", category: "Mathematics", def: "The inverse operation to exponentiation, representing the power to which a base must be raised to produce a given number." },
    { term: "Matrix", category: "Mathematics", def: "A rectangular array of numbers, symbols, or expressions arranged in rows and columns." },
    { term: "Mean", category: "Mathematics", def: "The arithmetic average of a set of values, calculated by summing all values and dividing by the count." },
    { term: "Median", category: "Mathematics", def: "The middle value in a list of numbers sorted in ascending or descending order." },
    { term: "Mode", category: "Mathematics", def: "The value that appears most frequently in a data set." },
    { term: "Normal Distribution", category: "Mathematics", def: "A probability distribution symmetric about the mean, forming a bell-shaped curve." },
    { term: "Number Theory", category: "Mathematics", def: "The branch of pure mathematics devoted primarily to the study of integers and integer-valued functions." },
    { term: "Parabola", category: "Mathematics", def: "A U-shaped symmetrical curve where any point is at an equal distance from a fixed point (focus) and a fixed line (directrix)." },
    { term: "Parametric Equations", category: "Mathematics", def: "A set of equations that express a set of quantities as explicit functions of independent variables called parameters." },
    { term: "Permutation", category: "Mathematics", def: "An arrangement of objects in a specific order, where order matters." },
    { term: "Pi (π)", category: "Mathematics", def: "The mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 3.14159." },
    { term: "Polar Coordinates", category: "Mathematics", def: "A two-dimensional coordinate system where each point is determined by a distance from a reference point and an angle from a reference direction." },
    { term: "Polynomial", category: "Mathematics", def: "An expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents." },
    { term: "Prime Number", category: "Mathematics", def: "A natural number greater than 1 that has no positive divisors other than 1 and itself." },
    { term: "Probability", category: "Mathematics", def: "The measure of the likelihood that an event will occur, quantified as a number between 0 and 1." },
    { term: "Pythagorean Theorem", category: "Mathematics", def: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides (a² + b² = c²)." },
    { term: "Quadratic Equation", category: "Mathematics", def: "A polynomial equation of the second degree, typically represented as ax² + bx + c = 0." },
    { term: "Quadrilateral", category: "Geometry", def: "A polygon with four edges (sides) and four vertices (corners)." },
    { term: "Quaternion", category: "Mathematics", def: "A number system extending complex numbers, represented as a + bi + cj + dk." },
    { term: "Regression Analysis", category: "Mathematics", def: "A set of statistical processes for estimating relationships among variables." },
    { term: "Riemann Hypothesis", category: "Mathematics", def: "A conjecture about the distribution of zeros of the Riemann zeta function, one of the most important unsolved problems in mathematics." },
    { term: "Set Theory", category: "Mathematics", def: "The branch of mathematical logic studying sets, which are collections of objects." },
    { term: "Standard Deviation", category: "Mathematics", def: "A measure of the amount of variation or dispersion in a set of values." },
    { term: "Taylor Series", category: "Mathematics", def: "A representation of a function as an infinite sum of terms calculated from the function's derivatives at a single point." },
    { term: "Topology", category: "Mathematics", def: "The branch of mathematics concerned with properties of space preserved under continuous deformations." },
    { term: "Trigonometry", category: "Mathematics", def: "The branch of mathematics dealing with the relations of sides and angles of triangles and the relevant functions." },
    { term: "Vector", category: "Mathematics", def: "A quantity having both magnitude and direction, often represented by an arrow." },
    { term: "Variance", category: "Mathematics", def: "The expectation of the squared deviation of a random variable from its mean." },
    { term: "Vector Space", category: "Mathematics", def: "A collection of vectors that can be added together and multiplied by scalars, subject to certain axioms." },

    // PHYSICS
    { term: "Acceleration", category: "Physics", def: "The rate of change of velocity of an object with respect to time." },
    { term: "Angular Momentum", category: "Physics", def: "The rotational equivalent of linear momentum, representing the quantity of rotation of a body." },
    { term: "Antimatter", category: "Physics", def: "Matter composed of antiparticles, which have the same mass as particles of ordinary matter but opposite charge." },
    { term: "Black Hole", category: "Physics", def: "A region of spacetime where gravity is so strong that nothing, not even light, can escape from it." },
    { term: "Bose-Einstein Condensate", category: "Physics", def: "A state of matter formed by bosons cooled to temperatures very near absolute zero." },
    { term: "Capacitance", category: "Physics", def: "The ability of a system to store an electric charge, measured in farads." },
    { term: "Centripetal Force", category: "Physics", def: "A force that makes a body follow a curved path, directed toward the center of curvature." },
    { term: "Chaos Theory", category: "Physics", def: "The study of dynamical systems highly sensitive to initial conditions, where small differences can yield widely diverging outcomes." },
    { term: "Conductivity", category: "Physics", def: "The measure of a material's ability to conduct electric current or heat." },
    { term: "Conservation of Energy", category: "Physics", def: "The principle that energy cannot be created or destroyed, only transformed from one form to another." },
    { term: "Coulomb's Law", category: "Physics", def: "The law stating that the electrostatic force between two charged particles is proportional to the product of their charges and inversely proportional to the square of the distance between them." },
    { term: "Dark Energy", category: "Physics", def: "A hypothetical form of energy permeating all of space, tending to accelerate the expansion of the universe." },
    { term: "Dark Matter", category: "Physics", def: "A form of matter thought to account for approximately 85% of the matter in the universe that does not emit light or energy." },
    { term: "Doppler Effect", category: "Physics", def: "The change in frequency or wavelength of a wave in relation to an observer moving relative to the wave source." },
    { term: "Electric Field", category: "Physics", def: "A vector field surrounding electrically charged particles, exerting force on other charged objects." },
    { term: "Electromagnetic Induction", category: "Physics", def: "The production of an electromotive force across an electrical conductor in a changing magnetic field." },
    { term: "Electromagnetic Spectrum", category: "Physics", def: "The range of all possible frequencies of electromagnetic radiation, from radio waves to gamma rays." },
    { term: "Electromagnetism", category: "Physics", def: "A branch of physics involving the study of the electromagnetic force, a type of physical interaction between electrically charged particles." },
    { term: "Entropy", category: "Physics", def: "A thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work, often interpreted as disorder." },
    { term: "Escape Velocity", category: "Physics", def: "The minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body." },
    { term: "Fission", category: "Physics", def: "A nuclear reaction in which the nucleus of an atom splits into two or more smaller nuclei, releasing energy." },
    { term: "Fluid Dynamics", category: "Physics", def: "A subdiscipline of fluid mechanics that deals with fluid flow in motion." },
    { term: "Force", category: "Physics", def: "Any interaction that, when unopposed, will change the motion of an object, measured in newtons." },
    { term: "Frequency", category: "Physics", def: "The number of occurrences of a repeating event per unit of time, measured in hertz (Hz)." },
    { term: "Fusion", category: "Physics", def: "A nuclear reaction in which two or more atomic nuclei combine to form one or more different atomic nuclei and subatomic particles." },
    { term: "General Relativity", category: "Physics", def: "The geometric theory of gravitation published by Albert Einstein, describing gravity as the curvature of spacetime." },
    { term: "Gravitational Waves", category: "Physics", def: "Ripples in the curvature of spacetime that propagate as waves, generated by accelerated masses." },
    { term: "Half-Life", category: "Physics", def: "The time required for half of the radioactive atoms in a sample to decay." },
    { term: "Higgs Boson", category: "Physics", def: "An elementary particle in the Standard Model of particle physics, associated with the Higgs field that gives other particles mass." },
    { term: "Inertia", category: "Physics", def: "The resistance of any physical object to any change in its velocity, including changes to speed or direction." },
    { term: "Interference", category: "Physics", def: "A phenomenon in which two waves superpose to form a resultant wave of greater, lower, or the same amplitude." },
    { term: "Isotope", category: "Physics", def: "Variants of a particular chemical element that differ in neutron number, having the same number of protons but different numbers of neutrons." },
    { term: "Kinetic Energy", category: "Physics", def: "The energy possessed by an object due to its motion, equal to half the mass times the square of the velocity." },
    { term: "Lorentz Force", category: "Physics", def: "The combination of electric and magnetic force on a point charge due to electromagnetic fields." },
    { term: "Magnetic Field", category: "Physics", def: "A vector field that describes the magnetic influence on moving electric charges, electric currents, and magnetic materials." },
    { term: "Mass", category: "Physics", def: "A measure of the amount of matter in an object, determining its resistance to acceleration when a force is applied." },
    { term: "Momentum", category: "Physics", def: "The product of an object's mass and velocity, representing the quantity of motion." },
    { term: "Newton's Laws of Motion", category: "Physics", def: "Three physical laws that laid the foundation for classical mechanics, describing the relationship between a body and the forces acting upon it." },
    { term: "Ohm's Law", category: "Physics", def: "The law stating that the current through a conductor between two points is directly proportional to the voltage across the two points." },
    { term: "Optics", category: "Physics", def: "The branch of physics that studies the behavior and properties of light, including its interactions with matter." },
    { term: "Particle Physics", category: "Physics", def: "The branch of physics that studies the nature of particles that constitute matter and radiation." },
    { term: "Photoelectric Effect", category: "Physics", def: "The emission of electrons when electromagnetic radiation hits a material, demonstrating the particle nature of light." },
    { term: "Photon", category: "Physics", def: "A particle representing a quantum of light or other electromagnetic radiation." },
    { term: "Photovoltaic Effect", category: "Physics", def: "The generation of voltage and electric current in a material upon exposure to light." },
    { term: "Planck's Constant", category: "Physics", def: "A fundamental physical constant denoted h, relating the energy of a photon to its frequency." },
    { term: "Plasma", category: "Physics", def: "One of the four fundamental states of matter, consisting of ionized gas with free electrons and ions." },
    { term: "Potential Energy", category: "Physics", def: "The energy held by an object because of its position relative to other objects, stresses within itself, or its electric charge." },
    { term: "Pressure", category: "Physics", def: "The force applied perpendicular to the surface of an object per unit area over which that force is distributed." },
    { term: "Quantum Entanglement", category: "Physics", def: "A physical phenomenon occurring when pairs or groups of particles interact such that the quantum state of each particle cannot be described independently." },
    { term: "Quantum Field Theory", category: "Physics", def: "The theoretical framework for constructing quantum mechanical models of subatomic particles in particle physics." },
    { term: "Quantum Mechanics", category: "Physics", def: "A fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles." },
    { term: "Radioactivity", category: "Physics", def: "The spontaneous emission of radiation from the nucleus of an unstable atom." },
    { term: "Refraction", category: "Physics", def: "The change in direction of a wave passing from one medium to another caused by its change in speed." },
    { term: "Relativity", category: "Physics", def: "The physical theory regarding the relationship between space and time, developed by Albert Einstein." },
    { term: "Resistance", category: "Physics", def: "A measure of the opposition to current flow in an electrical circuit, measured in ohms." },
    { term: "Schrodinger Equation", category: "Physics", def: "A linear partial differential equation that governs the wave function of a quantum-mechanical system." },
    { term: "Simple Harmonic Motion", category: "Physics", def: "A type of periodic motion where the restoring force is directly proportional to the displacement." },
    { term: "Sound Wave", category: "Physics", def: "A longitudinal wave that propagates through a medium by the vibration of particles in the direction of travel." },
    { term: "Special Relativity", category: "Physics", def: "The physical theory regarding the relationship between space and time in the absence of gravity, based on two postulates." },
    { term: "Speed of Light", category: "Physics", def: "The universal physical constant c, exactly 299,792,458 meters per second, the maximum speed at which all energy, matter, and information can travel." },
    { term: "Standard Model", category: "Physics", def: "The theory of particle physics describing three of the four known fundamental forces and classifying all known elementary particles." },
    { term: "String Theory", category: "Physics", def: "A theoretical framework in which point-like particles are replaced by one-dimensional objects called strings." },
    { term: "Superconductivity", category: "Physics", def: "A phenomenon of exactly zero electrical resistance and expulsion of magnetic fields occurring in certain materials when cooled below a critical temperature." },
    { term: "Superposition", category: "Physics", def: "The principle that for all linear systems, the net response caused by two or more stimuli is the sum of the responses caused by each stimulus individually." },
    { term: "Thermal Conductivity", category: "Physics", def: "The property of a material to conduct heat, measured in watts per meter-kelvin." },
    { term: "Thermodynamics", category: "Physics", def: "The branch of physics dealing with heat and its relation to other forms of energy and work." },
    { term: "Torque", category: "Physics", def: "The rotational equivalent of linear force, representing the tendency of a force to rotate an object about an axis." },
    { term: "Uncertainty Principle", category: "Physics", def: "The principle stating that the position and momentum of a particle cannot both be measured exactly at the same time." },
    { term: "Velocity", category: "Physics", def: "The rate of change of an object's position with respect to a frame of reference, including both speed and direction." },
    { term: "Wave Function", category: "Physics", def: "A mathematical description of the quantum state of an isolated quantum system." },
    { term: "Wavelength", category: "Physics", def: "The distance between successive crests of a wave, especially points in a sound wave or electromagnetic wave." },
    { term: "Work", category: "Physics", def: "The product of force and displacement in the direction of the force, representing energy transfer." },

    // CHEMISTRY
    { term: "Acid", category: "Chemistry", def: "A substance that donates protons (H+ ions) or accepts electrons, typically having a pH less than 7." },
    { term: "Activation Energy", category: "Chemistry", def: "The minimum amount of extra energy required by a reacting molecule to get converted into a product." },
    { term: "Alkali Metal", category: "Chemistry", def: "Any of the elements lithium, sodium, potassium, rubidium, cesium, and francium, occupying Group 1 of the periodic table." },
    { term: "Alkaline Earth Metal", category: "Chemistry", def: "The six chemical elements in Group 2 of the periodic table: beryllium, magnesium, calcium, strontium, barium, and radium." },
    { term: "Allotrope", category: "Chemistry", def: "Different structural modifications of an element, such as diamond and graphite for carbon." },
    { term: "Anion", category: "Chemistry", def: "An ion with a negative electrical charge, formed when an atom gains one or more electrons." },
    { term: "Aqueous Solution", category: "Chemistry", def: "A solution in which the solvent is water." },
    { term: "Atomic Mass", category: "Chemistry", def: "The mass of an atom, typically expressed in atomic mass units (amu), approximately equal to the number of protons and neutrons." },
    { term: "Atomic Number", category: "Chemistry", def: "The number of protons in the nucleus of an atom, determining the chemical element." },
    { term: "Avogadro's Number", category: "Chemistry", def: "The number of constituent particles (usually atoms or molecules) in one mole of a substance, approximately 6.022 × 10²³." },
    { term: "Base", category: "Chemistry", def: "A substance that can accept protons (H+ ions) or donate electrons, typically having a pH greater than 7." },
    { term: "Bond Energy", category: "Chemistry", def: "The measure of bond strength in a chemical bond, defined as the amount of energy required to break one mole of bonds." },
    { term: "Buffer Solution", category: "Chemistry", def: "An aqueous solution consisting of a mixture of a weak acid and its conjugate base, or vice versa, resisting pH change upon addition of small amounts of acid or base." },
    { term: "Catalyst", category: "Chemistry", def: "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change." },
    { term: "Cation", category: "Chemistry", def: "An ion with a positive electrical charge, formed when an atom loses one or more electrons." },
    { term: "Chemical Equilibrium", category: "Chemistry", def: "A state in a chemical reaction where the concentrations of reactants and products remain constant over time." },
    { term: "Chemical Kinetics", category: "Chemistry", def: "The branch of physical chemistry concerned with understanding the rates of chemical reactions." },
    { term: "Covalent Bond", category: "Chemistry", def: "A chemical bond formed by the sharing of electron pairs between atoms." },
    { term: "Crystal Lattice", category: "Chemistry", def: "The symmetrical three-dimensional arrangement of atoms, ions, or molecules inside a crystalline solid." },
    { term: "Dipole Moment", category: "Chemistry", def: "A measure of the separation of positive and negative electrical charges within a molecule." },
    { term: "Distillation", category: "Chemistry", def: "The process of separating components of a mixture based on differences in boiling points." },
    { term: "Electrolysis", category: "Chemistry", def: "A technique that uses direct electric current to drive an otherwise non-spontaneous chemical reaction." },
    { term: "Electronegativity", category: "Chemistry", def: "A measure of the tendency of an atom to attract a bonding pair of electrons." },
    { term: "Electron Affinity", category: "Chemistry", def: "The amount of energy released when an electron is added to a neutral atom to form a negative ion." },
    { term: "Electron Configuration", category: "Chemistry", def: "The distribution of electrons of an atom or molecule in atomic or molecular orbitals." },
    { term: "Element", category: "Chemistry", def: "A pure substance consisting only of atoms that all have the same numbers of protons in their atomic nuclei." },
    { term: "Empirical Formula", category: "Chemistry", def: "A chemical formula showing the simplest whole-number ratio of atoms in a compound." },
    { term: "Endothermic", category: "Chemistry", def: "A chemical reaction that absorbs heat energy from its surroundings." },
    { term: "Enthalpy", category: "Chemistry", def: "A thermodynamic quantity equivalent to the total heat content of a system, equal to the internal energy plus the product of pressure and volume." },
    { term: "Entropy", category: "Chemistry", def: "A measure of the disorder or randomness in a system, increasing in spontaneous processes." },
    { term: "Exothermic", category: "Chemistry", def: "A chemical reaction that releases heat energy to its surroundings." },
    { term: "Free Radical", category: "Chemistry", def: "An atom, molecule, or ion that has unpaired valence electrons, making it highly reactive." },
    { term: "Functional Group", category: "Chemistry", def: "A specific group of atoms within a molecule that is responsible for the characteristic chemical reactions of that molecule." },
    { term: "Gas Chromatography", category: "Chemistry", def: "A common type of chromatography used in analytical chemistry for separating and analyzing compounds that can be vaporized." },
    { term: "Half-Reaction", category: "Chemistry", def: "Either the oxidation or reduction reaction component of a redox reaction." },
    { term: "Halogen", category: "Chemistry", def: "Any of the elements fluorine, chlorine, bromine, iodine, and astatine, occupying Group 17 of the periodic table." },
    { term: "Heterogeneous Mixture", category: "Chemistry", def: "A mixture in which the composition is not uniform throughout the mixture." },
    { term: "Homogeneous Mixture", category: "Chemistry", def: "A mixture in which the composition is uniform throughout the mixture, also called a solution." },
    { term: "Hydrogen Bond", category: "Chemistry", def: "A weak bond between two molecules resulting from an electrostatic attraction between a proton in one molecule and an electronegative atom in the other." },
    { term: "Hydrophobic", category: "Chemistry", def: "Tending to repel or fail to mix with water, literally 'water-fearing'." },
    { term: "Ionic Bond", category: "Chemistry", def: "A chemical bond formed through the electrostatic attraction between oppositely charged ions." },
    { term: "Ionization Energy", category: "Chemistry", def: "The minimum amount of energy required to remove an electron from an atom or molecule in the gaseous state." },
    { term: "Isomer", category: "Chemistry", def: "Molecules with the same molecular formula but different structural arrangements of atoms." },
    { term: "Lewis Structure", category: "Chemistry", def: "A diagram showing the bonding between atoms of a molecule and the lone pairs of electrons that may exist." },
    { term: "Mass Spectrometry", category: "Chemistry", def: "An analytical technique that ionizes chemical species and sorts the resulting ions based on their mass-to-charge ratio." },
    { term: "Metallic Bond", category: "Chemistry", def: "The force of attraction between valence electrons and the metal atoms, holding the metal together." },
    { term: "Molar Mass", category: "Chemistry", def: "The mass of a given chemical element or chemical compound divided by the amount of substance, measured in g/mol." },
    { term: "Molarity", category: "Chemistry", def: "The concentration of a solution, defined as the number of moles of solute per liter of solution." },
    { term: "Mole", category: "Chemistry", def: "The unit of amount of substance in the International System of Units, defined as exactly 6.02214076 × 10²³ elementary entities." },
    { term: "Molecular Formula", category: "Chemistry", def: "A chemical formula that gives the total number of atoms of each element in a molecule." },
    { term: "Noble Gas", category: "Chemistry", def: "Any of the gaseous elements helium, neon, argon, krypton, xenon, and radon, occupying Group 18 of the periodic table." },
    { term: "Nuclear Magnetic Resonance", category: "Chemistry", def: "A physical phenomenon in which nuclei in a magnetic field absorb and re-emit electromagnetic radiation, used in spectroscopy." },
    { term: "Nucleophile", category: "Chemistry", def: "A chemical species that donates an electron pair to form a chemical bond, literally 'nucleus-loving'." },
    { term: "Octet Rule", category: "Chemistry", def: "The principle that atoms tend to combine in such a way that they each have eight electrons in their valence shell." },
    { term: "Organic Chemistry", category: "Chemistry", def: "The branch of chemistry that studies the structure, properties, and reactions of organic compounds containing carbon." },
    { term: "Oxidation", category: "Chemistry", def: "The loss of electrons or an increase in the oxidation state of an atom, ion, or molecule." },
    { term: "Oxidation State", category: "Chemistry", def: "The degree of oxidation of an atom in a chemical compound, representing the hypothetical charge if all bonds were ionic." },
    { term: "Periodic Table", category: "Chemistry", def: "A tabular arrangement of chemical elements, ordered by atomic number, electron configuration, and recurring chemical properties." },
    { term: "pH", category: "Chemistry", def: "A scale used to specify the acidity or basicity of an aqueous solution, ranging from 0 (acidic) to 14 (basic)." },
    { term: "Photochemistry", category: "Chemistry", def: "The branch of chemistry concerned with the chemical effects of light." },
    { term: "Polar Molecule", category: "Chemistry", def: "A molecule in which the distribution of electrical charge is not symmetric, resulting in a dipole moment." },
    { term: "Polymer", category: "Chemistry", def: "A large molecule composed of many repeated subunits, called monomers." },
    { term: "Precipitate", category: "Chemistry", def: "A solid that forms and settles out of a liquid mixture during a chemical reaction." },
    { term: "Radioisotope", category: "Chemistry", def: "An atom that has excess nuclear energy, making it unstable and prone to radioactive decay." },
    { term: "Redox Reaction", category: "Chemistry", def: "A type of chemical reaction that involves a transfer of electrons between two species, comprising oxidation and reduction." },
    { term: "Reduction", category: "Chemistry", def: "The gain of electrons or a decrease in the oxidation state of an atom, ion, or molecule." },
    { term: "Resonance", category: "Chemistry", def: "The use of two or more Lewis structures to represent a particular molecule, where the actual electronic structure is an average." },
    { term: "Solubility", category: "Chemistry", def: "The property of a substance (solute) to dissolve in a given solvent to form a homogeneous solution." },
    { term: "Solute", category: "Chemistry", def: "A substance dissolved in a solvent to make a solution." },
    { term: "Solution", category: "Chemistry", def: "A homogeneous mixture composed of two or more substances." },
    { term: "Solvent", category: "Chemistry", def: "The component of a solution that is present in the greatest amount, dissolving the solute." },
    { term: "Spectroscopy", category: "Chemistry", def: "The study of the interaction between matter and electromagnetic radiation as a function of wavelength or frequency." },
    { term: "Stoichiometry", category: "Chemistry", def: "The calculation of reactants and products in chemical reactions, based on the conservation of mass." },
    { term: "Titration", category: "Chemistry", def: "A laboratory method used to determine the concentration of an identified analyte by reacting it with a reagent of known concentration." },
    { term: "Transition Metal", category: "Chemistry", def: "An element whose atom has a partially filled d sub-shell, or which can give rise to cations with an incomplete d sub-shell." },
    { term: "Valence Electrons", category: "Chemistry", def: "The outer shell electrons associated with an atom that can participate in the formation of a chemical bond." },
    { term: "VSEPR Theory", category: "Chemistry", def: "Valence Shell Electron Pair Repulsion theory, used to predict the geometry of individual molecules from the number of electron pairs surrounding their central atoms." },

    // BIOLOGY 
    { term: "Allele", category: "Biology", def: "One of two or more versions of a gene at a given locus on a chromosome." },
    { term: "Amino Acid", category: "Biology", def: "Organic compounds that serve as the building blocks of proteins, containing both amino and carboxyl functional groups." },
    { term: "Anatomy", category: "Biology", def: "The branch of biology concerned with the study of the structure of organisms and their parts." },
    { term: "Antibody", category: "Biology", def: "A protein produced by the immune system in response to the presence of a specific antigen." },
    { term: "Antigen", category: "Biology", def: "A substance that induces an immune response, especially the production of antibodies." },
    { term: "Asexual Reproduction", category: "Biology", def: "A mode of reproduction by which offspring arise from a single organism without the fusion of gametes." },
    { term: "ATP", category: "Biology", def: "Adenosine triphosphate, the principal molecule for storing and transferring energy in cells." },
    { term: "Autotroph", category: "Biology", def: "An organism that produces its own food from inorganic substances using light or chemical energy." },
    { term: "Bacteriophage", category: "Biology", def: "A virus that infects and replicates within bacteria." },
    { term: "Binomial Nomenclature", category: "Biology", def: "A formal system of naming species of living things by giving each a name composed of two parts: genus and species." },
    { term: "Biome", category: "Biology", def: "A large community of vegetation and wildlife adapted to a specific climate, such as a desert or tropical rainforest." },
    { term: "Biosphere", category: "Biology", def: "The global ecological system integrating all living beings and their relationships, including their interaction with the lithosphere, hydrosphere, and atmosphere." },
    { term: "Cell", category: "Biology", def: "The basic structural, functional, and biological unit of all known living organisms." },
    { term: "Cell Membrane", category: "Biology", def: "The semipermeable membrane surrounding the cytoplasm of a cell, regulating what enters and exits." },
    { term: "Cellular Respiration", category: "Biology", def: "A set of metabolic reactions and processes that take place in the cells of organisms to convert biochemical energy from nutrients into ATP." },
    { term: "Centriole", category: "Biology", def: "A cylindrical organelle composed of microtubules, involved in cell division in animal cells." },
    { term: "Chloroplast", category: "Biology", def: "An organelle found in plant and algal cells that conducts photosynthesis, containing chlorophyll." },
    { term: "Chromatid", category: "Biology", def: "One of two identical halves of a replicated chromosome, joined at the centromere." },
    { term: "Chromosome", category: "Biology", def: "A thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information." },
    { term: "Cilia", category: "Biology", def: "Short, hair-like projections on the surface of some cells, used for movement or sensing." },
    { term: "Codon", category: "Biology", def: "A sequence of three nucleotides that together form a unit of genetic code in DNA or RNA." },
    { term: "Commensalism", category: "Biology", def: "A long-term biological interaction in which one species benefits while the other is unaffected." },
    { term: "Community", category: "Biology", def: "An interacting group of various species in a common location." },
    { term: "Cytokinesis", category: "Biology", def: "The physical process of cell division, which divides the cytoplasm of a parental cell into two daughter cells." },
    { term: "Cytoplasm", category: "Biology", def: "The material or protoplasm within a living cell, excluding the nucleus." },
    { term: "Cytoskeleton", category: "Biology", def: "A network of fibers composed of proteins that gives shape and structure to a cell." },
    { term: "Diploid", category: "Biology", def: "A cell or organism having two complete sets of chromosomes, one from each parent." },
    { term: "DNA", category: "Biology", def: "Deoxyribonucleic acid, the molecule carrying genetic instructions for development, functioning, growth, and reproduction." },
    { term: "DNA Replication", category: "Biology", def: "The biological process of producing two identical replicas of DNA from one original DNA molecule." },
    { term: "Dominant Trait", category: "Biology", def: "A genetic trait that is expressed when at least one copy of the dominant allele is present." },
    { term: "Ecosystem", category: "Biology", def: "A biological community of interacting organisms and their physical environment." },
    { term: "Endocytosis", category: "Biology", def: "The process by which cells absorb molecules by engulfing them with the cell membrane." },
    { term: "Endoplasmic Reticulum", category: "Biology", def: "A network of membranous tubules within the cytoplasm of a eukaryotic cell, involved in protein and lipid synthesis." },
    { term: "Endosymbiosis", category: "Biology", def: "The theory that mitochondria and chloroplasts originated as free-living prokaryotes that were engulfed by larger cells." },
    { term: "Enzyme", category: "Biology", def: "A biological catalyst that accelerates chemical reactions in living organisms without being consumed." },
    { term: "Epigenetics", category: "Biology", def: "The study of heritable changes in gene expression that do not involve changes to the underlying DNA sequence." },
    { term: "Eukaryote", category: "Biology", def: "An organism whose cells contain a nucleus and other organelles enclosed within membranes." },
    { term: "Evolution", category: "Biology", def: "The change in the heritable characteristics of biological populations over successive generations." },
    { term: "Exocytosis", category: "Biology", def: "The process by which a cell transports secretory vesicles out of the cell membrane." },
    { term: "Fermentation", category: "Biology", def: "A metabolic process that produces chemical changes in organic substrates through the action of enzymes, often in the absence of oxygen." },
    { term: "Flagellum", category: "Biology", def: "A lash-like appendage that protrudes from the cell body of certain cells, used for locomotion." },
    { term: "Gene", category: "Biology", def: "A sequence of nucleotides in DNA or RNA that codes for a functional molecule, usually a protein." },
    { term: "Gene Expression", category: "Biology", def: "The process by which information from a gene is used in the synthesis of a functional gene product." },
    { term: "Genetic Drift", category: "Biology", def: "A mechanism of evolution referring to random fluctuations in the frequencies of alleles from one generation to the next." },
    { term: "Genetics", category: "Biology", def: "The branch of biology concerned with the study of genes, genetic variation, and heredity in organisms." },
    { term: "Genome", category: "Biology", def: "The complete set of genetic information in an organism, including all of its genes." },
    { term: "Genotype", category: "Biology", def: "The genetic constitution of an individual organism, as distinct from its phenotype." },
    { term: "Golgi Apparatus", category: "Biology", def: "An organelle in eukaryotic cells responsible for packaging, modifying, and sorting proteins and lipids." },
    { term: "Haploid", category: "Biology", def: "A cell or organism having a single set of unpaired chromosomes." },
    { term: "Heterotroph", category: "Biology", def: "An organism that cannot produce its own food and instead obtains nutrition from other sources of organic carbon." },
    { term: "Homeostasis", category: "Biology", def: "The tendency of an organism or cell to regulate its internal conditions to maintain a stable equilibrium." },
    { term: "Homologous Chromosomes", category: "Biology", def: "A pair of chromosomes, one from each parent, that have the same genes in the same positions." },
    { term: "Immunology", category: "Biology", def: "The branch of biology and medicine concerned with the study of the immune system." },
    { term: "Lysosome", category: "Biology", def: "A membrane-bound organelle containing digestive enzymes, responsible for breaking down waste materials." },
    { term: "Meiosis", category: "Biology", def: "A type of cell division that reduces the chromosome number by half, creating four haploid cells, each genetically distinct." },
    { term: "Metabolism", category: "Biology", def: "The set of life-sustaining chemical reactions in organisms, divided into catabolism and anabolism." },
    { term: "Mitochondria", category: "Biology", def: "Double-membrane-bound organelles found in most eukaryotic cells, generating most of the cell's supply of ATP." },
    { term: "Mitosis", category: "Biology", def: "A process of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus." },
    { term: "Mutualism", category: "Biology", def: "A type of biological interaction where both species involved benefit from the relationship." },
    { term: "Mutation", category: "Biology", def: "A permanent alteration in the nucleotide sequence of the genome of an organism." },
    { term: "Natural Selection", category: "Biology", def: "The differential survival and reproduction of individuals due to differences in phenotype, a key mechanism of evolution." },
    { term: "Nucleotide", category: "Biology", def: "The basic building block of nucleic acids, consisting of a sugar, a phosphate group, and a nitrogenous base." },
    { term: "Nucleus", category: "Biology", def: "A membrane-bound organelle in eukaryotic cells that contains the cell's genetic material." },
    { term: "Organelle", category: "Biology", def: "A specialized subunit within a cell that has a specific function, usually separately enclosed within its own lipid bilayer." },
    { term: "Osmosis", category: "Biology", def: "The spontaneous net movement of solvent molecules through a selectively permeable membrane into a region of higher solute concentration." },
    { term: "Parasitism", category: "Biology", def: "A non-mutual symbiotic relationship between species, where one organism benefits at the expense of the other." },
    { term: "Pathogen", category: "Biology", def: "A biological agent that causes disease or illness to its host." },
    { term: "Phenotype", category: "Biology", def: "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment." },
    { term: "Photosynthesis", category: "Biology", def: "The process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water." },
    { term: "Plasmid", category: "Biology", def: "A small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA." },
    { term: "Prokaryote", category: "Biology", def: "A unicellular organism that lacks a membrane-bound nucleus, mitochondria, or any other membrane-bound organelle." },
    { term: "Protein", category: "Biology", def: "Large biomolecules consisting of one or more long chains of amino acid residues, performing a vast array of functions." },
    { term: "Punnett Square", category: "Biology", def: "A diagram used to predict the genotype and phenotype combinations of a genetic cross or breeding experiment." },
    { term: "Recessive Trait", category: "Biology", def: "A genetic trait that is only expressed when two copies of the recessive allele are present." },
    { term: "Ribosome", category: "Biology", def: "A complex molecular machine found within all living cells that serves as the site of biological protein synthesis." },
    { term: "RNA", category: "Biology", def: "Ribonucleic acid, a polymeric molecule essential in various biological roles in coding, decoding, regulation, and expression of genes." },
    { term: "Speciation", category: "Biology", def: "The evolutionary process by which biological populations evolve to become distinct species." },
    { term: "Symbiosis", category: "Biology", def: "Any type of close and long-term biological interaction between two different biological organisms." },
    { term: "Taxonomy", category: "Biology", def: "The science of naming, defining, and classifying groups of biological organisms on the basis of shared characteristics." },
    { term: "Transcription", category: "Biology", def: "The process of making an RNA copy of a gene sequence, the first step in gene expression." },
    { term: "Translation", category: "Biology", def: "The process in which ribosomes synthesize proteins using the mRNA template produced during transcription." },
    { term: "Trophic Level", category: "Biology", def: "The position an organism occupies in a food chain, such as primary producer, herbivore, or carnivore." },
    { term: "Vacuole", category: "Biology", def: "A membrane-bound organelle that stores substances and maintains turgor pressure in plant cells." },
    { term: "Virus", category: "Biology", def: "A small infectious agent that replicates only inside the living cells of an organism, consisting of genetic material within a protein coat." },
    { term: "Zygote", category: "Biology", def: "A eukaryotic cell formed by a fertilization event between two gametes, containing the genetic material of both parents." },

    // EARTH & SPACE SCIENCES 
    { term: "Asteroid", category: "Earth Science", def: "A small rocky body orbiting the Sun, typically found in the asteroid belt between Mars and Jupiter." },
    { term: "Asthenosphere", category: "Earth Science", def: "The highly viscous, mechanically weak, and ductile region of the upper mantle of the Earth." },
    { term: "Atmosphere", category: "Earth Science", def: "The layer of gases surrounding a planet, retained by the planet's gravity." },
    { term: "Big Bang Theory", category: "Earth Science", def: "The prevailing cosmological model describing the early development of the universe from an extremely hot, dense state." },
    { term: "Biogeochemical Cycle", category: "Earth Science", def: "The pathway by which a chemical substance moves through biotic and abiotic compartments of Earth." },
    { term: "Comet", category: "Earth Science", def: "An icy small body that, when passing close to the Sun, warms and begins to release gases, forming a visible atmosphere or tail." },
    { term: "Continental Drift", category: "Earth Science", def: "The theory that Earth's continents have moved over geologic time relative to each other, eventually forming the current configuration." },
    { term: "Coriolis Effect", category: "Earth Science", def: "The apparent deflection of moving objects when viewed from a rotating reference frame, affecting global wind patterns." },
    { term: "Cosmology", category: "Earth Science", def: "The study of the origin, evolution, and eventual fate of the universe." },
    { term: "Crust", category: "Earth Science", def: "The outermost solid shell of a rocky planet or natural satellite, chemically distinct from the underlying mantle." },
    { term: "Doppler Shift", category: "Earth Science", def: "The change in wavelength of light or sound waves due to the relative motion between the source and observer." },
    { term: "Earthquake", category: "Earth Science", def: "The shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere." },
    { term: "Eclipse", category: "Earth Science", def: "An astronomical event that occurs when an astronomical object is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer." },
    { term: "El Niño", category: "Earth Science", def: "A climate pattern describing the unusual warming of surface waters in the eastern tropical Pacific Ocean." },
    { term: "Erosion", category: "Earth Science", def: "The action of surface processes that remove soil, rock, or dissolved material from one location and transport it to another." },
    { term: "Exoplanet", category: "Earth Science", def: "A planet that orbits a star outside our solar system." },
    { term: "Fault", category: "Earth Science", def: "A fracture or zone of fractures between two blocks of rock, along which movement has occurred." },
    { term: "Fossil", category: "Earth Science", def: "The preserved remains, impression, or trace of any once-living thing from a past geological age." },
    { term: "Galaxy", category: "Earth Science", def: "A gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter." },
    { term: "Geologic Time Scale", category: "Earth Science", def: "A system of chronological dating that relates geological strata to time, used to describe the timing and relationships of events in Earth's history." },
    { term: "Greenhouse Effect", category: "Earth Science", def: "The process by which radiation from a planet's atmosphere warms the planet's surface to a temperature above what it would be without its atmosphere." },
    { term: "Habitat", category: "Earth Science", def: "The natural home or environment of an animal, plant, or other organism." },
    { term: "Hydrosphere", category: "Earth Science", def: "The combined mass of water found on, under, and over the surface of a planet." },
    { term: "Igneous Rock", category: "Earth Science", def: "Rock formed through the cooling and solidification of magma or lava." },
    { term: "Lithosphere", category: "Earth Science", def: "The rigid, outermost shell of the Earth, comprising the crust and upper mantle." },
    { term: "Magma", category: "Earth Science", def: "Molten or semi-molten rock beneath the Earth's surface, from which igneous rocks are formed." },
    { term: "Metamorphic Rock", category: "Earth Science", def: "Rock that has been changed from its original form by heat, pressure, or chemical processes." },
    { term: "Meteorology", category: "Earth Science", def: "The interdisciplinary scientific study of the atmosphere focusing on weather forecasting." },
    { term: "Milky Way", category: "Earth Science", def: "The barred spiral galaxy that contains our Solar System, with a diameter of about 100,000–200,000 light-years." },
    { term: "Mineral", category: "Earth Science", def: "A naturally occurring chemical compound, usually of crystalline form and abiogenic in origin." },
    { term: "Nebula", category: "Earth Science", def: "A giant cloud of dust and gas in space, often a region where new stars are beginning to form." },
    { term: "Neutron Star", category: "Earth Science", def: "The collapsed core of a massive supergiant star, composed almost entirely of neutrons." },
    { term: "Ocean Current", category: "Earth Science", def: "A continuous, directed movement of seawater generated by forces such as wind, Coriolis effect, and temperature gradients." },
    { term: "Oceanography", category: "Earth Science", def: "The branch of Earth science that studies the ocean, including its physical and biological properties." },
    { term: "Orbit", category: "Earth Science", def: "The curved path of a celestial object or spacecraft around a star, planet, or moon." },
    { term: "Paleontology", category: "Earth Science", def: "The scientific study of life that existed prior to the start of the Holocene Epoch." },
    { term: "Plate Tectonics", category: "Earth Science", def: "The scientific theory describing the large-scale motion of Earth's lithosphere, divided into tectonic plates." },
    { term: "Redshift", category: "Earth Science", def: "A phenomenon where electromagnetic radiation from an object undergoes an increase in wavelength, indicating the object is moving away from the observer." },
    { term: "Rock Cycle", category: "Earth Science", def: "The continuous process by which rocks are created, changed, destroyed, and formed again through geological processes." },
    { term: "Sedimentary Rock", category: "Earth Science", def: "Rock formed by the accumulation or deposition of mineral or organic particles at Earth's surface." },
    { term: "Seismology", category: "Earth Science", def: "The scientific study of earthquakes and the propagation of elastic waves through Earth." },
    { term: "Solar System", category: "Earth Science", def: "The gravitationally bound system of the Sun and the objects that orbit it, including eight planets and their moons." },
    { term: "Supernova", category: "Earth Science", def: "A powerful and luminous explosion of a star, often briefly outshining an entire galaxy." },
    { term: "Tectonic Plate", category: "Earth Science", def: "A massive, irregularly shaped slab of solid rock, generally composed of both continental and oceanic lithosphere." },
    { term: "Tsunami", category: "Earth Science", def: "A series of ocean waves caused by the displacement of a large volume of water, typically by earthquakes or volcanic eruptions." },
    { term: "Volcano", category: "Earth Science", def: "A rupture in the crust of a planetary-mass object that allows hot lava, volcanic ash, and gases to escape from a magma chamber." },
    { term: "Weathering", category: "Earth Science", def: "The breaking down of rocks, soil, and minerals through contact with the Earth's atmosphere, water, and biological organisms." },
    { term: "White Dwarf", category: "Earth Science", def: "A stellar core remnant composed mostly of electron-degenerate matter, the final evolutionary state of stars not massive enough to become neutron stars." },

    // ENGINEERING & TECHNOLOGY 
    { term: "Algorithm", category: "Computer Science", def: "Similar to mathematics, but in engineering, this is a systematic, step-by-step computational procedure used to solve engineering problems, analyze systems, process data, or control processes." },
    { term: "API", category: "Computer Science", def: "Application Programming Interface, a set of protocols and tools for building software applications." },
    { term: "Artificial Intelligence", category: "Computer Science", def: "The simulation of human intelligence processes by machines, especially computer systems." },
    { term: "Bandwidth", category: "Engineering", def: "The maximum rate of data transfer across a given path in a network, measured in bits per second." },
    { term: "Binary Code", category: "Computer Science", def: "A system of representing text, computer processor instructions, or any other data using a two-symbol system, usually 0 and 1." },
    { term: "Blockchain", category: "Computer Science", def: "A decentralized, distributed digital ledger that records transactions across many computers." },
    { term: "Boolean Logic", category: "Computer Science", def: "A branch of algebra in which variables are truth values: true or false, used in digital circuit design." },
    { term: "CAD", category: "Engineering", def: "Computer-Aided Design, the use of computer systems to assist in the creation, modification, analysis, or optimization of a design." },
    { term: "Circuit", category: "Engineering", def: "A path in which electrons from a voltage or current source flow, typically including conductors and components." },
    { term: "Compiler", category: "Computer Science", def: "A computer program that translates computer code written in one programming language into another language." },
    { term: "Data Structure", category: "Computer Science", def: "A specialized format for organizing, processing, retrieving, and storing data, such as arrays, trees, or graphs." },
    { term: "Database", category: "Computer Science", def: "An organized collection of data stored and accessed electronically from a computer system." },
    { term: "Deep Learning", category: "Computer Science", def: "A subset of machine learning based on artificial neural networks with multiple layers, capable of learning from large amounts of data." },
    { term: "Encryption", category: "Computer Science", def: "The process of encoding information so that only authorized parties can access it." },
    { term: "Feedback Loop", category: "Engineering", def: "A process in which the outputs of a system are routed back as inputs as part of a chain of cause-and-effect." },
    { term: "Finite Element Analysis", category: "Engineering", def: "A numerical method for solving problems of engineering and mathematical physics by subdividing a large system into smaller parts." },
    { term: "Firewall", category: "Computer Science", def: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules." },
    { term: "Firmware", category: "Computer Science", def: "A specific class of computer software that provides low-level control for a device's specific hardware." },
    { term: "GUI", category: "Computer Science", def: "Graphical User Interface, a form of user interface that allows users to interact with electronic devices through graphical icons." },
    { term: "Hash Function", category: "Computer Science", def: "A function that converts an input of arbitrary length into a fixed-size string of characters, used in data retrieval and cryptography." },
    { term: "Heat Exchanger", category: "Engineering", def: "A system used to transfer heat between two or more fluids without mixing them." },
    { term: "Hydraulics", category: "Engineering", def: "The mechanical properties and use of liquids, especially in engineering applications involving force transmission." },
    { term: "Internet Protocol", category: "Computer Science", def: "The principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries." },
    { term: "Kernel", category: "Computer Science", def: "The core component of an operating system, managing system resources and communication between hardware and software." },
    { term: "Latency", category: "Engineering", def: "The time delay between the cause and the effect of some physical change in a system." },
    { term: "Machine Learning", category: "Computer Science", def: "A branch of artificial intelligence focused on building systems that learn from data without being explicitly programmed." },
    { term: "Machine Learning Model", category: "Computer Science", def: "A mathematical representation of a real-world process, trained on data to make predictions or decisions." },
    { term: "Neural Network", category: "Computer Science", def: "A computing system inspired by biological neural networks, consisting of interconnected nodes that process information." },
    { term: "Operating System", category: "Computer Science", def: "System software that manages computer hardware, software resources, and provides common services for computer programs." },
    { term: "Overclocking", category: "Computer Science", def: "The practice of increasing the clock rate of a computer's processor beyond the manufacturer's specifications." },
    { term: "PID Controller", category: "Engineering", def: "A control loop mechanism employing feedback, widely used in industrial control systems for continuous modulation control." },
    { term: "Protocol", category: "Computer Science", def: "A set of rules governing the exchange or transmission of data between devices." },
    { term: "Recursion", category: "Computer Science", def: "A method of solving problems where the solution depends on solutions to smaller instances of the same problem." },
    { term: "Resistor", category: "Engineering", def: "A passive two-terminal electrical component that implements electrical resistance as a circuit element." },
    { term: "Semiconductor", category: "Engineering", def: "A material with electrical conductivity between that of a conductor and an insulator, the foundation of modern electronics." },
    { term: "Signal Processing", category: "Engineering", def: "The analysis, interpretation, and manipulation of signals such as sound, images, and biological measurements." },
    { term: "Software Engineering", category: "Computer Science", def: "The systematic application of engineering approaches to the development of software." },
    { term: "SQL", category: "Computer Science", def: "Structured Query Language, a domain-specific language used in programming and managing data held in relational database management systems." },
    { term: "Stress Analysis", category: "Engineering", def: "The determination of the stresses in materials and structures to establish their strength and expected service life." },
    { term: "Thermodynamics", category: "Engineering", def: "The branch of engineering and physics concerned with the relationships between heat and other forms of energy." },
    { term: "Transistor", category: "Engineering", def: "A semiconductor device used to amplify or switch electrical signals and electrical power." },
    { term: "Turbine", category: "Engineering", def: "A rotary mechanical device that extracts energy from a fluid flow and converts it into useful work." },
    { term: "User Interface", category: "Computer Science", def: "The space where interactions between humans and machines occur, encompassing hardware and software components." },
    { term: "Virtual Memory", category: "Computer Science", def: "A memory management technique that provides an idealized abstraction of the storage resources available on a computer." }
];

    const generateResultCard = (data) => {
        // Highlights matching text using Regex
        const regex = new RegExp(`(${searchInput.value})`, "gi");
        const highlightedTerm = data.term.replace(regex, `<span style="color: var(--accent-primary)">$1</span>`);

        return `
            <div class="result-card">
                <span class="result-category">${data.category}</span>
                <h3 class="result-title">${highlightedTerm}</h3>
                <p class="result-definition">${data.def}</p>
                <div class="result-actions">
                    <button class="action-btn" onclick="window.location.href='LearnMore.html?term=${encodeURIComponent(data.term)}'">Learn More</button>
                    <button class="action-btn notice-trigger-btn" data-feature="Simulate">Simulate</button>
                    <button class="action-btn notice-trigger-btn" data-feature="Ask AI">Ask AI</button>
                </div>
            </div>
        `;
    };

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length > 0) {
            // Trigger Wipe-down Layout
            mainLayout.classList.add("search-active");
            
            // Filter Data
            const results = stemDatabase.filter(item => 
                item.term.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            );

            // Populate Grid
            if (results.length > 0) {
                resultsGrid.innerHTML = results.map(generateResultCard).join('');
            } else {
                resultsGrid.innerHTML = `<p style="color: var(--text-muted)">No matching STEM terminology found for "${query}". <br/><br/> Want to ask the <b>STEMULAR AI</b> instead?</p>`;
            }
        } else {
            // Revert to Homepage Layout
            mainLayout.classList.remove("search-active");
            resultsGrid.innerHTML = ''; // Clear results
        }
    });

    // --- 3. Parallax Background Blob Effect ---
    const blobs = document.querySelectorAll('.blob');
    
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            // Slight offset calculation based on blob index to create depth
            const speed = (index + 1) * 20; 
            const moveX = (x * speed) - (speed / 2);
            const moveY = (y * speed) - (speed / 2);
            
            // We use transform in CSS animation as well, so we add a wrapper or adjust margin.
            // Since transform is used in keyframes, manipulating `margin` or `top/left` avoids overriding the keyframes.
            blob.style.marginLeft = `${moveX}px`;
            blob.style.marginTop = `${moveY}px`;
        });
    });
});

// --- 4. Themes Navigation Functionality ---
    const themeSelectors = document.querySelectorAll('.theme-selector');
    
    // Retrieve saved theme from localStorage, default to 'standard'
    const savedTheme = localStorage.getItem('stemular-theme') || 'standard';

    const applyTheme = (theme) => {
        // Clear all theme classes to reset to Standard
        document.body.classList.remove('dark-theme', 'light-theme');
        
        // Apply the newly selected theme
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (theme === 'light') {
            document.body.classList.add('light-theme');
        }
        
        // Persist the choice for page reloads
        localStorage.setItem('stemular-theme', theme);
    };

    // Initialize the theme immediately on load
    applyTheme(savedTheme);

    // Attach click events to the dropdown options
    themeSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents page from jumping to top on click
            const selectedTheme = e.currentTarget.getAttribute('data-theme');
            applyTheme(selectedTheme);
        });
    });

const chatLink = document.getElementById('ai-chat-link');
const modal = document.getElementById('notice-modal');
const closeBtn = document.getElementById('close-modal-btn');
const modalText = document.querySelector('.modal-text'); // Grab the text paragraph inside modal
const creditsNoticeButton = document.getElementById('credits-notice-button');
const creditsNoticeModal = document.getElementById('credits-notice-modal');
const closeCreditsNoticeButton = document.getElementById('close-credits-notice-btn');

// Helper function to open modal with custom message
const openModal = (featureName) => {
    if (modalText) {
        if (featureName) {
            modalText.textContent = `The ${featureName} feature isn't available yet. Check back soon for updates!`;
        } else {
            modalText.textContent = `The AI Chat feature isn't available yet. Check back soon for updates!`;
        }
    }
    modal.classList.add('active');
};

if (modal && closeBtn) {
    // 1. Open Modal on Sidebar AI Chat Click
    if (chatLink) {
        chatLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('AI Chat');
        });
    }

    // 2. Open Modal on Dynamic Result Buttons ("Simulate" or "Ask AI") using Event Delegation
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('notice-trigger-btn')) {
            e.preventDefault();
            const featureName = e.target.getAttribute('data-feature');
            openModal(featureName);
        }
    });

    // Close Modal on Button Click
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close Modal on Clicking Outside Card
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

if (creditsNoticeButton && creditsNoticeModal && closeCreditsNoticeButton) {
    creditsNoticeButton.addEventListener('click', () => {
        creditsNoticeModal.classList.add('active');
    });

    closeCreditsNoticeButton.addEventListener('click', () => {
        creditsNoticeModal.classList.remove('active');
    });

    creditsNoticeModal.addEventListener('click', (e) => {
        if (e.target === creditsNoticeModal) {
            creditsNoticeModal.classList.remove('active');
        }
    });
}
