import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import("../sharedLayout/SharedLayout"));
const Home = lazy(() => import("../../pages/Home"));
const Tweets = lazy(() => import("../../pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
