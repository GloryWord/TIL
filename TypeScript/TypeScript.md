### Javascript 와의 차이점
**자바스크립트** : 동적 타입, 런타임에서 동작할 때 타입 오류 확인.<br>
**타입스크립트** : 정적 타입, 코드 작성 단계에서 타입 오류 확인. 그런 다음에 javascript로 컴파일 후에 브라우저나 Node.js에서 작동.<br>
### package.json에서 parcel 번들러는 무엇을 하는가?
vscode에서 쓴 Ts는 브라우저나 Node.js에서 실행할 수 밖에 없는데, npm run dev를 터미널에 입력하면, parcel 번들러가 이를 js로 변환 후 브라우저, Node.js 환경에서 실행할 수 있게 해준다.<br><br>

```typescript
// tsconfig.json 헤쳐보기
{
 // 객체 데이터 지정
 "compilerOptions": {
    "target":"ES2015",
    "module": "ESNext"
    // 모듈의 해석 방법, 어떤 경로를 작성할 때, 특정한 폴더 안에 있는 index라는 이름을 가진 js 파일 생략이 가능해짐.
    "moduleResolution": "Node"
    // js는 ESM 방식 사용, Node.js 에서는 Commonjs 방식을 쓰는데, 호환해서 쓰겠다는 의미.
    "esModuleInterop": true
    // Ts를 js로 컴파일 할 때 사용해야 하는 모듈이 있는데 그걸 import
    "lib": ["ESNext","DOM"]
    "strict":true // ts문법을 엄격하게 한다가 맞다고 함. ㄷㄷ
 }
 "include": [
    "src/**/*.ts"
 ]

 // compile할 때 제외할 경로.
 "exclude":[
    "node_modules"
     // node_modules는 패키지를 보관하기 위함이지, Ts를 Js로 변환하기 위한 폴더가 아니기 때문에 제외시킨다.
 ]
}
```
