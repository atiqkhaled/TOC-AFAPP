import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as db from "../lib/db-connector";
import * as statusDao from "../lib/dao/statusDao";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response = null;
    await db.init();
    response = {
        documentResponse: await statusDao.addStatus(req),
    };
    context.res = {
        body: response
    };

};

export default httpTrigger;