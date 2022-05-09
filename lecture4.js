// // const userList = [
// //     {name: 'diana', lastName: 'Ivanidze', age: 34},
// //     {name: "Maka", lastName: 'Giorkhelidze', age: 24},
// //     {name: "Iakobi", lastName: 'Mirotadze', age: 10},
// // ]

// // userList.push({
// //     "name": 'mamuka',
// //     "last name": 'Natsvaladze',
// //     "age": 32,
// // }
// // )

// // console.log(userList)

// // var adultsList = userList.filter(filterWithAge)

// // function filterWithAge(user){
// //     // if(user.age > 18) {
// //     //     return true
// //     // }
// //     return user.age > 18
// // }

// // console.log(adultsList)
// // // var newUsersList = userList.map(showItem)


// // // function showItem(item){
// // //     console.log(item, 'უბრალოდ 1 წევრი')
// // //     return `
// // //         <a href=${item.link}>
// // //             <div>${item.name}</div>
// // //             <div>${item.lastName}</div>
// // //             <div>${item.age}</div>
// // //         </a>
// // //     `
// // // }

// // // // "", '', ``

// // // console.log(newUsersList, 'ახალი არაი')


// // var, const, let

// //var === functional scope

// // let block scope
// // const block scope // constanta
// // function testFunction () {
// //     const testVar = 12;

// //     if(true) {
// //         console.log(testVar)
// //         let testVar1 = 15;
// //     }
// //     console.log(testVar)
// // }

// // testFunction()

// // const testFunction = ()=>  {
// //     const testVar = 12;

// //     if(true) {
// //         console.log(testVar)
// //         let testVar1 = 15;
// //     }
// //     console.log(testVar)
// // }

// const newObj = {
//     name: 'mamuka',
//     lastName: 'Natsvaladze',
//     fullName: function() {
//         return this.name + ' ' + this.lastName;
//     }
// }

function newHtmlElement () {
    this.html = '',
    this.css = '',
    this.name = '',
}

// function newHtmlElement1 () {
//     this.html = '<div>Hello world</div>';
//     this.css = '* {color: red}';
//     this.name = 'mamuka';
// }


class newHtmlElement2 {
    constructor() {
        this.html = '<div>Hello world</div>';
        this.css = '* {color: red}';
        this.name = 'mamuka';
    }

    userClickOnImageUpload(url) {
        this.imageUrl = url;
    }
}


const htmlElementInObject = new newHtmlElement2 ()
console.log(htmlElementInObject)

htmlElementInObject.userClickOnImageUpload('testUrl')

console.log(htmlElementInObject)


