(function(){
	let oBox = document.querySelector('.box');
	let oImages = document.querySelector('.images');
	let oImg = oImages.querySelectorAll('.images img');
	let oList = document.querySelector('.list');
	let oLi = oList.querySelectorAll('.list li');
	let len = oLi.length;
	let num = 0;
	let btnleft = document.querySelector('.left');
	let btnright = document.querySelector('.right');
	let index = 1;
	let timer = null;
	let pause = true;
	timer = setInterval(()=>{
		change((index+1)%len);
	},3000);
	oBox.onmouseenter = function(){
		if(pause){
			clearInterval(timer);
			pause = false;
		}   
	};
	oBox.onmouseleave = function(){
		if(pause == false){
			timer = setInterval(()=>{
				change((index+1)%len);
			},3000);
			pause =true;
		}
	};
	
	oLi.forEach((node ,i)=>{
		node.onclick=function(){
			//这里的index是oLi中的每个li的上一次选中的下标去掉类名
			change(i);
		} 
	});
	btnright.onclick=function(){
		change((index+1)%len);
	};
	btnleft.onclick=function(){
		change((index-1+len)%len);
	};
	function change (x){
		oLi[index].classList.remove("addli");
		oImg[index].classList.remove("addimg");
		index = x;
		oLi[index].classList.add("addli");
		oImg[index].classList.add("addimg");
	};
})();