(function ($) {
	   function PicZoom(element,options){
		   this.init(element,options);
	   }
	   
	   PicZoom.prototype = {
			 init : function(element,options){
				this.options = $.extend({}, (this.options || $.fn.picZoom.defaults), options);
				var thatPic = this;
				element.hover(function() {
					var srcObj = $(this).find("img"),
						srcObjImg = srcObj.attr("src");
					if(srcObjImg == '' || srcObjImg == undefined){  //src为空时会报错 edit by fy
						return;
					}
				    srcObjImg = srcObjImg.replace('-tiny.jpg','-original.jpg');
				    srcObjImg = srcObjImg.replace('_50x50.jpg','');
			        var str = "<div class='onNew'><div class='imgZoomOutDiv'><div class='imgZoomInDiv'><img name='fdjName' src='"+srcObjImg+"'></div></div></div>";
			        $(this).append(str);
				    var zdWidth = 340;
				    var	zdHeight = 340;
					var wihthLeft = ($(this).outerWidth() + 20) + "px";  
				    $("div.onNew").css({"position":"absolute","top":"0","z-index":"1200",
					   					"border":"5px solid #AAAAAA;","box-shadow": "-0px -0px 10px rgba(0,0,0,1)",
					   					"border-radius":"4px","text-align":"center"}).css("left",wihthLeft);
				    $("div.onNew").css("width",(zdWidth+2)+"px").css("height",(zdHeight+2)+"px");
				    /*加两层div并修改img样式，对图片做垂直居中处理*/
				    $("div.imgZoomOutDiv").css({"width":"100%","height":"100%","position":"relative","dispaly":"inline-block","background-color":"#fff"});
				    $("div.imgZoomInDiv").css({"width":"100%","height":"100%","position":"relative","dispaly":"inline-block"});
				    $("img[name='fdjName']").css({"width":"auto","height":"auto","max-width":"100%","max-height":"100%","padding":"1px","margin":"auto",
				    							  "position":"absolute","top":"0","bottom":"0","left":"0","right":"0"});
				    /*加两层div并修改img样式，对图片做垂直居中处理end*/
				    $(this).find("img").css("cursor","default");
				},function(){
					$(this).find("div.onNew").remove();
					element.find("img").css("cursor","wait");//cursor: wait
				});
			}
		} 
	   
	   $.fn.picZoom = function (options) {
	       new PicZoom(this, options);
	   }
	   
		$.fn.picZoom.defaults = {
			imgWidth: "296",
			imgHeight: "296",
			divWidth: "300",
			divHeight:"300"
		}
	   $.fn.picZoom.Constructor = PicZoom;
})(jQuery);