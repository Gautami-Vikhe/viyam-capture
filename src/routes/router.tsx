
import {  Route, Routes } from "react-router";
import { authRoutes, publicRoutes} from "./router.link";
import Feature from "../layouts/feature";
import AuthFeature from "../layouts/authFeature";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";




const ALLRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ALLRoutes;
