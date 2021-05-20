import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

afterEach(cleanup);

it("renders App without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("displayes correct header text",()=>{
    render(<App/>);
    expect(screen.getByText("Traveller's Bingo!")).toBeInTheDocument();    
})

it("shows correct header style", ()=>{
    render(<App/>);
    expect(screen.getByText("Traveller's Bingo!")).toHaveClass("heading");
})