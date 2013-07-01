$.autoimgWH={
		run:function(options){
					var defaults={
						'autoW':138,//nav显示时候拥有的类
						'autoH':130,//div显示的时候拥有的类
						'sel':'.imgbox img'//tab的切换模式，默认为mouseover
						};
					var opts = $.extend(defaults, options);
					$(opts.sel).each(function(index, element) {
				
				var w=$(this).width();
				var h=$(this).height();
				if(w=750){
					w=750;
					}
					if (w!=0 && h!=0){
						if(w>h){
								if(w>opts.autoW){
									$(this).removeAttr('height');
									$(this).attr('width',opts.autoW)
									var temh=$(this).height();
									if(temh>opts.autoH){
										$(this).removeAttr('width');
										$(this).attr('height',opts.autoH)
										}
										
										
								}else{
									$(this).attr('width',w)
								}
						
						}else{
								if(h>opts.autoH){
									$(this).removeAttr('width');
									$(this).attr('height',opts.autoH)
									var temw=$(this).width();
									if(temw>opts.autoW){
										$(this).removeAttr('height');
										$(this).attr('width',opts.autoW)
										}
										
								}else{
									$(this).attr('height',h);
								}
						}
					}
					});
					
				obj=this;
					setTimeout(function(){
						obj.run({
						'autoW':opts.autoW,//宽
						'autoH':opts.autoH,//高
						'sel':opts.sel//选择器
						});},100); 

			}
	};
	
$(function(){
/*调用方法*/
$.autoimgWH.run({
		'autoW':326,//宽
		'autoH':171,//高
		'sel':'.engineering img'//选择器
	});    
});