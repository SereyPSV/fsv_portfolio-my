import { HeaderAboutBackground } from "./components/header-about-background/header-about-background";
import { HeaderAboutContent } from "./components/header-about-content/header-about-content";

export const HeaderAbout = () => {
  return (
    <header className="relative pt-32">
      <HeaderAboutBackground />
      <HeaderAboutContent />
    </header>
  );
};
