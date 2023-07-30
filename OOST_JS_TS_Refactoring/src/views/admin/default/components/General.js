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
        모든 기간동안, 모바일 매출액이 높은데, 검색량은 pc에서 더 많다니…?
        모바일 매출액이 높은 이유? 
        간편결제방식, 쇼핑 어플 전용 할인혜택, PC보다는 시간과 장소 제약 없이 사용할 수 있음
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Data'
          value='통계청 데이터'
        />
        <Information
          boxShadow={cardShadow}
          title='기간'
          value='2021년 5월 ~ 23년 5월(2개년)'
        />
        <Information
          boxShadow={cardShadow}
          title='Data'
          value='네이버 쇼핑 API'
        />
        <Information
          boxShadow={cardShadow}
          title='기간'
          value='2021년 5월 ~ 23년 5월(2개년)'
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
