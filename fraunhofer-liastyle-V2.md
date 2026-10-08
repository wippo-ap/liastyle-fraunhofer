# Autorenleitfaden für fraunhofer-liastyle-V2.css

Zielgruppe: KI-basierte Content-Autoren, die LiaScript-Kurse mit diesem Stylesheet erstellen. Maßgeblich ist die Datei `fraunhofer-liastyle-V2.css`, nicht das V1-Stylesheet. Abgleich mit der offiziellen LiaScript-Dokumentation: 07.10.2026.

## 1. Grundregeln für den Content-Autor

- Schreibe gewöhnliche Inhalte als LiaScript-Markdown.
- Verwende für die unten beschriebenen Gestaltungselemente ausschließlich die vorhandenen `fh-*`-Klassen und ihre dokumentierte Struktur.
- Das Stylesheet definiert CSS-Klassen, keine neuen HTML-Tags, LiaScript-Makros oder Quiz-Funktionen. Schreibe beispielsweise `<details class="fh-accordion">`, niemals `<fh-accordion>` oder `@fh-accordion`.
- Verwende sprechende Titel, kurze Kacheltexte und tatsächlich vorhandene Linkziele und Bilddateien. Die Beispielpfade müssen zum Kurs passen.
- Erzeuge keine LiaScript-Navigation, Toolbar oder Quiz-Auswertung als eigenes HTML. Die `.lia-*`-Selektoren des CSS sind Styling-Ziele für den Interpreter; sie sind kein Katalog eigener Autorenbausteine.
- Ergänze keine Inline-Stile für Farben, Abstände oder Schriftgrößen. Das Stylesheet legt diese bereits fest.

## 2. Stylesheet einbinden

Ergänze `link:` im bestehenden Metadatenkommentar am Kursanfang. Bei gemeinsamer Ablage von CSS und Kursdatei:

```markdown
<!--
language: de
link: ./fraunhofer-liastyle-V2.css
-->

# Kurstitel

Einleitung zum Kurs.
```

Die CSS-Datei muss am referenzierten Ort erreichbar sein. Bei anderer Ablage den Pfad oder die URL anpassen. [LiaScript-Dokumentation: HTML und CSS-Einbindung](https://github.com/LiaScript/docs/blob/master/README.md#html)

## 3. Was bereits Standard ist

### 3.1 Direkt mit Markdown schreiben

Für diese Inhalte sind keine `fh-*`-Klassen erforderlich. Die Gestaltung greift automatisch auf die erzeugten HTML-Elemente.

| Inhalt | Schreibweise | Gestaltung im vorliegenden CSS |
| --- | --- | --- |
| Überschriften | `# Titel` bis `###### Titel` | Große schwarze Überschriften; H1 mit schwarzem Balken |
| Absatz | Text, getrennt durch Leerzeilen | Schwarzer Text in Arial/Helvetica |
| Hervorhebung | `**wichtig**`, `*betont*` | Normale Fettschrift/Kursivschrift |
| Aufzählung | `- Punkt` | Grüne Listenmarker |
| Nummerierte Liste | `1. Schritt` | Grüne Listenmarker |
| Link | `[Beschriftung](https://example.org)` | Grün, unterstrichen |
| Zitat | `> Zitat` | Weißer Hintergrund, grüner linker Rand |
| Trennlinie | `---` als eigener Block | Dünne graue Linie |
| Tabelle | Pipe-Tabelle mit Kopf- und Trennzeile | Grüne Kopfzeile, weiße Zellen, graue Rahmen |
| Inline-Code | Ein Wort zwischen einfachen Backticks | Monospace, grauer Hintergrund |
| Codeblock | Dreifache Backticks mit optionaler Sprache | Dunkler Hintergrund, Monospace |
| Bild | `![Beschreibung](bilder/beispiel.jpg)` | Keine eigene allgemeine Bildkomponente; Sondergestaltung nur innerhalb von Kacheln |

LiaScript-Überschriften mit `#` strukturieren Kursabschnitte. Lokale Zwischenüberschriften können in `<section>` oder `<article>` stehen. [LiaScript-Dokumentation: Struktur](https://github.com/LiaScript/docs/blob/master/README.md#structuring)

### 3.2 LiaScript-Funktionen, die nicht durch dieses CSS entstehen

Quiz, Umfragen, Multimedia, Formeln, Animationen und ausführbarer Code gehören zu LiaScript. Das CSS gestaltet unter anderem Eingabefelder und `.lia-quiz`; es implementiert deren Verhalten nicht. [Offizielle LiaScript-Dokumentation](https://github.com/LiaScript/docs/blob/master/README.md)

### 3.3 Standard-HTML und eigene Gestaltung unterscheiden

`<details>` mit `<summary>` ist bereits als Akkordeon nutzbar. Neu sind hier `.fh-accordion` und `.fh-accordion-content` als Gestaltung. [LiaScript-Dokumentation: Details & Summary](https://github.com/LiaScript/docs/blob/master/README.md#details--summary)

Ebenso sind `<div>`, `<a>`, `<span>`, `<strong>`, `<img>` und `<button>` Standard-HTML. Die unten beschriebenen Kombinationen mit `fh-*`-Klassen bilden die zusätzlichen Autorenbausteine.

## 4. HTML und Markdown kombinieren

LiaScript verarbeitet Markdown innerhalb von HTML. Trenne Markdown-Blöcke durch Leerzeilen; rücke sie nicht wie Code ein. `<lia-keep>` verhindert dort die Markdown-Verarbeitung. [LiaScript-Dokumentation: HTML](https://github.com/LiaScript/docs/blob/master/README.md#html)

Für einzelne Markdown-Blöcke stehen Klassenkommentare davor, für Inline-Elemente dahinter. [LiaScript-Dokumentation: Custom Styling](https://github.com/LiaScript/docs/blob/master/README.md#custom-styling)

```markdown
<!-- class="fh-box" -->
Ein einzelner **wichtiger Hinweis**.
```

Dieser Kommentar gestaltet nur den folgenden Block. Für mehrere Absätze den unten gezeigten HTML-Container verwenden.

## 5. Zusätzliche Autorenbausteine

### 5.1 Akkordeon: `.fh-accordion`

**Zweck:** Ergänzende Informationen, Erklärungen, FAQs oder Vertiefungen aufklappbar anbieten.

**Struktur:** `<details class="fh-accordion">` enthält zuerst `<summary>` als klickbaren Titel und danach `<div class="fh-accordion-content">` für den Inhalt. Der innere Container ist für Einrückung, Abstand und angepasste Textgrößen vorgesehen.

```markdown
<details class="fh-accordion">
<summary>Wie läuft die Weiterbildung ab?</summary>

<div class="fh-accordion-content">

Die Weiterbildung kombiniert **Selbstlernphasen** und gemeinsame Übungen.

- Bearbeite zuerst die Einführung.
- Wende das Gelernte anschließend im Praxisbeispiel an.

</div>
</details>
```

**Darstellung:** Obere graue Trennlinie, große schwarze Titelzeile, Pfeil nach rechts im geschlossenen und nach unten im geöffneten Zustand. Der letzte passende Geschwisterblock erhält zusätzlich eine untere Linie.

**Varianten und Regeln:**

- Mit `<details class="fh-accordion" open>` beginnt der Abschnitt geöffnet.
- Mehrere Akkordeons können direkt aufeinanderfolgen. Das CSS erzwingt keine gegenseitige Schließung.
- Schreibe die Pfeile nicht in den Titel; sie kommen automatisch aus dem CSS.
- Verwende das Akkordeon für Zusatzinformationen; zentrale Lernziele sollten direkt sichtbar bleiben.

### 5.2 Klickbare Kacheln: `.fh-card-grid` und `.fh-tile`

**Zweck:** Module, Themen oder weiterführende Angebote als anklickbare Übersicht darstellen.

**Vollständige Struktur:**

| Bestandteil | Element | Aufgabe |
| --- | --- | --- |
| Raster | `<div class="fh-card-grid">` | Ordnet mehrere Kacheln an |
| Kachel | `<a class="fh-tile" href="…">` | Macht die gesamte Kachel zum Link |
| Bild, optional | `<img src="…" alt="…">` | Bild am oberen Rand |
| Inhaltscontainer | `<div class="fh-tile-content">` | Innenabstand und vertikale Anordnung |
| Kurzlabel, optional | `<span class="fh-tile-label">` | Kleine grüne Großbuchstaben, z. B. Modulnummer |
| Titel | `<strong>` | Kräftiger Kacheltitel |
| Beschreibung | `<span class="fh-tile-text">` | Kleinerer grauer Beschreibungstext |
| Variante ohne Bild | zusätzliche Klasse `fh-tile-no-image` am Link | Reduzierte Mindesthöhe und angepasster Innenabstand |

```markdown
<div class="fh-card-grid">

<a class="fh-tile" href="#Einfuehrung">
<img src="bilder/einfuehrung.jpg" alt="Lernende bei einer gemeinsamen Übung">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 1</span>
<strong>Einführung</strong>
<span class="fh-tile-text">Lerne die Grundbegriffe anhand eines Praxisbeispiels kennen.</span>
</div>
</a>

<a class="fh-tile fh-tile-no-image" href="#Praxis">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 2</span>
<strong>Praxis</strong>
<span class="fh-tile-text">Übertrage das Gelernte auf eine eigene Aufgabe.</span>
</div>
</a>

</div>
```

Die Beispielziele setzen Kursabschnitte mit den Titeln `Einfuehrung` und `Praxis` voraus. LiaScript unterstützt Abschnittsnamen und Foliennummern als Linkziele; prüfe die Ziele im fertigen Kurs. [LiaScript-Dokumentation: Publishing](https://github.com/LiaScript/docs/blob/master/README.md#publishing)

**Darstellung und Regeln:**

- Das Raster passt die Spaltenzahl an die verfügbare Breite an. Bis 768 px wird es einspaltig.
- Bilder werden mit `object-fit: cover` zugeschnitten; wichtige Bildteile daher nicht direkt am Rand platzieren.
- Die Kachel hebt sich beim Überfahren leicht an und erhält einen grünen Rand sowie Schatten.
- „Mehr erfahren →“ wird automatisch unter dem Inhalt eingefügt. Diesen Text nicht zusätzlich schreiben; er lässt sich nicht über ein HTML-Attribut ändern.
- `.fh-tile-content` immer einsetzen. Das verkürzte Beispiel im CSS-Kommentar lässt diesen Container aus, obwohl dafür eigene Regeln existieren.
- Keine weiteren Links oder Buttons in den Kachellink verschachteln.
- Bei rein dekorativen Bildern `alt=""` verwenden; sonst den Bildinhalt knapp beschreiben.

### 5.3 Infobox: `.fh-box`

**Zweck:** Lernziele, Merksätze oder wichtige Informationen hervorheben.

**Darstellung:** Weißer Hintergrund und 8 px breiter grüner Rand links. Der letzte enthaltene Absatz hat keinen zusätzlichen unteren Abstand.

```markdown
<div class="fh-box">

**Lernziel**

Nach diesem Modul kannst du die wichtigsten Begriffe erklären und anwenden.

</div>
```

Die Box kann mehrere Absätze, Listen oder andere Inhalte enthalten. Für einen einzelnen Absatz genügt alternativ der Klassenkommentar aus Abschnitt 4.

### 5.4 Sanfte Infobox: `.fh-box-soft`

**Zweck:** Tipps oder begleitende Informationen mit einer zurückhaltenden Fläche hervorheben.

**Darstellung:** Transparenter grüner Hintergrund und derselbe grüne Rand links wie bei `.fh-box`.

```markdown
<div class="fh-box-soft">

**Tipp:** Halte deine Beobachtungen fest, bevor du die Musterlösung öffnest.

</div>
```

Die Klasse funktioniert eigenständig. Nicht mit `.fh-box` kombinieren; wähle eine der beiden Varianten.

### 5.5 Hinweisrahmen: `.fh-note`

**Zweck:** Organisatorische Angaben, Voraussetzungen oder kurze Randbemerkungen.

**Darstellung:** Weiße Fläche mit dünnem grauem Rahmen an allen Seiten.

```markdown
<div class="fh-note">

**Voraussetzung:** Für die Übung benötigst du den bereitgestellten Beispieldatensatz.

</div>
```

`.fh-note` funktioniert eigenständig und besitzt keine besondere Hinweis- oder Warnlogik.

### 5.6 Link im Button-Stil: `.fh-button`

**Zweck:** Eine sichtbare Handlungsaufforderung für Navigation oder Downloads.

**Darstellung:** Grüner rechteckiger Button mit weißer Fettschrift; bei Hover dunkler grün.

```html
<a class="fh-button" href="material/arbeitsblatt.pdf">Arbeitsblatt öffnen</a>
```

Alternativ als LiaScript-Link mit Klassenkommentar:

```markdown
[Arbeitsblatt öffnen](material/arbeitsblatt.pdf)<!-- class="fh-button" -->
```

Für Linkziele immer `<a>` beziehungsweise den Markdown-Link verwenden. `.fh-button` kann auch auf einem `<button type="button">` stehen, aber dessen Aktion muss separat implementiert werden. Die Klasse allein erzeugt keine Aktion. Auf echten Buttons gelten zusätzlich die globalen Button-Regeln des Stylesheets, etwa Mindestmaße und größere Schrift.

### 5.7 Hero-Bereich: `.fh-hero`

**Zweck:** Eine Einleitung mit besonders hervorgehobenem Haupttitel gestalten.

**Darstellung:** Grauer Hintergrund wie die Seite, zusätzlicher vertikaler Abstand und größere H1-Schrift. Ein Bild oder eine besondere Spaltenanordnung ist nicht enthalten.

```markdown
<div class="fh-hero">
<h1>Wissen in die Praxis übertragen</h1>

Entdecke die Grundlagen und erprobe sie an einer konkreten Aufgabe.

</div>
```

Der Container ergänzt den bereits vorhandenen Kursabschnitt. Verwende ihn gezielt auf einer Start- oder Übersichtsseite und vermeide einen doppelten sichtbaren Haupttitel. Das HTML-`<h1>` im Beispiel wird von `.fh-hero h1` gestaltet und erhält den allgemeinen schwarzen H1-Balken.

### 5.8 Einfache Inhaltskarte: `.fh-card`

**Zweck:** Ein zusammengehöriges Inhaltsstück als nicht klickbare Karte absetzen, etwa ein Praxisbeispiel oder einen Arbeitsauftrag.

**Darstellung:** Weiße Fläche, dünner hellgrauer Rahmen, Innenabstand. Enthaltene H1-, H2- und H3-Überschriften haben keinen oberen Abstand; bei H1 entfällt der schwarze Balken.

```markdown
<div class="fh-card">
<h3>Praxisauftrag</h3>

Wähle einen Prozess aus deinem Arbeitsalltag und beschreibe ihn in drei Schritten.

1. Ausgangssituation benennen.
2. Vorgehen erläutern.
3. Ergebnis reflektieren.

</div>
```

Die Karte ist kein Link. Für eine komplett anklickbare Karte `.fh-tile` verwenden.

## 6. Vollständiger Katalog der eigenen CSS-Klassen

| Klasse | Typ | Verwendung |
| --- | --- | --- |
| `fh-accordion` | Eigenständiger Baustein | Am `<details>` |
| `fh-accordion-content` | Unterelement | Inhaltscontainer innerhalb des Akkordeons |
| `fh-card-grid` | Layoutcontainer | Umschließt die Kacheln |
| `fh-tile` | Eigenständiger Baustein | Am anklickbaren `<a>` |
| `fh-tile-content` | Unterelement | Inhaltscontainer innerhalb der Kachel |
| `fh-tile-label` | Unterelement | Kurzlabel innerhalb der Kachel |
| `fh-tile-text` | Unterelement | Beschreibung innerhalb der Kachel |
| `fh-tile-no-image` | Zusatzklasse | Zusammen mit `fh-tile`, wenn kein Bild vorhanden ist |
| `fh-box` | Eigenständiger Baustein | Weiße Infobox mit grünem Rand |
| `fh-box-soft` | Eigenständige Variante | Sanfte grüne Infobox |
| `fh-note` | Eigenständiger Baustein | Neutraler Hinweisrahmen |
| `fh-button` | Gestaltungsklasse | Vorzugsweise an Links |
| `fh-hero` | Layoutcontainer | Einleitung mit größerer H1 |
| `fh-card` | Eigenständiger Baustein | Nicht klickbare Inhaltskarte |

Die CSS-Variablen `--fh-*` sind Designwerte und keine Autorenklassen. Auch `:hover`, `[open]`, `::before` und `::after` sind Zustände beziehungsweise CSS-Pseudoelemente; sie werden nicht als Klassen eingetragen.

## 7. Auswahlhilfe und Prüfung vor Ausgabe

| Inhaltliche Absicht | Passender Baustein |
| --- | --- |
| Normal erklären oder aufzählen | Markdown-Absatz oder Liste |
| Ein echtes Zitat wiedergeben | Markdown-Blockquote |
| Lernziel oder Kernaussage hervorheben | `fh-box` |
| Einen Tipp ergänzen | `fh-box-soft` |
| Voraussetzungen oder Organisation nennen | `fh-note` |
| Zusatzwissen aufklappbar anbieten | `fh-accordion` |
| Mehrere Module verlinken | `fh-card-grid` mit `fh-tile` |
| Eine einzelne Aktion verlinken | `fh-button` |
| Einen Arbeitsauftrag gruppieren | `fh-card` |
| Einen Einstieg groß inszenieren | `fh-hero` |

Vor der Ausgabe prüfen:

- Sind nur vorhandene Klassen aus diesem Katalog verwendet?
- Sind alle Container geschlossen und alle Linkziele und Bildpfade gültig?
- Enthält jede Kachel `fh-tile-content` und einen aussagekräftigen Titel?
- Enthält jedes Akkordeon `<summary>` und `fh-accordion-content`?
- Werden automatisch erzeugte Pfeile und „Mehr erfahren →“ nicht verdoppelt?
- Ist gewöhnlicher Inhalt weiterhin als Markdown geschrieben?

Die Klassennamen und Gestaltungsbeschreibungen wurden am CSS abgeglichen. Die `.lia-*`-Selektoren sind nicht einzeln gegen den aktuellen Interpreter-DOM verifiziert. Beispiele und Linkziele im Zielkurs in LiaScript prüfen; dieser Leitfaden ist keine Renderprüfung.
