var button1 = document.getElementById("button1");
var txtButton = document.getElementById("txtButton");

button1.onmouseenter = function(){
    button1.style.borderColor = "red";
    txtButton.style.color = "red";
}
button1.onmouseleave = function(){
    button1.style.borderColor = "#fff";
    txtButton.style.color = "#fff";
}

var img = document.getElementById("galleryID")
var img2 = document.getElementById("galleryID2")
var img3 = document.getElementById("galleryID3")
var img4 = document.getElementById("galleryID4")
var img5 = document.getElementById("galleryID5")
var img6 = document.getElementById("galleryID6")
var img7= document.getElementById("galleryID7")
var img8 = document.getElementById("galleryID8")
var img9 = document.getElementById("galleryID9")


img.onclick = function(){
    img.style.transform = "scale(200%)";
    img.style.transition = "transform 1000ms, opacity 1000ms ";   
    img.style.position = "relative ";   
    img.style.zIndex = " 9"; 
    img2.style.zIndex = " 0";   
    img4.style.zIndex = " 0";   
    
}
img.onmouseleave = function(){
    img.style.transform = "scale(100%)";
    img.style.position = "relative ";   
     
}


img2.onclick = function(){
    img2.style.transform = "scale(200%)";
    
    img2.style.transition = "transform 1000ms, opacity 1000ms "; 
    img2.style.position = "relative ";   
    img2.style.zIndex = " 9";   
    img3.style.zIndex = " 0";   
    img.style.zIndex = " 0";   
    img4.style.zIndex = " 0";   
    img6.style.zIndex = " 0";   
}
img2.onmouseleave = function(){
    img2.style.transform = "scale(100%)";
    img2.style.transition = "transform 1000ms, opacity 1000ms "; 
    img2.style.position = "relative ";   
     
      
}
img3.onclick = function(){
    img3.style.transform = "scale(200%)";
    img3.style.transition = "transform 1000ms, opacity 1000ms ";   
    img3.style.position = "relative ";   
    img3.style.zIndex = " 9";  
    img2.style.zIndex = " 0"; 
    img6.style.zIndex = " 0"; 
}
img3.onmouseleave = function(){
    img3.style.transform = "scale(100%)";
    img3.style.transition = "transform 1000ms, opacity 1000ms "; 
    img3.style.position = "relative ";   
      
}
/*------------------------*/ 
img4.onclick = function(){
    img4.style.transform = "scale(200%)";
    img4.style.transition = "transform 1000ms, opacity 1000ms ";   
    img4.style.position = "relative ";   
    img4.style.zIndex = " 9";  
    img.style.zIndex = " 0"; 
    img2.style.zIndex = " 0"; 
    img5.style.zIndex = " 0"; 
    img7.style.zIndex = " 0"; 
    img8.style.zIndex = " 0"; 
}
img4.onmouseleave = function(){
    img4.style.transform = "scale(100%)";
    img4.style.position = "relative ";   
}

img5.onclick = function(){
    img5.style.transform = "scale(200%)";
    img5.style.transition = "transform 1000ms, opacity 1000ms ";   
    img5.style.position = "relative ";   
    img5.style.zIndex = " 9";  
    img.style.zIndex = " 0"; 
    img2.style.zIndex = " 0"; 
    img3.style.zIndex = " 0"; 
    img4.style.zIndex = " 0"; 
    img6.style.zIndex = " 0"; 
    img7.style.zIndex = " 0"; 
    img8.style.zIndex = " 0"; 
    img9.style.zIndex = " 0"; 
}
img5.onmouseleave = function(){
    img5.style.transform = "scale(100%)";
    img5.style.position = "relative ";   
}

