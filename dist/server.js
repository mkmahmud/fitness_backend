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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// getting-started.js
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config/config"));
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception is detction ......", err);
  process.exit(1);
});
let server;
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    // server close
    try {
      yield mongoose_1.default.connect(config_1.default.SERVER_URL);
      console.log("database connected");
      server = app_1.default.listen(config_1.default.PORT, () => {
        console.log(`Fitness app listening on port ${config_1.default.PORT}`);
      });
    } catch (err) {
      console.log(err);
    }
    process.on("unhandledRejection", (err) => {
      // eslint-disable-next-line no-console
      console.log(
        "unhandel rejection is dected   So we are closing Our service",
      );
      if (server) {
        server.close(() => {
          console.log(err);
          process.exit();
        });
      } else {
        process.exit(1);
      }
    });
  });
}
main();
process.on("SIGTERM", () => {
  console.log("SINGTERM is recived");
  if (server) {
    server.close();
  }
});
