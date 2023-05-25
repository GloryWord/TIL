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

```python
curl -X GET "http://localhost:8000/hello?age=30"
# GET방식은 Body 없음
# 원도우 curl 주소 앞뒤에 '가 아닌 "로 감싸야 함
# 리눅스 curl 주소 앞뒤는 ' 감싸기도 가능하고 " 감싸기도 가능함
```
​

[POST방식]

​

[URL형식 데이터]

```python
curl -d "key1=value1&key2=value2" 
-H "Content-Type: application/x-www-form-urlencoded" 
-X POST http://localhost:8000/data
```  
[JSON형식 데이터]

```python
curl -d '{"key1":"value1", "key2":"value2"}' 
-H "Content-Type: application/json" 
-X POST http://localhost:8000/data
```

```python
# 원도우 curl에서는 '를 "로 변경하고, "를 ""로 변경하고 호출해야함
curl -d "{""key1"":""value1"", ""key2"":""value2""}" 
-H "Content-Type: application/json"
-X POST http://localhost:8000/data
```

## 드디어 해결한 API 가져오기 에러... feat 멋진 팀원들
appkey가 이상한것 같아서 재발급 받았는데도 안됐다.<br>
Chat GPT로 에러 물어도 보고 등등 얻은것은 많았으나.... 해결을 못했다. 결국 팀원들에게 SOS 요청
#### **GPT가 알려줬었고, 안됐던 코드...**
```python
!curl --request GET \
    --url https://apis.openapi.sk.com/puzzle/subway/meta/stations \
    --header 'appkey: {1furoTjxkT5RxWn69Gp5G2WiichZHIo5hBefd7y1}'
```

#### 전혜원님 코드
```python
import requests

url = "https://apis.openapi.sk.com/puzzle/subway/stations"

headers = {
    "accept": "application/json",
    "appkey": "pa9QvuuFu82jHWycxt21dan2IW3gmf55419lWWDt"
}

response = requests.get(url, headers=headers)

print(response.text)
```

### **그래서 오늘 깨달은 점.**
초보 개발자에게 Chat GPT 나름 괜찮을 수도?, API 불러오는 방법, 파이썬에서 쉘 스크립트 쓰려면 !붙이고 하면 되는 것, API 불러올 때 안되면 request와 respond 클래스를 직접 하드코딩 해보는 방법도 있다는 것

### **데이터 전처리를 하다보니, 파이썬 고급기능까지 공부하게 되었다...**
민지님이 준 코드에
```python
next((code for code in stationCodeList if (code['stationName']==stationName and code['subwayLine']==subwayLine)),None)
```
이란 코드가 있어서 next()가 뭔지 검색했는데 iter도 알아야 했다. 세상에....<br>
우선 iter()에 대해서는 https://zephyrus1111.tistory.com/235를 참고하자.  
내 식대로 정리하자면, iter(리스트) 일 때, 리스트를 반복자로 바꿔준다.<br><br> 
그 말은 for문같은 곳에서 반복자로 쓰일 수 있는 것이고, 이는 next()와 같이 사용된다. 왜냐면 next()가 반복자를 하나씩 꺼내주는 기능이거든.  
다만, next(iterable, default)는 반복자를 다 꺼내고 나서 더 없을때 쓸 기본 값을 default 인자로 주면 된다.  
https://homzzang.com/b/py-136