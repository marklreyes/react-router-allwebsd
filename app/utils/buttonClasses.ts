interface Theme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}

interface ButtonClassOptions {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  animate?: boolean;
  customClasses?: string;
}

/**
 * Generates themed button classes for consistent styling across components
 * @param theme - Theme object from ThemeContext
 * @param isDarkMode - Boolean indicating if dark mode is active
 * @param options - Button styling options
 * @returns String of Tailwind CSS classes
 */
export function getButtonClasses(
  theme: Theme,
  isDarkMode: boolean,
  options: ButtonClassOptions = {}
): string {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    animate = false,
    customClasses = ''
  } = options;

  // Base button classes
  const baseClasses = 'btn transition-all duration-300 hover:scale-105 hover:shadow-lg border-0';

  // Size classes
  const sizeClasses = {
    sm: 'btn-sm',
    md: '', // Default size
    lg: 'btn-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: isDarkMode
      ? 'bg-[#FFC425] text-[#2F241D] hover:bg-yellow-400'
      : 'bg-[#71BEA9] text-white hover:bg-teal-600',
    secondary: isDarkMode
      ? 'bg-[#71BEA9] text-white hover:bg-teal-600'
      : 'bg-[#FFC425] text-[#2F241D] hover:bg-yellow-400',
    outline: `btn-outline ${theme.primary} ${theme.text} hover:bg-[#2F241D] hover:text-white`
  };

  // Additional classes
  const widthClass = fullWidth ? 'w-full' : '';
  const animateClass = animate ? 'animate-shake' : '';

  return [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    widthClass,
    animateClass,
    customClasses
  ].filter(Boolean).join(' ');
}

/**
 * Convenience function for primary buttons
 */
export function getPrimaryButtonClasses(theme: Theme, isDarkMode: boolean, options?: Omit<ButtonClassOptions, 'variant'>) {
  return getButtonClasses(theme, isDarkMode, { ...options, variant: 'primary' });
}

/**
 * Convenience function for outline buttons
 */
export function getOutlineButtonClasses(theme: Theme, isDarkMode: boolean, options?: Omit<ButtonClassOptions, 'variant'>) {
  return getButtonClasses(theme, isDarkMode, { ...options, variant: 'outline' });
}
