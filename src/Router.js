import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { PagenotFound } from "./pages/PagenotFound";
import { Header } from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.detail} element={<Detail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path="/*" element={<PagenotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
