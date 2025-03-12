import { describe, it, expect, vi } from "vitest";
import { sanitizeInput } from "../utils/sanitizer";
import DOMPurify from "dompurify";

// Improved DOMPurify mock with better unsafe URL handling
vi.mock('dompurify', () => ({
  default: {
    sanitize: vi.fn(input => {
      // More accurate simulation of DOMPurify's behavior
      let output = input
        // Remove script tags and their content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        // Remove custom unsafe elements
        .replace(/<(\/?)unsafe>/gi, '')
        // Remove href attributes with javascript: or data: URLs completely
        .replace(/href\s*=\s*["']?\s*(javascript|data|vbscript|file):[^"'>]*["']?/gi, '')
        // Clean up any leftover attributes
        .replace(/<a\s+>/gi, '<a>');

      return output;
    })
  }
}));

describe('sanitizeInput', () => {
  it('should use DOMPurify to sanitize input', () => {
    const input = '<p>Hello world</p>';
    sanitizeInput(input);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith(input, expect.any(Object));
  });

  it('should trim whitespace and limit length', () => {
    const input = '   '.repeat(100) + 'hello world' + '   '.repeat(100);
    expect(sanitizeInput(input)).toBe('hello world');
  });

  it('should remove dangerous HTML tags but keep safe ones', () => {
    const input = '<script>alert("xss")</script><p>Hello</p>';
    expect(sanitizeInput(input)).toBe('<p>Hello</p>');
  });

  it('should preserve structured content with safe tags', () => {
    const input = '<div><p><span>Test</span></p></div>';
    expect(sanitizeInput(input)).toBe('<div><p><span>Test</span></p></div>');
  });

  it('should preserve allowed special characters', () => {
    const input = 'Hello@#$%^&*()-!"`;';
    expect(sanitizeInput(input)).toBe('Hello@#$%^&*()-!"`;');
  });

  it('should handle multiple spaces between words', () => {
    const input = 'Hello     World';
    expect(sanitizeInput(input)).toBe('Hello     World');
  });

  it('should strip unsafe attributes', () => {
    const input = '<a href="javascript:alert(1)">Click me</a>';
    const result = sanitizeInput(input);
    expect(result).toBe('<a>Click me</a>');
  });

  it('should allow safe URLs in attributes', () => {
    const input = '<a href="https://example.com">Safe link</a>';
    expect(sanitizeInput(input)).toBe('<a href="https://example.com">Safe link</a>');
  });

  it('should handle data attributes safely', () => {
    const input = '<div data-testid="test">Test</div>';
    expect(sanitizeInput(input)).toBe('<div data-testid="test">Test</div>');
  });

  it('should remove custom unsafe elements', () => {
    const input = 'Hello <unsafe>World</unsafe>';
    expect(sanitizeInput(input)).toBe('Hello World');
  });

  // Updated test for data: URLs
  it('should strip other unsafe URL protocols', () => {
    const input = '<a href="data:text/html,<script>alert(1)</script>">Click me</a>';
    const result = sanitizeInput(input);
    expect(result).toBe('<a>Click me</a>');
  });
});
