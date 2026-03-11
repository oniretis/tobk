import React from "react";

function Com() {
  return (
    <div>
      <section className="mt-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Our Committees
              </h2>
            </div>
            <div className="relative w-full text-center  lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                We are separated into different effective committees.
              </p>
              {/* <a
                href="#"
                className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 "
              >
                More{" "}
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full h-fit bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5  xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="14"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="10" cy="12" r="2" fill="#4F46E5" />
                  <circle cx="20" cy="12" r="2" fill="#4F46E5" />
                  <path
                    d="M10 20 C 12 24, 18 24, 20 20"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Beautification & Improvement
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none">
                  This committee organizes clean ups, identify potential garden
                  spots, keep up with violations and find resources for means of
                  correction. In addition, the BI committee will call the city
                  for attention to vacant lots, abandoned and razed properties,
                  and improvements in lights, streets, and signs.
                </p>
              </div>
            </div>
            <div className="group relative w-full justify-start items-start bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Business/Economic Development
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee brings economic resources to the association,
                  build strong neighborhood-business-community relationships,
                  and provide connections to other businesses or organizations
                  that support neighborhood activities.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1C7.268 1 1 7.268 1 15C1 18.69 2.526 22.016 5 24.392V29L9.608 26.275C11.21 26.891 13.057 27.5 15 27.5C22.732 27.5 29 21.232 29 15C29 7.268 22.732 1 15 1ZM15 25.5C8.928 25.5 4 20.572 4 15C4 9.428 8.928 4.5 15 4.5C21.072 4.5 26 9.428 26 15C26 20.572 21.072 25.5 15 25.5Z"
                    fill="#4F46E5"
                  />
                  <path
                    d="M10 10C10.2761 10 10.5 10.2239 10.5 10.5V14C10.5 14.2761 10.2761 14.5 10 14.5H6.5C6.22386 14.5 6 14.2761 6 14V10.5C6 10.2239 6.22386 10 6.5 10H10ZM13.5 10C13.7761 10 14 10.2239 14 10.5V15C14 15.2761 13.7761 15.5 13.5 15.5H10.5C10.2239 15.5 10 15.2761 10 15V10.5C10 10.2239 10.2239 10 10.5 10H13.5ZM17 10C17.2761 10 17.5 10.2239 17.5 10.5V14C17.5 14.2761 17.2761 14.5 17 14.5H13.5C13.2239 14.5 13 14.2761 13 14V10.5C13 10.2239 13.2239 10 13.5 10H17ZM20.5 10C20.7761 10 21 10.2239 21 10.5V15C21 15.2761 20.7761 15.5 20.5 15.5H17.5C17.2239 15.5 17 15.2761 17 15V10.5C17 10.2239 17.2239 10 17.5 10H20.5ZM24 10C24.2761 10 24.5 10.2239 24.5 10.5V15C24.5 15.2761 24.2761 15.5 24 15.5H20.5C20.2239 15.5 20 15.2761 20 15V10.5C20 10.2239 20.2239 10 20.5 10H24Z"
                    fill="#4F46E5"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Communications
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee distributes monthly flyers, create newsletters,
                  information packets, announcements. Additionally, they email
                  members, make phone calls to remind members who do not have
                  email about meetings, reconnect and re-invite absentee members
                  and find out concerns of homebound members, and update website
                  and utilize other means of social media.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Elderly and Disabled Assist
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee assist with lawn or snow removal, make calls to
                  the elderly in at least 3 week intervals to find out their
                  needs and concerns, help serve as intermediaries when dealing
                  with energy, phone, or other companies, make connections to
                  organizations and places of resources, provides rides and help
                  with errands as well as sometimes provide comfort or someone
                  with whom just to talk.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Crime Prevention
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee attends presentations by the Milwaukee Police
                  Department, including crime and safety at (District 5), keep a
                  log of neighborhood crimes, keep up with trends in surrounding
                  areas, bring resources and information to association through
                  presentations of pertinent safety information.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Fundraising
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  We have the most up-to-date security to support the security
                  of all our customers in carrying out all transactions.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Health & Wellness
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  The HW committee will bring resources and presentations to the
                  area (i.e. resources re: domestic violence, etc), design
                  programs to address substance use and abuse in the community,
                  find out causes of deaths in the area and the possible
                  connections or contributions of the areas design to the health
                  of those who have lived longer than 5 years in the area,
                  investigate and work to determine links between environmental
                  aspects of the neighborhood and health effects, monitor health
                  conditions of people who report them, plan Health Fairs and
                  Walks.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Hospitality
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee welcomes new neighbors and secure as much info
                  as possible about residents (names, address, phone), deliver
                  folders (neighborhood guidelines, contact information, call 4
                  action guide) and welcoming gifts, and provide updates on
                  births and deaths in the area.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Official Communication
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  The OC committee emails various governmental departments or
                  call using (Block club or Association name), speak as a
                  political representative for the group (given time limits or a
                  need for lobbying), speak as group representative on certain
                  issues.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Research and Development
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee attends various meetings to scope worthwhile
                  connections, city development and impact on area, licensing of
                  businesses in the area, programs to align with mission and
                  vision and work toward improving organization and find out
                  projects that are taking place within the area.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Security
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee provides reports on abandoned vehicles,
                  suspicious activity, loitering, nuisance, or repetitive
                  activity, day watch and night watch, and provide individuals
                  to serve as those who will watch others property while they
                  are traveling.
                </p>
              </div>
            </div>
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Youth Activities/Recreation
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee designs activities to engage youth in club,
                  encourage educational and employment opportunities, find and
                  encourage participation in extra-curricular or summer learning
                  activities, foster healthy lifestyle choices, plan block party
                  and provide individual counseling and mentoring.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 h-fit xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Landlord
              </h4>
              <div className="group">
                <p className="text-sm line-clamp-3 font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-hover:line-clamp-none ">
                  This committee keeps an updated contact list of property
                  owners who do not reside in the area, secure signatures on
                  landlord compacts, communicate neighborhood concerns as well
                  as concerns about tenants or property upkeep, and encourage
                  participation in the association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Com;
