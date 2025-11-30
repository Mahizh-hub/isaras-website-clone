import LogoWhite from "@/public/images/logo-white.svg";
import Facebook from "@/public/images/facebook.svg";
import Instagram from "@/public/images/instagram.svg";
import Linkedin from "@/public/images/linkedin.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-22 relative overflow-hidden isolate">
      <div className="absolute hidden lg:block w-[500px] h-[500px] lg:-top-[120px] blur-[10px] lg:translate-x-[1500px] rotate-220 bg-center mix-blend-lighten bg-[url('/gradients/gradient-31.png')] bg-cover pointer-events-none " />
      <div className="absolute hidden lg:block w-[800px] h-[800px] top-[50px] blur-[10px] -left-[250px] bg-center mix-blend-lighten bg-[url('/gradients/gradient-2.png')] bg-cover pointer-events-none " />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12 mb-12">
          <div>
            <Image
              src={LogoWhite}
              alt="While Isaras Logo"
              width={20}
              height={20}
              className="w-40 h-20 mb-4"
              priority
            />
            <p className="text-base text-gray-400 leading-relaxed mb-2">
              Your AI Mentor for UPSC Success.
            </p>
            <p className="text-base text-gray-400 leading-relaxed max-w-xl mb-6">
              Learn, practice, and grow smarter with our AI-driven UPSC
              preparation ecosystem — powered by intelligent learning and
              continuous feedback.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={Facebook}
                alt="While Isaras Logo"
                width={20}
                height={20}
                className="size-7"
                priority
              />
              <p className="text-gray-500">|</p>
              <Image
                src={Instagram}
                alt="While Isaras Logo"
                width={20}
                height={20}
                className="size-7"
                priority
              />
              <p className="text-gray-500">|</p>
              <Image
                src={Linkedin}
                alt="While Isaras Logo"
                width={20}
                height={20}
                className="size-7"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-16">
            <div className="text-gray-200 flex flex-col items-start gap-6 text-start">
              <h6 className="text-xl">Company</h6>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Faq</p>
            </div>
            <div className="text-gray-200 flex flex-col items-start gap-6 text-start">
              <h6 className="text-xl">Legal Policies</h6>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
            </div>
          </div>
        </div>
        <hr className=" border-gray-700 mb-6" />
        <p className="text-center text-gray-400 text-sm">
          © 2025 Aramporul Info Tech Pvt.Ltd. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
