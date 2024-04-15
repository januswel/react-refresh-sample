import React from "react";
import { type RouteObject } from "react-router";

const A = React.lazy(() => import("./A"));
const B = React.lazy(() => import("./B"));

export const routes: RouteObject[] = [
  {
    path: "a",
    element: <A />,
  },
  {
    path: "b",
    element: <B />,
  },
];
