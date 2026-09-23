export const serviceData = {
  'occupational-safety': {
    title: 'Occupational Safety',
    intro: 'Practical safety management support to help organisations identify risk, strengthen controls and improve site performance.',
    points: ['Multidisciplinary risk assessment','HSE site management support','Safety strategy and operational planning','SHE file development','Occupational hygiene monitoring']
  },
  'occupational-health': {
    title: 'Occupational Health',
    intro: 'Structured occupational health support focused on prevention, monitoring and workforce health management.',
    points: ['Medical surveillance support','Pre-placement medical examination coordination','Periodic health screening','Transfer and exit medical examination support','Health risk assessment']
  },
  'environmental-management': {
    title: 'Environmental Management',
    intro: 'Environmental management services that support legal compliance, system integration and responsible operational practices.',
    points: ['Waste recovery','Environmental systems integration','Environmental Management Plan (EMP)','Environmental Impact Assessment (EIA)','Environmental compliance evaluation']
  },
  'hse-audit': {
    title: 'HSE Audit',
    intro: 'Independent review and structured improvement support for health, safety and environmental systems and workplace practices.',
    points: ['System and site review','Gap identification','Evidence-based findings','Corrective action planning','Follow-up support']
  },
  'risk-assessment': {
    title: 'Risk Assessment',
    intro: 'A structured approach to identifying hazards, understanding operational risk and defining practical controls.',
    points: ['Hazard identification','Likelihood and consequence review','Existing control evaluation','Recommended controls','Action tracking']
  },
  'hse-training': {
    title: 'HSE Training',
    intro: 'Training and capability-building support designed to strengthen workforce awareness, ownership and safe work practices.',
    points: ['HSE awareness','Safety leadership support','Workforce capability building','Operational safety coaching','Training documentation']
  },
  'iso-compliance': {
    title: 'ISO & Compliance Support',
    intro: 'Support for organisations building stronger HSE systems, documentation and readiness for formal management-system requirements.',
    points: ['Documentation support','HSE legislative compliance support','System readiness','Gap review','Implementation support']
  },
  'safetyculture-setup': {
    title: 'SafetyCulture Setup',
    intro: 'Support for organisations implementing digital inspection and safety workflows using SafetyCulture tools.',
    points: ['Initial setup support','Inspection workflow configuration','Checklist structure','User onboarding support','Digital reporting workflow']
  }
} as const;

export type ServiceSlug = keyof typeof serviceData;
