import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Medical Virtual Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
