const inputBox = document.querySelector(".input-box");
const guessBtn = document.querySelector(".guess-button");
const randomNumber = document.querySelector(".random-number");
const yourGuess = document.querySelector(".your-guess");
const remarkMessage = document.querySelector(".remark-message");

const refreshbutton = document.querySelector(".refresh-button");

// random bumber generate
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function refreshPage() {
    window.location.reload();
}

guessBtn.addEventListener('click', function () {
    // to display your guess
    const guessnum = document.createElement("H3");
    const datanum = document.createTextNode(inputBox.value);
    guessnum.appendChild(datanum);
    yourGuess.appendChild(guessnum);

    // to display generated guess
    //const numberGenerate = document.createElement("H3");
    // const randoNumber = document.createTextNode(getRandomInt(1));
    // numberGenerate.appendChild(randoNumber);
    const gen_num = String(getRandomInt(11));
    randomNumber.append(gen_num);

    // to check if they are same or not
    if (inputBox.value === gen_num) {
        remarkMessage.append("Congratulation!!");
        console.log("Congratulation!!");
    }
    else {
        remarkMessage.append("Oops!!");
        console.log("Try again!");
    }
});

refreshbutton.addEventListener('click', function () {
    refreshPage();
});