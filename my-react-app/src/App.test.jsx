import { fireEvent, render, screen } from "@testing-library/react"
import { describe, test, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Form from "./components/FeedbackForm"

describe("Feed back form", () => {
    test("Submission is disables if score is lower than five and there is no comment", () => {
        // create the mock function 
        const handleSubmit = vi.fn();

        // render the component to be tested
        render(<Form onSubmit={handleSubmit} />);

        // get the tag with the text of "Score:"
        const rangeInput = screen.getByLabelText(/Score:/);
        fireEvent.change(rangeInput, { target: { value: "4" }});

        // get the button
        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });
});