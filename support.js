let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let mainContainer = document.getElementById("chatContainer")
let Btn = document.getElementById("sendMsgBtn")
let user = document.getElementById("userInput")

function reply(text) {
    let len = chatbotMsgList.length - 1
    let word = chatbotMsgList[Math.ceil(Math.random() * len)]
    let tex = ""
    if (text === "Hy" || text === "Hello") {

        tex = "Hy how can i help uu??."

    } else if (text === "foods rich in vitamin-k") {
        tex = "Spinach, egg yolks, cabbage etc..."
    } else if (text === "") {
        tex = "Sorry"
    }

    let con = document.createElement("div")
    con.classList.add("msg-from-chatbot-container")
    mainContainer.appendChild(con)
    let conMsg = document.createElement("span")
    conMsg.textContent = tex
    conMsg.classList.add("msg-from-chatbot")
    con.appendChild(conMsg)
}
Btn.onclick = function() {
    let text = user.value
    let con = document.createElement("div")
    con.classList.add("msg-to-chatbot-container")
    mainContainer.appendChild(con)
    let conMsg = document.createElement("span")
    conMsg.textContent = text
    conMsg.classList.add("msg-to-chatbot")
    con.appendChild(conMsg)
    user.value = ""
    reply(text)
}