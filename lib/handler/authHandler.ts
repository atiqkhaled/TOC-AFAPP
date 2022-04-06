import { model } from "mongoose";
import { StatusSchema } from "../model/status";
import { userSchema } from "../model/user";
import * as userRepo from "../repo/userRepo";
import * as userDao from "../dao/userDao";
import * as statusRepo from "../repo/statusRepo";
const User = model("User", userSchema);
const Status = model("Status", StatusSchema);

export const authenticateUser = async (username: any) => {
  let user = await userRepo.findUserByName(username);
  if (user.length==0) {
    const newuser = new User({ name: username });
    return await userRepo.addUser(newuser);
  }
  return user[0];
};
export const postLogin =async (user: any) => {
    const status = await statusRepo.findStatusByName("Active");
    user.status = status._id;
    const activeUser =await userRepo.updateUserStatus(user);
  return activeUser;
};

export const logout =async (doc: any) => {
  const status = await statusRepo.findStatusByName("Offline");
  const userModel = new User(
    {
      _id: doc.body._id,
      name: doc.body.name,
      status: status?._id
    }
  );
  const deactiveUser =await userRepo.updateUserStatus(userModel);
  return deactiveUser;
};
