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

### 컴포넌트는 클래스로도 함수로도 구현될 수 있다. 일단 그렇게 알아두자. 두 방식의 차이는 있음.<br><br>
# Counter.jsx를 통한 기초 공부

## **Component 클래스**는 React 내장 클래스이다.
이 곳의 유용한 멤버함수를 알아 보겠다.

* constructor(props): 컴포넌트의 생성자 함수. 얘는 컴포넌트가 생성될 때 한 번 호출. 주로 초기 상태(State) 설정 및 이벤트 핸들러를 바인딩하는 등의 초기화 작업을 수행.
* render(): 컴포넌트의 UI를 반환하는 함수. 이게 눈에 보이는 UI가 되는 것. render 메서드는 필수적으로 정의되어야 하며, JSX 형태로 UI를 작성하여 반환.
* setState(newState, callback): 컴포넌트의 상태(State)를 업데이트하는 함수. setState는 새로운 상태 값을 받아 이전 상태와 합쳐 새로운 상태를 설정한다.<br>이 함수는 비동기적으로 동작하며,  ( setState 호출되면, 상태(State)를 즉시 업데이트하지 않고, 나중에 일괄적으로 업데이트하는 방식.  
동기화의 반댓말로 받아들이자.)상태가 업데이트되면 자동으로 컴포넌트가 다시 렌더링된다.
* 생명주기 메서드(Lifecycle methods): Component 클래스에는 여러 생명주기 메서드가 있습니다. 예를 들어, componentDidMount, componentDidUpdate, componentWillUnmount 등이 있습니다. 이러한 생명주기 메서드는 컴포넌트의 생성, 업데이트, 소멸과 관련된 작업을 수행할 수 있는 기능을 제공.
  
**Counter.jsx**

```javascript
import React, { Component } from 'react';
// Counter class는 Component class를 상속받는다.
class Counter extends Component {
  constructor(props) { 
    super(props); // 얘를 통해 Component 컴포넌트의 생성자가 활성화됨.
    this.state = {
      count: 0
    };
  } 

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
* constructor는 생성자라서 클래스 또는 컴포넌트 생성 시, 최초 1회 실행.
* 부모클래스 (Component)의 생성자를 호출. 원래 내부 컴포넌트의 props는 접근이 불가능하고, 상위 컴포넌트를 통하여 조작이 가능하다. 꼰대다.  
꼭 상위로 부터 내려오는 형식으로여야만 접근이 가능하다.
* 그런데 super(props)를 쓰면, 내부 컴포넌트에서 상위 컴포넌트의 생성자를 활성화 시키면서 상위 컴포넌트의 초기화를 함.
* 핵심 : 감히 내부 컴포넌트에서 상위 컴포넌트를 거슬러 올라가 생성자를 활성화 하여 상위 컴포넌트를 초기화했다.
* incrementCount( )내부에서의 this는 호출한 녀석에서의 인스턴스 (=클래스로부터 생성된 실제 객체)이다. 호출 위치는 render( )쪽이다.
* 