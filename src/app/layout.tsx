
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junayed Hasan | Developer Portfolio",
  description:
    "Explore the portfolio, projects, skills, and development journey of Junayed Hasan, a CSE student at BUBT and web developer.",
  keywords: [
    "Junayed Hasan",
    "Web Developer",
    "Frontend Developer",
    "Next.js Portfolio",
    "React Developer",
    "BUBT",
  ],
  authors: [{ name: "Junayed Hasan" }],
  openGraph: {
    title: "Junayed Hasan | Developer Portfolio",
    description:
      "Explore the portfolio, projects, skills, and development journey of Junayed Hasan, a CSE student and web developer.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("portfolio-theme");
      var theme = savedTheme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
