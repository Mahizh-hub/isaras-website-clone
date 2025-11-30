import Image from "next/image";

const Testimonials = () => {
  const testimonies = [
    {
      message:
        "The Mains Evaluation feature blew my mind. Getting AI-based feedback instantly helped me improve my answer writing every single day — it feels like having a personal evaluator 24×7.",
      name: "Arjun Mehta",
      title: "UPSC Mains Candidate",
      image: "/images/test-arjun.png",
    },
    {
      message:
        "I cleared both Prelims and Mains with ease. The AI mentor made my preparation structured and stress-free. A big thanks to I, Saras for being my constant guide!",
      name: "Saranya Nair",
      title: "UPSC Aspirant",
      image: "/images/test-saranya.png",
    },
    {
      message:
        "The cascading filters in Ask Saras are incredibly useful — it’s like having a personalized mentor who understands what I need instantly. Truly unique!",
      name: "Muthukumaran S",
      title: "UPSC Aspirant",
      image: "/images/test-muthu.png",
    },
    {
      message:
        "The application’s clean UI and smart navigation made learning seamless. I could focus on studying without distractions - a flawless experience.",
      name: "Vinoth Kumar",
      title: "UPSC Aspirant",
      image: "/images/test-vinoth.png",
    },
    {
      message:
        "The Current Affairs Analysis is a total game changer! I no longer waste hours collecting news. I, Saras summarizes everything with UPSC relevance — it’s like reading The Hindu and a topper’s notes combined.",
      name: "Priya Sharma",
      title: "UPSC Aspirant",
      image: "/images/test-priya.png",
    },
  ];

  return (
    <section className="w-full relative py-32 bg-[#f9fafb] overflow-hidden">
      <div className="absolute w-[800px] h-[800px] -left-32 -top-[360px] mix-blend-darken bg-[url('/gradients/gradient-32.png')] bg-cover pointer-events-none " />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#cdf5f8] uppercase px-3 py-1 rounded-full mb-6">
            Success Stories
          </div>
          <h6 className="text-6xl tracking-tighter font-semibold mb-6">
            Hear from Aspirants
            <br />
            Who Trust <span className="text-[#8b35d6]">I, Saras</span>
          </h6>
          <p className="text-base mx-auto max-w-2xl text-gray-600">
            See how I, Saras has helped UPSC aspirants simplify their
            preparation, boost confidence, and achieve their goals with the
            power of AI mentoring.
          </p>
        </div>
      </div>
      <div className="flex items-center size-fit lg:size-full justify-center gap-6">
        {testimonies.map((test) => (
          <div
            key={test.name}
            className="p-6 rounded-3xl min-h-[270px] w-[300px]  flex flex-col shadow-sm justify-between"
          >
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {test.message}
            </p>
            <hr className="text-gray-300 mb-2" />
            <div className="flex items-center gap-2">
              <div className="w-12 h-12">
                <Image
                  src={test.image}
                  alt={test.name}
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="fles flex-col">
                <p className="font-semibold text-base">{test.name}</p>
                <p className="text-xs text-gray-600">{test.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-[500px] h-[500px] lg:top-[450px] top-[800px] lg:-right-[100px] -right-[200px] mix-blend-darken bg-[url('/gradients/gradient-25.png')] bg-cover pointer-events-none " />
    </section>
  );
};

export default Testimonials;
