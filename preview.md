<!--
author: CSS-Test
language: de
link: ./fraunhofer-liastyle-V2.css
-->

# CSS-Vorschau

Dieser Testkurs lädt **fraunhofer-liastyle-V2.css direkt aus deinem lokalen Projekt**. Bearbeite das CSS und speichere die Datei, um die Änderungen in der Vorschau zu sehen.

<div class="fh-box">

**Prüfe deine Änderungen**

Gehe die Abschnitte über die LiaScript-Navigation durch. Prüfe auch Hover, Tastaturfokus und eine schmale Fensterbreite. Die Darstellungsmodi kannst du in LiaScript wechseln.

</div>

<div class="fh-note">

Für einen Vergleich mit V1 ändere oben im Metadatenkommentar die Zeile `link:` auf `./fraunhofer-liastyle-V1.css`.

</div>

## Typografie

Ein normaler Absatz mit **fetter Schrift**, *kursiver Schrift*, einem [Link zur LiaScript-Dokumentation](https://liascript.github.io/) und `Inline-Code`. Dieser etwas längere Text hilft dabei, Zeilenhöhe, Zeilenlänge und Abstände im tatsächlichen Kurslayout einzuschätzen.

<section>

### Zwischenüberschrift H3

Ein kurzer Absatz unter einer Zwischenüberschrift.

#### Zwischenüberschrift H4

##### Zwischenüberschrift H5

###### Zwischenüberschrift H6

</section>

- Grundlagen verstehen
- Ein Beispiel bearbeiten
- Das Ergebnis reflektieren

1. Ausgangslage beschreiben
2. Vorgehen festlegen
3. Ergebnis prüfen

> Wissen wird besonders nützlich, wenn wir es in der Praxis anwenden.

---

| Baustein | Zweck | Status |
| --- | --- | --- |
| Infobox | Lernziele hervorheben | Bereit |
| Akkordeon | Zusatzwissen aufklappen | Bereit |
| Kachel | Module verlinken | Bereit |

```css
:root {
  --fh-green: #179c7d;
  --fh-font: Arial, Helvetica, sans-serif;
}
```

## Boxen und Karten

<div class="fh-box">

**Lernziel**

Nach diesem Modul kannst du die wichtigsten Begriffe erklären.

- Grundbegriffe nennen
- Ein eigenes Beispiel formulieren

</div>

<div class="fh-box-soft">

**Tipp:** Notiere deine Beobachtungen, bevor du die Musterlösung öffnest.

</div>

<div class="fh-note">

**Voraussetzung:** Für die Übung benötigst du nur deinen Browser.

</div>

<div class="fh-card">

<h3>Praxisauftrag</h3>

Beschreibe einen Prozess aus deinem Arbeitsalltag in drei Schritten.

1. Ausgangssituation benennen.
2. Vorgehen erläutern.
3. Ergebnis reflektieren.

</div>

<a class="fh-button" href="#Interaktion">Zur Übung</a>

## Akkordeons

<details class="fh-accordion">

<summary>Wie läuft die Weiterbildung ab?</summary>

<div class="fh-accordion-content">

Die Weiterbildung kombiniert **Selbstlernphasen** und gemeinsame Übungen.

- Bearbeite zuerst die Einführung.
- Wende das Gelernte im Praxisbeispiel an.

</div>

</details>

<details class="fh-accordion" open>

<summary>Dieser Abschnitt beginnt geöffnet</summary>

<div class="fh-accordion-content">

Prüfe den Abstand zum Titel, die Schriftgröße und die Trennlinien. Klappe beide Akkordeons auf und zu.

</div>

</details>

## Kacheln

<div class="fh-card-grid">

<a class="fh-tile" href="#Typografie">
<img src="preview-assets/module.svg" alt="Abstraktes grünes Muster">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 1</span>
<strong>Grundlagen</strong>
<span class="fh-tile-text">Typografie, Listen und Tabellen im Kurslayout prüfen.</span>
</div>
</a>

<a class="fh-tile fh-tile-no-image" href="#Boxen-und-Karten">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 2</span>
<strong>Inhalte gestalten</strong>
<span class="fh-tile-text">Eine Kachel ohne Bild mit etwas längerem Beschreibungstext, um den Umbruch und die Höhe zu vergleichen.</span>
</div>
</a>

<a class="fh-tile fh-tile-no-image" href="#Interaktion">
<div class="fh-tile-content">
<span class="fh-tile-label">Modul 3</span>
<strong>Praxis</strong>
<span class="fh-tile-text">Quiz und Eingabefelder ausprobieren.</span>
</div>
</a>

</div>

## Hero

<div class="fh-hero">

<h1>Wissen in die Praxis übertragen</h1>

Entdecke die Grundlagen und erprobe sie an einer konkreten Aufgabe.

<a class="fh-button" href="#Interaktion">Jetzt ausprobieren</a>

</div>

## Interaktion

Hier werden echte LiaScript-Quizze verwendet. Prüfe die Eingabefelder, Auswahlzustände, Buttons und Rückmeldungen mit richtigen und falschen Antworten.

<!-- class="fh-question" -->
Welche Farbe ist im Stylesheet als Akzent vorgesehen?

[( )] Blau
[(X)] Grün
[( )] Orange

<!-- class="fh-question" -->
Welche Bausteine sind im Stylesheet vorhanden?

[[X]] Akkordeon
[[X]] Infobox
[[ ]] Videokonferenz

<!-- class="fh-question" -->
Ergänze den Namen der Sprache: Lia____

[[Script]]

## Lange Inhalte

<div class="fh-box">

**Ein längerer Text zum Prüfen von Umbrüchen**

Wenn Inhalte mehr Platz benötigen, müssen Abstände und Zeilenumbrüche weiterhin gut lesbar bleiben. Dieser Abschnitt eignet sich besonders für die Vorschau in einem schmalen Browserfenster und für die Prüfung der Navigation bei längerem Inhalt.

</div>

| Element | Beschreibung mit längerem Text | Beispiel |
| --- | --- | --- |
| Navigation | Ein längerer Abschnittstitel soll auch bei geringer Breite gut lesbar bleiben. | Weiterbildung und Praxistransfer |
| Inhalt | Mehrere Sätze in einer Tabellenzelle zeigen, wie das Layout mit mehr Text umgeht. | Dokumentation und Reflexion |
| Code | Lange Bezeichner helfen beim Prüfen des horizontalen Platzbedarfs. | `fraunhofer-liastyle-V2.css` |

```text
Eine bewusst lange Codezeile zum Prüfen des horizontalen Scrollens: fraunhofer-liastyle-V2.css / Weiterbildung / Grundlagen / Praxistransfer / Reflexion / Dokumentation
```
