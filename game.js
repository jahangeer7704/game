document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    responsiveVoice.speak("Welcome to the game!")
 
    init();
  }
});

let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissor = document.querySelector("#scissor");

const init = () => {
  const rockf =() => {
    uv("rock");
  };
  const paperf = () => {        
    uv("paper");
  };
  const scissorf = () => {
    uv("scissor");
  };
  const uv = (input) => {
    userdec(input);
  };
  const userdec = (inp) => {
    let com = comdec();
    merge(inp, com);
    removeClickEvents();
  };
  const comdec = () => {
    const ran = Math.floor(Math.random() * 3 + 1);
    
    const arr = ["rock", "paper", "scissor"];
    return arr[ran - 1];
  };
  const merge = (user, com) => {
    const pl = user;
    const pc = com;
    const cw = "Computer won";
    const pw = "you won";
    let re =
      pl === pc
        ? "tie"
        : pl === "rock" && pc === "paper"
        ? cw
        : pl === "rock" && pc === "scissor"
        ? pw
        : pl === "paper" && pc == "rock"
        ? pw
        : pl === "paper" && pc === "scissor"
        ? cw
        : pl === "scissor" && pc === "rock"
        ? cw
        : pl === "scissor" && pc === "paper"
        ? pw
        : "invalid";
        finalResult(re, pc, pl);
      };
      const finalResult = (r, m, p) => {
        let res = document.getElementById("res");
        res.innerHTML = "Computer Choosed " + m + ", so " + r;
let bu= document.getElementsByClassName("bu")
       bu[0].style.visibility="visible"
        let rest = "Computer Choosed " + m + ", so " + r;
        responsiveVoice.speak(rest)
        responsiveVoice.speak("click replay,to play again")
      };
      const removeClickEvents = () => {
        paper.removeEventListener("click", paperf);
        rock.removeEventListener("click", rockf);
        scissor.removeEventListener("click", scissorf);
      };
      rock.addEventListener("click", rockf);
      paper.addEventListener("click", paperf);
      scissor.addEventListener("click", scissorf);
    };
    
    const retry = () => {
  location.reload();
  responsiveVoice.speak("Replayed,click the choice");
};
