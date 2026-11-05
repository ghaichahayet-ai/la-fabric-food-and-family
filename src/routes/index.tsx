import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, MapPin, Phone, Mail, Star, Bike, ShoppingBag } from "lucide-react";
import promo from "@/assets/dishes/promo.jpg.asset.json";
import smash from "@/assets/dishes/smash.jpg.asset.json";
import chicken from "@/assets/dishes/chicken.jpg.asset.json";
import crousty from "@/assets/dishes/crousty.jpg.asset.json";
import rolls from "@/assets/dishes/rolls.jpg.asset.json";
import wrap from "@/assets/dishes/wrap.jpg.asset.json";
import cesar from "@/assets/dishes/cesar.jpg.asset.json";
import box from "@/assets/dishes/box.jpg.asset.json";
import kids from "@/assets/dishes/kids.jpg.asset.json";
import tiramisu from "@/assets/dishes/tiramisu.jpg.asset.json";
import cookies from "@/assets/dishes/cookies.png.asset.json";
import brownies from "@/assets/dishes/brownies.png.asset.json";
import logo from "@/assets/dishes/logo.jpg.asset.json";

const ORDER_URL = "https://commandes.lafabricbydaoudi.fr/order/";

// Offre du mois — modifier cet objet chaque mois.
const OFFRE_DU_MOIS = {
  mois: "Novembre",
  titre: "Menu Sandwich Merguez",
  prix: "10€",
  description:
    "Baguette croustillante, salade fraîche, tomates, oignons et sauce maison. 1 garniture, jusqu'à 2 sauces, servi avec un side et une boisson.",
  image: promo.url,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `La Fabric by Daoudi — Smash burgers & fast-food à Schiltigheim` },
      {
        name: "description",
        content:
          "Smash burgers, poulet crousty, rolls, wraps et desserts maison à Schiltigheim. Sur place, à emporter et en livraison. Offre du mois : Menu Sandwich Merguez à 10€.",
      },
      { property: "og:title", content: "La Fabric by Daoudi — Ici, on fabric' le goût" },
      {
        property: "og:description",
        content: "Fast-food urbain à Schiltigheim. Sur place, à emporter et en livraison.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Offre", "#offre"],
  ["La carte", "#carte"],
  ["Enfants", "#enfants"],
  ["Desserts", "#desserts"],
  ["Avis", "#avis"],
  ["Livraison", "#livraison"],
  ["Contact", "#contact"],
];

const CARTE = [
  { nom: "Smash Burger Cheddar", desc: "Viande smash, sauce signature, cheddar", prix: "6,50€", img: smash.url },
  { nom: "Smash Burger Chicken", desc: "Tenders, sauce signature, cheddar", prix: "7,00€", img: chicken.url },
  { nom: "Poulet Crousty", desc: "Original, aigre-douce ou spicy, avec riz", prix: "5,90€", img: crousty.url },
  { nom: "Menu Rolls", desc: "Tortilla, viande au choix, frites, 2 sauces", prix: "11,99€", img: rolls.url },
  { nom: "Wrap à composer", desc: "Tenders croustillants, 2 garnitures", prix: "7,99€", img: wrap.url },
  { nom: "Salade César", desc: "Tenders, tomates, parmesan, sauce César", prix: "8,99€", img: cesar.url },
  { nom: "La Fabric Box", desc: "Chili cheese, nuggets & onion rings", prix: "9,90€", img: box.url },
];

const DESSERTS = [
  { nom: "Cookies maison", desc: "Ceux qui l'ont goûté l'ont définitivement adopté.", prix: "4,50€", img: cookies.url },
  { nom: "Brownies", desc: "Une explosion de douceur pour vos papilles.", prix: "3,50€", img: brownies.url },
  { nom: "Tiramisu", desc: "Mangue, framboise, Ferrero Rocher ou Kinder.", prix: "3,50€", img: tiramisu.url },
];

