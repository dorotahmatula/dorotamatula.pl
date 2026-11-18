import { motion } from "framer-motion";
import { ArrowRight, Table, Instagram, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImg from "@/assets/cover.jpg";
import shapeFlower from "@/assets/shape-flower.png";

const EXCEL_LINK = "https://docs.google.com/spreadsheets/d/118-JKUgk_l23QbEKP7OwtuJcPl4WBm-G_bazF2lWeRc/edit?usp=sharing";

const ebookParts = [
  "Ciąża – co warto wiedzieć i ogarnąć wcześniej, a co można odpuścić",
  "Wyprawka – pełne listy dla mamy i dziecka, z komentarzem po co i dlaczego",
  "Poród – moja historia porodu i indukcji, bez upiększania",
  "Połóg – najbardziej niedoszacowany etap i praktyczne wsparcie na start",
];

export default function Wyprawka() {
  return (
    <div className="min-h-screen bg-brand-beige px-4 py-14 md:py-20 relative overflow-hidden font-sans text-brand-cobalt">
      <img src={shapeFlower} alt="" className="absolute top-6 right-[-12%] md:right-10 w-28 md:w-40 opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-purple/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-xl mx-auto space-y-8 relative z-10">
        {/* 1. Lista wyprawkowa */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-purple/10 space-y-6 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/20 text-brand-cobalt font-medium text-sm">
            Od koleżanki dla koleżanek
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-snug">
            Tu pobierz listę wyprawkową
          </h1>
          <p className="text-lg text-brand-cobalt/80 leading-relaxed">
            Spisałam ją w połogu. Z komentarzem: co jest czym, co się u mnie sprawdziło, co kupić przed porodem, co po,
            a co można spokojnie odpuścić. Weź z niej to, co ma sens dla Ciebie.
          </p>

          <a href={EXCEL_LINK} target="_blank" rel="noopener noreferrer" className="inline-block" data-testid="button-wyprawka-excel">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Table className="mr-2 h-5 w-5" />
              Pobierz listę wyprawkową
            </Button>
          </a>

          <p className="text-sm text-brand-cobalt/60 leading-relaxed">
            Lista otworzy się w Arkuszach Google. Żeby ją edytować u siebie, kliknij <strong>Plik → Utwórz kopię</strong> albo{" "}
            <strong>Plik → Pobierz → Microsoft Excel</strong>.
          </p>
        </motion.section>

        {/* 2. E-book */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-pink/10 space-y-6"
        >
          <div className="grid sm:grid-cols-[140px_1fr] gap-6 items-center">
            <div className="bg-white p-2 rounded-xl shadow-lg rotate-2 max-w-[140px] mx-auto border-4 border-brand-beige">
              <img
                src={coverImg}
                alt="Okładka e-booka Ciąża, poród, połóg. Wszystko, co chciałabym wiedzieć wcześniej – Dorota Matuła"
                className="w-full rounded-md"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl font-serif font-bold leading-snug">A jeśli chcesz więcej…</h2>
              <p className="text-brand-cobalt/80 leading-relaxed">
                …zapraszam do mojego e-booka „Ciąża, poród, połóg. Wszystko, co chciałabym wiedzieć wcześniej”. Lista wyprawkowa to tylko jego kawałek.
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {ebookParts.map((part) => (
              <li key={part} className="flex gap-3 text-brand-cobalt/80">
                <Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <span>{part}</span>
              </li>
            ))}
          </ul>

          <p className="text-brand-cobalt/80 leading-relaxed">
            Bez upiększania i bez straszenia. Z kontekstem: co, po co i czy w ogóle. E-book PDF (80 stron) + edytowalny Excel wyprawkowy.
          </p>

          <div className="text-center">
            <a href="/" data-testid="button-wyprawka-ebook" className="inline-block">
              <Button
                size="lg"
                className="bg-brand-cobalt hover:bg-brand-cobalt/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Zobacz e-book
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.section>

        {/* 3. Instagram */}
        <a
          href="https://www.instagram.com/dora.hela/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-white/60 border border-brand-pink/15 hover:shadow-md transition-all group"
          data-testid="link-wyprawka-instagram"
        >
          <Instagram className="w-6 h-6 text-brand-pink group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Więcej konkretów na @dora.hela</span>
        </a>

        <p className="text-center text-lg font-serif font-medium">Dorota</p>
      </div>
    </div>
  );
}
