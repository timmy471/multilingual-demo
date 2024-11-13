import { useTranslation } from "react-i18next";
import Header from "./components/Header";

const App = () => {
  const { t } = useTranslation();

  const line1 = t("detail.line1");
  const line2 = t("detail.line2");

  return (
    <div className="h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white py-8">
      <Header />
      <div className="container text-center max-w-2xl mt-28">
        <h1 className="text-4xl font-bold">{t("greeting")}</h1>
        <p className="mt-8">{line1}</p>
        <p className="mt-2">{line2}</p>
      </div>
    </div>
  );
};

export default App;
