import AboutUsMore from "./AboutUsMore";
import Com from "./Com";
import Team from "./Team";

// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="pt-24 pb-5 dark:bg-neutral-800 bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden"
    >
      <div className="container px-4">
        <div className="mb-4 md:p-8">
          <div className="flex flex-wrap lg:items-start">
            <div className="w-full md:w-1/2 pt-8">
              <div className="">
                <span className="inline-block mb-10 text-2xl text-[#4d082d] font-medium uppercase tracking-widest">
                  About TOBK
                </span>
                <h1 className="mb-4 dark:text-neutral-100 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  THE TRUE OUR BROTHERS KEEPER
                  <br />
                  <span className="text-[#4d082d]">INTERNATIONAL HOLY COMMUNITY</span>
                </h1>
                <p className="mb-6 text-lg font-semibold text-[#4d082d] italic">
                  &quot;WE ARE IN THE BUSINESS OF INSTILLING HOPE AND CHANGING LIVES.&quot;
                </p>
                <p className="mb-6 text-base font-normal text-neutral-700 leading-relaxed">
                  The True Our Brothers Keepers, Inc. is a faith-based organization that is in the community to put true love into action. Since understanding promotes hope, and hope promotes change, we are a source of hope and a force for change.
                </p>
                <p className="mb-6 text-base font-normal text-neutral-700 leading-relaxed">
                  Our organization is in the business of bridging the gap between inner-city residents and a city full of resources. Finally, we are a community building organization that works toward fulfilling the needs of children and families.
                </p>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-6 py-3 text-sm text-center text-white font-bold bg-[#4d082d] hover:bg-[#5a0d35] focus:ring-4 focus:ring-[#4d082d] rounded-md transition duration-200"
                      href="/en/contact"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-max mx-auto md:ml-40 bg-white overflow-hidden rounded-lg shadow-lg">
                <img
                  className="mx-auto w-full rounded-lg"
                  src="/images/churchill.jpg"
                  alt="TOBK Community Work"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:items-start mb-24 mt-16">
            <div className="w-full md:w-1/2 pt-8">
              <div className="">
                <span className="inline-block mb-10 text-2xl text-[#4d082d] font-medium uppercase tracking-widest">
                  Our Mission
                </span>
                <h3 className="mb-4 text-xl md:text-3xl font-bold text-gray-900">
                  Living for the Sake of Others
                </h3>
                <p className="mb-6 text-base font-normal text-neutral-700 leading-relaxed">
                  The True Our Brothers Keepers, Inc. is a faith-based organization dedicated to putting true love into action. We believe that understanding promotes hope, and hope promotes change, making us a source of hope and a force for change in our communities.
                </p>
                <p className="mb-6 text-base font-normal text-neutral-700 leading-relaxed">
                  We are committed to bridging the gap between inner-city residents and the abundant resources available in our city, while building a stronger community that fulfills the needs of children and families.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#4d082d] rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Founded in 1999</p>
                      <p className="text-gray-600 text-sm">by Mr. Maurice Lawrence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#4d082d] rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Incorporated & 501c3</p>
                      <p className="text-gray-600 text-sm">July 22, 2002</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#4d082d] rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Community Justice Center</p>
                      <p className="text-gray-600 text-sm">Called by City of Milwaukee in 2003</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:items-start mt-24">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="max-w-max mx-auto md:mr-40 bg-white overflow-hidden rounded-lg shadow-lg">
                <img
                  className="mx-auto w-full rounded-lg"
                  src="/images/andrew.jpg"
                  alt="Community Outreach"
                />
              </div>
              <div className="max-w-max mx-auto md:mr-40 bg-white overflow-hidden rounded-lg shadow-lg">
                <img
                  className="mx-auto w-full rounded-lg"
                  src="/images/Betty.jpg"
                  alt="Community Services"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-8">
              <div className="">
                <span className="inline-block mb-10 text-2xl text-[#4d082d] font-medium uppercase tracking-widest">
                  Our Founder
                </span>

                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mr. Maurice Lawrence</h3>
                  <p className="text-lg font-medium text-[#4d082d] mb-4">Founder & President</p>
                  <p className="mb-4 text-base font-normal text-neutral-700 leading-relaxed">
                    Mr. Maurice Lawrence founded TOBK in 1999 with a vision to create positive change in the Milwaukee community. His leadership and dedication have been instrumental in transforming the organization from a small community initiative into an internationally recognized foundation.
                  </p>
                  <p className="mb-4 text-base font-normal text-neutral-700 leading-relaxed">
                    Under his guidance, TOBK has become a beacon of hope, providing essential services and support to countless individuals and families, both locally and internationally.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#4d082d] to-[#6a0d3d] p-8 rounded-lg text-white">
                  <h4 className="text-xl font-bold mb-4">Our Motto</h4>
                  <p className="text-2xl font-light italic text-center">
                    &quot;Living for the Sake Of Others&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <AboutUsMore />

          <Team />

          <Com /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
