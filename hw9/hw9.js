const users = ['Harry', 'Rone', 'Malfoy', 'Hagrid'];
const buttons = ["изменить", "удалить"];

function creatWebForm(btn, listener, text) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const subm = document.createElement("button");
    subm.type = btn;
    subm.innerText = text;
    subm.className = "inputBtn";
    subm.setAttribute("disabled", "disabled")
    subm.addEventListener("click", listener);
    form.appendChild(input);
    input.addEventListener("input", () => input.value.length === 0 ? subm.setAttribute("disabled", "disabled") : subm.removeAttribute("disabled"))
    form.appendChild(subm);
    return form;
}

function createBtn(name, event, element) {
    const button = document.createElement("button");
    button.innerText = name;
    if (name === "изменить") {
        button.addEventListener(event, function () {
            users[element] = prompt(`кто вмсето ${users[element]} ?`) || users[element];
            workSpace.replaceChild(makeAList(users, buttons), workSpace.lastChild);
        })
    } else if (name === "удалить") {
        button.addEventListener(event, function () {
            if (confirm(`Вы хотите удалить ${users[element]} ?`)) {
                users.splice(element, 1);
                workSpace.replaceChild(makeAList(users, buttons), workSpace.lastChild);
            }
        })
    }
    return button;
}

function addNewOne(event) {
    event.preventDefault();
    const input = document.querySelector("input");
    if (input.value && !users.includes(input.value)) {
        users.push(input.value);
        input.value = null;
        workSpace.replaceChild(makeAList(users, buttons), workSpace.lastChild);
    }
}

function makeAList(arr, arrOfBtn) {
    const ol = document.createElement("ol");
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.innerText = arr[i];
        ol.appendChild(li);
        if (arrOfBtn) {
            for (let j of arrOfBtn) {
                ol.appendChild(createBtn(j, "click", i));
            }
        }
    }
    return ol;
}

const workSpace = document.body;
const form = creatWebForm("submit", addNewOne, "добавить");
workSpace.appendChild(form);
const list = makeAList(users, buttons);
workSpace.appendChild(list);