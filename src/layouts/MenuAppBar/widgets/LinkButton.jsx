// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LinkButton(props) {
  return <Link to={props.ruta}
    className={props.className}
  //activeClassName={props.activeClassName} // Clase para cuando está activo


  >{props.name} </Link>;
}

export default LinkButton;
