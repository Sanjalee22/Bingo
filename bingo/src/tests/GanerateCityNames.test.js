import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenerateNames from "../components/GenerateCityNames";

afterEach(cleanup);

it("renders GenerateNames without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GenerateNames />, div);
});

it("renders button to pick city correctly", () => {
  render(<GenerateNames />);
  expect(screen.getByRole("button")).toHaveTextContent("Pick a City");
});

it("handles Pick a City button click correctly", () => {
  const updateCalledCities = jest.fn();
  render(<GenerateNames updateCalledCities={updateCalledCities} />);
  fireEvent.click(screen.getByRole("button"));
  expect(updateCalledCities).toHaveBeenCalledTimes(1);
});
