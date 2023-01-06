//map(), filter(), reduce()

let arr = [1, 2, 3, 2, 4, 4, 5, 6]

//map()
let result= arr.map(x=>x+1)
console.log(result)

// filter
let fil = arr.filter(x=>x%2==0)
console.log(fil)

//find()
let fin = arr.find(x=>x%2==0)
console.log(fin)

//reduce()
let redu = arr.reduce((a, b)=>a+b, 0)
console.log(redu)



//const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10

// Map
// const nums = [1, 3, 5, 7];
  
// const numsDoubled = nums.map((number) => number * 2);
// console.log(numsDoubled); // [2, 6, 10, 14]

// // No return from map's callback fn
// const undefArray = nums.map((number) => {
//   let double = nums * 2;
// });
// console.log(undefArray); // [undefined, undefined, undefined, undefined]

// // Filter
// const array = [1, -1, 2, 3, -5];
// const positiveArray = array.filter((num) => num >= 0);
// console.log(positiveArray); // [1, 2, 3]


//Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

//Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array

//--------------------------------------------------------------------//

// Hoisting
console.log(msg)
var msg = "a variable is hoisted"

var message="A variable is hoisted"
console.log(message);


// Temporal Dead Zone
function tDZ(){
    console.log(a);
    console.log(b);
    console.log(c);
    let a=1;
    const b=2;
    var c=10;
}
tDZ();

// map and filter in arrays
// let numbers=[1,2,3,4,5,6,7,8,9]
// let multiply=numbers.map(item=>item * 5)
// console.log(multiply);

// let ages=[10,22,30,12,25,19,28,40,50]
// let ageToVote=ages.filter(item=>item >= 18)
// console.log(ageToVote);

// let sum=numbers.reduce((a,b)=>a+b,0)
// console.log(sum)

// let alpha=["c","d","p","c","d"]
// let res=alpha.reduce((acc,curr)=>{
//     console.log(curr)
//     console.log(acc)
//     if(acc[curr]){
//         acc[curr]+=1;
//     }
//     else{
//         acc[curr]=1;
//     }
//     return acc;
// },[])
// //},{}) it will also works...
// console.log(res);

// let a=numbers.find(num=>num)
// console.log(a)

// let arr=[11,22,33,44,55]
// let increment=arr.forEach(item=>item+5)
// console.log(increment)

// async await
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved")
    },3000)
})

async function myFunction(){
    let result=await promise;
    console.log(result);
}
myFunction();

//symbol
const sym1 = Symbol();
const sym2 = Symbol("first");
const sym3 = Symbol("second");
Symbol("first") === Symbol("second");