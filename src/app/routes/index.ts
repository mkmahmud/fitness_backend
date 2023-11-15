import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { MembershipRoutes } from "../modules/memberships/membership.route";
import { MealRoutes } from "../modules/meal/meal.route";
import { RoutineRoutes } from "../modules/routine/routine.route";
import { AdmittedStudentRoutes } from "../modules/admittedstudents/admittedstudents.route";
import { AvailableRoutes } from "../modules/availability/available.route";
import { ContactRoutes } from "../modules/contact/contact.route";
import { UserMembershipRoutes } from "../modules/userMembership/userMembership.route";

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
    path: "/user-membership",
    route: UserMembershipRoutes,
  },
  {
    path: "/meal",
    route: MealRoutes,
  },
  {
    path: "/routine",
    route: RoutineRoutes,
  },
  {
    path: "/addmitted-student",
    route: AdmittedStudentRoutes,
  },
  {
    path: "/available-time",
    route: AvailableRoutes,
  },
  {
    path: "/contact",
    route: ContactRoutes,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;
