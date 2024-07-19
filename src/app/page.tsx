import { About, Footer, HeaderAbout, HeaderNav, Solutions } from "@/shared/ui";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto">
      <HeaderNav />
      <HeaderAbout />
      <About />
      <Solutions />
      <Footer />
    </main>
  );
}
