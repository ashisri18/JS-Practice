 console.log('\n--- Numbers Examples ---');
 
 const score = 400
 console.log('Score:', score); 

 const balance = new Number(4567.897);
 console.log('Balance:', balance.toString());
 console.log(`Balance(fixed 2): ${balance.toFixed(2)}`);
 console.log(`Score (fixed 2): ${score.toFixed(2)}`);

 const pi = 3.14159;
 console.log('Pi:', pi);
 console.log('Pi (fixed 3):', pi.toFixed(3));
 console.log('Pi (precision 4):', pi.toPrecision(4));  
 console.log('Pi (precision 2):', pi.toPrecision(2));
 console.log('Pi (precision 6):', pi.toPrecision(5));

const largeNum = 1234567890n; 
console.log('Large Number:', largeNum);
console.log(`Number in internation format: ${largeNum.toLocaleString()}`);
// or 
console.log('Number in internation format (toLocaleString):', largeNum.toLocaleString('en-US'));
// Indian format
console.log('Number in Indian format (toLocaleString):', largeNum.toLocaleString('en-IN'));



// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++
console.log('\n--- Maths Examples ---');