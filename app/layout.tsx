import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
// import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maria Klyass | Personal Portfolio",
  description: "Maria is a self-taught frontend-developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#E6E2E1] text-stone-900 relative pt-28 sm:pt-36 dark:bg-[#131211] `}
      >
        <div
          className="bg-[#928279] absolute top-[-6rem] -z-10 
        right-[11rem] 
        h-[31.25rem] w-[13rem] rounded-full blur-[10rem] 
        xs:w-[5rem] sm:w-[38.75rem] 
        sm:left-[-25rem] md:left-[-30rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
        dark:bg-[#d5bbb0]"
        ></div>

        <div
          className="bg-[#BEB4AB] absolute top-[-1rem] -z-10 
        left-[5rem] 
        h-[31.25rem] w-[12rem] rounded-full blur-[30rem] 
        xs:w-[5rem] sm:w-[25.75rem] md:w-[38rem] 
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c5bcb3]"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
