import mixpanel from "mixpanel-browser";

export default function setRegisterPage() {
  const app = document.querySelector(".app");

  if (app) {
    app.innerHTML = `
              <div class="container">
                  <h2>회원가입</h2>
                  <form action="/submit" method="post" class="mixpanel-register-form">
                      <label for="userid">ID:</label>
                      <input type="text" id="userRegisterId" name="userid" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');" required />
                      <button type="submit">회원가입</button>
                  </form>
              </div>
          `;

    const form = document.querySelector(".mixpanel-register-form");

    if (form) {
      form.addEventListener("submit", (event) => {
        register(event);
      });
    }
  } else {
    alert("회원가입 페이지를 띄울 수 없습니다.");
  }
}

async function register(event) {
  event.preventDefault();

  const userId = document.getElementById("userRegisterId");
  const identifiedId = mixpanel.get_distinct_id();

  try {
    await mixpanel.people.set_once({ user_id: userId });
  } catch (error) {
    console.error("Error:", error);
  }
}
