const display=document.getElementById("display")
function appendToDisplay(input){
    display.value+= input
}


function clearDisplay(){
    display.value=""
}

function calculate(){
    try{
        // eval()is for calculation 1+2=3 of given input value
        display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}