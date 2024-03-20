"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Switcher = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const activeLang = pathname?.split("/")[1];

  const changeLangTo = (locale: string) => {
    return pathname?.replace(activeLang, locale);
  };

  const activeClassName = (locale: string) => {
    return activeLang === locale
      ? "bg-orange-500 text-black"
      : "bg-blue-500 text-white ";
  };

  return (
    <div className="w-full h-[60px] flex gap-5 justify-between items-center border-b border-neutral-500 py-0 px-10">
      <div className="flex gap-5">
        <Link
          href={changeLangTo("en")}
          className={`${activeClassName("en")} font-semibold  p-3 `}
        >
          {t("enBtn")}
        </Link>
        <Link
          href={changeLangTo("tr")}
          className={`${activeClassName("tr")} font-semibold p-3`}
        >
          {t("trBtn")}
        </Link>
      </div>
      <div className="flex gap-5">
        <Link
          href={`/${activeLang}`}
          className={`bg-sky-800 font-semibold  p-3`}
        >
          {t("homeBtn")}
        </Link>
        <Link
          href={`/${activeLang}/name`}
          className={`bg-sky-800 font-semibold p-3`}
        >
          {t("nameBtn")}
        </Link>
        <Link
          href={`/${activeLang}/work`}
          className={`bg-sky-800 font-semibold p-3 `}
        >
          {t("workBtn")}
        </Link>
      </div>
    </div>
  );
};

export default Switcher;
