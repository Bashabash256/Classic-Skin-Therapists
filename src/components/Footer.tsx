import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Twitter, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-100 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://www.image2url.com/r2/default/images/1787258290997-e9aed6db-4b39-4ab5-a8f6-5622113cec6c.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-pink-100 shadow-sm" />
              <span className="text-lg font-serif font-bold tracking-tight text-pink-600">
                Classic Skin Therapists
              </span>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm pr-4">
              Professional skincare and beauty solutions designed around your individual needs. Experience personalized treatments in Kampala, Uganda.
            </p>
            <div className="flex gap-3">
              <a href="https://www.tiktok.com/@classic_medical_spa?_r=1&_t=ZS-9933NbEJmtR" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-200 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.instagram.com/classic_skin_lords" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-200 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="https://facebook.com/skinlords" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-200 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com/classic_facials" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-200 flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-800 font-bold text-xs uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-pink-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-600 transition-colors">About Clinic</Link></li>
              <li><Link to="/services" className="hover:text-pink-600 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-pink-600 transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-800 font-bold text-xs uppercase tracking-widest mb-4">Popular Treatments</h3>
            <ul className="flex flex-col gap-3 text-xs text-slate-500">
              <li><Link to="/services" className="hover:text-pink-600 transition-colors">Hydra Facials</Link></li>
              <li><Link to="/services" className="hover:text-pink-600 transition-colors">Acne Control</Link></li>
              <li><Link to="/services" className="hover:text-pink-600 transition-colors">Massage Therapy</Link></li>
              <li><Link to="/services" className="hover:text-pink-600 transition-colors">Body Wellness</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-800 font-bold text-xs uppercase tracking-widest mb-4">Visit Us</h3>
            <ul className="flex flex-col gap-3 text-xs text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-pink-600 shrink-0 mt-0.5" />
                <span>Ntinda-Kiwatule Road,<br />opposite Sals Hotel,<br />Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-pink-600 shrink-0" />
                <div className="flex gap-2">
                  <a href="tel:+256754531115" className="hover:text-pink-600 transition-colors">075 453 1115</a>
                  <span>/</span>
                  <a href="tel:+256781827070" className="hover:text-pink-600 transition-colors">078 182 7070</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-pink-600 shrink-0" />
                <a href="mailto:kpmwesige@gmail.com" className="hover:text-pink-600 transition-colors">kpmwesige@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-pink-600 shrink-0 mt-0.5" />
                <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-6 border-t border-slate-200 flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium uppercase tracking-wider w-full">
            <p>&copy; {new Date().getFullYear()} Classic Skin Therapists. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Made With ❤ By <a href="https://hwbdevelopers.netlify.app" target="_blank" rel="noreferrer" className="hover:text-slate-600 transition-colors">HWB DEVELOPERS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
