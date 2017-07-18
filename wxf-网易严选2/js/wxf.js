
window.onload=function(){
			
			
	//banner-选项卡：
			var Banner2=document.getElementById('banner2');
			var  aImg=Banner2.getElementsByTagName('img');
		
			var  aBtn=Banner2.getElementsByTagName('input');
			var  z=document.getElementById('zjt');
			var  y=document.getElementById('yjt');
			timer=null;
			iNow=0;
			for (var i=0;i<aBtn.length; i++){
				  aBtn[i].index=i;
				  aBtn[i].onmouseover=function(){
                            iNow=this.index;
                            tab();
			};}
//-----------------------------------------------//封装函数
		function tab(){
				  	        for(var  i=0; i<aBtn.length;i++){
				  	        	aBtn[i].className=' ';
				  	        	aImg[i].className=' ';
				  	        }
				  	       aBtn[iNow].className='onb';
				  	        aImg[iNow].className='on';
				  	     }
			//-----------------------------------------         
	z.onclick=function(){
		 iNow--;
		if(iNow==-1){ iNow=aBtn.length-1;}
		      tab();
	}
	
	function next(){
		 iNow++;
		if(iNow==aBtn.length){ iNow=0};
		      tab();
	}
		y.onclick=next;

	clearInterval;	
	timer=setInterval(next,2000);
//====================================-banner end

//---------window 结束	标签	
	};
	
	
	
//=========All end=====================