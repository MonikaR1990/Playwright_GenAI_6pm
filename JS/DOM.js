let heading = document.getElementById("title")
console.log(heading)

function changeText()
{
    heading.innerHTML = "Hello JavaScript"
}

console.log(heading.textContent)
console.log(heading.id)

let para1 = document.getElementById("msg_1")
console.log(para1)

let paras = document.getElementsByClassName("ui_msg")
console.log(paras[1].textContent)

document.getElementById("msg_1").textContent = "Hello JavaScript World"

document.getElementById("msg_2").innerHTML = "<h5 id = 'newTitle'>Hello JavaScript Globe</h5>" 

heading.style.color="Blue"
heading.style.fontSize = "80px"

let inputBox = document.getElementById("name")
console.log(inputBox)

inputBox.style.borderColor = "Red"

inputBox.setAttribute('placeholder', "Entername")

let link = document.createElement("a")
document.body.append(link)

link.setAttribute("href", "https://www.google.com/")

link.textContent = "Google"


