import React from 'react';
import Link from 'next/link';

// Correctly defines the props structure for this dynamic page
type Props = {
 params: { slug: string };
};

export default function PortfolioDetailpage({ params }: Props) {
 // Safety check to prevent crashing if params are somehow missing
 if (!params || !params.slug) {
   return (
     <main className="flex min-h-screen flex-col items-center justify-center p-8">
       <h1 className="text-2xl font-bold">Loading Project...</h1>
     </main>
   );
 }

 const { slug } = params;

 return (
   <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
     <div className="text-center bg-white p-10 rounded-lg shadow-xl max-w-2xl">
       <h1 className="text-4xl font-bold mb-4">Project Details</h1>
       <p className="text-lg mb-6">
         You are viewing the project with the slug:
       </p>
       <div className="bg-gray-200 p-4 rounded-lg inline-block">
         <span className="text-3xl font-mono text-blue-700">
           {slug}
         </span>
       </div>
       <div className="mt-10">
         {/* FIX: Replaced <a> with <Link> for the back navigation */}
         <Link href="/portfolio" className="text-blue-600 font-semibold hover:underline text-lg">
           ← Back to All Projects
         </Link>
       </div>
     </div>
   </main>
 );
}
