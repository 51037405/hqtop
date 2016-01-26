<!--搜索框tab-->
function secBoard(elementID, listName, elementname, n) {
	var elem = document.getElementById(elementID);
	 var elemlist = elem.getElementsByTagName(elementname);
	for (var i = 0; i < elemlist.length; i++) {
		elemlist[i].className = "li02";
		var m = i + 1;
			document.getElementById(listName + "_" + m).style.display = "none";
		}
		elemlist[n - 1].className = "li01";
			document.getElementById(listName + "_" + n).style.display = "block";
}
//*位移
$(function () {
	 $('.go_img img').hover(function () {
        $(this).stop().animate({
            'margin-left': '-10px'
        }, 200)
    }, function () {
        $(this).stop().animate({
            'margin-left': '0'
        }, 200);
    });
}); 
/*腰带*/
$(function () { 
	// Dock initialize
	$('#dock').Fisheye(
		{
			maxWidth: 80,
			items: 'a',
			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 90,
			proximity: 90,
			alignment : 'left',
			valign: 'bottom',
			halign : 'center'
		}
	);
});
/*360*/
$(document).ready(function(){
	$("#img1").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img2").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img3").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img4").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img5").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img6").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img7").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img8").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img9").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 
	   
	});
	$("#img10").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img11").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img12").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img13").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img14").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img15").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
	$("#img16").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:360});
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0});
			}
		 } 	   
	});
});
/*banner*/
$(function(){
var timer=3000;
var showtime = 800;
var showbox = $("#banner_show");
var inbox = $(".bannger_inbox");
var movelist = $("#yq_banner_list");
var s;
var b = 0;
var size =inbox.size();
var play = 1;
function move(){
b++;
if(b>size-1){
b=0;
}
inbox.each(function(e){
inbox.eq(e).hide(0);
$("#banner_magbox"+e).hide();
movelist.find("a").eq(e).removeClass("hover");
if(e == b){
inbox.eq(b).fadeIn(showtime);
$("#banner_magbox"+b).show();
movelist.find("a").eq(b).addClass("hover");
}
});
}
s = setInterval(move,timer);
function stopp(obj){
$(obj).hover(function(){
if(play){
clearInterval(s);
play = 0;
}	  
},
function(){
if(!play){
s = setInterval(move,timer); 
play = 1;
}	
}		  
);
}
stopp(".banner_show");
$(".banner_btn_right").click(function(){
move(); 
});
$(".banner_btn_left").click(function(){
b--;
if(b<0){
b=size-1
}
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
if(e == b){
inbox.eq(b).fadeIn(showtime);
movelist.find("a").eq(b).addClass("hover");
}
}); 
});
movelist.find("a").click(function(){
var rel = $(this).attr("rel");
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
$("#banner_magbox"+e).hide(0);
if(e == rel){
inbox.eq(rel).fadeIn(showtime);
movelist.find("a").eq(rel).addClass("hover");
$("#banner_magbox"+rel).show(0);	
}
});
});
$(".bannger_inbox").each(function(e){
var inboxsize = $(".bannger_inbox").size();
inboxwimg = $(this).find("img").width();
$(".bannger_inbox").eq(e).css({"margin-left":(-1)*inboxwimg/2+"px","z-index":inboxsize-e});
});
});
/*专区*tab*/
$(function(){      
       $(".tab01").tabs({meth:"hover"});   
});
(function(){
	$.fn.tabs = function(o){
		var o = $.extend({meth:"hover"}, o||{})
		return this.each(function(){
			var $menu = $(this).children(".tab_menu").children("li"), $cont = $(this).children(".tab_cont").children(".cont");
			$menu.each(function(i){	
				if(o.meth == "click"){
					$(this).click(function(){ toggle(i) });				
				}else if(o.meth == "hover"){					
					$(this).hover(function(){ toggle(i) });
				}
			});
			function toggle(i){              
				$menu.removeClass("cur");
				$menu.eq(i).addClass("cur");
				$cont.removeClass("cur");
				$cont.eq(i).addClass("cur");
			}
		});
	}
})(jQuery);
/*right_bottom*/
        function secBoard(elementID, listName, elementname, n) {
            var elem = document.getElementById(elementID);
            var elemlist = elem.getElementsByTagName(elementname);
            for (var i = 0; i < elemlist.length; i++) {
                elemlist[i].className = "li02";
                var m = i + 1;
                document.getElementById(listName + "_" + m).style.display = "none";
            }
            elemlist[n - 1].className = "li01";
            document.getElementById(listName + "_" + n).style.display = "block";
        }		
<!--下拉框-->
function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
		}
	}                                       
	 function showHide(e,objname){
		var obj = getObject(objname);
		if(obj.style.display == "none"){
			obj.style.display = "block";
			e.className="minus";
		}else{
			obj.style.display = "none";
			e.className="plus";
		}
}
//*下拉选取地区
$(function(){
	$("#dropdowna p").click(function(){
		var ul = $("#dropdowna ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$("#dropdowna ul li a").click(function(){
		var txt = $(this).text();
		$("#dropdowna p").html(txt);
		var value = $(this).attr("rel");
		$("#dropdowna ul").hide();
		$("#result").html("您选择了"+txt+"，值为："+value);
	});
	
});