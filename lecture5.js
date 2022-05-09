// const arrFunction = (name, lastName) => `${name} ${lastName}`

// const arrFunction = (name, lastName) => {
//     return `${name} ${lastName}`
// }
// // arrFunction('niki', 'kuiumcheva')
// arrFunction('niki', 'kuiumcheva')


// if userIsChoosen html` inputs html` else html``

// ? :


let inputsHtml = ''


if(userIsChosen){
    inputsHtml = `
        <input value=${chosenUser.name} placeholder="name">
        <input value=${chosenUser.lastName} placeholder="lastName">
        <input value=${chosenUser.age} placeholder="age">
    `
}else {
    inputsHtml = ''
}



userIsChosen ? `
<input value=${chosenUser.name} placeholder="name">
<input value=${chosenUser.lastName} placeholder="lastName">
<input value=${chosenUser.age} placeholder="age">
` : ''


// true false    // აქვს მნიშვნელობა,  არ აქვს მნიშვნელობა (სიცარიელა)
// let raime;     number       string        boolean      object, array, function                 100 *= 'raime'
// undefined        0         '' ("", ``)    false                   null                    NAN (not a number) 

