import { useTranslations } from "next-intl";
import React from "react";

const Welcome = () => {
  const t = useTranslations("Content");
  return <h1 className="text-3xl">{t("hi")}</h1>;
};

export default Welcome;
