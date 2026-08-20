import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 selection:bg-pink-100 selection:text-pink-900 font-sans">
      <Navbar />
      <main className="flex-1 mt-16">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}
