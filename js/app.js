
alert('WELCOME TO TEAM APOLLO CARD PAGE BY ONYEMENAM CHARLES');

// ////////////////////////////// QUESTION 1 SOLUTION//////////////////////////////////////////

let card= document.querySelector('.team1');card.style.color='Red';



/////////////////////////////////////////// Question 2 solution.//////////////////////////////

let question2 = ("SOLUTION" + " " + "2");
console.log(question2);
 
let apolloTeam = ['nutjob', 'charles', 'krisemeka', 'ladel', 'drew' , 'stanleyceejay','krisemeka'];

console.log(apolloTeam[1]);

////////////////////////////////////////////////// Question 3 solution./////////////////////////////

let question3 = ("SOLUTION" + " " + "3");
console.log(question3);

let intro = {
    firstName: 'Onyemenam',
    lastName: 'Charles',
    bestMovie: 'Game of Thrones',
    bestFood: 'Plaintain and Egg',
    complexion: 'dark',
    birthMonth: 'January',
    state: 'Delta',
    groupName: 'Apollo',

}
console.log(intro.bestMovie);

////////////////////////////////////////////////// Question 4 solution./////////////////////////////

let question4 = ("SOLUTION" + " " + "4");
console.log(question4);

let noun= "Stadium", verb= "Run", adjective = "small";

let firstSentence = "The" + " " + noun + " " + "is" + " " + adjective;

console.log(firstSentence);

let secondSentence = "She" + " " + verb + " " + "to" + " " + noun;

console.log(secondSentence);

let thirdSentence = "She" + " " + "hates" + " " + "his" + " " +adjective +" " + noun ;

console.log(thirdSentence);

let fourthSentence = "Charles goes to a" + " " + adjective + " " + noun;

console.log(fourthSentence);

let fifthSentence = "Mrs. Nutjob walks a" + " " + adjective + " " + noun + " " + "he" + " " + verb +" " + "to." ;

console.log(fifthSentence);

////////////////////////////////////////////////////// question 5 Solution////////////////////////////////


let question5 = ("SOLUTION" + " " + "5");
console.log(question5);

remainderX = (number4, number5) => {
    let remainderX = number4 % number5;
    return [remainderX]
}

console.log(remainderX(20, 4));
// ////////////////////////////////   question 6 Solution. ///////////////////////////////

let question6 = ("SOLUTION" + " " + "6");
console.log(question6);

 formula = (a, b, c) => {
    
     let positive = Math.floor(((-1 * b) + Math.sqrt((b**2)- 4*a*c)) / 2 * a);
    let negative = Math.floor(((-1 * b) - Math.sqrt((b**2)- 4*a*c)) / 2 * a);
    

   return [positive, negative];

 }

 console.log(formula(-4, 12, 7));

////////////////////////////////////////////////// Question 7 solution./////////////////////////////

let question7 = ("SOLUTION" + " " + "7");
console.log(question7);

const myNoun= "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = `Charles has a ${myAdjective} ${myNoun} that ${myVerb} ${myAdverb}. `;

console.log(wordBlanks);

////////////////////////////////////////////////// Question 8 solution./////////////////////////////

let question8 = ("SOLUTION" + " " + "8");
console.log(question8);

area_of_a_circle = (radius) => {
    const PI = 3.142;
    return [PI * radius * radius];
}

console.log(area_of_a_circle(9));

////////////////////////////////////////////////// Question 9 solution./////////////////////////////

let question9 = ("SOLUTION" + " " + "9");
console.log(question9);

let principal= 8200, rate = 17.5, time =2.5;
const simpleInterest = (principal * rate * time)/100;
console.log(simpleInterest)

////////////////////////////////////////////////// Question 10 solution./////////////////////////////

let question10 = ("SOLUTION" + " " + "10");
console.log(question10);

console.log(10 % 4);

////////////////////////////////////////////////// Question 3 solution./////////////////////////////

let question11 = ("SOLUTION" + " " + "11");
console.log(question11);

//text data 2

let text1 = ("SOLUTION" + " " + "Textdata1");
console.log(text1);

let meritMass1 = 78;
let meritHeight1 = 1.9;

let nutjobMass1 = 92;
let nutjobHeight1 = 1.95;

let meritBmi1 = (meritMass1/(meritHeight1**2));
console.log(meritBmi1);

let nutjobBmi1 = (nutjobMass1/(nutjobHeight1**2));
console.log(nutjobBmi1);

let meritHigherBMI = (meritBmi1 > nutjobBmi1);
console.log(meritHigherBMI);

// test data 2

//text data 2

let text2 = ("SOLUTION" + " " + "Textdata2");
console.log(text2);

let meritMass2 = 85;
let meritHeight2 = 1.76;

let nutjobMass2 = 95;
let nutjobHeight2 = 1.88;

let meritBmi2 = (meritMass2 / (meritHeight2**2));
console.log(meritBmi2);

let nutjobBmi2 = (nutjobMass2 / (nutjobHeight2**2));
console.log(nutjobBmi2);

let meritHigherBMI2 = (meritBmi2 > nutjobBmi2);
console.log(meritHigherBMI2);