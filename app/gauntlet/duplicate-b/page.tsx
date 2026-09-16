// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.
export const metadata = {
  title: 'Analyse des anomalies d\'URL sur la page duplicate-b',
  description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique, permettant de mieux comprendre les anomalies liées aux URL de manière unique.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
  },
  openGraph: {
    type: 'article',
    title: 'Analyse des anomalies d\'URL sur la page duplicate-b',
    description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique, permettant de mieux comprendre les anomalies liées aux URL de manière unique.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/duplicate-b',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analyse des anomalies d\'URL sur la page duplicate-b',
    description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique, permettant de mieux comprendre les anomalies liées aux URL de manière unique.',
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
