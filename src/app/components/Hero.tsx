import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({ subsets: ["latin"] });

function Hero() {
  return (
    <div>
      <div className="w-full inline-block dark:bg-neutral-800 bg-neutral-100 mt-24">
        <article className="flex flex-col items-start justify-end mx-4 md:mx-12 relative h-[50vh] md:h-[80vh] ">
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full
  bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"
          />
          <Image
            src="/images/one.jpeg"
            alt="an image"
            fill
            className="w-full h-full object-center object-cover rounded-lg bg-opacity-50 filter brightness-50 absolute inset-0 "
            sizes="100vw"
            priority
          />

          <div className="w-full lg:w-3/4 p-6 mt-24 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            {/* <p className="inline-block    text-light rounded-full capitalize font-semibold   text-sm sm:text-base text-orange-200">
              Latest
            </p> */}
            <Link href="#" className="mt-6">
              <h1
                className={`${play.className} font-bold mt-48 md:mt-24 capitalize text-white text-2xl sm:text-xl md:text-3xl lg:text-7xl`}
              >
                <span
                  className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                >
                  Big ideas. Amazing talent.
                </span>
              </h1>
            </Link>
            <p className=" text-neutral-300 inline-block mt-4 text-sm md:text-lg  font-light ">
              Explore a world of opportunities and find the ideal job tailored
              just for you. Let us guide you on a journey towards a fulfilling
              and rewarding career path. Uncover your true potential and land
              the job of your dreams.
            </p>

            <Link
              href="/#posts"
              className="md:py-2 md:px-8 py-2 px-4 text-sm md:text-lg rounded-md border border-white hover:bg-white hover:text-orange-500 text-white mt-10"
            >
              Updates
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Hero;
