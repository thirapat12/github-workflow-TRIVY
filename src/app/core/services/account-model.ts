import { CookieService } from 'ngx-cookie-service';

export class AccountModel {
  public Username: string;
  public IsRegister: boolean;
  public User: any;

  constructor(private cookieService: CookieService) {
    const username = localStorage.getItem('username');
    const isRegister = localStorage.getItem('isRegister');
    const user = JSON.parse(this.cookieService.get('UserProfile'));

    this.Username = username === null ? '' : username;
    this.IsRegister = isRegister === null ? false : Boolean(isRegister);
    this.User = user;
  }
}
