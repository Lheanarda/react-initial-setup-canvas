import CustomRouter from "@src/components/CustomRouter";
import customHistory from "@src/lib/utils/history";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Splash } from "@src/components/auth";

const Router: React.FC = () => {
  return (
    <CustomRouter history={customHistory}>
      <Routes>
        {routes.map(({ component: Component, path }) => {
          return (
            <Route
              key={path}
              element={
                <Suspense fallback={<Splash />}>
                  <Component />
                </Suspense>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </CustomRouter>
  );
};
export default Router;
