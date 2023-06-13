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
Node.js에서 진입점이 되는 파일.

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

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{ // Express 애플리케이션을 특정 포트에서 실행시키는 함수.
    console.log('Running on port ${PORT}')
})
```
