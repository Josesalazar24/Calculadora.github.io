import { Box } from "@chakra-ui/react";
import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
    // isNan: si no es numero 'si valor no es un numero y tampoco es un punto y si tampoco es = retorna true
  };

  return (
    <Box
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </Box>
  );
}

export default Boton;
