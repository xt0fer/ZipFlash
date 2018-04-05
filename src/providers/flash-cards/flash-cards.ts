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
    console.log('Hello FlashCardsProvider Provider');
    this.httpCl = http;
    this.getData();
  }
  getData() {
    return this.httpCl.get('assets/data/javacards.txt').subscribe(data => {
      // var stringifiedData = JSON.stringify(data);
      // //var parsedData: any[] = JSON.parse(stringifiedData);
      // this.defaultCards = JSON.parse(stringifiedData);
      for (var key in data) {
        this.defaultCards.push(data[key]);
      }
      });
  }


  // load() {
  //   console.log('load json called');
  //   return new Promise(resolve => {
  //     this.http.get('assets/data/javacards.json').map(response => {
  //       this.data = response.json();
  //       resolve(this.data);
  //     });
  //   });
  // }
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
        back: "Asshole!"
      },
      {
        front: "Card3",
        back: "Asshole!"
      },
      {
        front: "Card4",
        back: "Asshole!"
      },
      {
        front: "Card5",
        back: "Sweet!"
      }

    ];

}
