import type { ReactNode } from "react"; 
import Home from "../Pages/Home";
import Chat from "../Pages/Chat";
import Questions from "../Pages/Questions";
import Topics from "../Pages/Topics";

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
    path: "/chat",
    name: "AI Assistant",
    element: <Chat />,
  },
];

export default Menu;