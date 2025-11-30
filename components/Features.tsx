import Image from "next/image";

const Features = () => {
  const gridItems = [
    {
      title: "Smarter than search",
      desc: "No more information overload. Saras filters out unnecessary web clutter and delivers only what’s relevant for your exam - precise, syllabus-focused, and time-saving.",
      image: "/images/features-1.png",
      class: "lg:col-span-3",
    },
    {
      title: "Smarter than ChatGPT",
      desc: "No more generic responses. Saras understands UPSC patterns and provides accurate, syllabus-aligned answers tailored to your query — fact-checked, reliable, and exam-focused.",
      image: "/images/features-2.png",
      class: "lg:col-span-3",
    },
    {
      title: "Study efficiently",
      desc: "Stay focused with AI-driven study plans that adapt to your progress and help you concentrate on high-priority topics.",
      image: "/images/features-3.png",
      class: "lg:col-span-2",
    },
    {
      title: "Perform better",
      desc: "Take AI-powered mock tests and get personalized feedback highlighting where to improve - so every study hour counts.",
      image: "/images/features-4.png",
      class: "lg:col-span-2",
    },
    {
      title: "Stress Less",
      desc: "Get 24×7 doubt resolution and continuous support. Your AI mentor is always available to clear concepts, boost confidence, and keep you exam-ready.",
      image: "/images/features-5.png",
      class: "lg:col-span-2",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-32 bg-[#fcfcfd] overflow-hidden relative"
    >
      <div className="absolute lg:block hidden w-[1500px] h-[1500px] bg-center lg:-top-[100px] blur-[50px] lg:left-[300px] xl:left-[200px]  mix-blend-darken bg-[url('/gradients/gradient-23.png')] bg-cover pointer-events-none " />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h4 className="text-5xl font-bold text-black mb-4">
            Why <span className="text-[#8b35d6]">I, Saras</span>
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A smarter, faster, calmer way to prepare for UPSC
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-6xl mx-auto items-center justify-center mb-20">
          {gridItems.map((item) => (
            <div
              key={item.title}
              className={`${item.class} p-2 rounded-3xl bg-white shadow-sm lg:h-full`}
            >
              <div className="bg-[#fcfcfd] rounded-3xl p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl leading-tighter font-medium text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={280}
                    className="rounded-2xl object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
