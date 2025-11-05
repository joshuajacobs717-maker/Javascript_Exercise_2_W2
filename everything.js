// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively. 
function sum(number){let total = 0; let num_type = typeof number;
    if (num_type == "string")
        {return "The value passed is not a number"}
  else 
    {for (let num = 1; num <= number; num++)
        {
        total += num;
        }
    return `The sum of 0 to ${number} is ${total}`
    }
}

let sum_of = sum(6)
console.log(sum_of)
console.log("-".repeat(60))

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(number){let total = 1;

    for (let num = 1; num <= number; num++)
        {
        total *= num;
        }
    return `The fratorial is: ${total}`
    }
let frac = factorial(5)
console.log(frac)
console.log("-".repeat(60))
// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args){
    if (args.length == 2){return args[1] - args[0]}
    else if (args.length == 3){return args[0] + args[1] + args[2]}
    else if (args.length === 4){ let num1 = args[0] + args[1]; let num2 = args[2] + args[3];
    return (num1/num2).toFixed(2)}
    else{return "This function only allows 2, 3 or 4 arguments"}

}

let funky = funkyMath(2,6,5,8)
console.log(`Funky Math result: ${funky}`)
console.log("-".repeat(60))
// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
const array = [1, 2, 33, 45, 6, 44]
let new_array = []
for (let num = 0; num < array.length; num++){
    if(array[num] % 2 !== 0){new_array.push(array[num])}
}
console.log(new_array)
console.log("-".repeat(60))
// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {firstName: "Joshua",
    lastName: "Jacobs",
    age: 22,
    favouriteColour: "Blue",
    dreamCar: "McLaren Senna"
}
// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.favouriteFood = "Sushi"
// TODO: . Now delete the age property from the object. 
delete me.age

for(key in me){console.log(`${key} : ${me[key]}`)}