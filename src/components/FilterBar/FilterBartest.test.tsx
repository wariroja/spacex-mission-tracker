import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterBar from './FilterBar'


describe("FilterBar", () => {
  const onChange = jest.fn()
  it("renders a calculator", () => {
    render(<FilterBar label="search" value="" onChange={onChange}/>);
    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });
});

