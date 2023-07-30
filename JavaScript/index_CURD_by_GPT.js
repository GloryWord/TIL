const express = require('express');
const app = express();
const PORT = 3100;

// 임시로 메모 데이터를 저장할 배열
let memos = [];

// JSON 데이터를 파싱하기 위한 미들웨어 설정
app.use(express.json());

// 모든 메모 조회
app.get('/memos', (req, res) => {
  res.json(memos);
});

// 특정 메모 조회
app.get('/memos/:id', (req, res) => {
  const id = req.params.id;
  const memo = memos.find((m) => m.id === id);

  if (!memo) {
    res.status(404).json({ error: 'Memo not found' });
  } else {
    res.json(memo);
  }
});

// 새로운 메모 생성
app.post('/memos', (req, res) => {
  const memo = req.body;
  memos.push(memo);
  res.status(201).json(memo);
});

// 메모 업데이트
app.put('/memos/:id', (req, res) => {
  const id = req.params.id;
  const updatedMemo = req.body;
  const memoIndex = memos.findIndex((m) => m.id === id);

  if (memoIndex === -1) {
    res.status(404).json({ error: 'Memo not found' });
  } else {
    memos[memoIndex] = { ...memos[memoIndex], ...updatedMemo };
    res.json(memos[memoIndex]);
  }
});

// 메모 삭제
app.delete('/memos/:id', (req, res) => {
  const id = req.params.id;
  const memoIndex = memos.findIndex((m) => m.id === id);

  if (memoIndex === -1) {
    res.status(404).json({ error: 'Memo not found' });
  } else {
    const deletedMemo = memos[memoIndex];
    memos.splice(memoIndex, 1);
    res.json(deletedMemo);
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
