import React from "react";
import { render } from "@testing-library/react";

import Task from "@/app/task/page";

describe("Task Component", () => {
  it("renders without errors", () => {
    render(<Task />);
  });
});
