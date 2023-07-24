/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Grid,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import React from 'react';
// Custom part
import General from "views/admin/MCLS_06/components/General";
import Projects from "views/admin/MCLS_06/components/Projects";
import Banner from "views/admin/MCLS_06/components/Banner copy";
import Card from "components/card/Card.js";
import Graph from "components/card/Graph"
// Assets
import avatar from "assets/img/avatars/avatar4.png";
import banner from "assets/img/auth/banner.png";
import MCLS_06_graph1 from "assets/img/graph/MCLS_06_graph1.png"
import MCLS_06_graph2 from "assets/img/graph/MCLS_06_graph2.png"

export default function MCLS_06() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  //
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "10px", xl: "10px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          {/* 배너 */}
          <Banner />
          <Flex direction='column'>
            {/* 중간 컬럼 */}
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                매출 동향
              </Text>
            </Flex>
            {/* 이미지 출력부분 */}
            <SimpleGrid columns={{ base: 1, md: 1 }} gap='20px' row = {2}>
              <Graph

                image={MCLS_06_graph1}
                
              />
              <Graph
                image={MCLS_06_graph2}

              />
            </SimpleGrid>
          </Flex>


          
          {/* 그리드 설정 추가 박스 카드 양식 추가 반려동물용품 글자 크게 사료, 장난감, 장신구 글자 작게 */}
          {/* <TotalSpent /> */}
          {/* 통계청 우상향 매출액 그래프 관련 이미지 및 차트 */}
          {/* 코로나 19 이후 반려동물 모바일 매출액 성장세 그래프 관련 이미지 및 차트 */}
        </Flex>
        
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <General gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            minH='365px'
            pe='20px'
            />
          </Card>
          {/* 링크 관련 */}
          <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
          />
        </Flex>
      </Grid>  

        {/* <TotalTraffic /> */}

        {/* 그리드 관련 양식 추가 */}


        {/* 2015년 부터 20년까지 5년간 반려동물 시장 규모 상승 기사 */}
        {/* 현재 반려인구는 1,200만 이상 등 관련 기사 */}
      
    </Box>
  );
}
