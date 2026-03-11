"use client";
import { useTranslations } from "next-intl";
import React from "react";
import FadeIn from "./FadeIn";
import { Link } from "@radix-ui/react-navigation-menu";

function Cta() {
  const t = useTranslations("Body");
  const handleDownloadEn = () => {
    const link = document.createElement("a");
    link.href = "/eng.pdf";
    link.download = "tobk English byLaws";
    link.click();
  };
  return (
    <div>
      <section className="py-5 mt-10">
        <div className="mx-auto  px-4  ">
          <div className="mb-14 max-w-7xl text-center self-center mx-auto">
            <FadeIn>
              <h2 className="text-lg md:text-3xl text-center font-semibold text-gray-900  mb-6  ">
                {t("titleBody1")}
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
                <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                  <div className="block">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold  text-white py-5 w-full xl:w-64">
                    {t("titleBody2")}
                  </h3>
                  <p className="text-base font-normal text-gray-300 w-full mb-8 xl:w-64">
                    {t("titleBody3")}
                  </p>
                  <a href="/en/about">
                    <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                      {t("titleBody4")}
                      <svg
                        width={6}
                        height={10}
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative hidden h-auto md:w-1/2 md:block">
                  <img
                    src="/images/community.jpeg"
                    alt="Header tailwind Section"
                    className="h-full ml-auto bg-contain bg-no-repeat bg-center"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
                <div className="block">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-2xl font-bold xl:text-xl">
                  tobk BYLAWS
                </h3>
                <p className="text-base font-normal text-white mb-8">
                  {t("titleBody5")}
                </p>
                <button
                  className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5"
                  onClick={handleDownloadEn}
                >
                  Download
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-[#B31942] rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-2xl font-bold xl:text-xl">
                  Partners
                </h3>
                <p className="text-base font-normal text-white mb-8">
                  {t("titleBody6")}
                </p>
                <a href="/en/#partners">
                  <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                    View
                    <svg
                      width={6}
                      height={10}
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
