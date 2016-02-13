angular.module("friendsList").controller("mainCtrl", function($scope){
	 $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

	 $scope.addFriend = function(input) {
	 	$scope.friends.push(input);

	 }
});



// ##Step 6: Get Fancy
// * That's all the main things I wanted to cover. You should now feel decently comfortable with creating a 
// basic angular application, initializing your app with angular.module('appName', []), creating a controller with
 // ng-controller, adding properties to that controllers $scope, then showing those properties in the view.
// * If you have more time, I want you to create a function in your controller called 'addFriend' that takes 
// in a name of another friend and pushes it to your friends array. In your index.html you'll need an input box 
// that will be the name of your friend, and a button that will run $scope.addFriend every time it is clicked. 
// * Good luck and congrats on building your first (of many) angular apps!