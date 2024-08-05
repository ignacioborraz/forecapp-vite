import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import router from "./views/router";
import store from "./store/store";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
