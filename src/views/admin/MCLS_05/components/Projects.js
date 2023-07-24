// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import MCLS_05_01 from "assets/img/article/MCLS_05_article1.png"
import MCLS_05_02 from "assets/img/article/MCLS_05_article2.png"
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
      매일 소소한 계획을 세우고 실천하며 성취감을 얻는 트렌드 형성
      </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_05_01}
        ranking='1'
        link='https://www.m-i.kr/news/articleView.html?idxno=975327'
        title='문구업계, ‘다이어리 쇼핑’ 나선 MZ세대 공략'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={MCLS_05_02}
        ranking='2'
        link='https://www.fnnews.com/news/202302091759367236'
        title='"God+生"에 빠진 MZ들'
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
