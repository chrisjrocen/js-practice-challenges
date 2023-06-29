/**
 * PSEUDOCODE
 * function checkAgeCategory():
    print "Please enter your year of birth:"
    yearOfBirth = readIntegerFromConsole()

    currentYear = getCurrentYear()

    age = currentYear - yearOfBirth

    if age < 18:
        print "You are a minor."
    else if age >= 18 and age <= 36:
        print "You are a youth."
    else:
        print "You are an elder."

 */

function checkAgeCategory() {
    var yearOfBirth = parseInt(prompt("Please enter your year of birth:"));
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;

    if (age < 18) {
        console.log("You are a minor.");
    } else if (age >= 18 && age <= 36) {
        console.log("You are a youth.");
    } else {
        console.log("You are an elder.");
    }
}
checkAgeCategory();
