export const environment = {
  production: true,
  matadorsuite: {
    www: 'https://www.matadorsuite.com',
    portfolio: '/portfolio',
  },
  timesheet: {
    api: 'https://team-api.matadorsuite.com',
    web: '/team',
  },
  pop: {
    api: 'https://pop-api.mts.myaisdc.com',
    service: 'https://pop.mts.myaisdc.com/service',
    admin: 'https://pop.mts.myaisdc.com/admin',
    product: 'https://pop.mts.myaisdc.com/project',
    portfolio: 'https://pop.mts.myaisdc.com/portfolio',
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
  }
};
