export const environment = {
  production: true,
  matadorsuite: {
    www: 'https://www.matadorsuite.com',
    portfolio: 'https://ais.matadorsuite.com/portfolio',
    product: 'https://ais.matadorsuite.com/product',
    evaluation: '/evaluation'
  },
  timesheet: {
    api: 'https://team-api.matadorsuite.com',
    web: 'https://ais.matadorsuite.com/team',
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
    clientId: 'client-matadorsuite',
    server: 'https://auth.matadorsuite.com',
    scope: 'email openid profile roles api-pop',
    postLogoutRedirectUrl: 'https://www.matadorsuite.com'
  }
};
