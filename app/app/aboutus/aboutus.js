angular.module('aboutus',[])
//路由
.config(function ($routeProvider) {
  $routeProvider
  .when('/aboutus', {
    templateUrl: 'app/aboutus/aboutus.html',
    controller: 'aboutusCtrlCtrl'
  })
})
//控制器
.controller('aboutusCtrl', function ($scope){ 

})
//服务
.service('aboutusService',function(){

})


