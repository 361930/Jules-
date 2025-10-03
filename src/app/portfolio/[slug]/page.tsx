import React from 'react';

// This is the correct type definition for a dynamic page in the Next.js App Router.
// It tells TypeScript exactly what kind of 'props' to expect.
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// By applying the 'Props' type here, we satisfy TypeScript's requirements.
export default function PortfolioDetailpage({ params }: Props) {
  // A check to handle cases where the page might render without params.
  if (!params || !params.slug) {
    // You can return a loading state or a not-found message.
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1>Loading Project...</h1>
      </main>
    );
  }

  const { slug } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Project Details</h1>
        <p className="text-lg mb-2">Displaying content for slug:</p>
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

