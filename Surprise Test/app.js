// TASK # 10
let names = ['1','2','3','4','5'];
for (let i = 0; i < names.length; i ++){
 console.log(names[i]);
}

// TASK # 1
function reverseArray(arr) {
    
        let start = 0;
        let end = arr.length - 1;
        

        while (start < end) {
            
            [arr[start], arr[end]] = [arr[end], arr[start]];
            
            start++;
            
            end--;
            return arr;
        }}
let smallArr =[1,2,3,4,5]
console.log(smallArr)
console.log(reverseArray(smallArr.slice))

let largeArr =[12,27,39,46,52,20,21]
console.log(largeArr)
console.log(reverseArray(largeArr.slice))

//Task 2
let neg =(num5){
    return num5.filter(num=> num >=0)
}
let numbers=[5,-3,4,6,9,-7]
let filternum =neg(numbers)
console.log(filternum)
// Task 3
function vowels(string) {
   let vol =new Set["a","e","i","o","u","A","E","I","O","U"]
    let vol3=0
    for(let char of string){
        if (vol.has(char)){
            vol2++;

        }
    }
  return vol2;}
let string ="Hellow World"
console.log(vowels(string))

//task 4
function  pal (string){
    string=string.toLowerCase()
    string=string.replace((/[w_]/g,''))
    let revstr= string.split('').reverse().join('')
    let string=== revstr()

}

console.log("hi")
console.log("hello")
console.log("how are you")



//  question 5
function check_numbers(x, y) {
      
        if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        
          return true;
        } else {
         
          return false;
        }
      }
      
      console.log(check_numbers(12, 101));
      
   
      console.log(check_numbers(52, 80));
      
   
      console.log(check_numbers(15, 99));
// question#6


const minBy = (arr, fn) =>
 
  Math.min(
    
    ...arr.map(typeof fn === 'function' ? fn : val => val[fn])
  );


console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));

console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
// question#7

function newstring(str) {
    if (str.length >= 3) {
        
        result_str = str.substring(str.length - 3);
       
        return result_str + result_str + result_str + result_str;
    } else {
       
        return false;
    }
}

console.log(newstring("str"

));
// question#10

function* eachFromTo(start, end) { for (let i = start; i <= end; i++) yield i }


function eachToArray(iterable) {
    const result = []
    for (const val of iterable) result.push(val)
    return result
}

function* eachWithIndex(iterable) {
    const shared = new Array(2)
    shared[1] = 0
    for (shared[0] of iterable) {
        yield shared
        shared[1]++
    }
}

console.log('iterate values and indexes from a generator')
for (const [val, i] of eachWithIndex(eachFromTo(10, 13))) console.log(val, i)

console.log('create an array')
const anArray = eachToArray(eachFromTo(10, 13))
console.log(anArray)

console.log('iterate values and indexes from an array')
for (const [val, i] of eachWithIndex(anArray)) console.log(val, i)
// question#9


function nearest_round_number(num) {
    
    while (num % 10) {
       
        num++;
    }
    
}


console.log(nearest_round_number(56)); 
console.log(nearest_round_number(592)); 
// question#8

 function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle."; 
    }
    if(angle === 90) {
      return "Right angle."; 
    }
    if(angle < 180) {
      return "Obtuse angle."; 
    }
    return "Straight angle.";  
  }
  

  console.log(angle_Type(47));   
  console.log(angle_Type(90));  
  console.log(angle_Type(145));  
  console.log(angle_Type(180)); 


// question#9


function nearest_round_number(num) {
    
    while (num % 10) {
       
        num++;
    }
    
}
console.log(nearest_round_number(56)); 
console.log(nearest_round_number(592));
// 9. Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So,
//  590 is rounder than 592, but 590 is less round than 600.


function smallestRoundNumber(value) {
    while (value % 10 !== 0) {
        value++;
    }
    return value;
}


console.log(smallestRoundNumber(590)); 
console.log(smallestRoundNumber(592));

// / 10. Write a JavaScript program to find the index of an array item in a for loop

function findIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }








