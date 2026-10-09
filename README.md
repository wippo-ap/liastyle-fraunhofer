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
