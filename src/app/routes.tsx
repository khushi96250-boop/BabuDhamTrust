import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Impact } from "./pages/Impact";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "impact", Component: Impact },
      { path: "gallery", Component: Gallery },
      { path: "donate", Component: Donate },
      { path: "contact", Component: Contact },
    ],
  },
]);
