import type { Route } from "./+types/datastructures";
import TutorialLayout, { tutorialMeta, CodeBlock, VideoEmbed, type TocItem, type NavItem } from "../components/TutorialLayout";
import { trackEvent } from "../utils/trackEvent";

export function meta({}: Route.MetaArgs) {
  return tutorialMeta({
    title: "Mighty Morphin Data Structures",
    description: "Season 6 demos on data structures with a mighty morphin twist.",
    path: "/data-structures",
  });
}

const tocItems: TocItem[] = [
  { id: "arrays", label: "Episode 1" },
  { id: "objects", label: "Episode 2" },
  { id: "lists", label: "Episode 3" },
  { id: "trees", label: "Episode 4" },
  { id: "practical-examples", label: "Episode 5" }
];

export default function DataStructures() {

  return (
    <TutorialLayout
      title="Mighty Morphin Data Structures"
      subtitle="Season 6 demos on data structures with a mighty morphin twist."
      iconLabel="DS"
      estTime="25 minutes"
      level="Intermediate"
      toc={tocItems}
      cta={{
        label: "View on GitHub",
        href: "https://github.com/marklreyes/mighty-morphin-data-structures",
		external: true,}}
      breadcrumbItems={[
        { label: "Home", to: "/" },
        { label: "Data Structures" }
      ]}
    >
      {/* Introduction */}
      <section id="introduction" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-200 leading-relaxed">
			The goal for this series was to deconstruct lessons learned from going head first into data structures. It’s my hope that I can translate a complex topic into an easy-going format and I did so by channeling my inner 10-year-old self.  You see back in my day, I was a big fan of the original Mighty Morphin Power Rangers series. So I went ahead and took snapshots from that show and brushed it with some code.
          </p>
        </div>
      </section>

	<hr className="my-8 border-t border-white/20" />

      {/* Episode 1 Section */}
      <section id="arrays" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Episode 1</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200">
			Zordon and Alpha assemble the team considering two data structures - a linked list or an array.
          </p>

		<VideoEmbed url="https://youtu.be/ZKR7ZfJfTwA" title="AllWebSD.com: Mighty Morphin Data Structures, Part 1" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Key Characteristics</h3>
            <ul className="text-gray-200 space-y-2">
              <li><strong>Linked List:</strong> Each element points to the next, efficient insertion/deletion</li>
              <li><strong>Array:</strong> Elements stored in contiguous memory, fast indexed access</li>
              <li><strong>Trade-offs:</strong> Arrays excel at random access, linked lists at dynamic modifications</li>
              <li><strong>Memory:</strong> Arrays use less memory per element, linked lists more flexible sizing</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Example: Linked List and Array of Rangers</h3>
        <CodeBlock language="javascript" code={`// Linked list - a collection of items where each item points to the next one in the list.
const linkedListOfRangers = {
	head: {
		value: 'Zack',
		next: {
			value: 'Kimberly',
			next: {
				value: 'Billy',
				next: {
					value: 'Trini',
					next: {
						value: 'Jason',
						next: null
					}
				}
			}
		}
	}
};

// Array - has quick gets when searching for an index.
const arrayOfRangers = ['Zack', 'Kimberly', 'Billy', 'Trini', 'Jason'];`} />

        <div className="mt-6 p-4 bg-[#71BEA9] bg-opacity-20 border border-[#71BEA9] rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">💡 Best Use Cases</h4>
          <ul className="text-gray-900 space-y-1">
            <li><strong>Linked Lists:</strong> When you frequently add/remove team members (dynamic roster changes)</li>
            <li><strong>Arrays:</strong> When you need quick access to specific Rangers by position (formations)</li>
            <li><strong>Linked Lists:</strong> Implementing undo operations or command chains</li>
            <li><strong>Arrays:</strong> Storing sequences where order and indexed access matter</li>
          </ul>
        </div>
      </section>

	<hr className="my-8 border-t border-white/20" />

      {/* Episode 2 Section */}
      <section id="objects" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Episode 2</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200">
			Extending on the idea of an array, Zordon assigns each ordinary teen their power.
          </p>

		<VideoEmbed url="https://www.youtube.com/watch?v=3CNubmgdFmc" title="AllWebSD.com: Mighty Morphin Data Structures, Part 2" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Key Characteristics</h3>
            <ul className="text-gray-200 space-y-2">
              <li><strong>Power Assignment:</strong> Each Ranger gets specific attributes (name, color, zord, weapon)</li>
              <li><strong>Descriptive Access:</strong> Use meaningful keys instead of numeric positions</li>
              <li><strong>Extensible Powers:</strong> Add new abilities or remove old ones dynamically</li>
              <li><strong>Nested Structure:</strong> Rangers can have complex nested attributes and relationships</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Example: Array of Objects</h3>
        <CodeBlock language="javascript" code={`// Considering the previous array, let's turn this into a hybrid data structure.
const arrayOfRangers = [
	{
		name: 'Zack',
		power: 'Mastodon',
		isMorphed: false
	},
	{
		name: 'Kimberly',
		power: 'Pterodactyl',
		isMorphed: false
	},
	{
		name: 'Billy',
		power: 'Triceratops',
		isMorphed: false
	},
	{
		name: 'Trini',
		power: 'Sabertooth',
		isMorphed: false
	},
	{
		name: 'Jason',
		power: 'Tyrannosaurus',
		isMorphed: false
	}
];

// Bulk and Skull
const bulk = {
	name: 'Bulk',
	power: 'Mastodon',
	isMorphed: false
};

const skull = {
	name: 'Skull',
	power: 'Mastodon',
	isMorphed: false
};

// Zack
const zack = {
	name: 'Zack',
	power: 'Mastodon',
	isMorphed: false
};`} />

        <div className="mt-6 p-4 bg-[#F03D86] bg-opacity-20 border border-[#F03D86] rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">🎯 Best Use Cases</h4>
          <ul className="text-gray-900 space-y-1">
            <li><strong>Ranger Profiles:</strong> Store each teen's name, power, and morphing status</li>
            <li><strong>Power Assignment:</strong> Map specific abilities and attributes to each character</li>
            <li><strong>Team Management:</strong> Track individual Rangers within the larger team structure</li>
            <li><strong>Character States:</strong> Monitor whether each Ranger is morphed or in civilian form</li>
          </ul>
        </div>
      </section>

	<hr className="my-8 border-t border-white/20" />

      {/* Episode 3 Section */}
      <section id="lists" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Episode 3</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200">
			Rita sends down Goldar and the Putties. It's time to queue up our plan of attack.
          </p>

		<VideoEmbed url="https://www.youtube.com/watch?v=w9KROYE0Jts" title="AllWebSD.com: Mighty Morphin Data Structures, Part 3" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Key Characteristics</h3>
            <ul className="text-gray-200 space-y-2">
              <li><strong>Enqueue Enemies:</strong> Rita adds Putties to the front of the battle line (unshift operation)</li>
              <li><strong>Dequeue Defeats:</strong> Rangers remove defeated enemies from the back (pop operation)</li>
              <li><strong>Peek Strategy:</strong> Check the next enemy to fight without engaging them yet</li>
              <li><strong>Battle Status:</strong> Track queue length and check if all enemies are defeated (isEmpty)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Example: Queue Creation</h3>
        <CodeBlock language="javascript" code={`function createQueue() {
	// Store our items in an array held in closure.
	const queue = [];

	return {
		// Use unshift(), to keep the collection of the array in order by adding items to the front.
		enqueue(x) {
			queue.unshift(x);
		},
		// Use pop(), to remove the final item from the array while maintain order.
		dequeue() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue.pop();
		},
		// Return the next item that's ready to be removed.
		peek() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue[queue.length - 1];
		},
		// Use a getter function to get the CURRENT queue's length.
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
} `} />

        <div className="mt-6 p-4 bg-[#71BEA9] bg-opacity-20 border border-[#71BEA9] rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">⚡ Best Use Cases</h4>
          <ul className="text-gray-900 space-y-1">
            <li><strong>Battle Planning:</strong> Queue up enemies to fight in order (Putties first, then Goldar)</li>
            <li><strong>Task Prioritization:</strong> Handle mission objectives in first-in, first-out order</li>
            <li><strong>Turn-Based Combat:</strong> Track who attacks next while maintaining fair order</li>
            <li><strong>Command Processing:</strong> Execute Zordon's instructions sequentially without losing any</li>
          </ul>
        </div>
      </section>

	<hr className="my-8 border-t border-white/20" />

      {/* Episode 4 Section */}
      <section id="trees" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Episode 4</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200">
			We must prioritize the queue as things quickly change when Rita throws her magic wand down from the moon.
          </p>

		<VideoEmbed url="https://www.youtube.com/watch?v=MQD6cJkKIYo" title="AllWebSD.com: Mighty Morphin Data Structures, Part 4" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Key Characteristics</h3>
            <ul className="text-gray-200 space-y-2">
              <li><strong>Dual Priority System:</strong> High priority (Rita's magic wand) and low priority (regular Putties) queues</li>
              <li><strong>Emergency First:</strong> High priority threats always processed before low priority ones</li>
              <li><strong>Dynamic Prioritization:</strong> Can assign priority levels when adding new threats (isHighPriority flag)</li>
              <li><strong>Combined Management:</strong> Track total length across both priority levels simultaneously</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Example: Priority Queue Creation</h3>
        <CodeBlock language="javascript" code={`function createPriorityQueue() {
// Make two queues held in closure to determine priority.
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();

  return {
	// Set high priority to false by default. Ternary operator will determine if it's high/low priority.
    enqueue(item, isHighPriority = false) {
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue;
      queue.enqueue(item);
    },
	// Make sure high priority queue is emptied first BEFORE attempting to dequeue from low priority queue.
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
	// Similar to dequeue(), let's peek from the high priority queue first.
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
	// Conjunction of our 2 queues.
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  }
}
`} />

        <div className="mt-6 p-4 bg-[#F03D86] bg-opacity-20 border border-[#F03D86] rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">🌳 Best Use Cases</h4>
          <ul className="text-gray-900 space-y-1">
            <li>• <strong>MegaZord Assembly:</strong> Stack DinoZords in formation order, activate when all 5 are ready</li>
            <li>• <strong>Undo Operations:</strong> Track user actions to reverse them in reverse order</li>
            <li>• <strong>Function Calls:</strong> Manage nested function execution and returns</li>
            <li>• <strong>Backtracking Algorithms:</strong> Remember paths to reverse when hitting dead ends</li>
          </ul>
        </div>
      </section>

	<hr className="my-8 border-t border-white/20" />

      {/* Episode 5 Section */}
      <section id="practical-examples" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Episode 5</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200">
            We need DinoZord power now! Assembling MegaZord by way of a stack data structure.
          </p>

		<VideoEmbed url="https://www.youtube.com/watch?v=QyThH77KZ2k" title="AllWebSD.com: Mighty Morphin Data Structures, Part 5" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Key Characteristics</h3>
            <ul className="text-gray-200 space-y-2">
              <li><strong>LIFO Assembly:</strong> Last DinoZord added is first to connect (Last In, First Out)</li>
              <li><strong>Push Zords:</strong> Add DinoZords to the top of the assembly stack</li>
              <li><strong>Pop Formation:</strong> Remove the most recently added Zord if needed</li>
              <li><strong>MegaZord Activation:</strong> Special trigger when 5 DinoZords are stacked together</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#FFC425] mb-4">Example: Create Stack</h3>
        <CodeBlock language="javascript" code={`function createStack() {
	// Store our items in an array held in closure.
	const stack = [];

	// Return our stack as a plain JS object.
	return {
		// Place new items at the end of the array.
		push(x) {
			stack.push(x);
		},
		// Remove the final item in the array. This ensures order is maintained.
		pop() {
			if (stack.length === 0) {
				return undefined;
			}
			return stack.pop()
		},
		// Return the last item in the array.
		peek() {
			if (stack.length === 0) {
				return undefined;
			}
			if (stack.length === 5) {
				return 'MegaZord activated!';
			}
			return stack[stack.length - 1]
		},
		// Use a getter ensures we always get the current length.
		get length() {
			return stack.length;
		},
		isEmpty() {
			return stack.length === 0;
		}
	}
}
`} />

        <div className="mt-6 p-4 bg-[#71BEA9] bg-opacity-20 border border-[#71BEA9] rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">🌳 Best Use Cases</h4>
          <ul className="text-gray-900 space-y-1">
            <li>• <strong>MegaZord Assembly:</strong> Stack DinoZords in formation order, activate when all 5 are ready</li>
            <li>• <strong>Undo Operations:</strong> Track user actions to reverse them in reverse order</li>
            <li>• <strong>Function Calls:</strong> Manage nested function execution and returns</li>
            <li>• <strong>Backtracking Algorithms:</strong> Remember paths to reverse when hitting dead ends</li>
          </ul>
        </div>
      </section>

    </TutorialLayout>
  );
}
