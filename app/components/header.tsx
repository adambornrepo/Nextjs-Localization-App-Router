import { useTranslations } from "next-intl";
import InternalLink from "./internal-link";
import LocaleSwitcher from "./local-switcher";

const Header = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full h-[60px] flex gap-5 justify-between items-center border-b border-neutral-500 py-0 px-10">
      <div className="flex gap-5">
        <InternalLink
          href="/"
          className={`nav-link `}
        >
          {t("homeBtn")}
        </InternalLink>
        <InternalLink
          href="/name"
          className={`nav-link `}
        >
          {t("nameBtn")}
        </InternalLink>
        <InternalLink
          href="/work"
          className={`nav-link `}
        >
          {t("workBtn")}
        </InternalLink>
      </div>
      <div className="flex gap-5">
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
