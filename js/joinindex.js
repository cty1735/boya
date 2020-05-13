var header=document.getElementsByClassName('header')[0];
var headerUl=header.getElementsByTagName('ul')[0];
var headerUllis=headerUl.getElementsByTagName('li');
headerUllis[0].className='active';
for(var i=0;i<headerUllis.length;i++){
    headerUllis[i].index=i;
    headerUllis[i].onclick=function(){
        for(var j=0;j<headerUllis.length;j++){
     headerUllis[j].className='';
        }
        headerUllis[this.index].className="active";
    }
}