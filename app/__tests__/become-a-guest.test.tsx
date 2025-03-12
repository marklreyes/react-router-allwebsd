import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BecomeAGuest } from '../pages/become-a-guest/become-a-guest';
import React from 'react';

// Mock dependencies
vi.mock("~/context/ThemeContext", () => ({
	useTheme: vi.fn(() => ({
	  isDarkMode: false,
	  theme: { primary: "primary-class", text: "text-class" }
	}))
}));

vi.mock('react-router-dom', () => ({
  NavLink: ({ children, to, className, 'aria-label': ariaLabel }: {
    children: React.ReactNode;
    to: string;
    className?: string;
    'aria-label'?: string;
  }) => (
    <a href={to} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}));

vi.mock('../../components/PromoImage', () => ({
  PromoImage: ({ src, alt, ariaLabel, description }: {
    src: string;
    alt: string;
    ariaLabel?: string;
    description: string;
  }) => (
    <div data-testid="promo-image">
      <img src={src} alt={alt} aria-label={ariaLabel} />
      <p>{description}</p>
    </div>
  ),
}));

describe('BecomeAGuest Component', () => {
  it('renders an h1 tag with the correct content', () => {
    // Render the component
    render(<BecomeAGuest />);

    // Find the h1 element
    const heading = screen.getByRole('heading', { level: 1 });

    // Assert that the h1 exists
    expect(heading).toBeDefined();

    // Assert that the h1 contains the expected text
    expect(heading.textContent).toBe('Become A Guest, Receive A Shirt!');
  });
});
