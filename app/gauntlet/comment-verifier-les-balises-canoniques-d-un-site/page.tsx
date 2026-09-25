// FAMILLE VISEE : canonical_verification_guide
// page correcte partout, canonical auto-referent, destinee a documenter la verification des balises canoniques.
export const metadata = {
  title: 'Comment verifier les balises canoniques d\'un site',
  description: 'Guide pratique pour verifier les balises canoniques d\'un site : ou les trouver, comment les lire et quelles erreurs reperer au crawl.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site',
  },
  openGraph: {
    type: 'article',
    title: 'Comment verifier les balises canoniques d\'un site',
    description: 'Guide pratique pour verifier les balises canoniques d\'un site : ou les trouver, comment les lire et quelles erreurs reperer au crawl.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comment verifier les balises canoniques d\'un site',
    description: 'Guide pratique pour verifier les balises canoniques d\'un site : ou les trouver, comment les lire et quelles erreurs reperer au crawl.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Comment verifier les balises canoniques d'un site</h1>
      <p>La balise canonique indique aux moteurs de recherche quelle est l'URL de reference pour un contenu donne. Sa verification evite que plusieurs adresses concurrentes soient traitees comme du contenu duplique.</p>
      <h2>Ou trouver la balise</h2>
      <p>La balise apparait dans le <code>&lt;head&gt;</code> du document sous la forme <code>&lt;link rel="canonical" href="..." /&gt;</code>. Ouvrez le code source de la page (clic droit puis « Afficher le code source ») et cherchez cet element. Une page ne doit contenir qu'une seule balise canonique.</p>
      <h2>Ce qu'il faut controler</h2>
      <p>Verifiez que l'URL indiquee est absolue, qu'elle repond bien en 200 et qu'elle ne pointe pas vers une page absente ou redirigee. Assurez-vous aussi que la canonique correspond a la version voulue : protocole https, presence ou non du www, et coherence des slashes de fin.</p>
      <h2>Verifier a l'echelle du site</h2>
      <p>Pour un controle global, un crawler explore chaque page et compare l'URL demandee a la canonique declaree. On repere ainsi les canoniques auto-referentes attendues, les chaines de redirection et les cas ou la canonique renvoie une erreur. Recouper ces resultats avec le sitemap permet de detecter les incoherences.</p>
      <h2>Erreurs frequentes</h2>
      <p>Canonique vers une page en 404, canonique pointant vers l'accueil sur toutes les pages, canonique relative mal resolue ou balise dupliquee : ces cas envoient un signal ambigu au crawl et meritent une correction rapide.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
