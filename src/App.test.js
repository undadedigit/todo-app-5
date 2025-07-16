import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/React To-Do App/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders task form", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  expect(inputElement).toBeInTheDocument();
});

test("can add a new task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  fireEvent.change(inputElement, { target: { value: "Test Task" } });
  const addButton = screen.getByRole("button", { name: /Add/i });
  fireEvent.click(addButton);
  expect(screen.getByText("Test Task")).toBeInTheDocument();
});
