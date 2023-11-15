"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = exports.User = void 0;
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
    required: true,
  },
});
exports.User = (0, mongoose_1.model)("user", userSchema);
// User Details
const UserDetilsSchema = new mongoose_1.Schema({
  id: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  },
  dateOfBirth: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  parmanentAddress: {
    type: String,
  },
});
exports.UserDetails = (0, mongoose_1.model)("userDetails", UserDetilsSchema);
