//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){

    let dog_string_list = Object.values(dog_string.split(/[\s,]+/)).map(i => i.toLowerCase())
    let dog_names_list = Object.values(dog_names).map(i => i.toLowerCase())

    for (let i = 0; i < dog_names_list.length; i++) {
        if (dog_string_list.includes(dog_names_list[i])) {
            console.log(`Matched ${dog_names[i]}`)
        } else {
            console.log("No Matches")
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* Given */ arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    }
    console.log(arr)
}

replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



/*****************************************************
 *
 *  My CodeWars problem redos in JavaScript
 *
 ****************************************************/


// #1
// Link to CodeWars problem: 
console.log(`https://www.codewars.com/kata/57356c55867b9b7a60000bd7`)

/*****************************************************
* My original solution in Python:
******************************************************
def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    if operator == '-':
        return value1 - value2
    if operator == '*':
        return value1 * value2
    if operator == '/':
        return value1 / value2

/*****************************************************
* My redo solution in JavaScript:
*****************************************************/
function basicOp(operator, value1, value2) {
    switch (operator) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default:
            return "Error"
    }
}

let operator = '+'
// let operator = '-'
// let operator = '*'
// let operator = '/'
// let operator = 'error'

let value1 = 10
let value2 = 5

console.log(basicOp(operator, value1, value2))


// #2
// Link to CodeWars problem: 
console.log(`https://www.codewars.com/kata/5667e8f4e3f572a8f2000039`)

/*****************************************************
* My original solution in Python:
******************************************************
def accum(s):
    r = ''
    l = list(s)
    for i in range(len(l)):
        r += l[i].upper() + l[i].lower()*i
        if i < len(l)-1:
            r += "-"
    return r

/*****************************************************
* My redo solution in JavaScript:
*****************************************************/
function accum(s) {
    let r = ''
    for (i = 0; i < s.length; i++) {
        r += s[i].toUpperCase() + (s[i].toLowerCase()).repeat(i)
        if (i < s.length - 1) {
            r += '-'
        }
    }
    return r
}

let s = "abcd"
// let s = "RqaEzty"
// let s = "cwAt"

console.log(accum(s))

