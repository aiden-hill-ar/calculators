   /* This is a script to calculate the amount of money I should have after buying a phone
   and it checks to see if I have the minimum amount for the trip and how much extra I have */

   // These are arrays so money can be split up into sources so I have a better view of what's going on

let moneyNow = [280, 200, 155, 20, 20];
let allMoney = [450, 200, 100, 75, 75];

const phone = {
   phone: 'iPhone 15 Pro',
   price: 477.41
};

function addMoneyTogether(arr1, arr2) {
   moneyNow = arr1.reduce((accumulator, currentValue) => accumulator + currentValue);
   allMoney = arr2.reduce((accumulator, currentValue) => accumulator + currentValue) + moneyNow;
    return `You currently have $${moneyNow} and will have $${allMoney} eventually ($${allMoney - moneyNow} in jobs later)`;
};

console.log(addMoneyTogether(moneyNow, allMoney));

   // Taking in the price for the phone and subtracting it from what I have

function subtractPriceOfPhone(phone) {
   let moneyNowAftPhone = (moneyNow - phone.price).toFixed(2);
   let allMoneyAftPhone = (allMoney - phone.price).toFixed(2);
   return `You will have $${moneyNowAftPhone} if you buy right now & $${allMoneyAftPhone} if you buy later`;
};

console.log(subtractPriceOfPhone(phone));