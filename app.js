/**
 * Created by austinadams on 7/6/15.
 */
angular.module('tableMulti',[])
  .controller('MultiplicationCtrl', function($scope, $attrs){
    $scope.initialNumberLimit  = $attrs.limit || 10;

    $scope.numbers = function(){
      var num = [];
      for(var i = 0; i < $scope.initialNumberLimit; i++){
        num[i] = i + 1;
      }
      return num;
    };

    $scope.compute = function(a,b){
      return a * b;
    };
  });