import brise from "../../assets/brise.jpg";
import coups from "../../assets/forts coups de vent.jpg";
import ouragan from "../../assets/brise.jpg";
import tempete from "../../assets/tempête.jpg";
import fort from "../../assets/vent fort.jpg";
import frais from "../../assets/vent frais.jpg";

//affichage de chaque produit dans la liste de la home
function WindItem({ windCover, windName, windPrice }) {
let cover = "";
  switch (windCover) {
    case "brise":
      cover = brise;
      break;
    case "coups":
      cover = brise;
      break;
    case "ouragan":
      cover = brise;
      break;
    case "tempete":
      cover = brise;
      break;
    case "fort":
      cover = brise;
      break;
    default:
      cover = frais;
  }
  return (
    <li className="bg-sky-500 m-4 flex justify-center items-center">
      <img src={cover} alt={`${windName} cover`} />
      <label className="ml-4 mr-8 text-4xl">
        {" "}
        {windName} <br />
        {windPrice} €
      </label>
    </li>
  );
}

export default WindItem;
