import { twMerge } from "tailwind-merge";
import "@/app/globals.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={twMerge(
        "auto-rows-min grid grid-cols-1 grid-rows-1 min-h-dvh place-items-center w-dvw",
      )}
    >
      {children}
    </body>
  </html>
);

export default Layout;
