// REPLACE 
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

// Eski Element

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement, oldElement);

console.log(newElement);



// DENEME...

// const cardbody = document.querySelectorAll(".card-body")[1];

// // console.log(cardbody);  

// const newElement = document.createElement("h3");

// // console.log(newElement);

// newElement.id = "task-title";
// newElement.className = "card-title";
// newElement.textContent = "Yeni Todolar";


// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);