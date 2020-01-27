import { CookieService } from 'ngx-cookie-service';

export class AccountModel {
  public Username: string;
  public IsRegister: boolean;
  public User: any;

  constructor(private cookieService: CookieService) {
    const username = localStorage.getItem('username');
    const isRegister_main = localStorage.getItem('isRegister_main');
    const user = JSON.parse(this.cookieService.get('UserProfile'));

    this.Username = username === null ? '' : username;
    this.IsRegister = isRegister_main === null ? false : Boolean(isRegister_main);
    this.User = user;
  }
}
