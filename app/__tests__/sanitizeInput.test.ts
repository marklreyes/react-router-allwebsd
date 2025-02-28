import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '../routes/chat';

describe('sanitizeInput', () => {
	it('should trim whitespace and limit length', () => {
		const input = '   '.repeat(100) + 'hello world' + '   '.repeat(100);
		expect(sanitizeInput(input)).toBe('hello world');
	});

	it('should remove HTML tags', () => {
		const input = '<script>alert("xss")</script><p>Hello</p>';
		expect(sanitizeInput(input)).toBe('alert("xss")Hello');
	});

	it('should handle nested HTML tags', () => {
		const input = '<div><p><span>Test</span></p></div>';
		expect(sanitizeInput(input)).toBe('Test');
	});

	it('should preserve allowed special characters', () => {
		const input = 'Hello@#$%^&*()-!"`;';
		expect(sanitizeInput(input)).toBe('Hello@#$%^&*()-!"`');
	});

	it('should handle multiple spaces between words', () => {
		const input = 'Hello     World';
		expect(sanitizeInput(input)).toBe('Hello     World');
	});

	it('should handle mixed HTML and special characters', () => {
		const input = '<div>Hello!</div>@#$%<p>World</p>';
		expect(sanitizeInput(input)).toBe('Hello!@#$%World');
	});

	it('should remove malformed HTML tags', () => {
		const input = 'Hello<br>World</p>';
		expect(sanitizeInput(input)).toBe('HelloWorld');
	});
});
