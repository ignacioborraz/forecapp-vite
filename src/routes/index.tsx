import { createBrowserRouter } from "react-router-dom";
import { App } from "./routes";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

export default router;
