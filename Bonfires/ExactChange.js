//https://www.freecodecamp.com/challenges/exact-change

function checkCashRegister(price, cash, cid) {
  console.log("----");
  console.log("Price: " + price);
  console.log("Cash: " + cash);
  console.log("In cashier: " + cid);

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
  console.log("Due change: " + due_change);
  var change = [];
  var running_change = due_change;
  for (i = cid.length - 1; i >= 0; i -= 1){
    var unit = cid[i][0];
    console.log("Checking unit: " + unit);
    var worth_of_unit;
    for (y = 0; y < VALS.length ; y +=1){
      if (VALS[y][0] === unit) {
        worth_of_unit = VALS[y][1];
        console.log("Worth of unit: " + worth_of_unit);
      }
    }
    console.log("Is worth of unit greater than running change? " + (worth_of_unit <= running_change));
    console.log("Total value of unit in cashier: " + cid[i][1]);
    var running_in_cashier = cid[i][1];
    var deducted = 0;
    if (worth_of_unit <= running_change && running_in_cashier > 0){
      while (running_change - worth_of_unit >= 0 && running_in_cashier > 0){
        console.log("Deducted: " + deducted);
        deducted = (((deducted * 100) + (worth_of_unit * 100))/100).toFixed(2);
        running_change = ((running_change * 100 - worth_of_unit * 100)/100).toFixed(2);
        running_in_cashier = ((running_in_cashier * 100 - worth_of_unit * 100)/100).toFixed(2);
      }
      change.push([unit,parseFloat(deducted)]);
    }
  }
  var value_of_change = change.map(function(element){return element[1]}).reduce(function(a,b){return (a*100 + b*100)/100;},0);
  var value_in_cashier = cid.map(function(element){return element[1]}).reduce(function(a,b){return (a*100 + b*100)/100;},0);
  console.log("Value in cashier: " + value_in_cashier + ", value of change: " + value_of_change);
  console.log(value_of_change);
  console.log("[" + change + "]");
  if (value_of_change < due_change) {
    return "Insufficient Funds";
  } else if (value_of_change === value_in_cashier) {
    return "Closed";
  } else {
    return change;
  }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);