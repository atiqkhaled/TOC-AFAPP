import { model } from "mongoose";
import { StatusSchema } from "../model/status";
import { userSchema } from "../model/user";
import * as authHandler from "../handler/authHandler";
import * as userDao from "../dao/userDao";
const User = model("User", userSchema);
const Status = model("Status", StatusSchema);

export const authenticate = async (doc: any) => {
  const user = await authHandler.authenticateUser(doc.body.name);
  console.log(user);
  return authHandler.postLogin(user);
};

export const signout =async (doc:any) => {
  const user = await userDao.findUserByName(doc.body.name);
  return await authHandler.logout(user);
}
