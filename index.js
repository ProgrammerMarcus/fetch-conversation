/**
 * Time to generate and append a random message.
 */
function randomMessageOther() {
    const target = document.querySelector(".conversation")
    let clone = document.querySelector("#template-msg").cloneNode(true).content
    clone.querySelector(".profile").src = "https://robohash.org/ed.png"
    clone.querySelector(".text").innerText = "Hello world!"
    clone.querySelector(".name").innerText = "Name name name"
    clone.querySelector(".message").classList.add("other")
    target.appendChild(clone)
}

function sendMessage() {
    const target = document.querySelector(".conversation")
    let clone = document.querySelector("#template-msg").cloneNode(true).content
    clone.querySelector(".profile").src = "https://robohash.org/you.png"
    clone.querySelector(".text").innerText = "Hello world!"
    clone.querySelector(".name").innerText = "Name name name"
    clone.querySelector(".message").classList.add("self")
    target.appendChild(clone)
}

document.querySelector(".input").addEventListener("input", (e) => {
    e.target.style.height = "1.8rem";
    e.target.style.height = (e.target.scrollHeight) + "px";
})

randomMessageOther()