import { HStack, VStack, Text, Box, Stack } from "@chakra-ui/react";
import "./App.css";
import Boton from "./componentes/boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/botonclear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <Stack
      h="100vh"
      pt="10px"
      backgroundColor={"#1b1b32"}
      align={"center"}
      justifyContent="center"
    >
      <VStack
        w={"400px"}
        h={"600px"}
        p="14px"
        bgColor={"#99c9ff"}
        border="5px"
        borderRadius="20px"
        borderColor="white"
        align="center"
      >
        <Pantalla input={input} />
        <HStack w={"100%"}>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </HStack>
        <HStack w={"100%"}>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </HStack>
        <HStack w={"100%"}>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </HStack>
        <HStack w={"100%"}>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </HStack>

        <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
      </VStack>
    </Stack>
  );
}

export default App;
