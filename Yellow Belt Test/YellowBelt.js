console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function accept() {
    cookieDiv.remove();
}
function swap (){
    document.querySelector("#hoverbox").setAttribute("src","images/assets/succulents-1.jpg")

}
function swapback(){
    document.querySelector("#hoverbox").setAttribute("src", "images/assets/succulents-2.jpg")
}