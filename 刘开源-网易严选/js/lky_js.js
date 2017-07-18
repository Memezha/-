// 顶部'客户服务'下拉菜单和'下载APP'二维码
	//客户服务
	var oCustomService=document.getElementById('customS');
	//客户服务下拉菜单
	var oCustomUl=oCustomService.getElementsByTagName('ul')[0];
	//下载APP
	var oDownload=document.getElementById('download');
	var oDownloadDiv=oDownload.getElementsByTagName('div')[0];
	// console.log(oDownloadDiv)
	oCustomService.onmouseenter=function(){
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			oCustomUl.style.display='block';
		},300)		
	}
	oCustomService.onmouseleave=function(){
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			oCustomUl.style.display='none';
		},300)		
	}
	oDownload.onmouseenter=function(){
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			oDownloadDiv.style.display='block';
		},300)		
	}
	oDownload.onmouseleave=function(){
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			oDownloadDiv.style.display='none';
		},300)		
	}
// 导航栏数据交互
	// 居家
	var jj=[
		{text:'夏凉',pic:'images/lky_xl.png'},
		{text:'被枕',pic:'images/lky_bz.png'},
		{text:'床品件套',pic:'images/lky_cpjt.png'},
		{text:'布艺软装',pic:'images/lky_byrz.png'},
		{text:'家具',pic:'images/lky_jj.png'},
		{text:'家饰',pic:'images/lky_js.png'},
		{text:'灯饰',pic:'images/lky_ds.png'},
		{text:'宠物',pic:'images/lky_cw.png'},
		]
	// 餐厨
	var cc=[
		{text:'锅具',pic:'images/lky_gj.png'},
		{text:'杯壶',pic:'images/lky_bh.png'},
		{text:'功能厨具',pic:'images/lky_gncj.png'},
		{text:'餐具',pic:'images/lky_cj.png'},
		{text:'茶具咖啡具',pic:'images/lky_cjkfj.png'},
		{text:'清洁保鲜',pic:'images/lky_qjbx.png'},
		{text:'刀剪砧板',pic:'images/lky_djzb.png'},
		{text:'厨房小电',pic:'images/lky_cfxd.png'},
		]
	// 配件
	var pj=[
		{text:'功能箱包',pic:'images/lky_gnxb.png'},
		{text:'双肩包',pic:'images/lky_sjb.png'},
		{text:'单肩包',pic:'images/lky_djb.png'},
		{text:'鞋',pic:'images/lky_xie.png'},
		{text:'靴',pic:'images/lky_xue.png'},
		{text:'拖鞋',pic:'images/lky_tx.png'},
		{text:'围巾件套',pic:'images/lky_wjjt.png'},
		{text:'配饰',pic:'images/lky_ps.png'},
		{text:'数码',pic:'images/lky_sm.png'},
		]
	// 服装
	var fz=[
		{text:'内裤',pic:'images/lky_nk.png'},
		{text:'内衣',pic:'images/lky_ny.png'},
		{text:'T恤',pic:'images/lky_tx (2).png'},
		{text:'袜子',pic:'images/lky_wz.png'},
		{text:'丝袜',pic:'images/lky_sw.png'},
		{text:'家居服',pic:'images/lky_jjf.png'},
		{text:'衬衫',pic:'images/lky_cs.png'},
		{text:'毛衣',pic:'images/lky_my.png'},
		{text:'卫衣',pic:'images/lky_wy.png'},
		]
	// 洗护
	var xh=[
		{text:'毛巾',pic:'images/lky_mj.png'},
		{text:'妈咪',pic:'images/lky_xx.png'},
		{text:'寝居',pic:'images/lky_mz.png'},
		{text:'玩具',pic:'images/lky_mbhl.png'},
		{text:'婴童洗护',pic:'images/lky_hf.png'},
		{text:'喂养',pic:'images/lky_ryqj.png'},
		{text:'用具',pic:'images/lky_yj.png'}
		]
	// 婴童
	var yt=[
		{text:'服饰',pic:'images/lky_fs.png'},
		{text:'妈咪',pic:'images/lky_mm.png'},
		{text:'寝居',pic:'images/lky_qj.png'},
		{text:'玩具',pic:'images/lky_wj.png'},
		{text:'婴童洗护',pic:'images/lky_ytxh.png'},
		{text:'喂养',pic:'images/lky_wy (2).png'}
		]
	// 杂货
	var zh=[
		{text:'文具',pic:'images/lky_wj.png'},
		{text:'收纳',pic:'images/lky_sn.png'},
		{text:'出行用品',pic:'images/lky_cxyp.png'},
		{text:'海外',pic:'images/lky_hw.png'},
		{text:'户外',pic:'images/lky_huw.png'},
		{text:'节日礼盒',pic:'images/lky_jrlh.png'}
		]
	// 饮食
	var ys=[
		{text:'糕点',pic:'images/lky_gd.png'},
		{text:'小食',pic:'images/lky_xs.png'},
		{text:'果干',pic:'images/lky_gg.png'},
		{text:'炒货',pic:'images/lky_ch.png'},
		{text:'冲饮',pic:'images/lky_cy.png'},
		{text:'名茶',pic:'images/lky_mc.png'},
		{text:'肉制品',pic:'images/lky_rzp.png'},
		{text:'食材',pic:'images/lky_sc.png'}
		]
	// 志趣
	var zq=[
		{text:'魔兽世界',pic:'images/lky_mssj.png'},
		{text:'炉石传说',pic:'images/lky_lscs.png'},
		{text:'守望先锋',pic:'images/lky_swxf.png'},
		{text:'暗黑破坏神',pic:'images/lky_ahphs.png'},
		{text:'星际争霸',pic:'images/lky_xjzb.png'},
		{text:'风暴英雄',pic:'images/lky_fbyx.png'},
		{text:'梦幻西游',pic:'images/lky_mhxy.png'},
		{text:'大话西游',pic:'images/lky_dhxy.png'},
		{text:'唱片',pic:'images/lky_cp.png'},
		{text:'夏日甜心',pic:'images/lky_xrtx.png'},
		{text:'礼品卡',pic:'images/lky_lpk.png'}
		]
	function navPackage(navId){
		var oNavUl=document.getElementById(navId)
		var oNavJj=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[0];
		var oNavCc=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[1];
		var oNavPj=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[2];
		var oNavFz=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[3];
		var oNavXh=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[4];
		var oNavYt=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[5];
		var oNavZh=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[6];
		var oNavYs=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[7];
		var oNavZq=oNavUl.getElementsByClassName('lky_head_logo_nav_poswrap')[8];
		for(var i=0;i<jj.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+jj[i].pic+'"><p>'+jj[i].text+'</p>';
			oNavJj.appendChild(oNavDiv)
		}
		for(var i=0;i<cc.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+cc[i].pic+'"><p>'+cc[i].text+'</p>';
			oNavCc.appendChild(oNavDiv)
		}
		for(var i=0;i<pj.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+pj[i].pic+'"><p>'+pj[i].text+'</p>';
			oNavPj.appendChild(oNavDiv)
		}
		for(var i=0;i<fz.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+fz[i].pic+'"><p>'+fz[i].text+'</p>';
			oNavFz.appendChild(oNavDiv)
		}
		for(var i=0;i<xh.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+xh[i].pic+'"><p>'+xh[i].text+'</p>';
			oNavXh.appendChild(oNavDiv)
		}
		for(var i=0;i<yt.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+yt[i].pic+'"><p>'+yt[i].text+'</p>';
			oNavYt.appendChild(oNavDiv)
		}
		for(var i=0;i<zh.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+zh[i].pic+'"><p>'+zh[i].text+'</p>';
			oNavZh.appendChild(oNavDiv)
		}
		for(var i=0;i<ys.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+ys[i].pic+'"><p>'+ys[i].text+'</p>';
			oNavYs.appendChild(oNavDiv)
		}
		for(var i=0;i<zq.length;i++){
			var oNavDiv=document.createElement('div');
			oNavDiv.innerHTML='<img src="'+zq[i].pic+'"><p>'+zq[i].text+'</p>';
			oNavZq.appendChild(oNavDiv)
		}
		// 导航鼠标效果
		var aNavBtn=oNavUl.getElementsByTagName('li');
		for(var i=1;i<10;i++){
			aNavBtn[i].onmouseenter=function(){
				var that=this;
				clearTimeout(this.timer)
				this.timer=setTimeout(function(){
					that.children[1].style.display='block';
					that.children[0].className='lky_on';
				},300)				
			}
			aNavBtn[i].onmouseleave=function(){
				var that=this;
				clearTimeout(this.timer)
				this.timer=setTimeout(function(){
					that.children[1].style.display='none';
					that.children[0].className='';
				},300)
			}
		}
	}
	navPackage('lky_nav')
	navPackage('lky_nav_fixed')
