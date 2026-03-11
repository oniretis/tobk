"use client";

import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function WWD() {
  const t = useTranslations("Body");
  const description = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative p-4">
        <div className="pt-16 pb-24 px-6 sm:px-8 lg:px-12 
                        bg-gradient-to-br from-purple-900 via-purple-800/80 to-indigo-900 
                        rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
          <div className="px-4 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <circle cx={6} cy={6} r={6} fill="hsl(280, 90%, 65%)" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
              </div>
              <span className="ml-3 text-sm font-semibold text-white/90 tracking-wide uppercase letter-spacing-2">
                {t("wwd1")}
              </span>
            </motion.div>

            <motion.div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="font-heading text-4xl lg:text-6xl text-white mb-16 leading-tight
                           bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("wwd2")}
              </motion.h1>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Example Card */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20
                                    hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        className="relative mb-6"
                        variants={iconVariants}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-1 shadow-lg">
                          <div className="w-full h-full rounded-xl bg-purple-600 flex items-center justify-center">
                            <svg width={32} height={32} viewBox="0 0 48 48" fill="none">
                              <circle cx="16" cy="16" r="4" fill="white" />
                              <circle cx="32" cy="16" r="4" fill="white" />
                              <path d="M16 28C16 28 20 32 24 32C28 32 32 28 32 28" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      <h5 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {t(`wwd${i*2+1}`)}
                      </h5>
                      <p className="text-white/70 leading-relaxed line-clamp-4 group-hover:text-white/90 transition-colors duration-300">
                        {t(`wwd${i*2+2}`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WWD;