import * as React from "react";
import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";

export function meta() {
  return tutorialMeta({
    title: "Markdown — “Give Zordon a Voice”",
    description: "Make prompts and summaries easy to scan with Markdown basics.",
    path: "/do-it-with-ai/markdown",
  });
}

export default function MarkdownTutorial() {
  return (
    <TutorialLayout
      title="Markdown — “Give Zordon a Voice”"
      subtitle="Make prompts and summaries easy to scan"
      iconLabel="MD"
      estTime="12 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "watch-markdown-magic", label: "Watch Markdown — “Give Zordon a Voice”" },
        { id: "quick-setup", label: "Quick Setup" },
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
          <li>MindStudio Starter plan, so you can create an agent and paste prompts and summaries.</li>
          <li>Watched at least one episode of Mighty Morphin Power Rangers.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="watch-markdown-magic" className="space-y-3">
        <h2 className="text-xl font-semibold">Watch Markdown — “Give Zordon a Voice”</h2>
        <p>Learn how to apply the basics of Markdown as prompts within your MindStudio project.</p>
        <VideoEmbed videoId={undefined} title="Markdown – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="quick-setup" className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Setup</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Step 1 placeholder text</li>
          <li>Step 2 placeholder text</li>
          <li>Step 3 placeholder text</li>
          <li>Step 4 placeholder text</li>
          <li>Step 5 placeholder text</li>
        </ol>
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
  <hr className="my-8 border-t border-white/20" />

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MindStudio University: <a href="https://university.mindstudio.ai/1-core-building-principles/writing-good-prompts" target="_blank" rel="noopener noreferrer" className="underline">Writing Good Prompts</a>
          </li>
          <li>
            MindStudio University: <a href="https://university.mindstudio.ai/docs/building-ai-agents/writing-prompts" target="_blank" rel="noopener noreferrer" className="underline">Writing Prompts</a>
          </li>
          <li>
            Basic syntax: <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer" className="underline">Markdown Guide</a>
          </li>
          <li>
            Tables: <a href="https://www.markdownguide.org/extended-syntax/#tables" target="_blank" rel="noopener noreferrer" className="underline">Extended syntax</a>
          </li>
          <li>
            MDN: <a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN" target="_blank" rel="noopener noreferrer" className="underline">How to write in Markdown</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
