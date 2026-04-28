import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, FileText, Table, Instagram, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackMetaEventOncePerSession } from "@/lib/meta-pixel";

const EBOOK_LINK = "https://drive.google.com/file/d/17WGG-CmX8zmW2CalScwhFU0ryf-ZN93B/view?usp=sharing";
const EXCEL_LINK = "https://docs.google.com/spreadsheets/d/118-JKUgk_l23QbEKP7OwtuJcPl4WBm-G_bazF2lWeRc/edit?usp=sharing";
const MAILERLITE_SUBSCRIBE_URL =
  "https://assets.mailerlite.com/jsonp/2105071/forms/184110745195119824/subscribe";
const EBOOK_PRICE = 29.99;
const EBOOK_CURRENCY = "PLN";

export default function CheckoutSuccess() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    trackMetaEventOncePerSession("purchase-ebook", "Purchase", {
      content_name: "Ciąża, poród, połóg",
      content_category: "ebook",
      content_type: "product",
      currency: EBOOK_CURRENCY,
      value: EBOOK_PRICE,
      num_items: 1,
    });
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setNewsletterStatus("loading");
    try {
      const body = new FormData();
      body.append("fields[email]", email.trim());
      body.append("ml-submit", "1");
      body.append("anticsrf", "true");

      const res = await fetch(MAILERLITE_SUBSCRIBE_URL, {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error("Błąd zapisu");
      setNewsletterStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message);
      setNewsletterStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige px-4 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
        >
          <Check className="w-10 h-10 text-green-600" />
        </motion.div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-purple/10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-cobalt leading-snug md:leading-snug" data-testid="text-success-title">
            {`Dzięki! Super, że dołączyłaś do klubu koleżanek :)`}
          </h1>

          <p className="text-lg text-brand-cobalt/80 leading-relaxed">
            Czytaj we własnym tempie, wybieraj to, co ma dla Ciebie sens i traktuj ten materiał jak praktyczne wsparcie.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={EBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-md transition-all group"
              data-testid="link-download-ebook"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                <FileText className="w-6 h-6 text-brand-purple group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold text-brand-cobalt">Pobierz ebooka (PDF)</p>
                <p className="text-sm text-brand-cobalt/50">Kliknij, żeby otworzyć</p>
              </div>
            </a>

            <a
              href={EXCEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-brand-orange/5 border border-brand-orange/10 hover:border-brand-orange/30 hover:shadow-md transition-all group"
              data-testid="link-download-excel"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Table className="w-6 h-6 text-brand-orange group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold text-brand-cobalt">Pobierz wyprawkę (Excel)</p>
                <p className="text-sm text-brand-cobalt/50">Kliknij, żeby otworzyć</p>
              </div>
            </a>
          </div>

          <p className="text-brand-cobalt/60 text-sm italic pt-2">Materiały czekają też na Twoim mailu (sprawdź folder inne).</p>

          <div className="pt-4 border-t border-brand-cobalt/5">
            <p className="text-lg font-serif text-brand-cobalt font-medium">Dorota</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-pink/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-brand-pink" />
            </div>
            <h2 className="text-xl font-serif font-bold text-brand-cobalt">Zapisz się do newslettera</h2>
          </div>
          <p className="text-brand-cobalt/60 text-sm">
            Bądź na bieżąco — dostawaj praktyczne wskazówki i nowości prosto na maila.
          </p>

          {newsletterStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 border border-green-200"
            >
              <Check className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-green-700 font-medium" data-testid="status-newsletter-success">Zapisano! Dziękuję za dołączenie.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl border border-brand-cobalt/10 bg-brand-beige/30 text-brand-cobalt placeholder:text-brand-cobalt/30 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink/30 transition-all"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-xl px-6 py-3 font-semibold shrink-0"
                data-testid="button-newsletter-submit"
              >
                {newsletterStatus === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Zapisz się"
                )}
              </Button>
            </form>
          )}

          {newsletterStatus === "error" && (
            <p className="text-red-500 text-sm" data-testid="status-newsletter-error">{errorMsg}</p>
          )}
        </div>

        <a
          href="https://www.instagram.com/dora.hela/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-brand-pink/15 hover:shadow-md transition-all group"
          data-testid="link-instagram"
        >
          <Instagram className="w-6 h-6 text-brand-pink group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-brand-cobalt">Zaobserwuj mnie na Instagramie</span>
        </a>

        <div className="text-center">
          <a href="/">
            <Button variant="ghost" className="text-brand-cobalt/50 hover:text-brand-cobalt" data-testid="link-home">
              <ArrowLeft className="w-4 h-4 mr-2" /> Wróć na stronę główną
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
