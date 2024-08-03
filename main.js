import mixpanel from "mixpanel-browser";

import setLoginPage from "./pages/loginPage";
import setRegisterPage from "./pages/registerPage";

let isMixpanelInitialized = false;

function initializeMixpanel() {
  if (!isMixpanelInitialized) {
    mixpanel.init("6c372806169b7082e88e3a3473031366", {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
    isMixpanelInitialized = true;
  } else {
    console.log("mix already initialized");
  }
}

function checkUserIn() {
  const userId = mixpanel.get_property("$user_id");

  if (userId) {
    const nav = document.querySelector("nav");

    const logoutButton = document.createElement("button");
    logoutButton.textContent = "로그아웃";

    nav.appendChild(logoutButton);

    logoutButton.addEventListener("click", function () {
      try {
        mixpanel.reset();
        alert("로그아웃하였습니다.");
        window.location.href = "/";
      } catch (err) {
        alert("로그아웃에 실패하였습니다.");
      }
    });
  }
}

function trackPageView() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/login_page":
      setLoginPage();
      mixpanel.track("login_page_view");
      break;

    case "/register_page":
      setRegisterPage();
      break;

    default:
      break;
  }
}

window.addEventListener("popstate", trackPageView);
window.addEventListener("DOMContentLoaded", checkUserIn);

// 믹스 패널 init
initializeMixpanel();

// routing
trackPageView();
