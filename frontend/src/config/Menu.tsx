import type { ReactNode } from "react"; 
import Home from "../pages/Home";
import Assistant from "../pages/Assistant";
import Questions from "../pages/Questions";
import Topics from "../pages/Topics";

export type MenuItem = {
  path: string;
  name: string;
  element: ReactNode;
  href: string;
  index?: boolean;
};

const Menu: MenuItem[] = [
      {
    path: "/",
    href: "/",
    name: "Home",
    element: <Home />,
    index: true,
  },
  {
    path: "/topics/:category?",
    href: "/topics",
    name: "Topics",
    element: <Topics />
  },
  {
    path: "/questions/:question?",
    href: "/questions",
    name: "Questions",
    element: <Questions />
  },
  {
    path: "/ai-assistant",
    href: "/ai-assistant",
    name: "AI Assistant",
    element: <Assistant />,
  },
];

export default Menu;