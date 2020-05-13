var right = document.getElementsByClassName('right')[0];
var moveBox = right.getElementsByClassName('move-box')[0];
var moveBoxul = moveBox.getElementsByTagName('ul');
var left = document.getElementsByClassName('left')[0];
var leftul = left.getElementsByTagName('ul')[0];
var leftullis = leftul.getElementsByTagName('li');
var topv = 0;
for (var i = 0; i < leftullis.length; i++) {
    leftullis[i].index = i;
    leftullis[i].onclick = function () {
        topv = -this.index * 1071;
        console.log(topv, this.index);
        moveBox.style.top = topv + 'px';
        for (var i = 0; i < leftullis.length; i++){
            
        }
    }
}

