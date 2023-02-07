var time = new Date().getHours();
var greeting = "Hello there";
var name = "Kristina";

// Your conditional statements here
if (time < 12) {
  greeting = "Good morning!";
} else if (time <= 18) {
  greeting = "Good afternoon!";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  console.log("Why are you still up? go to bed!");
}
// alert()
alert(`${greeting}, ${name}!`);
