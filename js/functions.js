function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}

function isPalindrome(inputString) {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');

  return cleanedString === cleanedString.split('').reverse().join('');
}

function extractAndSumDigits(input) {

  input = input.toString();

  if (typeof input === 'number') {
    return input;
  }

  if (typeof input !== 'string') {
    return NaN;
  }


  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const digit = parseInt(input[i], 10);

    if (!isNaN(digit)) {
      result = result * 10 + digit;
    }
  }

  return result === 0 ? NaN : Math.abs(result);
}

export {checkStringLength, isPalindrome, extractAndSumDigits}

