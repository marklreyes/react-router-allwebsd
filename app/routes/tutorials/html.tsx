import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";
import { MindStudioLink } from "../../components/MindStudioLink";

export function meta() {
  return tutorialMeta({
    title: "HTML — “Summon the Command Console”",
    description: "Format mission briefings for chat and UI panels with simple, reusable HTML patterns.",
    path: "/do-it-with-ai/html",
  });
}

export default function HtmlTutorial() {
  return (
    <TutorialLayout
      title="HTML — “Summon the Command Console”"
      subtitle="Format mission briefings for chat and UI panels"
      iconLabel="HTML"
      estTime="15 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "watch-html-basics", label: "Watch HTML — “Summon the Command Console”" },
        { id: "quick-setup", label: "Quick Setup" },
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
          <li><MindStudioLink /> Starter plan, so you can create an agent and paste HTML output.</li>
					<li>Watched at least one episode of Mighty Morphin Power Rangers.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="watch-html-basics" className="space-y-3">
        <h2 className="text-xl font-semibold">Watch HTML — “Summon the Command Console”</h2>
        <p>Learn how to apply the basics of HTML into your MindStudio project.</p>
        <VideoEmbed videoId={undefined} title="HTML — “Summon the Command Console” – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="quick-setup" className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Setup</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>First, add a “User Input” block.</li>
          <li>Then, assign the variable a name, mission_briefing (save as Long Text so we can write as much as we want) and we’ll use this later down in the workflow.</li>
          <li>Next, go to Optional Settings and switch the Interface to Custom, clicking the pencil icon.</li>
          <li>After that, let the fun begin. Vibe code and prompt the Interface Designer.</li>
          <li>Finally, click the compile button.</li>
        </ol>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="headings" className="space-y-3">
        <h2 className="text-xl font-semibold">Headings</h2>
        <p>Use headings to structure your output. Ensure only one h1 is present per page.</p>
        <CodeBlock language="html" code={`<h1>Ranger Command Console</h1>\n<h2>Section</h2>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="lists" className="space-y-3">
        <h2 className="text-xl font-semibold">Lists</h2>
        <p>Present items clearly.</p>
        <CodeBlock language="html" code={`<ul>\n  <li>Red Ranger</li>\n  <li>Blue Ranger</li>\n  <li>Pink Ranger</li>\n  <li>Black Ranger</li>\n  <li>Yellow Ranger</li>\n</ul>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="links" className="space-y-3">
        <h2 className="text-xl font-semibold">Links</h2>
				<p>Use links to connect to other resources.</p>
        <CodeBlock language="html" code={`<a href="https://allwebsd.com" target="_blank" rel="noopener">Listen Now</a>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="images" className="space-y-3">
        <h2 className="text-xl font-semibold">Images</h2>
				<p>Use images to enhance your content.</p>
        <CodeBlock language="html" code={`<img src="/images/logo.png" alt="Company Logo" />`} />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MindStudio University: <a href="https://university.mindstudio.ai/docs/building-ai-agents/interface-designer" target="_blank" rel="noopener noreferrer" className="underline">Interface Designer</a>
          </li>
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
