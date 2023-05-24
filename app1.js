const text = document.getElementById("textarea");
function bold(b){
    if(text.style.fontWeight == "bold"){
        text.style.fontWeight = "normal"
    }
    else{
        text.style.fontWeight = "bold"
    }
}
function italic(i){
    if(text.style.fontStyle == "italic"){
        text.style.fontStyle = "normal";
    }else{
        text.style.fontStyle = "italic"
    }
}
function underline(u){
    if(text.style.textDecoration == "underline"){
        text.style.textDecoration = "none";
    }else{
        text.style.textDecoration = "underline"
        
    }

}
function linethrough(t){
    if(text.style.textDecoration == "line-through"){
        text.style.textDecoration = "none";
    }else{
        text.style.textDecoration = "line-through"
    }
}
function left(l){
    if(text.style.textAlign == "left"){
        text.style.textAlign = "left";
    }else{
        text.style.textAlign = "left"
    }
}
function center(r){
    if(text.style.textAlign == "center"){
        text.style.textAlign = "left";
    }else{
        text.style.textAlign = "center"
    }
}
function right(r){
    if(text.style.textAlign == "right"){
        text.style.textAlign = "left";
    }else{
        text.style.textAlign = "right"
    }
}
function color(color){
    let value = color.value;
    text.style.color = value;
}
function bgcolor(bgcolor){
    let value = bgcolor.value;
    text.style.backgroundColor = value;
}
function fontsize(font){
    let value = font.value;
    text.style.fontSize = value+"px";
}


