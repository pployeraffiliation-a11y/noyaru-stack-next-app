export const metadata = {
  title: "Accueil du site de test Next App Router",
  description: "Site fixture Next.js App Router : les valeurs de tete sont un export metadata, la cinquieme facon d'ecrire la meme chose parmi les neuf stacks.",
  alternates: { canonical: "https://noyaru-stack-next-app.netlify.app/" },
  openGraph: {
    type: "website",
    title: "Accueil du site de test Next App Router",
    description: "Site fixture Next.js App Router.",
    url: "https://noyaru-stack-next-app.netlify.app/",
    images: ["https://noyaru-stack-next-app.netlify.app/og.png"],
  },
};

export default function Page() {
  return <main><h1>Accueil</h1><p>Site de test Next App Router.</p></main>;
}
