

angular.module('app',['ui.router','angularCSS',
'videoPage',
'audioPage',
'groupPage',
'downPage',
'minePage'
])
.config(function($urlRouterProvider){

    $urlRouterProvider.otherwise('/video')

  
})

