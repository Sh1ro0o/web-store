import { Injectable } from "@angular/core";
import { Item } from "../Models/item.model";

@Injectable({providedIn: 'root'})
export class ItemsService {
  private items: Item[] = [
    //       id    name                    price        description                                                 img path                         quantity
    new Item('1', 'Santa',                  30,     'Soft santa plushie',                                     'assets/images/santa.jpg',                5),
    new Item('2', 'Dragon',                 45,     'Dragon plushie',                                         'assets/images/dragon.jpg',               10),
    new Item('3', 'Unicorn',                28,     "Unicorn with a glow in the dark collar",                 'assets/images/unicorn.jpg',              20),
    new Item('4', 'Christmas Wreath',       10,     'Great decoration or christmas tree ornament',            'assets/images/christmas-wreath.jpg',     3),
    new Item('5', 'Corgi',                  25,     'Cute soft plushie corgi dog',                            'assets/images/corgi.jpg',                40),
    new Item('6', 'Dog',                    25,     'Cute dog with a scarf',                                  'assets/images/dog.jpg',                  5),
    new Item('7', 'Doll',                   30,     'Doll in a blue dress with curly hair',                   'assets/images/doll.jpg',                 6),
    new Item('8', 'Unicorn Baby Socks',     5,      'Comfortable and cute socks for a baby',                  'assets/images/unicorn-baby-socks.jpg',   2),
    new Item('9', 'Snowman',                15,     'Snowman plushi with blue clothes',                       'assets/images/snowman.jpg',              1),
    new Item('10', 'Gnome',                 5,      'Small cute gnome plushie',                               'assets/images/gnome.jpg',                15),
    new Item('11', 'Helicopter',            15,     'Cute helicopter plushie with eyes',                      'assets/images/helicopter.jpg',           2),
    new Item('12', 'Grinch',                15,     'Grinch doll for decoration',                             'assets/images/grinch.jpg',               4),
    new Item('13', 'Hello Kitty Keychain',  5,      'Cute hello kitty plushie on a keychain',                 'assets/images/hello-kitty-keychain.jpg', 30),
    new Item('14', 'Scarf',                 5,      'Warm colorful scarf',                                    'assets/images/scarf.jpg',                4),
    new Item('15', 'Nutcracker',            15,     'Nutcracker plushie (not actually for cracking nuts)',    'assets/images/nutcracker.jpg',           16),
    new Item('16', 'Reindeer',              30,     'Raindeer plushie with a sweater, scarf and a red nose',  'assets/images/reindeer.jpg',             23),
    new Item('17', 'Race Car',              23,     'Blue race car plushie',                                  'assets/images/race-car.jpg',             24),
    new Item('18', 'Hat',                   8,      'A soft hat',                                             'assets/images/hat.jpg',                  27),
    new Item('19', 'Nurse',                 15,     'Nurse plushie with a mask and a complete nurse outfit',  'assets/images/nurse.jpg',                29),
    new Item('20', 'Minions Set',           75,     'Complete minions set with Bob, Kevin and Stewart',       'assets/images/minions-set.jpg',          1),
  ];

  getItems(): Item[] {
    //backend call to get items
    return this.items;
  }
}
