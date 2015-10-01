angular.module('starter.services', [])
.factory('Categories', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [{
      id: 1,
      name: "Inspiration",
      text: "",
      image: '',
      quotes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    }, {
      id: 2,
      name: 'Success',
      text: "",
      image: '',
      quotes: [27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]
    }, {
      id: 3,
      name: 'Opportunity',
      text: "",
      image: '',
      quotes: [54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89]
    }, {
      id: 4,
      name: "Motivation",
      text: "",
      image: '',
      quotes: [90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132]
    }, {
      id: 5,
      name: 'Happiness',
      text: "",
      image: '',
      quotes: [133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180]
    }, {
      id: 6,
      name: "Ambition",
      text: "",
      image: '',
      quotes: [181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210]
    }, {
      id: 7,
      name: 'Adversity',
      text: "",
      image: '',
      quotes: [211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]
    }, {
      id: 8,
      name: 'Prosperity',
      text: "",
      image: '',
      quotes: [256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293]
    }, {
      id: 9,
      name: 'Life',
      text: "",
      image: '',
      quotes: [294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342]
    }, {
      id: 10,
      name: 'Wisdom',
      text: "",
      image: '',
      quotes: [343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373]
    }];

    return {
      all: function() {
        return categories;
      },

      get: function(catId) {
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].id === parseInt(catId)) {
            return categories[i];
          }
        }
        return null;
      }
    };
  })

