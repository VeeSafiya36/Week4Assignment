// Question 1. a.):
// create a function that subtracts the first element from the last element in a array

//created an array called ages
let ages = [3,9,23,64,2,8,28,93]
console.log(ages);

//find last element in array
let lastElement = ages[ages.length - 1];
console.log(lastElement);

//find first element in array
let firstElement = ages[0]
console.log(ages[0]);

//subtract the last element from the first element in the array
let subtractedValue = (lastElement) - (firstElement);
console.log(subtractedValue);

// b.) add a new age to your array and repeat the step above

ages.push(15);
console.log(ages);

lastElement = ages[ages.length -1];
console.log(lastElement);

subtractedValue = (lastElement) - (firstElement);
console.log(subtractedValue);

// c.) Use a loop to iterate through the array and calculate average age

// created a for loop to iterate through array and declared sum variable
let sum = 0
for(i=0;i<ages.length;i++){
sum += ages[i];
}
//decalred average variable to find average
  var average = sum / ages.length;
  console.log(average);  

   
 // Question 2. create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'
 let names = ['Sam','Tommy', 'Tim','Sally','Buck','Bob']    

 // a.) use a loop to iterate through the array and calculate the average number of letters per name

 //created empty array amountOfLetters and created for loop to iterate through names array. Then I pushed the amount
 // of letters into the empty array
 let amountOfLetters = []
 for(let i = 0; i < names.length; i++) {
    amountOfLetters.push(names[i].length) 
 }
 console.log(amountOfLetters);

 // declared newSum variable
 let newSum = 0;

 //created a for loop to iterate through array and find sum of elements added together
 for(let i = 0; i < amountOfLetters.length; i++) {
    newSum += amountOfLetters[i];
 }
    console.log(newSum);
    //declared newAverage variable to calculate average
    let newAverage = newSum / amountOfLetters.length;
    console.log(newAverage);

    // b. use a loop to iterate through the array again and concatenate all the names together, separated by spaces
    let string= ' ';
    for(let i = 0; i < names.length; i++) {
        string = string + names[i] + " "
    }
    console.log(string)
    

    // Question 3. How do you access the last element of any array?
// array[array.length - 1]; is used to access the last element in an array

    // Question 4. How do you access the first element of any array?
    // array[0] is used to access the first element of any array.

    // Question 5. Create a new array called nameLengths. Write a loop to iterate over the previously
    // created names array and add the length of each name to the nameLengths array.
    
    //declared new array and iterated over the previously created names array
    nameLengths = [];
    for(let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    
    //added length of each name to nameLengths array
    nameLengths = [3, 5, 3, 5, 4, 3];
    console.log(nameLengths);

    // Question 6. Write a loop to iterate over the nameLengths array and calculate the sum
    // of all the elements in the array.

    //declared arraySum variable and created for loop to iterate through array. Then, I set arraySum +1
    //equal to the sum of the elements in the array.
    arraySum = 0;
    for(let i=0; i < nameLengths.length; i++) {
        arraySum += nameLengths[i];
    }
    console.log(arraySum);

    // Question 7. Write a function that takes two parameters, word and n, as arguments and returns the word
    //concatenated to itself n number of times.
    
    let word = "";
    let n = 0
    wordMachine = (word,n) => {
        console.log(word.repeat(n))
    }
    wordMachine("Yay",3);

    // Question 8. Write a function that takes two parameters, firstName and lastName, and returns a full name
    //The full name should be the first and last name separated by a space.
    
    fullName = (firstName,lastName) => {
      console.log(firstName + " " + lastName)  
    }
    fullName("Lisa","Bonn");

    //9. Write a function that takes an array of numbers and returns if the sum of all the numbers
    //in the array is greater than 100.

    //created an array of numbers
    numbersArray = [5,12,15,20,37,18,59]

    //created a for loop to find the sum of all elements in the array
    sumOfArrayNumbers = 0
    for(let i=0; i < numbersArray.length; i++){
        sumOfArrayNumbers+= numbersArray[i]
    }
    
    //created a function that takes in numbersArray and returns if the sum is greater than 100
   addingMachine = (numbersArray) => {
    if(sumOfArrayNumbers > 100){
        return `${sumOfArrayNumbers} is grater than 100`
    }
   }
   console.log(addingMachine(numbersArray))


    //Question 10. Write a function that takes an array of numbers and returns the average of all the
    //elements in that array
    
   //created an array of numbers
   myNumbers = [3,5,15,9,22,11,44,55]

   //created a for loop to find the sum of all the elements and found average
   let totalSum = 0
   for(let i=0; i < myNumbers.length; i++){
        totalSum+= myNumbers[i]
   }
   let myNumbersAverage = totalSum / myNumbers.length
   
   //created function to take in array of numbers and returns the average
   averageMachine = (myNumbers) => {
    return `The average is ${myNumbersAverage}`
   }
    console.log(averageMachine(myNumbers));

    //Question 11. Write a function that takes two arrays of numbers and returns true if the average
    //of the elements in the first array is greater than the average of the elements in the second array.

    //created two number arrays
    array1 = [10,20,30]
    array2 = [23,33,43]
    //declated sum variables and used a for loop to find the sum and average of array1 and array2
   sum1 = 0;
   for(let i=0; i<array1.length;i++){
        sum1+=array1[i];
   }
   let array1Average = sum1 / array1.length
   console.log(array1Average)

   sum2 = 0;
   for(let i=0; i<array2.length; i++){
    sum2+=array2[i];
   }
   let array2Average = sum2 / array2.length
   console.log(array2Average)

   //created a function to compare average of two arrays
   compare2Averages = (average1,average2) => {
    if(array1Average > array2Average){
        return true;
    } else{
        return false;
    }
   }
   console.log(compare2Averages(array1Average,array2Average))

   //12. Write a function willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket,
   //and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

   //created a function with isHotOutside and moneyInPocket that returns true if isHotOutside
   //and moneyInPocket is greater than 10.50
   willBuyDrink = (isHotOutside,moneyInPocket) => {
    if(isHotOutside = true && moneyInPocket > 10.50){
        return true;
    } else{
        return false;
    }
   }
   console.log(willBuyDrink(true,12));

  // 13. Create a function of your own that solves a problem. In comments, write what the function does
  // and why you created it.
  
  //This function takes in an amount of money in the bank and amount of money spent. It gives the
  //percentage of money spent. This was created as a quick way to see the percentage of money being spent.

  let percentSpent = 0;
  percentOfMoneySpent = (moneyInBank,moneySpent)=> {
    percentSpent = moneyInBank/ moneySpent
    return percentSpent;
  }
    console.log(percentOfMoneySpent(555,2000));