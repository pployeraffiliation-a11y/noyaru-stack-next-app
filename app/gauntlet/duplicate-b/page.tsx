// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.
export const metadata = {
  title: 'Parcours Noyaru : duplicate-b, jumelle de duplicate-a',
  description: 'Page « duplicate-b » du parcours d\'obstacles : jumelle de duplicate-a, elle sert à valider la détection des meta descriptions dupliquées entre deux pages',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours Noyaru : duplicate-b, jumelle de duplicate-a',
    description: 'Page « duplicate-b » du parcours d\'obstacles : jumelle de duplicate-a, elle sert à valider la détection des meta descriptions dupliquées entre deux pages',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours Noyaru : duplicate-b, jumelle de duplicate-a',
    description: 'Page « duplicate-b » du parcours d\'obstacles : jumelle de duplicate-a, elle sert à valider la détection des meta descriptions dupliquées entre deux pages',
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
