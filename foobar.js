// asking user how many numbers they want

var x = prompt("How many numbers do you want?", "15")
var y = parseInt(x, 10)
var newTest = new Array(y)

// generating list of y numbers starting from 1

for (let index = 0; index < newTest.length; index++) {
    newTest[index] = index + 1
}


// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/* for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
        numbers.splice(index, 1, "foobar")
    } else if (numbers[index] % 3 === 0) {
        numbers.splice(index, 1, "foo")
    } else if (numbers[index] % 5 === 0) {
        numbers.splice(index, 1, "bar")
    }
}
*/ 

// applying foobar logic to the list of numbers

for (let index = 0; index < newTest.length; index++) {
    if (newTest[index] % 3 === 0 && newTest[index] % 5 === 0) {
        newTest.splice(index, 1, "foobar")
    } else if (newTest[index] % 3 === 0) {
        newTest.splice(index, 1, "foo")
    } else if (newTest[index] % 5 === 0) {
        newTest.splice(index, 1, "bar")
    }
}

// console.log(newTest)

// displaying list of numbers with foobar transformation applied

alert(newTest)

