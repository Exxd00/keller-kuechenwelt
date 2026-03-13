import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${BUSINESS_INFO.name}. Informationen zum Schutz Ihrer personenbezogenen Daten.`,
};

export default function DatenschutzPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="keller-container py-16">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
            a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
            werden, handeln.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            {BUSINESS_INFO.name}
            <br />
            {BUSINESS_INFO.address.street}
            <br />
            {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
            <br />
            <br />
            Telefon: {BUSINESS_INFO.phone}
            <br />
            E-Mail: {BUSINESS_INFO.email}
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
            Datenverarbeitung entfällt.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
            Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
            Endgerät gespeichert werden. Sie richten auf Ihrem Rechner keinen Schaden an und
            enthalten keine Viren.
          </p>
          <p>
            Wir verwenden technisch notwendige Cookies, um unsere Website nutzerfreundlicher zu
            gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende
            Browser auch nach einem Seitenwechsel identifiziert werden kann.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Die Löschung Ihrer Daten zu verlangen</li>
            <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen</li>
            <li>Die Datenübertragbarkeit zu verlangen</li>
          </ul>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
            wenden.
          </p>

          <h2>7. Analyse-Tools und Werbung</h2>
          <p>
            Diese Website nutzt möglicherweise Analyse-Tools zur statistischen Auswertung der
            Besucherzugriffe. Nähere Informationen hierzu finden Sie in den nachfolgenden
            Erläuterungen zu den einzelnen Tools.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: März 2026
          </p>
        </div>
      </div>
    </div>
  );
}
