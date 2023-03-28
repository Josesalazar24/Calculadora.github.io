import React from "react";
import { Box, Stack } from "@chakra-ui/react";

const Pantalla = ({ input }) => (
  <Box
    h="75px"
    w={"90%"}
    alignItems="center"
    justifyContent={"space-between"}
    borderRadius="30px"
    marginBottom="20px"
    fontSize="30px"
    backgroundColor="#0a0a23"
    color={"white"}
    p="11px 30px 11px 11px"
    margin="1px solid #888"
    boxShadow={"-1px 4px 1px 1px white"}
  >
    {input}
  </Box>
);

export default Pantalla;
