## 지하철 데이터 구축 기록 (데이터 엔지니어링)

1. MySQL 설치

2. Open API를 가져와서 json 파일로 가공 (지하철 영문,일문,중문 데이터 제거)

3. MySQL Workbench에 들어가서 CREATE DATABASE Capital_Subway_DB와 아이디 비번, GRANT ALL ON Capital_Subway_DB.* TO 사용자 이름 까지 완료.

4. 상단바 메뉴에 DB아이콘 Create a new schema in the connected server 눌러서 스키마 만들었는데, 이거랑 CREATE DATABASE랑 충돌해서, 스키마 탭에서 삭제하고 다시 만들어야 했었다.
