# 0825

폴더만들고 터미널 키고 npx create-react-app . router-test --template typescript 하는데, npm 불가능한 이름 규칙 땜에 귀찮은 일이 있었다.<br><br> 대문자 안되고 띄어쓰기 안됨.
다 수정하고 실행하니 아래의 로그가 기록됨.
```cmd
Doldari Teenager@Doldari-Teenager MINGW64 ~/react_with_typescript_project_coding_jogyo
$ npx create-react-app . router-test --template typescript

Creating a new React app in C:\Users\dlwhd\react_with_typescript_project_coding_jogyo.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


added 1439 packages in 2m

241 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 47 packages, and changed 2 packages in 16s

245 packages are looking for funding
  run `npm fund` for details

We detected TypeScript in your project (src\App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using npm...


removed 1 package, and audited 1486 packages in 3s

245 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created react_with_typescript_project_coding_jogyo at C:\Users\dlwhd\react_with_typescript_project_coding_jogyo
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd C:\Users\dlwhd\react_with_typescript_project_coding_jogyo
  npm start

Happy hacking!
```

# 0826

index.html에서 지운 것들 

```typescript   
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```
public 폴더 내부의 logo192, logo512, manifest.json, robots.txt 삭제.<br>
App.css, App.test.tsx 삭제.<br>
App.tsx 내부 코드를

```typescript
function App() {
  return (
    <>
      <h1>App</h1>
    </>
  );
}
export default App;
```
이 코드로 대체.

index.css 삭제,
index.tsx에서 
```typescript
import reportWeVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
삭제. 다만, 강의가 2021년이라 index.tsx의 구조가 많이 다르다. 일단 진행한다.

logo.svg, react-app-env.d.ts, reportWebVitals.ts, setupTest.ts 삭제
package.json에서는 의존성 중에서 아래 코드 제거.

```typescript
 "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4"
```

script에서는 
"test": "react-scripts test",
    "eject": "react-scripts eject"
제거

도움이 되는 Extension 설치 후, src 폴더에 components, routes 폴더 만들기

App.tsx라는 진입점이 있지만, 그렇게 하지 않는다. App은 라우터를 관리하는 목적으로만 쓸 것이다.<br>무슨 말이냐면 App.tsx가 진입점은 맞는데, 포인터 처럼 App.tsx로 오면 어디로 가야하는지 라우팅이 들어간다는 의미같다. 

routes 폴더에 Home.tsx를 만든다.
Home.tsx 에는
```
export default function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
```
입력. 참고로 Shift + Alt + F 로 예쁜 들여쓰기 활성화 가능.

참고로 App.tsx에서 import Home from "./routes/Home"; 이 부분 "./routes"으로 쓰면서 계속 에러 났다. import 옆의 Home은 함수이름이고, 경로에는 파일 이름까지 적어줘야한다. 단, 확장자는 제외한다.

routes에 Home.tsx, About.tsx를 만들고 App.tsx에서 한 함수로 동시 실행했다. 이게 되는 군.
뭐 아직까지 Typescript에 대한 특이사항은 나와있지 않다.

다음으로는 components에서 Nav.tsx를 만든다.
대박인게, ul.navList>li*2 이 상태에서 Tab 누르면 나오는 결과는 Emmet 기능인데 , https://www.hanl.tech/blog/emmet-%EB%8B%A8%EC%B6%95%ED%82%A4-%EB%B0%8F-%ED%8A%B8%EB%A6%AD-9%EA%B0%80%EC%A7%80/ 에 자세히 나와있다. 

네비게이션 기능 (누르면 이동하는) 구현을 위해 react-router-dom 패키지를 아직 설치하지 않았다. 
npm i react-router-dom 주의 할 점은 install이 들어가지 않는다는 점이다. 

이제 App.tsx에 import { BrowserRouter as Router, Route } from "react-router-dom";
입력
react-router-dom 은 js로 쓰여 건데, 내 환경은 ts이다.<br> 그래서 실행해보면 에러가 발생할 것이다. <br>
그러면 ts에 맞도록 변환해주는 또는 유사한 npm이 필요하다. 거기에 또 문제는 react-router-dom와의 버전도 맞춰야 하기 때문에 package.json의 버전을 꼭 확인해보자.

맙소사... react-router0dom의 버전이 ^6.15.0인데 npm 사이트에서 검색한 @types/react-router-dom는 5.3.3 이다. 방법이 없으니 일단 터미널에 npm i @types/react-router-dom 실행한다.

App.tsx 에서 
```
<Nav></Nav>
```
도 그냥 
```
<Nav/>
```
이렇게 호출해서 쓴다. 
```
</Nav>, <Nav/>
```
서로 다른 표현이니까 주의.
Nav로 넘어간다.<br> 첫 줄에 import {Link} from "react-router-dom" 추가. 주의할 점은 { Link }는 가장 마지막에 쓴다고 했다. react-router-dom에 있는 Link를 가져다 쓰겠다는 의미.

```typescript
<Link> // <Link> 내부에는 to라는 프로퍼티가 있어야 하고, 그 값은 Home,About 각각 App에있는 path와 동일해야한다. 
```



React6으로 넘어오면서 바뀐 문법으로 많이 고생했다. 
우선 여러개의 Route는 반드시 Routes태그로 감싸줘야 했고 (마치 div에 여러 개 태그를 묶어야만 하듯이) BrowserRouter는 안쓰게 됐다. <br>Swift 뭐시기도 안쓰던데 React 5 -> 6 으로 바뀌면서 변경점을 검색해보자.

기존에 
```typescript
function App() {
  return (
    <>
      <Routes>
        <Route element={<Nav />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
``` 
이 코드를
```typescript
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
``` 
이렇게 변경해야 했다.


