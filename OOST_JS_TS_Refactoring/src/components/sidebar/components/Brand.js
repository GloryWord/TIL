import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";
import {ReactComponent as OOST} from "assets/img/logo/OOST_logo_sample.svg";
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <OOST width='300px' h='200px' w='175px' my='32px' color={logoColor} />
      <HSeparator mb='40px' />
    </Flex>
  );
}

export default SidebarBrand;
