// https://api.github.com/users/NicholeKing

var user = document.querySelector("#allUsers");

async function getInfo() {
    var myuser = document.querySelector("#myUser").value;
    console.log(myuser);
    var response = await fetch("https://api.github.com/users/" + myuser);
    var coderData = await response.json();
    console.log(coderData);
    createUser(coderData);
}

function createUser(data) {
    var res = 
    `<div id="user">
        <h1>${data.name} <span id="gray">${data.login}</span></h1>
        <img src="${data.avatar_url}" alt="user">
        <h3>Location: ${data.location}</h3>
        <h3>Visit <a href="${data.html_url}">Profile<a/></h3>
    </div>`;
    user.innerHTML = res + user.innerHTML;
}

async function getSetInfo(name) {
    var response = await fetch("https://api.github.com/users/" + name);
    var coderData = await response.json();
    createUser(coderData);
}

var allTheusers = ["NicholeKing", "bmwoodside", "kearnol"];

for(var i = 0; i < allTheusers.length; i++){
    getSetInfo(allTheusers[i]);
}