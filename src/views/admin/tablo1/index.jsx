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
// Chakra imports
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components

// Assets

export default function Tablo1() {
  //Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
    {/* Main Fields */}
    <flex>
      <iframe
      src = "https://public.tableau.com/shared/5NMZWJ5X4?:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
      //src="https://public.tableau.com/views/_16890614990300/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true "
      width="100%"
      height="900"
      title='test1'/>
    </flex>

    {/* Delete Product */}
    </Box>

  );
}
