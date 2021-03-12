const users = ['Harry', 'Rone', 'Malfoy', 'Hagrid'];

const mainDiv = document.createElement("div");
const input = document.createElement("input");
const addMe = document.createElement("button");

addMe.type = "button";
addMe.innerText = "addMe";
addMe.className = "addMe";
mainDiv.appendChild(input);
mainDiv.appendChild(addMe);
document.body.appendChild(mainDiv);

const list = makeAList(users);
mainDiv.appendChild(list);

function addNewOne() {
    console.log("sss");
    users.push(input.value);
    input.value = null;
    mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
}

addMe.addEventListener("click", addNewOne)

function makeAList(arr) {
    const ol = document.createElement("ol");
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        const rename = document.createElement("button");
        rename.innerText = "изменить";
        rename.className = i;
        const del = document.createElement("button");
        del.innerText = "удалить";
        del.className = i;
        li.innerText = arr[i];
        ol.appendChild(li);
        ol.appendChild(rename);
        ol.appendChild(del);
        rename.addEventListener("click", function () {
            arr[i] = prompt("на что меняем?");
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