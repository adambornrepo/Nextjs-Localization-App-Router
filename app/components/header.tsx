import { useTranslations } from "next-intl";
import LocalizedLink from "./localized-link";
import LocaleSwitcher from "./local-switcher";

const Header = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full h-[60px] flex gap-5 justify-between items-center border-b border-neutral-500 py-0 px-10">
      <div className="flex gap-5">
        <LocalizedLink href="/" className={`nav-link`}>
          {t("homeBtn")}
        </LocalizedLink>
        <LocalizedLink href="/name" className={`nav-link`}>
          {t("nameBtn")}
        </LocalizedLink>
        <LocalizedLink href="/work" className={`nav-link`}>
          {t("workBtn")}
        </LocalizedLink>
      </div>
      <div className="flex gap-5">
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
