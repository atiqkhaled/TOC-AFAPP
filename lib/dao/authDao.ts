import { model } from "mongoose";
import { StatusSchema } from "../model/status";
import { userSchema } from "../model/user";
import * as userRepo from "../repo/userRepo";
import * as statusRepo from "../repo/statusRepo";
import * as userDao from "../dao/userDao";
import * as authHandler from "../handler/authHandler";
const User = model("User", userSchema);
const Status = model("Status", StatusSchema);

export const authenticate = async (doc: any) => {
  const user = await authHandler.authenticateUser(doc.body.name);
  console.log(user);
  return authHandler.postLogin(user);
};
