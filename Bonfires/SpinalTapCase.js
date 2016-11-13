
function spinalCase(str) {
  // 1. Convert first capital letter to lower caps
  str = str.replace(/(^[A-Z])/g, function(match){ return match.toLowerCase(); });
  // 2. Convert any other capital letters to lower caps and insert additional space to indicate word separation
  // in case camel case entry
  str = str.replace(/([A-Z])/g, function(match){ return " " + match.toLowerCase(); });
  // 3. Convert underscores to spaces
  str = str.replace(/_/g," ");
  // 4. Convert spaces to dashes
  str = str.replace(/\s+/g,"-");
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
