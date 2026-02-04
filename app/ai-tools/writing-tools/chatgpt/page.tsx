import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT – AI Writing Tool for Content & Productivity | Webloft",
  description:
    "ChatGPT is an AI-powered writing tool used for content creation, idea generation, and productivity. Read full details on Webloft.",
};

export default function ChatGPTPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-6 text-sm text-gray-500">
  <a href="/ai-tools" className="text-blue-600">
    AI Tools
  </a>
  <span className="mx-2">/</span>
  <a href="/ai-tools/writing-tools" className="text-blue-600">
    AI Writing Tools
  </a>
</nav>

      <h1 className="text-4xl font-bold text-gray-900">
        ChatGPT – AI Writing Tool
      </h1>

      <p className="mt-4 text-gray-600">
        ChatGPT is an AI-powered writing assistant used for content creation,
        brainstorming ideas, answering questions, and improving productivity.
      </p>

      <div className="mt-8 space-y-4">
        <p className="text-gray-700">
          <strong>Best for:</strong> Blogging, copywriting, idea generation,
          and general writing tasks.
        </p>

        <p className="text-gray-700">
          <strong>Pricing:</strong> Free & Paid plans available
        </p>

        <p className="text-gray-700">
          <strong>Category:</strong> AI Writing Tools
        </p>
      </div>

      <a
        href="https://chat.openai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 rounded-md bg-blue-600 px-6 py-3 text-white font-medium"
      >
        Visit Official Website
      </a>
    </main>
  );
}
