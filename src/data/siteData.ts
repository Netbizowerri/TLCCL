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
    title: "Applied Behaviour Analysis (ABA)",
    tagline: "Empowering children through structured, positive behaviour reinforcement.",
    iconName: "Heart",
    intro: "Applied Behaviour Analysis (ABA) is a scientifically validated therapy focused on understanding and improving specific behaviours. At The Learner Centered Consult (LCC), we utilize a highly compassionate, child-led approach to ABA. Rather than rigid drills, we blend therapy into natural play settings, focusing on building crucial communication, academic, and daily living skills while safely reducing challenging behaviours.",
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
        a: "Not at The Learner Centered Consult (LCC). Traditional ABA could be rigid, but our modern ABA is naturalistic, playful, and completely child-led. We follow the child's interests to make learning joyful.",
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
    intro: "Occupational Therapy (OT) focuses on the 'occupations' of childhood — playing, learning, and managing daily self-care tasks. At The Learner Centered Consult (LCC), our OT practitioners help children develop fine and gross motor skills, regulate sensory inputs (like sound, touch, and light), and build the bodily control required for writing, typing, dressing, and school-related coordination.",
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
  early: {
    id: "early",
    title: "Early Intervention",
    tagline: "Critical developmental support during the most neuroplastic years.",
    iconName: "Sparkles",
    intro: "Early Intervention provides comprehensive, multidisciplinary support for infants and young children showing signs of developmental delays. By intervening during the critical window of neuroplasticity (birth to age 5), we maximize each child's developmental trajectory across communication, motor, cognitive, and social-emotional domains.",
    whoBenefits: [
      "Infants and toddlers with developmental delays",
      "Children at risk for developmental disorders",
      "Premature infants needing developmental monitoring",
      "Families seeking early developmental guidance",
    ],
    sessionFlow: [
      "Developmental Screening: Quick milestone checks across all domains.",
      "Family-Cognitive Play: Age-appropriate activities targeting specific developmental goals.",
      "Parent Coaching: Teaching caregivers strategies to embed learning in daily routines.",
      "Progress Review: Regular assessment and goal adjustment.",
    ],
    goals: [
      "Maximize developmental potential during peak neuroplasticity.",
      "Support families in understanding and promoting development.",
      "Facilitate smoother transitions to preschool and school settings.",
      "Reduce the need for intensive interventions later in life.",
    ],
    evidenceBase: "Extensive research demonstrates that early intervention services significantly improve developmental outcomes, with earlier initiation correlating with better long-term trajectories.",
    faqs: [
      {
        q: "What age is early intervention for?",
        a: "Early intervention typically serves children from birth to age 5, with the most critical window being birth to 3 years.",
      },
      {
        q: "Do I need a diagnosis to start early intervention?",
        a: "No. Children can receive early intervention services based on developmental delays or risk factors, even before a formal diagnosis.",
      },
    ],
    related: [
      { name: "Developmental Assessment", path: "/services/assessments/developmental" },
      { name: "ABA Therapy", path: "/services/therapy-programmes/aba" },
    ],
  },
  readiness: {
    id: "readiness",
    title: "School Readiness Programme",
    tagline: "Preparing children for confident classroom transitions.",
    iconName: "GraduationCap",
    intro: "Our School Readiness Programme equips children with the foundational skills needed for successful entry into mainstream or specialized educational settings. We focus on academic precursors, social skills, independence, and emotional regulation.",
    whoBenefits: [
      "Children approaching school age (4-6 years)",
      "Children with developmental delays transitioning to school",
      "Children needing support with classroom routines",
      "Families preparing for educational placement decisions",
    ],
    sessionFlow: [
      "Circle Time Practice: Group attention, turn-taking, and following instructions.",
      "Pre-Academic Skills: Letter recognition, counting, name writing, and fine motor tasks.",
      "Social Skills: Sharing, cooperative play, conflict resolution, and peer interaction.",
      "Independence Skills: Self-care, transitions, and following visual schedules.",
    ],
    goals: [
      "Develop classroom-ready attention and group participation skills.",
      "Build foundational academic concepts (literacy and numeracy precursors).",
      "Establish social confidence and peer interaction abilities.",
      "Foster independence in self-care and routine following.",
    ],
    evidenceBase: "School readiness skills are strong predictors of long-term academic achievement and social adjustment. Structured preparation programs significantly improve transition outcomes.",
    faqs: [
      {
        q: "When should we start school readiness preparation?",
        a: "Ideally 6-12 months before school entry, but we can tailor programs for any timeline.",
      },
      {
        q: "Is this only for children with diagnosed conditions?",
        a: "No. Any child who would benefit from structured preparation for school expectations can participate.",
      },
    ],
    related: [
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
      { name: "Behavioural Intervention", path: "/services/therapy-programmes/behavioural" },
    ],
  },
  social: {
    id: "social",
    title: "Social Skills Training",
    tagline: "Building meaningful peer connections and social confidence.",
    iconName: "Users",
    intro: "Social Skills Training provides structured opportunities for children to learn and practice essential interpersonal skills in a supportive group setting. Sessions target the nuances of social communication that many neurodivergent children find challenging.",
    whoBenefits: [
      "Children with Autism Spectrum Disorder",
      "Children with Social Communication Disorder",
      "Children struggling with peer relationships",
      "Children with anxiety in social situations",
    ],
    sessionFlow: [
      "Welcome & Check-in: Emotional awareness and group connection.",
      "Skill Lesson: Explicit teaching of a specific social skill with modeling.",
      "Guided Practice: Structured activities and role-plays with therapist support.",
      "Free Play Application: Naturalistic practice with therapist facilitation.",
      "Parent Debrief: Strategies for home and community generalization.",
    ],
    goals: [
      "Develop conversation skills (initiation, maintenance, topic shifting).",
      "Improve non-verbal communication (eye contact, body language, facial expressions).",
      "Enhance perspective-taking and empathy.",
      "Build friendship skills (sharing, compromise, conflict resolution).",
      "Reduce social anxiety and increase group participation.",
    ],
    evidenceBase: "Social skills group interventions show measurable improvements in peer acceptance, social knowledge, and reduced loneliness for children with social communication challenges.",
    faqs: [
      {
        q: "What age groups do you serve?",
        a: "We offer groups for preschool (4-6), early primary (7-9), and upper primary (10-12) age ranges.",
      },
      {
        q: "How are groups formed?",
        a: "Children are grouped by age, developmental level, and social goals to ensure optimal peer matching.",
      },
    ],
    related: [
      { name: "Speech & Language Therapy", path: "/services/therapy-programmes/speech" },
      { name: "Behavioural Intervention", path: "/services/therapy-programmes/behavioural" },
    ],
  },
  executive: {
    id: "executive",
    title: "Executive Function Coaching",
    tagline: "Developing planning, organization, and self-management skills.",
    iconName: "Brain",
    intro: "Executive Function Coaching provides targeted support for children and adolescents who struggle with the mental processes needed to plan, focus attention, remember instructions, and juggle multiple tasks. This service bridges the gap between cognitive potential and daily performance.",
    whoBenefits: [
      "Children with ADHD or executive dysfunction",
      "Students struggling with organization and time management",
      "Children with planning and prioritization difficulties",
      "Adolescents preparing for increased academic demands",
    ],
    sessionFlow: [
      "Skill Assessment: Identifying specific executive function strengths and weaknesses.",
      "Strategy Instruction: Teaching concrete tools (planners, checklists, chunking techniques).",
      "Guided Application: Practicing strategies with real school tasks and responsibilities.",
      "Reflection & Adjustment: Reviewing effectiveness and refining approaches.",
      "Home/School Coordination: Aligning supports across environments.",
    ],
    goals: [
      "Improve task initiation and reduce procrastination.",
      "Enhance planning, prioritization, and time estimation.",
      "Strengthen working memory and attention control.",
      "Develop organizational systems for materials and information.",
      "Build self-monitoring and metacognitive awareness.",
    ],
    evidenceBase: "Executive function coaching based on cognitive-behavioral principles demonstrates significant improvements in academic performance, homework completion, and independent functioning.",
    faqs: [
      {
        q: "At what age is executive function coaching appropriate?",
        a: "Typically ages 8+, when children have sufficient metacognitive capacity to engage with strategies. Younger children benefit more from parent-mediated approaches.",
      },
      {
        q: "Is this different from tutoring?",
        a: "Yes. Tutoring teaches subject content; executive function coaching teaches *how to learn* and *how to manage* learning tasks across all subjects.",
      },
    ],
    related: [
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
      { name: "Behavioural Intervention", path: "/services/therapy-programmes/behavioural" },
    ],
  },
  special: {
    id: "special",
    title: "Special Education",
    tagline: "Individualized academic instruction for diverse learning needs.",
    iconName: "BookOpen",
    intro: "Special Education provides customized academic instruction tailored to each child's unique learning profile. Our special educators work on specific academic goals using evidence-based instructional strategies, accommodations, and modifications to help children access the curriculum meaningfully.",
    whoBenefits: [
      "Children with Specific Learning Disabilities (Dyslexia, Dyscalculia, Dysgraphia)",
      "Children with Intellectual Disabilities",
      "Children needing curriculum modifications or alternative pathways",
      "Children with uneven academic profiles",
    ],
    sessionFlow: [
      "Academic Assessment: Baseline reading, writing, and math skills evaluation.",
      "Individualized Goal Setting: Specific, measurable academic targets.",
      "Direct Instruction: Systematic, explicit teaching using multisensory methods.",
      "Progress Monitoring: Frequent data collection to guide instruction.",
      "Parent/School Collaboration: Sharing strategies and progress.",
    ],
    goals: [
      "Close academic gaps in reading, writing, and mathematics.",
      "Develop compensatory strategies for learning differences.",
      "Build academic confidence and self-advocacy skills.",
      "Support access to grade-level content through accommodations.",
    ],
    evidenceBase: "Special education interventions using explicit, systematic, and multisensory instruction are the gold standard for addressing specific learning disabilities and academic delays.",
    faqs: [
      {
        q: "How does this differ from regular tutoring?",
        a: "Special education uses specialized instructional methodologies (e.g., Orton-Gillingham for dyslexia) and addresses underlying processing deficits, not just content gaps.",
      },
      {
        q: "Do you coordinate with school IEPs?",
        a: "Yes. We align our goals with school Individualized Education Programs and provide progress data for IEP reviews.",
      },
    ],
    related: [
      { name: "Cognitive Development Therapy", path: "/services/therapy-programmes/cognitive" },
      { name: "School Consultation", path: "/services/educational/consultation" },
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
  psychoeducational: {
    id: "psychoeducational",
    title: "Psychoeducational Assessment",
    tagline: "In-depth evaluation of learning, cognition, and academic achievement.",
    covers: [
      "Cognitive Ability (IQ) Testing",
      "Academic Achievement (Reading, Writing, Mathematics)",
      "Information Processing (Memory, Attention, Processing Speed)",
      "Executive Functioning Assessment",
      "Social-Emotional & Behavioral Screening",
    ],
    process: [
      "Parent/Teacher Interviews & Rating Scales (developmental, behavioral, academic history).",
      "Cognitive Assessment (standardized intelligence testing).",
      "Academic Achievement Testing (standardized reading, writing, math measures).",
      "Supplemental Testing: Attention, memory, executive function as needed.",
      "Integrated Report Writing & Feedback Session with parents and school (if requested).",
    ],
    deliverables: [
      "Comprehensive Psychoeducational Report with standard scores and percentile ranks.",
      "Specific Learning Disability diagnosis determination (if criteria met).",
      "Detailed recommendations for school accommodations (IEP/504), interventions, and home support.",
      "Referral recommendations for additional services (OT, Speech, Counseling).",
    ],
    checklist: [
      "Struggling significantly with reading, writing, or math despite effort.",
      "Discrepancy between cognitive ability and academic performance.",
      "Attention, organization, or memory difficulties affecting schoolwork.",
      "School requesting formal evaluation for special education eligibility.",
    ],
    faqs: [
      {
        q: "What age is this assessment for?",
        a: "Typically ages 6 through young adulthood (college-age).",
      },
      {
        q: "Does this assessment diagnose dyslexia/dyscalculia?",
        a: "Yes. Psychoeducational assessment is the standard for diagnosing specific learning disabilities.",
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
  fba: {
    id: "fba",
    title: "Functional Behaviour Assessment (FBA)",
    tagline: "Systematic analysis to understand the function of challenging behaviour.",
    covers: [
      "Indirect Assessment (interviews, rating scales, record review)",
      "Direct Observation (ABC data collection across settings)",
      "Functional Analysis (controlled manipulation of antecedents/consequences)",
      "Hypothesis Generation (identifying behaviour function: escape, attention, tangible, sensory)",
      "Function-Based Intervention Planning",
    ],
    process: [
      "Records Review & Interviews: Gathering history from parents, teachers, and providers.",
      "Direct Observation Sessions: Multiple observations across settings and times.",
      "ABC Data Analysis: Identifying patterns in antecedents, behaviors, and consequences.",
      "Functional Analysis (if warranted): Controlled assessment to confirm hypothesis.",
      "Report & BIP Development: Comprehensive report with function-based intervention plan.",
    ],
    deliverables: [
      "Detailed FBA Report with data summaries and functional hypothesis.",
      "Function-Based Behavior Intervention Plan (BIP).",
      "Data collection tools for ongoing monitoring.",
      "Training plan for implementation fidelity.",
    ],
    checklist: [
      "Challenging behavior occurring frequently across settings.",
      "Previous interventions have been ineffective.",
      "Need for formal behavior plan for school (IEP/BIP requirement).",
      "Behavior poses safety risk to self or others.",
    ],
    faqs: [
      {
        q: "How is FBA different from a general behavioural assessment?",
        a: "FBA is a specific, systematic process mandated for students with disabilities exhibiting challenging behaviors. It includes controlled functional analysis to experimentally verify the behavior's function.",
      },
      {
        q: "How long does an FBA take?",
        a: "Typically 2-4 weeks depending on observation frequency and complexity.",
      },
    ],
  },
  functional: {
    id: "functional",
    title: "Functional Analysis",
    tagline: "Experimental verification of behaviour function under controlled conditions.",
    covers: [
      "Analogue Functional Analysis Conditions (Attention, Escape, Tangible, Control)",
      "Synthesized Contingency Analyses",
      "Brief Functional Analysis Formats",
      "Latency-Based Functional Analysis",
      "Trial-Based Functional Analysis",
    ],
    process: [
      "Brief Assessment & Screening: Determining appropriateness for functional analysis.",
      "Session Setup: Controlled environment with trained therapists and safety protocols.",
      "Condition Testing: Systematic exposure to test and control conditions.",
      "Data Analysis: Visual inspection and statistical analysis of behavior rates.",
      "Function Confirmation: Verifying maintaining variables for intervention design.",
    ],
    deliverables: [
      "Functional Analysis Report with graphed data and visual analysis.",
      "Confirmed behavioural function(s) with high certainty.",
      "Precision intervention recommendations based on verified function.",
      "Safety and ethical compliance documentation.",
    ],
    checklist: [
      "Severe challenging behavior with unclear function.",
      "High-risk behaviors requiring precise intervention targeting.",
      "Research or clinical need for experimental functional verification.",
      "Previous indirect assessments yielded inconclusive results.",
    ],
    faqs: [
      {
        q: "Is functional analysis safe?",
        a: "Yes, when conducted by trained professionals with strict safety protocols, brief functional analysis conditions are safe and ethically mandated for severe behaviors.",
      },
      {
        q: "How does this differ from FBA?",
        a: "Functional Analysis is the experimental component of FBA where conditions are systematically manipulated to demonstrate causal relationships. FBA is the broader assessment process.",
      },
    ],
  },
  communication: {
    id: "communication",
    title: "Speech & Language Assessment",
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
  occupational: {
    id: "occupational",
    title: "Occupational Therapy Assessment",
    tagline: "Comprehensive evaluation of motor, sensory, and functional daily living skills.",
    covers: [
      "Fine Motor Skills (grasping, manipulation, handwriting, tool use)",
      "Gross Motor Skills (balance, coordination, postural control, praxis)",
      "Sensory Processing (registration, modulation, discrimination across all systems)",
      "Visual-Motor Integration (eye-hand coordination, visual perception)",
      "Activities of Daily Living (self-care, feeding, dressing, hygiene)",
    ],
    process: [
      "Parent Interview & Sensory Profile: Detailed developmental and sensory history.",
      "Standardized Motor Testing: Fine and gross motor standardized assessments.",
      "Clinical Observations: Structured and unstructured play observations.",
      "Sensory Processing Assessment: Standardized sensory profiles and clinical observation.",
      "ADL Assessment: Functional evaluation of daily living skills.",
      "Report & Feedback: Comprehensive findings with therapy recommendations.",
    ],
    deliverables: [
      "Comprehensive OT Evaluation Report with standardized scores.",
      "Sensory Processing Profile with quadrant analysis.",
      "Fine/Gross Motor Developmental Age Equivalents.",
      "ADL Independence Levels and Targeted Goals.",
      "Therapy Recommendations (frequency, duration, focus areas).",
    ],
    checklist: [
      "Difficulty with handwriting, scissors, buttons, or utensils.",
      "Clumsiness, poor balance, frequent falls, or awkward movement patterns.",
      "Over/under-sensitivity to sounds, textures, movement, or touch.",
      "Struggles with self-care tasks (dressing, feeding, toileting).",
      "Difficulty with visual tasks (puzzles, copying, tracking).",
    ],
    faqs: [
      {
        q: "What standardized tests do you use?",
        a: "We use the BOT-2, VMI, Sensory Profile 2, PDMS-2, and other gold-standard instruments based on the child's age and concerns.",
      },
      {
        q: "Can this assessment diagnose sensory processing disorder?",
        a: "While sensory processing differences are identified, formal diagnosis requires multidisciplinary correlation. We provide detailed sensory profiles for intervention planning.",
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
  workshops: {
    id: "workshops",
    title: "Workshops and Seminars",
    tagline: "Focused skill-building sessions on specialized topics.",
    modules: [
      "AAC Implementation Workshop — Hands-on training with communication devices and apps.",
      "Sensory Diet Design — Creating individualized sensory regulation plans.",
      "Toileting Independence Workshop — Step-by-step protocols for toilet training.",
      "Transition Planning Seminar — Preparing for school, adolescence, and adulthood transitions.",
    ],
    audience: "Parents, educators, therapists, and caregivers seeking targeted skill development.",
    format: "Half-day or full-day intensive workshops with hands-on practice and resource packets.",
    outcomes: [
      "Immediate practical skills for specific challenges.",
      "Take-home resources and implementation guides.",
      "Certificate of completion for professional development records.",
    ],
  },
  cpd: {
    id: "cpd",
    title: "Continuing Professional Development (CPD)",
    tagline: "Accredited ongoing education for clinical excellence.",
    modules: [
      "Quarterly Clinical Grand Rounds — Case presentations and interdisciplinary discussion.",
      "Journal Club — Critical appraisal of current developmental research.",
      "Supervision Groups — Structured peer supervision for clinical decision-making.",
      "Annual Conference — Multi-day event with international speakers and workshops.",
    ],
    audience: "Licensed therapists, psychologists, BCBAs, and clinical supervisors.",
    format: "Hybrid (in-person and virtual) sessions with CEU credits available.",
    outcomes: [
      "Maintenance of licensure and certification requirements.",
      "Current knowledge of evidence-based practices.",
      "Professional networking and collaboration opportunities.",
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

export const coreValues = [
  "Integrity",
  "Excellence",
  "Professionalism",
  "Compassion",
  "Accountability",
  "Collaboration",
  "Child- and Family-Centred Practice",
  "Respect",
  "Confidentiality",
  "Inclusion",
  "Evidence-Based Practice",
  "Continuous Learning",
];

export const parentResources = [
  "Parent Guides",
  "Reinforcement Plan",
  "Developmental Milestones",
  "Home Activity Sheets",
  "Behaviour Support Strategies",
  "Articles",
  "Frequently Asked Questions",
];

export const faqs = [
  { q: "What is Applied Behaviour Analysis (ABA)?", a: "ABA is a scientifically validated therapy focused on understanding and improving specific behaviors through positive reinforcement and structured teaching methods." },
  { q: "How do I know if my child needs an assessment?", a: "If you have concerns about your child's development, communication, behavior, or learning, an assessment can provide clarity. Common signs include delayed milestones, difficulty with social interaction, challenging behaviors, or academic struggles." },
  { q: "What happens during an assessment?", a: "Assessments involve parent interviews, direct observation of your child, standardized testing, and a feedback session to discuss results and recommendations." },
  { q: "Do parents participate in therapy?", a: "Yes, parent participation is essential. We provide coaching and training so strategies can be implemented at home for maximum progress." },
  { q: "How is progress measured?", a: "We use data-based decision making with continuous data collection during sessions, regular progress reviews, and standardized re-assessments at intervals." },
  { q: "Do you provide school-based services?", a: "Yes, we offer school consultation, classroom observations, teacher training, and IEP collaboration." },
  { q: "How do I book an appointment?", a: "You can book a free consultation through our booking page, call us at +234 812 345 6789, or email info@tlcconsult.com." },
];

export const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin by understanding your concerns, gathering background information, and discussing your child's strengths, challenges, and developmental history."
  },
  {
    step: 2,
    title: "Comprehensive Assessment",
    description: "Our multidisciplinary team conducts appropriate assessments to understand your child's developmental, behavioural, communication, academic, and functional needs."
  },
  {
    step: 3,
    title: "Individualised Goal Development",
    description: "Assessment findings are translated into meaningful, measurable goals that reflect your child's needs and your family's priorities."
  },
  {
    step: 4,
    title: "Evidence-Based Intervention",
    description: "Intervention programmes are implemented using evidence-based practices tailored to your child's learning profile."
  },
  {
    step: 5,
    title: "Parent Collaboration",
    description: "Parents and caregivers receive ongoing coaching, practical strategies, and regular feedback to promote skill generalisation across settings."
  },
  {
    step: 6,
    title: "Data-Based Decision Making",
    description: "We continuously collect and analyse data to evaluate progress and adjust intervention as needed."
  },
  {
    step: 7,
    title: "Progress Reviews",
    description: "Regular reviews ensure that goals remain appropriate, measurable, and responsive to your child's development."
  },
];