import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mess Menu — Today",
  description: "What's cooking today — breakfast, lunch and dinner at a glance.",
};

export const viewport: Viewport = {
  themeColor: "#120E1F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Runs before paint to avoid a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('mess-menu-theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme !== 'light');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${jbmono.variable} font-body antialiased bg-day-gradient dark:bg-night-gradient text-night dark:text-cream transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
