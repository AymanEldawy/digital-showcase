import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import LeftMenu from "./LeftMenu";

describe("LeftMenu Component", () => {
  it("renders logged-in menu when user is logged in", async () => {
    render(<LeftMenu />);
    const loginButton = screen.getByText("Login");
    const signUpButton = screen.getByText("Sign Up");

    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    cleanup();
  });

  it("renders logged-out menu when user is logged out", async () => {
    render(<LeftMenu />);
    const loginButton = screen.getByText("Login");
    const signUpButton = screen.getByText("Sign Up");

    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();

    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByTestId("logged-in-menu")).toBeInTheDocument();
      expect(screen.queryByTestId("logged-out-menu")).not.toBeInTheDocument();
    });
  });
});
