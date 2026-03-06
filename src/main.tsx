import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Intro from "./pages/intro/Intro.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Intro />} />
    </Route>,
  ),
);

// Render app
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
