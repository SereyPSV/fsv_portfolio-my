import { About, Footer, Header, Solutions } from "@/shared/ui";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto">
      <Header />
      <About />
      <Solutions />
      <Footer />
    </main>
  );
}
