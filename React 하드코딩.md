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

### 컴포넌트는 클래스로도 함수로도 구현될 수 있다. 일단 그렇게 알아두자. 두 방식의 차이는 있음.

## **Component 클래스**는 React 내장 클래스이다.
이 곳의 유용한 멤버함수를 알아 보겠다.

* constructor(props): 컴포넌트의 생성자 함수. 얘는 컴포넌트가 생성될 때 한 번 호출. 주로 초기 상태(State) 설정 및 이벤트 핸들러를 바인딩하는 등의 초기화 작업을 수행.
* render(): 컴포넌트의 UI를 반환하는 함수. 이게 눈에 보이는 UI가 되는 것. render 메서드는 필수적으로 정의되어야 하며, JSX 형태로 UI를 작성하여 반환.
* 



setState(newState, callback): 컴포넌트의 상태(State)를 업데이트하는 메서드입니다. setState는 새로운 상태 값을 받아 이전 상태와 합쳐 새로운 상태를 설정합니다. 이 메서드는 비동기적으로 동작하며, 상태가 업데이트되면 자동으로 컴포넌트가 다시 렌더링됩니다.

생명주기 메서드(Lifecycle methods): Component 클래스에는 여러 생명주기 메서드가 있습니다. 예를 들어, componentDidMount, componentDidUpdate, componentWillUnmount 등이 있습니다. 이러한 생명주기 메서드는 컴포넌트의 생성, 업데이트, 소멸과 관련된 작업을 수행할 수 있는 기능을 제공합니다.

상속받은 Component 클래스를 사용하면 리액트 컴포넌트를 더욱 강력하고 유연하게 개발할 수 있습니다. 이 클래스는 컴포넌트의 상태 관리, 이벤트 처리, 렌더링 등의 핵심적인 기능을 제공하여 개발자가 효율적으로 컴포넌트를 작성할 수 있도록 도와줍니다.