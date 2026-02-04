import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Writing Tools Websites (Free & Paid) – Webloft",
  description:
    "Discover the best AI writing tools websites for blogging, copywriting, and content creation. Hand-picked and curated by Webloft.",
};

export default function AIWritingToolsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900">
        Best AI Writing Tools Websites
      </h1>

      <p className="mt-4 text-gray-600 max-w-3xl">
        Explore the best AI writing tools websites for content creation,
        blogging, copywriting, and marketing. All tools listed here are
        carefully curated.
      </p>

      <div className="mt-10 space-y-6">
        <div className="border rounded-lg p-5">
  <h2 className="text-lg font-semibold">
    <a href="/ai-tools/writing-tools/chatgpt" className="text-blue-600">
      ChatGPT
    </a>
  </h2>
  <p className="mt-2 text-sm text-gray-600">
    AI-powered writing assistant for content creation, brainstorming,
    and productivity.
  </p>
  <a
    href="/ai-tools/writing-tools/chatgpt"
    className="inline-block mt-3 text-sm font-medium text-blue-600"
  >
    View Details →
  </a>
</div>


        <div className="border rounded-lg p-5">
          <h2 className="text-lg font-semibold">Jasper AI</h2>
          <p className="mt-2 text-sm text-gray-600">
            AI copywriting tool for marketing content, ads, and blogs.
          </p>
          <a
            href="#"
            className="inline-block mt-3 text-sm font-medium text-blue-600"
          >
            Visit Website →
          </a>
        </div>

        <div className="border rounded-lg p-5">
          <h2 className="text-lg font-semibold">Copy.ai</h2>
          <p className="mt-2 text-sm text-gray-600">
            AI writing platform for generating high-quality copy quickly.
          </p>
          <a
            href="#"
            className="inline-block mt-3 text-sm font-medium text-blue-600"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </main>
  );
}
