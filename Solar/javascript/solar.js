const myIcon = document.querySelector("[title = menu]");  //getting the menu icon
const myMenuItems = document.querySelector(".menuitems"); //getting the items of the menu
const userButton = document.querySelector(".userName  > button");
const userName = document.querySelector(".userName > input");
const userInput = document.querySelector(".userName  >  h2");
const complete = document.querySelector(".userName > p")
let compliement = 
[
    "Wow what a wonderful name you have, " + userName.value,
    "How hard it will be for me to forget your name, "+ userName.value,
    userName.value + "Very few own such a name!, ",
    "Wow what a wonderful name you have, " + userName.value,
    "How hard it will be for me to forget your name, "+ userName.value,
    userName.value + "Very few own such a name!, ",
    "Wow what a wonderful name you have, " + userName.value,
    "How hard it will be for me to forget your name, "+ userName.value,
    userName.value + "Very few own such a name!,  "
]

var i =     Math.floor(Math.random()* compliement.length)


let iconCount=  1; //setting a counter to check the eveness or oddness of the figure

myIcon.addEventListener("click", () =>
{
    if(iconCount % 2 !== 0)  //if the remaianer of diving the current figure of the Iconcount number is > than 0
    {
        iconCount += 1;
        myMenuItems.style.display = "block";
        console.log(iconCount)
    }
    else
    {
        iconCount += 1;
        myMenuItems.style.display = "none";
        myMenuItems.style.transistion = "2s"
    }
    //Use this to display the menu as block when the icon is clicked
   
})



userName.addEventListener("click", () =>
{
    userName.style.border = "none"
})

userButton.addEventListener("click", () =>
{
     userInput.textContent = compliement[i] + userName.value +", Welcome to my website";
     userButton.style.display = "none";
     userName.style.display = "none";
     complete.style.display = "none"

})

console.log(i)
