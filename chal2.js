//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”
var name1 = "Leslie";
var name2 = "Anna";
if (name1.length > name2.length) {
console.log(
"The name " + name1 + " is longer than " + name2 + " by " + (name1.length - name2.length) + " characters"
);
} else if (name1.length < name2.length) {
console.log(
"The name " + name2 + " is longer than " + name1 + " by " + (name2.length - name1.length) + " characters"
);
} else {
console.log("Both names have the same length!");
}
