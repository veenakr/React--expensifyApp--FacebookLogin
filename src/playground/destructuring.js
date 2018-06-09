//Object Destructuring

// const person = {
//     name: 'Veena',
//     age: 24,
//     location: {
//         city: 'Bangalore',
//         temp: '30'
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temparature } = person.location;

// console.log(`${firstName} is ${age}`);

// if (city && temparature) {
//     console.log(`It's ${temparature} in ${city}`);
// }

const book = {
    title: 'Two States',
    author: 'Chethan Bhagath',
    publisher: {
        name: 'TVF Publications'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`${publisherName}`);


//array destructuring

// const address = ['38 1st Main Road','Bangalore','India','560003'];

// const [, city , country = "US"] = address;
// console.log(`You are in ${city} ${country}`);


const items = ['Coffee (hot)', 10, 20, 30];
const [item, , medium] = items;

console.log(`A medium ${item} costs ${medium}`);