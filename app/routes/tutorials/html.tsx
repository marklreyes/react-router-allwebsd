import * as React from "react";
import TutorialLayout, { CodeBlock, VideoEmbed } from "../../components/TutorialLayout";

export default function HtmlTutorial() {
  return (
    <TutorialLayout
      title="HTML Basics"
      subtitle="Format outputs for pages and chat UIs"
      iconLabel="HTML"
      estTime="15 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "video", label: "Video" },
        { id: "headings", label: "Headings" },
        { id: "lists", label: "Lists" },
        { id: "links", label: "Links" },
        { id: "images", label: "Images" },
        { id: "resources", label: "Additional Resources" },
      ]}
  nextPrev={{ next: { label: "Markdown", to: "/do-it-with-ai/markdown" } }}
    >
      <section id="prerequisites" className="space-y-3">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>A modern browser (Chrome, Edge, or Safari).</li>
          <li>No coding experience required—basic copy/paste is enough.</li>
          <li>Optional: a MindStudio project to paste the HTML output into a page or chat block.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="video" className="space-y-3">
        <h2 className="text-xl font-semibold">Video</h2>
        <p>Watch a quick walkthrough of HTML basics.</p>
        <VideoEmbed videoId={undefined} title="HTML Basics – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="headings" className="space-y-3">
        <h2 className="text-xl font-semibold">Headings</h2>
        <p>Use headings to structure your output.</p>
        <CodeBlock language="html" code={`<h1>Title</h1>\n<h2>Section</h2>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="lists" className="space-y-3">
        <h2 className="text-xl font-semibold">Lists</h2>
        <p>Present items clearly.</p>
        <CodeBlock language="html" code={`<ul>\n  <li>One</li>\n  <li>Two</li>\n</ul>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="links" className="space-y-3">
        <h2 className="text-xl font-semibold">Links</h2>
        <CodeBlock language="html" code={`<a href="https://example.com" target="_blank" rel="noopener">View</a>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="images" className="space-y-3">
        <h2 className="text-xl font-semibold">Images</h2>
        <CodeBlock language="html" code={`<img src="/images/example.png" alt="Example" />`} />
  </section>

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MDN Web Docs: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer" className="underline">HTML elements</a>
          </li>
          <li>
            Web Accessibility: <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noopener noreferrer" className="underline">Intro to Accessibility</a>
          </li>
          <li>
            MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank" rel="noopener noreferrer" className="underline">Learn HTML</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
