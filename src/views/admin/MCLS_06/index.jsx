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
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import React from 'react';

import TotalSpent from "views/admin/default/components/TotalSpent";
import TotalTraffic from "views/admin/default/components/TotalTraffic";

// Custom part
import General from "views/admin/MCLS_06/components/General";
import Projects from "views/admin/MCLS_06/components/Projects";
// Assets
import avatar from "assets/img/avatars/avatar4.png";
import banner from "assets/img/auth/banner.png";

export default function MCLS_06() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  //
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, "2xl": 4 }}
        gap='20px'
        mb='20px'>
        {/* 그리드 설정 추가 박스 카드 양식 추가 반려동물용품 글자 크게 사료, 장난감, 장신구 글자 작게 */}
        반려동물용품은
        사료, 장난감, 장신구 등으로 이루어져 있어요


      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* <TotalSpent /> */}
        {/* 통계청 우상향 매출액 그래프 관련 이미지 및 차트 */}
        {/* 코로나 19 이후 반려동물 모바일 매출액 성장세 그래프 관련 이미지 및 차트 */}
        <General gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        {/* //<WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        {/* <TotalTraffic /> */}
        <General gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        {/* 그리드 관련 양식 추가 */}
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
        {/* 링크 관련 */}
        {/* 2015년 부터 20년까지 5년간 반려동물 시장 규모 상승 기사 */}
        {/* 현재 반려인구는 1,200만 이상 등 관련 기사 */}
      </SimpleGrid>

    </Box>
  );
}
