function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
	options=options||{};
	options.duration=options.duration||1000;
	options.easing=options.easing||'ease-out';
	
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			start[name]=1;
		};
		
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.duration/16);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var cur=start[name]+dis[name]*Math.pow(n/count,3);
					break;
				case 'ease-out':
					var cur=start[name]+dis[name]*(1-Math.pow(1-n/count,3));
					break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},16);
}




















