import pikachu from "../assets/pikachu.svg"

export default function Home() {

  return (
    <>
      <div className="row g-0 text-center mt-5">
      <h3>Bienvenido maestro Pokemon</h3>
        <div className=" col-12 col-md-12">
          <img src={pikachu} className="img-fluid mx-auto d-block" alt="Pikachu" />
        </div>
      </div>
    </>
  );
}
