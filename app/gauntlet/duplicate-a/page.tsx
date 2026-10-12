// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.
export const metadata = {
  title: 'Parcours Noyaru : duplicate-a, page avec titre jumeau',
  description: 'Page « duplicate-a » du parcours d\'obstacles : jumelle de duplicate-b, elle porte un titre et une description identiques pour declencher la detection',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours Noyaru : duplicate-a, page avec titre jumeau',
    description: 'Page « duplicate-a » du parcours d\'obstacles : jumelle de duplicate-b, elle porte un titre et une description identiques pour declencher la detection',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours Noyaru : duplicate-a, page avec titre jumeau',
    description: 'Page « duplicate-a » du parcours d\'obstacles : jumelle de duplicate-b, elle porte un titre et une description identiques pour declencher la detection',
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
