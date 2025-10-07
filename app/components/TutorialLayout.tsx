import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";

export type TocItem = { id: string; label: string };
export type NavItem = { label: string; to: string };
export type Cta = { label: string; href: string; external?: boolean };

export interface TutorialLayoutProps {
  title: string;
  subtitle?: string;
  iconLabel?: string; // e.g., HTML | MD | JSON | HBS
  estTime?: string; // e.g., 15 minutes
  level?: "Beginner" | "Intermediate" | "Advanced";
  toc?: TocItem[];
  cta?: Cta;
  nextPrev?: { prev?: NavItem; next?: NavItem };
  breadcrumbItems?: BreadcrumbItem[];
  children: React.ReactNode;
}

export function Badge({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  return (
    <span
      className={
        `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ` +
        (isDarkMode
          ? "bg-[#2F241D] text-gray-100 border border-[#2F241D]"
          : "bg-gray-100 text-gray-800 border border-gray-200")
      }
    >
      {children}
    </span>
  );
}

function Toc({ items }: { items: TocItem[] }) {
  const { isDarkMode } = useTheme();
  if (!items?.length) return null;
  return (
    <nav aria-label="On this page">
      <h2 className={`text-sm font-semibold text-white`}>On this page</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={
                `block text-sm transition-colors text-gray-200 hover:text-white`
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CodeBlock({ code, language, filename }: { code: string; language?: string; filename?: string }) {
  const { isDarkMode } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div className={`relative border rounded-md overflow-hidden ${isDarkMode ? "border-[#2F241D] bg-[#2F241D]" : "border-gray-200 bg-gray-50"}`}>
      <div className="flex items-center justify-between px-3 py-2 text-xs">
        <div className={`truncate ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
          {filename ?? (language ? `${language}` : "code")}
        </div>
        <button
          type="button"
          onClick={onCopy}
          className={
            `rounded px-2 py-1 transition-colors ` +
            (isDarkMode
              ? `bg-[#F03D86] text-white hover:bg-[#d63570]`
              : `bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]`)
          }
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={`p-4 overflow-auto text-sm ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
}

export function VideoEmbed({ videoId, title }: { videoId?: string; title?: string }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={`relative w-full overflow-hidden rounded-md border ${isDarkMode ? "border-[#2F241D] bg-[#2F241D]" : "border-gray-200 bg-gray-50"}`}>
      {/* 16:9 aspect ratio */}
      <div className="pt-[56.25%]" />
      {videoId ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? "Tutorial video"}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
          <span>Video coming soon. Add a YouTube videoId to VideoEmbed.</span>
        </div>
      )}
    </div>
  );
}

export default function TutorialLayout({
  title,
  subtitle,
  iconLabel,
  estTime,
  level,
  toc,
  cta,
  nextPrev,
  breadcrumbItems,
  children,
}: TutorialLayoutProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gradient-to-br from-[#F03D86] to-[#71BEA9]" : "bg-gradient-to-br from-[#2F241D] to-[#FFC425]"}`}>
      {/* Header */}
      <div className={`${isDarkMode ? "bg-[#71BEA9]" : "bg-white"} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={
              breadcrumbItems && breadcrumbItems.length
                ? breadcrumbItems
                : [
                    { label: "Do It With AI", to: "/do-it-with-ai" },
                    { label: title },
                  ]
            }
          />
          <div className="flex items-start gap-4 md:items-center md:gap-6">
            {iconLabel && (
              <div className={`h-12 w-12 ${isDarkMode ? "bg-[#FFC425]" : "bg-[#FFC425] bg-opacity-20"} rounded-lg flex items-center justify-center shrink-0`}>
                <span className="text-[#2F241D] font-bold text-sm">{iconLabel}</span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDarkMode ? "text-[#2F241D]" : "text-[#2F241D]"}`}>{title}</h1>
              {subtitle && (
                <p className={`mt-2 ${isDarkMode ? "text-[#2F241D]" : "text-gray-600"}`}>{subtitle}</p>
              )}
              {(estTime || level) && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {estTime && <Badge>{estTime}</Badge>}
                  {level && <Badge>{level}</Badge>}
                </div>
              )}
            </div>
            {cta && (
              cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${isDarkMode ? "text-white bg-[#F03D86] hover:bg-[#d63570]" : "text-[#2F241D] bg-[#FFC425] hover:bg-[#e6b021]"}`}
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  to={cta.href}
                  className={`hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${isDarkMode ? "text-white bg-[#F03D86] hover:bg-[#d63570]" : "text-[#2F241D] bg-[#FFC425] hover:bg-[#e6b021]"}`}
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="h-2 bg-[#FFC425]" />
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile TOC */}
        {toc?.length ? (
          <details className="lg:hidden mb-6">
            <summary className={`cursor-pointer text-sm font-medium ${isDarkMode ? "text-white" : "text-[#2F241D]"}`}>On this page</summary>
            <div className="mt-2">
              <Toc items={toc} />
            </div>
          </details>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6">
              {toc?.length ? <Toc items={toc} /> : null}
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 space-y-8 text-white">
            {children}

            {/* Prev/Next */}
            {(nextPrev?.prev || nextPrev?.next) && (
              <div className="pt-6 mt-10 border-t border-gray-200 dark:border-[#2F241D] flex items-center justify-between">
                {nextPrev?.prev ? (
                  <Link
                    to={nextPrev.prev.to}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${isDarkMode ? "text-white bg-[#2F241D] hover:bg-[#1f1814]" : "text-[#2F241D] bg-gray-100 hover:bg-gray-200"}`}
                  >
                    <span aria-hidden>←</span>
                    {nextPrev.prev.label}
                  </Link>
                ) : <span />}

                {nextPrev?.next ? (
                  <Link
                    to={nextPrev.next.to}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${isDarkMode ? "text-white bg-[#F03D86] hover:bg-[#d63570]" : "text-[#2F241D] bg-[#FFC425] hover:bg-[#e6b021]"}`}
                  >
                    {nextPrev.next.label}
                    <span aria-hidden>→</span>
                  </Link>
                ) : <span />}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
