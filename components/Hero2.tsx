"use client";

import Image from "next/image";
import { useState } from "react";

const Hero2 = () => {
  const [activeTab, setActiveTab] = useState("ask-saras");

  const tabs = [
    {
      id: "ask-saras",
      label: "Ask Saras",
      title: "Ask Saras ",
      titleBlue: "Your AI-powered UPSC Mentor.",
      subtitle:
        "Have a doubt? Ask Saras right away! From intricate polity concepts to challenging economy topics - get accurate, easy-to-grasp explanations powered by AI, fine-tuned for UPSC aspirants ",
      image: "/images/ask-saras.png",
      points: [
        {
          icon: "/images/ic-1.png",
          title: "Instant Doubt Resolution",
          desc: "Get answers in seconds, not hours.",
        },
        {
          icon: "/images/ic-2.png",
          title: "Context-Aware Guidance",
          desc: "Understand not just the “what,” but also the “why.”",
        },
        {
          icon: "/images/ic-3.png",
          title: "Topic-based Clarity",
          desc: "Deep insights and explanations tailored to UPSC standards.",
        },
      ],
    },
    {
      id: "pyq",
      label: "PYQ",
      title: "Practice Smarter with ",
      titleBlue: "AI-curated Question Sets.",
      subtitle:
        "Master every subject with intelligently structured Previous Year Questions (PYQs) tailored for UPSC preparation. Saras analyzes trends, identifies key topics, and helps you focus where it truly matters.",
      image: "/images/PYQS.png",
      points: [
        {
          icon: "/images/ic-4.png",
          title: "Smart Question Categorization",
          desc: "Questions organized by year, subject, and difficulty level.",
        },
        {
          icon: "/images/ic-5.png",
          title: "AI Insights & Explanations",
          desc: "Get detailed, UPSC-aligned reasoning for every answer.",
        },
        {
          icon: "/images/ic-6.png",
          title: "Adaptive Practice Mode",
          desc: "Practice based on your strengths, weaknesses, and progress.",
        },
        {
          icon: "/images/ic-7.png",
          title: "Trend-based Analysis",
          desc: "Spot recurring topics and evolving patterns across years.",
        },
      ],
    },
    {
      id: "current-affairs",
      label: "Current Affairs",
      title: "Your Daily ",
      titleBlue: "UPSC-ready News Companion.",
      subtitle:
        "Stay updated with AI-curated current affairs tailored for UPSC. From government policies to global developments - Saras summarizes, analyzes, and connects every event to the syllabus you’re preparing for.",
      image: "/images/current-affairs.png",
      points: [
        {
          icon: "/images/ic-8.png",
          title: "Daily Curated Headlines",
          desc: "Focused, exam-relevant updates.",
        },
        {
          icon: "/images/ic-9.png",
          title: "Syllabus-linked Insights",
          desc: "Understand where each topic fits.",
        },
        {
          icon: "/images/ic-10.png",
          title: "AI-powered Analysis",
          desc: "Get clarity on causes, impacts, and implications.",
        },
      ],
    },
  ];
  const activeData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative w-full bg-white pt-32 py-32 px-12 md:px-6 overflow-hidden">
      <div className="absolute w-[1000px] h-[1000px] bg-center top-[610px] rotate-120 -left-[220px] lg:left-[500px] xl:left-[500px] mix-blend-darken bg-[url('/gradients/gradient-3.png')] bg-cover pointer-events-none " />
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl font-semibold text-black mb-6">
          AI-powered <span className="text-[#8b35d6]">I, Saras</span> Ecosystem
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          With I, Saras, you can chat, learn, and practice in one unified
          AI-powered environment - from doubt solving to personalized test prep
          and real-time current affairs analysis.{" "}
        </p>
      </div>
      <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 font-semibold text-lg transition-colors ${
              activeTab === tab.id
                ? "text-[#8b35d6] border-b-2 border-[#8b35d6]"
                : "text-gray-600 hover:text-gray-800"
            } `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center justify-center">
          <div className="space-y-8 pt-12 max-w-xl mx-auto">
            <h3 className="text-3xl md:text-4xl text-center lg:text-start  font-medium text-black mb-4">
              {activeData.title}
              <span className="text-[#8b35d6]">{activeData.titleBlue}</span>
            </h3>
            <p className="text-gray-500 mx-auto text-center lg:text-start text-lg mb-12 leading-relaxed">
              {activeData.subtitle}
            </p>
            <div className="flex flex-col gap-4">
              {activeData.points.map((point, i) => (
                <div key={i} className="flex gap-6">
                  <Image
                    src={point.icon}
                    alt={point.title}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-black text-lg">
                      {point.title}
                    </h4>
                    <p className="text-gray-600">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={activeData.image}
              alt={activeData.label}
              width={600}
              height={500}
              className="hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero2;
