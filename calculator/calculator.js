const allKeys = document.querySelector(".buttonList")
const screen =document.querySelector(".screenShow");
const screenMain = document.querySelector(".screenFull");
const result =  document.querySelector(".reform");
let firsInput;
let secondInput;
let btnClicked;
let final;
let calccount = 1;
let calcFigure = [];
result.innerHTML = "Results:"
 
allKeys.addEventListener("click", (event) =>
{
    if(event.target.className === "btnsNums")
    {
        screenMain.innerHTML+= event.target.innerHTML;
        screen.innerHTML+= event.target.innerHTML;
        final = event.target.innerHTML;
        
    }

    else if(event.target.className === "btnsCalculations")
    { 
        calccount+=1 ;
        calcFigure.push(screenMain.innerText);
        screenMain.innerText = ""
        screen.innerHTML+= event.target.innerHTML;
        if(event.target.innerHTML === "-")
        {
            btnClicked = "minus";
          
        }

        else if(event.target.innerHTML === "+")
        {
            btnClicked = "plus"
        }

        else if(event.target.innerHTML === "*")
        {
            btnClicked = "multiply"
        }
        
       
       
    }

    if(event.target.className === "equal")
    {
        calcFigure.push(screenMain.innerText);
        screenMain.innerText = "";
        console.log(parseInt(screen.innerHTML))
        if(btnClicked === "plus")
        {
            result.innerHTML = "Results: "+ (parseInt(calcFigure[0]) + parseInt(calcFigure[1]));
            calcFigure = [];
            console.log(parseInt( screen.innerText) )
            screen.innerText = ""
        }

        else if(btnClicked === "minus")
        {
            result.innerHTML = "Results: "+ (parseInt(calcFigure[0]) - parseInt(calcFigure[1]));
            calcFigure = [];
            screen.innerText = ""
        }
       
        else if(btnClicked === "multiply")
        {
           
            result.innerHTML = "Results: "+ (parseInt(calcFigure[0]) * parseInt(calcFigure[1]));
            calcFigure = [];
            screen.innerText = ""
        }

        
        
    }
})








