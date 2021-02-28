var app = angular.module('my-app',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'Pages/Home.html',
	})
	.when('/About', {
		templateUrl: 'Pages/About.html',
	})
	.when('/Mitsubishi', {
		templateUrl: 'Pages/Mitsubishi.html',
	})
	.when('/Carrier', {
		templateUrl: 'Pages/Carrier.html',
	})
	.when('/Orient', {
		templateUrl: 'Pages/Orient.html',
	})
	.when('/Sanyo', {
		templateUrl: 'Pages/Sanyo.html',
	})
	.when('/LG', {
		templateUrl: 'Pages/LG.html',
	})
	.when('/SplitAc', {
		templateUrl: 'Pages/SplitAc.html',
	})
	.when('/CabinetAc', {
		templateUrl: 'Pages/CabinetAc.html',
	})
	.when('/CassetteAc', {
		templateUrl: 'Pages/CassetteAc.html',
	})
	.when('/Compare', {
		templateUrl: 'Pages/Compare.html',
	})
	.when('/Contact', {
		templateUrl: 'Pages/Contact.html',
	})			
})
app.controller('myHomeSlide',function($scope){
	$('.carousel').carousel({
		interval: 2000,
		loop:true,
	})
})//End myHomeSlide
app.controller('myMitsubishiCtrl',function($scope){
	$('.carousel').carousel({
		interval: 2000
	})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	768:{
	    		items:2,
	    	},
	    	1000:{
	    		items:3,
	    	}
	    }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End myMitsubishiCtrl
app.controller('myCarrierCtrl',function($scope){
	$('.carousel').carousel({
		 interval: 2000
	})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	768:{
	    		items:2,
	    	},
	    	1000:{
	    		items:3,
	    	}
	    }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End myCarrierCtrl
app.controller('myOrientCtrl',function($scope){
	$('.carousel').carousel({
		  interval: 2000
		})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	768:{
	    		items:2,
	    	},
	    	1000:{
	    		items:3,
	    	}
	    }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End myOrientCtrl
app.controller('mySanyoCtrl',function($scope){
	$('.carousel').carousel({
		  interval: 2000,
		  loop:true
		})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	768:{
	    		items:2,
	    	},
	    	1000:{
	    		items:3,
	    	}
	    }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End mySanyoCtrl
app.controller('myLGCtrl',function($scope){
	$('.carousel').carousel({
		  interval: 2000
		})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	768:{
	    		items:2,
	    	},
	    	1000:{
	    		items:3,
	    	}
	    }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End myLGCtrl
app.controller('AboutCtrl',function($scope){//Call event onmouseenter into the icon
	$(document).ready(function(){//icon 001
	  $("#aImg001").mouseenter(function(){
	  	$("#detail02").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg001").mouseleave(function(){
	  	$("#detail02").removeClass('float-right');
	  	$("#detail03").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon001
	$(document).ready(function(){//icon002
	  $("#aImg002").mouseenter(function(){
	  	$("#detail02").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg002").mouseleave(function(){
	  	$("#detail02").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail03").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon002
	$(document).ready(function(){//icon003
	  $("#aImg003").mouseenter(function(){
	  	$("#detail03").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail02").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg003").mouseleave(function(){
	  	$("#detail03").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail02").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon003
	$(document).ready(function(){//icon004
	  $("#aImg004").mouseenter(function(){
	  	$("#detail04").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail02").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg004").mouseleave(function(){
	  	$("#detail04").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail02").removeClass('float-right');
	  	$("#detail03").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon004
	$(document).ready(function(){//icon005
	  $("#aImg005").mouseenter(function(){
	  	$("#detail05").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail02").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg005").mouseleave(function(){
	  	$("#detail05").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail02").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon005
	$(document).ready(function(){//icon006 ======================>Check lại (Click vào góc mới được)
	  $("#aImg006").mouseenter(function(){
	  	$("#detail06").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail02").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail07").addClass('float-right');
	  });
	  $("#aImg006").mouseleave(function(){
	  	$("#detail06").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail02").removeClass('float-right');
	  	$("#detail03").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail07").removeClass('float-right');
	  });
	});//End icon006
	$(document).ready(function(){//icon007
	  $("#aImg007").mouseenter(function(){
	  	$("#detail07").addClass('float-left');
	  	$("#detail01").addClass('float-right');
	  	$("#detail02").addClass('float-right');
	  	$("#detail03").addClass('float-right');
	  	$("#detail04").addClass('float-right');
	  	$("#detail05").addClass('float-right');
	  	$("#detail06").addClass('float-right');
	  });
	  $("#aImg007").mouseleave(function(){
	  	$("#detail07").removeClass('float-left');
	  	$("#detail01").removeClass('float-right');
	  	$("#detail02").removeClass('float-right');
	  	$("#detail03").removeClass('float-right');
	  	$("#detail04").removeClass('float-right');
	  	$("#detail05").removeClass('float-right');
	  	$("#detail06").removeClass('float-right');
	  });
	});//End icon007
})//End AboutCtrl

// Menu product
app.controller('splitAcCtrl',function($scope,$http){
	$http.get('./Data/splitac.json')
	.then(function(res){
		$scope.pro = res.data;
	})
	$scope.showSplit = function(data){
		$('#splitModal').modal('show');
		$scope.list = data;
	}
	$('.carousel').carousel({
		interval: 2000
	})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End splitAcCtrl

app.controller('cabinetAcCtrl',function($scope,$http){
	$http.get('./Data/cabinetac.json')
	.then(function(res){
		$scope.pro = res.data;
	})
	$scope.showCabinet = function(data){
		$('#cabinetModal').modal('show');
		$scope.list = data;
	}
	$('.carousel').carousel({
		  interval: 2000
		})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End cabinetAcCtrl

app.controller('cassetteAcCtrl',function($scope,$http){
	$http.get('./Data/cassetteac.json')
	.then(function(res){
		$scope.pro = res.data;
	})
	$scope.showCassette = function(data){
		$('#cassetteModal').modal('show');
		$scope.list = data;
	}
	$('.carousel').carousel({
		  interval: 2000
		})
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
})//End cassetteAcCtrl
app.controller('compareCtrl',function($scope){
	
})//End compareCtrl
app.controller('myContactCtrl',function($scope){
	
})//End myContactCtrl
app.controller('menuCtrl',function ($scope) {
	$(".menu-icon").click(function(){
		$(".menu-mobile").toggle('show');
	});
	$(".close-menu").click(function(){
		$(".menu-mobile").toggle('show');
	});
	$(".show-brand").click(function(){
		$(".menu-brands").toggle('show');
		$(".menu-mobile").toggle('hide');
	});
	$(".close-menu-brands").click(function(){
		$(".menu-brands").toggle('hide');
		$(".menu-mobile").toggle('show');
	});
	$(".show-products").click(function(){
		$(".menu-products").toggle('show');
		$(".menu-mobile").toggle('hide');
	});
	$(".close-menu-products").click(function(){
		$(".menu-products").toggle('hide');
		$(".menu-mobile").toggle('show');
	});
	$(".show-mitsubishi").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-carrier").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-orient").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-sanyo").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-lg").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-splitac").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-cabinetac").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-cassetteac").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-compare").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-contact").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-home").click(function(){
		$(".menu-mobile").toggle('hide');
	});
	$(".show-about").click(function(){
		$(".menu-mobile").toggle('hide');
	});

})
