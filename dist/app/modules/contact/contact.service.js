"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_model_1 = require("./contact.model");
// Create a new Message
const createContat = (contactData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    contactData.isRead = false;
    const result = yield contact_model_1.Contact.create(contactData);
    return result;
  });
// Get All Message
const getAllMessage = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.find({});
    return result;
  });
// Get Single Message
const getSingleMessage = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findById(id);
    return result;
  });
// Get Single Message
const markAsRead = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true },
    );
    return result;
  });
exports.ContactService = {
  createContat,
  getAllMessage,
  getSingleMessage,
  markAsRead,
};
