import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditPlayers from "../components/EditPlayers";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlayersEditor />, div);
});

it("renders submit button correctly", () => {
  const { getByRole } = render(<PlayersEditor />);
  expect(getByRole("button")).toHaveTextContent("Submit");
});

it("renders test box with default value correctly", () => {
  const { getByRole } = render(<PlayersEditor />);
  expect(getByRole("textbox")).toHaveValue("1");
});

it("correctly displays the changed text in input", () => {
  const { getByRole } = render(<PlayersEditor />);
  const textBox = getByRole("textbox");
  expect(textBox).toHaveValue("1");
  fireEvent.change(textBox, { target: { value: "2" } });
  expect(textBox.value).toBe("2");
});

it("handles submit event correctly", () => {
  const changeNumberOfPlayers = jest.fn();
  const { getByRole } = render(
    <PlayersEditor changeNumberOfPlayers={changeNumberOfPlayers} />
  );
  fireEvent.click(getByRole("button"), { target: { value: "2" } });
  expect(changeNumberOfPlayers).toHaveBeenCalledTimes(1);
});
