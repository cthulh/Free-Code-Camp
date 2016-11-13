/*
 Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */
function convertHTML(str) {

  result = "";
  result = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;");
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));

