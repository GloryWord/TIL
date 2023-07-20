// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { IoCheckmarkCircle } from "react-icons/io5";
// Assets
import { SpentArr } from "variables/SpentArr"
import React, { useState } from "react";
import {Select} from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

// LineChart.js 를 그냥 여기다가 옮겼습니다.
function MyLineChart(props) {
  const { lineChartData } = props;
  return (
    console.log("props 받은 후 lineChartData: ",lineChartData),
	<ReactApexChart
          type="line"
          series= {[
           	 { name: "매출", data:lineChartData},
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            stroke: {curve: "smooth",type: "line",},
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: ["2022.05", "2022.06","2022.07","2022.08","2022.09","2022.10","2022.11","2022.12","2023.01","2023.02","2023.03","2023.04","2023.05","2023.06"],
              type: "category",
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            tooltip: {
              y: { formatter: (value) => `${value.toFixed(2)}백만원` },
            },
          }}
        />
  );
}
export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  
  const [selectedValue, setSelectedValue] = useState("");
  const [lineChartDataTotalTraffic, setLineChartDataTotalTraffic] = useState([17710119,17104747,17332551,18008583,17358050,17970891,18438854,18897567,18042084,17041993,18630111,17788676,19246334]);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedValue(selectedCategory);
    console.log("selectedCategory의 값(set함수 후) :",selectedCategory)
    setLineChartDataTotalTraffic(SpentArr[selectedCategory][0].data)
    console.log("Set 후에 lineChartDataTotalTraffic :",lineChartDataTotalTraffic)
  };
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Select placeholder="카테고리 선택" size="lg" onChange={handleChange}
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}>
            <option value="전체카테고리">전체카테고리</option>  
            <option value="컴퓨터 및 주변기기">컴퓨터 및 주변기기</option>
            <option value="가전/전자">가전/전자</option>
            <option value="통신기기">통신기기</option>
            <option value="서적">서적</option>
            <option value="사무/문구">사무/문구</option>
            <option value="의복">의복</option>
            <option value="신발">신발</option>
            <option value="가방">가방</option>
            <option value="패션용품 및 액세서리">패션용품 및 액세서리</option>
            <option value="스포츠·레저용품">스포츠·레저용품</option>
            <option value="화장품">화장품</option>
            <option value="아동·유아용품">아동·유아용품</option>
            <option value="음·식료품">음·식료품</option>
            <option value="농축수산물">농축수산물</option>
            <option value="생활용품">생활용품</option>
            <option value="자동차 및 자동차용품">자동차 및 자동차용품</option>
            <option value="가구">가구</option>
            <option value="반려동물용품">반려동물용품</option>
            <option value="여행 및 교통 서비스">여행 및 교통 서비스</option>
            <option value="문화 및 레저서비스">문화 및 레저서비스</option>
            <option value="이쿠폰서비스">이쿠폰서비스</option>
            <option value="음식서비스">음식서비스</option>
          </Select>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='17px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            상품군별 매출
          </Text>
          <Flex align='center' mb='20px'>
            {/* <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='700'
              mt='4px'
              me='12px'>
              전년대비
            </Text> */}
            {/* <Flex align='center'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
              <Text color='green.500' fontSize='sm' fontWeight='700'>
                +2.45%
              </Text>
            </Flex> */}
          </Flex>

          <Flex align='center'>
            <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
            <Text color='green.500' fontSize='md' fontWeight='700'>
              One Year
            </Text>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          
          {/* <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          /> */}
          <MyLineChart lineChartData={lineChartDataTotalTraffic} />
        </Box>
      </Flex>
    </Card>
  );
}
