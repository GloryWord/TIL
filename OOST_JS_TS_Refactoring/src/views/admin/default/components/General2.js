// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/default/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Brief Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        쇼핑 API 클릭율의 경우 상대적인 지표입니다.
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        증감율을 파악하는 용도로만 쓰길 권합니다.
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='출처'
          value='네이버 쇼핑 API'
        />
        <Information
          boxShadow={cardShadow}
          title='기간'
          value='23년 7월 10일~ 19일'
        />
        <Information
          boxShadow={cardShadow}
          title='집계기준'
          value='PC+MO, 전체 성별, 상대 클릭수'
        />
        <Information
          boxShadow={cardShadow}
          title='카테고리 개수'
          value='8개'
        />
        {/* <Information
          boxShadow={cardShadow}
          title='Organization'
          value='Simmmple Web LLC'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='20 July 1986'
        /> */}
      </SimpleGrid>
    </Card>
  );
}
