// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.
export const metadata = {
  title: 'Test de parcours d\'obstacles : page duplicate A',
  description: 'Cette page illustre un cas de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
  },
  openGraph: {
    type: 'article',
    title: 'Test de parcours d\'obstacles : page duplicate A',
    description: 'Cette page illustre un cas de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test de parcours d\'obstacles : page duplicate A',
    description: 'Cette page illustre un cas de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
