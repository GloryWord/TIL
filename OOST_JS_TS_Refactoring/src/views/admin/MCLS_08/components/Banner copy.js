import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/MCLS_08.png";

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
        color='Black'
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
        아동·유아용품은 
      </Text>
      <Text
        fontSize='md'
        color='#00000'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='20px'
        lineHeight='28px'>
        기저귀, 유모차, 카시트, 인형, 완구
        등으로 이루어져 있어요.
      </Text>
      <Flex align='center'>
        <Button
          bg='pink'
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
        {/* <Link>
          <Text color='white' fontSize='sm' fontWeight='500'>
            Show
          </Text>
        </Link> */}
      </Flex>
    </Flex>
  );
}
