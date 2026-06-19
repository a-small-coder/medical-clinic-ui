export const ROUTES = {
  home: '/',
  catalog: '/catalog/all-analyzes',
  aboutUs: '/about-us',
  forClients: '/for-clients',
  forPartners: '/for-partners',
  license: '/license',
  location: '/location',
  stocks: '/stocks',
  services: '/services',
  servicePackages: '/services?type=packages',
  doctors: '/doctors',
  booking: '/booking',
  personalDataPolicy: '/personal-data-policy',
  personalDataConsent: '/personal-data-consent',
  terms: '/terms',
  cookiePolicy: '/cookie-policy',
};

export const LEGACY_REDIRECTS = {
  '/aboutus': ROUTES.aboutUs,
  '/aboutus/': ROUTES.aboutUs,
  '/forclients': ROUTES.forClients,
  '/forpartners': ROUTES.forPartners,
  '/personal-conversations': ROUTES.personalDataPolicy,
  '/service': ROUTES.services,
  '/service/vac': ROUTES.servicePackages,
};
