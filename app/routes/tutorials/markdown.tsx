import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";
import { MindStudioLink } from "../../components/MindStudioLink";

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
          <li><MindStudioLink /> Starter plan, so you can create an agent and paste prompts and summaries.</li>
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
          <li>First, add a “Query Data Source” block as a placeholder, setting the Variable Name to <em>answer</em> with Max Results of 5. We’ll circle back on the Query Template on the next round.</li>
          <li>Then, add two “Generate Text” blocks, labeling each block as “Review The Answer” and “Format The Answer”.</li>
          <li>Next, add a block prompt in markdown format to “Review The Answer” so you can interact with the LLM behind the scenes before heading into the next block. Save the output to a variable called <em>evaluation</em>. We’ll use that variable later down the road in the next few blocks.</li>
          <li>After that, add a block prompt to “Format The Answer” so you can interact with the LLM again for this specific prompt.</li>
          <li>Finally, save the output to a variable called <em>formattedAnswer</em> and provide a sample output in JSON, which you can freely shape in a way you’d understand.</li>
        </ol>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="headings" className="space-y-3">
        <h2 className="text-xl font-semibold">Headings</h2>
				<p>Use headings to structure your content.</p>
        <CodeBlock language="md" code={`# Title\n\n## Section`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="lists" className="space-y-3">
        <h2 className="text-xl font-semibold">Lists</h2>
				<p>Use lists to present items clearly.</p>
        <CodeBlock language="md" code={`- Red Ranger\n- Blue Ranger\n- Pink Ranger\n- Black Ranger\n- Yellow Ranger`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="links" className="space-y-3">
        <h2 className="text-xl font-semibold">Links</h2>
				<p>Use links to connect to other resources.</p>
        <CodeBlock language="md" code={`[Listen Now](https://allwebsd.com)`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="tables" className="space-y-3">
        <h2 className="text-xl font-semibold">Tables</h2>
				<p>Use tables to present data in a structured format.</p>
        <CodeBlock language="md" code={`| Name | Color |\n| --- | ---: |\n| Jason | Red |\n| Kimberly | Pink |\n| Billy | Blue |\n| Zack | Black |\n| Trini | Yellow |`} />
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
            Markdown Live Preview: <a href="https://markdownlivepreview.com/" target="_blank" rel="noopener noreferrer" className="underline">Live Preview</a>
          </li>
          <li>
            MDN: <a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN" target="_blank" rel="noopener noreferrer" className="underline">How to write in Markdown</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
