let app = document.getElementById('wwwapp');
let h2 = document.querySelector('#wwwapp h2');
let h1 = document.querySelector('#wwwapp h1')

function countTime(){
	let now = new Date();
	let y = now.getFullYear();
	let month = now.getMonth()+ 1;
	let d = now.getDate();
	let h = now.getHours();
	h = h<10?('0'+h):h;
	let m = now.getMinutes();
	m = m<10?('0'+m):m;
	let s = now.getSeconds();
	s = s<10?('0'+s):s;
	let arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	let day = now.getDay();
	let newDay = arr[day];
	h1.innerText = '现在是：'+y+'年 '+month+'月'+d+'日 '+h+'时'+m+'分'+s+'秒 '+newDay;
	if(h=='07'&&m==10){
		h2.style.display = 'block';
		h2.innerText = '早上好，新的一天开始了!';
	} else if(h=='09'&&m==50){
		h2.style.display = 'block';
		h2.innerText = '上午好，一日之际在于晨!';
	}else if(h==12&&m==20){
		h2.style.display = 'block';
		h2.innerText = '中午好，人是铁饭是钢，一顿不出饿得慌!';
	}else if(h==15&&m==20){
		h2.style.display = 'block';
		h2.innerText = '下午好，继续奋斗吧，少年!';
	}else if(h==22&&m==10){
		h2.style.display = 'block';
		h2.innerText = '晚上好，夜深了注意休息!';
	}else{
		h2.style.display = 'none';
	}
	setTimeout(countTime,1000);
}
countTime();