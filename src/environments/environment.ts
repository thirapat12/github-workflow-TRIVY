// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  matadorsuite: {
    www: 'https://www.matadorsuite.com',
  },
  timesheet: {
    api: 'http://team-api.mts.myaisdc.com',
    web: 'http://team.mts.myaisdc.com',
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
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
