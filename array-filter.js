// Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2, 4, 5, 6]) // should == [2,4,6]

//SOLUTION:
function getEvenNumbers(numbersArray) {
    return numbersArray.filter((number) => number % 2 === 0)
}