import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import NotifyOffer from "./NotifyOffer";

describe("NotifyOffer Component", () => {
  it("renders the notification with correct message", async () => {
    render(<NotifyOffer />);
    const notification = screen.getByRole("alert");
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveTextContent(
      "Special Offer: 20% off all products until"
    );
    cleanup();
  });

  it("closes the notification when close button is clicked", async () => {
    render(<NotifyOffer />);
    const closeButton = screen.getByTestId("closeButton");
    userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });
});
