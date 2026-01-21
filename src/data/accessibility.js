import { Accessibility, ShieldCheck, Toilet, ParkingSquare, PhoneCall } from 'lucide-react';

export const accessibilityAccordionItems = [
  {
    id: 'wheelchair',
    title: 'Wheelchair Assistance',
    subtitle: 'Support for mobility needs',
    icon: Accessibility,
    items: [
      'Request wheelchair support at check-in or via your airline.',
      'Staff are available to help with boarding, deplaning, and moving through the terminal.'
    ]
  },
  {
    id: 'priority',
    title: 'Priority Services',
    subtitle: 'Fast-track and dedicated counters',
    icon: ShieldCheck,
    items: [
      'Dedicated counters for passengers with reduced mobility.',
      'Fast-track lanes for special needs.'
    ]
  },
  {
    id: 'restrooms',
    title: 'Accessible Restrooms',
    subtitle: 'Facilities for all needs',
    icon: Toilet,
    items: [
      'Accessible restrooms equipped for wheelchair users.',
      'Extra assistance available in all terminals.'
    ]
  },
  {
    id: 'parking',
    title: 'Accessible Parking',
    subtitle: 'Reserved spaces near entrances',
    icon: ParkingSquare,
    items: [
      'Reserved parking spaces close to terminal entrances.',
      'Valid accessibility permit required.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact & Support',
    subtitle: 'Get help anytime',
    icon: PhoneCall,
    items: [
      'Call +94 11 226 4000 for special assistance.',
      'Visit the help desk in Arrivals.'
    ]
  }
];
