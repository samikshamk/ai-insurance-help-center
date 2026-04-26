import type { ReactNode } from "react"; 
import Home from "../pages/Home";
import Assistant from "../pages/Assistant";
import Questions from "../pages/Questions";
import Topics from "../pages/Topics";

export type MenuItem = {
  path: string;
  name: string;
  element: ReactNode;
  index?: boolean;
};

const Menu: MenuItem[] = [
      {
    path: "/",
    name: "Home",
    element: <Home />,
    index: true,
  },
  {
    path: "/topics",
    name: "Topics",
    element: <Topics />
  },
  {
    path: "/questions",
    name: "Questions",
    element: <Questions />
  },
  {
    path: "/ai-assistant",
    name: "AI Assistant",
    element: <Assistant />,
  },
];

export default Menu;