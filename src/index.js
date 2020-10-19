module.exports = function check(str, bracketsConfig) {
  // your solution
  var a = bracketsConfig.toString();
  var sum=0;
if (str.length % 2 !== 0) {
  return false;
} else {
  for (var i=0; i<str.length; i++) {
    sum = 0;
    for (var j=0; j < a.length; j = j+4) {
      if (str[i] === a[j] && str[i+1] === a[j+2]) {
        sum = sum + 1;
      } 
    }
    if (sum >= 1) {
      str = str.replace(str[i] + str[i+1], '');
      i = -1;
    } 
  }
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
  
  }
  
}


