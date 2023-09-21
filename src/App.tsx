import { Logo } from "./appStyle";
import { Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import Home from "./pages/Home";
import LikedPokemons from "./pages/LikedPokemons/LikedPokemons";

function App() {
  return (
    <>
      <div>
        <Logo to="/">
          <img src="../pokemon.png" alt="Pokemon" width={400} />
        </Logo>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/liked-pokemons" element={<LikedPokemons />} />
      </Routes>
    </>
  );
}

export default App;
