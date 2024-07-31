//selecting all the buttons
const buttons = document.querySelectorAll(".button");
//selecting the body
const body = document.querySelector("body");
//Looping through each button
buttons.forEach(function(button){
    //adding an event listener to each button
    button.addEventListener('click',function(e){
        //holding the event object's target's id in a variable
        let color = e.target.id;
        //changing the background of the body based on the event
        switch(color){
            case "red":
                body.style.backgroundColor = "#ff4d4d";
                break;
            case "blue":
                body.style.backgroundColor = "#4d79ff";
                break;
            case "yellow":
                body.style.backgroundColor = "#ffff4d";
                break;
            case "green":
                body.style.backgroundColor = "#4dff4d";
                break;
            default:
                console.log("Select a color");
        }
    })
})