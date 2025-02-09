// 1: reverse an integer in JavaScript without converting it to a string

//  function reverseInt(num){
//     let reversed = 0;
//     while(num!=0){
//         reversed = reversed*10 + num%10;
//         num = Math.floor(num/10);

//     }
//     return reversed;

//  }

//  console.log(reverseInt(6576576));


// 2: reverse an integer by converting it to a string

    // function reverseInt2(num){
    //     let reversed = num.toString().split('').reverse().join('');
    //     return parseInt(reversed);
    // }

    // console.log(reverseInt2(6576576));


// 3: given number is prime or not 

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

//4:  given number is even or not 

// function isEven(num){
//     return num%2==0;
// }

// //5: given number is odd or not

// function isOdd(num){
//     return num%2!=0;
// }



// bariTeach IT company interview question 

//Find the repeated  alphabets in given word 

// function nonRepeatedaplha(str){
//     let result = '';
//     for(let i=0;i<str.length;i++){
//         if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
//             result+=str[i];
//         }
//     }
//     return result;
// }

// console.log(nonRepeatedaplha('saalemem'));



//there is one arry called numbers = [1,4,3,4,5,6,7,8,9,5] and you have to write a function that will take this array as an argument and return a new array 
// that the first element of numbers will become the first element of new array then the last element of numbers will become the second element of new array then 
// second element of numbers will become the third element of the new array and so on.


let myArray= (numbers)=>{
    let newArray= [];
    let length= numbers.length;
    
    for(let i=0; i<Math.ceil(length/2); i++){
        newArray.push(numbers[i]);
        if(i!==length-i-1){
            newArray.push(numbers[length-i-1]);
        }
    }
    return newArray
}

console.log(myArray([2,5,3,7]))



// find the second largest number form array 

function findSecondLargest(arr){
    let secondlargest = arr.sort((a,b)=>{
    return b-a
})
return secondlargest[1]
}

console.log(findSecondLargest([83,54,334,33,2]))

// find the  largest number form array 

function findLargest(arr){
    let secondlargest = Math.min.apply(null, arr)
return secondlargest
}

console.log(findLargest([83,54,334,33,2]))

// find the factrioal use recursion

function findFactroial(num){
    if(num===0 || num===1){
        return 1
    }
   return  num * findFactroial(num-1)
}

console.log(findFactroial(3))


// find nth number of Fibonacci Series

const  fibonacciSeries= (num)=>{
    if(num<=1) return num;
    return fibonacciSeries(num-1)+fibonacciSeries(num-2)
}

console.log(fibonacciSeries(6))






