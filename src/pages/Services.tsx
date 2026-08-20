import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data';
import Button from '../components/Button';
import facialImg from '../assets/images/facial_treatment_1787259206146.jpg';

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4 font-bold">Our Services & Treatments</h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Discover our comprehensive range of professional skincare and wellness solutions. We provide personalized treatments designed to address your specific goals and enhance your natural beauty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Facial Treatments Category */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
            <div className="w-full md:w-1/3">
              <span className="text-[10px] text-pink-600 font-bold uppercase tracking-widest mb-1 block">Category</span>
              <h2 className="text-2xl font-serif text-slate-900 mb-3 font-bold">Facial Treatments</h2>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">Restore, rejuvenate, and refresh your skin with our specialized facial therapies.</p>
              <Button href="/contact">Book A Facial</Button>
            </div>
            <div className="w-full md:w-2/3">
               <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                 <img src={facialImg} alt="Facial treatments" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.facial.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col"
              >
                <h3 className="text-base font-bold text-slate-800 mb-2">{service.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">{service.description}</p>
                <Button href="/contact" variant="ghost" className="self-start -ml-4 px-4 text-xs">
                  Book Consultation <ArrowRight size={14} className="ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Body & Wellness Category */}
        <div>
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-8 items-center">
            <div className="w-full md:w-1/3">
              <span className="text-[10px] text-pink-600 font-bold uppercase tracking-widest mb-1 block">Category</span>
              <h2 className="text-2xl font-serif text-slate-900 mb-3 font-bold">Body & Beauty Treatments</h2>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">Enhance your natural curves, relax your muscles, and achieve full-body wellness.</p>
              <Button href="/contact">Book Body Treatment</Button>
            </div>
            <div className="w-full md:w-2/3">
               <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-rose-50 shadow-sm border border-slate-100">
                 <img src="/src/assets/images/body_wellness_1787259216573.jpg" alt="Body Wellness" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.body.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-100 p-4 rounded-2xl text-center hover:bg-pink-50 hover:border-pink-200 transition-colors cursor-pointer shadow-sm flex flex-col items-center justify-center gap-2 group"
              >
                <h3 className="text-slate-800 text-sm font-bold group-hover:text-pink-600 transition-colors">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
