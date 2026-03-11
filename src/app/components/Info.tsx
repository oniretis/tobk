import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import InfoPost from "./InfoPost";

function Info() {
  return (
    <div className="w-full">
      <FadeIn className="w-full">
        <a
          className="group relative justify-center mb-6 items-center rounded-full overflow-hidden shadow-3xl mt-10"
          href="#"
        >
          <div className="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent" />
          <div className="flex text-white justify-center items-center px-6 sm:px-4 py-4 sm:py-2 group-hover:bg-opacity-60 rounded-full transition duration-300">
            <span className="font-bold px-4"> Upcoming:</span>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-marquee">
                {/* <InfoPost /> */}
              </div>
            </div>
          </div>
        </a>
      </FadeIn>
    </div>
  );
}

export default Info;
