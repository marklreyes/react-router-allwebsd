import TutorialLayout, { CodeBlock, VideoEmbed, tutorialMeta } from "../../components/TutorialLayout";
import { MindStudioLink } from "../../components/MindStudioLink";
import { trackEvent } from "../../utils/trackEvent";

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
      estTime="10 minutes"
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
          <li><MindStudioLink onClick={trackEvent("mindstudio_link_click", {
            params: {
              tutorial_name: "Handlebars",
              link_location: "Prerequisites Section",
              event_category: "External Link",
              event_label: "MindStudio Starter Plan Link",
              component: "Handlebars Tutorial Prerequisites"
            }
          })} /> Starter plan, so you can create an agent and paste a template.</li>
          <li>Watched at least one episode of Mighty Morphin Power Rangers.</li>
          <li>Optional: a small sample dataset to test loops and conditions.</li>
        </ul>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="watch-handlebars-templates" className="space-y-3">
        <h2 className="text-xl font-semibold">Watch Handlebars — “Form the Megazord”</h2>
        <p>Quick tour of Handlebars and how it manages dynamic content.</p>
		<VideoEmbed url="https://youtu.be/nw5Thf1h-nI?t=444" title="Handlebars – Video Walkthrough" />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="quick-setup" className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Setup</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>First, add a “Generate Asset” block and assign a source type, HTML Template.</li>
          <li>Then, head to your favorite editor (VS Code w/ CoPilot, Cursor, etc.) or chat (ChatGPT) and let’s vibe code a template which will capture and display the output from the previous variable, formattedAnswer.</li>
          <li>Next, take the Output of your vibe code session and paste it into the HTML Template field of  the Generate Asset” block.</li>
          <li>After that, modify Output Behavior to “Save to variable” and the Output Variable should be called its_morphin_time. Format should be in HTML.</li>
          <li>Finally, add a “Display Content” block and in the Message field reference the previous variable using double curly braces, <code>{"{{its_morphin_time}}"}</code>. On Settings, save Output Behavior to ‘Display to user” with a Display Type of “HTML”.</li>
        </ol>
      </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="variables" className="space-y-3">
        <h2 className="text-xl font-semibold">Variables</h2>
				<p>Use variables to store and reuse values.</p>
        <CodeBlock language="hbs" code={`Hello, {{name}}!`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="loops" className="space-y-3">
        <h2 className="text-xl font-semibold">Loops</h2>
				<p>Use loops to iterate over lists of items.</p>
        <CodeBlock language="hbs" code={`<ul>\n{{#each formattedAnswer.rangers}}\n  <li>{{name}}</li>\n{{/each}}\n</ul>`} />
  </section>
  <hr className="my-8 border-t border-white/20" />
      <section id="conditions" className="space-y-3">
        <h2 className="text-xl font-semibold">Conditions</h2>
				<p>Use conditions to control content based on logic.</p>
        <CodeBlock language="hbs" code={` {{#if alias}}<p><strong>Alias:</strong> {{alias}}</p>{{/if}}`} />
  </section>
  <hr className="my-8 border-t border-white/20" />

      <section id="resources" className="space-y-3">
        <h2 className="text-xl font-semibold">Additional Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            MindStudio University: <a
              href="https://university.mindstudio.ai/docs/building-ai-agents/variables#special-handlebars-methods-in-mindstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              onClick={trackEvent("external_resource_click", {
                params: {
                  tutorial_name: "Handlebars",
                  resource_name: "MindStudio University Special Handlebars Methods",
                  event_category: "External Resource",
                  event_label: "Special Handlebars Methods Link",
                  component: "Additional Resources Section"
                }
              })}
            >Special Handlebars Methods in MindStudio</a>
          </li>
          <li>
            Handlebars docs: <a
              href="https://handlebarsjs.com/guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              onClick={trackEvent("external_resource_click", {
                params: {
                  tutorial_name: "Handlebars",
                  resource_name: "Handlebars Official Guide",
                  event_category: "External Resource",
                  event_label: "Official Guide Link",
                  component: "Additional Resources Section"
                }
              })}
            >Official Guide</a>
          </li>
          <li>
            Built-in helpers: <a
              href="https://handlebarsjs.com/guide/builtin-helpers.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              onClick={trackEvent("external_resource_click", {
                params: {
                  tutorial_name: "Handlebars",
                  resource_name: "Handlebars Built-in Helpers",
                  event_category: "External Resource",
                  event_label: "Built-in Helpers Link",
                  component: "Additional Resources Section"
                }
              })}
            >if, each, etc.</a>
          </li>
          <li>
            Templates in practice: <a
              href="https://handlebarsjs.com/guide/expressions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              onClick={trackEvent("external_resource_click", {
                params: {
                  tutorial_name: "Handlebars",
                  resource_name: "Handlebars Expressions",
                  event_category: "External Resource",
                  event_label: "Expressions Link",
                  component: "Additional Resources Section"
                }
              })}
            >Expressions</a>
          </li>
        </ul>
      </section>
    </TutorialLayout>
  );
}
