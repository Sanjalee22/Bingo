import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DisplayCalledNames from "../components/DisplayCalledNames";

afterEach(cleanup);

const calledCityNames = ["City1", "City2", "City3"];

it("renders DisplayCalledNames without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <DisplayCalledNames calledCityNames={calledCityNames} />,
    div
  );
});

it("Displays the called name as a label", () => {
  render(<DisplayCalledNames calledCityNames={calledCityNames} />);

  //last element in the array calledCityNames is the currently called element.
  //It should be displayed in bold.
  const currentCalledName = screen.getByText(
    calledCityNames[calledCityNames.length - 1]
  );
  expect(currentCalledName).toBeInTheDocument();
  expect(currentCalledName).toHaveClass("bold");
});

it("Displays list of previously called names", () => {
  render(<DisplayCalledNames calledCityNames={calledCityNames} />);
  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElement).toBeInTheDocument();

  //all the elements in calledCityNames, except the last one,
  //should be shown as a list of previously called elements
  expect(listItems.length).toEqual(calledCityNames.length - 1);
});
