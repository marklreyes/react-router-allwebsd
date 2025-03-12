import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutMe } from "../pages/about-me/about-me";
import React from "react";

// Mock dependencies
vi.mock("~/context/ThemeContext", () => ({
  useTheme: vi.fn(() => ({
    isDarkMode: false,
    theme: { primary: "primary-class", text: "text-class" }
  }))
}));

vi.mock("~/utils/formatters", () => ({
  calculateYearsSince: vi.fn((year) => 2025 - year)
}));

vi.mock("react-router-dom", () => ({
  NavLink: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>
}));

vi.mock("../../components/PromoImage", () => ({
  PromoImage: ({ src, alt, ariaLabel, description }: {
    src: string;
    alt: string;
    ariaLabel: string;
    description: string;
  }) => (
    <div data-testid="promo-image">
      <img src={src} alt={alt} aria-label={ariaLabel} />
      <p>{description}</p>
    </div>
  )
}));

describe("AboutMe Component", () => {
  it("renders h1 tag with correct content", () => {
    // Render the component
    render(<AboutMe />);

    // Find the h1 element
    const heading = screen.getByRole("heading", { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
		expect(heading.textContent).toBe("👋🏾, I'm Mark!");

  });
});
