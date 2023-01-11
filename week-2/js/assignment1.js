/* Function and Array
 Complete the function below to find the max number of the passing array of numbers.
 Reminder: you can't use built-in Math.max() or sort() to complete this assignment. */
 // a b c d
 // 

 function max(numbers) {
    // your code here
    let maxNumber = "";
    for (let i = 0; i <= numbers.length; i++) {
        if (maxNumber >= numbers[i]) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7