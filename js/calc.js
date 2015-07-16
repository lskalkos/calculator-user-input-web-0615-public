/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

$(document).ready(function(){

  createCalculation($('#addition'), addition);
  createCalculation($('#subtraction'), subtraction);
  createCalculation($('#multiplication'), multiplication);
  createCalculation($('#division'), division)
  createCalculation($('#modulus'), modulus);


});

function createCalculation(element, callback) {
  var x, y, z;

  element.change(function() {

    x = $(this).find('input:eq(0)').val();
    y = $(this).find('input:eq(1)').val();

    x = parseFloat(x);
    y = parseFloat(y);

    z = callback(x, y);

    $(this).find('input:eq(2)').val(z);

  });
}

function subtraction(x, y) {
  return x - y;
}

function addition(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x/y;
}

function modulus(x, y) {
  return x%y;
}