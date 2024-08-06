import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Forecast from "./Forecast";
import Main from "../layouts/Main";
import LastForecast from "./LastForecast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:city/:lat/:lon",
        element: <Forecast />,
      },
      {
        path: "/latest",
        element: <LastForecast />,
      },
    ],
  },
]);

export default router;
