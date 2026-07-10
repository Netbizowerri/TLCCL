export interface ProgramDetails {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  intro: string;
  whoBenefits: string[];
  sessionFlow: string[];
  goals: string[];
  evidenceBase: string;
  faqs: { q: string; a: string }[];
  related: { name: string; path: string }[];
}

export interface AssessmentDetails {
  id: string;
  title: string;
  tagline: string;
  covers: string[];
  process: string[];
  deliverables: string[];
  checklist: string[];
  faqs: { q: string; a: string }[];
}

export interface TrainingDetails {
  id: string;
  title: string;
  tagline: string;
  modules: string[];
  audience: string;
  format: string;
  outcomes: string[];
}

export interface ConditionDetails {
  id: string;
  title: string;
  tagline: string;
  intro: string;
  signs: string[];
  howWeHelp: { service: string; description: string; path: string }[];
  earlyIntervention: string;
  reassurance: string;
}

export const therapyPrograms: Record<string, ProgramDetails> = {
  aba: {
    id: "aba",
    title: "Applied Behaviour Analysis (ABA) Therapy",
    tagline: "Empowering children through structured, positive behaviour reinforcement.",
    iconName: "Heart",
    intro: "Applied Behaviour Analysis (ABA) is a scientifically validated therapy focused on understanding and improving specific behaviours. At The Learner Centered Consult Limited, we utilize a highly compassionate, child-led approach to ABA. Rather than rigid drills, we blend therapy into natural play settings, focusing on building crucial communication, academic, and daily living skills while safely reducing challenging behaviours.",
    whoBenefits: [
      "Autism Spectrum Disorder (ASD)",
      "ADHD & Attention difficulties",
      "Intellectual Disabilities",
      "Significant behavioural challenges (aggression, self-injury)",
      "Children needing support with language, play, and self-help skills",
    ],
    sessionFlow: [
      "Welcome & Relationship Building: Establishing rapport through play.",
      "Skill-Acquisition Training: Breaking larger goals into small, achievable steps.",
      "Natural Environment Teaching (NET): Generalizing skills in real-life, play-based scenarios.",
      "De-escalation & Emotion Regulation: Supporting the child through big emotions.",
      "Family Handover: Demonstrating strategies to parents for home continuity.",
    ],
    goals: [
      "Develop functional communication (vocal speech, PECS, or AAC devices).",
      "Increase independence in daily living tasks (toileting, feeding, grooming).",
      "Improve social interaction, cooperative play, and turn-taking.",
      "Decrease safety-compromised or disruptive behaviours using functional replacement skills.",
      "Enhance executive functioning and learning readiness.",
    ],
    evidenceBase: "Decades of empirical peer-reviewed research demonstrate that intensive, early ABA therapy significantly improves long-term outcomes for autistic children, aiding in brain plasticity, language acquisition, and independent functioning.",
    faqs: [
      {
        q: "Is ABA therapy too rigid for young children?",
        a: "Not at The Learner Centered Consult Limited. Traditional ABA could be rigid, but our modern ABA is naturalistic, playful, and completely child-led. We follow the child's interests to make learning joyful.",
      },
      {
        q: "How many hours a week does a child need?",
        a: "This varies. Based on the initial assessment, recommended hours range from 10 to 30 hours per week depending on the child's developmental goals.",
      },
      {
        q: "Are parents involved in ABA sessions?",
        a: "Absolutely. Parent collaboration is vital. We provide systematic training sessions to ensure strategies transfer seamlessly to home and school.",
      },
    ],
    related: [
      { name: "Speech & Language Therapy", path: "/services/therapy-programmes/speech" },
      { name: "Behavioural Intervention", path: "/services/therapy-programmes/behavioural" },
    ],
  },
  speech: {
    id: "speech",
    title: "Speech & Language Therapy",
    tagline: "Unlocking your child's voice to connect, express, and understand.",
    iconName: "Brain",
    intro: "Communication is the foundation of all human connection. Our Speech and Language Therapy program is tailored to children who experience difficulties with articulation, understanding spoken language, expressing thoughts, or using social communication cues. We utilize state-of-the-art interactive techniques, AAC (Augmentative and Alternative Communication) systems, and playful engagement to help your child communicate confidently.",
    whoBenefits: [
      "Speech Sound Disorders & Articulation difficulties",
      "Receptive and Expressive Language Delays",
      "Social Pragmatic Communication Disorder",
      "Stuttering / Disfluency",
      "Apraxia of Speech",
      "Autism Spectrum Disorder & Global Developmental Delay",
    ],
    sessionFlow: [
      "Sensory-Motor Warmup: Oral motor exercises if clinically indicated.",
      "Interactive Communication Activities: Tailored games to practice target sounds or vocabulary.",
      "Social Pragmatics/Conversational Play: Applying target communication skills in active peer dialogue or role-play.",
      "Review & Home Program Assignment: Quick brief on activities for parents to continue at home.",
    ],
    goals: [
      "Enhance speech clarity and vocal sound production accuracy.",
      "Expand expressive vocabulary, sentence structure, and narrative skills.",
      "Improve comprehension of instructions, questions, and daily conversations.",
      "Establish functional communication options (gestures, signs, AAC devices) for non-verbal children.",
      "Master conversational skills like eye contact, topic maintenance, and turn-taking.",
    ],
    evidenceBase: "Strong clinical consensus from associations worldwide confirms that speech intervention in early childhood is crucial for literacy acquisition, emotional regulation, and future academic performance.",
    faqs: [
      {
        q: "How can I tell if my child has a speech delay?",
        a: "Signs include not babbling by 12 months, not using single words by 18 months, or having speech that is difficult for familiar adults to understand at age 3. If you feel concerned, we recommend a Speech Assessment.",
      },
      {
        q: "What is AAC?",
        a: "AAC stands for Augmentative and Alternative Communication. It includes picture cards, sign language, and specialized tablet apps. We use AAC to give non-verbal children an immediate voice while supporting natural speech development.",
      },
    ],
    related: [
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
      { name: "Occupational Therapy", path: "/services/therapy-programmes/occupational" },
    ],
  },
  occupational: {
    id: "occupational",
    title: "Occupational Therapy",
    tagline: "Enhancing motor skills, sensory integration, and independence.",
    iconName: "Shield",
    intro: "Occupational Therapy (OT) focuses on the 'occupations' of childhood — playing, learning, and managing daily self-care tasks. At The Learner Centered Consult Limited, our OT practitioners help children develop fine and gross motor skills, regulate sensory inputs (like sound, touch, and light), and build the bodily control required for writing, typing, dressing, and school-related coordination.",
    whoBenefits: [
      "Sensory Processing Issues (over- or under-reacting to sensory inputs)",
      "Fine Motor Delays (holding pencils, using scissors, buttoning shirts)",
      "Gross Motor Coordination difficulties (balance, throwing, posture)",
      "ADHD & Sensory Seeking/Avoiding Behaviours",
      "Autism Spectrum Disorder (motor planning and self-regulation challenges)",
    ],
    sessionFlow: [
      "Sensory Prep: Regulating the nervous system in our dedicated sensory gym.",
      "Gross Motor Integration: Balance beam, swinging, or obstacle course exercises.",
      "Fine Motor and Coordination: Pencil grip work, handwriting patterns, or bilateral manipulation.",
      "Self-care & Functional Task practice: Buttoning, tying shoelaces, or eating independently.",
    ],
    goals: [
      "Develop bilateral coordination, physical strength, and postural control.",
      "Enhance fine motor dexterity, grip strength, and handwriting readability.",
      "Improve sensory modulation and autonomic self-regulation.",
      "Build age-appropriate independence in self-feeding, dressing, and organizing materials.",
      "Establish coping mechanisms for transitions and unfamiliar environmental sensory inputs.",
    ],
    evidenceBase: "Randomized controlled trials show that Sensory Integration Therapy and goal-oriented pediatric OT drastically improve focus, motor planning, and school adaptability for neurodiverse children.",
    faqs: [
      {
        q: "What does an OT session look like?",
        a: "It looks like play! Children climb, swing, build, and use fine motor toys in our therapy gym, but every activity is scientifically structured to target neurological and motor milestones.",
      },
      {
        q: "Can OT help with my child's handwriting?",
        a: "Yes. Fine motor difficulties, pencil grip, hand-eye coordination, and visual-spatial processing are core areas we treat to improve handwriting fluency.",
      },
    ],
    related: [
      { name: "Speech & Language Therapy", path: "/services/therapy-programmes/speech" },
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
    ],
  },
  behavioural: {
    id: "behavioural",
    title: "Behavioural Intervention",
    tagline: "Nurturing emotional resilience and constructive behavioral habits.",
    iconName: "Smile",
    intro: "Behavioural Intervention focuses on teaching children positive ways to manage strong feelings, handle transitions, and follow routines. We work closely with the child's natural support systems (parents and teachers) to replace challenging behaviours like defiance, tantrums, or social withdrawal with healthy coping strategies, self-soothing techniques, and positive habits.",
    whoBenefits: [
      "ADHD, Oppositional Defiant Disorder (ODD), or conduct concerns",
      "Children struggling with emotional outbursts and anger regulation",
      "School-based behavioural challenges (difficulty staying seated, following rules)",
      "Autism Spectrum Disorder with behavioral regulation needs",
    ],
    sessionFlow: [
      "Check-in & Mood Scale: Evaluating the child's emotional baseline.",
      "Coping Skills Modeling: Interactive games teaching breathing, waiting, or expressing frustration.",
      "Role Play Scenarios: Simulating difficult triggers (e.g., losing a game, hearing 'no') and practicing responses.",
      "Review & Positive Reinforcement: Celebrating successes and planning home tasks.",
    ],
    goals: [
      "Reduce the intensity, frequency, and duration of aggressive or self-defeating behaviors.",
      "Cultivate emotional awareness and self-soothing skills.",
      "Strengthen family boundaries through parent training and behavioral contracts.",
      "Improve focus and class participation in academic settings.",
    ],
    evidenceBase: "Cognitive Behavioral and Positive Behavioural Support (PBS) methods are widely documented as first-line non-pharmacological interventions for managing emotional regulation and behavioural difficulties in school-aged children.",
    faqs: [
      {
        q: "How does this differ from ABA?",
        a: "ABA is comprehensive and addresses overall development, communication, and basic skills (often best for early intervention). Behavioural Intervention is highly focused on cognitive-emotional regulation, coping mechanisms, and specific social/emotional behaviors in older children.",
      },
      {
        q: "Will you visit my child's school?",
        a: "Yes. Our therapists regularly conduct classroom observations and coordinate with teachers to apply behavioral strategies consistently in school.",
      },
    ],
    related: [
      { name: "ABA Therapy", path: "/services/therapy-programmes/aba" },
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
    ],
  },
  cognitive: {
    id: "cognitive",
    title: "Cognitive Development Therapy",
    tagline: "Stimulating critical thinking, memory, and academic readiness.",
    iconName: "Sparkles",
    intro: "Cognitive Development Therapy targets a child's thinking, learning, and reasoning processes. Our specialized program works on critical cognitive milestones — attention control, short- and long-term memory, executive functioning, problem-solving, and foundational conceptual reasoning. This therapy is highly integrated with educational goal-setting to support neurodivergent children in navigating academic challenges.",
    whoBenefits: [
      "Global Developmental Delay (GDD)",
      "Intellectual and Cognitive Disabilities",
      "Executive Dysfunction (poor planning, organizing, memory)",
      "Specific Learning Disorders (Dyslexia, Dyscalculia, Dysgraphia)",
      "Children who struggle with attention span, memory, or abstract logic",
    ],
    sessionFlow: [
      "Focus Warmup: Quick visual tracking or short memory attention tasks.",
      "Cognitive Stimulation Exercises: Problem-solving puzzle games, sequence patterns, and concept sorting.",
      "Executive Function Task: Planning and executing a multi-step project (such as crafts or building blocks).",
      "Metacognitive Reflection: Reviewing how they solved problems and what they learned.",
    ],
    goals: [
      "Extend sustained, selective, and divided attention spans.",
      "Boost working memory capacity and information processing speed.",
      "Enhance executive functions (planning, task initiation, working memory, organization).",
      "Develop problem-solving strategies, spatial visualization, and critical thinking skills.",
      "Acquire fundamental cognitive concepts (classification, seriation, conservation).",
    ],
    evidenceBase: "Cognitive remediation therapies utilize neuroplastic principles to strengthen weak synaptic connections, helping children overcome executive dysfunction and bridge learning gaps effectively.",
    faqs: [
      {
        q: "Is this the same as academic tutoring?",
        a: "No. Academic tutoring teaches specific curriculum subjects (e.g., math, history). Cognitive Development Therapy builds the underlying neurological tools (attention, memory, executive control) needed to learn *any* subject.",
      },
      {
        q: "How can I support my child's cognitive growth at home?",
        a: "Engage in board games, memory match cards, storytelling, and structured cooking activities. We provide tailored worksheets and home exercises during our parent handovers.",
      },
    ],
    related: [
      { name: "Occupational Therapy", path: "/services/therapy-programmes/occupational" },
      { name: "Behavioural Intervention", path: "/services/therapy-programmes/behavioural" },
    ],
  },
};

