const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("loginBtn");

function onLogin() {
  const mbrId = document.getElementById("mbrId");
  const mbrPw = document.getElementById("mbrPw");

  console.log("submit");
  let id = mbrId.value;
  let pw = mbrPw.value;

  const member = JSON.parse(localStorage.getItem("__user__" + id));

  // localstorage에 입력한 id가 없을 경우
  if (!member) {
    alert("다시 입력해주세요");
    mbrId.focus();
    mbrId.value = null;
    mbrPw.value = null;
    event.preventDefault();
  }

  // 로그인 성공시
  else if (id === member.id && pw === member.pw) {
    alert("로그인성공!");
  }

  // 로그인 & 비밀번호 입력 안할 시 경고창 뜸
  if (id.length == 0) {
    alert("ID를 입력해주세요!");
    mbrId.focus();
    event.preventDefault();
  } else if (pw.length == 0) {
    alert("PASSWORD를 입력해주세요!");
    mbrPw.focus();
    event.preventDefault();
  }
}
