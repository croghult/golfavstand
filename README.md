# Golfavstånd

En mobilanpassad webbapp som visar GPS-avstånd till front, mitten och bak på greenen för varje hål på en golfbana.

## Funktioner

- Realtids-GPS med indikator för noggrannhet
- Välj bana och hål via knappar/rullgardin
- Visar avstånd till front, mitten och bak på greenen
- Egna markeringar (POI) per hål, sparade lokalt i webbläsaren
- Redigera och exportera bandata som kod
- Fungerar som PWA (kan läggas till på hemskärmen)

## Användning

Öppna `index.html` i en webbläsare (eller hosta filen på en webbserver). Tillåt platsåtkomst för att aktivera GPS-funktionen.

För att lägga till en ny bana, redigera `COURSES`-listan i `index.html` med banans koordinater.
