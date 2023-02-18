export class User {
  public username: string;
  public password: string;
  public email: string;

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  isEqual(user: User): boolean {
    if(this.username === user.username && this.password == user.password && this.email == user.email)
      return true;
    else
      return false;
  }
}
