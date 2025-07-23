import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BecomeASponsor } from "../pages/become-a-sponsor/become-a-sponsor";

// Mock React Router hooks - note the component imports from "react-router"
vi.mock("react-router", () => ({
  NavLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  useLocation: vi.fn(() => ({
    pathname: "/become-a-sponsor",
    search: "",
    hash: "",
    state: null,
    key: "default"
  })),
  useSearchParams: vi.fn(() => [new URLSearchParams(), vi.fn()])
}));

// Also mock react-router-dom in case it's used elsewhere
vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(() => ({
    pathname: "/become-a-sponsor",
    search: "",
    hash: "",
    state: null,
    key: "default"
  })),
  useSearchParams: vi.fn(() => [new URLSearchParams(), vi.fn()]),
  NavLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  BrowserRouter: ({ children }: any) => <div>{children}</div>
}));

// Mock the SponsorCard component since we're only testing for h1
vi.mock("~/components/SponsorCard", () => ({
  SponsorCard: ({ title }: { title: string }) => <div data-testid="sponsor-card">{title}</div>
}));

// Mock trackEvent utility
vi.mock("~/utils/trackEvent", () => ({
  trackEvent: vi.fn()
}));

// Mock ThemeContext
vi.mock("~/context/ThemeContext", () => ({
  useTheme: vi.fn(() => ({
    theme: {
      primary: "btn-primary",
      text: "text-primary"
    },
    isDarkMode: false
  }))
}));

// Mock react-icons
vi.mock("react-icons/hi", () => ({
  HiOutlineSparkles: () => null,
  HiOutlineCurrencyDollar: () => null
}));

// Mock button classes utility
vi.mock("~/utils/buttonClasses", () => ({
  getOutlineButtonClasses: vi.fn(() => "mocked-button-classes")
}));

describe("BecomeASponsor Component", () => {
  it("renders an h1 tag with the correct content", () => {
    // Render the component directly (Router hooks are mocked)
    render(<BecomeASponsor />);

    // Find the h1 element
    const heading = screen.getByRole("heading", { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
    expect(heading.textContent).toBe("Become A Sponsor");
  });
});
