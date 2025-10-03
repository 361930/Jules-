import React from 'react';

// This defines the expected structure for the page's props,
// including the dynamic 'slug' from the URL. This is crucial
// for TypeScript to understand the data your component receives.
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// This is the main component for the portfolio detail page.
// It takes 'params' as a prop, which contains the dynamic route segments.
export default function PortfolioDetailpage({ params }: Props) {
  // This is a safety check. If for some reason the page is rendered
  // without a slug in the URL (e.g., during a server-side issue),
  // it will show a loading message instead of crashing.
  if (!params || !params.slug) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1>Loading Project...</h1>
      </main>
    );
  }

  // We extract the 'slug' from the 'params' object for easier use.
  const { slug } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Project Details</h1>
        <p className="text-lg mb-2">Displaying content for project:</p>
        <div className="bg-white p-4 rounded-lg shadow-md inline-block">
          {/* This is where the actual slug from the URL is displayed on the page */}
          <span className="text-2xl font-mono bg-gray-100 text-blue-600 px-3 py-1 rounded">
            {slug}
          </span>
        </div>
        <div className="mt-8">
          {/* This link takes the user back to the main portfolio overview page. */}
          <a href="/portfolio" className="text-blue-500 hover:underline">
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
