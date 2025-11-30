import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between items-center gap-12">
          <div>
            <h6 className="text-4xl font-medium tracking-tighter mb-4">
              Build your future with{" "}
              <span className="text-[#8b35d6]">I, Saras</span>
            </h6>
            <p className="text-base text-gray-500 max-w-2xl">
              Join thousands of aspirants learning smarter with their personal
              UPSC mentor.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mb-4">
              Start your free trial today — clarify doubts, practice PYQs, and
              master every subject with intelligent guidance.
            </p>
            <h6 className="text-3xl font-medium tracking-tighter mb-4">
              Contact Us at
            </h6>
            <p className="text-base text-gray-500 max-w-2xl mb-4">
              For any queries or support, feel free to connect with us — we’re
              just a message away.
            </p>
            <div className=" flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2">
                <Phone className="text-[#8b35d6] size-10" />
                <Link href="call:+91 78455 50250">+91 78455 50250</Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-[#8b35d6] size-10" />
                <Link href="mailto:contact@isaras.ai">contact@isaras.ai</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <input
              type="email"
              className="border border-gray-200 rounded-full px-4 py-2 w-full placeholder:text-gray-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-[#8b35d6] text-white cursor-pointer px-6 whitespace-nowrap py-2 rounded-full"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
