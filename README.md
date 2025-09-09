1. React + Router 설치
npm install react-router-dom

2. Route 컴포넌트 생성
/src/routes/Routes.jsx

3. main.jsx에 App 컴포넌트 대신 Route 컴포넌트로 변경


4. 라우터로 관리하고 싶은 컴포넌트를 만든다.


5. Router 컴포넌트의 Router 객체 정의를 HTML 구조에 맞게 설정

<!-- Redux -->
<!-- 상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->
1. Redux 설치
    npm install @reduxjs/toolkit react-redux

2. Redux Store 생성
   ★ 경로 예시) src/store/store.js

3. Slices 생성
   ★ 경로 예시) src/store/slices(이름은 개발자 재량)/**

4. 생성한 Slices를 store에 추가


5. main.jsx에 React Redux <Provider> 추가 (strictMode를 제외한, 최상위 컴포넌트 일 것)


6. 사용

<!-- Redux Thunk -->

1. Redux Thunk 설치
   npm i Redux Thunk

 2. Redux Thunk 파일 생성

 3. 해당 slice에 `extraReducers` 추가
