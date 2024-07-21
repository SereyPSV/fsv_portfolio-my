import { About, Footer, HeaderAbout, HeaderNav, Solutions } from "@/shared/ui";

export default function Home() {
  return (
    <main className="relative">
      <HeaderNav />
      <HeaderAbout />
      <About />
      <Solutions />
      <Footer />
    </main>
  );
}
