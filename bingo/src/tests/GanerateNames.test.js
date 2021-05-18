import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenerateNames from "../components/GenarateNames";

afterEach(cleanup);

it("renders GenerateNames without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GenerateNames />, div);
});

it("renders button correctly", () => {
  const { getByRole } = render(<GenerateNames />);
  expect(getByRole("button")).toHaveTextContent("Call Out Next City");
});

it("button click event is handled correctly", () => {
  const setNextCalledName = jest.fn();
  const { getByRole } = render(
    <GenerateNames setNextCalledName={setNextCalledName} />
  );
  fireEvent.click(getByRole("button"), { target: { value: "mockCity" } });
  expect(setNextCalledCity).toHaveBeenCalledTimes(1);
});
