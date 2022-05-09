// number, boolean, string
// function


// object (კლასიკურ ობიექტს)
// key value  key-value წყვილების ერთობლიობას
// key === number || key === string 1 sityviani teqsti
var user = {
    "name": 'mamuka',
    "last name": 'Natsvaladze',
    "age": 32,
}

// console.log(user['last name'])
// console.log(user)

// massive array      0         1         2         3
// var listTypeVar = ['iakobi', 'mamuka', 'diana', 'sandro', 'marina', 'maka'];

// var i = 2
// console.log(listTypeVar[i])

// listTypeVar.length


var userList = [
    {name: 'diana', lastName: 'Ivanidze', age: 34},
    {name: "Maka", lastName: 'Giorkhelidze', age: 24},
    {name: "Iakobi", lastName: 'Mirotadze', age: 28},
    user,
]

user['balance'] = 12000
console.log(user)

delete user['balance']
console.log(user)

function log(argument){
    // argument
    console.log(argument)
}

log(5400)