import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "./fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Imagit",
  description:
    "Imagit is a small content creation tool that can help you edit selected images and download them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${quicksand.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
