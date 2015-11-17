// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, backendService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    if(typeof analytics !== "undefined") {
      analytics.startTrackerWithId("UA-67821823-1");
      analytics.setUserId("");
      console.log("Google Analytics triggered...");
    } else {
      console.log("Google Analytics Unavailable");
    }
    if(ionic.Platform.isIOS()) {
      window.plugins.AppleAdvertising.getIdentifiers(
        function(identifiers) {
          console.log("got idfa: " + identifiers.idfa);
          console.log("got idfv: " + identifiers.idfv);
          console.log("got trackingEnabled: " + identifiers.trackingEnabled);
          analytics.setUserId(identifiers.idfa);
          console.log("Google Analytics user id set...");
          backendService.setUsers(identifiers.idfa, identifiers.idfv);
        },
        function() {
          console.log("error loading identifiers");
          backendService.setUsers("error", "error");
        }
      );
    }

    if(ionic.Platform.isAndroid()) {
      backendService.setUsers("Android", "Android");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.quote', {
    url: '/quote',
    views: {
      'tab-quote': {
        templateUrl: 'templates/tab-quote.html',
        controller: 'QuoteCtrl'
      }
    }
  })
  .state('tab.quoteId', {
    url: '/quote/:quoteId',
    cache: false,
    views: {
      'tab-quote': {
        templateUrl: 'templates/tab-quote.html',
        controller: 'QuoteCtrl'
      }
    }
  })
  .state('tab.quoteCat', {
    url: '/cat/:catId',
    cache: false,
    views: {
      'tab-quote': {
        templateUrl: 'templates/tab-quote.html',
        controller: 'QuoteCtrl',
        params: ['category','favorite'],
        data: {'category': 'yes', 'favorite': false}
      }
    }
  })
  .state('tab.quoteCatQid', {
    url: '/cat/:catId/:quoteId',
    cache: false,
    views: {
      'tab-quote': {
        templateUrl: 'templates/tab-quote.html',
        controller: 'QuoteCtrl',
        params: ['catId', 'quoteId']
      }
    }
  })
  .state('tab.quoteFav', {
    url: '/fav/:favId',
    cache: false,
    views: {
      'tab-quote': {
        templateUrl: 'templates/tab-quote.html',
        controller: 'QuoteCtrl',
        data: {'favorite': 'yes'}
      }
    }
  })


  .state('tab.categories', {
    url: '/categories',
    views: {
      'tab-categories': {
        templateUrl: 'templates/tab-categories.html',
        controller: 'CategoriesCtrl'
      }
    }
  })

  .state('tab.favorite', {
    url: '/favorite',
    cache: false,
    views: {
      'tab-favorite': {
        templateUrl: 'templates/tab-favorite.html',
        controller: 'FavoriteCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/quote');

});
function handleOpenURL(url) {
  var body = document.getElementsByTagName("body")[0];
  var appLaunchedController = angular.element(body).scope();
  setTimeout(function() {
    //alert("received url: " + url);
             appLaunchedController.reportAppLaunched(url);
    if(typeof analytics !== "undefined") {
      analytics.setCampaignFromUrl(url);
    }
    //alert("received url: " + url);
  }, 0);
}

