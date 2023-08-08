import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/schedule-appointment/page";



describe("Schedule Appointment Component", () => {
  it("renders without errors", () => {
    render(<Home />);
  });
});
