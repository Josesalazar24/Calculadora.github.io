import { Box, Button } from "@chakra-ui/react";

const BotonClear = (props) => (
  <Button
    h="80px"
    w="100%"
    fontSize="1.6em"
    backgroundColor={"#ac0246"}
    marginTop="8px"
    justifyContent="center"
    alignItems="center"
    fontWeight={"bold"}
    color={"white"}
    border="2px solid white"
    cursor={"pointer"}
    _hover={"#ebb000"}
    borderRadius="20px"
    textAlign={"center"}
    onClick={props.manejarClear}
  >
    {props.children}
  </Button>
);

export default BotonClear;
