// // let arr = [135623,'123412r4',1365776,'asdad',123,];


// // const logFunction = (item, index)=> {
// //     console.log('item',item)
// //     console.log('index',index)
// // }

// // arr.forEach(logFunction)
// // // map // filter, find


// class Person {
//     constructor(outerName, outerLastName, outerAge){
//         this.name = outerName
//         this.lastName = outerLastName
//         this.age = outerAge
//     }

//     grow(){
//         this.age ++;
//     }

//     marry(){
//         this.isMarried = true
//     }

// }

// const person = new Person('iakobi', 'Mirotadze', 28);


// class QartveliVajkaci extends Person {
//     static collectAll() {
//         //...
//         console.log('უბრალოდ შევკრიბეთ')
//     }

//     constructor(outerName, outerLastName, outerAge){
//         super(outerName, outerLastName, outerAge);
//         this.jobLess = this.age - 18 
//     }

//     grow(){
//         super.grow();
//         this.jobLess++ 
//     }

//     drink(amount){
//         this.drunk = amount > 5;
//     }

// }


// const geoPerson = new QartveliVajkaci('iakobi', 'Mirotadze', 28, 10);
// geoPerson.marry();
// geoPerson.grow();
// geoPerson.drink(6);

// QartveliVajkaci.collectAll();
// console.log(geoPerson)



// get set


class Person {
    constructor(outerName, outerLastName, outerAge){
        this.name = outerName
        this.lastName = outerLastName
        this.age = outerAge
    }

    set grow(amount){
        console.log('amountshi shemovida mnishvneloba :' + amount)
        this.age += amount;
    }

    marry(){
        this.isMarried = true
    }

    get fullName() {
        console.log('amushavda, get is function')
        return this.name +' ' + this.lastName
    }



}

const person = new Person('iakob', 'mirotadze', 28)

console.log(person.fullName)

console.log(person)
person.grow = 12;
// person.grow(12);

console.log(person)

