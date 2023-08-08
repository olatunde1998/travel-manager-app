import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/reports/page";


describe("Report Component", () => {
  it("renders without errors", () => {
    render(<Home />);
  });
});
