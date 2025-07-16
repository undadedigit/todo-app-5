import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";
test("renders task text correctly", () => {
  const mockTask = { id: 1, text: "Test Task", completed: false };
  render(<TaskItem task={mockTask} onToggle={() => {}} onDelete={() => {}} />);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});
test("calls onToggle when checkbox is clicked", () => {
  const mockTask = { id: 1, text: "Test Task", completed: false };
  const mockToggle = jest.fn();

  render(
    <TaskItem task={mockTask} onToggle={mockToggle} onDelete={() => {}} />
  );
  fireEvent.click(screen.getByRole("checkbox"));

  expect(mockToggle).toHaveBeenCalledWith(1);
});
