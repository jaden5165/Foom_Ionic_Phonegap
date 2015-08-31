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
    }

    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 8000);
    // // Wait 2secs before hiding splash screen
    // $timeout(function() {
    //   $cordovaSplashscreen.hide();
    // }, 8000);

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
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
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'LoginCtrl'
    })

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/tab-feed.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          // controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.nearby', {
      url: '/nearby',
      views: {
        'tab-nearby': {
          templateUrl: 'templates/tab-nearby.html',
          // controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.chart', {
      url: '/chart',
      views: {
        'tab-chart': {
          templateUrl: 'templates/tab-chart.html',
          // controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.me', {
    url: '/me',
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
