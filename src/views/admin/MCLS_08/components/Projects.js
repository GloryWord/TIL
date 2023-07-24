// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import MCLS_08_01 from "assets/img/article/MCLS_08_article1.png"
import MCLS_08_02 from "assets/img/article/MCLS_08_article2.png"
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/MCLS_08/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        관련기사
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      최근 5년 모바일 부분 매출 상승세
      어린이날, 크리스마스 기점으로 큰 폭으로 상승 
      </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_08_01}
        ranking='1'
        link='https://www.etoday.co.kr/news/view/2244385'
        title='결혼 연령 늦춰지며 ’조카바보’ 늘었다'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_08_02}
        ranking='2'
        link='https://www.dailysmart.co.kr/news/articleView.html?idxno=7735'
        title='[스마트 1분 상식] 에잇포켓은 무슨 뜻일까요?'
      />
      {/* <Project
        boxShadow={cardShadow}
        image={Project3}
        ranking='3'
        link='#'
        title='Most essential tips for Burnout'
      /> */}
    </Card>
  );
}
