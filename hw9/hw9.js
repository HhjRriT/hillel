const users = ['Harry', 'Rone', 'Malfoy', 'Hagrid'];
const form = document.createElement("form");
const mainDiv = document.createElement("div");
const input = document.createElement("input");
const addMe = document.createElement("button");

addMe.type = "confirm";
addMe.innerText = "Добавить";
addMe.className = "addMe";
mainDiv.appendChild(form)
form.appendChild(input);
form.appendChild(addMe);
document.body.appendChild(mainDiv);

const list = makeAList(users);
mainDiv.appendChild(list);

function addNewOne(event) {
    event.preventDefault();
    if (input.value) {
        users.push(input.value);
        input.value = null;
        mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
    }
}

addMe.addEventListener("click", addNewOne)

function makeAList(arr) {
    const ol = document.createElement("ol");
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        const rename = document.createElement("button");
        rename.innerText = "изменить";
        const del = document.createElement("button");
        del.innerText = "удалить";
        li.innerText = arr[i];
        ol.appendChild(li);
        ol.appendChild(rename);
        ol.appendChild(del);
        rename.addEventListener("click", function () {
            arr[i] = prompt(`кто вмсето ${arr[i]} ?`) || arr[i];
            mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
        })
        del.addEventListener("click", function () {
            if (confirm(`Вы хотите удалить ${arr[i]} ?`)) {
                arr.splice(i, 1);
                mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
            }
        })
    }
    return ol;
}