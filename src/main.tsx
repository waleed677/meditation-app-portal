import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "react-quill/dist/quill.snow.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: { colorPrimary: "#2762A6" },
          components: {
            Layout: { siderBg: "#2762A6", headerBg: "#205086" },
            Menu: {
              darkItemSelectedColor: "#FFFFFF",
              darkItemColor: "#99CCFF",
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
