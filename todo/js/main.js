const errorMessage = document.querySelector(".errorMessage");
const registerInput = document.querySelector(".registerinput")
const continueButton = document.querySelector(" .continue")
const realcontinue = document.querySelector(".realcontinue")
const username = document.querySelector(".username")

registerInput.addEventListener("click", () =>
{
    continueButton.style.opacity = "1";
    continueButton.style.transition = "1s";
    continueButton.style.animation = " frombottom 0.9s";
    let username = registerInput.innerText
    
})


console.log(username)









