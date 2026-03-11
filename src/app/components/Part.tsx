import { useTranslations } from "next-intl";
import React from "react";

function Part() {
  const t = useTranslations("Body");
  return (
    <div id="partners">
      <section className="py-5 mb-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="text-indigo-600 text-center font-medium mb-4 block">
              {t("p2")}
            </span>
            <h1 className="text-4xl text-gray-900 text-center font-bold">
              {t("p3")}
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img
                src="/images/walmart.jpg"
                alt="walmart logo"
                className="h-24"
              />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/art.png" alt="art board" className="h-20" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/great.png" alt="great" className="h-24" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/thr.png" alt="great" className="h-24" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/next.webp" alt="nextdoor" className="h-20" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/forward.png" alt="forward" className="h-20" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/victory.png" alt="forward" className="h-20" />
            </a>
            <a
              href="#"
              className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <img src="/images/grace.png" alt="forward" className="h-20" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Part;
