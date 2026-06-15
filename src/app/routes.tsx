import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Impact } from "./pages/Impact";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";
import { SocialWelfare } from "./pages/programs/SocialWelfare";
import { EducationSupport } from "./pages/programs/EducationSupport";
import { GrainSupport } from "./pages/programs/GrainSupport";
import { WomenEmpowerment } from "./pages/programs/WomenEmpowerment";
import { MenstrualHealth } from "./pages/programs/MenstrualHealth";
import { GirlChildEducation } from "./pages/programs/GirlChildEducation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/social-welfare", Component: SocialWelfare },
      { path: "programs/education-support", Component: EducationSupport },
      { path: "programs/grain-support", Component: GrainSupport },
      { path: "programs/women-empowerment", Component: WomenEmpowerment },
      { path: "programs/menstrual-health", Component: MenstrualHealth },
      { path: "programs/girl-child-education", Component: GirlChildEducation },
      { path: "impact", Component: Impact },
      { path: "gallery", Component: Gallery },
      { path: "donate", Component: Donate },
      { path: "contact", Component: Contact },
    ],
  },
]);
