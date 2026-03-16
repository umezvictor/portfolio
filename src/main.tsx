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
import About from "./pages/about/About.tsx";
import Projects from "./pages/projects/Project.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Skills from "./pages/skills/Skills.tsx";
import Experience from "./pages/experience/Experience.tsx";
import Education from "./pages/education/Education.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Stats from "./pages/stats/Stats.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Intro />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/stats" element={<Stats />} />
    </Route>,
  ),
);

// Render app
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
