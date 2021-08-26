# 로그인, 회원가입 구현하면서 공부한 내용



# HTML 

### submit

- <form> 태그 내에 입력된 데이터를 서버로 전달

참고 : https://hianna.tistory.com/305

# js

###  변수 선언 방식 (var, let, const)

- var : 중복 선언 가능 , 값의 재할당이 가능 전역변수지만 함수 내부에 선언되면 지역변수로 한정.

- let : 중복 불가, 값의 재할당이 가능 지역변수

- const	:중복 불가, 값의 재할당이 불가능 지역변수

자세한 참고 : https://curryyou.tistory.com/192 

### 엘리먼트 반환  (getElementById(), querySelector())

- getElementById() : id 를 통해 반환, 만약 document에 id의 엘리먼트가 없으면 null 값 반환 

  ex) element = document.getElementById("id");

- querySelector()

  selector의 구체적인 그룹과 일치하는 document안 첫번째 엘리먼트를 반환, 일치하는게 없으면 null 값 반환

  ex) element = document.querySelector("selectors"); 셀렉터앞에 #을써줌

### 페이지 변경 (location.href , location.replace)

- location.href  : 새로운 페이지로 이동, 속성, 뒤로가기 가능

  ex) location.href='abc.php' 

- location.replace : 기존페이지를 새로운 페이지로 변경, 메서드 , 뒤로가기 불가능

  ex) location.replace('abc.php') 

### $

- 식별자

# json

- JSON.parse(jsonText) : String → json(object) 변경법

- JSON.stringify(jsonObj) : json(object) → String 변경법

참고 : https://chlee21.tistory.com/118?category=944967

#  로컬스토리지

- 웹페이지의 세션이 끝나도 데이터가 지워지지 않음. 동일 컴퓨터, 동일 브라우저 사용시에만

- 키에 데이터 쓰기

  localStorage.setItem("key",value);

- 키로 부터 데이터 읽기

  localStorage.getItem("key");

- 키의 데이터 삭제

  localStorage.removeItem("key");

- 모든 키의 데이터 삭제

  localStorage.clear();

- 저장된 키/값 쌍의 개수

  localStorage.length;

참고 : https://www.daleseo.com/js-web-storage/

# css

### margin padding 차이점



![차이점](C:\Users\osh45\Desktop\차이점.png)



