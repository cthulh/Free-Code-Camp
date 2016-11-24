//https://www.freecodecamp.com/challenges/exact-change

function checkCashRegister(price, cash, cid) {
  var VALS = [["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]];

  var due_change = cash - price;

  function cashierBalance(){
    return cid.reduce(function(prev,curr){return prev[1] + curr[1]},0);
  }

  function calculateChange(sum){
    var change = [];
    var running_change = sum;
    
    // iterate over cid from the end to beginning
    // if running change is bigger than value of a unit in VALS
    // deduct maximum multiplication smaller then running change and add that value with name of the unit to change array
    // until running change === 0

    return change;
  }

  if (cashierBalance() > due_change) {
    return calculateChange(due_change);
  } else if (cashierBalance() === due_change) {
    return "Closed";
  } else {
    return "Insufficient Funds";
  }

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
