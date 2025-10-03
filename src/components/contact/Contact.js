import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We're here to help with any questions or concerns
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Airport Headquarters</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Bandaranaike International Airport<br />
                      Katunayake, Sri Lanka<br />
                      Postal Code: 11450
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      General Inquiries: +94 11 2252861<br />
                      Customer Service: +94 11 2252862<br />
                      Lost & Found: +94 11 2252863
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      General Inquiries: info@airport.lk<br />
                      Customer Service: service@airport.lk<br />
                      Media Relations: media@airport.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Operating Hours</h2>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 mb-4">
                    The airport is open 24 hours a day, 7 days a week.
                  </p>
                  <p className="text-base text-gray-500">
                    Administrative offices are open:<br />
                    Monday to Friday: 8:30 AM - 4:30 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;