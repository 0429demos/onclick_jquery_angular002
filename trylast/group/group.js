angular.module('groupPage',[])

.config(function($urlRouterProvider){

    $urlRouterProvider.otherwise('/groupone')

  
})


.config(function($stateProvider){
// ,$urlRouterProvider
    //   $urlRouterProvider.otherwise('/groupone');
$stateProvider
            .state({
        name:'group',
        url:'/group',
         css:{
            href:'group/group.css',
            persist:true
        },
        templateUrl:'group/group.html',
        controller:"groupCtrl"
    })



})
.controller('groupCtrl',function($scope){
    $scope.title='group page'
})























// .service('ddf',function(){})