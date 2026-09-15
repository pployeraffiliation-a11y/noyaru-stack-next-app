export const metadata = {
  title: "Blog du site de test Next App Router",
  description: "Index du blog du fixture Next App Router, qui sert a verifier que la correction du canonical ne touche ni le layout partage ni la page temoin.",
  // LE DEFAUT INJECTE : le slash final. L'hote sert /blog et redirige /blog/ vers lui.
  // Ici la valeur est une propriete d'objet dans un export TypeScript — encore une autre
  // ecriture de la meme chose, et celle qui tourne chez le premier client (PR#1).
  alternates: { canonical: "https://noyaru-stack-next-app.netlify.app/blog/" },
  openGraph: {
    type: "website",
    title: "Blog du site de test Next App Router",
    description: "Index du blog du fixture Next App Router.",
    url: "https://noyaru-stack-next-app.netlify.app/blog",
    images: ["https://noyaru-stack-next-app.netlify.app/og.png"],
  },
};

export default function Page() {
  return <main><h1>Blog</h1><p>Articles.</p></main>;
}
