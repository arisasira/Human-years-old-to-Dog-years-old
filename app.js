//converting my age from human years to dog years
let myAge = 23;
//early dog years, value of variable will change
let earlyYears = 2;
//multiplication assignment operator - calculates new value and assigns it to earlyYears
earlyYears *= 10.5;
//2 years accounted for, subtract 2  from myAge variable
let laterYears = myAge-2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

const myName = ('Arisa')
'Arisa'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in humamn years which is ${myAgeInDogYears} years old in dog years.`);