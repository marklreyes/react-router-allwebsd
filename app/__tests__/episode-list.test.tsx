import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { EpisodesList } from "../pages/episodes-list/episodes-list";

// Mock dependencies
vi.mock("react-router-dom", () => ({
  useSearchParams: () => [
    new URLSearchParams("?page=1"),
    vi.fn()
  ]
}));

vi.mock("~/context/ThemeContext", () => ({
  useTheme: () => ({
    theme: {
      primary: "primary-class",
      text: "text-class"
    },
    isDarkMode: false
  })
}));

vi.mock("~/components/Episode", () => ({
  Episode: ({ title }: { title: string }) => <div data-testid="episode-item">{title}</div>
}));

vi.mock("~/components/Pagination", () => ({
  Pagination: () => <div data-testid="pagination">Pagination Component</div>
}));

vi.mock("react-icons/md", () => ({
  MdFrontLoader: () => <div data-testid="loader-icon">Loading Icon</div>
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: unknown) => {
      store[key] = String(value);
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("<rss></rss>")
  })
) as any;

describe("EpisodesList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.clear();
  });

  it("renders an h1 tag with the correct content", () => {
    // Render the component
    render(<EpisodesList />);

    // Find the h1 element
    const heading = screen.getByRole("heading", { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
    expect(heading.textContent).toBe("Episodes List");
  });

  it("shows loading state initially", () => {
    render(<EpisodesList />);

    // Check loading message is displayed
    const loadingElement = screen.getByText("Loading Episodes...");
    expect(loadingElement).toBeDefined();
  });
});
