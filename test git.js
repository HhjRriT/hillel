const users = ['Harry', 'Rone', 'Malfoy', 'Hagrid'];

function creatWebForm(parent, btn) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const subm = document.createElement("button");
    subm.type = btn;
    subm.innerText = "Добавить";
    subm.className = "inputBtn";
    form.appendChild(input);
    form.appendChild(subm);
    parent.appendChild(form);
}

function createBtn(name, event, listener) {
    const button = document.createElement("button");
    button.innerText = name;
    button.addEventListener(event, listener)
}

function rename(target, parent) {
    const newOne = prompt(`кто вмсето ${target} ?`) || target;
    parent.replaceChild(makeAList(users), parent.lastChild);
}

function del() {

}

const list = makeAList(users);
mainDiv.appendChild(list);

function addNewOne(event) {
    event.preventDefault();
    if (input.value && !users.includes(input.value)) {
        users.push(input.value);
        input.value = null;
        mainDiv.replaceChild(makeAList(users), mainDiv.lastChild);
    }
}

addMe.addEventListener("click", addNewOne);

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