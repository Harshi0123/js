function bmiCalculator(weight, height) {
     var bmi = weight / (height * height);
//Math.pow(base,exponent)
     return Math.round(bmi);
     
}
console.log(bmiCalculator(65,1.8));
