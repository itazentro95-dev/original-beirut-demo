// Original Beirut demo: language toggle, scroll reveals, hero parallax, rotating dish word.
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const I18N = {
  de: {
    metaTitle: "Original Beirut: Libanesisches Streetfood in Schaffhausen",
    skip: "Zur Speisekarte springen",
    wordmarkSub: "Libanesisches Streetfood · Schaffhausen",
    navSig: "Highlights",
    navMenu: "Speisekarte",
    navStory: "Unsere Geschichte",
    navOrder: "Take-away",
    navVisit: "Besuch",
    badgeRating: "4.9 · über 290 Google-Bewertungen",
    badgeCuisine: "Libanesisches Streetfood",
    h1a: "Beirut.",
    h1b: "In Schaffhausen",
    heroRotatePrefix: "Frisch vom Spiess:",
    heroRotateSuffix: ", jeden Tag von Hand geschnitten.",
    heroLede: "Libanon, wie er auf der Strasse schmeckt: Shawarma, Falafel und Mezze, fast alles hausgemacht und grosszügig serviert, an der Bachstrasse in der Schaffhauser Altstadt.",
    ctaMenu: "Speisekarte ansehen",
    ctaOrder: "Take-away vorbestellen",
    ctaCall: "Anrufen",
    heroNote: "Grosse Bestellung? Ruf kurz vorher an, dann ist alles bereit, wenn du kommst.",
    heroFact2: "Take-away und kleiner Gastraum mit Grotte",
    sigTitle: "Wofür unsere Gäste wiederkommen",
    sigSub: "Vier Gerichte, die in den Bewertungen immer wieder auftauchen, vom Poulet-Shawarma bis zur Sujuk-Spezialität des Hauses.",
    tagFav: "Gäste-Favorit",
    tagSpec: "Hausspezialität",
    tagHomemade: "Hausgemacht",
    sig1Desc: "Mariniertes Poulet vom Spiess, frisch geschnitten, mit Salat und Knoblauchsauce im warmen Fladenbrot, dazu knusprige Pommes.",
    sig2Desc: "Würzige Sujuk-Wurst als Shawarma, so kennen sie unsere Gäste fast nur von hier. Mit eingelegtem Gemüse und scharfer Sauce auf Wunsch.",
    sig3Desc: "Aussen knusprig, innen grün und saftig, aus eigener Herstellung, mit Salat, Kräutern und Tahini im Fladenbrot. Für viele Gäste die beste Falafel der Stadt.",
    tagHomemade2: "Hausgemacht",
    sig4Name: "Mezze-Teller mit Hummus und Kibbeh",
    sig4Desc: "Cremiger Hummus mit Olivenöl, dazu knusprige Kibbeh, Salat und warmes Fladenbrot. Der Teller zum Teilen und Dippen.",
    sigMoreTitle: "Mehr Hauslieblinge",
    sl1Desc: "Rindfleisch in Scheiben, hausgemacht mariniert und geschichtet, frisch vom Spiess geschnitten.",
    sl2Desc: "Saftiges Rind mit geschmolzenem Käse im warmen Brot.",
    tagFav2: "Gäste-Favorit",
    sl3Desc: "Süss und knusprig, und bei unseren Gästen auch als kleine Aufmerksamkeit des Hauses beliebt.",
    menuTitle: "Vom Spiess und aus der kleinen Küche",
    menuSub: "Alles frisch zubereitet, fast alles hausgemacht. Wähle deine Sauce: Knoblauch, scharf oder am besten beides.",
    catSandwich: "Shawarma und Sandwiches",
    mChickenName: "Shawarma Poulet",
    tagFav3: "Gäste-Favorit",
    mChicken: "Mariniertes Poulet, frisch vom Spiess, mit Salat und Knoblauchsauce im Fladenbrot.",
    mSujukName: "Sujuk-Shawarma",
    tagSpec2: "Hausspezialität",
    mSujuk: "Würzige Sujuk im Shawarma-Stil, die Spezialität des Hauses, für die Gäste von weit her anreisen.",
    mBeefName: "Shawarma Rind",
    mBeef: "Hausgemachte Rindfleischscheiben vom Spiess, mit Salat und Sauce deiner Wahl.",
    mFalafelName: "Falafel-Sandwich",
    tagHomemade3: "Hausgemacht",
    mFalafel: "Knusprige Falafel aus eigener Herstellung mit Salat, Kräutern und Tahini.",
    mKaftaName: "Libanon Kafta",
    mKafta: "Würzig gewürztes Kafta im Fladenbrot, mit Salat und Sauce deiner Wahl.",
    mCheese: "Rindfleisch mit geschmolzenem Käse im warmen Brot.",
    mMenuName: "Shawarma-Menü",
    mMenu: "Dein Shawarma als Menü mit knusprigen Pommes und einem Getränk.",
    catPlates: "Teller, Mezze und Beilagen",
    mPlateName: "Shawarma-Teller",
    mPlate: "Shawarma-Fleisch deiner Wahl auf dem Teller, mit Salat, Pommes, Hummus und warmem Fladenbrot.",
    tagHomemade4: "Hausgemacht",
    mHummus: "Fein pürierte Kichererbsen mit Tahini, Zitrone und Olivenöl, dazu warmes Fladenbrot.",
    mKibbeh: "Knusprige Bulgur-Taschen mit würziger Füllung, ein Klassiker der Levante.",
    mFries: "Goldbraun und knusprig, die klassischen Begleiter zu jedem Shawarma.",
    mSaladName: "Frischer Salat",
    mSalad: "Knackiger Salat des Tages, wie er auch in unsere Sandwiches kommt.",
    mSauceName: "Saucen des Hauses",
    mSauce: "Knoblauch oder scharf, am besten beide. Frag uns einfach am Tresen.",
    mBaklava: "Süsser Abschluss aus der Levante, knusprig und honigsüss.",
    menuNote: "Die Preise ergänzen wir auf dieser Karte, sobald sie vom Haus bestätigt sind. Bis dahin frag uns am Telefon gern nach den Preisen und den aktuellen Menüs.",
    menuCta: "Am Telefon bestellen",
    factSinceLbl: "In Schaffhausen seit",
    factFormatLbl: "Format",
    factFormatVal: "Take-away und Gastraum",
    factSpitLbl: "Vom Spiess",
    factSpitVal: "Poulet, Rind und Sujuk",
    factSpecLbl: "Spezialität",
    storyCardNote: "Klein, sauber, herzlich: So beschreiben unsere Gäste das Haus.",
    storyTitle: "Ein kleiner Laden, ein grosser Spiess",
    storyP1: "Seit 2022 dreht sich an der Bachstrasse 22 unser Spiess. Geführt wird der kleine Take-away von der Inhaberfamilie selbst: Was auf den Teller und ins Brot kommt, wird hier von Hand vorbereitet, vom Fladenbrot bis zur Falafel.",
    storyP2: "Drinnen wartet eine kleine Grotte, die unsere Gäste an die Levante erinnert: Stein, warmes Licht und wenige Tische. Und wer es eilig hat, nimmt sein Shawarma einfach mit, dafür sind wir da.",
    storyP3: "Was Gäste am meisten loben, ist die Herzlichkeit: grosszügige Portionen, eine kleine Süssigkeit als Geschenk dazu und das Gefühl, willkommen zu sein.",
    chip1: "Seit 2022 an der Bachstrasse",
    chip2: "Von der Inhaberfamilie geführt",
    chip3: "Fast alles hausgemacht",
    chip4: "Take-away gehört zum Kern",
    storyRating: "Sterne aus über 290 Google-Bewertungen. Gäste loben vor allem den Geschmack wie zu Hause, die grosszügigen Portionen und die Herzlichkeit der Gastgeber.",
    trustTitle: "Gut zu wissen, bevor du kommst",
    t1Title: "Bewertet mit 4.9 Sternen",
    t1Desc: "Über 290 Google-Bewertungen, und die allermeisten sind begeistert: Geschmack, Portionen und Gastfreundschaft werden immer wieder gelobt.",
    t2Title: "Fast alles hausgemacht",
    t2Desc: "Brot, Falafel und die Rindfleischscheiben für den Spiess entstehen bei uns im Haus. Das schmeckt man, sagen unsere Gäste.",
    t3Title: "Take-away und Vorbestellung",
    t3Desc: "Anrufen, abholen, geniessen: Bestell am Telefon vor, besonders bei grösseren Bestellungen, dann wartet dein Essen schon auf dich.",
    t4Title: "Die kleine Grotte",
    t4Desc: "Wer bleibt, sitzt in unserer steinernen Grotte, die an die Levante erinnert. Klein, ruhig und ganz anders als draussen.",
    orderTitle: "Mittag an der Bachstrasse, ohne Wartezeit",
    orderSub: "Shawarma-Menüs für die Mittagspause, Take-away zum Vorbestellen am Telefon und ein paar Tische in der Grotte, wenn du bleiben willst.",
    ccTitle: "Take-away vorbestellen",
    cc1Title: "Gericht wählen",
    cc1Desc: "Such dir oben in der Speisekarte aus, worauf du Lust hast.",
    cc2Title: "Anrufen und Abholzeit sagen",
    cc2Desc: "Ein kurzer Anruf genügt. Wir sagen dir, wann dein Essen bereit ist.",
    cc3Title: "Abholen und geniessen",
    cc3Desc: "Dein Essen wartet an der Bachstrasse 22 auf dich, frisch und warm.",
    ccCta: "Jetzt anrufen",
    dlTitle: "Vor Ort und für Gruppen",
    dlDesc: "Bleib zum Essen in der kleinen Grotte oder nimm Platz, wo es geht. Für grössere Bestellungen und Gruppen ruf am besten vorher an, dann bereiten wir alles in Ruhe vor. Am Mittag macht dich ein Shawarma-Menü mit Pommes und Getränk am schnellsten satt.",
    dlCta: "Für die Gruppe anrufen",
    dlDir: "Route planen",
    visitTitle: "An der Bachstrasse, wir freuen uns auf dich",
    visitAddrTitle: "Adresse und Kontakt",
    visitPhoneLabel: "Telefon:",
    visitDirections: "Route planen",
    ctaCall2: "Anrufen",
    visitHoursTitle: "Öffnungszeiten",
    hoursCallText: "Unsere Zeiten ändern sich rund um Feiertage und Ferien. Ruf kurz an, wir sagen dir sofort, wie lange heute geöffnet ist.",
    hoursCta: "Kurz anrufen",
    visitService: "Gegessen wird in der kleinen Grotte oder unterwegs: Alles gibt es auch zum Mitnehmen.",
    visitTravelTitle: "Anreise",
    travelStationStrong: "Bahnhof und Altstadt",
    travelStation: "sind wenige Gehminuten entfernt, ideal vor oder nach dem Rheinfall-Ausflug und einem Bummel durch die Altstadt mit dem Munot.",
    travelWalkStrong: "Am besten zu Fuss,",
    travelWalk: "denn die Parkplätze rund um die Bachstrasse sind begrenzt, und zu Fuss oder mit dem Velo bist du am schnellsten bei uns.",
    footerSub: "Libanesisches Streetfood · Bachstrasse 22, 8200 Schaffhausen",
    navMenu2: "Speisekarte",
    navStory2: "Unsere Geschichte",
    navVisit2: "Besuch",
    footerTop: "Nach oben",
    footerNote: "4.9 Sterne aus über 290 Google-Bewertungen, fast alles hausgemacht.",
    barCall: "Anrufen",
    barOrder: "Vorbestellen",
    barDir: "Wegbeschreibung",
    barMenu: "Speisekarte"
  },
  en: {
    metaTitle: "Original Beirut: Lebanese Street Food in Schaffhausen",
    skip: "Skip to the menu",
    wordmarkSub: "Lebanese Street Food · Schaffhausen",
    navSig: "Highlights",
    navMenu: "Menu",
    navStory: "Our Story",
    navOrder: "Takeaway",
    navVisit: "Visit",
    badgeRating: "4.9 · over 290 Google reviews",
    badgeCuisine: "Lebanese street food",
    h1a: "Beirut.",
    h1b: "In Schaffhausen",
    heroRotatePrefix: "Fresh off the spit:",
    heroRotateSuffix: ", sliced by hand every day.",
    heroLede: "Lebanon the way it tastes on the street: shawarma, falafel and mezze, almost everything homemade and generously served, on Bachstrasse in Schaffhausen's old town.",
    ctaMenu: "See the menu",
    ctaOrder: "Pre-order takeaway",
    ctaCall: "Call us",
    heroNote: "Ordering for a group? Call ahead and everything will be ready when you arrive.",
    heroFact2: "Takeaway and a small dining room with a grotto",
    sigTitle: "What our guests come back for",
    sigSub: "Four dishes that come up again and again in the reviews, from the chicken shawarma to the house's sujuk speciality.",
    tagFav: "Guest favourite",
    tagSpec: "House speciality",
    tagHomemade: "Homemade",
    sig1Desc: "Marinated chicken off the spit, freshly sliced, with salad and garlic sauce in warm flatbread, plus crisp fries.",
    sig2Desc: "Spiced sujuk sausage served as a shawarma, the way our guests know it almost only from here. With pickles and hot sauce if you like.",
    sig3Desc: "Crisp outside, green and juicy inside, made in-house, with salad, herbs and tahini in flatbread. For many guests, the best falafel in town.",
    tagHomemade2: "Homemade",
    sig4Name: "Mezze Plate with Hummus and Kibbeh",
    sig4Desc: "Creamy hummus with olive oil, crisp kibbeh, salad and warm flatbread. The plate for sharing and dipping.",
    sigMoreTitle: "More house favourites",
    sl1Desc: "Beef in slices, marinated and stacked in-house, sliced fresh off the spit.",
    sl2Desc: "Juicy beef with melted cheese in warm bread.",
    tagFav2: "Guest favourite",
    sl3Desc: "Sweet and crisp, and much loved by our guests as a little gift from the house.",
    menuTitle: "From the spit and the small kitchen",
    menuSub: "Everything freshly prepared, almost everything homemade. Choose your sauce: garlic, hot, or best of all both.",
    catSandwich: "Shawarma and sandwiches",
    mChickenName: "Chicken Shawarma",
    tagFav3: "Guest favourite",
    mChicken: "Marinated chicken, fresh off the spit, with salad and garlic sauce in flatbread.",
    mSujukName: "Sujuk Shawarma",
    tagSpec2: "House speciality",
    mSujuk: "Spiced sujuk in shawarma style, the house speciality guests travel from afar for.",
    mBeefName: "Beef Shawarma",
    mBeef: "Homemade beef slices off the spit, with salad and a sauce of your choice.",
    mFalafelName: "Falafel Sandwich",
    tagHomemade3: "Homemade",
    mFalafel: "Crisp falafel made in-house with salad, herbs and tahini.",
    mKaftaName: "Lebanon Kafta",
    mKafta: "Well-spiced kafta in flatbread, with salad and a sauce of your choice.",
    mCheese: "Beef with melted cheese in warm bread.",
    mMenuName: "Shawarma Menu",
    mMenu: "Your shawarma as a menu with crisp fries and a drink.",
    catPlates: "Plates, mezze and sides",
    mPlateName: "Shawarma Plate",
    mPlate: "Shawarma meat of your choice on a plate, with salad, fries, hummus and warm flatbread.",
    tagHomemade4: "Homemade",
    mHummus: "Silky chickpeas with tahini, lemon and olive oil, with warm flatbread.",
    mKibbeh: "Crisp bulgur shells with a spiced filling, a Levantine classic.",
    mFries: "Golden and crisp, the classic side to every shawarma.",
    mSaladName: "Fresh Salad",
    mSalad: "Crisp salad of the day, the same that goes into our sandwiches.",
    mSauceName: "House Sauces",
    mSauce: "Garlic or hot, best of all both. Just ask us at the counter.",
    mBaklava: "A sweet Levantine finish, crisp and honeyed.",
    menuNote: "We will add prices to this menu as soon as they are confirmed by the house. Until then, feel free to ask us by phone about prices and the current menus.",
    menuCta: "Order by phone",
    factSinceLbl: "In Schaffhausen since",
    factFormatLbl: "Format",
    factFormatVal: "Takeaway and dining room",
    factSpitLbl: "Off the spit",
    factSpitVal: "Chicken, beef and sujuk",
    factSpecLbl: "Speciality",
    storyCardNote: "Small, spotless, warm-hearted: that is how our guests describe the place.",
    storyTitle: "A small shop, a big spit",
    storyP1: "Our spit has been turning at Bachstrasse 22 since 2022. The small takeaway is run by the owning family itself: everything that lands on the plate or in the bread is prepared here by hand, from the flatbread to the falafel.",
    storyP2: "Inside waits a small grotto that reminds our guests of the Levant: stone, warm light and a few tables. And if you are in a hurry, take your shawarma to go, that is what we are here for.",
    storyP3: "What guests praise most is the warmth: generous portions, a little sweet as a gift, and the feeling of being welcome.",
    chip1: "On Bachstrasse since 2022",
    chip2: "Run by the owning family",
    chip3: "Almost everything homemade",
    chip4: "Takeaway at its core",
    storyRating: "stars from over 290 Google reviews. Guests praise above all the taste of home, the generous portions and the hosts' warmth.",
    trustTitle: "Good to know before you come",
    t1Title: "Rated 4.9 stars",
    t1Desc: "Over 290 Google reviews, and the vast majority are enthusiastic: taste, portions and hospitality are praised again and again.",
    t2Title: "Almost everything homemade",
    t2Desc: "Bread, falafel and the beef slices for the spit are made here in the house. You can taste it, our guests say.",
    t3Title: "Takeaway and pre-ordering",
    t3Desc: "Call, collect, enjoy: pre-order by phone, especially for larger orders, and your food will be waiting for you.",
    t4Title: "The little grotto",
    t4Desc: "Stay a while in our stone grotto, which recalls the Levant. Small, calm and quite unlike the street outside.",
    orderTitle: "Lunch on Bachstrasse, without the wait",
    orderSub: "Shawarma menus for the lunch break, takeaway to pre-order by phone and a few tables in the grotto if you want to stay.",
    ccTitle: "Pre-order your takeaway",
    cc1Title: "Choose your dish",
    cc1Desc: "Pick what you fancy from the menu above.",
    cc2Title: "Call and name your pickup time",
    cc2Desc: "A short call is enough. We will tell you when your food is ready.",
    cc3Title: "Collect and enjoy",
    cc3Desc: "Your food will be waiting for you at Bachstrasse 22, fresh and warm.",
    ccCta: "Call now",
    dlTitle: "Eating in and groups",
    dlDesc: "Stay to eat in the little grotto, or take a seat where you can. For larger orders and groups it is best to call ahead so we can prepare everything in good time. At lunch, a shawarma menu with fries and a drink is the fastest way to get full.",
    dlCta: "Call for your group",
    dlDir: "Get directions",
    visitTitle: "On Bachstrasse, we look forward to seeing you",
    visitAddrTitle: "Address and contact",
    visitPhoneLabel: "Phone:",
    visitDirections: "Get directions",
    ctaCall2: "Call us",
    visitHoursTitle: "Opening hours",
    hoursCallText: "Our hours change around public holidays and holiday periods. Give us a quick call and we will tell you straight away how long we are open today.",
    hoursCta: "Call quickly",
    visitService: "Eat in the little grotto or on the go: everything is also available to take away.",
    visitTravelTitle: "Getting here",
    travelStationStrong: "Station and old town",
    travelStation: "are a few minutes' walk away, perfect before or after a Rhine Falls trip and a stroll through the old town beneath the Munot.",
    travelWalkStrong: "Best on foot,",
    travelWalk: "as parking around Bachstrasse is limited, and on foot or by bike you will reach us fastest.",
    footerSub: "Lebanese street food · Bachstrasse 22, 8200 Schaffhausen",
    navMenu2: "Menu",
    navStory2: "Our Story",
    navVisit2: "Visit",
    footerTop: "Back to top",
    footerNote: "Rated 4.9 stars from over 290 Google reviews, almost everything homemade.",
    barCall: "Call",
    barOrder: "Pre-order",
    barDir: "Directions",
    barMenu: "Menu"
  }
};

