$(function(){
	var box=$('.blbtuff')[0];
	var img=$('.banner');
	var quan=$('.dian');
	var left=$('.banleft')[0];
	var right=$('.banright')[0];
	var flag=true;
	var n=0;
	// img[n].style.zIndex='30'
	img[0].style.opacity=1;
	quan[0].style.background='#e5004f'	
	var t=setInterval(move,2000)
	function move(){
		n++
		if(n>=img.length){
			n=0
		}
		for(var i=0;i<img.length;i++){
			// img[i].style.opacity=0;
			animate(img[i],{opacity:0},600)
			quan[i].style.background='#000'	

		}
		// img[n].style.opacity=1;
		animate(img[n],{opacity:1},600)
		quan[n].style.background='#e5004f'	
		// console.log(img[n]);
	}
	box.onmouseover=function(){
		left.style.display='block'
		right.style.display='block'
		clearInterval(t);
	}
	box.onmouseout=function(){
		left.style.display='none'
		right.style.display='none'
		t=setInterval(move,2000)

	}
	left.onclick=function(){
		n--
		if(n<0){
			n=img.length-1
		}
		for(var i=0;i<img.length;i++){
			this.index=i
			// img[i].style.zIndex=0;
			animate(img[i],{opacity:0},600)
			quan[i].style.background='#000'	
		}
		// img[n].style.zIndex=30;
		animate(img[n],{opacity:1},600)
		quan[n].style.background='#e5004f'
	}
	right.onclick=function(){
		move();
	}

	// 点击
	for(var i=0;i<quan.length;i++){
		quan[i].index=i;
		quan[i].onmouseover=function(){
			if(!flag){
				return;
			}
			flag=true;

			for(var j=0;j<quan.length;j++){
				quan[j].style.background='#000';
				// img[j].style.zIndex=0;
				animate(img[j],{opacity:0},600)
			}
			
			quan[this.index].style.background='#e5004f';
			// img[this.index].style.zIndex=30
			animate(img[this.index],{opacity:1},600)
		n=this.index;
		
			
			
			
		}
	}




	// 滚动条
	var cheight=document.documentElement.clientHeight;
	var cwidth=document.documentElement.clientWidth;
	var back=$('.back')[0];
	var floor=$('.mingpin1');
	var floor_lis=$('.floor-lis');
	var floor_nav=$('.dingwei')[0];
	var backT=back.offsetHeight;
	var nheight;
	var now;
	var flag=true;
	var flag2=true;
	// 获取每个楼层位置
	for(var i=0;i<floor.length;i++){
		floor[i].h=floor[i].offsetTop;
		// console.log(floor[i].h);
	}
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;

		var top=obj.scrollTop;
		// floor_nav  top_hidden back出现
		if(top>=floor[0].h-300){
			floor_nav.style.display='block';
			back.style.display='block';
			nheight=floor_nav.offsetHeight;
			floor_nav.style.top=(cheight-nheight)/2+'px';
			if(flag==true){
				flag=false;	
			}flag=true;
		}
		if(top<floor[0].h-300){
			floor_nav.style.display='none';
			back.style.display='none';
			if(flag2==true){
				flag2=false;	
			}flag2=true;
		}
		// 出现对应的颜色
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-200){
				for(var j=0;j<floor_lis.length;j++){
					// floor_lis[j].style.background='#ccc'
					floor_lis[j].style.background=''
					floor_lis[j].style.lineHeight=999+'px';

				}
				floor_lis[i].style.background='#F6004F'
				floor_lis[i].style.lineHeight=20+"px";

				now=i;
			}
		}

		// 点击返回对应的楼层
		for(var i=0;i<floor_lis.length;i++){
			floor_lis[i].index=i;
			// index 层级
			floor_lis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].h})
				animate(document.documentElement,{scrollTop:floor[this.index].h})
			}
			floor_lis[i].onmouseover=function(){
				this.style.background='#F6004F'
				this.style.lineHeight=20+'px'
			}
			floor_lis[i].onmouseout=function(){
				if(now==this.index){
					return;
				}
				this.style.background=''
				this.style.lineHeight=999+'px';

			}
		}
	}


	// 时尚名品轮播图
	function som(obj){
		var box3=obj;
		var img3=$('.lunbo',box3);
		var lit3=$('.lits',box3);
		var left3=$('.left',box3)[0];
		var right3=$('.right',box3)[0];
		var width3=parseInt(getStyle(box3,'width'));
		var next3=0;
		var n3=0;
		var flag3=true;

		// var t3=setInterval(move3,2000);
		function move3(){
			if(!flag3){
				return;
			}
			flag3=false
			next3=n3+1
			if(next3>=img3.length){
				next3=0;
			}
			img3[next3].style.left=width3+'px';
			animate(img3[n3],{left:-390},600);
			animate(img3[next3],{left:0},600,function(){
				flag3=true
			});
			lit3[n3].style.background='#4b4b4b'
			lit3[next3].style.background='#E4155B'
			n3=next3;
		}
		box3.onmouseover=function(){
			left3.style.display='block'
			right3.style.display='block'
			// clearInterval(t3)
		}
		box3.onmouseout=function(){
			// t3=setInterval(move3,2000)
			left3.style.display='none'
			right3.style.display='none'
		}
		right3.onclick=function(){
			move3();
		}
		left3.onclick=function(){
			if(!flag3){
				return;
			}
			flag3=true;
			next3=n3-1;
			if(next3<0){
				next3=img3.length-1;
			}
			img3[next3].style.left=-width3+'px';
			animate(img3[n3],{left:390},600);
			animate(img3[next3],{left:0},600,function(){
				flag3=true;
			});
			lit3[n3].style.background='#4b4b4b'
			lit3[next3].style.background='#E4155B'
			n3=next3;
		}

		for(var i=0;i<lit3.length;i++){
			lit3[i].index=i;
			lit3[i].onclick=function(){
				if(this.index>n){
					if(!flag3){
						return;
					}
					flag3=true;
					img3[this.index].style.left=width3+'px';
					animate(img3[n],{left:-390},600);
					animate(img3[this.index],{left:0},600,function(){
						flag3=true
					});
					lit3[n3].style.background='#4b4b4b'
					lit3[this.index].style.background='#E4155B'
					n3=this.index;
				}else if(this.index<n){
					if(!flag3){
						return;
					}
					flag3=true;
					img3[this.index].style.left=-width3+'px';
					animate(img3[n3],{left:390},600);
					animate(img3[this.index],{left:0},600,function(){
						flag=true;
					});
					lit3[n3].style.background='#4b4b4b'
					lit3[this.index].style.background='#E4155B'
					n3=this.index;
				}
			}
		}
	}
	som($('.mingpinxc')[0])
	som($('.mingpinxc')[1])
	som($('.mingpinxc')[2])
	som($('.mingpinxc')[3])
	som($('.mingpinxc')[4])
	som($('.mingpinxc')[5])
	som($('.mingpinxc')[6])
	som($('.mingpinxc')[7])
	som($('.mingpinxc')[8])
	


	// 全部分类选项卡
	var box_in=$('.box-in');
	for(var i=0;i<box_in.length;i++){
		// if(i==0){
		// 	continue;
		// }
		hover(box_in[i],function(){
			this.style.background='#E5004F';
			var box_x=$('.box-x',this)[0];
			box_x.style.display='block'
		},function(){
			var box_x=$('.box-x',this)[0];
			var that=this;
				box_x.style.display='none';
				that.style.background='#333333';
		})
	}


	// 微信选项卡
	var box_in1=$('.daoh2');
	for(var i=0;i<box_in1.length;i++){
		hover(box_in1[i],function(){
			this.style.background='#ffffff';
			var box_x1=$('.dh-x',this)[0];
			var zhe1=$('.zhe-w',this)[0];
			box_x1.style.display='block'
			zhe1.style.display='block'
		},function(){
			var box_x1=$('.dh-x',this)[0];
			var zhe1=$('.zhe-w',this)[0];
			var that=this;
			box_x1.style.display='none';
			zhe1.style.display='none';
			that.style.background='#eeeeee';
		})
	}


	// 手机银泰选项卡
	var box_in2=$('.daoh3');
	for(var i=0;i<box_in2.length;i++){
		hover(box_in2[i],function(){
			this.style.background='#ffffff';
			var box_x2=$('.sj-x',this)[0];
			var zhe=$('.zhe-s',this)[0];
			box_x2.style.display='block'
			zhe.style.display='block'
			
		},function(){
			var box_x2=$('.sj-x',this)[0];
			var zhe=$('.zhe-s',this)[0];
			var that=this;
			box_x2.style.display='none';
			zhe.style.display='none';
			that.style.background='#eeeeee';
		})
	}



	// 我的银泰
	var box_in4=$('.dhweny0');
	for(var i=0;i<box_in4.length;i++){
		hover(box_in4[i],function(){
			this.style.background='#ffffff';
			var box_x4=$('.wdyt-x',this)[0];
			var zhe4=$('.zhe-wo',this)[0];
			box_x4.style.display='block'
			zhe4.style.display='block'
		},function(){
			var box_x4=$('.wdyt-x',this)[0];
			var zhe4=$('.zhe-wo',this)[0];
			var that=this;
			box_x4.style.display='none';
			zhe4.style.display='none';
			that.style.background='#eeeeee';
		})
	}



	// 购物车选项卡
	var box_in3=$('.gou-f');
	for(var i=0;i<box_in3.length;i++){
		// if(i==0){
		// 	continue;
		// }
		hover(box_in3[i],function(){
			this.style.background='#ffffff';
			var box_x3=$('.gou-x',this)[0];
			box_x3.style.display='block'
		},function(){
			var box_x3=$('.gou-x',this)[0];
			var that=this;
			box_x3.style.display='none';
			that.style.background='#eeeeee';
		})
	}
	
   // 图片边框效果
   function biank(bian){
	   	var box_bk=bian;
		var width=box_bk.offsetWidth;
		var height=box_bk.offsetHeight;
		console.log(width,height)
		hover(box_bk,function(){
			var top=$('.top-bk',this)[0];
			var left=$('.left-bk',this)[0];
			var right=$('.right-bk',this)[0];
			var bottom=$('.bottom-bk',this)[0];
			var that=this;
			animate(top,{width:width},600,function(){
				this.style.width=width;
				})
			animate(bottom,{width:width},600,function(){
				this.style.width=width;
				})
			animate(left,{height:height},600,function(){
				this.style.height=height;
			 	})
			animate(right,{height:height},600,function(){
				this.style.width=height;
				})		
		},function(){
			var top=$('.top-bk',this)[0];
			var left=$('.left-bk',this)[0];
			var right=$('.right-bk',this)[0];
			var bottom=$('.bottom-bk',this)[0];
			animate(top,{width:0},600,function(){
				this.style.width=0;
				})
			animate(bottom,{width:0},600,function(){
				this.style.width=0;
				})
			animate(left,{height:0},600,function(){
				this.style.height=0;
			 	})
			animate(right,{height:0},600,function(){
				this.style.width=0;
				})
		})
   }
   for(var i=0;i<36;i++){
   		biank($('.bian-k')[i])
   }
   

   function biank1(bian){
	   	var box_bk1=bian;
		hover(box_bk1,function(){
			var top1=$('.top-bk',this)[0];
			var left1=$('.left-bk',this)[0];
			var right1=$('.right-bk',this)[0];
			var bottom1=$('.bottom-bk',this)[0];
			var that1=this;
			animate(top1,{width:220},600,function(){
				this.style.width=220;
				})
			animate(bottom1,{width:220},600,function(){
				this.style.width=220;
				})
			animate(left1,{height:260},600,function(){
				this.style.height=260;
			 	})
			animate(right1,{height:260},600,function(){
				this.style.width=260;
				})		
		},function(){
			var top1=$('.top-bk',this)[0];
			var left1=$('.left-bk',this)[0];
			var right1=$('.right-bk',this)[0];
			var bottom1=$('.bottom-bk',this)[0];
			animate(top1,{width:0},600,function(){
				this.style.width=0;
				})
			animate(bottom1,{width:0},600,function(){
				this.style.width=0;
				})
			animate(left1,{height:0},600,function(){
				this.style.height=0;
			 	})
			animate(right1,{height:0},600,function(){
				this.style.width=0;
				})
		})
   }
   for(var i=0;i<8;i++){
   		biank1($('.tema-k')[i])
   }

   function biank12(bian){
	   	var box_bk12=bian;
		hover(box_bk12,function(){
			var top12=$('.top-bk',this)[0];
			var left12=$('.left-bk',this)[0];
			var right12=$('.right-bk',this)[0];
			var bottom12=$('.bottom-bk',this)[0];
			var that12=this;
			animate(top12,{width:198},600,function(){
				// this.style.width=198;
				})
			animate(bottom12,{width:198},600,function(){
				// this.style.width=198;
				})
			animate(left12,{height:250},600,function(){
				// this.style.height=250;
			 	})
			animate(right12,{height:250},600,function(){
				// this.style.width=250;
				})		
		},function(){
			var top12=$('.top-bk',this)[0];
			var left12=$('.left-bk',this)[0];
			var right12=$('.right-bk',this)[0];
			var bottom12=$('.bottom-bk',this)[0];
			animate(top12,{width:0},600,function(){
				this.style.width=0;
				})
			animate(bottom12,{width:0},600,function(){
				this.style.width=0;
				})
			animate(left12,{height:0},600,function(){
				this.style.height=0;
			 	})
			animate(right12,{height:0},600,function(){
				this.style.width=0;
				})
		})
   }
   for(var i=0;i<8;i++){
   		biank12($('.zgtu-k')[i])
   }

   // 品牌轮播效果
   function ping(pai){
		var box_p=pai;
		var img_p=$('.mqxzx1',box_p);

		var left_p=$('.mpxzxan1',box_p)[0];
		var right_P=$('.mpxzxan2',box_p)[0];
		var width_p=parseInt(getStyle(box_p,'width'));
		var next_p=0;
		var n_p=0;
		var flag_p=true;
		function move_p(){
			if(!flag_p){
				return;
			}
			flag_p=false
			next_p=next_p+1
			if(next_p>=img_p.length){
				next_p=0;
			}
			img_p[next_p].style.left=width_p+'px';
			animate(img_p[n_p],{left:-160},600);
			animate(img_p[next_p],{left:0},600,function(){
				flag_p=true
			});
			n_p=next_p;
		}
		right_P.onclick=function(){
			move_p();
		}
		left_p.onclick=function(){
			if(!flag_p){
				return;
			}
			flag_p=true;
			next_p=n_p-1;
			if(next_p<0){
				next_p=img_p.length-1;
			}
			img_p[next_p].style.left=-width_p+'px';
			animate(img_p[n_p],{left:160},600);
			animate(img_p[next_p],{left:0},600,function(){
				flag_p=true;
			});
			n_p=next_p;
		}
	}
	for(var i=0;i<9;i++){
		ping($('.mpxzx')[i])
	}
   	


   	// 超值特卖选项卡

	var pre=$('.temai1bq')
	var imgs=$('.temai1x')
	var sanjiao=$('.sanjiao');
	for(var i=0;i<pre.length;i++){
		pre[i].index=i;
		pre[i].onmouseover=function(){
			for(var j=0;j<pre.length;j++){
				imgs[j].style.display='none'
				sanjiao[j].style.display='none'
				pre[j].style.borderColor='#333333'
			}
			imgs[this.index].style.display='block'
			sanjiao[this.index].style.display='block'
			pre[this.index].style.borderColor='#E5004F'
		}
	}
	// 专柜选项卡
	var pre1=$('.zhuan-x')
	var imgs1=$('.zhuanguixyx')
	var san1=$('.san-1')
	imgs1[0].style.display='block'
	san1[0].style.display='block'
	pre1[0].style.borderColor='#E5004F'
	for(var i=0;i<pre1.length;i++){
		pre1[i].index=i;
		pre1[i].onmouseover=function(){
			for(var j=0;j<pre1.length;j++){
				imgs1[j].style.display='none'
				san1[j].style.display='none'
				pre1[j].style.borderColor='#333333'
				imgs1[j].style.fontWeight='inherit'
			}
			imgs1[this.index].style.display='block'
			san1[this.index].style.display='block'
			pre1[this.index].style.borderColor='#E5004F'
			imgs1[this.index].style.fontWeight='bold'
		}
	}
   
   
   

})