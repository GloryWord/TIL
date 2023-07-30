// Chakra imports
import { SimpleGrid, Text, useColorModeValue,Image } from "@chakra-ui/react";
import { CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/default/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { img, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Image
      src={img}
      alt='PC부품,PC 검색량'
      borderRadius='lg'
    />
      
    
      <img src={img} alt="노트북,노트북악세사리" />

      
      
    </Card>
  );
}
