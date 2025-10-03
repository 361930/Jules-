import { portfolio } from '@/data/portfolio';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolio.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [{ url: project.imageUrl }],
    },
  }
}

// Statically generate routes at build time
export async function generateStaticParams() {
  return portfolio.map((project) => ({
    slug: project.slug,
  }))
}

const PortfolioDetailPage = ({ params }: Props) => {
  const project = portfolio.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center mb-4">
          {project.title}
        </h1>
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {project.tags.map(tag => (
            <span key={tag} className="bg-dark-purple/50 text-light-purple text-sm font-semibold px-4 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative w-full h-96 mb-12 overflow-hidden rounded-lg shadow-2xl shadow-brand-purple/20">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mx-auto text-gray-300">
          <p>{project.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;