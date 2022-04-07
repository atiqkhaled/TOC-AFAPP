import * as statusDao from "../statusDao";
import * as statusRepo from "../../repo/statusRepo";

jest.mock("../../repo/statusRepo");
test("status dao test : findStatusByName with Busy should been called", () => {
  statusDao.findStatusByName("Busy");
  expect(statusRepo.findStatusByName).toHaveBeenCalledWith("Busy");
});
