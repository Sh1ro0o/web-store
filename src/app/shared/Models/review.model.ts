export class Review {
  public rating: number;
  public title: string;
  public description: string;
  public username: string;
  public itemId: string;

  constructor(rating: number, title: string, description: string, username: string, itemId: string) {
    this.rating = rating;
    this.title = title;
    this.description = description;
    this.username = username;
    this.itemId = itemId;
  }
}
