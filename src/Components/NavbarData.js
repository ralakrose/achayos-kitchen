import React from "react";

import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const NavbarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },
  {
    title: "Main Meals",
    path: "/Mainmeals",
    icon: <GiIcons.GiHotMeal />,
    classname: "nav-text",
  },
  {
    title: "Pastries",
    path: "/Pastries",
    icon: <GiIcons.GiCupcake />,
    classname: "nav-text",
  },
  {
    title: "Info",
    path: "/info",
    icon: <AiIcons.AiFillInfoCircle />,
    classname: "nav-text",
  },
];
