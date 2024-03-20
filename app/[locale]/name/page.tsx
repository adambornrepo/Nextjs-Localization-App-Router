import { useTranslations } from "next-intl";

export default function NamePage() {
  const t = useTranslations("Content");
  return <h1>{t("title")}</h1>;
}
