import React from "react";
import LayoutOne from "./LayoutOne";
import { useTranslations } from "next-intl";

function FeaturedPost() {
  const t = useTranslations("Body");

  return (
    <section className="  bg-white ">
      <div className="  px-4 ">
        <div className=" px-4 bg-white rounded-md">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <iframe
                className="mx-auto md:ml-0 rounded-md"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fZ_11cgyTqg"
                title="Turning Ideas to Action - 5 Points Neighborhood Association"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <span className="inline-block mb-5 text-sm text-[#B31942] font-bold uppercase tracking-widest">
                  {t("f1")}
                </span>
                <h2 className="font-semibold mb-4 text-lg md:text-4xl text-gray-900  tracking-tight">
                  <span>{t("f2")}</span>
                </h2>
                <p className="mb-16 text-base text-neutral-900 font-normal leading-relaxed">
                  {t("f3")}
                </p>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <div className="flex flex-wrap items-center px-3 py-2 bg-gray-100 rounded-lg">
                      <div className="w-5 h-5 mr-2">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#B31942"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">
                          5 Points Neighborhood Association
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto p-2">
                    <div className="flex flex-wrap items-center px-3 py-2 bg-gray-100 rounded-lg">
                      <div className="w-5 h-5 mr-2">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#B31942"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">
                          Community
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Other similar elements */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
