function isPositiveEvenNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

function isPositiveEvenNumber2(n) {
  let isValid = false;
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }
  return isValid;
}

function isPositiveEvenNumber3(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isPositiveEvenNumber3(5));

function classifyStudent(mark) {
  let number;

  if (mark > 8) number = "Excellent";
  else if ( mark >= 7) number = "Good";
  else if ( mark >= 4) number = "Not Good";
  else number = "Bad";
  return number;
}
console.log(classifyStudent(1));

function classifyStudent2(mark) {
  if (mark < 0 || mark > 10) return "";

  let number = "Bad";

  if (mark > 8) number = "Excellent";
  else if ( mark >= 7) number = "Good";
  else if ( mark >= 4) number = "Not Good";
  

  return number;
}
console.log(classifyStudent2(11));

function classifyStudent3(mark) {
    if (mark < 0 || mark > 10) return "";
  
    if (mark > 8) return 'Excellent';
    else if ( mark >= 7) return "Good";
    else if ( mark >= 4) return "Not Good";
    else return "Bad";
    
  
    return number;
  }
  console.log(classifyStudent3(3));
