import { Logo } from "./logo/logo";
import { Navigation } from "./navigation/navigation";

export const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <Logo />
      <Navigation />
    </div>
  );
};
