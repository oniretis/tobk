"use client";

import { useTranslations } from "next-intl";
import { DollarSign, Users, Calendar, Star } from "lucide-react";

function Stat() {
  const t = useTranslations("Body");

  const stats = [
    { value: "$125,000+", label: "", subtext: "since 2022", icon: <DollarSign className="text-3xl text-blue-500 mb-2" /> },
    { value: "$750,000+", label: '', subtext: "Since 2014", icon: <DollarSign className="text-3xl text-green-500 mb-2" /> },
    { value: "50,000+", label: '', icon: <Users className="text-3xl text-purple-500 mb-2" /> },
    { value: "25+", label: '', icon: <Star className="text-3xl text-yellow-400 mb-2" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {t("m4")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              {stat.subtext && (
                <p className="text-sm text-gray-400 mb-2">{stat.subtext}</p>
              )}
              <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stat;