img6.onclick = function(){
    img6.style.transform = "scale(200%)";
    img6.style.transition = "transform 1000ms, opacity 1000ms ";   
    img6.style.position = "relative ";   
    img6.style.zIndex = " 9";  
    img2.style.zIndex = " 0"; 
    img3.style.zIndex = " 0"; 
    img5.style.zIndex = " 0"; 
    img8.style.zIndex = " 0"; 
    img9.style.zIndex = " 0"; 
}
img6.onmouseleave = function(){
    img6.style.transform = "scale(100%)";
    img6.style.position = "relative ";   
      
}
/* --------------------------*/
img7.onclick = function(){
    img7.style.transform = "scale(200%)";
    img7.style.transition = "transform 1000ms, opacity 1000ms ";   
    img7.style.position = "relative ";   
    img7.style.zIndex = " 9";  
    img4.style.zIndex = " 0"; 
    img5.style.zIndex = " 0"; 
    img8.style.zIndex = " 0"; 
    img9.style.zIndex = " 0"; 
}
img7.onmouseleave = function(){
    img7.style.transform = "scale(100%)";
    img7.style.position = "relative ";   
}

    img8.onclick = function(){
    img8.style.transform = "scale(200%)";
    img8.style.transition = "transform 1000ms, opacity 1000ms ";   
    img8.style.position = "relative ";   
    img8.style.zIndex = " 9";  
    img7.style.zIndex = " 0"; 
    img9.style.zIndex = " 0"; 
    img4.style.zIndex = " 0"; 
    img5.style.zIndex = " 0"; 
    img6.style.zIndex = " 0"; 
}
img8.onmouseleave = function(){
    img8.style.transform = "scale(100%)";
    img8.style.position = "relative ";   
}

img9.onclick = function(){
    img9.style.transform = "scale(200%)";
    img9.style.transition = "transform 1000ms, opacity 1000ms ";   
    img9.style.position = "relative ";   
    img9.style.zIndex = " 9";  
    img6.style.zIndex = " 0"; 
    img5.style.zIndex = " 0"; 
    img8.style.zIndex = " 0";    
}
img9.onmouseleave = function(){
    img9.style.transform = "scale(100%)";
    img9.style.position = "relative ";   
}


/*кнопки*/

var buttonAnton = document.getElementById("buttonAnton")
var txtAnton = document.getElementById("txtAnton")

buttonAnton.onmouseenter = function(){
    buttonAnton.style.borderColor = "red";
    txtAnton.style.color = "red";
}
buttonAnton.onmouseleave = function(){
    buttonAnton.style.borderColor = "black";
    txtAnton.style.color = "black";
}

var buttonArtem = document.getElementById("buttonArtem")
var txtArtem = document.getElementById("txtArtem")

buttonArtem.onmouseenter = function(){
    buttonArtem.style.borderColor = "red";
    txtArtem.style.color = "red";
}
buttonArtem.onmouseleave = function(){
    buttonArtem.style.borderColor = "black";
    txtArtem.style.color = "black";
}




var buttonKsenia = document.getElementById("buttonKsenia")
var txtKsenia = document.getElementById("txtKsenia")

buttonKsenia.onmouseenter = function(){
    buttonKsenia.style.borderColor = "red";
    txtKsenia.style.color = "red";
}
buttonKsenia.onmouseleave = function(){
    buttonKsenia.style.borderColor = "black";
    txtKsenia.style.color = "black";
}


var buttonSasha = document.getElementById("buttonSasha")
var txtSasha = document.getElementById("txtSasha")

buttonSasha.onmouseenter = function(){
    buttonSasha.style.borderColor = "red";
    txtSasha.style.color = "red";
}
buttonSasha.onmouseleave = function(){
    buttonSasha.style.borderColor = "black";
    txtSasha.style.color = "black";
}



var buttonVlad = document.getElementById("buttonVlad")
var txtVlad = document.getElementById("txtVlad")

buttonVlad.onmouseenter = function(){
    buttonVlad.style.borderColor = "red";
    txtVlad.style.color = "red";
}
buttonVlad.onmouseleave = function(){
    buttonVlad.style.borderColor = "black";
    txtVlad.style.color = "black";
}