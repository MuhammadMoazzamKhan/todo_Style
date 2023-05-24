let cross = true;
const textarea = document.getElementById("textarea");
function editbuttons(){
    let btn = document.querySelectorAll(".buttons-container")
    if(cross){
       btn[0].classList.remove("visibility")
       btn[1].classList.remove("visibility")
       cross = false;
    }
    else{
        btn[0].className += " visibility ";
        btn[1].className += " visibility ";
        cross = true;
    }
}
function bgimage1(){
    textarea.style.backgroundImage = "url(postimages/pexels-1.jpg)"
}
function bgimage2(){
    textarea.style.backgroundImage = "url(postimages/pexels-2.jpg)"
}
function bgimage3(){
    textarea.style.backgroundImage = "url(postimages/pexels-3.jpg)"
}
function bgimage4(){
    textarea.style.backgroundImage = "url(postimages/pexels-4.jpg)"
}
function bgimage5(){
    textarea.style.backgroundImage = "url(postimages/pexels-5.jpg)"
}
function bgimage6(){
    textarea.style.backgroundImage = "url(postimages/pexels-6.jpg)"
}
function bgimage7(){
    textarea.style.backgroundImage = "url(postimages/pexels-7.jpg)"
}
function bgimage8(){
    textarea.style.backgroundImage = "url(postimages/pexels-8.jpg)"
}
function bgimage9(){
    textarea.style.backgroundImage = "url(postimages/pexels-9.jpg)"
}
function bgimage10(){
    textarea.style.backgroundImage = "url(postimages/pexels-10.jpg)"
}
function bgimage11(){
    textarea.style.backgroundImage = "url(postimages/pexels-11.jpg)"
}
function  textclear(){
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.backgroundImage = ""
    textarea.style.backgroundColor = "rgba(255, 255, 255, 0.8)"

    textarea.value = "";
}