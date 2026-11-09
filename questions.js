
const questions = [

    // =====================================================
    // Q1 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Polymer wetting is improved by the addition of fillers with functional groups. In a typical case-study, natural-clay was modified with hydroxyl groups and compounded with Nylon 6 along with an antioxidant. The resulting composite exhibited poor mechanical properties. Which one among the options given explains this observation? (G-23)",
        options: [
            "The surface functional groups of the filler reacted with Nylon 6",
            "The antioxidant degraded during the processing",
            "The surface functional groups of the filler formed hydrogen bonds with the antioxidant",
            "The antioxidant reacted with Nylon 6"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q2 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Carbon black is added to a tire-tread rubber compound primarily as:",
        options: [
            "A colorant to protect against visible light",
            "A reinforcing filler that improves abrasion resistance and modulus",
            "An antioxidant that scavenges peroxy radicals",
            "A processing aid that reduces mixing viscosity"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q3 — MCQ — 1 MARK
    // =====================================================
    {
        question: "In a moving die rheometer (MDR) cure curve of a rubber compound, 'scorch time' refers to:",
        options: [
            "Time to reach 90% of maximum torque",
            "Time at which torque reaches minimum",
            "Time for the torque to rise a small specified amount above the minimum (onset of cure)",
            "Time to reach maximum torque"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q4 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Which one of the following is correctly matched?",
        options: [
            "MBT (mercaptobenzothiazole) — ultra-fast accelerator",
            "TMTD (tetramethylthiuram disulfide) — ultra accelerator, can act as sulfur donor",
            "DPG (diphenyl guanidine) — fastest known accelerator, used alone",
            "Sulfenamides (e.g., CBS) — no delayed action, immediate onset of cure"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q5 — MSQ — 1 MARK
    // =====================================================
    {
        question: "Which of the following statements are CORRECT? [MSQ]",
        options: [
            "Peroxide curing produces C–C crosslinks, giving better heat-aging resistance than polysulfidic networks",
            "Sulfur vulcanization requires unsaturation (or cure sites) in the polymer backbone",
            "EPDM homopolymer (fully saturated EPM) can be vulcanized by sulfur",
            "Zinc oxide and stearic acid function as activators in sulfur vulcanization"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 1
    },

    // =====================================================
    // Q6 — MCQ — 1 MARK
    // =====================================================
    {
        question: "An external lubricant differs from an internal lubricant in that it:",
        options: [
            "Is compatible with the polymer and reduces melt viscosity by increasing chain mobility",
            "Has limited compatibility, migrates to the surface, and reduces friction between melt and metal surfaces",
            "Increases the coefficient of friction at the die wall",
            "Acts primarily as a nucleating agent"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q7 — MSQ — 1 MARK
    // =====================================================
    {
        question: "Among the options given, which agents are used to vulcanize or cure rubbers? (G-23) [MSQ]",
        options: [
            "Dicumyl peroxide",
            "Zinc stearate",
            "Carbon black",
            "Dinitrobenzene"
        ],
        correctAnswers: [0, 3],
        type: "MSQ",
        marks: 1
    },

    // =====================================================
    // Q8 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Antimony trioxide (Sb₂O₃) alone is a poor flame retardant, yet it is almost always added alongside brominated flame retardants in polymer compounds. This is because:",
        options: [
            "Sb₂O₃ absorbs UV radiation, protecting the bromine compound",
            "Sb₂O₃ reacts with HBr during combustion to form volatile antimony halides that scavenge flame radicals in the gas phase—a synergistic effect",
            "Sb₂O₃ melts and forms a protective glassy layer alone",
            "Sb₂O₃ releases water of hydration, cooling the flame"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q9 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A compounder curing EPDM with dicumyl peroxide adds a generous dose of a hindered phenol antioxidant to the same formulation to improve aging resistance. The likely consequence on curing is:",
        options: [
            "Faster cure, since phenol accelerates peroxide decomposition",
            "Reduced crosslink density, since the antioxidant scavenges the very radicals needed for peroxide crosslinking",
            "No effect, as antioxidants act only during service life",
            "Conversion of C–C crosslinks into polysulfidic crosslinks"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q10 — MSQ — 1 MARK
    // =====================================================
    {
        question: "Which of the following pairings of rubber and its characteristic curing system are CORRECT? [MSQ]",
        options: [
            "Polychloroprene (CR) — cured with metal oxides (ZnO + MgO)",
            "Butyl rubber (IIR) for high-temperature bladders — cured with phenolic resin",
            "Silicone rubber — cured with accelerated sulfur systems",
            "Chlorosulfonated polyethylene (CSM) — curable via metal oxides with the sulfonyl chloride sites"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 1
    },

    // =====================================================
    // Q11 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A rubber band in a stretched state develops cracks perpendicular to the stress direction within weeks outdoors, while an identical unstretched band stays intact. The additive system that specifically addresses this failure is:",
        options: [
            "A hindered phenol antioxidant, since oxidation is accelerated by sunlight",
            "p-Phenylenediamine (PPD) antiozonants plus microcrystalline wax, since the failure is ozone cracking which requires strain",
            "More sulfur, to make the network stiffer",
            "An optical brightener"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q12 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "MBS or CPE is added to rigid PVC (uPVC) window profiles. The primary mechanism by which these impact modifiers toughen PVC is:",
        options: [
            "They plasticize PVC, lowering its Tg below room temperature",
            "Dispersed rubbery particles cavitate and initiate/terminate localized shear yielding and crazing, absorbing impact energy",
            "They co-crystallize with PVC, increasing crystallinity",
            "They crosslink the PVC matrix"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q13 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A rheometer curve reaches a maximum torque and then gradually decreases during curing. This indicates:",
        options: [
            "Scorch",
            "Blooming",
            "Reversion",
            "Devulcanization"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q14 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match Column I with Column II.\n\nColumn I:\nA. Hindered phenols\nB. Phosphites\nC. HALS\nD. UV absorbers\n\nColumn II:\n1. Radical scavenging\n2. Hydroperoxide decomposition\n3. Regenerative radical scavenging\n4. UV radiation absorption",
        options: [
            "A-1, B-2, C-3, D-4",
            "A-2, B-1, C-4, D-3",
            "A-1, B-3, C-2, D-4",
            "A-4, B-2, C-3, D-1"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q15 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match Column I with Column II.\n\nColumn I:\nA. Heat stabilizer\nB. Plasticizer\nC. External lubricant\nD. Internal lubricant\n\nColumn II:\n1. Reduce processing friction\n2. Prevent thermal degradation\n3. Increase flexibility\n4. Improve internal melt flow",
        options: [
            "A-2, B-3, C-1, D-4",
            "A-1, B-2, C-4, D-3",
            "A-3, B-4, C-2, D-1",
            "A-2, B-1, C-3, D-4"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q16 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "Under which combination of conditions does the glass transition of a polymer increase? (G-24)",
        options: [
            "Increase in molecular weight and increase in plasticizer content",
            "Increase in plasticizer content and decrease in cross-linking",
            "Increase in branching and decrease in inter-chain interactions",
            "Increase in chain length and decrease in plasticizer content"
        ],
        answer: 3,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q17 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "For a polymer, which of the following changes is expected to produce the maximum increase in glass transition temperature, assuming all other factors remain constant?",
        options: [
            "Increase in plasticizer concentration",
            "Decrease in molecular weight below the critical molecular weight",
            "Introduction of rigid aromatic groups into the backbone",
            "Increase in flexible aliphatic side chains"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q18 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "Which statement is correct regarding a two-roll mill?",
        options: [
            "Both rolls always rotate at identical speeds",
            "Friction ratio between rolls influences shear and mixing",
            "It is unsuitable for rubber mastication",
            "Mixing occurs only by diffusion without mechanical deformation"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q19 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Which of the following changes are generally associated with increasing cross-link density in rubber? [MSQ]",
        options: [
            "Increase in elastic modulus",
            "Decrease in equilibrium swelling",
            "Increase in molecular mobility",
            "Decrease in extensibility at sufficiently high cross-link density"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q20 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A rubber compound exhibits the following MDR torque values:\n\nMinimum torque = 5 dN·m\nMaximum torque = 25 dN·m\n\nThe torque difference is:",
        options: [
            "5 dN·m",
            "20 dN·m",
            "25 dN·m",
            "30 dN·m"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q21 — NAT — 2 MARKS
    // =====================================================
    {
        question: "The rate constant of vulcanization follows:\n\nk = A exp(−Ea/RT)\n\nIf the activation energy is 80 kJ/mol, calculate the ratio of rate constants at 160°C and 140°C.\n\nR = 8.314 J/mol·K\n\nRound off to two decimal places.",
        type: "NAT",
        answer: 2.92,
        marks: 2
    },

    // =====================================================
    // Q22 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "Which statement is correct regarding sulfur vulcanization?",
        options: [
            "Zinc oxide and stearic acid commonly act as activators",
            "Accelerators are added exclusively to reduce rubber density",
            "Activators prevent all cross-link formation",
            "Sulfur is used only as a processing lubricant"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    }
];
