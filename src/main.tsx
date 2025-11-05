import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";
import { useState, useEffect } from "react";
// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
import { getKcContextMock } from "./login/KcPageStory";
import type { KcContext } from "./login/KcContext";

function App() {
  const [kcContext, setKcContext] = useState<KcContext | undefined>(() => {
    if (!import.meta.env.DEV) {
      return window.kcContext;
    }
    const kcPageId = sessionStorage.getItem("kcPageId") ?? "login.ftl";
    return getKcContextMock({
      pageId: kcPageId as KcContext["pageId"],
      overrides: {}
    });
  });

  useEffect(() => {
    if (import.meta.env.DEV) {
      (window as any).setKcPageId = (pageId: KcContext["pageId"]) => {
        sessionStorage.setItem("kcPageId", pageId);
        setKcContext(getKcContextMock({ pageId, overrides: {} }));
      };
    }
  }, []);

  if (!kcContext) {
    return <h1>No Keycloak Context</h1>;
  }

  return <KcPage kcContext={kcContext} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
