
function Hello(){

	var user = prompt("what is your name");
    document.getElementById('here').innerHTML = " hello " +user +" welcom to my website ";

}

function Hello2(){

	var user = prompt("what is your name");
    document.getElementById('here2').innerHTML = " hello " +user +" welcom to my website ";

}

function sum(){ 


     var numb1 = parseInt(document.getElementById("number1").value);
     var numb2 = parseInt(document.getElementById("number2").value);
     var total = numb1 + numb2;

     document.getElementById('total').innerHTML =total;
}

function Average(){ 


     var grade1 = parseInt(document.getElementById("grade1").value);
     var grade2 = parseInt(document.getElementById("grade2").value);
     var grade3 = parseInt(document.getElementById("grade3").value);
     var average = (grade1 + grade1+ grade3) /3;

     if (result < 6) {
     	document.getElementById("status").innerHTML ="you failed";

     } else {
     	document.getElementById("status").innerHTML ="you are aproved";
     }
     document.getElementById("result").innerHTML ="your average is" + result;
     

     document.getElementById('average').innerHTML =average;

}

function Rain(){

var rain = prompt("is it rainning? Yes:1 No:0");

if (rain == 0) {
console.log("Don't take your umbrella");
} else { console.log ("take your umbrella")};
}

function subtract(){ 


     var nu1 = parseInt(document.getElementById("nu1").value);
     var nu2 = parseInt(document.getElementById("nu2").value);
     var totall = nu1 - nu2;

     document.getElementById('totall').innerHTML =totall;
}
function multiply(){ 


     var lu1 = parseInt(document.getElementById("lu1").value);
     var lu2 = parseInt(document.getElementById("lu2").value);
     var totalll = lu1 * lu2;

     document.getElementById('totalll').innerHTML =totalll;
}

