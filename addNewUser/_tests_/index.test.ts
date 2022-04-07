import httpTrigger from "../index";
import { Context } from "@azure/functions";
const udao = require('../../lib/dao/userDao');
jest.mock("../../lib/db-connector");
jest.mock("../../lib/dao/userDao");
jest.mock('@azure/web-pubsub');
describe("Test for addNewUser", () => {
  let context: Context;
  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });
  it("should return name : adam", async () => {
    // Arrange
    const request = {
      body: { name: "adam" },
    };
    // Action
    udao.addUser.mockResolvedValue(request.body)
    //console.log(udao.addUser);
    await httpTrigger(context, request);
    // Assertion
    console.log(" body : " +JSON.stringify(context.res))
    expect(context.res.documentResponse).toEqual(request.body);
    expect(udao.addUser).toBeCalledTimes(1);
  });
});
