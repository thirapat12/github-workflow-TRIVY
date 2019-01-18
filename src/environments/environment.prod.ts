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
    api: 'http://pop-api.mts.myaisdc.com',
    service: 'http://pop.mts.myaisdc.com/service',
    admin: 'http://pop.mts.myaisdc.com/admin',
    product: 'http://pop.mts.myaisdc.com/project',
    portfolio: 'http://pop.mts.myaisdc.com/portfolio',
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
    clientId: 'client-pop-dev',
    server: 'http://identity.mts.myaisdc.com',
    scope: 'email openid profile roles api-pop-dev'
  }
};
