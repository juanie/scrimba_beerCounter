let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 100

function increment() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 100
    count = 100
}
