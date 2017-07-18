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
// 吸顶条
	window.onscroll=function(){
		var olkyNavFixed=document.getElementById('lky_nav_fixed_wrap');
		var olkyNav=document.getElementById('lky_nav');
		var lkyScrollTop=document.body.scrollTop;
		var lkyNavTop=olkyNav.offsetTop;
		if(lkyScrollTop>lkyNavTop){
			olkyNavFixed.style.top=0;
		}
		else{
			olkyNavFixed.style.top='-60px';
		}
	}