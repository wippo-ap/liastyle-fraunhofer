# Lokale CSS-Vorschau für LiaScript

Ein kleiner Testkurs mit dem echten LiaScript-Interpreter und dem offiziellen [LiaScript-DevServer](https://github.com/LiaScript/LiaScript-DevServer). Kein Build und kein GitHub-Push nötig.

## Starten

Voraussetzung: Node.js mit npm.

Einmal im Projektordner installieren:

```sh
npm install
```

Danach die Vorschau starten:

```sh
npm run dev
```

Im Browser öffnen:

[Lokale LiaScript-Vorschau](http://localhost:3000/liascript/index.html?http://localhost:3000/preview.md)

Das Terminal bleibt während der Arbeit geöffnet. Mit `Ctrl+C` beendest du den Server.

## CSS bearbeiten

1. `fraunhofer-liastyle-V2.css` bearbeiten und speichern.
2. Die Vorschau aktualisiert sich durch den Live-Modus automatisch. Falls der Browser eine Änderung noch nicht zeigt, die Seite neu laden (`Cmd+Shift+R` auf dem Mac).
3. Im Testkurs Typografie, Boxen, Akkordeons, Kacheln, Hero und Quizze prüfen. Auch eine schmale Fensterbreite, Hover und Tastaturfokus ausprobieren.

`preview.md` bindet die vorhandene CSS-Datei über `link:` direkt ein; es gibt keine zweite CSS-Kopie. Zum Vergleich mit V1 dort den Dateinamen ändern. Weitere eigene Testbeispiele kannst du direkt in `preview.md` ergänzen.

Die erste Verwendung und externe LiaScript-Funktionen können eine Internetverbindung benötigen. Änderungen bleiben lokal, bis du sie selbst commitest und pushst.

## Inhalte mit einem Chatbot gestalten

Gib deinem Chatbot diese README und möglichst auch `fraunhofer-liastyle-V2.css` zusammen mit deinem Kursinhalt. Die folgenden Klassen sind fertige Gestaltungsbausteine: Du beschreibst den gewünschten Zweck, der Chatbot setzt die passenden Klassen in deinen LiaScript-Text ein.

Diesen Auftrag kannst du kopieren und um deinen Inhalt ergänzen:

> Gestalte den folgenden Inhalt als LiaScript-Kurs mit dem vorhandenen Stylesheet `fraunhofer-liastyle-V2.css`. Verwende die in dieser README beschriebenen Klassen und Strukturen. Binde das Stylesheet im Metadatenkommentar über `link: ./fraunhofer-liastyle-V2.css` ein; ergänze bei einem bestehenden Kurs dessen Metadaten. Verwende normale Markdown-Syntax für Fließtext, Listen, Tabellen und Zitate. Setze HTML für die Gestaltungsbausteine ein und lasse Leerzeilen zwischen HTML-Tags und Markdown-Inhalten. Erfinde keine CSS-Klassen. Verwende echte LiaScript-Syntax für Quizze. Übernimm vorhandene Linkziele und Bildpfade; kennzeichne fehlende Angaben als Platzhalter. Gib den fertigen Kurs als kopierbaren Markdown-Code aus. Mein Inhalt: …

Der relative CSS-Pfad setzt voraus, dass Kursdatei und Stylesheet im selben Ordner liegen. Die Datei `preview.md` zeigt alle eigenen `fh-`-Klassen im Einsatz.

### Welche Klasse passt zu welchem Zweck?

| Wunsch | Klasse und Wirkung | Beispiel für einen Chatbot-Auftrag |
| --- | --- | --- |
| Lernziele oder Kernaussage hervorheben | `fh-box`: weiße Box mit grünem Balken links und Innenabstand. | „Setze die Lernziele in eine Infobox mit `fh-box`. “ |
| Einen Tipp hervorheben | `fh-box-soft`: zartgrüne Box mit grünem Balken links. | „Hebe diesen Praxistipp mit `fh-box-soft` hervor.“ |
| Voraussetzungen oder einen Hinweis zeigen | `fh-note`: weiße Box mit dünnem grauem Rahmen. | „Setze die Voraussetzungen in einen Hinweis mit `fh-note`. “ |
| Einen Arbeitsauftrag als Karte zeigen | `fh-card`: weiße Inhaltskarte mit hellem Rahmen; Überschriften ohne oberen Zusatzabstand, H1 ohne schwarzen Balken. | „Gestalte den Praxisauftrag als `fh-card` mit Überschrift und Schrittliste.“ |
| Zusatzwissen aufklappbar machen | `fh-accordion` auf `<details>` und `fh-accordion-content` für den Inhalt: kräftiger Titel, Trennlinien und eingerückter Inhalt auf breiten Bildschirmen. | „Erstelle drei FAQ-Akkordeons mit `fh-accordion` und `fh-accordion-content`. Öffne das erste anfangs mit `open`. “ |
| Mehrere Module als Übersicht zeigen | `fh-card-grid`: Raster für Kacheln, auf schmalen Bildschirmen einspaltig. | „Ordne die drei Modulkacheln in einem `fh-card-grid` an.“ |
| Ein Modul als Ganzes verlinken | `fh-tile` auf `<a>`: klickbare Kachel mit Rahmen, leichter Bewegung und Schatten beim Hover; ergänzt „Mehr erfahren →“ automatisch. | „Erstelle pro Modul eine verlinkte `fh-tile` mit Bild, Titel und Kurzbeschreibung.“ |
| Eine Kachel ohne Bild verwenden | `fh-tile-no-image` zusätzlich zu `fh-tile`: geringere Mindesthöhe und angepasster Textabstand; das Bild im HTML weglassen. | „Erstelle die Modulkacheln ohne Bilder mit `class="fh-tile fh-tile-no-image"`. “ |
| Texte innerhalb einer Kachel anordnen | `fh-tile-content`: innerer Container mit Abständen und vertikaler Anordnung. | „Umschließe die Texte jeder Kachel mit `fh-tile-content`. “ |
| Eine Modulnummer oder Kategorie anzeigen | `fh-tile-label`: kleine, kräftige grüne Beschriftung in Großbuchstaben. | „Setze ‚Modul 1‘ als `fh-tile-label` über den Titel.“ |
| Eine Kachel kurz beschreiben | `fh-tile-text`: kleinerer Beschreibungstext in dunklem Grau, nach unten ausgerichtet. | „Ergänze in jeder Kachel einen Satz als `fh-tile-text`. “ |
| Einen Link als Handlungsaufforderung zeigen | `fh-button`: grüner Button mit weißer Schrift, dunkler beim Hover. | „Füge einen Link ‚Zur Übung‘ mit `fh-button` und meinem Linkziel ein.“ |
| Eine Quizfrage optisch hervorheben | `fh-question`: fette Schrift und größerer Abstand oberhalb des Frageabsatzes. | „Setze direkt vor jeden Frageabsatz den Kommentar `<!-- class="fh-question" -->`. “ |
| Eine große Einstiegsfläche gestalten | `fh-hero`: Einstiegsbereich mit H1, H2 oder H3 in Markdown-Größe und Strich darunter. | „Erstelle einen `fh-hero` mit H1, kurzem Einleitungstext und einem Link mit `fh-button`. “ |

Die Klassen gestalten die Darstellung. Das Aufklappen kommt vom HTML-Element `<details>`, das Linkziel aus `href` und die Auswertung eines Quiz aus LiaScript. `fh-card` ist eine Inhaltskarte; für eine vollständig verlinkte Kachel verwende `fh-tile`.

### Kopierbare Bausteine

**Infobox, Tipp, Hinweis oder Inhaltskarte:** Im folgenden Muster kannst du `fh-box` durch `fh-box-soft`, `fh-note` oder `fh-card` ersetzen. Die Varianten benötigen keine zusätzliche Basisklasse.

```markdown
<div class="fh-box">

**Deine Lernziele**

- Den Begriff erklären.
- Ein eigenes Beispiel entwickeln.

</div>
```

**Akkordeon:** Der Titel gehört in `<summary>`, der Inhalt in `fh-accordion-content`. Für einen anfangs geöffneten Abschnitt ergänze `open` am `<details>`-Tag.

```markdown
<details class="fh-accordion">
<summary>Was brauche ich für die Übung?</summary>

<div class="fh-accordion-content">

Du benötigst **einen Browser** und ein Beispiel aus deinem Arbeitsalltag.

</div>
</details>
```

**Modulübersicht:** Ersetze die Platzhalter für Linkziele und Bildpfad. Verwende für Kursabschnitte die passenden LiaScript-Linkziele deines Kurses. Die erste Kachel enthält ein Bild, die zweite zeigt die Variante ohne Bild.

```html
<div class="fh-card-grid">

<a class="fh-tile" href="LINKZIEL_MODUL_1">
<img src="PFAD_ZUM_BILD" alt="Beschreibung des Bildinhalts">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 1</span>
<strong>Grundlagen</strong>
<span class="fh-tile-text">Lerne die wichtigsten Begriffe kennen.</span>
</div>
</a>

<a class="fh-tile fh-tile-no-image" href="LINKZIEL_MODUL_2">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 2</span>
<strong>Praxis</strong>
<span class="fh-tile-text">Wende dein Wissen auf ein Beispiel an.</span>
</div>
</a>

</div>
```

Der Kacheltitel erhält sein Aussehen über `<strong>` innerhalb von `fh-tile`; eine eigene Titelklasse ist nicht nötig. Bilder werden auf eine feste Höhe zugeschnitten. „Mehr erfahren →“ kommt aus dem CSS und muss nicht als Text ergänzt werden.

**Einstieg mit Button:** Ersetze das Linkziel durch dein tatsächliches Ziel.

```html
<div class="fh-hero">
<h1>Wissen in die Praxis übertragen</h1>
<p>Erarbeite die Grundlagen und probiere sie selbst aus.</p>
<a class="fh-button" href="LINKZIEL_ZUR_UEBUNG">Jetzt ausprobieren</a>
</div>
```

**Weitere Hero-Vorlagen:** H1 entspricht der normalen Markdown-H1. H2 und H3 sind kleiner; alle drei haben einen schwarzen Strich darunter.

```html
<div class="fh-hero">
<h2>Formulierungsübung</h2>
<p>Formuliere eine passende Antwort.</p>
</div>
```

```html
<div class="fh-hero">
<h3>Einzelne Formulierungen verbessern</h3>
<p>Überarbeite die folgenden Beispiele.</p>
</div>
```

**Quizfrage:** Der Kommentar steht unmittelbar vor dem Frageabsatz. `fh-question` gestaltet nur die Frage; die Antwortauswahl entsteht durch die nachfolgende Quizsyntax.

```markdown
<!-- class="fh-question" -->
Welche Farbe wird als Akzent verwendet?

[( )] Blau
[(X)] Grün
[( )] Orange
```

### Was wird automatisch gestaltet?

Für Überschriften, Fließtext, Listen, Links, Zitate, Trennlinien, Tabellen und Code genügt normale Markdown-Syntax. Das CSS sorgt unter anderem für Arial-Schrift, grüne Akzente, den schwarzen Balken unter H1, grüne Tabellenköpfe und dunkle Codeblöcke. Eingabefelder bekommen Rahmen und einen grünen Fokusrahmen.

Die folgenden `lia-`-Klassen sind Selektoren für die von LiaScript erzeugte Oberfläche. Du musst sie beim Schreiben eines Kurses nicht selbst vergeben. Welche Regeln greifen, hängt davon ab, welche Elemente die verwendete LiaScript-Version erzeugt.

| Klassen im Stylesheet | Aufgabe |
| --- | --- |
| `lia-slide`, `lia-view`, `lia-main`, `lia-markdown` | Grundfarben und Schrift; Folienabstände und Inhaltsbreite. |
| `lia-slide__content`, `lia-slide-content` | Zentrierter Inhaltsbereich mit maximaler Breite von 1180 px. |
| `lia-h1`, `lia-h2`, `lia-h3` | Gestaltung der Überschriften, zusätzlich zu den HTML-Überschriften. |
| `lia-p`, `lia-list`, `lia-link` | Fließtext, Listen und Links. |
| `lia-toc`, `lia-search`, `lia-toc-search`, `lia-toc__item`, `lia-toc__link`, `lia-separator` | Kompakte linke Navigation, Suchfeld, Einträge und Trennlinien. |
| `lia-footer`, `lia-slide-footer`, `lia-progress`, `lia-slide__nav`, `lia-pagination__content` | Grüner Hintergrund und weiße Schrift für die untere Navigation; angepasste Buttons. |
| `lia-quote`, `lia-code` | Gestaltung von Zitaten und Schrift für Code. |
| `lia-input`, `lia-quiz` | Eingabefelder mit Fokusdarstellung und Quizcontainer mit grünem Rahmen. |
| `lia-paragraph` | Technische Korrektur für von LiaScript erzeugte Absatz-Wrapper direkt im Kachelraster, damit die Kacheln korrekt angeordnet werden. |
| `icon` | Wird in Teilen der Navigationsregeln ausgenommen, damit Icons nicht wie normaler Navigationstext behandelt werden; kein Inhaltsbaustein. |

Bei Bildschirmbreiten bis 1024 px und bis 768 px passt das CSS unter anderem Folienabstände, Schriftgrößen und Kachelraster an. Dafür sind keine zusätzlichen Klassen nötig. Farben und Schriften werden zentral über CSS-Variablen wie `--fh-green` und `--fh-font` festgelegt; diese Variablen sind keine Klassen.
