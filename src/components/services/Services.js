import React from 'react';

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      title: 'Passenger Services',
      description: 'Comprehensive services designed to make your journey comfortable and convenient.',
      services: [
        {
          id: 101,
          name: 'VIP Lounges',
          description: 'Exclusive lounges offering premium amenities, refreshments, and a quiet space to work or relax before your flight.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )
        },
        {
          id: 102,
          name: 'Porter Services',
          description: 'Professional assistance with your luggage from the terminal entrance to check-in counters or from baggage claim to your transport.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          )
        },
        {
          id: 103,
          name: 'Special Assistance',
          description: 'Dedicated support for passengers with reduced mobility, families with young children, and elderly travelers.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 2,
      title: 'Shopping & Dining',
      description: 'Explore a variety of retail outlets and dining options throughout the airport.',
      services: [
        {
          id: 201,
          name: 'Duty Free Shopping',
          description: 'Wide range of international brands and local products at tax-free prices, including perfumes, cosmetics, liquor, and souvenirs.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          )
        },
        {
          id: 202,
          name: 'Restaurants & Cafés',
          description: 'Various dining options offering local and international cuisine, from quick snacks to full-service restaurants.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 203,
          name: 'Convenience Stores',
          description: 'Shops offering travel essentials, snacks, reading materials, and basic necessities for your journey.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 3,
      title: 'Business & Communication',
      description: 'Services to keep you connected and productive during your time at the airport.',
      services: [
        {
          id: 301,
          name: 'Business Center',
          description: 'Fully equipped business facilities including meeting rooms, workstations, printing, and video conferencing capabilities.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          id: 302,
          name: 'Free Wi-Fi',
          description: 'Complimentary high-speed wireless internet access throughout the airport terminals.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          )
        },
        {
          id: 303,
          name: 'Banking & Currency Exchange',
          description: 'Banking services and currency exchange counters with competitive rates available 24/7.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 4,
      title: 'Transportation',
      description: 'Convenient transportation options to and from the airport.',
      services: [
        {
          id: 401,
          name: 'Airport Taxis',
          description: 'Official airport taxi service with fixed rates to popular destinations, available 24/7 at designated taxi stands.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          )
        },
        {
          id: 402,
          name: 'Car Rental',
          description: 'Multiple car rental agencies offering a range of vehicles for your convenience.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 403,
          name: 'Public Transportation',
          description: 'Bus and train connections to major cities and tourist destinations in Sri Lanka.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Airport Services</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Enhancing your travel experience with world-class facilities and services
          </p>
        </div>

        <div className="mt-16">
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900">{category.title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-primary rounded-md p-3">
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dt className="text-lg font-medium text-gray-900">
                            {service.name}
                          </dt>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-base text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Need more information?</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Contact our customer service desk for personalized assistance with any airport services.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;