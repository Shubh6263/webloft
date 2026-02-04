import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools Websites Directory – Webloft",
  description:
    "Webloft presents a curated directory of the best AI tools websites including writing, image, video, and productivity tools.",
};

export default function AIToolsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900">
        Best AI Tools Websites
      </h1>

      <p className="mt-4 text-gray-600 max-w-3xl">
        Discover the best AI tools websites, carefully curated and organized
        to help you find the right tools for writing, design, productivity,
        and more.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-5">
          <h2 className="font-semibold text-lg">AI Writing Tools</h2>
          <p className="mt-2 text-sm text-gray-600">
            Tools for content writing, blogging, and copywriting.
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h2 className="font-semibold text-lg">AI Image Tools</h2>
          <p className="mt-2 text-sm text-gray-600">
            Websites that generate images, designs, and graphics using AI.
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h2 className="font-semibold text-lg">AI Productivity Tools</h2>
          <p className="mt-2 text-sm text-gray-600">
            AI tools that save time and improve daily productivity.
          </p>
        </div>
      </div>
    </main>
  );
}
