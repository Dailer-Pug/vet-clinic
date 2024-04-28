import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Test } from "../components/coreComponents/Test/Test";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/components',
    element: <Test />
  }
])
