// import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <button 
  className="navbar-toggler" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarPokemon" 
  aria-controls="navbarPokemon" 
  aria-expanded="false"
  aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarPokemon">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pokemones" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
            Pokemones
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}