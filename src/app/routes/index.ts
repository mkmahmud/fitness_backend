import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { MembershipRoutes } from "../modules/memberships/membership.route";
import { MealRoutes } from "../modules/meal/meal.route";

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
  {
    path: "/membership",
    route: MembershipRoutes,
  },
  {
    path: "/meal",
    route: MealRoutes,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;
