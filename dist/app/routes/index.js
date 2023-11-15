"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const membership_route_1 = require("../modules/memberships/membership.route");
const meal_route_1 = require("../modules/meal/meal.route");
const routine_route_1 = require("../modules/routine/routine.route");
const admittedstudents_route_1 = require("../modules/admittedstudents/admittedstudents.route");
const available_route_1 = require("../modules/availability/available.route");
const contact_route_1 = require("../modules/contact/contact.route");
const userMembership_route_1 = require("../modules/userMembership/userMembership.route");
const routes = express_1.default.Router();
// Routes
const Routers = [
  {
    path: "/auth",
    route: auth_route_1.AuthRoutes,
  },
  {
    path: "/user",
    route: user_route_1.UserRoutes,
  },
  {
    path: "/membership",
    route: membership_route_1.MembershipRoutes,
  },
  {
    path: "/user-membership",
    route: userMembership_route_1.UserMembershipRoutes,
  },
  {
    path: "/meal",
    route: meal_route_1.MealRoutes,
  },
  {
    path: "/routine",
    route: routine_route_1.RoutineRoutes,
  },
  {
    path: "/addmitted-student",
    route: admittedstudents_route_1.AdmittedStudentRoutes,
  },
  {
    path: "/available-time",
    route: available_route_1.AvailableRoutes,
  },
  {
    path: "/contact",
    route: contact_route_1.ContactRoutes,
  },
];
Routers.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
