import brise from "@/assets/brise.jpg";
import coups from "@/assets/forts coups de vent.jpg";
import ouragan from "@/assets/ouragan.jfif";
import tempete from "@/assets/tempête.jpg";
import fort from "@/assets/vent fort.jpg";
import frais from "@/assets/vent frais.jpg";

//affichage de chaque produit dans la liste de la home
function WindItem({ windCover, windName, windPrice,windDescription }) {
let cover = "";
  switch (windCover) {
    case "brise":
      cover = brise;
      break;
    case "coups":
      cover = coups;
      break;
    case "ouragan":
      cover = ouragan;
      break;
    case "tempete":
      cover = tempete;
      break;
    case "fort":
      cover = fort;
      break;
    default:
      cover = frais;
  }
  return (
    <li className="bg-sky-500 m-4 flex justify-center items-center">
      <img src={cover} alt={`${windName} cover`} />
      <label className="ml-4 mr-8 text-3xl">
        {" "}
        {windName} <br />
        {windPrice} € <br />
        <span className="text-xl">{windDescription}</span>
        
      </label>
    </li>
  );
}

export default WindItem;
