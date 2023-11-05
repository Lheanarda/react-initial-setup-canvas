import { Route } from "@src/typings/routes";
import { lazy } from "react";

const homeRoutes: Route[] = [
  {
    component: lazy(() => import("@src/pages/index")),
    path: "/",
  },
];

export default homeRoutes;
