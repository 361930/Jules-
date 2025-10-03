import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

// Statically generate routes at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const ServiceDetailPage = ({ params }: Props) => {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center mb-4">
          {service.title}
        </h1>
        <p className="text-lg md:text-xl text-light-purple/80 text-center mb-12">
          {service.description}
        </p>
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-gray-300">
          <p>{service.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;