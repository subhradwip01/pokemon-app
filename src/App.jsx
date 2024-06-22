import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import Home from "./Pages/Home";
import PokemonDetails from "./Pages/PokemonDetails";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.BASE} element={<Home />} />
        <Route
          path={`${ROUTES.POKEMON_DETAILS}/:pokemonId`}
          element={<PokemonDetails />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
