// Return length of longest word in input string
function longestWordLength(s) {
 let manipArray = (s.split(''));
  let n = 0;
  for (let i = 0; i < manipArray.length; i++) {
    if (manipArray[i].length > n) {
      n = manipArray[i].length;
    }
  }
  return n;
}

// Check if string ends with target
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
function repeatStringNumTimes(str, num) {
  let strArr = [];
  if (num < 0) {
    return '';
  }
  for (; num > 0; num--) {
    strArr.push(str);
  }
  return strArr.join('');
}

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  let strArr = str.split('');
  let str2;
  if (strArr.length <= num) {
    str2 = strArr.slice(0, num).join('');
  } else if (strArr.length > num) {
    str2 = strArr.slice(0, num).join('').concat('...');
  }
  console.log(str2);
  return str2;
}

// Capitalize all first letters
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

// Copy each element of the first array into the second array at index 'n'
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  let arr4 = arr1.slice().reverse();
  
  for (let i = 0; i < arr4.length; i++) {
    arr3.splice(n, 0, arr4[i]);
  }
  console.log(arr3);
  return arr3;
}

// Remove all falsy values from array
function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(!arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
