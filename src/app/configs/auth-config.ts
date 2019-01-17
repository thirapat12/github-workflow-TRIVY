
import { environment } from '../../environments/environment';
import { AuthConfig } from 'angular-oauth2-oidc';

const bases = document.getElementsByTagName('base');
let baseHref = null;
if (bases.length > 0) {
  baseHref = bases[0].href + 'signin';
}
export const authConfig: AuthConfig = {
  /**
   * Config for Server.
   */
  issuer: environment.authConfig.server,
  redirectUri: baseHref,
  requireHttps: false,

  /**
   * Config for Connected Client.
   */
  clientId: environment.authConfig.clientId,
  scope: environment.authConfig.scope,
};
