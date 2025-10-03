import React from 'react';

// Define the type for the props that Next.js passes to a dynamic page.
// The `params` object will contain the dynamic route parameters. In this case, 'slug'.
// It's also good practice to include `searchParams` even if you don't use them.
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// This is your page component.
// We destructure `params` from the props object to easily access the slug.
export default function PortfolioDetailpage({ params }: Props) {
  // Add a check to ensure params and slug are available before destructuring.
  // This prevents runtime errors in environments where props might not be passed correctly.
  if (!params || !params.slug) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
          <p className="text-lg">Waiting for project information.</p>
        </div>
      </main>
    );
  }

  const { slug } = params;

  // You can now use the 'slug' variable to fetch data or display content.
  // For example, you could fetch portfolio project details based on this slug.

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Project Details</h1>
        <p className="text-lg mb-2">You are currently viewing the project with slug:</p>
        <div className="bg-white p-4 rounded-lg shadow-md inline-block">
          <span className="text-2xl font-mono bg-gray-100 text-blue-600 px-3 py-1 rounded">
            {slug}
          </span>
        </div>
        <div className="mt-8">
          <a href="/portfolio" className="text-blue-500 hover:underline">
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}

