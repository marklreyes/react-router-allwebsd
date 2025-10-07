import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export type BreadcrumbItem = {
  label: string;
  to?: string; // last item may be plain text
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { isDarkMode } = useTheme();
  if (!items?.length) return null;

  const sep = (
    <span className={isDarkMode ? "text-[#2F241D]" : "text-gray-400"} aria-hidden>
      /
    </span>
  );

  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={`${item.label}-${idx}`}>
              {item.to && !isLast ? (
                <li>
                  <Link
                    to={item.to}
                    className={
                      isDarkMode
                        ? "text-[#2F241D] hover:underline"
                        : "text-gray-700 hover:text-[#2F241D] hover:underline"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li className={isDarkMode ? "text-[#2F241D]" : "text-gray-500"} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </li>
              )}
              {!isLast && <li>{sep}</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
