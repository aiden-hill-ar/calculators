/* Water Intake Calculator
normal water intake levels are weight/2 until 85 degrees in which you increase by 10%, 20%, or 30%
*/

const profiles = [{name: "aiden", weight: 124}, {name: 'ange', weight: 135}];
const currentProfile = profiles[0];

const waterDrankDays = [197.44]
// Fill in how much water you drank today below
const waterDrank = ['2cup', '2cup'];

const waterDrankOZ = [];
// Don't do anything for the array right above, this is for the logic below

function determineWaterIntake(person) {
   return person.weight / 2;
};

// converts all water types to OZ
function determineWaterDrank(arr) {
   const amount = [];
   const waterType = [];

   arr.forEach(str => {
      const numPart = str.match(/^\d+/);  // Leading digits
      const letterPart = str.match(/[a-zA-Z]+/);  // First letter sequence

      if (numPart) amount.push(numPart[0]);
      if (letterPart) waterType.push(letterPart[0]);
   });
   function measurementTypeCalc(index) {
      if (waterType[index] === 'cup') {
         return amount[index] * 8;
      } else if (waterType[index] === 'L') {
         return amount[index] * 33.814;
      } else if (waterType[index] === 'pint') {
         return amount[index] * 16;
      } else if (waterType[index] === 'qt') {
         return amount[index] * 32;
      };
   };
   for (let i = 0; i < waterType.length; i++) {
      if (waterType[i] === 'oz') {
         waterDrankOZ.push(amount[i] * 1); // * by 1 to turn it into a num instead of str
      } else if (waterType[i] === 'cup' || waterType[i] === 'L' || waterType[i] === 'pint' || waterType[i] === 'qt') {
         waterDrankOZ.push(measurementTypeCalc(i));
      };
   }
};

determineWaterDrank(waterDrank);

function addAllOZ(arr) {
   return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

function drankEnough() {
   const water = addAllOZ(waterDrankOZ) - determineWaterIntake(currentProfile);
   function logInfoIfYes() {
      console.log('You drank enough water today!');
      console.log(`You drank a total of ${addAllOZ(waterDrankOZ)}oz today!`);
      console.log(`That means you drank ${water}oz more than your daily minimum (${determineWaterIntake(currentProfile)}Fl oz) today!`);
   };
   function logInfoIffNo() {
      console.log('You did not drink enough water today!');
      console.log(`You drank a total of ${addAllOZ(waterDrankOZ)}oz today.`);
      console.log(`That means you drank ${Math.abs(water)}oz less than your daily minimum (${determineWaterIntake(currentProfile)} Fl oz) today!`);
   };
   if (water >= 0) {
      return logInfoIfYes();
   }
   return logInfoIffNo();
};
console.log('----------');
drankEnough()
console.log('----------');