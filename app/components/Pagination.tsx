import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "~/context/ThemeContext";
import type { PaginationProps } from "~/types/pagination";

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const { theme } = useTheme();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={`${theme.primary} flex justify-center gap-2 rounded-lg p-1`}>
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded disabled:opacity-50 flex items-center gap-2"
      >
        <FaChevronLeft className="inline-block" /> Previous
      </button>
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 rounded disabled:opacity-50 flex items-center gap-2"
      >
        Next <FaChevronRight className="inline-block" />
      </button>
    </div>
  );
}
