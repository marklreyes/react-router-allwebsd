import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactMe } from "../pages/contact-me/contact-me";
import React from "react";

// Mock dependencies
vi.mock("~/context/ThemeContext", () => ({
  useTheme: vi.fn(() => ({
    isDarkMode: false,
    theme: { primary: "primary-class", text: "text-class" }
  }))
}));

vi.mock("react-router-dom", () => ({
  NavLink: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
  useSearchParams: () => [new URLSearchParams(), vi.fn()]
}));

describe("AboutMe Component", () => {
  it("renders h1 tag with correct content", () => {
    // Render the component
    render(<ContactMe />);

    // Find the h1 element
    const heading = screen.getByRole("heading", { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
	expect(heading.textContent).toBe("Contact Me");

  });
});
