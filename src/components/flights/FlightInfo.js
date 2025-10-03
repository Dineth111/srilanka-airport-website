import React, { useState } from 'react';

const FlightInfo = () => {
  const [flightType, setFlightType] = useState('arrivals');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('today');
  
  // Sample flight data
  const flights = {
    arrivals: [
      { id: 1, flightNo: 'UL104', airline: 'SriLankan Airlines', origin: 'Singapore', status: 'Landed', time: '10:30', terminal: 'A', date: '2023-07-15' },
      { id: 2, flightNo: 'EK648', airline: 'Emirates', origin: 'Dubai', status: 'On Time', time: '11:45', terminal: 'B', date: '2023-07-15' },
      { id: 3, flightNo: 'QR662', airline: 'Qatar Airways', origin: 'Doha', status: 'Delayed', time: '12:15', terminal: 'A', date: '2023-07-15' },
      { id: 4, flightNo: 'TK730', airline: 'Turkish Airlines', origin: 'Istanbul', status: 'On Time', time: '14:20', terminal: 'B', date: '2023-07-15' },
      { id: 5, flightNo: 'SQ308', airline: 'Singapore Airlines', origin: 'Singapore', status: 'On Time', time: '16:45', terminal: 'A', date: '2023-07-16' },
      { id: 6, flightNo: 'CX611', airline: 'Cathay Pacific', origin: 'Hong Kong', status: 'Delayed', time: '18:30', terminal: 'B', date: '2023-07-16' },
      { id: 7, flightNo: 'BA034', airline: 'British Airways', origin: 'London', status: 'On Time', time: '20:15', terminal: 'A', date: '2023-07-16' },
      { id: 8, flightNo: 'AI281', airline: 'Air India', origin: 'Delhi', status: 'On Time', time: '22:00', terminal: 'B', date: '2023-07-16' }
    ],
    departures: [
      { id: 1, flightNo: 'UL105', airline: 'SriLankan Airlines', destination: 'Singapore', status: 'Boarding', time: '11:00', terminal: 'A', gate: '12', date: '2023-07-15' },
      { id: 2, flightNo: 'EK649', airline: 'Emirates', destination: 'Dubai', status: 'On Time', time: '13:30', terminal: 'B', gate: '5', date: '2023-07-15' },
      { id: 3, flightNo: 'QR663', airline: 'Qatar Airways', destination: 'Doha', status: 'Delayed', time: '15:45', terminal: 'A', gate: '8', date: '2023-07-15' },
      { id: 4, flightNo: 'TK731', airline: 'Turkish Airlines', destination: 'Istanbul', status: 'Gate Closed', time: '16:10', terminal: 'B', gate: '3', date: '2023-07-15' },
      { id: 5, flightNo: 'SQ309', airline: 'Singapore Airlines', destination: 'Singapore', status: 'On Time', time: '09:30', terminal: 'A', gate: '14', date: '2023-07-16' },
      { id: 6, flightNo: 'CX612', airline: 'Cathay Pacific', destination: 'Hong Kong', status: 'On Time', time: '11:45', terminal: 'B', gate: '7', date: '2023-07-16' },
      { id: 7, flightNo: 'BA035', airline: 'British Airways', destination: 'London', status: 'Delayed', time: '14:20', terminal: 'A', gate: '10', date: '2023-07-16' },
      { id: 8, flightNo: 'AI282', airline: 'Air India', destination: 'Delhi', status: 'On Time', time: '17:00', terminal: 'B', gate: '2', date: '2023-07-16' }
    ]
  };

  // Filter flights based on search query and date
  const filteredFlights = flights[flightType].filter(flight => {
    const matchesSearch = 
      flight.flightNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (flightType === 'arrivals' ? 
        flight.origin.toLowerCase().includes(searchQuery.toLowerCase()) :
        flight.destination.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDate = dateFilter === 'all' || 
      (dateFilter === 'today' && flight.date === '2023-07-15') ||
      (dateFilter === 'tomorrow' && flight.date === '2023-07-16');
    
    return matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Flight Information</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Real-time flight information for arrivals and departures at Sri Lanka's international airports
          </p>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            {/* Flight type toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex rounded-md shadow-sm mb-4 sm:mb-0">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                    flightType === 'arrivals' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setFlightType('arrivals')}
                >
                  Arrivals
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                    flightType === 'departures' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setFlightType('departures')}
                >
                  Departures
                </button>
              </div>

              {/* Date filter */}
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    dateFilter === 'today' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setDateFilter('today')}
                >
                  Today
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    dateFilter === 'tomorrow' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setDateFilter('tomorrow')}
                >
                  Tomorrow
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                    dateFilter === 'all' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setDateFilter('all')}
                >
                  All
                </button>
              </div>
            </div>

            {/* Search input */}
            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder={`Search by flight number, airline or ${flightType === 'arrivals' ? 'origin' : 'destination'}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Flight table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Flight
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Airline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {flightType === 'arrivals' ? 'Origin' : 'Destination'}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Terminal
                  </th>
                  {flightType === 'departures' && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gate
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFlights.length > 0 ? (
                  filteredFlights.map((flight) => (
                    <tr key={flight.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {flight.flightNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.airline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flightType === 'arrivals' ? flight.origin : flight.destination}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.terminal}
                      </td>
                      {flightType === 'departures' && (
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {flight.gate}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${flight.status === 'On Time' ? 'bg-green-100 text-green-800' : 
                            flight.status === 'Delayed' ? 'bg-yellow-100 text-yellow-800' :
                            flight.status === 'Landed' || flight.status === 'Boarding' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'}`}>
                          {flight.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={flightType === 'arrivals' ? 6 : 7} className="px-6 py-4 text-center text-sm text-gray-500">
                      No flights found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;