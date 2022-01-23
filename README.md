# blind-client


### 사용해보려고 한 것
- firebase@v9
- firebase/auth - 이메일 링크 로그인
- react-router@v6 세션 처리
- react-router@v6 outlet 기반 layout

### 이메일 링크 로그인 구현된 방식

```
1. /signin 페이지에서 로그인
2. firebase를 통해 이메일 링크 전송
3. /signin/complete 페이지로 이동
---
  1. 유저가 이메일을 확인하고 링크를 클릭
  2. firebase 자체처리 이후 /signin/redirect로 이동
  3. 해당 페이지에서 검증을 거친 후 로그인 성공 처리
---
4. 로그인 성공시 AuthContext에 User가 갱신됨
5. User가 갱신되면 /signin/complete 페이지는 / 페이지로 redirect

```

### react router를 통한 세션 처리
```
AuthContext: user, signin, signout을 관리
RequireAuth: user가 없으면 (로그인이 안되어있으면) /signin 페이지로 redirect
```


### logo

<a href="https://www.flaticon.com/free-icons/online-community" title="online community icons">Online community icons created by Freepik - Flaticon</a>