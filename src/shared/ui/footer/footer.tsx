import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-orange-400">
      <h2 className="text-2xl font-bold">{t("copyright")}</h2>
    </footer>
  );
};
