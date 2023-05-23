//chap 9 - 11
//Q # 1
var cityname = prompt("Enter City :");
if(cityname === "Karachi" ){
    document.write("Welcome to City of Lights! <br/>")
}
//Q # 2
var gender = prompt("Enter your gender:")
if ( gender === " female "){
    document.write("Good Morning Sir!");
}
else{
    document.write("Good Morning Ma'am!");
}
// Q # 3
var color = prompt("Enter the colour of traffic light:");
if(color==="red"){
    alert("Must Stop!");
}
if ( color === "yellow"){
    alert("Ready To Move..");
}
if( color=== "green"){
    alert("Move Now!");
}
//Q # 4
var currentfeul = prompt("Enter the Current fuel of your car in liters :");
if (currentfeul<"0.25 liters" ){
    alert("Please refill the fuel in your car!");
}
else{
    alert("Your fuel Amount is Stable:)")
}

//Q # 5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
if (++c < 14){
   alert("condition 3 is true");
   }
   if(c === 14){
    alert("condition 4 is true");
    }
    var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The costs are equal");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    if("car" < "cat"){
        alert("car is smaller than cat");
        }

        document.write( "------------------ <br />")
// Q # 6   
var total_marks = prompt(" Enter total marks of three subjects: ");
var obtained_marks = prompt(" Enter your obtained marks of three subjects:");
var percentage = (obtained_marks / total_marks) * 100;
document.write("<h1>Marks Sheet</h1>" + "</br>" + "Total marks : " + total_marks + "</br>" +
   "Obtained marks : " + obtained_marks + "</br>" + 
  "Percentage : " + percentage + "%" + "</br>");
if(percentage>= 80){
    document.write("Grade : A-One" + "</br>" + "Remarks : Excellent" + "</br>" );}else if(percentage>=70){
    document.write("Grade : A" + "</br>" + "Remarks : Good" + "</br>" );}else if(percentage>=60){
    document.write("Grade : B" + "</br>" + "Remarks : You need to improve" + "</br>" );}else{
    document.write("Grade : Fail" + "</br>" + "Remarks : Sorry!" );}
    
//Q # 7

var secnum = 7;
var guessNum = +prompt("guess the secret number ranging from 1 to 10:");
if(guessNum === secnum){
    alert("Bingo!Correct answer");
}else if(guessNum === ++secnum){
    alert("Close enough to the correct answer");
}else{
    alert("Wrong!");
}

//Q # 8

var mynum = +prompt("Enter number :");
if(mynum % 3 === 0){
    alert("number is divisible by 3");
      }
else{
 alert("number is not divisible by 3!");  }
          
//Q # 9

var newnum = prompt("Enter any number :");
if(newnum % 2 === 0){
    alert(newnum + " is an even number");
      }
else{
 alert(newnum + " is an odd number");  }
          
//Q # 10

var temp = prompt('"Enter Temperature:"');
if(temp > 40){
    alert("It is too hot out side");
}else if(temp > 30){
    alert("The weather today is normal");
}else if(temp > 20){
    alert("Today's Weather is cool");
}else{
    alert("OMG!Today's Weather is so cool");
}

//Q # 11
var mynum1 = prompt("Enter First Number :");
var mynum2 = prompt("Enter Second Number :");
var operators = prompt("Enter Operator e.g(+ - * / %)");
if(operators === "+"){
    alert(mynum1 + operators + mynum2 + " = " + (mynum1+mynum2));
}else if(operators === "-"){
    alert(mynum1  + operators  + mynum2 + " = " + (mynum1-mynum2));
}else if(operators === "*"){
    alert(mynum1  + operators  + mynum2 + " = " + (mynum1*mynum2));
}else if(operators === "/"){
    alert(mynum1 + operators  + mynum2 + " = " + (mynum1/mynum2));
}else if(operators === "%"){
    alert(mynum1 + operators + mynum2 + " = " + (mynum1 % mynum2));
}else{
    alert("Error! Invalid Operator");
}
//end