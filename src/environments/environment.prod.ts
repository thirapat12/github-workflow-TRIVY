export const environment = {
  production: true,
  matadorsuite: {
    www: 'https://www.ais.matadorsuite.com',
    portfolio: '/portfolio',
    product: '/product'
  },
  timesheet: {
    api: 'https://team-api.matadorsuite.com',
    web: '/team',
  },
  pop: {
    api: 'https://pop-api.matadorsuite.com'
  },
  git: {
    web: 'https://git.matadorsuite.com/',
  },
  jenkins: {
    web: ''
  },
  xwiki: {
    web: 'https://wiki.matadorsuite.com/xwiki'
  },
  authConfig: {
    clientId: 'client-matadorsuite-dev',
    server: 'https://auth.matadorsuite.com',
    scope: 'email openid profile roles api-pop-dev',
  }
};
