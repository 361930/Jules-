import type { Metadata } from 'next';
import ServicesClientPage from './ServicesClientPage';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the wide range of services we offer, from web development and UI/UX design to SEO and 3D animations.',
};

const ServicesPage = () => {
  return <ServicesClientPage />;
};

export default ServicesPage;