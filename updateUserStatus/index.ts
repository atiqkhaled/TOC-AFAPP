import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as db from "../lib/db-connector";
import * as userDao from "../lib/dao/userDao";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  let response = null;
  await db.init();
  response = {
    documentResponse: await userDao.updateUserStatus(req),
  };
  context.res = response;
};

export default httpTrigger;