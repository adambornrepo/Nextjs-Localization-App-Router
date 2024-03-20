import { useTranslations } from "next-intl";

export default function WorkPage() {
  const t = useTranslations("Content");
  return <h1>{t("work")}</h1>;
}
