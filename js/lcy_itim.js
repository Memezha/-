var oLcy_prev=document.getElementById('lcy_prev');
	var oLcy_next=document.getElementById('lcy_next');
	var oLcy_ul=document.getElementById('lcy_ul');
	var oLcy_li=oLcy_ul.getElementsByTagName('li');
	var oroww=document.getElementById('roww');
	// alert(oLcy_li.length);
	// 执行总次数count
	var olcyCount=parseInt(1000/30);
	//start
	var lcyStart=oLcy_prev.a||-366;
	//dis
	var lcyDis=366;
	// 当前执行次数  n
	var lcyn=0;
	
	// 自动轮播
	oLcy_next.timer2=setInterval(function(){	
		var self=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			lcyn--;
			oLcy_next.a=lcyStart+lcyDis*lcyn/olcyCount;
			oLcy_ul.style.left=oLcy_next.a+'px';
			if((-lcyn)%olcyCount==0){
				clearInterval(self.timer)
			}
			if((-lcyn)/olcyCount>=7){
				lcyn=olcyCount;
			}
		},16)
	},2000)
	// 移入停止
	oroww.onmouseenter=function(){
		clearInterval(oLcy_next.timer2);
	}
	//移出继续
	oroww.onmouseleave=function(){
		oLcy_next.timer2=setInterval(function(){	
		var self=this;
		clearInterval(this.timer);
		this.timer=setInterval(function(){
			lcyn--;
			oLcy_next.a=lcyStart+lcyDis*lcyn/olcyCount;
			oLcy_ul.style.left=oLcy_next.a+'px';
			if((-lcyn)%olcyCount==0){
				clearInterval(self.timer);
			}
			if((-lcyn)/olcyCount>=7){
				lcyn=olcyCount;
			}
		},16)
	},2000)

	}
	// 右键循环
	oLcy_next.onclick=function(){		
		var _this=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			lcyn--;
			//obj.a      =start   +    dis*n/count
			oLcy_next.a=lcyStart+lcyDis*lcyn/olcyCount;
			//总包裹框=obj.a+'px'
			oLcy_ul.style.left=oLcy_next.a+'px';
			// var left=oLcy_ul.style.left;

			if((-lcyn)%olcyCount==0){
				clearInterval(_this.timer)
				}
			if((-lcyn)/olcyCount>7){
				lcyn=olcyCount;
			}
		},30)	
                       
	};
	// 左键循环
	oLcy_prev.onclick=function(){		
		var _this=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			lcyn++;
			oLcy_next.a=lcyStart+lcyDis*lcyn/olcyCount;
			oLcy_ul.style.left=oLcy_next.a+'px';	
			if(lcyn%olcyCount==0){
				clearInterval(_this.timer)
			}
			if(lcyn/olcyCount>=1){
				lcyn=-7*olcyCount;
			}

		},30)		
	}
















