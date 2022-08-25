import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TableContainer from '../TableContainer'

describe("TableContainer", () => {
  it("renders a table", () => {
    render(<TableContainer launches={[{mission_name: 'thaicom', launch_year: '2014', details: "test"}]} />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
