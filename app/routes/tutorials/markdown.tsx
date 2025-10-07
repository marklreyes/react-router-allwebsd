import * as React from "react";
import TutorialLayout, { CodeBlock, VideoEmbed } from "../../components/TutorialLayout";

export default function MarkdownTutorial() {
  return (
    <TutorialLayout
      title="Markdown Magic"
      subtitle="Readable prompts and summaries"
      iconLabel="MD"
      estTime="12 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "video", label: "Video" },
        { id: "headings", label: "Headings" },
        { id: "lists", label: "Lists" },
        { id: "links", label: "Links" },
        { id: "tables", label: "Tables" },
        { id: "resources", label: "Additional Resources" },
      ]}
  nextPrev={{ prev: { label: "HTML", to: "/do-it-with-ai/html" }, next: { label: "JSON", to: "/do-it-with-ai/json" } }}
    >
      <section id="prerequisites" className="space-y-3">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>A modern browser and a text editor (or the MindStudio prompt editor).</li>
          <li>No coding experience required.</li>
          <li>Optional: a MindStudio project to paste prompts and summaries.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="video" className="space-y-3">
        <h2 className="text-xl font-semibold">Video</h2>
        <p>A short demo of writing and previewing Markdown.</p>
        <VideoEmbed videoId={undefined} title="Markdown – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="headings" className="space-y-3">
        <h2 className="text-xl font-semibold">Headings</h2>
        <CodeBlock language="md" code={`# Title\n\n## Section`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="lists" className="space-y-3">
        <h2 className="text-xl font-semibold">Lists</h2>
        <CodeBlock language="md" code={`- One\n- Two`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="links" className="space-y-3">
        <h2 className="text-xl font-semibold">Links</h2>
        <CodeBlock language="md" code={`[View](https://example.com)`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="tables" className="space-y-3">
        <h2 className="text-xl font-semibold">Tables</h2>
        <CodeBlock language="md" code={`| Name | Price |\n| --- | ---: |\n| Item | $10 |`} />
  </section>

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Basic syntax: <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer" className="underline">Markdown Guide</a>
          </li>
          <li>
            Tables: <a href="https://www.markdownguide.org/extended-syntax/#tables" target="_blank" rel="noopener noreferrer" className="underline">Extended syntax</a>
          </li>
          <li>
            MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Markdown" target="_blank" rel="noopener noreferrer" className="underline">What is Markdown?</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
