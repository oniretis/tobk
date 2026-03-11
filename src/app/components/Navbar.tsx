"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { Past } from "./Past";
import { DonateModal } from "./DonateModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [language, setLanguage] = useState("en"); // Default language
  const router = useRouter();

  const handleToggle = (e: any) => {
    e.preventDefault();
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    router.push(`/${newLanguage}`);
  };

  return (
    <motion.section
      className="relative  overflow-hidden dark:bg-neutral-900 bg-white"
      initial={{ opacity: 0 }} // Initial opacity set to 0
      animate={{ opacity: 1 }} // Animate opacity to 1 when the component mounts
    >
      <section className="relative  overflow-hidden">
        <nav>
          <div className=" px-4 ">
            <div className="flex h-16 items-center">
              <Link className="inline-block" href="/">
                <img
                  src="/images/logo.png"
                  alt="5points logo"
                  className="h-12 w-full"
                />
              </Link>
              <button
                className="lg:hidden navbar-burger py-1 ml-auto"
                onClick={toggleMenu}
              >
                <svg
                  width="44"
                  height="16"
                  viewBox="0 0 44 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="2" rx="1" fill="hsl(var(--primary))" />
                  <rect y="14" width="44" height="2" rx="1" fill="hsl(var(--primary))" />
                </svg>
              </button>
              <div
                className={`${isMenuOpen ? "block" : "hidden"
                  } lg:flex ml-auto mr-12 items-center font-extrabold text-sm`}
              >
                <Link
                  className="inline-block font-medium hover:text-primary mr-10"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="inline-block font-medium hover:text-primary mr-5"
                  href="/en/about"
                >
                  About Us
                </Link>
                <Link
                  className="inline-block font-medium hover:text-primary mr-5"
                  href="/en/allPastEvents"
                >
                  Events
                </Link>

                {/* <Link
                  className="inline-block font-medium hover:text-primary mr-10"
                  href="/#events"
                >
                  Events &amp; News
                </Link> */}
                <Link
                  className="inline-block font-medium hover:text-primary mr-10"
                  href="/en/communityPartners"
                >
                  Community Partners
                </Link>

                {/* <Link
                  className="inline-block font-medium hover:text-primary mr-4"
                  href="/en/blogger"
                >
                  Blog
                </Link> */}
                <Link
                  className="inline-block font-medium ml-4 mr-4 hover:text-primary"
                  href="/en/contact"
                >
                  Contact
                </Link>

                <div className="flex ml-5 items-center space-x-2">
                  <div onClick={handleToggle} className="cursor-pointer">
                    <Switch
                      id="airplane-mode"
                      checked={language === "es"}
                      onChange={handleToggle}
                    />
                  </div>
                  <Label
                    htmlFor="airplane-mode"
                    className="cursor-pointer"
                    onClick={handleToggle}
                  >
                    {language === "en" ? "🇪🇸 Spanish" : "🇺🇸 English"}
                  </Label>
                </div>
              </div>
              <DonateModal />
            </div>
          </div>
        </nav>

        <div
          className={`${isMenuOpen ? "block" : "hidden"
            }  fixed top-0 left-0 bottom-0 w-full max-w-md z-50`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
          <nav className="relative flex flex-col py-6 px-10 w-full h-full dark:bg-neutral-800 bg-white overflow-y-auto">
            <div className="flex mb-auto items-center">
              <Link className="inline-block mr-auto" href="/">
                <img
                  src="/images/logo.png"
                  alt="5points logo"
                  className="h-12 w-full"
                />
              </Link>
              <a className="navbar-close" href="#" onClick={closeMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="py-12 mb-auto">
              <ul className="flex-col">
                <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/en/about"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/en/allPastEvents"
                    onClick={closeMenu}
                  >
                    Events
                  </Link>
                </li>

                {/* <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/#events"
                    onClick={closeMenu}
                  >
                    Events &amp; News
                  </Link>
                </li> */}
                <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/en/communityPartners"
                    onClick={closeMenu}
                  >
                    Community Partners
                  </Link>
                </li>
                {/* <li className="mb-6">
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/en/blogger"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="inline-block dark:text-white text-black"
                    href="/en/contact"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <DonateModal />
            </div>
          </nav>
        </div>
      </section>
    </motion.section>
  );
};

export default Navbar;
