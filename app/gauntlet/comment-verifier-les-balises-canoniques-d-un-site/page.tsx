// FAMILLE VISEE : verifier_balises_canoniques
// Vérification des balises canoniques d'un site pour assurer une bonne indexation.
export const metadata = {
  title: 'Comment vérifier les balises canoniques d\'un site',
  description: 'Cette page explique comment vérifier les balises canoniques d\'un site pour garantir une indexation correcte par les moteurs de recherche.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site',
  },
  openGraph: {
    type: 'article',
    title: 'Comment vérifier les balises canoniques d\'un site',
    description: 'Cette page explique comment vérifier les balises canoniques d\'un site pour garantir une indexation correcte par les moteurs de recherche.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comment vérifier les balises canoniques d\'un site',
    description: 'Cette page explique comment vérifier les balises canoniques d\'un site pour garantir une indexation correcte par les moteurs de recherche.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Vérification des balises canoniques</h1>
      <p>Cette page fournit des instructions sur la manière de vérifier les balises canoniques d\'un site. Les balises canoniques sont essentielles pour éviter le contenu dupliqué et pour indiquer aux moteurs de recherche quelle version d\'une page doit être indexée.</p>
      <p>Pour vérifier les balises canoniques, vous pouvez utiliser des outils comme Google Search Console ou des extensions de navigateur qui analysent le code source des pages. Assurez-vous que chaque page a une balise canonique correcte pointant vers l\'URL souhaitée.</p>
      <p><a href="/">Retour à l'accueil</a></p>
    </main>
  );
}
