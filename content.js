/* Upfinity OS · obsah. HARD RULE: know-how texty DOSLOVNĚ (Vojta Kopecký / Nejlepší agentura). */
window.UPF = {};

/* ===================== PLÁN (hromadné bloky, role Hanuš / Alex) ===================== */
UPF.planIntro = "Změňte svůj příběh: Přestaňte si říkat “To nemůžu.” a začněte si říkat “To můžu.”\nPoužijte bolest a potěšení: Bolest je lenost a vykroucení se, slast je splněný úkol.\nVýzkum máte za sebou. Teď do konce týdne vykopnout funnel – každý úkol má svého člověka, ať se nečeká na nikoho zbytečně.";

UPF.owners = {
 H:{name:"Hanuš", ico:"🎤", role:"copy · scénáře · natáčení (tvář)"},
 A:{name:"Alex", ico:"🔧", role:"e-booky · technika · napojení"},
 HA:{name:"Spolu", ico:"🤝", role:"kontrola a start"}
};

UPF.blocks = [
 {id:"b1", ico:"✅", name:"Blok 1 · Nika a zákaznický výzkum", sub:"Hotovo – máte za sebou. Odškrtněte a jedeme dál.", tasks:[
  {id:"t1", owner:"HA", task:"Vyberte si niku ze seznamu v kapitole Zákaznický výzkum a proveďte 5 výzkumných hovorů na vaši niku.\nOpener: “Dobrý den, [jméno], já jsem vás našel na webových stránkách, který si myslím, že jsou moc hezký.., nebo takhle, máte tam moc hezký fotky, na těch jste asi vy..” (celý opener v kapitole Zákaznický výzkum)", submit:"Vybraná nika + 5 nahraných hovorů do WhatsAppu", pb:"vyzkum"},
  {id:"t2", owner:"HA", task:"20x hloubkový 20minutový rozhovor s lidmi z vaší niky.", submit:"Klíčová slova, klíčové fráze, sny a bolesti do WhatsAppu", pb:"vyzkum"},
  {id:"t3", owner:"HA", task:"Prostudujte si kapitolu “Zákaznický výzkum”. Podle zadání proveďte výzkum skrze ChatGPT a vytvořte dle zadání také první titulky.", submit:"Titulky do WhatsAppu", pb:"vyzkum"},
 ]},

 {id:"b2", ico:"🧲", name:"Blok 2 · Konverzní stránka", sub:"Hanuš dodá texty → Alex postaví a napojí. Start hned.", tasks:[
  {id:"t4", owner:"H", task:"Vyber z výzkumu vítězný titulek (udičku) a napiš k němu texty stránky: podnadpis, 3–5 odrážek “co se dozvíte” a text tlačítka.\nVšechno jazykem zákazníka – doslovná slova, fráze, sny a bolesti z hovorů. Nic nevymýšlej.", submit:"Odkaz na dokument s texty do WhatsAppu", pb:"trychtyr"},
  {id:"t5", owner:"A", dep:"Až Hanuš dodá texty (úkol 1)", task:"Prostuduj kapitolu “První konverzní trychtýř”. Pomocí PROMPTU 1 nech Clauda vytvořit konverzní stránku, vlož do ní Hanušovy texty a nasaď ji na doménu.", submit:"Odkaz na živou konverzní stránku", pb:"trychtyr"},
  {id:"t6", owner:"A", task:"Facebook Pixel + Conversions API + Make webhook podle návodu v kapitole. Otestuj, že se testovací lead propíše do databáze a událost dorazí do Events Manageru.", submit:"Snímek testovací události v Events Manageru", pb:"trychtyr"},
 ]},

 {id:"b3", ico:"📘", name:"Blok 3 · E-book (magnet)", sub:"Obsah = scénář vztahového videa v textu. Hanuš píše, Alex sází.", tasks:[
  {id:"t7", owner:"H", task:"Napiš obsah e-booku. Je to ten samý obsah jako scénář vztahového videa, jen v textové formě – proto si na scénáři dej záležet.", submit:"Odkaz na dokument s obsahem e-booku", pb:"trychtyr"},
  {id:"t8", owner:"A", task:"Vytvoř cover e-booku pomocí PROMPTU 2 z kapitoly První konverzní trychtýř.", submit:"Náhled coveru do WhatsAppu", pb:"trychtyr"},
  {id:"t9", owner:"A", dep:"Až Hanuš dodá obsah (úkol 1)", task:"Vysázej e-book do PDF, nasaď cover a napoj na stránku – po vyplnění formuláře musí PDF přijít člověku e-mailem. Otestuj na vlastní adrese.", submit:"PDF e-booku + potvrzení, že test dorazil", pb:"trychtyr"},
 ]},

 {id:"b4", ico:"🎥", name:"Blok 4 · Vztahové video", sub:"Hanuš je tvář: scénář a natáčení. Alex nasadí.", tasks:[
  {id:"t10", owner:"H", task:"Přepiš celý scénář vztahového videa podle vzoru (všech 5 stran).", submit:"Odkaz na upravený dokument", pb:"trychtyr"},
  {id:"t11", owner:"H", task:"Zkus si natočit nanečisto vztahové video na mobil.", submit:"Poslat video do WhatsAppu", pb:"trychtyr"},
  {id:"t12", owner:"H", task:"Natočit vztahové video na ostro. (Na šířku)", submit:"Poslat video do WhatsAppu", pb:"trychtyr"},
  {id:"t13", owner:"A", dep:"Až Hanuš natočí načisto (úkol 3)", task:"Nahraj video na hosting a vlož ho do děkovací stránky. Zkontroluj, že se přehraje i na mobilu.", submit:"Odkaz na děkovací stránku s videem", pb:"trychtyr"},
 ]},

 {id:"b5", ico:"🎬", name:"Blok 5 · Reklamy a spuštění", sub:"Alex připraví účet, Hanuš text a videa, Alex spustí.", tasks:[
  {id:"t14", owner:"A", task:"Facebook – založení a první nastavení účtu (Business Manager + reklamní účet). Napoj na něj Pixel a Conversions API podle návodu v kapitole První konverzní trychtýř.", submit:"Poslat snímek, že je založeno", pb:"trychtyr"},
  {id:"t15", owner:"H", task:"Text reklamy (KDO, CO, PROČ, JAK) – šablona a Standův tahák, který si můžeš přepsat pro svou niku, je v kapitole Reklamy.", submit:"Poslat odkaz na text", pb:"reklamy"},
  {id:"t16", owner:"H", task:"Tento text reklamy následně natočit ve třech stejných variantách. (Na výšku)", submit:"Poslat videa reklam", pb:"reklamy"},
  {id:"t17", owner:"A", dep:"Až Hanuš dodá text a videa (úkoly 2 a 3)", task:"Založit kampaň a vložit text + videa. Zkontroluj cílení, rozpočet a že kampaň měří správnou konverzi.", submit:"Snímek obrazovky kampaně", pb:"reklamy"},
  {id:"t18", owner:"A", task:"Spustit reklamy :-)", submit:"Snímek obrazovky", pb:"reklamy"},
 ]},

 {id:"b6", ico:"✉️", name:"Blok 6 · Vztahové e-maily", sub:"Hanuš píše, Alex napojuje sekvenci.", tasks:[
  {id:"t19", owner:"H", task:"Přepsání všech šesti vztahových e-mailů podle vzoru.\n(Klidně po jednom. Hotové je až všech 6.)", submit:"Odkaz na dokument s texty", pb:"trychtyr"},
  {id:"t20", owner:"A", dep:"Až Hanuš dodá texty (úkol 1)", task:"Nahraj e-maily do mailingového nástroje jako automatickou sekvenci a otestuj doručení na vlastní adresu (i do spamu).", submit:"Snímek nastavené sekvence + potvrzení testu", pb:"trychtyr"},
 ]},

 {id:"b7", ico:"🚀", name:"Blok 7 · Kontrola a START", sub:"Tohle projedete spolu, než pustíte peníze do reklam.", tasks:[
  {id:"t21", owner:"HA", task:"Proklikejte celý funnel jako zákazník: reklama → konverzní stránka → e-book do mailu → děkovací video → první vztahový e-mail. Na mobilu i na počítači.", submit:"Potvrzení, že celá cesta funguje", pb:"trychtyr"},
  {id:"t22", owner:"HA", task:"Ověřte měření: lead se propsal do databáze, událost dorazila do Events Manageru přes Pixel i Conversions API. Teprve pak škálujte rozpočet.", submit:"Snímek události v Events Manageru", pb:"trychtyr"},
 ]},

 {id:"b8", ico:"📈", name:"Blok 8 · Optimalizace a rámovací hovory", sub:"Po spuštění – nové kreativy, čísla, první hovory.", tasks:[
  {id:"t23", owner:"H", task:"Příprava nových reklam KDO, CO, PROČ, JAK - alespoň 2 nová videa (Může být stejný text, ale s jinou udičkou. Tj. první větou.)", submit:"Videa reklam", pb:"reklamy"},
  {id:"t24", owner:"A", task:"Příprava statistik pro společné setkání:\nKolik bylo utraceno?\nKolik přišlo leadů?\nKolik bylo telefonních čísel?\nKolik zamluvených konzultací?\nKolik proběhlo prodejních hovorů?", submit:"Soupis statistik do chatu", pb:""},
  {id:"t25", owner:"H", task:"Čtyři rámovací hovory podle scénáře.", submit:"Záznamy hovorů", pb:"prodej"},
  {id:"t26", owner:"A", dep:"Podle toho, co zazní v rámovacích hovorech", task:"Vytvoření A/B jednoho testu nadpisů na konverzní stránce podle informací z rámovacích hovorů.", submit:"Snímek obrazovky nového nadpisu.", pb:"trychtyr"},
 ]},

 {id:"b9", ico:"📞", name:"Blok 9 · Prodej", sub:"Hanuš volá, Alex hlídá čísla.", tasks:[
  {id:"t27", owner:"A", task:"Aktualizování statistik pro společné setkání:\nKolik bylo utraceno?\nKolik přišlo leadů?\nKolik bylo telefonních čísel?\nKolik zamluvených konzultací?\nKolik proběhlo prodejních hovorů?", submit:"Soupis statistik do chatu", pb:""},
  {id:"t28", owner:"H", task:"Prodejní hovory podle scénáře (dle rezervací v Calendly).", submit:"Záznamy hovorů do WhatsAppu", pb:"prodej"},
 ]},

 {id:"b10", ico:"🤝", name:"Blok 10 · Doručení služby", sub:"Kroky doslovně z kapitoly “Začátek spolupráce a představení”.", tasks:[
  {id:"t29", owner:"HA", task:"Zaslat mu fakturu za vaše služby (začínáte pracovat po jejím uhrazení, ne dřív).", submit:"Uhrazená faktura", pb:"doruceni"},
  {id:"t30", owner:"HA", task:"Spolu s fakturou poslat k podpisu obchodní podmínky. Spolupráce vašeho typu má mít jasně stanovená pravidla.", submit:"Podepsané podmínky", pb:"doruceni"},
  {id:"t31", owner:"H", task:"Představení podle scénáře. Po uhrazení platby se s klientem spojíte v prvním pracovním hovoru.", submit:"Proběhlý první pracovní hovor", pb:"doruceni"},
  {id:"t32", owner:"H", task:"Zaúkolujete svého zákazníka. Pro rychlé zahájení prací budete potřebovat podklady A-D.", submit:"Podklady A-D od klienta", pb:"doruceni"},
  {id:"t33", owner:"HA", task:"Dáte klientovi plán. Lidé milují plány a jízdní řády. Bez plánu vzniká nejistota.", submit:"Odeslaný plán klientovi", pb:"doruceni"},
 ]},

 {id:"b11", ico:"🏁", name:"Blok 11 · Práce pro klienta", sub:"Plán doslovně z kapitoly “Dejte klientovi plán”.", tasks:[
  {id:"t34", owner:"HA", task:"1. týden: Zákaznický výzkum a návrh konverzního trychtýře v PPT.", submit:"Návrh trychtýře", pb:"doruceni"},
  {id:"t35", owner:"A", task:"2. týden: Grafický návrh konverzní stránky a iterace na základě konzultace.", submit:"Grafický návrh", pb:"doruceni"},
  {id:"t36", owner:"A", task:"3. týden: Návrh a spuštění prvních Facebook reklam s rozpočtem 100-200 Kč denně.", submit:"Spuštěné reklamy", pb:"doruceni"},
  {id:"t37", owner:"A", task:"4. týden: Optimalizace reklam a první A/B testy klíčových proměnných.", submit:"A/B testy", pb:"doruceni"},
  {id:"t38", owner:"HA", task:"5. týden: REPORT: Vyhodnocení prvních výsledků a návrh plánu na další období.", submit:"Report klientovi", pb:"doruceni"},
 ]},
];

