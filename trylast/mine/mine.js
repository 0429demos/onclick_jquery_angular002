angular.module('minePage',[])
.config(function($stateProvider){
$stateProvider
          .state({
        name:'mine',
        url:'/mine',
             css:{
            href:'mine/mine.css',
            persist:true
        },
        templateUrl:'mine/mine.html',
        controller:"mineCtrl"
    })

// 联系我们
              .state({
        name:'mine.callus',
        url:'/minecalleeeeeeeeeeeeeeeeeeeeeeeeeee',
            css:{
            href:'mine/mine.css',
            persist:true
        },
        templateUrl:'mine/mine.callus.html',
        controller:''
        
    })

})
.controller('mineCtrl',function($scope){

    $scope.title='mine page'


    // 点击，出现遮罩层  “点击检查更新”
          $scope.clickout=function(){
            console.log('出来')
          $('#good-zhezhao').css('display','block');}



// 点击遮罩层，遮罩层消失
          $scope.clickzhezhao=function(){
            console.log('点击遮罩层  消失')
          $('#good-zhezhao').css('display','none');

          $('#forheaderclick').css('display','none');
     
      }











})
.service('ddf',function(){})
