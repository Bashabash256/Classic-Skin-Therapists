import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-pink-100 py-2' : 'bg-white border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img src="https://www.image2url.com/r2/default/images/1787258290997-e9aed6db-4b39-4ab5-a8f6-5622113cec6c.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border border-pink-100 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-tight text-pink-600 leading-none mb-0.5">
                Classic Skin Therapists
              </span>
              <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest block line-clamp-1">
                Where Beauty Meets Professional Skin Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-pink-600 ${
                      location.pathname === link.path ? 'text-pink-600 border-b-2 border-pink-600 pb-1' : 'text-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contact" size="sm">Book Consultation</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-stone-600 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-24 px-6 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`block font-medium ${
                  location.pathname === link.path ? 'text-pink-600' : 'text-stone-900'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-8 border-t border-stone-100 flex flex-col gap-4">
          <Button href="/contact" fullWidth>Book Consultation</Button>
          <Button href="https://wa.me/256754531115" variant="outline" fullWidth>WhatsApp Us</Button>
        </div>
      </div>
    </header>
  );
}
