var left=document.getElementsByClassName('left')[0];
var leftBox=left.getElementsByClassName('left-box')[0];
var leftul=leftBox.getElementsByTagName('ul');
var pages=left.getElementsByClassName('pages')[0]
var aBtn=pages.getElementsByTagName('a');
for(var i=0;i<aBtn.length;i++){
    aBtn[i].index=i;
    aBtn[i].onclick=function(){
        var left=this.index*-730;
       leftBox.style.left=left+'px';
    }
}