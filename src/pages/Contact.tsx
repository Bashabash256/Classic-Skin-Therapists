import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, ChevronDown, Mail } from 'lucide-react';
import { faqs, services } from '../data';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', treatment: '', date: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full">
      <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4 font-bold">Book Your Consultation</h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards healthier, glowing skin. Request an appointment below or contact us directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-serif text-slate-900 mb-6 font-bold">Request an Appointment</h2>
              
              {isSuccess && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Send size={16} className="text-green-600" />
                  </div>
                  <p className="font-medium text-sm">Thank you! Your request has been sent successfully. Our team will contact you shortly to confirm your appointment.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="075 453 1115"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="treatment" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Preferred Treatment</label>
                    <select 
                      id="treatment" 
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a treatment...</option>
                      <option value="consultation">General Consultation</option>
                      <optgroup label="Facial Treatments">
                        {services.facial.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Body & Wellness">
                        {services.body.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="date" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Additional Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your skin concerns..."
                  ></textarea>
                </div>

                <Button type="submit" disabled={isSubmitting} className="mt-2 text-sm py-2">
                  {isSubmitting ? 'Sending Request...' : 'Request Consultation'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-2/5 flex flex-col gap-6"
          >
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-xl font-serif mb-6 font-bold relative z-10">Contact Information</h2>
              <ul className="flex flex-col gap-5 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Our Location</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">Classic Skin Therapists<br/>Ntinda-Kiwatule Road,<br/>opposite Sals Hotel,<br/>Kampala, Uganda</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Phone Numbers</h3>
                    <div className="flex flex-col gap-1 text-xs">
                      <a href="tel:+256754531115" className="text-slate-400 hover:text-pink-400 transition-colors">075 453 1115</a>
                      <a href="tel:+256781827070" className="text-slate-400 hover:text-pink-400 transition-colors">078 182 7070</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Email Address</h3>
                    <a href="mailto:kpmwesige@gmail.com" className="text-slate-400 hover:text-pink-400 transition-colors text-xs">kpmwesige@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <Clock size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Working Hours</h3>
                    <p className="text-slate-400 text-xs">Monday - Sunday<br/>9:00 AM - 10:00 PM</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-800 flex gap-3 relative z-10">
                <Button href="https://wa.me/256754531115" variant="outline" className="border-slate-700 text-white hover:border-pink-500 hover:text-pink-500 flex-1 text-xs py-2">WhatsApp Us</Button>
                <Button href="tel:+256754531115" variant="white" className="flex-1 text-xs py-2 font-bold text-slate-900">Call Now</Button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-48 bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <iframe 
                src="https://maps.google.com/maps?q=Classic%20Medical%20Spa,%20Kampala,%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Classic Medical Spa Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-3 font-bold">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm">Common questions about our treatments and booking process.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-800 text-sm">{faq.question}</span>
                  <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100 bg-slate-50">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
