import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter,IBM_Plex_Serif} from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    SIDEBAR
    {children}
   </main>
  );
}
