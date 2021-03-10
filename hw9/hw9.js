const users = ['Harry', 'Rone', 'Malfoy', 'Hagrid'];

const mainDiv = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");
const addMe = document.createElement("button");

addMe.type = "button";
addMe.innerText = "addMe";
mainDiv.appendChild((form));
form.appendChild(input);
form.appendChild(addMe);
document.body.appendChild(mainDiv);

function makeAList(arr) {
    const ul = document.createElement("ul");
    for (let i of arr) {
        const li = document.createElement("li");
        li.innerText = i;
        ul.appendChild(li);
    }
    return ul;
}
const list = makeAList(users);
mainDiv.appendChild(list);

addMe.addEventListener("click", function () {
    users.push(input.value);
    mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
})