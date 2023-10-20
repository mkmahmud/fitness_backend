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
];
Routers.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