const ROTATE = {
  de: ["Shawarma", "Sujuk", "Falafel", "Kibbeh"],
  en: ["Shawarma", "Sujuk", "Falafel", "Kibbeh"]
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.de;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-set-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("beirut-lang", lang); } catch (e) { /* private mode */ }
  setRotateWord(0, lang, true);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.getAttribute("data-set-lang"));
  });
});

function currentLang() {
  return document.documentElement.lang === "en" ? "en" : "de";
}

// Rotating dish word
const rotateEl = document.getElementById("rotateWord");
let rotateIdx = 0;
function setRotateWord(idx, lang, immediate) {
  const words = ROTATE[lang] || ROTATE.de;
  rotateIdx = ((idx % words.length) + words.length) % words.length;
  if (!rotateEl) return;
  if (immediate) { rotateEl.textContent = words[rotateIdx]; return; }
  rotateEl.classList.add("is-out");
  setTimeout(() => {
    rotateEl.textContent = words[rotateIdx];
    rotateEl.classList.remove("is-out");
  }, 280);
}
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (rotateEl && !reduceMotion.matches) {
  setInterval(() => setRotateWord(rotateIdx + 1, currentLang(), false), 2600);
}

// Scroll reveals
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion.matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// Subtle hero parallax (transform only, reduced-motion safe)
const heroImg = document.getElementById("heroImg");
if (heroImg && !reduceMotion.matches) {
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        heroImg.style.transform = "scale(1.06) translateY(" + (y * 0.08) + "px)";
        ticking = false;
      });
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Restore saved language
try {
  const saved = localStorage.getItem("beirut-lang");
  if (saved && I18N[saved] && saved !== "de") applyLang(saved);
} catch (e) { /* private mode */ }
