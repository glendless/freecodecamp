const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isPalindrome = (text) => {
  text = text.toLowerCase().replace(/[^a-z0-9]/gi, ''); //normalizing the string, converting it to lowercase and removing all non-alphanumeric characters
  for (let i = 0; i < text.length / 2; i++) {
    //looping through half of the string
    if (text[i] !== text[text.length - 1 - i]) {
      // condition to check if it's a palindrome?
      return false; //not a palindrome
    }
  }
  return true; //is a palindrome
};

checkButton.addEventListener('click', () => {
  const text = textInput.value; // getting the value of the input

  if (text === '') {
    // conditional if the input is empty
    alert('Please input a value');
  } else {
    result.textContent = isPalindrome(text) // conditional if the input is not empty
      ? `${text} is a palindrome`
      : `${text} is not a palindrome`;
  }
});

// test the function
// console.log(isPalindrome('A'));
// console.log(isPalindrome('eye'));
// console.log(isPalindrome('_eye'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('not a palindrome'));
// console.log(isPalindrome('A man, a plan, a canal. Panama'));
// console.log(isPalindrome('ever odd or even'));
// console.log(isPalindrome('nope'));
// console.log(isPalindrome('almostomla'));
// console.log(isPalindrome('My age is 0, 0 si ega ym.'));
// console.log(isPalindrome('1 eye for of 1 eye.'));
// console.log(isPalindrome('0_0 (: /- :) 0-0'));
// console.log(isPalindrome('five|_/|four'));
