import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


/*
  Generated class for the FlashCardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlashCardsProvider {
  defaultCard = {
    front: "Hello",
    back: "World!"
  };
  idx = 0;
  defaultCards: any[] = [];
  httpCl: HttpClient;
  public _robotOverlords: any[] = [];
  constructor(public http: HttpClient) {
    console.log('FlashCardsProvider Provider');
    this.httpCl = http;
    this.getData();
  }
  getData() {
    return this.httpCl.get('assets/data/javacards.txt').subscribe(data => {
      for (var key in data) {
        this.defaultCards.push(data[key]);
      }
      });
  }

  cardFor(cardindex) {
    this.idx = cardindex % this.defaultCards.length;
    return this.defaultCards[this.idx];
  }
  allCards() {
    return this.defaultCards
  }

  testCards =
    [
      {
        front: "Hello1",
        back: "World!"
      },
      {
        front: "Hello1",
        back: "World!"
      },
      {
        front: "Card2",
        back: "Wow!"
      },
      {
        front: "Card3",
        back: "Nothing!"
      },
      {
        front: "Card4",
        back: "Never Mind!"
      },
      {
        front: "Card5",
        back: "Sweet!"
      }

    ];

}
