$(document).ready(function(){
	//右侧导航排序
	(function(){
		//位置变动
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 200){
				$(".navigation").css("top","100px");
			}else{
				$(".navigation").css("top","200px");
				$(".sortable li").removeClass("on");
			}
			if(scrollTop > 350 && scrollTop < 600){
				$(".sortable li").eq(0).addClass("on").siblings().removeClass("on");	
			}else if(scrollTop > 600 && scrollTop < 1000){
				$(".sortable li").eq(1).addClass("on").siblings().removeClass("on");	
			}else if(scrollTop > 1000 && scrollTop < 1300){
				$(".sortable li").eq(2).addClass("on").siblings().removeClass("on");
			}else if(scrollTop > 1300 && scrollTop < 1600){
				$(".sortable li").eq(3).addClass("on").siblings().removeClass("on");
			}
		});
		//锚点
		$(".sortable li").click(function(){
			var id = $(this).attr("id");
			$("body").animate({scrollTop:$("#sortable"+id).offset().top},300);
		});
		$(".toTop").click(function(){
			$("body").animate({scrollTop:0},300);
		});
		//排序
		var a = 1;
		$(".sort").click(function(){
			if(a == 1){
				$(".tab,.marsk").fadeIn(500);
				$(".navigation ul").addClass("cursor");
				$(".sortable").sortable({
					cursor:"move",
					disabled:false,
					update:function(){
						var arr = $(this).sortable("toArray");
						var index;
						for(i=0;i<arr.length;i++){
						index = arr[i];
						$(".content").append($("#sortable"+index));
						}
					}
				});
				a=0;
			}else{
				$(".tab,.marsk").fadeOut(500);
				$(".navigation ul").removeClass("cursor");
				$( ".sortable" ).sortable({ disabled: true });
				a=1;
			}
		});
		$(".marsk").click(function(){
			$(".tab,.marsk").fadeOut(500);
		});
	})();

	//图片加载
	$.ajax({
		type:"GET",
		url:"/json/img.json",
		dataType:"json",
		success:function(data){
			//contentTop图片文字加载
			var topImg = '<ul>';
			var toptitle = '<ul>';
			$.each(data.topImages,function(i,n){
				topImg += '<li><img src="'+n.src+'"></li>';
				toptitle += '<li>'+n.title+'</li>';
			});
			topImg += '</ul>';
			toptitle += '</ul>';
			$(".contentTop article .images").prepend(topImg);
			$(".contentTop article .title").prepend(toptitle);
			//contentTop list图片加载
			var topList = '<ul>';
			$.each(data.topList,function(i,n){
				topList += '<li><a href="#">'
							+'<img src="'+n.src+'">'
							+'<span>'+n.title+'</span>'
							+'<div><p>'+n.title+'</p>'
							+'<p>up主：'+n.up+'</p><p>播放：'+n.num+'</p></div></a></li>';
			});
			topList += '</ul>';
			$(".contentTop aside").prepend(topList);

			//promotion图片加载
			var promotionImg = '<ul>';
			$.each(data.promotionImages,function(i,n){
				promotionImg += '<li><a href="#" class="img"><img src="'+n.src+'"></a>'+
						'<a href="#" class="title">'+n.title+'</a></li>';
			});
			promotionImg += '</ul>';
			$(".promotion article .body").prepend(promotionImg);

			//game图片加载
			var gameLeft = '<ul>';
			$.each(data.gameLeft,function(i,n){
				gameLeft += '<li><div class="video"><a href="#"><img src="'+n.src+'"></a></div>'
							+'<p>'+n.title+'</p>'
							+'<div class="number"><span><em class="icon1"></em>'+n.em1+'</span>'
							+'<span><em class="icon2"></em>'+n.em2+'</span></div></li>';
			});
			gameLeft += '</ul>';
			$(".game article .body .left").prepend(gameLeft);

			var gameList = '<ul>';
			$.each(data.gameList,function(i,n){
				gameList += '<li><a href="#"><i>'+(i+1)+'</i>'
						+'<div class="img"><img src="'+n.src+'"></div>'
						+'<div class="title">'+n.title+'</div><div class="num">综合评分：60.0万</div>'
						+'<div class="tip"><div class="t-title">'+n.title+'</div>'
						+'<div class="t-up">'+n.up+'</div><div class="t-date">'+n.time+'</div>'
						+'<div class="t-img"><div class="t-t-img"><img src="'+n.src+'"></div>'
						+'<p>'+n.text+'</p></div><div class="t-num">'
						+'<div><em class="icon1"></em><span>'+n.icon1+'</span></div>'
						+'<div><em class="icon2"></em><span>'+n.icon2+'</span></div>'
						+'<div><em class="icon3"></em><span>'+n.icon3+'</span></div>'
						+'<div><em class="icon4"></em><span>'+n.icon4+'</span></div></div></div></a></li>';
			});
			gameList += '</ul>';
			$(".game aside .list .dateList").prepend(gameList);

			var gameWeek = '<ul>';
			$.each(data.gameWeek,function(i,n){
				gameWeek += '<li><a href="#"><i>'+(i+1)+'</i>'
						+'<div class="img"><img src="'+n.src+'"></div>'
						+'<div class="title">'+n.title+'</div><div class="num">综合评分：60.0万</div>'
						+'<div class="tip"><div class="t-title">'+n.title+'</div>'
						+'<div class="t-up">'+n.up+'</div><div class="t-date">'+n.time+'</div>'
						+'<div class="t-img"><div class="t-t-img"><img src="'+n.src+'"></div>'
						+'<p>'+n.text+'</p></div><div class="t-num">'
						+'<div><em class="icon1"></em><span>'+n.icon1+'</span></div>'
						+'<div><em class="icon2"></em><span>'+n.icon2+'</span></div>'
						+'<div><em class="icon3"></em><span>'+n.icon3+'</span></div>'
						+'<div><em class="icon4"></em><span>'+n.icon4+'</span></div></div></div></a></li>';
			});
			gameWeek += '</ul>';
			$(".game aside .list .weekList").prepend(gameWeek);

			//animation图片加载
			var animationLeft = '<ul>';
			$.each(data.animationLeft,function(i,n){
				animationLeft += '<li><div class="video"><a href="#"><img src="'+n.src+'"></a></div>'
							+'<p>'+n.title+'</p>'
							+'<div class="number"><span><em class="icon1"></em>'+n.em1+'</span>'
							+'<span><em class="icon2"></em>'+n.em2+'</span></div></li>';
			});
			animationLeft += '</ul>';
			$(".animation article .body .left").prepend(animationLeft);
			//animation aside图片加载
			var animationAside = '<ul>';
			var animationTitle = '<ul>';
			$.each(data.animationAside,function(i,n){
				animationAside += '<li><a href="#"><img src="'+n.src+'"></a></li>';
				animationTitle += '<li>'+n.title+'</li>'
			});
			animationAside += '</ul>';
			animationTitle += '</ul>';
			$(".animation aside .display .img").prepend(animationAside);
			$(".animation aside .display .title").prepend(animationTitle);
			//animation bottom图片加载
			var animationBottom = '<ul>';
			$.each(data.animationBottom,function(i,n){
				animationBottom += '<li><a href="#"><img src="'+n.src+'">'
									+'<div class="bottom">'+n.title+'</div></a></li>';
			});
			animationBottom += '</ul>';
			$(".animation aside .body .list").prepend(animationBottom);
			//animation滚动展示
			(function(){
				$(".animation .display .img li").each(function(index){
					$(this).css("left",260*index+"px");
				});
				var index = 0;
				var length = $(".animation .display .img li").length;
				$(".animation .display .icons li").mouseover(function(){
					var index = $(this).index();
					$(".animation .display .img").animate({"left":index*-260+"px"},300);
					$(this).addClass("on").siblings().removeClass("on");
					$(".animation .display .title li").eq(index).show().siblings().hide();
					clearInterval(addtime);
				}).mouseout(function(){
					addtime = setInterval(add,3000);
				});
				var addtime = setInterval(add,3000);
				function add(){
					if(index < length-1){
						index++;
						$(".animation .display .img").animate({"left":index*-260+"px"},0);
						$(".animation .display .title li").eq(index).show().siblings().hide();
						$(".animation .display .icons li").eq(index).addClass("on").siblings().removeClass("on");
					}else{
						index = 0;
						$(".animation .display .img").animate({"left":0},0);
						$(".animation .display .title li").eq(index).show().siblings().hide();
						$(".animation .display .icons li").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
			})();

		//date图片加载
			//最新
			var dateNew = '<ul>';
			$.each(data.dateNew,function(i,n){
				dateNew += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			dateNew += '</ul>';
			$(".date article .new").prepend(dateNew);
			//周一
			var monday = '<ul>';
			$.each(data.monday,function(i,n){
				monday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			monday += '</ul>';
			$(".date article .monday").prepend(monday);
			//周二
			var tuesday = '<ul>';
			$.each(data.tuesday,function(i,n){
				tuesday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			tuesday += '</ul>';
			$(".date article .tuesday").prepend(tuesday);
			//周三
			var wednesday = '<ul>';
			$.each(data.wednesday,function(i,n){
				wednesday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			wednesday += '</ul>';
			$(".date article .wednesday").prepend(wednesday);
			//周四
			var thursday = '<ul>';
			$.each(data.thursday,function(i,n){
				thursday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			thursday += '</ul>';
			$(".date article .thursday").prepend(thursday);
			//周五
			var friday = '<ul>';
			$.each(data.friday,function(i,n){
				friday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			friday += '</ul>';
			$(".date article .friday").prepend(friday);
			//周六
			var saturday = '<ul>';
			$.each(data.saturday,function(i,n){
				saturday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			saturday += '</ul>';
			$(".date article .saturday").prepend(saturday);
			//周日
			var sunday = '<ul>';
			$.each(data.sunday,function(i,n){
				sunday += '<li><a href="#">'
							+'<div class="img"><img src="'+n.src+'"></div>'
							+'<div class="title"><p class="text">'+n.title+'</p>'
							+'<p class="update">更新至<i>'+n.num+'</i></p></div></a></li>';
			});
			sunday += '</ul>';
			$(".date article .sunday").prepend(sunday);
			//dateAside图片加载
			var dateAsideImg = '<ul>';
			var dateAsideTitle = '<ul>';
			$.each(data.dateAside,function(i,n){
				dateAsideImg += '<li><a href="#"><img src="'+n.src+'"></a></li>';
				dateAsideTitle += '<li>'+n.title+'</li>'
			});
			dateAsideImg += '</ul>';
			dateAsideTitle += '</ul>';
			$(".date aside .display .img").prepend(dateAsideImg);
			$(".date aside .display .title").prepend(dateAsideTitle);
			//dateList图片加载
			var dateBottom = '<ul>';
			$.each(data.dateBottom,function(i,n){
				dateBottom += '<li><a href="#"><img src="'+n.src+'">'
								+'<div class="bottom">'+n.title+'</div></a></li>';
			});
			dateBottom += '</ul>';
			$(".date aside .list").prepend(dateBottom);

			//date滚动展示
			(function(){
				$(".date .display .img li").each(function(index){
					$(this).css("left",260*index+"px");
				});
				var index = 0;
				var length = $(".date .display .img li").length;
				$(".date .display .icons li").mouseover(function(){
					var index = $(this).index();
					$(".date .display .img").animate({"left":index*-260+"px"},300);
					$(this).addClass("on").siblings().removeClass("on");
					$(".date .display .title li").eq(index).show().siblings().hide();
					clearInterval(addtime);
				}).mouseout(function(){
					addtime = setInterval(add,3000);
				});
				var addtime = setInterval(add,3000);
				function add(){
					if(index < length-1){
						index++;
						$(".date .display .img").animate({"left":index*-260+"px"},0);
						$(".date .display .title li").eq(index).show().siblings().hide();
						$(".date .display .icons li").eq(index).addClass("on").siblings().removeClass("on");
					}else{
						index = 0;
						$(".date .display .img").animate({"left":0},0);
						$(".date .display .title li").eq(index).show().siblings().hide();
						$(".date .display .icons li").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
			})();

			//contentTop滚动展示
			(function(){
				$(".contentTop article .images li").each(function(index,ele){
					$(this).css("margin-left",440*index+"px");
				});
				var index = 0;
				var length = $(".contentTop .slider li").length;
				$(".contentTop article .slider li").click(function(){
					index = $(this).index();
					$(".contentTop article .images").animate({"left":index*-440+"px"},300);
					$(this).addClass("sliderActive").siblings().removeClass("sliderActive");
					$(".contentTop article .title li").eq(index).show().siblings().hide();
				});
				$(".contentTop article .slider li").hover(function(){
					clearInterval(addTime);
				},function(){
					addTime = setInterval(add,3000);
				});
				var addTime = setInterval(add,3000);
				function add(){
					if(index < length-1){
						index++;
						$(".contentTop article .images").animate({"left":index*-440+"px"},0);
						$(".contentTop article .slider li").eq(index).addClass("sliderActive").siblings().removeClass("sliderActive");
						$(".contentTop article .title span").eq(index).show().siblings().hide();	
					}else{
						index = 0;
						$(".contentTop article .images").animate({"left":index*-440+"px"},0);
						$(".contentTop article .slider li").eq(index).addClass("sliderActive").siblings().removeClass("sliderActive");
						$(".contentTop article .title span").eq(index).show().siblings().hide();
					}	
				}
			})();
			
		},
		error:function(){
			alert("图片加载失败！");
		}
	});
	
	//CSS屏幕宽度自适应
	if(screen.width>1300){
		$("body").addClass("widescreen");
	}else{
		$("body").removeClass("widescreen");
	}

    //animation切换
    $(".animation .c-l").click(function(){
    	$(this).addClass("on");
    	$(".animation .c-r").removeClass("on");
    	$(".animation article .body .left").show();
    	$(".animation article .body .right").hide();
    });
    var rClick = 0;
    $(".animation .c-r").click(function(){
    	$(this).addClass("on");
    	$(".animation .c-l").removeClass("on");
    	$(".animation article .body .left").hide();
    	$(".animation article .body .right").show();
    	if(rClick==0){
	    	$.ajax({
	    		type:'GET',
	    		dataType:'json',
	    		url:'./json/img.json',
	    		success:function(data){
	    			var img = "<ul>";
	    			$.each(data.animationRight,function(i,n){
						img += '<li><div class="video"><a href="#"><img src="'+n.src+'"></a></div>'
									+'<p>'+n.title+'</p>'
									+'<div class="number"><span><em class="icon1"></em>'+n.em1+'</span>'
									+'<span><em class="icon2"></em>'+n.em2+'</span></div></li>';
					})
					$(".animation article .body .right").prepend(img);
					$(".loading1").remove();
					rClick=1;
	    		}
	    	});
	    	
	    }
    });
	//game切换
    $(".game .c-l").click(function(){
    	$(this).addClass("on");
    	$(".game .c-r").removeClass("on");
    	$(".game article .body .left").show();
    	$(".game article .body .right").hide();
    });
    var gClick = 0;
    $(".game .c-r").click(function(){
    	$(this).addClass("on");
    	$(".game .c-l").removeClass("on");
    	$(".game article .body .left").hide();
    	$(".game article .body .right").show();
    	if(gClick==0){
	    	$.ajax({
	    		type:'GET',
	    		dataType:'json',
	    		url:'../json/img.json',
	    		success:function(data){
	    			var img = "<ul>";
	    			$.each(data.gameRight,function(i,n){
						img += '<li><div class="video"><a href="#"><img src="'+n.src+'"></a></div>'
									+'<p>'+n.title+'</p>'
									+'<div class="number"><span><em class="icon1"></em>'+n.em1+'</span>'
									+'<span><em class="icon2"></em>'+n.em2+'</span></div></li>';
					})
					$(".game article .body .right").prepend(img);
					$(".loading1").remove();
					rClick=1;
	    		}
	    	});
	    	
	    }
    });
	//date日期选择
	$(".date .header li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	//date日期选择--动画列表
	$(".date article .body>div").length;
	$(".date article .header>ul>li").click(function(){
		var index = $(this).index();
		$(".date article .body>div").eq(index).show().siblings().hide();
	});

	//game三日一周选择
	$(".game aside .slide li").click(function(){
		$(".game aside .slide").prepend($(this));
	});
	$(".game aside .slide .date").click(function(){
		$(".game aside .body .dateList").show();
		$(".game aside .body .weekList").hide();
	});
	$(".game aside .slide .week").click(function(){
		$(".game aside .body .dateList").hide();
		$(".game aside .body .weekList").show();
	});

});
