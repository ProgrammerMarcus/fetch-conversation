/**
 * Time to generate and append a random message.
 */
async function randomMessageOther() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${document.querySelector(".conversation").children.length}`)
    const data = await response.json()
    const target = document.querySelector(".conversation")
    let clone = document.querySelector("#template-msg").cloneNode(true).content
    clone.querySelector(".profile").src = `https://robohash.org/${document.querySelector(".conversation").children.length}.png`
    clone.querySelector(".text").innerText = data.body.substring(90)
    clone.querySelector(".name").innerText = data.email
    clone.querySelector(".message").classList.add("other")
    target.appendChild(clone)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

async function sendMessage(message) {
    const target = document.querySelector(".conversation")
    let clone = document.querySelector("#template-msg").cloneNode(true).content
    clone.querySelector(".profile").src = "https://robohash.org/you.png"
    clone.querySelector(".text").innerText = message
    clone.querySelector(".name").innerText = "You"
    clone.querySelector(".message").classList.add("self")
    target.appendChild(clone)
    setTimeout(randomMessageOther, Math.random() * 5000)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

document.querySelector(".input").addEventListener("input", (e) => {
    e.target.style.height = "1.8rem";
    e.target.style.height = (e.target.scrollHeight) + "px";
})

document.querySelector(".input").addEventListener("input", (e) => {
    e.target.style.height = "1.8rem";
    e.target.style.height = (e.target.scrollHeight) + "px";
})

document.querySelector(".input-container .send").addEventListener("click", () => {
    sendMessage(document.querySelector("#input").value)
})

randomMessageOther()