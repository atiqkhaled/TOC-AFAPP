const { WebPubSubServiceClient } = require('@azure/web-pubsub');

const hub = "pubsub";
let service = new WebPubSubServiceClient(process.env.WebPubSubConnectionString, hub);

export const publishChangedStatus = (user: any) => {
    console.log("Log from Send all Pub sub=> " + JSON.stringify(user));
    service.sendToAll(user);
    return { message: "Status Published" }
}
