/**1. Calculate the sum of all resistors connected in series.

Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.**/

//preparar una constante
//Declarar funcion para aceptar un arr parametro
//Loop pot el arr
//Tomar el valor abs de c/elemento
//sumar todos los valores absolutos

const res1 = [-1, 5, 6, 3];
const res2 = [14, 3.5, 6];
const res3 = [8, 15, 100];

function sumResistance(arr) {
    const arr2 = [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0;
    arr2.forEach((e) => (res = res +e));
    console.log(`${res} ohms`);
}

function sumResistance2(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i]);
    }
    return res;
}  

sumResistance(res3);
const try2 = sumResistance2(res1);
console.log(try2);


/**2. Given a number, return the number divided into its halves in an array.
 * */

const n = 4;
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
}

console.log(numDiv(n2));
console.log(numDiv(n));

/**3. Secret Society: Find the name of a secret society based on the first letter of each member's name. */

 const member1 = ["Esperanza", "Franco", "Nia"];
 const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
 const member3 = ["Harry", "Ron", "Hermione"];

 function SecretName (arr) {
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0))); 
    return res.sort().join();
    //console.log(res.sort());
    //console.log(res);
    //return res.sort().join("");
 }
console.log(SecretName(member1));
console.log(SecretName(member2));
console.log(SecretName(member3));

 //SecretName(member1);
 //SecretName(member2);
 //SecretName(member3);


 /**4. Display online status for a list of users. */

 const users = ["mockIng99", "J0eyPunch", "glassedFer"]

 function displayUsers (arr) {
    const count = users.length;
    let res;
    if (count === 1) {
        res = `${arr[0]} is online`;
    } else if (count === 2)  {
        res = `${arr[0]} and ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others are online`;
 } 
 return res;
 }

 console.log(displayUsers(users));

 /**5.Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number. */

 function arrayMultiply(number, length) {
    let multiplyArray = [];
    for (let i = 1; i <= length; i++) {

        let multiple = number * i;

        multiplyArray.push(multiple);
    }
    return multiplyArray;
}

console.log(arrayMultiply(2, 10));
console.log(arrayMultiply(17, 6));

/**6. Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive. */

function positiveDom(arr) {

    let positiveCount = 0;

    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        }
    }
    return positiveCount > negativeCount;

}

/**Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2. */

console.log(positiveDom([-1, -3, -5, 4, 6767]));

function cortar(arr) {
    var largo = arr.length;
    var mitad = Math.floor(largo/ 2);
    
    var primera = arr.slice(0, mitad);
    var segunda = arr.slice(mitad);
    
    var res = [];
    for (var i = 0; i < mitad; i++) {
      res.push((primera[i] + (1 / segunda[i])) / 2);
    }
    
    return res;
  }
  
  console.log(cortar([1, 2, 3, 5, 22, 6])); 
  