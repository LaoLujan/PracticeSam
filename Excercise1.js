//  //1.Write a JavaScript program that displays "Hello, World!" in the browser console//
// var txt = "hello word!"; 
// console.log(txt); 

//  //2. Create a JavaScript function that takes two numbers as input, performs addition,
//  //subtraction, multiplication, and division operations on them, and displays the results
//  //in the browser console.
// //STEP 1. CREATING VARIABLES
// var n1 = 9;
// var n2 = 4;  
//  //STEP 2. CREATING VARIABLE x TO INDICATE WE ARE PROCESING OUR 2 VARIABLES THERE
// var x = myFunction (n1,n2);
//  //STEP 3. IN THIS FUNCTION WE ARE INDICATING WE ARE USING 2 PARAMETERS TO RETURN AN ADDITION
// function myFunction(a,b){
//     return a+b;      
// }
// console.log(x);

// var y = myFunction (n1,n2);
// function myFunction(a,b){
//     return a-b;   
// }
// console.log("Result no. 1 = " + y + ". This is an addition");

//  //NOTE, IT ONLY WORKS GOOD WITH 1 FUNCTION, I TRIED TO REPEAT THE FUNCTION AND IS NOT WORKING PROPERLY, REUSE THE VARIABLES n1 AND n1 IS NOT POSIBLE

//  //3. Write a JavaScript program that prints the numbers 1 to 10 using a for loop and
//  //another version using a while loop.
//  //STEP 1. VARIABLE DEFINED INSIDE THE LOOP. i IS STARTIN IN 0; I HAS TO BE EQUALS OR LESS THAN 10 AND ADD 1 EVERY TIME
//  for (let i=0; i<=10; i++){ 
//  // STEP 2. PRINT IT
//  console.log(i)
//  }

//  //STEP 1. VARIABLE DEFINED OUTSIDE OF THE LOOP AND DEFIFINING THE STARTING POINT AS 0
//  let i = 0  
//  // STEP 2. i HAS TO BE EQUALS OR LESS THAN 10
//  while (i<=10){
//  //STEP 3. PRINT THE NUMBER
//  console.log (i);
//  //STEP 4. ADD ONE EVERY TIME THE CONDITION IS TRUE, TO THE VARIABLE THAT STARTED IN 0
//  i++;
//  }

//  //4. Write a JavaScript program that checks if a given number is even or odd and displays
//  //the result in the browser console.
//  //STEP 1. DEFINE VARIABLE WHICH CAN BE ANY NUMBER
//  let number = 8;
//  //STEP 2. IF WHEN DIVIFING number BY 2, THE REMINDER IS EXACTLY 0, THEN PRINT MESSAGE1, ELSE, PRINT MESSAGE 2
//  if (number % 2 === 0){
//  console.log (number + " : This is an even number");
//  }else{
//  console.log(number + " : This is an odd number");
//  }

//  //5. Create an array of 5 names. Use a for loop to iterate through the array and print
//  //each name in the browser console.
//  //STEP 1. DEFINE THE ARRAY WITH THE 5 NAMES
//  const names = ["Laura","Maria","Juan","Sofia","Alma"];
//  //STEP 2. DESCOVER THE LENGTH OF THE ARRAY
//  let nameL = names.length;
//  //STEP 3. OUR i STARTS IN 0;i HAS TO BE LESS THAN OUR LENGTH; AND ADD ONE TO THE i SUM 
//  for (let i=0; i < nameL; i++){
//  console.log (names[i]);
//  }

//  //6. Write a function that takes a string as input and returns the string reversed.
//  function reverseString (str){
//  //STEP 1.INSIDE THE FUNCTION. USE THE SPLIT () METHOD TO RETURN A NEW ARRAY
//  let splitString = str.split("");
//  console.log(splitString)
//  //STEP 2. USE THE REVERSE () TO REVERSE THE NEW CREATED ARRAY
//  let reverseArray = splitString.reverse();
//  console.log(reverseArray);
//  //STEP 3. USE THE JOIN METHOD TO JOIN ALL THE ELEMENTS OF THE ARRAY
//  let joinArray = reverseArray.join();
//  //STEP 4. RETURN THE REVERSED STRING
//  return joinArray;
//  }
//  reverseString ("hello");

