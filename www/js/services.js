angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Categories', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [{
      id: 1,
      name: "Life",
      text: "",
      image: '',
      quotes: [1,4,3,5]
    }, {
      id: 2,
      name: 'Purpose',
      text: "",
      image: '',
      quotes: [1]
    }, {
      id: 3,
      name: 'Spiritual',
      text: "",
      image: '',
      quotes: [2]
    //}, {
    //  id: 4,
    //  text: "",
    //  image: '',
    //  quotes: []
    }, {
      id: 5,
      name: 'Success and Abundance',
      text: "",
      image: '',
      quotes: [3]
    }, {
      id: 6,
      name: "Happiness and Wellbeing",
      text: "",
      image: '',
      quotes: []
    }, {
      id: 7,
      name: 'Communication & Relationship',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 8,
      name: 'Motivation and Leadership',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 9,
      name: 'Parenting and Education',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 10,
      name: 'Emotional',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 11,
      name: 'Intelligence',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 12,
      name: 'Social',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 13,
      name: 'Community',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 14,
      name: 'Creativity',
      text: "",
      image: '',
      quotes: []
    }, {
      id: 15,
      name: 'Humor',
      text: "",
      image: '',
      quotes: []
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
  var quotes = [{
    id: 1,
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    category: '',
    image: "https://d.gr-assets.com/authors/1429114964p2/9810.jpg",
    extra: ''
  }, {
    id: 2,
    quote: "You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.",
    author: "William W. Purkey",
    category: "",
    image: "https://d.gr-assets.com/authors/1282396130p2/1744830.jpg",
    extra: ""
  }, {
    id: 3,
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    category: "confidence, inspirational, wisdom",
    image: "https://d.gr-assets.com/authors/1195764180p2/44566.jpg",
    extra: ''
  }, {
    id: 4,
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    category: "tags: carpe-diem, education, inspirational, learning",
    image: "https://d.gr-assets.com/authors/1356810912p2/5810891.jpg",
    extra: ''
  }, {
    id: 5,
    quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
    category: 'attributed-no-source, inspirational, life, live, miracle, miracles',
    image: "https://d.gr-assets.com/authors/1429114964p2/9810.jpg",
    extra: ''
  }, {
    id: 6,
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "Allen Saunders",
    category: "fate, life, misattributed-john-lennon, planning, plans",
    image: "https://d.gr-assets.com/authors/1368887014p2/276029.jpg",
    extra: ''
  }];
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
      var results = new Array();
      for (var i = 0; i < quotes.length; i++) {
        var index = quoteIds.indexOf(quotes[i].id);
        //alert(i + " -- " + quotes[i].id + " --- " + index);
        if (index > -1) {
          //alert(quotes[i].id);
          results.push(quotes[i]);
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
}]);

