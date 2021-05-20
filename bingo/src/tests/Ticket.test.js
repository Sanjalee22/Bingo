import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ticket from "../components/Ticket";

afterEach(cleanup);

//As it's a 5x5 ticket with an image at center, creating an array of 24 elements to be rendered as ticket.
const ticketElements = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
];

//initialise calledCities with some elements from allElements
const calledCities = ["b", "d", "z"];

it("renders Ticket without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Ticket ticketElements={ticketElements} calledCities={calledCities} />,
    div
  );
});

it("renders all the ticket elements", () => {
  render(
    <Ticket ticketElements={ticketElements} calledCities={calledCities} />
  );
  for (let i = 0; i < ticketElements.length && i !== 12; ++i) {
    const item = screen.getByText(ticketElements[i]);
    expect(item).toBeInTheDocument;
    expect(item).toHaveClass("element");
  }
});

it("renders bingo image at center", () => {
  render(
    <Ticket ticketElements={ticketElements} calledCities={calledCities} />
  );
  const bingoImage = screen.getByAltText("Bingo");
  expect(bingoImage).toBeInTheDocument();
  expect(bingoImage).toHaveClass("fittedImage");
});

it("highlights only the elements which have been called", () => {
  render(
    <Ticket ticketElements={ticketElements} calledCities={calledCities} />
  );
  for (let i = 0; i < ticketElements.length && i !== 12; ++i) {
    const item = screen.getByText(ticketElements[i]);
    if (calledCities.includes(ticketElements[i])) {
      expect(item).toHaveClass("generated");
    } else expect(item).not.toHaveClass("generated");
  }
});
