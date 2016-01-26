 function tab1(o1,o2,c,t1,t2,a,b){
		var count=o1.size()-1;
		var now;
		var TimeInterval;
		o1.each(function(i){
			$(this).mouseover(function(){
				o2.hide().eq(i).show();
				o1.removeClass(c);
				$(this).addClass(c);
				window.clearInterval(TimeInterval);
			}).mouseout(function(){
				now = i+1;
				TimeInterval = window.setInterval(changeimage,t1);
			});
			//初始化显示
			if ($(this).hasClass(c)) {
				$(this).addClass(c);
				o2.hide().eq(i).show();
				now = i+1;
			}
		})
		TimeInterval = window.setInterval(changeimage,t1);
		function changeimage(){
			if(now>count)now=0;
			o2.hide().eq(now).stop().fadeTo(0,a).fadeTo(t2,b);
			o1.removeClass(c).eq(now).addClass(c);
			now++;
		}
	}
$(function() {
	tab1($("#tabBtnD a"),$("#tabContentD > ul"),"focus",2500,0,1,1);
	tab1($("#tabBtnE a"),$("#tabContentE > ul"),"focus",2500,0,1,1);
	tab1($("#tabBtnF a"),$("#tabContentF > ul"),"focus",2500,0,1,1);
	tab1($("#tabBtnG a"),$("#tabContentG > ul"),"focus",2500,0,1,1);
	
	var hoverElement = $(".bannerbox img");
	hoverElement.hover(function() {
                $(this).stop().animate({
					marginLeft: '+5px',
                    opacity: 0.7
                })
            },function() {
                 $(this).stop().animate({
					 marginLeft: '0',
                    opacity:1
                });
            });
	 $('.bannerbox .boxtx img').hover(function() {
                $(this).stop().animate({
					marginLeft: '0',
                    opacity: 0.7
                })
            },function() {
                 $(this).stop().animate({
					 marginLeft: '0',
                    opacity:1
                });
            });
			
			
			
     //$("#floor_A").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
	  //$("#floor_B").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
	   //$("#floor_C").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
	  //  $("#floor_D").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
		// $("#floor_E").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
		  //$("#floor_F").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
		  // $("#floor_G").Slide({autoPlay:true,effect:"fade",speed:"normal",timer:3500});
	 
 });
 
$(window).load(function() {
	$('.floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		slices:5 ,
		controlNav: true
	});
	/*
	$('#floor_B .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});
	$('#floor_C .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});
	$('#floor_D .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});
	$('#floor_E .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});
	$('#floor_F .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});
	$('#floor_G .floor_slide').nivoSlider({
		effect: 'fold', 
		directionNav: false,
		controlNav: true
	});*/
});