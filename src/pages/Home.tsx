import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import heroImg from '../assets/images/hero_spa_treatment_1787259182178.jpg';
import aboutImg from '../assets/images/about_specialist_1787259194067.jpg';
import facialImg from '../assets/images/facial_treatment_1787259206146.jpg';
import beforeAfterImg from '../assets/images/before_after_skincare_1787263154498.jpg';

export default function Home() {
  const skinConcerns = [
    { title: "Acne & Breakouts", desc: "Clear your skin and prevent future breakouts." },
    { title: "Dark Spots & Uneven Tone", desc: "Restore an even, glowing complexion." },
    { title: "Skin Rejuvenation", desc: "Bring life back to dull, tired skin." },
    { title: "Anti-Aging Care", desc: "Smooth fine lines and restore youthful firmness." },
    { title: "Body Wellness", desc: "Relax and rejuvenate your entire body." },
    { title: "Beauty Enhancement", desc: "Enhance your natural beauty features." },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative mt-8 mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Professional skincare therapy at Classic Skin Therapists" 
              className="w-full h-full object-cover opacity-60"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/70 to-transparent"></div>
          </div>
          
          <div className="w-full lg:w-3/5 flex flex-col gap-6 z-10 px-8 py-12 lg:px-16 lg:py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="bg-white/20 text-white w-max px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/10">Uganda's Premier Skin Clinic</span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-white leading-tight font-bold">
                Professional Skin & Body Treatments Designed For Your <span className="italic">Beauty Journey</span>
              </h1>
              <p className="text-base text-pink-50 leading-relaxed max-w-xl">
                Experience personalized skincare, beauty, and wellness treatments from professional therapists in Kampala.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 mt-2"
            >
              <Button href="/contact" variant="white" className="text-pink-600 font-bold shadow-lg">Book Free Consultation</Button>
              <Button href="https://wa.me/256754531115" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:border-white hover:text-white backdrop-blur-md font-bold">Chat On WhatsApp</Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {[
                "Professional Therapists",
                "Free Skin Checkup",
                "Personalized Plans"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-md text-white text-xs font-semibold">
                  <span className="w-4 h-4 rounded-full bg-white text-pink-600 flex items-center justify-center">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="w-full lg:w-5/12"
          >
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src={aboutImg} 
                alt="Professional African Skincare Specialist" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="w-full lg:w-7/12 flex flex-col gap-6"
          >
            <span className="text-pink-600 font-bold tracking-widest uppercase text-[11px] bg-pink-50 self-start px-3 py-1 rounded-full border border-pink-100">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 leading-tight font-bold">
              Where Beauty Meets Professional Skin Care
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Classic Skin Therapists is a professional skin and body therapy clinic dedicated to helping clients improve their skin health, confidence, and overall wellness through personalized treatments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Professional Therapists", desc: "Expert care from trained specialists." },
                { title: "Personalized Approach", desc: "Treatments tailored to your unique skin." },
                { title: "Modern Beauty Treatments", desc: "Advanced techniques and equipment." },
                { title: "Client-Focused Experience", desc: "Your comfort and results are our priority." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl bg-rose-50/50 border border-pink-100 hover:border-pink-200 transition-colors">
                  <h3 className="font-bold text-pink-700 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button href="/about" variant="outline">Learn More About Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skin Concern Section (Interactive) */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 mb-3">Find The Right Treatment For Your Skin Goal</h2>
            <p className="text-slate-500 text-sm">Select your primary concern below and let our experts guide you to the perfect solution.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            {skinConcerns.map((concern, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-4 hover:bg-rose-50/50 transition-colors border border-slate-100 shadow-sm hover:border-pink-200 cursor-pointer flex flex-col items-center justify-center text-center gap-3 h-full"
              >
                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                   <Star size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">{concern.title}</h3>
                </div>
                <Link to="/contact" className="mt-auto hidden group-hover:inline-flex items-center text-[10px] font-bold text-pink-600 uppercase tracking-wider">
                  Book <ArrowRight size={12} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-pink-600 font-bold tracking-widest uppercase text-[11px] mb-2 block">Our Services</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">Featured Treatments</h2>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center text-slate-800 font-bold text-xs uppercase tracking-wider hover:text-pink-600 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={facialImg} alt="Facial Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Medical Facials</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">Professional facial treatments designed to improve skin health, including Hydra Facials, Deep Cleansing, and Acne Control.</p>
                <Button href="/services" variant="outline" fullWidth>Explore Facials</Button>
              </div>
            </div>

            <div className="flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-xl group relative">
              <div className="p-8 flex flex-col h-full justify-center text-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-slate-900"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-2xl font-serif text-white mb-3 font-bold">Not sure where to start?</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-8 max-w-[200px]">Book a professional skin checkup and consultation with our therapists.</p>
                  <Button href="/contact" variant="primary">Book Free Consultation</Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center relative">
                {/* Fallback image if body_wellness isn't loaded properly, or using real path */}
                <img src="/src/assets/images/body_wellness_1787259216573.jpg" alt="Body Wellness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Body & Wellness</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">Relax and rejuvenate with Massage Therapy, Wood Sculpting, Body Scrubs, and specialized beauty enhancements.</p>
                <Button href="/services" variant="outline" fullWidth>Explore Wellness</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center sm:hidden">
             <Button href="/services" variant="ghost">View All Services <ArrowRight size={16} className="ml-2" /></Button>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="bg-rose-50/50 py-16 px-4 sm:px-6 lg:px-8 border-y border-pink-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-12 font-bold">Why Choose Classic Skin Therapists</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
            {[
              "Professional Skin and Body Therapists",
              "Personalized Consultations",
              "Wide Range of Beauty Treatments",
              "Comfortable Spa Environment",
              "Client-Focused Care",
              "Convenient Kampala Location"
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl border border-pink-50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mb-1">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xs font-bold text-slate-800 leading-tight uppercase tracking-wider">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-pink-500/5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <span className="text-pink-400 font-bold tracking-widest uppercase text-[11px] bg-pink-500/10 self-center lg:self-start px-3 py-1 rounded-full border border-pink-500/20">Real Results</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold">
              Experience Your Own <span className="text-pink-400 italic">Transformation</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
              We specialize in treating severe acne, hyperpigmentation, and uneven skin tones. See the dramatic transformations our clients experience after personalized, professional treatment plans.
            </p>
            <div className="pt-2">
               <Button href="/contact" variant="primary">Start Your Journey Today</Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
               <img src={beforeAfterImg} alt="Before and After Skincare Treatment" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg border border-slate-700">Before</div>
            <div className="absolute top-4 right-4 bg-pink-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg border border-pink-500">After</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-3 font-bold">Client Success Stories</h2>
            <p className="text-slate-500 text-sm">See what our clients say about their glowing results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
              <div className="flex gap-1 text-pink-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="text-sm font-serif text-slate-700 leading-relaxed mb-6 flex-1 italic">
                "The team understood my skin concerns and guided me through the right treatment. My experience was amazing. My skin has never looked this clear and glowing."
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                   <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Sarah N." className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Sarah N.</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Hydra Facial</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
              <div className="flex gap-1 text-pink-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="text-sm font-serif text-slate-700 leading-relaxed mb-6 flex-1 italic">
                "After years of struggling with severe acne, I finally found a clinic that actually cares. The medical facial was gentle yet incredibly effective. Highly recommend!"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                   <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Grace K." className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Grace K.</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Acne Control</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
              <div className="flex gap-1 text-pink-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="text-sm font-serif text-slate-700 leading-relaxed mb-6 flex-1 italic">
                "Their body wellness and massage therapy sessions are unmatched in Kampala. The ambiance is so relaxing, and the staff is exceptionally professional."
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                   <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="David M." className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">David M.</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Massage Therapy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
