function validatePIN (pin) {
  return pin.match(/^\d{4}(\d{2})?$/) ? true : false;
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));