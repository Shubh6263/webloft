import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SubCategoryTemplate() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="#" className="text-blue-600">Category</Link>
        <span className="mx-2">/</span>
        <span>Sub Category</span>
      </nav>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900">
        Best [Sub Category] Websites
      </h1>

      {/* Intro */}
      <p className="mt-4 text-gray-600 max-w-3xl">
        Discover the best [sub category] websites, carefully curated to help
        you find reliable and useful platforms in one place.
      </p>

      {/* Website List */}
      <div className="mt-10 space-y-6">
        <div className="border rounded-lg p-5">
          <h2 className="text-lg font-semibold">Website Name</h2>
          <p className="mt-2 text-sm text-gray-600">
            Short description of what this website does and who it is best for.
          </p>
          <Link
            href="#"
            className="inline-block mt-3 text-sm font-medium text-blue-600"
          >
            View Details →
          </Link>
        </div>
      </div>
    </main>
  );
}