export const assessmentPrograms: Record<string, AssessmentDetails> = {
  developmental: {
    id: "developmental",
    title: "Developmental Assessment",
    tagline: "A comprehensive map of your child's developmental milestones.",
    covers: [
      "Gross & Fine Motor Skills",
      "Receptive & Expressive Language",
      "Cognitive Development & Problem Solving",
      "Social-Emotional & Adaptive Behaviour",
      "Play skills & peer interaction markers",
    ],
    process: [
      "Clinical Intake Interview with parents (detailed birth and developmental history).",
      "Direct Observation of child during play and structured developmental activities.",
      "Standardized Assessment Testing (using tools like Bayley Scales or Denver II).",
      "Multidisciplinary Team review to synthesize clinical outcomes.",
      "Feedback Consultation Session to walk parents through findings and the customized report.",
    ],
    deliverables: [
      "Comprehensive Developmental Milestone Report detailing exact strengths and delay areas.",
      "Official diagnosis verification letter (where clinically appropriate).",
      "Customized, multi-layered Intervention Roadmap.",
      "Referral recommendations for medical specialists or assistive services.",
    ],
    checklist: [
      "Delayed crawling, walking, or physical coordination.",
      "Not meeting typical language milestones (e.g., no words by 18 months).",
      "Difficulty managing simple play items or lack of exploratory play.",
      "Inability to complete basic daily self-care tasks for their age.",
    ],
    faqs: [
      {
        q: "What age is this assessment for?",
        a: "We assess infants and toddlers starting from 6 months up to 6 years of age.",
      },
      {
        q: "How long does the physical assessment session take?",
        a: "The physical session is split into two sessions of about 1.5 hours each to avoid child fatigue.",
      },
    ],
  },
  behavioural: {
    id: "behavioural",
    title: "Behavioural Assessment",
    tagline: "Decoding the root causes of complex or challenging behaviours.",
    covers: [
      "Functional Behavioural Assessment (FBA) mapping",
      "Antecedent-Behaviour-Consequence (ABC) recording",
      "Sensory vs. escape-based behaviour motivators",
      "Emotional triggers & hyper-sensitivity zones",
      "Attention seeking vs. pain/discomfort reactions",
    ],
    process: [
      "Parent/Teacher interviews using standard diagnostic rating scales.",
      "Real-world observation of the child in their typical setting (home or school).",
      "Functional analysis (systematically adjusting triggers to observe behavioral shifts safely).",
      "Drafting a tailored Behavior Intervention Plan (BIP) centered on proactive replacement skills.",
    ],
    deliverables: [
      "Functional Behaviour Assessment (FBA) report explaining the WHY behind behaviors.",
      "Bespoke Behavior Intervention Plan (BIP) with visual steps for parents and teachers.",
      "Recommended sensory/environmental adaptation checklists.",
      "A 30-day tracking log to record behavioral shifts and progress.",
    ],
    checklist: [
      "Frequent, uncontrollable tantrums lasting over 15 minutes.",
      "Physical aggression towards self, peers, or family members.",
      "Severe school refusal or non-compliance.",
      "Self-stimulating or repetitive behaviors that inhibit safe learning.",
    ],
    faqs: [
      {
        q: "Why do we need a behavioural assessment?",
        a: "Behaviours are messages. An assessment decodes what the child is trying to express (such as sensory overload, fear, or a desire for escape) so we can teach them appropriate verbal or physical alternatives.",
      },
      {
        q: "Is school observation necessary?",
        a: "It is highly recommended because peer dynamics, class structures, and sensory triggers in schools often prompt behaviors that don't occur at home.",
      },
    ],
  },
  communication: {
    id: "communication",
    title: "Communication & Speech Assessment",
    tagline: "Evaluating speech sound precision, language structure, and social communication.",
    covers: [
      "Receptive language skills (how the child understands words and sentences)",
      "Expressive language skills (how the child utilizes words to convey needs)",
      "Speech motor planning and articulation precision",
      "Pragmatic language (the social context of communication)",
      "Oral peripheral examination (structural check of lips, tongue, palate)",
    ],
    process: [
      "Parent structured interview regarding speech history.",
      "Physical examination of oral-motor capabilities.",
      "Standardized speech testing using validated speech/language inventories.",
      "Natural language play sample analysis.",
      "Feedback session outlining clear, measurable speech targets.",
    ],
    deliverables: [
      "A highly detailed Speech & Language Profile with age-relative percentile ranks.",
      "Clear articulation chart tracking specific vocal speech distortions.",
      "Technological AAC recommendation guide (if non-verbal).",
      "A 6-month goal breakdown sheet for speech-language pathing.",
    ],
    checklist: [
      "Struggling to follow simple multi-step directions.",
      "Unclear speech that makes it hard for strangers to understand them by age 3.",
      "Limited vocabulary or repeating words/phrases mechanically (echolalia).",
      "Avoiding eye contact or not responding when their name is called.",
    ],
    faqs: [
      {
        q: "How do you assess a child who is completely non-verbal?",
        a: "We observe symbolic play, gestures, understanding of instructions, response to visual symbols, and motor imitation, which helps us identify their readiness for speech or alternative visual/AAC communication.",
      },
      {
        q: "Can this assessment identify stuttering?",
        a: "Yes. Our standardized batteries measure stuttering frequency, types of repetitions, and secondary physical indicators.",
      },
    ],
  },
  functional: {
    id: "functional",
    title: "Functional & Adaptive Assessment",
    tagline: "Measuring practical skills for day-to-day independent living.",
    covers: [
      "Daily self-care (feeding, dressing, toileting, personal hygiene)",
      "Community safety & navigation skills",
      "Functional academic skills (money concepts, basic reading labels)",
      "Vocational & school readiness milestones",
      "Adaptive behavioral indices",
    ],
    process: [
      "Comprehensive adaptive behavior inventory filled with parent or caregiver (Vineland-3).",
      "Direct practical observation of self-care skills (grooming, task planning).",
      "Simulated community safety exercises inside our therapy rooms.",
      "Collaboration with occupational and behavioral leads to synthesize results.",
    ],
    deliverables: [
      "Adaptive Behaviour Index Report with standard age scores.",
      "Highly customized checklist of immediate self-care milestones.",
      "Step-by-step home safety and community exploration checklist.",
      "Structured school/workplace accommodation recommendation letter.",
    ],
    checklist: [
      "Difficulty eating, using utensils, or drinking independently.",
      "Struggling to manage personal hygiene or use the restroom alone.",
      "Lack of awareness of basic physical safety rules (e.g., crossing streets).",
      "Inability to manage simple tasks (packing a school backpack, cleaning up play toys).",
    ],
    faqs: [
      {
        q: "What is adaptive behavior?",
        a: "Adaptive behavior refers to the age-appropriate skills a child needs to function safely and independently in everyday life, without constant adult support.",
      },
      {
        q: "Are the findings useful for school planning?",
        a: "Absolutely. Schools use adaptive scores to customize IEPs (Individualized Education Programs), determining what accommodations or support staff the child needs.",
      },
    ],
  },
};

