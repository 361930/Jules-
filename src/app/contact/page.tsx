import type { Metadata } from 'next';
import ContactClientPage from './ContactClientPage';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us to discuss your project or ask any questions. We are here to help you build the website of your dreams.',
};

const ContactPage = () => {
  return <ContactClientPage />;
};

export default ContactPage;