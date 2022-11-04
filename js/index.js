console.log("I'm ready")


// Iteration 1: Names and Input
const hacker1 = "Marc";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Miquel"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops
//3.1
let driverHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
  driverHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(driverHacker1.trim());
//3.2
let driverHacker1Reverse = "";
for (let i = hacker1.length - 1; i>=0; i--) {
  driverHacker1Reverse += hacker1[i];
}
console.log(driverHacker1Reverse)
//3.3
if (hacker1 < hacker2) {
  console.log ("The driver's name goes first.");
} else if ( hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

//Bonus 1

const loremParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lectus, congue eu massa vitae, ullamcorper porta ligula. Vestibulum sodales iaculis magna at dictum. Vivamus gravida lectus ac lectus consequat, sed porttitor diam tincidunt. Praesent sit amet neque sed odio ornare posuere. Duis eu lectus malesuada, viverra nibh nec, ullamcorper nulla. In sed augue non tortor pharetra auctor gravida sit amet neque. Phasellus sit amet ante vitae risus ornare mollis. Phasellus eget nunc ex. Donec porttitor neque quis volutpat sodales. Donec aliquet vulputate pharetra. Nullam vitae laoreet orci. Aliquam ac elit sodales, auctor justo quis, volutpat libero. Mauris at euismod mi. Nullam turpis nunc, semper eget rhoncus non, tempor in libero. Vestibulum fermentum, sem a malesuada iaculis, massa libero ultricies mauris, non sagittis mi quam ac purus. Quisque dignissim imperdiet dui, at ultrices elit bibendum sed. Donec ut lectus in est mollis sagittis. Donec facilisis lectus ultrices purus pellentesque fringilla. Fusce ullamcorper sed turpis et lacinia. Phasellus elementum risus eu orci ullamcorper posuere. Vestibulum et dictum nunc, non euismod nisl. Integer dapibus eget nunc et lacinia. Nulla facilisi. Integer at ultrices massa, ac fermentum velit. Aliquam auctor sodales neque eu eleifend. Nulla feugiat massa a nunc vestibulum, viverra ornare diam lacinia. Pellentesque at nulla a ipsum tincidunt facilisis ut quis massa. Etiam eget consectetur justo."

const newArrLorem = loremParagraph.split(' ');

console.log(`The number of words in the string is: ${newArrLorem.length}`);

let countEt = 0;

for (let i = 0; i < newArrLorem.length; i++) {
  if (newArrLorem[i] === "et" || newArrLorem[i] === "et.") {
    countEt ++
  } 
}
console.log(countEt)