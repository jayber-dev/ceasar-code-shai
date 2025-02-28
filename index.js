const message = document.querySelector('.message')
const code = document.querySelector('.create-code')
const decrypt = document.querySelector('.decrypt-code')
const card = document.querySelector('.card')
const heading = document.querySelector('.heading')
const date = document.querySelector(".date")
const keyInput = document.querySelector('.key-input')

let key = 1
const letters = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ",,"ף","צ","ץ","ק","ר","ש","ת"," "]
let c = ""
let m = ""
message.addEventListener('input', (e) => {
    c = e.target.value
})

code.addEventListener('click', (e) => {
    m = ""
    console.log("i was pressed")
    for(let i = 0;i < c.length;i++){
        let index = letters.indexOf(c[i])
        console.log(index)
        if(index + key > letters.length -1) {
            index = -1
        }
        m += letters[index + key]  
    }
    console.log(m)
    card.style.display = "flex"
    heading.textContent = m
    date.textContent = new Date().toLocaleString('he')
})

decrypt.addEventListener('click', (e) => {
    m = ""
    console.log("i was pressed")
    for(let i = 0;i < c.length;i++){
        let index = letters.indexOf(c[i])
        console.log(index)
        if(index - key === -1) {
            index = letters.length
        }
        m += letters[index - key]  
    }
    console.log(m)
    card.style.display = "flex"
    heading.textContent = m
    date.textContent = new Date().toLocaleString('he')
})

keyInput.addEventListener('input', (e) => {
    if(Number(e.target.value) > 23 || Number(e.target.value) < 1) {
        key = 1
        keyInput.value = 1
    } else {
        key = Number(e.target.value)
    }
})


