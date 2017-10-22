import * as CardEnums from './enums.card';

//export interface ICard {
//    id: string;
//    dbfId: number;
//    name: string;
//    text: string;
//    flavor: string;
//    artist: string;
//    attack: number;
//    cardClass: CardEnums.CardClass;
//    collectible: boolean;
//    cost: number;
//    elite: boolean;
//    faction: CardEnums.Faction;
//    health: number;
//    mechanics: CardEnums.GameTag[];
//    rarity: CardEnums.Rarity;
//    set: CardEnums.CardSet;
//    type: CardEnums.CardType;
//}

export interface ICard {
    cardId: string;
    dbfId: number;
    name: string;
    cardSet: string;
    type: string;
    faction: string;
    rarity: string;
    text: string;
    flavor: string;
    artist: string;
    attack: number;
    cost: number;
    health: number;
    playerClass: string;
    collectible: boolean;
    elite: boolean;
    img: string;
    imgGold: string;
    mechanics: Mechanic[];
    locale: string;
}

class Mechanic
{
    name: string;
}