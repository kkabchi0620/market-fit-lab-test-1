import mixpanel from "mixpanel-browser";

export default function setLoginPage() {
  const app = document.querySelector(".app");

  if (app) {
    app.innerHTML = `
            <div class="container">
                <h2>로그인</h2>
                <form action="/submit" method="post" class="mixpanel-form">
                    <label for="userid">ID:</label>
                    <input type="text" id="userid" name="userid" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                    <button type="submit">로그인</button>
                </form>
            </div>
        `;

    const form = document.querySelector(".mixpanel-form");

    if (form) {
      form.addEventListener("submit", (event) => {
        login(event);
      });
    }
  } else {
    alert("로그인 페이지를 띄울 수 없습니다.");
    console.error('No element found with class "app"');
  }
}

async function login(event) {
  event.preventDefault();

  const userId = document.getElementById("userid");

  try {
    // await mixpanel.identify(userId.value);
    // await mixpanel.track("login_button_click", { user_id: `${userId.value}` });
    // await mixpanel.people.set({ last_login_date: new Date().toISOString() });
    // userId.value = "";
    // alert("로그인에 성공하였습니다. 감사합니다.");
    // window.location.href = "/";
  } catch (err) {
    userId.value = "";
    alert("회원가입 또는 로그인에 문제가 생겼습니다.");
    console.error(err);
  }
}
