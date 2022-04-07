import httpTrigger from "../index";
import { Context } from "@azure/functions";

describe("Test for addNewUser", () => {
  let context: Context;
  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });
  it("should return a 200", async () => {
    // Arrange
    const request = {
      body: { name: "John" },
    };
    // Action
    await httpTrigger(context, request);
    // Assertion
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.status).toEqual(200);
  });

  it("should return empty object for invalid data", async () => {
    // Arrange
    const request = {
      body: { invalidName: "John" },
    };
    const result ="";
    // Action
    await httpTrigger(context, request);
    // Assertion
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.body).toEqual(result);
  });
});