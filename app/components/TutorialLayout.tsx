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

function Toc({ items, showHeading = true }: { items: TocItem[]; showHeading?: boolean }) {
  const { isDarkMode } = useTheme();
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (!items?.length) return;

    // Check for initial hash in URL and set active state
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && items.some(item => item.id === initialHash)) {
      setActiveId(initialHash);

      // Scroll to the hash target after a short delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(initialHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If no hash, set the first item as active by default
      setActiveId(items[0].id);
    }

    // Listen for hash changes (when clicking TOC links or h2 headings)
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash && items.some(item => item.id === currentHash)) {
        setActiveId(currentHash);
        // Also scroll to the element to ensure it's in view
        setTimeout(() => {
          const element = document.getElementById(currentHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Simple scroll-based detection with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Don't update active state if we have a hash in URL (let hash take priority)
          const currentHash = window.location.hash.replace('#', '');
          if (currentHash && items.some(item => item.id === currentHash)) {
            // Hash is present and valid, don't override with scroll detection
            ticking = false;
            return;
          }

          const scrollPosition = window.scrollY + 100; // Offset for header
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Find the section that's currently in view
          let currentSection = items[0].id; // Default to first

          for (const item of items) {
            const element = document.getElementById(item.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top + window.scrollY;

              if (scrollPosition >= elementTop) {
                currentSection = item.id;
              }
            }
          }

          // Only override with last section if we're truly at the very bottom (within 10px)
          const atVeryBottom = scrollPosition + windowHeight >= documentHeight - 10;
          if (atVeryBottom) {
            currentSection = items[items.length - 1].id;
          }

          setActiveId(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);  if (!items?.length) return null;

  return (
    <nav aria-label="On this page">
      {showHeading && <h2 className={`text-sm font-semibold text-white`}>On this page</h2>}
      <ul className={`${showHeading ? 'mt-3' : ''} space-y-2`}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  `block text-sm transition-colors border-l-2 pl-3 py-1 ${
                    isActive
                      ? isDarkMode
                        ? "border-[#FFC425] text-[#FFC425] font-medium"
                        : "border-[#FFC425] text-[#FFC425] font-medium"
                      : "border-transparent text-gray-200 hover:text-white hover:border-gray-400"
                  }`
                }
              >
                {item.label}
              </a>
            </li>
          );
        })}
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

