angular.module('starter.controllers', [])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     setTimeout(function() {
//         navigator.splashscreen.hide();
//     }, 5000);
//  });
// })

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function(){
  	$state.go('tab.feed');

  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
