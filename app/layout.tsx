import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Alex Nielsen",
  description: "The portfolio of Kevin Alex Nielsen, frontend developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
