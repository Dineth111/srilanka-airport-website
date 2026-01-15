import { Plane, Shield, Luggage, DoorOpen } from 'lucide-react';

export const passengerGuideSections = [
  {
    id: 'before-you-fly',
    title: 'Before You Fly',
    subtitle: 'Documents, baggage rules and planning',
    icon: Plane,
    items: [
      'Check passport/visa requirements well in advance.',
      'Review baggage allowances and restricted items.',
      'Arrive early: international flights often require extra time.',
      'Keep essential documents accessible during check-in and security.',
    ],
  },
  {
    id: 'at-airport',
    title: 'At the Airport',
    subtitle: 'Check-in, security and boarding flow',
    icon: Shield,
    items: [
      'Follow wayfinding signage to your airline check-in counters.',
      'Prepare for security screening: liquids, laptops, and metal items.',
      'Monitor display boards for gate changes and boarding calls.',
      'Use assistance services if you need mobility or family support.',
    ],
  },
  {
    id: 'arrival-info',
    title: 'Arrival Information',
    subtitle: 'Immigration, baggage claim and onward travel',
    icon: Luggage,
    items: [
      'Proceed to immigration with travel documents ready.',
      'Collect baggage and report issues to the baggage service desk.',
      'Confirm customs requirements for declared goods.',
      'Use official taxi/transport services for safer onward travel.',
    ],
  },
  {
    id: 'departure-procedures',
    title: 'Departure Procedures',
    subtitle: 'Security checks and gate boarding',
    icon: DoorOpen,
    items: [
      'Ensure boarding pass and ID are ready at checkpoints.',
      'Allow time for security and any secondary screening.',
      'Be at the gate before the final boarding call.',
      'Keep valuables in carry-on luggage.',
    ],
  },
];
