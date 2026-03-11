import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import FeaturedPost from "../components/FeaturedPost";
import HeroCarousel from "../components/HeroCarousel";
import Info from "../components/Info";
import Cta from "../components/Cta";
import WWD from "../components/WWD";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Description from "../components/Description";
import Stat from "../components/Stat";
import More from "../components/More";
import Grid from "../components/Grid";
import { useTranslations } from "next-intl";
import MainPost from "../components/MainPost";
import Part from "../components/Part";
import GridPost from "../components/GridPost";
import { Testi } from "../components/Testi";
import Blog from "../components/Blog";
import UpcomingPost from "../components/UpcomingPost";
import PastEvents from "../components/PastEvents";

export default function Home() {
  const t = useTranslations("Body");

  return (
    <div className="pt-16">
      <div className="relative z-20 flex justify-center items-center w-full bg-red-900">
        <Info />
      </div>
      <div className="w-full">
        <HeroCarousel />
      </div>
      <div className="px-4">
        <FadeIn>
          <Description />
        </FadeIn>
      </div>
      {/* <Cta /> */}
      <WWD />
      <FadeIn>
        <Stat />
      </FadeIn>
      {/* <FadeIn>
        <FeaturedPost />
      </FadeIn> */}
      {/* <FadeIn>
        <div className="px-4">
          <div className="flex mb-4 items-center pt-24 " id="events">
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r={4} fill="#B31942" />
            </svg>
            <span className="inline-block ml-2   font-normal text-[#B31942] capitalize  text-lg">
              Events -
            </span>
          </div>
          <div className="mt-10 mb-10 border-t border-gray-200 "></div>
        </div>

        <MainPost />
      </FadeIn> */}
      {/* <div className=" ">
        <div className="px-4">
          <div className="flex mb-4 items-center pt-24  ">
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r={4} fill="#B31942" />
            </svg>
            <span className="inline-block ml-2   font-normal text-[#B31942] capitalize  text-lg">
              Gallery -
            </span>
          </div>
          <div className="mt-10 mb-10 border-t border-gray-200 "></div>
        </div>
        <GridPost />
      </div> */}

      {/* <div className=" ">
        <div className="px-4">
          <div className="flex mb-4 items-center pt-24  ">
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r={4} fill="#B31942" />
            </svg>
            <span className="inline-block ml-2   font-normal text-[#B31942] capitalize  text-lg">
              {t("p1")} -
            </span>
          </div>
          <div className="mt-10 mb-10 border-t border-gray-200 "></div>
        </div>
        <Part />
      </div> */}
      {/* <Testi />
      <UpcomingPost /> */}
    </div>
  );
}
