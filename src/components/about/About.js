import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Sri Lanka Airports</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your gateway to the pearl of the Indian Ocean
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Our History</h2>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-500 mb-4">
                  Sri Lanka's aviation history began in the early 20th century, with the establishment of the first airfield at Ratmalana in 1935. This marked the beginning of a new era in transportation for the island nation.
                </p>
                <p className="text-base text-gray-500 mb-4">
                  In 1967, Bandaranaike International Airport (BIA) was inaugurated in Katunayake, becoming the main international gateway to Sri Lanka. Over the decades, it has undergone several expansions and modernizations to meet the growing demands of international air travel.
                </p>
                <p className="text-base text-gray-500">
                  Today, Sri Lanka's airports serve millions of passengers annually, connecting the island to destinations across the globe and playing a vital role in the country's tourism and economic development.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Our Airports</h2>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Bandaranaike International Airport</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Located in Katunayake, 30km north of Colombo, BIA is Sri Lanka's primary international airport, handling over 10 million passengers annually.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Mattala Rajapaksa International Airport</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Situated in Hambantota in southern Sri Lanka, MRIA is the country's second international airport, designed to serve the southern and eastern regions.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">Ratmalana Airport</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Sri Lanka's first airport, now serving domestic flights and some regional international routes, located just south of Colombo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-500 mb-4">
                  Our mission is to provide world-class airport facilities and services that ensure safe, efficient, and comfortable travel experiences for all passengers.
                </p>
                <p className="text-base text-gray-500 mb-4">
                  We are committed to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base text-gray-500">
                  <li>Maintaining the highest standards of safety and security</li>
                  <li>Delivering exceptional customer service</li>
                  <li>Embracing innovation and technological advancement</li>
                  <li>Operating in an environmentally sustainable manner</li>
                  <li>Contributing to Sri Lanka's economic development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;