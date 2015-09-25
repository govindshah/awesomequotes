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
.controller('QuoteCtrl', function($scope, $stateParams, Quotes, $localstorage, Categories) {
    var quotesArray;
    var previousQ, nextQ;
    alert("STATE ->"+JSON.stringify($stateParams));

    var id = $stateParams.quoteId;
    var catId = $stateParams.catId;
    var favId = $stateParams.favId;
    var allQuotes = Quotes.all();

    if(typeof(catId) != "undefined" && catId != "") {
      var allCat = Categories.all();
      for (var i = 0; i < allCat.length; i++) {
        if (allCat[i].id == catId) {
          quotesArray = allCat[i].quotes;
        }
      }
      alert(quotesArray);
    }

    if(typeof(favId) != "undefined" && favId != "") {
      quotesArray = $localstorage.get('fav');
      id = favId;
    }

    if(quotesArray != '') {

    }


    if(typeof(id) == 'undefined' || id == '') {
      id = Math.floor((Math.random() * allQuotes.length) + 1);
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

    $scope.favorites = $localstorage.get('fav');
    alert($scope.favorites);
    if (typeof($scope.favorites) != "undefined") {
      $scope.quotes = Quotes.getListByIds($scope.favorites);
    }
    //$state.go('tab.favorite', $scope, {reload: true});

    $scope.removeFav = function(quoteId) {
      alert("In fav...." + quoteId);

      var favorites = $localstorage.get('fav');

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
          if(av > 0) av = av/2;
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
  })
;
