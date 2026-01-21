import {
  Wifi,
  BaggageClaim,
  Shield,
  Phone,
  FileText,
  Clock,
  MapPin,
  BadgeHelp,
} from 'lucide-react';

export const faqAccordionItems = [
  {
    id: 'wifi',
    title: 'Is there free Wi‑Fi at the airport?',
    subtitle: 'Connect in a few steps',
    icon: Wifi,
    items: [
      "Select the network 'BIA_Free_WiFi' from your device.",
      'Complete the login prompt (if shown) and accept terms.',
      'If you have issues, visit the Information Desk for assistance.',
    ],
  },
  {
    id: 'arrival-time',
    title: 'How early should I arrive?',
    subtitle: 'Recommended arrival times',
    icon: Clock,
    items: [
      'International departures: arrive ~3 hours before departure.',
      'Domestic / regional flights: arrive ~2 hours before departure.',
      'Allow extra time during peak travel seasons and holidays.',
    ],
  },
  {
    id: 'lost-baggage',
    title: 'Where do I report lost baggage?',
    subtitle: 'Baggage services + airline desk',
    icon: BaggageClaim,
    items: [
      "Report missing checked baggage at your airline's baggage services counter.",
      'Keep your baggage tag and boarding pass ready.',
      'If you already left the airport, contact your airline with your flight number.',
    ],
  },
  {
    id: 'security',
    title: 'What items are restricted in cabin baggage?',
    subtitle: 'Security screening basics',
    icon: Shield,
    items: [
      'Liquids typically must be in small containers and placed in a clear bag.',
      'Sharp objects and certain tools are not allowed in cabin baggage.',
      'When unsure, pack the item in checked baggage or ask your airline.',
    ],
  },
  {
    id: 'directions',
    title: 'How do I find my terminal and check‑in zone?',
    subtitle: 'Use flight + airline information',
    icon: MapPin,
    items: [
      'Check your airline and flight number on the Flights page.',
      'Follow terminal signage and staff directions at the entrance.',
      'If your flight is codeshare, confirm the operating airline.',
    ],
  },
];

export const lostFoundAccordionItems = [
  {
    id: 'lost-items',
    title: 'Lost items in the terminal',
    subtitle: 'Phones, passports, wallets, and more',
    icon: BadgeHelp,
    items: [
      'Visit the Lost & Found counter (Arrivals area) as soon as possible.',
      'Provide a clear description: item type, color, brand, and where you last saw it.',
      'Bring an ID (passport / NIC) to claim items.',
    ],
  },
  {
    id: 'lost-baggage',
    title: 'Lost or delayed checked baggage',
    subtitle: 'Handled by your airline',
    icon: BaggageClaim,
    items: [
      "Report at your airline's baggage services desk before exiting Arrivals.",
      'Keep your baggage receipt / tag number.',
      'Request a reference number (PIR) for follow-up.',
    ],
  },
  {
    id: 'documents',
    title: 'Lost travel documents',
    subtitle: 'Passport, visa, boarding pass',
    icon: FileText,
    items: [
      'Contact airport security and your airline immediately.',
      'For passports: contact your embassy/consulate for guidance.',
      'If you suspect theft, report it to authorities as advised by staff.',
    ],
  },
  {
    id: 'contact',
    title: 'Who to contact',
    subtitle: 'Fastest ways to get help',
    icon: Phone,
    items: [
      'Use the Contact page for general support requests.',
      'For urgent matters, use the airport hotline listed on Contact.',
      'For baggage, always contact the operating airline first.',
    ],
  },
];
