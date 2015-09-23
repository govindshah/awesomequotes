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
.controller('QuoteCtrl', function($scope, $stateParams, Quotes, $localstorage) {
    var id = $stateParams.quoteId;
    if(typeof($stateParams.quoteId) == 'undefined' || $stateParams.quoteId == '') {
      id = Math.floor((Math.random() * 6) + 1);
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

  .controller('FavoriteCtrl', function($scope, $localstorage) {

    $scope.favorites = $localstorage.getObject('fav');
  })
;
