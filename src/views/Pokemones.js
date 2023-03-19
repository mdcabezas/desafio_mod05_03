import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  const [selected, setSelected] = useState("");
  const [pokemons, setPokemons] = useState([])

  const navigate = useNavigate()

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  const viewDetail = (e) => {
    e.preventDefault()
    navigate(`/pokemones/${selected}`)
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`)
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, [pokemons])

  return (
    <form className="mt-4 text-center">
      <h4 className="mb-4">Selecciona un pokemon</h4>
      <div className="form-group">
        {pokemons ?
          <select className="form-select-lg" onChange={handleChange} >
            <option selected value={selected}>Pokemones</option>
            {pokemons.map(pokemon => <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>)}
          </select>
          :
          <div class="d-flex justify-content-center align-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
          </div>
        }
      </div>
      <button type="submit" className="btn btn-primary mt-4" onClick={viewDetail}>Ver Detalle</button>
    </form>
  );
}
