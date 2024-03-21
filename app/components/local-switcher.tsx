import { locales } from "@/localization/config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import Image from "next/image";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <div className="flex gap-2 items-center ">
        <div className="">
      <Image src={`/locale/${locale}.png`} alt={locale} width={24} height={24} className="aspect-square"/>
        </div>
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")} >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
