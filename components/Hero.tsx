import { CircleCheck } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full pt-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full pt-20 h-full object-cover -z-10"
      >
        <source src="/videos/tube-4.mp4" type="video/mp4" />
      </video>
      <div className="relative w-full h-full bg-white/70 px-12 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-36">
          <div className="text-center max-w-3xl">
            <div className="inline-block bg-[#f3e5ff] text-black px-2 py-1 rounded-full text-sm font-medium mb-6 uppercase">
              Where aspiration meets intelligence
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold animate-fade-up transition-all duration-500 text-black mb-6">
              Your <span className="text-[#8c35d6]">AI Mentor</span> for{" "}
              <span className="text-[#8c35d6]">UPSC Success</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Chat, learn & Practice with India&apos;s largest first-stage AI
              Mentor
            </p>
            <div className="flex gap-4 justify-center mb-16">
              <button className="bg-[#8b35d6] text-white rounded-full px-6 py-3 text-base font-medium">
                Ask Saras
              </button>
              <button className="bg-white  text-black rounded-full px-6 py-3 text-base font-medium">
                Try Free Now
              </button>
            </div>
          </div>
          <div className="relative p-2.5 mb-18 rounded-4xl bg-gray-200">
            <div className="absolute w-[70%] h-[100px] top-[670px] left-[250px] bg-center  mix-blend-darken bg-[url('/gradients/gradient-44.png')] bg-cover pointer-events-none " />
            <div className="bg-transparent relative">
              <Image
                src="/images/dashboard-ai-isaras.png"
                alt="Dashboard Image"
                width={1200}
                height={1200}
                className="h-auto w-[1400px] rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
            {[
              "Ask, Chat, and Learn",
              "Current Affairs",
              "Prelims & Mains PYQ Practice",
              "Mock Tests",
              "Prepare at Your Own Pace",
            ].map((item) => (
              <div key={item} className="flex items-center text-gray-600 gap-2">
                <CircleCheck fill="#1cbc53" className="text-white" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
