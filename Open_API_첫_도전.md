### 첫 시작...
정말 하나도 모르는 상태에서 막연히, 크롤러 개발과 스크레이핑 입문 책과, 파이썬 웹크롤링 책만 읽어보고 겨우 시도를 시작했다.  
<br><br>
SK Open API에 가입하고, 로그인하고 대시보드에서 앱 만들고 (MyFirstApp1) 혼잡도 서비스 사용신청하고... 참으로 우여곡절이 많은 첫 시도 였다.
### API 호출시 curl의 의미 
출처 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=wideeyed&logNo=221350638501  
cURL이란? 


다양한 프로토콜을 지원하는 데이터 전송용 Command Line Tool이다.

(HTTP, HTTPS, FTP, SFTP, SMTP 등을 지원한다.)

cURL을 사용하기 위해서 설치한다.

sudo apt-get install curl
​

HTTP GET, HTTP POST 호출하는 방법에 대해서 알아보자. 

​

자주 사용하는 옵션은 아래 3가지이다.

-d, --data: <data> Send specified data in POST request. 

-H, --header: <header> Headers to supply with request. 

-X, --request: The request method to use. ex) GET, POST

​

[GET방식]

curl -X GET "http://localhost:8000/hello?age=30"
// GET방식은 Body 없음
// 원도우 curl 주소 앞뒤에 '가 아닌 "로 감싸야 함
// 리눅스 curl 주소 앞뒤는 ' 감싸기도 가능하고 " 감싸기도 가능함
​

[POST방식]

​

[URL형식 데이터]

curl -d "key1=value1&key2=value2" \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST http://localhost:8000/data
[JSON형식 데이터]

curl -d '{"key1":"value1", "key2":"value2"}' \
-H "Content-Type: application/json" \
-X POST http://localhost:8000/data

// 원도우 curl에서는 '를 "로 변경하고, "를 ""로 변경하고 호출해야함
curl -d "{""key1"":""value1"", ""key2"":""value2""}" \
-H "Content-Type: application/json" \
-X POST http://localhost:8000/data