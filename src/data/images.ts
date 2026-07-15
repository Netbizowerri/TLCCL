// Centralized image asset map (authentic stock photography via Pexels CDN).
// Using remote URLs keeps the build lightweight and loads real, trust-building imagery.

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const img = {
  // Homepage
  heroCompassionateCare: px(7943505, 1200, 900), // Mother kissing child with Down syndrome - shows true compassionate care
  heroTherapist: px(8653951, 900, 1100),
  bentoTherapy: "https://i.ibb.co/5zhGsL7/TLCC-1.jpg",
  bentoAssessment: "https://i.ibb.co/kgdF67Y2/TLCC.jpg",
  bentoTraining: "https://i.ibb.co/qLymNR49/TLCC-2.jpg",
  ctaHappy: px(17022785, 1600, 900),
  familyEmbrace: px(7880802, 1200, 800),

  // Therapy programmes
  therapy: {
    aba: "https://i.ibb.co/vg07MBd/TLCC-7.jpg",
    speech: "https://i.ibb.co/GQCSgpTR/TLCC-8.jpg",
    occupational: "https://i.ibb.co/S7VN3zy5/TLCC-6.jpg",
    behavioural: "https://i.ibb.co/dwTk34SC/TLCC-9.jpg",
    cognitive: "https://i.ibb.co/ZzHNZH5c/TLCC-10.jpg",
    special: "https://i.ibb.co/cK8jW3vt/TLCC-11.jpg",
    early: "https://i.ibb.co/W45SB22p/TLCC-12.jpg",
    readiness: "https://i.ibb.co/v4JPnqQ0/TLCC-13.jpg",
    "social-skills": "https://i.ibb.co/qM1YjkpS/TLCC-14.jpg",
    executive: "https://i.ibb.co/whbCDhPw/TLCC-15.jpg",
  },

  // Assessments
  assessment: "https://i.ibb.co/kgdF67Y2/TLCC.jpg",
  assessmentCards: {
    developmental: px(8654102, 800, 600),
    behavioural: "https://i.ibb.co/x8221SDJ/TLCC-3.jpg",
    fba: "https://i.ibb.co/Mx9Hbtjn/TLCC-5.jpg",
    communication: px(8653944, 800, 600),
    functional: "https://i.ibb.co/v6MrKHFc/TLCC-4.jpg",
    occupational: "https://i.ibb.co/S7VN3zy5/TLCC-6.jpg",
  },

  // Educational services
  educational: {
    inclusive: "https://i.ibb.co/tMfmF8qh/TLCC-16.jpg",
    academic: "https://i.ibb.co/gbqyf2DW/TLCC-17.jpg",
    observation: "https://i.ibb.co/zhbBR5J1/TLCC-18.jpg",
    consultation: "https://i.ibb.co/Qjbsc5QS/TLCC-20.jpg",
    transition: "https://i.ibb.co/35XLpBxG/TLCC-21.jpg",
  },

  // Parent & family services
  parent: {
    behaviour: "https://i.ibb.co/XxRLW9fK/TLCC-22.jpg",
    home: "https://i.ibb.co/3yJQfVtz/TLCC-23.jpg",
    training: "https://i.ibb.co/S4trGkCP/TLCC-24.jpg",
    workshops: "https://i.ibb.co/rR2Vdt5T/TLCC-26.jpg",
  },

  // Professional services
  professional: {
    "staff-training": "https://i.ibb.co/1Yh636Yr/TLCC-27.jpg",
    mentorship: "https://i.ibb.co/k2CW352x/TLCC-28.jpg",
    supervision: "https://i.ibb.co/wNs9y4tk/TLCC-29.jpg",
    workshops: "https://i.ibb.co/Y4pYQS86/TLCC-30.jpg",
    "iep-support": "https://i.ibb.co/xSbhBHCx/TLCC-31.jpg",
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
  aboutClinic: "https://i.ibb.co/9mg19r5J/TLCC-Logo.jpg",
  aboutTeam: px(6129442, 1200, 800),
};

export type ImageKey = keyof typeof img;
