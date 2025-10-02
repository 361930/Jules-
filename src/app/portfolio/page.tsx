import type { Metadata } from 'next';
import PortfolioClientPage from './PortfolioClientPage';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Browse a selection of our finest work, showcasing our expertise in web development, design, and animation.',
};

const PortfolioPage = () => {
  return <PortfolioClientPage />;
};

export default PortfolioPage;