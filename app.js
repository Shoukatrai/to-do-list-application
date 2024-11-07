
var input = document.querySelector("#input");
var list = document.querySelector(".todo-list")

function getInput(){
    var l1Element = document.createElement("li")
    l1Element.innerHTML = input.value;
    list.append(l1Element);
l1Element.setAttribute("id","listItem")


// var btn1 = document.createElement("button")
// btn1.innerHTML = "Edit"
// l1Element.append(btn1)

    var btn = document.createElement("button")
    btn.innerHTML = "Delete"
    l1Element.append(btn)

    btn.setAttribute("onclick","deleteTask()")
    btn.setAttribute("id","deletBtn")
}

function deleteTask(){
    // var btn = document.getElementById("deletBtn");
    var llistItem = document.getElementById("listItem")
    llistItem.remove();
}