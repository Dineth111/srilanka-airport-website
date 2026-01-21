import { Megaphone, AlertCircle, CalendarDays, Plane, Info } from 'lucide-react';

export const newsItems = [
	{
		id: 'new-terminal',
		title: 'New Terminal Opening',
		date: '2026-02-15',
		icon: Plane,
		summary: 'Terminal 2 will open for international departures on February 15, 2026. Check your airline for gate assignments.',
		details: 'The new terminal features expanded check-in counters, lounges, and improved security screening. All Emirates and Qatar Airways flights will depart from Terminal 2 starting February 15.',
	},
	{
		id: 'covid-update',
		title: 'COVID-19 Travel Update',
		date: '2026-01-10',
		icon: AlertCircle,
		summary: 'Masks are no longer required in public areas, but recommended during peak hours. Health screening remains in place for arrivals.',
		details: 'Passengers arriving from select countries may be subject to temperature checks and health declarations. For latest requirements, see the Travel Requirements page.',
	},
	{
		id: 'parking-changes',
		title: 'Parking Zone Changes',
		date: '2026-01-05',
		icon: Info,
		summary: 'Long-term parking has moved to Zone C. Shuttle service is available every 15 minutes from all zones.',
		details: 'Zone C offers covered parking and direct shuttle access to both terminals. Short-term parking remains in Zone A and B.',
	},
	{
		id: 'holiday-schedule',
		title: 'Holiday Flight Schedule',
		date: '2025-12-20',
		icon: CalendarDays,
		summary: 'Expect increased passenger volume and possible delays from December 20 to January 5. Arrive early and check flight status.',
		details: 'Airlines recommend arriving 3 hours before departure during the holiday period. Use the Flights page for live updates.',
	},
	{
		id: 'lost-baggage',
		title: 'Lost Baggage Hotline',
		date: '2025-12-01',
		icon: Megaphone,
		summary: 'A dedicated hotline is now available for lost baggage: +94 11 226 3010. See Lost & Found for more info.',
		details: 'The hotline operates 24/7. For lost items in the terminal, visit the Lost & Found counter in Arrivals.',
	},
];
