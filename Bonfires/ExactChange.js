//https://www.freecodecamp.com/challenges/exact-change

function checkCashRegister(price, cash, cid) {
  var due_change = cash - price;

  function cashierBalance(cid){
    var balance = 0;
    return balance;
  }

  function calculateChange(){
    var change = [];



    return change;
  }

  if (cashierBalance(cid) > due_change) {
    return calculateChange();
  } else if (cashierBalance(cid) === due_change) {
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
