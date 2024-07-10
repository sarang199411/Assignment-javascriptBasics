//Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

let age = 78;

if (age >= 0 && age <= 12) {
  console.log("Your a child");
} else if (age >= 13 && age <= 19) {
  console.log("Your a teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Your a adult");
} else if (age >= 60) {
  console.log("Your a senior");
} else {
  console.log("Enter a wrong number");
}
