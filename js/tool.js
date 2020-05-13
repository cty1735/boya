function carouselpage(element,change,className,array,fangx){
    for (var i = 0; i < array.length; i++) {
        array[i].index = i;
        array[i].onclick = function () {
           
            fangx = this.index * -change;
            console.log(change,fangx);
            
            element.style.left = fangx + 'px';
            for (var j = 0; j < array.length; j++) {
                array[j].className = "";
            }
            array[this.index].className = className;
        }
    }
    }