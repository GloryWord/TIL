// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import MCLS_06_01 from "assets/img/article/MCLS_06_article1.png"
import MCLS_06_02 from "assets/img/article/MCLS_06_article2.png"
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/MCLS_06/components/Project";

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
      최근 5년 반려동물 시장 79% 성장
      반려인구는 1,200만명 이상, 현재 관심사는?
      </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_06_01}
        ranking='1'
        link='https://www.apnews.kr/news/articleView.html?idxno=3010460'
        title='"반려동물 양육 문화 성숙 단계"… KB금융, 2023 보고서 발간"'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_06_02}
        ranking='2'
        link='https://www.kbfg.com/kbresearch/report/reportView.do?reportId=2000396'
        title='KB금융지주 2023 한국 반려동물보고서'
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
