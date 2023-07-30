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

import React, { useEffect } from "react";
//
import { Redirect, Route, Switch } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
// import {useParams} from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import TabloCard from "components/card/TabloCard";
//import Card from "components/card/Card.js";


// Assets

import Pop from "assets/img/nfts/pop.png";
import Pie from "assets/img/nfts/pie.png";
import LCLS_fm from "assets/img/nfts/LCLS_fm.png"
import LCLS_type from "assets/img/nfts/LCLS_type.png"
// delete parts

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  //
  // const {tablolistSlug} = useParams();
  // const tablolist = gettablolistSlug(tablolistSlug);
  //const tablolistColor = gettablolistColor(tablolist?.code);
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "2fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 1 / 3", "2xl": "1 / 1 / 1 / 2" }}>
          {/* <Banner /> */}
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Tablo Analysis Story
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap='20px'>
              <TabloCard
                name='태블로 샘플 파트 1'
                author='태블로 샘플 1'
                image={Pop}
                // currentbid='0.91 ETH' 
                download='http://localhost:3000/horizon-ui-chakra#/tablo/tablo1'
              />
              <TabloCard
                name='태블로 샘플 파트 2'
                author='태블로 샘플 2'
                image={Pie}
                // currentbid='0.91 ETH'
                download='#'
              />
              <TabloCard
                name='태블로 샘플 파트 2'
                author='태블로 샘플 2'
                image={LCLS_fm}
                // currentbid='0.91 ETH'
                download='#'
              />
              <TabloCard
                name='태블로 샘플 파트 2'
                author='태블로 샘플 2'
                image={LCLS_type}
                // currentbid='0.91 ETH'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}

// export default function Marketplace() {
  // Chakra Color Mode
  // const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");














  
  // return (
  //   <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
  //   {/* Main Fields */}
  //   <flex>
  //     <iframe
  //     src = "https://public.tableau.com/shared/5NMZWJ5X4?:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
  //     //src="https://public.tableau.com/views/_16890614990300/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true "
  //     width="100%"
  //     height="900"
  //     title='test'/>
  //   </flex>

  //   {/* Delete Product */}
  //   </Box>

  // );


  // return (
  //   <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
  //     {/* Main Fields */}


  //     {/* Delete Product */}
  //   </Box>
  // );
// }
