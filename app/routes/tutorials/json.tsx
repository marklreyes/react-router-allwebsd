import * as React from "react";
import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";

export function meta() {
  return tutorialMeta({
    title: "JSON — “Activate the Data Crystals”",
    description: "Understand objects, arrays, and types to structure data for tools and APIs.",
    path: "/do-it-with-ai/json",
  });
}

export default function JsonTutorial() {
  return (
    <TutorialLayout
      title="JSON — “Activate the Data Crystals”"
      subtitle="Power workflows with structured mission data"
      iconLabel="JSON"
      estTime="18 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "watch-json-simplified", label: "Watch JSON — “Activate the Data Crystals”" },
        { id: "quick-setup", label: "Quick Setup" },
        { id: "objects", label: "Objects" },
        { id: "arrays", label: "Arrays" },
        { id: "types", label: "Types" },
        { id: "resources", label: "Additional Resources" },
      ]}
  nextPrev={{ prev: { label: "Markdown", to: "/do-it-with-ai/markdown" }, next: { label: "Handlebars", to: "/do-it-with-ai/handlebars" } }}
    >
      <section id="prerequisites" className="space-y-3">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Comfort reading simple key/value data (no coding required).</li>
          <li>MindStudio Starter plan to access data sources.</li>
          <li>Watched at least one episode of Mighty Morphin Power Rangers.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="watch-json-simplified" className="space-y-3">
        <h2 className="text-xl font-semibold">Watch JSON — “Activate the Data Crystals”</h2>
        <p>Add a JSON structure and how it maps to real workflows.</p>
        <VideoEmbed videoId={undefined} title="JSON — “Activate the Data Crystals” – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="quick-setup" className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Setup</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>First, review <em>formattedAnswer</em>, which is what we aspire the final output to look like.</li>
          <li>Then, review the file <code>rangers.json</code>, which is the starting data point for the LLM to reference.</li>
          <li>Next, revisit the “Query Data Source” block and upload the json file (rangers.json) which contains information about each ranger.</li>
          <li>After that, add a prompt in markdown format to the “Query Data Source” block.</li>
        </ol>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="objects" className="space-y-3">
        <h2 className="text-xl font-semibold">Objects</h2>
				<p>Use objects to represent complex data structures.</p>
        <CodeBlock language="json" code={`{\n  \"summary\": \"string\",\n  \"rangers\": [\n    { \"alias\": \"Red Ranger\" },\n    { \"alias\": \"Pink Ranger\" }\n  ]\n}`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="arrays" className="space-y-3">
        <h2 className="text-xl font-semibold">Arrays</h2>
				<p>Use arrays to represent ordered lists of items.</p>
        <CodeBlock language="json" code={`[\n  { \"alias\": \"Black Ranger\" },\n  { \"alias\": \"Blue Ranger\" }\n]`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
			<section id="types" className="space-y-3">
				<h2 className="text-xl font-semibold">Types</h2>
				<p>JSON supports various data types including numbers, strings, booleans, and null.</p>
				<CodeBlock language="json" code={`{\n  \"count\": 5,\n  \"name\": \"Trini Kwan\",\n  \"active\": true,\n  \"note\": null\n}`} />
			</section>
  <hr className="my-8 border-t border-white/20" />

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MindStudio University: <a href="https://university.mindstudio.ai/2-workflow-mastery/working-with-structured-data-json" target="_blank" rel="noopener noreferrer" className="underline">Working with Structured Data (JSON)</a>
          </li>
          <li>
            JSON syntax: <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer" className="underline">json.org</a>
          </li>
          <li>
            JSON Schema (for validation ideas): <a href="https://json-schema.org/" target="_blank" rel="noopener noreferrer" className="underline">json-schema.org</a>
          </li>
          <li>
            MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON" target="_blank" rel="noopener noreferrer" className="underline">Working with JSON</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
