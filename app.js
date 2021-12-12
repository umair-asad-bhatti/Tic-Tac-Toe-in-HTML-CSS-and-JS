



const init = () => {

    let playerChoices = [];
    let computerChoices = [];
    const childs = document.querySelectorAll(".child");
    const msg = document.querySelector(".message");
    const container = document.querySelector(".container");




    const playersymbol = "X";
    const computersymbol = "O";
    const playerGame = () => {


        childs.forEach(Element => {
            //adding event listner of click
            Element.addEventListener("click", function () {
                //grasping the first childs text that is button

                let btn = Element.children[0].innerHTML;
                if (!computerChoices.includes(+btn) && !playerChoices.includes(+btn)) {
                    Element.children[1].textContent = playersymbol;
                    //adding player choices to the array..
                    playerChoices.push(+btn);
                    CheckWin();
                    ComputerGame();
                }
            });
        });
    };

    const ComputerGame = () => {
        //lets generate the random number for computer

        let computer = Math.floor((Math.random() * 9) + 1);
        if (!playerChoices.includes(computer) && !computerChoices.includes(computer)) {
            childs.forEach(Element => {

                let temp = Element.children[0].textContent;
                if (computer == temp) {
                    Element.children[1].textContent = computersymbol;
                    computerChoices.push(+computer);
                    CheckWin();
                    return;
                };
                //end fi

            });
            //end foreach
        }
        //fi
        else {
            ComputerGame();
            CheckWin();
        }

    };
    //function end

    //function to specify the winning condition
    const CheckWin = () => {


        if (playerChoices.includes(1) && playerChoices.includes(2) && playerChoices.includes(3)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(1) && playerChoices.includes(4) && playerChoices.includes(7)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }

        else if (playerChoices.includes(3) && playerChoices.includes(6) && playerChoices.includes(9)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(7) && playerChoices.includes(8) && playerChoices.includes(9)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(1) && playerChoices.includes(5) && playerChoices.includes(9)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(3) && playerChoices.includes(5) && playerChoices.includes(7)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(2) && playerChoices.includes(5) && playerChoices.includes(8)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (playerChoices.includes(4) && playerChoices.includes(5) && playerChoices.includes(6)) {
            msg.textContent = "player wins";

            container.classList.add("none");
        }
        else if (computerChoices.includes(1) && computerChoices.includes(2) && computerChoices.includes(3)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(1) && computerChoices.includes(4) && computerChoices.includes(7)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }

        else if (computerChoices.includes(3) && computerChoices.includes(6) && computerChoices.includes(9)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(7) && computerChoices.includes(8) && computerChoices.includes(9)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(1) && computerChoices.includes(5) && computerChoices.includes(9)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(3) && computerChoices.includes(5) && computerChoices.includes(7)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(2) && computerChoices.includes(5) && computerChoices.includes(8)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }
        else if (computerChoices.includes(4) && computerChoices.includes(5) && computerChoices.includes(6)) {
            msg.textContent = "You lose";

            container.classList.add("none");
        }



        return;
    };
    //function ends

    //call to play game function

    playerGame();

}

init();




