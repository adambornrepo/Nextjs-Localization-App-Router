import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "tr"] as const;

export const pathnames = {
  "/": "/",
  "/work": {
    en: "/work",
    tr: "/meslek",
  },
  '/name': {
    en: "/name",
    tr: "/isim",
  },
  "/not-found": {
    en: "/not-found",
    tr: "/bulunamadi",
  },
  "/error": {
    en: "/error",
    tr: "/hata",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
