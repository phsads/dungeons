var items = [
	//name: name, mindmg, maxdmg, atkspeedmult, rarity (cosmetic), toolstrength, damagemult: [ores, trees, mobs], description 
	{name:"Nothing"               ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"it's nothing"              },
	{name:"Balsa Wood"            ,minDamage:2   , maxDamage:3   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"softboi"                   },
	{name:"Workbench"             ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:12, desc:"bench"                     },
	{name:"Balsa Wall"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:10, desc:"wall"                      },
	{name:"Balsa Gate"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:11, desc:"wall but gate"             },
	{name:"Balsa Bark"            ,minDamage:0   , maxDamage:0   , atkSpeed:2   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"tree skin"                 },
	{name:"Balsa Handle"          ,minDamage:3   , maxDamage:4   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"softboi but handle"        },
	{name:"Balsa Wood Pickaxe"    ,minDamage:4   , maxDamage:5   , atkSpeed:0.9 , rarity: "common"  , toolStrength: 1, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"it go mine"                },
	{name:"Balsa Wood Axe"        ,minDamage:5   , maxDamage:6   , atkSpeed:0.85, rarity: "common"  , toolStrength: 1, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"it go chop chop"           },
	{name:"Balsa Wood Sword"      ,minDamage:4   , maxDamage:5   , atkSpeed:1.1 , rarity: "common"  , toolStrength: 1, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"it go stab"                },
	{name:"Stone"                 ,minDamage:3   , maxDamage:4   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"rocc"                      },
	{name:"Stone Pickaxe"         ,minDamage:7   , maxDamage:9   , atkSpeed:0.9 , rarity: "common"  , toolStrength: 2, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"it go mine"                },
	{name:"Stone Axe"             ,minDamage:9   , maxDamage:11  , atkSpeed:0.85, rarity: "common"  , toolStrength: 2, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"it go chop chop"           },
	{name:"Stone Sword"           ,minDamage:7   , maxDamage:9   , atkSpeed:1.1 , rarity: "common"  , toolStrength: 2, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"it go stab"                },
	{name:"Stone Wall"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:13, desc:"wall"                      },
	{name:"Stone Gate"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:14, desc:"wall but gate"             },
	{name:"Furnace"               ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:15, desc:"it go hot"                 },
        {name:"Coal"                  ,minDamage:1   , maxDamage:1   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"it's black"                },
	{name:"Iron Ore"              ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"it's rock but iron"        },
        {name:"Iron Ingot"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"it's iron but ingot"       },
	{name:"Anvil"                 ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:16, desc:"iron block"                },
	{name:"Iron Pickaxe"          ,minDamage:13  , maxDamage:17  , atkSpeed:1   , rarity: "common"  , toolStrength: 3, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"you can mine diamonds!"    },
	{name:"Iron Axe"              ,minDamage:16  , maxDamage:23  , atkSpeed:0.95, rarity: "common"  , toolStrength: 3, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"you can chop red trees"    },
	{name:"Iron Sword"            ,minDamage:13  , maxDamage:17  , atkSpeed:1.2 , rarity: "common"  , toolStrength: 3, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"looks more like a knife"   },
	{name:"Iron Helmet"           ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 10   ,ranged: false, damageMult:7, buildID: 0, desc:"w but upside down"         },
	{name:"Iron Chestplate"       ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 30   ,ranged: false, damageMult:7, buildID: 0, desc:"it's chestplate"           },
	{name:"Iron Leggings"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 20   ,ranged: false, damageMult:7, buildID: 0, desc:"U but upside down"         },
	{name:"Iron Boots"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 10   ,ranged: false, damageMult:7, buildID: 0, desc:"airpods+"                  },
	{name:"Iron Wall"             ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:17, desc:"stone wall+"               },
	{name:"Iron Gate"             ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:18, desc:"stone gate+"               },
	{name:"Steel Ingot"           ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"iron ingot but better"     },
	{name:"Wood Chest"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:19, desc:"it can store things"       },
	{name:"Steel Pickaxe"         ,minDamage:20  , maxDamage:30  , atkSpeed:1.04, rarity: "common"  , toolStrength: 4, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"iron pickaxe but better"   },
	{name:"Steel Axe"             ,minDamage:30  , maxDamage:40  , atkSpeed:0.99, rarity: "common"  , toolStrength: 4, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"iron axe but better"       },
	{name:"Steel Sword"           ,minDamage:20  , maxDamage:30  , atkSpeed:1.23, rarity: "common"  , toolStrength: 4, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"looks like an actual knife"},
	{name:"Steel Helmet"          ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 30   ,ranged: false, damageMult:7, buildID: 0, desc:"it's still upside down w"  },
	{name:"Steel Chestplate"      ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 90   ,ranged: false, damageMult:7, buildID: 0, desc:"it's still chestplate"     },
	{name:"Steel Leggings"        ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 60   ,ranged: false, damageMult:7, buildID: 0, desc:"it's still upside down U"  },
	{name:"Steel Boots"           ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 30   ,ranged: false, damageMult:7, buildID: 0, desc:"it looks like airpods"     },
	{name:"Steel Wall"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:21, desc:"iron wall but steel"       },
	{name:"Steel Gate"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:22, desc:"steel wall but gate"       },
	{name:"Steel Chest"           ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:20, desc:"more storage because steel"},
	{name:"Platinum Ore"          ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"those aren't diamonds :("  },
        {name:"Platinum Ingot "       ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"it's good but not diamonds"},
	{name:"Platinum Pickaxe"      ,minDamage:40  , maxDamage:60  , atkSpeed:1.05, rarity: "uncommon", toolStrength: 4, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"let's pretend it's diamond"},
	{name:"Platinum Axe"          ,minDamage:55  , maxDamage:75  , atkSpeed:1   , rarity: "uncommon", toolStrength: 4, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"let's pretend it's diamond"},
	{name:"Platinum Sword"        ,minDamage:40  , maxDamage:60  , atkSpeed:1.25, rarity: "uncommon", toolStrength: 4, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"diamond blade, very cool"  },
	{name:"Platinum Helmet"       ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 90   ,ranged: false, damageMult:7, buildID: 0, desc:"it's still upside down w"  },
	{name:"Platinum Chestplate"   ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 270  ,ranged: false, damageMult:7, buildID: 0, desc:"it's still chestplate"     },
	{name:"Platinum Leggings"     ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 180  ,ranged: false, damageMult:7, buildID: 0, desc:"it's still upside down U"  },
	{name:"Platinum Boots"        ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 90   ,ranged: false, damageMult:7, buildID: 0, desc:"it looks like airpods"     },
	{name:"Platinum Wall"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:24, desc:"diamond block"             },
	{name:"Platinum Gate"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:25, desc:"diamond gate"              },
	{name:"Maple Wood"            ,minDamage:2   , maxDamage:3   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"gray boi"                  },
	{name:"Maple Handle"          ,minDamage:3   , maxDamage:4   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"gray boi but handle"       },
	{name:"Maple Wall"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:26, desc:"wall"                      },
	{name:"Maple Gate"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "uncommon", toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:27, desc:"wall but gate"             },
	{name:"Birch Wood"            ,minDamage:2   , maxDamage:3   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"whiteboi"                  },
	{name:"Birch Handle"          ,minDamage:3   , maxDamage:4   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"whiteboi but handle"       },
	{name:"Birch Wall"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:30, desc:"wall"                      },
	{name:"Birch Gate"            ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:31, desc:"wall but gate"             },
	{name:"Titanium Ore"          ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"looks like a titan"        },
        {name:"Titanium Ingot"        ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"just like your mom"        },
	{name:"Titanium Pickaxe"      ,minDamage:100 , maxDamage:160 , atkSpeed:1.2 , rarity: "rare"    , toolStrength: 5, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"looks like a hammer"       },
	{name:"Titanium Axe"          ,minDamage:140 , maxDamage:200 , atkSpeed:1.15, rarity: "rare"    , toolStrength: 5, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"chop chop"                 },
	{name:"Titanium Sword"        ,minDamage:100 , maxDamage:160 , atkSpeed:1.4 , rarity: "rare"    , toolStrength: 5, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"even cooler sword"         },
	{name:"Titanium Helmet"       ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 270  ,ranged: false, damageMult:7, buildID: 0, desc:"gooder iron armor"         },
	{name:"Titanium Chestplate"   ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 810  ,ranged: false, damageMult:7, buildID: 0, desc:"it's still chestplate"     },
	{name:"Titanium Leggings"     ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 540  ,ranged: false, damageMult:7, buildID: 0, desc:"it's still upside down U"  },
	{name:"Titanium Boots"        ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 270  ,ranged: false, damageMult:7, buildID: 0, desc:"it looks like airpods"     },
	{name:"Titanium Wall"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:28, desc:"block"                     },
	{name:"Titanium Gate"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "rare"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:29, desc:"gate"                      },
	{name:"Pine Wood"             ,minDamage:2   , maxDamage:3   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"darkboi"                   },
	{name:"Pine Handle"           ,minDamage:3   , maxDamage:4   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"darkboi but handle"        },
	{name:"Raw Crystal"           ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID: 0, desc:"shiny"                     },
	{name:"Crystal Pickaxe"       ,minDamage:200 , maxDamage:280 , atkSpeed:1.3 , rarity: "epic"    , toolStrength: 6, defense: 0    ,ranged: false, damageMult:5, buildID: 0, desc:"shiny hammer"              },
	{name:"Crystal Axe"           ,minDamage:250 , maxDamage:320 , atkSpeed:1.25, rarity: "epic"    , toolStrength: 6, defense: 0    ,ranged: false, damageMult:3, buildID: 0, desc:"shiny chop chop"           },
	{name:"Crystal Sword"         ,minDamage:200 , maxDamage:280 , atkSpeed:1.5 , rarity: "epic"    , toolStrength: 6, defense: 0    ,ranged: false, damageMult:1, buildID: 0, desc:"crystal edge"              },
	{name:"Crystal Helmet"        ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 810  ,ranged: false, damageMult:7, buildID: 0, desc:"nice color scheme"         },
	{name:"Crystal Chestplate"    ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 2340 ,ranged: false, damageMult:7, buildID: 0, desc:"very cool"                 },
	{name:"Crystal Leggings"      ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 1620 ,ranged: false, damageMult:7, buildID: 0, desc:"it protec leg"             },
	{name:"Crystal Boots"         ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 810  ,ranged: false, damageMult:7, buildID: 0, desc:"it protec foot"            },
	{name:"Crystal Wall"          ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:32, desc:"block"                     },
	{name:"Crystal Gate"          ,minDamage:2   , maxDamage:2   , atkSpeed:1   , rarity: "epic"    , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:33, desc:"gate"                      },
        {name:"Torch"                 ,minDamage:2   , maxDamage:3   , atkSpeed:1   , rarity: "common"  , toolStrength: 0, defense: 0    ,ranged: false, damageMult:7, buildID:23, desc:"hotboi"                    },
]
var recipes = [
        [   [[1 , 4 ]                    ] , [12, 0] , [2 , 1]  ], //workbench
	[   [[1 , 1 ]                    ] , [12   ] , [5 , 2]  ], //make bark
	[   [[1 , 2 ]                    ] , [12   ] , [6 , 1]  ], //balsa handle
	[   [[1 , 6 ]                    ] , [12   ] , [3 , 1]  ], //balsa wall
	[   [[1 , 6 ]                    ] , [12   ] , [4 , 1]  ], //balsa gate
	[   [[6 , 1 ] , [1 , 4] , [5 , 3]] , [12   ] , [7 , 1]  ], //balsa pick
	[   [[6 , 1 ] , [1 , 4] , [5 , 3]] , [12   ] , [8 , 1]  ], //balsa axe
	[   [[6 , 1 ] , [1 , 3] , [5 , 3]] , [12   ] , [9 , 1]  ], //balsa sword
	[   [[6 , 1 ] , [10, 5] , [5 , 3]] , [12   ] , [11, 1]  ], //stone pick
	[   [[6 , 1 ] , [10, 5] , [5 , 3]] , [12   ] , [12, 1]  ], //stone axe
	[   [[6 , 1 ] , [10, 4] , [5 , 3]] , [12   ] , [13, 1]  ], //stone sword
	[   [[10, 6 ]                    ] , [12   ] , [14, 1]  ], //stone wall
	[   [[10, 6 ]                    ] , [12   ] , [15, 1]  ], //stone gate
	[   [[10, 10]                    ] , [12   ] , [16, 1]  ], //furnace
	[   [[1 , 1 ]                    ] , [15   ] , [17, 1]  ], //coal
	[   [[18, 1 ] , [17, 2]          ] , [15   ] , [19, 1]  ], //iron ingot
	[   [[19, 9 ]                    ] , [12   ] , [20, 1]  ], //anvil
	[   [[6 , 1 ] , [19, 7]          ] , [16   ] , [21, 1]  ], //iron pick
	[   [[6 , 1 ] , [19, 7]          ] , [16   ] , [22, 1]  ], //iron axe
	[   [[6 , 1 ] , [19, 6]          ] , [16   ] , [23, 1]  ], //iron sword
	[   [[19, 5 ]                    ] , [16   ] , [24, 1]  ], //iron helm
	[   [[19, 15]                    ] , [16   ] , [25, 1]  ], //iron chestplate
	[   [[19, 10]                    ] , [16   ] , [26, 1]  ], //iron leggings
	[   [[19, 5 ]                    ] , [16   ] , [27, 1]  ], //iron boots
	[   [[19, 6 ]                    ] , [16   ] , [28, 1]  ], //rion wall
	[   [[19, 6 ]                    ] , [16   ] , [29, 1]  ], //iron gate
	[   [[19, 3 ] , [17, 5]          ] , [16   ] , [30, 1]  ], //steel ingot
	[   [[1 , 12] , [10, 6]          ] , [12   ] , [31, 1]  ], //chest
	[   [[21, 1 ] , [30, 5]          ] , [16   ] , [32, 1]  ], //steel pick
	[   [[22, 1 ] , [30, 7]          ] , [16   ] , [33, 1]  ], //steel axe
	[   [[23, 1 ] , [30, 7]          ] , [16   ] , [34, 1]  ], //steel sword
	[   [[30, 3 ] , [24, 1]          ] , [16   ] , [35, 1]  ], //iron helm
	[   [[30, 4 ] , [25, 1]          ] , [16   ] , [36, 1]  ], //iron chestplate
	[   [[30, 3 ] , [26, 1]          ] , [16   ] , [37, 1]  ], //iron leggings
	[   [[30, 2 ] , [27, 1]          ] , [16   ] , [38, 1]  ], //iron boots
	[   [[30, 6 ]                    ] , [16   ] , [39, 1]  ], //steel wall
	[   [[30, 6 ]                    ] , [16   ] , [40, 1]  ], //steel gate
	[   [[19, 8 ] , [30, 4]          ] , [12   ] , [41, 1]  ], //steel chest
	[   [[42, 1 ] , [17, 4]          ] , [15   ] , [43, 1]  ], //platinum ingot
	[   [[54, 1 ] , [43, 8]          ] , [16   ] , [44, 1]  ], //platinum pick
	[   [[54, 1 ] , [43, 8]          ] , [16   ] , [45, 1]  ], //platinum axe
	[   [[54, 1 ] , [43, 7]          ] , [16   ] , [46, 1]  ], //platinum sword
	[   [[43, 5 ]                    ] , [16   ] , [47, 1]  ], //platinum helm
	[   [[43, 15]                    ] , [16   ] , [48, 1]  ], //platinum chestplate
	[   [[43, 10]                    ] , [16   ] , [49, 1]  ], //platinum leggings
	[   [[43, 5 ]                    ] , [16   ] , [50, 1]  ], //platinum boots
	[   [[43, 6 ]                    ] , [16   ] , [51, 1]  ], //platinum wall
	[   [[43, 6 ]                    ] , [16   ] , [52, 1]  ], //platinum gate
	[   [[53, 3 ]                    ] , [12   ] , [54, 1]  ], //maple handle
	[   [[53, 6 ]                    ] , [12   ] , [55, 1]  ], //maple wall
	[   [[53, 6 ]                    ] , [12   ] , [56, 1]  ], //maple gate
	[   [[57, 4 ]                    ] , [12   ] , [58, 1]  ], //birch handle
	[   [[57, 6 ]                    ] , [12   ] , [59, 1]  ], //birch wall
	[   [[57, 6 ]                    ] , [12   ] , [60, 1]  ], //birch gate
	[   [[61, 1 ] , [17, 6]          ] , [15   ] , [62, 1]  ], //titanium ingot
	[   [[58, 1 ] , [62, 6]          ] , [16   ] , [63, 1]  ], //titanium pick
	[   [[58, 1 ] , [62, 6]          ] , [16   ] , [64, 1]  ], //titanium axe
	[   [[58, 1 ] , [62, 5]          ] , [16   ] , [65, 1]  ], //titanium sword
	[   [[62, 5 ]                    ] , [16   ] , [66, 1]  ], //titanium helm
	[   [[62, 15]                    ] , [16   ] , [67, 1]  ], //titanium chestplate
	[   [[62, 10]                    ] , [16   ] , [68, 1]  ], //titanium leggings
	[   [[62, 5 ]                    ] , [16   ] , [69, 1]  ], //titanium boots
	[   [[62, 6 ]                    ] , [16   ] , [70, 1]  ], //titanium wall
	[   [[62, 6 ]                    ] , [16   ] , [71, 1]  ], //titanium gate
	[   [[72, 5 ]                    ] , [12   ] , [73, 1]  ], //pine handle
	[   [[73, 1 ] , [74, 15]         ] , [16   ] , [75, 1]  ], //crystal pick
	[   [[73, 1 ] , [74, 15]         ] , [16   ] , [76, 1]  ], //crystal axe
	[   [[73, 1 ] , [74, 15]         ] , [16   ] , [77, 1]  ], //crystal sword
	[   [[74, 10]                    ] , [16   ] , [78, 1]  ], //crystal helm
	[   [[74, 25]                    ] , [16   ] , [79, 1]  ], //crystal chestplate
	[   [[74, 15]                    ] , [16   ] , [80, 1]  ], //crystal leggings
	[   [[74, 10]                    ] , [16   ] , [81, 1]  ], //crystal boots
	[   [[74, 7 ]                    ] , [16   ] , [82, 1]  ], //crystal wall
	[   [[74, 7 ]                    ] , [16   ] , [83, 1]  ], //crystal gate
	[   [[6 ,  1] , [17, 1]          ] , [15   ] , [84, 1]  ], //torch
]
var inventory = [
	[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
	[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
	[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
	[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
	[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
	[0, 0, 0, 0]
]
var lootTables = [
	[],
        [[1 , 3, 5]                      ], //balsa
	[[10, 3, 5]                      ], //stone
	[[18, 2, 3], [10, 80], [10, 100] ], //iron ore
	[[53, 3, 5]                      ], //maple
	[[42, 2, 3], [10, 80], [10, 100] ], //platinum
	[[57, 3, 5]                      ], //birch
	[[61, 3, 4], [10, 80], [10, 100] ], //titanium
	[[72, 3, 5]                      ], //pine
	[[74, 4, 5]                      ], //crystal
	[[3 , 1, 1]                      ], //wood wall
	[[4 , 1, 1]                      ], //wood gate
	[[2 , 1, 1]                      ], //bench
	[[14, 1, 1]                      ], //stone wall
	[[15, 1, 1]                      ], //stone gate
	[[16, 1, 1]                      ], //furnace
	[[20, 1, 1]                      ], //anvil
	[[28, 1, 1]                      ], //iron wall
	[[29, 1, 1]                      ], //iron gate
	[[31, 1, 1]                      ], //chest
	[[41, 1, 1]                      ], //steel chest
	[[39, 1, 1]                      ], //steel wall
	[[40, 1, 1]                      ], //steel gate
	[[84, 1, 1]                      ], //tochr
	[[51, 1, 1]                      ], //platinum wall
	[[52, 1, 1]                      ], //platinum gate
	[[55, 1, 1]                      ], //map wall
	[[56, 1, 1]                      ], //map gate
	[[70, 1, 1]                      ], //titan wall
	[[71, 1, 1]                      ], //titan gate
	[[59, 1, 1]                      ], //birch wall
	[[60, 1, 1]                      ], //birch gate
	[[82, 1, 1]                      ], //crystal wall
	[[83, 1, 1]                      ], //crystal gate
]
//Min tool strength to break object
var toolStrengthReq = [0, 
0, 1, 2, 3, 3, 
4, 4, 5, 5, 0,
0, 0, 1, 1, 1,
2, 2, 2, 1, 2,
2, 2, 0, 3, 3,
3, 3, 4, 4, 4,
4, 5, 5
]
//Tool type to break object
var bitCheck = [
	1, 2, 2, 1, 2,
	1, 2, 1, 2, 1,
	1, 1, 2, 2, 2,
	2, 2, 2, 1, 2,
	2, 2, 1, 2, 2,
	1, 1, 2, 2, 1,
	1, 2, 2
]
//HP of objects
var objectHP =  [0, 
        30  , 70  , 200  , 300  , 400 , 
	700 , 1000, 1500 , 2400 , 50  , 
	50  , 75  , 100  , 100  , 150 ,
	300 , 200 , 200  , 150  , 500 , 
	340 , 340 , 20   , 700  , 700 ,
	340 , 340 , 2000 , 2000 , 1700,
	1700, 4000, 4000
]
var intv
var particles = []
var tab = 0
var ctx = document.getElementById("canvas").getContext("2d")
var player = {
	pos: [],
	fractionalPos: [],
	stats: {
		hp: 100,
		mhp: 100,
		stamina: 100,
		staminaCMult:1,
		defense: 0,
		attackSpeed: 1,
		reach: 40,
		critChance: 5,
		critDamage: 140,
		inventorySlots: 14,
		regen: 0,
	},
	exp: 0,
	level: 0,
	attackCooldown: 0,
	powerups: {
		dumbbell: 0,
		box: 0,
		rock: 0,
		milk1: 0, //chocy milk
		milk2: 0, //milk
		glove: 0,
		clover1: 0, //4 leaf
		taser: 0,
		tooth: 0,
		milk3: 0, //soy milk
		pill: 0,
		milk4: 0,
		quiver: 0, 
		drive: 0,
		book: 0,
		clover2: 0, //5-leaf
		ruby: 0,
		rubyPower: 0, //not a powerup 2
		berserk: 0,
		berserkActive:0, //not a powerup
		ring: 0,
	},
	moveCooldown:[0,0,0,0]
}
var unlocked = Array(items.length).fill(false)
var times = 0
var maxTimes = 10
var screen = ""
var objectMap
var seed = Math.round(Math.random()*2**24) //seed
var attackDuration = 0 //animation
var mousePos = {}
var particles = []
var click = [false, 0]
var out = [0,0]
var texts = []
var projs = []
var drops = []
var enemies = []
var holding = 0
var screenBonus = [0,1,0,0,0,0,0,0]
var screenShakeAmp = 0
var screenShake = [0,0]
var rarity_colors = {
	"common":"rgba(230, 230, 230, 0.6)",
	"uncommon": "rgba(0, 127, 0, 0.6)",
	"rare": "rgba(0, 0, 220, 0.6)",
	"epic": "rgba(157, 30, 157, 0.6)",
	"mythical": "rgba(190, 0, 0, 0.6)",
}
var mouseDown = [0, 0, 0, 0, 0, 0, 0, 0, 0],mouseDownCount = 0;
var map //height map
var heatMap //heat map
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d") //rendering
var avg = 5 //how many times times to avg-ing (5 meaning set to avg every 5 updates)
var max=0,min=0,heatMax=0,heatMin=0 //kinda useless (dont delete)
var width = 200,height = 200 //width and height of map
var day = 0
var brightnessMap
var hr = 6
var diff = 1

//loading purporses
var data
var diffMult = 1

//Sprites

var sprite = {
	player: new Image(),
	object: new Image(),
	rick: new Image(), 
	items: new Image(),
	enemies: new Image(),
	gui: new Image(),
	powerups: new Image(),
	proj: new Image(),
}

sprite.player.src   = "sprites/player.png"
sprite.object.src   = "sprites/object.png"
sprite.rick.src     = "sprites/rick.png"
sprite.items.src    = "sprites/items.png"
sprite.enemies.src  = "sprites/enemies.png"
sprite.gui.src      = "sprites/ui.png"
sprite.powerups.src = "sprites/powerups.png"
sprite.proj.src     = "sprites/proj.png"

//Mobs
function getMobs(a,sX,sY) {
	let baseMobs = {
		zombie: {
			attackInterval: 100,
			moveInterval: 25,
			rotation: 0,
			cooldown: 0,
			moveCooldown: 0,
			hp:  35*diff,
			mhp: 35*diff,
			minDamage:3*diff,
			maxDamage:4*diff,
			x: sX,
			y: sY,
			tag: "zombie",
			tick: function() {
				this.cooldown++
				this.moveCooldown++
				let rotationToRotate = -Math.atan2(this.x-player.pos[0],this.y-player.pos[1])-this.rotation
				this.rotation += Math.max(Math.min(rotationToRotate,5),-5)
				if (this.moveInterval<=this.moveCooldown) {
					this.move()
					this.moveCooldown = 0
				}
				if (this.attackInterval<=this.cooldown) {
					this.attack()
					this.cooldown = 0
				}
			},
			attack: function() {
				var xAttack = this.x+0.5+31/60*Math.sin(this.rotation)
				var yAttack = this.y+0.5-31/60*Math.cos(this.rotation)     
				var x=-10
				while (x<=10) {
					var y=-10
					while (y<=10) {
						var x2 = x+this.x, y2 = y+this.y
						y++
						var coll = circleCollision(xAttack,yAttack,0.5,this.x+x+0.5,this.y+y+0.5,Math.SQRT1_2)
						if (coll) {
							var damageDealt = Math.round(randomRange(this.minDamage,this.maxDamage))
							if (map[x2]==undefined||map[0][y2]==undefined) continue 
							objectMap[x2][y2][1] -= damageDealt
							if(objectMap[x2][y2][0]) {
								texts.push({
									x: x2+0.5,
									y: y2+0.5,
									dx: Math.random()/5-0.1,
									dy: 0.15,
									fadeSpeed: 8,
									color: [255, 255, 255, 255],
									content: damageDealt,
								})
							}
						}
					}
					x++
				}
				if (circleCollision(xAttack,yAttack,0.5,player.pos[0]+0.5,player.pos[1]+0.5,Math.SQRT1_2)) {
				        var dmgDealt = Math.round(randomRange(this.minDamage,this.maxDamage)) * 100 / (player.stats.defense+100)
				        player.stats.hp = Math.max(0, player.stats.hp-dmgDealt)
			        	texts.push({
				        	x: player.pos[0]+0.5,
				        	y: player.pos[1]+0.5,
				        	dx: Math.random()/5-0.1,
				        	dy: 0.15,
				        	fadeSpeed: 8,
				        	color: [255, 255, 255, 255],
				        	content: damageDealt,
				        })
				        var bl = [[player.pos[0]+.5,player.pos[1]+.5,player.pos[0]+.5,player.pos[1]+.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[255,0  ,0  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1],[enemies[x].x+.5,enemies[x].y+.5,enemies[x].x+.5,enemies[x].y+.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[200  ,0  ,0  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]]
			                bl.forEach(a => createParticles(...a))
				}
			},
			move: function() {
				var dist = []
				dist[0] = objectMap[this.x+1][this.y][0]?Infinity:(this.x+1-player.pos[0])**2+(this.y-player.pos[1])**2
				dist[1] = objectMap[this.x-1][this.y][0]?Infinity:(this.x-1-player.pos[0])**2+(this.y-player.pos[1])**2
				dist[2] = objectMap[this.x][this.y+1][0]?Infinity:(this.x-player.pos[0])**2+(this.y+1-player.pos[1])**2
				dist[3] = objectMap[this.x][this.y-1][0]?Infinity:(this.x-player.pos[0])**2+(this.y-1-player.pos[1])**2
				var index = 0,a,min=Infinity
				var m = [[1,0],[-1,0],[0,1],[0,-1]]
				for (a in dist) {
					if (dist[a]<min) {
						index = a*1
						min = dist[a]
					}
				}					        
				var tempX = this.x
				var tempY = this.y
				tempX += m[index][0]
				tempY += m[index][1]
				var collidedWithMobs = false
				for (a in enemies) {
					if (enemies[a].x == tempX && enemies[a].y == tempY) {
						collidedWithMobs = true
						break;
					}
				}
				if (!objectMap[tempX][tempY][0]&&!(tempX==player.pos[0]&&tempY==player.pos[1])&&!collidedWithMobs) {
					this.x = tempX
					this.y = tempY
				} 
			},
		},
		skeleton: {
			attackInterval:120,
			moveInterval: 30,
			rotation: 0,
			cooldown: 0,
			moveCooldown: 0,
			hp:  25*diff,
			mhp: 25*diff,
			minDamage:4*diff,
			maxDamage:6*diff,
			x: sX,
			y: sY,
			tag: "skeleton",
			tick: function() {
				this.cooldown++
				this.moveCooldown++
				let rotationToRotate = -Math.atan2(this.x-player.pos[0],this.y-player.pos[1])-this.rotation
				this.rotation += Math.max(Math.min(rotationToRotate,5),-5)
				if (this.moveInterval<=this.moveCooldown) {
					this.move()
					this.moveCooldown = 0
				}
				if (this.attackInterval<=this.cooldown) {
					this.attack()
					this.cooldown = 0
				}
			},
			attack: function() {
				var projRot = this.rotation+Math.random()*.1-.05
				var projToShoot = new Projectile(this.x+.5,this.y+.5,Math.sin(projRot)*.4,-Math.cos(projRot)*.4,projRot,randomRange(this.minDamage,this.maxDamage),["player","object"],200,1)
				projs.push(projToShoot)          
			},
			move: function() {
				var dist = []
				dist[0] = objectMap[this.x+1][this.y][0]?Infinity:(this.x+1-player.pos[0])**2+(this.y-player.pos[1])**2
				dist[1] = objectMap[this.x-1][this.y][0]?Infinity:(this.x-1-player.pos[0])**2+(this.y-player.pos[1])**2
				dist[2] = objectMap[this.x][this.y+1][0]?Infinity:(this.x-player.pos[0])**2+(this.y+1-player.pos[1])**2
				dist[3] = objectMap[this.x][this.y-1][0]?Infinity:(this.x-player.pos[0])**2+(this.y-1-player.pos[1])**2
				var index = 0,a,min=Infinity
				var m = [[1,0],[-1,0],[0,1],[0,-1]]
				for (a in dist) {
					if (dist[a]<min) {
						index = a*1
						min = dist[a]
					}
				}					        
				var tempX = this.x
				var tempY = this.y
				tempX += m[index][0]
				tempY += m[index][1]
				 var collidedWithMobs = false
				for (a in enemies) {
					if (enemies[a].x == tempX && enemies[a].y == tempY) {
						collidedWithMobs = true
						break;
					}
				}
				if (!objectMap[tempX][tempY][0]&&!(tempX==player.pos[0]&&tempY==player.pos[1])&&!collidedWithMobs) {
					this.x = tempX
					this.y = tempY
				} 
			},
		}
	}
        return baseMobs[a]
}

//Using phsads's particle SYSTEM A GREA SYSMJTEMM
var particlesTo = [
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
        [[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,7 ,13,222,222,0.99,1],[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[160,129,112,255],"rgb",0.07,0.09,4 ,4 ,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[150,151,130,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,7 ,13,222,222,0.99,1],[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[153,217,234,255],"rgb",0.07,0.09,4 ,4 ,222,222,0.99,1]],
	
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[214,214,214,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,7 ,13,222,222,0.99,1],[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[224,224,224,255],"rgb",0.07,0.09,4 ,4 ,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[61 ,40 ,31 ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[118,91 ,196,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[100,100,108,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[185,122,87 ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[185,122,87 ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[185,122,87 ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[185,122,87 ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],

	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[213,207,206,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[213,207,206,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[92 ,66 ,8  ,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[153,217,234,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[153,217,234,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],

	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[150,151,130,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[150,151,130,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[224,224,224,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[224,224,224,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[214,214,214,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],

	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[214,214,214,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[118,91 ,196,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
	[[0.5,0.5,0.5,0.5,[1,3],[0.0005,-0.001],2.1415,4.1415,0.03,0.07,[118,91 ,196,255],"rgb",0.07,0.09,11,17,222,222,0.99,1]],
]