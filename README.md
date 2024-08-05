# 믹스패널 구현

### 사용기술

- Client
  - vite
  - mixpanel-browser
- Server
  - express
  - sqlite3
- Deployment
  - AWS Lightsail: Ubuntu
  - Pm2

### 작업내용

- Server
  - express로 서버를 구현하였고, 회원정보를 저장하기 위해 sqlite를 데이터베이스로 사용하였습니다.
- Client
  - vite로 새 프로젝트 생성 후 회원가입 페이지와 로그인 페이지를 구현하였습니다. 웹페이지 상에서 회원정보는 아이디와 비밀번호만 입력 가능합니다.
  - mixpanel-browser 라이브러리로 사용자의 동선을 일부 추적할 수 있는 기능을 붙였습니다. 이 기능은 다음과 같습니다. 해당 기능이 들어가있는 코드에 주석을 붙여 두었습니다.
    1. 익명의 사용자가 로그인 페이지(/login_page)에 방문했을때 방문 이벤트를 기록합니다.
       - 이벤트 이름: "login_page_view"
    2. id를 입력하고 버튼을 누르면 로그인 이벤트를 기록하고 mixpanel에 사용자 식별처리를 합니다.
       - 이벤트 이름: "login_button_click"
       - 이벤트 속성 이름: "user_id"
       - 속성값: 사용자가 입력한 값
    3. 사용자 식별처리 후 마지막 로그인 날짜를 사용자 속성으로 기록합니다.
       - 속성 이름: "last_login_date"
       - 속성값: new Date().toISOString()
