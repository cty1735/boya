/*
	desc: a function library
	language: JavaScript5.1(ES5)
	version: 2.0
	author: admin
	update: add js animate framework
*/

/**
	function: this is function for array sort
	array: array object for sort
	isUp: up or down with the sort, boolean value(true is up or down)
	return: no return
	author: admin
	date: 2019-12-04
	updateDate:2019-12-04
*/
function arraySort(array,isUp){
	for(var j=0;j<array.length-1;j++){
		for(var i=0;i<array.length-j;i++){
			if(isUp){
				if(array[i] > array[i+1]){
					var temp = array[i+1];
					array[i+1] = array[i];
					array[i] = temp;
				}
			}else{
				if(array[i] < array[i+1]){
					var temp = array[i+1];
					array[i+1] = array[i];
					array[i] = temp;
				}
			}
		}
	}
}

/**
	function: this is function for clean repeat value from array
	array: array object for clean
	return: new array without repeat value
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function clearRepeatValue(array){
	var newArray = [];
	for(var index in array){
		if(newArray.indexOf(array[index]) == -1){
			newArray.push(array[index]);
		}
	}
	return newArray;
}

/**
	function: this is function for generate a string value with defined length
	strLength: string generated with this
	return: generate random string
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function generateStr(strLength){
	var originalStr = "abcdefghijklmnopqrstuvyzABCDEFGHIJKLQRSTUVWXYZ0123456789";
	var originalStrLenght = originalStr.length;
	var str = '';
	for(var i=0;i<strLength;i++){
		var charIndex = parseInt(Math.random() * originalStrLenght);
		str += originalStr.charAt(charIndex);
	}
	return str;
}

/**
	function: this is function for convert css attr(attribute) to camel attr
	cssAttr: css attr
	return: camel attr
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function cssAttr2CamelAttr(cssAttr){
	var camelAttr = '';
	camelAttr = cssAttr.replace(/-([a-z])/g,function(match,$1){
		return $1.toUpperCase();
	})
	return camelAttr;
}

/**
	function: this is function for convert camel attr to css attr(attribute)
	cssAttr: camel attr
	return: css attr
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function camelAttr2CssAttr(camelAttr){
	var cssAttr = '';
	cssAttr = camelAttr.replace(/([A-Z])/g,function(match,$1){
		return "-"+$1.toLowerCase();
	})
	return cssAttr;
}

/**
	function: this is function for find all previousSiblings 
	element: current element tag
	return: all previousSiblings collection
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function previousSiblings(element){
	var prevs = [];
	var prevSibling = element.previousSibling;
	if(prevSibling){ 
		prevSibling.nodeType != 3 && prevs.push(prevSibling);
		while(prevSibling = prevSibling.previousSibling){
			prevSibling.nodeType != 3 && prevs.push(prevSibling);
		}
	}
	return prevs;
}

/**
	function: this is function for find all nextSiblings 
	element: current element tag
	return: all all nextSiblings collection
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function nextSiblings(element){
	var next = [];
	var nextSibling = element.nextSibling;
	if(nextSibling){ 
		nextSibling.nodeType != 3 && next.push(nextSibling);
		while(nextSibling = nextSibling.nextSibling){
			nextSibling.nodeType != 3 && next.push(nextSibling);
		}
	}
	return next;
}

/**
	function: this is function for add a class for element 
	element: element tag
	className: class for add to element
	return: no return
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function addClass(element,className){
	var peveClasses = element.className;
	var currentClasses = "";
	if(peveClasses == "" || peveClasses == undefined){
		currentClasses = className;
	}else{
		currentClasses = peveClasses.concat(" ").concat(className);
	}
	element.className = currentClasses;
}

/**
	function: this is function for remove a class for element 
	element: element tag
	className: class for remove from element
	return: no return
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function removeClass(element,className){
	var peveClasses = element.className;
	var currentClasses = peveClasses.replace(className,"").trim();
	element.className = currentClasses;
}

/**
	function: this is function for verify if element has a exist class 
	element: element tag
	className: class for verify from element
	return: true: class exist, flase: class not exist
	author: admin
	date: 2019-12-09
	updateDate:2019-12-09
*/
function hasClass(element,className){
	var peveClasses = element.className;
	var flag = false;
	if(peveClasses.indexOf(className) != -1){
		flag = true;
	}
	return flag;
}

/**
	通过计算后的样式获取一个对象的某一个css属性的值
	element: dom对象
	attr: 属性名称
	IE低版本下面是通过小驼峰进行取值的
	IE高版本和高级浏览器是通过css原生样式名取值
*/
function fetchElementStyleValue(element,attr){
	var value;
	if(window.getComputedStyle){
		//IE9\10\11\chrome\ff..
		attr = attr.replace(/([A-Z])/g, function(match,$1){
			return "-".concat($1.toLowerCase())
		});
		value = getComputedStyle(element)[attr];
	}else{
		//IE5\6\7\8
		attr = attr.replace(/-([a-z])/g, function(match,$1){
			return $1.toUpperCase();
		})
		value = element.currentStyle[attr];
	}
	var newValue = parseInt(value);
	(newValue != 0 && !newValue) && (newValue =  value)
	return newValue;
}

/*
	js animation framework
	element: dom element for animation
	targetJson: target for the animation
	animateDuration: the whole animation time
	callback: do something after animation
*/
function animate(element,targetJson,animateDuration,callback){

	var duration = 20;
	if(navigator.userAgent.indexOf("MSIE") != -1){
		duration = 50;
	}
	var totalFrames = animateDuration / duration;
	var initJson = {};
	for(var attr in targetJson){
		initJson[attr] = fetchElementStyleValue(element,attr);
	}
	if(initJson["opacity"] == undefined){
		initJson["opacity"] = 1;
	}
	var totalChangeJson = {};
	for(var attr in targetJson){
		totalChangeJson[attr] = targetJson[attr] - initJson[attr];
	}
	var frameChangeJson = {};
	for(var attr in targetJson){
		frameChangeJson[attr] = totalChangeJson[attr] / totalFrames;
	}
	element.isAnimated = true;
	var frameCount = 0;
	var interval = setInterval(function(){
		frameCount++;
		//业务逻辑
		for(var attr in targetJson){
			initJson[attr] += frameChangeJson[attr];
			if(attr == "opacity"){
				element.style.opacity = initJson["opacity"];
				element.style.filter = "alpha(opacity="+initJson["opacity"]*100+")";
			}else{
				element.style[attr] = initJson[attr] + "px";
			}
		}
		if(frameCount >= totalFrames){
			for(var attr in targetJson){
				if(attr == "opacity"){
					element.style["opacity"] = targetJson["opacity"];
					element.style.filter = "alpha(opacity="+targetJson["opacity"]*100+")";
				}else{
					element.style[attr] = targetJson[attr] + "px";
				}
			}
			clearInterval(interval);
			callback && callback.call(element);
			element.isAnimated && (element.isAnimated = false)
		}
	},duration);
}
