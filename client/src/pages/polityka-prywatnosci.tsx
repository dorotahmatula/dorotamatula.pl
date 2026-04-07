import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-brand-cobalt hover:text-brand-purple transition-colors mb-8 font-medium" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            Wróć na stronę główną
          </a>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-cobalt mb-2">
          Polityka prywatności
        </h1>
        <p className="text-brand-cobalt/60 mb-8">dorotamatula.pl oraz newsletter</p>
        <p className="text-sm text-brand-cobalt/50 mb-10">Data ostatniej aktualizacji: 19.02.2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-brand-cobalt/80">
          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">1. Kto jest administratorem danych</h2>
            <p>Administratorem Twoich danych osobowych jest Dorota Matuła, prowadząca działalność gospodarczą pod nazwą Dorota Matuła Marketing, NIP: 5213862136, z siedzibą/adresem do korespondencji: ul. Bukowińska 22a/79, 02-703 Warszawa.</p>
            <p>Kontakt w sprawach prywatności: <a href="mailto:dorota.h.matula@gmail.com" className="text-brand-purple hover:text-brand-cobalt underline">dorota.h.matula@gmail.com</a></p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">2. Jakie dane zbieram i skąd je mam</h2>
            <p>Mogę przetwarzać następujące dane:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dane podane przez Ciebie w formularzach na stronie (adres e-mail),</li>
              <li>dane potrzebne do realizacji zakupu (e-mail, informacje o płatności i statusie transakcji),</li>
              <li>dane techniczne (adres IP, typ przeglądarki, przybliżona lokalizacja, pliki cookies, statystyki odwiedzin).</li>
            </ul>
            <p>Dane dostaję bezpośrednio od Ciebie lub z narzędzi, które wspierają działanie strony (np. system płatności, narzędzia analityczne).</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">3. Po co przetwarzam dane i na jakiej podstawie</h2>
            <p>Przetwarzam dane tylko wtedy, gdy mam do tego podstawę prawną. Najczęstsze cele:</p>

            <h3 className="font-serif text-lg font-semibold text-brand-cobalt mt-4">1. Sprzedaż i dostarczenie e-booka / produktu cyfrowego</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>po co:</strong> realizacja zamówienia, wysyłka linku do materiałów, obsługa klienta</li>
              <li><strong>podstawa:</strong> wykonanie umowy (art. 6 ust. 1 lit. b RODO)</li>
            </ul>

            <h3 className="font-serif text-lg font-semibold text-brand-cobalt mt-4">2. Płatności i rozliczenia</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>po co:</strong> obsługa płatności, potwierdzenia transakcji, zwroty, rozliczenia</li>
              <li><strong>podstawa:</strong> wykonanie umowy (art. 6 ust. 1 lit. b) oraz obowiązek prawny (art. 6 ust. 1 lit. c)</li>
            </ul>

            <h3 className="font-serif text-lg font-semibold text-brand-cobalt mt-4">3. Kontakt i obsługa wiadomości</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>po co:</strong> odpowiedź na wiadomość, wsparcie techniczne, odpowiedzi na pytania</li>
              <li><strong>podstawa:</strong> prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f) lub działania przed zawarciem umowy (art. 6 ust. 1 lit. b)</li>
            </ul>

            <h3 className="font-serif text-lg font-semibold text-brand-cobalt mt-4">4. Newsletter (jeśli się zapiszesz)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>po co:</strong> wysyłka treści i informacji związanych z e-bookiem/tematem strony</li>
              <li><strong>podstawa:</strong> Twoja zgoda (art. 6 ust. 1 lit. a). Zgodę możesz wycofać w każdej chwili (np. linkiem w mailu albo pisząc do mnie).</li>
            </ul>

            <h3 className="font-serif text-lg font-semibold text-brand-cobalt mt-4">5. Statystyki i poprawa działania strony</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>po co:</strong> mierzenie ruchu, poprawa treści i działania strony, bezpieczeństwo</li>
              <li><strong>podstawa:</strong> prawnie uzasadniony interes (art. 6 ust. 1 lit. f) oraz zgoda na cookies (jeśli dotyczy)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">4. Komu mogę przekazywać dane (odbiorcy danych)</h2>
            <p>Twoje dane mogą być przekazywane podmiotom, które pomagają mi prowadzić stronę i realizować usługi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>dostawcy płatności:</strong> Stripe (Stripe Payments Europe, Ltd. lub powiązane podmioty Stripe) – do obsługi transakcji,</li>
              <li><strong>dostawcy hostingu i infrastruktury IT:</strong> Replit</li>
              <li><strong>dostawcy narzędzi do mailingu/newslettera:</strong> MailerLite</li>
              <li><strong>dostawcy analityki:</strong> Google Analytics</li>
              <li><strong>system fakturowy:</strong> fakturownia.pl</li>
            </ul>
            <p>Przekazuję dane tylko w zakresie koniecznym do działania tych usług.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">5. Czy dane trafiają poza EOG (UE)</h2>
            <p>Niektórzy dostawcy narzędzi (np. Stripe, Google, narzędzia newsletterowe) mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. W takim przypadku stosowane są odpowiednie zabezpieczenia prawne, np. standardowe klauzule umowne zatwierdzone przez Komisję Europejską.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">6. Jak długo przechowuję dane</h2>
            <p>Przechowuję dane tylko tak długo, jak to konieczne:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>dane dotyczące zakupu i rozliczeń:</strong> przez czas wymagany przepisami (zwykle 5 lat podatkowych, licząc od końca roku, w którym powstał obowiązek podatkowy),</li>
              <li><strong>dane z korespondencji:</strong> tak długo, jak to potrzebne do obsługi sprawy, a potem maksymalnie do upływu terminów roszczeń,</li>
              <li><strong>dane newsletterowe:</strong> do czasu wypisania się z newslettera,</li>
              <li><strong>dane analityczne/cookies:</strong> zgodnie z ustawieniami narzędzia i Twoimi zgodami.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">7. Twoje prawa</h2>
            <p>Masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>sprzeciwu wobec przetwarzania (gdy podstawą jest mój uzasadniony interes),</li>
              <li>wycofania zgody (gdy przetwarzam dane na podstawie zgody).</li>
            </ul>
            <p>Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), jeśli uznasz, że przetwarzam dane niezgodnie z prawem.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">8. Pliki cookies i narzędzia analityczne</h2>
            <p>Strona może wykorzystywać pliki cookies (małe pliki zapisywane w przeglądarce) w celu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>zapewnienia prawidłowego działania strony,</li>
              <li>zapamiętania Twoich ustawień,</li>
              <li>statystyk i analityki (jeśli są włączone),</li>
              <li>marketingu (jeśli używasz pikseli reklamowych i wyrazisz zgodę).</li>
            </ul>
            <p>Możesz zmienić ustawienia cookies w swojej przeglądarce lub w banerze cookies. Wyłączenie cookies może wpłynąć na działanie niektórych funkcji strony.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">9. Bezpieczeństwo</h2>
            <p>Stosuję środki organizacyjne i techniczne, aby chronić dane przed utratą, nieuprawnionym dostępem i ujawnieniem (m.in. ograniczenia dostępu, aktualizacje narzędzi, szyfrowane połączenia – jeśli dostępne).</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">10. Dobrowolność podania danych</h2>
            <p>Podanie danych jest dobrowolne, ale może być konieczne do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>zakupu i dostarczenia produktu,</li>
              <li>odpowiedzi na wiadomość,</li>
              <li>zapisania się do newslettera.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">11. Zmiany w polityce prywatności</h2>
            <p>Mogę aktualizować tę politykę, jeśli zmieni się sposób działania strony lub używane narzędzia. Aktualna wersja zawsze będzie dostępna na tej stronie.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-cobalt/10 text-center">
          <Link href="/">
            <a className="text-brand-purple hover:text-brand-cobalt transition-colors font-medium" data-testid="link-back-home-bottom">
              Wróć na stronę główną
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
