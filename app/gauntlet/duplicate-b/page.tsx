// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.
export const metadata = {
  title: 'Parcours d\'obstacles : page duplicate B pour le test',
  description: 'Cette page illustre un cas spécifique de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours d\'obstacles : page duplicate B pour le test',
    description: 'Cette page illustre un cas spécifique de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours d\'obstacles : page duplicate B pour le test',
    description: 'Cette page illustre un cas spécifique de doublon dans le parcours d\'obstacles, avec des spécificités uniques pour le test.',
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
