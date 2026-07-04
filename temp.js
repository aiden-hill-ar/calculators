function degreeCalculator(degree, temp) {
  const fahrenheit = (temp * 9/5) + 32;
  const celsius = 5/9 * (temp - 32);
  if (degree === 'fc') {
    return `${temp} Degrees Fahrenheit = ${celsius} Degrees Celsius`;
  } else if (degree === 'cf') {
    return `${temp} Degrees Celsius = ${fahrenheit} Degrees Fahrenheit`;
  } else {
    return 'Please enter "fc" for Fahrenheit to Celsius or "cf" for Celsius to Farhenheit';
  };
};                   // Enter Input HERE
console.log(degreeCalculator('cf', 35));