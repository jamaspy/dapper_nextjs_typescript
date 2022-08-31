import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm";

test("Submit button should be disabled when inputs have no text", async () => {
  render(<ContactForm />);
  const createButton = screen.getByRole("button", /hit me up/i);
  expect(createButton).toBeDisabled();
});

test("the create button is enabled when all of the inputs has text", async () => {
  render(<ContactForm />);
  const createButton = screen.getByRole("button", /hit me up/i);
  const newEventNameInput = screen.getByPlaceholderText(/your name/i);
  const newEventEmailInput = screen.getByPlaceholderText(/your email address/i);
  const newEventMessageInput = screen.getByPlaceholderText(/your message/i);
  expect(newEventNameInput).toBeInTheDocument();
  userEvent.type(newEventNameInput, "James");
  userEvent.type(newEventEmailInput, "aspin@me.com");
  userEvent.type(newEventMessageInput, "Hello World!");
  expect(createButton).toBeEnabled();
});
