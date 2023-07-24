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
        가족만큼 반려동물에 투자를 아끼지 않는 고객을 타겟으로 
        반려동물의 건강 상태 정보를 입력하고
        맞춤형으로 반려동물 건강 증진용 
        프리미엄 제품 판매 추천!
        
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='마케팅 채널'
          value='모바일 추천'
        />
        <Information
          boxShadow={cardShadow}
          title='제품군'
          value='반려동물용 건강식품'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟'
          value='1200만 반려인'
        />
        <Information
          boxShadow={cardShadow}
          title='시장 성장율'
          value='매우 높음'
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