export const trainingPrograms: Record<string, TrainingDetails> = {
  parents: {
    id: "parents",
    title: "Parent & Caregiver Training",
    tagline: "Empowering families to become active partners in their child's development.",
    modules: [
      "Module 1: Deciphering the Diagnosis — Understanding autism, ADHD, and learning differences.",
      "Module 2: Positive Reinforcement at Home — Structuring routines that support constructive behavior.",
      "Module 3: Everyday Articulation — Creating high-frequency language opportunities in the kitchen, park, and bath.",
      "Module 4: Co-Regulation Techniques — Managing parental stress and helping children handle meltdowns safely.",
    ],
    audience: "Parents, grandparents, legal guardians, and domestic nannies/caregivers.",
    format: "In-person evening workshops or 1-on-1 virtual coaching sessions with visual handouts.",
    outcomes: [
      "Significantly reduced home-stress indices and caregiver burnout.",
      "Ability to handle tantrums and big emotions with calm, constructive strategies.",
      "A unified, predictable support structure across home, school, and clinical environments.",
    ],
  },
  schools: {
    id: "schools",
    title: "School & Teacher Training",
    tagline: "Building inclusive, sensory-friendly, and effective classrooms.",
    modules: [
      "Module 1: Neurodiversity in the Classroom — Understanding ASD, ADHD, and Learning Differences.",
      "Module 2: Classroom Accommodations — Easy-to-apply seating arrangements, visual schedules, and sensory kits.",
      "Module 3: Positive Behaviour Support (PBS) — Managing disruptive behaviors without exclusionary punishments.",
      "Module 4: IEP Collaboration — Working with clinical therapists to implement practical education plans.",
    ],
    audience: "School administrators, class teachers, special education teachers, and support assistants.",
    format: "On-site school training sessions, workshop certificates, and quarterly classroom observations.",
    outcomes: [
      "Increased school capacity to support neurodiverse children confidently.",
      "Decreased suspension rates and class disruptive behaviors.",
      "Successful implementation of Individualized Education Programs (IEPs).",
    ],
  },
  professionals: {
    id: "professionals",
    title: "Allied Professional Training",
    tagline: "Advancing clinical knowledge and collaborative intervention methods.",
    modules: [
      "Module 1: Pediatric Interventions — Clinical advances in developmental therapies.",
      "Module 2: Ethical Interdisciplinary Practice — Seamless collaboration between OT, SLP, and ABA specialists.",
      "Module 3: Modern ABA Ethics — Safe, neurodiversity-affirming behavioral techniques.",
      "Module 4: Diagnostic Integration — Mapping clinical assessment metrics into concrete therapy plans.",
    ],
    audience: "Pediatric nurses, junior occupational/speech therapists, clinical psychologists, and family doctors.",
    format: "Advanced medical seminars, CEU-accredited programs, and specialized clinical shadow days.",
    outcomes: [
      "Sophisticated clinical skill acquisition aligned with global gold-standard guidelines.",
      "Access to our collaborative professional referral network.",
      "Mastery of modern, neurodiversity-affirming clinical ethics.",
    ],
  },
};

