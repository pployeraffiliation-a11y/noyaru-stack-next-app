// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.
export const metadata = {
  title: 'Gauntlet Noyaru — page duplicate-a, titre dupliqué A',
  description: 'Gauntlet duplicate-a : cette page sert a provoquer la detection des meta descriptions dupliquees, aux cotes de duplicate-b, dans le parcours d\'obstacles Noyaru.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
  },
  openGraph: {
    type: 'article',
    title: 'Gauntlet Noyaru — page duplicate-a, titre dupliqué A',
    description: 'Gauntlet duplicate-a : cette page sert a provoquer la detection des meta descriptions dupliquees, aux cotes de duplicate-b, dans le parcours d\'obstacles Noyaru.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-a',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gauntlet Noyaru — page duplicate-a, titre dupliqué A',
    description: 'Gauntlet duplicate-a : cette page sert a provoquer la detection des meta descriptions dupliquees, aux cotes de duplicate-b, dans le parcours d\'obstacles Noyaru.',
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
