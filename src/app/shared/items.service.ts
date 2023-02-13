import { Injectable } from "@angular/core";
import { Item } from "./item.model";

@Injectable({providedIn: 'root'})
export class ItemsService {
  items: Item[] = [
    new Item('Santa', 30, 'Soft santa plushie', 'assets/images/santa.jpg'),
    new Item('Dragon', 45, 'Dragon plushie', 'assets/images/dragon.jpg'),
    new Item('Unicorn', 28, "Unicorn with a glow in the dark collar", 'assets/images/unicorn.jpg'),
    new Item('Christmas Wreath', 10, 'Great decoration or christmas tree ornament', 'assets/images/christmas-wreath.jpg'),
    new Item('Corgi', 25, 'Cute soft plushie corgi dog', 'assets/images/corgi.jpg'),
    new Item('Dog', 25, 'Cute dog with a scarf', 'assets/images/dog.jpg'),
    new Item('Doll', 5, 'Doll in a blue dress with curly hair', 'assets/images/doll.jpg'),
    new Item('Unicorn Baby Socks', 5, 'Comfortable and cute socks for a baby', 'assets/images/unicorn-baby-socks.jpg'),
    new Item('Snowman', 15, 'Snowman plushi with blue clothes', 'assets/images/snowman.jpg'),
    new Item('Gnome', 5, 'Small cute gnome plushie', 'assets/images/gnome.jpg'),
    new Item('Helicopter', 15, 'Cute helicopter plushie with eyes', 'assets/images/helicopter.jpg'),
    new Item('Grinch', 15, 'Grinch doll for decoration', 'assets/images/grinch.jpg'),
    new Item('Hello Kitty Keychain', 5, 'Cute hello kitty plushie on a keychain', 'assets/images/hello-kitty-keychain.jpg'),
    new Item('Scarf', 5, 'Warm colorful scarf', 'assets/images/scarf.jpg'),
    new Item('Nutcracker', 5, 'Nutcracker plushie (not actually for cracking nuts)', 'assets/images/nutcracker.jpg'),
    new Item('Reindeer', 30, 'Raindeer plushie with a sweater, scarf and a red nose', 'assets/images/reindeer.jpg'),
    new Item('Race Car', 5, 'Blue race car plushie', 'assets/images/race-car.jpg'),
    new Item('Hat', 8, 'A soft hat', 'assets/images/hat.jpg'),
    new Item('Nurse', 15, 'Nurse plushie with a mask and a complete nurse outfit', 'assets/images/nurse.jpg'),
    new Item('Minions Set', 75, 'Complete minions set with Bob, Kevin and Stewart', 'assets/images/minions-set.jpg'),
  ];

  getItems(): Item[] {
    //backend call to get items
    return this.items;
  }
}
