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
        APP으로 간단하게 배송받는 추세입니다.(뷰티컬리, 올리브영, 쿠팡)       
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='20px'>
        코로나 이후 대면 활동의 증가로 색조 메이크업(아이/립) 시장이 발달하고 있습니다.        
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='34px' mb='20px'>
        헤어 케어 부분에서 영양공급 제품(트리트먼트, 탈모샴푸)등이 관심입니다!
        
      </Text>
      
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='마케팅 채널'
          value='모바일이 강세'
        />
        <Information
          boxShadow={cardShadow}
          title='시장 상승율'
          value='전체 시장 비슷함'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟 1'
          value='색조 메이크업 대상자 20-40대 여성'
        />
        <Information
          boxShadow={cardShadow}
          title='마케팅 타겟 2'
          value='헤어 케어 상품 : 트리트먼트, 탈모 관리 제품'
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
