export const json = {
  "title": "Dungeon Master Evaluation Form",
  "description": "by DeAnn Iwan, Dragon #43 (November 1980)",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "Evaluation",
      "description": "Fill in or indicate only those which apply",
      "elements": [
        {
          "type": "text",
          "name": "user",
          "title": "Who are you?"
        },
        {
          "type": "radiogroup",
          "name": "death",
          "title": "Death",
          "choices": [
            {
              "value": "resurrection",
              "text": "Haven't you ever heard of resurrection?"
            },
            {
              "value": "die",
              "text": "Doesn't anybody ever die in this place?"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "difficulty",
          "title": "Difficulty",
          "choices": [
            {
              "value": "too easy",
              "text": "I think your games are much too easy for characters. No matter how stupidly we play, we survive, advance and gain treasure."
            },
            {
              "value": "too difficult",
              "text": "Your games are much too difficult. If I wanted the brutality of life, I'd be playing the stock market."
            },
            {
              "value": "well balanced",
              "text": "Basically, I think hazards and rewards are fairly well balanced in your world"
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "Resurrection",
          "title": "How many people should die per campaign, resurrectably & non-resurrectably, in order to keep the campaign exciting?",
          "items": [
            {
              "name": "Resurrectable",
              "title": "Resurrectable"
            },
            {
              "name": "Non-Resurrectable",
              "title": "Non-Resurrectable"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "Treasure",
          "title": "Treasure",
          "choices": [
            {
              "value": "Too easy",
              "text": "It's much too easy to gain treasure in your world"
            },
            {
              "value": "needs more",
              "text": "You need more treasure in your dungeons"
            },
            {
              "value": "more minor",
              "text": "Your major treasures are really inventive, but you need a few more minor treasures scattered about."
            },
            {
              "value": "concentrated",
              "text": "You have enough treasure in your dungeon, but you need some concentrated piles we can really be creative about going after."
            },
            {
              "value": "more minor",
              "text": "More minor magical items would add a lot to your campaign"
            },
            {
              "value": "more major",
              "text": "You need more major magical items in your world"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "Tiers",
          "title": "Tiered Play",
          "choices": [
            {
              "value": "1-3",
              "text": "I think it's most fun to play low-level (1-3) characters when you're scrambling for coppers to buy torches for the expedition. This is the level most like real people; I identify with it."
            },
            {
              "value": "7-10",
              "text": "The best level is moderately high (7-10) where you're scrambling to meet the cost overruns on your castle. I always wanted to be a feudal lord."
            },
            {
              "value": "15-20",
              "text": "High-level (15-20) adventures are the most interesting. I like the inventiveness required to save the world; and the glory isn't bad either."
            },
            {
              "value": "20+",
              "text": "I like even higher levels (20+)"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "party size",
          "title": "Party Size",
          "choices": [
            {
              "value": "1 PC",
              "text": "I prefer games with only one character per player per adventure"
            },
            {
              "value": "companions",
              "text": "I prefer party-sized adventures where some or all of the player characters have one or two companions in arms"
            },
            {
              "value": "armies",
              "text": "The best games are where we play armies against armies"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "play style - combat/cha",
          "title": "Play Style - Combat vs Charisma",
          "choices": [
            {
              "value": "cha",
              "text": "The whole point of these games is creativity. When I'm inventive and daring enough to pick the vampire's pocket, I expect to be rewarded if I succeed."
            },
            {
              "value": "hack",
              "text": "Picking the key out of that vampire's pocket was cheating. You should have to hack your way through a monster."
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "play style",
          "title": "Play Style pt. 2",
          "choices": [
            {
              "value": "dungeons",
              "text": "The best parts of your campaigns are the dungeons themselves. Your rooms, traps and the like are always a surprise, delightful or otherwise."
            },
            {
              "value": "npcs",
              "text": "Your non-player characters are what makes your game. We run into the most fascinating people; they bring the adventure to life."
            },
            {
              "value": "curses",
              "text": "Your inventive curses are intriguing. Were you a gypsy in a former life?"
            },
            {
              "value": "locations",
              "text": "It's really the themes to places in your world that give the campaign body. No one will ever say you had a computer run off rooms, monsters, and treasures."
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "characters",
          "title": "Characters",
          "choices": [
            {
              "value": "new skool",
              "text": "It's most fun to play competent characters. I prefer the \"newer\" techniques of rolling up characteristics (eg, 4d6dl). I can fall over the trash can in real life. When I come to D&D, I want to track my arch-enemy over rocky mountains and through marshy mires."
            },
            {
              "value": "old skool",
              "text": "One of the best parts of playing a character is to accommodate their attributes. It's a challenge and a delight to play a grumpy dwarf that hacks down the door everyone else is tip-toeing by. I prefer \"older\" techniques of rolling up characters (eg, 3d6 straight) which give more average, more believable traits."
            }
          ]
        },
        {
          "type": "rating",
          "name": "last adventure",
          "title": "Overall, I thought your last adventure was",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
            {
              "value": 1,
              "text": "Excellent"
            },
            {
              "value": 2,
              "text": "Pretty Good"
            },
            {
              "value": 3,
              "text": "Better than being hung up by my toes for four hours"
            },
            {
              "value": 4,
              "text": "A few more that bad and I'll stay home to wash my hair"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "games are",
          "title": "Usually, though, your games are:",
          "choices": [
            {
              "value": "fantastic",
              "text": "Fantastic"
            },
            {
              "value": "great",
              "text": "Great"
            },
            {
              "value": "fun",
              "text": "Fun"
            },
            {
              "value": "better than death",
              "text": "Better than being run over by a Volkswagen"
            },
            {
              "value": "worse than death",
              "text": "Worse than being hit by a Mack truck"
            }
          ]
        },
        {
          "type": "rating",
          "name": "Advantaged PCs",
          "title": "Your games give too much advantage to:",
          "autoGenerate": false,
          "rateCount": 12,
          "rateValues": [
            {
              "value": 1,
              "text": "Magic-Users"
            },
            {
              "value": 2,
              "text": "Fighters"
            },
            {
              "value": 3,
              "text": "Druids"
            },
            {
              "value": 4,
              "text": "Rogues"
            },
            {
              "value": 5,
              "text": "Elves"
            },
            {
              "value": 6,
              "text": "Clerics"
            },
            {
              "value": 7,
              "text": "Illusionists"
            },
            {
              "value": 8,
              "text": "Humans"
            },
            {
              "value": 9,
              "text": "Dwarves"
            },
            {
              "value": 10,
              "text": "Ranger"
            },
            {
              "value": 11,
              "text": "Paladin"
            },
            {
              "value": 12,
              "text": "Other"
            }
          ]
        },
        {
          "type": "rating",
          "name": "horror to be a",
          "title": "On the other hand, it's a horror to be a:",
          "autoGenerate": false,
          "rateCount": 12,
          "rateValues": [
            {
              "value": 1,
              "text": "Magic-Users"
            },
            {
              "value": 2,
              "text": "Fighters"
            },
            {
              "value": 3,
              "text": "Druids"
            },
            {
              "value": 4,
              "text": "Rogues"
            },
            {
              "value": 5,
              "text": "Elves"
            },
            {
              "value": 6,
              "text": "Clerics"
            },
            {
              "value": 7,
              "text": "Illusionists"
            },
            {
              "value": 8,
              "text": "Humans"
            },
            {
              "value": 9,
              "text": "Dwarves"
            },
            {
              "value": 10,
              "text": "Ranger"
            },
            {
              "value": 11,
              "text": "Paladin"
            },
            {
              "value": 12,
              "text": "Other"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "advancement",
          "title": "Advancement in your dungeon is:",
          "choices": [
            {
              "value": "too fast",
              "text": "Too Fast"
            },
            {
              "value": "too slow",
              "text": "Too Slow"
            },
            {
              "value": "too variable",
              "text": "Too Variable"
            },
            {
              "value": "perfect",
              "text": "As close to perfect as it could be unless I were DM"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pacing",
          "title": "The pacing of an adventure is almost entirely up to the DM. In general, your pacing is:",
          "choices": [
            {
              "value": "good",
              "text": "Good"
            },
            {
              "value": "needs beef",
              "text": "Could stand some beefing up"
            },
            {
              "value": "what pacing",
              "text": "Pacing? Do you have pacing?"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "pacing improved",
          "title": "Your pacing could be improved if:",
          "choices": [
            {
              "value": "shut up pcs",
              "text": "You stopped characters from discussing their moves in melee by making that discussion their move"
            },
            {
              "value": "wandering monsters",
              "text": "You rolled for wandering monsters when the party gets bogged down in an argument"
            },
            {
              "value": "ask in melee",
              "text": "You were a little sharper and more orderly about asking each person what they were doing in melee"
            },
            {
              "value": "PC bosses PCs",
              "text": "You didn't let one of the characters boss the others so much"
            },
            {
              "value": "PC bosses DM",
              "text": "You didn't let one of the characters boss you so much"
            },
            {
              "value": "too RAW",
              "text": "You didn't take half of forever to look something up in the manual all the time"
            },
            {
              "value": "retcons",
              "text": "You didn't stop characters to make them back up moves when you thought of something after the fact"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "RAW",
          "title": "On those occasions when you don't quite remember what the manual says on a certain point, I would prefer you:",
          "choices": [
            {
              "value": "respect it",
              "text": "Look up the answer no matter how long it takes"
            },
            {
              "value": "fuck it",
              "text": "Guess if you have to. After all, the reason we have a DM instead of a computer running us is for flexibility, creativity, and responsiveness."
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "how RAW",
          "title": "How RAW do you like it?",
          "choices": [
            {
              "value": "exactly",
              "text": "DMs should almost always go exactly by the rule book. I value consistency above all"
            },
            {
              "value": "as a guide",
              "text": "Each DM creates his or her own world. The rule books are intended only as a guide to aid in playability"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "self-consistent",
          "title": "Your game is consistent with itself:"
        },
        {
          "type": "boolean",
          "name": "D&D consistent",
          "title": "Your game is consistent with D&D:"
        },
        {
          "type": "boolean",
          "name": "satisfied w/consistency",
          "title": "I am satisfied with the game's consistency:"
        },
        {
          "type": "panel",
          "name": "more or less",
          "title": "More or Less",
          "description": "For each question, mark whether you would like to see more or less of these things in the campaign.",
          "elements": [
            {
              "type": "radiogroup",
              "name": "weapons (general)",
              "title": "General Weapons",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "complicated combat",
              "title": "Complicated, realistic combat",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "simple combat",
              "title": "Simple, fast-moving combat",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "wandering monsters (powerful)",
              "title": "Powerful Wandering Monsters",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "wandering monsters (general)",
              "title": "General Wandering Monsters",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "chaos & law",
              "title": "Chaos/Law Confrontations",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "dead PCs",
              "title": "Dead Characters",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "resurrection",
              "title": "Available Resurrections",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "divine intervention",
              "title": "Divine Intervention",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "chaotic creatures",
              "title": "Chaotic Creatures",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "lawful creatures",
              "title": "Lawful Creatures",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "magic items (powerful)",
              "title": "Powerful Magic Items",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "magic items (lesser)",
              "title": "Lesser Magic Items",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "magic items (minor)",
              "title": "Minor/Obscure Magic Items",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "non-magic items",
              "title": "Interesting Non-Magical Items",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "ways to get information",
              "title": "Ways To Get Information",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "ways to get useful information",
              "title": "Ways To Get Useful Information",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "NPCs",
              "title": "Non-Player Characters",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "player initiative",
              "title": "Room For Player Initiative",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "variability",
              "title": "Variability (eg, being likely to run into machine gun wielding commandoes or carapaced humanoids)",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "gold",
              "title": "Gold",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "gems",
              "title": "Gems",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "armor",
              "title": "Armor",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "silver/copper",
              "title": "Silver or Copper",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "text",
              "name": "other",
              "title": "Other"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "magic",
          "title": "Amount of Magic",
          "choices": [
            {
              "value": "too much",
              "text": "There is too much magic in the campaign"
            },
            {
              "value": "too little",
              "text": "There is not enough magic in the campaign"
            }
          ]
        },
        {
          "type": "slider",
          "name": "sessions per level",
          "title": "The ideal number of sessions played for each level is:"
        },
        {
          "type": "panel",
          "name": "curses",
          "title": "Curses",
          "elements": [
            {
              "type": "radiogroup",
              "name": "curse amount",
              "title": "You have",
              "choices": [
                {
                  "value": "too many",
                  "text": "Too Many"
                },
                {
                  "value": "too few",
                  "text": "Too Few"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "existing curses",
              "title": "The curses that exist are",
              "choices": [
                {
                  "value": "dull",
                  "text": "Dull"
                },
                {
                  "value": "inventive",
                  "text": "Inventive"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "physical traps",
          "title": "Physical Traps",
          "elements": [
            {
              "type": "radiogroup",
              "name": "trap amount",
              "title": "You have",
              "choices": [
                {
                  "value": "too many",
                  "text": "Too Many"
                },
                {
                  "value": "too few",
                  "text": "Too Few"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "trap quality",
              "title": "The traps that exist are",
              "choices": [
                {
                  "value": "too hard",
                  "text": "Horribly Mystifying"
                },
                {
                  "value": "too simple",
                  "text": "Delightfully Simple"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "NPCs",
          "title": "Non-Player Characters",
          "elements": [
            {
              "type": "radiogroup",
              "name": "amount",
              "title": "You have",
              "choices": [
                {
                  "value": "too many",
                  "text": "too many"
                },
                {
                  "value": "too few",
                  "text": "too few"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "quality",
              "title": "The NPCs that exist are",
              "choices": [
                {
                  "value": "fascinating",
                  "text": "Fascinating Personalities"
                },
                {
                  "value": "boring",
                  "text": "Boring Cannon Fodder"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "NPC types",
              "title": "I prefer that NPCs",
              "choices": [
                {
                  "value": "side kicks",
                  "text": "That have strong personalities and can be persuaded into being true side-kick companions"
                },
                {
                  "value": "cannon fodder",
                  "text": "Are cannon fodder so I don't feel bad about losing the turkey when I charge him at a golem."
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "Bossy Player",
          "title": "Bossy Player",
          "elements": [
            {
              "type": "boolean",
              "name": "too much",
              "title": "You let a bossy player get away with running everybody else"
            },
            {
              "type": "checkbox",
              "name": "limit boss",
              "title": "If yes, you might be able to limit this by",
              "choices": [
                {
                  "value": "ask PCs specific actions",
                  "text": "Specifically asking each character what they're doing"
                },
                {
                  "value": "Bossing = action",
                  "text": "Making any \"bossing\" that character's move in melee"
                },
                {
                  "value": "Choose leader",
                  "text": "Devise a method of choosing a leader, such as making the character with the highest Charisma-plus-level lead"
                },
                {
                  "value": "NPC intervention",
                  "text": "Having some NPC put a zipper spell on the jerk's mouth"
                },
                {
                  "value": "please fix",
                  "text": "I do not know but PLEASE do something"
                }
              ]
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "worldbuilding",
          "title": "World that are the most interesting",
          "choices": [
            {
              "value": "mythology",
              "text": "Where the DM borrows heavily on mythologies, literary fantasies, etc which interest him - whether or not these are in the D&D manuals"
            },
            {
              "value": "manual",
              "text": "The DM sticks to the manuals. I don't play often enough to figure out all your quirks"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "guidance",
          "title": "DM Guidance",
          "choices": [
            {
              "value": "DM guides",
              "text": "DMs who guide us through the adventure are best"
            },
            {
              "value": "CYOA",
              "text": "I prefer lots of opportunities to choose my own path in your world, but this does require lots of chances to find out information (blind stumbling around is boring)"
            }
          ]
        },
        {
          "type": "panel",
          "name": "mundane objects",
          "title": "Everyday Objects",
          "elements": [
            {
              "type": "radiogroup",
              "name": "amount",
              "title": "You need more/less everyday objects in your campaign",
              "choices": [
                {
                  "value": "more",
                  "text": "More"
                },
                {
                  "value": "less",
                  "text": "Less"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "trivial",
              "title": "Finding a good pair of scissors or a flashlight may sound trivial, but",
              "choices": [
                {
                  "value": "it is",
                  "text": "It is"
                },
                {
                  "value": "makes it fun",
                  "text": "Ultimately such objects vastly expand what you can think of to do and hence make the game much more fun"
                }
              ]
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pvp",
          "title": "PvP",
          "choices": [
            {
              "value": "nope",
              "text": "I don't like being knifed in the back. We shouldn't invite unruly or unreliable characters to our games anymore"
            },
            {
              "value": "sometimes",
              "text": "On occasion, I like a chaotic adventure where I can vent my hostilities as an Assassin"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "best part",
          "title": "The best part of your game is:",
          "choices": [
            {
              "value": "pizza",
              "text": "The break for pizza"
            },
            {
              "value": "worldbuilding",
              "text": "The incredible detail of your world"
            },
            {
              "value": "rewards",
              "text": "The concrete rewards of money for effort"
            },
            {
              "value": "NPCs",
              "text": "The fascinating NPCs"
            },
            {
              "value": "advancement",
              "text": "Seeing my character steadily advance"
            },
            {
              "value": "PC inventiveness",
              "text": "The inventiveness you encourage in us players"
            },
            {
              "value": "monsters",
              "text": "The thrill of defeating monsters"
            },
            {
              "value": "traps",
              "text": "The ingenious traps"
            },
            {
              "value": "teamwork",
              "text": "Playing a game with people instead of against them"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "favorite RPG type",
          "title": "My favorite role-playing game is",
          "choices": [
            {
              "value": "medievalism",
              "text": "One close to medieval tales"
            },
            {
              "value": "heroic fantasy",
              "text": "Heroic fantasy"
            },
            {
              "value": "scientific",
              "text": "One with a heavy scientific bent"
            },
            {
              "value": "mutants",
              "text": "One with mutants"
            },
            {
              "value": "space travel",
              "text": "One with space travel"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "favorite RPG",
          "title": "My favorite game (irrespective of DMs) is",
          "choices": [
            {
              "value": "D&D",
              "text": "D&D"
            },
            {
              "value": "AD&D",
              "text": "AD&D"
            },
            {
              "value": "traveller",
              "text": "Traveller"
            },
            {
              "value": "runequest",
              "text": "Runequest"
            },
            {
              "value": "metamorphosis alpha",
              "text": "Metamorphosis Alpha"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "comment",
          "name": "suggestion",
          "title": "If I were to make ONE single suggestion about how to improve your campaign, it would be"
        },
        {
          "type": "radiogroup",
          "name": "needs more credit",
          "title": "I don't think you give enough credit to",
          "choices": [
            {
              "value": "lawful",
              "text": "Lawful Integrity"
            },
            {
              "value": "chaotic",
              "text": "Chaotic Audacity"
            },
            {
              "value": "bravery",
              "text": "Bravery"
            },
            {
              "value": "force",
              "text": "Brute Force"
            },
            {
              "value": "persistence",
              "text": "Persistence"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "minis",
          "title": "Miniatures (Maps/Tokens)",
          "choices": [
            {
              "value": "enjoy",
              "text": "I enjoy miniatures. Elaborate miniatures are one of the best parts of the game"
            },
            {
              "value": "useful",
              "text": "Miniatures are useful for knowing who Clumsy Alfred feel into when he stumbled"
            },
            {
              "value": "irrelevant",
              "text": "Miniatures are irrelevant or even distracting from the game"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "town adventures",
          "title": "Town Adventures",
          "choices": [
            {
              "value": "colorful",
              "text": "Town adventures are one of the most colorful parts of the game"
            },
            {
              "value": "waste of time",
              "text": "Wasting an hour in town bartering for a sword or hireling is boring"
            }
          ]
        },
        {
          "type": "panel",
          "name": "dungeon time",
          "title": "Dungeon Time",
          "elements": [
            {
              "type": "radiogroup",
              "name": "realism",
              "title": "Time in your dungeon",
              "choices": [
                {
                  "value": "realistic",
                  "text": "Is realistic"
                },
                {
                  "value": "not realistic",
                  "text": "Is not realistic"
                }
              ]
            },
            {
              "type": "radiogroup",
              "name": "time distortion",
              "title": "Distortions in dungeon time make the game",
              "choices": [
                {
                  "value": "more playable",
                  "text": "More playable"
                },
                {
                  "value": "less playable",
                  "text": "Less playable"
                }
              ]
            },
            {
              "type": "boolean",
              "name": "crutches - too slow",
              "title": "It doesn't take a man on crutches 10 minutes to walk 30 paces"
            },
            {
              "type": "boolean",
              "name": "heroic - too fast",
              "title": "Not even Conan could polish off 3 vampires, a dragon and 42 orcs while traveling 100 miles in a single morning"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "hack and slash",
          "title": "I like to hack and slash"
        },
        {
          "type": "boolean",
          "name": "long adventures",
          "title": "I like dungeons that take many adventures"
        },
        {
          "type": "boolean",
          "name": "mini-campaigns",
          "title": "I like mini-campaigns that take one or two adventures to complete"
        }
      ]
    }
  ]
}