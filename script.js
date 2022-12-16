console.log("page loaded...");

// edit profile button
function changeName() {
    var name = document.querySelector("#fullName");
    if (name.innerText == "Fifth Hokage") {
        name.innerText = "Naruto Uzumaki";
    } else {
        name.innerText = "Fifth Hokage";
    }
}

// connection column
function accept(e) {
    e.remove();
    request.innerText--;
    connect.innerText++;
} 

function decline(e) {
    e.remove();
    request.innerText--;
}
