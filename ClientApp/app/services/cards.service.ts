import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';

import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'

// TODO fix import declaration
import { ICard } from './../model/card'

@Injectable()
export class CardService {
    private cards: ICard[] = [];
    //private response: any = null;

    private headers = new Headers({
        'Content-Type': 'application/json',
        'X-Mashape-Key': 'krBe04VHgOmshLHtFyOV2W4tuo9xp1A4JHTjsnyh9H8sfOgDhw',
    });

    // TODO: Localize this URL
    private cardsUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1";
    //private cardsUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Basic?collectible=1";

    constructor(private http: Http) { }

    getCards(): Promise<ICard[]> {
        return this.http.get(this.cardsUrl, { headers: this.headers} as RequestOptionsArgs)
            .toPromise()
            .then((response: any) => {
                var js = response.json();
                for (var set in js)
                {
                    var temp = js[set];
                    var cards = temp as ICard[];
                    this.cards = this.cards.concat(cards);
                }

                //this.cards = js as ICard[];
                //this.response = response.json();
                return this.cards;
            });
    }
}