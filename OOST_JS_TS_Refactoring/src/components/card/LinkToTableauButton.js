import { Button, Center} from "@chakra-ui/react"; // Card를 여기에 import 하면 안됩니다. 왜냐면 커스텀 컴포넌트로 이미 원작자가 정의 해놨어요.
import Card from "components/card/Card.js" // 바로 여기에.



// backgroundColor: 버튼 색, hoverColor : 버튼에 마우스 올리면 변하는 색
// padding : 버튼과 버튼을 감싸는 카드와 여백, margin : 버튼 끼리의 여백 공간.
// 지금 Button에 써있는 옵션들은 기본 값입니다.
function LinkToTableau({ buttonText, backgroundColor, hoverColor }) {
  return (
    <Card>
      <Center>
        <Button
          color="white"
          backgroundColor={backgroundColor}
          padding="20px 20px"
          marginLeft="20px"
          marginRight="20px"
          fontSize="16px"
          _hover={{ backgroundColor: hoverColor }}
        >
          {buttonText}
        </Button>
      </Center>
    </Card>
  );
}
export default LinkToTableau;
