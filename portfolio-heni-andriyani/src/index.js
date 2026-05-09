import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const removeEmergentBadge = () => {
  const selectors = [
    "#emergent-badge",
    "a[href*='emergent.sh']",
    "script[src*='assets.emergent.sh']",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => node.remove());
  });

  document.querySelectorAll("a").forEach((anchor) => {
    if (anchor.textContent && anchor.textContent.includes("Made with Emergent")) {
      anchor.remove();
    }
  });
};

removeEmergentBadge();

const observer = new MutationObserver(() => {
  removeEmergentBadge();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
