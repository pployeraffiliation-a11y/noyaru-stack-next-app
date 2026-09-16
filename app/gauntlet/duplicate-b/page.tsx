// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.
export const metadata = {
  title: 'Deux pages qui portent exactement le meme titre pour le test',
  description: 'Page de test pour le parcours d obstacles Noyaru, illustrant un cas spécifique de duplication de meta description unique.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
  },
  openGraph: {
    type: 'article',
    title: 'Deux pages qui portent exactement le meme titre pour le test',
    description: 'Page de test pour le parcours d obstacles Noyaru, illustrant un cas spécifique de duplication de meta description unique.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deux pages qui portent exactement le meme titre pour le test',
    description: 'Page de test pour le parcours d obstacles Noyaru, illustrant un cas spécifique de duplication de meta description unique.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : duplicate b</h1>
      <p>Cette page du parcours traite le cas « duplicate b ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
