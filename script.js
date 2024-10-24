let myGrade = 92;

if (myGrade >= 90) {
    console.log("Your letter grade is: A");
} else if (myGrade >= 80) {
    console.log("Your letter grade is: B");
} else if (myGrade >= 70) {
    console.log("Your letter grade is: C");
} else if (myGrade >= 60) {
    console.log("Your letter grade is: D");
} else if (myGrade < 0 || myGrade > 100) {
    console.log("Invalid grade. Please enter a number between 0 and 100.");
} else {
    console.log("Your letter grade is: F");
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// I like the if/else more because it looks a lot simpler but I imagine that the other one works a lot better only because it has more variables. 