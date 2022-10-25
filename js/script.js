let userContainer = document.querySelector(".container");
let number = prompt('scegli un numero')
for(let i = 1; i <= number ; i++){
    // Controllo se il numero è divisibile per 3, 5 o entrambi
    if(i % 3 === 0 && i % 5 === 0){
        userOutput = `<div class="box fizzbuzz">FizzBuzz</div>`;
    }else if(i % 5 === 0){
        userOutput = `<div class="box buzz">Buzz</div>`;
    }else if(i % 3 === 0){
        userOutput = `<div class="box fizz">Fizz</div>`;
    }else{
        userOutput = `<div class="box">${i}</div>`; 
    };
    // Inserisco nella pagina la box con il numero o l'eventuale parola
    userContainer.innerHTML += userOutput;
};