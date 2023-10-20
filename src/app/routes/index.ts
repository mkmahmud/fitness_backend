import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";

const routes = express.Router();

// Routes
const Routers = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;
