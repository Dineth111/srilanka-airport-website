import {
  ParkingCircle,
  ShoppingBag,
  HeartPulse,
  Accessibility,
  Armchair,
  Wifi,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';

export const servicesHighlights = [
  { id: 'lounges', title: 'Lounges', description: 'Comfortable lounges for business and leisure travellers.', icon: Armchair },
  { id: 'parking', title: 'Parking', description: 'Short and long stay parking with clear wayfinding.', icon: ParkingCircle },
  { id: 'dutyfree', title: 'Duty Free', description: 'International brands and local favourites.', icon: ShoppingBag },
];

export const services = [
  { id: 'lounges', title: 'Lounges', description: 'Quiet spaces with refreshments, seating and work zones.', icon: Armchair },
  { id: 'parking', title: 'Parking', description: 'Secure parking options with payment guidance and signage.', icon: ParkingCircle },
  { id: 'dutyfree', title: 'Duty Free', description: 'Retail shopping including souvenirs and essentials.', icon: ShoppingBag },
  { id: 'medical', title: 'Medical Services', description: 'First aid and medical assistance for passengers.', icon: HeartPulse },
  { id: 'assistance', title: 'Special Assistance', description: 'Support for reduced mobility and family travel needs.', icon: Accessibility },
  { id: 'wifi', title: 'Free Wi‑Fi', description: 'Reliable internet access across terminals.', icon: Wifi },
  { id: 'business', title: 'Business Facilities', description: 'Meeting spaces and work-friendly areas.', icon: Briefcase },
  { id: 'security', title: 'Safety & Security', description: 'Modern screening and safety-first operations.', icon: ShieldCheck },
];
