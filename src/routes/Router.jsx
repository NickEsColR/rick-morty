import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../Constants/Paths";
import { Characters } from "../Pages/characters/Characters";
import { Locations } from "../Pages/locations/Locations";
import { Episodes } from "../Pages/episodes/Episodes";
import { Header } from "../components/Header/Header";
import { Error } from "../Pages/error-404/Error";

/**
 * This function is used to manage the routes of the app
 * @returns {JSX.Element}}
 */
export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path={PATHS.HOME} element={<h1>Home</h1>} />
          <Route path={PATHS.CHARACTERS} element={<Characters />} />
          <Route path={PATHS.LOCATIONS} element={<Locations />} />
          <Route path={PATHS.EPISODES} element={<Episodes />} />
          <Route path={PATHS.NOT_FOUND} element={<Error/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
