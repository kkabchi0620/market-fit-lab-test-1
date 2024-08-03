import mixpanel from "mixpanel-browser";

export default function setLoginPage() {
  const app = document.querySelector(".app");

  if (!app) {
    alert("로그인 페이지를 띄울 수 없습니다.");
    console.error('No element found with class "app"');
    return;
  }

  if (app) {
    app.innerHTML = `
            <div class="container">
                <h2>로그인</h2>
                <form action="/submit" method="post" class="mixpanel-form">
                    <label for="userId">ID:</label>
                    <input type="text" id="userId" name="userId" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                    <label for="userid">PASSWORD:</label>
                    <input type="password" id="userPassword" name="userPassword" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                    <button type="submit">로그인</button>
                </form>
            </div>
        `;

    const form = document.querySelector(".mixpanel-form");

    form?.addEventListener("submit", (event) => {
      login(event);
    });
  }
}

async function login(event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value;
  const userPassword = document.getElementById("userPassword").value;

  try {
    const response = await fetch(`${window.location.href}:8080/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, userPassword }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    // await mixpanel.alias(userId);
    // await mixpanel.identify(userId);
    // await mixpanel.track("login_button_click", { user_id: userId });
    // await mixpanel.people.set({ last_login_date: new Date().toISOString() });

    alert("로그인에 성공하였습니다.");
    window.location.href = "/";
  } catch (err) {
    console.error("Error:", err);
    alert("회원가입 또는 로그인에 문제가 생겼습니다.");
  } finally {
    document.getElementById("userId").value = "";
    document.getElementById("userPassword").value = "";
  }
}
