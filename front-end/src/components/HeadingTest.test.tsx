import React from "react";
import { render, screen } from "@testing-library/react";
import { HeadingTest } from "./HeadingTest";

describe("<HeadingTest />", () => {
  it("Should render heading component", () => {
    render(<HeadingTest />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
