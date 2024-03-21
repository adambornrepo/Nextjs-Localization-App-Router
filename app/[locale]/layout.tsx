import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "../components/header";
import "../globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Localization",
  description: "This is a localization example",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <html lang={locale}>
      <body className={inter.className}>

        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}

          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-neutral-900 to-zinc-900">
              {children}
            </div>
          </div>

        {/* </NextIntlClientProvider> */}

      </body>
    </html>
  );
}
