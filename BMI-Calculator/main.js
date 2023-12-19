function calculateBMI(){
    let age = document.querySelector("#age").value;
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#result");
   
    
    let bmi = (weight/((height*height)/10000)).toFixed(2);
    let interpretation = getBMIDescription(age,bmi)
    result.innerHTML = `${bmi} (${interpretation})`;

}

function getBMIDescription( age ,bmi) {
    
    if (age < 18) {
      // BMI interpretation for children (Placeholder)
      if (bmi < 5.00) {
        return 'Underweight for children';
      } else if (bmi >= 5.00 && bmi < 85.00) {
        return 'Normal weight for children';
      } else if (bmi >= 85 && bmi < 95) {
        return 'Overweight for children';
      } else {
        return 'Obese for children';
      }
    } else {
      // BMI interpretation for adults (Placeholder)
      if (bmi < 18.5) {
        return 'Underweight for adults';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight for adults';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight for adults';
      } else {
        return 'Obese for adults';
      }
    }
  }

