angular.module('app', ['ui.bootstrap']).controller('AppController', function($scope, $http) {
  $scope.abc = "kjas";
  $scope.generateEmail = function(parent, child) {
    var parentArray = [],
      childArray = [],
      pcObject, combinedArray = [];
    parentArray = parent.split(",");
    childArray = child.split(",");
    for (var i = 0; i < parentArray.length; i++) {
      pcObject = {
        "parent": parentArray[i],
        "child": childArray[i]
      };
      combinedArray.push(pcObject);
    }

    return combinedArray;
  };
  $scope.arrayLength = function(string) {
    var array = string.split(",");
    return array.length;
  };

});