export function VideoEmbed({ videoId, url, title, start, copyLabel }: { videoId?: string; url?: string; title?: string; start?: number; copyLabel?: string }) {
  const { isDarkMode } = useTheme();

  // Parse a provided YouTube URL to extract videoId and timestamp
  const parseYouTube = (input?: string): { id?: string; t?: number } => {
    if (!input) return {};
    try {
      const u = new URL(input);
      const host = u.hostname.replace(/^www\./, "");
      let id: string | undefined;
      let tSec: number | undefined;

      // Extract video id from different URL forms
      if (host === "youtu.be") {
        id = u.pathname.replace(/^\//, "");
      }  else if (host === "youtube.com" || host === "www.youtube.com") {
        if (u.pathname.startsWith("/watch")) {
          id = u.searchParams.get("v") ?? undefined;
        } else if (u.pathname.startsWith("/embed/")) {
          id = u.pathname.split("/")[2];
        }
      }

      // Extract timestamp from t or start
      const tParam = u.searchParams.get("t") || u.searchParams.get("start");
      if (tParam) {
        tSec = toSeconds(tParam);
      }

      return { id, t: tSec };
    } catch {
      return {};
    }
  };

  // Convert YouTube time formats like "90", "90s", or "1h2m3s" to seconds
  const toSeconds = (t: string): number => {
    // Numeric or numeric with trailing 's'
    const numeric = t.match(/^\d+$/) || t.match(/^(\d+)s$/i);
    if (numeric) {
      const n = parseInt(numeric[1] ?? t, 10);
      return isNaN(n) ? 0 : n;
    }
    // h/m/s format like 1h2m3s, 15m30s, 45s
    const re = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i;
    const m = t.match(re);
    if (m) {
      const h = parseInt(m[1] ?? "0", 10) || 0;
      const mnt = parseInt(m[2] ?? "0", 10) || 0;
      const s = parseInt(m[3] ?? "0", 10) || 0;
      return h * 3600 + mnt * 60 + s;
    }
    return 0;
  };

  const parsed = parseYouTube(url);
  const finalId = videoId ?? parsed.id;
  const finalStart = typeof start === "number" ? start : parsed.t;

  // Build embed and share URLs
  const embedSrc = finalId
    ? `https://www.youtube.com/embed/${finalId}${finalStart && finalStart > 0 ? `?start=${finalStart}` : ""}`
    : undefined;

  const watchUrl = finalId
    ? `https://www.youtube.com/watch?v=${finalId}${finalStart && finalStart > 0 ? `&t=${finalStart}s` : ""}`
    : undefined;

  const [copied, setCopied] = React.useState(false);

  const formatTime = (s?: number) => {
    if (!s || s <= 0) return undefined;
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = Math.floor(s % 60);
    const hh = hours > 0 ? `${hours}:` : "";
    const mm = hours > 0 ? String(minutes).padStart(2, "0") : String(minutes);
    const ss = String(seconds).padStart(2, "0");
    return `${hh}${mm}:${ss}`;
  };

  const timeLabel = formatTime(finalStart);

  const onCopy = async () => {
    if (!watchUrl) return;
    try {
      await navigator.clipboard.writeText(watchUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div>
      <div className={`relative w-full overflow-hidden rounded-md border ${isDarkMode ? "border-[#2F241D] bg-[#2F241D]" : "border-gray-200 bg-gray-50"}`}>
        {/* 16:9 aspect ratio */}
        <div className="pt-[56.25%]" />
        {finalId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedSrc}
            title={title ?? "Tutorial video"}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            <span>Video coming soon. Add a YouTube videoId or URL to VideoEmbed.</span>
          </div>
        )}
      </div>

      {/* Copy link helper */}
      {finalId && (
        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCopy}
            className={
              `rounded px-2 py-1 text-xs font-medium transition-colors ` +
              (isDarkMode
                ? `bg-[#F03D86] text-white hover:bg-[#d63570]`
                : `bg-[#FFC425] text-[#2F241D] hover:bg-[#e6b021]`)
            }
            aria-label={timeLabel ? `Copy YouTube link starting at ${timeLabel}` : `Copy YouTube link`}
          >
            {copied
              ? `Copied`
              : copyLabel ?? (timeLabel ? `Copy link to ${timeLabel}` : `Copy video link`)}
          </button>
          {/* Optional raw URL display for debugging; keep hidden unless needed */}
          {/* <span className={`text-xs ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>{watchUrl}</span> */}
        </div>
      )}
    </div>
  );
}

// Helper to build meta tags for tutorial pages
export function tutorialMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path: string; // absolute path starting with '/'
  image?: string;
}) {
  const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:8888"
    : "https://allwebsd.com";

  const pageTitle = `${title} | Web Developer storytelling, teaching and community building out of America's Finest City | AllWebSD.com`;
  const desc = description ?? "Beginner-friendly tutorials to apply HTML, Markdown, JSON, and Handlebars in real workflows.";

  // Only use fallback image if no image is explicitly provided
  // This allows doitwithai.tsx to use its custom image
  const img = image ?? `${baseUrl}/images/allwebsd-diwai-share-V2.jpg`;
  const url = `${baseUrl}${path}`;

  return [
    { title: pageTitle, override: true },
    { name: "description", content: desc, override: true },
    { property: "og:title", content: title, override: true },
    { property: "og:description", content: desc, override: true },
    { property: "og:url", content: url, override: true },
    { property: "og:image", content: img, override: true },
    { name: "twitter:card", content: "summary_large_image", override: true },
    { name: "twitter:title", content: title, override: true },
    { name: "twitter:description", content: desc, override: true },
    { name: "twitter:image", content: img, override: true },
  ];
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
              <Toc items={toc} showHeading={false} />
            </div>
          </details>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop TOC - Fixed height with independent scroll */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6">
              <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                {toc?.length ? <Toc items={toc} showHeading={true} /> : null}
              </div>
            </div>
          </aside>

          {/* Main content - Independent scroll */}
          <main className="lg:col-span-9 space-y-8 text-white [&_h2]:cursor-pointer [&_h2]:hover:text-[#FFC425] [&_h2]:transition-colors">
            <div onClick={(e) => {
              // Handle clicks on h2 elements to create deep links
              const target = e.target as HTMLElement;
              if (target.tagName === 'H2') {
                const section = target.closest('section');
                if (section && section.id) {
                  window.location.hash = section.id;
                }
              }
            }}>
              {children}
            </div>

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
