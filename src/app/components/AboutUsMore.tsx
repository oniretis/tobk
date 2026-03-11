"use client";
import React from "react";

function AboutUsMore() {
  const services = [
    "Home Visits/ Door to Door Outreach",
    "Parenting & Life Skills in America, Africa & Beyond",
    "AIDS Epidemic & Character Education",
    "Entrepreneurship Development",
    "International Homeownership With Mortgage",
    "Fast Credit Restoration",
    "Probation & Parole Workstation",
    "Restoring Foreclosed City Homes",
    "Annual Events to Stop the Killing"
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 rounded-2xl mt-24 p-10">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-blue-600">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The True Our Brothers Keepers Holy Community Foundation, Inc. offers a comprehensive range of services designed to support and empower our community members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-800 font-medium">{service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl tracking-tight font-bold text-blue-600 mb-6">
                Get In Touch
              </h2>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg">2126 North 23ʳᵈ Street<br />Milwaukee, WI 53205</p>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-lg">Phone: (414) 750-3402</p>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-lg">Fax: (414) 344-3591</p>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <p className="text-lg">Email: tobkjustice@sbcglobal.net</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Website</h3>
                <a
                  href="https://trueourbrotherskeepersinc.my.canva.site/dagngkgq5gi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline text-lg"
                >
                  Visit our official website
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <img
                className="w-full rounded-lg shadow-lg"
                src="/images/cloth.jpg"
                alt="TOBK Community Services"
              />
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Our Impact</h3>
                <p className="text-gray-700">
                  For over two decades, TOBK has been a beacon of hope in Milwaukee and beyond, providing essential services that transform lives and strengthen communities. Our faith-based approach ensures that every individual receives compassionate care and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsMore;
