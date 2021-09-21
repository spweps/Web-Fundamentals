var likes=[3,6,2100]
var span=[
    document.querySelector("#likes1"),
    document.querySelector("#likes2"),
    document.querySelector("#likes3"),
];
function like(idx) {
    console.log("Liked");
    likes[idx]++;
    span[idx].innerHTML=likes[idx]+"likes";
    console.log(likes[idx]);
    console.log(span[idx]);
}