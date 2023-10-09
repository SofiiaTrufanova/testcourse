/*let salary = 1000; 
if(salary > 700){
    console.log("I'll work");
}


let salary = 100; 
if(salary > 700){
    console.log("I'll work");
}


let salary = 0;
if(salary === 0){
    console.log("I am out");
} 

let salary = 100; 
if(salary > 700){
    console.log("I'll work");
} else {
    console.log("I am out");
}



let salary = 500;
let answer;
if(salary >= 700){
    answer = "I'll work";
} else if (salary < 700 && salary > 300){
    answer = "I'll think about it";
} else if (salary == 300){
    answer = "I'll work 4 hours";
} else {
    answer = "It's not for me";
}
console.log(answer);*/


//confirm("Do you want we call you?") ? alert("We are calling") : alert("OK. We don't disturb you");

/*let guessNumber = prompt('Guess the number from 1 to 5', 0)
switch(+guessNumber){
    case 1:
        alert('too few');
        break;
    case 2:
        alert('close');
        break;
    case 3:
        break;
    case 4:
        alert('close' );
        break;
    case 5:
        alert('too far');
        break;
    default:
        alert('Out of range');
 }


let guessNumber = prompt('Guess the number from 1 to 5', 0)
switch(+guessNumber){
    case 1:
        alert('too few');
    case 2:
        alert('close');
    case 3:
        alert("that's it" );
    case 4:
        alert('close' );
    case 5:
        alert('too far');
    default:
        alert('Out of range');
 }

 let fuel = 3;
 while (--fuel) // 3 -> 2 -> 1 -> 0 
{
    alert(`Fuel level is: ${fuel}`); //2 -> 1 -> 0
}

 alert(`Attention! 
       Your fuel level is: ${fuel}`); // -1 


 let fuel = 0;
   do{
      alert(`Fuel level is: ${fuel}`);
     }
    while (fuel)


for(let i = 2; i <= 10; ++i){
    console.log(`Number ${i} times 12 equals: ${i * 10}`);
}

let number = 6;
for (let i = 3; i >= -3; i--) {
    console.log(number / i);
}

let number = 6;
for (let i = 3; i >= -3; i--) {
    if(i == 0){
        continue
    }
    console.log(number / i);
}*/

let number = 12;
loop: for (let i = 2; i <= number; i++) {

  for (let k = 2; k < i; k++) { // 
    if (i % k == 0) continue loop;
}

  console.log(i);
}
