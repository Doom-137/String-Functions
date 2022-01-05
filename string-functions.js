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
