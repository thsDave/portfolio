import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/site'

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: SITE.role,
    url: SITE.productionUrl,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SV',
    },
    sameAs: [SITE.githubUrl, SITE.linkedinUrl],
    knowsAbout: [
      'Desarrollo web',
      'React',
      'Laravel',
      'PHP',
      'Administración de servidores',
      'Seguridad informática',
      'Microsoft 365',
      'Coordinación de IT',
      'Consultoría tecnológica',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
