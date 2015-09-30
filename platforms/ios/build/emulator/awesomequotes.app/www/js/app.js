// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
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
    if(typeof analytics !== undefined) {
      analytics.startTrackerWithId("UA-67821823-1");
      analytics.setUserId("");
      console.log("Google Analytics triggered...");
    } else {
      console.log("Google Analytics Unavailable");
    }
    window.plugins.AppleAdvertising.getIdentifiers(
      function(identifiers) {
        console.log("got idfa: " + identifiers.idfa);
        console.log("got idfv: " + identifiers.idfv);
        console.log("got trackingEnabled: " + identifiers.trackingEnabled);
        analytics.setUserId(identifiers.idfa);
        console.log("Google Analytics user id set...");
      },
      function() {
        console.log("error loading identifiers");
      }
    );
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

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
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
  setTimeout(function() {
             alert("received url: " + url);
             }, 0);
}
//analytics.trackView('Screen Title')
//analytics.trackEvent('Category', 'Action', 'Label', Value)
//analytics.addTransaction('ID', 'Affiliation', Revenue, Tax, Shipping, 'Currency Code')
//analytics.addTransactionItem('ID', 'Name', 'SKU', 'Category', Price, Quantity, 'Currency Code')
//analytics.setUserId('my-user-id')
//analytics.debugMode()
//alert(2);
