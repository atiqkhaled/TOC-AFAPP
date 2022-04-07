import httpTrigger from "../index";
import { Context } from "@azure/functions";
const sdao = require('../../lib/dao/statusDao');
jest.mock("../../lib/db-connector");
jest.mock("../../lib/dao/statusDao");

describe("Test for addStatus", () => {
  let context: Context;
  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });
  it("should return status : Busy", async () => {
    // Arrange
    const request = {
      body: { status: "Busy" },
    };
    // Action
    sdao.addStatus.mockResolvedValue(request.body)
    await httpTrigger(context, request);
    // Assertion
    expect(context.res.body.documentResponse).toEqual(request.body);
  });
});
