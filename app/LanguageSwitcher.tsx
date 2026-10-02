"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitcher({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const pathname = usePathname();

  const getBasePath = () => {
    if (pathname === "/ar" || pathname === "/fr") {
      return "";
    }

    if (pathname.startsWith("/ar/")) {
      return pathname.slice(3);
    }

    if (pathname.startsWith("/fr/")) {
      return pathname.slice(3);
    }

    return pathname;
  };

  const basePath = getBasePath();

  const englishPath = basePath || "/";
  const arabicPath = basePath ? `/ar${basePath}` : "/ar";
  const frenchPath = basePath ? `/fr${basePath}` : "/fr";

  return (
    <div
      className={
        mobile
          ? "px-5 pb-4 flex items-center gap-3 text-xs font-semibold text-[#556F2B]"
          : "flex items-center gap-3 text-sm font-semibold border-l border-[#E5DED3] pl-6"
      }
    >
      <a href={englishPath} className="hover:text-[#556F2B] transition">
        EN
      </a>

      <span className="text-[#CFC7BA]">|</span>

      <a href={arabicPath} className="hover:text-[#556F2B] transition">
        AR
      </a>

      <span className="text-[#CFC7BA]">|</span>

      <a href={frenchPath} className="hover:text-[#556F2B] transition">
        FR
      </a>
    </div>
  );
}
