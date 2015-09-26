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
.controller('QuoteCtrl', function($scope, $stateParams, Quotes, $localstorage, Categories, $state) {
  var quotesArray = new Array();
  var previousQ, nextQ, tpath = '';
  alert("STATE ->"+JSON.stringify($stateParams));

  var id = $stateParams.quoteId;
  var catId = $stateParams.catId;
  var favId = $stateParams.favId;
  var allQuotes = Quotes.all();

  if (typeof(catId) != "undefined" && catId != "") {
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
  }

  if (typeof(favId) != "undefined" && favId != "") {
    var temp = $localstorage.get('fav');

    for (i = 0; i < temp.length; i++) {
      if (typeof temp[i] != "undefined" && temp[i] != '') {
        quotesArray.push(temp[i]);
      }
    }
    tpath = 'fav';
    id = favId;
  }

  if (typeof(id) == 'undefined' || id == '') {
    id = Math.floor((Math.random() * allQuotes.length) + 1);
  }

  if (typeof(quotesArray) == 'undefined' || quotesArray == '') {
    quotesArray = new Array();
    for (var i = 0; i < allQuotes.length; i++) {
      quotesArray.push(allQuotes[i].id);
    }
  }

  if (typeof(quotesArray) != 'undefined' && quotesArray != '') {
    alert(quotesArray + " === " + quotesArray.length);

    var found = false;
    for (var i = 0; i < quotesArray.length; i++) {
      if (id == quotesArray[i]) {
        found = true;
        if (i == 0) {
          previousQ = quotesArray[quotesArray.length - 1];
          nextQ = quotesArray[i + 1];
        } else {
          previousQ = quotesArray[i - 1];
          nextQ = quotesArray[i + 1];
        }

        if (i == quotesArray.length) {
          nextQ = quotesArray[0];
        }

        if (1 == quotesArray.length) {
          nextQ = quotesArray[0];
          previousQ = quotesArray[0];
        }
      }
    }
  }

  $scope.prevQ = previousQ; //tpath + '/' +
  $scope.nextQ = nextQ; //tpath + '/' +
  alert("ID: " + id + " --P-->" + $scope.prevQ + " --N-->" + $scope.nextQ);

  $scope.showPrev = function(id) {
    if (typeof($scope.catId) != "undefined" && $scope.catId != "") {
      $state.go('tab.quoteCatQid', {catId: $scope.catId, quoteId: id}, {reload: true});
    } else if (typeof($scope.favId) != "undefined" && $scope.favId != "") {
      $state.go($state.current, {'favId': id}, {reload: true});
    } else {
      $state.go($state.current, {quoteId: id}, {reload: true});
    }
  }

  $scope.showNext = function(id) {
    alert("showNext -- " + id);
    if (typeof($scope.catId) != "undefined" && $scope.catId != "") {
      $state.go('tab.quoteCatQid', {catId: $scope.catId, quoteId: id}, {reload: true});
    } else if (typeof($scope.favId) != "undefined" && $scope.favId != "") {
      $state.go($state.current, {'favId': id}, {reload: true});
    } else {
      $state.go($state.current, {quoteId: id}, {reload: true});
    }
  }

  $scope.quote = Quotes.get(id);
  $scope.saveFav = function(quoteId) {
    //alert("In fav...." + quoteId);
    var favorites = $localstorage.get('fav');

    if (typeof(favorites) == "undefined") {
      favorites = quoteId;
      $localstorage.set('fav', favorites);
    } else {
      var av = favorites.indexOf(quoteId);
      if (av == -1) {
        favorites = favorites.concat(',' + quoteId);
        $localstorage.set('fav', favorites);
      }
    }

    $scope.favorites = $localstorage.get('fav');
    //alert("New Value...." + $scope.favorites);
  };
})

.controller('CategoriesCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
})

.controller('FavoriteCtrl', function($scope, $localstorage, Quotes, $state) {

  var favorites = $localstorage.get('fav');
  var array = new Array();

  array = favorites.split(",");
  alert(array);
  $scope.favorites = array;
  alert($scope.favorites);
  if (typeof(array) != "undefined") {
    $scope.quotes = Quotes.getListByIds(array);
  }
  //$state.go('tab.favorite', $scope, {reload: true});

  $scope.removeFav = function(quoteId) {
  alert("In fav...." + quoteId);

  var temp = $localstorage.get('fav');
  var favorites = new Array();
  if(typeof temp[i] != "undefined" && temp[i] != '') {
    favorites.push(temp[i]);
  }

  if (typeof(favorites) != "undefined") {
    favorites.trim();
    var array = new Array();
    array = favorites.split(",");
    var av = favorites.indexOf(quoteId);
    alert("Found -->" +av + "  -- Len:" + array.length);
    if(array.length == 1 && array[0] == quoteId) {
      alert("Found only one element and that matched....");
      $localstorage.set('fav', "");
    }

    if (av > -1) {
      //alert("ARRAY::"+array);
      //alert("AV-->"+av);
      //if(av > 0) av = av/2;
      array.splice(av, 1);
      favorites = array.join(',');
      //alert(favorites);
      $localstorage.set('fav', favorites);
    }
  }

  $scope.favorites = $localstorage.get('fav');
  if (typeof($scope.favorites) != "undefined") {
    $scope.quotes = Quotes.getListByIds($scope.favorites);
  }

  $state.go('tab.favorite', $scope, {reload: true});
  //$state.go($state.current, {}, {reload: true});
  alert("New Value...." + $scope.favorites);
  };
});
