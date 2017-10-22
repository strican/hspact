import { Component } from '@angular/core';

import { ICard } from './../../model/card';
import { CardService } from './../../services/cards.service';

import { Response } from '@angular/http';

@Component({
    selector: 'userform',
    templateUrl: './userform.component.html',
    providers: [CardService]
})
export class UserFormComponent {
    public username: string;
    public submitted = false;

    public cards: ICard[];

    constructor(private cardService: CardService) { }

    public onSubmit() {
        this.submitted = true;

        this.cardService.getCards()
            .then(cards => this.cards = cards);
    }

    public resetForm() {
        this.submitted = false;
        this.username = "";
    }
}
