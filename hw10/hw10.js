const arr = [1, 2, [1.1, 1.2, 1.3], 3];

function createList(arr) {
    const ul = document.createElement("ul");
    for (let i of arr) {
        if (Array.isArray(i)) {
            ul.appendChild(createList(i));
        } else {
            const li = document.createElement("li");
            li.innerText = i;
            ul.appendChild(li);
        }
    }
    return ul;
}

let list = createList(arr);
document.body.appendChild(list);
