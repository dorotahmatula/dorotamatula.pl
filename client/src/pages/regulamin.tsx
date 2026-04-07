import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Regulamin() {
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
          Regulamin sklepu internetowego
        </h1>
        <p className="text-brand-cobalt/60 mb-8">dorotamatula.pl</p>
        <p className="text-sm text-brand-cobalt/50 mb-10">Data ostatniej aktualizacji: 19.02.2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-brand-cobalt/80">
          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">1. Postanowienia ogólne</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Niniejszy regulamin („Regulamin") określa zasady korzystania ze sklepu internetowego prowadzonego w serwisie dorotamatula.pl („Sklep"), w szczególności zasady składania zamówień, płatności, dostarczania Produktów oraz tryb reklamacji.</li>
              <li>
                Sklep prowadzi:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Dorota Matuła, prowadząca działalność gospodarczą pod nazwą Dorota Matuła Marketing</li>
                  <li>NIP: 5213862136</li>
                  <li>adres do korespondencji: ul. Bukowińska 22a/79, 02-703 Warszawa</li>
                  <li>e-mail kontaktowy: dorota.h.matula@gmail.com</li>
                  <li>narzędzie do fakturowania: fakturownia.pl</li>
                </ul>
              </li>
              <li>Kontakt w sprawach prywatności: dorota.h.matula@gmail.com.</li>
              <li>Regulamin jest dostępny nieodpłatnie na stronie Sklepu w formie umożliwiającej jego pozyskanie, odtwarzanie i utrwalanie.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">2. Definicje</h2>
            <p>Na potrzeby Regulaminu poniższe pojęcia oznaczają:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sprzedawca</strong> – Dorota Matuła, Dorota Matuła Marketing, dane jak w pkt 1.</li>
              <li><strong>Klient</strong> – osoba fizyczna, osoba prawna lub jednostka organizacyjna składająca zamówienie w Sklepie.</li>
              <li><strong>Konsument</strong> – osoba fizyczna dokonująca zakupu niezwiązanego bezpośrednio z jej działalnością gospodarczą lub zawodową.</li>
              <li><strong>Przedsiębiorca na prawach konsumenta</strong> – osoba fizyczna prowadząca działalność gospodarczą, dokonująca zakupu związanego z działalnością, ale nie mającego charakteru zawodowego (w rozumieniu przepisów).</li>
              <li><strong>Produkt</strong> – treść cyfrowa oferowana w Sklepie, w szczególności e-book w formacie PDF oraz pliki w formacie Excel (arkusze).</li>
              <li><strong>Umowa</strong> – umowa sprzedaży treści cyfrowej zawierana na odległość pomiędzy Sprzedawcą a Klientem w ramach Sklepu.</li>
              <li><strong>Dostarczenie</strong> – udostępnienie Klientowi Produktu w sposób umożliwiający pobranie lub dostęp, np. poprzez link do pobrania lub wysyłkę na e-mail.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">3. Wymagania techniczne</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Do korzystania ze Sklepu potrzebne są: urządzenie z dostępem do internetu, przeglądarka internetowa, aktywne konto e-mail.</li>
              <li>Do korzystania z Produktu może być potrzebne oprogramowanie do odczytu plików PDF oraz program umożliwiający otwarcie plików Excel lub ich odpowiedników (np. Microsoft Excel, LibreOffice, Google Sheets).</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">4. Zasady składania zamówień</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Informacje na stronie Sklepu stanowią zaproszenie do zawarcia umowy.</li>
              <li>Klient składa zamówienie poprzez wybór Produktu, uzupełnienie danych wymaganych do realizacji zamówienia i dokonanie płatności.</li>
              <li>
                Złożenie zamówienia jest równoznaczne z:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>akceptacją Regulaminu,</li>
                  <li>złożeniem oferty zawarcia Umowy.</li>
                </ul>
              </li>
              <li>Umowa zostaje zawarta z chwilą potwierdzenia zamówienia przez Sprzedawcę (np. poprzez komunikat po płatności lub e-mail potwierdzający).</li>
              <li>Sprzedawca może odmówić realizacji zamówienia w uzasadnionych przypadkach (np. błąd systemu, podejrzenie nadużycia, brak możliwości realizacji).</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">5. Ceny i płatności</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ceny Produktów podane są w złotych polskich (PLN) i są cenami brutto (zawierają należne podatki), o ile Sklep nie wskazuje inaczej.</li>
              <li>Dostępne metody płatności: karta, BLIK, przelew, Klarna, Link – realizowane przez operatora płatności Stripe.</li>
              <li>Płatność należy zrealizować zgodnie z instrukcjami operatora płatności.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">6. Dostarczenie Produktu</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Produkt jest dostarczany w formie cyfrowej, bez nośnika fizycznego.</li>
              <li>
                Dostarczenie następuje:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>poprzez udostępnienie linku do pobrania po zakupie i/lub</li>
                  <li>poprzez wysyłkę linku na adres e-mail podany w zamówieniu.</li>
                </ul>
              </li>
              <li>Dostarczenie następuje niezwłocznie po zaksięgowaniu płatności, najpóźniej w ciągu 12 godzin.</li>
              <li>Klient powinien sprawdzić folder SPAM/oferty, jeżeli nie otrzymał wiadomości e-mail.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">7. Prawo odstąpienia od umowy</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Co do zasady Konsument i Przedsiębiorca na prawach konsumenta mają prawo odstąpić od Umowy w terminie 14 dni bez podawania przyczyny.</li>
              <li>Wyjątek: treści cyfrowe. Zgodnie z przepisami, prawo odstąpienia nie przysługuje, jeżeli spełnianie świadczenia (dostarczenie treści cyfrowej) rozpoczęło się za wyraźną zgodą Klienta przed upływem terminu odstąpienia i po poinformowaniu go o utracie prawa odstąpienia.</li>
              <li>Składając zamówienie, Klient może zostać poproszony o zaznaczenie zgody na natychmiastowe dostarczenie Produktu oraz potwierdzenie przyjęcia do wiadomości utraty prawa odstąpienia. Jeśli taka zgoda zostanie wyrażona, Produkt będzie dostarczony od razu, a prawo odstąpienia nie będzie przysługiwać.</li>
              <li>Jeżeli Sklep nie stosuje mechanizmu wskazanego w ust. 3 i dostarczenie nie rozpoczęło się, Klient może odstąpić od Umowy na zasadach ogólnych.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">8. Reklamacje i zgodność z umową</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Sprzedawca odpowiada za zgodność Produktu z Umową zgodnie z obowiązującymi przepisami, w szczególności w odniesieniu do Konsumentów oraz Przedsiębiorców na prawach konsumenta.</li>
              <li>Reklamacje można składać mailowo na adres: dorota.h.matula@gmail.com lub pisemnie na adres Sprzedawcy.</li>
              <li>W zgłoszeniu reklamacyjnym warto podać: imię i nazwisko, e-mail użyty przy zakupie, nazwę Produktu, opis problemu oraz oczekiwany sposób rozwiązania.</li>
              <li>Sprzedawca udzieli odpowiedzi w terminie 14 dni od otrzymania reklamacji.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">9. Zwroty płatności</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Jeżeli zwrot środków jest należny (np. uznana reklamacja lub skuteczne odstąpienie), Sprzedawca dokona zwrotu przy użyciu tej samej metody płatności, chyba że Klient zgodzi się na inne rozwiązanie.</li>
              <li>Zwrot nastąpi w terminie wynikającym z przepisów lub niezwłocznie po uzgodnieniu z Klientem.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">10. Prawa autorskie i zasady korzystania z Produktu</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Produkty stanowią utwory chronione prawem autorskim.</li>
              <li>Zakup Produktu uprawnia Klienta do korzystania z niego wyłącznie na własny użytek (licencja niewyłączna, nieprzenoszalna), chyba że opis Produktu stanowi inaczej.</li>
              <li>
                Zabronione jest w szczególności:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>udostępnianie Produktu osobom trzecim,</li>
                  <li>publikowanie w internecie,</li>
                  <li>kopiowanie i odsprzedaż,</li>
                  <li>rozpowszechnianie fragmentów wykraczające poza dozwolony użytek.</li>
                </ul>
              </li>
              <li>W razie naruszeń Sprzedawca może dochodzić roszczeń przewidzianych prawem.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">11. Opinie i treści użytkowników</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Jeżeli Sklep umożliwia dodawanie opinii, Klient zobowiązuje się do zamieszczania treści zgodnych z prawem i dobrymi obyczajami.</li>
              <li>Sprzedawca może usuwać treści naruszające prawo lub Regulamin.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">12. Dane osobowe i cookies</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Administratorem danych osobowych Klientów jest Dorota Matuła, prowadząca działalność gospodarczą pod nazwą Dorota Matuła Marketing, NIP 5213862136, ul. Bukowińska 22a/79, 02-703 Warszawa.</li>
              <li>Kontakt w sprawach prywatności: dorota.h.matula@gmail.com.</li>
              <li>Szczegółowe informacje o przetwarzaniu danych oraz plikach cookies znajdują się w <a href="/polityka-prywatnosci" className="text-brand-purple hover:text-brand-cobalt underline">Polityce prywatności</a> dostępnej na stronie Sklepu.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-brand-cobalt">13. Postanowienia końcowe</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Do Umów zawieranych w Sklepie stosuje się prawo polskie.</li>
              <li>Sprzedawca może zmienić Regulamin z ważnych przyczyn (np. zmiany przepisów, zmiany funkcjonalności Sklepu, zmiana metod płatności). Zmiany nie wpływają na zamówienia złożone przed ich wejściem w życie.</li>
              <li>W sprawach nieuregulowanych Regulaminem stosuje się odpowiednie przepisy prawa, w szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.</li>
            </ol>
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
