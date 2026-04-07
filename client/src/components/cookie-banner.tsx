import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          data-testid="cookie-banner"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.12)] border border-brand-cobalt/10 p-5 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-brand-cobalt font-medium text-sm md:text-base">
                    Ta strona korzysta z plików cookies
                  </p>
                  <p className="text-brand-cobalt/60 text-xs md:text-sm mt-1">
                    Używamy cookies, aby zapewnić prawidłowe działanie strony, analizować ruch i personalizować treści. Więcej informacji znajdziesz w naszej{" "}
                    <a href="/polityka-prywatnosci" className="text-brand-purple hover:text-brand-cobalt underline">
                      Polityce Prywatności
                    </a>.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto flex-shrink-0">
                <button
                  onClick={decline}
                  className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-brand-cobalt/70 bg-brand-beige hover:bg-brand-cobalt/10 rounded-xl transition-colors"
                  data-testid="button-cookie-decline"
                >
                  Odrzuć
                </button>
                <button
                  onClick={accept}
                  className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-white bg-brand-cobalt hover:bg-brand-cobalt/90 rounded-xl transition-colors"
                  data-testid="button-cookie-accept"
                >
                  Akceptuję
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
