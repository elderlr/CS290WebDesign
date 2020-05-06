//Laura Elder's attempt at Assignment 3
//This really helped me understand prototypes a lot https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_prototype6
// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
    this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
    this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
    this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
    this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
    new Student("Pam", "Art", 2, "Art"),
    new Student("Michael", "Business", 4, "Improv"),
    new Student("Dwight", "Horticulture", 1, "Karate"),
    new Student("Jim", "Sports Science", 2, "Guitar"),
    new Student("Angela", "Accounting", 4, "Cat"),
    new Student("Toby", "Human Resources", 3, "Photography")
];
//make logMe a prototype to the student object
//Object.prototype
Student.prototype.logMe = function (type) {
    if (type == true) {
        return this.name + ' - ' + this.major + ' - ' + this.yearInSchool
    } else {
        return this.name + ' - ' + this.major + ' - ' + this.yearInSchool + ' - ' + this.club
    }
};
/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
    transfer = []
    for (var i = 0; i < array.length; i++) {
        firstArr = array[i]
        var j = i + 1
        for (j; j < array.length; j++) {
            if (i != j) {
                secondArr = array[j]
                some = comparator(array[i], array[j]);
            }
            if (some == false) {
                transfer[0] = array[i]
                array[i] = array[j]
                array[j] = transfer[0]
            }
        }
    }
    console.log("*****")
    clubType = false
    if (comparator == yearComparator) {
        console.log("The students sorted by year in school are:");
        clubType = true;
    } else if (comparator == majorComparator) {
        console.log("The students sorted by major are:");
        clubType = true;
    } else if (comparator == clubComparator) {
        console.log("The students sorted by club affiliation are:");
        clubType = false;
    }

    //call logMe for each item in students
    for (p = 0; p < array.length; p++) {
        console.log(students[p].logMe(clubType));
    }
}

/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator(int1, int2) {
    if (int1 > int2) {
        return true;
    } else {
        return false;
    }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/
/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
    var one_year = student1.yearInSchool
    var two_year = student2.yearInSchool
    if (one_year > two_year) {
        return true;
    } else {
        return false;
    }
}

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
    var one_major = student1.major
    var two_major = student2.major
    var majorLetOne = one_major[0]
    var majorLetTwo = two_major[0]
    if (majorLetOne.toUpperCase() > majorLetTwo.toUpperCase()) {
        return false;
    } else {
        return true;
    }
}

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
    var one_club = student1.club
    var two_club = student2.club
    one = 0
    two = 0
    // I tried to do this with an array but was not able to get it to work :( 
    if (one_club == "Improv") {
        one = 5
    } else if (one_club == "Cat") {
        one = 4
    } else if (one_club == "Art") {
        one = 3
    } else if (one_club == "Guitar") {
        one = 2
    } else {
        one = 1
    }
    if (two_club == "Improv") {
        two = 5
    } else if (one_club == "Cat") {
        two = 4
    } else if (one_club == "Art") {
        two = 3
    } else if (one_club == "Guitar") {
        two = 2
    } else {
        two = 1
    }
    if (one > two) {
        return true;
    } else if (one == two) {
        if (student1.year > student2.year) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

sortArr(yearComparator, students)
sortArr(majorComparator, students)
sortArr(clubComparator, students)