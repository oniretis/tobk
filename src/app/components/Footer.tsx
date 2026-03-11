"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800 text-white  p-4"
    >
      <section className="py-20 p-4 rounded-lg bg-indigo-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="pb-10 mb-10 border-b border-gray-700 items-center">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                  <Link className="inline-block" href="/">
                    <img
                      src="/images/logo.png"
                      alt="5points logo"
                      className="h-12 w-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-18">
              <div className="w-full lg:w-2/5 px-4 mb-12 lg:mb-0">
                <div className="xs:max-w-xs">
                  <h4 className="font-heading text-2xl font-semibold text-gray-50 mb-4">
                    Subscribe to our newsletter
                  </h4>
                  <form action="">
                    <label
                      className="block mb-1.5 text-sm font-semibold text-white"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <div className="xs:flex items-center">
                      <div className="relative mb-4 xs:mb-0 xs:mr-4">
                        <span className="absolute left-0 top-1/2 ml-4 transform -translate-y-1/2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
                              fill="#80818C"
                            />
                          </svg>
                        </span>
                        <input
                          className="w-full p-12 pr-4 py-4 text-sm text-gray-300 placeholder-gray-400 rounded-lg bg-gray-800 border border-gray-700 outline-none"
                          type="email"
                          placeholder="info@tobk.org"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="pt-10 pb-10 block mb-1.5 text-sm font-semibold text-white">
                    <span className="block font-bold mb-2">The True "Our Brothers' Keepers" Holy Community Foundation, Inc. "International)</span>
                    <span className="block">2126 North 23ʳᵈ Street</span>
                    <span>Milwaukee   WI  53205</span>
                  </div>
                  <div className="pb-10 block mb-1.5 text-sm font-semibold text-white">
                    <span className="block">Phone (414) 750-3402</span>
                    <span className="block">Fax      (414) 344-3591</span>
                    <span className="block">E-mail: tobkjustice@sbcglobal.net</span>
                  </div>
                </div>
              </div>
              {/* <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0">
                <h5 className="text-lg font-semibold text-gray-50 mb-4">
                  Services
                </h5>
                <ul className="text-sm">
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="/affiliate"
                    >
                      Become an Affiliate
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="#"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="/plans"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="#"
                    >
                      Travel tour
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0">
                <h5 className="text-lg font-semibold text-gray-50 mb-3">
                  About
                </h5>
                <ul className="text-sm">
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="#"
                    >
                      Our Story
                    </Link>
                  </li>
                  {/* <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="#"
                    >
                      Benefits
                    </Link>
                  </li> */}
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="/team"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="/#"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/5 px-4">
                <h5 className="text-lg font-semibold text-gray-50 mb-4">
                  Help
                </h5>
                <ul className="text-sm">
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="#"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-300 hover:text-gray-200"
                      href="contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:flex items-center justify-between">
              <div className="sm:flex mb-6 sm:mb-0 items-center">
                <Link
                  className="inline-block mr-6 sm:mr-12 text-gray-300 hover:text-gray-200"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  className="inline-block text-gray-300 hover:text-gray-200"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  className="inline-block mr-9 p-1 hover:bg-gray-800 rounded-md"
                  href="https://web.facebook.com/profile.php?id=100064876382566"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/outline-facebook.svg"
                    alt="facebook icon"
                    height="20"
                    width="20"
                    loading="lazy"
                  />
                </Link>
                <Link
                  className="inline-block mr-9 p-1 hover:bg-gray-800 rounded-md"
                  href="https://x.com/tobk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/twitter-white.svg"
                    alt="twitter icon"
                    height="20"
                    width="20"
                    loading="lazy"
                  />
                </Link>
                <Link
                  className="inline-block mr-9 p-1 hover:bg-gray-800 rounded-md"
                  href="https://www.instagram.com/tobk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/outline-socialmedia.svg"
                    alt="instagram icon"
                    height="20"
                    width="20"
                    loading="lazy"
                  />
                </Link>
                <Link
                  className="inline-block p-1 hover:bg-gray-800 rounded-md"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/outline-linkedin.svg"
                    alt="linkdin icon"
                    height="20"
                    width="20"
                    loading="lazy"
                  />
                </Link>
              </div>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} tobk
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.footer>
  );
};

export default Footer;
