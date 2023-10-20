"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "trainer", "user", "superAdmin"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  phoneNumber: {
    type: String,
  },
});
exports.User = (0, mongoose_1.model)("user", userSchema);
