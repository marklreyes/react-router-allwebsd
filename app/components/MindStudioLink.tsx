import React from "react";

interface MindStudioLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export function MindStudioLink({ className = "", children = "MindStudio" }: MindStudioLinkProps) {
  const baseStyles = "underline hover:no-underline transition-colors duration-200";
  const themeStyles = "text-[#FFC425] hover:text-white";

  return (
    <a
      href="https://get.mindstudio.ai/4dphaa4u7229"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${themeStyles} ${className}`}
    >
      {children}
    </a>
  );
}
