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
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='20px'>
        3월, 12월 마다 규칙적으로 매출이 상승합니다.        
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='20px'>
        신학기, 3월에는 문구용품을 노출 시키고        
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='34px' mb='20px'>
        연말, 연초에는 다이어리 및 달력 관련 제품을 상위 노출 하세요!
        
      </Text>
      
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='마케팅 채널'
          value='모바일이 조금 더 우세'
        />
        <Information
          boxShadow={cardShadow}
          title='시장 상승율'
          value='완만한 상승폭'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟 1'
          value='신학기 학부모, 학생'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟 2'
          value='홈 인테리어 족, 직장인'
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
