//Question three

function sumAndMultiply(a,b,c) {
  var sumTemp = sum(a,b);
  var sumTotal = sum(sumTemp, c);
  var productTemp = multiply(a,b);
  var productTotal = multiply(productTemp, c);
  var arr = [];
  arr.push(sumTotal);
  arr.push(productTotal);
  var message = a + 'and ' + b + 'and ' + c + 'sum to ' + sumTotal + '.' + "The product of" + a + 'and' + b + 'and' + c + 'is' + productTotal + '.';
  arr.push(message);
  
}

function multiply(a,b) {
  var product1 = a * b;
  var arr = [];
  arr.push(product1);

}

function sum(a, b) {
  var sum1 = a + b;
  var arr = [];
  arr.push(sum1);
  
}

