import Titulo from "../Titulo/Titulo";
import { Boton } from "../Boton/Boton";
import "./BarraSuperior.css";

const BarraSuperior = () => {
  return (
    <div className="toolbar">
      <Titulo texto="Frontend Inc." nivel={2} textColor="#019CFD" />
      <div className="toolbar-btns">
        <Boton label="inicio" />
        <Boton label="productos" />
        <Boton label="servicios" />
        <Boton label="ingresar" primary={false} />
      </div>
    </div>
  );
};

export default BarraSuperior;
