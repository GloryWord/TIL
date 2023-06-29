## **App.js**
```javascript 
// 기존의 틀렸던 코드
// import React from 'react';

// function Hello(props) {
//   return <div>Hello, {props.name}!</div>;
// }

// export default Hello;

import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Alice" />
      <Hello name="Bob" />
    </div>
  );
}

export default App;
```
### 이 코드에서 배운 점
1. export default는 파일 이름으로 넣는다.
2. 컴포넌트 함수(?)인 function도 파일 이름으로 둔다. 나는 App.js인데 Hello로 했다.
3. App.js에서는 타 jsx파일을 import하여 쓴다.
4. 여기서 return의 Hello가 import 되어 인식 가능한 것이다.
5. App.js는 main함수 격이다. 여길 실행하되, 여기서 다른 jsx를 불러서 쓰니까.
6. <>쪽에 Hello name="Alice" / 를 살펴보면, Hello는 컴포넌트 함수, name은 그 함수의 멤버변수이다. / > 의 의미는 잘 모르겠다만, 값 전달에 필요한 가보다.
7. GPT에선 App.js를 부모 컴포넌트라고 부른다.
8. 컴포넌트는 미성년자라고 보면 된다. 부모(상위) 컴포넌트로 상태가 변경 가능하다.


<Hello name="Alice" />

## **Hello.jsx**
```javascript
// 기존의 틀렸던 코드
// import React from 'react';
// import Hello from './Hello';

// function App() {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Alice" />
//       <Hello name="Bob" />
//     </div>
//   );
// }

// export default App;
// + index.js에서 import Hello from './Hello';를 제거했더니 됐다.

import React from 'react';

function Hello(props) {
  return <div>Hello, {props.name}!</div>;
}

export default Hello;
```
