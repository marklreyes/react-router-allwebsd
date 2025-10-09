import * as React from "react";
import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";

export function meta() {
  return tutorialMeta({
    title: "Handlebars — “Form the Megazord”",
    description: "Use variables, loops, and conditions to build reusable AI prompt templates.",
    path: "/do-it-with-ai/handlebars",
  });
}

export default function HandlebarsTutorial() {
  return (
    <TutorialLayout
      title="Handlebars — “Form the Megazord”"
      subtitle="Create reusable, dynamic AI templates"
      iconLabel="HBS"
      estTime="20 minutes"
      level="Beginner"
      toc={[
        { id: "prerequisites", label: "Prerequisites" },
        { id: "watch-handlebars-templates", label: "Watch Handlebars — “Form the Megazord”" },
        { id: "quick-setup", label: "Quick Setup" },
        { id: "variables", label: "Variables" },
        { id: "loops", label: "Loops" },
        { id: "conditions", label: "Conditions" },
        { id: "resources", label: "Additional Resources" },
      ]}
  nextPrev={{ prev: { label: "JSON", to: "/do-it-with-ai/json" } }}
    >
      <section id="prerequisites" className="space-y-3">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Familiar with basic placeholders like <code>{"{{name}}"}</code> (no prior Handlebars needed).
          </li>
          <li>MindStudio Starter plan, so you can create an agent and paste a template.</li>
          <li>Optional: a small sample dataset to test loops and conditions.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="watch-handlebars-templates" className="space-y-3">
        <h2 className="text-xl font-semibold">Watch Handlebars — “Form the Megazord”</h2>
        <p>Quick tour of Handlebars and how it manages dynamic content.</p>
		<VideoEmbed url="https://youtu.be/sgITSK1sI_k?si=825K2DTqRMOo8u05" title="Handlebars – Video Walkthrough" />
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

      <section id="variables" className="space-y-3">
        <h2 className="text-xl font-semibold">Variables</h2>
        <CodeBlock language="hbs" code={`Hello, {{name}}!`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="loops" className="space-y-3">
        <h2 className="text-xl font-semibold">Loops</h2>
        <CodeBlock language="hbs" code={`<ul>\n{{#each items}}\n  <li>{{this}}</li>\n{{/each}}\n</ul>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="conditions" className="space-y-3">
        <h2 className="text-xl font-semibold">Conditions</h2>
        <CodeBlock language="hbs" code={`{{#if isMember}}Welcome back!{{else}}Join us!{{/if}}`} />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MindStudio University: <a href="https://university.mindstudio.ai/docs/building-ai-agents/variables#special-handlebars-methods-in-mindstudio" target="_blank" rel="noopener noreferrer" className="underline">Special Handlebars Methods in MindStudio</a>
          </li>
          <li>
            Handlebars docs: <a href="https://handlebarsjs.com/guide/" target="_blank" rel="noopener noreferrer" className="underline">Official Guide</a>
          </li>
          <li>
            Built-in helpers: <a href="https://handlebarsjs.com/guide/builtin-helpers.html" target="_blank" rel="noopener noreferrer" className="underline">if, each, etc.</a>
          </li>
          <li>
            Templates in practice: <a href="https://handlebarsjs.com/guide/expressions.html" target="_blank" rel="noopener noreferrer" className="underline">Expressions</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
