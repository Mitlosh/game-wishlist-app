import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Error, ViewGameAll, ViewGameDetails, PlaylistPage, TierlistPage } from "../views/index";
import BaseLayout from "../layouts/BaseLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/games" element={<ViewGameAll />} />
          <Route path="/games/:gameId" element={<ViewGameDetails />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/tierlist" element={<TierlistPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
