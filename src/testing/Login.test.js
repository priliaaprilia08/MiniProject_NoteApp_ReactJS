import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Login from "../components/routes/Login";

const setup = () => {
  return render(<Login />);
};

describe("Login", () => {
  test("renders Login components", () => {
    setup();

    const titleForm = screen.getByText("Sign IN");
    expect(titleForm).toBeInTheDocument();

    const formEmail = screen.getByLabelText(/Enter email/);
    expect(formEmail).toBeInTheDocument();

    const formPassword = screen.getByLabelText(/Password/);
    expect(formPassword).toBeInTheDocument();
  });

  test("input form", () => {
    setup();

    const inputName = screen.getByRole("textbox", { name: /email/i });
    fireEvent.input(inputName, { target: { value: "ina@ui.ac.id" } });
    expect(screen.getByLabelText(/Enter Email/)).toHaveValue("ina@ui.ac.id");

    const inputPassword = screen.getByRole("textbox", { name: /password/i });
    fireEvent.input(inputPassword, { target: { value: "33333" } });
    expect(screen.getByLabelText(/Pasword/)).toHaveValue("33333");
  });
  test("submit button form", () => {
    setup();
    // fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByLabelText(/Enter Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Password/)).toHaveValue("");
  });
  test("reset button form", () => {
    setup();
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByLabelText(/Enter Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Password/)).toHaveValue("");
  });
});
