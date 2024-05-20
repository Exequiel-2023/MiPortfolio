import exequiel from "../assets/exequiel.jpg";
import "../css/Header.css"

const Header = () => {

    const Midatos = {
      NomyApe: " Nuñez Walter Exequiel"
    }

  return (
    <div className="header">
      <br />
      <br />
      <img src={exequiel} alt="" width={250} height={300} />
      <br />
      <br />
      <h1>{Midatos.NomyApe}</h1>
        <br />
        <br />
    </div>
  )
}

export default Header