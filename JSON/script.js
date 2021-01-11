// var text =  `
//     {
//         "name" : "Shehas",
//         "age" : 21
//     }
// `


// var person = JSON.parse(text);

// console.log(person.name)

// fetch('person.json')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('person',JSON.stringify(data)))


// var value = localStorage.getItem('person')
// var str = JSON.parse(value);

// var names = [];
// var ages = [];
// for(var i=0;i<str.length;i++){
//     names.push(str[i].name);
//     ages.push(str[i].age);
// }

// console.log(names)
// console.log(ages)



fetch('person.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name)
            console.log(element.age)
        });
    } )