/* fáze / milníky (indexy bloků, 0-based) */
UPF.milestones = [
 {label:"Zákaznický výzkum", blocks:[0]},
 {label:"Stránka + e-book", blocks:[1,2]},
 {label:"Video + reklamy", blocks:[3,4]},
 {label:"E-maily + START", blocks:[5,6]},
 {label:"Optimalizace + prodej", blocks:[7,8]},
 {label:"Doručení služby", blocks:[9,10]},
];

/* všechny kapitoly odemčené – postupujete vlastním tempem */
UPF.unlocks = { vyzkum:0, trychtyr:0, reklamy:0, prodej:0, doruceni:0, poznamky:0, zdroje:0 };

/* ===================== SEKCE ===================== */
UPF.sections = [

{id:"vyzkum", ico:"🔎", nav:"Zákaznický výzkum", eyebrow:"První část · Jak získat zákazníky", title:"Zákaznický <span class=\"g\">výzkum</span>",
lead:"Krok 0: vyber si niku. Pak výzkum přesně podle systému Nejlepší agentury.",
md:`## Krok 0: Vyber si niku
> Vyber si **jednu** niku a u té zůstaň. Ideálně takovou, kde už někoho znáš, rozumíš jí, nebo tě baví. Čím vyšší hodnota zakázky, tím méně klientů potřebuješ.

:::TIER 1
- Fotovoltaika a tepelná čerpadla
- Stavební firmy - rekonstrukce na klíč, dřevostavby
- Kuchyně a interiéry na míru, zimní zahrady, bazény
- Okna, dveře, střechy, fasády
- Developeři a realitní makléři
- Architektonická studia
- Zubní kliniky - implantáty, neviditelná rovnátka
- Oční kliniky - laserové operace
- Plastická chirurgie a estetické kliniky
- Autosalony a dealeři motorek
- Právní kanceláře (rozvody, firemní agenda)
- Finanční, hypoteční a investiční poradci
:::
:::TIER 2
- Koučky, mentorky, konzultantky
- Jazykové školy (firemní i individuální kurzy)
- Osobní trenéři a výživoví poradci s programy
- Estetická dermatologie a laserové kliniky
- Svatební salony, agentury a fotografové
- Veterinární kliniky (operace, dentální zákroky)
- Car detailing - keramické vosky, fólie
- Řemeslníci - koupelny, podlahy, elektro, topení
- Hotely a penziony (svatby, firemní akce)
- Cestovní kanceláře na míru
- Golfová hřiště a sportovní akademie (členství)
- Soukromé školky, doučování, kroužky
:::
:::TIER 3
- Kadeřnictví a barbershopy
- Kosmetika, nehty, řasy, permanentní make-up
- Masáže, wellness, solária
- Fyzioterapie - jednotlivá sezení
- Posilovny - běžná členství
- Restaurace, kavárny, cukrárny
- Květinářství
- Půjčovny šatů a obleků
- Čistírny, opravny, krejčovství
:::
:::BONUS
- Tvůrci online kurzů a členských sekcí
- Osobní brandy a influenceři (monetizace publika)
- E-shopy (výkonnostní marketing)
- Podnikatelé, co chtějí správu sociálních sítí (reels, posty, UGC)
- YouTube a podcast tvůrci
- Lokální podniky bez sociálních sítí (kompletní rozjezd profilů)
:::

## Scénář výzkumného hovoru
> Zdravím, [oslovení], já jsem vás našel na webovejch stránkách, který si myslím, že jsou moc hezký.., nebo takhle, máte tam moc hezký fotky, na těch jste asi vy..
> Já vám volám kvůli tomu, že jsem se vás chtěl zeptat.. Já jsem fascinovanej podnikateli, zejména [nika].. A zajímalo mě co odlišuje ty opravdu úspěšný [nika] od jinejch.

!hl 🔴 Nahrávejte si **KAŽDÝ** hovor na počítač (Windows „Záznamník“, Mac „Voice Memos“; telefon dejte na hlasitý odposlech). Nahrávky si spolu pustíme a projdeme, co příště zlepšit.

### Otázky
#### Opener
- Co si vy myslíte, že odlišuje ty opravdu úspěšný tvůrce od jiných?
- A jak byste představil to, co děláte jiným, kdyby vás neznali? *(tvůrce obsahu…)*
- Co vás na tom nejvíc baví?
#### Současná situace
- A máte nějaký cíle kam byste se chtěl dostat třeba za 12 měsíců?
- A za jakým důvodem se tam chcete dostat?
- A co vás teď na [jejich situace] frustruje?
- Kdybyste se měli zbavit jedné věci, kterou dnes řešíte, co by to bylo?
#### Produkt
- Napadlo vás někdy vydělávat pomocí sociálních sítí / tvořit komunitu / tvořit herohero?
- Co vás na tom láká?
- A máte zkušenost s tím, že jste něco online prodávali?
- Co Vás drží od toho, abyste prodávali online?
#### Motivace
- Představte si, že za 2 roky budete mít příjem hlavně z [to, co říkali]…
- Co je ve vašem životě jinak?
- Co by pro tebe bylo největší plus?
- A jak by vypadal váš vysněný týden časově, co byste dělal?
- Co bys dělal s časem navíc?
- Jakou roli v tom rozhodnutí hraje rodina / svoboda / cestování → jejich motivace dle pocitu
#### Strachy a překážky
- Co vás nejvíc odrazuje od přechodu do [to, co říkali…]
- Co myslíte, že by bylo nejtěžší?
- Kde byste se nejspíš zasekli?
- Co by se muselo stát, abyste si řekli: „Tak jo, teď do toho fakt jdu.“
#### Referenční bod
- Znáte nějakýho tvůrce, který zvládl úspěšně přejít do online?
- V čem je podle vás jiný než většina tvůrců?

### Doplňující otázky (důležité)
- Co tím myslíte?
- Zajímavé, a toto ví/dokáží/dělají všichni tvůrci?
- Můžete to nějak rozvést?
- To zní složitě… co myslíte tím [X]?
- Jakto?
- A za jakým důvodem jste začal dělat [X]?
- Můžete mi to ještě trochu popsat?

### Námitky
**„Co považujete za úspěšnýho tvůrce?“**
Někomu, kdo pomáhá.. Má zákazníky, koho lidi poslouchají.
**„A proč voláte?“**
Ať jsem otevřenej, moji klienti jsou podnikatelé, takže jednak jsem fascinovanej lidma, mě hrozně lidi zajímaj a chci se dozvědět od lidí který jsou úspěšný jak to dělaj, abych s nima byl schopnej mluvit jestli to dává smysl.
**„Co za tím je?“**
Narovinu, já jim chci prodávat a když je poznám tak jim budu moct lépe pomoct.

### Pitch (důležité)
> Děkuji vám moc za váš čas. Bylo to pro mě fakt hodnotný. Kdybych ještě já pro vás mohl bejt nějak užitečnej, tak já umím dobře marketing a pomáhám tvůrcům [CÍL].
> Chtěla byste se kouknout na to, jak [CÍL]

> Chci, abyste věděl, že pokud zjistíme, že vám nemůžu pomoct, řeknu vám to. Rozumíte tomu?

> Další krok je, že si domluvíme 45 minutový nezávazný strategický hovor zdarma, já se na něj připravím, vy také a během něj zkusíme zjistit, co je třeba udělat, abyste dosáhla výsledku [CÍL]. Hodí se vám to zítra v 17 hodin?

> Super, tak já vám teď pošlu potvrzovací email a sms, můžu vás poprosit o telefonní číslo a email?

> Skvělé, termín mám v kalendáři, počítám s tím a hned vám pošlu zprávu s potvrzením termínu. Děkuji moc, budu se těšit.

*Je důležité říct konkrétní čas a vždycky naservírovat termín hovoru.*

---

> **Zákaznický výzkum:** čeká vás obvolání vašich potenciálních zákazníků. Výstupem bude alespoň 3x 20minutový audio záznam hloubkového rozhovoru s těmito lidmi a přepis nejdůležitějších citací.

## První dětský krůček
**ChatGPT výzkum:** než se pustíte do skutečného mluvení se skutečnými lidskými bytostmi, uděláte si první výzkum za pomocí A.I. Tento výzkum sice není plnohodnotná náhrada rozhovorů (uvidíte proč), ale to neznamená, že vám nepomůže. Zvlášť pokud s analýzou zákazníků začínáte poprvé v životě, dá vám toto cvičení dobrou představu, jak vaši lidé mluví, přemýšlí, co chtějí, co je bolí a co je trápí. První úkol je jednoduchý.
**Krok 1:** Jděte na [https://chatgpt.com/](https://chatgpt.com/) (případně si zde vytvořte účet zdarma)
**Krok 2:** Vložte dotaz:
\`\`\`
Běžně dělám marketingový výzkum, že zavolám svému ideálnímu zákazníkovi a řeknu: "Dobrý den, našel jsem si vás na Google a zřejmě jste dobrý. Můžu se zeptat v čem spočívá to, že je někdo skvělý realitní makléř.* A pak cca 30 minut poslouchám. Cílem je zjistit, jakou řečí tito lidé mluví. Hlavně jejich slang a jak mluví doma, ne jen když jsou na veřejnosti. Řekni mi 20 vět, které by mi řekl realitní makléř, použij slang, jejich hantýrku, řekni jak nazývají problém s nedostatkem peněz a nedostatkem nových zákazníků, jaké nejčastější bolesti řeší v práci a doma.
\`\`\`
*\\*zde doplňte vaši niche*
**Krok 3:** pokud neste spokojeni s odpovědí, napište *“To se mi nelíbí, myslím, že takto nemluví. Zkus jít více do hloubky.”* - toto opakujte, dokud nebudete spokojení.
**Krok 4:**
\`\`\`
Navrhni mi na základě tohoto výzkumu 10 nadpisů pro e-mailový magnet, který jim odemkne tajemství funnelu a který bude dle šablony "Dnes jste X naposledy.", kde X je jejich trápení (řečeno jejich řečí), které souvisí s tím, že neumí získávat nové zákazníky.
\`\`\`

## Skutečné volání živým lidským bytostem
**Co je třeba:**
- **Software:** Doporučuji jednoduchý “Záznamník” ve Windows (nebo jeho Mac obdobu), na který nahrajete váš telefonní hovor, který provede při hlasitém odposlechu.
- **Postup:** nastudujte si pár informací o svém zákazníkovi, vytočíte telefonní číslo, a začněte se o něj upřímně zajímat. Upřímně se zajímejte o svého zákazníka. Dejte mu cítit, že je váš hrdina. Nemluvte kromě pokládání otázek, buďte skvělí posluchači. Nic nepředpokládejte a nepokládejte otázky tendenčně. Nejlepší informace se většinou dozvíte až po 10-15 minutách hovoru, kdy se respondent více osmělí a otevře se vám.

### Doporučené otevírací otázky
- “V čem se liší majitelé zubních klinik, jako jste vy, od všech ostatních podnikatelů?”
- “Proč jste vlastně podnikatel a ne jen zaměstnanec?”
- “Jakou roli v tomto rozhodnutí a životě hraje rodina?”
- “Jakou radu byste mi dal, kdybych se chtěl také stát zubařem?”
- “Udělal byste něco zásadního dnes jinak, kdybyste začínal znovu?”
- “Jak to myslíte?” (můžete takto nechat rozvinou jakoukoliv odpověď)
- “Můžete mi to ještě trochu popsat? Zní to složitě.”
- “Zajímavé, a toto ví/dokáží/dělají všichni majitelé zubních klinik?”

## Vojtovy resources
- Kompletní otázkové banky, openery a námitky: kapitola **Moje poznámky**
- [🎞️ Disk · REKLAMA WORKSHOP SCÉNÁŘE](https://drive.google.com/drive/folders/144pl5g4k2drhPZ-wEZDGLW5Jm-eWi4Ae)
- [✉️ Šablona vztahových e-mailů](https://docs.google.com/document/d/13mBV2qUEGaCwwTgGjLNTOsJzqK7hNmGHNOPA2bXKpZg/edit)
- [🛠️ Technika na natáčení reklam](https://docs.google.com/document/d/1ODTEHklvtiVC4V39iWfqflnIdkzy49T9fYXpHSEZicM/edit)`},

{id:"trychtyr", ico:"🧲", nav:"První konverzní trychtýř", eyebrow:"První část · Jak získat zákazníky", title:"První konverzní <span class=\"g\">trychtýř</span>",
lead:"Konverzní stránku ti postaví Claude. Šablony máš jako inspiraci, prompty jsou připravené.",
md:`Úkolem pro druhý týden bude...

> ⚠️ **POZOR:** měli byste mít před začátkem tohoto úkolu vyplněnou tabulku s alespoň 10 kompletními záznamy z hovorů zákaznického výzkumu. Pokud se pustíte do tvorby trychtýře bez dobré znalosti cílové skupiny, je velmi pravděpodobné, že vám funnel nebude ideálně fungovat.

...tedy pustíme se do tvorby konverzního trychtýře pro získání vašich prvních zákazníků!

## Krok č. 1 · Konverzní stránka (postaví ti ji Claude)
Nejdřív se podívej na inspiraci, ať víš, jak má výsledek vypadat:
- [Inspirace: nejpoužívanější šablona e-mailového magnetu](https://3u3e6v5y.k01.konverzky.cz/?kct=f24fd153-906e-4419-85fb-1b5ca5b70e65) (ta má často vyšší konverzní poměr)
- [Inspirace: estetická varianta e-mailového magnetu](https://dbjgfsbe.k01.konverzky.cz/?kct=f24fd153-906e-4419-85fb-1b5ca5b70e65) (ta se naopak může líbit spíše zákazníkům, citlivým na design)
> 📱 **Důležité: stránku optimalizuj na telefon.** 80-90 % návštěvníků z reklam přijde z mobilu. Vždy si ji po vytvoření projdi na svém telefonu, než ji pošleš dál.

Pak otevři Clauda, zkopíruj celý PROMPT 1, doplň [závorky] daty z výzkumu a nech si stránku vygenerovat:

:::🤖 PROMPT 1 · Claude ti vytvoří konverzní stránku (zkopíruj celý)
\`\`\`
Vytvoř mi kompletní konverzní stránku (e-mailový magnet) jako JEDEN samostatný HTML soubor (index.html) v češtině. Jsem [tvoje jméno] a pomáhám nice: [tvoje nika]. Rozdávám zdarma e-book s názvem: "[titulek z výzkumu, šablona: Dnes jste X naposledy.]".

STRUKTURA STRÁNKY (přesně v tomto pořadí, jako klasická stránka e-mailového magnetu):
1. Úzká horní lišta s mým jménem/logem (text stačí).
2. Velký nadpis = název e-booku. Pod ním podnadpis, který rozvádí, co čtenář získá (1 věta, jazykem zákazníka: [vlož 1-2 bolesti z výzkumu]).
3. Vizuál e-booku (placeholder <img> s id="ebook-cover", ať ho můžu vyměnit za svůj obrázek).
4. Formulář: pole Jméno, pole E-mail, velké tlačítko "Chci e-book zdarma". Pod tlačítkem drobný text o soukromí.
5. Sekce "Co se v e-booku dozvíte" - 3 až 5 odrážek s benefity (použij tyto bolesti a sny z mého výzkumu: [vlož klíčové fráze, sny a bolesti]).
6. Sekce "Kdo jsem já" - krátké představení + placeholder na moji fotku.
7. Jednoduchá patička (jméno, e-mail, odkaz na zásady ochrany osobních údajů).

TECHNICKÉ POŽADAVKY (důležité, nic nevynechej):
- Mobile-first responzivní design. Na telefonu musí být nadpis čitelný, tlačítko velké na palec, žádný vodorovný scroll.
- Rychlost: žádné externí knihovny, jen čisté HTML + CSS + malý JS. Systémová písma nebo max. 1 Google Font.
- Barvy: [tvoje barvy, nebo napiš "zvol důvěryhodnou kombinaci s 1 výraznou akcentní barvou pro tlačítko"].
- FACEBOOK PIXEL: do <head> vlož standardní Meta Pixel base kód s placeholderem 'VLOZ_PIXEL_ID' a PageView eventem.
- LEAD EVENT + CONVERSIONS API PŘÍPRAVA: po odeslání formuláře vygeneruj unikátní event_id (např. 'lead_'+Date.now()+'_'+náhodné číslo), zavolej fbq('track','Lead',{},{eventID:event_id}) a POŠLI formulář fetchem (POST, JSON: jméno, e-mail, event_id, url stránky) na webhook s placeholderem 'VLOZ_MAKE_WEBHOOK_URL'. Stejné event_id pošli v obou - kvůli deduplikaci s Conversions API.
- Po úspěšném odeslání plynule zobraz děkovací sekci (bez přesměrování): "Hotovo! E-book letí na váš e-mail." + prostor na děkovací video (placeholder <div id="dekovaci-video">).
- Formulář validuj (e-mail formát, vyplněná pole), tlačítko po kliknutí zablokuj proti dvojkliku.
- Vše piš česky, spisovně, ale lidsky. Žádný lorem ipsum - použij reálné texty z tohoto zadání.

Vrať mi jeden kompletní index.html připravený k nasazení.
\`\`\`
:::

:::🤖 PROMPT 2 · Claude/AI ti vytvoří cover e-booku
\`\`\`
Vytvoř mi krásný realistický e-book - tedy cover knížečky, na které bude nadpis "[tvůj titulek, např. Dnes jste měli prázdnou čekárnu naposledy.]" a grafická tématika je [tvoje nika, např. krása, vlasový salón a peníze].
\`\`\`
*(Vygenerovaný obrázek pak vlož do stránky místo placeholderu ebook-cover. Když se ti nelíbí, napiš: “Uprav to, ať to vypadá jako skutečná fotka knihy, měkké studiové světlo.”)*
:::

## Krok č. 2 · Měření: Facebook Pixel + Conversions API
Tvoje stránka z PROMPTU 1 už má měření připravené v kódu. Zbývá ho napojit (10 minut):
1. Jdi na [business.facebook.com/events_manager](https://business.facebook.com/events_manager2) → **Připojit data** → **Web** → pojmenuj Pixel (např. “Pixel [nika]”).
2. Zkopíruj **Pixel ID** (15-16 číslic) a ve svém index.html nahraď text \`VLOZ_PIXEL_ID\` tímto číslem (je tam 2x). Tím ti jede **PageView** i **Lead** event.
3. **Conversions API** (server-side měření, ať ti reklamy fungují i bez cookies): v Events Manageru → tvůj Pixel → **Nastavení** → sekce **Conversions API** → **Vygenerovat přístupový token**. Token si ulož.
4. Založ zdarma účet na [make.com](https://www.make.com) a vytvoř scénář: **Webhooks → Custom webhook** (URL zkopíruj a v index.html nahraď \`VLOZ_MAKE_WEBHOOK_URL\`) → další modul **Facebook Conversions API → Send Event**: event_name \`Lead\`, event_id = pole \`event_id\` z webhooku, e-mail z formuláře, action_source \`website\`.
5. Díky stejnému **event_id** z Pixelu i CAPI Facebook událost nezapočítá dvakrát (deduplikace).
6. Zkontroluj v Events Manageru → záložka **Testovací události**: otevři svou stránku, odešli testovací formulář a sleduj, že přišel PageView i Lead (browser + server).
> 💡 Bonus: do stejného Make scénáře přidej modul Google Sheets / e-mail, ať se ti každý lead rovnou ukládá a e-book odchází automaticky.

## Krok č. 3
Připravte si scénář pro vaše “děkovací vztahové video”. Můžete využít šablonu, kterou jsem pro vás speciálně pro tento úkol připravil (vizte níže).
Video následně natočte na vhodnou techniku. Dnes postačí skoro jakýkoliv mobilní telefon v ceně nad 10 000 Kč a stativ. Dbejte na to, aby scéna byla dobře nasvícená (denní světlo je ideální) a pozadí bylo zajímavé a relevantní pro vašeho zákazníka (pro hoteliéra třeba natáčejte na recepci, pro burzovního tradera před monitory s grafy, pro hospodského v kuchyni restaurace).
> **Scéna videa je v prvních 2-10 sekundách pro úspěch videa důležitější než slova, která budete říkat.** A prvních 10 sekund videa bude rozhodovat o tom, zda jej do konce dokouká 20 a nebo 80 % návštěvníků.
Hotové video vlož do děkovací sekce své konverzní stránky (placeholder dekovaci-video).

## Krok č. 4
E-book nebo magnet ke stažení (jeho první minimalistická verze): obsah bude identický jako scénář vašeho děkovacího-vztahového videa, pouze půjde o textovou formu doplněnou o vizuály. I proto byste si na svém děkovacím-vztahovém scénáři měli dát záležet. Pro tvorbu e-booku můžete využít Canvu, nebo si ho nech vysázet od Clauda (řekni mu: “vytvoř mi z tohoto scénáře hezky formátovaný e-book jako HTML pro tisk do PDF”).

## Krok č. 5
Připravte si prvních 5 vztahových e-mailů do vaší automatické e-mailové sekvence. Inspirovat se můžete scénářem/šablonou mailů, které jsem připravil.
!btn [Šablona vztahových e-mailů](https://docs.google.com/document/d/13mBV2qUEGaCwwTgGjLNTOsJzqK7hNmGHNOPA2bXKpZg/edit)`},

{id:"reklamy", ico:"🎬", nav:"Reklamy · KDO CO PROČ JAK", eyebrow:"Workshop reklam", title:"Jak na reklamu? <span class=\"g\">Kdo, Co, Proč, Jak?</span>",
lead:"Framework + vzory doslovně (Disk: REKLAMA WORKSHOP SCÉNÁŘE).",
md:`Dnes začneme prodávat Váš NOSNÝ PLÁN za pomocí jednoduchého videa, které se Vojta naučil od nejlepších amerických podnikatelů.

## FRAMEWORK REKLAMY
### UDIČKA
Nadpis, upoutání pozornosti, vypíchnutí nejdůležitější potřeby
Připojit případně obrázek
*Vaše odpověď:...*
### Otázka č. 1: Kdo? (dávám často na konec)
Kdo jste? Představte se divákovi vašeho videa
*Vaše odpověď:...*
### Otázka č. 2: Co?
Co pro mě máte? Vysvětlete svůj NOSNÝ PLÁN nebo službu.
*Vaše odpověď:...*
### Otázka č. 3: Proč?
Proč potřebujeme váš PLÁN nebo produkt? Co to pro mě udělá?
*Vaše odpověď:...*
### Otázka č. 4: Jak?
Jak to mohu dostat? Co mám udělat, abych to získal?
*Vaše odpověď:...*

> ⚠️ **Pozor:** finální reklamní video je třeba otitulkovat, pokud půjde na facebook. (vztahové video netřeba titulkovat)

:::📝 Vzor · Kdo co proč jak základ
Ahoj, já jsem Honza Kováč z programu Nejlepší finančník. A chtěl bych vám finanční poradcům dát dnes zdarma pětikrokový plán, jak můžete každý měsíc získat 7-11 nových klientů a díky tomu začít vydělávat i o 150 tisíc korun více na provizích. A ve skutečnosti je to mnohem jednodušší, než si myslíte, protože vašim potenciálním klientům prodáváte špatnou věc a zbytečně složitou věc. Jediné, co musíte udělat, je, abyste klikli na odkaz u tohoto videa a získali tento plán úplně zdarma. A proč to dělám? Protože já znám spoustu finančních poradců, kteří jsou strašně chytří, šikovní, pracují od rána do večera, ale nemají výsledky, se kterými by byli spokojeni. A není to kvůli tomu, že by byli špatní poradci, ale pouze prodávají špatný typ služby špatným zákazníkům. Pokud chcete získat můj pětikrokový plán, jak můžete začít jako finanční poradci okamžitě prosperovat, klikněte na odkaz u tohoto videa a na té stránce, kam se prokliknete, okamžitě získejte svůj plán, a to zcela zdarma.
:::

:::📝 Vzor · Blind šablona (Standův tahák k přepsání pro vaši niku)
**Kdo:**
Dobrý den, já jsem Standa, kamarád finančních poradců, kteří [v čem se cítí být lepší než ostatní].
**Co:**
A dnes bych Vám chtěl nabídnout zdarma můj E-book, jak můžete [doplnit cíl]. Ten jsem vytvořil na základě desítek hodin studia zákazníků právě finančních poradců.
**Proč:**
A proč to dělám? Já mám známého, jmenuje se [doplňte jméno z výzkumu], který je [v čem se cítí být lepší než ostatní]. Chce svou práci dělat zodpovědně.
Chce, aby po něm zůstala na světě upřímná a čistá hodnota. Chce svým řemeslem pomáhat lidem.
[Jméno z výzkumu], ale narazil na jeden problém. Problém, který je v [doplňte obor] velmi častý.
Za [jméno z výzkumu] nepřichází dost zákazníků.
Není vidět a když zkoušel spustit alespoň nějaké reklamy, zdálo se mu, že vyhazuje peníze z oken.
Dokonce ani [co už zkoušeli, ale nepomohlo to] nezabralo.
A protože je [doplňte jméno zákazníka] sympatický a já vím, že není jediný, kdo chce být v [doplňte obor] svědomitý… připravil jsem návod jak může zodpovědný [doplňte obor] získat [doplnit cíl].
**Jak:**
Jak ho získáte? Klikněte na odkaz u tohoto příspěvku a stáhněte si ho teď hned zdarma.
Já Vám držím palce, fandím Vám.
Standa Holý, kamarád finančních poradců
:::

:::📝 Příklad · Finanční poradce pro učitele (celý scénář)
**Udička:**
1. Učitelé, přestaňte se strachovat jednou pro vždy o to, zda budete mít dostatek prostředků na kvalitní život.
2. Učitelé, toto jsou 3 tajemství, které vám ukáží, jak s vaším učitelským platem nejen v klidu vyžít, ale jak si tvořit systematicky majetek, který zajistí nadstandardní život pro vás i pro vaši rodinu.
3. Můžou si učitelé dovolit parádní dovolenou s celou rodinou i několikrát za rok? Tabulkové platy pro učitele jsou přežitek. Získejte daleko více!

Dobrý den, já jsem Honza Kováč a jsem kamarád všech učitelů a chtěl bych především vám šikovným a ambiciózním pedagogům ukázat, jak je možné být nejen nadšeným kantorem, ale zároveň také zodpovědným tátou od rodiny, který se neobává o to, zda bude schopen každý měsíc zajistit důstojně svou rodinu či zda si dovolit bydlení v drahém bytě či pěkném domě.
Chtěl bych vám ukázat, jak je možné pomocí nové strategie začít přemýšlet nad tím, že učitel není ve svém životě odkázaný jen na to, jaký je momentálně jeho tabulkový plat, či zda bude mít ředitel tento rok náladu dát mu odměnu.
Ano, učitelství je samozřejmě služba lidem a velké poslání a vlastně nikdo z vás pravděpodobně nepřemýšlel tak, že když šel učitelství studovat, že to bude nějaká vysoce výdělečná činnost.
Ale to neznamená, že by učitelé měli strádat a neměli mít možnost si dovolit nadstandardní život v pěkném vlastním moderním bytě či dokonce domě. Nebo si každý rok dopřát s celou rodinu zaslouženou dovolenou u moře či slušné auto, za které se nemusejí stydět.
O tom, co je pro německé či skandinávské učitele standardem, stále učitelé v Česku zdaleka ještě ani nesní.
Samozřejmě, platy u nás nedosahuji takové výše, jako v zahraničí, ale zároveň náklady na život jsou u nás zase řádově nižší.
Takže čím to je, že učitelé u nás v Česku si nemůžou ani zdaleka dopřát to, co jejich kolegové v Německu či Švédsku?
Dovolte mi vám ukázat, jak je možné vzít jako učitel zodpovědnosti do vlastních rukou a mít několik tisíc či časem dokonce desítek tisíc korun ke svému učitelskému platu měsíčně navíc, aniž byste museli dělat ve svém volnu jinou práci.
Jak je možné mít klidné spaní, věnovat se své učitelské profesi naplno a radostně, aniž byste museli mít obavu o to, zda budete moci dopřát své rodině i sobě vysoký nadstandard, který si za svou záslužnou profesi zasloužíte.
Existuje totiž nová finanční strategie, která skvěle funguje učitelům v Německu, která skvěle funguje i kantorům ve Švédsku, a která samozřejmě skvěle funguje i u nás učitelům v Česku, ale využívá ji zatím jen zlomek těch nejchytřejších pedagogů.
Já bych vám teď rád tuto strategii představil ve třech tajemstvích, která vám odhalím zdarma ve svém ebooku, který si stáhnete, když kliknete na tlačítko tady někde u tohoto videa.
A proč to dělám?
Štve mě, že existují skvělí učitelé, kteří mají prokazatelné výsledky, žáci je milují, rodiče žáků na ně pějí chválu, mají respekt svých kolegů i nadřízených, ale přesto když přijdou z práce domů, řeší dnes a denně problémy s tím, že nejsou schopni zajistit pro svou rodinu někdy ani důstojný život, řeší stále ceny v obchodech, cenu nájmů či to, zda budou moci splatit drahou hypotéku. Místo toho, aby mohli se svou rodinou v čase volna relaxovat na parádní dovolené či si dopřát alespoň klidnou hlavu bez starostí a existenčních problémů, což je nejlepší prevence proti vyhoření, což je častý problém ve vaší profesi.
Sám několik takových skvělých učitelů znám a někteří z nich, zejména muži, museli kvůli tomu z učitelství odejít a dělají jinou, více výdělečnou práci. Ale když se s nimi bavíte, tak je ta práce zdaleka tak nebaví, ale prý neměli jinou možnost.
A ještě více mě štve, že existují profese, kde si za stejné peníze člověk i bez vysokoškolského titulu může vydělat pomalu více peněz bez jakékoliv větší zodpovědnosti. Takovým příkladem může být často propíraná práce pokladního v Lídlu.
Ale opravdu je to tak, že pokud chce být člověk učitelem, musí zapomenout na vyšší životní standard a pokud si naopak chce v životě dopřát více, co se týče materiálních hodnot, musí se učitelství vzdát?
Spousta učitelů si to myslí, ale není to tak. Je možné být skvělým a zapáleným učitelem a přitom si žít nadstandardně. Jen je třeba zapojit do svého života několik důležitých návyků.
A to je důvod, proč jsem se rozhodl učitelům pomáhat. Klikněte tlačítko tady u tohoto videa a stáhněte si ode mě zdarma můj ebook pro všechny učitele, který vám pomocí 3 tajemství rozkryje dosud nečekané možnosti a příležitosti, které určitě jako učitelé nevyužíváte.
Doporučuji vám na tlačítko kliknout hned, protože je totiž dost možné, že na tuto reklamu už nikdy znova nenarazíte. A to by byla škoda. Nemyslíte?
:::

:::📝 MODELOVÁNÍ REKLAM · ALA DREAM ENGLISH (fotokurz)
Většina lidí si neuvědomuje, že můžou začít fotit svým fototaparátem skvělé snímky v manuálním režimu doslova během jediného dne, i když nikdy předtím foťákem nefotili nebo fotili pouze bez na automat nebo kdysi dávno na kinofilm. Přesto většina z těchto lidí focení foťákem už ale dávno vzdala, fotí pouze svým mobilem, jejich foťák leží často zaprášený někde v šuplíku či skříni, protože prostě neví, jak to udělat, aby měli foťákem hezčí fotku, než na mobil, kde to jde tak trochu samo, že?
Taky se v tom trošku poznáváte? Zkoušeli jste totiž opakovaně číst návod k vašemu foťáku, který má často skoro pětset i více tisíc stran, viděli jste nespočet videí o focení, dokonce jste se i některých kurzů osobně zúčastnili, ale stále nejste schopni fotit tak, aby to vypadalo opravdu skvěle. A někde v koutku duše cítíte, že pokud byste ovládli svůj foťák v plně manuálním režimu, tak byste měli daleko, ale daleko lepší snímky než ti cvakálci, kteří fotí bez rozmyslu mobilem a taky byste ty fotky mohli třeba i veřejně ukázat. A taky vám je líto té investice, která vám leží kdesi zaprášená a nepoužívaná?
Mám pro vás skvělou zprávu.
Já jsem posledních 10 let usilovně pracoval na nové učební metodě, která by lidem focení v manuálním režimu co nejvíce urychlila. A povedlo se to lépe, než jsem dokonce čekal. Mí studenti se učí pod mým vedením fotit v manuálním režimu během jediného dne. A vy můžete i dříve, doslova během několika málo hodin.
A já jsem tuto unikátní výukovou metodu vložil do svého online kurzu focení s názvem Tlačítko po tlačítku, kde vám během několika desítek minut vysvětlím úplně polopatě základy focení, tak že si je zapamatujete na celý život.
Po kliknutí na tlačítko pod videem si můžete zdarma stáhnout 5 klíčových, možná vašich životních lekcí o focení, kde vám během několika desítek minut vysvětlím úplně polopatě základy focení, tak že si je zapamatujete na celý život.
Po kliknutí na tlačítko pod videem si můžete kurz pořídit za akční slevu a navíc máte 30 denní garanci vrácení peněz. Takže pokud nebudete křičet během několika první lekcí nadšením, můžete mi napsat a já vám vaše peníze vrátím na účet.
Já jsem Honza Kováč, vystudovaný učitel a také fotograf a budu moc rád, pokud už dnes začnete díky mému kurzu fotit snímky, o kterých se vám ještě včera ani nezdálo. Těším se. Ahoj.
:::

:::📝 MODELOVÁNÍ REKLAM · NEMANAHI
Fáze jedna konverzní trichtýř. Fáze dva. A fáze tři: Zisk. Tohle je nejlepší marketingová nabídka v historii. Ahoj, já jsem Honza z Inizia. A příliš mnoho českých a slovenských podnikatelů nedokáže prosperovat, protože jim chybí předpovědětelný systém na získávání nových platících zákazníků. A víte co? Já vám to dneska dám jako dárek. Já vám dám ten systém. Já pro vás mám. Nemanahi, nejlepší marketingovou nabídku v historii. Proč to dělám? Já bych totiž upřímně chtěl, abyste vy vydělali peníze dřív, než vydělám peníze já. Tohle teď musíte udělat. Klikněte na tlačítko níže pod tímto videem a získejte svou Nemanahy, nejlepší marketingovou nabídku v historii. Dostanete 14 dní plného přístupu ke konverskám zdarma. To je nástroj, ve kterém si za pár minut naklikáte váš funkční konverzní trychtýř v hodnotě 997 Kč. Je doplněk nebo úplně nová cesta ve vašem podnikání? která z nedůvěřivých cizinců na internetu a zbloudilých klikačů a návštěvníků udělá vaše věrné a platící zákazníky. Věc, kterou jednou nastavíte a pak z ní můžete roky těžit nebo ji v budoucnu prodat jako fungující, vydělávající systém.
Za druhé, kurz facebookové a instagramové reklamy pro rok 2025, abyste nemuseli dokola opakovat chyby mnoha specialistů a nemuseli postupovat systémem pokus omyl. Tenhle kurz v hodnotě 6 tisíc. 997 Kč. Za třetí, kurz prodeje pro rok 2025, abyste nemuseli nikoho přemlouvat, nikoho se doprošovat a dokonce ani s někým mluvit. Tahle úplná rovinka je v hodnotě 4997 Kč. Za čtvrté, kurz vydělávání na autopilota. Tohle zní trochu nadneseně, ale vysvětlím v něm, co je takzvaný setrvačník, který vám vydělává, i když spíte. Tohle je něco, co 92% podnikatelů nemá a díky tomu většina z nich stagnuje A neposouvá se ke svým cílům. Tenhle dosud neveřejný kurz je k nezaplacení. Na ten neumím jen tak plácnout cenovku. Tohle může mít opravdu obrovský dopad na podnikání šikovného jednotlivce nebo firmy. Za páté. Čeklist profitabilního podnikání, včetně našich vlastních biznisových zkratek. Tohle je know-how. podle kterého posuzují priority ve své práci. Tahle věc vám mimo jiné umožní spočítat si a maximalizovat vaši vlastní hodinovku. Protože ne všichni chceme pracovat 14 hodin denně. Svlášť, když většího efektu jde kolikrát dosáhnout za dvě hodiny. Hodnota téhle novinky je 997 Kč. Za šesté, milionářský plán pro hlavní podnikatelské obory. Jaké cesty zařadit, pokud už máte rozjeté podnikání, A co jsme naopak vyzkoušeli a byly to slepé uličky v hodnotě 1997 Kč. Za sedmé.
Vybrané části našeho konverzního festivalu, kde jsme odhalili například to, jak v roce 2025 pracovat s umělou inteligencí, aby za vás dělala profesionální ziskový copywriting, design a navíc za vás stvořila reklamy. Nebo kde jsme odhalili, jak pracovat s náborem nových lidí do vašeho podnikání. Na festivalu hovořili takové hvězdy, jako například kouč Jaromíra Jágra Marian Jelínek. nebo prezident asociace vyjednavačů Radim Pařík. Tenhle záznam je v hodnotě 5997 Kč. Za osmé dostanete můj kurz Startovač, kde vás já vezmu za ruku a provedu vás s tvorbou vašeho prvního profitabilního konverzního trychtýře v hodnotě 1997 Kč. Za deváté dostanete přístup k živým konzultacím. Mně podnikatelé platí 10 000 Kč a členové naší Mastermind skupiny dokonce půl miliony Kč, aby se mnou mohli konzultovat. A vy tyto živé konzultace dostanete zdarma. Dvě. Za desáté. E-mailový autopilot na tržbu. To je nástroj, který za vás automaticky bude odesílat e-maily, i když jste na dovolené nebo si užíváte víkend na horách s rodinou. E-maily, které vám budou generovat poptávky nebo klidně rovnou zaplacené objednávky. V hodnotě 997 Kč.
Dostanete exkluzivní přístup do privátního fora hackerů konverzek, kde jsem já, kde jsou moji kolegové, marketingoví specialisté a také další motivovaní lidé, jako jste možná vy. Můžeme si tam povídat, můžeme si vyměňovat zkušenosti s našimi konverzními trichtíři a s naším biznisem v hodnotě 1997 Kč. Celková hodnota těchto produktů a služeb je 36 970 Kč. Ale pouze teď a právě teď Můžete tohle vše získat v rámci naší 14-denní testovací jízdy konverzek za pouhou 1 Kč. Musíte ale kliknout právě teď na tlačítko pod tímto videem, protože já vám nemůžu slíbit, že toto video ještě někdy uvidíte. Klikněte, než tohle video zakážou.
:::

## Technika na natáčení reklam
- Čtecí zařízení
- Super světlo na reklamy i webináře
- Výborné a levné mikrofony
- Šablony
- KNIHOVNA REKLAM
- Klipsna na světlo na monitor
!btn [Dokument s odkazy na techniku](https://docs.google.com/document/d/1ODTEHklvtiVC4V39iWfqflnIdkzy49T9fYXpHSEZicM/edit)
!btn [Celý Disk se scénáři](https://drive.google.com/drive/folders/144pl5g4k2drhPZ-wEZDGLW5Jm-eWi4Ae)`},

{id:"prodej", ico:"📞", nav:"Prodejní hovor", eyebrow:"První část · Jak získat zákazníky", title:"Prodejní <span class=\"g\">hovor</span>",
lead:"Kompletní scénář obchodního telefonátu Nejlepší agentury. Doslovně.",
md:`Úkolem pro třetí týden bude získat vašeho prvního zákazníka.
Protože byste nyní měli mít připravený váš první trychtýř včetně děkovacího-vztahového video a rozhřívací e-mailové sekvence, je na řadě příjemná fáze:
**Vydělat první peníze.**
Abychom mohli začít prodávat, budeme potřebovat nejprve dostat našeho potenciálního zákazníka na prodejní hovor.

## Plán na tento týden 📅
**Krok č. 1:** Nainstalujte si Calendly.com a vytvořte si rezervační Calendly formulář, aby si zákazníci mohli rezervovat termíny strategických (prodejních) konzultací s vámi
**Krok č. 2:** Použijte scénář prodejního hovoru níže a upravte jej tak, abyste podle něj mohli postupovat a prodávat
**Krok č. 3:** Doplňte svůj Calendly odkaz do e-mailové sekvence.
**Krok č. 4:** Spusťte reklamy na Facebooku podle vzoru a scénáře “Kdo, co, proč, jak?”

### Krok č. 1: Calendly.com
Pro rezervaci obchodních konzultací používáme vždy nástroj Calendly.com. Existují alternativy jako jsou systémy Pipedrive, Hubspot a další, ale s těmi vám případně nebudeme schopní poskytnout pomoc, protože je tak dobře neznáme.
Calendly.com je v základní verzi pro jednoho uživatele zdarma.
!btn [Calendly.com](https://calendly.com)

### Krok č. 2: Scénář prodejního hovoru
Doporučuji, abyste své první prodeje ocenili následujícím způsobem:
- **Konverzní trychtýř na míru 24.990 Kč + DPH** (pokud jste plátci)
- **Pravidelný servis a internetový marketing pro konverzní trychtýř 14.990 Kč + DPH měsíčně** (pozn.: servis spočívá v tom, že pro klienta tvoříte/spouštíte FB reklamy, aby do trychtýře proudili noví návštěvníci, dále děláte A/B testy a poskytuje marketingové poradenství - v praxi vám toto zabere 2-8 hodin měsíčně, protože pakliže vytvoříte funkční reklamu, trychtýř je ziskový a téměř bezúdržbový a zákazník vám rád platí za to, že má díky tomuto servisu jistotu, že “nevyschne” přítok nových leadů a objednávek)
- **Garance vrácení peněz 30 dní** pokud z jakéhokoliv důvodu nebude zákazník spokojen
- **Práce začíná v okamžiku, kdy zákazník uhradí první fakturu v plné výši.**

---

# Scénář obchodního telefonátu

## Část 01 - Nezávazná konverzace
- Dobrý den Evo *(použijte oslovení jménem, i když jde o ředitele)*, odkud dnes voláte?
- Skvělé, pojďme tedy rovnou na to a začněme s tím důležitým, souhlasíte?

## Část 02 - Vymezte rámce a převezměte velení
- OK, takže nyní jak náš telefonát bude probíhat. Začnu vám za chvíli klást nějaké otázky ohledně vašeho podnikání. Následně, pokud se bude zdát, že jsem schopný Vám pomoci, vysvětlím vám, co bych vám mohl nabídnout. Na konci se budete moci rozhodnout, zda se toho chcete zúčastnit nebo ne.

## Část 03 - Zjistěte, proč jsou tady
- Takže Honzo, řekněte mi, co Vás motivovalo, abyste si udělal čas na tento telefonát?

Pokud vám zákazník ihned řekne, co jej trápí, vyhráli jste jackpot a můžete pokračovat na další část. Pokud je jeho/její odpověď nejasná, můžete/**musíte** položit ještě doplňující otázky:
- Rozumím, co Vás ale skutečně motivovalo?
- Rozumím, čemu říkáte marketing?
- A proč?

## Část 04 - Porozumějte jejich současné situaci
*(tento list si vytiskněte pro každý telefonát)*
- Dobře, co tedy prodáváte?
- A za kolik to prodáváte?
- Kdo je váš ideální klient?
- Proč si lidé kupují váš koučink? Co si od toho slibují?
- Jaký problém lidé mají v jejich pracovním nebo osobním životě, který je motivuje si váš koučink koupit?
- Jaký je proces, kterým si projde Váš klient než z naprosto neznámého člověka vytvoříte vašeho klienta?

### Jak?
- Jak momentálně přitahujete klienty?
- Víte, kolik Vás momentálně stojí získat nového zákazníka?
- Máte nějaký proces, kterým získáváte zákazníky, když zrovna potřebujete?
- Jste spokojeni se způsobem, jak vedete Vaše podnikání a marketing?
- Kolik peněz měsíčně momentálně utržíte díky vašemu podnikání?
- Dobře Honzo, jak byste rád, aby Vaše podnikání vyrostlo v příštích 12 měsících?
*(opět je potřeba získat určité číslo [ČÁSTKA], než se posunete na další otázku)*
- Dobře, a jaká je vaše motivace, dostat se k metě XX [ČÁSTKA] Kč?

## Část 07
Dobře Honzo, takže nyní vyděláváte 100,000 Kč měsíčně a chcete se dostat na [ČÁSTKA] měsíčně. Řekněte mi, co Vás brzdí od toho, abyste toho dosáhl sám/a?

## Část 08
*Během této části se snažíme odhalit [CÍL] zákazníka. Jeho [ČÁSTKA] je totiž spíše prostředek k dosažení [CÍLe]. Pokud chce podnikatel vydělávat 1 milion Kč měsíčně [ČÁSTKA] hlavní důvod je [CÍL], což například znamená, že chce skončit v zaměstnání a osvobodit se, mít možnost trávit 3 měsíce ročně u moře, mít prostředky na nákup nových technologií do své továrny nebo najmout zaměstnance, co budou práci dělat za něj/ní. Peníze jsou vždy jen zprostředkovatel [CÍLE].*
- Honzo, momentálně vyděláváte 100.000 Kč měsíčně? Proč u toho prostě nezůstat?
- Dobře, a neovlivňuje nyní to, že nevyděláváte víc další oblasti vašeho života?
- Rozumím, a kdy to tedy chcete změnit/zlepšit?
- Super, rozumím tomu, že se to chystáte změnit právě teď, ale jak odhodlaný jste to změnit?

## Část 09
Dobře Honzo, rozumím, s tím Vám určitě budu schopný/á pomoci.
Chcete, abych Vám řekl/a, co dělám?
*(počkejte na ANO)*

## Část 10 - SALES PITCH :)
> Moje specializace je, že pomáhám koučkám přitáhnout více klientů, skrze konverzní trychtýře.
> To ve Vašem případě znamená, že už nebudete [BOLEST] a tím pádem [CÍL] a dosáhnete [ČÁSTKA].
> A na tohle dohlédneme. osobně.

**PRO NAVOLÁVÁNÍ**
> Moje specializace je, že pomáhám koučkám prodat více klientů, skrze navolávání a scénář emočního prodeje.
> To ve Vašem případě znamená, že už nebudete navolávat leady a [BOLEST] a tím pádem [CÍL] a dosáhnete [ČÁSTKA].
> A na tohle dohlédneme. osobně.

*(Chcete, aby si zákazník myslel: “To je přesně moje situace a to je přesně ten výsledek, kterého chci dosáhnout.”)*
*(Tudíž… musíte být specialista, abyste jim mohli pomoci)*
**Když dokončíte vaše vysvětlení, zmlkněte!**

## Část 12 - Doplňte nabídku o cenu s pobídkou urgence
*Tato část přichází, až když se na ní zákazník ZEPTÁ.*
Konverzní trychtýř vychází na jednorázově na 45 000 korun.
Nicméně já mám zkušenost, že když narazím na lidi, kteří se umí rychle rozhodovat a skutečně vědí, co chtějí, bývají to naši nejlepší zákazníci. Já Vám to tedy [JMÉNO] nebudu nabízet za 59 000 Kč, ale pokud se rozhodnete nyní, že byste se toho chtěl účastnit, budu to pro Vás mít za 24 997 Kč.

*Pak ztichněte.*
**Toto TICHO je skutečně ta nejdůležitější část nabídky.**
Musíte vydržet zticha, dokud nepromluví zákazník. Někdy toto ticho může trvat i více než minutu.
Čekáme na jakákoliv slova, která znamenají, že máme jejich souhlas pokračovat. Jako například:
- “Takže jaký je další krok?”
- “Co tedy bude teď? Jak začneme?”
- “Domluveno!”
- “Souhlasím, beru.”

Když jsou připraveni pokračovat, řekněte:
- Nyní Vám posílám do chatu odkaz. Vidíte odkaz? *(“ANO”)*
- Klikněte na něj, otevře se stránka. Vidíte stránku? *(“ANO”)*
- Na té stránce je formulář. Vidíte formulář? *(“ANO”)*
- Tam zajdete své jméno. *(Vyčkejte a sledujte, zda zákazník píše. Pokud ne, dodejte “...Stačí křestní.” zákazník pochopí, že má začít vyplňovat rovnou.)*
Většinou se dostanou sami na další krok platební brány a zaplatí.

## S čím se nespokojíme?
Jakékoliv vyjádření, které nezní **ANO** nebo **NE.** Pokud odpověď není binární, nesmíte se s ní spokojit.

## Jak na námitky
**Námitka: Kolik času mám, abych se rozhodl?**
- “Kolik času potřebujete, abyste se rozhodl?”
- “Je něco konkrétního, co potřebujete vědět pro toto rozhodnutí, co bychom mohli probrat ihned?”

**Námitka: Potřebuji trochu času, abych se podíval na finance a spočítal si to. Nedělám takto rychle rozhodnutí. Potřebuji to probrat s partnerem nebo partnerkou.**
- “Jestli tomu rozumím, toto rozhodnutí nemůžete udělat bez vašeho společníka/partnera?”
Pokud odpověď je “ano”:
- “Dobrá, kdy konkrétně budete mluvit s vaším partnerem nebo partnerkou?”
- “Skvělé, takže s ní/m budete mluvit dnes večer. Právě jsem si vás požádal o přátelství na Facebooku. Stačí, když se mi ozvete do zítřejšího poledne a podržím vám tuto zvýhodněnou nabídku.”
*(Důležité je, aby rozhodnutí udělali maximálně do 24 hodin)*

**Námitka: Nemám peníze.**
- “Dobře…(ticho), chápu, že peníze může být někdy problém získat. V tom případě navrhuji následující. Řekněte mi popravdě, je toto (spolupráce s námi) něco, co byste opravdu rádi realizovali? Protože pokud ne, tak to je naprosto v pořádku.”
Případná odpověď: Ne, opravdu bych to chtěl.
- “Tak se pojďte zamyslet nad tím, jak by to šlo zrealizovat.”

**Námitka: Nemám peníze.**
- “A není to ten pravý důvod, proč se tady vlastně bavíme? Abychom vám pomohli peníze vydělat?”
nebo
- “A myslíte, že to budete moci změnit rychleji, aniž bychom vám s tím pomohli?”

**Námitka: A máte nějakou záruku?**
- “Ano, máme záruku, že pokud budete nadále pokračovat v tom co děláte, tak se váš marketing nezlepší a budete nadále přicházet o peníze. Mám taky záruku, že to co děláme funguje. Ale pokud už teď přemýšlíte o tom, jak případně z této spolupráce vycouvat, tak možná nejsme to pravé, co hledáte.”

Pokud váš zákazník ještě váhá, můžete použít tuto kouzelnou formulku:
> “Podívejte, ve skutečnosti Vaše ROZHODNUTÍ není o tom, zda s námi spolupracovat nebo ne.
> Skutečné rozhodnutí je o tom, zda jste připraven/a k tomu se zavázat, že zlepšíte vaše obchodní výsledky nebo jestli chcete pokračovat stejně, jako doposud.”

Zákazníci se ve skutečnosti nerozhodují o vás. Oni se rozhodují, zda chtějí sami něco se sebou udělat.

## Gratulace 🎉`},

{id:"doruceni", ico:"🤝", nav:"Doručení služby", eyebrow:"Druhá část · Jak doručit službu", title:"Začátek spolupráce <span class=\"g\">a představení</span>",
lead:"Doslovné znění, kroky 1 až 5.",
md:`Váš zákazník s vámi uzavřel spolupráci během prodejního hovoru. Nyní je potřeba udělat následující kroky.
1. **Zaslat mu fakturu za vaše služby** (začínáte pracovat po jejím uhrazení, nikoliv po vystavení - toto je důležité pro kvalitu spolupráce a motivaci klienta optimálně spolupracovat)
2. **Spolu s fakturou poslat k podpisu obchodní podmínky.** Spolupráce vašeho klienta k ničemu nezavazuje, tedy se zněním podmínek nebývá problém. Pokud by problém vznikl, je to varovné znamení, že klient možná bude problematický.
3. **Představení podle scénáře.** Po uhrazení platby se s klientem spojíte v rámci prvního pracovního hovoru a předvedete své natrénované představení.
4. **Zaúkolujete svého zákazníka.** Pro rychlé zahájení prací budete potřebovat od klienta rychle doplnit informace a vy si o ně efektivně požádáte.
5. **Dáte klientovi plán.** Lidé milují plány a jízdní řády. Bez plánu vzniká úzkost a vy chcete, aby se s vámi zákazník cítil bezpečně. Pokud s vámi bude cítit úzkost, spíše o zakázku přijdete.

## 1. Faktura
Fakturu můžete vystavit přes mnoho programů, například [FAPI.cz](https://fapi.cz) nebo [Fakturoid](https://www.fakturoid.cz).
Ohledně faktury: první fakturu rovnou vystavujeme nikoliv jako zálohovou, ale jako fakturu “na ostro”. Zvýší vám to % platících, protože zálohová faktura je podvědomě považována za méně závaznou. Pokud Vám zákazník fakturu nezplatí (neplatič), je takovouto fakturu vždy možné zdobropisovoat, takže se nemusíte bát, že byste z ní zbytečně museli platit daň z příjmu nebo DPH.
Během prodejního hovoru jste zákazníkovi oznámili, aby fakturu uhradil okamžitě. Pokud se tak nestalo, doporučuji urgovat okamžitě druhý den ráno a neodkládat. Rychlá urgence zvyšuje šance na rozplacení.

## 2. Obchodní podmínky
Použijte vzory dokumentů jako vaše vlastní obchodní podmínky a objednávky služeb. Stačí jen nahradit hlavičku vašimi nacionály.
K podpisu obchodních podmínek můžete klienta vyzvat skrze scan podepsaného dokumentu a nebo to zákazníkovi (i sobě) usnadnit skrze elektronický podpis, například aplikaci [DigiSign](https://www.digisign.cz/). Stačí si vytvořit účet a organizaci. Můžete si zvolit, jestli chcete nechat podepisovat pouze klienta nebo podepisujete klient i vy.

## 3. Představení
**Příprava:** na první dojem nemůžete být nikdy “příliš” dobře oblečení. Doporučuji si pro první Zoom obléci vaše nejlepší business oblečení. Muži nic nezkazí i kravatou a dobře padnoucím sakem. Pokud nemáte dobře padnoucí sako (s moderním střihem), raději volte pouze samotnou bílou košili s dlouhým(!) rukávem. Ženám radit nebudu, ty se v oblečení vyznají.
Werich zpíval, že šaty dělají člověka a je to pravda. Oblečení vám může kvalitní vztah buď podělat nebo udělat.
Představení je nejdůležitější součást první komunikace. Chceme se ukázat v lidském a dobrém světle, aby si s námi zákazníky vybudoval pokud možno silný a (pozitivní) emocionální vztah.

### Zde je scénář vašeho představení:
Dobrý den, [křestní jméno zákazníka],
gratuluji ke skvělému rozhodnutí a dovolte mi, ať se představím. Jsem [Vaše Jméno a Příjmení] a:
- Mám dvě malé holčičky, Nelinky u Zorinku, jsou jim 2 a 4 roky a ze všeho na světě nejvíc miluji je... *(první provázek - rodina)*
- ...kromě nich pak mám rád tenis, který jsem jako mladý hrál závodně, také lyžuji, poslouchám dechovku... *(druhý provázek - hobby)*
- ...a mám jednu silnou víru, a to že podnikatelé jsou jediní lidé, kteří dokáží pozitivně změnit tento svět. Ne tím, jak mluví (jako politici), ale tím jak tvoří... *(třetí provázek - víra)*
- ...a pak je tu ještě jedna věc, kterou mám moc rád, a to je pomáhat majitelům wellness-hotelů, aby díky konverzním trychtýřům získali více zákazníků a vydělávali více peněz. A tomu chci věnovat tolik času, kolik jen bude možné. *(čtvrtý provázek - byznys)*
- Následně pokračujeme otázkami:
- ...můžete mi říct o sobě Vy, [Křestní Jméno zákazníka]?
Následně nechte klienta a mluvit a snažte se najít společné zájmy nebo společné věci a tyto následně zmiňte také. Společné věci pomáhají budovat vztah a důvěru (např. “vy máte také červenou kravatu, to máme stejný vkus”, “vy máte také maminku doktorku, já také”, “vy také rád jezdíte do Itálie?”)

## 4. Zaúkolujte klienta
Až budete hotoví s nezávaznou (vztahovou) konverzací, přejděte k práci. Od svého klienta nyní budete potřebovat podklady a informace, které vám pomohou doručit službu. Primárně potřebujeme vědět:
**A.** Zda již zákazník má své klienty/zákazníky a případně kontakty na alespoň 20 z nich. Toto vám bude sloužit jako vzorek, na kterém provedete zákaznický výzkum. Stejný výzkum, který jste první měsíc prováděli sami pro sebe.
**B.** Budete potřebovat znát produkt a cenovou politiku (také marže a ziskovosti) svého klienta, protože v rámci návrhu konverzního trychtýře musíte spočítat, zda a za jakých podmínek se vašemu klientovi vyplatí inzerovat.
Například pokud víte, že klient chce prodávat krabičku s japonským čajem za 100 Kč a má na ní 30% marži, víte, že na každém prodeji získá pouze 30 Kč a tedy nejspíše nebudete schopní na takovou nabídku vést ziskovou reklamu (CPA 30 Kč je téměř nemožné dosáhnout). Nabízí se například možnost udělat velký čajový dárkový balíček, který budete prodávat za 1000 Kč s 70% marží (CPA 700 Kč je již naprosto reálné).
**C.** Chci také dostat k dispozici veškeré grafické podklady, produktové a jiné propagační fotky, média videa, novinové články... zkrátka vše, co bych mohl použít pro studium produktu a užít v rámci propagace.
**D.** Budeme potřebovat reference/testimonialy. Pokud je klient zatím nemá, bude třeba si je sehnat a požádat klienta, zda by mohl své současné klienty nakontaktovat a požádat je o poskytnutí testimonialy. **Bez referencí mají trychtýře o 20-80 % konverze, takže je klíčové kvalitní testimonialy sehnat!**
**BONUS:** Pošlete klientovi k vyplnění vstupní dotazník

## 5. Dejte klientovi plán
Plán vaší práce bude vypadat zhruba následujícím způsobem:
- **1. týden:** Zákaznický výzkum a návrh konverzního trychtýře v PPT
- **2. týden:** Grafický návrh konverzní stránky a iterace na základě konzultace s klientem
- **3. týden:** Návrh a spuštění prvním Facebook reklam s rozpočtem 100-200 Kč denně.
- **4. týden:** Optimalizace reklam a první A/B testy klíčových proměnných (nadpisy, obrázky...)
- **5. týden:** REPORT: Vyhodnocení prvních výsledků a návrh plánu na další měsíc`},

{id:"poznamky", ico:"📝", nav:"Moje poznámky", eyebrow:"Know-how · Vojta Kopecký", title:"Moje <span class=\"g\">poznámky</span>",
lead:"Vojtovy openery, námitky, otázkové banky a poznámky z reálných hovorů.",
md:`## Opener
> Zdravím, [oslovení], já jsem vás našel na webovejch stránkách, který si myslím, že jsou moc hezký.., nebo takhle, máte tam moc hezký fotky, na těch jste asi vy..
> Já vám volám kvůli tomu, že jsem se vás chtěl zeptat.. Já jsem fascinovanej podnikateli, zejména [nika].. A zajímalo mě co odlišuje ty opravdu úspěšný [nika] od jinejch.

## SMS
> Zdravím, koukal jsem se na Váš web, prosím ozvěte se. Díky. [Jméno Příjmení]

## Objections
**“Co považujete za úspěšnýho [nika]?”**
Někomu, kdo pomáhá.. Má zákazníky, koho lidi poslouchají.
**“A proč voláte?”**
Ať jsem otevřenej, moji klienti jsou podnikatelé, takže jednak jsem fascinovanej lidma, mě hrozně lidi zajímaj a chci se dozvědět od lidí který jsou úspěšný jak to dělaj, abych s nima byl schopnej mluvit jestli to dává smysl.
**“Co za tím je?”**
Narovinu, já jim chci prodávat a když je poznám tak jim budu moct lépe pomoct.

## Questions (bloky výzkumného hovoru)
### BLOK 1 - Současná situace
- Jak dnes vypadá tvůj typický pracovní týden?
- Kolik času trávíte reálně [hlavní činností] a kolik nějakou administrativou kolem?
- Co máš na své práci nejradši?
- Co tě na ní naopak nejvíc štve?
- Kdyby ses mohl zbavit jedné věci, kterou dnes řešíš, co by to bylo?
### BLOK 2 - High Ticket Programy
- Napadlo tě někdy přejít víc do High Ticket programů?
- Co tě na tom láká?
- Měla jste někdy High Ticket program?
- Jaká byla vaše zkušenost?
- A proč dnes pochází většina Vašeho příjmu z konzultací?
- Co Vás drží v současném modelu?
### BLOK 3 - Motivace
- Představte si, že za 2 roky budete mít příjem hlavně z High Ticket programu.
- Co je ve vašem životě jinak?
- Co by pro tebe bylo největší plus?
- Jak by vypadal ideální pracovní týden?
- Co bys dělal s časem navíc?
### BLOK 4 - Strachy a překážky
- Co tě nejvíc odrazuje od většího přechodu do High Ticket nabídek?
- Čeho by ses bál nejvíc?
- Co si myslíš, že by pro tebe bylo nejtěžší?
- Kde by ses nejspíš zasekl?
- Co by se muselo stát, abys řekl: “Tak jo, teď do toho fakt jdu.”
### BLOK 5 - Referenční bod
- Znáš nějakou koučku, která zvládla přejít úspěšně online?
- Co konkrétně podle tebe udělala dobře?
- V čem je podle vás jiná než většina kouček?
- Myslíte si, že bys to dokázal taky?
- Proč ano nebo proč ne?

:::❓ Otázky od Ondry Holoubka (rovnou pak prodává)
**BLOK 1 - Současná situace:** Jak dlouho už děláš trenéra? Jak dnes vypadá tvůj typický pracovní týden? Kolik hodin týdně reálně trávíš v gymu? Co máš na své práci nejradši? Co tě na ní naopak nejvíc štve? Kdyby ses mohl zbavit jedné věci, kterou dnes řešíš, co by to bylo?
**BLOK 2 - Online coaching:** Napadlo tě někdy přejít víc do online coachingu? Co tě na tom láká? Měl jsi někdy online klienty? Jaká byla tvoje zkušenost? Proč dnes stále většina tvého příjmu pochází z osobek? Co tě drží v současném modelu?
**BLOK 3 - Motivace:** Představ si, že je za dva roky a většinu příjmu máš z online coachingu. Co je v tvém životě jinak? Co by pro tebe bylo největší plus? Jak by vypadal ideální pracovní týden? Co bys dělal s časem navíc?
**BLOK 4 - Strachy a překážky:** Co tě nejvíc odrazuje od většího přechodu online? Čeho by ses bál nejvíc? Co si myslíš, že by pro tebe bylo nejtěžší? Kde by ses nejspíš zasekl? Co by se muselo stát, abys řekl: “Tak jo, teď do toho fakt jdu.”
**BLOK 5 - Referenční bod:** Znáš nějakého trenéra, který zvládl přejít úspěšně online? Co konkrétně podle tebe udělal dobře? V čem je podle tebe jiný než většina trenérů? Myslíš si, že bys to dokázal taky? Proč ano nebo proč ne?
:::

:::❓ Otázky od Vojty Kopeckého
- “Od koho jste si třeba přečetl knížku a šel [podnikat ve vaší nice]?”
- “V čem se liší [nika], jako jste vy, od všech ostatních podnikatelů?”
- “Proč jste vlastně podnikatel a ne jen zaměstnanec?”
- “Jakou roli v tomto rozhodnutí a životě hraje rodina?”
- “Jakou radu byste mi dal, kdybych se chtěl také stát [nika]?”
- “Udělal byste něco zásadního dnes jinak, kdybyste začínal znovu?”
- “Jak to myslíte?” (můžete takto nechat rozvinou jakoukoliv odpověď)
- “Můžete mi to ještě trochu popsat? Zní to složitě.”
- “Zajímavé, a toto ví/dokáží/dělají všichni [nika]?”
:::

:::❓ Otázky od Adamovo formuláře
- A jak to teď je, zaznámenávají [nika] nárůst klientů nebo pokles?
- A jak třeba nakládáte se svým časem, jak to je pro vás důležitý mít nějakou časovou svobodu?
- A máte svoje kouče?
- A kolik musí taková [nika] investovat aby byla úspěšná?
:::

:::❓ Moje otázky
- a co třeba musí [nika] dělat aby získali klienty, když začínají?
- a to neplatí teď, že vy už klienty máte?
- a chtějí [nika] získávat klienty nové nebo mají plno?
- a jaké klienty byste chtěl získávat vy?
:::

## Závěr hovoru + pitch
> Děkuji vám moc za váš čas. Bylo to pro mě fakt hodnotný. Kdybych ještě já pro vás mohl bejt nějak užitečnej, tak já umím dobře marketing a pomáhám [nika] [CÍL].
> Chtěla byste se kouknout na to, jak prémiové klienty můžete přitahovat?

> Já věřím, že se dokážete zbavit [BOLEST], moje specializace je, že pomáhám [nika] dostat se na [CÍL] a [CÍL], a na to dohlížím osobně, chtěla byste slyšet více o tom co dělám?

**Rámovací otázka** *(říct před dalším krokem)*:
> Chci, abyste věděla, že pokud zjistíme, že vám nemůžu pomoct, řeknu vám to. Rozumíte tomu?

**Další krok:**
> Další krok je, že si domluvíme 45 minutový nezávazný strategický hovor zdarma, já se na něj připravím, vy také a během něj zkusíme zjistit, co je třeba udělat, abyste dosáhla výsledku [CÍL]. Hodí se vám to zítra v 17 hodin?

## Calling poznámky (co zlepšit)
- mám hodně high pitch hlas, zkusit ho snížit
- prodlužuju hodně á
- ptám se otázku a dělám jí delší než je potřeba - ptám se moc, nezrcadlím
- určitě bouchám do klávesnice moc dlouho → ta ozvěna je bouchání do klávesnice

## Technika hovoru (z reálných hovorů)
- Když lidi necháš mluvit, budou mluvit o sobě rádi.
- Neskákat do řeči. Nechat 3 sekundovou pauzu: když domluví a já už chci začít mluvit, řeknu si “nebudu mluvit, ještě 3 sekundy nechám”. Lidi se vždycky rozmluví, nechtějí, aby bylo ticho.
- Za hodinu jsem položil tak 20 otázek, vždycky jednu větu. Ty lidi chtějí, aby je někdo vyslechl.`},

{id:"zdroje", ico:"📚", nav:"Zdroje", eyebrow:"Materiály a odkazy", title:"Zdroje <span class=\"g\">a odkazy</span>",
lead:"Šablony, Disk, technika a nástroje na jednom místě.",
md:`## Rychlé odkazy
!btn [🎞️ Disk · REKLAMA WORKSHOP SCÉNÁŘE](https://drive.google.com/drive/folders/144pl5g4k2drhPZ-wEZDGLW5Jm-eWi4Ae)
!btn [✉️ Šablona vztahových e-mailů](https://docs.google.com/document/d/13mBV2qUEGaCwwTgGjLNTOsJzqK7hNmGHNOPA2bXKpZg/edit)
!btn [🛠️ Technika na natáčení reklam](https://docs.google.com/document/d/1ODTEHklvtiVC4V39iWfqflnIdkzy49T9fYXpHSEZicM/edit)
!btn [🧲 Inspirace: nejpoužívanější šablona konverzní stránky](https://3u3e6v5y.k01.konverzky.cz/?kct=f24fd153-906e-4419-85fb-1b5ca5b70e65)
!btn [🎨 Inspirace: estetická šablona konverzní stránky](https://dbjgfsbe.k01.konverzky.cz/?kct=f24fd153-906e-4419-85fb-1b5ca5b70e65)
!btn [📅 Calendly](https://calendly.com)
!btn [📈 Facebook Events Manager (Pixel + CAPI)](https://business.facebook.com/events_manager2)
!btn [⚙️ Make.com (Conversions API scénář)](https://www.make.com)

## Nástroje, které používáme
- **Claude** - staví konverzní stránky, e-booky a texty (prompty najdeš v kapitole První konverzní trychtýř)
- **ChatGPT** - zákaznický výzkum a titulky (kapitola Zákaznický výzkum)
- **Canva** - grafika a mockupy e-booku
- **Calendly** - rezervace prodejních hovorů
- **Make.com** - Conversions API + automatické odesílání e-booku
- **Záznamník ve Windows / na Macu** - nahrávání výzkumných hovorů (při hlasitém odposlechu)

## Jak odevzdávat úkoly
Každý večer pošli splněný úkol dne **do WhatsAppu** - přesně to, co je u dne uvedeno v poli “Předložíte”. Když se zasekneš, napiš hned, ne až večer.`},
];