// 轮播图
	var olkyLbt=document.getElementsByClassName('lky_head_lbt')[0]
	var alkyLbtPic=document.getElementById('lky_lbt_pic').children;
	var olkyLbtLeft=document.getElementById('lky_lbt_left');
	var olkyLbtRight=document.getElementById('lky_lbt_right');
	var alkyLbtBtn=document.getElementById('lky_lbt_btn').children;
	var lkyNum=0;
	for(var i=0;i<alkyLbtBtn.length;i++){
		alkyLbtBtn[i].index=i;
		alkyLbtBtn[i].onclick=function(){
			lkyNum=this.index;
			lkylbt(lkyNum)
		}
	}
	function lkylbt(num){
		var n=0;
		var abc=num-1;
		var timer=null;
		clearInterval(timer)
		var count=parseInt(1000/16)
		timer=setInterval(function(){
			n++;
			if(abc==-1){
				abc=4;
			}
			alkyLbtPic[num].style.opacity=n/count;
			// alkyLbtPic[abc].style.opacity=(count-n)/count;
			if(n==count){
				clearInterval(timer)
			}
		},16)
		for(var i=0;i<alkyLbtBtn.length;i++){
			alkyLbtBtn[i].className='';
			alkyLbtPic[i].style.display='none';
		}
		alkyLbtBtn[num].className='lky_lbt_on';
		alkyLbtPic[num].style.display='block';		
	}
	olkyLbtLeft.onclick=function(){
		lkyNum--;
		if(lkyNum==-1){
			lkyNum=alkyLbtBtn.length-1;
		}
		lkylbt(lkyNum)
	}
	olkyLbtRight.onclick=function(){
		lkyNum++;
		if(lkyNum==alkyLbtBtn.length){
			lkyNum=0;
		}
		lkylbt(lkyNum)
	}
	//轮播图自动循环
	olkyLbt.timer=setInterval(function(){
		lkyNum++;
		if(lkyNum==alkyLbtBtn.length){
			lkyNum=0;
		}
		lkylbt(lkyNum)
	},3000)
	//鼠标移入暂停
	olkyLbt.onmouseenter=function(){
		clearInterval(this.timer)
	}
	//鼠标移出继续
	olkyLbt.onmouseleave=function(){
		this.timer=setInterval(function(){
		lkyNum++;
		if(lkyNum==alkyLbtBtn.length){
			lkyNum=0;
		}
		lkylbt(lkyNum)
	},3000)
	}
