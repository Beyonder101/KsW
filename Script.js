var a = "10";
var b = "20"; 
var goku = "6";
var bulma = "9";
// constant and varibles ,let
let x = "90";


console.log(a);
console.log(b);
//----------------------------------------------------------------------------------

// primitives = number , string, null , undefined, boolean
// reference type = array, object, function
// reference type = [] , () , {}
// any value         those valose are primitive
//eg - 
var s = 12;
var t = s;
var u = [1,3];
var v = u;

u.pop();

//----------------------------------------------------------------------------

//conditionals - if else , else - if
// if this happens do this, else do that

if (11>12){
}

else if(14<13){
}

else if(14>15){
}


//-------------------------------------------------------------------------------------

// loops 
// types of loop - for , while , do while

// 1 1 1 1 1 1 1 1 1 1         - repition of numder
// 1 2 3 4 5 6 7 8 9 10        - repition of print 

//print hi * 4 times

console.log("hi");

// now print hi * 40 times

// for(strat;end;change)

console.log(0);

for(var i = 0; i < 40; i++){
    console.log(i);
}

// print 20 to 40.
for (var i = 20; i < 41; i++){
    console.log(i);
}

// loop while
var p = 20;
while (p<20){
    console.log(p);
    a++;
}
//-------------------------------------------------------------------------------------

// Function -  give code a name and call it
// use for only 3 things 
// Run in future, Re-use the code, Run code with differnt data <<<0000>>>>
// exaplem whlie adding color to the page background 
// their are total 6 style to write functions


function GREETWITHYO(){
    console.log("yo");
}
GREETWITHYO();

// examples of this functions
function genshinimpact(){                  
    // define the work , task , function then.
    // after that add the function.
    console.log("tap to enter the game");
    console.log("open adventure book");
    console.log("guid to daily task");
    console.log("fast travel to task");
    console.log("do tsak 1,2,3");
    console.log("exit game");
}

genshinimpact();

function abcdefg(k,o,p){
    console.log(k,o,p);
}
abcdefg(1/2,9%6,8*2);            // arguements

//arguements -   real value give on start of funtion 
// premeters -   variable , to store value of arguments

// use  Array to add more then one arguement
// array - group of values
var arr = [10,20,13];
abcdefg(arr[0],arr[1],arr[2]);                     
// 10 is index
 // postion in array start from 0, 1, 2, so on
arr = 0 ,1 ,2

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Array 
// push, pop, shift, unshift
var arr= [1,2,3,4,5,6,7];
arr.push(9);
arr.pop(7);
arr.unshift(0);
arr.shift(2);
arr.splice(2,2);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// Objects - if thier are more then one then its Array of objects, Object is hold one /indivisual key value pair
// blank objecy 
var u = {};