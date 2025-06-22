import { ABeeZee, Outfit } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/app/(site)/globals.css";

const aBeeZee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-a-bee-zee",
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
});

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={twMerge(
        "auto-rows-min grid grid-cols-1 grid-rows-1 min-h-dvh place-items-center w-full",
        aBeeZee.variable,
        outfit.variable,
      )}
    >
      {children}
    </body>
  </html>
);

export default Layout;
