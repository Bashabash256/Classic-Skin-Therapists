import { motion } from 'motion/react';
import aboutImg from '../assets/images/about_specialist_1787259194067.jpg';

export default function About() {
  return (
    <div className="w-full">
      <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4 font-bold">About Classic Skin Therapists</h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Your trusted destination for premium skincare and wellness in Kampala.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <img 
                src={aboutImg} 
                alt="Our professional team" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 flex flex-col gap-6 text-slate-600 text-sm leading-relaxed"
          >
            <h2 className="text-2xl font-serif text-slate-900 font-bold">Our Story</h2>
            <p>
              Classic Skin Therapists, also known as Classic Medical Spa, was established with a singular vision: to provide world-class, professional skincare and wellness solutions to the people of Kampala, Uganda.
            </p>
            <p>
              We understand that every individual's skin is unique, which is why we approach every treatment with personalized care, utilizing modern techniques and a deep understanding of dermatological health.
            </p>
            <h2 className="text-xl font-serif text-slate-900 mt-2 font-bold">Our Philosophy</h2>
            <p>
              We believe that beauty is an extension of wellness. Our goal is to not only treat surface-level concerns but to educate and empower our clients to achieve long-lasting skin health and confidence. From advanced medical facials to soothing body therapies, we curate an environment of luxury, safety, and professional expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