//  //7. Create a function that checks whether a given word or phrase is a palindrome. A
//  //palindrome is a word or phrase that reads the same backwards as forwards.
//  //STEP 1. CREATING THE FUNCTION AND THE PARAMETER IS (str), RESERVED WORD FOR STRING
//  function palindrome (str){
//  //STEP 2. VALIDATE THAT THE STRING HAS THE CHARACTERISTICS NEEDED SUCH AS NO CHAR, NO SPACES, NO SYMBOLS, CREATE A VARIABLE 
//  //TO SAVE THE REGEX. NOTE; REG EX TOOK FROM THE TUTORIAL
//  var reg = /[\W_]/g; 
//  //STEP 3. HERE WE STORE THE RESULT OF: CONVERT OUR STING TO LOWECASE, AND WE REMOVE ALL THE SPECIAL CHARATERS OR SYMBOLS
//  // WE FOUND BY REPLACING THEM WITH A "BLANK SPACE". 
//  var smallStr= str.toLowerCase().replace(reg, "");
//  //STEP 4. IN THIS VARIABLE WE STORE THE RESULT OF SPLIT OUR NEW TEXT, REVERSE IT, AND PUT THEM BACK TOGETHER AS A STRING 
//  var reversed = smallStr.split("").reverse().join("");
//  //STEP 5. IF THE TEXT REVERSED IS EXACTLY EQUALS TO OUR STRING WITHOUT CHARS OR SIMBOLS, THEN WE HAVE A PALINDROME
//  if (reversed === smallStr) return true;
//  //STEP 6. IF THE COMPARISTION DIFFERS, IS NOT A PALINDROME
//  return false;
//  }
//  console.log(palindrome("ERTRE"));

 //8. Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"
 //instead of the number, and for the multiples of 5, print "Buzz." For numbers which are
 //multiples of both 3 and 5, print "FizzBuzz."


//  //9. Write a function that takes a string as input and returns the length of the longest word
//  //in the string.//
//  //STEP 1: CREATING A FUNCTION THAT ALLOWS TO WORK WOTH STINGS
//  function longWord(str){
//  //STEP 2: WE BRAKE THE STRING AND SEPARATE THEM BY ''
//  var strSplit = str.split(' ');
//  //STEP 3: DECLARE A NEW VARIABLE IN 0, WHICH LATER ON WILL CHANGE ITS VALUE
//  var longestWord = 0;
//  //STEP 4: FOR LOOP, WHERE i = 0; IF i IS LESS THAN THE SPLITTED STRING; ADD 1.
//  for (var i = 0; i < strSplit.length; i++){
//  //STEP 5: HERE IS WHERE EVERYTHING BECOMES FUNNY. SO IF THE LENGTH OF THE SPLITED WORD 
//  //IS GREATER THAN LONGEST WORD (0 IN THE FIRST ITERATION)
//  if (strSplit[i].length > longestWord){ 
//  //STEP 6: THEN THE LONGEST WORD TAKES THAT NEW VALUE, I'LL TAKES THE LENGTH OF 
//  //THE WORD
//  longestWord = strSplit[i].length;
//       }   
//  }
//   return longestWord;
//  }
//  console.log(longWord('Thhhhiiiiis is my nex try, lest see how it goes'));

//  //10. Write a function that takes a string as input and returns the number of vowels (a, e, i,
//  //o, u) in the string.//
//  //STEP 1: CREATE A FUNCTION THAT WORKS WITH STRINGS
//  function vowelCount (str){
//  //STEP 2: STORE THE APROPIATED REGEX 
//  const vowelReg = /[aeiou]/gi;
//  //STEP 3: VERIFY IF THE STRING MATCES WITH THE REGEX AND STORED IN A VARIABLE
//  const strMatches = str.match(vowelReg);
//  //STEP 4: IF IT MATCHES, THEN RETURN THE LENGTH, IF NOT THEN JSST 0
//  if (strMatches){
//  return strMatches.length;
//  }else {
//  return 0;
//  }
//  }
//  console.log(vowelCount('HOlaAA'));