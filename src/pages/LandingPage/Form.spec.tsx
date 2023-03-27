import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LandingPage } from ".";
import { vi, describe, expect, it } from "vitest";

export {};

vi.mock("react-router-dom", () => {
  return {
    useNavigate() {
      return [null, false];
    },
  };
});

describe("Forms of HomePage", () => {
  it("renders a name input", async () => {
    render(<LandingPage />);

    let nameInput = screen.getByPlaceholderText(/digite aqui seu nome/i);

    expect(nameInput).toBeInTheDocument();
  });

  it("renders a email input", async () => {
    render(<LandingPage />);

    let emailInput = screen.getByPlaceholderText(/digite aqui seu e\-mail/i);

    expect(emailInput).toBeInTheDocument();
  });
});
