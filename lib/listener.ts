import * as publisher from "./publisher"
import * as userRepo from "./repo/userRepo";
export const statusChangeListner = async (user:any)=>{
    publisher.publishChangedStatus(user);
    return user;
}