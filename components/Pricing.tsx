import { CircleCheck } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      title: "Free Trial",
      subtitle: "Best for First-Time Explorers ",
      price: "₹0.00",
      period: "First Month Only",
      button: "Start 1-Month Free Trial",
      cta: "Free for the first month. Auto-renews at ₹500/month unless cancelled",
      desc: "Try all premium features for 30 days. No payment required.",
      features: [
        "Doubt clearance – up to 20 queries",
        "20 Prelims practice tests",
        "Current Affairs Analysis (daily updates)",
        "AI chat for instant UPSC help",
        "Topic recommendations",
      ],
      highlight: false,
    },
    {
      title: "Annual Subscription",
      subtitle: "Perfect for Serious Aspirants ",
      price: "₹5000.00",
      period: "₹5000 / Year (Save ₹1000)",
      button: "Join for a Year & Save ₹1000",
      cta: "Cancel anytime — no hidden fees.",
      desc: "One-time payment for uninterrupted UPSC preparation.",
      features: [
        "Unlimited doubt clearance",
        "Unlimited Prelims test sets",
        "Current Affairs analysis (full access)",
        "Detailed AI feedback on performance",
        "Topic recommendations and tips",
      ],
      badge: "Save 16%",
      highlight: true,
    },
    {
      title: "Monthly Subscription",
      subtitle: "Ideal for Consistent Learners",
      price: "₹500.00",
      period: "Month",
      button: "Continue Learning for ₹500/month",
      cta: "Cancel anytime — no hidden fees.",
      desc: "After your free trial, continue with full access.",
      features: [
        "Unlimited doubt clearance",
        "Unlimited Prelims test sets",
        "Current Affairs analysis (full access)",
        "Detailed AI feedback on performance",
        "Topic recommendations and personalized tips ",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="w-full py-32 bg-[#f9fafb]">
      <div className="container mx-auto relative bg-black px-16 rounded-4xl py-32 overflow-hidden">
        <div className="absolute lg:block hidden -top-[600px] rotate-20 left-[45%] -translate-x-1/2 w-[1550px] h-full bg-[url('/gradients/gradient-14.png')] bg-center bg-cover bg-no-repeat mix-blend-screen pointer-events-none " />
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full mb-4 bg-gray-500 px-3 py-1 uppercase text-[#c6f56f]">
            <span className="text-sm">Pricing</span>
          </div>
          <h6 className="text-5xl font-medium mb-3 text-center tracking-tighter leading-normal text-white">
            Choose the Plan that Fits
            <br />
            Your UPSC Journey.
          </h6>
          <p className="text-base text-gray-300 max-w-lg text-center mx-auto mb-20">
            Start free, learn smart, and scale your preparation with I, Saras
            your AI mentor for UPSC success.{" "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center max-w-sm lg:max-w-6xl gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className={`bg-[#f4f5f8] flex h-fit w-fit flex-col rounded-2xl ${
                  tier.highlight
                    ? "px-6 border-[url('/gradients/gradient-11.png')] border-10 shadow-xl scale-105 py-8 max-w-sm mx-auto"
                    : "py-8 px-10"
                }`}
              >
                {tier.highlight && (
                  <div className="flex justify-end mb-2">
                    <div className="bg-[#c6f56f] px-4 py-2 -mt-2 text-sm rounded-full ">
                      {tier.badge}
                    </div>
                  </div>
                )}
                <h5 className="text-2xl font-medium mb-1 tracking-tighter">
                  {tier.title}
                </h5>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  {tier.subtitle}
                </p>
                <h6 className="font-semibold text-2xl mb-1 tracking-tight">
                  {tier.price}
                </h6>
                <p className="text-sm ml-1 mb-4">{tier.period}</p>
                <button
                  className={`w-full py-3 text-sm shadow-sm mb-3 rounded-full transition-all text-center ${
                    tier.highlight
                      ? "bg-[#8b35d6] text-white hover:bg-white hover:text-black"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {tier.button}
                </button>
                <p className="italic text-sm text-gray-600 mb-6">{tier.cta}</p>
                <p className="text-2xl mb-3 font-medium tracking-tighter">
                  {tier.desc}
                </p>
                <div className="flex flex-col gap-1">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CircleCheck
                        fill="blue"
                        className="text-white size-[18px]"
                      />
                      <p className="text-base tracking-tight">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
