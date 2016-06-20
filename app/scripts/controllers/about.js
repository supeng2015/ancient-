'use strict';
/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('AboutCtrl', function ($scope){ 
  function launchFullScreen(element) { 
  	console.log(element);
    element.webkitRequestFullscreen(); 
  }
 //// 找到支持的方法, 使用需要全屏的 element 调用 
 //function launchFullScreen(element) { 
 //  if(element.requestFullscreen) { 
	//   element.requestFullscreen(); 
	// } else if(element.mozRequestFullScreen) { 
	//   element.mozRequestFullScreen(); 
	// } else if(element.webkitRequestFullscreen) { 
	//   element.webkitRequestFullscreen(); 
	// } else if(element.msRequestFullscreen) { 
	//   element.msRequestFullscreen(); 
	// } 
 //  } 
  // 在支持全屏的浏览器中启动全屏 
  // 整个页面 
  launchFullScreen(document.documentElement); 
  // 某个元素 
  //launchFullScreen(document.getElementById("videoElement")); 
  console.log(111111);
  this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
  ];
});
