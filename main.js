let addBtn = document.querySelector("#add-button"),
    resDiv = document.querySelector("#to-do-container"),
    inp = document.querySelector("#to-do-input");

addBtn.addEventListener('click', addNote);
inp.addEventListener('keypress', parseKey);
resDiv.addEventListener('click', parseClick);

function addNote() {
    let noteText = inp.value;
        newNoteCont = document.createElement('div'),
        delBtn = document.createElement('button');
    
    if(inp.value === '') {
        alert('Please enter a text to add a note');
        return;
    }
    delBtn.innerHTML = "delete";
    newNoteCont.innerText = noteText;
    newNoteCont.appendChild(delBtn);
    newNoteCont.classList.add("to-do-item");
    resDiv.appendChild(newNoteCont);
    inp.value = '';
}

function parseKey(e) {
    if(e.which === 13) addNote();
    return;
}

function parseClick(e) {
    if(e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    } else if(e.target.classList.contains("to-do-item")) {
        e.target.classList.toggle("done");
    }
}