function includePopupHTML(){
    html ='<div id="popup"><span id="close" onclick="closePopUp()"><img id="npop" src="../images/close.jpg" alt=""></span><img id="leftarrow" src="../images/left.png" alt=""><img id="rightarrow" src="../images/right.png" alt=""><img id="mainPopImage" src="../images/download1.jpeg" alt=""></div>';

let popdiv = document.createElement('div');
popdiv.innerHTML = html;
document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;
function imagePopupInit(target){
    img = document.getElementsByClassName(target);
    console.log(img);
    for(var i=0; i<img.length;i++){
        img[i].style.cursor = 'pointer';

        img[i].addEventListener('click',function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("popup").style.display = 'block';
            checkArrow();
        })
    }
    includePopupHTML();
    document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
    });
    document.getElementById('leftarrow').addEventListener('click',function(){
        previmg();
    });
}

function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("popup").style.display = 'none';
}

function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

function getCurrentImage(){
    for(var i =0; i<img.length;i++){
        if(img[i].src==document.getElementById("mainPopImage").src ){
            current = i;
        }
    }
}
function checkArrow(){
    getCurrentImage();
    if(current=="0"){
        document.getElementById('leftarrow').style.display='none';
        document.getElementById('rightarrow').style.display='block';
    }else if(current==img.length-1){
        document.getElementById('rightarrow').style.display='none';
        document.getElementById('leftarrow').style.display='block';
    }else{
        document.getElementById('leftarrow').style.display='block';
        document.getElementById('rightarrow').style.display='block';
    }
}