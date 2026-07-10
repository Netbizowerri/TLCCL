// Centralized image asset map (authentic stock photography via Pexels CDN).
// Using remote URLs keeps the build lightweight and loads real, trust-building imagery.

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const img = {
  // Homepage
  heroCompassionateCare: px(7943505, 1200, 900), // Mother kissing child with Down syndrome - shows true compassionate care
  heroTherapist: px(8653951, 900, 1100),
  bentoTherapy: px(8653974, 1100, 800),
  bentoAssessment: px(7653084, 900, 700),
  bentoTraining: px(8466772, 900, 700),
  ctaHappy: px(17022785, 1600, 900),
  familyEmbrace: px(7880802, 1200, 800),

  // Therapy programmes
  therapy: {
    aba: px(8653974, 800, 600),
    speech: px(8653944, 800, 600),
    occupational: px(8504467, 800, 600),
    behavioural: px(8653945, 800, 600),
    cognitive: px(12944620, 800, 600),
    "social-skills": px(17022785, 800, 600),
  },

  // Assessments
  assessment: px(7653084, 1200, 800),
  assessmentCards: {
    developmental: px(8654102, 800, 600),
    behavioural: px(8653945, 800, 600),
    communication: px(8653944, 800, 600),
    functional: px(8504467, 800, 600),
  },

  // Training
  training: {
    parents: px(7880620, 800, 600),
    schools: px(8466772, 800, 600),
    professionals: px(5327649, 800, 600),
  },

  // Conditions
  conditions: {
    autism: px(8653974, 800, 600),
    adhd: px(5215553, 800, 600),
    "intellectual-disabilities": px(12944620, 800, 600),
    "global-developmental-delay": px(3662628, 800, 600),
    "speech-difficulties": px(8653944, 800, 600),
    "learning-behavioural": px(8926900, 800, 600),
  },
  conditionsHero: px(8944896, 1600, 900),

  // About / misc
  aboutClinic: px(29752372, 1200, 800),
  aboutTeam: px(6129442, 1200, 800),
};

export type ImageKey = keyof typeof img;
