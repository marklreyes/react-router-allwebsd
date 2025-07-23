import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { SponsorCard } from "../components/SponsorCard";
import type { SponsorCardProps } from "../types/sponsorCard";
import { BrowserRouter } from "react-router-dom";

// Mock dependencies
vi.mock("~/context/ThemeContext", () => ({
  useTheme: vi.fn(() => ({
    theme: {
      primary: "btn-primary",
      text: "text-primary"
    }
  }))
}));

vi.mock("~/utils/trackEvent", () => ({
  trackEvent: vi.fn()
}));

// Mock react-icons
vi.mock("react-icons/hi", () => ({
  HiOutlineSparkles: () => null,
  HiOutlineCurrencyDollar: () => null
}));

// Clean up DOM after each test
beforeEach(() => {
  cleanup();
});

// Helper function to render component with Router
const renderWithRouter = (props: SponsorCardProps) => {
  return render(
    <BrowserRouter>
      <SponsorCard {...props} />
    </BrowserRouter>
  );
};

describe("SponsorCard Navigation Toggle", () => {
  const baseProps: SponsorCardProps = {
    title: "Test Sponsor",
    benefits: ["Benefit 1", "Benefit 2"],
    icon: "⭐",
    linkUrl: "/contact",
    linkText: "Learn More"
  };

  describe("External Navigation (Anchor Tag)", () => {
    it("renders anchor tag by default (navigationType not specified)", () => {
      renderWithRouter({
        ...baseProps,
        linkUrl: "https://example.com"
      });

      const link = screen.getByRole('link', { name: /Learn More for Test Sponsor/i });
      expect(link.tagName).toBe("A");
      expect(link.getAttribute("href")).toBe("https://example.com");
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });

    it("renders anchor tag when navigationType is 'external'", () => {
      renderWithRouter({
        ...baseProps,
        linkUrl: "https://example.com",
        navigationType: "external"
      });

      const link = screen.getByRole('link', { name: /Learn More for Test Sponsor/i });
      expect(link.tagName).toBe("A");
      expect(link.getAttribute("href")).toBe("https://example.com");
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });
  });

  describe("Internal Navigation (NavLink)", () => {
    it("renders NavLink when navigationType is 'internal'", () => {
      renderWithRouter({
        ...baseProps,
        linkUrl: "/contact",
        navigationType: "internal"
      });

      const link = screen.getByRole('link', { name: /Learn More for Test Sponsor/i });
      // NavLink gets rendered as an anchor tag but without target/rel attributes
      expect(link.tagName).toBe("A");
      expect(link.getAttribute("href")).toBe("/contact");
      expect(link.getAttribute("target")).toBeNull();
      expect(link.getAttribute("rel")).toBeNull();
    });

    it("renders NavLink even with subject when navigationType is 'internal'", () => {
      renderWithRouter({
        ...baseProps,
        linkUrl: "/contact",
        subject: "Test Subject",
        navigationType: "internal"
      });

      const link = screen.getByRole('link', { name: /Learn More for Test Sponsor/i });
      expect(link.getAttribute("href")).toBe("/contact");
      expect(link.getAttribute("href")).not.toContain("mailto:");
      expect(link.getAttribute("target")).toBeNull();
      expect(link.getAttribute("rel")).toBeNull();
    });
  });
});
