const calculateForm = document.getElementById("calculate-form");

const nameFirst = document.getElementById("couple-name-first");

const nameSecond = document.getElementById("couple-name-second");

const calcBtn = document.querySelector(".btn");

const resultPer = document.getElementById("result-per");

const resultMessage = document.getElementById("result-message");

const love = new LOVE();


// eventListeners();

// function eventListeners(){

//     calculateForm.addEventListener("submit", result);

// }

calculateForm.addEventListener("submit", result);


function result(e){

    let coupleNameFirst = nameFirst.value.trim();

    let coupleNameSecond = nameSecond.value.trim();

    console.log(coupleNameFirst, coupleNameSecond);

    if(coupleNameFirst === "" && coupleNameSecond === ""){
        // mesaj
    }
    else{
        love.getResult(coupleNameFirst, coupleNameSecond)
        .then(result => console.log(result))
        // .catch(err => reject(err));
    }

    e.preventDefault();
}