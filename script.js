console.log("playing")
document.querySelector(".winanime").style.display = "none"

let turnaud = new Audio("taudio.mp3")
let gwin = new Audio("win.mp3")

let turn = "X";

let isWon = false 

document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;


//changing turn
const changeturn = () =>{
     turn === "X" ? turn = "0" : turn = "X"
}




//checking win
const checkwin = () =>{
    let boxtext = document.querySelectorAll(".boxtext")
      
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach( (m) =>{
        if((boxtext[m[0]].innerText === boxtext[m[1]].innerText)
            && (boxtext[m[1]].innerText === boxtext[m[2]].innerText)
            && (boxtext[m[0]].innerText !== "")
            )
             {  
                document.getElementsByClassName("won")[0].innerText = boxtext[m[0]].innerText + " won";
                isWon = true;
                document.querySelectorAll(".box").forEach ( box =>{
                    box.style.display = "none"
                })
                document.querySelector(".winanime").style.display = "flex"
                gwin.play()
            }
    })

}



let boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () =>{

        if(boxtext.innerText === "" && !isWon){
                boxtext.innerText = turn;
                changeturn();
                turnaud.play()
                checkwin();
                if(!isWon){
                    document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;
                   } 
        }
    })
})

// if(!isWon){
//     let draw = false
//   let boxtext = element.querySelectorAll(".boxtext");
//    Array.from(boxtext).forEach(element =>{
//        if(element.innerText !== ""){
//         draw = true;
//        }
//    })
//    if(draw){
//     document.getElementsByClassName("won")[0].innerText = "Match Drawn";

//    }
// }




const reset = () =>{

    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isWon = false;
    document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;
    document.querySelectorAll(".box").forEach ( box =>{
        box.style.display = "flex"
    })
    document.querySelector(".winanime").style.display = "none"

}