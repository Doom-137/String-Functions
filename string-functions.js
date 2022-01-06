// Return length of longest word in input string
// Speed: 0.07 - 0.11ms
function longestWordLength(s) {
 let manipArray = (s.split(' '));
  let n = 0;
  for (let i = 0; i < manipArray.length; i++) {
    if (manipArray[i].length > n) {
      n = manipArray[i].length;
    }
  }
  return n;
}

// Check if string ends with target
// Speed: 0.16 - 0.19ms
function confirmEnding(str, target) {
  let manipStr = str.split('');
  let splitTarget = target.split('').reverse();
  let returnVal = false;
  for (let i = 0; i < splitTarget.length; i++) {
    if (splitTarget[i] === manipStr[(manipStr.length - 1) - i]) {
      returnVal = true;
    } else {
      return false;
    }
  }
  return returnVal;
}

// Repeat string
// Speed: 0.31ms
function repeatString(str, n) {
  let strArr = [];
  if (n < 0) {
    return '';
  }
  for (; n > 0; n--) {
    strArr.push(str);
  }
  return strArr.join('');
}

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Speed: 0.31 - 0.34ms
function truncateString(str, num) {
  let strArr = str.split('');
  let str2;
  if (strArr.length <= num) {
    str2 = strArr.slice(0, num).join('');
  } else if (strArr.length > num) {
    str2 = strArr.slice(0, num).join('').concat('...');
  }
  return str2;
}

// Capitalize all first letters
// Speed: 0.94 - 1.10ms
function titleCase(str) {
  let strSplit = str.split(' ');
  let returnStr;
  for (let i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].toUpperCase();
    strSplit[i] = strSplit[i].split('');
  }
  for (let i = 0; i < strSplit.length; i++) {
    for (let j = 1; j < strSplit[i].length; j++) {
      strSplit[i][j] = strSplit[i][j].toLowerCase();
    }
  }
  for (let i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].join('');
  }
  returnStr = strSplit.join(' ');
  return returnStr;
}

// Capitalize all first letters MKII
// Speed: 0.36 - 0.60ms
function titleCaseMKII(str) {
 str = str.toLowerCase().split(' ');
 for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
 }
 return str.join(' ');
}
