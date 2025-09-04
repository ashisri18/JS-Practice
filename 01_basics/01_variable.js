const accountId = 4352435
let accountEmail = "ashitestmail@gmail.com"
var accountPassword = "Srivastava"    // should NOT use because of JS doesn't have any control over block scope. If any one change this varaible at one place, it will change for all other places also.
accountCity = "Bangalore"
let accountState

// accountId = 53642    // Not Allowed for Const
accountEmail = "ashi.sri.18@gmail.com"
accountPassword = "Password"
accountCity = "Kanpur"

/*
Prefer not to use var
Because of issue on block scope and fuctional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

