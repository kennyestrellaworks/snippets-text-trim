// Trimming words.
// In this snippet, 'wordArray' has elements which are a 'string' of of words. We will loop 'wordArray' then push each 
// element to 'wordArrayEdited' but we will format the elements whose length is less than or equal to 'stringLimit' so that
// each element of the 'wordArrayEdited' are least equivalent to 'stringLimit'.

const wordArray = ['document', 'running', 'walking', 'ease', 'tease', 'rice', 'program', 'developer']
const stringLimit = 5
let wordArrayEdited = []
let stringTrim = ''

for (let i = 0; i < wordArray.length; i++) {
    console.log('wordArray', wordArray[i])
    // Checking if current 'wordArray' item [i] is LESS THAN or EQUAL to 'stringLimit'.
    if (wordArray[i].length <= stringLimit) {
        // If it's equal, we push the current item [i] to 'wordArrayEdited'.
        wordArrayEdited.push(wordArray[i])
    } else {
        // If not, we will perform some for loop using the 'stringLimit'.
        // The process is that, the elements whose length are LESS THAN or EQUAL to 'stringLimit'
        // will be trimmed based on the value of 'stringLimit'.
        for (let j = 0; j < stringLimit; j++) {
            stringTrim += wordArray[i][j]
        }
        // After those elements are trimmed, we push it to 'wordArrayEdited'.
        wordArrayEdited.push(stringTrim + ' ...')
        stringTrim = '' // Reset
    }
}
console.log(wordArrayEdited)