export const conditionsSupported: Record<string, ConditionDetails> = {
  autism: {
    id: "autism",
    title: "Autism Spectrum Disorder (ASD)",
    tagline: "Understanding and nurturing autistic minds to bloom uniquely.",
    intro: "Autism Spectrum Disorder (ASD) is a neurodevelopmental difference that affects how people perceive the world, communicate, interact, and process sensory information. Autistic children possess unique, beautiful perspectives and incredible strengths, along with areas where they need compassionate, targeted support to navigate a world that is not always built for them.",
    signs: [
      "Avoiding eye contact or preferring solo play.",
      "Delayed speech/communication or repeating phrases mechanically.",
      "Intense interest in specific topics, toys, or repetitive patterns.",
      "High sensitivity or low response to sensory inputs (noises, textures, lights).",
      "Difficulty coping with sudden routine changes or unstructured environments.",
    ],
    howWeHelp: [
      { service: "ABA Therapy", description: "Natural play-based ABA to build language, communication, and independence.", path: "/services/therapy-programmes/aba" },
      { service: "Speech & Language Therapy", description: "Enhancing clear communication and introducing functional AAC systems.", path: "/services/therapy-programmes/speech" },
      { service: "Occupational Therapy", description: "Developing gross/fine motor control and sensory integration support.", path: "/services/therapy-programmes/occupational" },
    ],
    earlyIntervention: "Research consistently shows that early intervention during the crucial ages of 1 to 5 leads to immense progress. By teaching vital speech and self-regulation early, we set autistic children up to transition smoothly into mainstream environments and fully express their potential.",
    reassurance: "Your child's diagnosis is a description of how they learn and process, not a limitation on what they can achieve. Our multidisciplinary team is here to walk alongside you, honoring who your child is while giving them the tools to grow.",
  },
  adhd: {
    id: "adhd",
    title: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    tagline: "Harnessing high energy, creativity, and finding absolute focus.",
    intro: "ADHD is a neurodevelopmental condition characterized by persistent patterns of inattention, hyperactivity, and impulsivity. Far from being a simple behavioral problem, children with ADHD have brains with different executive-control wiring. They are often exceptionally creative, energetic, and empathetic, but need tailored support to focus, plan tasks, regulate their impulses, and thrive in structured school environments.",
    signs: [
      "Struggling to focus on a single task or getting distracted easily.",
      "Frequent fidgeting, constant movement, or inability to stay seated.",
      "Impulsive actions, like interrupting conversations or acting without safety awareness.",
      "Difficulty organizing materials, keeping track of chores, or starting projects.",
      "Struggling with emotional self-regulation when frustrated.",
    ],
    howWeHelp: [
      { service: "Behavioural Intervention", description: "Teaching self-regulation, waiting strategies, and focused work habits.", path: "/services/therapy-programmes/behavioural" },
      { service: "Occupational Therapy", description: "Sensory regulation strategies and gross motor channeling to improve attention.", path: "/services/therapy-programmes/occupational" },
      { service: "Cognitive Development", description: "Developing planning, working memory, and organization techniques.", path: "/services/therapy-programmes/cognitive" },
    ],
    earlyIntervention: "Early executive-function training helps children with ADHD learn to navigate classroom structures and build solid study habits early, boosting self-esteem and preventing feelings of academic failure.",
    reassurance: "ADHD is not a lack of intelligence or a failure of parenting. With the right therapeutic pathways and cooperative home-school structures, your child can learn to master their focus and channel their immense energy into outstanding achievements.",
  },
  "intellectual-disabilities": {
    id: "intellectual-disabilities",
    title: "Intellectual Disabilities",
    tagline: "Empowering learning and everyday life skills at a personalized pace.",
    intro: "Intellectual Disabilities involve challenges with general mental abilities (such as learning, reasoning, and problem-solving) and adaptive behaviors (such as daily communication, social interactions, and self-care skills). Every child with an intellectual disability is capable of learning, growing, and experiencing a full, joyful life — they simply benefit from structured, evidence-based training delivered at a compassionate pace.",
    signs: [
      "Rolling over, sitting up, or walking significantly later than peers.",
      "Difficulty speaking clearly or understanding complex sentences.",
      "Struggling to understand logical rules, cause-and-effect, or math concepts.",
      "Difficulty managing self-care tasks (toileting, feeding, dressing).",
      "Struggling to remember daily instructions or routines.",
    ],
    howWeHelp: [
      { service: "Cognitive Development", description: "Strengthening logic, reasoning, spatial concepts, and working memory.", path: "/services/therapy-programmes/cognitive" },
      { service: "ABA Therapy", description: "Teaching practical self-help skills and safety habits systematically.", path: "/services/therapy-programmes/aba" },
      { service: "Occupational Therapy", description: "Building motor coordination for day-to-day functional independence.", path: "/services/therapy-programmes/occupational" },
    ],
    earlyIntervention: "Systematic instruction during early childhood creates permanent pathways for adaptive living, allowing children with intellectual differences to master essential tasks and actively participate in school and family life.",
    reassurance: "Every small step forward is a milestone worth celebrating. We focus entirely on what your child *can* do, systematically building their skills so they can live with as much dignity, joy, and independence as possible.",
  },
  "global-developmental-delay": {
    id: "global-developmental-delay",
    title: "Global Developmental Delay (GDD)",
    tagline: "Supporting delayed milestones with systematic, clinical interventions.",
    intro: "Global Developmental Delay (GDD) is diagnosed when a child experiences significant delays (typically 6 months or more behind developmental expectations) in two or more areas of development, such as motor skills, speech, cognition, or social play. GDD is often diagnosed in early childhood, and represents a golden opportunity for therapeutic intervention while the young brain is highly adaptable.",
    signs: [
      "Not sitting, standing, or walking at expected ages.",
      "Very few or no words or gestures compared to peers of the same age.",
      "Difficulty interacting with toys or displaying curiosity.",
      "Struggling to adapt to simple, age-appropriate household demands.",
    ],
    howWeHelp: [
      { service: "Developmental Assessment", description: "Constructing a clear milestone map to target clinical priorities.", path: "/services/assessments/developmental" },
      { service: "Speech & Language Therapy", description: "Supporting early sound imitation, comprehension, and vocabulary.", path: "/services/therapy-programmes/speech" },
      { service: "Occupational Therapy", description: "Focusing on head control, trunk support, motor coordination, and play skills.", path: "/services/therapy-programmes/occupational" },
    ],
    earlyIntervention: "Early, active, multi-disciplinary intervention is highly successful for children with GDD. By stepping in when the brain is at its highest plasticity, we can bridge developmental gaps and help children catch up to their milestones.",
    reassurance: "A delay is not a permanent stop. With consistent, multi-faceted therapeutic support, children with Global Developmental Delay can achieve major breakthrough milestones and find their unique path forward.",
  },
  "speech-difficulties": {
    id: "speech-difficulties",
    title: "Speech & Language Difficulties",
    tagline: "Helping children express their thoughts clearly and connect naturally.",
    intro: "Speech and language difficulties encompass a wide range of expressive and receptive challenges. This includes articulation issues (struggling to pronounce sounds clearly), expressive delays (difficulty formulating sentences), receptive delays (struggling to understand spoken language), stuttering, or social-pragmatic difficulties. Helping children speak clearly directly boosts their self-confidence, school learning, and social friendships.",
    signs: [
      "Struggling to pronounce sounds correctly (e.g., substituting 'w' for 'r' or 't' for 'k' past age-typical thresholds).",
      "Speaking in short, incomplete, or disorganized sentences.",
      "Struggling to follow verbal directions or understand basic questions.",
      "Frequent stuttering or physical struggle when attempting to speak.",
      "Avoiding conversations or feeling frustrated when trying to express a thought.",
    ],
    howWeHelp: [
      { service: "Speech & Language Therapy", description: "Direct articulation, grammar, comprehension, and stuttering intervention.", path: "/services/therapy-programmes/speech" },
      { service: "Communication Assessment", description: "In-depth testing of receptive and expressive language structures.", path: "/services/assessments/communication" },
      { service: "Parent Training", description: "Empowering parents with language stimulation exercises to use at home.", path: "/services/training/parents" },
    ],
    earlyIntervention: "Unlocking clear communication early prevents children from developing secondary frustrations, social withdrawal, or educational reading/writing difficulties later in life.",
    reassurance: "Every child has a voice, and communication takes many forms. We work patiently and creatively to unlock your child's communication, using the tools and paths that work best for their unique nervous system.",
  },
  "learning-behavioural": {
    id: "learning-behavioural",
    title: "Learning & Behavioural Challenges",
    tagline: "Resolving scholastic hurdles and supporting emotional adjustments.",
    intro: "Learning and behavioral challenges represent a cross-section of difficulties children encounter in school environments. This includes academic hurdles like Dyslexia (reading difficulties), Dyscalculia (math difficulties), and executive processing delays, as well as behavioural difficulties like classroom defiance, transition-related tantrums, and school anxiety. We address these concerns by combining academic cognitive training with emotional-coping behavioral support.",
    signs: [
      "Intense struggle with reading, spelling, handwriting, or simple math.",
      "Extreme frustration, anxiety, or crying when doing homework.",
      "Disruptive behavior or defiance when asked to perform school-related tasks.",
      "Struggling to keep up with school instructions or forgetting assignments.",
      "Frequent conflicts with peers or teachers in school.",
    ],
    howWeHelp: [
      { service: "Behavioural Intervention", description: "Emotion regulation, transition management, and stress tolerance strategies.", path: "/services/therapy-programmes/behavioural" },
      { service: "Cognitive Development", description: "Executive function training, phonics development, and learning planning.", path: "/services/therapy-programmes/cognitive" },
      { service: "School Support Training", description: "Coordinating with teachers to structure classroom accommodations.", path: "/services/training/schools" },
    ],
    earlyIntervention: "Early diagnostic identification and clinical cognitive-behavioral guidance prevent the development of a 'learned helplessness' mindset, protecting the child's academic confidence and mental health.",
    reassurance: "Children do well when they can. If a child is struggling in school, it is a sign that they lack the tools or support, not the willingness to succeed. We identify those missing tools and build them together, systematically.",
  },
};
