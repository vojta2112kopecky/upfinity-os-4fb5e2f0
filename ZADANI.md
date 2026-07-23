# ZADÁNÍ · Upfinity OS – dashboard Nejlepšího Konverzkáře

## Cíl
Nový osobní dashboard (výrazně lepší než NK Ivana dashboard), hostovaný online na GitHub Pages. Kompletní pracovní systém Konverzkáře: veškeré know-how z programu Nejlepší Konverzkář (Honza Nedvěd / INIZIO) + Vojtovy vlastní poznámky, hezky roztříděné, plus každodenní plán na 2 měsíce.

## HARD RULES
1. **Obsah DOSLOVNĚ od Honzy Nedvěda.** Texty kapitol (Zákaznický výzkum, První konverzní trychtýř, Prodejní hovor, Začátek spolupráce), akční plán po dnech, scénář obchodního telefonátu INIZIO, KDO-CO-PROČ-JAK framework, vzory reklam (základ, Blind, MODELOVÁNÍ REKLAM) se přebírají slovo od slova. Žádné parafráze.
2. **Vojtovy poznámky doslovně** (Notion 🟡 Zákaznický výzkum): openery, objections, otázky (bloky 1–5, Ondra Holoubek, Honza Nedvěd, Adamův formulář, moje otázky), calling poznámky, SMS, závěr + pitch, rámovací otázka.
3. **Nikdy em-dash („-").** Jen „–" nebo „-". Čísla číslicemi.

## UI / UX
- **Levý ovládací panel (sidebar):** logo Upfinity (mark + název), navigace sekcí, mini progress dole. Na mobilu horní lišta s vysouvacím menu.
- **Vizuální jazyk podle `upfinitywebv5_18.html`:** světlé pozadí (#faf9fb/#fff), ink #111013, gradient akcent `linear-gradient(120deg,#F100F7,#9100FD,#5900FF)`, font Nourd (display, 600/700/800, lokální woff2) + Schibsted Grotesk (body), pill tvary (radius 100px), eyebrow uppercase labely, karty radius 18–24 px, fialové stíny `rgba(145,0,253,.14–.30)`, reveal animace při scrollu, floaty logo, grad-text zvýraznění v nadpisech.
- Plně responzivní, čeština, rychlé (statické, bez frameworku).

## Sekce (sidebar)
1. **Přehled** – hero s logem, progress ring (hotové dny / 60), milníky fází, „dnešní krok" (první nehotový den), rychlá navigace.
2. **Plán 60 dní** – každodenní plán na 2 měsíce. Týdny 1–7 doslovně dle akčního plánu Konverzkáře (úkol + „Předložíte na Slack"), Týden 8 = doručení služby dle kapitoly „Začátek spolupráce". Checkbox u každého dne, progress, localStorage.
3. **Zákaznický výzkum** – kapitola doslovně (ChatGPT výzkum kroky 1–4, volání živým lidem, Záznamník, otevírací otázky).
4. **První konverzní trychtýř** – kapitola doslovně (kroky 1–5, šablony, Canva/Fiverr, vztahové video, e-book, 5 e-mailů).
5. **Reklamy (KDO-CO-PROČ-JAK)** – framework doslovně + příklad „Finanční poradce pro učitele" + „Kdo co proč jak základ" + Blind šablona + MODELOVÁNÍ REKLAM (Dream English, NEMANAHI) + technika na natáčení.
6. **Prodejní hovor** – kapitola (Calendly, ceny, garance) + celý INIZIO scénář obchodního telefonátu (části 01–12, ticho, close, S čím se nespokojíme, Jak na námitky, kouzelná formulka) doslovně.
7. **Doručení služby** – „Začátek spolupráce a představení" doslovně (faktura, obchodní podmínky, představení 4 provázky, zaúkolování A–D, plán 1.–5. týden).
8. **Moje poznámky** – Vojtovy openery, objections, otázkové banky, calling poznámky, SMS, pitch + rámovací otázka.
9. **Zdroje** – členská sekce, Drive scénáře, šablony, živá setkání (termíny + program doslovně).

## Technika
- Statický web: `index.html` + `styles.css` + `content.js` (veškerý obsah data-driven) + `app.js` (router, checkboxy, progress, reveal). Fonty a logo v `assets/`.
- Postup dne se ukládá do `localStorage` (jen Vojta, žádný backend).
- Deploy: GitHub repo (public, náhodný suffix) + GitHub Pages z main. ⛔ Nikdy FTP Elody.

## Akceptační kritéria
- Sidebar vlevo, všech 9 sekcí plných obsahu, 0 placeholderů.
- Plán má ~60 dní v 8 týdnech, každý den checkbox, progress se propisuje na Přehled.
- Texty Honzy Nedvěda 1:1 se zdroji (kontrola proti exportům v `txt/`).
- Vizuál jednoznačně „Upfinity": gradient, Nourd, pill jazyk, světlý podklad.
- Live URL na GitHub Pages funguje bez chyb v konzoli.
