// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Boiler plate for my test!!

// describe("areYouHungry", () => {
//     it("returns eat food or keep working based on input", () => {
//       expect(areYouHungry("yes")).toEqual("eat food")
//       expect(areYouHungry("no")).toEqual("keep working")
//     })
//   })



// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeM", () => {
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(codeM(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeM(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeM(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

//  Psuedo Code
// Created a function name called codeM
// methods ill be using for replacing the letters is .replace()
// ill create a conditional statement to replace the letters with the numbers given
// input:string with letters
// ouput:strings with numbers and replacing certain letters.

const codeM = (str) => { 
 for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a')
         {str[i].replace('a',4)}
    else if (str[i] == 'e')
        {str[i].replace('e',3)}
    else if (str[i] == 'i') 
        {str[i].replace('i',1)}
    else if (str[i] == 'o')
          {str[i].replace('o',0)}
    else {}
        }
    return str
}

// FAIL  ./code-challenges.test.js
// codeM
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (7 ms)

// ● codeM › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   expect(received).toEqual(expected) // deep equality

//   Expected: "L4ck4d41s1c4l"
//   Received: "Lackadaisical"
//  I used a conditional statement with . replace to swtch th letter to a number it came back the same. What i did wrong was probally hard coding and putting it in a conditional statement.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("partL", () => {
const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    expect(partL(arrayOfWords1,letterA)).toEqual("Apple", "Banana", "Orange")
    expect(partL(arrayOfWords2,letterE)).toEqual("Cherry", "Blueberry", "Peach")
  })
})

 // b) Create the function that makes the test pass.

//  Psuedo Code
// declaring my function as partL
// I would be looping through the arrray with .filter
// make a conditional statement
// 
// Taking in a array of words,
// taking out words with  particular letter that was given.
  
const partL = (arr,val) => {  
    let filteredVal = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (val = (arr[i])) {
            filteredVal.push(arr.splice(i, 1)[0]);
        }
    }
    return filteredVal
}
// Im not sure where i messed up at. I was filtering through the array thinking i would get the expeccted out come but i dont understand what i did wrong.
// FAIL  ./code-challenges.test.js
// partL
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter. (4 ms)

// ● partL › takes in an array of words and a single letter and returns all the words that contain that particular letter.

//   expect(received).toEqual(expected) // deep equality

//   Expected: "Apple"
//   Received: ["Kiwi", "Orange", "Plum", "Banana", "Apple"]

//     89 | // Expected output: ["Cherry", "Blueberry", "Peach"]
//     90 | it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
//   > 91 |     expect(partL(arrayOfWords1,letterA)).toEqual("Apple", "Banana", "Orange")
//        |                                          ^
//     92 |     expect(partL(arrayOfWords2,letterE)).toEqual("Cherry", "Blueberry", "Peach")
//     93 |   })
//     94 | })

//     at Object.toEqual (code-challenges.test.js:91:42)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.366 s, estimated 1 s
// Ran all test suites.

//  FAIL  ./code-challenges.test.js
// partL
// ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter. (4 ms)

// ● partL › takes in an array of words and a single letter and returns all the words that contain that particular letter.

//   expect(received).toEqual(expected) // deep equality

//   Expected: "Apple"
//   Received: ["Apple", "Banana", "Plum", "Orange", "Kiwi"]

//     89 | // Expected output: ["Cherry", "Blueberry", "Peach"]
//     90 | it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
//   > 91 |     expect(partL(arrayOfWords1,letterA)).toEqual("Apple", "Banana", "Orange")
//        |                                          ^
//     92 |     expect(partL(arrayOfWords2,letterE)).toEqual("Cherry", "Blueberry", "Peach")
//     93 |   })
//     94 | })

//     at Object.toEqual (code-challenges.test.js:91:42)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("fulHs", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
it("takes in an array of 5 numbers and determines whether or not the array is a “full house” ", () => {
    expect(fulHs(hand1)).toEqual(true)
    expect(fulHs(hand2)).toEqual(false)
    expect(fulHs(hand3)).toEqual(false)
  })
})

//  b) Create the function that makes the test pass.

//  Psuedo Code
// declared a function called fulH
// ill identify what is a full house first.
// identify what is one pair and one three of a kind.
// i would use an conditional staetment
// create a variable for fullHouse
//input:array of 5 number
// output: true or false

const fulHs = (arr) => {
    let fullHouse = [5, 5, 5, 3, 3]
for(let i = 0; i < arr.length; i ++ ) {
         if (fullHouse === [5, 5, 5, 3, 3]) {
            return true
      } else if (fullHouse === [5, 5, 3, 3, 4]) {
            return false
      }else {  
               return false
      }
      }
}

// Im getting back false i dont understand why it coming back false i was thinking because i shouldve switch aroung the conditional statement.

// FAIL  ./code-challenges.test.js
// fulHs
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”  (3 ms)

// ● fulHs › takes in an array of 5 numbers and determines whether or not the array is a “full house” 

//   expect(received).toEqual(expected) // deep equality

//   Expected: true
//   Received: false

//     114 | // Expected output: false
//     115 | it("takes in an array of 5 numbers and determines whether or not the array is a “full house” ", () => {
//   > 116 |     expect(fulHs(hand1)).toEqual(true)
//         |                          ^
//     117 |     expect(fulHs(hand2)).toEqual(false)
//     118 |     expect(fulHs(hand3)).toEqual(false)
//     119 |   })

//     at Object.toEqual (code-challenges.test.js:116:26)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.296 s,