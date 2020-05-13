var banner = document.getElementsByClassName('banner')[0];
var moveBox = banner.getElementsByClassName('move-box')[0];
var page = document.getElementsByClassName('page')[0];
var pageul = page.getElementsByTagName('ul')[0];
var pageullis = pageul.getElementsByTagName('li');
pageullis[0].className = 'white';
var product = document.getElementsByClassName('product')[0];
var moveBoxtwo = product.getElementsByClassName('move-box')[0];

var ul = moveBoxtwo.getElementsByTagName('ul');
var hd = document.getElementsByClassName('hd')[0];
var hdul = hd.getElementsByTagName('ul')[0];
var hdullis = hdul.getElementsByTagName('li');

var frameindex = 0;
var left=0;
var productleft=0
var count = 0;
var intervalbanner;
var intervalproduct;
// run(moveBox,1920,'white',pageullis);
// run(moveBoxtwo,1000,"blue",hdullis);
//控制当鼠标移入banner时动画停止离开时播放
bannerrun();

banner.onmouseenter = function () {
    clearInterval(intervalbanner);
}

banner.onmouseleave = function () {
    bannerrun();
  
}
//控制当鼠标移入product时动画停止离开时播放
productrun();
hd.onmouseenter = function () {
    clearInterval(intervalproduct);
}

hd.onmouseleave = function () {
    productrun();
  
}
// product区域动画轮播
 hdullis[0].className = "green";
 function productrun(){

    intervalproduct = setInterval(function () {
    productleft -= 1000;
    moveBoxtwo.style.left = productleft + 'px';
    if (productleft < -1000 * 2) {
        productleft = 0;
        moveBoxtwo.style.left = '0px';
    }
    frameindex = productleft / -1000;
    for (var j = 0; j < hdullis.length; j++) {
        hdullis[j].className = "";
    }
    console.log(hdullis[frameindex]);
    hdullis[frameindex].className = 'green';
}, 2000)

 }



//banner区域轮播动画
function bannerrun(){
   intervalbanner = setInterval(function () {
        left -= 1920;
        moveBox.style.left = left + 'px';
        if (left < -1920 * 3) {
            left = 0;
            moveBox.style.left = '0px';
        }
        frameindex = left / -1920;
        for (var j = 0; j < pageullis.length; j++) {
            pageullis[j].className = "";
        }
        console.log(pageullis[frameindex]);
        pageullis[frameindex].className = "white";
    }, 2000)
}

//点击实现换图功能
carouselpage(moveBox,1920,"white",pageullis,left);
carouselpage(moveBoxtwo,1000,"green",hdullis,left);


// function run(element,change,className,array) {
//     interval = setInterval(function () {
//         left -= change;
//         element.style.left = left + 'px';
//         if (left < -change * 3) {
//             left = 0;
//             element.style.left = '0px';
//         }
//         frameindex = left / -change;
//         for (var j = 0; j < array.length; j++) {
//             array[j].className = "";
//         }
//         console.log(array[frameindex]);
//         array[frameindex].className = className;
//     }, 2000)
// }



// for (var n = 0; n < hdullis.length; n++) {
//     hdullis[n].index = n;
//     hdullis[n].onclick = function () {
//         console.log(this);
//         left = this.index * -1000;
//         moveBoxtwo.style.left = left + 'px';
//         for (var j = 0; j < hdullis.length; j++) {
//             hdullis[j].className = "";
//         }
//         hdullis[this.index].className = "blue";
//     }
// }
