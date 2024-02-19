import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../Constants/Paths";
import { Characters } from "../Pages/characters/Characters";
import { Locations } from "../Pages/locations/Locations";
import { Episodes } from "../Pages/episodes/Episodes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<h1>Home</h1>} />
        <Route path={PATHS.CHARACTERS} element={<Characters />} />
        <Route path={PATHS.LOCATIONS} element={<Locations />} />
        <Route path={PATHS.EPISODES} element={<Episodes />} />
        <Route path={PATHS.NOT_FOUND} element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