// 吸顶条
	window.onscroll=function(){
		var olkyNavFixed=document.getElementById('lky_nav_fixed_wrap');
		var olkyNav=document.getElementById('lky_nav');
		var lkyScrollTop=document.body.scrollTop;
		var lkyNavTop=olkyNav.offsetTop;
		if(lkyScrollTop>lkyNavTop){
			olkyNavFixed.style.top=0;
			olkyBackTop.style.display='block';
		}
		else{
			olkyNavFixed.style.top='-60px';
			olkyBackTop.style.display='none';
		}
	}
// 侧边栏返回顶部滚动显示
	var olkyBackTop=document.getElementsByClassName('lky_sidebar_backtop')[0];	
	olkyBackTop.onclick=function(){
		var lkyN=0;
		var aaa=document.body.scrollTop;
		var lkyCount=parseInt(500/16);
		var that=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			lkyN++;
			document.body.scrollTop=aaa-aaa*lkyN/lkyCount;
			if(document.body.scrollTop==0){
				clearInterval(that.timer)
			}
		},16)
	}
// 新品首发轮播图
	//新品首发-最外层块
	var olkyXp=document.getElementsByClassName('lky_xpsf')[0]
	//新品首发-左箭头
	var olkyXpLeft=document.getElementsByClassName('lky_xpsf_left')[0];
	//新品首发-右箭头
	var olkyXpRight=document.getElementsByClassName('lky_xpsf_right')[0];
	//新品首发滚动区总包裹框
	var olkyXpBox=document.getElementsByClassName('lky_xpsf_bd_scrollboxwrap')[0];
	// 执行总次数count
	var olkyXpCount=parseInt(500/16);
	//start
	var lkyStart=olkyXpRight.a||-1090;
	//dis
	var lkyDis=1090;
	// 当前执行次数  n
	var olkyXpS=0;
	olkyXpRight.onclick=function(){		
		var self=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			olkyXpS--;
			//obj.a      =start   +    dis*n/count
			olkyXpRight.a=lkyStart+lkyDis*olkyXpS/olkyXpCount;
			//总包裹框左边距=obj.a+'px'
			olkyXpBox.style.left=olkyXpRight.a+'px';
			//只有当n为count的倍数时才停
			if((-olkyXpS)%olkyXpCount==0){
				clearInterval(self.timer)
			}
			//图片自右向左顺序为:附属图3,图1,图2,图3,附属图1;
			//默认位置为图1,此时n=0,当n=-count时,窗口显示图2,以此类推,n=-2*count时窗口在图3,n=count时,窗口在附属图3
			if((-olkyXpS)/olkyXpCount>=2){
				olkyXpS=olkyXpCount;
			}
		},16)
	}
	olkyXpLeft.onclick=function(){		
		var self=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			olkyXpS++;
			olkyXpRight.a=lkyStart+lkyDis*olkyXpS/olkyXpCount
			olkyXpBox.style.left=olkyXpRight.a+'px';	
			if(olkyXpS%olkyXpCount==0){
				clearInterval(self.timer)
			}
			if(olkyXpS/olkyXpCount>=1){
				olkyXpS=-2*olkyXpCount;
			}
		},16)		
	}
	// 自动轮播
	olkyXpRight.timer2=setInterval(function(){	
		var self=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			olkyXpS--;
			olkyXpRight.a=lkyStart+lkyDis*olkyXpS/olkyXpCount;
			olkyXpBox.style.left=olkyXpRight.a+'px';
			if((-olkyXpS)%olkyXpCount==0){
				clearInterval(self.timer)
			}
			if((-olkyXpS)/olkyXpCount>=2){
				olkyXpS=olkyXpCount;
			}
		},16)
	},3000)
	//移入暂停
	olkyXp.onmouseenter=function(){
		clearInterval(olkyXpRight.timer2)
	}
	//移出继续
	olkyXp.onmouseleave=function(){
		olkyXpRight.timer2=setInterval(function(){	
		var self=this;
		clearInterval(this.timer)
		this.timer=setInterval(function(){
			olkyXpS--;
			olkyXpRight.a=lkyStart+lkyDis*olkyXpS/olkyXpCount;
			olkyXpBox.style.left=olkyXpRight.a+'px';
			if((-olkyXpS)%olkyXpCount==0){
				clearInterval(self.timer)
			}
			if((-olkyXpS)/olkyXpCount>=2){
				olkyXpS=olkyXpCount;
			}
		},16)
	},3000)
	}
	//按住拖动
	olkyXpBox.onmousedown=function(ev){
		// 鼠标点击位置
		var oleft=ev.clientX;
		// 鼠标点击时总包裹框左边距
		var aaa=olkyXpBox.offsetLeft;
		olkyXpBox.onmousemove=function(ev){
			//鼠标点击后水平移动距离
			var oleft2=ev.clientX-oleft;
			//鼠标点击时总包裹框左边距实时距离
			var bbb=olkyXpBox.offsetLeft
			if(bbb<=0&&bbb>=-4360){
				this.style.left=aaa+oleft2+'px';
			}
		}
		olkyXpBox.onmouseup=function(ev){
			this.onmousemove=null;
		}
		return false;
	}
