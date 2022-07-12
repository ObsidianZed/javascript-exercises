const ftoc = function(input) {

  if (typeof(input) == "number") {
    let result = ((input-32) * 5/9);
    result = Number(Math.round(result + 'e' + 1) + 'e-' + 1);
    return result;
  } else {
    return "ERROR";
  }

};

const ctof = function(input) {

  if (typeof(input) == "number") {
    let result = ((input * 9/5) + 32);
    result = Number(Math.round(result + 'e' + 1) + 'e-' + 1);
    return result;
  } else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
