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
        MD insight!
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        어린이날, 크리스마스 시기 기준 조카 선물        
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='34px' mb='40px'>
        2030 고객을 타겟으로
        어린이 선물 추천과 가격대별 편리하게 상품을 준비해보세요!
        
      </Text>
      
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='마케팅 채널'
          value='모바일 추천'
        />
        <Information
          boxShadow={cardShadow}
          title='평균 선물 예산'
          value='12만 4,800원'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟'
          value='조카 선물, 자녀 선물'
        />
        <Information
          boxShadow={cardShadow}
          title='시장 성장율'
          value='특정 시기 두드러짐, 상승세'
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
