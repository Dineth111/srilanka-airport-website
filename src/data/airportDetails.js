import { IMAGES } from '../constants/images';

export const AIRPORT_DETAILS = {
  'bia': {
    name: 'Bandaranaike International Airport',
    code: 'CMB',
    location: 'Katunayake, Sri Lanka',
    image: IMAGES.AIRPORTS.BIA,
    description: 'Bandaranaike International Airport (BIA) is Sri Lanka’s primary international gateway serving major global routes and airline partners. Located in Katunayake, 32.5 km north of Colombo, it is the busiest air cargo and passenger hub in the country.',
    terminals: '1 Main Terminal (T2 under construction)',
    runways: '04/22 (3,350m)',
    stats: {
      passengers: '10M+',
      airlines: '25+',
      destinations: '45+'
    }
  },
  'mria': {
    name: 'Mattala Rajapaksa International Airport',
    code: 'HRI',
    location: 'Hambantota, Sri Lanka',
    image: IMAGES.AIRPORTS.MATTALA,
    description: 'Mattala Rajapaksa International Airport (MRIA) supports the Southern region with aviation infrastructure, logistics and passenger facilities. It serves as a key gateway to the Yala National Park and the southern tourist zones.',
    terminals: '1 Passenger Terminal',
    runways: '05/23 (3,500m)',
    stats: {
      passengers: '500K+',
      airlines: '5+',
      destinations: '10+'
    }
  },
  'ratmalana': {
    name: 'Ratmalana International Airport',
    code: 'RML',
    location: 'Ratmalana, Colombo',
    image: IMAGES.AIRPORTS.RATMALANA,
    description: 'Ratmalana Airport was Colombo’s first international airport. Today it serves domestic flights, corporate jets, and flight training schools, located just 15 km from Colombo City.',
    terminals: '1 Domestic/International',
    runways: '04/22 (1,833m)',
    stats: {
      passengers: '50K+',
      airlines: '3+',
      destinations: 'Domestic'
    }
  },
  'jaffna': {
    name: 'Jaffna International Airport',
    code: 'JAF',
    location: 'Palaly, Jaffna',
    image: IMAGES.AIRPORTS.JAFFNA,
    description: 'Jaffna International Airport connects the northern peninsula of Sri Lanka to India. It plays a vital role in the development of the northern region.',
    terminals: '1 Regional Terminal',
    runways: '05/23 (2,305m)',
    stats: {
      passengers: '20K+',
      airlines: '2',
      destinations: 'Chennai'
    }
  }
};
