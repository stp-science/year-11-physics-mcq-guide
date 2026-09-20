window.examData = {
  mechanics: {
    title: "Mechanics",
    subtitle: "Use this alongside the Mechanics mock paper. Each explanation focuses on the physics idea the question is testing, not just the final letter.",
    questions: [
      {
        n: 1,
        stem: "A truck travels along the path P → Q → R → S in 30 minutes. What is its average speed?",
        diagram: true,
        options: [["A","2.0 km h⁻¹"],["B","11 km h⁻¹"],["C","24 km h⁻¹"],["D","32 km h⁻¹"]],
        correct: "D",
        why: "Average speed uses the <strong>total distance travelled</strong>. The route is 8.0 km + 3.0 km + 5.0 km = 16 km. Thirty minutes is 0.5 h, so the average speed is 16 ÷ 0.5 = <strong>32 km h⁻¹</strong>.",
        working: "<span class='formula'>average speed = total distance ÷ total time = 16 km ÷ 0.5 h = 32 km h⁻¹</span>",
        wrong: {
          A: "This does not use the total 16 km journey over 0.5 h.",
          B: "This is not obtained from the total path length divided by the journey time.",
          C: "This is too small because dividing 16 km by half an hour must give a value greater than 16 km h⁻¹."
        },
        takeaway: "For average <em>speed</em>, add the whole path length. Do not use displacement."
      },
      {
        n: 2,
        stem: "A speed–time graph is a straight line rising from zero. Which distance–time graph represents the same journey?",
        diagram: true,
        options: [["A","Curve getting progressively steeper"],["B","Curve getting progressively less steep"],["C","Straight line with constant slope"],["D","Horizontal line"]],
        correct: "A",
        why: "The object is speeding up at a constant rate. On a distance–time graph, the gradient represents speed, so the gradient must get steadily larger. That means the curve becomes <strong>steeper and steeper</strong>.",
        working: "Speed is the gradient of a distance–time graph. Increasing speed → increasing gradient.",
        wrong: {
          B: "A curve that becomes less steep represents an object slowing down.",
          C: "A straight line has a constant gradient, so it represents constant speed.",
          D: "A horizontal distance–time line means the distance is not changing, so the object is stationary."
        },
        takeaway: "On a distance–time graph, steeper = faster. If speed increases, the line must get steeper."
      },
      {
        n: 3,
        stem: "An object speeds up uniformly from 5 m s⁻¹ to 12 m s⁻¹ in 10 s. What is its acceleration?",
        options: [["A","0.5 m s⁻²"],["B","0.7 m s⁻²"],["C","1.2 m s⁻²"],["D","1.7 m s⁻²"]],
        correct: "B",
        why: "Acceleration is the <strong>change in velocity per second</strong>. The velocity changes by 12 − 5 = 7 m s⁻¹ over 10 s, giving 0.7 m s⁻².",
        working: "<span class='formula'>a = Δv ÷ Δt = (12 − 5) ÷ 10 = 0.7 m s⁻²</span>",
        wrong: {
          A: "This uses 5 ÷ 10 and ignores the final speed. Acceleration depends on the change in velocity.",
          C: "This uses 12 ÷ 10 and ignores the starting speed.",
          D: "The velocity only changes by 7 m s⁻¹, not 17 m s⁻¹."
        },
        takeaway: "Use <span class='formula'>final velocity − initial velocity</span> before dividing by time."
      },
      {
        n: 4,
        stem: "Which force diagram has the largest resultant force?",
        diagram: true,
        options: [["A","30 N right; 10 N + 10 N left"],["B","10 N + 10 N right; 10 N left"],["C","30 N left; 5 N + 5 N right"],["D","5 N + 5 N + 5 N left"]],
        correct: "C",
        why: "Forces in opposite directions subtract. Option C has 30 N left and 10 N right, giving a resultant of <strong>20 N left</strong>, which is the largest magnitude.",
        working: "A = 10 N right; B = 10 N right; C = 20 N left; D = 15 N left.",
        wrong: {
          A: "30 − 20 = 10 N, so its resultant is smaller than C.",
          B: "20 − 10 = 10 N, so its resultant is smaller than C.",
          D: "The three 5 N forces give 15 N in total, still less than the 20 N resultant in C."
        },
        takeaway: "Compare the <em>resultants</em>, not the biggest single arrow."
      },
      {
        n: 5,
        stem: "A skier has a mass of 80 kg and accelerates at 2 m s⁻². Take g = 10 N kg⁻¹. What are the skier’s weight and resultant force?",
        options: [["A","8 N and 168 N"],["B","80 N and 240 N"],["C","800 N and 160 N"],["D","800 N and 640 N"]],
        correct: "C",
        why: "Weight and resultant force come from two different equations. Weight = mg = 80 × 10 = <strong>800 N</strong>. Resultant force = ma = 80 × 2 = <strong>160 N</strong>.",
        working: "<span class='formula'>W = mg = 80 × 10 = 800 N</span><br><span class='formula'>F = ma = 80 × 2 = 160 N</span>",
        wrong: {
          A: "8 N is far too small for the weight of an 80 kg person and does not use W = mg correctly.",
          B: "80 is the mass in kilograms, not the weight in newtons, and 240 N is not ma.",
          D: "The weight is correct, but 640 N is not 80 × 2."
        },
        takeaway: "Mass is in kg. Weight is a force in N. Keep W = mg and F = ma separate."
      },
      {
        n: 6,
        stem: "A firework rocket has three force arrows labelled P, Q, R and S. Which row correctly identifies thrust, air resistance and weight?",
        diagram: true,
        options: [["A","thrust P; air resistance R; weight S"],["B","thrust P; air resistance S; weight R"],["C","thrust Q; air resistance R; weight S"],["D","thrust Q; air resistance S; weight R"]],
        correct: "D",
        why: "Thrust acts <strong>forwards along the rocket</strong>, so it is Q. Air resistance acts opposite the rocket’s motion, so it is S. Weight always acts <strong>vertically downward</strong>, so it is R.",
        working: "Thrust → Q; air resistance → S; weight → R.",
        wrong: {
          A: "P is vertical, so it cannot be the thrust along the rocket. R is the downward weight arrow.",
          B: "Air resistance and weight are identified correctly, but the thrust is Q rather than P.",
          C: "Q is the thrust, but R and S have been swapped: R is weight and S is air resistance."
        },
        takeaway: "Weight is always vertically down. Drag opposes motion. Thrust points in the direction the engine pushes the vehicle."
      },
      {
        n: 7,
        stem: "A 0.30 kg ball has a weight of 3.0 N downward and an upward force of 0.30 N. What is its initial acceleration when released?",
        diagram: true,
        options: [["A","1.0 m s⁻²"],["B","9.0 m s⁻²"],["C","10 m s⁻²"],["D","11 m s⁻²"]],
        correct: "B",
        why: "The forces oppose each other, so the resultant is 3.0 − 0.30 = <strong>2.70 N downward</strong>. Then use F = ma: a = 2.70 ÷ 0.30 = <strong>9.0 m s⁻²</strong>.",
        working: "<span class='formula'>Fᵣ = 3.0 − 0.30 = 2.70 N</span><br><span class='formula'>a = F ÷ m = 2.70 ÷ 0.30 = 9.0 m s⁻²</span>",
        wrong: {
          A: "This comes from 0.30 N ÷ 0.30 kg and uses only the upward force, not the resultant.",
          C: "This would be the acceleration if you ignored the upward force and used only the 3.0 N weight.",
          D: "This effectively adds opposing forces instead of subtracting them."
        },
        takeaway: "Find the resultant force first, then use F = ma."
      },
      {
        n: 8,
        stem: "A ball falls from a balcony, hits the ground and bounces. Which sequence correctly describes the energy changes after release?",
        diagram: true,
        options: [["A","GPE → elastic PE → KE → chemical PE"],["B","GPE → elastic PE → KE → GPE"],["C","GPE → KE → elastic PE → KE"],["D","GPE → KE → GPE → KE"]],
        correct: "C",
        why: "As the ball falls, gravitational potential energy becomes kinetic energy. During the collision the ball deforms, so energy is stored briefly as <strong>elastic potential energy</strong>. As it springs back, that becomes kinetic energy again.",
        working: "Falling: GPE → KE. Impact: KE → elastic PE. Rebound: elastic PE → KE.",
        wrong: {
          A: "Elastic potential energy does not come before kinetic energy during the fall, and chemical energy is not the relevant store.",
          B: "Again, the ball gains kinetic energy before it is compressed on impact.",
          D: "The sequence misses the elastic potential energy stored while the ball is squashed during the collision."
        },
        takeaway: "A bouncing object temporarily stores energy elastically while it deforms."
      },
      {
        n: 9,
        stem: "A 30 kg child is moving at 4.0 m s⁻¹. What is her kinetic energy?",
        options: [["A","60 J"],["B","120 J"],["C","240 J"],["D","480 J"]],
        correct: "C",
        why: "Kinetic energy depends on the <strong>square of the speed</strong>. Using Ek = ½mv² gives ½ × 30 × 4² = 240 J.",
        working: "<span class='formula'>Eₖ = ½mv² = ½ × 30 × 4.0² = 240 J</span>",
        wrong: {
          A: "This is ½mv and misses the squared speed.",
          B: "This does not apply the ½mv² equation correctly.",
          D: "This is double the correct value, as if the ½ had been omitted."
        },
        takeaway: "In kinetic energy, square the speed before multiplying."
      },
      {
        n: 10,
        stem: "A 50 N box is lifted from a shelf 0.6 m above the floor to a shelf 1.8 m above the floor. How much work is done on the box?",
        diagram: true,
        options: [["A","30 J"],["B","60 J"],["C","90 J"],["D","120 J"]],
        correct: "B",
        why: "The box is lifted by <strong>1.2 m</strong>, not 1.8 m. Work done = force × distance moved in the direction of the force = 50 × 1.2 = <strong>60 J</strong>.",
        working: "<span class='formula'>Δh = 1.8 − 0.6 = 1.2 m</span><br><span class='formula'>W = Fd = 50 × 1.2 = 60 J</span>",
        wrong: {
          A: "This uses only the initial shelf height, 0.6 m.",
          C: "This uses 1.8 m from the floor rather than the 1.2 m distance the box is actually lifted.",
          D: "This does not match 50 N multiplied by the 1.2 m change in height."
        },
        takeaway: "For work done in lifting, use the distance the object actually moves."
      }
    ]
  },

  waves: {
    title: "Waves",
    subtitle: "Use this alongside the Waves mock paper. Pay particular attention to definitions, what angles are measured from, and what the diagrams are actually showing.",
    questions: [
      {
        n: 1,
        stem: "The ripple-tank diagram shows wavefronts meeting a barrier and changing direction. What does the pattern show?",
        diagram: true,
        options: [["A","waves being reflected"],["B","waves being refracted"],["C","waves changing frequency"],["D","waves changing speed"]],
        correct: "A",
        why: "The waves hit a barrier and <strong>bounce back</strong>. That is reflection. The reflected wavefronts leave the barrier at the corresponding reflected angle.",
        working: "Reflection happens when a wave meets a boundary and returns into the same medium.",
        wrong: {
          B: "Refraction happens when a wave enters a different medium and changes speed, usually changing direction as well.",
          C: "The source has not changed, so there is no reason for the frequency to change.",
          D: "The waves remain in the same medium, so this pattern is not showing a change in wave speed."
        },
        takeaway: "Barrier and bounce back = reflection. Boundary into a new medium = refraction."
      },
      {
        n: 2,
        stem: "What is the period of a wave?",
        options: [["A","The number of wave crests passing a fixed point per second."],["B","The number of peaks plus troughs passing a fixed point per second."],["C","The time taken for displacement to change from maximum to minimum."],["D","The time taken for one wavelength to pass a fixed point."]],
        correct: "D",
        why: "The period is the <strong>time for one complete wave cycle</strong>. At a fixed point, one complete wavelength passing corresponds to one full cycle.",
        working: "<span class='formula'>T = 1 ÷ f</span>. Period is measured in seconds.",
        wrong: {
          A: "This describes frequency: the number of complete waves passing a point each second.",
          B: "Counting peaks and troughs separately double-counts the wave and is not the definition of frequency or period.",
          C: "Maximum to minimum is only half of a complete cycle, so this is half a period."
        },
        takeaway: "Frequency = cycles per second. Period = seconds per cycle."
      },
      {
        n: 3,
        stem: "A wave has a frequency of 2 Hz. How many waves are produced in one minute?",
        options: [["A","2 × 60"],["B","60 ÷ 2"],["C","2"],["D","2 ÷ 60"]],
        correct: "A",
        why: "2 Hz means <strong>2 waves every second</strong>. One minute has 60 s, so the number of waves is 2 × 60 = <strong>120</strong>.",
        working: "<span class='formula'>number of waves = frequency × time = 2 s⁻¹ × 60 s = 120</span>",
        wrong: {
          B: "Dividing 60 by 2 treats 2 Hz like a time per wave rather than waves per second.",
          C: "Two waves are produced in one second, not in one minute.",
          D: "Dividing by 60 makes the value smaller even though you are counting waves over a longer time."
        },
        takeaway: "Hz means 'per second'. Multiply by the number of seconds when you want a total number of waves."
      },
      {
        n: 4,
        stem: "A light ray makes an angle of 30° with the mirror surface. What is the angle of reflection?",
        diagram: true,
        options: [["A","30°"],["B","60°"],["C","90°"],["D","120°"]],
        correct: "B",
        why: "Angles of incidence and reflection are measured from the <strong>normal</strong>, not from the mirror. The normal is 90° to the mirror, so the angle to the normal is 90° − 30° = <strong>60°</strong>. The angle of reflection equals the angle of incidence.",
        working: "<span class='formula'>i = 90° − 30° = 60°</span>, therefore <span class='formula'>r = 60°</span>.",
        wrong: {
          A: "30° is the angle between the ray and the mirror surface, not the normal.",
          C: "90° would mean the reflected ray travelled along the mirror surface.",
          D: "Angles of incidence and reflection are the smaller angles measured from the normal and are not greater than 90°."
        },
        takeaway: "Always check whether the marked angle is to the surface or to the normal."
      },
      {
        n: 5,
        stem: "On the wave graph, P is the vertical distance from the centre line to a crest and Q is the horizontal distance between matching points on successive cycles. What are P and Q?",
        diagram: true,
        options: [["A","amplitude; period"],["B","amplitude; wavelength"],["C","half the amplitude; period"],["D","half the amplitude; wavelength"]],
        correct: "B",
        why: "P measures the maximum displacement from the equilibrium line, so it is the <strong>amplitude</strong>. Q is a horizontal distance for one complete repeating pattern, so it is the <strong>wavelength</strong>.",
        working: "Amplitude is measured vertically from equilibrium. Wavelength is measured along the direction the wave travels between equivalent points.",
        wrong: {
          A: "Q cannot be the period because the horizontal axis is distance, not time.",
          C: "P already runs from the equilibrium line to a crest, which is the full amplitude, not half.",
          D: "Q is a wavelength, but P is the full amplitude rather than half the amplitude."
        },
        takeaway: "Check the axis: distance gives wavelength; time gives period."
      },
      {
        n: 6,
        stem: "An echo is heard 4.0 s after a ship sounds its siren. The speed of sound is 320 m s⁻¹. How far is the ship from the cliff?",
        options: [["A","80 m"],["B","160 m"],["C","640 m"],["D","1280 m"]],
        correct: "C",
        why: "The 4.0 s is for the sound to travel <strong>to the cliff and back</strong>. The total sound path is 320 × 4.0 = 1280 m, so the one-way distance to the cliff is half of this: <strong>640 m</strong>.",
        working: "<span class='formula'>total distance = vt = 320 × 4.0 = 1280 m</span><br><span class='formula'>distance to cliff = 1280 ÷ 2 = 640 m</span>",
        wrong: {
          A: "This is much too small and does not follow distance = speed × time.",
          B: "This is also too small for sound travelling at 320 m s⁻¹ for 4.0 s.",
          D: "1280 m is the complete out-and-back distance travelled by the sound, not the distance from the ship to the cliff."
        },
        takeaway: "Echo time is a round trip. Calculate vt, then divide by 2."
      },
      {
        n: 7,
        stem: "Ripple-tank waves have frequency 4.0 Hz. The marked 20 cm distance spans five wavelengths. What is the wave speed?",
        diagram: true,
        options: [["A","4 cm s⁻¹"],["B","5 cm s⁻¹"],["C","16 cm s⁻¹"],["D","20 cm s⁻¹"]],
        correct: "C",
        why: "Five wavelengths fit into 20 cm, so one wavelength is 20 ÷ 5 = <strong>4 cm</strong>. Then v = fλ = 4.0 × 4 = <strong>16 cm s⁻¹</strong>.",
        working: "<span class='formula'>λ = 20 cm ÷ 5 = 4 cm</span><br><span class='formula'>v = fλ = 4.0 × 4 = 16 cm s⁻¹</span>",
        wrong: {
          A: "4 cm is the wavelength. It is not the wave speed.",
          B: "This comes from using the wrong number of wavelength gaps in the 20 cm distance.",
          D: "20 cm is the total marked distance, not the distance travelled by one wave each second."
        },
        takeaway: "Count the <em>gaps between crests</em> to find how many wavelengths are shown."
      },
      {
        n: 8,
        stem: "Which periscope diagram shows the correctly drawn light ray from the object to the observer’s eye?",
        diagram: true,
        options: [["A","diagram A"],["B","diagram B"],["C","diagram C"],["D","diagram D"]],
        correct: "C",
        why: "In C, the light travels <strong>from the object into the top 45° mirror</strong>, is reflected down the tube, then reflects from the lower mirror into the eye. The arrow directions also follow the actual direction of light travel.",
        working: "At each mirror, angle of incidence = angle of reflection. Two 45° mirrors turn the ray through the periscope.",
        wrong: {
          A: "The incoming path from the object is not the correct horizontal route into the top mirror.",
          B: "The ray direction through the tube is inconsistent with light travelling from the object toward the eye.",
          D: "The arrows show the ray travelling in the wrong direction through the periscope rather than from the object to the eye."
        },
        takeaway: "Follow the arrows from source to eye and apply equal angles at both mirrors."
      },
      {
        n: 9,
        stem: "Water waves curve around the ends of harbour walls and reach a boat in the harbour. What is this effect?",
        diagram: true,
        options: [["A","refraction"],["B","dispersion"],["C","reflection"],["D","diffraction"]],
        correct: "D",
        why: "Diffraction is the <strong>spreading of waves around obstacles or through gaps</strong>. The waves spread into the sheltered harbour after passing the ends of the walls.",
        working: "The clearest clue is 'curve around the harbour walls'.",
        wrong: {
          A: "Refraction is a change in direction caused by a change in wave speed when entering a different medium or depth.",
          B: "Dispersion is the separation of different wavelengths, such as white light separating into colours.",
          C: "Reflection would mean the waves bounce back from the wall rather than spreading around it."
        },
        takeaway: "Around an obstacle or through a gap = diffraction."
      },
      {
        n: 10,
        stem: "Which diagram correctly shows white light passing through a glass prism and emerging as a spectrum?",
        diagram: true,
        options: [["A","diagram A"],["B","diagram B"],["C","diagram C"],["D","diagram D"]],
        correct: "C",
        why: "In C, the light refracts at the prism surfaces and the colours spread out with <strong>violet deviated more than red</strong>. The overall deviation is toward the base of the prism.",
        working: "White light is dispersed because different wavelengths have different refractive indices in glass. Violet bends more than red.",
        wrong: {
          A: "The ray path at the prism boundary does not show the correct refraction through the prism even though the colour order looks plausible.",
          B: "The colour order is reversed: violet should be deviated more than red.",
          D: "The colour order is reversed, with red shown more deviated than violet."
        },
        takeaway: "In a prism, violet bends most and red bends least."
      }
    ]
  },

  particle: {
    title: "Particle Physics",
    subtitle: "Use this alongside the Particle Physics mock paper. This paper also includes thermal physics, so the guidance covers both thermal energy and radioactivity.",
    questions: [
      {
        n: 1,
        stem: "Which substance in the melting-point / boiling-point table is a liquid at 20°C?",
        diagram: true,
        options: [["A","melting −218°C; boiling −183°C"],["B","melting −39°C; boiling 357°C"],["C","melting 44°C; boiling 280°C"],["D","melting 119°C; boiling 444°C"]],
        correct: "B",
        why: "A substance is liquid when the temperature is <strong>above its melting point but below its boiling point</strong>. For B, −39°C < 20°C < 357°C, so it is liquid.",
        working: "Liquid condition: <span class='formula'>melting point &lt; temperature &lt; boiling point</span>.",
        wrong: {
          A: "20°C is above its boiling point of −183°C, so A would be a gas.",
          C: "20°C is below its melting point of 44°C, so C would still be solid.",
          D: "20°C is below its melting point of 119°C, so D would still be solid."
        },
        takeaway: "Between melting point and boiling point = liquid."
      },
      {
        n: 2,
        stem: "Which state changes take energy in, and which give energy out?",
        diagram: true,
        options: [["A","in: melting + boiling; out: condensing + freezing"],["B","in: melting + condensing; out: boiling + freezing"],["C","in: boiling + freezing; out: melting + condensing"],["D","in: condensing + freezing; out: melting + boiling"]],
        correct: "A",
        why: "Melting and boiling need energy to separate particles or allow them to move more freely, so energy is taken in. Condensing and freezing move particles into lower-energy arrangements, so energy is given out.",
        working: "Energy in: solid → liquid → gas. Energy out: gas → liquid → solid.",
        wrong: {
          B: "Condensing gives energy out, while boiling takes energy in.",
          C: "Freezing gives energy out and melting takes energy in, so these have been swapped.",
          D: "This reverses the correct energy-transfer directions."
        },
        takeaway: "Moving toward gas requires energy in; moving toward solid releases energy."
      },
      {
        n: 3,
        stem: "Why are the tubes in a solar water-heating panel painted black?",
        options: [["A","Black surfaces absorb radiation well."],["B","Black surfaces conduct heat well."],["C","Black surfaces emit radiation well."],["D","Black surfaces reflect radiation well."]],
        correct: "A",
        why: "The purpose is to take in as much energy from the Sun as possible. Black surfaces are <strong>good absorbers of thermal radiation</strong>.",
        working: "The question is about incoming radiation from the Sun, so focus on absorption.",
        wrong: {
          B: "Conduction is heat transfer through a material. Painting the surface black does not make the tube material a better conductor.",
          C: "Black surfaces are also good emitters, but emission is not the reason for painting a solar collector black.",
          D: "Black surfaces are poor reflectors; a good reflector would send more of the incoming radiation away."
        },
        takeaway: "Read the context: receiving radiation → absorption is the key property."
      },
      {
        n: 4,
        stem: "Water is heated at the centre of the base of a beaker. Why does a convection current form?",
        diagram: true,
        options: [["A","Evaporation causes water molecules to rise."],["B","Water molecules expand and rise."],["C","Water above the heat source rises because it becomes less dense."],["D","Water at the sides sinks because it becomes less dense."]],
        correct: "C",
        why: "The heated water expands slightly, so the same mass occupies more volume and its <strong>density decreases</strong>. The less-dense warm water rises while cooler, denser water sinks to replace it.",
        working: "Heating → expansion → lower density → warm water rises → convection current.",
        wrong: {
          A: "Convection in the liquid is not caused by evaporation at the surface.",
          B: "The individual water molecules do not themselves expand; the average spacing between particles increases.",
          D: "Less-dense fluid rises. The water sinking at the sides is cooler and more dense."
        },
        takeaway: "Convection is driven by density differences in fluids."
      },
      {
        n: 5,
        stem: "12 000 J of energy is supplied to 2.0 kg of copper with specific heat capacity 400 J kg⁻¹ °C⁻¹. What is the temperature rise?",
        options: [["A","15°C"],["B","30°C"],["C","60°C"],["D","100°C"]],
        correct: "A",
        why: "Use Q = mcΔT and rearrange for ΔT. The rise is 12 000 ÷ (2.0 × 400) = <strong>15°C</strong>.",
        working: "<span class='formula'>ΔT = Q ÷ mc = 12000 ÷ (2.0 × 400) = 15°C</span>",
        wrong: {
          B: "This is twice the correct rise and does not divide by the full value of mc.",
          C: "This does not correctly account for both the 2.0 kg mass and the specific heat capacity.",
          D: "This is much too large for 12 000 J shared across 2.0 kg of copper with c = 400 J kg⁻¹ °C⁻¹."
        },
        takeaway: "When Q, m and c are known, use ΔT = Q ÷ (mc)."
      },
      {
        n: 6,
        stem: "Water at the top of a test tube is boiling while ice is held at the bottom. Why does the ice take a long time to melt?",
        diagram: true,
        options: [["A","Convection never occurs in water."],["B","Ice is a poor conductor of heat."],["C","The gauze prevents energy reaching the ice."],["D","Water is a poor conductor of heat."]],
        correct: "D",
        why: "The water is heated at the top, so the hot, less-dense water already sits above the cooler water and does not set up convection carrying energy downward. Energy must travel down mainly by <strong>conduction through water, which is poor</strong>, so the ice melts slowly.",
        working: "Heating from above suppresses convection. The remaining downward transfer through the water is slow conduction.",
        wrong: {
          A: "Convection can occur in water; it is just not effective here because the water is heated from the top.",
          B: "The key barrier to energy transfer is the layer of water between the flame-heated region and the ice.",
          C: "The gauze holds the ice down; it does not stop all energy reaching the ice."
        },
        takeaway: "Ask where the energy must travel. Here it has to conduct down through water."
      },
      {
        n: 7,
        stem: "Unstable nuclei emit electrons, helium nuclei and electromagnetic radiation. Which names match these three types of radiation?",
        diagram: true,
        options: [["A","electron = alpha; helium nucleus = beta; EM = gamma"],["B","electron = alpha; helium nucleus = gamma; EM = beta"],["C","electron = beta; helium nucleus = alpha; EM = gamma"],["D","electron = beta; helium nucleus = gamma; EM = alpha"]],
        correct: "C",
        why: "A beta-minus particle is an <strong>electron</strong>. An alpha particle is a <strong>helium nucleus</strong> containing two protons and two neutrons. Gamma radiation is <strong>electromagnetic radiation</strong>.",
        working: "β⁻ = electron; α = helium nucleus; γ = electromagnetic wave.",
        wrong: {
          A: "Alpha and beta have been swapped: an alpha particle is not an electron.",
          B: "None of the three particle/radiation descriptions are matched correctly.",
          D: "The electron is correctly beta, but a helium nucleus is alpha and electromagnetic radiation is gamma."
        },
        takeaway: "Alpha = helium nucleus, beta = electron, gamma = electromagnetic radiation."
      },
      {
        n: 8,
        stem: "A radioactive isotope has a half-life of 6000 years. How long until its activity falls to 12.5% of its original value?",
        options: [["A","6000 years"],["B","18 000 years"],["C","24 000 years"],["D","96 000 years"]],
        correct: "B",
        why: "Halve the activity repeatedly: 100% → 50% → 25% → 12.5%. That is <strong>three half-lives</strong>, so the time is 3 × 6000 = <strong>18 000 years</strong>.",
        working: "<span class='formula'>3 × 6000 years = 18 000 years</span>",
        wrong: {
          A: "After one half-life, 50% remains, not 12.5%.",
          C: "Four half-lives would leave 6.25%, not 12.5%.",
          D: "This represents far more than three half-lives and would leave a tiny fraction of the original activity."
        },
        takeaway: "For half-life questions, write the percentage sequence before doing any arithmetic."
      },
      {
        n: 9,
        stem: "A nucleus ²³⁰₉₁Z emits one alpha particle and then one beta-minus particle. What is the resulting nucleus?",
        diagram: true,
        options: [["A","²²⁶₈₈X"],["B","²²⁶₈₉X"],["C","²²⁶₉₀X"],["D","²³⁰₈₉X"]],
        correct: "C",
        why: "Alpha decay reduces the mass number by 4 and atomic number by 2: ²³⁰₉₁ → ²²⁶₈₉. Beta-minus decay leaves the mass number unchanged but increases the atomic number by 1: ²²⁶₈₉ → <strong>²²⁶₉₀</strong>.",
        working: "Alpha: A − 4, Z − 2. Beta-minus: A unchanged, Z + 1.",
        wrong: {
          A: "This reduces the atomic number too far; it does not include the +1 change from beta-minus decay.",
          B: "This is the nucleus immediately after the alpha decay, before the beta-minus decay.",
          D: "Alpha decay must reduce the mass number from 230 to 226."
        },
        takeaway: "Do the decays one at a time and update both numbers after each step."
      },
      {
        n: 10,
        stem: "A radioactive source gives 742 counts/min with no absorber, 273 with thin card, 275 with aluminium foil and 68 with thick lead. Which radiations are emitted?",
        diagram: true,
        options: [["A","alpha and beta only"],["B","alpha and gamma only"],["C","beta and gamma only"],["D","alpha, beta and gamma"]],
        correct: "B",
        why: "The large drop when thin card is inserted shows <strong>alpha</strong> is present because card stops alpha. Aluminium causes almost no further drop (273 to 275, essentially the same within count-rate variation), so there is no clear beta component. Thick lead reduces the remaining count strongly, showing <strong>gamma</strong> is present.",
        working: "Card removes alpha. Aluminium would remove beta. Thick lead reduces gamma.",
        wrong: {
          A: "A substantial count remains even after aluminium, and thick lead reduces it strongly, which indicates penetrating gamma radiation.",
          C: "If there were no alpha, thin card should not cause the very large drop from 742 to about 273 counts/min.",
          D: "If beta were also present, aluminium should cause an additional clear decrease compared with thin card. It does not."
        },
        takeaway: "Compare what changes at each absorber: paper/card → alpha, aluminium → beta, thick lead → gamma."
      }
    ]
  }
};