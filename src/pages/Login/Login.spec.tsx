import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./index";
import { vi, describe, expect, it } from "vitest";
import React from "react";

describe("Login", () => {
  it("should render login form", () => {
    render(<Login />);

    const loginInput = screen.getByPlaceholderText("login");
    const passwordInput = screen.getByPlaceholderText("senha");
    const submitButton = screen.getByText("Entrar");

    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should handle form submission", () => {
    const handleLogin = vi.fn();
    
    vi.spyOn(React, "useContext").mockReturnValue({ handleLogin });

    render(<Login />);

    const loginInput = screen.getByPlaceholderText("login");
    const passwordInput = screen.getByPlaceholderText("senha");
    const submitButton = screen.getByText("Entrar");

    userEvent.type(loginInput, "user");
    userEvent.type(passwordInput, "password");
    userEvent.click(submitButton);

    expect(handleLogin).toHaveBeenCalledWith({
      login: "user",
      senha: "password",
    });
  });
});
