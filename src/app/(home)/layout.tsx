import { ReactNode } from "react";

import Header from "@/components/main-header";
import Footer from "@/components/main-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex grow flex-col z-10 bg-white max-md:mt-[88px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
