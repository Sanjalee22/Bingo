import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditPlayers from "../components/EditPlayers";

afterEach(cleanup);

it("renders EditPlayers component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditPlayers />, div);
});

it("renders Show Tickets button correctly", () => {
  render(<EditPlayers />);
  expect(screen.getByRole("button")).toHaveTextContent("Show Tickets");
});

it("renders input text box with default value correctly", () => {
  render(<EditPlayers />);
  expect(screen.getByTestId("numberInput")).toHaveValue(1);
});

it("correctly displays the changed text in input", () => {
  render(<EditPlayers />);
  const textBox = screen.getByTestId("numberInput");
  expect(textBox).toHaveValue(1);
  fireEvent.change(textBox, { target: { value: "2" } });
  expect(textBox).toHaveValue(2);
});

it("handles form submit event correctly", () => {
  const changeTotalPlayers = jest.fn();
  render(<EditPlayers changeTotalPlayers={changeTotalPlayers} />);
  fireEvent.click(screen.getByRole("button"));
  expect(changeTotalPlayers).toHaveBeenCalledTimes(1);
});
