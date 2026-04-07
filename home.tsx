import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Heart, BookOpen, Star, HelpCircle, Gift, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import authorImg from "@/assets/author.png";
import coverImg from "@/assets/cover.jpg";
import wavePink from "@/assets/shape-wave-pink.png";
import waveOrange from "@/assets/shape-wave-orange.png";
import waveBlue from "@/assets/shape-wave-blue.png";
import shapeFlower from "@/assets/shape-flower.png";
import checkers from "@/assets/shape-checkers.png";


const ebookPages = Array.from({ length: 10 }, (_, i) => `/ebook-pages/page-${String(i + 1).padStart(2, '0')}.png`);
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const testimonials = [
  {
    name: "Basia Puchalska",
    photo: "/about-photos/placeholder-person.jpg",
    text: "Niedługo zostanę mamą po raz pierwszy i to jako pierwsza w gronie najbliższych znajomych. Szukałam jednego, konkretnego źródła, które wyjaśni: kiedy warto zapisać się do fizjoterapeutki, co warto kupić wcześniej, jakie formalności mnie czekają i jak może wyglądać karmienie piersią w praktyce. Ten ebook uporządkował moją brakującą wiedzę i dzięki niemu czuję się lepiej przygotowana.",
  },
  {
    name: "Marta Matusewicz",
    photo: "/about-photos/placeholder-person.jpg",
    text: "Niezależnie czy zastanawiasz się nad podjęciem decyzji o macierzyństwie, czy jesteś w czasie przygotowania, lub ciąży - dla mnie ten e-book to jak rozmowa z przyjaciółką, która bez ogródek tłumaczy jak jest, na co zwrócić uwagę, a kiedy poprostu się wyluzować, dzięki za solidną dawkę wiedzy! Ps. lista zakupów z linkami to sztosik!",
  },
  {
    name: "Asia Kuźniacka",
    photo: "/about-photos/placeholder-person.jpg",
    text: "Po przeczytaniu tego poradnika mogę powiedzieć jedno - RODZIŁABYM.",
  },
  {
    name: "Ewelina Ludwig",
    photo: "/about-photos/placeholder-person.jpg",
    text: "Bardzo się cieszę, że będę w ciąży po Tobie – bo ten ebook serio jest pomocny, nie przeczytałam jeszcze całego, ale porady przed ciążą i część okołoporodową sobie przeczytałam i mega. Udało Ci się połączyć ogrom konkretnej, merytorycznej wiedzy z naprawdę cool, lekką formą. Tak mi się spodobało, że kupiłam już ten ebook w prezencie dla mojej psiapsi.",
  },
  {
    name: "Joanna Sarnowska",
    photo: "/about-photos/placeholder-person.jpg",
    text: "Lista wyprawkowa w excelu z możliwością edycji i odhaczania to mistrzostwo! Mega ułatwienie i świetny punkt wyjścia przy ogromie możliwości. Dodatkowo ten eBook to chyba pierwsza pozycja, w której w taki sposób opisane jest czego można spodziewać się w szpitalu, na wizytach położnej środowiskowej itd. Po swoim pierwszym porodzie miałam dużo myśli \u201edlaczego kobiety sobie tego nie mówią, czemu nie dzielą się tą wiedzą, czemu odkrywam coś na nowo jakbym była pierwsza\u201d. Takie zauważanie i nazywanie problemów, z którymi mierzymy się w okresie okołoporodowym jest wg mnie zdecydowanie tym czego nam, kobietom teraz trzeba! Dokładnie tak, jakby dowiedzieć się od zaufanej koleżanki.",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  const goNext = useCallback(() => {
    setDir(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDir(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div className="relative">
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {getVisible().map((t, i) => (
          <motion.div
            key={`${current}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-brand-beige/30 p-8 rounded-[2rem] border border-brand-purple/8 shadow-sm flex flex-col"
          >
            <Quote className="w-8 h-8 text-brand-pink/30 mb-4 shrink-0" />
            <p className="text-brand-cobalt/80 leading-relaxed flex-1 text-[15px]">
              „{t.text}"
            </p>
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-cobalt/5">
              <div className="w-11 h-11 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm shrink-0">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="font-bold text-brand-cobalt text-sm">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-beige/30 p-8 rounded-[2rem] border border-brand-purple/8 shadow-sm"
          >
            <Quote className="w-8 h-8 text-brand-pink/30 mb-4" />
            <p className="text-brand-cobalt/80 leading-relaxed text-[15px]">
              „{testimonials[current].text}"
            </p>
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-cobalt/5">
              <div className="w-11 h-11 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm shrink-0">
                {testimonials[current].name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="font-bold text-brand-cobalt text-sm">{testimonials[current].name}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-brand-beige hover:bg-brand-pink/20 flex items-center justify-center text-brand-cobalt transition-colors"
          data-testid="button-testimonial-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-pink w-6' : 'bg-brand-cobalt/15 hover:bg-brand-cobalt/30'}`}
              data-testid={`button-testimonial-dot-${i}`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-brand-beige hover:bg-brand-pink/20 flex items-center justify-center text-brand-cobalt transition-colors"
          data-testid="button-testimonial-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/8x2dR9espcQD0eugk814400";
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const goToPage = (newPage: number) => {
    if (newPage < 0 || newPage >= ebookPages.length) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goToPage(currentPage + 1);
      } else {
        goToPage(currentPage - 1);
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-beige overflow-x-hidden font-sans text-brand-cobalt">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Background Elements */}
        <img src={shapeFlower} alt="" className="absolute top-10 right-[-10%] md:right-10 w-32 md:w-48 opacity-20 animate-float" />
        
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/20 text-brand-cobalt font-medium text-sm mb-2">
              Od koleżanki dla koleżanek
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-serif font-bold leading-tight text-brand-cobalt">
              Ciąża, poród, połóg<br/> 
              <span className="text-brand-pink relative inline-block text-2xl md:text-3xl mt-4 font-normal">
                Wszystko, co chciałabym wiedzieć wcześniej.
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-brand-cobalt/80 max-w-lg mx-auto md:mx-0">Przewodnik, który sama chciałabym dostać w ciąży.
            Konkretne decyzje, kontekst i sprawdzone polecenia - spisane z mojego doświadczenia i rozmów z mądrymi specjalistkami.</motion.p>
            <motion.div variants={fadeIn} className="pt-4">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Kup ebooka
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
               <div className="bg-white p-4 rounded-2xl shadow-2xl rotate-2 max-w-[350px] mx-auto border-8 border-brand-beige">
                 <img src={coverImg} alt="Okładka ebooka" className="w-full rounded-lg shadow-inner" />
               </div>
            </div>
            {/* Decorative background behind book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-pink/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img src={shapeFlower} alt="" className="absolute -bottom-10 -right-10 w-24 opacity-40 rotate-12 animate-spin-slow" style={{ animationDuration: '15s' }} />
          </motion.div>
        </div>
      </section>
      {/* 2. O ebooku */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="container max-w-5xl mx-auto text-center space-y-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cobalt mb-8 relative inline-block">
              To, co naprawdę miało znaczenie
              <img src={wavePink} className="absolute -bottom-4 left-0 w-full h-2 opacity-40" alt="" />
            </h2>
            <p className="text-lg md:text-xl text-brand-cobalt/80 leading-relaxed">
              Ten materiał powstał z potrzeby podzielenia się tym, czego sama często dowiadywałam się dopiero po czasie. W ciąży i połogu problemem nie był brak informacji, ale ich nadmiar i brak kontekstu. Dlatego zebrałam to, co faktycznie mi się przydało, z wyjaśnieniem kiedy, dlaczego i czy w ogóle ma to sens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-left relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10 pointer-events-none">
              <img src={shapeFlower} className="w-full h-full animate-spin-slow" alt="" />
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-brand-beige/30 p-10 rounded-[3rem] border border-brand-purple/10 hover:border-brand-purple/30 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-6 right-8 text-brand-purple/20 group-hover:text-brand-purple/40 transition-colors">
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center text-brand-purple">
                <BookOpen className="mr-3 w-6 h-6" /> Czym JEST ten ebook?
              </h3>
              <ul className="space-y-4 text-brand-cobalt/90">
                <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-purple" /> praktycznym filtrem informacji na czas ciąży, porodu i połogu</li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-purple" /> zbiorem realnych doświadczeń, a nie teorii</li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-purple" /> pomocą w podejmowaniu decyzji (co ma sens, a co niekoniecznie)</li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-purple" /> uporządkowaną pigułką wiedzy zamiast setek zapisanych postów i rolek</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-brand-pink/5 p-10 rounded-[3rem] border border-brand-pink/10 hover:border-brand-pink/30 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-6 right-8 text-brand-pink/20 group-hover:text-brand-pink/40 transition-colors">
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center text-brand-pink">
                <Star className="mr-3 w-6 h-6" /> Czym NIE jest?
              </h3>
              <ul className="space-y-4 text-brand-cobalt/90">
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-pink" /> nie jest poradnikiem medycznym</li>
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-pink" /> nie zastępuje lekarza ani położnej</li>
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-pink" /> nie mówi co powinnaś robić</li>
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-3 mt-1 shrink-0 text-brand-pink" /> nie obiecuje „idealnego macierzyństwa”</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 3. Dla kogo */}
      <section className="py-24 px-4 bg-brand-purple/5 relative overflow-hidden">
        <img src={waveBlue} className="absolute -bottom-12 -right-12 w-96 opacity-10" alt="" />
        
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Dla kogo jest ten ebook?</h2>
            <p className="mt-4 text-xl opacity-70 italic">Ten przewodnik jest dla Ciebie, jeśli:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "jesteś w pierwszej ciąży (albo dopiero ją planujesz) lub chcesz odświeżyć wiedzę przy kolejnym dziecku",
      "czujesz się przytłoczona ilością treści w internecie",
              "lubisz mieć poczucie przygotowania, ale bez przesady i kontroli",
      "nie masz wokół siebie koleżanek, które mogą podzielić się sprawdzonymi wskazówkami",
              "chcesz rozumieć dlaczego coś może Ci się przydać",
              "jesteś otwarta na wiedzę, ale chcesz, żeby była sprawdzona i konkretna"
             
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-brand-cobalt/5 flex flex-col items-center text-center overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <div className="bg-brand-beige w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-pink/20 transition-colors">
                  <img src={shapeFlower} className="w-6 opacity-40 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <p className="font-medium text-lg text-brand-cobalt/90 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. Dlaczego warto */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Lewa strona: Book Mockup */}
            <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <div className="relative bg-brand-cobalt/5 rounded-lg p-3 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-y-0 left-0 w-3 md:w-4 bg-gradient-to-r from-brand-cobalt/20 to-transparent rounded-l-lg z-10"></div>

                  <div
                    className="relative aspect-[3/4] bg-white rounded overflow-hidden cursor-grab active:cursor-grabbing"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={(e) => { setTouchEnd(null); setTouchStart(e.clientX); }}
                    onMouseMove={(e) => { if (touchStart !== null) setTouchEnd(e.clientX); }}
                    onMouseUp={onTouchEnd}
                    onMouseLeave={() => { if (touchStart !== null) { onTouchEnd(); } }}
                  >
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={currentPage}
                        custom={direction}
                        initial={{ opacity: 0, rotateY: direction > 0 ? -15 : 15, scale: 0.95 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: direction > 0 ? 15 : -15, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        src={ebookPages[currentPage]}
                        alt={`Strona ebooka ${currentPage + 1}`}
                        className="w-full h-full object-contain select-none pointer-events-none"
                      />
                    </AnimatePresence>
                  </div>

                  <div className="absolute inset-y-0 -left-5 md:-left-6 flex items-center z-20">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 0}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-cobalt hover:bg-brand-pink hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-cobalt"
                      data-testid="button-page-prev"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 -right-5 md:-right-6 flex items-center z-20">
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === ebookPages.length - 1}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-cobalt hover:bg-brand-pink hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-cobalt"
                      data-testid="button-page-next"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-sm text-brand-cobalt/60 font-medium">
                    {currentPage + 1} / {ebookPages.length}
                  </span>
                </div>
                <div className="flex justify-center gap-1.5 mt-2">
                  {ebookPages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-brand-pink w-6' : 'bg-brand-cobalt/20 hover:bg-brand-cobalt/40'}`}
                      data-testid={`button-page-dot-${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Prawa strona: Dlaczego warto */}
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4 text-left">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cobalt leading-tight">Dlaczego warto mieć ten poradnik?</h2>
                <div className="h-1.5 w-24 bg-brand-pink rounded-full"></div>
              </div>

              <div className="grid gap-8 text-left">
                {[
                  { title: "Dziesiątki godzin mniej na researchu", desc: "Nie musisz przekopywać się przez rolki, grupy i sprzeczne opinie. Zebrałam to, czego sama szukałam tygodniami. Masz to w jednym miejscu." },
                  { title: "Zaoszczędzone setki złotych na wyprawce", desc: "Piszę wprost, co u mnie miało sens, a co okazało się zbędne. Gdybym wiedziała to wcześniej, nie kupiłabym kilku rzeczy „na wszelki wypadek”." },
                  { title: "Prawdziwe doświadczenie, nie teoria", desc: "To nie jest suchy poradnik. To zapis moich decyzji, wątpliwości i błędów, plus wskazówki od specjalistek, którym zaufałam." },
                  { title: "Spokojniejsza głowa", desc: "Wiedza daje poczucie sprawstwa. Kiedy wiesz czego się spodziewać, lęk ustępuje miejsca gotowości." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="shrink-0 w-14 h-14 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-pink font-bold text-xl shadow-sm group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-brand-cobalt">{item.title}</h3>
                      <p className="text-brand-cobalt/70 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. Spis treści */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Co znajdziesz w środku?</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-brand-beige/20 border-brand-purple/10 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left">
                  <h3 className="font-bold text-xl text-brand-purple">Część I: Ciąża</h3>
                  <p className="text-sm text-brand-cobalt/70 font-normal">O przygotowaniu, które ma sens - bez obsesyjnej kontroli i bez zostawiania wszystkiego „na później”.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pl-4 border-l-2 border-brand-purple/20 space-y-2 text-brand-cobalt/80">
                  <p className="font-bold text-sm mb-2">W środku m.in.:</p>
                  <ul className="space-y-1 list-disc pl-4 text-sm">
                    <li>wizyty, badania i dlaczego warto próbować na NFZ</li>
                    <li>co faktycznie pomogło mi przygotować głowę, nie tylko ciało</li>
                    <li>wybór szpitala: na co realnie zwrócić uwagę</li>
                    <li>szkoła rodzenia: co dała, a czego nie</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-brand-pink/5 border-brand-pink/10 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left">
                  <h3 className="font-bold text-xl text-brand-pink">Część II: Wyprawka</h3>
                  <p className="text-sm text-brand-cobalt/70 font-normal">Selekcja zamiast kompletowania „wszystkiego”. Co kupić wcześniej, co później, a czego wcale.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pl-4 border-l-2 border-brand-pink/20 space-y-2 text-brand-cobalt/80">
                  <p className="font-bold text-sm mb-2">W środku m.in.:</p>
                  <ul className="space-y-1 list-disc pl-4 text-sm">
                    <li>lista rzeczy dla dziecka i mamy – z komentarzem po co i dlaczego</li>
                    <li>co u mnie się sprawdziło, a co okazało się zbędne</li>
                    <li>rzeczy, które warto kupić dopiero po porodzie</li>
                    <li>wyprawkowe mity, na które łatwo się złapać</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-brand-orange/5 border-brand-orange/10 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left">
                  <h3 className="font-bold text-xl text-brand-orange">Część III: Poród</h3>
                  <p className="text-sm text-brand-cobalt/70 font-normal">Konkrety zamiast idealnych scenariuszy. O przygotowaniu, które daje poczucie spokoju, nawet gdy plan się zmienia.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pl-4 border-l-2 border-brand-orange/20 space-y-2 text-brand-cobalt/80">
                  <p className="font-bold text-sm mb-2">W środku m.in.:</p>
                  <ul className="space-y-1 list-disc pl-4 text-sm">
                    <li>moja historia porodu i indukcji – bez upiększania</li>
                    <li>przebieg porodu, co warto mieć ze sobą</li>
                    <li>pobyt w szpitalu</li>
                    <li>decyzje, które dobrze podjąć jeszcze przed porodem</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-brand-cobalt/5 border-brand-cobalt/10 overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left">
                  <h3 className="font-bold text-xl text-brand-cobalt">Część IV: Połóg</h3>
                  <p className="text-sm text-brand-cobalt/70 font-normal">Najbardziej niedoszacowany etap, który wymaga najmniej heroizmu, a najwięcej praktycznego wsparcia.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pl-4 border-l-2 border-brand-cobalt/20 space-y-2 text-brand-cobalt/80">
                  <p className="font-bold text-sm mb-2">W środku m.in.:</p>
                  <ul className="space-y-1 list-disc pl-4 text-sm">
                    <li>pierwsze dni i tygodnie po porodzie – czego się spodziewać</li>
                    <li>nauka noworodka - praktyczne wskazówki, które warto znać</li>
                    <li>karmienie: małe szczegóły, które robią dużą różnicę</li>
                    <li>rola partnera i organizacja codzienności</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* 6. Fragment */}
      <section className="py-24 px-4 bg-brand-cobalt text-brand-beige relative overflow-hidden text-center">
        <div className="container max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-16">Co dokładnie dostajesz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "80 stron konkretów", desc: "W jasnym podziale i przejrzystym układzie" },
              { icon: Check, title: "Wskazówki decyzyjne", desc: "Konkretne porady, które ułatwią Ci wybór" },
              { icon: Star, title: "Wyselekcjonowane polecenia", desc: "Miejsca, produkty i specjaliści, którym ufam" },
              { icon: Gift, title: "Bonus: Excel", desc: "Lista wyprawkowa z linkami, kontekstem i terminami" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="bg-brand-pink text-brand-cobalt w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Quote */}
      <section className="py-20 px-4 bg-brand-pink/10 italic text-center">
        <div className="container max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-serif leading-relaxed opacity-90 mb-4">
            {`„Laktatora nie kupiłam przed porodem, bo wiele osób mi radziło, żeby najpierw zobaczyć czy będzie potrzebny (plus po czasie wiem, że najważniejszy przy wyborze jest rozmiar lejka), a w szpitalu często jest dostępny, więc można przetestować. Każda moja koleżanka polecała mi inny. U jednej sprawdzał się ręczny, bo inne za słabo ssały, inna używała muszlowego, bo często odciągała i chciała mieć wolne ręce, inna miała zwykły elektryczny na jedną pierś.”`}
          </blockquote>
        </div>
      </section>
      {/* 7. O mnie */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cobalt mb-4">Kim jestem?</h2>
            <p className="text-xl text-brand-pink font-medium">Mam na imię Dorota i mogę zostać Twoją koleżanką :)</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Photo collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 relative"
            >
              <img src={wavePink} alt="" className="absolute -top-6 -left-8 w-28 opacity-30 -rotate-12 z-20 pointer-events-none" />
              <img src={checkers} alt="" className="absolute -bottom-4 -right-6 w-20 opacity-25 z-20 pointer-events-none" />
              <img src={shapeFlower} alt="" className="absolute top-1/2 -right-10 w-16 opacity-20 z-20 pointer-events-none" />
              <img src={waveOrange} alt="" className="absolute -bottom-8 left-4 w-24 opacity-20 rotate-6 z-20 pointer-events-none" />

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 row-span-2">
                  <img src="/about-photos/dorota-leon.jpg" alt="Dorota z Leonem" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                </div>
                <div>
                  <img src="/about-photos/rower.jpg" alt="Dorota na rowerze" className="w-full h-full object-cover rounded-2xl shadow-md aspect-square" />
                </div>
                <div>
                  <img src="/about-photos/panel-wellbeing.jpg" alt="Panel Wellbeing" className="w-full h-full object-cover rounded-2xl shadow-md aspect-square" />
                </div>
                <div>
                  <img src="/about-photos/plaze.jpg" alt="Dorota z mężem" className="w-full h-full object-cover rounded-xl shadow-md aspect-square" />
                </div>
                <div>
                  <img src="/about-photos/baby-shower.jpg" alt="Baby shower" className="w-full h-full object-cover rounded-xl shadow-md aspect-square" />
                </div>
                <div>
                  <img src="/about-photos/triatlon.jpg" alt="Triatlon" className="w-full h-full object-cover rounded-xl shadow-md aspect-square" />
                </div>
              </div>
            </motion.div>

            {/* Right: Text blocks */}
            <div className="lg:col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-7 rounded-[2rem] border border-brand-pink/10 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center shrink-0">
                    <span className="text-lg">👶</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-cobalt">Mama, koleżanka, organizatorka</h3>
                </div>
                <p className="text-brand-cobalt/75 leading-relaxed">Mam 33 lata i jestem mamą Leona, który urodził się w grudniu 2025 roku. Z natury organizuję, łączę ludzi i inicjuję różne rzeczy. Energia daje mi poczucie sensu, a największą satysfakcję mam wtedy, gdy mogę stworzyć komuś trochę prostszą drogę.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-7 rounded-[2rem] border border-brand-purple/10 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/15 flex items-center justify-center shrink-0">
                    <span className="text-lg">🚀</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-cobalt">Startup i biznes</h3>
                </div>
                <p className="text-brand-cobalt/75 leading-relaxed">Od prawie 8 lat współprowadzę Activy - firmę technologiczną, która tworzy aplikację ze sportowymi wyzwaniami dla pracowników. Zaufało nam ponad 400 firm, w tym Allegro, Credit Agricole i Danone. Działam marketingowo i operacyjnie, układam procesy, rozwiązuję kryzysy i składam w logiczną całość wszystkie szalone pomysły mojego wspólnika. Występuję na konferencjach, prowadzę webinary, a po drodze zdobywałam wyróżnienia jak 50 Kreatywnych w Biznesie czy Deloitte Fast 50.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-7 rounded-[2rem] border border-brand-orange/10 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center shrink-0">
                    <span className="text-lg">🚴‍♀️</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-cobalt">Sport i równowaga</h3>
                </div>
                <p className="text-brand-cobalt/75 leading-relaxed">
                  Rower, amatorski triatlon, trening siłowy, a kiedy tylko się da kitesurfing i snowboard. Ruch daje mi równowagę i poczucie sprawczości.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-beige/50 p-7 rounded-[2rem] border border-brand-cobalt/5"
              >
                <p className="text-brand-cobalt/80 leading-relaxed italic font-serif text-lg">
                  „Doświadczenie startupowe bardzo wpłynęło na moje podejście do macierzyństwa. Nauczyło mnie elastyczności, szukania rozwiązań zamiast perfekcji i budowania systemów, które ułatwiają codzienność. Macierzyństwo zmieniło wiele, ale nie zmieniło tego, że nadal chcę działać i tworzyć coś swojego."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <a
                  href="https://www.instagram.com/dora.hela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 hover:from-brand-pink/20 hover:to-brand-purple/20 border border-brand-pink/15 px-5 py-3 rounded-full transition-all group"
                  data-testid="link-instagram"
                >
                  <svg className="w-5 h-5 text-brand-pink group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="font-medium text-brand-cobalt text-sm">@dora.hela</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/dorotajurek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand-cobalt/5 hover:bg-brand-cobalt/10 border border-brand-cobalt/10 px-5 py-3 rounded-full transition-all group"
                  data-testid="link-linkedin"
                >
                  <svg className="w-5 h-5 text-brand-cobalt/70 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="font-medium text-brand-cobalt text-sm">LinkedIn</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Opinie */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <img src={wavePink} alt="" className="absolute top-8 left-0 w-48 opacity-10 pointer-events-none" />
        <img src={shapeFlower} alt="" className="absolute bottom-12 right-8 w-20 opacity-15 pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cobalt mb-4">Co mówią koleżanki?</h2>
            <div className="h-1.5 w-24 bg-brand-pink rounded-full mx-auto"></div>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>
      {/* 8. Oferta */}
      <section id="pricing" className="py-20 px-4 bg-brand-beige relative text-center">
        <div className="container max-w-lg mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 border-2 border-brand-purple overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-brand-orange text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
              OFERTA FIRST MINUTE
            </div>
            
            <h3 className="text-3xl font-serif font-bold text-brand-cobalt mb-2">Kup ebooka</h3>
            <p className="text-brand-cobalt/60 mb-8">Ebook (PDF) + BONUS: Excel wyprawkowy</p>
            
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-xl text-brand-cobalt/40 line-through">45,99 zł</span>
              <span className="text-5xl font-bold text-brand-pink tracking-tight">29,99 zł</span>
            </div>

            <div className="space-y-4 text-left bg-brand-beige/30 p-6 rounded-2xl mb-8 border border-brand-purple/5">
              <div className="flex items-start gap-3">
                <div className="bg-brand-purple/10 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-brand-purple" />
                </div>
                <p className="text-sm"><strong>80 stron konkretów</strong> w jasnym podziale</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-orange/10 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-brand-orange" />
                </div>
                <p className="text-sm"><strong>Bonus: Excel wyprawkowy</strong> – linki do sklepów, kontekst</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-pink/10 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-brand-pink" />
                </div>
                <p className="text-sm"><strong>Wskazówki decyzyjne</strong> i wyselekcjonowane polecenia</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-checkout"
              >
                <Button
                  size="lg"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full py-7 text-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Kup teraz i pobierz pliki
                </Button>
              </a>
            </div>
            
            <p className="text-xs text-brand-cobalt/40 mt-6">Natychmiastowy dostęp po zaksięgowaniu płatności.</p>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-20 px-4 bg-brand-purple text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/5 rounded-full blur-3xl"></div>
        <div className="container max-w-2xl mx-auto relative z-10 text-center space-y-8">
          <img src={shapeFlower} alt="" className="w-12 h-12 mx-auto animate-pulse opacity-80 brightness-200" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Chcesz dołączyć do klubu koleżanek?</h2>
          <p className="text-lg opacity-90">
            Zapisz się do newslettera, w którym będę informowała o kolejnych wydaniach, spotkaniach, nowościach i następnych częściach ebooka.
          </p>

          {newsletterSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-white/20"
            >
              <div className="w-16 h-16 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-brand-pink" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">Udało się!</h3>
              <p className="text-lg opacity-90">Dołączyłaś do klubu koleżanek. Sprawdź swoją skrzynkę mailową.</p>
            </motion.div>
          ) : (
            <>
              <form
                className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!newsletterEmail || newsletterLoading) return;
                  setNewsletterLoading(true);
                  setNewsletterError("");
                  try {
                    const body = new URLSearchParams();
                    body.append("fields[email]", newsletterEmail);
                    body.append("ml-submit", "1");
                    body.append("anticsrf", "true");
                    const res = await fetch("https://assets.mailerlite.com/jsonp/2105071/forms/184110745195119824/subscribe", {
                      method: "POST",
                      body,
                    });
                    if (!res.ok) throw new Error("Coś poszło nie tak");
                    setNewsletterSuccess(true);
                  } catch (err: any) {
                    setNewsletterError("Nie udało się zapisać. Spróbuj ponownie.");
                  } finally {
                    setNewsletterLoading(false);
                  }
                }}
                data-testid="form-newsletter"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Twój adres e-mail"
                  className="flex-1 px-6 py-4 rounded-full bg-white text-brand-cobalt focus:outline-none focus:ring-2 focus:ring-brand-pink shadow-inner"
                  data-testid="input-newsletter-email"
                />
                <Button
                  type="submit"
                  disabled={newsletterLoading}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-4 font-bold shadow-lg disabled:opacity-60"
                  data-testid="button-newsletter-submit"
                >
                  {newsletterLoading ? "Zapisuję..." : "Zapisz się"}
                </Button>
              </form>
              {newsletterError && (
                <p className="text-brand-pink text-sm" data-testid="text-newsletter-error">{newsletterError}</p>
              )}
              <p className="text-xs opacity-50 max-w-md mx-auto leading-relaxed">Zapisując się, wyrażasz zgodę na przetwarzanie Twojego adresu e-mail w celu wysyłki newslettera. Administratorem danych jest Dorota Matuła Marketing. Możesz zrezygnować w każdej chwili klikając link w wiadomości.</p>
            </>
          )}
        </div>
      </section>
      {/* 9. FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">Częste pytania</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-serif text-lg text-left">Czym ten ebook różni się od innych poradników o macierzyństwie?</AccordionTrigger>
            <AccordionContent className="text-base text-brand-cobalt/80">
              Zamiast teoretycznych opisów, dostajesz wyselekcjonowany filtr i kontekst. Nie mówię Ci, jak "powinnaś" robić, ale pokazuję, jakie decyzje masz do podjęcia i co realnie ma znaczenie, a co jest marketingowym szumem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-serif text-lg text-left">Czy jeśli czytałam już książki o macierzyństwie, dowiem się tu czegoś nowego?</AccordionTrigger>
            <AccordionContent className="text-base text-brand-cobalt/80">
              Tak, jeśli brakowało Ci praktycznego przełożenia wiedzy na codzienne decyzje. Ten ebook nie powiela teorii, tylko pokazuje, jak konkretne rzeczy wyglądały w realnym życiu i co faktycznie się przydało.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-serif text-lg text-left">Czy to jest poradnik medyczny?</AccordionTrigger>
            <AccordionContent className="text-base text-brand-cobalt/80">
              Nie. To zapis mojego doświadczenia oraz wiedzy zebranej w rozmowach ze specjalistami, którym zaufałam. Ebook nie zastępuje lekarza ani położnej, ale pomaga zrozumieć kontekst i podejmować własne decyzje.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-serif text-lg text-left">Czy znajdę tu konkretne polecenia produktów i miejsc?</AccordionTrigger>
            <AccordionContent className="text-base text-brand-cobalt/80">
              Tak. W ebooku są boxy z wyselekcjonowanymi poleceniami – zarówno ogólnopolskimi, jak i z Warszawy – z krótkim wyjaśnieniem, dlaczego i w jakiej sytuacji mogą się przydać.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-serif text-lg text-left">Czy ten ebook nie będzie mnie przytłaczał kolejnymi listami i zasadami?</AccordionTrigger>
            <AccordionContent className="text-base text-brand-cobalt/80">
              Nie. Celem ebooka jest porządkowanie i selekcja, a nie dokładanie kolejnych obowiązków. Znajdziesz tu mniej rzeczy, ale z większym sensem i kontekstem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* 10. Final CTA */}
      <section className="py-24 px-4 bg-brand-purple text-white text-center relative overflow-hidden">
        <img src={wavePink} className="absolute bottom-0 left-0 w-full opacity-20" />
        <div className="relative z-10 container max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Nie musisz wiedzieć wszystkiego.<br/>
            Wystarczy, że wiesz, to co naprawdę ma znaczenie.
          </h2>
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white border-2 border-brand-orange transition-colors rounded-full px-10 py-6 text-lg shadow-xl"
          >
            Kup ebooka
          </Button>
        </div>
      </section>
      <footer className="py-8 bg-brand-cobalt text-brand-beige/40 text-center text-sm">
        <p>© 2026 Dorota Matuła Marketing. Wszystkie prawa zastrzeżone.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/regulamin" className="hover:text-white transition-colors" data-testid="link-regulamin">Regulamin</a>
          <a href="/polityka-prywatnosci" className="hover:text-white transition-colors" data-testid="link-polityka">Polityka Prywatności</a>
        </div>
      </footer>
    </div>
  );
}
