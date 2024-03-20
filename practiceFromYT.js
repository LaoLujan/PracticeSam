//WHILE LOOPS PRACTICE FOLLOWING TUTORIAL: https://www.youtube.com/watch?v=DfBCcyauAys
//EXCERCISE 1
//1.Create a vaiable  called 'loggedIn' that sarts off as false
//2. Creeate a while loop that loops while 'loggedIn' is false
//3. Each loop print out 'Incorrect log in conditionals'
//4. After 3 loops iterations, change 'loggedIn' to true
//5. After the loops is done print out 'Succesfully logged in'

// let loggedIn = false;
// let loopCounter = 0;

// While (!loggedIn){
//  if (loopCounter ===2){
//     loggedIn = true;
//  }
//  loopCounter ++;
// }
// console.log("Succesfully logged in");

//NOTE; WRONG CODE, EVEN REMOVING THE CURLY BRACES, CODE COPIED FROM THE 
//TUTORIAL AND IS STILL WRONG. 

//EXCERCICE 2
//1.Create a while loop that print out all the even numbers bt 10 and 40
//2.Do the same for all the odd numbers

// let number = 10;

// while (number <= 40){
//    if (number % 2 === 0){
//       console.log (number);
//    }
//    number++;
// }

// while (number <= 40){
//    if (number % 2 === 1){
//       console.log (number);
//    }
//    number++;
// }

//EXCERCISE 3 
//1.Create a while loopp the runs from 1- 100
//2.Every 10 loops print out: Check point, and then the loop number
//3.On the loop 50 prin out only: Half way there!
//4.On the final loop (100) proint out: You made it !
//5.at the end print out : All done!

// let count = 1;
// while (count <= 100){
//    if (count ===50){
//       console.log ("Half way!");
//       count ++;
//       continue;
//    }
//    if (count === 100){
//       console.log ("You made it!");
//       count ++;
//       continue;
//    }
//    if (count % 10 === 0){
//       console.log (count);
//    }
//    count ++;
// }

//REVERSE STRING REVERSE. FOLLOWING TUTORIALS: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
//EXCERCISE 1. 

// function reverseString (str){
//    //STEP 1.INSIDE THE FUNCTION. USE THE S0PLIT () METHOD TO RETURN A NEW ARRAY
//    let splitString = str.split("");
//    console.log(splitString)
//    //STEP 2. USE THE REVERSE () TON REVERSE THE NEW CREATED ARRAY
//    let reverseArray = splitString.reverse();
//    console.log(reverseArray);
//    //STEP 3. USE THE JOIN METHOD TO JOIN ALL THE ELEMENTS OF THE ARRAY
//    let joinArray = reverseArray.join();
//    //STEP 4. RETURN THE REVERSED STRING
//    return joinArray;
// }
// console.log(reverseString("hello"));



//SAME RESULT BUT SHORT VERSION

// function reverseString(str) {
//    return str.split("").reverse().join("");
// }
// console.log (reverseString("hello"));


// PALINDROME FOLLOWING: https://www.youtube.com/watch?v=hvV48xfwZCs 
// EXCERSISE 1 
//NOTE; WE NEED TO REMOVE ALL THE SPACES, CHARACTERES OR NON-ALPHANUMERIC SYMBOLS AND MAKE THEM LOWERCASE
// function palindrome (str){
//    var reg = /[\W_]/g; // regex took from the tutorial
//    var smallStr= str.toLowerCase().replace(reg, "");
//    var reversed = smallStr.split("").reverse().join("");
//    if (reversed === smallStr) return true;
//    return false;
// }
// console.log(palindrome("ERTRE"));

// EXCERSISE 2 FOLLOWING https://www.youtube.com/watch?v=saj9KQ3wGtc
// let palindrome = function (word){
//    let len = word.length;
//    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
//    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
//    let flip = end.split('').reverse().join('');
//    return (start === flip);
// }
// console.log(palindrome('mariposa'));
// console.log(palindrome('aaallaaa'));

// COOL EXCERCISE BUT MATH.FLOOR IS NOT SOMETHING I CAN UNDERTAND NOW

// FIND THE LONGEST STRING: 
//EXCERCISE 1: FOLLOWING https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/
// function longWord(str){
//     return str.length;
// }
// console.log(longWord("Here is my long woooooooord"));
//THIS EXAMPLE IS NOT DOING EXACTLY WHAT I EXPECTED

// // EXAMPLE 2
// function longWord(str){
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for (var i = 0; i < strSplit.length; i++){
//     if (strSplit[i].length > longestWord){ 
//     longestWord = strSplit[i].length;
//         }   
//     }
//     return longestWord;
// }
// console.log(longWord('Thhhhiiiiis is my nex try, lest see how it goes'));

// FIND THE VOWELS: FROM https://www.geeksforgeeks.org/how-to-get-a-number-of-vowels-in-a-string-in-javascript/
//EXCERCISE 1:

// function vowelCount (str){
//     const vowelReg = /[aeiou]/gi;
//     const strMatches = str.match(vowelReg);
//     if (strMatches){
//         return strMatches.length;
//     }else {
//         return 0;
//     }
// }
// console.log(vowelCount('HOl'));

//EXCERCISE 2
// function countVowels(str){
//     const vowels = ["a","e","i","o","u","A","E","I","O","U"];
//     let count = 0;
//     str.split("").forEach((char) => {
//         if(vowels.includes(char)){
//             count++;
//         }
//     });
//     return count;
// }
// console.log(countVowels("This is my string"));