var arr1=['images/wwl_1-2.jpg','images/wwl_2-2.jpg','images/wwl_3-2.jpg','images/wwl_4-2.jpg','images/wwl_5-2.png']
var arr2=['images/wwl_little1-2.png','images/wwl_little2-2.png','images/wwl_little3-2.png','images/wwl_little4-2.png']
var oTop=document.getElementById('top');
var oSlide=oTop.getElementsByClassName('wwl_slide')[0];
var oList=oSlide.getElementsByClassName('wwl_list')[0];
var oView=oSlide.children[0].children[0];
var oUl=oList.children[0];
var aBtn=oUl.children;
var oInfor=oTop.getElementsByClassName('wwl_infor')[0];
var aBtn2=oInfor.children[2].children[0].children[1].children;
var oLess=document.getElementsByClassName('wwl_less')[0];
var oPlus=document.getElementsByClassName('wwl_plus')[0];
var oAmount=document.getElementsByClassName('wwl_amount')[0];
var oMore=document.getElementsByClassName('wwl_moreList')[0];
var bOk=false;
var iNow=0;
function tab(iNow){
	for (var i=0;i<aBtn.length;i++){
		aBtn[i].children[0].className='';
	}
	oView.setAttribute('src',arr1[iNow]);
	aBtn[iNow].children[0].className='wwl_active';
}
function tab2(iNow){
	for (var i=0;i<aBtn2.length;i++){
		aBtn2[i].children[0].className='';
		aBtn2[i].children[0].children[1].className='wwl_icon wwl_icon-correct';
	}
	oView.setAttribute('src',arr2[iNow]);
	aBtn2[iNow].children[0].className='wwl_onfocus';
	aBtn2[iNow].children[0].children[1].className='wwl_icon wwl_icon-correct wwl_onshow';
}
for(var i=0;i<aBtn.length;i++){
	(function (index){
		aBtn[index].onclick=function (){
			iNow=index;
			tab(iNow);
		};
		aBtn[index].onmouseenter=function (){
			iNow=index;
			var timer=null;
			timer=setTimeout(function(){
				tab(iNow)
			},300);
		}
	})(i)
}
for (var i=0;i<aBtn2.length;i++){
	(function (index){
		aBtn2[index].onclick=function (){
			if (!this.bOk) {
				for(var i=0;i<aBtn2.length;i++){
					aBtn2[i].bOk=false;
				}
				iNow=index;
				tab2(iNow);
				this.bOk=true;
				bOk=true;
				console.log(bOk);
				return bOk;
			}else{
				for (var i=0;i<aBtn2.length;i++){
					aBtn2[i].children[0].className='';
					aBtn2[i].children[0].children[1].className='wwl_icon wwl_icon-correct';
					aBtn2[i].bOk=false;
				}
				bOk=false;
				this.bOk=false;
				console.log(bOk);
				return bOk;
			}
		};
		aBtn2[index].onmouseenter=function (){
			aBtn2[index].children[0].children[2].style.display='block';
		}
		aBtn2[index].onmouseleave=function (){
			aBtn2[index].children[0].children[2].style.display='none';
		}
	})(i);
}
oMore.onmouseenter=function (){
	oMore.children[1].style.display='block';
}
oMore.onmouseleave=function (){
	oMore.children[1].style.display='none';
}

var oUl=document.getElementsByClassName('wwl_hidden')[0].children[0];
var oPrev=document.getElementsByClassName('wwl_round-prev')[0];
var oNext=document.getElementsByClassName('wwl_round-next')[0];
oPrev.onclick=function (){
	if (iNow==0) {
		return false;
	}else {
		iNow--;
		move(oUl,{left:0});
		oPrev.className='wwl_icon wwl_round-prev';
		oNext.className='wwl_icon wwl_round-next';
	}
};
oNext.onclick=function (){
	if (iNow==1) {
		return false;
	}else {
		iNow++;
		move(oUl,{left:-oUl.offsetWidth/2});
		oPrev.className='wwl_icon wwl_round-prev1';
		oNext.className='wwl_icon wwl_round-next1';
	}
};
var oWarn=document.getElementsByClassName('wwl_warning')[0]
oLess.onmouseenter=function (){
	if (!bOk) {
		oLess.style.cursor='not-allowed';
	}else if (bOk) {
		if (oAmount.value==1) {
			oLess.style.cursor='not-allowed';
		}else{
			oLess.style.cursor='pointer';
		}
	}
};
oPlus.onmouseenter=function(){
	if (!bOk) {
		oPlus.style.cursor='not-allowed';
	}else if (bOk) {
		oPlus.style.cursor='pointer';
	}
}
oLess.onclick=function (){
	if (!bOk) {
		return false;
	}else if (bOk) {
		if (oAmount.value==1) {
			oWarn.style.display='block';
			setTimeout(function(){
				oWarn.style.display='none';
			},2000);
			return false;
		}else{
			oAmount.value--;
		}
	}
}
oPlus.onclick=function(){
	if (!bOk) {
		return false;
	}else if (bOk) {
		oAmount.value++;
	}
}
oLess.onmousedown=oPlus.onmousedown=function (){
	document.onmousemove=function (){
		return false;
	}
}
aImg=document.getElementsByClassName('wwl_banner-img');
aImg2=document.getElementsByClassName('wwl_onsell-detail')[0].children;
console.log(aImg2)
for(var i=0;i<aImg.length;i++){
	(function (index){
		aImg[index].onmouseenter=function (){
			move(this.children[0].children[0],{width:216});
		};
		aImg[index].onmouseleave=function (){
			move(this.children[0].children[0],{width:210});
		};
	})(i);
}
for(var i=0;i<aImg2.length;i++){
	(function(index){
		aImg2[index].onmouseenter=function(){
			move(this.children[0].children[0],{width:257})
		}
		aImg2[index].onmouseleave=function(){
			move(this.children[0].children[0],{width:250})
		}
	})(i);
}

var oSelect=document.getElementsByClassName('wwl_select')[0];
var oBox=oView.parentNode;
var oMarg=document.getElementsByClassName('wwl_marg')[0];
var oImg=oMarg.children[0];
console.log(oImg)

oBox.onmouseenter=function(){
	var iNum=oView.getAttribute('src');
	oSelect.style.display='block';
	oMarg.style.display='block';
	oImg.setAttribute('src',iNum);
};
oBox.onmouseleave=function (){
	oSelect.style.display='none';
	oMarg.style.display='none';
};
oBox.onmousemove=function (ev){
	var l=ev.pageX-oSelect.offsetWidth/2;
	var t=ev.pageY-oSelect.offsetHeight/2;
	console.log(ev.pageX);
	if (l<0) {
		l=0;
	}else if (l>oBox.offsetWidth-oSelect.offsetWidth) {
		l=oBox.offsetWidth-oSelect.offsetWidth;
	}
	if (t<0) {
		t=0;
	}else if (t>oBox.offsetHeight-oSelect.offsetHeight) {
		t=oBox.offsetHeight-oSelect.offsetHeight;
	}

	oSelect.style.left=l+'px';
	oSelect.style.top=t+'px';

	oImg.style.left=-l*(oImg.offsetWidth-oMarg.offsetWidth)/(oBox.offsetWidth-oSelect.offsetWidth)+'px';
	oImg.style.top=-t*(oImg.offsetHeight-oMarg.offsetHeight)/(oBox.offsetHeight-oSelect.offsetHeight)+'px';
}