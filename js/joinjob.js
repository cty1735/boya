var header = document.getElementsByClassName('header')[0];
var headerUl = header.getElementsByTagName('ul')[0];
var headerUllis = headerUl.getElementsByTagName('li');
var nav = document.getElementsByClassName('nav')[0];
var navUl = nav.getElementsByTagName("ul")[0];
var navUlLis = navUl.getElementsByTagName("li");
var contentText = document.getElementsByClassName("content-text")[0];
var contentTextUl = contentText.getElementsByTagName('ul')[0];
var contentTextUlLis = contentTextUl.getElementsByTagName('li');
console.log(contentTextUlLis);



navUlLis[0].className = 'on';
headerUllis[1].className = 'active';
contentTextUlLis[0].className='block';
var top = 0;
//导航栏点击换色
for (var i = 0; i < headerUllis.length; i++) {
    headerUllis[i].index = i;
    headerUllis[i].onclick = function () {
        for (var j = 0; j < headerUllis.length; j++) {
            headerUllis[j].className = '';
        }
        headerUllis[this.index].className = "active";

    }
}
//内容导航换色
for (var a = 0; a < navUlLis.length; a++) {
    navUlLis[a].index = a;
    navUlLis[a].onclick = function () {
      for (var c = 0; c < contentTextUlLis.length; c++) {
            contentTextUlLis[c].className='';
        }
        contentTextUlLis[this.index].className='block'
        for (var b = 0; b < headerUllis.length; b++) {
            navUlLis[b].className = '';
        }

        navUlLis[this.index].className = "on";
    }
}
