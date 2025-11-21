//1
let x = "123"
console.log(Number(x) + 7);
//2
{
    let x = 0
    if (x) {
        console.log("valid");
        
    } else {
        console.log("Invalid");
    }
}
//3
for (let i = 1; i <= 10; i++) {
    if (i%2==0) {
        continue;
    } 
        console.log(i);
    
}
//4
{
    let x = [1, 2, 3, 4, 5, 6]
    let y = x.filter((i) => {
        return i % 2 == 0
    })
    console.log(y);
}
//5
{
    let x = [1, 2, 3]
    let y = [...x, 4, 5, 6]
    console.log(y);
}
//6 
{
    let num = 2
    switch (num) {
        case 1: console.log("sunday");
        
            
            break;
        case 2: console.log("monday");
            
            break;
        case 3: console.log("tuesday");
            
            break;
        case 4: console.log("wednesday");
            
            break;
        case 5: console.log("thursday");    
            
            break;
        case 6: console.log("friday");
            
            break;
        case 7: console.log("saturday");
            
            break;
        default:
            console.log("invalid inputs");
            
            break ;
    }
}
//7 
{
    let x = ['a', 'ab', 'abc']
    x.map((i) => {
        
        console.log(i.split('').length);
        
     })
}
//8
{
    let x = 15
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("divisible by both");
    }else if (x % 3 == 0) {
        console.log("divisible by 3");
    } else if (x % 5 == 0) {
        console.log("divisible by 5");
    } else {
        console.log("not divisible by both");
    }
}
//9
{
    let x = (num) => {
        return num * num
    }
    console.log(x(5));
    
}
//10
{
    function format({ name, age }) {
        return `${name} is ${age} years old.`;
    }
    console.log(format({ name: "Alice", age: 30 }));
}
//11
{
    let x = ([a, b, ...c]) => {
        let sum = a + b
        if (c.length > 0) {
            for (let i of c) {
                sum += i
            }
        }
        console.log(sum)
    }
    x([1, 2, 3, 4, 5])
}
//12
{
    function promiseSuccess() {
        return new Promise((resolve, reject) => { 
            setTimeout(()=>{
                resolve("Success!")
            },3000)    
        })
    }
    promiseSuccess().then((message)=>{
        console.log(message);
    })
}
//13
{
    let x = [1,3, 2,10,4,7,8,12]
    function findLargest(arr) {
        let largest=0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]>largest) {
                largest=arr[i]
            }
        }
        return largest
    }
    console.log(findLargest(x));
    
}
//14
{
    let x = {name: "John", age: 25, city: "New York"}
    function arrayConvert(x) {
        let arr = []
        Object.entries(x).forEach(([key, value]) => {
                arr.push(key)
         })
        return arr
    }
    console.log(arrayConvert(x));
}
//15
{
    let x = "the quick brown fox"
    function splitWords(sen) {
        return sen.split(' ')
    }
    console.log(splitWords(x));
}
//b
//1 the difference between for each and for of loop is that for each used for ascynchronous operation
//  and for of loop is used for synchronous operation
// for each loop cannot be breaked but for of loop can be breaked using break statement

//2 hoisting is where variables moved to the top of the scope before code execution even if it's the global scope or function scope
// in hoisting var variables are hoisted and initialized with undefined but let and const are hoisted but not initialized
// let and const variables cannot be accessed before initialization but they be in the temporal dead zone and if try to reach them it will throw reference error
// the temporal dead zone is the time between the hoisting and initialization of let and const variables

//3 the diffreence between == and === is that == checks for value equality and performs type coercion if the types are different
// but === checks for both value and type equality without performing type coercion

//4 the async await syntax is used to handle asynchronous operations so that the code looks more like synchronous code it makes the
// asynchronous code wait for the promise to resolve before moving to the next line of code
// that happens in the try block and if there is an error it will be caught in the catch block

//5 the diffenrce between type conversion and type coercion is that type conversion is the explicit conversion of one data type to another
// and the type coercion is the implicit conversion of one data type to another done by javascript engine automatically
