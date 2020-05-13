var right=document.getElementsByClassName('right')[0];
var rightBox=right.getElementsByClassName("right-move")[0];
var rightBoxUl=rightBox.getElementsByTagName('ul')[0];
var rightBoxUlLis=rightBoxUl.getElementsByTagName('li');
var left=document.getElementsByClassName('left')[0];
var leftUl=left.getElementsByTagName('ul')[0];
var leftUlLi=leftUl.getElementsByTagName('li');
var topm;
console.log(rightBoxUlLis);
for(var i=0;i<leftUlLi.length;i++){
leftUlLi[i].index=i;
leftUlLi[i].onclick=function(){
    topm=this.index*-770;
   rightBox.style.top=topm+'px';


}
}