// 人气推荐
	var alkyRqtjBtn=document.getElementsByClassName('lky_rqtj_btn');
	var alkyRqtjContent=document.getElementsByClassName('lky_rqtj_bd');
	for(var i=0;i<alkyRqtjBtn.length;i++){
		alkyRqtjBtn[i].index=i;
		alkyRqtjBtn[i].onclick=function(){
			for(var i=0;i<alkyRqtjBtn.length;i++){
				alkyRqtjBtn[i].className='lky_rqtj_btn fl';
				alkyRqtjContent[i].style.display='none';
			}
			this.className='lky_rqtj_btn lky_rqtj_top_on fl';
			alkyRqtjContent[this.index].style.display='block';
		}
	}
// 限时购倒计时
	var lkyCountDown=document.getElementById('lky_countdown');
	var lkyHour=1;
	var lkyMin=59;
	var lkySecond=59;
	lkyCountDown.timer=setInterval(function(){
		lkySecond--;
		if(lkySecond==-1){
			lkyMin--;
			lkySecond=59;
			if(lkyMin==-1){
				lkyMin=59;
				lkyHour--;
				if(lkyHour==-1){
					lkyHour=0;
				}				
			}
		}
		if(lkySecond==0&&lkyMin==0&&lkyHour==0){
			clearInterval(lkyCountDown.timer)
		}
		lkyCountDown.innerHTML=lkyTodou(lkyHour)+'&nbsp&nbsp:&nbsp&nbsp'+lkyTodou(lkyMin)+'&nbsp&nbsp:&nbsp&nbsp'+lkyTodou(lkySecond);
	},1000)
	// 补零函数
	function lkyTodou(number){
		return number<10?'0'+number:number;		
	}