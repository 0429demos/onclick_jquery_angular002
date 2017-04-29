angular.module('downPage',[])
.config(function($stateProvider){
$stateProvider
            .state({
        name:'down',
        url:'/down',
             css:{
            href:'down/down.css',
            persist:true
        },
        templateUrl:'down/down.html',
        controller:"downCtrl"
    })
})
.controller('downCtrl',function($scope){
    $scope.title='down page'
})
.service('ddf',function(){})