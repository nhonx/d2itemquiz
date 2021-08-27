var items = ["nul", "Belt of Strength",
    "Blades of Attack",
    "Blade of Alacrity",
    "Blink Dagger",
    "Boots of Speed",
    "Band of Elvenskin",
    "Bottle",
    "Iron Branch",
    "Broadsword",
    "Chainmail",
    "Circlet",
    "Clarity",
    "Claymore",
    "Cloak",
    "Animal Courier",
    "Flying Courier",
    "Demon Edge",
    "Dust of Appearance",
    "Eaglesong",
    "Energy Booster",
    "Healing Salve",
    "Gauntlets of Strength",
    "Gem of True Sight",
    "Ghost Scepter",
    "Gloves of Haste",
    "Helm of Iron Will",
    "Hyperstone",
    "Javelin",
    "Morbid Mask",
    "Magic Stick",
    "Mantle of Intelligence",
    "Mithril Hammer",
    "Mystic Staff",
    "Ogre Club",
    "Platemail",
    "Point Booster",
    "Quarterstaff",
    "Quelling Blade",
    "Reaver",
    "Sacred Relic",
    "Ring of Health",
    "Ring of Protection",
    "Ring of Regen",
    "Robe of the Magi",
    "Slippers of Agility",
    "Sage's Mask",
    "Staff of Wizardry",
    "Stout Shield",
    "Talisman of Evasion",
    "Tango",
    "Ultimate Orb",
    "Vitality Booster",
    "Void Stone",
    "Observer Ward",
    "Sentry Ward",
    "Recipe",//================recipe
    "Orb of Venom",
    "Smoke of Deceit",
    "Shadow Amulet",
    "Soul Booster", //===============================
    "Abyssal Blade",
    "Armlet of Mordiggian",
    "Skull Basher",
    "Battle Fury",
    "Black King Bar",
    "Blade Mail",
    "Bloodstone",
    "Bracer",
    "Buckler",
    "Butterfly",
    "Eul's Scepter of Divinity",
    "Dagon",
    "Desolator",
    "Diffusal Blade",
    "Drum of Endurance",
    "Medallion of Courage",
    "Veil of Discord",
    "Ring of Aquila",
    "Aghanim's Scepter",
    "Urn of Shadows",
    "Vanguard",
    "Vladmir's Offering",
    "Wraith Band",
    "Yasha",
    "Arcane Boots",
    "Rod of Atos",
    "Sange",
    "Heaven's Halberd",
    "Sange and Yasha",
    "Satanic",
    "Scythe of Vyse",
    "Shiva's Guard",
    "Eye of Skadi",
    "Soul Ring",
    "Tranquil Boots",
    "Boots of Travel",
    "Daedalus",
    "Hand of Midas",
    "Headdress",
    "Helm of the Dominator",
    "Hood of Defiance",
    "Shadow Blade",
    "Crystalys",
    "Linken's Sphere",
    "Maelstrom",
    "Magic Wand",
    "Manta Style",
    "Mask of Madness",
    "Assault Cuirass",
    "Mekansm",
    "Mjollnir",
    "Monkey King Bar",
    "Necronomicon",
    "Null Talisman",
    "Oblivion Staff",
    "Ethereal Blade",
    "Force Staff",
    "Heart of Tarrasque",
    "Refresher Orb",
    "Ring of Basilius",
    "Orchid Malevolence",
    "Perseverance",
    "Phase Boots",
    "Pipe of Insight",
    "<deleted>",//"Poor Man's Shield",
    "Power Treads",
    "Radiance",
    "Divine Rapier",
    "Silver Edge",
    "Solar Crest",
    "Guardian Greaves",
    "Lotus Orb",
    "Moon Shard",
    "Octarine Core",
    "Glimmer Cape",
    "Aether Lens",
    "Bloodthorn",
    "Crimson Guard",
    "Echo Sabre",
    "Hurricane Pike",
    "<deleted>",//"Iron Talon",
    "Blight Stone",
    "Dragon Lance",
    "Wind Lace",
    "Boot Of Travel 2",
    "Infused Raindrop",
    "Enchanted Mango",
    "Meteor Hammer",
    "Aeon Disk",
    "Spirit Vessel",
    "Nullifier",
    "Kaya"
];



var item_rel = {
    60: [20, 36, 52],
    61: [63, 81, 56],
    62: [56, 26, 25, 2],
    63: [1, 28, 56],
    64: [122, 17, 38],
    65: [32, 34, 56],
    66: [9, 10, 44],
    67: [60, 122],
    68: [22, 56, 11],
    69: [10, 8, 56],
    70: [37, 19, 49],
    71: [47, 144, 53, 56],
    72: [47, 114, 56],
    73: [32, 32, 142],
    74: [3, 3, 56, 44],
    75: [68, 46, 144, 56],
    76: [10, 46, 142],
    77: [114, 114, 26, 56],
    78: [120, 83],
    79: [3, 34, 47, 36],
    80: [146, 11, 42, 56],
    81: [48, 41, 52],
    82: [120, 29, 99],
    83: [11, 56, 45],
    84: [3, 6, 56],
    85: [5, 20],
    86: [47, 68, 68, 56],
    87: [1, 34, 56],
    88: [87, 49],
    89: [84, 87],
    90: [29, 39, 13],
    91: [33, 53, 51],
    92: [33, 35, 56],
    93: [51, 51, 36],
    94: [43, 22, 22, 56],
    95: [5, 43, 144],
    96: [5, 56],
    97: [103, 56, 17],
    98: [25, 56],
    99: [43, 8, 56],
    100: [25, 41, 56],
    101: [41, 43, 14],
    102: [59, 13],
    103: [56, 2, 9],
    104: [122, 56, 51],
    105: [32, 56, 25],
    106: [147, 8, 8, 30],
    107: [84, 51, 56],
    108: [115, 29],
    109: [27, 35, 56, 10],
    110: [56, 69, 99],
    111: [105, 27, 56],
    112: [28, 28, 27],
    113: [46, 46, 1, 56],
    114: [11, 56, 31],
    115: [37, 46, 44],
    116: [24, 19],
    117: [47, 41, 56],
    118: [39, 52, 52],
    119: [122, 122, 56],
    120: [42, 46],
    121: [115, 115, 56],
    122: [53, 41],
    123: [5, 2, 2],
    124: [101, 99, 56],
    //125:[48,45,45],
    126: [1, 5, 25],
    127: [40, 56],
    128: [40, 17],
    129: [102, 51, 56],
    130: [49, 76],
    131: [85, 110, 56],
    132: [35, 122, 20],
    133: [27, 27, 56],
    134: [33, 60],
    135: [59, 14],
    136: [20, 53, 56],
    137: [121, 103, 56],
    138: [81, 69, 56],
    139: [34, 115],
    140: [117, 41, 83],
    //141:[38,42,56],
    143: [34, 6, 6],
    145: [96, 56],
    148: [34, 47, 46, 43],
    149: [20, 52, 56],
    150: [80, 52, 56, 144],
    151: [40, 26],
    152: [56, 44, 47],
};

b = {}
Object.keys(item_rel).forEach(x => {
    b[idgen(items[parseInt(x)])] = item_rel[x].map(k => idgen(items[parseInt(k)]))
})
var idgen = (name) => name.replace("'","").split(" ").map(k => k.toLowerCase()).join("_")
a = {}
items.forEach((x,i) => {
    a[idgen(x)] = {
        index: i,
        name: x
    }
})