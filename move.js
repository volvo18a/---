window.onload = function(){
//	var oDiv = document.getElementsByTagName('div');
	var oDiv1 = document.getElementById('div1');
	var oDiv2 = document.getElementById('div2');

	oDiv1.onmouseover = function() {
		startMove(this, 'opacity', 100);
	}
	oDiv1.onmouseout = function() {
		startMove(this, 'opacity', 30);
	}

	oDiv2.onmouseover = function() {
		startMove(this, 'width', 300);
	}
	oDiv2.onmouseout = function() {
		startMove(this, 'width', 100);
	}

/*	for (var i = 0; i < oDiv.length; i++) {
		oDiv[i].timer = null;

		oDiv[i].onmouseover = function(){
			startMove(this, 'opacity', 100);
		}
		oDiv[i].onmouseout = function(){
			startMove(this, 'opacity', 30);
		}
	}
	*/
}

function getStyle(obj, name){
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, attr, iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if (attr == 'opacity') {
			//处理小数近似值
			cur = Math.round(parseFloat(getStyle(obj, attr))*100);
		}else{
			cur = parseInt(getStyle(obj, attr));
		}
		var speed = (iTarget - cur)/6;
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

		if (cur == iTarget) {
			clearInterval(obj.timer)
		}else{
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:'+ (cur+speed) +')';
				obj.style.opacity = (cur+speed)/100;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30);

}