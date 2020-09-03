//Given the following array:
//[{"name":"Luis","age":25},{"name":"Osuna","age":29},{"name":"Diego","age":17},{"name":"Tulio","age":31},{"name":"William","age":31}]

//1.Write a function that returns an array of people that are under 26 years old.
let people = [{"name":"Luis","age":25},{"name":"Osuna","age":29},{"name":"Diego","age":17},{"name":"Tulio","age":31},{"name":"William","age":31}];

let under26 = function (array){
    let under26 = [];
    array.forEach(element => {
        if(element.age < 26){
            under26.push(element);
        };
    });
    return under26;
};

console.log("These are the results for people under 26 years");
let peopleunder26 = under26(people);
peopleunder26.forEach(element => {
    console.log(element);
});


//2.Write a function that returns an array of people with the name Diego
let Diego = function (array){
    let NameDiego = [];
    array.forEach(element => {
        if(element.name === "Diego"){
            NameDiego.push(element);
        };
    });
    return NameDiego;
};

console.log("These are the results for people that its name is Diego");
let MyDiego = Diego(people);
MyDiego.forEach(element => {
    console.log(element);
});