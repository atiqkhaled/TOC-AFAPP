import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as db from "../lib/db-connector";
import * as userDao from "../lib/dao/userDao";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    await db.init();
    context.res = {
      body: {data : await userDao.getAllUser(req.query.id)},
    };
};

export default httpTrigger;