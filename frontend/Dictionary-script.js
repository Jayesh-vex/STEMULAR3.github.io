document.addEventListener("DOMContentLoaded", () => {
    // 1. Expanded STEM Database
const dictionaryDatabase = [
    // =========================================================
    // MATHEMATICS
    // =========================================================
    {
        term: "Absolute Value",
        broadCategory: "Mathematics",
        subject: "",
        def: "The absolute value of a number is its non-negative distance from zero on the number line, regardless of whether the original number is positive or negative.",
        example: "The absolute value of -7 is 7 because -7 is seven units away from zero.",
        related: ["Integers", "Number Line", "Distance"]
    },

    {
        term: "Algorithm",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "A finite and organized sequence of well-defined steps used to solve a problem, perform a calculation, or complete a specific task efficiently.",
        example: "Following a step-by-step procedure for finding the greatest common factor of two numbers is an example of an algorithm.",
        related: ["Logic", "Recursion", "Computation"]
    },

    {
        term: "Asymptote",
        broadCategory: "Mathematics",
        subject: "",
        def: "A line that a graph approaches increasingly closely as the independent variable moves toward a particular value or toward positive or negative infinity.",
        example: "The graph of y = 1/x approaches, but never reaches, the x-axis and y-axis, which are its asymptotes.",
        related: ["Function", "Limit", "Graph"]
    },

    {
        term: "Binomial Theorem",
        broadCategory: "Mathematics",
        subject: "",
        def: "A mathematical formula used to expand powers of a binomial expression into a sum of terms without multiplying the binomial repeatedly.",
        example: "The Binomial Theorem can be used to expand (x + 2)^3 into a polynomial expression.",
        related: ["Polynomial", "Binomial", "Combinatorics"]
    },

    {
        term: "Calculus",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "A branch of mathematics that studies continuous change using derivatives and integrals and is widely used to model motion, growth, rates, areas, and accumulated quantities.",
        example: "Calculus can be used to determine the instantaneous velocity of a moving object from its position function.",
        related: ["Derivative", "Integral", "Limit"]
    },

    {
        term: "Cardinality",
        broadCategory: "Mathematics",
        subject: "",
        def: "The cardinality of a set is the number of distinct elements contained in that set, whether the set is finite or, in more advanced mathematics, infinite.",
        example: "The set {2, 4, 6, 8} has a cardinality of 4.",
        related: ["Set Theory", "Set", "Counting"]
    },

    {
        term: "Cartesian Coordinates",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "A coordinate system that identifies the position of a point using numerical values measured along perpendicular axes, commonly represented as (x, y) in two dimensions.",
        example: "The point (3, 4) is located three units horizontally and four units vertically from the origin.",
        related: ["Coordinate Plane", "Vector", "Graph"]
    },

    {
        term: "Central Limit Theorem",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A statistical theorem stating that the distribution of sample means tends to become approximately normal as the sample size becomes sufficiently large, even when the original population is not normally distributed.",
        example: "Researchers can use the Central Limit Theorem when analyzing averages from many random samples of a population.",
        related: ["Mean", "Normal Distribution", "Sampling"]
    },

    {
        term: "Combinatorics",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "The branch of mathematics concerned with counting, arranging, selecting, and studying possible combinations of objects under specified conditions.",
        example: "Determining how many different ways five students can be arranged in a row is a combinatorics problem.",
        related: ["Permutation", "Probability", "Factorial"]
    },

    {
        term: "Complex Number",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "A number written in the form a + bi, where a and b are real numbers and i is the imaginary unit satisfying i² = -1.",
        example: "The number 3 + 4i is a complex number with a real part of 3 and an imaginary part of 4.",
        related: ["Imaginary Number", "Real Number", "Algebra"]
    },

    {
        term: "Conic Section",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "A curve formed by the intersection of a plane with a cone, producing shapes such as circles, ellipses, parabolas, and hyperbolas.",
        example: "The orbit of a planet can be approximated by an ellipse, which is one type of conic section.",
        related: ["Parabola", "Ellipse", "Hyperbola"]
    },

    {
        term: "Correlation Coefficient",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A numerical measure that describes the direction and strength of the linear relationship between two variables, usually ranging from -1 to +1.",
        example: "A correlation coefficient close to +1 indicates a strong positive linear relationship between two variables.",
        related: ["Correlation", "Regression Analysis", "Statistics"]
    },

    {
        term: "Derivative",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "A mathematical measure of how quickly a quantity changes with respect to another quantity, commonly interpreted as the slope of a function at a specific point.",
        example: "If position is represented as a function of time, its derivative gives the object's instantaneous velocity.",
        related: ["Calculus", "Rate of Change", "Integral"]
    },

    {
        term: "Determinant",
        broadCategory: "Mathematics",
        subject: "Engineering",
        def: "A scalar value calculated from a square matrix that provides information about properties such as whether the matrix is invertible and how a transformation changes area or volume.",
        example: "If the determinant of a square matrix is zero, the matrix does not have an ordinary inverse.",
        related: ["Matrix", "Linear Algebra", "Eigenvalue"]
    },

    {
        term: "Differential Equation",
        broadCategory: "Mathematics",
        subject: "PhysicsEngineering",
        def: "An equation involving an unknown function and one or more of its derivatives, commonly used to describe systems that change continuously over time or space.",
        example: "A differential equation can be used to model the motion of a falling object or the growth of a population.",
        related: ["Derivative", "Calculus", "Modeling"]
    },

    {
        term: "Eigenvalue",
        broadCategory: "Mathematics",
        subject: "Engineering/Physics",
        def: "A scalar value associated with a linear transformation that describes how an eigenvector is scaled when the transformation is applied.",
        example: "If a transformation doubles an eigenvector without changing its direction, its corresponding eigenvalue is 2.",
        related: ["Eigenvector", "Matrix", "Linear Algebra"]
    },

    {
        term: "Eigenvector",
        broadCategory: "Mathematics",
        subject: "Engineering/Physics",
        def: "A non-zero vector that retains its direction, changing only in magnitude, when a particular linear transformation is applied to it.",
        example: "When a matrix transformation stretches a vector without rotating it, that vector can be an eigenvector.",
        related: ["Eigenvalue", "Vector", "Matrix"]
    },

    {
        term: "Euclidean Geometry",
        broadCategory: "Mathematics",
        subject: "Engineering",
        def: "The branch of geometry based on points, lines, angles, shapes, distances, and spatial relationships using the fundamental principles traditionally associated with Euclid.",
        example: "Using the Pythagorean theorem to calculate the diagonal of a rectangle is an application of Euclidean geometry.",
        related: ["Geometry", "Pythagorean Theorem", "Congruence"]
    },

    {
        term: "Exponential Function",
        broadCategory: "Mathematics",
        subject: "/Science",
        def: "A function in which the variable appears in the exponent, commonly written as f(x) = a^x, and often used to represent rapid growth or decay.",
        example: "Population growth under ideal conditions can be modeled using an exponential function.",
        related: ["Logarithm", "Growth", "Decay"]
    },

    {
        term: "Factorial",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "The factorial of a non-negative integer n, written n!, is the product of all positive integers from 1 through n and is widely used in counting problems.",
        example: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
        related: ["Permutation", "Combinatorics", "Probability"]
    },

    {
        term: "Fourier Transform",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A mathematical transformation that represents a function or signal as a combination of different frequencies, making it useful for analyzing periodic or complex signals.",
        example: "A Fourier Transform can separate the different frequency components present in a recorded sound.",
        related: ["Frequency", "Signal Processing", "Wave"]
    },

    {
        term: "Fractal",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "A geometric or mathematical structure that exhibits patterns or self-similarity at different scales and can often be generated through repeated mathematical rules.",
        example: "The branching pattern of some plants and the Mandelbrot set demonstrate fractal-like structures.",
        related: ["Geometry", "Recursion", "Self-Similarity"]
    },

    {
        term: "Function",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "A mathematical relationship in which every allowed input is associated with exactly one output, commonly represented using equations, tables, graphs, or mappings.",
        example: "For f(x) = 2x + 1, an input of 3 produces an output of 7.",
        related: ["Domain", "Range", "Graph"]
    },

    {
        term: "Graph Theory",
        broadCategory: "Mathematics",
        subject: "Computer Science/Engineering",
        def: "A branch of mathematics that studies graphs made of vertices and edges and uses them to represent relationships, connections, and networks.",
        example: "A transportation network can be represented as a graph where cities are vertices and roads are edges.",
        related: ["Network", "Graph", "Algorithm"]
    },

    {
        term: "Group Theory",
        broadCategory: "Mathematics",
        subject: "Physics",
        def: "A branch of abstract algebra that studies groups, which are sets equipped with an operation satisfying properties such as closure, associativity, identity, and inverses.",
        example: "Symmetries of geometric objects can be studied using group theory.",
        related: ["Abstract Algebra", "Symmetry", "Set Theory"]
    },

    {
        term: "Hypothesis Testing",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A statistical method used to evaluate evidence from sample data and determine whether there is enough evidence to reject a proposed assumption about a population.",
        example: "A researcher can use hypothesis testing to determine whether a new teaching method produces a statistically significant improvement.",
        related: ["Statistics", "P-Value", "Correlation"]
    },

    {
        term: "Imaginary Number",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A number involving the imaginary unit i, where i² = -1, allowing mathematical equations to have solutions involving the square root of negative numbers.",
        example: "√-9 can be written as 3i.",
        related: ["Complex Number", "Algebra", "Real Number"]
    },

    {
        term: "Integral",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A mathematical operation used to determine accumulated quantities, such as area under a curve, total distance, volume, or the change represented by a rate.",
        example: "The integral of a velocity function over time can be used to determine displacement.",
        related: ["Derivative", "Calculus", "Area"]
    },

    {
        term: "Irrational Number",
        broadCategory: "Mathematics",
        subject: "",
        def: "A real number that cannot be expressed exactly as a ratio of two integers and therefore has a decimal representation that continues without repeating.",
        example: "The numbers π and √2 are irrational numbers.",
        related: ["Real Number", "Rational Number", "Number Theory"]
    },

    {
        term: "Limit",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "The value that a function or sequence approaches as its input or index approaches a particular value, even when the function does not actually reach that value.",
        example: "The limit of (x² - 1)/(x - 1) as x approaches 1 is 2.",
        related: ["Calculus", "Derivative", "Continuity"]
    },

    {
        term: "Linear Algebra",
        broadCategory: "Mathematics",
        subject: "Engineering/Computer Science",
        def: "The branch of mathematics that studies vectors, matrices, systems of linear equations, vector spaces, and linear transformations.",
        example: "Linear algebra is used to solve systems of equations and manipulate coordinates in computer graphics.",
        related: ["Matrix", "Vector", "Eigenvalue"]
    },

    {
        term: "Logarithm",
        broadCategory: "Mathematics",
        subject: "Science",
        def: "A logarithm gives the exponent to which a specified base must be raised to produce a given number, making it the inverse operation of exponentiation.",
        example: "Because 10² = 100, log₁₀(100) = 2.",
        related: ["Exponential Function", "Exponent", "pH"]
    },

    {
        term: "Matrix",
        broadCategory: "Mathematics",
        subject: "Engineering/Computer Science",
        def: "A rectangular arrangement of numbers, symbols, or expressions organized into rows and columns and used to represent data, equations, or mathematical transformations.",
        example: "A matrix can represent a system of linear equations or a transformation used in computer graphics.",
        related: ["Linear Algebra", "Determinant", "Vector"]
    },

    {
        term: "Mean",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "The arithmetic average of a collection of numerical values, calculated by adding all values together and dividing the total by the number of values.",
        example: "The mean of 4, 6, and 8 is (4 + 6 + 8) / 3 = 6.",
        related: ["Median", "Mode", "Standard Deviation"]
    },

    {
        term: "Median",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "The median is the middle value of an ordered data set, or the average of the two middle values when the number of observations is even.",
        example: "The median of 2, 4, 7, 9, and 10 is 7.",
        related: ["Mean", "Mode", "Statistics"]
    },

    {
        term: "Mode",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "The mode is the value or values that occur most frequently in a data set and can be used to identify the most common observation.",
        example: "In the data set 2, 3, 3, 4, 5, the mode is 3.",
        related: ["Mean", "Median", "Frequency"]
    },

    {
        term: "Normal Distribution",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A continuous probability distribution with a symmetric, bell-shaped curve in which observations tend to cluster around the mean.",
        example: "Measurements such as human height are often approximately normally distributed within a suitable population.",
        related: ["Mean", "Standard Deviation", "Probability"]
    },

    {
        term: "Number Theory",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "A branch of mathematics primarily concerned with integers and their properties, including divisibility, prime numbers, and relationships between whole numbers.",
        example: "Studying whether a number is prime is a basic problem in number theory.",
        related: ["Prime Number", "Integer", "Divisibility"]
    },

    {
        term: "Parabola",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A conic section formed by points that are equally distant from a fixed point called the focus and a fixed line called the directrix.",
        example: "The path of a projectile can approximate a parabola when air resistance is ignored.",
        related: ["Conic Section", "Focus", "Directrix"]
    },

    {
        term: "Parametric Equations",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A set of equations that describes the coordinates of a point using one or more independent parameters, allowing curves and motion to be represented conveniently.",
        example: "The equations x = cos(t) and y = sin(t) describe a circular path as t changes.",
        related: ["Cartesian Coordinates", "Vector", "Trigonometry"]
    },

    {
        term: "Permutation",
        broadCategory: "Mathematics",
        subject: "Computer Science/Engineering",
        def: "An arrangement of objects in which the order of the objects matters, commonly calculated using factorials and counting principles.",
        example: "Arranging three different books on a shelf produces 3! = 6 possible permutations.",
        related: ["Combination", "Factorial", "Combinatorics"]
    },

    {
        term: "Pi (π)",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "Pi is an irrational mathematical constant representing the ratio of a circle's circumference to its diameter, approximately equal to 3.14159.",
        example: "The circumference of a circle can be calculated using C = 2πr.",
        related: ["Circle", "Trigonometry", "Geometry"]
    },

    {
        term: "Polar Coordinates",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A coordinate system that identifies a point using its distance from a reference point and its angle from a reference direction instead of horizontal and vertical coordinates.",
        example: "A radar system can describe the location of an object using its distance and direction from the radar station.",
        related: ["Cartesian Coordinates", "Angle", "Vector"]
    },

    {
        term: "Polynomial",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "An algebraic expression consisting of variables, coefficients, and non-negative integer powers combined using addition, subtraction, and multiplication.",
        example: "3x² + 2x - 5 is a polynomial of degree 2.",
        related: ["Quadratic Equation", "Function", "Factor"]
    },

    {
        term: "Prime Number",
        broadCategory: "Mathematics",
        subject: "Computer Science/Engineering",
        def: "A natural number greater than 1 that has exactly two positive divisors: 1 and the number itself.",
        example: "7 is a prime number because it can only be divided evenly by 1 and 7.",
        related: ["Number Theory", "Factorization", "Integer"]
    },

    {
        term: "Probability",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A numerical measure describing how likely an event is to occur, with values ranging from 0 for an impossible event to 1 for a certain event.",
        example: "The probability of getting heads when flipping a fair coin is 1/2.",
        related: ["Statistics", "Combinatorics", "Random Variable"]
    },

    {
        term: "Pythagorean Theorem",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A theorem stating that in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs, expressed as a² + b² = c².",
        example: "For a right triangle with legs 3 and 4, the hypotenuse is 5 because 3² + 4² = 5².",
        related: ["Right Triangle", "Euclidean Geometry", "Trigonometry"]
    },

    {
        term: "Quadratic Equation",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A polynomial equation of degree two, commonly written as ax² + bx + c = 0, that can have up to two real or complex solutions.",
        example: "x² - 5x + 6 = 0 is a quadratic equation with solutions x = 2 and x = 3.",
        related: ["Polynomial", "Parabola", "Quadratic Formula"]
    },

    {
        term: "Quadrilateral",
        broadCategory: "Mathematics",
        subject: "Engineering",
        def: "A polygon with four sides, four vertices, and four interior angles, including shapes such as squares, rectangles, trapezoids, and parallelograms.",
        example: "A rectangle is a quadrilateral because it has four sides and four vertices.",
        related: ["Polygon", "Rectangle", "Geometry"]
    },

    {
        term: "Quaternion",
        broadCategory: "Mathematics",
        subject: "Computer Science/Engineering",
        def: "A number system that extends complex numbers using four components, commonly written as a + bi + cj + dk, and is especially useful for representing three-dimensional rotations.",
        example: "Quaternions can be used in computer graphics and robotics to represent the orientation of a rotating object.",
        related: ["Complex Number", "Vector", "3D Rotation"]
    },

    {
        term: "Regression Analysis",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A statistical method used to estimate and analyze relationships between variables and to make predictions based on observed data.",
        example: "A researcher can use regression analysis to predict exam performance from study time.",
        related: ["Correlation Coefficient", "Statistics", "Prediction"]
    },

    {
        term: "Riemann Hypothesis",
        broadCategory: "Mathematics",
        subject: "Number Theory",
        def: "A famous unsolved mathematical conjecture concerning the locations of the nontrivial zeros of the Riemann zeta function and their connection to the distribution of prime numbers.",
        example: "The Riemann Hypothesis is studied because proving it could provide deeper understanding of how prime numbers are distributed.",
        related: ["Number Theory", "Prime Number", "Riemann Zeta Function"]
    },

    {
        term: "Set Theory",
        broadCategory: "Mathematics",
        subject: "Computer Science/Engineering",
        def: "A branch of mathematics that studies sets, which are collections of distinct objects, and operations and relationships involving those collections.",
        example: "The sets A = {1, 2, 3} and B = {3, 4, 5} can be combined using a union operation.",
        related: ["Set", "Cardinality", "Logic"]
    },

    {
        term: "Standard Deviation",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A statistical measure of how much individual values in a data set tend to vary or spread away from the mean.",
        example: "A small standard deviation means the data values are generally close to the mean.",
        related: ["Variance", "Mean", "Normal Distribution"]
    },

    {
        term: "Taylor Series",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "An infinite series that represents a sufficiently smooth function as a sum of terms involving its derivatives evaluated at a particular point.",
        example: "The Taylor series of sine can be used to approximate sin(x) for small values of x.",
        related: ["Calculus", "Derivative", "Series"]
    },

    {
        term: "Topology",
        broadCategory: "Mathematics",
        subject: "Computer Science",
        def: "A branch of mathematics that studies properties of spaces and shapes that remain unchanged under continuous deformation, such as stretching or bending.",
        example: "In topology, a coffee cup and a doughnut can be considered equivalent because each has one hole.",
        related: ["Geometry", "Set Theory", "Continuity"]
    },

    {
        term: "Trigonometry",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A branch of mathematics that studies relationships between angles and sides of triangles and the functions used to describe periodic phenomena.",
        example: "Engineers use sine and cosine to calculate components of forces acting at different angles.",
        related: ["Sine", "Cosine", "Triangle"]
    },

    {
        term: "Vector",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A mathematical quantity that has both magnitude and direction and can be represented using components or an arrow in a coordinate system.",
        example: "A velocity of 20 m/s east is a vector because it has both a magnitude and a direction.",
        related: ["Magnitude", "Direction", "Velocity"]
    },

    {
        term: "Variance",
        broadCategory: "Mathematics",
        subject: "Statistics",
        def: "A statistical measure representing the average squared distance of data values from their mean and describing how widely the data are distributed.",
        example: "A data set with values that are far from its mean generally has a larger variance.",
        related: ["Standard Deviation", "Mean", "Statistics"]
    },

    {
        term: "Vector Space",
        broadCategory: "Mathematics",
        subject: "Physics/Engineering",
        def: "A mathematical set of vectors that can be added together and multiplied by scalars while satisfying specific rules, forming the foundation of linear algebra.",
        example: "The set of all two-dimensional vectors forms a vector space used to represent positions and forces.",
        related: ["Vector", "Linear Algebra", "Matrix"]
    },


    // =========================================================
    // PHYSICS
    // =========================================================

    {
        term: "Acceleration",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The rate at which an object's velocity changes with respect to time, including changes in either its speed, direction, or both.",
        example: "A car changing its speed from 20 m/s to 30 m/s over several seconds is accelerating.",
        related: ["Velocity", "Force", "Kinematics"]
    },

    {
        term: "Angular Momentum",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A physical quantity that describes rotational motion and depends on an object's mass distribution, rotational motion, and position relative to an axis.",
        example: "A spinning figure skater increases angular speed by pulling their arms closer to their body.",
        related: ["Torque", "Rotation", "Momentum"]
    },

    {
        term: "Antimatter",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A form of matter made of antiparticles that have the same mass as corresponding ordinary particles but opposite values of certain properties, such as electric charge.",
        example: "A positron is the antimatter counterpart of the electron.",
        related: ["ParticlePhysics", "Antiparticle", "Matter"]
    },

    {
        term: "Black Hole",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "A region of spacetime where gravity is extremely strong because matter has been compressed into a very small region, creating a boundary beyond which light cannot escape.",
        example: "Astronomers can detect black holes by observing their effects on nearby stars and gas.",
        related: ["Gravity", "General Relativity", "Event Horizon"]
    },

    {
        term: "Bose-Einstein Condensate",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A state of matter formed when certain particles called bosons are cooled to temperatures extremely close to absolute zero, causing many particles to occupy the same quantum state.",
        example: "Scientists can create Bose-Einstein condensates in laboratories using specially cooled atomic gases.",
        related: ["Quantum Mechanics", "Absolute Zero", "Boson"]
    },

    {
        term: "Capacitance",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "The ability of a component or system to store electric charge for a given potential difference, measured in farads.",
        example: "A capacitor with higher capacitance can store more charge at the same voltage.",
        related: ["Capacitor", "Voltage", "Electric Charge"]
    },

    {
        term: "Centripetal Force",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The net force directed toward the center of a circular path that keeps an object moving along that curved path.",
        example: "The tension in a string provides centripetal force when a ball is swung in a circle.",
        related: ["Circular Motion", "Force", "Acceleration"]
    },

    {
        term: "Chaos Theory",
        broadCategory: "Science",
        subject: "Physics",
        def: "The study of deterministic systems that can show highly unpredictable behavior because very small differences in initial conditions can produce significantly different outcomes.",
        example: "Small changes in atmospheric conditions can eventually lead to very different weather patterns.",
        related: ["Dynamical System", "", "Complexity"]
    },

    {
        term: "Conductivity",
        broadCategory: "Science",
        subject: "Physics/Engineering/Chemistry",
        def: "A measure of how easily a material allows heat or electric charge to pass through it, with higher conductivity indicating easier transfer.",
        example: "Copper has high electrical conductivity, which makes it useful for electrical wiring.",
        related: ["Resistance", "Thermal Conductivity", "Electric Current"]
    },

    {
        term: "Conservation of Energy",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A fundamental principle stating that the total energy of an isolated system remains constant, although energy can be transferred between objects or transformed into different forms.",
        example: "In a falling object, gravitational potential energy is converted into kinetic energy.",
        related: ["Kinetic Energy", "Potential Energy", "Work"]
    },

    {
        term: "Coulomb's Law",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "A law describing the electrostatic force between two charged objects, showing that the force depends on their charges and decreases with the square of the distance between them.",
        example: "Two positively charged particles repel each other according to Coulomb's Law.",
        related: ["Electric Field", "Electric Charge", "Electrostatics"]
    },

    {
        term: "Dark Energy",
        broadCategory: "Science",
        subject: "Physics/Cosmology",
        def: "A name given to the unknown component associated with the accelerated expansion of the universe, although its exact physical nature is still not understood.",
        example: "Observations of distant supernovae provide evidence that the expansion of the universe is accelerating.",
        related: ["Cosmology", "Dark Matter", "Universe"]
    },

    {
        term: "Dark Matter",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "A form of matter inferred from its gravitational effects on visible matter, light, and the large-scale structure of the universe, despite not emitting or absorbing detectable light in the usual way.",
        example: "The motion of stars within galaxies provides evidence for the presence of unseen mass.",
        related: ["Gravity", "Galaxy", "Dark Energy"]
    },

    {
        term: "Doppler Effect",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "The observed change in the frequency or wavelength of a wave caused by relative motion between the source of the wave and the observer.",
        example: "The pitch of an ambulance siren appears higher as it approaches and lower as it moves away.",
        related: ["Frequency", "Wavelength", "Sound Wave"]
    },

    {
        term: "Electric Field",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "A region around an electric charge in which another charged object would experience an electric force, represented mathematically as a vector field.",
        example: "A positively charged particle creates an electric field that pushes another positive charge away from it.",
        related: ["Electric Charge", "Coulomb's Law", "Voltage"]
    },

    {
        term: "Electromagnetic Induction",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "The process in which a changing magnetic field produces an electromotive force and potentially an electric current in a conductor.",
        example: "Electric generators use electromagnetic induction to convert mechanical motion into electrical energy.",
        related: ["Magnetic Field", "Faraday's Law", "Generator"]
    },

    {
        term: "Electromagnetic Spectrum",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "The complete range of electromagnetic radiation arranged according to frequency or wavelength, including radio waves, microwaves, visible light, ultraviolet, X-rays, and gamma rays.",
        example: "Visible light is only a small portion of the electromagnetic spectrum.",
        related: ["Photon", "Wavelength", "Frequency"]
    },

    {
        term: "Electromagnetism",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "The branch of physics that studies electric and magnetic fields, electric charges, currents, and the interactions between electricity and magnetism.",
        example: "Motors operate using electromagnetic interactions between electric currents and magnetic fields.",
        related: ["Electric Field", "Magnetic Field", "Electromagnetic Induction"]
    },

    {
        term: "Entropy",
        broadCategory: "Science",
        subject: "Physics/Chemistry/Engineering",
        def: "A thermodynamic quantity related to the distribution of energy and the number of microscopic arrangements available to a system, commonly associated with the direction of spontaneous processes.",
        example: "Heat naturally flows from a warmer object to a cooler object, increasing the total entropy of an isolated system.",
        related: ["Thermodynamics", "Energy", "Heat"]
    },

    {
        term: "Escape Velocity",
        broadCategory: "Science",
        subject: "Physics/Astronomy/Engineering",
        def: "The minimum initial speed an object needs, without further propulsion, to escape the gravitational influence of a massive body when air resistance is neglected.",
        example: "A spacecraft launched from Earth must reach sufficient speed to escape Earth's gravitational influence.",
        related: ["Gravity", "Velocity", "Orbit"]
    },

    {
        term: "Fission",
        broadCategory: "Science",
        subject: "Physics/Chemistry/Engineering",
        def: "A nuclear process in which a heavy atomic nucleus splits into smaller nuclei, releasing energy and often additional neutrons that can cause further reactions.",
        example: "Nuclear reactors can produce energy through controlled nuclear fission.",
        related: ["Nuclear Energy", "Atom", "Fusion"]
    },

    {
        term: "Fluid Dynamics",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The study of how liquids and gases move and how forces, pressure, density, and viscosity affect their flow.",
        example: "Engineers use fluid dynamics to study airflow around an airplane wing.",
        related: ["Pressure", "Fluid Mechanics", "Bernoulli's Principle"]
    },

    {
        term: "Force",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "An interaction that can change an object's motion, including its speed or direction, and is measured in newtons in the SI system.",
        example: "Pushing a box across the floor applies a force that can change its motion.",
        related: ["Acceleration", "Mass", "Newton's Laws"]
    },

    {
        term: "Frequency",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The number of complete cycles or repeated events occurring per unit of time, commonly measured in hertz, where one hertz equals one cycle per second.",
        example: "A sound wave vibrating 440 times per second has a frequency of 440 Hz.",
        related: ["Wavelength", "Period", "Wave"]
    },

    {
        term: "Fusion",
        broadCategory: "Science",
        subject: "Physics/Chemistry/Engineering",
        def: "A nuclear process in which two or more light atomic nuclei combine to form a heavier nucleus while releasing a large amount of energy.",
        example: "The Sun produces most of its energy through nuclear fusion involving hydrogen nuclei.",
        related: ["Fission", "Nuclear Energy", "Plasma"]
    },

    {
        term: "General Relativity",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "Einstein's theory of gravity describing gravity as the curvature of spacetime caused by mass and energy rather than simply as a conventional force.",
        example: "General relativity predicts that massive objects can bend the path of light.",
        related: ["Gravity", "Spacetime", "Black Hole"]
    },

    {
        term: "Gravitational Waves",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "Ripples in spacetime that travel outward from accelerating massive objects, such as merging black holes or neutron stars.",
        example: "Scientists detected gravitational waves produced by the merger of two black holes.",
        related: ["General Relativity", "Black Hole", "Neutron Star"]
    },

    {
        term: "Half-Life",
        broadCategory: "Science",
        subject: "Physics/Chemistry",
        def: "The amount of time required for half of the unstable radioactive nuclei in a sample to undergo radioactive decay.",
        example: "If a radioactive sample has a half-life of 10 years, half of the original radioactive nuclei remain after 10 years.",
        related: ["Radioactivity", "Radioisotope", "Nuclear Decay"]
    },

    {
        term: "Higgs Boson",
        broadCategory: "Science",
        subject: "Physics/Particle Physics",
        def: "An elementary particle associated with the Higgs field, whose interaction with certain fundamental particles contributes to their mass.",
        example: "The Higgs boson was experimentally observed at CERN in 2012.",
        related: ["Standard Model", "Higgs Field", "ParticlePhysics"]
    },

    {
        term: "Inertia",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The tendency of an object to resist changes in its state of motion, meaning an object at rest tends to remain at rest while a moving object tends to continue moving unless acted upon by a net force.",
        example: "Passengers move forward when a moving bus suddenly stops because their bodies tend to maintain their motion.",
        related: ["Mass", "Force", "Newton's Laws"]
    },

    {
        term: "Interference",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A wave phenomenon in which two or more waves overlap and combine, producing regions of increased or decreased amplitude.",
        example: "Two water waves can meet and create areas where their amplitudes reinforce or cancel each other.",
        related: ["Superposition", "Wave", "Diffraction"]
    },

    {
        term: "Isotope",
        broadCategory: "Science",
        subject: "Physics/Chemistry",
        def: "A variant of an element whose atoms have the same number of protons but different numbers of neutrons, resulting in different atomic masses.",
        example: "Carbon-12 and carbon-14 are isotopes of carbon because both contain six protons but have different numbers of neutrons.",
        related: ["Atom", "Radioisotope", "Atomic Mass"]
    },

    {
        term: "Kinetic Energy",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The energy an object possesses because of its motion, calculated for a classical object using KE = 1/2 mv².",
        example: "A moving car has kinetic energy that increases as its speed increases.",
        related: ["Potential Energy", "Work", "Momentum"]
    },

    {
        term: "Lorentz Force",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "The force experienced by a charged particle moving through electric and magnetic fields, combining the effects of the electric and magnetic forces.",
        example: "The motion of charged particles in a magnetic field can be described using the Lorentz force.",
        related: ["Electric Field", "Magnetic Field", "Electromagnetism"]
    },

    {
        term: "Magnetic Field",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "A vector field describing the magnetic influence produced by moving electric charges, electric currents, magnets, and changing electric fields.",
        example: "A compass aligns with Earth's magnetic field and points approximately toward magnetic north.",
        related: ["Magnetism", "Electric Current", "Lorentz Force"]
    },

    {
        term: "Mass",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A measure of an object's resistance to acceleration and, in classical physics, the amount of matter associated with the object.",
        example: "A 10 kg object requires more force than a 2 kg object to produce the same acceleration.",
        related: ["Force", "Inertia", "Acceleration"]
    },

    {
        term: "Momentum",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A vector quantity representing the quantity of motion of an object, calculated as the product of its mass and velocity.",
        example: "A heavy truck moving at the same speed as a small car has greater momentum because it has greater mass.",
        related: ["Mass", "Velocity", "Collision"]
    },

    {
        term: "Newton's Laws of Motion",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "Three fundamental laws describing how forces affect the motion of objects, forming the foundation of classical mechanics.",
        example: "Newton's second law explains why applying a larger net force to the same mass produces greater acceleration.",
        related: ["Force", "Acceleration", "Inertia"]
    },

    {
        term: "Ohm's Law",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "A relationship between voltage, current, and resistance in an electrical circuit, commonly written as V = IR for an ohmic component under appropriate conditions.",
        example: "If a resistor has a resistance of 10 Ω and a current of 2 A, the voltage across it is 20 V.",
        related: ["Voltage", "Current", "Resistance"]
    },

    {
        term: "Optics",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The branch of physics concerned with the behavior, properties, and interactions of light, including reflection, refraction, diffraction, and image formation.",
        example: "Eyeglasses use optical principles to bend light so that images are focused correctly on the retina.",
        related: ["Refraction", "Reflection", "Lens"]
    },

    {
        term: "ParticlePhysics",
        broadCategory: "Science",
        subject: "Physics",
        def: "The branch of physics that investigates the fundamental particles that make up matter and radiation and the forces through which they interact.",
        example: "Particle physicists study particles such as quarks, electrons, neutrinos, and bosons.",
        related: ["Standard Model", "Higgs Boson", "Quantum Mechanics"]
    },

    {
        term: "Photoelectric Effect",
        broadCategory: "Science",
        subject: "Physics/Chemistry",
        def: "A phenomenon in which electrons are emitted from a material when electromagnetic radiation of sufficient frequency strikes its surface.",
        example: "Light shining on a suitable metal surface can release electrons, demonstrating the particle-like behavior of light.",
        related: ["Photon", "Frequency", "Quantum Mechanics"]
    },

    {
        term: "Photon",
        broadCategory: "Science",
        subject: "Physics",
        def: "A quantum or discrete packet of electromagnetic radiation that carries energy related to its frequency.",
        example: "A photon of visible light can transfer energy to an electron in a material.",
        related: ["Electromagnetic Spectrum", "Planck's Constant", "Quantum Mechanics"]
    },

    {
        term: "Photovoltaic Effect",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The generation of an electric voltage or current within a material when it absorbs light, forming the basic operating principle of solar cells.",
        example: "Solar panels use the photovoltaic effect to convert sunlight into electrical energy.",
        related: ["Photon", "Solar Cell", "Semiconductor"]
    },

    {
        term: "Planck's Constant",
        broadCategory: "Science",
        subject: "Physics",
        def: "A fundamental constant of quantum physics, represented by h, that relates the energy of a photon to its frequency through E = hf.",
        example: "The energy of a photon increases when its frequency increases.",
        related: ["Photon", "Quantum Mechanics", "Frequency"]
    },

    {
        term: "Plasma",
        broadCategory: "Science",
        subject: "Physics/Chemistry/Engineering",
        def: "An ionized state of matter containing free electrons and ions that can conduct electricity and respond strongly to electromagnetic fields.",
        example: "Lightning and many stars contain plasma.",
        related: ["Ionization", "Fusion", "Electromagnetism"]
    },

    {
        term: "Potential Energy",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "Stored energy associated with an object's position, configuration, or interaction with other objects or fields.",
        example: "A ball held above the ground has gravitational potential energy because of its position.",
        related: ["Kinetic Energy", "Gravity", "Work"]
    },

    {
        term: "Pressure",
        broadCategory: "Science",
        subject: "Physics/Engineering/Chemistry",
        def: "The amount of force acting perpendicular to a surface per unit area, commonly measured in pascals in the SI system.",
        example: "A sharp nail produces greater pressure than a blunt object because the force is concentrated over a smaller area.",
        related: ["Force", "Area", "Fluid Dynamics"]
    },

    {
        term: "Quantum Entanglement",
        broadCategory: "Science",
        subject: "Physics",
        def: "A quantum phenomenon in which particles share correlated quantum states so that their measurement outcomes are linked even when the particles are separated.",
        example: "Experiments can produce pairs of entangled photons whose measured properties show strong quantum correlations.",
        related: ["Quantum Mechanics", "Photon", "Superposition"]
    },

    {
        term: "Quantum Field Theory",
        broadCategory: "Science",
        subject: "Physics/Particle Physics",
        def: "A theoretical framework that combines quantum mechanics with special relativity and describes particles as excitations of underlying quantum fields.",
        example: "The Standard Model of particle physics is formulated using quantum field theory.",
        related: ["Quantum Mechanics", "Standard Model", "Particle Physics"]
    },

    {
        term: "Quantum Mechanics",
        broadCategory: "Science",
        subject: "Physics/Chemistry",
        def: "A fundamental theory describing the behavior of matter and energy at atomic and subatomic scales, where physical quantities can exhibit quantized and probabilistic behavior.",
        example: "Quantum mechanics explains why electrons occupy specific energy levels in atoms.",
        related: ["Photon", "Wave Function", "Uncertainty Principle"]
    },

    {
        term: "Radioactivity",
        broadCategory: "Science",
        subject: "Physics/Chemistry",
        def: "The spontaneous transformation of unstable atomic nuclei accompanied by the emission of particles or electromagnetic radiation.",
        example: "Some isotopes of uranium undergo radioactive decay and emit radiation.",
        related: ["Radioisotope", "Half-Life", "Nuclear Decay"]
    },

    {
        term: "Refraction",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The change in direction and speed of a wave when it passes from one medium into another because its propagation speed changes.",
        example: "A straw appears bent when placed in a glass of water because light is refracted at the water-air boundary.",
        related: ["Optics", "Wavelength", "Reflection"]
    },

    {
        term: "Relativity",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "A set of physical theories developed by Albert Einstein describing how measurements of space, time, motion, and gravity depend on reference frames and spacetime geometry.",
        example: "Relativity predicts effects such as time dilation for objects moving at very high speeds.",
        related: ["Special Relativity", "General Relativity", "Spacetime"]
    },

    {
        term: "Resistance",
        broadCategory: "Science",
        subject: "Physics/Electrical Engineering",
        def: "The opposition a material or electrical component provides to the flow of electric current, measured in ohms.",
        example: "A resistor with high resistance allows less current to flow for the same applied voltage.",
        related: ["Ohm's Law", "Voltage", "Current"]
    },

    {
        term: "Schrodinger Equation",
        broadCategory: "Science",
        subject: "Physics",
        def: "A fundamental equation in quantum mechanics that describes how the quantum state or wave function of a system changes and determines the probabilities of possible measurements.",
        example: "The Schrödinger equation can be solved for an electron in a simple atom to determine its allowed energy states.",
        related: ["Quantum Mechanics", "Wave Function", "Energy Level"]
    },

    {
        term: "Simple Harmonic Motion",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A type of periodic motion in which the restoring force or acceleration is proportional to the displacement from an equilibrium position and directed toward that position.",
        example: "An ideal mass attached to a spring can undergo simple harmonic motion.",
        related: ["Frequency", "Oscillation", "Spring"]
    },

    {
        term: "Sound Wave",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A mechanical wave produced by vibrations that travels through a material medium, commonly through alternating compressions and rarefactions.",
        example: "A vibrating guitar string creates sound waves that travel through the surrounding air.",
        related: ["Frequency", "Wavelength", "Doppler Effect"]
    },

    {
        term: "Special Relativity",
        broadCategory: "Science",
        subject: "Physics",
        def: "Einstein's theory describing space and time for observers moving at constant relative velocities, based on the principle that physical laws are the same in inertial reference frames and that light has the same speed for all such observers.",
        example: "Special relativity predicts time dilation for an object moving at a speed close to the speed of light.",
        related: ["Relativity", "Time Dilation", "Speed of Light"]
    },

    {
        term: "Speed of Light",
        broadCategory: "Science",
        subject: "Physics/Astronomy",
        def: "The speed at which light propagates in vacuum, represented by c and exactly defined as 299,792,458 meters per second.",
        example: "Light from the Sun takes about eight minutes to reach Earth.",
        related: ["Photon", "Relativity", "Electromagnetic Spectrum"]
    },

    {
        term: "Standard Model",
        broadCategory: "Science",
        subject: "Physics/ParticlePhysics",
        def: "The established theoretical framework describing known elementary particles and three fundamental interactions: electromagnetic, weak, and strong interactions.",
        example: "The Standard Model includes quarks, leptons, gauge bosons, and the Higgs boson.",
        related: ["ParticlePhysics", "Higgs Boson", "Quantum Field Theory"]
    },

    {
        term: "String Theory",
        broadCategory: "Science",
        subject: "Physics",
        def: "A theoretical framework proposing that fundamental entities are one-dimensional vibrating objects called strings rather than point-like particles.",
        example: "Different vibration modes of strings are proposed to correspond to different particle properties.",
        related: ["Quantum Mechanics", "ParticlePhysics", "Extra Dimensions"]
    },

    {
        term: "Superconductivity",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A phenomenon in which certain materials, when cooled below a critical temperature, can exhibit extremely low or effectively zero electrical resistance and expel magnetic fields under suitable conditions.",
        example: "Superconducting materials can be used to create powerful electromagnets for specialized scientific equipment.",
        related: ["Resistance", "Magnetic Field", "Temperature"]
    },

    {
        term: "Superposition",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A principle stating that the combined response of a linear system to several inputs can be found by adding the individual responses produced by each input.",
        example: "Two overlapping waves can be mathematically added to determine the resulting wave.",
        related: ["Interference", "Wave", "Linear Algebra"]
    },

    {
        term: "Thermal Conductivity",
        broadCategory: "Science",
        subject: "Physics/Engineering/Chemistry",
        def: "A material property describing how effectively heat is transferred through a material because of temperature differences.",
        example: "Metals generally have higher thermal conductivity than many insulating materials, which is why metal cookware transfers heat efficiently.",
        related: ["Heat", "Conductivity", "Thermodynamics"]
    },

    {
        term: "Thermodynamics",
        broadCategory: "Science",
        subject: "Physics/Chemistry/Engineering",
        def: "The study of heat, work, temperature, and energy transformations and the laws governing how energy moves and changes within physical systems.",
        example: "Engineers use thermodynamics to analyze how much useful work can be obtained from a heat engine.",
        related: ["Entropy", "Heat", "Energy"]
    },

    {
        term: "Torque",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A measure of the rotational effect produced by a force about an axis, depending on the magnitude of the force and its perpendicular distance from the axis.",
        example: "Using a longer wrench makes it easier to loosen a bolt because it produces more torque for the same force.",
        related: ["Force", "Angular Momentum", "Rotation"]
    },

    {
        term: "Uncertainty Principle",
        broadCategory: "Science",
        subject: "Physics",
        def: "A fundamental principle of quantum mechanics stating that certain pairs of physical quantities, such as position and momentum, cannot both be known with unlimited precision simultaneously.",
        example: "Increasing the precision with which a particle's position is known limits the precision with which its momentum can be known.",
        related: ["Quantum Mechanics", "Momentum", "Wave Function"]
    },

    {
        term: "Velocity",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "A vector quantity describing the rate at which an object's position changes with time, including both its speed and direction.",
        example: "A car traveling at 25 m/s toward the north has a velocity of 25 m/s north.",
        related: ["Speed", "Acceleration", "Displacement"]
    },

    {
        term: "Wave Function",
        broadCategory: "Science",
        subject: "Physics",
        def: "A mathematical function used in quantum mechanics to describe the quantum state of a system and calculate probabilities for possible measurement outcomes.",
        example: "The wave function of an electron can be used to determine the probability of finding it in a particular region.",
        related: ["Quantum Mechanics", "Schrodinger Equation", "Probability"]
    },

    {
        term: "Wavelength",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The spatial distance between corresponding points on successive cycles of a wave, such as crest-to-crest or compression-to-compression.",
        example: "A radio wave with a longer wavelength has a lower frequency than a radio wave traveling at the same speed with a shorter wavelength.",
        related: ["Frequency", "Wave", "Electromagnetic Spectrum"]
    },

    {
        term: "Work",
        broadCategory: "Science",
        subject: "Physics/Engineering",
        def: "The transfer of energy that occurs when a force causes an object to undergo displacement, with the amount depending on the force component in the direction of displacement.",
        example: "Lifting a box upward requires work because an applied force causes the box to move through a distance.",
        related: ["Force", "Energy", "Kinetic Energy"]
    },


    // =========================================================
    // CHEMISTRY
    // =========================================================

    {
        term: "Acid",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A substance that can donate protons or increase the concentration of hydrogen ions in an aqueous solution, with many common acids having a pH below 7.",
        example: "Hydrochloric acid in water produces hydrogen ions and makes the solution acidic.",
        related: ["Base", "pH", "Proton"]
    },

    {
        term: "Activation Energy",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The minimum amount of energy that reacting particles must have for a chemical reaction to proceed by overcoming the energy barrier between reactants and products.",
        example: "A spark can provide activation energy that starts the combustion of a fuel.",
        related: ["Catalyst", "Chemical Kinetics", "Reaction"]
    },

    {
        term: "Alkali Metal",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "An element belonging to Group 1 of the periodic table, excluding hydrogen, characterized by one valence electron and generally high chemical reactivity.",
        example: "Sodium is an alkali metal that reacts readily with water.",
        related: ["Periodic Table", "Valence Electrons", "Metal"]
    },

    {
        term: "Alkaline Earth Metal",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "An element in Group 2 of the periodic table that typically has two valence electrons and forms ions with a 2+ charge.",
        example: "Calcium is an alkaline earth metal important in biological structures such as bones and teeth.",
        related: ["Periodic Table", "Valence Electrons", "Cation"]
    },

    {
        term: "Allotrope",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "One of two or more different structural forms of the same chemical element in the same physical state, resulting in different physical or chemical properties.",
        example: "Diamond and graphite are allotropes of carbon with very different structures and properties.",
        related: ["Carbon", "Crystal Structure", "Element"]
    },

    {
        term: "Anion",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "An ion carrying a negative electrical charge because it has gained one or more electrons compared with the neutral atom.",
        example: "A chlorine atom becomes the chloride anion Cl⁻ after gaining one electron.",
        related: ["Cation", "Ion", "Electron"]
    },

    {
        term: "Aqueous Solution",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A solution in which water acts as the solvent, allowing dissolved substances to distribute throughout the solution at the molecular or ionic level.",
        example: "Salt dissolved in water forms an aqueous solution of sodium chloride.",
        related: ["Solution", "Solvent", "Solute"]
    },

    {
        term: "Atomic Mass",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The mass associated with an atom, commonly expressed in atomic mass units, and influenced primarily by the numbers of protons and neutrons in its nucleus.",
        example: "Carbon-12 has an atomic mass of approximately 12 atomic mass units.",
        related: ["Atomic Number", "Isotope", "Mass Number"]
    },

    {
        term: "Atomic Number",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The number of protons in the nucleus of an atom, which uniquely determines the chemical identity of the element.",
        example: "Carbon has an atomic number of 6 because every carbon atom contains six protons.",
        related: ["Proton", "Element", "Periodic Table"]
    },

    {
        term: "Avogadro's Number",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The exact number of elementary entities in one mole of a substance, equal to 6.02214076 × 10²³ particles per mole.",
        example: "One mole of water contains approximately 6.022 × 10²³ water molecules.",
        related: ["Mole", "Molar Mass", "Stoichiometry"]
    },

    {
        term: "Base",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A substance that can accept protons or produce hydroxide ions in aqueous solution, with many common bases having a pH above 7.",
        example: "Sodium hydroxide is a strong base that produces hydroxide ions when dissolved in water.",
        related: ["Acid", "pH", "Hydroxide"]
    },

    {
        term: "Bond Energy",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The average amount of energy required to break a particular type of chemical bond in gaseous molecules, providing an indication of bond strength.",
        example: "A stronger chemical bond generally requires more energy to break.",
        related: ["Chemical Bond", "Enthalpy", "Molecule"]
    },

    {
        term: "Buffer Solution",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "A solution that resists large changes in pH when relatively small amounts of acid or base are added, usually because it contains a weak acid and its conjugate base.",
        example: "Blood contains buffering systems that help maintain its pH within a narrow range.",
        related: ["pH", "Acid", "Base"]
    },

    {
        term: "Catalyst",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "A substance that increases the rate of a chemical reaction by providing an alternative pathway with lower activation energy without being permanently consumed.",
        example: "Enzymes act as biological catalysts that speed up reactions inside cells.",
        related: ["Activation Energy", "Enzyme", "Chemical Kinetics"]
    },

    {
        term: "Cation",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "An ion carrying a positive electrical charge because it has lost one or more electrons compared with the neutral atom.",
        example: "A sodium atom becomes the Na⁺ cation after losing one electron.",
        related: ["Anion", "Ion", "Electron"]
    },

    {
        term: "Chemical Equilibrium",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A dynamic state in a reversible chemical reaction where the forward and reverse reaction rates are equal, causing the concentrations of reactants and products to remain approximately constant.",
        example: "In a closed system at equilibrium, reactants continue forming products while products simultaneously reform reactants.",
        related: ["Reversible Reaction", "Reaction Rate", "Le Chatelier's Principle"]
    },

    {
        term: "Chemical Kinetics",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The branch of chemistry that studies the rates of chemical reactions, the factors affecting those rates, and the mechanisms by which reactions occur.",
        example: "Chemical kinetics can determine how temperature affects the speed of a reaction.",
        related: ["Activation Energy", "Catalyst", "Reaction Rate"]
    },

    {
        term: "Covalent Bond",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A chemical bond formed when atoms share one or more pairs of electrons, allowing the atoms to achieve more stable electron arrangements.",
        example: "The hydrogen atoms in an H₂ molecule are held together by a covalent bond.",
        related: ["Lewis Structure", "Electron", "Molecule"]
    },

    {
        term: "Crystal Lattice",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "A regular, repeating three-dimensional arrangement of particles such as atoms, ions, or molecules within a crystalline material.",
        example: "Sodium chloride forms a crystal lattice in which sodium and chloride ions occupy repeating positions.",
        related: ["Crystal", "Ionic Bond", "Solid"]
    },

    {
        term: "Dipole Moment",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A measure of the separation and magnitude of positive and negative charge within a molecule, indicating the degree of molecular polarity.",
        example: "Water has a significant dipole moment because its oxygen and hydrogen atoms have an uneven charge distribution.",
        related: ["Polar Molecule", "Electronegativity", "Polarity"]
    },

    {
        term: "Distillation",
        broadCategory: "Science",
        subject: "Chemistry/Engineering",
        def: "A separation technique that uses differences in boiling points to vaporize and then condense components of a mixture.",
        example: "Distillation can be used to separate water from dissolved substances or to separate liquid mixtures with different boiling points.",
        related: ["Boiling Point", "Solution", "Separation"]
    },

    {
        term: "Electrolysis",
        broadCategory: "Science",
        subject: "Chemistry/Electrical Engineering",
        def: "A process that uses electrical energy to drive a chemical reaction that would not occur spontaneously under the given conditions.",
        example: "Electrolysis of water can produce hydrogen and oxygen gases.",
        related: ["Redox Reaction", "Electrode", "Electric Current"]
    },

    {
        term: "Electronegativity",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A measure of an atom's tendency to attract shared electrons toward itself when it forms a chemical bond with another atom.",
        example: "Oxygen is more electronegative than hydrogen, contributing to the polarity of water.",
        related: ["Covalent Bond", "Polarity", "Electron Affinity"]
    },

    {
        term: "Electron Affinity",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The energy change associated with adding an electron to a neutral atom in the gaseous state to form a negative ion.",
        example: "Halogens generally have strong tendencies to gain electrons because of their electron configurations.",
        related: ["Electronegativity", "Ionization Energy", "Anion"]
    },

    {
        term: "Electron Configuration",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The arrangement of electrons among the orbitals and energy levels of an atom or ion, which helps explain its chemical behavior.",
        example: "The electron configuration of sodium helps explain why it readily loses one valence electron.",
        related: ["Electron", "Orbital", "Valence Electrons"]
    },

    {
        term: "Element",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A pure chemical substance whose atoms all have the same number of protons in their nuclei and therefore share the same atomic number.",
        example: "Every oxygen atom contains eight protons, so oxygen is a distinct chemical element.",
        related: ["Atomic Number", "Atom", "Periodic Table"]
    },

    {
        term: "Empirical Formula",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A chemical formula showing the simplest whole-number ratio of atoms of each element present in a compound.",
        example: "The empirical formula of hydrogen peroxide, H₂O₂, is HO because the ratio can be simplified.",
        related: ["Molecular Formula", "Stoichiometry", "Mole"]
    },

    {
        term: "Endothermic",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A process or chemical reaction that absorbs energy, commonly as heat, from its surroundings.",
        example: "Some cold packs become cold because an endothermic process absorbs heat from the surrounding environment.",
        related: ["Exothermic", "Enthalpy", "Thermodynamics"]
    },

    {
        term: "Enthalpy",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "A thermodynamic state function related to the energy content of a system at constant pressure, commonly used to describe heat absorbed or released during chemical reactions.",
        example: "The enthalpy change of a reaction can indicate whether the reaction releases or absorbs heat.",
        related: ["Thermodynamics", "Entropy", "Exothermic"]
    },

    {
        term: "Exothermic",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A process or chemical reaction that releases energy, commonly as heat, into the surrounding environment.",
        example: "Combustion of gasoline is an exothermic reaction that releases heat.",
        related: ["Endothermic", "Enthalpy", "Thermodynamics"]
    },

    {
        term: "Free Radical",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "A chemical species containing one or more unpaired electrons, generally making it highly reactive and capable of participating in chain reactions.",
        example: "Free radicals can participate in reactions that alter biological molecules.",
        related: ["Electron", "Oxidation", "Reaction"]
    },

    {
        term: "Functional Group",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "A specific arrangement of atoms within an organic molecule that gives the molecule characteristic chemical properties and reactions.",
        example: "The hydroxyl group -OH is a functional group found in alcohols.",
        related: ["Organic Chemistry", "Molecule", "Polymer"]
    },

    {
        term: "Gas Chromatography",
        broadCategory: "Science",
        subject: "Chemistry/Engineering",
        def: "An analytical separation technique that vaporizes a sample and separates its components as they travel through a column, allowing compounds to be identified and measured.",
        example: "Gas chromatography can be used to analyze the different compounds present in a fuel sample.",
        related: ["Chromatography", "Separation", "Spectroscopy"]
    },

    {
        term: "Half-Reaction",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "One of the two conceptual parts of a redox reaction, representing either oxidation or reduction and showing the transfer of electrons.",
        example: "In a battery reaction, one half-reaction describes oxidation while the other describes reduction.",
        related: ["Redox Reaction", "Oxidation", "Reduction"]
    },

    {
        term: "Halogen",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "An element belonging to Group 17 of the periodic table, generally characterized by high reactivity and a tendency to gain one electron.",
        example: "Chlorine is a halogen commonly used to disinfect water.",
        related: ["Periodic Table", "Anion", "Valence Electrons"]
    },

    {
        term: "Heterogeneous Mixture",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A mixture whose composition is not uniform throughout, meaning different regions can contain different proportions or types of substances.",
        example: "Oil and water form a heterogeneous mixture because they separate into distinct layers.",
        related: ["Homogeneous Mixture", "Mixture", "Solution"]
    },

    {
        term: "Homogeneous Mixture",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A mixture that has a uniform composition throughout, so its components are distributed evenly at the macroscopic scale.",
        example: "Salt water is a homogeneous mixture when the salt has completely dissolved.",
        related: ["Solution", "Solvent", "Solute"]
    },

    {
        term: "Hydrogen Bond",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "A relatively weak intermolecular attraction involving a hydrogen atom bonded to a highly electronegative atom and another electronegative atom nearby.",
        example: "Hydrogen bonds between water molecules contribute to water's relatively high boiling point.",
        related: ["Water", "Polarity", "Intermolecular Forces"]
    },

    {
        term: "Hydrophobic",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "Describing a substance or molecular region that tends to avoid interaction with water and generally does not dissolve readily in it.",
        example: "Oil contains hydrophobic molecules that do not mix easily with water.",
        related: ["Hydrophilic", "Polarity", "Solubility"]
    },

    {
        term: "Ionic Bond",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A chemical attraction between oppositely charged ions that commonly forms when electrons are transferred from one atom to another.",
        example: "Sodium chloride contains ionic interactions between Na⁺ and Cl⁻ ions.",
        related: ["Cation", "Anion", "Electrostatic Force"]
    },

    {
        term: "Ionization Energy",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The minimum energy required to remove an electron from an isolated gaseous atom or ion.",
        example: "An atom with a low first ionization energy can lose an electron relatively easily.",
        related: ["Electron Affinity", "Electron Configuration", "Cation"]
    },

    {
        term: "Isomer",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "One of two or more compounds that have the same molecular formula but different arrangements of their atoms, leading to potentially different properties.",
        example: "Two compounds can contain the same numbers of carbon and hydrogen atoms but have different structures.",
        related: ["Molecular Formula", "Organic Chemistry", "Structure"]
    },

    {
        term: "Lewis Structure",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A diagram representing the valence electrons, bonding pairs, and lone pairs of electrons in atoms or molecules.",
        example: "The Lewis structure of water shows two O-H bonds and two lone pairs around oxygen.",
        related: ["Covalent Bond", "Valence Electrons", "VSEPR Theory"]
    },

    {
        term: "Mass Spectrometry",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "An analytical technique that converts particles into ions and separates them according to their mass-to-charge ratios to help identify and analyze substances.",
        example: "Mass spectrometry can help determine the molecular mass and composition of an unknown compound.",
        related: ["Mass-to-Charge Ratio", "Ion", "Spectroscopy"]
    },

    {
        term: "Metallic Bond",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "The attraction between positively charged metal ions and delocalized valence electrons within a metallic structure, contributing to properties such as electrical conductivity.",
        example: "The delocalized electrons in copper help it conduct electricity efficiently.",
        related: ["Metal", "Electron", "Conductivity"]
    },

    {
        term: "Molar Mass",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The mass of one mole of a substance, normally expressed in grams per mole, and calculated from the atomic masses represented in its chemical formula.",
        example: "The molar mass of water is approximately 18.02 g/mol.",
        related: ["Mole", "Atomic Mass", "Stoichiometry"]
    },

    {
        term: "Molarity",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A measure of solution concentration defined as the number of moles of solute divided by the volume of solution in liters.",
        example: "A 1 M sodium chloride solution contains one mole of NaCl per liter of solution.",
        related: ["Mole", "Concentration", "Solution"]
    },

    {
        term: "Mole",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The SI unit for amount of substance, defined as containing exactly 6.02214076 × 10²³ specified elementary entities such as atoms, molecules, or ions.",
        example: "One mole of carbon atoms contains exactly 6.02214076 × 10²³ carbon atoms.",
        related: ["Avogadro's Number", "Molar Mass", "Stoichiometry"]
    },

    {
        term: "Molecular Formula",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A chemical formula that shows the actual number of atoms of each element present in one molecule of a molecular compound.",
        example: "Glucose has the molecular formula C₆H₁₂O₆.",
        related: ["Empirical Formula", "Molecule", "Stoichiometry"]
    },

    {
        term: "Noble Gas",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "An element in Group 18 of the periodic table with a very stable valence-electron configuration and generally low chemical reactivity.",
        example: "Helium is a noble gas commonly used in balloons because it is chemically unreactive.",
        related: ["Periodic Table", "Valence Electrons", "Element"]
    },

    {
        term: "Nuclear Magnetic Resonance",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A phenomenon in which certain atomic nuclei respond to electromagnetic radiation while placed in a magnetic field, providing information about their chemical environment.",
        example: "NMR spectroscopy can help chemists determine the structure of an organic molecule.",
        related: ["Magnetic Field", "Spectroscopy", "Nucleus"]
    },

    {
        term: "Nucleophile",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A chemical species that donates an electron pair to an electron-deficient atom or center to form a new covalent bond.",
        example: "A hydroxide ion can act as a nucleophile by donating an electron pair to a suitable carbon atom.",
        related: ["Electrons", "Organic Chemistry", "Covalent Bond"]
    },

    {
        term: "Octet Rule",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A useful chemical model stating that many atoms tend to gain, lose, or share electrons to achieve eight valence electrons in their outer shell.",
        example: "Sodium can lose one electron while chlorine gains one to form ions with stable outer electron arrangements.",
        related: ["Valence Electrons", "Lewis Structure", "Chemical Bond"]
    },

    {
        term: "Organic Chemistry",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "The branch of chemistry primarily concerned with carbon-containing compounds, including their structures, properties, reactions, and synthesis.",
        example: "The study of carbohydrates, proteins, plastics, and many fuels involves organic chemistry.",
        related: ["Carbon", "Functional Group", "Polymer"]
    },

    {
        term: "Oxidation",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A chemical process involving the loss of electrons or an increase in the oxidation state of an atom, ion, or molecule.",
        example: "Iron undergoes oxidation when it reacts with oxygen and moisture to form rust.",
        related: ["Reduction", "Redox Reaction", "Electron"]
    },

    {
        term: "Oxidation State",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A numerical value assigned to an atom in a compound or ion that represents its apparent charge under a specified accounting convention for electrons.",
        example: "In NaCl, sodium has an oxidation state of +1 while chlorine has an oxidation state of -1.",
        related: ["Oxidation", "Reduction", "Redox Reaction"]
    },

    {
        term: "Periodic Table",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "An organized arrangement of chemical elements according to increasing atomic number and recurring patterns in their electron configurations and chemical properties.",
        example: "Elements in the same group often have similar chemical properties because they have related valence-electron configurations.",
        related: ["Atomic Number", "Element", "Electron Configuration"]
    },

    {
        term: "pH",
        broadCategory: "Science",
        subject: "Chemistry/Biology",
        def: "A logarithmic measure of hydrogen-ion activity or concentration in an aqueous solution that indicates how acidic or basic the solution is.",
        example: "Pure water at approximately 25°C has a pH close to 7.",
        related: ["Acid", "Base", "Logarithm"]
    },

    {
        term: "Photochemistry",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The branch of chemistry that studies chemical reactions and physical changes initiated or influenced by the absorption of light.",
        example: "Photosynthesis involves photochemical processes in which light energy drives chemical reactions.",
        related: ["Photon", "Light", "Chemical Reaction"]
    },

    {
        term: "Polar Molecule",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A molecule with an uneven distribution of electrical charge, resulting in a partial positive region and a partial negative region and therefore a net dipole moment.",
        example: "Water is a polar molecule because of its bent shape and the difference in electronegativity between oxygen and hydrogen.",    
        related: ["Dipole Moment", "Electronegativity", "Hydrogen Bond"]
    },

    {
        term: "Polymer",
        broadCategory: "Science",
        subject: "Chemistry/MaterialsEngineering",
        def: "A large molecule composed of many repeating molecular units called monomers, which can form natural or synthetic materials with a wide range of properties.",
        example: "Polyethylene is a polymer made from repeating units derived from ethene.",
        related: ["Monomer", "Organic Chemistry", "Material Science"]
    },

    {
        term: "Precipitate",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "An insoluble solid that forms from a chemical reaction or solution when dissolved substances combine to produce a compound whose solubility is exceeded.",
        example: "Mixing certain solutions containing silver ions and chloride ions can produce solid silver chloride as a precipitate.",
        related: ["Solubility", "Reaction", "Solution"]
    },

    {
        term: "Radioisotope",
        broadCategory: "Science",
        subject: "ChemistryPhysics",
        def: "An isotope with an unstable nucleus that undergoes radioactive decay while releasing particles or electromagnetic radiation.",
        example: "Carbon-14 is a radioisotope used in radiometric dating of certain formerly living materials.",
        related: ["Isotope", "Radioactivity", "Half-Life"]
    },

    {
        term: "Redox Reaction",
        broadCategory: "Science",
        subject: "ChemistryPhysics",
        def: "A chemical reaction involving electron transfer in which oxidation and reduction occur simultaneously between different chemical species.",
        example: "The chemical reactions inside many batteries involve redox processes that transfer electrons through an external circuit.",
        related: ["Oxidation", "Reduction", "Electron"]
    },

    {
        term: "Reduction",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "A chemical process involving the gain of electrons or a decrease in the oxidation state of an atom, ion, or molecule.",
        example: "During a redox reaction, a metal ion may gain electrons and become a neutral metal atom.",
        related: ["Oxidation", "Redox Reaction", "Electron"]
    },

    {
        term: "Resonance",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A way of representing molecules or ions using multiple valid Lewis structures when no single structure adequately describes the distribution of electrons.",
        example: "The carbonate ion can be represented using several resonance structures with equivalent positions for the double bond.",
        related: ["Lewis Structure", "Electron", "Molecule"]
    },

    {
        term: "Solubility",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The maximum amount of a substance that can dissolve in a specified amount of solvent under particular conditions such as temperature and pressure.",
        example: "The solubility of many solid substances in water changes when the temperature changes.",
        related: ["Solute", "Solvent", "Solution"]
    },

    {
        term: "Solute",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The substance that is dissolved in a solvent to form a solution and is often present in a smaller amount than the solvent.",
        example: "In salt water, sodium chloride is the solute and water is the solvent.",
        related: ["Solvent", "Solution", "Solubility"]
    },

    {
        term: "Solution",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A homogeneous mixture in which one or more solutes are uniformly distributed throughout a solvent.",
        example: "Sugar completely dissolved in water forms a sugar solution.",
        related: ["Solute", "Solvent", "Concentration"]
    },

    {
        term: "Solvent",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The component of a solution that dissolves the solute and is commonly present in the greatest proportion by amount or volume.",
        example: "Water is the solvent in an aqueous salt solution.",
        related: ["Solute", "Solution", "Solubility"]
    },

    {
        term: "Spectroscopy",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "The study and measurement of how matter interacts with electromagnetic radiation as a function of wavelength or frequency.",
        example: "Scientists can use spectroscopy to identify substances by analyzing the wavelengths of light they absorb or emit.",
        related: ["Electromagnetic Spectrum", "Photon", "NMR"]
    },

    {
        term: "Stoichiometry",
        broadCategory: "Science",
        subject: "Chemistry/",
        def: "The quantitative study of the relationships between reactants and products in chemical reactions using balanced equations and the conservation of matter.",
        example: "Stoichiometry can determine how many grams of oxygen are needed to react completely with a given amount of fuel.",
        related: ["Mole", "Molar Mass", "Chemical Equation"]
    },

    {
        term: "Titration",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "A quantitative laboratory technique in which a solution of known concentration is gradually added to another solution to determine the unknown concentration using a known reaction.",
        example: "An acid-base titration can determine the concentration of an unknown acid using a standard base solution.",
        related: ["Molarity", "pH", "Stoichiometry"]
    },

    {
        term: "Transition Metal",
        broadCategory: "Science",
        subject: "Chemistry/Physics/Engineering",
        def: "An element associated with a partially filled d subshell in an atom or one of its common ions, often exhibiting multiple oxidation states and forming colored compounds.",
        example: "Iron is a transition metal that can commonly form Fe²⁺ and Fe³⁺ ions.",
        related: ["Periodic Table", "Oxidation State", "Metal"]
    },

    {
        term: "Valence Electrons",
        broadCategory: "Science",
        subject: "Chemistry/Physics",
        def: "Electrons in the outermost occupied shell of an atom that are especially important in determining how the atom forms chemical bonds.",
        example: "Sodium has one valence electron, which it can readily lose to form a positive ion.",
        related: ["Electron Configuration", "Chemical Bond", "Octet Rule"]
    },

    {
        term: "VSEPR Theory",
        broadCategory: "Science",
        subject: "Chemistry",
        def: "The Valence Shell Electron Pair Repulsion theory predicts molecular geometry by considering how electron pairs around a central atom repel and arrange themselves to minimize repulsion.",
        example: "VSEPR theory predicts that water has a bent molecular shape because of the electron pairs around oxygen.",
        related: ["Lewis Structure", "Molecular Geometry", "Valence Electrons"]
    },


    // =========================================================
    // BIOLOGY
    // =========================================================

    {
        term: "Allele",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "One of two or more alternative versions of a gene found at the same location, or locus, on corresponding chromosomes.",
        example: "A gene controlling a particular trait can have different alleles that contribute to variations in that trait.",
        related: ["Gene", "Genotype", "Chromosome"]
    },

    {
        term: "Amino Acid",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "An organic molecule containing amino and carboxyl functional groups that serves as a building block for proteins.",
        example: "Glycine is one of the amino acids used to build proteins.",
        related: ["Protein", "Peptide Bond", "Organic Chemistry"]
    },

    {
        term: "Anatomy",
        broadCategory: "Science",
        subject: "Biology/Medicine",
        def: "The branch of biological science concerned with the structure and organization of organisms and their parts, from cells and tissues to organs and body systems.",
        example: "Studying the structure of the human heart is an example of anatomy.",
        related: ["Physiology", "Organ", "Tissue"]
    },

    {
        term: "Antibody",
        broadCategory: "Science",
        subject: "Biology/Immunology",
        def: "A specialized protein produced by certain immune cells that recognizes and binds specifically to an antigen, helping the immune system respond to foreign substances.",
        example: "Antibodies can recognize specific molecules on the surface of pathogens.",
        related: ["Antigen", "Immune System", "Immunology"]
    },

    {
        term: "Antigen",
        broadCategory: "Science",
        subject: "Biology/Immunology",
        def: "A molecule or molecular structure that can be recognized by components of the immune system and may trigger an immune response.",
        example: "A protein on the surface of a virus can act as an antigen recognized by the immune system.",
        related: ["Antibody", "Immune Response", "Pathogen"]
    },

    {
        term: "Asexual Reproduction",
        broadCategory: "Science",
        subject: "Biology",
        def: "A form of reproduction involving a single parent in which offspring are produced without the fusion of gametes and are often genetically very similar to the parent.",
        example: "Bacteria can reproduce asexually through binary fission.",
        related: ["Mitosis", "Reproduction", "Binary Fission"]
    },

    {
        term: "ATP",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "Adenosine triphosphate is a molecule that stores and transfers usable chemical energy within cells and powers many cellular processes.",
        example: "Muscle cells use ATP as an immediate energy source for contraction.",
        related: ["Cellular Respiration", "Energy", "Mitochondria"]
    },

    {
        term: "Autotroph",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "An organism that produces organic molecules from inorganic substances using an external energy source such as sunlight or chemical energy.",
        example: "Green plants are autotrophs because they produce sugars through photosynthesis.",
        related: ["Photosynthesis", "Producer", "Ecosystem"]
    },

    {
        term: "Bacteriophage",
        broadCategory: "Science",
        subject: "Biology/Microbiology",
        def: "A virus that specifically infects bacteria and uses the bacterial cell's machinery to reproduce itself.",
        example: "A bacteriophage can attach to a bacterial cell and introduce its genetic material into the cell.",
        related: ["Virus", "Bacteria", "Genetic Material"]
    },

    {
        term: "Binomial Nomenclature",
        broadCategory: "Science",
        subject: "Biology/Taxonomy",
        def: "A standardized biological naming system in which each species is given a two-part scientific name consisting of its genus and species designation.",
        example: "Humans are scientifically named Homo sapiens.",
        related: ["Taxonomy", "Species", "Genus"]
    },

    {
        term: "Biome",
        broadCategory: "Science",
        subject: "Biology/Earth Science",
        def: "A large ecological region characterized by particular climate conditions and dominant forms of vegetation and animal life.",
        example: "Tropical rainforests form a biome characterized by warm temperatures and high rainfall.",
        related: ["Ecosystem", "Climate", "Habitat"]
    },

    {
        term: "Biosphere",
        broadCategory: "Science",
        subject: "Biology/Earth Science",
        def: "The global zone of Earth in which living organisms exist, including the interconnected biological communities and environments where life occurs.",
        example: "Plants, animals, microorganisms, soil, water, and atmospheric gases all contribute to Earth's biosphere.",
        related: ["Ecosystem", "Biome", "Earth System"]
    },

    {
        term: "Cell",
        broadCategory: "Science",
        subject: "Biology",
        def: "The basic structural and functional unit of life, capable of carrying out essential processes such as metabolism, growth, and reproduction.",
        example: "A human body is made up of trillions of specialized cells working together.",
        related: ["Cell Membrane", "Nucleus", "Organelle"]
    },

    {
        term: "Cell Membrane",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "A selectively permeable membrane surrounding a cell that regulates the movement of substances into and out of the cell while helping maintain the cell's internal environment.",
        example: "The cell membrane allows some molecules to enter the cell while preventing others from crossing freely.",
        related: ["Osmosis", "Diffusion", "Phospholipid"]
    },

    {
        term: "Cellular Respiration",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "A series of metabolic reactions through which cells extract energy from nutrients and transfer much of that energy into ATP for cellular use.",
        example: "Cells can break down glucose during cellular respiration to produce ATP.",
        related: ["ATP", "Mitochondria", "Metabolism"]
    },

    {
        term: "Centriole",
        broadCategory: "Science",
        subject: "Biology",
        def: "A cylindrical structure made primarily of microtubules that helps organize components of the cytoskeleton and plays an important role in cell division in many animal cells.",
        example: "Centrioles help organize spindle structures during animal-cell division.",
        related: ["Microtubule", "Mitosis", "Cytoskeleton"]
    },

    {
        term: "Chloroplast",
        broadCategory: "Science",
        subject: "Biology/Biochemistry",
        def: "A membrane-bound organelle found in plants and many algae where photosynthesis occurs, using chlorophyll to capture light energy.",
        example: "Chloroplasts in plant cells absorb light energy needed for photosynthesis.",
        related: ["Photosynthesis", "Chlorophyll", "Cell"]
    },

    {
        term: "Chromatid",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "One of the two DNA-containing copies of a replicated chromosome that remain connected at a centromere before they separate during cell division.",
        example: "During mitosis, sister chromatids eventually separate and move to opposite sides of the cell.",
        related: ["Chromosome", "Centromere", "Mitosis"]
    },

    {
        term: "Chromosome",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A DNA-protein structure that contains genetic information and organizes DNA within a cell, with eukaryotic chromosomes located primarily in the nucleus.",
        example: "Humans normally have 46 chromosomes in most body cells.",
        related: ["DNA", "Gene", "Chromatid"]
    },

    {
        term: "Cilia",
        broadCategory: "Science",
        subject: "Biology",
        def: "Short, hair-like cellular structures that extend from the surface of certain cells and can be used for movement, transporting materials, or sensing environmental conditions.",
        example: "Cilia in the respiratory tract help move mucus and trapped particles away from the lungs.",
        related: ["Flagellum", "Cytoskeleton", "Cell"]
    },

    {
        term: "Codon",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A sequence of three nucleotides in mRNA that specifies an amino acid or provides a signal to begin or end protein synthesis.",
        example: "During translation, ribosomes read mRNA codons to determine the order of amino acids in a protein.",
        related: ["RNA", "Translation", "Amino Acid"]
    },

    {
        term: "Commensalism",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "An ecological interaction between two species in which one species benefits while the other is not significantly helped or harmed.",
        example: "Some organisms live on another organism and gain transportation or access to resources without significantly affecting the host.",
        related: ["Mutualism", "Parasitism", "Symbiosis"]
    },

    {
        term: "Community",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "All the populations of different species that live and interact within the same area or ecosystem.",
        example: "A pond community can include fish, algae, insects, bacteria, and aquatic plants.",
        related: ["Population", "Ecosystem", "Biome"]
    },

    {
        term: "Cytokinesis",
        broadCategory: "Science",
        subject: "Biology",
        def: "The process that divides the cytoplasm of a parent cell after nuclear division, producing separate daughter cells.",
        example: "After mitosis, cytokinesis separates the cytoplasm to form two daughter cells.",
        related: ["Mitosis", "Cell Division", "Cytoplasm"]
    },

    {
        term: "Cytoplasm",
        broadCategory: "Science",
        subject: "Biology",
        def: "The material inside a cell and outside the nucleus in eukaryotic cells, consisting of the cytosol and various cellular structures and organelles.",
        example: "Many metabolic reactions take place within the cytoplasm of a cell.",
        related: ["Cell", "Organelle", "Cytoskeleton"]
    },

    {
        term: "Cytoskeleton",
        broadCategory: "Science",
        subject: "Biology",
        def: "A dynamic network of protein fibers that helps maintain cell shape, organize organelles, enable movement, and assist in cell division.",
        example: "Microtubules in the cytoskeleton help chromosomes move during cell division.",
        related: ["Microtubule", "Cilia", "Cell"]
    },

    {
        term: "Diploid",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "Describing a cell or organism that contains two sets of chromosomes, generally one set inherited from each biological parent.",
        example: "Most human body cells are diploid and contain 46 chromosomes.",
        related: ["Haploid", "Chromosome", "Meiosis"]
    },

    {
        term: "DNA",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "Deoxyribonucleic acid is the molecule that stores hereditary genetic information and provides instructions involved in the development, function, and reproduction of organisms.",
        example: "DNA contains sequences that can serve as genes encoding functional biological products.",
        related: ["Gene", "RNA", "Chromosome"]
    },

    {
        term: "DNA Replication",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "The cellular process of copying DNA before cell division so that each resulting cell can receive an appropriate copy of the genetic information.",
        example: "During DNA replication, each original DNA strand serves as a template for a new complementary strand.",
        related: ["DNA", "Chromosome", "Nucleotide"]
    },

    {
        term: "Dominant Trait",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A trait associated with a dominant allele that can be expressed in an individual's phenotype when at least one copy of that allele is present.",
        example: "In a simplified genetic model, an individual with one dominant allele and one recessive allele may display the dominant phenotype.",
        related: ["Allele", "Genotype", "Recessive Trait"]
    },

    {
        term: "Ecosystem",
        broadCategory: "Science",
        subject: "Biology/Earth Science",
        def: "A system consisting of interacting living organisms and the nonliving physical and chemical components of their environment.",
        example: "A coral reef ecosystem includes corals, fish, microorganisms, seawater, sunlight, and nutrients.",
        related: ["Community", "Biome", "Food Chain"]
    },

    {
        term: "Endocytosis",
        broadCategory: "Science",
        subject: "Biology",
        def: "A cellular transport process in which the cell membrane surrounds material outside the cell and forms a vesicle that brings the material into the cell.",
        example: "A cell can use endocytosis to take in large particles or specific molecules from its surroundings.",
        related: ["Exocytosis", "Cell Membrane", "Vesicle"]
    },

    {
        term: "Endoplasmic Reticulum",
        broadCategory: "Science",
        subject: "Biology",
        def: "A network of membrane-bound structures in eukaryotic cells involved in processes such as protein production, lipid synthesis, and intracellular transport.",
        example: "Rough endoplasmic reticulum contains ribosomes and is involved in producing many proteins.",
        related: ["Ribosome", "Golgi Apparatus", "Organelle"]
    },

    {
        term: "Endosymbiosis",
        broadCategory: "Science",
        subject: "Biology/Evolution",
        def: "The evolutionary theory that mitochondria and chloroplasts originated from free-living prokaryotic organisms that entered into long-term symbiotic relationships with ancestral eukaryotic cells.",
        example: "The presence of their own DNA and bacterial-like ribosomes supports the endosymbiotic origin of mitochondria and chloroplasts.",
        related: ["Mitochondria", "Chloroplast", "Evolution"]
    },

    {
        term: "Enzyme",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "A biological catalyst, usually a protein, that speeds up specific chemical reactions by lowering the activation energy without being consumed in the reaction.",
        example: "Amylase helps break down starch into smaller carbohydrates during digestion.",
        related: ["Catalyst", "Protein", "Activation Energy"]
    },

    {
        term: "Epigenetics",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The study of heritable or persistent changes in gene activity that occur without changing the underlying DNA sequence itself.",
        example: "Chemical modifications to DNA or associated proteins can influence whether certain genes are more or less active.",
        related: ["Gene Expression", "DNA", "Genetics"]
    },

    {
        term: "Eukaryote",
        broadCategory: "Science",
        subject: "Biology",
        def: "An organism whose cells contain a membrane-bound nucleus and other membrane-bound organelles, including animals, plants, fungi, and many protists.",
        example: "Humans are eukaryotic organisms because their cells contain nuclei.",
        related: ["Prokaryote", "Nucleus", "Organelle"]
    },

    {
        term: "Evolution",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The change in heritable characteristics of biological populations across generations, driven by mechanisms such as natural selection, mutation, genetic drift, and gene flow.",
        example: "Populations can evolve when inherited traits that improve reproductive success become more common over generations.",
        related: ["Natural Selection", "Mutation", "Genetic Drift"]
    },

    {
        term: "Exocytosis",
        broadCategory: "Science",
        subject: "Biology",
        def: "A cellular transport process in which vesicles fuse with the cell membrane and release their contents outside the cell.",
        example: "Cells can use exocytosis to release hormones, neurotransmitters, or digestive enzymes.",
        related: ["Endocytosis", "Vesicle", "Cell Membrane"]
    },

    {
        term: "Fermentation",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "A metabolic process that allows cells to obtain limited energy from organic molecules without relying on oxygen as the final electron acceptor.",
        example: "Yeast can use fermentation to convert sugars into ethanol and carbon dioxide.",
        related: ["Cellular Respiration", "ATP", "Metabolism"]
    },

    {
        term: "Flagellum",
        broadCategory: "Science",
        subject: "Biology",
        def: "A long, whip-like cellular structure used by certain cells and microorganisms for movement or locomotion.",
        example: "Some bacteria use a flagellum to move through liquid environments.",
        related: ["Cilia", "Cell", "Cytoskeleton"]
    },

    {
        term: "Gene",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A region of genetic material that contains information contributing to a functional product, such as an RNA molecule or protein, and can influence inherited traits.",
        example: "A gene can contain instructions used to produce a particular protein.",
        related: ["DNA", "Allele", "Gene Expression"]
    },

    {
        term: "Gene Expression",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The process through which information encoded in a gene is used to produce a functional RNA or protein and influence cellular activity.",
        example: "A cell can increase expression of a gene when the protein encoded by that gene is needed.",
        related: ["Gene", "Transcription", "Translation"]
    },

    {
        term: "Genetic Drift",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A mechanism of evolution in which allele frequencies change between generations due to random sampling effects rather than differences in adaptive fitness.",
        example: "A small population can experience genetic drift if random events cause certain alleles to become more common.",
        related: ["Evolution", "Allele", "Natural Selection"]
    },

    {
        term: "Genetics",
        broadCategory: "Science",
        subject: "Biology",
        def: "The branch of biology that studies genes, heredity, genetic variation, and how biological information is transmitted between generations.",
        example: "Genetics can be used to study how inherited traits are passed from parents to offspring.",
        related: ["Gene", "DNA", "Heredity"]
    },

    {
        term: "Genome",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The complete genetic material of an organism, including its genes and other DNA sequences, or the equivalent genetic material in organisms with other forms of genomes.",
        example: "Sequencing the human genome allows scientists to study its complete DNA sequence.",
        related: ["DNA", "Gene", "Chromosome"]
    },

    {
        term: "Genotype",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The specific genetic makeup or combination of alleles possessed by an individual, which can contribute to its observable traits.",
        example: "An organism with genotype Aa carries one dominant allele and one recessive allele at a particular locus.",
        related: ["Phenotype", "Allele", "Gene"]
    },

    {
        term: "Golgi Apparatus",
        broadCategory: "Science",
        subject: "Biology",
        def: "A membrane-bound organelle that modifies, sorts, and packages proteins and lipids for transport within or outside the cell.",
        example: "Proteins produced in the rough endoplasmic reticulum can be modified and packaged by the Golgi apparatus.",
        related: ["Endoplasmic Reticulum", "Vesicle", "Organelle"]
    },

    {
        term: "Haploid",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "Describing a cell or organism containing one complete set of chromosomes, as found in many reproductive cells.",
        example: "Human sperm and egg cells are haploid and normally contain 23 chromosomes.",
        related: ["Diploid", "Meiosis", "Chromosome"]
    },

    {
        term: "Heterotroph",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "An organism that obtains organic nutrients and energy from other organisms or their products rather than producing all of its organic food from inorganic materials.",
        example: "Animals are heterotrophs because they obtain nutrients by consuming other organisms.",
        related: ["Autotroph", "Consumer", "Ecosystem"]
    },

    {
        term: "Homeostasis",
        broadCategory: "Science",
        subject: "Biology",
        def: "The ability of an organism or cell to maintain relatively stable internal conditions despite changes in the external environment.",
        example: "The human body regulates its temperature to maintain suitable conditions for cellular processes.",
        related: ["Feedback Loop", "Metabolism", "Physiology"]
    },

    {
        term: "Homologous Chromosomes",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A pair of chromosomes that contain the same types of genes at corresponding locations, with one chromosome typically inherited from each biological parent.",
        example: "During meiosis, homologous chromosomes pair and can exchange genetic material through crossing over.",
        related: ["Chromosome", "Meiosis", "Genetics"]
    },

    {
        term: "Immunology",
        broadCategory: "Science",
        subject: "Biology/Medicine",
        def: "The branch of biology and medical science that studies the immune system, immune responses, and interactions between organisms and foreign substances.",
        example: "Immunology helps scientists understand how antibodies recognize specific antigens.",
        related: ["Antibody", "Antigen", "Immune System"]
    },

    {
        term: "Lysosome",
        broadCategory: "Science",
        subject: "Biology",
        def: "A membrane-bound organelle containing enzymes that help break down certain cellular waste materials, macromolecules, and damaged cellular components.",
        example: "Lysosomes can digest damaged cell components so that some of their materials can be reused.",
        related: ["Organelle", "Enzyme", "Endocytosis"]
    },

    {
        term: "Meiosis",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A specialized form of cell division that reduces chromosome number by half and produces genetically varied haploid cells used in sexual reproduction.",
        example: "Meiosis produces sperm or egg cells in organisms that reproduce sexually.",
        related: ["Mitosis", "Haploid", "Chromosome"]
    },

    {
        term: "Metabolism",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "The complete collection of chemical reactions occurring within an organism or cell that maintain life, including processes that build molecules and break them down.",
        example: "Cellular respiration is part of metabolism because it helps extract usable energy from nutrients.",
        related: ["Enzyme", "ATP", "Cellular Respiration"]
    },

    {
        term: "Mitochondria",
        broadCategory: "Science",
        subject: "Biology/Biochemistry",
        def: "Membrane-bound organelles in eukaryotic cells that carry out important metabolic processes and produce much of the cell's ATP through aerobic respiration.",
        example: "Muscle cells contain many mitochondria because they require substantial amounts of ATP.",
        related: ["ATP", "Cellular Respiration", "Organelle"]
    },

    {
        term: "Mitosis",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A type of nuclear division that produces daughter nuclei with essentially the same chromosome number and genetic information as the parent nucleus.",
        example: "Mitosis allows multicellular organisms to grow and replace damaged or old cells.",
        related: ["Meiosis", "Cell Division", "Chromosome"]
    },

    {
        term: "Mutualism",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "A biological interaction between two species in which both organisms receive a benefit from their relationship.",
        example: "Bees obtain food from flowers while helping the plants reproduce through pollination.",
        related: ["Symbiosis", "Commensalism", "Parasitism"]
    },

    {
        term: "Mutation",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A change in the DNA sequence of an organism that can arise through replication errors, environmental factors, or other biological processes and may affect genetic traits.",
        example: "A change in a DNA sequence can sometimes alter the protein produced by a gene.",
        related: ["DNA", "Gene", "Evolution"]
    },

    {
        term: "Natural Selection",
        broadCategory: "Science",
        subject: "Biology/Evolution",
        def: "An evolutionary mechanism in which individuals with heritable characteristics that improve survival or reproduction tend to leave more offspring, causing those characteristics to become more common.",
        example: "A population of insects may become more resistant to a pesticide when resistant individuals survive and reproduce more successfully.",
        related: ["Evolution", "Adaptation", "Genetic Variation"]
    },

    {
        term: "Nucleotide",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "The basic building block of nucleic acids such as DNA and RNA, consisting of a sugar, a phosphate group, and a nitrogen-containing base.",
        example: "DNA is constructed from four main types of nucleotides containing different nitrogenous bases.",
        related: ["DNA", "RNA", "Gene"]
    },

    {
        term: "Nucleus",
        broadCategory: "Science",
        subject: "Biology",
        def: "A membrane-bound organelle in eukaryotic cells that contains most of the cell's DNA and helps regulate gene expression and cellular activities.",
        example: "The nucleus stores chromosomes that contain the cell's genetic information.",
        related: ["DNA", "Chromosome", "Cell"]
    },

    {
        term: "Organelle",
        broadCategory: "Science",
        subject: "Biology",
        def: "A specialized structure within a cell that performs a particular function, with many eukaryotic organelles surrounded by membranes.",
        example: "Mitochondria, chloroplasts, and the Golgi apparatus are examples of organelles.",
        related: ["Cell", "Nucleus", "Mitochondria"]
    },

    {
        term: "Osmosis",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "The net movement of water or another solvent across a selectively permeable membrane toward the side with the higher effective solute concentration.",
        example: "Water can move into a plant cell by osmosis when the surrounding conditions favor water entering the cell.",
        related: ["Diffusion", "Cell Membrane", "Solute"]
    },

    {
        term: "Parasitism",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "A biological interaction in which one organism, the parasite, benefits while the host is negatively affected.",
        example: "A tapeworm living inside an animal and obtaining nutrients from its host is an example of parasitism.",
        related: ["Symbiosis", "Mutualism", "Pathogen"]
    },

    {
        term: "Pathogen",
        broadCategory: "Science",
        subject: "Biology/Microbiology",
        def: "A biological agent capable of causing disease or harmful effects in a host, including certain viruses, bacteria, fungi, and parasites.",
        example: "Some bacteria are pathogens because they can cause disease when they infect a suitable host.",
        related: ["Virus", "Bacteria", "Immune System"]
    },

    {
        term: "Phenotype",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The observable characteristics of an organism that result from interactions between its genetic makeup and environmental influences.",
        example: "Height is a phenotype influenced by both genetic factors and environmental conditions such as nutrition.",
        related: ["Genotype", "Gene", "Environment"]
    },

    {
        term: "Photosynthesis",
        broadCategory: "Science",
        subject: "Biology/Biochemistry",
        def: "A biological process in which plants, algae, and certain microorganisms capture light energy and use it to produce organic molecules from carbon dioxide and water.",
        example: "Plants use photosynthesis to produce sugars while releasing oxygen as a byproduct under typical oxygenic photosynthesis.",
        related: ["Chloroplast", "ATP", "Autotroph"]
    },

    {
        term: "Plasmid",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A small, usually circular DNA molecule separate from the main chromosome that can replicate independently in many bacteria.",
        example: "Scientists can use bacterial plasmids as vectors to carry selected genes in genetic engineering.",
        related: ["DNA", "Gene", "Bacteria"]
    },

    {
        term: "Prokaryote",
        broadCategory: "Science",
        subject: "Biology/Microbiology",
        def: "An organism whose cells lack a membrane-bound nucleus and other membrane-bound organelles, including bacteria and archaea.",
        example: "Bacteria are prokaryotes because their DNA is not enclosed within a membrane-bound nucleus.",
        related: ["Eukaryote", "Cell", "Bacteria"]
    },

    {
        term: "Protein",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "A biological macromolecule made from one or more chains of amino acids that fold into structures enabling a wide range of cellular functions.",
        example: "Hemoglobin is a protein that helps transport oxygen in red blood cells.",
        related: ["Amino Acid", "Enzyme", "RNA"]
    },

    {
        term: "Punnett Square",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A diagram used to organize possible combinations of parental alleles and predict the expected genotype and phenotype ratios of offspring.",
        example: "A Punnett square can be used to predict the possible offspring genotypes from a simple Aa × Aa cross.",
        related: ["Allele", "Genotype", "Inheritance"]
    },

    {
        term: "Recessive Trait",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A trait associated with a recessive allele that is generally expressed in a simple Mendelian model only when the relevant genotype contains two copies of the recessive allele.",
        example: "In a simplified Aa model, the recessive phenotype is expected when the genotype is aa.",
        related: ["Dominant Trait", "Allele", "Genotype"]
    },

    {
        term: "Ribosome",
        broadCategory: "Science",
        subject: "Biology/Biochemistry",
        def: "A cellular molecular machine that reads messenger RNA and assembles amino acids into a polypeptide during protein synthesis.",
        example: "Ribosomes translate the genetic information carried by mRNA into proteins.",
        related: ["RNA", "Translation", "Protein"]
    },

    {
        term: "RNA",
        broadCategory: "Science",
        subject: "Biology/Chemistry",
        def: "Ribonucleic acid is a nucleic acid involved in processes such as gene expression, protein synthesis, regulation, and in some organisms or viruses, genetic information storage.",
        example: "Messenger RNA carries information copied from DNA to ribosomes for protein production.",
        related: ["DNA", "Transcription", "Translation"]
    },

    {
        term: "Speciation",
        broadCategory: "Science",
        subject: "Biology/Evolution",
        def: "The evolutionary process through which populations become genetically distinct enough that they form separate species.",
        example: "Geographic isolation can reduce gene flow between populations and contribute to speciation over many generations.",
        related: ["Evolution", "Natural Selection", "Genetic Drift"]
    },

    {
        term: "Symbiosis",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "A close and long-term biological interaction between organisms of different species, including relationships such as mutualism, commensalism, and parasitism.",
        example: "The relationship between certain fungi and plant roots is a form of symbiotic interaction.",
        related: ["Mutualism", "Parasitism", "Commensalism"]
    },

    {
        term: "Taxonomy",
        broadCategory: "Science",
        subject: "Biology",
        def: "The scientific discipline concerned with identifying, naming, describing, and classifying organisms according to their characteristics and evolutionary relationships.",
        example: "Scientists use taxonomy to classify organisms into groups such as species, genera, families, and kingdoms.",
        related: ["Binomial Nomenclature", "Species", "Evolution"]
    },

    {
        term: "Transcription",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The cellular process of producing an RNA molecule using a DNA sequence as a template, forming an important step in gene expression.",
        example: "During transcription, a gene's DNA sequence is used to produce a complementary RNA molecule.",
        related: ["DNA", "RNA", "Gene Expression"]
    },

    {
        term: "Translation",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "The process in which ribosomes read the nucleotide sequence of messenger RNA and assemble amino acids into a polypeptide.",
        example: "During translation, mRNA codons are matched with amino acids to build a protein.",
        related: ["Ribosome", "Codon", "Protein"]
    },

    {
        term: "Trophic Level",
        broadCategory: "Science",
        subject: "Biology/Ecology",
        def: "The position an organism occupies within a food chain or food web based on how it obtains energy and matter.",
        example: "Plants generally occupy the producer trophic level, while herbivores occupy a primary consumer level.",
        related: ["Food Chain", "Ecosystem", "Producer"]
    },

    {
        term: "Vacuole",
        broadCategory: "Science",
        subject: "Biology",
        def: "A membrane-bound compartment used for storing water, ions, nutrients, pigments, waste materials, and other substances, with large central vacuoles being characteristic of many plant cells.",
        example: "The large central vacuole of a plant cell helps maintain internal water pressure and supports the cell.",
        related: ["Organelle", "Cell Membrane", "Plant Cell"]
    },

    {
        term: "Virus",
        broadCategory: "Science",
        subject: "Biology/Microbiology",
        def: "An infectious biological entity consisting of genetic material enclosed in a protein-based structure that requires a host cell's machinery to reproduce.",
        example: "A virus can enter a host cell and use cellular machinery to produce new viral components.",
        related: ["Pathogen", "Bacteriophage", "RNA"]
    },

    {
        term: "Zygote",
        broadCategory: "Science",
        subject: "Biology/Genetics",
        def: "A cell formed when two haploid gametes fuse during fertilization, combining their genetic material and beginning the development of a new organism.",
        example: "In humans, fertilization produces a diploid zygote containing genetic material from both gametes.",
        related: ["Fertilization", "Gamete", "Diploid"]
    },


    // =========================================================
    // EARTH & SPACE SCIENCE
    // =========================================================

    {
        term: "Asteroid",
        broadCategory: "Science",
        subject: "Earth Science/Astronomy",
        def: "A relatively small rocky or metallic celestial body that orbits the Sun and is generally much smaller than a planet.",
        example: "Many asteroids orbit the Sun in the asteroid belt between Mars and Jupiter.",
        related: ["Comet", "Orbit", "Solar System"]
    },

    {
        term: "Asthenosphere",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A relatively weak and ductile region of Earth's upper mantle beneath the lithosphere that can deform slowly and contribute to the movement of tectonic plates.",
        example: "Tectonic plates move over the weaker asthenosphere as part of Earth's dynamic interior.",
        related: ["Lithosphere", "Mantle", "Plate Tectonics"]
    },

    {
        term: "Atmosphere",
        broadCategory: "Science",
        subject: "Earth Science/Meteorology",
        def: "The layer of gases surrounding a planetary body and held by gravity, influencing weather, climate, temperature, and conditions at the surface.",
        example: "Earth's atmosphere contains mostly nitrogen and oxygen and protects the surface from some harmful radiation.",
        related: ["Weather", "Climate", "Greenhouse Effect"]
    },

    {
        term: "Big Bang Theory",
        broadCategory: "Science",
        subject: "Astronomy/Cosmology/Physics",
        def: "The leading cosmological model describing the early universe as having been in an extremely hot and dense state followed by expansion and cooling over cosmic time.",
        example: "The cosmic microwave background is one important observation supporting the Big Bang model.",
        related: ["Cosmology", "Universe", "Cosmic Microwave Background"]
    },

    {
        term: "Biogeochemical Cycle",
        broadCategory: "Science",
        subject: "Earth Science/Biology/Chemistry",
        def: "A natural cycle through which chemical elements and compounds move between living organisms and Earth's atmosphere, water, rocks, and soil.",
        example: "The carbon cycle moves carbon between the atmosphere, oceans, organisms, and geological materials.",
        related: ["Carbon Cycle", "Ecosystem", "Earth System"]
    },

    {
        term: "Comet",
        broadCategory: "Science",
        subject: "Astronomy/Earth Science",
        def: "A small celestial body containing substantial ice and dust that can develop a glowing coma and tail when solar heating causes material to escape near the Sun.",
        example: "Halley's Comet becomes visible from Earth as it returns through the inner Solar System.",
        related: ["Asteroid", "Orbit", "Solar System"]
    },

    {
        term: "Continental Drift",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The historical scientific idea that Earth's continents have moved relative to one another over geological time, later incorporated into the broader theory of plate tectonics.",
        example: "The matching shapes and fossil evidence across continents helped support the idea of continental drift.",
        related: ["Plate Tectonics", "Tectonic Plate", "Pangaea"]
    },

    {
        term: "Coriolis Effect",
        broadCategory: "Science",
        subject: "Earth Science/Physics",
        def: "The apparent deflection of moving objects when their motion is observed from a rotating reference frame, strongly influencing large-scale atmospheric and oceanic circulation on Earth.",
        example: "The Coriolis effect contributes to the rotation direction of large weather systems.",
        related: ["Atmosphere", "Ocean Current", "Rotation"]
    },

    {
        term: "Cosmology",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "The scientific study of the origin, large-scale structure, evolution, composition, and possible future of the universe.",
        example: "Cosmologists study evidence about how galaxies and the universe developed over billions of years.",
        related: ["Big Bang Theory", "Dark Energy", "Galaxy"]
    },

    {
        term: "Crust",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The outermost solid layer of Earth, consisting of continental and oceanic crust and differing in composition and thickness from the underlying mantle.",
        example: "Oceanic crust is generally thinner and denser than continental crust.",
        related: ["Lithosphere", "Mantle", "Plate Tectonics"]
    },

    {
        term: "Doppler Shift",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A change in the observed wavelength or frequency of radiation caused by relative motion between the source and observer, commonly used to determine motion in astronomy.",
        example: "Astronomers can observe redshift in light from distant galaxies to study their motion relative to Earth.",
        related: ["Redshift", "Doppler Effect", "Galaxy"]
    },

    {
        term: "Earthquake",
        broadCategory: "Science",
        subject: "Earth Science/Geology/Physics",
        def: "The shaking of Earth's surface caused by the sudden release of stored energy within the crust or upper mantle, commonly associated with movement along faults.",
        example: "An earthquake can occur when accumulated stress causes rocks along a fault to suddenly slip.",
        related: ["Fault", "Seismology", "Tectonic Plate"]
    },

    {
        term: "Eclipse",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "An astronomical event in which one celestial object moves into a position where it blocks, partially blocks, or enters the shadow of another object relative to an observer.",
        example: "A solar eclipse occurs when the Moon passes between Earth and the Sun.",
        related: ["Orbit", "Moon", "Solar System"]
    },

    {
        term: "El Niño",
        broadCategory: "Science",
        subject: "Earth Science/Meteorology/Oceanography",
        def: "A periodic climate phenomenon involving unusually warm sea-surface temperatures in the central and eastern tropical Pacific Ocean that can influence weather patterns worldwide.",
        example: "El Niño can alter rainfall and temperature patterns in different regions around the Pacific and beyond.",
        related: ["Climate", "Ocean Current", "Atmosphere"]
    },

    {
        term: "Erosion",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The removal and transportation of soil, rock, and other surface materials by agents such as flowing water, wind, ice, or gravity.",
        example: "Heavy rainfall can erode soil from a hillside and transport sediment into a river.",
        related: ["Weathering", "Sediment", "Deposition"]
    },

    {
        term: "Exoplanet",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A planet located outside our Solar System that orbits a star other than the Sun.",
        example: "Astronomers have discovered thousands of confirmed exoplanets using methods such as transit observations.",
        related: ["Planet", "Orbit", "Astronomy"]
    },

    {
        term: "Fault",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A fracture or zone of fractures in Earth's crust or lithosphere along which rocks have experienced displacement.",
        example: "Earthquakes can occur when stress causes rocks on opposite sides of a fault to move suddenly.",
        related: ["Earthquake", "Plate Tectonics", "Seismology"]
    },

    {
        term: "Fossil",
        broadCategory: "Science",
        subject: "Earth Science/Paleontology/Biology",
        def: "Preserved remains, impressions, or traces of organisms from the geological past that provide evidence about ancient life and environments.",
        example: "Fossilized shells can provide information about organisms that lived in ancient oceans.",
        related: ["Paleontology", "Evolution", "Geologic Time"]
    },

    {
        term: "Galaxy",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A gravitationally bound system containing stars, stellar remnants, gas, dust, and dark matter, often organized into structures such as spiral or elliptical forms.",
        example: "The Milky Way is the galaxy containing our Solar System.",
        related: ["Milky Way", "Dark Matter", "Universe"]
    },

    {
        term: "Geologic Time Scale",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A chronological framework used to organize Earth's history into divisions such as eons, eras, periods, and epochs based on major geological and biological events.",
        example: "The extinction of non-avian dinosaurs occurred near the boundary between the Cretaceous and Paleogene periods.",
        related: ["Fossil", "Geology", "Evolution"]
    },

    {
        term: "Greenhouse Effect",
        broadCategory: "Science",
        subject: "Earth Science/Physics/Chemistry",
        def: "The natural warming of a planet's surface and lower atmosphere caused by gases that absorb and re-emit infrared radiation, reducing the rate at which heat escapes to space.",
        example: "Water vapor, carbon dioxide, and methane are greenhouse gases that contribute to Earth's greenhouse effect.",
        related: ["Atmosphere", "Climate", "Radiation"]
    },

    {
        term: "Habitat",
        broadCategory: "Science",
        subject: "Biology/Earth Science",
        def: "The natural environment in which an organism or population lives and obtains the resources and conditions necessary for survival and reproduction.",
        example: "A mangrove forest can provide habitat for fish, birds, crabs, and many other organisms.",
        related: ["Ecosystem", "Biome", "Population"]
    },

    {
        term: "Hydrosphere",
        broadCategory: "Science",
        subject: "Earth Science/Chemistry",
        def: "The combined water component of Earth, including oceans, rivers, lakes, groundwater, glaciers, ice, and water vapor in the atmosphere.",
        example: "Water moves among the ocean, atmosphere, land, and living organisms as part of the hydrosphere.",
        related: ["Water Cycle", "Atmosphere", "Oceanography"]
    },

    {
        term: "Igneous Rock",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A rock formed when molten material such as magma or lava cools and solidifies, either below or at Earth's surface.",
        example: "Granite forms when magma cools slowly beneath Earth's surface.",
        related: ["Magma", "Volcano", "Rock Cycle"]
    },

    {
        term: "Lithosphere",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The relatively rigid outer layer of Earth consisting of the crust and uppermost mantle and divided into tectonic plates.",
        example: "The movement of lithospheric plates contributes to earthquakes, volcanism, and mountain building.",
        related: ["Asthenosphere", "Tectonic Plate", "Plate Tectonics"]
    },

    {
        term: "Magma",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "Molten or partially molten rock located beneath Earth's surface that can cool to form igneous rocks or rise toward the surface during volcanic activity.",
        example: "Magma can rise through cracks in Earth's crust and eventually erupt as lava.",
        related: ["Lava", "Igneous Rock", "Volcano"]
    },

    {
        term: "Metamorphic Rock",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A rock formed when an existing rock is altered by heat, pressure, or chemically active fluids without completely melting.",
        example: "Limestone can transform into marble under suitable metamorphic conditions.",
        related: ["Rock Cycle", "Pressure", "Heat"]
    },

    {
        term: "Meteorology",
        broadCategory: "Science",
        subject: "Earth Science/Physics",
        def: "The scientific study of Earth's atmosphere, weather processes, and atmospheric phenomena, including observations and forecasting.",
        example: "Meteorologists analyze atmospheric pressure, temperature, humidity, and wind to forecast weather.",
        related: ["Weather", "Atmosphere", "Climate"]
    },

    {
        term: "Milky Way",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "The barred spiral galaxy that contains our Solar System and billions of other stars, along with gas, dust, stellar remnants, and dark matter.",
        example: "The Milky Way appears from Earth as a faint band of light across the night sky under dark conditions.",
        related: ["Galaxy", "Solar System", "Dark Matter"]
    },

    {
        term: "Mineral",
        broadCategory: "Science",
        subject: "Earth Science/Chemistry",
        def: "A naturally occurring inorganic solid with an ordered internal structure and a characteristic chemical composition or range of compositions.",
        example: "Quartz is a common mineral composed primarily of silicon and oxygen.",
        related: ["Rock", "Crystal", "Geology"]
    },

    {
        term: "Nebula",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A large cloud of gas, dust, or both in space that can be associated with regions of star formation or the remnants of dying stars.",
        example: "A stellar nursery is a region within a nebula where new stars can form.",
        related: ["Star", "Galaxy", "Interstellar Medium"]
    },

    {
        term: "Neutron Star",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "An extremely dense stellar remnant formed when the core of a massive star collapses, leaving matter composed predominantly of neutrons.",
        example: "Some neutron stars emit beams of radiation and are observed as pulsars.",
        related: ["Supernova", "Gravitational Waves", "Star"]
    },

    {
        term: "Ocean Current",
        broadCategory: "Science",
        subject: "Earth Science/Oceanography/Physics",
        def: "A persistent, directed movement of seawater driven by factors such as wind, density differences, temperature, salinity, Earth's rotation, and gravity.",
        example: "Ocean currents redistribute heat around Earth and influence regional climates.",
        related: ["Coriolis Effect", "Oceanography", "Climate"]
    },

    {
        term: "Oceanography",
        broadCategory: "Science",
        subject: "Earth Science/Biology/Chemistry/Physics",
        def: "The interdisciplinary study of Earth's oceans, including their physical properties, chemical composition, geological features, and biological systems.",
        example: "Oceanographers study currents, marine ecosystems, seafloor structures, and changes in seawater chemistry.",
        related: ["Ocean Current", "Hydrosphere", "Marine Biology"]
    },

    {
        term: "Orbit",
        broadCategory: "Science",
        subject: "Astronomy/Physics/Engineering",
        def: "The path followed by an object as it moves around another object under the influence of gravity or another central force.",
        example: "Earth follows an approximately elliptical orbit around the Sun.",
        related: ["Gravity", "Velocity", "Solar System"]
    },

    {
        term: "Paleontology",
        broadCategory: "Science",
        subject: "Earth Science/Biology",
        def: "The scientific study of ancient life using fossils and other geological evidence to investigate organisms, ecosystems, and biological change through time.",
        example: "Paleontologists study dinosaur fossils to reconstruct aspects of ancient ecosystems.",
        related: ["Fossil", "Evolution", "Geologic Time Scale"]
    },

    {
        term: "Plate Tectonics",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The scientific theory that Earth's lithosphere is divided into moving plates whose interactions shape the surface and cause phenomena such as earthquakes, volcanoes, and mountain formation.",
        example: "When two tectonic plates converge, one plate may be forced beneath another in a process called subduction.",
        related: ["Tectonic Plate", "Lithosphere", "Earthquake"]
    },

    {
        term: "Redshift",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "An increase in the observed wavelength of electromagnetic radiation, often caused by an object moving away from the observer or by the expansion of the universe.",
        example: "Many distant galaxies show redshift, providing evidence that the universe is expanding.",
        related: ["Doppler Shift", "Galaxy", "Cosmology"]
    },

    {
        term: "Rock Cycle",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The continuous set of geological processes through which rocks are formed, altered, broken down, transported, buried, melted, and transformed into different rock types.",
        example: "An igneous rock can weather into sediment, which may later become sedimentary rock.",
        related: ["Igneous Rock", "Sedimentary Rock", "Metamorphic Rock"]
    },

    {
        term: "Sedimentary Rock",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A rock formed from accumulated sediments or from chemical or biological materials that become compacted, cemented, or otherwise lithified.",
        example: "Sandstone can form when layers of sand are buried, compacted, and cemented over geological time.",
        related: ["Sediment", "Erosion", "Rock Cycle"]
    },

    {
        term: "Seismology",
        broadCategory: "Science",
        subject: "Earth Science/Geology/Physics",
        def: "The scientific study of earthquakes, seismic waves, and the structure and properties of Earth's interior inferred from those waves.",
        example: "Seismologists analyze seismic waves to determine the location and magnitude of earthquakes.",
        related: ["Earthquake", "Seismic Wave", "Fault"]
    },

    {
        term: "Solar System",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "The gravitationally bound system centered on the Sun that includes eight planets, dwarf planets, moons, asteroids, comets, and other smaller bodies.",
        example: "Earth is the third planet from the Sun in our Solar System.",
        related: ["Sun", "Planet", "Orbit"]
    },

    {
        term: "Supernova",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A powerful stellar explosion associated with certain stages of stellar evolution that can release enormous amounts of energy and synthesize or distribute heavy elements.",
        example: "A massive star can end its life in a supernova explosion after exhausting the fuel needed to support its core.",
        related: ["Star", "Neutron Star", "Element"]
    },

    {
        term: "Tectonic Plate",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "A large, rigid section of Earth's lithosphere that moves slowly over the underlying asthenosphere and interacts with other plates at its boundaries.",
        example: "The Pacific Plate is one of Earth's major tectonic plates.",
        related: ["Plate Tectonics", "Lithosphere", "Fault"]
    },

    {
        term: "Tsunami",
        broadCategory: "Science",
        subject: "Earth Science/Oceanography",
        def: "A series of long-wavelength ocean waves generated by the sudden displacement of a large volume of water, often caused by undersea earthquakes, landslides, or volcanic activity.",
        example: "A strong undersea earthquake can displace the seafloor and generate a tsunami that travels across an ocean.",
        related: ["Earthquake", "Oceanography", "Wave"]
    },

    {
        term: "Volcano",
        broadCategory: "Science",
        subject: "Earth Science/Geology/Physics",
        def: "A geological structure or opening through which magma, gases, ash, and other volcanic materials can reach Earth's surface.",
        example: "When magma reaches the surface during an eruption, it is called lava.",
        related: ["Magma", "Igneous Rock", "Plate Tectonics"]
    },

    {
        term: "Weathering",
        broadCategory: "Science",
        subject: "Earth Science/Geology",
        def: "The physical, chemical, or biological breakdown of rocks and minerals at or near Earth's surface without necessarily involving the transportation of the material.",
        example: "Water entering cracks in rocks and freezing can contribute to physical weathering.",
        related: ["Erosion", "Rock Cycle", "Mineral"]
    },

    {
        term: "White Dwarf",
        broadCategory: "Science",
        subject: "Astronomy/Physics",
        def: "A dense stellar remnant left after a low- or intermediate-mass star has exhausted its nuclear fuel and shed its outer layers.",
        example: "The future remnant of the Sun is expected to become a white dwarf after its later stages of stellar evolution.",
        related: ["Star", "Nebula", "Stellar Evolution"]
    },


    // =========================================================
    // ENGINEERING & TECHNOLOGY
    // =========================================================

    {
        term: "Algorithm",
        broadCategory: "Engineering",
        subject: "Computer Science",
        def: "Similar to mathematics, but in engineering, this is a systematic, step-by-step computational procedure used to solve engineering problems, analyze systems, process data, or control processes.",
        example: "A navigation system can use an algorithm to determine an efficient route between two locations.",
        related: ["Data Structure", "Recursion", "Computation"]
    },

    {
        term: "API",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "An Application Programming Interface is a defined set of rules and methods that allows different software systems to communicate and exchange data or services.",
        example: "A weather application can use an API to request current weather data from an online service.",
        related: ["Protocol", "SoftwareEngineering", "Database"]
    },

    {
        term: "Artificial Intelligence",
        broadCategory: "Engineering",
        subject: "Computer Science",
        def: "The field of computing and engineering concerned with creating systems capable of performing tasks that normally require abilities such as perception, reasoning, learning, language processing, or decision-making.",
        example: "An AI system can analyze images and classify objects based on patterns learned from data.",
        related: ["Machine Learning", "Neural Network", "Deep Learning"]
    },

    {
        term: "Bandwidth",
        broadCategory: "Engineering",
        subject: "Computer Science/Telecommunications Engineering",
        def: "The capacity of a communication channel to transfer data over a given period, commonly expressed in bits per second, although the exact technical meaning can depend on context.",
        example: "A network connection with higher available bandwidth can potentially transfer more data per second.",
        related: ["Latency", "Network", "Data Transfer"]
    },

    {
        term: "Binary Code",
        broadCategory: "Engineering",
        subject: "Computer Science/Electrical Engineering",
        def: "A system of representing information using two symbols, usually 0 and 1, which can be processed by digital electronic systems.",
        example: "Computer memory stores and processes information using patterns of binary values.",
        related: ["Boolean Logic", "Digital Circuit", "Bit"]
    },

    {
        term: "Blockchain",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "A distributed digital record system in which data are stored in linked blocks and maintained across a network using cryptographic techniques and consensus mechanisms.",
        example: "A blockchain can record transactions in a way that makes unauthorized alteration difficult when the network is properly designed.",
        related: ["Encryption", "Hash Function", "Database"]
    },

    {
        term: "Boolean Logic",
        broadCategory: "Engineering",
        subject: "Computer Science/Electrical Engineering",
        def: "A logical system that works with truth values such as true and false and uses operations such as AND, OR, and NOT to evaluate conditions and control digital systems.",
        example: "A computer program can use an AND condition to require two conditions to be true before executing an instruction.",
        related: ["Binary Code", "Logic Gate", "Algorithm"]
    },

    {
        term: "CAD",
        broadCategory: "Engineering",
        subject: "Computer Science",
        def: "Computer-Aided Design is the use of computer software to create, modify, analyze, document, and optimize two-dimensional or three-dimensional technical designs.",
        example: "An engineer can use CAD software to create a detailed 3D model of a machine component before manufacturing it.",
        related: ["3D Modeling", "Engineering Design", "Simulation"]
    },

    {
        term: "Circuit",
        broadCategory: "Engineering",
        subject: "Electrical Engineering/Physics",
        def: "A connected path that allows electric current to flow and typically contains a source, conductors, and one or more electrical components.",
        example: "A simple flashlight circuit contains a battery, wires, a switch, and a lamp.",
        related: ["Voltage", "Current", "Resistance"]
    },

    {
        term: "Compiler",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "A software program that translates source code written in one programming language into another form, such as machine code or an intermediate representation, that can be executed or further processed.",
        example: "A compiler can translate a C++ program into machine instructions that a computer processor can execute.",
        related: ["Programming Language", "Algorithm", "Software"]
    },

    {
        term: "Data Structure",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "A method of organizing and storing data so that a program can access, modify, search, and process the information efficiently.",
        example: "An array stores elements in an ordered structure that allows programs to access them using positions or indexes.",
        related: ["Algorithm", "Database", "Graph Theory"]
    },

    {
        term: "Database",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "An organized collection of structured or unstructured data that can be stored, searched, updated, and managed using computer systems.",
        example: "A school system can use a database to store student records, grades, and enrollment information.",
        related: ["SQL", "Data Structure", "API"]
    },

    {
        term: "Deep Learning",
        broadCategory: "Engineering",
        subject: "Computer Science/Artificial Intelligence",
        def: "A branch of machine learning that uses neural networks with multiple processing layers to learn complex patterns from large amounts of data.",
        example: "Deep learning models can be trained to recognize objects in photographs.",
        related: ["Machine Learning", "Neural Network", "Artificial Intelligence"]
    },

    {
        term: "Encryption",
        broadCategory: "Engineering",
        subject: "Computer Science/Cybersecurity",
        def: "The process of transforming readable information into an encoded form so that it can only be properly understood or accessed by someone with the appropriate method or key for decryption.",
        example: "Secure websites use encryption to protect information transmitted between a user's device and the server.",
        related: ["Cryptography", "Hash Function", "Cybersecurity"]
    },

    {
        term: "Feedback Loop",
        broadCategory: "Engineering",
        subject: "Control Systems/Biology",
        def: "A system process in which information about the output is returned as an input to influence future behavior, allowing a system to regulate or modify its operation.",
        example: "A thermostat uses feedback by measuring room temperature and controlling the heating system.",
        related: ["PID Controller", "Control System", "Homeostasis"]
    },

    {
        term: "Finite Element Analysis",
        broadCategory: "Engineering",
        subject: "Engineering/Physics",
        def: "A numerical computational method that divides a complex physical structure into smaller elements to approximate how it responds to forces, heat, vibration, or other conditions.",
        example: "Engineers can use finite element analysis to determine where stress is concentrated in a bridge component.",
        related: ["Stress Analysis", "CAD", "Simulation"]
    },

    {
        term: "Firewall",
        broadCategory: "Engineering",
        subject: "Computer Science/Cybersecurity",
        def: "A hardware or software security system that monitors and controls network traffic according to predefined rules to help prevent unauthorized access.",
        example: "A firewall can block incoming network connections that do not meet the system's security rules.",
        related: ["Network Security", "Encryption", "Protocol"]
    },

    {
        term: "Firmware",
        broadCategory: "Engineering",
        subject: "Computer Science/Electrical Engineering",
        def: "Software stored in or closely associated with hardware that provides low-level instructions controlling how a device operates and communicates with its components.",
        example: "A router uses firmware to control its hardware functions and network operations.",
        related: ["Operating System", "Hardware", "Software"]
    },

    {
        term: "GUI",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "A Graphical User Interface allows users to interact with software through visual elements such as windows, buttons, menus, icons, and input controls.",
        example: "A desktop application with clickable buttons and menus is an example of a graphical user interface.",
        related: ["User Interface", "Software", "HumanComputer Interaction"]
    },

    {
        term: "Hash Function",
        broadCategory: "Engineering",
        subject: "Computer Science/Cybersecurity",
        def: "A mathematical function that converts input data of arbitrary length into a fixed-size output called a hash value, commonly used for data integrity, indexing, and security applications.",
        example: "A password system can store a suitable cryptographic hash instead of storing the original password directly.",
        related: ["Encryption", "Blockchain", "Cryptography"]
    },

    {
        term: "Heat Exchanger",
        broadCategory: "Engineering",
        subject: "Mechanical Engineering/Thermodynamics",
        def: "An engineering device designed to transfer thermal energy between two or more fluids at different temperatures while keeping the fluids physically separated in many common designs.",
        example: "A car radiator transfers heat from engine coolant to surrounding air.",
        related: ["Thermodynamics", "Thermal Conductivity", "Heat Transfer"]
    },

    {
        term: "Hydraulics",
        broadCategory: "Engineering",
        subject: "Mechanical Engineering/Physics",
        def: "An engineering field that uses pressurized liquids to transmit force and control mechanical systems, taking advantage of the behavior of fluids under pressure.",
        example: "Hydraulic systems allow excavators to move heavy arms using pressurized fluid.",
        related: ["Pressure", "Fluid Dynamics", "Pneumatics"]
    },

    {
        term: "Internet Protocol",
        broadCategory: "Engineering",
        subject: "Computer Science/Network Engineering",
        def: "A fundamental protocol used to address and route data packets between devices and networks so that information can travel across interconnected computer networks.",
        example: "IP addresses allow networked devices to be identified and reached when data is transmitted across networks.",
        related: ["Protocol", "Network", "TCP"]
    },

    {
        term: "Kernel",
        broadCategory: "Engineering",
        subject: "Computer Science/Operating Systems",
        def: "The central component of an operating system that manages hardware resources, memory, processes, and communication between software and hardware.",
        example: "The operating system kernel manages how applications access the computer's processor and memory.",
        related: ["Operating System", "CPU", "Memory"]
    },

    {
        term: "Latency",
        broadCategory: "Engineering",
        subject: "Computer Science/Network Engineering/Physics",
        def: "The amount of time between an action or request and the corresponding response or effect in a system.",
        example: "A video game with high network latency may show a noticeable delay between a player's action and what happens on the server.",
        related: ["Bandwidth", "Network", "Response Time"]
    },

    {
        term: "Machine Learning",
        broadCategory: "Engineering",
        subject: "Computer Science/Artificial Intelligence",
        def: "A field of computing in which algorithms learn patterns from data and use those learned patterns to make predictions, classifications, or decisions without being explicitly programmed for every case.",
        example: "A machine-learning model can learn from previous emails to classify new messages as spam or not spam.",
        related: ["Artificial Intelligence", "Deep Learning", "Neural Network"]
    },

    {
        term: "Machine Learning Model",
        broadCategory: "Engineering",
        subject: "Computer Science/Artificial Intelligence",
        def: "A mathematical or computational representation learned from data that can be used to make predictions, classifications, generate outputs, or support decisions.",
        example: "A trained model can estimate whether a new image contains a particular object based on patterns learned from training data.",
        related: ["Machine Learning", "Algorithm", "Neural Network"]
    },

    {
        term: "Neural Network",
        broadCategory: "Engineering",
        subject: "Computer Science/Artificial Intelligence",
        def: "A computational model made of interconnected processing units arranged in layers that learns relationships between inputs and outputs by adjusting numerical parameters during training.",
        example: "A neural network can be trained to recognize handwritten digits from labeled images.",
        related: ["Deep Learning", "Machine Learning", "Artificial Intelligence"]
    },

    {
        term: "Operating System",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "System software that manages computer hardware and software resources while providing services and interfaces that allow applications to run.",
        example: "Windows, Linux, and macOS are operating systems that manage computer resources and provide environments for applications.",
        related: ["Kernel", "Firmware", "Software"]
    },

    {
        term: "Overclocking",
        broadCategory: "Engineering",
        subject: "Computer Engineering/Computer Science",
        def: "The practice of configuring a computer component to operate at a clock frequency higher than its standard specification, which can increase performance while also increasing heat and power requirements.",
        example: "A processor may be overclocked to increase its operating frequency, provided the system can safely handle the additional thermal and electrical demands.",
        related: ["CPU", "Clock Speed", "Cooling"]
    },

    {
        term: "PID Controller",
        broadCategory: "Engineering",
        subject: "Control Engineering/Physics",
        def: "A proportional-integral-derivative controller is a feedback control method that adjusts a system's input based on present error, accumulated error, and the rate at which the error changes.",
        example: "A PID controller can regulate the temperature of an industrial heating system by adjusting the heater's power.",
        related: ["Feedback Loop", "Control System", "Automation"]
    },

    {
        term: "Protocol",
        broadCategory: "Engineering",
        subject: "Computer Science/Network Engineering",
        def: "A defined set of rules and conventions that specifies how information is formatted, transmitted, received, and interpreted between systems or devices.",
        example: "Network devices use communication protocols to determine how data packets should be transmitted and interpreted.",
        related: ["Internet Protocol", "API", "Network"]
    },

    {
        term: "Recursion",
        broadCategory: "Engineering",
        subject: "Computer Science",
        def: "A problem-solving or programming technique in which a function or process refers to itself to solve smaller instances of the same problem until a defined stopping condition is reached.",
        example: "A recursive algorithm can calculate a factorial by repeatedly reducing the input until it reaches a base case.",
        related: ["Algorithm", "Function", "Iteration"]
    },

    {
        term: "Resistor",
        broadCategory: "Engineering",
        subject: "Electrical Engineering/Physics",
        def: "A passive electrical component designed to provide a specified amount of resistance in a circuit, controlling current and producing a voltage drop.",
        example: "A resistor can be placed in series with an LED to limit the current flowing through it.",
        related: ["Resistance", "Ohm's Law", "Circuit"]
    },

    {
        term: "Semiconductor",
        broadCategory: "Engineering",
        subject: "Electrical Engineering/Physics/Chemistry",
        def: "A material whose electrical conductivity lies between that of a good conductor and an insulator and can be controlled by factors such as impurities, temperature, and electric fields.",
        example: "Silicon is a semiconductor widely used to manufacture transistors and integrated circuits.",
        related: ["Transistor", "Doping", "Electronics"]
    },

    {
        term: "Signal Processing",
        broadCategory: "Engineering",
        subject: "Electrical Engineering/Computer Science/",
        def: "The analysis, modification, filtering, or interpretation of signals such as audio, images, sensor measurements, and communication signals using mathematical and computational techniques.",
        example: "Noise reduction in a recorded audio signal is an application of signal processing.",
        related: ["Fourier Transform", "Frequency", "Data Processing"]
    },

    {
        term: "SoftwareEngineering",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "The systematic application of engineering principles, methods, and practices to the design, development, testing, deployment, maintenance, and improvement of software systems.",
        example: "A software engineering team may use version control, testing, documentation, and code review when developing an application.",
        related: ["Programming", "Software Development", "Algorithm"]
    },

    {
        term: "SQL",
        broadCategory: "Engineering",
        subject: "Computer Science/Database Engineering",
        def: "Structured Query Language is a specialized language used to create, retrieve, modify, organize, and manage data in relational database systems.",
        example: "A SQL query can retrieve all student records whose grades are above a specified value.",
        related: ["Database", "Query", "Data Structure"]
    },

    {
        term: "Stress Analysis",
        broadCategory: "Engineering",
        subject: "Mechanical Engineering/Civil Engineering/Physics",
        def: "The process of determining how internal stresses and strains are distributed within a material or structure when it is subjected to forces, loads, temperature changes, or other conditions.",
        example: "Engineers can perform stress analysis on a bridge component to determine whether it can safely support expected loads.",
        related: ["Stress", "Strain", "Finite Element Analysis"]
    },

    {
        term: "Thermodynamics",
        broadCategory: "Engineering",
        subject: "Physics/Chemistry",
        def: "The study and application of relationships among heat, work, temperature, energy, and the properties of physical systems, especially for analyzing energy conversion and efficiency.",
        example: "Mechanical engineers use thermodynamics to design and evaluate engines, refrigerators, and power plants.",
        related: ["Entropy", "Heat Exchanger", "Energy"]
    },

    {
        term: "Transistor",
        broadCategory: "Engineering",
        subject: "Electrical Engineering/Physics",
        def: "A semiconductor device that can control, amplify, or switch electrical signals and forms one of the fundamental building blocks of modern electronic circuits.",
        example: "Millions or billions of transistors can be integrated into a modern computer processor.",
        related: ["Semiconductor", "Circuit", "Switch"]
    },

    {
        term: "Turbine",
        broadCategory: "Engineering",
        subject: "Mechanical Engineering/Physics",
        def: "A rotating mechanical device that extracts energy from a moving fluid such as steam, water, air, or combustion gases and converts it into mechanical rotational energy.",
        example: "A wind turbine converts the kinetic energy of moving air into rotational mechanical energy and then electrical energy.",
        related: ["Energy", "Fluid Dynamics", "Generator"]
    },

    {
        term: "User Interface",
        broadCategory: "Engineering",
        subject: "Computer Science/Software Engineering",
        def: "The part of a computer system, application, or device through which a user interacts with its functions, including visual, physical, or other interactive elements.",
        example: "Buttons, menus, text fields, and navigation panels are common components of a software user interface.",
        related: ["GUI", "HumanComputer Interaction", "Software"]
    },

    {
        term: "Virtual Memory",
        broadCategory: "Engineering",
        subject: "Computer Science/Computer Engineering",
        def: "A memory-management technique that allows an operating system to use storage space as an extension of physical memory, providing programs with a larger logical memory space.",
        example: "When available RAM becomes limited, an operating system may temporarily move less-used memory data to storage.",
        related: ["Operating System", "RAM", "Memory Management"]
    }
];

    const dictGrid = document.getElementById("dict-grid");
    const searchInput = document.getElementById("dict-search");
    const searchFocusButton = document.getElementById("dict-search-focus");
    const categoryBtns = document.querySelectorAll(".filter-btn");
    const alphabetContainer = document.getElementById("alphabet-filters");

    let currentCategory = "All";
    let currentLetter = "All";
    let searchQuery = "";

    // 2. Generate A-Z Buttons dynamically
    const generateAlphabet = () => {
        const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
        letters.forEach(letter => {
            const btn = document.createElement("button");
            btn.classList.add("alpha-btn");
            if (letter === "All") btn.classList.add("active");
            btn.textContent = letter === "All" ? "#" : letter;
            btn.dataset.letter = letter;
            
            btn.addEventListener("click", () => {
                document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentLetter = letter;
                filterDictionary();
            });
            alphabetContainer.appendChild(btn);
        });
    };

    // 3. Render Card Function[cite: 2]
    const renderCard = (data) => {
        const regex = new RegExp(`(${searchQuery})`, "gi");
        const highlightedTerm = searchQuery ? data.term.replace(regex, `<span style="color: var(--accent-primary)">$1</span>`) : data.term;

        const relatedHTML = data.related ? data.related.map(r => `<span class="related-tag">${r}</span>`).join('') : '';

        return `
            <div class="result-card">
                <span class="result-category">${data.broadCategory} • ${data.subject}</span>
                <h3 class="result-title">${highlightedTerm}</h3>
                <p class="result-definition">${data.def}</p>
                <div class="dict-card-details">
                    ${data.example ? `<p class="dict-example"><strong>Example:</strong> ${data.example}</p>` : ''}
                    ${data.related ? `<div class="dict-related"><strong>Related:</strong> ${relatedHTML}</div>` : ''}
                </div>
            </div>
        `;
    };

    // 4. Master Filter Logic
    const filterDictionary = () => {
        let results = dictionaryDatabase;

        if (searchQuery) {
            results = results.filter(item => 
                item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.def.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (currentCategory !== "All") {
            results = results.filter(item => item.broadCategory === currentCategory);
        }

        if (currentLetter !== "All") {
            results = results.filter(item => item.term.toUpperCase().startsWith(currentLetter));
        }

        results.sort((a, b) => a.term.localeCompare(b.term));

        if (results.length > 0) {
            dictGrid.innerHTML = results.map(renderCard).join('');
        } else {
            dictGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No terms found</h3>
                    <p>We couldn't find any matches for your current filters.</p>
                </div>
            `;
        }
    };

    // 5. Event Listeners
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        filterDictionary();
    });

    searchFocusButton.addEventListener("click", () => searchInput.focus());

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            filterDictionary();
        });
    });

    // 6. Keep Background Parallax[cite: 2]
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20; 
            const moveX = (x * speed) - (speed / 2);
            const moveY = (y * speed) - (speed / 2);
            blob.style.marginLeft = `${moveX}px`;
            blob.style.marginTop = `${moveY}px`;
        });
    });

    // Initialize
    generateAlphabet();
    filterDictionary();
});

const chatLink = document.getElementById('ai-chat-link');
const modal = document.getElementById('notice-modal');
const closeBtn = document.getElementById('close-modal-btn');
const modalText = document.querySelector('.modal-text'); // Grab the text paragraph inside modal

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
