export * from './tag.enums.card';

export enum CardClass {
    INVALID = 0,
    DEATHKNIGHT = 1,
    DRUID = 2,
    HUNTER = 3,
    MAGE = 4,
    PALADIN = 5,
    PRIEST = 6,
    ROGUE = 7,
    SHAMAN = 8,
    WARLOCK = 9,
    WARRIOR = 10,
    DREAM = 11,
    NEUTRAL = 12,
}

export enum Faction {
    INVALID = 0,
    HORDE = 1,
    ALLIANCE = 2,
    NEUTRAL = 3,
}

export enum Rarity {
    INVALID = 0,
    COMMON = 1,
    FREE = 2,
    RARE = 3,
    EPIC = 4,
    LEGENDARY = 5,
}

export enum CardSet {
    INVALID = 0,
    TEST_TEMPORARY = 1,
    CORE = 2,
    EXPERT1 = 3,
    HOF = 4,
    MISSIONS = 5,
    DEMO = 6,
    NONE = 7,
    CHEAT = 8,
    BLANK = 9,
    DEBUG_SP = 10,
    PROMO = 11,
    NAXX = 12,
    GVG = 13,
    BRM = 14,
    TGT = 15,
    CREDITS = 16,
    HERO_SKINS = 17,
    TB = 18,
    SLUSH = 19,
    LOE = 20,
    OG = 21,
    OG_RESERVE = 22,
    KARA = 23,
    KARA_RESERVE = 24,
    GANGS = 25,
    GANGS_RESERVE = 26,
    UNGORO = 27,
}

export enum CardType {
    INVALID = 0,
    GAME = 1,
    PLAYER = 2,
    HERO = 3,
    MINION = 4,
    SPELL = 5,
    ENCHANTMENT = 6,
    WEAPON = 7,
    ITEM = 8,
    TOKEN = 9,
    HERO_POWER = 10,
}