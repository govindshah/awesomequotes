angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('QuoteCtrl', function($scope, $stateParams, Quotes, $localstorage, Categories, $state, GAAnalytics) {
  GAAnalytics.trackView('Quotes');

  var quotesArray = new Array();
  var previousQ, nextQ, tpath = '';
  //alert("STATE ->"+JSON.stringify($stateParams));

  var id = $stateParams.quoteId;
  var catId = $stateParams.catId;
  var favId = $stateParams.favId;
  var allQuotes = Quotes.all();

  if (typeof(catId) != "undefined" && catId != "") {
    GAAnalytics.trackEvent('Quotes', 'Category', 'catId', catId);

    var allCat = Categories.all();
    for (var i = 0; i < allCat.length; i++) {
      if (allCat[i].id == catId) {
        quotesArray = allCat[i].quotes;
      }
    }
    if (typeof(id) == 'undefined' || id == '' || id == 0) {
      id = quotesArray[0];
    }
    tpath = 'cat/' + catId;
    $scope.catId = catId;
  }

  if (typeof(favId) != "undefined" && favId != "") {
    GAAnalytics.trackEvent('Quotes', 'Favorites', 'favId', favId);

    var temp = $localstorage.get('fav');
    var tempArray = new Array();
    tempArray = temp.split(',');
    for (i = 0; i < tempArray.length; i++) {
      if (typeof tempArray[i] != "undefined" && tempArray[i] != '') {
        quotesArray.push(tempArray[i]);
      }
    }
    //alert("QuotesArray --->" + quotesArray + " ----- " + tempArray );
    tpath = 'fav';
    id = favId;
    $scope.favId = favId;
  }

  if (typeof(id) == 'undefined' || id == '' || id == 0) {
    id = Math.floor((Math.random() * allQuotes.length) + 1);
    GAAnalytics.trackEvent('Quotes', 'Quotes', 'Id', id);
  }

  if (typeof(quotesArray) == 'undefined' || quotesArray == '') {
    quotesArray = new Array();
    for (var i = 0; i < allQuotes.length; i++) {
      quotesArray.push(allQuotes[i].id);
    }
  }

  $scope.quotesArray = quotesArray;
  getButtonIds(id);

  function getButtonIds (id) {
    var previousQ, nextQ;
      if (typeof($scope.quotesArray) != 'undefined' && $scope.quotesArray != '') {
      //alert(quotesArray + " === " + quotesArray.length);

      var found = false;
      for (var i = 0; i < $scope.quotesArray.length; i++) {
        if (id == $scope.quotesArray[i]) {
          found = true;
          if (i == 0) {
            previousQ = $scope.quotesArray[quotesArray.length - 1];
            nextQ = $scope.quotesArray[i + 1];
          } else {
            previousQ = $scope.quotesArray[i - 1];
            nextQ = $scope.quotesArray[i + 1];
          }

          if (i == $scope.quotesArray.length - 1) {
            nextQ = $scope.quotesArray[0];
          }

          if (1 == $scope.quotesArray.length) {
            nextQ = $scope.quotesArray[0];
            previousQ = $scope.quotesArray[0];
          }
        }
      }
    }

    $scope.prevQ = previousQ;
    $scope.nextQ = nextQ;
    return previousQ + "|" + nextQ;
  }

  //alert("ID: " + id + " --P-->" + $scope.prevQ + " --N-->" + $scope.nextQ);
  $scope.quote = Quotes.get(id);
  $scope.quoteId = id;


  $scope.showPrev = function(id) {
    id = $scope.prevQ;
    $scope.quoteId = id;
    GAAnalytics.trackEvent('Quotes', 'showPrevious', 'id', id);
    $scope.quote = Quotes.get(id);
    var result = getButtonIds(id);
  }

  $scope.showNext = function(id) {
    id = $scope.nextQ;
    $scope.quoteId = id;
    GAAnalytics.trackEvent('Quotes', 'showNext', 'id', id);
    $scope.quote = Quotes.get(id);
    var result = getButtonIds(id);
  }


  $scope.saveFav = function(quoteId) {
    //alert("In fav...." + quoteId);
    quoteId = $scope.quoteId;
    GAAnalytics.trackEvent('Quotes', 'saveFavorite', 'id', id);

    var favorites = $localstorage.get('fav');

    if (typeof(favorites) == "undefined") {
      favorites = quoteId;
      $localstorage.set('fav', favorites);
    } else {
      var av = favorites.indexOf(parseInt(quoteId));
      if (av == -1) {
        favorites = favorites.concat(',' + quoteId);
        $localstorage.set('fav', favorites);
      }
    }

    $scope.favorites = $localstorage.get('fav');
    //alert("New Value...." + $scope.favorites);
  };
})

.controller('CategoriesCtrl', function($scope, Categories, GAAnalytics) {
    GAAnalytics.trackView('Categories');

  $scope.categories = Categories.all();
})

.controller('FavoriteCtrl', function($scope, $localstorage, Quotes, $state, GAAnalytics) {
  GAAnalytics.trackView('Favorites');

  var favorites = $localstorage.get('fav');

  if (typeof favorites != "undefined") {
    var array = new Array();
    array = favorites.split(",");
    //alert(array);
    $scope.favorites = array;
    //alert($scope.favorites);
    if (typeof(array) != "undefined") {
      $scope.quotes = Quotes.getListByIds(array);
    }
  }

  $scope.removeFav = function(quoteId) {
    //alert("In fav...." + quoteId);
    GAAnalytics.trackEvent('Quotes', 'removeFavorite', 'id', id);

    var temp = $localstorage.get('fav');
    var favorites = new Array();
    var tempArray = new Array();
    tempArray = temp.split(',');
    for( var i = 0; i < tempArray.length; i++) {
      if (typeof tempArray[i] != "undefined" && tempArray[i] != '') {
        favorites.push(tempArray[i]);
      }
    }

    if (typeof(favorites) != "undefined") {
      var temp = new Array();
      for (var i = 0; i < favorites.length; i++) {
        if(parseInt(favorites[i]) != parseInt(quoteId)) {
          temp.push(favorites[i]);
        }
      }

      $localstorage.set('fav', temp);
    }

    $scope.favorites = $localstorage.get('fav');
    if (typeof($scope.favorites) != "undefined") {
      $scope.quotes = Quotes.getListByIds($scope.favorites);
    }

    $state.go('tab.favorite', $scope, {reload: true});
    //$state.go($state.current, {}, {reload: true});
  };
});
