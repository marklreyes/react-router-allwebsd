import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BecomeASponsor } from "../pages/become-a-sponsor/become-a-sponsor";
import { BrowserRouter } from "react-router-dom";

// Mock the SponsorCard component since we're only testing for h1
vi.mock("~/components/SponsorCard", () => ({
  SponsorCard: ({ title }: { title: string }) => <div data-testid="sponsor-card">{title}</div>
}));

// Mock trackEvent utility
vi.mock("~/utils/trackEvent", () => ({
  trackEvent: vi.fn()
}));

// Helper function to render component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe("BecomeASponsor Component", () => {
  it("renders an h1 tag with the correct content", () => {
    // Render the component with Router context
    renderWithRouter(<BecomeASponsor />);

    // Find the h1 element
    const heading = screen.getByRole("heading", { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
    expect(heading.textContent).toBe("Become A Sponsor");
  });
});
