const express = require('express'); // require는 라이브러리 가져오는 함수. 따라서 express라는 const 변수에 넣기.

const PORT = 4000;
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
const app = express();

// 라우터 핸들러 구현. app쪽 보면 됨.
app.get('/',(req,res)=>{ // 이것은 주소창에 아무것도 입력하지 않은 기본화면이다.
    res.send('Hello World');
});
app.get('/users',(req,res)=>{
    res.send(Users);
});
app.get('/user/:userId',(req,res)=>{
     const userId = Number(req.params.userId);
     const user = users[userId];
    if(user) {
        res.jsonp(user);
    }
    else {
        res.sendStatus(404);
    }
 })

app.listen(PORT, ()=>{ // Express 애플리케이션을 특정 포트에서 실행시키는 함수.
    console.log('Running on port ${PORT}')
});

