angular.module('starter.controllers', [])
.controller('QuoteCtrl', function($scope, $stateParams, Quotes, $localstorage, Categories, $state, GAAnalytics, $ionicPopup) {
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
    $ionicPopup.alert({
      title: 'Message',
      template: 'Saved to Favorites'
    });
    //alert("New Value...." + $scope.favorites);
  };

  $scope.postFacebook = function() {
    if(typeof window.plugins.socialsharing !== "undefined") {
      //<button onclick="window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})">msg via Facebook (with errcallback)</button>
      window.plugins.socialsharing.shareViaFacebook($scope.quote.quote, null , null , function() {
          console.log('share ok')
        },
        function(errormsg){
          $ionicPopup.alert({
            title: 'Error',
            template: errormsg
          });
        }
      );
      console.log("facebook opened...");
    }
  }

  $scope.postTwitter = function() {
    if(typeof window.plugins.socialsharing !== "undefined") {
      //window.plugins.socialsharing.shareViaTwitter('{{quote.quote}}', null , '');
      window.plugins.socialsharing.shareViaTwitter($scope.quote.quote, null , null , function() {
          console.log('share ok')
        },
        function(errormsg){
          $ionicPopup.alert({
            title: 'Error',
            template: errormsg
          });
        }
      );
      console.log("twitter opened...");
    }
  }

  $scope.postEmail = function() {
    if(typeof window.plugins.socialsharing !== "undefined") {
      /*window.plugins.socialsharing.shareViaEmail(
       'Message', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
       'Subject',
       ['to@person1.com', 'to@person2.com'], // TO: must be null or an array
       ['cc@person1.com'], // CC: must be null or an array
       null, // BCC: must be null or an array
       ['https://www.google.nl/images/srpr/logo4w.png','www/localimage.png'], // FILES: can be null, a string, or an array
       onSuccess, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
       onError // called when sh*t hits the fan
       ); */
      window.plugins.socialsharing.shareViaEmail(
        $scope.quote.quote, 'Wrdyup Quote' , null , null, null, null, function() {
          console.log('share ok')
        },
        function(errormsg){
          console.log(errormsg);
        }
      );
      console.log("email opened...");
    }
  }

  $scope.postText = function() {
    if(typeof window.plugins.socialsharing !== "undefined") {
      //<button onclick="window.plugins.socialsharing.shareViaSMS({'message':'My cool message', 'subject':'The subject', 'image':'https://www.google.nl/images/srpr/logo4w.png'}, '0612345678,0687654321', function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})">share via SMS</button>
      window.plugins.socialsharing.shareViaSMS({'message': $scope.quote.quote}, null , function() {
          console.log('share ok')
        },
        function(errormsg){
          console.log(errormsg);
        }
      );
      console.log("text opened...");
    }
  }

  $scope.openShare = function() {
    if(typeof window.plugins.socialsharing !== "undefined") {
      window.plugins.socialsharing.share($scope.quote.quote, null , null , '', function() {
          console.log('share ok');
        },
        function(errormsg){
          console.log(errormsg);
        }
      );
      console.log("share opened...");
    }
  }

  $scope.socialSuccess = function(channel) {
    console.log('Post success on ' + channel);
  }

  $scope.socialError = function(errormsg) {
    $ionicPopup.alert({
      title: 'Error',
      template: errormsg
    });
  }
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
})
.controller('AppLaunchedController', function($scope, backendService) {
  $scope.reportAppLaunched = function(url) {
    console.log('The app launched with URL : ' + url);
    backendService.setCampaigns(url);
  }
})
;
