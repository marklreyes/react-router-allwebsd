import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "~/context/ThemeContext";
import type { PaginationProps } from "~/types/pagination";
import { trackEvent } from "~/utils/trackEvent";

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const { theme } = useTheme();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
		<nav
			className={`${theme.primary} flex justify-center gap-2 rounded-lg p-1`}
			aria-label="Pagination navigation"
		>
			<button
			onClick={
				() => {
					onPageChange(Math.max(currentPage - 1, 1));
					trackEvent("button_click", {
						params: {
							action: "Click",
							event_category: "Pagination",
							event_label: `${Math.max(currentPage - 1, 1)} - ${currentPage}`,
							component: "Pagination Component"
						}
					});
				}
			}
			disabled={currentPage === 1}
			className="px-4 py-2 rounded-sm disabled:opacity-50 flex items-center gap-2"
			aria-label={`Go to page ${currentPage - 1}`}
			>
			<FaChevronLeft className="inline-block" aria-hidden="true" />
			<span>Previous page</span>
			</button>
			<div className="px-4 py-2" role="status" aria-live="polite">
			Page {currentPage} of {totalPages}
			</div>
			<button
			onClick={
				() => {
					onPageChange(currentPage + 1);
					trackEvent("button_click", {
						params: {
							action: "Click",
							event_category: "Pagination",
							event_label: `${currentPage} - ${Math.min(currentPage + 1, totalPages)}`,
							component: "Pagination Component"
						}
					});
				}
			}
			disabled={currentPage >= totalPages}
			className="px-4 py-2 rounded-sm disabled:opacity-50 flex items-center gap-2"
			aria-label={`Go to page ${currentPage + 1}`}
			>
			<span>Next page</span>
			<FaChevronRight className="inline-block" aria-hidden="true" />
			</button>
		</nav>
  );
}
