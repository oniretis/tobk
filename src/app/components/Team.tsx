import React from "react";

function Team() {
  return (
    <div>
      <section className="mt-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className=" text-5xl text-center font-medium text-[#B31942] mb-6">
              Meet the Board
            </h2>
            <p className="text-lg text-gray-500 text-center">
              5PNA has a number of office positions including.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/sam.jpg"
                  alt="Samuel Sims"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Mr. Samuel Sims
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                President
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/Betty.jpg"
                  alt="Betty Smith"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Betty Smith
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Founding Member and Community Mother
              </span>
            </div>
            {/* <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650000.png"
                  alt="Kathryn image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                James Greer
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Vice President
              </span>
            </div> */}
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/churchill.jpg"
                  alt="Jerome image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Churchill Caruthers Jr
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Vice President (NIBD chair)
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/james.jpg"
                  alt="Wade image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                James Smith
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Youth and Intergenerational Activities Chair
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/jennifer.jpg"
                  alt="Leslie image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Jennifer Garcia
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Community Engagement Specialist
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/sege.jpg"
                  alt="Guy image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Segun Daniel Okeowo
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Project Director
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/zelda.jpg"
                  alt="Ronald image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Dr Zelda Okia
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Life and Health Coach
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/sy.jpg"
                  alt="Devon image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Sy smith
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Board Member, Executive Assistant
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/fatima.jpg"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Fatima Laster
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Home Stabilization (Anti-gentrification) and Expression through
                the Arts Specialists
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/andrew.jpg"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Dr. Andrew Calhoun III
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Leadership Coach (Pastor Grace Fellowship Church-Community hub)
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/white.jpg"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Dr. Vanessa White
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Organizational Director
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/pamella.jpg"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Pamella Harrell
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Secretary
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="/laraine.jpg"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Laraine Patterson
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Community Laision
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
