"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const language =
    pathname === "/ar" || pathname.startsWith("/ar/")
      ? "ar"
      : pathname === "/fr" || pathname.startsWith("/fr/")
      ? "fr"
      : "en";

  const prefix = language === "en" ? "" : `/${language}`;

  const text = {
    en: {
      about: "About",
      founders: "Founders",
      projects: "Projects",
      careers: "Careers",
      contact: "Contact",
      donate: "Donate",
      slogan: "Restoring dignity. Rebuilding hope.",
      footerText:
        "Restoring dignity, protection, resilience, and sustainable recovery for vulnerable communities across Sudan.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      generalEmail: "General Email",
      administration: "Administration",
      location: "Location",
      khartoum: "Khartoum, Sudan",
      support: "Support Our Mission",
      supportText:
        "Help support protection, healthcare, shelter, resilience, recovery, and humanitarian response efforts across Sudan.",
      donateNow: "Donate Now",
      copyright:
        "© 2026 Azah Charitable Foundation Sudan. All rights reserved.",
      closing:
        "Designed for humanitarian impact and sustainable recovery.",
    },

    ar: {
      about: "عن المؤسسة",
      founders: "المؤسِّسات",
      projects: "المشاريع",
      careers: "الوظائف",
      contact: "تواصل معنا",
      donate: "تبرع",
      slogan: "نستعيد الكرامة. ونعيد بناء الأمل.",
      footerText:
        "نعمل على استعادة الكرامة وتعزيز الحماية والقدرة على الصمود ودعم التعافي المستدام للمجتمعات الأكثر ضعفًا في مختلف أنحاء السودان.",
      quickLinks: "روابط سريعة",
      contactTitle: "تواصل معنا",
      generalEmail: "البريد الإلكتروني العام",
      administration: "الإدارة",
      location: "الموقع",
      khartoum: "الخرطوم، السودان",
      support: "ادعم رسالتنا",
      supportText:
        "ساهم في دعم جهود الحماية والرعاية الصحية والمأوى وتعزيز القدرة على الصمود والتعافي والاستجابة الإنسانية في مختلف أنحاء السودان.",
      donateNow: "تبرع الآن",
      copyright: "© 2026 مؤسسة عزة الخيرية – السودان. جميع الحقوق محفوظة.",
      closing: "من أجل أثر إنساني وتعافٍ مستدام.",
    },

    fr: {
      about: "À propos",
      founders: "Fondatrices",
      projects: "Projets",
      careers: "Carrières",
      contact: "Contact",
      donate: "Faire un don",
      slogan: "Restaurer la dignité. Reconstruire l’espoir.",
      footerText:
        "Restaurer la dignité, renforcer la protection et la résilience, et soutenir un relèvement durable des communautés vulnérables à travers le Soudan.",
      quickLinks: "Liens rapides",
      contactTitle: "Contact",
      generalEmail: "E-mail général",
      administration: "Administration",
      location: "Localisation",
      khartoum: "Khartoum, Soudan",
      support: "Soutenez notre mission",
      supportText:
        "Contribuez aux efforts de protection, de santé, d’hébergement, de résilience, de relèvement et de réponse humanitaire à travers le Soudan.",
      donateNow: "Faire un don",
      copyright:
        "© 2026 Azah Charitable Foundation Soudan. Tous droits réservés.",
      closing:
        "Conçu pour l’impact humanitaire et un relèvement durable.",
    },
  };

  const t = text[language];

  const homePath = prefix || "/";

  const link = (page: string) => `${prefix}/${page}`;

  const isArabic = language === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <header className="bg-white border-b border-[#E5DED3]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 md:py-5 flex items-center justify-between gap-4 md:gap-10">
          <a href={homePath} className="flex items-center gap-4 md:gap-6">
            <Image
              src="/azah-logo.png"
              alt="Azah Charitable Foundation"
              width={400}
              height={400}
              className="h-24 sm:h-28 md:h-36 lg:h-44 w-auto object-contain"
              priority
            />

            <div
              className={`hidden lg:block ${
                isArabic
                  ? "border-r border-[#E5DED3] pr-6"
                  : "border-l border-[#E5DED3] pl-6"
              }`}
            >
              <p className="text-[#1E2A44] text-2xl font-bold tracking-wide">
                AZAH
              </p>

              <p className="text-[#556F2B] text-base font-medium mt-1">
                {t.slogan}
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[#1E2A44] text-base font-bold">
            <a
              href={link("about")}
              className="hover:text-[#556F2B] transition"
            >
              {t.about}
            </a>

            <a
              href={link("founders")}
              className="hover:text-[#556F2B] transition"
            >
              {t.founders}
            </a>

            <a
              href={link("projects")}
              className="hover:text-[#556F2B] transition"
            >
              {t.projects}
            </a>

            <a
              href={link("careers")}
              className="hover:text-[#556F2B] transition"
            >
              {t.careers}
            </a>

            <a
              href={link("contact")}
              className="hover:text-[#556F2B] transition"
            >
              {t.contact}
            </a>

            <LanguageSwitcher />

            <a
              href={link("donate")}
              className="bg-[#1E2A44] text-white px-7 py-4 rounded-full hover:bg-[#556F2B] transition"
            >
              {t.donate}
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden border-t border-[#E5DED3]">
          <nav className="px-5 py-4 flex items-center gap-5 overflow-x-auto whitespace-nowrap text-sm font-semibold text-[#1E2A44]">
            <a href={link("about")}>{t.about}</a>
            <a href={link("founders")}>{t.founders}</a>
            <a href={link("projects")}>{t.projects}</a>
            <a href={link("careers")}>{t.careers}</a>
            <a href={link("contact")}>{t.contact}</a>

            <a
              href={link("donate")}
              className="bg-[#1E2A44] text-white px-4 py-2 rounded-full"
            >
              {t.donate}
            </a>
          </nav>

          <LanguageSwitcher mobile />
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-[#1E2A44] text-white mt-0">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16 grid sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.5fr_1.1fr] gap-10 md:gap-14">
          <div>
            <Image
              src="/azah-logo-transparent.png"
              alt="Azah Charitable Foundation"
              width={110}
              height={110}
              className="mb-6"
            />

            <p className="text-sm leading-7 md:leading-8 text-[#D6D9E0] max-w-xs">
              {t.footerText}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t.quickLinks}</h3>

            <div className="flex flex-col gap-3 text-sm text-[#D6D9E0]">
              <a href={link("about")}>{t.about}</a>
              <a href={link("founders")}>{t.founders}</a>
              <a href={link("projects")}>{t.projects}</a>
              <a href={link("careers")}>{t.careers}</a>
              <a href={link("contact")}>{t.contact}</a>
              <a href={link("donate")}>{t.donate}</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t.contactTitle}</h3>

            <div className="space-y-5 text-sm text-[#D6D9E0] leading-7">
              <div>
                <p className="text-white font-medium mb-1">
                  {t.generalEmail}
                </p>

                <a
                  href="mailto:Azah@azahcharitablefoundation.com"
                  className="hover:text-white transition text-[13px] break-all sm:break-normal"
                  dir="ltr"
                >
                  Azah@azahcharitablefoundation.com
                </a>
              </div>

              <div>
                <p className="text-white font-medium mb-1">
                  {t.administration}
                </p>

                <a
                  href="mailto:Dahdkamilidris@azahcharitablefoundation.com"
                  className="hover:text-white transition text-[13px] break-all sm:break-normal"
                  dir="ltr"
                >
                  Dahdkamilidris@azahcharitablefoundation.com
                </a>
              </div>

              <div>
                <p className="text-white font-medium mb-1">{t.location}</p>
                <p>{t.khartoum}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t.support}</h3>

            <p className="text-sm leading-7 md:leading-8 text-[#D6D9E0] mb-6 max-w-xs">
              {t.supportText}
            </p>

            <a
              href={link("donate")}
              className="inline-block bg-[#556F2B] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              {t.donateNow}
            </a>
          </div>
        </div>

        <div className="border-t border-[#2F3A55]">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-[#B7BFCE]">
            <p>{t.copyright}</p>
            <p>{t.closing}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
