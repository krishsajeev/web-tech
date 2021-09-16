var app = angular.module('typewrite',[]);

app.controller("typingController", function($scope, $interval){
  window.scope = $scope
  $scope.view ={};
  $scope.word ={};
  $scope.word.skill = ['FASTER','HIGHER','STRONGER','TOGETHER'];
  
  var idx=0;
  var n=0;
  var up = true;

  $interval(function(){
    var word = $scope.word.skill[idx];
    var ln = word.length;

    if(up){
      $scope.view.type = word.slice(0,n);
      n++
    };
    if(n===ln+1){up=false};
    if(!up){
      $scope.view.type = word.slice(0,n);
      n--
    }
    if(n===0){
      up=true
      idx++
    }
    if(idx===$scope.word.skill.length){idx=0}
    
  }, 200);

})