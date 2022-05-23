import { render, screen } from "@testing-library/react";
import React from "react";
import Body from "./Body";

const constants = require("../../constants/constants.json");

const { cards_height } = constants;


describe("<Body>", () => {
  test("Have to render a page just with a single Control title", () => {
    render(<Body measurements={[]} height={""} item={0} />);
    const contentText = screen.getByText(/Control/i);
    expect(contentText).toBeInTheDocument();
  });

  const _measurements = [
    {
      variable: "X",
      values: { dev: 0, devOut: 0, state: 0 },
    },
  ];

  test("Have to render a page with X Control Element", () => {
    render(<Body measurements={_measurements as []} height={""} item={0} />);
    const contentText = screen.getByText(/X/i);
    expect(contentText).toBeInTheDocument();
  });

  test("Have to render a page with initial heigth of 35vh", () => {
    render(<Body measurements={_measurements as []} height={cards_height[1]} item={1} />);
    const bodyClass = Body({
      measurements: [],
      height: cards_height[1],
      item: 1,
    }).type.styledComponentId;
    const bodyRoots = document.getElementsByClassName(bodyClass);
    const style = window.getComputedStyle(bodyRoots[0]);
    expect(style.height).toBe(cards_height[1]);
  });
});
