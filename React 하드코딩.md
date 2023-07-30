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

  render() { // 컴포넌트를 UI로 반환
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Up!</button>
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
* setState 함수는 매개변수 두 개로, (바꿀 값,함수)로 알았는데, 이건 일단 보류한다.
* setState함수는 두 가지 방식으로 사용할 수 있다. 첫 번째 방식은 객체를 전달하여 상태를 업데이트하는 것이고, 두 번째 방식은 함수를 전달하여 업데이트를 수행하는 것. (여기선 화살표 함수를 썼다.)
* prevState는 화살표 함수의 매개변수이고, 이전 상태(prevState)를 의미한다.
* ({ count: prevState.count + 1 }) 이 부분의 해석은, count라는 key의 value를 업데이트했다고 보면 된다. 실제로 key,value는 아니고 이해를 돕기 위함이다. 실제로는 속성, 속성 값이다.
## **후크**
후크를 쓰는 이유 : 기존에는 class component로만 state를 관리할 수 있었는데, 후크를 쓰면 function component로 state를 관리할 수 있게된다.  
후크를 쓰기 위한 중요한 규칙  
1. React 함수 component의 최상위 수준에서 호출해야한다.
2. 루프,조건문, 중첩된 함수 안에서 후크 호출 불가.
3. 후크는 함수이다. 물론 어떤 함수인지에 따라 기능은 다를지 언정.<br><br>
### 상태를 선언하는데 이용하는 후크 함수 : **useState**
```javascript
import React, { useState } from 'react';

function Counter() {
  // 초기값이 0인 상태
  // useState 형태는 왼쪽에 두 개의 인수가 나오는데, 이것은 바꿀 값의 변수, 적용할 함수이다. 참고로 setCount는 내장함수. (useEffect등등의 함수가 들어감.)
  const [count, setCount] = useState(0); // 0으로 설정.
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;

```
### **부수 효과(side effect)**
정의 : 컴포넌트 외부와의 상호작용  
보통 useEffect 함수를 쓴다.
### useEffect
useEffect( )는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook(함수)이다.<br><br>
그러면 경우의 수는, 최초 실행시에만 실행, component의 props, state가 update 될 때, 새로고침 같이 Re rendering될 때 마다 실행 이렇게 3가지가 있겠다.
```javascript
import React, { useEffect } from 'react'; // useEffect import 하는 방법
useEffect(() => {
    console.log('최초 실행 시에만 실행된다');
  }, []); // 두번 째 인자에 빈 배열 넣기.

useEffect(() => {
   console.log('렌더링 될 때 마다 실행.');
}); // 두번 째 인자에 배열이 없으면 리렌더링시 실행

useEffect(() => {
    console.log(varation);
    console.log('varation라는 변수가 업데이트 될 때 실행.');
  }, [varation]); // 물론, 업데이트 뿐만 아니라 최초 실행시에도 실행 됨.

const mounted = useRef(false);

useEffect(() => {
  if(!mounted.current){
    mounted.current = true; // 이곳에서의 mounted는 실행임.
  } else {
  //ajax
  }
},[바뀌는 값]); // 업데이트 할 때만 실행되고 최초 실행시에는 안 하기.
```

### **Context란?**
컴포넌트 간에 값을 공유할 수 있도록 하는 기능. 보통 전역적인 값을 다룰 때 필요하다.  
그냥 단순히리액트 컴포넌트에서 Props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법이다" 라고 접근을 하시는 것도 좋다.
#### **Props 으로만 데이터 전달 할 수도 있는거 아닌가?**
-> 컴포넌트는 꼰대라서, 위계질서가 중요하다. 상위 클래스에서 단계적으로 하위 클래스로 전달하여 줘야하고, 컴포넌트 내부의 겹겹 컴포넌트가 많을 수록 이 과정은 더 길고 복잡해진다. 실수할 가능성도 생긴다.<br><br>
매우 겹겹이 쌓여진 Props 전달 코드를 Props Drilling 이라고 부른다. 컴포넌트를 한 두개정도 거쳐서 Props를 전달하는거라면 괜찮지만 이렇게 4개정도를 거쳐서 전달하게 된다면, 매우 불편하다.
### **Context의 사용법**
```javascript
import { createContext } from 'react';
const MyContext = createContext();
```
여기서 MyContext에는 Provider라는 컴포넌트가 들어있다. 그 컴포넌트간에 공유하고자 하는 값을 value라는 Props으로 설정하면 자식 컴포넌트들에서 해당 값에 바로 접근 할 수 있다.
```javascript
function App() {
  return (
    <MyContext.Provider value = "Hello World"> 
      <GrandParent /> 
    </MyContext.Provider> // .

  )
  // Provider 컴포넌트의 Props 즉, 자식 컴포넌트의 입장에서는 value으로 쓸 변수의 값이 Hell World
// JSX에서 컴포넌트를 표현하는 태그 형식 (문자 뒤에 / 있음.) 
// 문자앞에 /가 있는것은 HTML 처럼 닫힘 태그이다
}
```
## Component에서 재사용 예시, Props 전달하는 방법
export default는 외부에서 해당 컴포넌트 함수를 import 하도록 하는 뜻.

다음은 component 재사용 예시를 보여준다.

```typescript
export default function Profile() { // 사진을 올리는 컴포넌트. 이 사진의 크기를 일괄적으로 바꿔야 할 때가 있겠다.
  return (
    <img
      src="이미지 소스"
      alt = "부제"
      /> // 태그가 <></>형식이 아니라, </> 한번에 몰아서 끝낼 수도 있구나.
  )
}

export default function Gallery() { // 컴포넌트 호출을 <Profile /> 이런식으로 하는군
  return (
    <section>
      <h1>Scientists</h1>
      <Profile />   
      <Profile />
      <Profile />
    </section>
  )
}
```

참고로, 태그에 소문자가 있으면 html, 대문자면 컴포넌트. 

컴포넌트 안에 컴포넌트를 선언하면 안됨.

다음은 props를 전달받는 예시이다.

```typescript
function Avatar() {
  return (
    <img
      classname="avatar"
      src="http://1bX5QH6....."
      alt="린 야오밍"
      width={100}
      height={100}
      />
  );
}

export default function Profile() {
  return (
    <Avatar
      person={{ name="린 야오밍", imageId: '1bX5QH6'}}
      size={100}
      />
  );
}

function Avatar({ person, size }) { // props이 {}로 전달되는 이유는 {} 내부 요소들이 하나의 props이기 때문이다.
  return (
    <img
      className ="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      />
  );
}
```

