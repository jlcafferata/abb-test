import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header>", () => {
  test("Have to render a page with TEST as a title", () => {
    render(<Header state={0} feature={"TEST"} />);
    const contentText = screen.getByText(/TEST/i);
    expect(contentText).toBeInTheDocument();
  });

  test("Have to render a red color background title", () => {
    render(<Header state={2} feature={"TEST"} />);
    const headerClass = Header({ state: 2, feature: "TEST" }).type
      .styledComponentId;
    const MyHeaderRoots = document.getElementsByClassName(headerClass);
    const style = window.getComputedStyle(MyHeaderRoots[0]);
    expect(style.backgroundColor).toBe("red");
  });

  
});
