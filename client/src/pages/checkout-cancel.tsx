import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-lg"
      >
        <div className="w-20 h-20 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto">
          <ShoppingCart className="w-10 h-10 text-brand-pink" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-bold text-brand-cobalt" data-testid="text-cancel-title">
            Płatność anulowana
          </h1>
          <p className="text-lg text-brand-cobalt/70">
            Nic nie zostało pobrane z Twojego konta. Możesz wrócić do zakupu w dowolnym momencie.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#pricing">
            <Button
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-4 text-lg"
              data-testid="button-retry"
            >
              Spróbuj ponownie
            </Button>
          </a>
          <a href="/">
            <Button
              variant="ghost"
              className="text-brand-cobalt/60 hover:text-brand-cobalt rounded-full px-8 py-4"
              data-testid="link-home"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Wróć na stronę
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
