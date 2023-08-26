```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send({'sound': '멍멍'}) // json파일도 들어갈 수 있다. HTML 태그도 들어갈 수 있다.
})
app.get('/cat', (req, res) => {
  res.send({'sound': '야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
* app.listen : 포트번호를 받고, 무언가가 그 포트번호에게 귓속말을 하면 그것 대로 실행한다. 여기선 console.log이다.
* **app.get('/', () => {})**  
**get** : HTTP 메소드 (POST도 있음, 데이터 전달이 주소창이 아닌 것.) 요청 방식을 이야기 한다.  
**'/' (라우팅)** : 사이트 들어가면 페이지 마다 역할에 따라 /board/write 또는 /about 이런 식으로 바뀌는 걸 볼 수 있다. 이것을 라우터라고 한다.
()=>{} : 콜백함수
***
<h3>GET방식에서 Request에 변수 실어서 보내는 방법</h3>

```javascript
// params를 이용
app.get('/user/:id', (req,res) => { // 콜론 뒤에 id가 들어간다. 침착맨,우왁굳 예시 들었음.
  const q = req.params
  console.log(q)
})
```
### query를 이용한 방법.
주소를 클릭하면, ,
## Server.js
Node.js에서 진입점이 되는 파일. 다음의 예시는 Express를 사용하지 않을 때 원칙적으로 해야하는 Server.js의 구조이다.

```javascript
const sever = http.createServer((req,res) +> {
  // writeHead는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다.
  // 상대 코드와 응답 헤더를 클라이언트에 보낸다. Express에서는 상태코드랑 Content-Type 명시 안 해도 된다.
  res.writeHead(200, {
      'Content-Type': 'text/plain'
  });
  // 데이터가 로드 되었을 때 서버에 알림.
  res.end('Complate Load!');

  server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
  });
});
```
### 만약 Express를 쓴다면 위의 코드는?
```javascript
const express = require('express');

// Constants
const PORT = 5500;
const HOST = '0.0.0.0'; // 필수 아님

// App
const app = express(); // express 어플 생성
app.get('/', (req,res) => { // 지금은 '/'지만, 저 매개변수에 경로로 요청이 올 때 Hell World 출력
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`); // 해당 포트와 호스트에서 HTTP 서버를 시작.
```

구체적인 예시로 간다.
```javascript
const express = require('express'); // require는 라이브러리 가져오는 함수. 따라서 express라는 const 변수에 넣기.

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{ // Express 애플리케이션을 특정 포트에서 실행시키는 함수.
    console.log('Running on port ${PORT}')
})
```
**이번에는 id,pw를 받아서 user별로 서버에 접속하는 예시로 간다.**
```javascript
const express = require('express'); // require는 라이브러리 가져오는 함수. 따라서 express라는 const 변수에 넣기.

const PORT = 4000;
const app = express();
const Users = [
    {
        id:0,
        name : 'Jack'
    },
    {
        id:1,
        name:'Jennifer'
    }
]
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{ // Express 애플리케이션을 특정 포트에서 실행시키는 함수.
    console.log('Running on port ${PORT}')
})
```
Users를 추가했으면 **'라우트 핸들러'** 라는 것을 생성해야 한다고 한다.

