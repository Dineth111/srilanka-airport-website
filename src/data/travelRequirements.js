import { FileUser, Shield, FileText, AlertTriangle, Plane, Ban } from 'lucide-react';

export const travelRequirementsAccordionItems = [
  {
    id: 'passport-visa',
    title: 'Passport & Visa',
    subtitle: 'Entry requirements for Sri Lanka',
    icon: FileUser,
    items: [
      'All travelers must carry a valid passport with at least 6 months validity.',
      'Most visitors require a visa or Electronic Travel Authorization (ETA) before arrival.',
      'Check official government sites for up-to-date visa requirements.',
    ],
  },
  {
    id: 'security-screening',
    title: 'Security & screening',
    subtitle: 'What to expect at checkpoints',
    icon: Shield,
    items: [
      'Liquids in cabin baggage must be in containers of 100ml or less, placed in a clear resealable bag.',
      'Remove laptops and large electronics from bags for screening.',
      'Follow staff instructions and signage for a smooth process.',
    ],
  },
  {
    id: 'prohibited-items',
    title: 'Prohibited & restricted items',
    subtitle: 'What not to pack',
    icon: Ban,
    items: [
      'Sharp objects, flammable materials, and certain tools are not allowed in cabin baggage.',
      'Check with your airline for a full list of restricted items.',
      'Medicines should be accompanied by prescriptions if required.',
    ],
  },
  {
    id: 'documents',
    title: 'Travel documents',
    subtitle: 'Boarding pass, ID, and more',
    icon: FileText,
    items: [
      'Keep your boarding pass and ID/passport ready for inspection.',
      'Print or download your travel documents before arriving at the airport.',
      'For minors, carry birth certificates or consent letters if traveling alone.',
    ],
  },
  {
    id: 'alerts',
    title: 'Travel alerts & health',
    subtitle: 'Latest advisories',
    icon: AlertTriangle,
    items: [
      'Check for travel advisories and health requirements before departure.',
      'Some destinations may require COVID-19 vaccination or test certificates.',
      'Monitor official airport and airline channels for updates.',
    ],
  },
  {
    id: 'connections',
    title: 'Transit & connections',
    subtitle: 'Changing flights in Colombo',
    icon: Plane,
    items: [
      'Follow signs for transfer desks and transit areas.',
      'Allow sufficient time between connecting flights.',
      'Visa requirements may apply for leaving the transit area.',
    ],
  },
];
