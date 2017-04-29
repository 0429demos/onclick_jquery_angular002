angular.module('videoPage',[])
.config(function($stateProvider){
$stateProvider
        .state({
        name:'video',
        url:'/video',
        // css:'video/video.css',
        css:{
            href:'video/video.css',
            persist:true,
        },
        templateUrl:'video/video.html',
        controller:"videoCtrl"
    })




})
.controller('videoCtrl',function($scope){
    $scope.title='video page';
})
// .controller('videoCtrl',function($scope){
//     $scope.title='video page';




// setTimeout(function(){

//   var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
//        paginationClickable: true,
//        loop:true,
//     //    autoplay:true,
//     autoplay:1000
//    });

//     console.log(swiper)

// })

//     $scope.swiperarr = [
//       {'src':'../trylast/imgs/videobanner01.jpg'},
//          {'src':'../trylast/imgs/videobanner02.jpg'}
    
//     ];



//     $scope.datas=[
//              { "image": "../trylast/imgs/videopic001.jpg",
//             "t1": "卖报歌",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },
//             { "image": "../trylast/imgs/videopic002.jpg",
//             "t1": "好爸爸坏爸爸",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },          
//            { "image": "../trylast/imgs/videopic003.jpg",
//             "t1": "老师老师",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },
//                           { "image": "../trylast/imgs/videopic001.jpg",
//             "t1": "卖报歌",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },
//             { "image": "../trylast/imgs/videopic002.jpg",
//             "t1": "好爸爸坏爸爸",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },          
//            { "image": "../trylast/imgs/videopic003.jpg",
//             "t1": "老师老师",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },
//                           { "image": "../trylast/imgs/videopic001.jpg",
//             "t1": "卖报歌",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },
//             { "image": "../trylast/imgs/videopic002.jpg",
//             "t1": "好爸爸坏爸爸",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         },          
//            { "image": "../trylast/imgs/videopic003.jpg",
//             "t1": "老师老师",
//             "t2": 2000,
//             "right01": "../trylast/imgs/right01.jpg",
//             "right02": "../trylast/imgs/right02.jpg"
//         }
//     ]



    
// })
// .service('ddf',function(){});

