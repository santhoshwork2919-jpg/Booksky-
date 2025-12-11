var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbutton = document.getElementById("addbtn")

// function disp(){
//     popupoverlay.style.display="block"
//     popupoverlay.style.display="block"
//     popupoverlay.style.display="block"
// }
popupbutton.addEventListener("click",function(){
     popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtw = document.getElementById("cancelpop")
cancelbtw.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook =document.getElementById("addbook")
var booktitle=document.getElementById("bookname")
var bookauthor=document.getElementById("bookauthor")
var bookdescp=document.getElementById("bookdescp")

function add(){
    
}
