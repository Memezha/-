var aClose = document.getElementsByClassName('z_close');
var aInput = document.getElementsByTagName('input');
var datalist = document.getElementById('mail');
var Account = document.getElementById('input_account');
var Pwd = document.getElementById('pwd');
var rePwd = document.getElementById('repwd');
var iNow = 0;
var phone = document.getElementById('phone');
//var iNput_account=document.getElementById('input_account')

/*=======================function start=================================*/
function sj1() { //文本框获得焦点时，变蓝
	aInput[iNow].Placeholder = aInput[iNow].placeholder;
	aInput[iNow].placeholder = '';
	aInput[iNow].style.border = '1px solid #4aafe9';
	aInput[iNow].addEventListener('input', function(e) {
		sj3();
	}, false);
	aInput[iNow].addEventListener('blur', function(e) {
		sj2();
	}, false);
}

function sj2() { //文本框失去焦点后，变灰
	aInput[iNow].style.border = '1px solid #a9a9a9';
	aInput[iNow].placeholder = aInput[iNow].Placeholder;
}

function sj3() { //文本框有文字时，显示 X
	aClose[iNow].style.display = 'block';
}
//                 function 👆👆 end

//function调用

for(var i = 0; i < aInput.length; i++) {
	aInput[i].index = i;
	aInput[i].addEventListener('focus', function() {
		iNow = this.index;
		sj1();
	}, false);
}

/*=========================datalist动态匹配 start=========================*/

for(var i = 0; i < aClose.length; i++) {
	aClose[i].addEventListener('click', function() {
		this.style.display = 'none';
		this.parentElement.children[1].value = '';
	}, false);
}
for(var i = 0; i < datalist.children.length; i++) {
	datalist.children[i].V = datalist.children[i].value;
}
Account.addEventListener('input', function() {
	for(var i = 0; i < datalist.children.length; i++) {
		datalist.children[i].value = this.value + datalist.children[i].V;
	}
}, false);

//                  end 👆👆
//判断账号
 
input_account.addEventListener('blur', function() {
	var oCjb = document.getElementById('cjb0');
	if((input_account.value.length > 0) && (input_account.value.length < 6) || (input_account.value.length > 18)) {
		//      alert('密码须由6-16个字符组成，区分大小写');
		oCjb.children[4].style.display = 'block';

	} else {
		oCjb.children[4].style.display = 'none';
	}
}, false);
//验证密码
pwd.addEventListener('blur', function() {
	var oCjb = document.getElementById('cjb');
	if((pwd.value.length > 0) && (pwd.value.length < 6) || (pwd.value.length > 16)) {
		//      alert('密码须由6-16个字符组成，区分大小写');
		oCjb.children[3].style.display = 'block';

	} else {
		oCjb.children[3].style.display = 'none';
	}
}, false);
rePwd.addEventListener('blur', function() {
	var oCjb = document.getElementById('cjb1');
	if(rePwd.value != pwd.value) {
		//      alert('');
      oCjb.children[3].style.display = 'block';
	}else{
		oCjb.children[3].style.display = 'none';
	}
}, false);

//验证手机号
phone.addEventListener('input', function() {
var oCjb = document.getElementById('cjb2');
	if((phone.value.length > 0) && (phone.value.length < 11) || (isNaN(phone.value))) {
		//      alert('');
 oCjb.children[3].style.display = 'block';
	}else{
		 oCjb.children[3].style.display = 'none';
	}
}, false);