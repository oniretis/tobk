import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";
import Footer from "../components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "tobk",
  description: "Welcome to the future",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="h-full bg-white text-neutral-950">
        <NextIntlClientProvider messages={messages}>
          <div className="fixed z-[999]  w-full">
            <Navbar />
          </div>
          <main className="h-full  w-full z-10 ">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
