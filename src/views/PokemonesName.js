import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PokemonesName() {
  const [pokemon, setPokemon] = useState(null)
  const { name } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [pokemon, name])

  return (
    <>
      {pokemon ?
        <div className="card my-4 p-3">
          <div className="row g-0">
            <div className=" col-12 col-md-8 d-flex align-content-center">
              {pokemon.sprites.other.dream_world.front_default
                ?
                <img src={pokemon.sprites.other.dream_world.front_default} className="img-fluid rounded-start mx-auto d-block" alt="Imagen Pokemon" />
                :
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Sin Imagen</text>
                </svg>
              }
            </div>
            <div className="col-12 col-md-4">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                {(pokemon.stats)
                  .map(p => <p key={p.stat.name} className="card-text text-capitalize">{p.stat.name} : {p.base_stat}</p>)
                }
                <p className="card-text"><small className="text-muted text-capitalize">Tipo: {pokemon.types[0].type.name}</small></p>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="d-flex justify-content-center align-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      }
    </>

  );
}
