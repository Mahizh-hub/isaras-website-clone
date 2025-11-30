import Image from "next/image";

const HowItWorks = () => {
  const cards = [
    {
      tag: "Login",
      title: "Start your journey with a click.",
      desc: "Sign in to your Saras dashboard and unlock access to India's first AI-powered UPSC preparation ecosystem - built to simplify your learning path.",
      image: "/images/step-1.png",
    },
    {
      tag: "Choose Exam & Subject",
      title: "Learn what matters the most.",
      desc: "Select your UPSC stage and subjects to get personalized study material, curated question sets, and AI-recommended topics aligned to your syllabus.",
      image: "/images/step-2.png",
    },
    {
      tag: "Chat with AI Mentor",
      title: "Get instant answers & guidance.",
      desc: "Ask any UPSC-related question - from static topics to current affairs. Your AI Mentor provides detailed explanations, insights, and follow-up resources in seconds.",
      image: "/images/step-3.png",
    },
    {
      tag: "Practice & Learn at Your Pace",
      title: "Reinforce. Review. Repeat.",
      desc: "Test your understanding with adaptive MYQ and PYQ. Get real-time feedback, track your improvement, and stay exam-ready - anytime, anywhere.",
      image: "/images/step-4.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#f9fafb] relative h-fit py-20"
    >
      <div className="absolute lg:block hidden w-[1000px] h-[1000px] bg-center -top-[200px] blur-[80px] rotate-120 lg:translate-x-1/2 xl:translate-x-1/3  mix-blend-darken bg-[url('/gradients/gradient-23.png')] bg-cover pointer-events-none " />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 pl-0 lg:pl-40 py-20 relative">
        <div className="flex flex-col text-center lg:text-left gap-4 sticky top-[200px] h-fit">
          <h5 className="text-4xl font-medium tracking-tighter">
            How it Works
          </h5>
          <p className="text-gray-600 leading-relaxed text-base max-w-sm lg:mx-0 mx-auto">
            Prepare smarter in four simple steps. From login to personalized AI
            mentorship - I, Saras will make UPSC learning seamless, interactive,
            and efficient.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky border-10 border-gray-100 max-w-sm mx-auto p-8 bg-white rounded-3xl shadow-sm transition-all duration-300"
              style={{
                top: `${200 + i * 40}px`,
                zIndex: i,
                marginBottom: i < cards.length - 1 ? "40px" : "0",
              }}
            >
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {card.tag}
              </span>
              <h5 className="mt-3 text-3xl tracking-tighter text-gray-900">
                {card.title}
              </h5>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>
              <div className="relative rounded-2xl w-full h-48 overflow-hidden bg-gray-100">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
