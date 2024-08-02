import axios from "axios";

export default function setRegisterPage() {
  const app = document.querySelector(".app");

  if (app) {
    app.innerHTML = `
              <div class="container">
                  <h2>회원가입</h2>
                  <form action="/submit" method="post" class="mixpanel-register-form">
                      <label for="userid">ID:</label>
                      <input type="text" id="userid" name="userid" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                      <button type="submit">회원가입</button>
                  </form>
              </div>
          `;

    const form = document.querySelector(".mixpanel-register-form");

    if (form) {
      form.addEventListener("submit", (event) => {});
    }
  } else {
    alert("로그인 페이지를 띄울 수 없습니다.");
    console.error('No element found with class "app"');
  }
}

async function register(event) {
  event.preventDefault();
  const userId = document.getElementById("userid");
}
