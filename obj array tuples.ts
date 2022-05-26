let cl = console.log;
// let person : {name: string, age: number} = {
//     name: "Ravikiran",
//     age: 37,
// }
// cl(person.name);
// cl(person.age);
// cl(person.nickName);//Property 'nickName' does not exist on type '{ name: string; age: number; }'

// let person : {name: string, age: number, hobbies: string[]} = {
//     name: "Ravikiran",
//     age: 37,
//     hobbies: ['coding', 'cooking', 'cricket'],
// }

// let favr8activities: string[] = ['coding', 'cooking', 'cricket'];
// // favr8activities.push(100);//error Argument of type 'number' is not assignable to parameter of type 'string'.
// favr8activities.push('100');// No error as string passed as argument
// cl(favr8activities);

// for (let activity of favr8activities){
//     cl(activity.toLocaleUpperCase());//will get allstring methods in suggestion
// }

// for ( let hobby of person.hobbies){
//     cl(hobby.toLowerCase())//will get allstring methods in suggestion
// }

// let person:{name: string, age: number, hobbies: string[], role:[number, string]} = {
//     name: 'Varshketu',
//     age: 25,
//     hobbies: ['coding', 'cooking', 'cricket'],
//     role:[2, 'admin'],
// }

// person.role.push(1);
// cl(person);
// person.role.push('SuperAdmin');
// cl(person);

let person:{name: string, age: number, hobbies: string[], role:[number, string, boolean, boolean, boolean]} = {
    name: 'Varshketu',
    age: 25,
    hobbies: ['coding', 'cooking', 'cricket'],
    role:[1, 'Read_Only', false, true, false],
}

person.role = [10, 'Admin', false, true, false];
cl(person.role);