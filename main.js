import mixpanel from "mixpanel-browser";

import setLoginPage from "./pages/loginPage";

let isMixpanelInitialized = false;

function initializeMixpanel() {
  if (!isMixpanelInitialized) {
    mixpanel.init("6c372806169b7082e88e3a3473031366", {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
    isMixpanelInitialized = true;
  }
}

function trackPageView() {
  const pathname = window.location.pathname;

  if (pathname === "/login_page") {
    setLoginPage();
    mixpanel.track("login_page_view");
  }
}

window.addEventListener("popstate", trackPageView);

// 믹스 패널 init
initializeMixpanel();

// routing
trackPageView();
