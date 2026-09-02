export const metadata = {
  title: "À propos de Next App : le site de test Next App Router complet",
  description: "Découvrez next-app, notre site de test Next App Router : une page témoin saine, stable et fidèle, idéale pour valider et tester vos corrections.",
  alternates: { canonical: "https://noyaru-stack-next-app.netlify.app/a-propos" },
  openGraph: {
    type: "website",
    title: "A propos du site de test Next App Router",
    description: "Page temoin du fixture Next App Router.",
    url: "https://noyaru-stack-next-app.netlify.app/a-propos",
    images: ["https://noyaru-stack-next-app.netlify.app/og.png"],
  },
};

export default function Page() {
  return <main><h1>A propos</h1><p>Page temoin : elle doit rester intacte apres la correction.</p></main>;
}
