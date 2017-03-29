// Adds two command line arguments (numbers).
var operator = process.argv[2];
var x = parseFloat(process.argv[3]);
var y = parseFloat(process.argv[4]);

switch(operator) {
  case 'add':
    console.log(x + y);
    break;
  case 'subtract':
    console.log(x - y);
    break;
  case 'multiply':
    console.log(x * y);
    break;
  case 'divide':
    console.log(x / y);
    break;
  case 'power':
    console.log(Math.pow(x,y));
    break;
  case 'modulus':
    console.log(x % y);
    break;  
}


