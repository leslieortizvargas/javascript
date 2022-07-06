//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
function myFunction() {

    
    let person = prompt("Please enter input to judge shouting, Whispering or neither");
    if (person != null) {
    let userAction = '';
    function isUpperCase(myString) {
    return (myString == myString.toUpperCase())
    };
    function isLowerCase(myString) {
    return (myString == myString.toLowerCase());
    };    
    isUpperCase(person) ? (userAction = 'Shouting') :
    (isLowerCase(person) ? (userAction = 'whispering')
    : (userAction = 'Neither'));
    console.log("The person is ", userAction);
    document.getElementById("demo").innerHTML = 
    "Hey hey hey..... " + userAction ;
}}
