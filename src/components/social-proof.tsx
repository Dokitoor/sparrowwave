import { useState, useRef, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Sparrowwave absolutely transformed our legacy infrastructure. The transition to their custom VoIP solution reduced our overheads by 40%.",
      author: "Director of IT",
      company: "Leading Healthcare Provider",
      rating: 5
    },
    {
      quote: "Their commitment to 'Security by Design' is not a gimmick. After their comprehensive IT audit, our threat vulnerability dropped to zero.",
      author: "Chief Operations Officer",
      company: "Financial Services Firm",
      rating: 5
    }
  ];

  const clients = [
    { acronym: "UNILAG", name: "University of Lagos", sector: "Education" },
    { acronym: "LSG", name: "Lagos State Government", sector: "Government" },
    { acronym: "ZNB", name: "Zenith Bank Plc", sector: "Financial Services" },
    { acronym: "NB", name: "Nigerian Breweries", sector: "Manufacturing" },
    { acronym: "SNH", name: "St. Nicholas Hospital", sector: "Healthcare" },
    { acronym: "RCCG", name: "Redeemed Church of God", sector: "Religious Org." },
    { acronym: "CU", name: "Covenant University", sector: "Education" },
    { acronym: "MTN", name: "MTN Nigeria", sector: "Telecommunications" },
    { acronym: "ACB", name: "Access Bank", sector: "Financial Services" },
    { acronym: "NNPC", name: "NNPC Limited", sector: "Energy & Oil" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scroll to a specific index with smooth behavior
  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;
    const children = carouselRef.current.children;
    if (children.length === 0) return;
    const cardWidth = children[0].clientWidth;
    const gap = 24;
    const scrollPosition = index * (cardWidth + gap);
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // Wrap around index
  const getNextIndex = (current: number) => (current + 1) % clients.length;
  const getPrevIndex = (current: number) => (current - 1 + clients.length) % clients.length;

  const handleNext = () => {
    const nextIndex = getNextIndex(currentIndex);
    scrollTo(nextIndex);
    resetAutoSlide();
  };

  const handlePrev = () => {
    const prevIndex = getPrevIndex(currentIndex);
    scrollTo(prevIndex);
    resetAutoSlide();
  };

  const handleDotClick = (index: number) => {
    scrollTo(index);
    resetAutoSlide();
  };

  // Auto-slide logic
  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      if (!isHovering) {
        const nextIndex = getNextIndex(currentIndex);
        scrollTo(nextIndex);
      }
    }, 2000); // 2 seconds per slide
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Update current index on scroll (for dot highlighting)
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const children = carouselRef.current.children;
    if (children.length === 0) return;
    const cardWidth = children[0].clientWidth;
    const gap = 24;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < clients.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="bg-white">
      {/* Full-width image strip - refined overlay and text */}
      <div className="relative h-80 overflow-hidden">
        <img
          src="/images/team.png"
          alt="Sparrowwave team working"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-teal/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-white/90 text-xs font-medium tracking-wide">Trusted globally</span>
          </div>
          <p className="font-secondary text-sm md:text-base font-semibold text-white/90 tracking-wider uppercase max-w-2xl leading-relaxed">
            Trusted by leading organisations across education, healthcare, government,<br className="hidden md:block" /> and enterprise in Nigeria and beyond
          </p>
        </div>
      </div>

      {/* Client & Testimonials section */}
      <div className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-brand-teal/50" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Our Partners</p>
              <div className="h-px w-6 bg-brand-teal/50" />
            </div>
            <h3 className="font-primary text-2xl md:text-3xl font-bold text-gray-900">Who trusts Sparrowwave</h3>
          </div>

          {/* Client slider - auto-sliding carousel */}
          <div 
            className="relative mb-20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
              aria-label="Previous client"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
              aria-label="Next client"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {clients.map((client) => (
                <div
                  key={client.acronym}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-16px)] snap-start"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                        <span className="font-primary text-xl font-bold text-brand-blue group-hover:text-white transition-colors">
                          {client.acronym.slice(0, 2)}
                        </span>
                      </div>
                      <h4 className="font-primary text-xl font-bold text-gray-900 mb-1">{client.acronym}</h4>
                      <p className="font-secondary text-sm text-gray-600 font-medium">{client.name}</p>
                      <div className="mt-3 inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold tracking-wide">
                        {client.sector}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {clients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-brand-blue'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials section */}
          <div className="pt-8 border-t border-gray-200/50">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-brand-teal/50" />
                <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Success Stories</p>
                <div className="h-px w-6 bg-brand-teal/50" />
              </div>
              <h3 className="font-primary text-2xl md:text-3xl font-bold text-gray-900">What our clients say</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Decorative quote background */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors" />
                  
                  {/* Star rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-teal text-brand-teal" />
                    ))}
                  </div>
                  
                  <p className="font-secondary text-gray-600 leading-relaxed mb-6 italic relative z-10">
                    "{test.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center shadow-md">
                      <span className="font-primary font-bold text-white text-sm">
                        {test.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-primary font-bold text-gray-900">{test.author}</p>
                      <p className="font-secondary text-xs text-brand-teal font-semibold tracking-wide uppercase">
                        {test.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}