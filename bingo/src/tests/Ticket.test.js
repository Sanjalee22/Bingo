import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Ticket from "../components/Ticket";

afterEach(cleanup);

const ticketElements = ["a", "b", "c", "d", "e"];
const calledName = "a";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Ticket ticketElements={ticketElements} calledName={calledName} />,
    div
  );
});

it("renders ticket elements", () => {
  render(<Ticket ticketElements={ticketElements} calledName={calledName} />);
  for (let i = 0; i < 5; ++i) {
    const item = screen.queryByText(ticketElements[i]);
    expect(item).not.toBeNull();
  }
});

it("handles element click", () => {
  const onNameClick = jest.fn();
  render(<Ticket ticketElements={ticketElements} calledName={calledName} />);
  fireEvent.click(screen.getByText("a"));
  expect(onNameClick).toHaveBeenCalledTimes(1);
});
