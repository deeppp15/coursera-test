(function () {
'use strict';

angular.module('FoodItems', [])
.controller('FoodCalculator', FoodCalculator);
FoodCalculator.inject=['$scope'];
function FoodCalculator($scope)
{
  $scope.items="";
  $scope.output="";
  $scope.colour="";
  $scope.calculate=function()
  {
    var out=temp($scope.items);
    $scope.output=out;
    if(out=="Empty")
    {
      $scope.colour="red";
    }
    else{
      $scope.colour="green";
    }
  };

  function temp(string)
  {
    var arr=string.split(",");
    var ans="";
    if(arr=="")
    {
      ans="Empty";
    }
    else if(arr.length>0 && arr.length<=3)
    {
       ans="Enjoy!";
    }
    else if(arr.length>3)
    {
       ans="Too much!";
    }
    return ans;
  };

}
})();
