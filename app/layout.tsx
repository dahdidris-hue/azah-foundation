import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azah Charitable Foundation",
  description: "Restoring dignity, protection, and resilience across Sudan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F4EE] text-[#1E2A44]">
        <header className="bg-white border-b border-[#E5DED3]">
          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between gap-10">
            <a href="/" className="flex items-center gap-6">
              <Image
                src="/azah-logo.png"
                alt="Azah Charitable Foundation"
                width={400}
                height={400}
                className="h-44 w-auto object-contain"
              />

              <div className="hidden lg:block border-l border-[#E5DED3] pl-6">
                <p className="text-[#1E2A44] text-2xl font-bold tracking-wide">
                  AZAH
                </p>

                <p className="text-[#556F2B] text-base font-medium mt-1">
                  Restoring dignity. Rebuilding hope.
                </p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[#1E2A44] text-base font-bold">
              <a href="/about" className="hover:text-[#556F2B] transition">
                About
              </a>

              <a href="/projects" className="hover:text-[#556F2B] transition">
                Projects
              </a>

              <a href="/careers" className="hover:text-[#556F2B] transition">
                Careers
              </a>

              <a href="/contact" className="hover:text-[#556F2B] transition">
                Contact
              </a>

              <div className="flex items-center gap-3 text-sm font-semibold border-l border-[#E5DED3] pl-6">
                <a href="/" className="hover:text-[#556F2B] transition">
                  EN
                </a>

                <span className="text-[#CFC7BA]">|</span>

                <a href="/ar" className="hover:text-[#556F2B] transition">
                  AR
                </a>

                <span className="text-[#CFC7BA]">|</span>

                <a href="/fr" className="hover:text-[#556F2B] transition">
                  FR
                </a>
              </div>

              <a
                href="/donate"
                className="bg-[#1E2A44] text-white px-7 py-4 rounded-full hover:bg-[#556F2B] transition"
              >
                Donate
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[#1E2A44] text-white mt-0">
          <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-[1.1fr_0.8fr_1.5fr_1.1fr] gap-14">
            <div>
              <Image
                src="/azah-logo.png"
                alt="Azah Charitable Foundation"
                width={110}
                height={110}
                className="mb-6"
              />

              <p className="text-sm leading-8 text-[#D6D9E0] max-w-xs">
                Restoring dignity, protection, resilience, and sustainable
                recovery for vulnerable communities across Sudan.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

              <div className="flex flex-col gap-3 text-sm text-[#D6D9E0]">
                <a href="/about" className="hover:text-white transition">
                  About
                </a>

                <a href="/projects" className="hover:text-white transition">
                  Projects
                </a>

                <a href="/careers" className="hover:text-white transition">
                  Careers
                </a>

                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>

                <a href="/donate" className="hover:text-white transition">
                  Donate
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">Contact</h3>

              <div className="space-y-5 text-sm text-[#D6D9E0] leading-7">
                <div>
                  <p className="text-white font-medium mb-1">
                    General Email
                  </p>

                  <a
                    href="mailto:Azah@azahcharitablefoundation.com"
                    className="hover:text-white transition text-[13px] whitespace-nowrap"
                  >
                    Azah@azahcharitablefoundation.com
                  </a>
                </div>

                <div>
                  <p className="text-white font-medium mb-1">
                    Administration
                  </p>

                  <a
                    href="mailto:Dahdkamilidris@azahcharitablefoundation.com"
                    className="hover:text-white transition text-[13px] whitespace-nowrap"
                  >
                    Dahdkamilidris@azahcharitablefoundation.com
                  </a>
                </div>

                <div>
                  <p className="text-white font-medium mb-1">Location</p>

                  <p>Khartoum, Sudan</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">
                Support Our Mission
              </h3>

              <p className="text-sm leading-8 text-[#D6D9E0] mb-6 max-w-xs">
                Help support protection, healthcare, shelter, resilience,
                recovery, and humanitarian response efforts across Sudan.
              </p>

              <a
                href="/donate"
                className="inline-block bg-[#556F2B] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                Donate Now
              </a>
            </div>
          </div>

          <div className="border-t border-[#2F3A55]">
            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#B7BFCE]">
              <p>
                © 2026 Azah Charitable Foundation Sudan. All rights reserved.
              </p>

              <p>
                Designed for humanitarian impact and sustainable recovery.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
