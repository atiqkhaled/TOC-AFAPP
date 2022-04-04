import { model } from "mongoose";
import { StatusSchema } from "../model/status";
import * as statusRepo from "../repo/statusRepo";
const Status = model("Status", StatusSchema);

export const addStatus = async (doc) => {
  const modelToInsert = new Status({
    name: doc.body.name,
    color: doc.body.color,
  });
  return await statusRepo.addStatus(modelToInsert);
};
export const findStatusByName = async (statusName: string) => {
  return await statusRepo.findStatusByName(statusName);
};
export const fetchAllStatus = async () => {
  return await statusRepo.fetchAllStatus();
};