const AVIS = [
  { nom: "Sophie L.", texte: "Les saveurs sont incroyables et chaque bouchée est un vrai plaisir ! On sent la passion derrière chaque plat." },
  { nom: "Thom's Frs", texte: "Accueillis avec un grand sourire. Un régal ! Les sauces maison sont top, je reviendrai goûter le reste de la carte." },
  { nom: "Anas B.", texte: "Excellente adresse, franchement les smash burgers sont vraiment bons. Je recommande !" },
  { nom: "The Biff", texte: "Très bon concept jusqu'au dessert. Je crois que je n'ai jamais mangé un aussi bon cookie." },
];

function Btn({ href, children, variant = "light" }: { href: string; children: React.ReactNode; variant?: "light" | "outline" | "accent" | "red" }) {
  const styles = {
    light: "bg-background text-foreground hover:bg-accent",
    outline: "border border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
    accent: "bg-accent text-accent-foreground hover:bg-background",
    red: "bg-primary text-primary-foreground hover:bg-primary-deep",
  }[variant];
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${styles}`}>
      {children} <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function Index() {
  const ticker = Array(2).fill(["Smash burgers", "Poulet crousty", "Sauces maison", "Cookies de folie", "Halal", "Sur place · À emporter · Livraison"]).flat();
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-3">
            <img src={logo.url} alt="Logo La Fabric" className="h-11 w-11 rounded-full" />
            <span className="display text-xl text-primary-foreground">La Fabric'</span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-primary-foreground lg:flex">
            {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-accent">{l}</a>)}
          </nav>
          <Btn href={ORDER_URL} variant="accent">Commander</Btn>
        </div>
      </header>

      {/* HERO = OFFRE DU MOIS */}
      <section id="offre" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-2 lg:pb-24 lg:pt-36">
          <div>
            <span className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              L'offre de {OFFRE_DU_MOIS.mois}
            </span>
            <h1 className="display mt-6 text-6xl sm:text-7xl lg:text-8xl">{OFFRE_DU_MOIS.titre}</h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/85">{OFFRE_DU_MOIS.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={ORDER_URL}>J'en profite</Btn>
              <Btn href="#carte" variant="outline">Voir la carte</Btn>
            </div>
          </div>
          <div className="relative">
            <img src={OFFRE_DU_MOIS.image} alt={OFFRE_DU_MOIS.titre} className="aspect-square w-full rotate-2 object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -left-4 flex h-32 w-32 -rotate-12 flex-col items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl">
              <span className="text-xs font-bold uppercase">Seulement</span>
              <span className="display text-5xl">{OFFRE_DU_MOIS.prix}</span>
            </div>
          </div>
        </div>
        <p className="display pointer-events-none -mb-6 select-none whitespace-nowrap text-center text-[18vw] text-primary-foreground/10">La Fabric'</p>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-ink bg-ink py-3 text-ink-foreground">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {ticker.map((t, i) => <span key={i} className="display text-lg">{t} <span className="text-primary">●</span></span>)}
        </div>
      </div>

      {/* CARTE */}
      <section id="carte" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Ici, on fabric' le goût</Eyebrow>
            <h2 className="display text-5xl text-primary-deep sm:text-6xl">Une carte pour<br />toutes les envies</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Smash burgers, poulet crousty, rolls, wraps et salades — préparés à la demande avec des produits frais et généreux.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARTE.map((d, i) => (
            <article key={d.nom} className={`group ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
              <div className="overflow-hidden bg-ink">
                <img src={d.img} alt={d.nom} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className={`font-bold uppercase text-primary-deep ${i === 0 ? "text-xl" : "text-sm"}`}>{d.nom}</h3>
                <span className="font-bold text-primary">{d.prix}</span>
              </div>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ENFANTS */}
      <section id="enfants" className="grid lg:grid-cols-2">
        <div className="bg-primary-deep">
          <img src={kids.url} alt="Menu enfant" loading="lazy" className="h-full max-h-[640px] w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-secondary px-8 py-16 lg:px-16">
          <Eyebrow>Le coin des enfants</Eyebrow>
          <h2 className="display text-6xl text-primary-deep">Menu enfant</h2>
          <ul className="mt-8 space-y-3 text-lg">
            {["1 Cheeseburger ketchup-moutarde ou 5 nuggets", "Frites twister", "1 sauce au choix", "1 Capri-Sun"].map((x) => (
              <li key={x} className="flex gap-3 border-b border-border pb-3"><span className="text-primary">●</span>{x}</li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-6">
            <span className="display text-6xl text-primary">8€</span>
            <Btn href={ORDER_URL} variant="red">Commander</Btn>
          </div>
        </div>
      </section>

      {/* DESSERTS */}
      <section id="desserts" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>Le petit plus sucré</Eyebrow>
          <h2 className="display mb-12 text-5xl sm:text-6xl">Nos desserts maison</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {DESSERTS.map((d) => (
              <article key={d.nom}>
                <img src={d.img} alt={d.nom} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="display text-2xl">{d.nom}</h3>
                  <span className="font-bold text-accent">{d.prix}</span>
                </div>
                <p className="mt-1 text-sm text-ink-foreground/70">{d.desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 inline-block bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
            Tiramisu offert sur votre 1ère commande en ligne dès 25€ avec le code « WELCOME »
          </p>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Les avis</Eyebrow>
            <h2 className="display text-5xl text-primary-deep sm:text-6xl">Ils en parlent<br />mieux que nous</h2>
          </div>
          <div className="text-right">
            <p className="display text-7xl text-primary">4,5<span className="text-3xl">/5</span></p>
            <p className="text-sm text-muted-foreground">Note moyenne Uber Eats</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {AVIS.map((a) => (
            <figure key={a.nom} className="flex flex-col justify-between border border-border bg-card p-6">
              <div>
                <div className="mb-4 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="text-sm leading-relaxed">« {a.texte} »</blockquote>
              </div>
              <figcaption className="mt-6 font-bold uppercase text-primary-deep">— {a.nom}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LIVRAISON */}
      <section id="livraison" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
          <div>
            <Eyebrow><span className="text-accent">Livraison & click and collect</span></Eyebrow>
            <h2 className="display text-6xl sm:text-7xl">Vos plats favoris, directement chez vous</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn href={`${ORDER_URL}?type=delivery`}><Bike className="h-4 w-4" /> Se faire livrer</Btn>
              <Btn href={`${ORDER_URL}?type=pickup`} variant="outline"><ShoppingBag className="h-4 w-4" /> À emporter</Btn>
            </div>
          </div>
          <ul className="space-y-6 self-center">
            {[
              ["Prix imbattables", "Moins cher que la plupart des plateformes de livraison."],
              ["Rapide et pratique", "Commandez et recevez en un rien de temps."],
              ["Paiement sécurisé", "Commandez en toute tranquillité depuis chez vous."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-6 border-b border-primary-foreground/25 pb-6">
                <span className="display text-4xl text-accent">0{i + 1}</span>
                <div><h3 className="text-xl font-bold uppercase">{t}</h3><p className="text-primary-foreground/80">{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="display mb-12 text-5xl text-primary-deep sm:text-6xl">Passez nous voir</h2>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6 text-lg">
            <p className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />1 allée Frédérique Kleinknecht<br />67300 Schiltigheim</p>
            <p className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />Tous les jours de 11h00 à 23h00</p>
            <a href="tel:+33388337749" className="flex gap-4 hover:text-primary"><Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />03 88 33 77 49</a>
            <a href="mailto:contact@lafabricbydaoudi.fr" className="flex gap-4 hover:text-primary"><Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />contact@lafabricbydaoudi.fr</a>
            <div className="pt-4"><Btn href={ORDER_URL} variant="red">Commander en ligne</Btn></div>
          </div>
          <iframe
            title="Carte La Fabric by Daoudi"
            src="https://www.google.com/maps?q=1+all%C3%A9e+Fr%C3%A9d%C3%A9rique+Kleinknecht+67300+Schiltigheim&output=embed"
            className="h-80 w-full border border-border lg:h-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-ink py-10 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5">
          <span className="display text-2xl">La Fabric' by Daoudi</span>
          <span className="text-sm text-ink-foreground/60">© {new Date().getFullYear()} — Ici, on fabric' le goût</span>
        </div>
      </footer>
    </div>
  );
}
