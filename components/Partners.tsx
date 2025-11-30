import Image from "next/image";

const Partners = () => {
  return (
    <section className="w-full py-32 bg-[#f9fafb] ">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="bg-white rounded-2xl py-16 relative w-full text-center overflow-hidden">
          <div className="absolute lg:block hidden w-[800px] h-[800px] bg-center top-[220px] blur-3xl rotate-12 left-[300px]  mix-blend-darken bg-[url('/gradients/gradient-16.png')] bg-cover pointer-events-none " />

          <h6 className="text-5xl font-medium tracking-tight relative mb-4">
            Partners & Supporters
          </h6>
          <p className="text-base text-gray-600 max-w-sm mb-16 mx-auto">
            Building a smarter tomorrow, hand in hand with our partners.{" "}
          </p>
          <div className="flex items-center justify-center gap-8">
            {[
              "/images/sisfs-logo.png",
              "/images/IIML-EIC-logo.png",
              "/images/aws-logo.png",
            ].map((src, i) => (
              <div key={i}>
                <Image
                  src={src}
                  alt="Brand Logos"
                  width={150}
                  height={150}
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
