import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 bg-white/60 backdrop-blur-xl rounded-full">
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo-isaras.png"
            alt="Logo"
            width={160}
            height={100}
            className="size-auto"
          />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="rounded-full px-2 py-1 border border-transparent hover:border-[#e3e7ed] hover:text-[#e3e7ed]"
            >
              <Link href={link.href} className="font-medium text-gray-700">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="rounded-full bg-[#7c31f6] px-4 py-2 text-white uppercase">
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Header;
