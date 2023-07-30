import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/MCLS_04_Banner.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      // 배너 이미지 출력부
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "30px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>
      <Text
        fontSize={{ base: "18px", md: "24px" }}
        color='white'
        mb='7px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}>
        컴퓨터 및 주변기기는
      </Text>
      <Text
        fontSize='md'
        color='#E3DAFF'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='40px'
        lineHeight='28px'>
        PC, PC부품, 모니터, 멀티미디어 장비, 노트북, 프린터, 스피커, CD형태
         등으로<br></br>이루어져 있어요.
      </Text>
      <Flex align='center'>
        <Button
          bg='white'
          color='black'
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight='500'
          fontSize='14px'
          py='20px'
          px='27'
          me='38px'>
          대체 텍스트
        </Button>
        <Link>
          <Text color='white' fontSize='sm' fontWeight='500'>
            Show
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
