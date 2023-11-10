import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PagenotFound } from "./pages/PagenotFound";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
