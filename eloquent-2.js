//Challenge 1

for (var number = "#"; number.length <= 7; number += "#")
console.log(number);

//Challenge 2


for (var number = 1; number <= 100; number += 1){
  if (number % 3 == 0 && number % 5 ==0)
  	console.log ("fizz buzz");
  else if (number % 5 == 0)
  	console.log ("buzz");
  else if (number % 3 == 0)
  	console.log ("fizz");
  else console.log (number);
}

//Challenge 3 (incomplete/unsuccessful)

var hash="#";
var space=" ";
var size=8;

for (var y = 1; y <= size-1; y += 1){
  if (y % 2 == 0)
    console.log(hash);
  else
   console.log(space);

{for (var x = 1; x <= size-1; x += 1){
  if (x % 2 == 0)
    console.log(hash);
  else
   console.log(space);
}}
console.log(y+x);
