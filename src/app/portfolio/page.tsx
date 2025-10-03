import React from 'react';
import Link from 'next/link';

// You can replace this with your actual project data
const portfolioItems = [
 { id: 1, title: 'E-commerce Platform', slug: 'ecommerce-platform', description: 'A full-stack online store.' },
 { id: 2, title: 'Mobile Banking App', slug: 'mobile-banking-app', description: 'Secure and intuitive mobile banking.' },
 { id: 3, title: 'Data Analytics Dashboard', slug: 'data-analytics-dashboard', description: 'Visualizing complex business data.' },
];

export default function PortfolioPage() {
 return (
   <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 lg:p-24 bg-gray-100">
     <div className="w-full max-w-5xl text-center">
       <h1 className="text-5xl font-extrabold mb-4 text-gray-800">My Work</h1>
       <p className="text-xl text-gray-600 mb-12">
         A selection of projects that I'm proud of.
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {portfolioItems.map((item) => (
           // FIX: Replaced <a> with <Link> for proper navigation
           <Link
             href={`/portfolio/${item.slug}`}
             key={item.id}
             className="block bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left"
           >
             <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
             <p className="text-gray-600 mt-2">{item.description}</p>
             <span className="text-blue-600 font-semibold mt-4 inline-block">View Project →</span>
           </Link>
         ))}
       </div>
     </div>
   </main>
 );
  }
