let picture = {
    src : ["1.jpg","2.jpg" , "3.jpg" , "4.jpg" ,"5.jpg" ,"6.png" ,"7.png","8.jfif" , "9.jpg"] , 
    title : ["Sekil1" , "Sekil2", "Sekil3","Sekil4","Sekil5" , "Sekil6", "Sekil7" ,"Sekil 8" , "Sekil9"]
}
let pp = picture.src.length;
let nxt = document.getElementById("next");
let prv = document.getElementById("prev");
let i = 0;
let imgs = picture.src;

onload = function(){
    show();
}


nxt.onclick = function(){
    Next();
}

prv .onclick = function(){
    Prev();
}
function Next(){
    if(i<pp-1){
        i++;
    }
    else{
        i=0;
    }
    show();
}
function Prev(){
    if(i==0){
        i=pp;
    }
    i--;
    show();
}










function show(){
    document.getElementById("slider").style.backgroundImage = `url(img/${imgs[i]})`;
    document.getElementById("title").innerHTML = picture.title[i];
}