.factory('Quotes', function() {
  var quotes = [
    {
      "id":1,
      "quote":"Do not wait; the time will never be \"just right.\" Start where you stand.",
      "author":"Napoleon Hill",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":2,
      "quote":"Do we not all agree to call rapid thought and noble impulse by the name of inspiration?",
      "author":"George Eliot",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":3,
      "quote":"Don't wait for extraordinary opportunities. Seize common occasions and make them great.",
      "author":"Orison Swett Marden",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":4,
      "quote":"Doubt whom you will, but never yourself.",
      "author":"Christian Nestell Bovee ",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":5,
      "quote":"Every artist was first an amateur.",
      "author":"Ralph Waldo Emerson",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":6,
      "quote":"Experience is the child of thought, and thought is the child of action.",
      "author":"Benjamin Disraeli",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":7,
      "quote":"First say to yourself what you would be; and then do what you have to do.",
      "author":"Epictetus",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":8,
      "quote":"Happy are those who dream dreams and are ready to pay the price to make them come true.",
      "author":"Leon J. Suenes",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":9,
      "quote":"I avoid looking forward or backward, and try to keep looking upward.",
      "author":"Charlotte Bront�",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":10,
      "quote":"I have not the shadow of a doubt that any man or woman can achieve what I have, if he or she will make the same effort, and have the same hope and faith.",
      "author":"Mahatma Gandhi",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":11,
      "quote":"I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
      "author":"Anna Freud",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":12,
      "quote":"If you have built castles in the air, your work need not be lost; that is where they should be. Now put foundations under them.",
      "author":"Henry David Thoreau",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":13,
      "quote":"If you would create something, you must be something.",
      "author":"Johann Wolfgang von Goethe",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":14,
      "quote":"In any project the important factor is your belief. Without belief, there can be no successful outcome.",
      "author":"William James",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":15,
      "quote":"Inspiration and genius--one and the same.",
      "author":"Victor Hugo",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":16,
      "quote":"Life has no smooth road for any of us; and in the bracing atmosphere of a high aim the very roughness stimulates the climber to steadier steps, till the legend, over steep ways to the stars, fulfills itself. ",
      "author":"W. C. Doane",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":17,
      "quote":"Men do less than they ought, unless they do all they can.",
      "author":"Thomas Carlyle",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":18,
      "quote":"No great man ever complains of want of opportunities.",
      "author":"Ralph Waldo Emerson",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":19,
      "quote":"Nothing is worth more than this day. You cannot relive yesterday. Tomorrow is still beyond our reach.",
      "author":"Johann Wolfgang Von Goethe",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":20,
      "quote":"The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
      "author":"Horace Bushnell",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":21,
      "quote":"The power of imagination makes us infinite.",
      "author":"John Muir",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":22,
      "quote":"To find what you seek in the road of life, the best proverb of all is that which says: \"Leave no stone unturned.\"",
      "author":"Edward Bulwer Lytton",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":23,
      "quote":"Try not to become a man of success but a man of value.",
      "author":"Albert Einstein",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":24,
      "quote":"                       ",
      "author":"John Gardner",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":25,
      "quote":"We can do anything we want to do if we stick to it long enough.",
      "author":"Helen Keller",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":26,
      "quote":"You miss 100% of the shots you don't take. ",
      "author":"Wayne Gretzky",
      "category":"Inspiration",
      "image":"",
      "extra":""
    },
    {
      "id":27,
      "quote":"A failure is a man who has blundered, but is not able to cash in on the experience.",
      "author":"Elbert Hubbard",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":28,
      "quote":"Along with success comes a reputation for wisdom.",
      "author":"Euripides",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":29,
      "quote":"Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
      "author":"Ullery",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":30,
      "quote":"Everyone has a fair turn to be as great as he pleases.",
      "author":"Jeremy Collier",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":31,
      "quote":"Failures to heroic minds are the stepping stones to success.",
      "author":"Thomas Chandler Haliburton",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":32,
      "quote":"He is great enough who is his own master.",
      "author":"Bishop Hail",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":33,
      "quote":"I cannot give you the formula for success, but I can give you the formula for failure--which is: Try to please everybody. ",
      "author":"Herbert Bayard Swope",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":34,
      "quote":"If at first you don't succeed, try, try again. Then quit. There's no use being a damn fool about it.",
      "author":"W.C. Fields",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":35,
      "quote":"If you wish success in life, make perseverance your bosom friend, experience your wise counselor, caution your elder brother, and hope your guardian genius.",
      "author":"Jospeph Addison",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":36,
      "quote":"Impatience never commanded success.",
      "author":"Edwin H. Chapin",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":37,
      "quote":"Keep steadily before you the fact that all true success depends at last upon yourself.",
      "author":"Theodore T. Hunger",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":38,
      "quote":"Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude. ",
      "author":"Thomas Jefferson",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":39,
      "quote":"Success does not consist in never making blunders, but in never making the same one a second time.",
      "author":"Josh Billings",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":40,
      "quote":"Success is more a function of consistent common sense than it is of genius.",
      "author":"An Wang",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":41,
      "quote":"Success is the child of audacity.",
      "author":"Benjamin Disraeli",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":42,
      "quote":"Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
      "author":"Evan Esar",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":43,
      "quote":"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
      "author":"Booker T. Washington",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":44,
      "quote":"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      "author":"Vince Lombardi",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":45,
      "quote":"The greatest results in life are usually attained by simple means and the exercise of ordinary qualities. These may for the most part be summed in these two: common-sense and perseverance.",
      "author":"Owen Feltham",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":46,
      "quote":"The man who makes a success of an important venture never wails for the crowd. He strikes out for himself. It takes nerve, it takes a great lot of grit; but the man that succeeds has both. Anyone can fail. The public admires the man who has enough confidence in himself to take a chance. These chances are the main things after all. The man who tries to succeed must expect to be criticized. Nothing important was ever done but the greater number consulted previously doubted the possibility. Success is the accomplishment of that which most people think can't be done.",
      "author":"C. V. White",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":47,
      "quote":"The secret of success is to know something nobody else knows.",
      "author":"Aristotle Onassis",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":48,
      "quote":"The surest way not to fail is to determine to succeed.",
      "author":"Richard Brinsley Sheridan",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":49,
      "quote":"The talent of success is nothing more than doing what you can do, well.",
      "author":"Henry W. Longfellow",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":50,
      "quote":"The thing always happens that you really believe in; and the belief in a thing makes it happen.",
      "author":"Frank Loyd Wright",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":51,
      "quote":"There is only one success--to be able to spend your life in your own way.",
      "author":"Christopher Morley",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":52,
      "quote":"They can because they think they can.",
      "author":"Virgil",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":53,
      "quote":"We are all motivated by a keen desire for praise, and the better a man is, the more he is inspired to glory.",
      "author":"Cicero",
      "category":"Success",
      "image":"",
      "extra":""
    },
    {
      "id":54,
      "quote":"A good opportunity is seldom presented, and is easily lost. ",
      "author":"Syrus",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":55,
      "quote":"A man in earnest finds means or, if he cannot find, creates them.",
      "author":"William Ellery Channing",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":56,
      "quote":"A stray, unthought-of five minutes may contain the event of a life, and this all-important moment � who can tell when it will be upon us?",
      "author":"Dean Alford",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":57,
      "quote":"A wise man will make more opportunities than he finds.",
      "author":"Francis Bacon",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":58,
      "quote":"Ability is of little account without opportunity.",
      "author":"Napoleon Bonaparte",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":59,
      "quote":"And then one day you find ten years have got behind you. No one told you when to run, you missed the starting gun. ",
      "author":"Time lyrics, Pink Floyd",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":60,
      "quote":"Arrange whatever pieces come your way.",
      "author":"Virginia Woolf",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":61,
      "quote":"Chance is always powerful; let your hook always be cast in a pool where you least expect there will be fish.",
      "author":"Ovid",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":62,
      "quote":"Do not suppose opportunity will knock twice at your door. ",
      "author":"Nicolas de Chamfort",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":63,
      "quote":"Do not wait for ideal circumstances, nor for the best opportunities; they will never come.",
      "author":"Janet Erskine Stuart",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":64,
      "quote":"Great opportunities come to all but many do not know they have met them. The only preparation to take advantage of them is simple fidelity to what each day brings.",
      "author":"A. E. Dunning",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":65,
      "quote":"How often events, by chance and unexpectedly, come to pass, which you had not dared even to hope for!",
      "author":"Terence",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":66,
      "quote":"Improve time in the present; for opportunity is precious, and time is a sword. ",
      "author":"Saadi",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":67,
      "quote":"Many do with opportunities as children do at the seashore; they fill their little hands with sand, and then let the grains fall through, one by one.",
      "author":"Thomas Jones",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":68,
      "quote":"Occasions are rare: and those who know how to seize upon them are rarer.",
      "author":"H. W. Shaw",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":69,
      "quote":"Opportunities are on every hand; what we need is, not a new chance, but clearness of vision to discern the chance which at this very hour is ours, if we recognize it.",
      "author":"Katherine Krieger",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":70,
      "quote":"Opportunities do not come with their values stamped upon them. Everyone must be challenged. A day dawns, quite like other days; in it a single hour comes, quite like other hours; but in that day and in that hour the chance of a lifetime faces us. ",
      "author":"Maltbie Davenport Babcock",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":71,
      "quote":"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      "author":"Thomas A. Edison",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":72,
      "quote":"Opportunity, sooner or later, comes to all who work and wish.",
      "author":"Lord Stanley",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":73,
      "quote":"Present opportunities are not to be neglected; they rarely visit us twice. ",
      "author":"Voltaire",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":74,
      "quote":"Take all the swift advantage of the hours.",
      "author":"William Shakepeare",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":75,
      "quote":"The future is an opportunity.",
      "author":"J. F. Ware",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":76,
      "quote":"The golden moments in the stream of life rush past us, and we see nothing but sand; the angels come to visit us, and we only know them when they are gone. ",
      "author":"George Eliot",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":77,
      "quote":"The greatest achievement of the human spirit is to live up to one's opportunities and make the most of one's resources.",
      "author":"Marquis de Vauvenargues",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":78,
      "quote":"The lure of the distant and the difficult is deceptive. The great opportunity is where you are.",
      "author":"John Burroughs",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":79,
      "quote":"The race is not to the swift or the battle to the strong, nor does food come to the wise or wealth to the brilliant or favor to the learned; but time and chance happen to them all.",
      "author":"Ecclesiastes 9:11",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":80,
      "quote":"The secret of success in life is for a man to be ready for his opportunity when it comes.",
      "author":"Benjamin Disraeli",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":81,
      "quote":"The sure way to miss success is to miss the opportunity.",
      "author":"Victor Chasles ",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":82,
      "quote":"There's a time for all things.",
      "author":"William Shakespeare",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":83,
      "quote":"To improve the golden moment of opportunity, and catch the good that is within our reach, is the great art of life.",
      "author":"Samuel Johnson",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":84,
      "quote":"We have the power within, but the secret of success is to employ our power and talents and be prepared for opportunity when it comes.",
      "author":"Walter Matthews",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":85,
      "quote":"We must look for the opportunity in every difficulty instead of being paralyzed at the thought of the difficulty in every opportunity. ",
      "author":"Walter E. Cole",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":86,
      "quote":"Welcome every new and difficult problem in life as a new opportunity to wrestle and win and to gain new experience and new power.",
      "author":"L H. Murlin",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":87,
      "quote":"When the time comes in which one could, the time has passed in which one can.",
      "author":"Marie Ebner Eschenbach",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":88,
      "quote":"Who cannot but see oftentimes how strange the threads of our destiny run? Oft it is only for a moment the favorable instant is presented. We miss it, and months and years are lost. ",
      "author":"Ludwig Tieck",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":89,
      "quote":"Who seeks, and will not take, when once 'tis offered, Shall never find it more.",
      "author":"William Shakespeare",
      "category":"Opportunity",
      "image":"",
      "extra":""
    },
    {
      "id":90,
      "quote":"Amazing how we can light tomorrow with today.",
      "author":"Elizabeth Barrett Browning",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":91,
      "quote":"An oak is not felled at one blow. ",
      "author":"Spanish Proverb",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":92,
      "quote":"And all may do what has by man been done.",
      "author":"Edward Young",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":93,
      "quote":"Believe with all of your heart that you will do what you were made to do.",
      "author":"Orison Swett Marden",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":94,
      "quote":"Constant dripping hollows out a stone.",
      "author":"Lucretius",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":95,
      "quote":"Do not wait to strike till the iron is hot; but make it hot by striking.",
      "author":"William B. Sprague",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":96,
      "quote":"Dream big and dare to fail.",
      "author":"Norman Vaughan",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":97,
      "quote":"Each day I look for a kernel of excitement. In the morning, I say: \"What is my exciting thing for today?\" Then I do the day.",
      "author":"Barbara Jordan",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":98,
      "quote":"For hope is but the dream of those that wake.",
      "author":"Matthew Prior",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":99,
      "quote":"Fortune favors the brave.",
      "author":"Publius Terence",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":100,
      "quote":"Great spirits have always encountered violent opposition from mediocre minds.",
      "author":"Albert Einstein",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":101,
      "quote":"He turns not back who is bound to a star.",
      "author":"Leonardo Da Vinci",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":102,
      "quote":"He who hesitates is lost.",
      "author":"Proverb",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":103,
      "quote":"Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
      "author":"Samuel Smiles",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":104,
      "quote":"If the wind will not serve, take to the oars. Destitutus ventis, remos adhibe",
      "author":"Latin Proverb",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":105,
      "quote":"If you do not hope, you will not find what is beyond your hopes.",
      "author":"St. Clement of Alexandra",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":106,
      "quote":"If you want to succeed in the world must make your own opportunities as you go on. The man who waits for some seventh wave to toss him on dry land will find that the seventh wave is a long time a coming. You can commit no greater folly than to sit by the roadside until some one comes along and invites you to ride with him to wealth or influence.",
      "author":"John B. Gough",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":107,
      "quote":"In doubtful matters boldness is everything.",
      "author":"Publilius Syrus",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":108,
      "quote":"In every difficult situation is potential value. Believe this, then begin looking for it.",
      "author":"Norman Vincent Peale",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":109,
      "quote":"Knowing is not enough; we must apply. Willing is not enough; we must do.",
      "author":"Johann Wolfgang von Goethe ",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":110,
      "quote":"Life consists not in holding good cards, but in playing those you hold well.",
      "author":"Josh Billings",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":111,
      "quote":"Men's best successes come after their disappointments. ",
      "author":"Henry Ward Beecher",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":112,
      "quote":"No star is lost once we have seen, we always may be what we might have been.",
      "author":"Adelaide Proctor",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":113,
      "quote":"Nothing contributes so much to tranquilize the mind as a steady purpose -a point on which the soul may fix its intellectual eye.",
      "author":"Mary Shelley",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":114,
      "quote":"Nothing great was ever achieved without enthusiasm.",
      "author":"Ralph Waldo Emerson",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":115,
      "quote":"Nothing will ever be attempted if all possible objections must first be overcome.",
      "author":"Samuel Johnson",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":116,
      "quote":"Reach perfection.",
      "author":"Baltasar Graci'n",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":117,
      "quote":"Seek the lofty by reading, hearing and seeing great work at some moment every day.",
      "author":"Thornton Wilder",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":118,
      "quote":"Storms make oaks take roots.",
      "author":"Proverb",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":119,
      "quote":"Strong lives are motivated by dynamic purposes.",
      "author":"Kenneth Hildebrand",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":120,
      "quote":"Take calculated risks. That is quite different from being rash.",
      "author":"George S. Patton",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":121,
      "quote":"The best way out is always through.",
      "author":"Robert Frost",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":122,
      "quote":"The only way of finding the limits of the possible is by going beyond them into the impossible.",
      "author":"Arthur C. Clarke",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":123,
      "quote":"We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate. The world is all gates, all opportunities.",
      "author":"Ralph Waldo Emerson",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":124,
      "quote":"We are still masters of our fate. We are still captains of our souls.",
      "author":"Winston Churchill",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":125,
      "quote":"We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
      "author":"Aristotle",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":126,
      "quote":"Well begun is half done.",
      "author":"Greek Proverb",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":127,
      "quote":"When the best things are not possible, the best may be made of those that are. ",
      "author":"Richard Hooker",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":128,
      "quote":"When you get into a tight place and everything goes against you, till it seems you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn.",
      "author":"Harriet Beecher Stowe",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":129,
      "quote":"With will one can do anything.",
      "author":"Samuel Smiles",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":130,
      "quote":"Without inspiration the best powers of the mind remain dormant. There is a fuel in us which needs to be ignited with sparks.",
      "author":"Johann Gottfried Von Herder",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":131,
      "quote":"Work spares us from three evils: boredom, vice, and need.",
      "author":"Voltaire",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":132,
      "quote":"You cannot plough a field by turning it over in your mind.",
      "author":"Author Unknown",
      "category":"Motivation",
      "image":"",
      "extra":""
    },
    {
      "id":133,
      "quote":"A light heart lives long.",
      "author":"William Shakespeare",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":134,
      "quote":"Action may not always bring happiness; but there is no happiness without action.",
      "author":"Benjamin Disraeli",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":135,
      "quote":"Fortify yourself with contentment, for this is an impregnable fortress.",
      "author":"Epictetus",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":136,
      "quote":"Great effort from great motives is the best definition of a happy life.",
      "author":"William Ellery Channing",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":137,
      "quote":"Happiness consists in activity: such is the constitution of our nature; it is a running stream, and not a stagnant pool. ",
      "author":"John M. Good",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":138,
      "quote":"Happiness depends more on the inward disposition of mind than on outward circumstances.",
      "author":"Benjamin Franklin",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":139,
      "quote":"Happiness depends upon ourselves.",
      "author":"Aristotle",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":140,
      "quote":"Happiness grows at our own firesides, and is not to be picked in strangers' gardens.",
      "author":"Douglas Jerrold",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":141,
      "quote":"Happiness is not a goal, but a by-product.",
      "author":"Eleanor Roosevelt",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":142,
      "quote":"Happiness is not a matter of events, it depends upon the tides of the mind.",
      "author":"Alice Meynell",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":143,
      "quote":"Happiness is not a state to arrive at, but a manner of traveling. ",
      "author":"Margaret Lee Runbeck",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":144,
      "quote":"Happiness is not a station you arrive at, but a manner of traveling.",
      "author":"Margaret Lee Runbeck",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":145,
      "quote":"Happiness is not about making it to the peak of the mountain nor is it about climbing aimlessly around the mountain; happiness is the experience of climbing toward the peak.",
      "author":"Tal Ben-Shahar, Happier",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":146,
      "quote":"Happiness is not achieved by the conscious pursuit of happiness; it is generally the by-product of other activities.",
      "author":"Aldous Huxley",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":147,
      "quote":"Happiness is where we find it, but rarely where we seek it.",
      "author":"J. Petit Senn",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":148,
      "quote":"Happiness resides not in possessions and not in gold; the feeling of happiness dwells in the soul.",
      "author":"Democritus",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":149,
      "quote":"I am more and more convinced that our happiness or unhappiness depends far more on the way we meet the events of life, than on the nature of those events themselves.",
      "author":"Baron Alexander von Humboldt",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":150,
      "quote":"I am more and more convinced that our happiness or unhappiness depends far more on the way we meet the events of life, than on the nature of those events themselves.",
      "author":"Baron Alexander von Humboldt",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":151,
      "quote":"I do not like the idea of happiness it is too momentary. I would say that I was always busy and interested in something interest has more meaning than happiness.",
      "author":"Georgia O'Keefe",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":152,
      "quote":"In the hopes of reaching the moon men fail to see the flowers that blossom at their feet.",
      "author":"Albert Schweitzer",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":153,
      "quote":"It is not how much we have, but how much we enjoy, that makes happiness.",
      "author":"Charles Spurgeon",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":154,
      "quote":"Knowledge of what is possible is the beginning of happiness.",
      "author":"George Santayana",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":155,
      "quote":"Men spend their lives in anticipations, in determining to be vastly happy at some period when they have time. But the present time has one advantage over every other�it is our own. Past opportunities are gone, future have not come. We may lay in a stock of pleasures, as we would lay in a stock of wine; but if we defer the tasting of them too long, we shall find that both are soured by age.",
      "author":"Charles Caleb Colton",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":156,
      "quote":"No man is happy who does not think himself so.",
      "author":"Publilius Syrus",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":157,
      "quote":"Our minds are as different as our faces: we are all traveling to one destination; happiness; but few are going by the same road.",
      "author":"Charles Caleb Colton",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":158,
      "quote":"People with many interests live, not only longest, but happiest. ",
      "author":"George Matthew Allen",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":159,
      "quote":"Remember, happiness doesn't depend upon who you are or what you have, it depends solely upon what you think.",
      "author":"Dale Carnegie",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":160,
      "quote":"Success is getting what you want; happiness is wanting what you get.",
      "author":"Various Attributions",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":161,
      "quote":"The chances are that you have already come to believe that happiness is unattainable. But men have attained it. And they have attained it by realising that happiness does not spring from the procuring of physical or mental pleasure, but from the development of reason and the adjustment of conduct to principles. ",
      "author":"from How to Live on 24 Hours a Day, by Arnold Bennett",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":162,
      "quote":"The greater part of our happiness depends on our dispositions, and not on our circumstances.",
      "author":"Martha Washington",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":163,
      "quote":"The happiness of life is made up of minute fractions�the little soon-forgotten charities of a kiss, a smile, a kind look, a heartfelt compliment in the disguise of a playful raillery, and the countless other infinitesimal of pleasurable thought and genial feeling. ",
      "author":"Samuel Taylor Coleridge",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":164,
      "quote":"The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
      "author":"Marcus Aurelius",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":165,
      "quote":"The man is happiest who lives from day to day and asks no more, garnering the simple goodness of life.",
      "author":"Euripides",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":166,
      "quote":"The only way on earth to multiply happiness is to divide it.",
      "author":"Paul Scherer",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":167,
      "quote":"The secret of contentment is knowing how to enjoy what you have, and to be able to lose all desire for things beyond your reach.",
      "author":"Lin Yutang",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":168,
      "quote":"There is more to life than increasing its speed.",
      "author":"Mahatma Gandhi",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":169,
      "quote":"There is no happiness except in the realization that we have accomplished something.",
      "author":"Henry Ford",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":170,
      "quote":"There is only one person who could ever make you happy, and that person is you.",
      "author":"David D. Burns, M.D., Intimate Connections",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":171,
      "quote":"There is only one way to happiness, and that is to cease worrying about things which are beyond the power of our will. ",
      "author":"Epictetus",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":172,
      "quote":"To be happy, we must not be too concerned with others. ",
      "author":"Albert Camus",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":173,
      "quote":"Try to be happy in this present moment, and put not off being so to a time to come,�as though that time should be of another make from this which has already come and is ours.",
      "author":"Thomas Fuller",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":174,
      "quote":"We deem those happy who, from the experience of life, have learned to bear its ills, without being overcome by them.",
      "author":"Juvenal",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":175,
      "quote":"We tend to forget that happiness doesn't come as a result of getting something we don't have, but rather of recognizing and appreciating what we do have.",
      "author":"Frederick Koenig",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":176,
      "quote":"Well-being is attained by little and little, and nevertheless is no little thing itself.",
      "author":"Zeno of Citium ",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":177,
      "quote":"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      "author":"Helen Keller",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":178,
      "quote":"Who is the happiest of men? He who values the merits of others, and in their pleasure takes joy, even as though 'twere his own. ",
      "author":"Johann Wolfgang von Goethe",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":179,
      "quote":"You're happiest while you're making the greatest contribution.",
      "author":"Robert F. Kennedy",
      "category":"Happiness",
      "image":"",
      "extra":""
    },
    {
      "id":180,
      "quote":"A goal is a dream with a deadline.",
      "author":"Napoleon Hill",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":181,
      "quote":"A good archer is known not by his arrows but by his aim.",
      "author":"Thomas Fuller",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":182,
      "quote":"A man should have any number of little aims about which he should be conscious and for which he should have names, but he should have neither name for, nor consciousness concerning, the main aim of his life.",
      "author":"Samuel Butler",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":183,
      "quote":"Ah, but a man's reach should exceed his grasp, or what's a heaven for?",
      "author":"Robert Browning",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":184,
      "quote":"Aim at the sun, and you may not reach it; but your arrow will fly far higher than if aimed at an object on a level with yourself. ",
      "author":"J. Howes",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":185,
      "quote":"Arriving at one goal is the starting point to another.",
      "author":"John Dewey",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":186,
      "quote":"Don't bunt. Aim out of the ballpark.",
      "author":"David Ogilvy",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":187,
      "quote":"Every ceiling, when reached, becomes a floor, upon which one walks as a matter of course and prescriptive right.",
      "author":"Aldous Huxley",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":188,
      "quote":"Failures do what is tension relieving, while winners do what is goal achieving. ",
      "author":"Dennis Waitley",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":189,
      "quote":"Goals are the fuel in the furnace of achievement.",
      "author":"Brian Tracy, Eat that Frog",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":190,
      "quote":"He who would arrive at the appointed end must follow a single road and not wander through many ways.",
      "author":"Seneca",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":191,
      "quote":"However brilliant an action may be, it should not be accounted great when it is not the result of a great purpose.",
      "author":"Francois de la Rochefoucauld ",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":192,
      "quote":"I am always more interested in what I am about to do than what I have already done.",
      "author":"Rachel Carson",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":193,
      "quote":"If you don't know where you are going, you'll end up someplace else.",
      "author":"Yogi Berra",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":194,
      "quote":"In absence of clearly defined goals, we become strangely loyal to performing daily acts of trivia.",
      "author":"Author Unknown",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":195,
      "quote":"In all things that you do, consider the end. ",
      "author":"Solon",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":196,
      "quote":"In everything the ends well defined are the secret of durable success.",
      "author":"Victor Cousins",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":197,
      "quote":"It is not enough to take steps which may some day lead to a goal; each step must be itself a goal and a step likewise.",
      "author":"Johann Wolfgang von Goethe",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":198,
      "quote":"Life can be pulled by goals just as surely as it can be pushed by drives.",
      "author":"Viktor Frankl",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":199,
      "quote":"Most \"impossible\" goals can be met simply by breaking them down into bite size chunks, writing them down, believing them, and then going full speed ahead as if they were routine.",
      "author":"Don Lancaster",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":200,
      "quote":"Our plans miscarry because they have no aim. When a man does not know what harbor he is making for, no wind is the right wind.",
      "author":"Seneca",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":201,
      "quote":"Purpose is what gives life a meaning.",
      "author":"C. H. Parkhurst",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":202,
      "quote":"Some men give up their designs when they have almost reached the goal; while others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than before.",
      "author":"Polybius",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":203,
      "quote":"The going is the goal.",
      "author":"Horace Kallen",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":204,
      "quote":"The great and glorious masterpiece of man is to know how to live to purpose.",
      "author":"Michel de Montaigne",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":205,
      "quote":"The significance of a man is not in what he attains but in what he longs to attain.",
      "author":"Kahlil Gibran",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":206,
      "quote":"The virtue lies in the struggle, not in the prize.",
      "author":"Richard Monckton Milnes",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":207,
      "quote":"There are two things to aim at in life; first to get what you want, and after that to enjoy it. Only the wisest of mankind has achieved the second.",
      "author":"Logan Pearsall Smith",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":208,
      "quote":"To reach a port, we must sail�Sail, not tie at anchor�Sail, not drift.",
      "author":"Franklin Roosevelt",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":209,
      "quote":"Who aims at excellence will be above mediocrity; who aims at mediocrity will be far short of it.",
      "author":"Burmese Saying",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":210,
      "quote":"Your goal should be just out of reach, but not out of sight.",
      "author":"Denis Waitley and Remi Witt",
      "category":"Ambition",
      "image":"",
      "extra":""
    },
    {
      "id":211,
      "quote":"A gentleman can withstand hardships; it is only the small man who, when submitted to them, is swept off his feet.",
      "author":"Confucius",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":212,
      "quote":"A problem is a chance for you to do your best.",
      "author":"Duke Ellington",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":213,
      "quote":"A wise man adapts himself to circumstances as water shapes itself to the vessel that contains it.",
      "author":"Chinese Proverb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":214,
      "quote":"A wretched soul, bruis'd with adversity, we bid be quiet, when we hear it cry; but were we burthen'd with like weight of pain, as much, or more, we should ourselves complain.",
      "author":"William Shakespeare",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":215,
      "quote":"Adversity introduces a man to himself.",
      "author":"Anonymous ",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":216,
      "quote":"Adversity is the first path to truth.",
      "author":"Lord Byron",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":217,
      "quote":"Adversity is the mother of progress.",
      "author":"Mahatma Gandhi",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":218,
      "quote":"Adversity is wont to reveal genius, prosperity to hide it.",
      "author":"Horace",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":219,
      "quote":"All misfortune is but a stepping stone to fortune.",
      "author":"Henry David Thoreau",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":220,
      "quote":"All sunshine makes the desert.",
      "author":"Arabian Proverb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":221,
      "quote":"Aspiring minds must sometimes sustain loss.",
      "author":"Plato",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":222,
      "quote":"Difficulties strengthen the mind, as well as labor does the body.",
      "author":"Seneca",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":223,
      "quote":"Difficulties, by bracing the mind to overcome them, assist cheerfulness, as exercise assists digestion.",
      "author":"Christian Nestell Bovee",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":224,
      "quote":"Every calamity is a spur and a valuable hint.",
      "author":"Ralph Waldo Emerson",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":225,
      "quote":"Fractures well cured make us more strong.",
      "author":"Ralph Waldo Emerson",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":226,
      "quote":"Going through difficult times augments our capacity for pleasure: it keeps us from taking pleasure for granted, reminds us to be grateful for all the large and small pleasures in our lives.",
      "author":"Tal Ben-Shahar, Happier",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":227,
      "quote":"Good fortune and bad are equally necessary to man, to fit him to meet the contingencies of this life.",
      "author":"French Proverb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":228,
      "quote":"I think the challenge is to take...difficult and painful times and turn them into something beneficial, something that makes you grow.",
      "author":"Michelle Akers",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":229,
      "quote":"If we had no winter, the spring would not be so pleasant. If it did not sometimes taste of adversity, prosperity would not be so welcome.",
      "author":"Charlotte Bronte",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":230,
      "quote":"In prosperity, our friends know us; in adversity, we know our friends. ",
      "author":"John Churton Collins",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":231,
      "quote":"In the midst of winter, I found there was within me an invincible summer.",
      "author":"Albert Careb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":232,
      "quote":"It has been my philosophy of life that difficulties vanish when faced boldly.",
      "author":"Isaac Asimov",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":233,
      "quote":"It is interesting to notice how some minds seem almost to create themselves, springing up under every disadvantage, and working their solitary but irresistible way through a thousand obstacles.",
      "author":"Washington Irving",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":234,
      "quote":"It is the surmounting of difficulties that makes heroes.",
      "author":"Louis Kossuth ",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":235,
      "quote":"Little minds are tamed and subdued by misfortune, but great minds rise above them.",
      "author":"Washington Irving",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":236,
      "quote":"Look not mournfully into the past, it comes not back again. Wisely improve the present, it is thine. Go forth to meet the shadowy future without fear and with a manly heart.",
      "author":"Henry Wadsworth Longfellow",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":237,
      "quote":"Look up and not down; look forward and not back; look out and not in; and lend a hand. ",
      "author":"E. E. Hale",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":238,
      "quote":"Misfortunes often sharpen the genius.",
      "author":"Ovid",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":239,
      "quote":"Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
      "author":"Ralph Blum",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":240,
      "quote":"Obstacles are great incentives.",
      "author":"Jules Michelet",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":241,
      "quote":"Pick battles big enough to matter, snall enough to win.",
      "author":"Jonathan Kozol",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":242,
      "quote":"Problems are only opportunities in work clothes.",
      "author":"Henry J. Kaiser",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":243,
      "quote":"Prosperity is a great teacher; adversity a greater.",
      "author":"William Hazlitt",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":244,
      "quote":"Success in the affairs of life often serves to hide one's abilities, whereas adversity frequently gives one an opportunity to discover them.",
      "author":"Horace",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":245,
      "quote":"Surmounted difficulties not only teach, but hearten us in our future struggles.",
      "author":"James Sharp",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":246,
      "quote":"Sweet are the uses of adversity, which like the toad, ugly and venomous, wears yet a precious jewel in his head.",
      "author":"William Shakespeare",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":247,
      "quote":"The gem cannot be polished without friction, nor man be perfected without trials.",
      "author":"Danish Proverb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":248,
      "quote":"The man of virtue makes the difficulty to be overcome his first business, and success only a subsequent consideration.",
      "author":"Confucius ",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":249,
      "quote":"The rays of happiness, like those of light, are colorless when unbroken.",
      "author":"Henry W. Longfellow",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":250,
      "quote":"There can be no rainbow without a cloud and a storm.",
      "author":"J. H. Vincent",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":251,
      "quote":"There is no education like adversity.",
      "author":"Benjamin Disraeli ",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":252,
      "quote":"There is no excellence uncoupled with difficulties.",
      "author":"Ovid",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":253,
      "quote":"Times of great calamity and confusion have ever been productive of the greatest minds. The purest ore is produced from the hottest furnace, and the brightest thunderbolt is elicited from the darkest storm.",
      "author":"Charles Caleb Colton",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":254,
      "quote":"What is defeat? Nothing but education; nothing but the first steps to something better.",
      "author":"Proverb",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":255,
      "quote":"Wherever we look upon this earth, the opportunities take shape within the problems.",
      "author":"Nelson A. Rockefeller",
      "category":"Adversity",
      "image":"",
      "extra":""
    },
    {
      "id":256,
      "quote":"A feast is made for laughter, and wine maketh merry: but money answereth all things.",
      "author":"Ecclesiastes 10:19",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":257,
      "quote":"A full purse is not as good as an empty one is bad.",
      "author":"Yiddish Proverb",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":258,
      "quote":"A man is rich in proportion to the number of things he can afford to leave alone.",
      "author":"Henry David Thoreau",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":259,
      "quote":"A man who both spends and saves money is the happiest man, because he has both enjoyments.",
      "author":"Samuel Johnson",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":260,
      "quote":"A man's true wealth is the good he does in this world.",
      "author":"Bendixline",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":261,
      "quote":"Americans spend all or most of their income on things that have little or no lasting value.",
      "author":"Thomas Stanley",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":262,
      "quote":"Before you make any purchase, ask yourself if you really need it. In most cases your life won't be any less full or rich without it, and every dollar you save will reduce your ecological footprint.",
      "author":"Kim McKay and Jenny Bonin, True Green ",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":263,
      "quote":"Enough is better than too much.",
      "author":"French Proverb",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":264,
      "quote":"Freedom is low overhead.",
      "author":"Various Attributions",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":265,
      "quote":"Have the courage to set down every penny you spend, and add it up weekly. ",
      "author":"Josephus Nelson Larned",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":266,
      "quote":"I want the whole of Europe to have one currency; it will make trading much easier.",
      "author":"Napoleon I",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":267,
      "quote":"If money go before, all ways do lie open.",
      "author":"William Shakespeare, The Merry Wives of Windsor",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":268,
      "quote":"If we fasten our attention on what we have, rather than what we lack, a very little wealth is sufficient.",
      "author":"Francis Johnson",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":269,
      "quote":"If your riches are yours, why don't you take them with you to t'other world?",
      "author":"Ben Franklin",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":270,
      "quote":"It's good to have money and the things money can buy, but it's good, too, to check up once in a while and make sure that you haven't lost the things that money can't buy.",
      "author":"George Horace Larimer",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":271,
      "quote":"Lots of people know how to make money, but are not gifted in the art of preserving it. Frequently the same risk that was involved in making you rich is the same risk that can make you poor again.",
      "author":"Fred J. Young",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":272,
      "quote":"Love does much, but money does all.",
      "author":"French Proverb",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":273,
      "quote":"Man must choose to be rich in things or the freedom to use them.",
      "author":"Ivan Illich",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":274,
      "quote":"Men do not understand how great a revenue is economy.",
      "author":"Cicero",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":275,
      "quote":"Money alone sets all the world in motion.",
      "author":"Publilius Syrus",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":276,
      "quote":"Money amassed either serves us or rules us.",
      "author":"Horace",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":277,
      "quote":"Money is an opportunity for happiness, but it is an opportunity that people routinely squander because the things they think will make them happy often don't.",
      "author":"Elizabeth Dunn, Daniel Gilbert and Timothy D. Wilson",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":278,
      "quote":"Money is for food and clothing and the occasional splurge at the flea market when you find some nice, sustainable furniture.",
      "author":"Fionia, About a Boy (the TV show)",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":279,
      "quote":"Money is valueless, except as it will satisfy wants.",
      "author":"Edwin T. Freedley",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":280,
      "quote":"Money should be mastered, not served.",
      "author":"Syrus, Maxims",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":281,
      "quote":"Once you really accept that spending money doesn't equal happiness, you have half the battle won.",
      "author":"Ernest Callenbach",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":282,
      "quote":"Poverty is a blessing hated by all men.",
      "author":"Italian Proverb",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":283,
      "quote":"Put not your trust in money, but put your money in trust.",
      "author":"Oliver Wendell Holmes",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":284,
      "quote":"Seek rather a man without money than money without a man.",
      "author":"Themistocles",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":285,
      "quote":"Soon gotten, soon spent; ill gotten, ill spent.",
      "author":"John Heywood",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":286,
      "quote":"The almighty dollar, that great object of universal devotion throughout our land.",
      "author":"Washington Irving",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":287,
      "quote":"The company in which you will improve most, will be the least expensive to you. ",
      "author":"George Washington",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":288,
      "quote":"The cost of a thing is the amount of what I call life which is required to be exchanged for it, immediately or in the long run.",
      "author":"Henry David Thoreau",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":289,
      "quote":"The thing I should wish to obtain from money would be leisure with security.",
      "author":"Bertrand Russell",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":290,
      "quote":"The urge to spend all you make is called consumer mentality. Try to get investment mentality instead.",
      "author":"Edward H. Romney",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":291,
      "quote":"When you are tempted to buy some novelty item - such as a towel roll with a music box in it - visualize it in a pile of junk at a yard sale with a 50 cent price tag on it.",
      "author":"Edward H. Romney",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":292,
      "quote":"When you have money, think of the time when you had none.",
      "author":"Japanese Proverb",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":293,
      "quote":"You must learn to save first and spend afterwards.",
      "author":"John Poole",
      "category":"Prosperity",
      "image":"",
      "extra":""
    },
    {
      "id":294,
      "quote":"After the game, the king and the pawn go into the same box.",
      "author":"Italian Proverb",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":295,
      "quote":"As I grow to understand life less and less, I learn to love it more and more.",
      "author":"Jules Renard",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":296,
      "quote":"As one goes through life, one learns that if you don't paddle your own canoe, you don't move.",
      "author":"Katherine Hepburn",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":297,
      "quote":"Change is not merely necessary to life, it is life.",
      "author":"Alvin Toffler",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":298,
      "quote":"Clever people master life; the wise illuminate it and create fresh difficulties.",
      "author":"Emil Nolde",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":299,
      "quote":"Everything that happens to us leaves some trace behind; everything contributes imperceptibly to make us what we are.",
      "author":"Johann Wolfgang von Goethe",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":300,
      "quote":"Govern thy life and thoughts as if the whole world were to see the one, and read the other.",
      "author":"Thomas Fuller",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":301,
      "quote":"I made my life my monument.",
      "author":"Ben Johnson",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":302,
      "quote":"In three words I can sum up everything I know about life. It goes on.",
      "author":"Robert Frost",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":303,
      "quote":"It is the familiar that usually eludes us in life. What is before our noses is what we see last.",
      "author":"William Barrett",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":304,
      "quote":"Life is a child playing around your feet, a tool you hold firmly in your grip, a bench you sit down upon in the evening, in your garden.",
      "author":"Jean Anouilh",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":305,
      "quote":"Life is a play. It's not its length, but its performance that counts.",
      "author":"Seneca",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":306,
      "quote":"Life is a pure flame, and we live by an invisible sun within us.",
      "author":"Sir Thomas Brown",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":307,
      "quote":"Life is a rich strain of music, suggesting a realm too fair to be.",
      "author":"George William Curtis",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":308,
      "quote":"Life is a succession of lessons which must be lived to be understood.",
      "author":"Ralph Waldo Emerson",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":309,
      "quote":"Life is a tragedy for those who feel, and a comedy for those who think.",
      "author":"La Bruyere",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":310,
      "quote":"Life is either a daring adventure or nothing.",
      "author":"Helen Keller",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":311,
      "quote":"Life is like a game of cards. The hand that is dealt you represents determinism; the way you play it is free will.",
      "author":"Jawaharlal Nehru",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":312,
      "quote":"Life is like a library owned by the author. In it are a few books which he wrote himself, but most of them were written for him.",
      "author":"Harry Emerson Fosdick",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":313,
      "quote":"Life is like playing a violin solo in public and learning the instrument as one goes on.",
      "author":"Samuel Butler",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":314,
      "quote":"Life is like riding a bicycle. To keep your balance you must keep moving.",
      "author":"Albert Einstein",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":315,
      "quote":"Life is like the dice that, falling, still show a different face. So life, though it remains the same, is always presenting different aspects.",
      "author":"Alexis",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":316,
      "quote":"Life is short, art long, opportunity fleeting, experience treacherous, judgment difficult.",
      "author":"Hypocrites",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":317,
      "quote":"Life is something like a trumpet. If you don't put anything in you don't get anything out.",
      "author":"W. C. Handy",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":318,
      "quote":"Life isn�t a matter of milestones, but of moments.",
      "author":"Rose Kennedy",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":319,
      "quote":"Life without endeavor is like entering a jewel mine and coming out with empty hands.",
      "author":"Japanese Proverb",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":320,
      "quote":"Life, in all ranks and situations, is an outward occupation, an actual and active work.",
      "author":"W. Humboldt",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":321,
      "quote":"Life's a voyage that's homeward bound.",
      "author":"Herman Melville",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":322,
      "quote":"Most of the shadows of this life are caused by our standing in our own sunshine.",
      "author":"Ralph Waldo Emerson",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":323,
      "quote":"One life - a little gleam of time between two eternities.",
      "author":"Thomas Carlyle",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":324,
      "quote":"One way to get the most out of life is to look upon it as an adventure.",
      "author":"William Feather",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":325,
      "quote":"Our life's a stage, a comedy: either learn to play and take it lightly, or bear its troubles patiently.",
      "author":"Palladas",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":326,
      "quote":"That state of life is most happy where superfluities are not required and necessities are not wanting.",
      "author":"Plutarch",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":327,
      "quote":"The best way to prepare for life is to begin to live.",
      "author":"Elbert Hubbard",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":328,
      "quote":"The boundaries which divide life from death are at best shadowy and vague. Who shall say where one ends, and the other begins?",
      "author":"Edgar Alan Poe",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":329,
      "quote":"The grand essentials of life are something to do, something to love, something to hope for.",
      "author":"Thomas Chalmers",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":330,
      "quote":"The great blessings of mankind are within us and within our reach; but we shut our eyes, and like people in the dark, we fall foul upon the very thing we search for, without finding it.",
      "author":"Seneca",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":331,
      "quote":"The purpose of life is a life of purpose.",
      "author":"Robert Byrne",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":332,
      "quote":"The true meaning of life is to plant trees, under whose shade you do not expect to sit.",
      "author":"Nelson Henderson",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":333,
      "quote":"The true meaning of life is to plant trees, under whose shade you do not expect to sit.",
      "author":"Nelson Henderson",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":334,
      "quote":"The whole of life is but a moment of time. It is our duty, therefore to use it, not to misuse it.",
      "author":"Plutarch",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":335,
      "quote":"There are no classes in life for beginners: right away you are always asked to deal with what is most difficult.",
      "author":"Rainer Maria Rilke",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":336,
      "quote":"There is only one thing that remains to us, that cannot be taken away: to act with courage and dignity and to stick to the ideals that have given meaning to life.",
      "author":"Jawaharlal Nehru",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":337,
      "quote":"To change one's life: Start immediately. Do it flamboyantly. No exceptions.",
      "author":"William James",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":338,
      "quote":"To live is like to love--all reason is against it, and all healthy instinct for it.",
      "author":"Samuel Butler",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":339,
      "quote":"Unrest of spirit is a mark of life; one problem after another presents itself and in the solving of them we can find our greatest pleasure.",
      "author":"Kal Menninger",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":340,
      "quote":"We become happier, much happier, when we realize life is an opportunity rather than an obligation.",
      "author":"Mary Augustine",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":341,
      "quote":"We make our fortunes, and we call them fate.",
      "author":"Earl of Beaconsfield",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":342,
      "quote":"We must be willing to relinquish the life we've planned, so as to have the life that is waiting for us.",
      "author":"Joseph Campbell",
      "category":"Life",
      "image":"",
      "extra":""
    },
    {
      "id":343,
      "quote":"A loving heart is the truest wisdom.",
      "author":"Charles Dickens",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":344,
      "quote":"A wise man learns by the mistakes of others, a fool by his own.",
      "author":"Latin Proverb",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":345,
      "quote":"By associating with wise people you will become wise yourself.",
      "author":"Menander",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":346,
      "quote":"Do not seek to follow in the footsteps of the men of old; seek what they sought.",
      "author":"Matsuo Basho",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":347,
      "quote":"He has not learned the lesson of life who does not every day surmount a fear.",
      "author":"Ralph Waldo Emerson",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":348,
      "quote":"How prone to doubt, how cautious are the wise!",
      "author":"Homer",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":349,
      "quote":"It is best to learn wisdom by the experience of others.",
      "author":"Latin Proverb",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":350,
      "quote":"It is easier to be wise for others than for ourselves.",
      "author":"Francois De La Rochefoucauld",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":351,
      "quote":"Learn to hold loosely all that is not eternal.",
      "author":"A. Maude Royden",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":352,
      "quote":"Measure a thousand times and cut once.",
      "author":"Turkish Proverb",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":353,
      "quote":"Nature and wisdom never are at strife.",
      "author":"Plutarch",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":354,
      "quote":"No man was ever wise by chance.",
      "author":"Seneca",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":355,
      "quote":"Not to know at large of things remote from use, obscure and subtle, but to know that which before us lies in daily life, is the prime wisdom.",
      "author":"John Milton",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":356,
      "quote":"Of all parts of wisdom the practice is the best.",
      "author":"John Tillotson",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":357,
      "quote":"One who understands much displays a greater simplicity of character than one who understands little.",
      "author":"Alexander Chase",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":358,
      "quote":"Silence does not always mark wisdom.",
      "author":"Samuel Taylor Coleridge. ",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":359,
      "quote":"The art of being wise is knowing what to overlook.",
      "author":"William James ",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":360,
      "quote":"The first step in the acquisition of wisdom is silence, the second listening, the third memory, the fourth practice, the fifth teaching others.",
      "author":"Solomon Ibn Gabriol",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":361,
      "quote":"The great lesson is that the sacred is in the ordinary, that it is to be found in one's daily life, in one's neighbors, friends and family, in one's backyard. ",
      "author":"Abraham Maslow",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":362,
      "quote":"The larger the island of knowledge, the longer the shore line of wonder.",
      "author":"Ralph W. Sockman",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":363,
      "quote":"The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid.",
      "author":"Confucius",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":364,
      "quote":"The middle course is the best.",
      "author":"Cleobulus",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":365,
      "quote":"The more a man knows, the more he forgives.",
      "author":"Catherine the Great",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":366,
      "quote":"The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
      "author":"Thomas Huxley",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":367,
      "quote":"The seat of knowledge is in the head, of wisdom, in the heart.",
      "author":"William Hazlitt",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":368,
      "quote":"The wisdom of life consists in the elimination of non-essentials.",
      "author":"Lin Yutang",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":369,
      "quote":"The wisdom of nations lies in their proverbs, which are brief and pithy.",
      "author":"William Penn",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":370,
      "quote":"The wise man should be prepared for everything that does not lie within his control.",
      "author":"Pythagoras",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":371,
      "quote":"Wisdom is better than gold or silver.",
      "author":"German Proverb",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":372,
      "quote":"Wisdom is the sunlight of the soul.",
      "author":"German Proverb",
      "category":"Wisdom",
      "image":"",
      "extra":""
    },
    {
      "id":373,
      "quote":"Years teach us more than books.",
      "author":"Berthold Auerbach",
      "category":"Wisdom",
      "image":"",
      "extra":""
    }
  ];
  return {
    all: function() {
      return quotes;
    },
    remove: function(quote) {
      quotes.splice(quotes.indexOf(quote), 1);
    },
    get: function(quoteId) {
      for (var i = 0; i < quotes.length; i++) {
        if (quotes[i].id === parseInt(quoteId)) {
          return quotes[i];
        }
      }
      return null;
    },
    getListByIds: function(quoteIds) {
      //alert("Quote ids:" + quoteIds);
      var results = new Array();
      quoteIds = quoteIds.toString();
      var temp = new Array();
      temp = quoteIds.split(",");

      for (var i = 0; i < quotes.length; i++) {
        for(var j = 0; j < temp.length; j++) {
          if(parseInt(quotes[i].id) == parseInt(temp[j])) {
            results.push(quotes[i]);
          }
        }
      }
      return results;
    }
  };
})

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.service('GAAnalytics', function($location) {
  return {
    trackView : function (page) {
      if(typeof analytics !== "undefined") {
        console.log(" analytics triggered for track view...");
        page = page ? page : $location.path();
        analytics.trackView(page);
      }
      return true;
    },
    trackEvent : function (category, action, label, value) {
      if(typeof analytics !== "undefined") {
        console.log(" analytics triggered for track event...");
        analytics.trackEvent(category, action, label, value);
      }
      return true;
    },
    trackCampaign: function(url) {
      if(typeof analytics !== "undefined") {
        console.log(" analytics triggered for campaign url...");
        analytics.setCampaignFromUrl(url);
      }
      return true;
    },
    trackSocial: function(network, action, target, options) {
      if(typeof analytics !== "undefined") {
        console.log(" analytics triggered for social event...");
        analytics.trackSocial(network, action, target, options);
      }
      return true;
    }
  }
});
