//Foor loop: we use ir when we know how many loops there will be

for (let i=0; i<20; i++){
    console.log(i)
}
//While loop: when we don't know how many loops will be//

let num = 100; // this let migth me an integer intoduced by the user, we basically do not know the value in a real program//
while (num > 10){
    num = num/2;
    console.log(num);

}


//do while has to run at least once, meanwhile the "while" migth not be running never, depending on the first conditional//
do{
    num = num*2;
    console.log(num);
}while (num<100);

//if/else/ else-if, this is used for decitions 
 if (num > 50) {
    console.log ("bigger than 50");

 } else if (num > 10){
    console.log("bigger than 10");
 }else {
    console.log("smaller numer");
 }

 