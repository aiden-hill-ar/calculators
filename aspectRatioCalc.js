// This file will just contain an idea that randomly comes to me
   // I want to make a program that allows you to enter a picture ratio–like 4:3–and it gives you common sizes for that ratio and most importantly it allows you to enter the specific height or width you want and it will return the other dimension you need to make the correct image size
// with some research done, here's what I've found. If you divide the aspect ratio by putting the width or the height ratio first based on which size you're going to put in. e.g. 200px tall is how tall you want it to be so now you want the program to find the correct width, so say the aspect ratio is 4:3 and 3 is the height, you would divide like so: 3/4 = 0.75, 200 x 0.75 = 150. 150px is your matching width

// okay further research puts this easier (and right). If you want to find the height, you divide the height by the width (3/4). If you want to find the width, you divide the width by the height (4/3). Then you take the result and multiply it by the size of the height or width you put in and the result is the opposite of what you put in (height or width).

const aspectRatio = [4, 3];

const height = 0;
const width = 923;

// This function finds whether a value was entered for the height or width, and if there was an error
function chosenOne() {
   if (height === 0 && width > 0) {
      return 'width';
   } else if (width === 0 && height > 0) {
      return 'height';
   } else if (height < 0 || width < 0) {
      return 1;
   } else if (height === 0 && width === 0) {
      return 2;
   } else if (height > 0 && width > 0) {
      return 3;
   }
};
/* 1 means "You entered an invalid value"
   2 means "You have not entered a value"
   3 means "You have entered two values" */

// This function is a calculator to find the ratio of the aspect ratio
function ratioCalculator() {
   let ratio;
   if (chosenOne() === 'height') {
      ratio = (aspectRatio[0] / aspectRatio[1]);
   } else if (chosenOne() === 'width') {
      ratio = (aspectRatio[1] / aspectRatio[0]);
   }
   return ratio;
};

// This function takes the ratio of the aspect ratio and multiplies it by the value entered by the user to find the other value of the opposite dimension (height, width)
function findOtherDimension() {
   if (chosenOne() === 'height') {
      return `Matching Width: ${(height * ratioCalculator())}px`
   } else if (chosenOne() === 'width') {
      return `Matching Height: ${(width * ratioCalculator())}px`
   }
};

// This is the final function that does good stuff. It packages all the info together to give back to the user
function packageInfo() {
   if (chosenOne() === 'height') {
      return `You entered ${height}px as your height,
      ${findOtherDimension()}`;
   } else if (chosenOne() === 'width') {
      return `You entered ${width}px as your width,
      ${findOtherDimension()}`;
   }
};

// Yeah, this is actually the final function. I just got done talking to ChatJibitty about this and it pointed out how even though in the first function I caught the errors, it doesn't do that anymore. This is here to solve that, and it's 12 in the morning :thumbsup: :grin:
function logging() {
   const package = packageInfo()
   if (package === undefined) {
      console.log(chosenOne());
   } else {
      console.log(package);
   };
};

logging()
// P.S. This was made on Friday July 3rd and finished at 11:44 PM (Erm actually ->, 11:57 PM, stfu bitch no one asked, oh... sorry... I will just go sit in the House of Scorn now... sorry... it's technically 12:02–I SAID SHUT THE FUCK UP!!!!!! happy 4th of july, ig). I was just getting to the basics of CSS on The Odin Project's Foudations course and I had gotten about 24% of the way through with Codecademy's Full-Stack Engineer course. I only used AI once for something so simple I will let slide which was, "How to do 'not greater than or equal to' in js." Dude. Just do less than or equal to... Anyways I'm proud of myself because this solves a problem I actually had which was trying to get the right aspect ratio (scaling an image using HTML attributes) and even though I found this awesome website at https://calculateaspectratio.com/, I still took on the liberty of making this and I'm tired and I'm proud... again. !!