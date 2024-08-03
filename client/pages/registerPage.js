import mixpanel from "mixpanel-browser";

export default function setRegisterPage() {
  const app = document.querySelector(".app");

  if (!app) {
    alert("회원가입 페이지를 띄울 수 없습니다.");
    return;
  }

  app.innerHTML = `
              <div class="container">
                  <h2>회원가입</h2>
                  <form action="/submit" method="post" class="mixpanel-register-form">
                      <label for="userRegisterId">ID:</label>
                      <input type="text" id="userRegisterId" name="userId" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                      <label for="userPassword">PASSWORD:</label>
                      <input type="password" id="userPassword" name="userpassword" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                      <button type="submit">회원가입</button>
                  </form>
              </div>
          `;

  const form = document.querySelector(".mixpanel-register-form");

  form?.addEventListener("submit", (event) => {
    register(event);
  });
}

async function register(event) {
  event.preventDefault();

  const userId = document.getElementById("userRegisterId").value;
  const userPassword = document.getElementById("userPassword").value;

  try {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, userPassword }),
    });

    if (response.ok) {
      alert("회원가입이 완료되었습니다.");
      window.location.href = "/";
    } else {
      const data = await response.json();
      alert(`회원가입 실패: ${data.error}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("회원가입 중 오류가 발생했습니다.");
  } finally {
    document.getElementById("userRegisterId").value = "";
    document.getElementById("userPassword").value = "";
  }
}
