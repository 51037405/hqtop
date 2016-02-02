/*
	2015.4.11 edit by fuyi
*/

		var options = {
			items:[
				'bold','italic', 'underline','strikethrough','|', 'forecolor', 'hilitecolor', '|', 'justifyleft', 'justifycenter','justifyright','justifyfull','|', 'insertunorderedlist', 'insertorderedlist', '|', 'outdent', 'indent', '|', 'subscript', 'superscript', '|','selectall', 'removeformat', '|','undo', 'redo','/',
				'fontname','fontsize', 'formatblock','|','cut','copy', 'paste','plainpaste','wordpaste','table','|','link','unlink','|','moreImage','imgBank','imgSpace','quotePic','infoModule','|','fullscreen','source'
			],                                           //功能按钮
			width:'100%',
			height:'300px',
			themeType:'default',                         //界面风格,可设置”default”、”simple”，指定simple时需要引入simple.css
			langType:'zh_CN',                            //按钮提示语言（en为英语）
			newlineTag:'br',                             //设置回车换行标签，“p” “br”
			dialogAlignType:'page',                      //设置弹出框(dialog)的对齐类型，指定page时按当前页面居中，指定空时按编辑器居中
			shadowMode:'true',                           //true时弹出层(dialog)显示阴影
			zIndex:'1000000',                            //指定弹出层的基准z-index,默认值: 811213
			useContextmenu:'true',                       //true时使用右键菜单，false时屏蔽右键菜单
			colorTable:[								 //指定取色器里的颜色
				['#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500'],
				['#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF'],
				['#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE'],
				['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000']
			],
			filterMode:false
			//cssData:'kse\\:widget {display:block;width:120px;height:120px;background:url(http://b.hiphotos.baidu.com/image/pic/item/e4dde71190ef76c666af095f9e16fdfaaf516741.jpg);}'
		}

		KindEditor.lang({moreImage:'图片',imgBank:'图片银行',infoModule:'插入产品信息模块',imgSpace:'图片空间',quotePic:'引用采集图片'});//图标添加title提示
		
		KindEditor.plugin('moreImage',function(k){ //图片添加点击事件
			var editor = this,
				name = 'moreImage';
				editor.clickToolbar(name,function(){
					batchChoicePic(editor);
				});
		});
		KindEditor.plugin('lazadaImgSpace',function(k){ //图片添加点击事件
			var editor = this,
				name = 'lazadaImgSpace';
				editor.clickToolbar(name,function(){
					showLazadaImgSpace(editor,"0");
				});
		});
		KindEditor.plugin('imgBank',function(k){ //图片银行添加点击事件
			var editor = this,
				name = 'imgBank';
				editor.clickToolbar(name,function(){
					uploadImg(4,"0");
				});
		});
		KindEditor.plugin('imgSpace',function(k){ //图片空间添加点击事件
			var editor = this,
				name = 'imgSpace';
				editor.clickToolbar(name,function(){
					uploadImg(5,"0");
				});
		});
		KindEditor.plugin('quotePic',function(k){ //引用采集图片添加点击事件
			var editor = this,
				name = 'quotePic';
				editor.clickToolbar(name,function(){
					uploadImg(6,"0");	
				});
		});

		KindEditor.plugin('infoModule',function(k){ //插入产品信息模块添加点击事件
			var editor = this,
				name = 'infoModule';
				editor.clickToolbar(name,function(){
					showInfoModule();					
				});
		});
		KindEditor.plugin('source',function(K){ //图标添加点击事件
			
			var editor = this,
				divStr = "",
				name = 'source';
				editor.clickToolbar(name,function(){
					str = editor.html();
					
					$('#cacheDiv').empty();
					$('#cacheDiv').html(str);
					divStr = $('#cacheDiv').html();
					if ($('#cacheDiv').find('.noImg').length != 0 || $('#cacheDiv').find('.dxmImg').length != 0)
					{
						divStr = transition();
					}else if ($('#cacheDiv').find('[data-widget-type="relatedProduct"]').length != 0 || $('#cacheDiv').find('[dxm-data-widget-type="customText"]').length != 0 || $('#cacheDiv').find('[dxm-data-widget-type="dxmRelatedProduct"]').length != 0)
					{
						divStr = unTransition();
					};
					editor.html(divStr);
				});
		});
		//模板格式转换(图转标)
		var transition = function(obj){
			if (obj == '' ||obj == undefined)
			{
				obj = '#cacheDiv';
			}
			var str = editor.html();
			
			var reg=/<script[^>]*>(.|\n)*?(?=<\/script>)<\/script>/gi;     
			str = str.replace(reg,'');
			
			$(obj).empty();
			$(obj).html(str);
			//smt模板
			$(obj).find('.noImg').each(function(){
				var newStr = unescape($(this).attr('data-kse'));
				$(this).replaceWith(newStr);
			});
			//自定义模板
			$(obj).find('.dxmImg').each(function(){
				var dxmStr = unescape($(this).attr('data-kse'));
				$(this).replaceWith(dxmStr);
			})
			str = $(obj).html();
			
			return str;
		};
		//模板格式转换(标转图)
		var unTransition = function(obj){
			if (obj == '' ||obj == undefined)
			{
				obj = '#cacheDiv';
			}
			str = editor.html();
			$(obj).empty();
			$(obj).html(str);
			//smt模板
			$(obj).find('[data-widget-type="relatedProduct"]').each(function(){
			//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
				var type = $(this).attr('type'),
					newStr = $(this).prop('outerHTML'),
					custom = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget1.png?t=AEO9LPV",
					relation = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget2.png?t=AEO9LPV";
				if(type == 'relation'){
					custom = relation;
				} 
				newStr = '<img class="noImg" data-kse="'+escape(newStr)+'" src="'+custom+'">';
				$(this).replaceWith(newStr);
			});
			$(obj).find('[data-widget-type="customText"]').each(function(){
				//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
					var type = $(this).attr('type'),
						newStr = $(this).prop('outerHTML'),
						custom = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget1.png?t=AEO9LPV",
						relation = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget2.png?t=AEO9LPV";
					if(type == 'relation'){
						custom = relation;
					} 
					newStr = '<img class="noImg" data-kse="'+escape(newStr)+'" src="'+custom+'">';
					$(this).replaceWith(newStr);
				});
			//自定义模板
			$(obj).find('[dxm-data-widget-type="dxmRelatedProduct"]').each(function(){
			//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
				var moduleType = $(this).attr('type');
				var dxmStr = $(this).prop('outerHTML');
				var custom = "http://www.dianxiaomi.com/static/img/moban_custom.png";
				var relation = "http://www.dianxiaomi.com/static/img/moban.png";
				if(moduleType == 1){
					custom = relation;
				} 
				var	newStr = '<img class="noImg" data-kse="'+escape(dxmStr)+'" src="'+custom+'"/>';
				$(this).replaceWith(newStr);
			});
			str = $(obj).html();
			return str;
		};
		//
		var unTransitionHtml = function(str){
			var obj = '#cacheDiv';
			$(obj).html(str);
			//smt模板
			$(obj).find('[data-widget-type="relatedProduct"]').each(function(){
			//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
				var type = $(this).attr('type'),
					newStr = $(this).prop('outerHTML'),
					custom = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget1.png?t=AEO9LPV",
					relation = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget2.png?t=AEO9LPV";
				if(type == 'relation'){
					custom = relation;
				} 
				newStr = '<img class="noImg" data-kse="'+escape(newStr)+'" src="'+custom+'">';
				$(this).replaceWith(newStr);
			});
			$(obj).find('[data-widget-type="customText"]').each(function(){
				//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
					var type = $(this).attr('type'),
						newStr = $(this).prop('outerHTML'),
						custom = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget1.png?t=AEO9LPV",
						relation = "http://style.aliexpress.com/js/5v/lib/kseditor/plugins/widget/images/widget2.png?t=AEO9LPV";
					if(type == 'relation'){
						custom = relation;
					} 
					newStr = '<img class="noImg" data-kse="'+escape(newStr)+'" src="'+custom+'">';
					$(this).replaceWith(newStr);
				});
			//自定义模板
			$(obj).find('[dxm-data-widget-type="dxmRelatedProduct"]').each(function(){
			//得到对象后，把属性拿到，拼个string再写到img里，替换原来的对象
				var moduleType = $(this).attr('type');
				var dxmStr = $(this).prop('outerHTML');
				var custom = "http://www.dianxiaomi.com/static/img/moban_custom.png";
				var relation = "http://www.dianxiaomi.com/static/img/moban.png";
				if(moduleType == 1){
					custom = relation;
				}
				var newStr = '<img class="noImg" data-kse="'+escape(dxmStr)+'" src="'+custom+'"/>';
				$(this).replaceWith(newStr);
			});
			str = $(obj).html();
			return str;
		};
		var setKindeDetail = function(detail){
			var reg=/<script[^>]*>(.|\n)*?(?=<\/script>)<\/script>/gi;     
            detail = detail.replace(reg,'').replace(/<script.*?>.*?<\/script>/g,'');
            
			editor.html(unTransitionHtml(detail));
		};