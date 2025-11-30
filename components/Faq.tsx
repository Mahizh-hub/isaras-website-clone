"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      ques: "Who am I?",
      ans: "I am an AI assistant designed to help aspirants prepare for the UPSC exams. I use the power of AI to provide personalized guidance and support throughout your preparation journey. ",
    },
    {
      ques: "What are the study materials I am trained on?",
      ans: "I draw knowledge from NCERT books, standard reference materials, and newspapers. ",
    },
    {
      ques: "Is there a free trial available?",
      ans: "Yes, we offer a free trial period to allow you to experience the platform before committing to a subscription. ",
    },
  ];

  return (
    <section id="faq" className="w-full relative py-32 bg-[#f9fafb]">
      <div className="absolute w-[800px] lg:block hidden h-[800px] bg-center -top-[70px] blur-[10px] left-[650px]  mix-blend-darken bg-[url('/gradients/gradient-40.png')] bg-cover pointer-events-none " />
      <div className="max-w-4xl mx-auto relative px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#e8fbc6] uppercase mb-8 px-3 py-1 rounded-full">
            Faq
          </div>
          <h6 className="text-5xl tracking-tight font-medium mb-4">
            Frequently <span className="text-[#8b35d6]">asked</span> Questions
          </h6>
          <p className="text-base leading-relaxed max-w-xl mx-auto text-gray-600">
            By offering concise and informative responses, this section helps
            users find solutions without the need to contact customer support,
            saving time{" "}
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 overflow-hidden bg-white hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-6 text-left items-center flex justify-between"
              >
                <h6 className="text-lg font-medium text-black">{faq.ques}</h6>
                <ChevronDown
                  className={`size-5 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-600 text-base transition-all">
                  {faq.ans}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
