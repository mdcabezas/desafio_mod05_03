import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonesName from "./views/PokemonesName";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemonesName />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
