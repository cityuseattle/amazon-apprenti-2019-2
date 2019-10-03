// Create an array of objects which hold the denominations and their values
var money = [
    { name: 'ONE HUNDRED', value: 100.00},
    { name: 'TWENTY', value: 20.00},
    { name: 'TEN', value: 10.00},
    { name: 'FIVE', value: 5.00},
    { name: 'ONE', value: 1.00},
    { name: 'QUARTER', value: 0.25},
    { name: 'DIME', value: 0.10},
    { name: 'NICKEL', value: 0.05},
    { name: 'PENNY', value: 0.01}
  ];
  
  function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
  
    // create drawer object using cid array
    var drawer = cid.reduce( (obj, currencyObj) => {
      obj.total += currencyObj[1]; //creates a total
      obj[currencyObj[0]] = currencyObj[1]; //keeps indidividual currency amounts
      return obj;
    }, { total: 0 });
  
    //Exact Change
    if (drawer.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
  
    // Insufficient funds
    if (drawer.total < change) {
      output.status = 'INSUFFICIENT_FUNDS';
      return output;
    }

  
    // Loop through the money array
    var change_arr = money.reduce( (obj, currency) => {
      var value = 0;
  
      // While there is still money of this type in the drawer
      // And while the denomination is larger than the change remaining
      while (drawer[currency.name] > 0 && change >= currency.value) {
        change -= currency.value;
        drawer[currency.name] -= currency.value;
        value += currency.value;
  
        // deals with precision errors
        change = Math.round(change * 100) / 100;
      }
      // if money denomination was used, push to output
      value > 0 ? obj.push([ currency.name, value ]) : null;
      return obj; // Return the current change_arr
      
    }, []); // Initial value of empty array for reduce
  
    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
      output.status = 'INSUFFICIENT_FUNDS';
      return output;
    }
  
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);