import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Provinces from "./provinces";
import styled from "styled-components";
import virusImg from "./assets/home-bg.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "province/:id",
    element: <Provinces />,
  },
]);

const StyledRoot = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  margin: 2vw;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledRoot>
      <RouterProvider router={router} />
    </StyledRoot>
  </React.StrictMode>
);
