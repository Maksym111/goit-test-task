import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Tweets from "../../pages/Tweets";

const SharedLayout = lazy(() => import("../sharedLayout/SharedLayout"));
const Home = lazy(() => import("../../pages/Home"));
const Cards = lazy(() => import("../cards/Cards"));
const NotFound = lazy(() => import("../../pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
